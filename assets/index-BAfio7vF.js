var K_=Object.defineProperty;var c=(s,e)=>K_(s,"name",{value:e,configurable:!0});c(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}c(t,"getFetchOpts");function n(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}c(n,"processPreload")},"polyfill")();const _m="on:",hd=class hd{constructor(e,t){this.componentContext=t;const r=new DOMParser().parseFromString(e,"text/html").querySelector("body");if(this.parsedFragment=document.createDocumentFragment(),r)for(const o of[...r.children])this.parsedFragment.appendChild(o)}processEventListeners(){this.getRootElements().forEach(e=>{this.addEventListenersToNodes(e)})}getRootElements(){return[...this.parsedFragment.children]}addEventListenersToNodes(e){const t=e.getAttributeNames().filter(n=>n.startsWith(_m));for(const n of t){const i=n.substring(_m.length),r=e.getAttribute(n);r&&(e.addEventListener(i,new Function(`return ${r}`).apply(this.componentContext)?.bind(this.componentContext)),e.removeAttribute(n))}for(const n of e.children)this.addEventListenersToNodes(n)}};c(hd,"HTMLParser");let Uc=hd;const J_=c((s,e)=>{const t=Object.getOwnPropertyNames(e),n=Object.values(e);return new Function(...t,`return \`${s}\`;`).apply(e,...n)},"evaluateStringTemplate"),dd=class dd extends HTMLElement{constructor(){super(),this.shadowDOM=this.attachShadow({mode:"open"})}connectedCallback(){this.onBeforeInit?.();const e=J_(this.template,this);this.htmlParser=new Uc(e,this),this.styles&&this.processStyles(),this.template&&this.shadowDOM.append(...this.processTemplate()),this.onInit?.()}processStyles(){const e=new CSSStyleSheet;e.replaceSync(this.styles),this.shadowDOM.adoptedStyleSheets=[e]}processTemplate(){return this.htmlParser.processEventListeners(),this.htmlParser.getRootElements()}getElement(e){return this.shadowDOM.querySelector(`*[\\:${e}]`)}};c(dd,"Component");let Tt=dd;const Ct=c(s=>e=>{Reflect.defineProperty(e.prototype,"template",{value:s})},"template"),$t=c(s=>e=>{const t=[s];e.prototype.styles&&t.push(e.prototype.styles),Reflect.defineProperty(e.prototype,"styles",{value:t.join(`

`)})},"styles"),Va=c(s=>s.replace(/[A-Z]/g,e=>`-${e.toLowerCase()}`),"camelCaseToKebabCase"),Z_=c(s=>Va(s).substring(1),"pascalCaseToKebabCase"),Dn=c(s=>(e,t)=>{const n=Va(t.toString()),i={get(){return this.getAttribute(n)},set(r){this.getAttribute(n)||this.setAttribute(n,r)}};return t!==void 0?Q_(e,t,i):ev(e,i)},"property"),Q_=c((s,e,t)=>{Reflect.defineProperty(s,e,t)},"legacyProperty"),ev=c((s,e)=>({kind:"field",key:s?.key,placement:"own",descriptor:e}),"currentProperty"),St=c(s=>{const e=Z_(s.name);customElements.define(`mp-${e}`,s)},"registerComponent"),tv='<${this.level} class="heading"><slot></slot></${this.level}>\n',nv=`.heading {
  all: unset;
}

:host {
  display: block;
  font-family: var(--font-family-heading);
  font-weight: bold;
}

:host([level='h1']) {
  font-size: 3rem;
  margin: 1.5rem 0;
}

:host([level='h2']) {
  font-size: 2rem;
  margin: 1.325rem 0;
}

:host([level='h3']) {
  font-size: 1.5rem;
  margin: 1.25rem 0;
}

:host([level='h4']) {
  font-size: 1.25rem;
  margin: 1.25rem 0;
}

:host([level='h5']) {
  font-size: 1rem;
  margin: 1.25rem 0;
}

:host([level='h6']) {
  font-size: 0.825rem;
  margin: 1.25rem 0;
}
`;var iv=Object.defineProperty,sv=Object.getOwnPropertyDescriptor,o_=c((s,e,t,n)=>{for(var i=n>1?void 0:n?sv(e,t):e,r=s.length-1,o;r>=0;r--)(o=s[r])&&(i=(n?o(e,t,i):o(i))||i);return n&&i&&iv(e,t,i),i},"__decorateClass$j"),bs;let Go=(bs=class extends Tt{},c(bs,"Heading"),bs);o_([Dn()],Go.prototype,"level",2);Go=o_([Ct(tv),$t(nv)],Go);St(Go);const rv=`<!-- "on:click" is not set here because we can add "on:click" on the
host element and event bubbling will make that "on:click" run on
clicking this button. -->
<button class="arrow-button">
  <span class="arrow-button-label"><slot></slot></span>
  <div class="arrow-button-icon">
    <div class="bar top"></div>
    <div class="bar mid"></div>
    <div class="bar bottom"></div>
  </div>
</button>
`,ov=`:host {
  --arrow-width: 3.5rem;
  --arrow-height: 1.4125rem;
}

.arrow-button {
  all: unset;
  position: relative;
  cursor: pointer;
  min-width: var(--arrow-width);
  min-height: var(--arrow-height);
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
}

.arrow-button-label {
  opacity: 0;
  transition: all 0.5s;
}

.arrow-button:focus-visible {
  outline: var(--focus-outline);
}

.arrow-button-icon {
  position: absolute;
  top: calc(50% - var(--arrow-height) / 2);
  left: calc(50% - var(--arrow-width) / 2);
  height: var(--arrow-height);
  width: var(--arrow-width);
  transition: all 0.5s;
}

.arrow-button-icon > .bar {
  position: absolute;
  top: calc(50% - 0.125rem);
  background: var(--primary);
  border-radius: 0.25rem;
  height: var(--line-width);
  transition: all 0.5s;

  /* Assume right direction by default. */
  right: 0;
  transform-origin: calc(1rem - 0.1rem) center;
}

:host([direction='left']) > .arrow-button > .arrow-button-icon > .bar {
  left: 0;
  transform-origin: 0.1rem center;
}

.arrow-button-icon > .bar.bottom {
  transform: rotateZ(45deg);
  width: 1rem;
}

.arrow-button-icon > .bar.mid {
  width: var(--arrow-width);
}

.arrow-button-icon > .bar.top {
  transform: rotateZ(-45deg);
  width: 1rem;
}

/* On Mouse Hover */
.arrow-button:hover > .arrow-button-icon,
/* On Keyboard Focus */
.arrow-button:focus-visible > .arrow-button-icon,
/* When \`active\` Attribute is Set */
:host([active]) > .arrow-button > .arrow-button-icon {
  left: calc(100% - var(--arrow-width) + 1.5rem);
}

.arrow-button:hover > .arrow-button-icon > .bar.mid,
.arrow-button:focus-visible > .arrow-button-icon > .bar.mid,
:host([active]) > .arrow-button > .arrow-button-icon > .bar.mid {
  width: 0;
}

.arrow-button:hover > .arrow-button-label,
.arrow-button:focus-visible > .arrow-button-label,
:host([active]) > .arrow-button > .arrow-button-label {
  opacity: 1;
}

:host([direction='left']) > .arrow-button:hover > .arrow-button-icon,
:host([direction='left']) > .arrow-button:focus-visible > .arrow-button-icon,
:host([direction='left'][active]) > .arrow-button > .arrow-button-icon {
  right: 100%;
  left: -1.5rem;
}
`;var av=Object.defineProperty,cv=Object.getOwnPropertyDescriptor,Wh=c((s,e,t,n)=>{for(var i=n>1?void 0:n?cv(e,t):e,r=s.length-1,o;r>=0;r--)(o=s[r])&&(i=(n?o(e,t,i):o(i))||i);return n&&i&&av(e,t,i),i},"__decorateClass$i"),Ss;let Cr=(Ss=class extends Tt{},c(Ss,"ArrowButton"),Ss);Wh([Dn()],Cr.prototype,"direction",2);Wh([Dn()],Cr.prototype,"label",2);Cr=Wh([Ct(rv),$t(ov)],Cr);St(Cr);const lv="modulepreload",uv=c(function(s){return"https://fawadali.dev/"+s},"assetsURL"),vm={},at=c(function(e,t,n){let i=Promise.resolve();if(t&&t.length>0){let u=function(h){return Promise.all(h.map(d=>Promise.resolve(d).then(f=>({status:"fulfilled",value:f}),f=>({status:"rejected",reason:f}))))};var o=u;c(u,"allSettled"),document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),l=a?.nonce||a?.getAttribute("nonce");i=u(t.map(h=>{if(h=uv(h),h in vm)return;vm[h]=!0;const d=h.endsWith(".css"),f=d?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${h}"]${f}`))return;const p=document.createElement("link");if(p.rel=d?"stylesheet":lv,d||(p.as="script"),p.crossOrigin="",p.href=h,l&&p.setAttribute("nonce",l),document.head.appendChild(p),d)return new Promise((_,v)=>{p.addEventListener("load",_),p.addEventListener("error",()=>v(new Error(`Unable to preload CSS for ${h}`)))})}))}function r(a){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=a,window.dispatchEvent(l),!l.defaultPrevented)throw a}return c(r,"handlePreloadError"),i.then(a=>{for(const l of a||[])l.status==="rejected"&&r(l.reason);return e().catch(r)})},"preload"),xm=c((s,e,t)=>{const n=s[e];return n?typeof n=="function"?n():Promise.resolve(n):new Promise((i,r)=>{(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(r.bind(null,new Error("Unknown variable dynamic import: "+e+(e.split("/").length!==t?". Note that variables only represent file names one level deep.":""))))})},"__variableDynamicImportRuntimeHelper"),hv=`:host {
  display: inline-block;
}

svg {
  width: 100%;
  height: 100%;
}
`;var dv=Object.defineProperty,fv=Object.getOwnPropertyDescriptor,Xh=c((s,e,t,n)=>{for(var i=n>1?void 0:n?fv(e,t):e,r=s.length-1,o;r>=0;r--)(o=s[r])&&(i=(n?o(e,t,i):o(i))||i);return n&&i&&dv(e,t,i),i},"__decorateClass$h"),Ms;let Pr=(Ms=class extends Tt{onInit(){this.loadIcon()}async loadIcon(){const e=this.icon?await this.importIconFromAssets():await this.fetchIcon();this.shadowDOM.innerHTML=e,this.shadowDOM.firstElementChild?.setAttribute("part","svg")}async fetchIcon(){return await(await fetch(this.src)).text()}async importIconFromAssets(){if(this.icon.includes("/")){const[e,t]=this.icon.split("/");return(await xm(Object.assign({"../../../assets/icons/dev/angularjs.svg":c(()=>at(()=>import("./angularjs-Dp5rC_a1.js"),[]),"../../../assets/icons/dev/angularjs.svg"),"../../../assets/icons/dev/aws.svg":c(()=>at(()=>import("./aws-m6ZH-kyL.js"),[]),"../../../assets/icons/dev/aws.svg"),"../../../assets/icons/dev/cplusplus.svg":c(()=>at(()=>import("./cplusplus-CNWWsQIM.js"),[]),"../../../assets/icons/dev/cplusplus.svg"),"../../../assets/icons/dev/graphql.svg":c(()=>at(()=>import("./graphql-DXLf6Cdz.js"),[]),"../../../assets/icons/dev/graphql.svg"),"../../../assets/icons/dev/java.svg":c(()=>at(()=>import("./java-BkuGeyTS.js"),[]),"../../../assets/icons/dev/java.svg"),"../../../assets/icons/dev/javascript.svg":c(()=>at(()=>import("./javascript-DDC1CPuv.js"),[]),"../../../assets/icons/dev/javascript.svg"),"../../../assets/icons/dev/kotlin.svg":c(()=>at(()=>import("./kotlin-Bxzp5xrd.js"),[]),"../../../assets/icons/dev/kotlin.svg"),"../../../assets/icons/dev/mongodb.svg":c(()=>at(()=>import("./mongodb-BCWtQfdm.js"),[]),"../../../assets/icons/dev/mongodb.svg"),"../../../assets/icons/dev/mysql.svg":c(()=>at(()=>import("./mysql-CjQNA-fq.js"),[]),"../../../assets/icons/dev/mysql.svg"),"../../../assets/icons/dev/nodejs.svg":c(()=>at(()=>import("./nodejs-EI9uqLs_.js"),[]),"../../../assets/icons/dev/nodejs.svg"),"../../../assets/icons/dev/php.svg":c(()=>at(()=>import("./php-M9g3Z2-n.js"),[]),"../../../assets/icons/dev/php.svg"),"../../../assets/icons/dev/postgresql.svg":c(()=>at(()=>import("./postgresql-C7jF8uAA.js"),[]),"../../../assets/icons/dev/postgresql.svg"),"../../../assets/icons/dev/react.svg":c(()=>at(()=>import("./react-BfT4JLvc.js"),[]),"../../../assets/icons/dev/react.svg"),"../../../assets/icons/dev/spring.svg":c(()=>at(()=>import("./spring-BWtxD4Pr.js"),[]),"../../../assets/icons/dev/spring.svg"),"../../../assets/icons/dev/typescript.svg":c(()=>at(()=>import("./typescript-D0TbaYWg.js"),[]),"../../../assets/icons/dev/typescript.svg"),"../../../assets/icons/social/email.svg":c(()=>at(()=>import("./email-CWr6QoES.js"),[]),"../../../assets/icons/social/email.svg"),"../../../assets/icons/social/facebook.svg":c(()=>at(()=>import("./facebook-C2D9Hbpy.js"),[]),"../../../assets/icons/social/facebook.svg"),"../../../assets/icons/social/github.svg":c(()=>at(()=>import("./github-BLMasBwa.js"),[]),"../../../assets/icons/social/github.svg"),"../../../assets/icons/social/linkedin.svg":c(()=>at(()=>import("./linkedin-BPjWRcho.js"),[]),"../../../assets/icons/social/linkedin.svg")}),`../../../assets/icons/${e}/${t}.svg`,7)).default}else return(await xm(Object.assign({"../../../assets/icons/about-continent.svg":c(()=>at(()=>import("./about-continent-CTGD7rx1.js"),[]),"../../../assets/icons/about-continent.svg"),"../../../assets/icons/accessibility.svg":c(()=>at(()=>import("./accessibility-AkkeFAHp.js"),[]),"../../../assets/icons/accessibility.svg"),"../../../assets/icons/arrow.svg":c(()=>at(()=>import("./arrow-CGB5doHk.js"),[]),"../../../assets/icons/arrow.svg"),"../../../assets/icons/code.svg":c(()=>at(()=>import("./code-Bxv5tjxA.js"),[]),"../../../assets/icons/code.svg"),"../../../assets/icons/connect-continent.svg":c(()=>at(()=>import("./connect-continent-C9-03iB-.js"),[]),"../../../assets/icons/connect-continent.svg"),"../../../assets/icons/life-continent.svg":c(()=>at(()=>import("./life-continent-4FlchGgH.js"),[]),"../../../assets/icons/life-continent.svg"),"../../../assets/icons/link.svg":c(()=>at(()=>import("./link-D-No-mmY.js"),[]),"../../../assets/icons/link.svg"),"../../../assets/icons/projects-continent.svg":c(()=>at(()=>import("./projects-continent-Bhb5gNvo.js"),[]),"../../../assets/icons/projects-continent.svg"),"../../../assets/icons/work-continent.svg":c(()=>at(()=>import("./work-continent-DBEVwq92.js"),[]),"../../../assets/icons/work-continent.svg")}),`../../../assets/icons/${this.icon}.svg`,6)).default}},c(Ms,"Icon"),Ms);Xh([Dn()],Pr.prototype,"src",2);Xh([Dn()],Pr.prototype,"icon",2);Pr=Xh([$t(hv)],Pr);St(Pr);const pv=`<!-- "on:click" is not set here because we can add "on:click" on the
host element and event bubbling will make that "on:click" run on
clicking this button. -->
<\${this.tag} class="circle-button" \${this.link ? \`href="\${this.link}"\` : ''}>
  <mp-icon icon="\${this.icon}" class="circle-button-icon" part="icon"></mp-icon>
  <span class="circle-button-tooltip \${this.tooltipPosition}">
    <slot></slot>
  </span>
</\${this.tag}>
`,mv=`.circle-button {
  all: unset;
  display: inline-block;
  padding: 0.5rem;
  margin-right: 0.5rem;
  border: var(--line-width) solid var(--primary);
  border-radius: 50%;
  color: var(--primary);
  position: relative;
  cursor: pointer;
  transition: all 0.5s;
}

.circle-button:focus-visible {
  outline: var(--focus-outline);
}

.circle-button:hover,
.circle-button:focus-visible {
  background: var(--primary);
}

.circle-button:hover .circle-button-icon,
.circle-button:focus-visible .circle-button-icon {
  color: var(--bg-primary);
}

.circle-button-icon {
  display: block;
  width: 1.5rem;
  height: 1.5rem;
  transition: all 0.5s;
}

.circle-button-tooltip {
  position: absolute;
  background: var(--bg-primary-dim);
  box-shadow: 0 0 0.25rem var(--primary-dim);
  border-radius: 0.25rem;
  padding: 0.25rem 0.5rem;
  white-space: nowrap;
  visibility: hidden;
  opacity: 0;
  transition: all 0.5s;
  pointer-events: none;
  z-index: var(--layer-front);
}

.circle-button-tooltip.top {
  bottom: calc(100% + 0.75rem);
  left: 50%;
  transform: translateX(-50%);
}

.circle-button-tooltip.right {
  top: 50%;
  left: calc(100% + 0.75rem);
  transform: translateY(-50%);
}

.circle-button-tooltip.bottom {
  top: calc(100% + 0.75rem);
  left: 50%;
  transform: translateX(-50%);
}

.circle-button-tooltip.left {
  top: 50%;
  right: calc(100% + 0.75rem);
  transform: translateY(-50%);
}

.circle-button:hover > .circle-button-tooltip,
.circle-button:focus-visible > .circle-button-tooltip {
  visibility: visible;
  opacity: 1;
}
`;var gv=Object.defineProperty,_v=Object.getOwnPropertyDescriptor,Ga=c((s,e,t,n)=>{for(var i=n>1?void 0:n?_v(e,t):e,r=s.length-1,o;r>=0;r--)(o=s[r])&&(i=(n?o(e,t,i):o(i))||i);return n&&i&&gv(e,t,i),i},"__decorateClass$g"),Es;let Ys=(Es=class extends Tt{constructor(){super(...arguments),this.tooltipPosition="top"}onBeforeInit(){this.tag=this.link?"a":"button"}},c(Es,"CircleButton"),Es);Ga([Dn()],Ys.prototype,"icon",2);Ga([Dn()],Ys.prototype,"tooltipPosition",2);Ga([Dn()],Ys.prototype,"link",2);Ys=Ga([Ct(pv),$t(mv)],Ys);St(Ys);const vv=`<div class="backdrop"></div>
<div class="backdrop-focus">
  <slot></slot>
</div>
`,xv=`:host([active]) > .backdrop {
  position: fixed;
  left: 0;
  top: 0;
  height: 100vh;
  width: 100vw;
  z-index: var(--layer-base);
}

.backdrop-focus {
  position: relative;
  z-index: var(--layer-front);
}
`;var yv=Object.getOwnPropertyDescriptor,bv=c((s,e,t,n)=>{for(var i=n>1?void 0:n?yv(e,t):e,r=s.length-1,o;r>=0;r--)(o=s[r])&&(i=o(i)||i);return i},"__decorateClass$f"),ws;let Fc=(ws=class extends Tt{},c(ws,"Backdrop"),ws);Fc=bv([Ct(vv),$t(xv)],Fc);St(Fc);const Sv=`<slot name="time" class="timeline-event-time"></slot>
<slot name="title" class="timeline-event-title"></slot>
<slot name="subtitle" class="timeline-event-subtitle"></slot>
<p><slot></slot></p>
`,Mv=`:host {
  display: block;
  position: relative;
  /* 1.25rem for "::before" and 0.5rem for spacing. */
  margin-left: 1.75rem;
}

:host::before {
  content: '';
  box-sizing: border-box;
  position: absolute;
  right: calc(100% + 0.5rem);
  width: 1.25rem;
  height: 1.25rem;
  border: var(--line-width) solid var(--primary);
  border-radius: 50%;
}

:host::after {
  content: '';
  position: absolute;
  background: var(--primary);
  top: 1.25rem;
  right: calc(100% + 0.5rem + 1.25rem / 2 - var(--line-width) / 2);
  width: var(--line-width);
  height: calc(100% - 0.25rem);
}

.timeline-event-time::slotted(span),
.timeline-event-subtitle::slotted(span) {
  font-size: 0.75rem;
  color: var(--primary-dim);
}

.timeline-event-title::slotted(*) {
  margin: 0;
}
`;var Ev=Object.getOwnPropertyDescriptor,wv=c((s,e,t,n)=>{for(var i=n>1?void 0:n?Ev(e,t):e,r=s.length-1,o;r>=0;r--)(o=s[r])&&(i=o(i)||i);return i},"__decorateClass$e"),Ts;let Bc=(Ts=class extends Tt{},c(Ts,"TimelineEvent"),Ts);Bc=wv([Ct(Sv),$t(Mv)],Bc);St(Bc);const Tv=`<slot class="timeline-event"></slot>
`,Av=`/* Hide the vertical bar for the last timeline event. */
.timeline-event::slotted(*:last-child)::after {
  display: none;
}
`;var Rv=Object.getOwnPropertyDescriptor,Cv=c((s,e,t,n)=>{for(var i=n>1?void 0:n?Rv(e,t):e,r=s.length-1,o;r>=0;r--)(o=s[r])&&(i=o(i)||i);return i},"__decorateClass$d"),As;let kc=(As=class extends Tt{},c(As,"Timeline"),As);kc=Cv([Ct(Tv),$t(Av)],kc);St(kc);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const jh="179",Pv=0,ym=1,Lv=2,a_=1,Iv=2,zn=3,Yn=0,jt=1,xn=2,ci=0,gs=1,bm=2,Sm=3,Mm=4,Dv=5,Ii=100,Ov=101,Nv=102,Uv=103,Fv=104,Bv=200,kv=201,Hv=202,zv=203,Hc=204,zc=205,Vv=206,Gv=207,Wv=208,Xv=209,jv=210,qv=211,Yv=212,$v=213,Kv=214,Vc=0,Gc=1,Wc=2,$s=3,Xc=4,jc=5,qc=6,Yc=7,qh=0,Jv=1,Zv=2,li=0,Qv=1,e0=2,t0=3,n0=4,i0=5,s0=6,r0=7,Em="attached",o0="detached",c_=300,Ks=301,Js=302,$c=303,Kc=304,Wa=306,Zs=1e3,ai=1001,Wo=1002,Vt=1003,l_=1004,gr=1005,en=1006,Fo=1007,Wn=1008,Cn=1009,u_=1010,h_=1011,Lr=1012,Yh=1013,ki=1014,bn=1015,to=1016,$h=1017,Kh=1018,Ir=1020,d_=35902,f_=1021,p_=1022,un=1023,Dr=1026,Or=1027,Jh=1028,Zh=1029,m_=1030,Qh=1031,ed=1033,Bo=33776,ko=33777,Ho=33778,zo=33779,Jc=35840,Zc=35841,Qc=35842,el=35843,tl=36196,nl=37492,il=37496,sl=37808,rl=37809,ol=37810,al=37811,cl=37812,ll=37813,ul=37814,hl=37815,dl=37816,fl=37817,pl=37818,ml=37819,gl=37820,_l=37821,Vo=36492,vl=36494,xl=36495,g_=36283,yl=36284,bl=36285,Sl=36286,Nr=2300,Ur=2301,Ya=2302,wm=2400,Tm=2401,Am=2402,a0=2500,c0=0,__=1,Ml=2,l0=3200,u0=3201,td=0,h0=1,oi="",Lt="srgb",Gt="srgb-linear",Xo="linear",ct="srgb",ji=7680,Rm=519,d0=512,f0=513,p0=514,v_=515,m0=516,g0=517,_0=518,v0=519,El=35044,Cm="300 es",Rn=2e3,jo=2001,fd=class fd{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const i=n[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,e);e.target=null}}};c(fd,"EventDispatcher");let $n=fd;const Ut=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Pm=1234567;const br=Math.PI/180,Qs=180/Math.PI;function hn(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ut[s&255]+Ut[s>>8&255]+Ut[s>>16&255]+Ut[s>>24&255]+"-"+Ut[e&255]+Ut[e>>8&255]+"-"+Ut[e>>16&15|64]+Ut[e>>24&255]+"-"+Ut[t&63|128]+Ut[t>>8&255]+"-"+Ut[t>>16&255]+Ut[t>>24&255]+Ut[n&255]+Ut[n>>8&255]+Ut[n>>16&255]+Ut[n>>24&255]).toLowerCase()}c(hn,"generateUUID");function Ke(s,e,t){return Math.max(e,Math.min(t,s))}c(Ke,"clamp");function nd(s,e){return(s%e+e)%e}c(nd,"euclideanModulo");function x0(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}c(x0,"mapLinear");function y0(s,e,t){return s!==e?(t-s)/(e-s):0}c(y0,"inverseLerp");function Sr(s,e,t){return(1-t)*s+t*e}c(Sr,"lerp");function b0(s,e,t,n){return Sr(s,e,1-Math.exp(-t*n))}c(b0,"damp");function S0(s,e=1){return e-Math.abs(nd(s,e*2)-e)}c(S0,"pingpong");function M0(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}c(M0,"smoothstep");function E0(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}c(E0,"smootherstep");function w0(s,e){return s+Math.floor(Math.random()*(e-s+1))}c(w0,"randInt");function T0(s,e){return s+Math.random()*(e-s)}c(T0,"randFloat");function A0(s){return s*(.5-Math.random())}c(A0,"randFloatSpread");function R0(s){s!==void 0&&(Pm=s);let e=Pm+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}c(R0,"seededRandom");function C0(s){return s*br}c(C0,"degToRad");function P0(s){return s*Qs}c(P0,"radToDeg");function L0(s){return(s&s-1)===0&&s!==0}c(L0,"isPowerOfTwo");function I0(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}c(I0,"ceilPowerOfTwo");function D0(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}c(D0,"floorPowerOfTwo");function O0(s,e,t,n,i){const r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),u=r((e+n)/2),h=o((e+n)/2),d=r((e-n)/2),f=o((e-n)/2),p=r((n-e)/2),_=o((n-e)/2);switch(i){case"XYX":s.set(a*h,l*d,l*f,a*u);break;case"YZY":s.set(l*f,a*h,l*d,a*u);break;case"ZXZ":s.set(l*d,l*f,a*h,a*u);break;case"XZX":s.set(a*h,l*_,l*p,a*u);break;case"YXY":s.set(l*p,a*h,l*_,a*u);break;case"ZYZ":s.set(l*_,l*p,a*h,a*u);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}c(O0,"setQuaternionFromProperEuler");function yn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}c(yn,"denormalize");function rt(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}c(rt,"normalize");const dn={DEG2RAD:br,RAD2DEG:Qs,generateUUID:hn,clamp:Ke,euclideanModulo:nd,mapLinear:x0,inverseLerp:y0,lerp:Sr,damp:b0,pingpong:S0,smoothstep:M0,smootherstep:E0,randInt:w0,randFloat:T0,randFloatSpread:A0,seededRandom:R0,degToRad:C0,radToDeg:P0,isPowerOfTwo:L0,ceilPowerOfTwo:I0,floorPowerOfTwo:D0,setQuaternionFromProperEuler:O0,normalize:rt,denormalize:yn},Aa=class Aa{constructor(e=0,t=0){Aa.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ke(this.x,e.x,t.x),this.y=Ke(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ke(this.x,e,t),this.y=Ke(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ke(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ke(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*i+e.x,this.y=r*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};c(Aa,"Vector2");let le=Aa;const pd=class pd{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,o,a){let l=n[i+0],u=n[i+1],h=n[i+2],d=n[i+3];const f=r[o+0],p=r[o+1],_=r[o+2],v=r[o+3];if(a===0){e[t+0]=l,e[t+1]=u,e[t+2]=h,e[t+3]=d;return}if(a===1){e[t+0]=f,e[t+1]=p,e[t+2]=_,e[t+3]=v;return}if(d!==v||l!==f||u!==p||h!==_){let g=1-a;const m=l*f+u*p+h*_+d*v,A=m>=0?1:-1,E=1-m*m;if(E>Number.EPSILON){const C=Math.sqrt(E),I=Math.atan2(C,m*A);g=Math.sin(g*I)/C,a=Math.sin(a*I)/C}const y=a*A;if(l=l*g+f*y,u=u*g+p*y,h=h*g+_*y,d=d*g+v*y,g===1-a){const C=1/Math.sqrt(l*l+u*u+h*h+d*d);l*=C,u*=C,h*=C,d*=C}}e[t]=l,e[t+1]=u,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,i,r,o){const a=n[i],l=n[i+1],u=n[i+2],h=n[i+3],d=r[o],f=r[o+1],p=r[o+2],_=r[o+3];return e[t]=a*_+h*d+l*p-u*f,e[t+1]=l*_+h*f+u*d-a*p,e[t+2]=u*_+h*p+a*f-l*d,e[t+3]=h*_-a*d-l*f-u*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,u=a(n/2),h=a(i/2),d=a(r/2),f=l(n/2),p=l(i/2),_=l(r/2);switch(o){case"XYZ":this._x=f*h*d+u*p*_,this._y=u*p*d-f*h*_,this._z=u*h*_+f*p*d,this._w=u*h*d-f*p*_;break;case"YXZ":this._x=f*h*d+u*p*_,this._y=u*p*d-f*h*_,this._z=u*h*_-f*p*d,this._w=u*h*d+f*p*_;break;case"ZXY":this._x=f*h*d-u*p*_,this._y=u*p*d+f*h*_,this._z=u*h*_+f*p*d,this._w=u*h*d-f*p*_;break;case"ZYX":this._x=f*h*d-u*p*_,this._y=u*p*d+f*h*_,this._z=u*h*_-f*p*d,this._w=u*h*d+f*p*_;break;case"YZX":this._x=f*h*d+u*p*_,this._y=u*p*d+f*h*_,this._z=u*h*_-f*p*d,this._w=u*h*d-f*p*_;break;case"XZY":this._x=f*h*d-u*p*_,this._y=u*p*d-f*h*_,this._z=u*h*_+f*p*d,this._w=u*h*d+f*p*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],o=t[1],a=t[5],l=t[9],u=t[2],h=t[6],d=t[10],f=n+a+d;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(h-l)*p,this._y=(r-u)*p,this._z=(o-i)*p}else if(n>a&&n>d){const p=2*Math.sqrt(1+n-a-d);this._w=(h-l)/p,this._x=.25*p,this._y=(i+o)/p,this._z=(r+u)/p}else if(a>d){const p=2*Math.sqrt(1+a-n-d);this._w=(r-u)/p,this._x=(i+o)/p,this._y=.25*p,this._z=(l+h)/p}else{const p=2*Math.sqrt(1+d-n-a);this._w=(o-i)/p,this._x=(r+u)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ke(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,o=e._w,a=t._x,l=t._y,u=t._z,h=t._w;return this._x=n*h+o*a+i*u-r*l,this._y=i*h+o*l+r*a-n*u,this._z=r*h+o*u+n*l-i*a,this._w=o*h-n*a-i*l-r*u,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,r=this._z,o=this._w;let a=o*e._w+n*e._x+i*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-t;return this._w=p*o+t*this._w,this._x=p*n+t*this._x,this._y=p*i+t*this._y,this._z=p*r+t*this._z,this.normalize(),this}const u=Math.sqrt(l),h=Math.atan2(u,a),d=Math.sin((1-t)*h)/u,f=Math.sin(t*h)/u;return this._w=o*d+this._w*f,this._x=n*d+this._x*f,this._y=i*d+this._y*f,this._z=r*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}};c(pd,"Quaternion");let wt=pd;const Ra=class Ra{constructor(e=0,t=0,n=0){Ra.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Lm.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Lm.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,o=e.y,a=e.z,l=e.w,u=2*(o*i-a*n),h=2*(a*t-r*i),d=2*(r*n-o*t);return this.x=t+l*u+o*d-a*h,this.y=n+l*h+a*u-r*d,this.z=i+l*d+r*h-o*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ke(this.x,e.x,t.x),this.y=Ke(this.y,e.y,t.y),this.z=Ke(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ke(this.x,e,t),this.y=Ke(this.y,e,t),this.z=Ke(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ke(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=i*l-r*a,this.y=r*o-n*l,this.z=n*a-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return $a.copy(this).projectOnVector(e),this.sub($a)}reflect(e){return this.sub($a.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ke(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};c(Ra,"Vector3");let R=Ra;const $a=new R,Lm=new wt,Ca=class Ca{constructor(e,t,n,i,r,o,a,l,u){Ca.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,l,u)}set(e,t,n,i,r,o,a,l,u){const h=this.elements;return h[0]=e,h[1]=i,h[2]=a,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],u=n[1],h=n[4],d=n[7],f=n[2],p=n[5],_=n[8],v=i[0],g=i[3],m=i[6],A=i[1],E=i[4],y=i[7],C=i[2],I=i[5],P=i[8];return r[0]=o*v+a*A+l*C,r[3]=o*g+a*E+l*I,r[6]=o*m+a*y+l*P,r[1]=u*v+h*A+d*C,r[4]=u*g+h*E+d*I,r[7]=u*m+h*y+d*P,r[2]=f*v+p*A+_*C,r[5]=f*g+p*E+_*I,r[8]=f*m+p*y+_*P,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],u=e[7],h=e[8];return t*o*h-t*a*u-n*r*h+n*a*l+i*r*u-i*o*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],u=e[7],h=e[8],d=h*o-a*u,f=a*l-h*r,p=u*r-o*l,_=t*d+n*f+i*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/_;return e[0]=d*v,e[1]=(i*u-h*n)*v,e[2]=(a*n-i*o)*v,e[3]=f*v,e[4]=(h*t-i*l)*v,e[5]=(i*r-a*t)*v,e[6]=p*v,e[7]=(n*l-u*t)*v,e[8]=(o*t-n*r)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,o,a){const l=Math.cos(r),u=Math.sin(r);return this.set(n*l,n*u,-n*(l*o+u*a)+o+e,-i*u,i*l,-i*(-u*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Ka.makeScale(e,t)),this}rotate(e){return this.premultiply(Ka.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ka.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};c(Ca,"Matrix3");let Ye=Ca;const Ka=new Ye;function x_(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}c(x_,"arrayNeedsUint32");function Fr(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}c(Fr,"createElementNS");function N0(){const s=Fr("canvas");return s.style.display="block",s}c(N0,"createCanvasElement");const Im={};function _s(s){s in Im||(Im[s]=!0,console.warn(s))}c(_s,"warnOnce");function U0(s,e,t){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}c(r,"probe"),setTimeout(r,t)})}c(U0,"probeAsync");const Dm=new Ye().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Om=new Ye().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function F0(){const s={enabled:!0,workingColorSpace:Gt,spaces:{},convert:c(function(i,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===ct&&(i.r=qn(i.r),i.g=qn(i.g),i.b=qn(i.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ct&&(i.r=vs(i.r),i.g=vs(i.g),i.b=vs(i.b))),i},"convert"),workingToColorSpace:c(function(i,r){return this.convert(i,this.workingColorSpace,r)},"workingToColorSpace"),colorSpaceToWorking:c(function(i,r){return this.convert(i,r,this.workingColorSpace)},"colorSpaceToWorking"),getPrimaries:c(function(i){return this.spaces[i].primaries},"getPrimaries"),getTransfer:c(function(i){return i===oi?Xo:this.spaces[i].transfer},"getTransfer"),getLuminanceCoefficients:c(function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},"getLuminanceCoefficients"),define:c(function(i){Object.assign(this.spaces,i)},"define"),_getMatrix:c(function(i,r,o){return i.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},"_getMatrix"),_getDrawingBufferColorSpace:c(function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},"_getDrawingBufferColorSpace"),_getUnpackColorSpace:c(function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},"_getUnpackColorSpace"),fromWorkingColorSpace:c(function(i,r){return _s("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(i,r)},"fromWorkingColorSpace"),toWorkingColorSpace:c(function(i,r){return _s("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(i,r)},"toWorkingColorSpace")},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[Gt]:{primaries:e,whitePoint:n,transfer:Xo,toXYZ:Dm,fromXYZ:Om,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Lt},outputColorSpaceConfig:{drawingBufferColorSpace:Lt}},[Lt]:{primaries:e,whitePoint:n,transfer:ct,toXYZ:Dm,fromXYZ:Om,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Lt}}}),s}c(F0,"createColorManagement");const tt=F0();function qn(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}c(qn,"SRGBToLinear");function vs(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}c(vs,"LinearToSRGB");let qi;const md=class md{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{qi===void 0&&(qi=Fr("canvas")),qi.width=e.width,qi.height=e.height;const i=qi.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=qi}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Fr("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=qn(r[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(qn(t[n]/255)*255):t[n]=qn(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}};c(md,"ImageUtils");let wl=md,B0=0;const gd=class gd{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:B0++}),this.uuid=hn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(Ja(i[o].image)):r.push(Ja(i[o]))}else r=Ja(i);n.url=r}return t||(e.images[this.uuid]=n),n}};c(gd,"Source");let Br=gd;function Ja(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?wl.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}c(Ja,"serializeImage");let k0=0;const Za=new R,fs=class fs extends $n{constructor(e=fs.DEFAULT_IMAGE,t=fs.DEFAULT_MAPPING,n=ai,i=ai,r=en,o=Wn,a=un,l=Cn,u=fs.DEFAULT_ANISOTROPY,h=oi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:k0++}),this.uuid=hn(),this.name="",this.source=new Br(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=u,this.format=a,this.internalFormat=null,this.type=l,this.offset=new le(0,0),this.repeat=new le(1,1),this.center=new le(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ye,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Za).x}get height(){return this.source.getSize(Za).y}get depth(){return this.source.getSize(Za).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==c_)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Zs:e.x=e.x-Math.floor(e.x);break;case ai:e.x=e.x<0?0:1;break;case Wo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Zs:e.y=e.y-Math.floor(e.y);break;case ai:e.y=e.y<0?0:1;break;case Wo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};c(fs,"Texture");let Nt=fs;Nt.DEFAULT_IMAGE=null;Nt.DEFAULT_MAPPING=c_;Nt.DEFAULT_ANISOTROPY=1;const Pa=class Pa{constructor(e=0,t=0,n=0,i=1){Pa.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const l=e.elements,u=l[0],h=l[4],d=l[8],f=l[1],p=l[5],_=l[9],v=l[2],g=l[6],m=l[10];if(Math.abs(h-f)<.01&&Math.abs(d-v)<.01&&Math.abs(_-g)<.01){if(Math.abs(h+f)<.1&&Math.abs(d+v)<.1&&Math.abs(_+g)<.1&&Math.abs(u+p+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const E=(u+1)/2,y=(p+1)/2,C=(m+1)/2,I=(h+f)/4,P=(d+v)/4,D=(_+g)/4;return E>y&&E>C?E<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(E),i=I/n,r=P/n):y>C?y<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(y),n=I/i,r=D/i):C<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(C),n=P/r,i=D/r),this.set(n,i,r,t),this}let A=Math.sqrt((g-_)*(g-_)+(d-v)*(d-v)+(f-h)*(f-h));return Math.abs(A)<.001&&(A=1),this.x=(g-_)/A,this.y=(d-v)/A,this.z=(f-h)/A,this.w=Math.acos((u+p+m-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ke(this.x,e.x,t.x),this.y=Ke(this.y,e.y,t.y),this.z=Ke(this.z,e.z,t.z),this.w=Ke(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ke(this.x,e,t),this.y=Ke(this.y,e,t),this.z=Ke(this.z,e,t),this.w=Ke(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ke(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};c(Pa,"Vector4");let it=Pa;const _d=class _d extends $n{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:en,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new it(0,0,e,t),this.scissorTest=!1,this.viewport=new it(0,0,e,t);const i={width:e,height:t,depth:n.depth},r=new Nt(i);this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:en,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isArrayTexture=this.textures[i].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const i=Object.assign({},e.textures[t].image);this.textures[t].source=new Br(i)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}};c(_d,"RenderTarget");let Tl=_d;const vd=class vd extends Tl{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}};c(vd,"WebGLRenderTarget");let Kn=vd;const xd=class xd extends Nt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Vt,this.minFilter=Vt,this.wrapR=ai,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};c(xd,"DataArrayTexture");let qo=xd;const yd=class yd extends Nt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Vt,this.minFilter=Vt,this.wrapR=ai,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};c(yd,"Data3DTexture");let Al=yd;const bd=class bd{constructor(e=new R(1/0,1/0,1/0),t=new R(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(gn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(gn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=gn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,gn):gn.fromBufferAttribute(r,o),gn.applyMatrix4(e.matrixWorld),this.expandByPoint(gn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),so.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),so.copy(n.boundingBox)),so.applyMatrix4(e.matrixWorld),this.union(so)}const i=e.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,gn),gn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(rr),ro.subVectors(this.max,rr),Yi.subVectors(e.a,rr),$i.subVectors(e.b,rr),Ki.subVectors(e.c,rr),Jn.subVectors($i,Yi),Zn.subVectors(Ki,$i),Mi.subVectors(Yi,Ki);let t=[0,-Jn.z,Jn.y,0,-Zn.z,Zn.y,0,-Mi.z,Mi.y,Jn.z,0,-Jn.x,Zn.z,0,-Zn.x,Mi.z,0,-Mi.x,-Jn.y,Jn.x,0,-Zn.y,Zn.x,0,-Mi.y,Mi.x,0];return!Qa(t,Yi,$i,Ki,ro)||(t=[1,0,0,0,1,0,0,0,1],!Qa(t,Yi,$i,Ki,ro))?!1:(oo.crossVectors(Jn,Zn),t=[oo.x,oo.y,oo.z],Qa(t,Yi,$i,Ki,ro))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,gn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(gn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Nn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Nn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Nn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Nn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Nn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Nn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Nn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Nn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Nn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}};c(bd,"Box3");let fn=bd;const Nn=[new R,new R,new R,new R,new R,new R,new R,new R],gn=new R,so=new fn,Yi=new R,$i=new R,Ki=new R,Jn=new R,Zn=new R,Mi=new R,rr=new R,ro=new R,oo=new R,Ei=new R;function Qa(s,e,t,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){Ei.fromArray(s,r);const a=i.x*Math.abs(Ei.x)+i.y*Math.abs(Ei.y)+i.z*Math.abs(Ei.z),l=e.dot(Ei),u=t.dot(Ei),h=n.dot(Ei);if(Math.max(-Math.max(l,u,h),Math.min(l,u,h))>a)return!1}return!0}c(Qa,"satForAxes");const H0=new fn,or=new R,ec=new R,Sd=class Sd{constructor(e=new R,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):H0.setFromPoints(e).getCenter(n);let i=0;for(let r=0,o=e.length;r<o;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;or.subVectors(e,this.center);const t=or.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(or,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ec.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(or.copy(e.center).add(ec)),this.expandByPoint(or.copy(e.center).sub(ec))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}};c(Sd,"Sphere");let nn=Sd;const Un=new R,tc=new R,ao=new R,Qn=new R,nc=new R,co=new R,ic=new R,Md=class Md{constructor(e=new R,t=new R(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Un)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Un.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Un.copy(this.origin).addScaledVector(this.direction,t),Un.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){tc.copy(e).add(t).multiplyScalar(.5),ao.copy(t).sub(e).normalize(),Qn.copy(this.origin).sub(tc);const r=e.distanceTo(t)*.5,o=-this.direction.dot(ao),a=Qn.dot(this.direction),l=-Qn.dot(ao),u=Qn.lengthSq(),h=Math.abs(1-o*o);let d,f,p,_;if(h>0)if(d=o*l-a,f=o*a-l,_=r*h,d>=0)if(f>=-_)if(f<=_){const v=1/h;d*=v,f*=v,p=d*(d+o*f+2*a)+f*(o*d+f+2*l)+u}else f=r,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*l)+u;else f=-r,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*l)+u;else f<=-_?(d=Math.max(0,-(-o*r+a)),f=d>0?-r:Math.min(Math.max(-r,-l),r),p=-d*d+f*(f+2*l)+u):f<=_?(d=0,f=Math.min(Math.max(-r,-l),r),p=f*(f+2*l)+u):(d=Math.max(0,-(o*r+a)),f=d>0?r:Math.min(Math.max(-r,-l),r),p=-d*d+f*(f+2*l)+u);else f=o>0?-r:r,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*l)+u;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(tc).addScaledVector(ao,f),p}intersectSphere(e,t){Un.subVectors(e.center,this.origin);const n=Un.dot(this.direction),i=Un.dot(Un)-n*n,r=e.radius*e.radius;if(i>r)return null;const o=Math.sqrt(r-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,o,a,l;const u=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,f=this.origin;return u>=0?(n=(e.min.x-f.x)*u,i=(e.max.x-f.x)*u):(n=(e.max.x-f.x)*u,i=(e.min.x-f.x)*u),h>=0?(r=(e.min.y-f.y)*h,o=(e.max.y-f.y)*h):(r=(e.max.y-f.y)*h,o=(e.min.y-f.y)*h),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),d>=0?(a=(e.min.z-f.z)*d,l=(e.max.z-f.z)*d):(a=(e.max.z-f.z)*d,l=(e.min.z-f.z)*d),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Un)!==null}intersectTriangle(e,t,n,i,r){nc.subVectors(t,e),co.subVectors(n,e),ic.crossVectors(nc,co);let o=this.direction.dot(ic),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Qn.subVectors(this.origin,e);const l=a*this.direction.dot(co.crossVectors(Qn,co));if(l<0)return null;const u=a*this.direction.dot(nc.cross(Qn));if(u<0||l+u>o)return null;const h=-a*Qn.dot(ic);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}};c(Md,"Ray");let hi=Md;const Rr=class Rr{constructor(e,t,n,i,r,o,a,l,u,h,d,f,p,_,v,g){Rr.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,l,u,h,d,f,p,_,v,g)}set(e,t,n,i,r,o,a,l,u,h,d,f,p,_,v,g){const m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=i,m[1]=r,m[5]=o,m[9]=a,m[13]=l,m[2]=u,m[6]=h,m[10]=d,m[14]=f,m[3]=p,m[7]=_,m[11]=v,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Rr().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/Ji.setFromMatrixColumn(e,0).length(),r=1/Ji.setFromMatrixColumn(e,1).length(),o=1/Ji.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),u=Math.sin(i),h=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){const f=o*h,p=o*d,_=a*h,v=a*d;t[0]=l*h,t[4]=-l*d,t[8]=u,t[1]=p+_*u,t[5]=f-v*u,t[9]=-a*l,t[2]=v-f*u,t[6]=_+p*u,t[10]=o*l}else if(e.order==="YXZ"){const f=l*h,p=l*d,_=u*h,v=u*d;t[0]=f+v*a,t[4]=_*a-p,t[8]=o*u,t[1]=o*d,t[5]=o*h,t[9]=-a,t[2]=p*a-_,t[6]=v+f*a,t[10]=o*l}else if(e.order==="ZXY"){const f=l*h,p=l*d,_=u*h,v=u*d;t[0]=f-v*a,t[4]=-o*d,t[8]=_+p*a,t[1]=p+_*a,t[5]=o*h,t[9]=v-f*a,t[2]=-o*u,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const f=o*h,p=o*d,_=a*h,v=a*d;t[0]=l*h,t[4]=_*u-p,t[8]=f*u+v,t[1]=l*d,t[5]=v*u+f,t[9]=p*u-_,t[2]=-u,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const f=o*l,p=o*u,_=a*l,v=a*u;t[0]=l*h,t[4]=v-f*d,t[8]=_*d+p,t[1]=d,t[5]=o*h,t[9]=-a*h,t[2]=-u*h,t[6]=p*d+_,t[10]=f-v*d}else if(e.order==="XZY"){const f=o*l,p=o*u,_=a*l,v=a*u;t[0]=l*h,t[4]=-d,t[8]=u*h,t[1]=f*d+v,t[5]=o*h,t[9]=p*d-_,t[2]=_*d-p,t[6]=a*h,t[10]=v*d+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(z0,e,V0)}lookAt(e,t,n){const i=this.elements;return Zt.subVectors(e,t),Zt.lengthSq()===0&&(Zt.z=1),Zt.normalize(),ei.crossVectors(n,Zt),ei.lengthSq()===0&&(Math.abs(n.z)===1?Zt.x+=1e-4:Zt.z+=1e-4,Zt.normalize(),ei.crossVectors(n,Zt)),ei.normalize(),lo.crossVectors(Zt,ei),i[0]=ei.x,i[4]=lo.x,i[8]=Zt.x,i[1]=ei.y,i[5]=lo.y,i[9]=Zt.y,i[2]=ei.z,i[6]=lo.z,i[10]=Zt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],u=n[12],h=n[1],d=n[5],f=n[9],p=n[13],_=n[2],v=n[6],g=n[10],m=n[14],A=n[3],E=n[7],y=n[11],C=n[15],I=i[0],P=i[4],D=i[8],w=i[12],M=i[1],S=i[5],B=i[9],N=i[13],H=i[2],j=i[6],V=i[10],K=i[14],G=i[3],re=i[7],_e=i[11],Se=i[15];return r[0]=o*I+a*M+l*H+u*G,r[4]=o*P+a*S+l*j+u*re,r[8]=o*D+a*B+l*V+u*_e,r[12]=o*w+a*N+l*K+u*Se,r[1]=h*I+d*M+f*H+p*G,r[5]=h*P+d*S+f*j+p*re,r[9]=h*D+d*B+f*V+p*_e,r[13]=h*w+d*N+f*K+p*Se,r[2]=_*I+v*M+g*H+m*G,r[6]=_*P+v*S+g*j+m*re,r[10]=_*D+v*B+g*V+m*_e,r[14]=_*w+v*N+g*K+m*Se,r[3]=A*I+E*M+y*H+C*G,r[7]=A*P+E*S+y*j+C*re,r[11]=A*D+E*B+y*V+C*_e,r[15]=A*w+E*N+y*K+C*Se,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],o=e[1],a=e[5],l=e[9],u=e[13],h=e[2],d=e[6],f=e[10],p=e[14],_=e[3],v=e[7],g=e[11],m=e[15];return _*(+r*l*d-i*u*d-r*a*f+n*u*f+i*a*p-n*l*p)+v*(+t*l*p-t*u*f+r*o*f-i*o*p+i*u*h-r*l*h)+g*(+t*u*d-t*a*p-r*o*d+n*o*p+r*a*h-n*u*h)+m*(-i*a*h-t*l*d+t*a*f+i*o*d-n*o*f+n*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],u=e[7],h=e[8],d=e[9],f=e[10],p=e[11],_=e[12],v=e[13],g=e[14],m=e[15],A=d*g*u-v*f*u+v*l*p-a*g*p-d*l*m+a*f*m,E=_*f*u-h*g*u-_*l*p+o*g*p+h*l*m-o*f*m,y=h*v*u-_*d*u+_*a*p-o*v*p-h*a*m+o*d*m,C=_*d*l-h*v*l-_*a*f+o*v*f+h*a*g-o*d*g,I=t*A+n*E+i*y+r*C;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/I;return e[0]=A*P,e[1]=(v*f*r-d*g*r-v*i*p+n*g*p+d*i*m-n*f*m)*P,e[2]=(a*g*r-v*l*r+v*i*u-n*g*u-a*i*m+n*l*m)*P,e[3]=(d*l*r-a*f*r-d*i*u+n*f*u+a*i*p-n*l*p)*P,e[4]=E*P,e[5]=(h*g*r-_*f*r+_*i*p-t*g*p-h*i*m+t*f*m)*P,e[6]=(_*l*r-o*g*r-_*i*u+t*g*u+o*i*m-t*l*m)*P,e[7]=(o*f*r-h*l*r+h*i*u-t*f*u-o*i*p+t*l*p)*P,e[8]=y*P,e[9]=(_*d*r-h*v*r-_*n*p+t*v*p+h*n*m-t*d*m)*P,e[10]=(o*v*r-_*a*r+_*n*u-t*v*u-o*n*m+t*a*m)*P,e[11]=(h*a*r-o*d*r-h*n*u+t*d*u+o*n*p-t*a*p)*P,e[12]=C*P,e[13]=(h*v*i-_*d*i+_*n*f-t*v*f-h*n*g+t*d*g)*P,e[14]=(_*a*i-o*v*i-_*n*l+t*v*l+o*n*g-t*a*g)*P,e[15]=(o*d*i-h*a*i+h*n*l-t*d*l-o*n*f+t*a*f)*P,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,u=r*o,h=r*a;return this.set(u*o+n,u*a-i*l,u*l+i*a,0,u*a+i*l,h*a+n,h*l-i*o,0,u*l-i*a,h*l+i*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,o){return this.set(1,n,r,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,u=r+r,h=o+o,d=a+a,f=r*u,p=r*h,_=r*d,v=o*h,g=o*d,m=a*d,A=l*u,E=l*h,y=l*d,C=n.x,I=n.y,P=n.z;return i[0]=(1-(v+m))*C,i[1]=(p+y)*C,i[2]=(_-E)*C,i[3]=0,i[4]=(p-y)*I,i[5]=(1-(f+m))*I,i[6]=(g+A)*I,i[7]=0,i[8]=(_+E)*P,i[9]=(g-A)*P,i[10]=(1-(f+v))*P,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let r=Ji.set(i[0],i[1],i[2]).length();const o=Ji.set(i[4],i[5],i[6]).length(),a=Ji.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],_n.copy(this);const u=1/r,h=1/o,d=1/a;return _n.elements[0]*=u,_n.elements[1]*=u,_n.elements[2]*=u,_n.elements[4]*=h,_n.elements[5]*=h,_n.elements[6]*=h,_n.elements[8]*=d,_n.elements[9]*=d,_n.elements[10]*=d,t.setFromRotationMatrix(_n),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,i,r,o,a=Rn,l=!1){const u=this.elements,h=2*r/(t-e),d=2*r/(n-i),f=(t+e)/(t-e),p=(n+i)/(n-i);let _,v;if(l)_=r/(o-r),v=o*r/(o-r);else if(a===Rn)_=-(o+r)/(o-r),v=-2*o*r/(o-r);else if(a===jo)_=-o/(o-r),v=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return u[0]=h,u[4]=0,u[8]=f,u[12]=0,u[1]=0,u[5]=d,u[9]=p,u[13]=0,u[2]=0,u[6]=0,u[10]=_,u[14]=v,u[3]=0,u[7]=0,u[11]=-1,u[15]=0,this}makeOrthographic(e,t,n,i,r,o,a=Rn,l=!1){const u=this.elements,h=2/(t-e),d=2/(n-i),f=-(t+e)/(t-e),p=-(n+i)/(n-i);let _,v;if(l)_=1/(o-r),v=o/(o-r);else if(a===Rn)_=-2/(o-r),v=-(o+r)/(o-r);else if(a===jo)_=-1/(o-r),v=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return u[0]=h,u[4]=0,u[8]=0,u[12]=f,u[1]=0,u[5]=d,u[9]=0,u[13]=p,u[2]=0,u[6]=0,u[10]=_,u[14]=v,u[3]=0,u[7]=0,u[11]=0,u[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};c(Rr,"Matrix4");let je=Rr;const Ji=new R,_n=new je,z0=new R(0,0,0),V0=new R(1,1,1),ei=new R,lo=new R,Zt=new R,Nm=new je,Um=new wt,La=class La{constructor(e=0,t=0,n=0,i=La.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],o=i[4],a=i[8],l=i[1],u=i[5],h=i[9],d=i[2],f=i[6],p=i[10];switch(t){case"XYZ":this._y=Math.asin(Ke(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,u),this._z=0);break;case"YXZ":this._x=Math.asin(-Ke(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ke(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ke(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin(Ke(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,u),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Ke(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,u),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Nm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Nm,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Um.setFromEuler(this),this.setFromQuaternion(Um,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};c(La,"Euler");let Sn=La;Sn.DEFAULT_ORDER="XYZ";const Ed=class Ed{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}};c(Ed,"Layers");let kr=Ed,G0=0;const Fm=new R,Zi=new wt,Fn=new je,uo=new R,ar=new R,W0=new R,X0=new wt,Bm=new R(1,0,0),km=new R(0,1,0),Hm=new R(0,0,1),zm={type:"added"},j0={type:"removed"},Qi={type:"childadded",child:null},sc={type:"childremoved",child:null},ps=class ps extends $n{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:G0++}),this.uuid=hn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ps.DEFAULT_UP.clone();const e=new R,t=new Sn,n=new wt,i=new R(1,1,1);function r(){n.setFromEuler(t,!1)}c(r,"onRotationChange");function o(){t.setFromQuaternion(n,void 0,!1)}c(o,"onQuaternionChange"),t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new je},normalMatrix:{value:new Ye}}),this.matrix=new je,this.matrixWorld=new je,this.matrixAutoUpdate=ps.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ps.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new kr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Zi.setFromAxisAngle(e,t),this.quaternion.multiply(Zi),this}rotateOnWorldAxis(e,t){return Zi.setFromAxisAngle(e,t),this.quaternion.premultiply(Zi),this}rotateX(e){return this.rotateOnAxis(Bm,e)}rotateY(e){return this.rotateOnAxis(km,e)}rotateZ(e){return this.rotateOnAxis(Hm,e)}translateOnAxis(e,t){return Fm.copy(e).applyQuaternion(this.quaternion),this.position.add(Fm.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Bm,e)}translateY(e){return this.translateOnAxis(km,e)}translateZ(e){return this.translateOnAxis(Hm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Fn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?uo.copy(e):uo.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),ar.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Fn.lookAt(ar,uo,this.up):Fn.lookAt(uo,ar,this.up),this.quaternion.setFromRotationMatrix(Fn),i&&(Fn.extractRotation(i.matrixWorld),Zi.setFromRotationMatrix(Fn),this.quaternion.premultiply(Zi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(zm),Qi.child=e,this.dispatchEvent(Qi),Qi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(j0),sc.child=e,this.dispatchEvent(sc),sc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Fn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Fn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Fn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(zm),Qi.child=e,this.dispatchEvent(Qi),Qi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ar,e,W0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ar,X0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(a=>({...a})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(c(r,"serialize"),this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let u=0,h=l.length;u<h;u++){const d=l[u];r(e.shapes,d)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,u=this.material.length;l<u;l++)a.push(r(e.materials,this.material[l]));i.material=a}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(r(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),u=o(e.textures),h=o(e.images),d=o(e.shapes),f=o(e.skeletons),p=o(e.animations),_=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),u.length>0&&(n.textures=u),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),f.length>0&&(n.skeletons=f),p.length>0&&(n.animations=p),_.length>0&&(n.nodes=_)}return n.object=i,n;function o(a){const l=[];for(const u in a){const h=a[u];delete h.metadata,l.push(h)}return l}c(o,"extractFromCache")}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}};c(ps,"Object3D");let yt=ps;yt.DEFAULT_UP=new R(0,1,0);yt.DEFAULT_MATRIX_AUTO_UPDATE=!0;yt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const vn=new R,Bn=new R,rc=new R,kn=new R,es=new R,ts=new R,Vm=new R,oc=new R,ac=new R,cc=new R,lc=new it,uc=new it,hc=new it,si=class si{constructor(e=new R,t=new R,n=new R){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),vn.subVectors(e,t),i.cross(vn);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){vn.subVectors(i,t),Bn.subVectors(n,t),rc.subVectors(e,t);const o=vn.dot(vn),a=vn.dot(Bn),l=vn.dot(rc),u=Bn.dot(Bn),h=Bn.dot(rc),d=o*u-a*a;if(d===0)return r.set(0,0,0),null;const f=1/d,p=(u*l-a*h)*f,_=(o*h-a*l)*f;return r.set(1-p-_,_,p)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,kn)===null?!1:kn.x>=0&&kn.y>=0&&kn.x+kn.y<=1}static getInterpolation(e,t,n,i,r,o,a,l){return this.getBarycoord(e,t,n,i,kn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,kn.x),l.addScaledVector(o,kn.y),l.addScaledVector(a,kn.z),l)}static getInterpolatedAttribute(e,t,n,i,r,o){return lc.setScalar(0),uc.setScalar(0),hc.setScalar(0),lc.fromBufferAttribute(e,t),uc.fromBufferAttribute(e,n),hc.fromBufferAttribute(e,i),o.setScalar(0),o.addScaledVector(lc,r.x),o.addScaledVector(uc,r.y),o.addScaledVector(hc,r.z),o}static isFrontFacing(e,t,n,i){return vn.subVectors(n,t),Bn.subVectors(e,t),vn.cross(Bn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return vn.subVectors(this.c,this.b),Bn.subVectors(this.a,this.b),vn.cross(Bn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return si.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return si.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,r){return si.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return si.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return si.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let o,a;es.subVectors(i,n),ts.subVectors(r,n),oc.subVectors(e,n);const l=es.dot(oc),u=ts.dot(oc);if(l<=0&&u<=0)return t.copy(n);ac.subVectors(e,i);const h=es.dot(ac),d=ts.dot(ac);if(h>=0&&d<=h)return t.copy(i);const f=l*d-h*u;if(f<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(n).addScaledVector(es,o);cc.subVectors(e,r);const p=es.dot(cc),_=ts.dot(cc);if(_>=0&&p<=_)return t.copy(r);const v=p*u-l*_;if(v<=0&&u>=0&&_<=0)return a=u/(u-_),t.copy(n).addScaledVector(ts,a);const g=h*_-p*d;if(g<=0&&d-h>=0&&p-_>=0)return Vm.subVectors(r,i),a=(d-h)/(d-h+(p-_)),t.copy(i).addScaledVector(Vm,a);const m=1/(g+v+f);return o=v*m,a=f*m,t.copy(n).addScaledVector(es,o).addScaledVector(ts,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}};c(si,"Triangle");let Di=si;const y_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ti={h:0,s:0,l:0},ho={h:0,s:0,l:0};function dc(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}c(dc,"hue2rgb");var Rs;let ze=(Rs=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Lt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,tt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=tt.workingColorSpace){return this.r=e,this.g=t,this.b=n,tt.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=tt.workingColorSpace){if(e=nd(e,1),t=Ke(t,0,1),n=Ke(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=dc(o,r,e+1/3),this.g=dc(o,r,e),this.b=dc(o,r,e-1/3)}return tt.colorSpaceToWorking(this,i),this}setStyle(e,t=Lt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}c(n,"handleAlpha");let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Lt){const n=y_[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=qn(e.r),this.g=qn(e.g),this.b=qn(e.b),this}copyLinearToSRGB(e){return this.r=vs(e.r),this.g=vs(e.g),this.b=vs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Lt){return tt.workingToColorSpace(Ft.copy(this),e),Math.round(Ke(Ft.r*255,0,255))*65536+Math.round(Ke(Ft.g*255,0,255))*256+Math.round(Ke(Ft.b*255,0,255))}getHexString(e=Lt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=tt.workingColorSpace){tt.workingToColorSpace(Ft.copy(this),t);const n=Ft.r,i=Ft.g,r=Ft.b,o=Math.max(n,i,r),a=Math.min(n,i,r);let l,u;const h=(a+o)/2;if(a===o)l=0,u=0;else{const d=o-a;switch(u=h<=.5?d/(o+a):d/(2-o-a),o){case n:l=(i-r)/d+(i<r?6:0);break;case i:l=(r-n)/d+2;break;case r:l=(n-i)/d+4;break}l/=6}return e.h=l,e.s=u,e.l=h,e}getRGB(e,t=tt.workingColorSpace){return tt.workingToColorSpace(Ft.copy(this),t),e.r=Ft.r,e.g=Ft.g,e.b=Ft.b,e}getStyle(e=Lt){tt.workingToColorSpace(Ft.copy(this),e);const t=Ft.r,n=Ft.g,i=Ft.b;return e!==Lt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(ti),this.setHSL(ti.h+e,ti.s+t,ti.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ti),e.getHSL(ho);const n=Sr(ti.h,ho.h,t),i=Sr(ti.s,ho.s,t),r=Sr(ti.l,ho.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},c(Rs,"Color"),Rs);const Ft=new ze;ze.NAMES=y_;let q0=0;const wd=class wd extends $n{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:q0++}),this.uuid=hn(),this.name="",this.type="Material",this.blending=gs,this.side=Yn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Hc,this.blendDst=zc,this.blendEquation=Ii,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ze(0,0,0),this.blendAlpha=0,this.depthFunc=$s,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Rm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ji,this.stencilZFail=ji,this.stencilZPass=ji,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==gs&&(n.blending=this.blending),this.side!==Yn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Hc&&(n.blendSrc=this.blendSrc),this.blendDst!==zc&&(n.blendDst=this.blendDst),this.blendEquation!==Ii&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==$s&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Rm&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ji&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ji&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ji&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(c(i,"extractFromCache"),t){const r=i(e.textures),o=i(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};c(wd,"Material");let tn=wd;const Td=class Td extends tn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Sn,this.combine=qh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};c(Td,"MeshBasicMaterial");let Xn=Td;const Mt=new R,fo=new le;let Y0=0;const Ad=class Ad{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Y0++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=El,this.updateRanges=[],this.gpuType=bn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)fo.fromBufferAttribute(this,t),fo.applyMatrix3(e),this.setXY(t,fo.x,fo.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Mt.fromBufferAttribute(this,t),Mt.applyMatrix3(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Mt.fromBufferAttribute(this,t),Mt.applyMatrix4(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Mt.fromBufferAttribute(this,t),Mt.applyNormalMatrix(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Mt.fromBufferAttribute(this,t),Mt.transformDirection(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=yn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=rt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=yn(t,this.array)),t}setX(e,t){return this.normalized&&(t=rt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=yn(t,this.array)),t}setY(e,t){return this.normalized&&(t=rt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=yn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=rt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=yn(t,this.array)),t}setW(e,t){return this.normalized&&(t=rt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=rt(t,this.array),n=rt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=rt(t,this.array),n=rt(n,this.array),i=rt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=rt(t,this.array),n=rt(n,this.array),i=rt(i,this.array),r=rt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==El&&(e.usage=this.usage),e}};c(Ad,"BufferAttribute");let Ot=Ad;const Rd=class Rd extends Ot{constructor(e,t,n){super(new Uint16Array(e),t,n)}};c(Rd,"Uint16BufferAttribute");let Yo=Rd;const Cd=class Cd extends Ot{constructor(e,t,n){super(new Uint32Array(e),t,n)}};c(Cd,"Uint32BufferAttribute");let $o=Cd;const Pd=class Pd extends Ot{constructor(e,t,n){super(new Float32Array(e),t,n)}};c(Pd,"Float32BufferAttribute");let Et=Pd,$0=0;const cn=new je,fc=new yt,ns=new R,Qt=new fn,cr=new fn,Pt=new R,Ia=class Ia extends $n{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:$0++}),this.uuid=hn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(x_(e)?$o:Yo)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Ye().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return cn.makeRotationFromQuaternion(e),this.applyMatrix4(cn),this}rotateX(e){return cn.makeRotationX(e),this.applyMatrix4(cn),this}rotateY(e){return cn.makeRotationY(e),this.applyMatrix4(cn),this}rotateZ(e){return cn.makeRotationZ(e),this.applyMatrix4(cn),this}translate(e,t,n){return cn.makeTranslation(e,t,n),this.applyMatrix4(cn),this}scale(e,t,n){return cn.makeScale(e,t,n),this.applyMatrix4(cn),this}lookAt(e){return fc.lookAt(e),fc.updateMatrix(),this.applyMatrix4(fc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ns).negate(),this.translate(ns.x,ns.y,ns.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,r=e.length;i<r;i++){const o=e[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Et(n,3))}else{const n=Math.min(e.length,t.count);for(let i=0;i<n;i++){const r=e[i];t.setXYZ(i,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new fn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new R(-1/0,-1/0,-1/0),new R(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];Qt.setFromBufferAttribute(r),this.morphTargetsRelative?(Pt.addVectors(this.boundingBox.min,Qt.min),this.boundingBox.expandByPoint(Pt),Pt.addVectors(this.boundingBox.max,Qt.max),this.boundingBox.expandByPoint(Pt)):(this.boundingBox.expandByPoint(Qt.min),this.boundingBox.expandByPoint(Qt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new nn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new R,1/0);return}if(e){const n=this.boundingSphere.center;if(Qt.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];cr.setFromBufferAttribute(a),this.morphTargetsRelative?(Pt.addVectors(Qt.min,cr.min),Qt.expandByPoint(Pt),Pt.addVectors(Qt.max,cr.max),Qt.expandByPoint(Pt)):(Qt.expandByPoint(cr.min),Qt.expandByPoint(cr.max))}Qt.getCenter(n);let i=0;for(let r=0,o=e.count;r<o;r++)Pt.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(Pt));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],l=this.morphTargetsRelative;for(let u=0,h=a.count;u<h;u++)Pt.fromBufferAttribute(a,u),l&&(ns.fromBufferAttribute(e,u),Pt.add(ns)),i=Math.max(i,n.distanceToSquared(Pt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ot(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let D=0;D<n.count;D++)a[D]=new R,l[D]=new R;const u=new R,h=new R,d=new R,f=new le,p=new le,_=new le,v=new R,g=new R;function m(D,w,M){u.fromBufferAttribute(n,D),h.fromBufferAttribute(n,w),d.fromBufferAttribute(n,M),f.fromBufferAttribute(r,D),p.fromBufferAttribute(r,w),_.fromBufferAttribute(r,M),h.sub(u),d.sub(u),p.sub(f),_.sub(f);const S=1/(p.x*_.y-_.x*p.y);isFinite(S)&&(v.copy(h).multiplyScalar(_.y).addScaledVector(d,-p.y).multiplyScalar(S),g.copy(d).multiplyScalar(p.x).addScaledVector(h,-_.x).multiplyScalar(S),a[D].add(v),a[w].add(v),a[M].add(v),l[D].add(g),l[w].add(g),l[M].add(g))}c(m,"handleTriangle");let A=this.groups;A.length===0&&(A=[{start:0,count:e.count}]);for(let D=0,w=A.length;D<w;++D){const M=A[D],S=M.start,B=M.count;for(let N=S,H=S+B;N<H;N+=3)m(e.getX(N+0),e.getX(N+1),e.getX(N+2))}const E=new R,y=new R,C=new R,I=new R;function P(D){C.fromBufferAttribute(i,D),I.copy(C);const w=a[D];E.copy(w),E.sub(C.multiplyScalar(C.dot(w))).normalize(),y.crossVectors(I,w);const S=y.dot(l[D])<0?-1:1;o.setXYZW(D,E.x,E.y,E.z,S)}c(P,"handleVertex");for(let D=0,w=A.length;D<w;++D){const M=A[D],S=M.start,B=M.count;for(let N=S,H=S+B;N<H;N+=3)P(e.getX(N+0)),P(e.getX(N+1)),P(e.getX(N+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ot(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,p=n.count;f<p;f++)n.setXYZ(f,0,0,0);const i=new R,r=new R,o=new R,a=new R,l=new R,u=new R,h=new R,d=new R;if(e)for(let f=0,p=e.count;f<p;f+=3){const _=e.getX(f+0),v=e.getX(f+1),g=e.getX(f+2);i.fromBufferAttribute(t,_),r.fromBufferAttribute(t,v),o.fromBufferAttribute(t,g),h.subVectors(o,r),d.subVectors(i,r),h.cross(d),a.fromBufferAttribute(n,_),l.fromBufferAttribute(n,v),u.fromBufferAttribute(n,g),a.add(h),l.add(h),u.add(h),n.setXYZ(_,a.x,a.y,a.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(g,u.x,u.y,u.z)}else for(let f=0,p=t.count;f<p;f+=3)i.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),h.subVectors(o,r),d.subVectors(i,r),h.cross(d),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Pt.fromBufferAttribute(e,t),Pt.normalize(),e.setXYZ(t,Pt.x,Pt.y,Pt.z)}toNonIndexed(){function e(a,l){const u=a.array,h=a.itemSize,d=a.normalized,f=new u.constructor(l.length*h);let p=0,_=0;for(let v=0,g=l.length;v<g;v++){a.isInterleavedBufferAttribute?p=l[v]*a.data.stride+a.offset:p=l[v]*h;for(let m=0;m<h;m++)f[_++]=u[p++]}return new Ot(f,h,d)}if(c(e,"convertBufferAttribute"),this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Ia,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],u=e(l,n);t.setAttribute(a,u)}const r=this.morphAttributes;for(const a in r){const l=[],u=r[a];for(let h=0,d=u.length;h<d;h++){const f=u[h],p=e(f,n);l.push(p)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const u=o[a];t.addGroup(u.start,u.count,u.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const u=n[l];e.data.attributes[l]=u.toJSON(e.data)}const i={};let r=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],h=[];for(let d=0,f=u.length;d<f;d++){const p=u[d];h.push(p.toJSON(e.data))}h.length>0&&(i[l]=h,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const i=e.attributes;for(const u in i){const h=i[u];this.setAttribute(u,h.clone(t))}const r=e.morphAttributes;for(const u in r){const h=[],d=r[u];for(let f=0,p=d.length;f<p;f++)h.push(d[f].clone(t));this.morphAttributes[u]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let u=0,h=o.length;u<h;u++){const d=o[u];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}};c(Ia,"BufferGeometry");let qt=Ia;const Gm=new je,wi=new hi,po=new nn,Wm=new R,mo=new R,go=new R,_o=new R,pc=new R,vo=new R,Xm=new R,xo=new R,Ld=class Ld extends yt{constructor(e=new qt,t=new Xn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(r&&a){vo.set(0,0,0);for(let l=0,u=r.length;l<u;l++){const h=a[l],d=r[l];h!==0&&(pc.fromBufferAttribute(d,e),o?vo.addScaledVector(pc,h):vo.addScaledVector(pc.sub(t),h))}t.add(vo)}return t}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),po.copy(n.boundingSphere),po.applyMatrix4(r),wi.copy(e.ray).recast(e.near),!(po.containsPoint(wi.origin)===!1&&(wi.intersectSphere(po,Wm)===null||wi.origin.distanceToSquared(Wm)>(e.far-e.near)**2))&&(Gm.copy(r).invert(),wi.copy(e.ray).applyMatrix4(Gm),!(n.boundingBox!==null&&wi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,wi)))}_computeIntersections(e,t,n){let i;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,u=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,f=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,v=f.length;_<v;_++){const g=f[_],m=o[g.materialIndex],A=Math.max(g.start,p.start),E=Math.min(a.count,Math.min(g.start+g.count,p.start+p.count));for(let y=A,C=E;y<C;y+=3){const I=a.getX(y),P=a.getX(y+1),D=a.getX(y+2);i=yo(this,m,e,n,u,h,d,I,P,D),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=g.materialIndex,t.push(i))}}else{const _=Math.max(0,p.start),v=Math.min(a.count,p.start+p.count);for(let g=_,m=v;g<m;g+=3){const A=a.getX(g),E=a.getX(g+1),y=a.getX(g+2);i=yo(this,o,e,n,u,h,d,A,E,y),i&&(i.faceIndex=Math.floor(g/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,v=f.length;_<v;_++){const g=f[_],m=o[g.materialIndex],A=Math.max(g.start,p.start),E=Math.min(l.count,Math.min(g.start+g.count,p.start+p.count));for(let y=A,C=E;y<C;y+=3){const I=y,P=y+1,D=y+2;i=yo(this,m,e,n,u,h,d,I,P,D),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=g.materialIndex,t.push(i))}}else{const _=Math.max(0,p.start),v=Math.min(l.count,p.start+p.count);for(let g=_,m=v;g<m;g+=3){const A=g,E=g+1,y=g+2;i=yo(this,o,e,n,u,h,d,A,E,y),i&&(i.faceIndex=Math.floor(g/3),t.push(i))}}}};c(Ld,"Mesh");let ut=Ld;function K0(s,e,t,n,i,r,o,a){let l;if(e.side===jt?l=n.intersectTriangle(o,r,i,!0,a):l=n.intersectTriangle(i,r,o,e.side===Yn,a),l===null)return null;xo.copy(a),xo.applyMatrix4(s.matrixWorld);const u=t.ray.origin.distanceTo(xo);return u<t.near||u>t.far?null:{distance:u,point:xo.clone(),object:s}}c(K0,"checkIntersection$1");function yo(s,e,t,n,i,r,o,a,l,u){s.getVertexPosition(a,mo),s.getVertexPosition(l,go),s.getVertexPosition(u,_o);const h=K0(s,e,t,n,mo,go,_o,Xm);if(h){const d=new R;Di.getBarycoord(Xm,mo,go,_o,d),i&&(h.uv=Di.getInterpolatedAttribute(i,a,l,u,d,new le)),r&&(h.uv1=Di.getInterpolatedAttribute(r,a,l,u,d,new le)),o&&(h.normal=Di.getInterpolatedAttribute(o,a,l,u,d,new R),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const f={a,b:l,c:u,normal:new R,materialIndex:0};Di.getNormal(mo,go,_o,f.normal),h.face=f,h.barycoord=d}return h}c(yo,"checkGeometryIntersection");const Da=class Da extends qt{constructor(e=1,t=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};const a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);const l=[],u=[],h=[],d=[];let f=0,p=0;_("z","y","x",-1,-1,n,t,e,o,r,0),_("z","y","x",1,-1,n,t,-e,o,r,1),_("x","z","y",1,1,e,n,t,i,o,2),_("x","z","y",1,-1,e,n,-t,i,o,3),_("x","y","z",1,-1,e,t,n,i,r,4),_("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new Et(u,3)),this.setAttribute("normal",new Et(h,3)),this.setAttribute("uv",new Et(d,2));function _(v,g,m,A,E,y,C,I,P,D,w){const M=y/P,S=C/D,B=y/2,N=C/2,H=I/2,j=P+1,V=D+1;let K=0,G=0;const re=new R;for(let _e=0;_e<V;_e++){const Se=_e*S-N;for(let Ue=0;Ue<j;Ue++){const Je=Ue*M-B;re[v]=Je*A,re[g]=Se*E,re[m]=H,u.push(re.x,re.y,re.z),re[v]=0,re[g]=0,re[m]=I>0?1:-1,h.push(re.x,re.y,re.z),d.push(Ue/P),d.push(1-_e/D),K+=1}}for(let _e=0;_e<D;_e++)for(let Se=0;Se<P;Se++){const Ue=f+Se+j*_e,Je=f+Se+j*(_e+1),Qe=f+(Se+1)+j*(_e+1),$=f+(Se+1)+j*_e;l.push(Ue,Je,$),l.push(Je,Qe,$),G+=6}a.addGroup(p,G,w),p+=G,f+=K}c(_,"buildPlane")}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Da(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};c(Da,"BoxGeometry");let Pn=Da;function er(s){const e={};for(const t in s){e[t]={};for(const n in s[t]){const i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}c(er,"cloneUniforms");function zt(s){const e={};for(let t=0;t<s.length;t++){const n=er(s[t]);for(const i in n)e[i]=n[i]}return e}c(zt,"mergeUniforms");function J0(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}c(J0,"cloneUniformsGroups");function b_(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:tt.workingColorSpace}c(b_,"getUnlitUniformColorSpace");const Z0={clone:er,merge:zt};var Q0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ex=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;const Id=class Id extends tn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Q0,this.fragmentShader=ex,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=er(e.uniforms),this.uniformsGroups=J0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}};c(Id,"ShaderMaterial");let Ln=Id;const Dd=class Dd extends yt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new je,this.projectionMatrix=new je,this.projectionMatrixInverse=new je,this.coordinateSystem=Rn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}};c(Dd,"Camera");let Ko=Dd;const ni=new R,jm=new le,qm=new le,Od=class Od extends Ko{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Qs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(br*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Qs*2*Math.atan(Math.tan(br*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){ni.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ni.x,ni.y).multiplyScalar(-e/ni.z),ni.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ni.x,ni.y).multiplyScalar(-e/ni.z)}getViewSize(e,t){return this.getViewBounds(e,jm,qm),t.subVectors(qm,jm)}setViewOffset(e,t,n,i,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(br*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,u=o.fullHeight;r+=o.offsetX*i/l,t-=o.offsetY*n/u,i*=o.width/l,n*=o.height/u}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};c(Od,"PerspectiveCamera");let Dt=Od;const is=-90,ss=1,Nd=class Nd extends yt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Dt(is,ss,e,t);i.layers=this.layers,this.add(i);const r=new Dt(is,ss,e,t);r.layers=this.layers,this.add(r);const o=new Dt(is,ss,e,t);o.layers=this.layers,this.add(o);const a=new Dt(is,ss,e,t);a.layers=this.layers,this.add(a);const l=new Dt(is,ss,e,t);l.layers=this.layers,this.add(l);const u=new Dt(is,ss,e,t);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,r,o,a,l]=t;for(const u of t)this.remove(u);if(e===Rn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===jo)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of t)this.add(u),u.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,u,h]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,r),e.setRenderTarget(n,1,i),e.render(t,o),e.setRenderTarget(n,2,i),e.render(t,a),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,u),n.texture.generateMipmaps=v,e.setRenderTarget(n,5,i),e.render(t,h),e.setRenderTarget(d,f,p),e.xr.enabled=_,n.texture.needsPMREMUpdate=!0}};c(Nd,"CubeCamera");let Rl=Nd;const Ud=class Ud extends Nt{constructor(e=[],t=Ks,n,i,r,o,a,l,u,h){super(e,t,n,i,r,o,a,l,u,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}};c(Ud,"CubeTexture");let Jo=Ud;const Fd=class Fd extends Kn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Jo(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Pn(5,5,5),r=new Ln({name:"CubemapFromEquirect",uniforms:er(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:jt,blending:ci});r.uniforms.tEquirect.value=t;const o=new ut(i,r),a=t.minFilter;return t.minFilter===Wn&&(t.minFilter=en),new Rl(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(r)}};c(Fd,"WebGLCubeRenderTarget");let Cl=Fd;var Cs;let mt=(Cs=class extends yt{constructor(){super(),this.isGroup=!0,this.type="Group"}},c(Cs,"Group"),Cs);const tx={type:"move"},Bd=class Bd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new mt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new mt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new R,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new R),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new mt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new R,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new R),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,o=null;const a=this._targetRay,l=this._grip,u=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(u&&e.hand){o=!0;for(const v of e.hand.values()){const g=t.getJointPose(v,n),m=this._getHandJoint(u,v);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}const h=u.joints["index-finger-tip"],d=u.joints["thumb-tip"],f=h.position.distanceTo(d.position),p=.02,_=.005;u.inputState.pinching&&f>p+_?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&f<=p-_&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(tx)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=r!==null),u!==null&&(u.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new mt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}};c(Bd,"WebXRController");let Mr=Bd;const kd=class kd extends yt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Sn,this.environmentIntensity=1,this.environmentRotation=new Sn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}};c(kd,"Scene");let Pl=kd;const Hd=class Hd{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=El,this.updateRanges=[],this.version=0,this.uuid=hn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=hn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=hn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}};c(Hd,"InterleavedBuffer");let Ll=Hd;const Ht=new R,Oa=class Oa{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Ht.fromBufferAttribute(this,t),Ht.applyMatrix4(e),this.setXYZ(t,Ht.x,Ht.y,Ht.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ht.fromBufferAttribute(this,t),Ht.applyNormalMatrix(e),this.setXYZ(t,Ht.x,Ht.y,Ht.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ht.fromBufferAttribute(this,t),Ht.transformDirection(e),this.setXYZ(t,Ht.x,Ht.y,Ht.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=yn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=rt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=rt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=rt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=rt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=rt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=yn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=yn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=yn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=yn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=rt(t,this.array),n=rt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=rt(t,this.array),n=rt(n,this.array),i=rt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=rt(t,this.array),n=rt(n,this.array),i=rt(i,this.array),r=rt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new Ot(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Oa(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}};c(Oa,"InterleavedBufferAttribute");let Il=Oa;const Ym=new R,$m=new it,Km=new it,nx=new R,Jm=new je,bo=new R,mc=new nn,Zm=new je,gc=new hi,zd=class zd extends ut{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Em,this.bindMatrix=new je,this.bindMatrixInverse=new je,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new fn),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,bo),this.boundingBox.expandByPoint(bo)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new nn),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,bo),this.boundingSphere.expandByPoint(bo)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),mc.copy(this.boundingSphere),mc.applyMatrix4(i),e.ray.intersectsSphere(mc)!==!1&&(Zm.copy(i).invert(),gc.copy(e.ray).applyMatrix4(Zm),!(this.boundingBox!==null&&gc.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,gc)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new it,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Em?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===o0?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;$m.fromBufferAttribute(i.attributes.skinIndex,e),Km.fromBufferAttribute(i.attributes.skinWeight,e),Ym.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const o=Km.getComponent(r);if(o!==0){const a=$m.getComponent(r);Jm.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(nx.copy(Ym).applyMatrix4(Jm),o)}}return t.applyMatrix4(this.bindMatrixInverse)}};c(zd,"SkinnedMesh");let Dl=zd;const Vd=class Vd extends yt{constructor(){super(),this.isBone=!0,this.type="Bone"}};c(Vd,"Bone");let Zo=Vd;const Gd=class Gd extends Nt{constructor(e=null,t=1,n=1,i,r,o,a,l,u=Vt,h=Vt,d,f){super(null,o,a,l,u,h,i,r,d,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};c(Gd,"DataTexture");let Qo=Gd;const Qm=new je,ix=new je,Na=class Na{constructor(e=[],t=[]){this.uuid=hn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new je)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new je;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,o=e.length;r<o;r++){const a=e[r]?e[r].matrixWorld:ix;Qm.multiplyMatrices(a,t[r]),Qm.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new Na(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new Qo(t,e,e,un,bn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const r=e.bones[n];let o=t[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new Zo),this.bones.push(o),this.boneInverses.push(new je().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){const o=t[i];e.bones.push(o.uuid);const a=n[i];e.boneInverses.push(a.toArray())}return e}};c(Na,"Skeleton");let Ol=Na;const Wd=class Wd extends Ot{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}};c(Wd,"InstancedBufferAttribute");let Hr=Wd;const rs=new je,eg=new je,So=[],tg=new fn,sx=new je,lr=new ut,ur=new nn,Xd=class Xd extends ut{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Hr(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,sx)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new fn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,rs),tg.copy(e.boundingBox).applyMatrix4(rs),this.boundingBox.union(tg)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new nn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,rs),ur.copy(e.boundingSphere).applyMatrix4(rs),this.boundingSphere.union(ur)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(e,t){const n=this.matrixWorld,i=this.count;if(lr.geometry=this.geometry,lr.material=this.material,lr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ur.copy(this.boundingSphere),ur.applyMatrix4(n),e.ray.intersectsSphere(ur)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,rs),eg.multiplyMatrices(n,rs),lr.matrixWorld=eg,lr.raycast(e,So);for(let o=0,a=So.length;o<a;o++){const l=So[o];l.instanceId=r,l.object=this,t.push(l)}So.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Hr(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Qo(new Float32Array(i*this.count),i,this.count,Jh,bn));const r=this.morphTexture.source.data.data;let o=0;for(let u=0;u<n.length;u++)o+=n[u];const a=this.geometry.morphTargetsRelative?1:1-o,l=i*e;r[l]=a,r.set(n,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}};c(Xd,"InstancedMesh");let Nl=Xd;const _c=new R,rx=new R,ox=new Ye,jd=class jd{constructor(e=new R(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=_c.subVectors(n,t).cross(rx.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(_c),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||ox.getNormalMatrix(e),i=this.coplanarPoint(_c).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}};c(jd,"Plane");let Gn=jd;const Ti=new nn,ax=new le(.5,.5),Mo=new R,qd=class qd{constructor(e=new Gn,t=new Gn,n=new Gn,i=new Gn,r=new Gn,o=new Gn){this.planes=[e,t,n,i,r,o]}set(e,t,n,i,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Rn,n=!1){const i=this.planes,r=e.elements,o=r[0],a=r[1],l=r[2],u=r[3],h=r[4],d=r[5],f=r[6],p=r[7],_=r[8],v=r[9],g=r[10],m=r[11],A=r[12],E=r[13],y=r[14],C=r[15];if(i[0].setComponents(u-o,p-h,m-_,C-A).normalize(),i[1].setComponents(u+o,p+h,m+_,C+A).normalize(),i[2].setComponents(u+a,p+d,m+v,C+E).normalize(),i[3].setComponents(u-a,p-d,m-v,C-E).normalize(),n)i[4].setComponents(l,f,g,y).normalize(),i[5].setComponents(u-l,p-f,m-g,C-y).normalize();else if(i[4].setComponents(u-l,p-f,m-g,C-y).normalize(),t===Rn)i[5].setComponents(u+l,p+f,m+g,C+y).normalize();else if(t===jo)i[5].setComponents(l,f,g,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ti.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ti.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ti)}intersectsSprite(e){Ti.center.set(0,0,0);const t=ax.distanceTo(e.center);return Ti.radius=.7071067811865476+t,Ti.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ti)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Mo.x=i.normal.x>0?e.max.x:e.min.x,Mo.y=i.normal.y>0?e.max.y:e.min.y,Mo.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Mo)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};c(qd,"Frustum");let zr=qd;const Yd=class Yd extends tn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ze(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}};c(Yd,"LineBasicMaterial");let ea=Yd;const ta=new R,na=new R,ng=new je,hr=new hi,Eo=new nn,vc=new R,ig=new R,$d=class $d extends yt{constructor(e=new qt,t=new ea){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)ta.fromBufferAttribute(t,i-1),na.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=ta.distanceTo(na);e.setAttribute("lineDistance",new Et(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Eo.copy(n.boundingSphere),Eo.applyMatrix4(i),Eo.radius+=r,e.ray.intersectsSphere(Eo)===!1)return;ng.copy(i).invert(),hr.copy(e.ray).applyMatrix4(ng);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,u=this.isLineSegments?2:1,h=n.index,f=n.attributes.position;if(h!==null){const p=Math.max(0,o.start),_=Math.min(h.count,o.start+o.count);for(let v=p,g=_-1;v<g;v+=u){const m=h.getX(v),A=h.getX(v+1),E=wo(this,e,hr,l,m,A,v);E&&t.push(E)}if(this.isLineLoop){const v=h.getX(_-1),g=h.getX(p),m=wo(this,e,hr,l,v,g,_-1);m&&t.push(m)}}else{const p=Math.max(0,o.start),_=Math.min(f.count,o.start+o.count);for(let v=p,g=_-1;v<g;v+=u){const m=wo(this,e,hr,l,v,v+1,v);m&&t.push(m)}if(this.isLineLoop){const v=wo(this,e,hr,l,_-1,p,_-1);v&&t.push(v)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};c($d,"Line");let Vr=$d;function wo(s,e,t,n,i,r,o){const a=s.geometry.attributes.position;if(ta.fromBufferAttribute(a,i),na.fromBufferAttribute(a,r),t.distanceSqToSegment(ta,na,vc,ig)>n)return;vc.applyMatrix4(s.matrixWorld);const u=e.ray.origin.distanceTo(vc);if(!(u<e.near||u>e.far))return{distance:u,point:ig.clone().applyMatrix4(s.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:s}}c(wo,"checkIntersection");const sg=new R,rg=new R,Kd=class Kd extends Vr{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)sg.fromBufferAttribute(t,i),rg.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+sg.distanceTo(rg);e.setAttribute("lineDistance",new Et(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};c(Kd,"LineSegments");let Ul=Kd;const Jd=class Jd extends Vr{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}};c(Jd,"LineLoop");let Fl=Jd;const Zd=class Zd extends tn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ze(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}};c(Zd,"PointsMaterial");let Gr=Zd;const og=new je,Bl=new hi,To=new nn,Ao=new R,Qd=class Qd extends yt{constructor(e=new qt,t=new Gr){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),To.copy(n.boundingSphere),To.applyMatrix4(i),To.radius+=r,e.ray.intersectsSphere(To)===!1)return;og.copy(i).invert(),Bl.copy(e.ray).applyMatrix4(og);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,u=n.index,d=n.attributes.position;if(u!==null){const f=Math.max(0,o.start),p=Math.min(u.count,o.start+o.count);for(let _=f,v=p;_<v;_++){const g=u.getX(_);Ao.fromBufferAttribute(d,g),ag(Ao,g,l,i,e,t,this)}}else{const f=Math.max(0,o.start),p=Math.min(d.count,o.start+o.count);for(let _=f,v=p;_<v;_++)Ao.fromBufferAttribute(d,_),ag(Ao,_,l,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};c(Qd,"Points");let ia=Qd;function ag(s,e,t,n,i,r,o){const a=Bl.distanceSqToPoint(s);if(a<t){const l=new R;Bl.closestPointToPoint(s,l),l.applyMatrix4(n);const u=i.ray.origin.distanceTo(l);if(u<i.near||u>i.far)return;r.push({distance:u,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}c(ag,"testPoint");const ef=class ef extends Nt{constructor(e,t,n=ki,i,r,o,a=Vt,l=Vt,u,h=Dr,d=1){if(h!==Dr&&h!==Or)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:e,height:t,depth:d};super(f,i,r,o,a,l,h,n,u),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Br(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}};c(ef,"DepthTexture");let sa=ef;const Ua=class Ua extends qt{constructor(e=1,t=1,n=1,i=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const u=this;i=Math.floor(i),r=Math.floor(r);const h=[],d=[],f=[],p=[];let _=0;const v=[],g=n/2;let m=0;A(),o===!1&&(e>0&&E(!0),t>0&&E(!1)),this.setIndex(h),this.setAttribute("position",new Et(d,3)),this.setAttribute("normal",new Et(f,3)),this.setAttribute("uv",new Et(p,2));function A(){const y=new R,C=new R;let I=0;const P=(t-e)/n;for(let D=0;D<=r;D++){const w=[],M=D/r,S=M*(t-e)+e;for(let B=0;B<=i;B++){const N=B/i,H=N*l+a,j=Math.sin(H),V=Math.cos(H);C.x=S*j,C.y=-M*n+g,C.z=S*V,d.push(C.x,C.y,C.z),y.set(j,P,V).normalize(),f.push(y.x,y.y,y.z),p.push(N,1-M),w.push(_++)}v.push(w)}for(let D=0;D<i;D++)for(let w=0;w<r;w++){const M=v[w][D],S=v[w+1][D],B=v[w+1][D+1],N=v[w][D+1];(e>0||w!==0)&&(h.push(M,S,N),I+=3),(t>0||w!==r-1)&&(h.push(S,B,N),I+=3)}u.addGroup(m,I,0),m+=I}c(A,"generateTorso");function E(y){const C=_,I=new le,P=new R;let D=0;const w=y===!0?e:t,M=y===!0?1:-1;for(let B=1;B<=i;B++)d.push(0,g*M,0),f.push(0,M,0),p.push(.5,.5),_++;const S=_;for(let B=0;B<=i;B++){const H=B/i*l+a,j=Math.cos(H),V=Math.sin(H);P.x=w*V,P.y=g*M,P.z=w*j,d.push(P.x,P.y,P.z),f.push(0,M,0),I.x=j*.5+.5,I.y=V*.5*M+.5,p.push(I.x,I.y),_++}for(let B=0;B<i;B++){const N=C+B,H=S+B;y===!0?h.push(H,H+1,N):h.push(H+1,H,N),D+=3}u.addGroup(m,D,y===!0?1:2),m+=D}c(E,"generateCap")}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ua(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};c(Ua,"CylinderGeometry");let ra=Ua;const Fa=class Fa extends ra{constructor(e=1,t=1,n=32,i=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,n,i,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new Fa(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};c(Fa,"ConeGeometry");let Wr=Fa;const tf=class tf{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,i=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(i),t.push(r),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const n=this.getLengths();let i=0;const r=n.length;let o;t?o=t:o=e*n[r-1];let a=0,l=r-1,u;for(;a<=l;)if(i=Math.floor(a+(l-a)/2),u=n[i]-o,u<0)a=i+1;else if(u>0)l=i-1;else{l=i;break}if(i=l,n[i]===o)return i/(r-1);const h=n[i],f=n[i+1]-h,p=(o-h)/f;return(i+p)/(r-1)}getTangent(e,t){let i=e-1e-4,r=e+1e-4;i<0&&(i=0),r>1&&(r=1);const o=this.getPoint(i),a=this.getPoint(r),l=t||(o.isVector2?new le:new R);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){const n=new R,i=[],r=[],o=[],a=new R,l=new je;for(let p=0;p<=e;p++){const _=p/e;i[p]=this.getTangentAt(_,new R)}r[0]=new R,o[0]=new R;let u=Number.MAX_VALUE;const h=Math.abs(i[0].x),d=Math.abs(i[0].y),f=Math.abs(i[0].z);h<=u&&(u=h,n.set(1,0,0)),d<=u&&(u=d,n.set(0,1,0)),f<=u&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],a),o[0].crossVectors(i[0],r[0]);for(let p=1;p<=e;p++){if(r[p]=r[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(i[p-1],i[p]),a.length()>Number.EPSILON){a.normalize();const _=Math.acos(Ke(i[p-1].dot(i[p]),-1,1));r[p].applyMatrix4(l.makeRotationAxis(a,_))}o[p].crossVectors(i[p],r[p])}if(t===!0){let p=Math.acos(Ke(r[0].dot(r[e]),-1,1));p/=e,i[0].dot(a.crossVectors(r[0],r[e]))>0&&(p=-p);for(let _=1;_<=e;_++)r[_].applyMatrix4(l.makeRotationAxis(i[_],p*_)),o[_].crossVectors(i[_],r[_])}return{tangents:i,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}};c(tf,"Curve");let pn=tf;const nf=class nf extends pn{constructor(e=0,t=0,n=1,i=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new le){const n=t,i=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(o?r=0:r=i),this.aClockwise===!0&&!o&&(r===i?r=-i:r=r-i);const a=this.aStartAngle+e*r;let l=this.aX+this.xRadius*Math.cos(a),u=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),f=l-this.aX,p=u-this.aY;l=f*h-p*d+this.aX,u=f*d+p*h+this.aY}return n.set(l,u)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}};c(nf,"EllipseCurve");let Xr=nf;const sf=class sf extends Xr{constructor(e,t,n,i,r,o){super(e,t,n,n,i,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};c(sf,"ArcCurve");let kl=sf;function id(){let s=0,e=0,t=0,n=0;function i(r,o,a,l){s=r,e=a,t=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return c(i,"init"),{initCatmullRom:c(function(r,o,a,l,u){i(o,a,u*(a-r),u*(l-o))},"initCatmullRom"),initNonuniformCatmullRom:c(function(r,o,a,l,u,h,d){let f=(o-r)/u-(a-r)/(u+h)+(a-o)/h,p=(a-o)/h-(l-o)/(h+d)+(l-a)/d;f*=h,p*=h,i(o,a,f,p)},"initNonuniformCatmullRom"),calc:c(function(r){const o=r*r,a=o*r;return s+e*r+t*o+n*a},"calc")}}c(id,"CubicPoly");const Ro=new R,xc=new id,yc=new id,bc=new id,rf=class rf extends pn{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new R){const n=t,i=this.points,r=i.length,o=(r-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let u,h;this.closed||a>0?u=i[(a-1)%r]:(Ro.subVectors(i[0],i[1]).add(i[0]),u=Ro);const d=i[a%r],f=i[(a+1)%r];if(this.closed||a+2<r?h=i[(a+2)%r]:(Ro.subVectors(i[r-1],i[r-2]).add(i[r-1]),h=Ro),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let _=Math.pow(u.distanceToSquared(d),p),v=Math.pow(d.distanceToSquared(f),p),g=Math.pow(f.distanceToSquared(h),p);v<1e-4&&(v=1),_<1e-4&&(_=v),g<1e-4&&(g=v),xc.initNonuniformCatmullRom(u.x,d.x,f.x,h.x,_,v,g),yc.initNonuniformCatmullRom(u.y,d.y,f.y,h.y,_,v,g),bc.initNonuniformCatmullRom(u.z,d.z,f.z,h.z,_,v,g)}else this.curveType==="catmullrom"&&(xc.initCatmullRom(u.x,d.x,f.x,h.x,this.tension),yc.initCatmullRom(u.y,d.y,f.y,h.y,this.tension),bc.initCatmullRom(u.z,d.z,f.z,h.z,this.tension));return n.set(xc.calc(l),yc.calc(l),bc.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new R().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};c(rf,"CatmullRomCurve3");let Hl=rf;function cg(s,e,t,n,i){const r=(n-e)*.5,o=(i-t)*.5,a=s*s,l=s*a;return(2*t-2*n+r+o)*l+(-3*t+3*n-2*r-o)*a+r*s+t}c(cg,"CatmullRom");function cx(s,e){const t=1-s;return t*t*e}c(cx,"QuadraticBezierP0");function lx(s,e){return 2*(1-s)*s*e}c(lx,"QuadraticBezierP1");function ux(s,e){return s*s*e}c(ux,"QuadraticBezierP2");function Er(s,e,t,n){return cx(s,e)+lx(s,t)+ux(s,n)}c(Er,"QuadraticBezier");function hx(s,e){const t=1-s;return t*t*t*e}c(hx,"CubicBezierP0");function dx(s,e){const t=1-s;return 3*t*t*s*e}c(dx,"CubicBezierP1");function fx(s,e){return 3*(1-s)*s*s*e}c(fx,"CubicBezierP2");function px(s,e){return s*s*s*e}c(px,"CubicBezierP3");function wr(s,e,t,n,i){return hx(s,e)+dx(s,t)+fx(s,n)+px(s,i)}c(wr,"CubicBezier");const of=class of extends pn{constructor(e=new le,t=new le,n=new le,i=new le){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new le){const n=t,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(wr(e,i.x,r.x,o.x,a.x),wr(e,i.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}};c(of,"CubicBezierCurve");let oa=of;const af=class af extends pn{constructor(e=new R,t=new R,n=new R,i=new R){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new R){const n=t,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(wr(e,i.x,r.x,o.x,a.x),wr(e,i.y,r.y,o.y,a.y),wr(e,i.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}};c(af,"CubicBezierCurve3");let zl=af;const cf=class cf extends pn{constructor(e=new le,t=new le){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new le){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new le){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}};c(cf,"LineCurve");let aa=cf;const lf=class lf extends pn{constructor(e=new R,t=new R){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new R){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new R){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}};c(lf,"LineCurve3");let Vl=lf;const uf=class uf extends pn{constructor(e=new le,t=new le,n=new le){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new le){const n=t,i=this.v0,r=this.v1,o=this.v2;return n.set(Er(e,i.x,r.x,o.x),Er(e,i.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}};c(uf,"QuadraticBezierCurve");let ca=uf;const hf=class hf extends pn{constructor(e=new R,t=new R,n=new R){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new R){const n=t,i=this.v0,r=this.v1,o=this.v2;return n.set(Er(e,i.x,r.x,o.x),Er(e,i.y,r.y,o.y),Er(e,i.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}};c(hf,"QuadraticBezierCurve3");let Gl=hf;const df=class df extends pn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new le){const n=t,i=this.points,r=(i.length-1)*e,o=Math.floor(r),a=r-o,l=i[o===0?o:o-1],u=i[o],h=i[o>i.length-2?i.length-1:o+1],d=i[o>i.length-3?i.length-1:o+2];return n.set(cg(a,l.x,u.x,h.x,d.x),cg(a,l.y,u.y,h.y,d.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new le().fromArray(i))}return this}};c(df,"SplineCurve");let la=df;var Wl=Object.freeze({__proto__:null,ArcCurve:kl,CatmullRomCurve3:Hl,CubicBezierCurve:oa,CubicBezierCurve3:zl,EllipseCurve:Xr,LineCurve:aa,LineCurve3:Vl,QuadraticBezierCurve:ca,QuadraticBezierCurve3:Gl,SplineCurve:la});const ff=class ff extends pn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Wl[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),i=this.getCurveLengths();let r=0;for(;r<i.length;){if(i[r]>=n){const o=i[r]-n,a=this.curves[r],l=a.getLength(),u=l===0?0:1-o/l;return a.getPointAt(u,t)}r++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let i=0,r=this.curves;i<r.length;i++){const o=r[i],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let u=0;u<l.length;u++){const h=l[u];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(new Wl[i.type]().fromJSON(i))}return this}};c(ff,"CurvePath");let Xl=ff;const pf=class pf extends Xl{constructor(e){super(),this.type="Path",this.currentPoint=new le,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new aa(this.currentPoint.clone(),new le(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){const r=new ca(this.currentPoint.clone(),new le(e,t),new le(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,r,o){const a=new oa(this.currentPoint.clone(),new le(e,t),new le(n,i),new le(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new la(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,r,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,n,i,r,o),this}absarc(e,t,n,i,r,o){return this.absellipse(e,t,n,n,i,r,o),this}ellipse(e,t,n,i,r,o,a,l){const u=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+u,t+h,n,i,r,o,a,l),this}absellipse(e,t,n,i,r,o,a,l){const u=new Xr(e,t,n,i,r,o,a,l);if(this.curves.length>0){const d=u.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(u);const h=u.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}};c(pf,"Path");let ua=pf;const mf=class mf extends ua{constructor(e){super(e),this.uuid=hn(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,i=this.holes.length;n<i;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const i=this.holes[t];e.holes.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(new ua().fromJSON(i))}return this}};c(mf,"Shape");let ha=mf;function mx(s,e,t=2){const n=e&&e.length,i=n?e[0]*t:s.length;let r=S_(s,0,i,t,!0);const o=[];if(!r||r.next===r.prev)return o;let a,l,u;if(n&&(r=yx(s,e,r,t)),s.length>80*t){a=1/0,l=1/0;let h=-1/0,d=-1/0;for(let f=t;f<i;f+=t){const p=s[f],_=s[f+1];p<a&&(a=p),_<l&&(l=_),p>h&&(h=p),_>d&&(d=_)}u=Math.max(h-a,d-l),u=u!==0?32767/u:0}return jr(r,o,t,a,l,u,0),o}c(mx,"earcut");function S_(s,e,t,n,i){let r;if(i===Lx(s,e,t,n)>0)for(let o=e;o<t;o+=n)r=lg(o/n|0,s[o],s[o+1],r);else for(let o=t-n;o>=e;o-=n)r=lg(o/n|0,s[o],s[o+1],r);return r&&tr(r,r.next)&&(Yr(r),r=r.next),r}c(S_,"linkedList");function Hi(s,e){if(!s)return s;e||(e=s);let t=s,n;do if(n=!1,!t.steiner&&(tr(t,t.next)||xt(t.prev,t,t.next)===0)){if(Yr(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}c(Hi,"filterPoints");function jr(s,e,t,n,i,r,o){if(!s)return;!o&&r&&wx(s,n,i,r);let a=s;for(;s.prev!==s.next;){const l=s.prev,u=s.next;if(r?_x(s,n,i,r):gx(s)){e.push(l.i,s.i,u.i),Yr(s),s=u.next,a=u.next;continue}if(s=u,s===a){o?o===1?(s=vx(Hi(s),e),jr(s,e,t,n,i,r,2)):o===2&&xx(s,e,t,n,i,r):jr(Hi(s),e,t,n,i,r,1);break}}}c(jr,"earcutLinked");function gx(s){const e=s.prev,t=s,n=s.next;if(xt(e,t,n)>=0)return!1;const i=e.x,r=t.x,o=n.x,a=e.y,l=t.y,u=n.y,h=Math.min(i,r,o),d=Math.min(a,l,u),f=Math.max(i,r,o),p=Math.max(a,l,u);let _=n.next;for(;_!==e;){if(_.x>=h&&_.x<=f&&_.y>=d&&_.y<=p&&_r(i,a,r,l,o,u,_.x,_.y)&&xt(_.prev,_,_.next)>=0)return!1;_=_.next}return!0}c(gx,"isEar");function _x(s,e,t,n){const i=s.prev,r=s,o=s.next;if(xt(i,r,o)>=0)return!1;const a=i.x,l=r.x,u=o.x,h=i.y,d=r.y,f=o.y,p=Math.min(a,l,u),_=Math.min(h,d,f),v=Math.max(a,l,u),g=Math.max(h,d,f),m=jl(p,_,e,t,n),A=jl(v,g,e,t,n);let E=s.prevZ,y=s.nextZ;for(;E&&E.z>=m&&y&&y.z<=A;){if(E.x>=p&&E.x<=v&&E.y>=_&&E.y<=g&&E!==i&&E!==o&&_r(a,h,l,d,u,f,E.x,E.y)&&xt(E.prev,E,E.next)>=0||(E=E.prevZ,y.x>=p&&y.x<=v&&y.y>=_&&y.y<=g&&y!==i&&y!==o&&_r(a,h,l,d,u,f,y.x,y.y)&&xt(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;E&&E.z>=m;){if(E.x>=p&&E.x<=v&&E.y>=_&&E.y<=g&&E!==i&&E!==o&&_r(a,h,l,d,u,f,E.x,E.y)&&xt(E.prev,E,E.next)>=0)return!1;E=E.prevZ}for(;y&&y.z<=A;){if(y.x>=p&&y.x<=v&&y.y>=_&&y.y<=g&&y!==i&&y!==o&&_r(a,h,l,d,u,f,y.x,y.y)&&xt(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}c(_x,"isEarHashed");function vx(s,e){let t=s;do{const n=t.prev,i=t.next.next;!tr(n,i)&&E_(n,t,t.next,i)&&qr(n,i)&&qr(i,n)&&(e.push(n.i,t.i,i.i),Yr(t),Yr(t.next),t=s=i),t=t.next}while(t!==s);return Hi(t)}c(vx,"cureLocalIntersections");function xx(s,e,t,n,i,r){let o=s;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Rx(o,a)){let l=w_(o,a);o=Hi(o,o.next),l=Hi(l,l.next),jr(o,e,t,n,i,r,0),jr(l,e,t,n,i,r,0);return}a=a.next}o=o.next}while(o!==s)}c(xx,"splitEarcut");function yx(s,e,t,n){const i=[];for(let r=0,o=e.length;r<o;r++){const a=e[r]*n,l=r<o-1?e[r+1]*n:s.length,u=S_(s,a,l,n,!1);u===u.next&&(u.steiner=!0),i.push(Ax(u))}i.sort(bx);for(let r=0;r<i.length;r++)t=Sx(i[r],t);return t}c(yx,"eliminateHoles");function bx(s,e){let t=s.x-e.x;if(t===0&&(t=s.y-e.y,t===0)){const n=(s.next.y-s.y)/(s.next.x-s.x),i=(e.next.y-e.y)/(e.next.x-e.x);t=n-i}return t}c(bx,"compareXYSlope");function Sx(s,e){const t=Mx(s,e);if(!t)return e;const n=w_(t,s);return Hi(n,n.next),Hi(t,t.next)}c(Sx,"eliminateHole");function Mx(s,e){let t=e;const n=s.x,i=s.y;let r=-1/0,o;if(tr(s,t))return t;do{if(tr(s,t.next))return t.next;if(i<=t.y&&i>=t.next.y&&t.next.y!==t.y){const d=t.x+(i-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=n&&d>r&&(r=d,o=t.x<t.next.x?t:t.next,d===n))return o}t=t.next}while(t!==e);if(!o)return null;const a=o,l=o.x,u=o.y;let h=1/0;t=o;do{if(n>=t.x&&t.x>=l&&n!==t.x&&M_(i<u?n:r,i,l,u,i<u?r:n,i,t.x,t.y)){const d=Math.abs(i-t.y)/(n-t.x);qr(t,s)&&(d<h||d===h&&(t.x>o.x||t.x===o.x&&Ex(o,t)))&&(o=t,h=d)}t=t.next}while(t!==a);return o}c(Mx,"findHoleBridge");function Ex(s,e){return xt(s.prev,s,e.prev)<0&&xt(e.next,s,s.next)<0}c(Ex,"sectorContainsSector");function wx(s,e,t,n){let i=s;do i.z===0&&(i.z=jl(i.x,i.y,e,t,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,Tx(i)}c(wx,"indexCurve");function Tx(s){let e,t=1;do{let n=s,i;s=null;let r=null;for(e=0;n;){e++;let o=n,a=0;for(let u=0;u<t&&(a++,o=o.nextZ,!!o);u++);let l=t;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||n.z<=o.z)?(i=n,n=n.nextZ,a--):(i=o,o=o.nextZ,l--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;n=o}r.nextZ=null,t*=2}while(e>1);return s}c(Tx,"sortLinked");function jl(s,e,t,n,i){return s=(s-t)*i|0,e=(e-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,s|e<<1}c(jl,"zOrder");function Ax(s){let e=s,t=s;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==s);return t}c(Ax,"getLeftmost");function M_(s,e,t,n,i,r,o,a){return(i-o)*(e-a)>=(s-o)*(r-a)&&(s-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(i-o)*(n-a)}c(M_,"pointInTriangle");function _r(s,e,t,n,i,r,o,a){return!(s===o&&e===a)&&M_(s,e,t,n,i,r,o,a)}c(_r,"pointInTriangleExceptFirst");function Rx(s,e){return s.next.i!==e.i&&s.prev.i!==e.i&&!Cx(s,e)&&(qr(s,e)&&qr(e,s)&&Px(s,e)&&(xt(s.prev,s,e.prev)||xt(s,e.prev,e))||tr(s,e)&&xt(s.prev,s,s.next)>0&&xt(e.prev,e,e.next)>0)}c(Rx,"isValidDiagonal");function xt(s,e,t){return(e.y-s.y)*(t.x-e.x)-(e.x-s.x)*(t.y-e.y)}c(xt,"area");function tr(s,e){return s.x===e.x&&s.y===e.y}c(tr,"equals");function E_(s,e,t,n){const i=Po(xt(s,e,t)),r=Po(xt(s,e,n)),o=Po(xt(t,n,s)),a=Po(xt(t,n,e));return!!(i!==r&&o!==a||i===0&&Co(s,t,e)||r===0&&Co(s,n,e)||o===0&&Co(t,s,n)||a===0&&Co(t,e,n))}c(E_,"intersects");function Co(s,e,t){return e.x<=Math.max(s.x,t.x)&&e.x>=Math.min(s.x,t.x)&&e.y<=Math.max(s.y,t.y)&&e.y>=Math.min(s.y,t.y)}c(Co,"onSegment");function Po(s){return s>0?1:s<0?-1:0}c(Po,"sign");function Cx(s,e){let t=s;do{if(t.i!==s.i&&t.next.i!==s.i&&t.i!==e.i&&t.next.i!==e.i&&E_(t,t.next,s,e))return!0;t=t.next}while(t!==s);return!1}c(Cx,"intersectsPolygon");function qr(s,e){return xt(s.prev,s,s.next)<0?xt(s,e,s.next)>=0&&xt(s,s.prev,e)>=0:xt(s,e,s.prev)<0||xt(s,s.next,e)<0}c(qr,"locallyInside");function Px(s,e){let t=s,n=!1;const i=(s.x+e.x)/2,r=(s.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&i<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==s);return n}c(Px,"middleInside");function w_(s,e){const t=ql(s.i,s.x,s.y),n=ql(e.i,e.x,e.y),i=s.next,r=e.prev;return s.next=e,e.prev=s,t.next=i,i.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}c(w_,"splitPolygon");function lg(s,e,t,n){const i=ql(s,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}c(lg,"insertNode");function Yr(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}c(Yr,"removeNode");function ql(s,e,t){return{i:s,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}c(ql,"createNode");function Lx(s,e,t,n){let i=0;for(let r=e,o=t-n;r<t;r+=n)i+=(s[o]-s[r])*(s[r+1]+s[o+1]),o=r;return i}c(Lx,"signedArea");const gf=class gf{static triangulate(e,t,n=2){return mx(e,t,n)}};c(gf,"Earcut");let Yl=gf;const Ba=class Ba{static area(e){const t=e.length;let n=0;for(let i=t-1,r=0;r<t;i=r++)n+=e[i].x*e[r].y-e[r].x*e[i].y;return n*.5}static isClockWise(e){return Ba.area(e)<0}static triangulateShape(e,t){const n=[],i=[],r=[];ug(e),hg(n,e);let o=e.length;t.forEach(ug);for(let l=0;l<t.length;l++)i.push(o),o+=t[l].length,hg(n,t[l]);const a=Yl.triangulate(n,i);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};c(Ba,"ShapeUtils");let us=Ba;function ug(s){const e=s.length;e>2&&s[e-1].equals(s[0])&&s.pop()}c(ug,"removeDupEndPts");function hg(s,e){for(let t=0;t<e.length;t++)s.push(e[t].x),s.push(e[t].y)}c(hg,"addContour");const ka=class ka extends qt{constructor(e=new ha([new le(.5,.5),new le(-.5,.5),new le(-.5,-.5),new le(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,i=[],r=[];for(let a=0,l=e.length;a<l;a++){const u=e[a];o(u)}this.setAttribute("position",new Et(i,3)),this.setAttribute("uv",new Et(r,2)),this.computeVertexNormals();function o(a){const l=[],u=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,d=t.depth!==void 0?t.depth:1;let f=t.bevelEnabled!==void 0?t.bevelEnabled:!0,p=t.bevelThickness!==void 0?t.bevelThickness:.2,_=t.bevelSize!==void 0?t.bevelSize:p-.1,v=t.bevelOffset!==void 0?t.bevelOffset:0,g=t.bevelSegments!==void 0?t.bevelSegments:3;const m=t.extrudePath,A=t.UVGenerator!==void 0?t.UVGenerator:Ix;let E,y=!1,C,I,P,D;m&&(E=m.getSpacedPoints(h),y=!0,f=!1,C=m.computeFrenetFrames(h,!1),I=new R,P=new R,D=new R),f||(g=0,p=0,_=0,v=0);const w=a.extractPoints(u);let M=w.shape;const S=w.holes;if(!us.isClockWise(M)){M=M.reverse();for(let te=0,J=S.length;te<J;te++){const ie=S[te];us.isClockWise(ie)&&(S[te]=ie.reverse())}}function N(te){const ie=10000000000000001e-36;let Q=te[0];for(let fe=1;fe<=te.length;fe++){const se=fe%te.length,pe=te[se],We=pe.x-Q.x,Ve=pe.y-Q.y,T=We*We+Ve*Ve,x=Math.max(Math.abs(pe.x),Math.abs(pe.y),Math.abs(Q.x),Math.abs(Q.y)),k=ie*x*x;if(T<=k){te.splice(se,1),fe--;continue}Q=pe}}c(N,"mergeOverlappingPoints"),N(M),S.forEach(N);const H=S.length,j=M;for(let te=0;te<H;te++){const J=S[te];M=M.concat(J)}function V(te,J,ie){return J||console.error("THREE.ExtrudeGeometry: vec does not exist"),te.clone().addScaledVector(J,ie)}c(V,"scalePt2");const K=M.length;function G(te,J,ie){let Q,fe,se;const pe=te.x-J.x,We=te.y-J.y,Ve=ie.x-te.x,T=ie.y-te.y,x=pe*pe+We*We,k=pe*T-We*Ve;if(Math.abs(k)>Number.EPSILON){const q=Math.sqrt(x),ne=Math.sqrt(Ve*Ve+T*T),Y=J.x-We/q,Pe=J.y+pe/q,he=ie.x-T/ne,Te=ie.y+Ve/ne,Ae=((he-Y)*T-(Te-Pe)*Ve)/(pe*T-We*Ve);Q=Y+pe*Ae-te.x,fe=Pe+We*Ae-te.y;const oe=Q*Q+fe*fe;if(oe<=2)return new le(Q,fe);se=Math.sqrt(oe/2)}else{let q=!1;pe>Number.EPSILON?Ve>Number.EPSILON&&(q=!0):pe<-Number.EPSILON?Ve<-Number.EPSILON&&(q=!0):Math.sign(We)===Math.sign(T)&&(q=!0),q?(Q=-We,fe=pe,se=Math.sqrt(x)):(Q=pe,fe=We,se=Math.sqrt(x/2))}return new le(Q/se,fe/se)}c(G,"getBevelVec");const re=[];for(let te=0,J=j.length,ie=J-1,Q=te+1;te<J;te++,ie++,Q++)ie===J&&(ie=0),Q===J&&(Q=0),re[te]=G(j[te],j[ie],j[Q]);const _e=[];let Se,Ue=re.concat();for(let te=0,J=H;te<J;te++){const ie=S[te];Se=[];for(let Q=0,fe=ie.length,se=fe-1,pe=Q+1;Q<fe;Q++,se++,pe++)se===fe&&(se=0),pe===fe&&(pe=0),Se[Q]=G(ie[Q],ie[se],ie[pe]);_e.push(Se),Ue=Ue.concat(Se)}let Je;if(g===0)Je=us.triangulateShape(j,S);else{const te=[],J=[];for(let ie=0;ie<g;ie++){const Q=ie/g,fe=p*Math.cos(Q*Math.PI/2),se=_*Math.sin(Q*Math.PI/2)+v;for(let pe=0,We=j.length;pe<We;pe++){const Ve=V(j[pe],re[pe],se);Ce(Ve.x,Ve.y,-fe),Q===0&&te.push(Ve)}for(let pe=0,We=H;pe<We;pe++){const Ve=S[pe];Se=_e[pe];const T=[];for(let x=0,k=Ve.length;x<k;x++){const q=V(Ve[x],Se[x],se);Ce(q.x,q.y,-fe),Q===0&&T.push(q)}Q===0&&J.push(T)}}Je=us.triangulateShape(te,J)}const Qe=Je.length,$=_+v;for(let te=0;te<K;te++){const J=f?V(M[te],Ue[te],$):M[te];y?(P.copy(C.normals[0]).multiplyScalar(J.x),I.copy(C.binormals[0]).multiplyScalar(J.y),D.copy(E[0]).add(P).add(I),Ce(D.x,D.y,D.z)):Ce(J.x,J.y,0)}for(let te=1;te<=h;te++)for(let J=0;J<K;J++){const ie=f?V(M[J],Ue[J],$):M[J];y?(P.copy(C.normals[te]).multiplyScalar(ie.x),I.copy(C.binormals[te]).multiplyScalar(ie.y),D.copy(E[te]).add(P).add(I),Ce(D.x,D.y,D.z)):Ce(ie.x,ie.y,d/h*te)}for(let te=g-1;te>=0;te--){const J=te/g,ie=p*Math.cos(J*Math.PI/2),Q=_*Math.sin(J*Math.PI/2)+v;for(let fe=0,se=j.length;fe<se;fe++){const pe=V(j[fe],re[fe],Q);Ce(pe.x,pe.y,d+ie)}for(let fe=0,se=S.length;fe<se;fe++){const pe=S[fe];Se=_e[fe];for(let We=0,Ve=pe.length;We<Ve;We++){const T=V(pe[We],Se[We],Q);y?Ce(T.x,T.y+E[h-1].y,E[h-1].x+ie):Ce(T.x,T.y,d+ie)}}}ge(),de();function ge(){const te=i.length/3;if(f){let J=0,ie=K*J;for(let Q=0;Q<Qe;Q++){const fe=Je[Q];Be(fe[2]+ie,fe[1]+ie,fe[0]+ie)}J=h+g*2,ie=K*J;for(let Q=0;Q<Qe;Q++){const fe=Je[Q];Be(fe[0]+ie,fe[1]+ie,fe[2]+ie)}}else{for(let J=0;J<Qe;J++){const ie=Je[J];Be(ie[2],ie[1],ie[0])}for(let J=0;J<Qe;J++){const ie=Je[J];Be(ie[0]+K*h,ie[1]+K*h,ie[2]+K*h)}}n.addGroup(te,i.length/3-te,0)}c(ge,"buildLidFaces");function de(){const te=i.length/3;let J=0;Oe(j,J),J+=j.length;for(let ie=0,Q=S.length;ie<Q;ie++){const fe=S[ie];Oe(fe,J),J+=fe.length}n.addGroup(te,i.length/3-te,1)}c(de,"buildSideFaces");function Oe(te,J){let ie=te.length;for(;--ie>=0;){const Q=ie;let fe=ie-1;fe<0&&(fe=te.length-1);for(let se=0,pe=h+g*2;se<pe;se++){const We=K*se,Ve=K*(se+1),T=J+Q+We,x=J+fe+We,k=J+fe+Ve,q=J+Q+Ve;gt(T,x,k,q)}}}c(Oe,"sidewalls");function Ce(te,J,ie){l.push(te),l.push(J),l.push(ie)}c(Ce,"v");function Be(te,J,ie){Ge(te),Ge(J),Ge(ie);const Q=i.length/3,fe=A.generateTopUV(n,i,Q-3,Q-2,Q-1);L(fe[0]),L(fe[1]),L(fe[2])}c(Be,"f3");function gt(te,J,ie,Q){Ge(te),Ge(J),Ge(Q),Ge(J),Ge(ie),Ge(Q);const fe=i.length/3,se=A.generateSideWallUV(n,i,fe-6,fe-3,fe-2,fe-1);L(se[0]),L(se[1]),L(se[3]),L(se[1]),L(se[2]),L(se[3])}c(gt,"f4");function Ge(te){i.push(l[te*3+0]),i.push(l[te*3+1]),i.push(l[te*3+2])}c(Ge,"addVertex");function L(te){r.push(te.x),r.push(te.y)}c(L,"addUV")}c(o,"addShape")}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return Dx(t,n,e)}static fromJSON(e,t){const n=[];for(let r=0,o=e.shapes.length;r<o;r++){const a=t[e.shapes[r]];n.push(a)}const i=e.options.extrudePath;return i!==void 0&&(e.options.extrudePath=new Wl[i.type]().fromJSON(i)),new ka(n,e.options)}};c(ka,"ExtrudeGeometry");let $l=ka;const Ix={generateTopUV:c(function(s,e,t,n,i){const r=e[t*3],o=e[t*3+1],a=e[n*3],l=e[n*3+1],u=e[i*3],h=e[i*3+1];return[new le(r,o),new le(a,l),new le(u,h)]},"generateTopUV"),generateSideWallUV:c(function(s,e,t,n,i,r){const o=e[t*3],a=e[t*3+1],l=e[t*3+2],u=e[n*3],h=e[n*3+1],d=e[n*3+2],f=e[i*3],p=e[i*3+1],_=e[i*3+2],v=e[r*3],g=e[r*3+1],m=e[r*3+2];return Math.abs(a-h)<Math.abs(o-u)?[new le(o,1-l),new le(u,1-d),new le(f,1-_),new le(v,1-m)]:[new le(a,1-l),new le(h,1-d),new le(p,1-_),new le(g,1-m)]},"generateSideWallUV")};function Dx(s,e,t){if(t.shapes=[],Array.isArray(s))for(let n=0,i=s.length;n<i;n++){const r=s[n];t.shapes.push(r.uuid)}else t.shapes.push(s.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}c(Dx,"toJSON$1");const Ha=class Ha extends qt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(i),u=a+1,h=l+1,d=e/a,f=t/l,p=[],_=[],v=[],g=[];for(let m=0;m<h;m++){const A=m*f-o;for(let E=0;E<u;E++){const y=E*d-r;_.push(y,-A,0),v.push(0,0,1),g.push(E/a),g.push(1-m/l)}}for(let m=0;m<l;m++)for(let A=0;A<a;A++){const E=A+u*m,y=A+u*(m+1),C=A+1+u*(m+1),I=A+1+u*m;p.push(E,y,I),p.push(y,C,I)}this.setIndex(p),this.setAttribute("position",new Et(_,3)),this.setAttribute("normal",new Et(v,3)),this.setAttribute("uv",new Et(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ha(e.width,e.height,e.widthSegments,e.heightSegments)}};c(Ha,"PlaneGeometry");let da=Ha;const za=class za extends qt{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let u=0;const h=[],d=new R,f=new R,p=[],_=[],v=[],g=[];for(let m=0;m<=n;m++){const A=[],E=m/n;let y=0;m===0&&o===0?y=.5/t:m===n&&l===Math.PI&&(y=-.5/t);for(let C=0;C<=t;C++){const I=C/t;d.x=-e*Math.cos(i+I*r)*Math.sin(o+E*a),d.y=e*Math.cos(o+E*a),d.z=e*Math.sin(i+I*r)*Math.sin(o+E*a),_.push(d.x,d.y,d.z),f.copy(d).normalize(),v.push(f.x,f.y,f.z),g.push(I+y,1-E),A.push(u++)}h.push(A)}for(let m=0;m<n;m++)for(let A=0;A<t;A++){const E=h[m][A+1],y=h[m][A],C=h[m+1][A],I=h[m+1][A+1];(m!==0||o>0)&&p.push(E,y,I),(m!==n-1||l<Math.PI)&&p.push(y,C,I)}this.setIndex(p),this.setAttribute("position",new Et(_,3)),this.setAttribute("normal",new Et(v,3)),this.setAttribute("uv",new Et(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new za(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};c(za,"SphereGeometry");let fa=za;const _f=class _f extends tn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ze(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ze(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=td,this.normalScale=new le(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Sn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};c(_f,"MeshStandardMaterial");let $r=_f;const vf=class vf extends $r{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new le(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:c(function(){return Ke(2.5*(this.ior-1)/(this.ior+1),0,1)},"get"),set:c(function(t){this.ior=(1+.4*t)/(1-.4*t)},"set")}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ze(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ze(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ze(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};c(vf,"MeshPhysicalMaterial");let mn=vf;const xf=class xf extends tn{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ze(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=td,this.normalScale=new le(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Sn,this.combine=qh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};c(xf,"MeshLambertMaterial");let Yt=xf;const yf=class yf extends tn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=l0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}};c(yf,"MeshDepthMaterial");let Kl=yf;const bf=class bf extends tn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};c(bf,"MeshDistanceMaterial");let Jl=bf;function Lo(s,e){return!s||s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}c(Lo,"convertArray");function Ox(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}c(Ox,"isTypedArray");function Nx(s){function e(i,r){return s[i]-s[r]}c(e,"compareTime");const t=s.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}c(Nx,"getKeyframeOrder");function dg(s,e,t){const n=s.length,i=new s.constructor(n);for(let r=0,o=0;o!==n;++r){const a=t[r]*e;for(let l=0;l!==e;++l)i[o++]=s[a+l]}return i}c(dg,"sortedArray");function T_(s,e,t,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push(...o)),r=s[i++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=s[i++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=s[i++];while(r!==void 0)}c(T_,"flattenJSON");const Sf=class Sf{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=i,i=t[++n],e<i)break e}o=t.length;break t}if(!(e>=r)){const a=t[1];e<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){const a=n+o>>>1;e<t[a]?o=a:n=a+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let o=0;o!==i;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}};c(Sf,"Interpolant");let zi=Sf;const Mf=class Mf extends zi{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:wm,endingEnd:wm}}intervalChanged_(e,t,n){const i=this.parameterPositions;let r=e-2,o=e+1,a=i[r],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case Tm:r=e,a=2*t-n;break;case Am:r=i.length-2,a=t+i[r]-i[r+1];break;default:r=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Tm:o=e,l=2*n-t;break;case Am:o=1,l=n+i[1]-i[0];break;default:o=e-1,l=t}const u=(n-t)*.5,h=this.valueSize;this._weightPrev=u/(t-a),this._weightNext=u/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,u=l-a,h=this._offsetPrev,d=this._offsetNext,f=this._weightPrev,p=this._weightNext,_=(n-t)/(i-t),v=_*_,g=v*_,m=-f*g+2*f*v-f*_,A=(1+f)*g+(-1.5-2*f)*v+(-.5+f)*_+1,E=(-1-p)*g+(1.5+p)*v+.5*_,y=p*g-p*v;for(let C=0;C!==a;++C)r[C]=m*o[h+C]+A*o[u+C]+E*o[l+C]+y*o[d+C];return r}};c(Mf,"CubicInterpolant");let Zl=Mf;const Ef=class Ef extends zi{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,u=l-a,h=(n-t)/(i-t),d=1-h;for(let f=0;f!==a;++f)r[f]=o[u+f]*d+o[l+f]*h;return r}};c(Ef,"LinearInterpolant");let Ql=Ef;const wf=class wf extends zi{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}};c(wf,"DiscreteInterpolant");let eu=wf;const Tf=class Tf{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Lo(t,this.TimeBufferType),this.values=Lo(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Lo(e.times,Array),values:Lo(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new eu(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Ql(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Zl(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Nr:t=this.InterpolantFactoryMethodDiscrete;break;case Ur:t=this.InterpolantFactoryMethodLinear;break;case Ya:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Nr;case this.InterpolantFactoryMethodLinear:return Ur;case this.InterpolantFactoryMethodSmooth:return Ya}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let r=0,o=i-1;for(;r!==i&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==i){r>=o&&(o=Math.max(o,1),r=o-1);const a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){const l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(i!==void 0&&Ox(i))for(let a=0,l=i.length;a!==l;++a){const u=i[a];if(isNaN(u)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,u),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Ya,r=e.length-1;let o=1;for(let a=1;a<r;++a){let l=!1;const u=e[a],h=e[a+1];if(u!==h&&(a!==1||u!==e[0]))if(i)l=!0;else{const d=a*n,f=d-n,p=d+n;for(let _=0;_!==n;++_){const v=t[d+_];if(v!==t[f+_]||v!==t[p+_]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];const d=a*n,f=o*n;for(let p=0;p!==n;++p)t[f+p]=t[d+p]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,l=o*n,u=0;u!==n;++u)t[l+u]=t[a+u];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}};c(Tf,"KeyframeTrack");let sn=Tf;sn.prototype.ValueTypeName="";sn.prototype.TimeBufferType=Float32Array;sn.prototype.ValueBufferType=Float32Array;sn.prototype.DefaultInterpolation=Ur;const Af=class Af extends sn{constructor(e,t,n){super(e,t,n)}};c(Af,"BooleanKeyframeTrack");let di=Af;di.prototype.ValueTypeName="bool";di.prototype.ValueBufferType=Array;di.prototype.DefaultInterpolation=Nr;di.prototype.InterpolantFactoryMethodLinear=void 0;di.prototype.InterpolantFactoryMethodSmooth=void 0;const Rf=class Rf extends sn{constructor(e,t,n,i){super(e,t,n,i)}};c(Rf,"ColorKeyframeTrack");let pa=Rf;pa.prototype.ValueTypeName="color";const Cf=class Cf extends sn{constructor(e,t,n,i){super(e,t,n,i)}};c(Cf,"NumberKeyframeTrack");let fi=Cf;fi.prototype.ValueTypeName="number";const Pf=class Pf extends zi{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(i-t);let u=e*a;for(let h=u+a;u!==h;u+=4)wt.slerpFlat(r,0,o,u-a,o,u,l);return r}};c(Pf,"QuaternionLinearInterpolant");let tu=Pf;const Lf=class Lf extends sn{constructor(e,t,n,i){super(e,t,n,i)}InterpolantFactoryMethodLinear(e){return new tu(this.times,this.values,this.getValueSize(),e)}};c(Lf,"QuaternionKeyframeTrack");let pi=Lf;pi.prototype.ValueTypeName="quaternion";pi.prototype.InterpolantFactoryMethodSmooth=void 0;const If=class If extends sn{constructor(e,t,n){super(e,t,n)}};c(If,"StringKeyframeTrack");let mi=If;mi.prototype.ValueTypeName="string";mi.prototype.ValueBufferType=Array;mi.prototype.DefaultInterpolation=Nr;mi.prototype.InterpolantFactoryMethodLinear=void 0;mi.prototype.InterpolantFactoryMethodSmooth=void 0;const Df=class Df extends sn{constructor(e,t,n,i){super(e,t,n,i)}};c(Df,"VectorKeyframeTrack");let gi=Df;gi.prototype.ValueTypeName="vector";const Of=class Of{constructor(e="",t=-1,n=[],i=a0){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=hn(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(Fx(n[o]).scale(i));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,o=n.length;r!==o;++r)t.push(sn.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const r=t.length,o=[];for(let a=0;a<r;a++){let l=[],u=[];l.push((a+r-1)%r,a,(a+1)%r),u.push(0,1,0);const h=Nx(l);l=dg(l,1,h),u=dg(u,1,h),!i&&l[0]===0&&(l.push(r),u.push(u[0])),o.push(new fi(".morphTargetInfluences["+t[a].name+"]",l,u).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){const u=e[a],h=u.name.match(r);if(h&&h.length>1){const d=h[1];let f=i[d];f||(i[d]=f=[]),f.push(u)}}const o=[];for(const a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],t,n));return o}static parseAnimation(e,t){if(console.warn("THREE.AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=c(function(d,f,p,_,v){if(p.length!==0){const g=[],m=[];T_(p,g,m,_),g.length!==0&&v.push(new d(f,g,m))}},"addNonemptyTrack"),i=[],r=e.name||"default",o=e.fps||30,a=e.blendMode;let l=e.length||-1;const u=e.hierarchy||[];for(let d=0;d<u.length;d++){const f=u[d].keys;if(!(!f||f.length===0))if(f[0].morphTargets){const p={};let _;for(_=0;_<f.length;_++)if(f[_].morphTargets)for(let v=0;v<f[_].morphTargets.length;v++)p[f[_].morphTargets[v]]=-1;for(const v in p){const g=[],m=[];for(let A=0;A!==f[_].morphTargets.length;++A){const E=f[_];g.push(E.time),m.push(E.morphTarget===v?1:0)}i.push(new fi(".morphTargetInfluence["+v+"]",g,m))}l=p.length*o}else{const p=".bones["+t[d].name+"]";n(gi,p+".position",f,"pos",i),n(pi,p+".quaternion",f,"rot",i),n(gi,p+".scale",f,"scl",i)}}return i.length===0?null:new this(r,l,i,a)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}};c(Of,"AnimationClip");let nu=Of;function Ux(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return fi;case"vector":case"vector2":case"vector3":case"vector4":return gi;case"color":return pa;case"quaternion":return pi;case"bool":case"boolean":return di;case"string":return mi}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}c(Ux,"getTrackTypeForValueTypeName");function Fx(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=Ux(s.type);if(s.times===void 0){const t=[],n=[];T_(s.keys,t,n,"value"),s.times=t,s.values=n}return e.parse!==void 0?e.parse(s):new e(s.name,s.times,s.values,s.interpolation)}c(Fx,"parseKeyframeTrack");const jn={enabled:!1,files:{},add:c(function(s,e){this.enabled!==!1&&(this.files[s]=e)},"add"),get:c(function(s){if(this.enabled!==!1)return this.files[s]},"get"),remove:c(function(s){delete this.files[s]},"remove"),clear:c(function(){this.files={}},"clear")},Nf=class Nf{constructor(e,t,n){const i=this;let r=!1,o=0,a=0,l;const u=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.abortController=new AbortController,this.itemStart=function(h){a++,r===!1&&i.onStart!==void 0&&i.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return u.push(h,d),this},this.removeHandler=function(h){const d=u.indexOf(h);return d!==-1&&u.splice(d,2),this},this.getHandler=function(h){for(let d=0,f=u.length;d<f;d+=2){const p=u[d],_=u[d+1];if(p.global&&(p.lastIndex=0),p.test(h))return _}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}};c(Nf,"LoadingManager");let iu=Nf;const Bx=new iu,Uf=class Uf{constructor(e){this.manager=e!==void 0?e:Bx,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};c(Uf,"Loader");let _i=Uf;_i.DEFAULT_MATERIAL_NAME="__DEFAULT";const Hn={},Ff=class Ff extends Error{constructor(e,t){super(e),this.response=t}};c(Ff,"HttpError");let su=Ff;const Bf=class Bf extends _i{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=jn.get(`file:${e}`);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(Hn[e]!==void 0){Hn[e].push({onLoad:t,onProgress:n,onError:i});return}Hn[e]=[],Hn[e].push({onLoad:t,onProgress:n,onError:i});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),a=this.mimeType,l=this.responseType;fetch(o).then(u=>{if(u.status===200||u.status===0){if(u.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||u.body===void 0||u.body.getReader===void 0)return u;const h=Hn[e],d=u.body.getReader(),f=u.headers.get("X-File-Size")||u.headers.get("Content-Length"),p=f?parseInt(f):0,_=p!==0;let v=0;const g=new ReadableStream({start(m){A();function A(){d.read().then(({done:E,value:y})=>{if(E)m.close();else{v+=y.byteLength;const C=new ProgressEvent("progress",{lengthComputable:_,loaded:v,total:p});for(let I=0,P=h.length;I<P;I++){const D=h[I];D.onProgress&&D.onProgress(C)}m.enqueue(y),A()}},E=>{m.error(E)})}c(A,"readData")}});return new Response(g)}else throw new su(`fetch for "${u.url}" responded with ${u.status}: ${u.statusText}`,u)}).then(u=>{switch(l){case"arraybuffer":return u.arrayBuffer();case"blob":return u.blob();case"document":return u.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return u.json();default:if(a==="")return u.text();{const d=/charset="?([^;"\s]*)"?/i.exec(a),f=d&&d[1]?d[1].toLowerCase():void 0,p=new TextDecoder(f);return u.arrayBuffer().then(_=>p.decode(_))}}}).then(u=>{jn.add(`file:${e}`,u);const h=Hn[e];delete Hn[e];for(let d=0,f=h.length;d<f;d++){const p=h[d];p.onLoad&&p.onLoad(u)}}).catch(u=>{const h=Hn[e];if(h===void 0)throw this.manager.itemError(e),u;delete Hn[e];for(let d=0,f=h.length;d<f;d++){const p=h[d];p.onError&&p.onError(u)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};c(Bf,"FileLoader");let ma=Bf;const os=new WeakMap,kf=class kf extends _i{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=jn.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0);else{let d=os.get(o);d===void 0&&(d=[],os.set(o,d)),d.push({onLoad:t,onError:i})}return o}const a=Fr("img");function l(){h(),t&&t(this);const d=os.get(this)||[];for(let f=0;f<d.length;f++){const p=d[f];p.onLoad&&p.onLoad(this)}os.delete(this),r.manager.itemEnd(e)}c(l,"onImageLoad");function u(d){h(),i&&i(d),jn.remove(`image:${e}`);const f=os.get(this)||[];for(let p=0;p<f.length;p++){const _=f[p];_.onError&&_.onError(d)}os.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}c(u,"onImageError");function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",u,!1)}return c(h,"removeEventListeners"),a.addEventListener("load",l,!1),a.addEventListener("error",u,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),jn.add(`image:${e}`,a),r.manager.itemStart(e),a.src=e,a}};c(kf,"ImageLoader");let ru=kf;const Hf=class Hf extends _i{constructor(e){super(e)}load(e,t,n,i){const r=new Nt,o=new ru(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}};c(Hf,"TextureLoader");let ou=Hf;const zf=class zf extends yt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ze(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}};c(zf,"Light");let nr=zf;const Sc=new je,fg=new R,pg=new R,Vf=class Vf{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new le(512,512),this.mapType=Cn,this.map=null,this.mapPass=null,this.matrix=new je,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new zr,this._frameExtents=new le(1,1),this._viewportCount=1,this._viewports=[new it(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;fg.setFromMatrixPosition(e.matrixWorld),t.position.copy(fg),pg.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(pg),t.updateMatrixWorld(),Sc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Sc,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Sc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};c(Vf,"LightShadow");let Kr=Vf;const Gf=class Gf extends Kr{constructor(){super(new Dt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,n=Qs*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}};c(Gf,"SpotLightShadow");let au=Gf;const Wf=class Wf extends nr{constructor(e,t,n=0,i=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(yt.DEFAULT_UP),this.updateMatrix(),this.target=new yt,this.distance=n,this.angle=i,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new au}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};c(Wf,"SpotLight");let cu=Wf;const mg=new je,dr=new R,Mc=new R,Xf=class Xf extends Kr{constructor(){super(new Dt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new le(4,2),this._viewportCount=6,this._viewports=[new it(2,1,1,1),new it(0,1,1,1),new it(3,1,1,1),new it(1,1,1,1),new it(3,0,1,1),new it(1,0,1,1)],this._cubeDirections=[new R(1,0,0),new R(-1,0,0),new R(0,0,1),new R(0,0,-1),new R(0,1,0),new R(0,-1,0)],this._cubeUps=[new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,0,1),new R(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),dr.setFromMatrixPosition(e.matrixWorld),n.position.copy(dr),Mc.copy(n.position),Mc.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Mc),n.updateMatrixWorld(),i.makeTranslation(-dr.x,-dr.y,-dr.z),mg.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(mg,n.coordinateSystem,n.reversedDepth)}};c(Xf,"PointLightShadow");let lu=Xf;const jf=class jf extends nr{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new lu}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}};c(jf,"PointLight");let uu=jf;const qf=class qf extends Ko{constructor(e=-1,t=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,o=n+e,a=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=u*this.view.offsetX,o=r+u*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}};c(qf,"OrthographicCamera");let Jr=qf;const Yf=class Yf extends Kr{constructor(){super(new Jr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}};c(Yf,"DirectionalLightShadow");let hu=Yf;const $f=class $f extends nr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(yt.DEFAULT_UP),this.updateMatrix(),this.target=new yt,this.shadow=new hu}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};c($f,"DirectionalLight");let ga=$f;const Kf=class Kf extends nr{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}};c(Kf,"AmbientLight");let du=Kf;const Jf=class Jf{static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};c(Jf,"LoaderUtils");let Fi=Jf;const Ec=new WeakMap,Zf=class Zf extends _i{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=jn.get(`image-bitmap:${e}`);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(u=>{if(Ec.has(o)===!0)i&&i(Ec.get(o)),r.manager.itemError(e),r.manager.itemEnd(e);else return t&&t(u),r.manager.itemEnd(e),u});return}return setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader,a.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;const l=fetch(e,a).then(function(u){return u.blob()}).then(function(u){return createImageBitmap(u,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(u){return jn.add(`image-bitmap:${e}`,u),t&&t(u),r.manager.itemEnd(e),u}).catch(function(u){i&&i(u),Ec.set(l,u),jn.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});jn.add(`image-bitmap:${e}`,l),r.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};c(Zf,"ImageBitmapLoader");let fu=Zf;const Qf=class Qf extends Dt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};c(Qf,"ArrayCamera");let pu=Qf;const ep=class ep{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};c(ep,"Clock");let mu=ep;const sd="\\[\\]\\.:\\/",kx=new RegExp("["+sd+"]","g"),rd="[^"+sd+"]",Hx="[^"+sd.replace("\\.","")+"]",zx=/((?:WC+[\/:])*)/.source.replace("WC",rd),Vx=/(WCOD+)?/.source.replace("WCOD",Hx),Gx=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",rd),Wx=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",rd),Xx=new RegExp("^"+zx+Vx+Gx+Wx+"$"),jx=["material","materials","bones","map"],tp=class tp{constructor(e,t,n){const i=n||pt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}};c(tp,"Composite");let gu=tp;const ri=class ri{constructor(e,t,n){this.path=t,this.parsedPath=n||ri.parseTrackName(t),this.node=ri.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new ri.Composite(e,t,n):new ri(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(kx,"")}static parseTrackName(e){const t=Xx.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const r=n.nodeName.substring(i+1);jx.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=c(function(r){for(let o=0;o<r.length;o++){const a=r[o];if(a.name===t||a.uuid===t)return a;const l=n(a.children);if(l)return l}return null},"searchNodeSubtree"),i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let r=t.propertyIndex;if(e||(e=ri.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let u=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===u){u=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(u!==void 0){if(e[u]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[u]}}const o=e[i];if(o===void 0){const u=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+u+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};c(ri,"PropertyBinding");let pt=ri;pt.Composite=gu;pt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};pt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};pt.prototype.GetterByBindingType=[pt.prototype._getValue_direct,pt.prototype._getValue_array,pt.prototype._getValue_arrayElement,pt.prototype._getValue_toArray];pt.prototype.SetterByBindingTypeAndVersioning=[[pt.prototype._setValue_direct,pt.prototype._setValue_direct_setNeedsUpdate,pt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[pt.prototype._setValue_array,pt.prototype._setValue_array_setNeedsUpdate,pt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[pt.prototype._setValue_arrayElement,pt.prototype._setValue_arrayElement_setNeedsUpdate,pt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[pt.prototype._setValue_fromArray,pt.prototype._setValue_fromArray_setNeedsUpdate,pt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];const gg=new je,np=class np{constructor(e,t,n=0,i=1/0){this.ray=new hi(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new kr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return gg.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(gg),this}intersectObject(e,t=!0,n=[]){return vu(e,this,n,t),n.sort(_g),n}intersectObjects(e,t=!0,n=[]){for(let i=0,r=e.length;i<r;i++)vu(e[i],this,n,t);return n.sort(_g),n}};c(np,"Raycaster");let _u=np;function _g(s,e){return s.distance-e.distance}c(_g,"ascSort");function vu(s,e,t,n){let i=!0;if(s.layers.test(e.layers)&&s.raycast(e,t)===!1&&(i=!1),i===!0&&n===!0){const r=s.children;for(let o=0,a=r.length;o<a;o++)vu(r[o],e,t,!0)}}c(vu,"intersect");function vg(s,e,t,n){const i=qx(n);switch(t){case f_:return s*e;case Jh:return s*e/i.components*i.byteLength;case Zh:return s*e/i.components*i.byteLength;case m_:return s*e*2/i.components*i.byteLength;case Qh:return s*e*2/i.components*i.byteLength;case p_:return s*e*3/i.components*i.byteLength;case un:return s*e*4/i.components*i.byteLength;case ed:return s*e*4/i.components*i.byteLength;case Bo:case ko:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Ho:case zo:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Zc:case el:return Math.max(s,16)*Math.max(e,8)/4;case Jc:case Qc:return Math.max(s,8)*Math.max(e,8)/2;case tl:case nl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case il:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case sl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case rl:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case ol:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case al:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case cl:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case ll:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case ul:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case hl:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case dl:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case fl:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case pl:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case ml:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case gl:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case _l:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Vo:case vl:case xl:return Math.ceil(s/4)*Math.ceil(e/4)*16;case g_:case yl:return Math.ceil(s/4)*Math.ceil(e/4)*8;case bl:case Sl:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}c(vg,"getByteLength");function qx(s){switch(s){case Cn:case u_:return{byteLength:1,components:1};case Lr:case h_:case to:return{byteLength:2,components:1};case $h:case Kh:return{byteLength:2,components:4};case ki:case Yh:case bn:return{byteLength:4,components:1};case d_:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}c(qx,"getTextureTypeByteLength");typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:jh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=jh);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function A_(){let s=null,e=!1,t=null,n=null;function i(r,o){t(r,o),n=s.requestAnimationFrame(i)}return c(i,"onAnimationFrame"),{start:c(function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},"start"),stop:c(function(){s.cancelAnimationFrame(n),e=!1},"stop"),setAnimationLoop:c(function(r){t=r},"setAnimationLoop"),setContext:c(function(r){s=r},"setContext")}}c(A_,"WebGLAnimation");function Yx(s){const e=new WeakMap;function t(a,l){const u=a.array,h=a.usage,d=u.byteLength,f=s.createBuffer();s.bindBuffer(l,f),s.bufferData(l,u,h),a.onUploadCallback();let p;if(u instanceof Float32Array)p=s.FLOAT;else if(typeof Float16Array<"u"&&u instanceof Float16Array)p=s.HALF_FLOAT;else if(u instanceof Uint16Array)a.isFloat16BufferAttribute?p=s.HALF_FLOAT:p=s.UNSIGNED_SHORT;else if(u instanceof Int16Array)p=s.SHORT;else if(u instanceof Uint32Array)p=s.UNSIGNED_INT;else if(u instanceof Int32Array)p=s.INT;else if(u instanceof Int8Array)p=s.BYTE;else if(u instanceof Uint8Array)p=s.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)p=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:f,type:p,bytesPerElement:u.BYTES_PER_ELEMENT,version:a.version,size:d}}c(t,"createBuffer");function n(a,l,u){const h=l.array,d=l.updateRanges;if(s.bindBuffer(u,a),d.length===0)s.bufferSubData(u,0,h);else{d.sort((p,_)=>p.start-_.start);let f=0;for(let p=1;p<d.length;p++){const _=d[f],v=d[p];v.start<=_.start+_.count+1?_.count=Math.max(_.count,v.start+v.count-_.start):(++f,d[f]=v)}d.length=f+1;for(let p=0,_=d.length;p<_;p++){const v=d[p];s.bufferSubData(u,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}c(n,"updateBuffer");function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}c(i,"get");function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(s.deleteBuffer(l.buffer),e.delete(a))}c(r,"remove");function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const u=e.get(a);if(u===void 0)e.set(a,t(a,l));else if(u.version<a.version){if(u.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(u.buffer,a,l),u.version=a.version}}return c(o,"update"),{get:i,remove:r,update:o}}c(Yx,"WebGLAttributes");var $x=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Kx=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Jx=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Zx=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Qx=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ey=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ty=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,ny=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,iy=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,sy=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ry=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,oy=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ay=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,cy=`#ifdef USE_IRIDESCENCE
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
#endif`,ly=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,uy=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
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
	#endif
#endif`,hy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,dy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,fy=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,py=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,my=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,gy=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,_y=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,vy=`#define PI 3.141592653589793
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
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
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
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,xy=`#ifdef ENVMAP_TYPE_CUBE_UV
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
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
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
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
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
#endif`,yy=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,by=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Sy=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,My=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ey=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,wy="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ty=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Ay=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
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
#endif`,Ry=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Cy=`#ifdef USE_ENVMAP
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
#endif`,Py=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ly=`#ifdef USE_ENVMAP
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
#endif`,Iy=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Dy=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Oy=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ny=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Uy=`#ifdef USE_GRADIENTMAP
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
}`,Fy=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,By=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ky=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Hy=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
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
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
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
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
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
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
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
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
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
#endif`,zy=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Vy=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Gy=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Wy=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Xy=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,jy=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
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
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,qy=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
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
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
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
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
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
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
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
#endif
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
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
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
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
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
}`,Yy=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
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
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
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
		getSpotLightInfo( spotLight, geometryPosition, directLight );
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
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
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,$y=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Ky=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Jy=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Zy=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Qy=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,eb=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,tb=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,nb=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ib=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,sb=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,rb=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ob=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ab=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,cb=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,lb=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ub=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,hb=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,db=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,fb=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,pb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,mb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,gb=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,_b=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,vb=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,xb=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,yb=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,bb=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Sb=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Mb=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Eb=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,wb=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Tb=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Ab=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Rb=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Cb=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Pb=`#if NUM_SPOT_LIGHT_COORDS > 0
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
			float shadowIntensity;
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
			float shadowIntensity;
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
			float shadowIntensity;
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
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSEDEPTHBUF
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSEDEPTHBUF
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare , distribution.x );
		#endif
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
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
		return mix( 1.0, shadow, shadowIntensity );
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
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
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Lb=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
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
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Ib=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
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
#endif`,Db=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Ob=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Nb=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Ub=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Fb=`#ifdef USE_SKINNING
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
#endif`,Bb=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,kb=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Hb=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,zb=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
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
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Vb=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Gb=`#ifdef USE_TRANSMISSION
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
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
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
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Wb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Xb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,jb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,qb=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Yb=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,$b=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Kb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Jb=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Zb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Qb=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,eS=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
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
}`,tS=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSEDEPTHBUF
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,nS=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
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
}`,iS=`#define DISTANCE
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
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,sS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,rS=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,oS=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,aS=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,cS=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,lS=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,uS=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
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
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,hS=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,dS=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,fS=`#define MATCAP
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
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,pS=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,mS=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
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
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,gS=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
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
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,_S=`#define PHONG
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
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vS=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
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
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,xS=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
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
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,yS=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
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
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,bS=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,SS=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
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
}`,MS=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ES=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,wS=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,TS=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
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
}`,AS=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,$e={alphahash_fragment:$x,alphahash_pars_fragment:Kx,alphamap_fragment:Jx,alphamap_pars_fragment:Zx,alphatest_fragment:Qx,alphatest_pars_fragment:ey,aomap_fragment:ty,aomap_pars_fragment:ny,batching_pars_vertex:iy,batching_vertex:sy,begin_vertex:ry,beginnormal_vertex:oy,bsdfs:ay,iridescence_fragment:cy,bumpmap_pars_fragment:ly,clipping_planes_fragment:uy,clipping_planes_pars_fragment:hy,clipping_planes_pars_vertex:dy,clipping_planes_vertex:fy,color_fragment:py,color_pars_fragment:my,color_pars_vertex:gy,color_vertex:_y,common:vy,cube_uv_reflection_fragment:xy,defaultnormal_vertex:yy,displacementmap_pars_vertex:by,displacementmap_vertex:Sy,emissivemap_fragment:My,emissivemap_pars_fragment:Ey,colorspace_fragment:wy,colorspace_pars_fragment:Ty,envmap_fragment:Ay,envmap_common_pars_fragment:Ry,envmap_pars_fragment:Cy,envmap_pars_vertex:Py,envmap_physical_pars_fragment:zy,envmap_vertex:Ly,fog_vertex:Iy,fog_pars_vertex:Dy,fog_fragment:Oy,fog_pars_fragment:Ny,gradientmap_pars_fragment:Uy,lightmap_pars_fragment:Fy,lights_lambert_fragment:By,lights_lambert_pars_fragment:ky,lights_pars_begin:Hy,lights_toon_fragment:Vy,lights_toon_pars_fragment:Gy,lights_phong_fragment:Wy,lights_phong_pars_fragment:Xy,lights_physical_fragment:jy,lights_physical_pars_fragment:qy,lights_fragment_begin:Yy,lights_fragment_maps:$y,lights_fragment_end:Ky,logdepthbuf_fragment:Jy,logdepthbuf_pars_fragment:Zy,logdepthbuf_pars_vertex:Qy,logdepthbuf_vertex:eb,map_fragment:tb,map_pars_fragment:nb,map_particle_fragment:ib,map_particle_pars_fragment:sb,metalnessmap_fragment:rb,metalnessmap_pars_fragment:ob,morphinstance_vertex:ab,morphcolor_vertex:cb,morphnormal_vertex:lb,morphtarget_pars_vertex:ub,morphtarget_vertex:hb,normal_fragment_begin:db,normal_fragment_maps:fb,normal_pars_fragment:pb,normal_pars_vertex:mb,normal_vertex:gb,normalmap_pars_fragment:_b,clearcoat_normal_fragment_begin:vb,clearcoat_normal_fragment_maps:xb,clearcoat_pars_fragment:yb,iridescence_pars_fragment:bb,opaque_fragment:Sb,packing:Mb,premultiplied_alpha_fragment:Eb,project_vertex:wb,dithering_fragment:Tb,dithering_pars_fragment:Ab,roughnessmap_fragment:Rb,roughnessmap_pars_fragment:Cb,shadowmap_pars_fragment:Pb,shadowmap_pars_vertex:Lb,shadowmap_vertex:Ib,shadowmask_pars_fragment:Db,skinbase_vertex:Ob,skinning_pars_vertex:Nb,skinning_vertex:Ub,skinnormal_vertex:Fb,specularmap_fragment:Bb,specularmap_pars_fragment:kb,tonemapping_fragment:Hb,tonemapping_pars_fragment:zb,transmission_fragment:Vb,transmission_pars_fragment:Gb,uv_pars_fragment:Wb,uv_pars_vertex:Xb,uv_vertex:jb,worldpos_vertex:qb,background_vert:Yb,background_frag:$b,backgroundCube_vert:Kb,backgroundCube_frag:Jb,cube_vert:Zb,cube_frag:Qb,depth_vert:eS,depth_frag:tS,distanceRGBA_vert:nS,distanceRGBA_frag:iS,equirect_vert:sS,equirect_frag:rS,linedashed_vert:oS,linedashed_frag:aS,meshbasic_vert:cS,meshbasic_frag:lS,meshlambert_vert:uS,meshlambert_frag:hS,meshmatcap_vert:dS,meshmatcap_frag:fS,meshnormal_vert:pS,meshnormal_frag:mS,meshphong_vert:gS,meshphong_frag:_S,meshphysical_vert:vS,meshphysical_frag:xS,meshtoon_vert:yS,meshtoon_frag:bS,points_vert:SS,points_frag:MS,shadow_vert:ES,shadow_frag:wS,sprite_vert:TS,sprite_frag:AS},ve={common:{diffuse:{value:new ze(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ye}},envmap:{envMap:{value:null},envMapRotation:{value:new Ye},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ye}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ye}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ye},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ye},normalScale:{value:new le(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ye},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ye}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ye}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ye}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ze(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ze(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0},uvTransform:{value:new Ye}},sprite:{diffuse:{value:new ze(16777215)},opacity:{value:1},center:{value:new le(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}}},An={basic:{uniforms:zt([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.fog]),vertexShader:$e.meshbasic_vert,fragmentShader:$e.meshbasic_frag},lambert:{uniforms:zt([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new ze(0)}}]),vertexShader:$e.meshlambert_vert,fragmentShader:$e.meshlambert_frag},phong:{uniforms:zt([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new ze(0)},specular:{value:new ze(1118481)},shininess:{value:30}}]),vertexShader:$e.meshphong_vert,fragmentShader:$e.meshphong_frag},standard:{uniforms:zt([ve.common,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.roughnessmap,ve.metalnessmap,ve.fog,ve.lights,{emissive:{value:new ze(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:$e.meshphysical_vert,fragmentShader:$e.meshphysical_frag},toon:{uniforms:zt([ve.common,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.gradientmap,ve.fog,ve.lights,{emissive:{value:new ze(0)}}]),vertexShader:$e.meshtoon_vert,fragmentShader:$e.meshtoon_frag},matcap:{uniforms:zt([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,{matcap:{value:null}}]),vertexShader:$e.meshmatcap_vert,fragmentShader:$e.meshmatcap_frag},points:{uniforms:zt([ve.points,ve.fog]),vertexShader:$e.points_vert,fragmentShader:$e.points_frag},dashed:{uniforms:zt([ve.common,ve.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:$e.linedashed_vert,fragmentShader:$e.linedashed_frag},depth:{uniforms:zt([ve.common,ve.displacementmap]),vertexShader:$e.depth_vert,fragmentShader:$e.depth_frag},normal:{uniforms:zt([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,{opacity:{value:1}}]),vertexShader:$e.meshnormal_vert,fragmentShader:$e.meshnormal_frag},sprite:{uniforms:zt([ve.sprite,ve.fog]),vertexShader:$e.sprite_vert,fragmentShader:$e.sprite_frag},background:{uniforms:{uvTransform:{value:new Ye},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:$e.background_vert,fragmentShader:$e.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ye}},vertexShader:$e.backgroundCube_vert,fragmentShader:$e.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:$e.cube_vert,fragmentShader:$e.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:$e.equirect_vert,fragmentShader:$e.equirect_frag},distanceRGBA:{uniforms:zt([ve.common,ve.displacementmap,{referencePosition:{value:new R},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:$e.distanceRGBA_vert,fragmentShader:$e.distanceRGBA_frag},shadow:{uniforms:zt([ve.lights,ve.fog,{color:{value:new ze(0)},opacity:{value:1}}]),vertexShader:$e.shadow_vert,fragmentShader:$e.shadow_frag}};An.physical={uniforms:zt([An.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ye},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ye},clearcoatNormalScale:{value:new le(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ye},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ye},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ye},sheen:{value:0},sheenColor:{value:new ze(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ye},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ye},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ye},transmissionSamplerSize:{value:new le},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ye},attenuationDistance:{value:0},attenuationColor:{value:new ze(0)},specularColor:{value:new ze(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ye},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ye},anisotropyVector:{value:new le},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ye}}]),vertexShader:$e.meshphysical_vert,fragmentShader:$e.meshphysical_frag};const Io={r:0,b:0,g:0},Ai=new Sn,RS=new je;function CS(s,e,t,n,i,r,o){const a=new ze(0);let l=r===!0?0:1,u,h,d=null,f=0,p=null;function _(E){let y=E.isScene===!0?E.background:null;return y&&y.isTexture&&(y=(E.backgroundBlurriness>0?t:e).get(y)),y}c(_,"getBackground");function v(E){let y=!1;const C=_(E);C===null?m(a,l):C&&C.isColor&&(m(C,1),y=!0);const I=s.xr.getEnvironmentBlendMode();I==="additive"?n.buffers.color.setClear(0,0,0,1,o):I==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(s.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}c(v,"render");function g(E,y){const C=_(y);C&&(C.isCubeTexture||C.mapping===Wa)?(h===void 0&&(h=new ut(new Pn(1,1,1),new Ln({name:"BackgroundCubeMaterial",uniforms:er(An.backgroundCube.uniforms),vertexShader:An.backgroundCube.vertexShader,fragmentShader:An.backgroundCube.fragmentShader,side:jt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(I,P,D){this.matrixWorld.copyPosition(D.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:c(function(){return this.uniforms.envMap.value},"get")}),i.update(h)),Ai.copy(y.backgroundRotation),Ai.x*=-1,Ai.y*=-1,Ai.z*=-1,C.isCubeTexture&&C.isRenderTargetTexture===!1&&(Ai.y*=-1,Ai.z*=-1),h.material.uniforms.envMap.value=C,h.material.uniforms.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(RS.makeRotationFromEuler(Ai)),h.material.toneMapped=tt.getTransfer(C.colorSpace)!==ct,(d!==C||f!==C.version||p!==s.toneMapping)&&(h.material.needsUpdate=!0,d=C,f=C.version,p=s.toneMapping),h.layers.enableAll(),E.unshift(h,h.geometry,h.material,0,0,null)):C&&C.isTexture&&(u===void 0&&(u=new ut(new da(2,2),new Ln({name:"BackgroundMaterial",uniforms:er(An.background.uniforms),vertexShader:An.background.vertexShader,fragmentShader:An.background.fragmentShader,side:Yn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:c(function(){return this.uniforms.t2D.value},"get")}),i.update(u)),u.material.uniforms.t2D.value=C,u.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,u.material.toneMapped=tt.getTransfer(C.colorSpace)!==ct,C.matrixAutoUpdate===!0&&C.updateMatrix(),u.material.uniforms.uvTransform.value.copy(C.matrix),(d!==C||f!==C.version||p!==s.toneMapping)&&(u.material.needsUpdate=!0,d=C,f=C.version,p=s.toneMapping),u.layers.enableAll(),E.unshift(u,u.geometry,u.material,0,0,null))}c(g,"addToRenderList");function m(E,y){E.getRGB(Io,b_(s)),n.buffers.color.setClear(Io.r,Io.g,Io.b,y,o)}c(m,"setClear");function A(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0)}return c(A,"dispose"),{getClearColor:c(function(){return a},"getClearColor"),setClearColor:c(function(E,y=1){a.set(E),l=y,m(a,l)},"setClearColor"),getClearAlpha:c(function(){return l},"getClearAlpha"),setClearAlpha:c(function(E){l=E,m(a,l)},"setClearAlpha"),render:v,addToRenderList:g,dispose:A}}c(CS,"WebGLBackground");function PS(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=f(null);let r=i,o=!1;function a(M,S,B,N,H){let j=!1;const V=d(N,B,S);r!==V&&(r=V,u(r.object)),j=p(M,N,B,H),j&&_(M,N,B,H),H!==null&&e.update(H,s.ELEMENT_ARRAY_BUFFER),(j||o)&&(o=!1,y(M,S,B,N),H!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(H).buffer))}c(a,"setup");function l(){return s.createVertexArray()}c(l,"createVertexArrayObject");function u(M){return s.bindVertexArray(M)}c(u,"bindVertexArrayObject");function h(M){return s.deleteVertexArray(M)}c(h,"deleteVertexArrayObject");function d(M,S,B){const N=B.wireframe===!0;let H=n[M.id];H===void 0&&(H={},n[M.id]=H);let j=H[S.id];j===void 0&&(j={},H[S.id]=j);let V=j[N];return V===void 0&&(V=f(l()),j[N]=V),V}c(d,"getBindingState");function f(M){const S=[],B=[],N=[];for(let H=0;H<t;H++)S[H]=0,B[H]=0,N[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:S,enabledAttributes:B,attributeDivisors:N,object:M,attributes:{},index:null}}c(f,"createBindingState");function p(M,S,B,N){const H=r.attributes,j=S.attributes;let V=0;const K=B.getAttributes();for(const G in K)if(K[G].location>=0){const _e=H[G];let Se=j[G];if(Se===void 0&&(G==="instanceMatrix"&&M.instanceMatrix&&(Se=M.instanceMatrix),G==="instanceColor"&&M.instanceColor&&(Se=M.instanceColor)),_e===void 0||_e.attribute!==Se||Se&&_e.data!==Se.data)return!0;V++}return r.attributesNum!==V||r.index!==N}c(p,"needsUpdate");function _(M,S,B,N){const H={},j=S.attributes;let V=0;const K=B.getAttributes();for(const G in K)if(K[G].location>=0){let _e=j[G];_e===void 0&&(G==="instanceMatrix"&&M.instanceMatrix&&(_e=M.instanceMatrix),G==="instanceColor"&&M.instanceColor&&(_e=M.instanceColor));const Se={};Se.attribute=_e,_e&&_e.data&&(Se.data=_e.data),H[G]=Se,V++}r.attributes=H,r.attributesNum=V,r.index=N}c(_,"saveCache");function v(){const M=r.newAttributes;for(let S=0,B=M.length;S<B;S++)M[S]=0}c(v,"initAttributes");function g(M){m(M,0)}c(g,"enableAttribute");function m(M,S){const B=r.newAttributes,N=r.enabledAttributes,H=r.attributeDivisors;B[M]=1,N[M]===0&&(s.enableVertexAttribArray(M),N[M]=1),H[M]!==S&&(s.vertexAttribDivisor(M,S),H[M]=S)}c(m,"enableAttributeAndDivisor");function A(){const M=r.newAttributes,S=r.enabledAttributes;for(let B=0,N=S.length;B<N;B++)S[B]!==M[B]&&(s.disableVertexAttribArray(B),S[B]=0)}c(A,"disableUnusedAttributes");function E(M,S,B,N,H,j,V){V===!0?s.vertexAttribIPointer(M,S,B,H,j):s.vertexAttribPointer(M,S,B,N,H,j)}c(E,"vertexAttribPointer");function y(M,S,B,N){v();const H=N.attributes,j=B.getAttributes(),V=S.defaultAttributeValues;for(const K in j){const G=j[K];if(G.location>=0){let re=H[K];if(re===void 0&&(K==="instanceMatrix"&&M.instanceMatrix&&(re=M.instanceMatrix),K==="instanceColor"&&M.instanceColor&&(re=M.instanceColor)),re!==void 0){const _e=re.normalized,Se=re.itemSize,Ue=e.get(re);if(Ue===void 0)continue;const Je=Ue.buffer,Qe=Ue.type,$=Ue.bytesPerElement,ge=Qe===s.INT||Qe===s.UNSIGNED_INT||re.gpuType===Yh;if(re.isInterleavedBufferAttribute){const de=re.data,Oe=de.stride,Ce=re.offset;if(de.isInstancedInterleavedBuffer){for(let Be=0;Be<G.locationSize;Be++)m(G.location+Be,de.meshPerAttribute);M.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=de.meshPerAttribute*de.count)}else for(let Be=0;Be<G.locationSize;Be++)g(G.location+Be);s.bindBuffer(s.ARRAY_BUFFER,Je);for(let Be=0;Be<G.locationSize;Be++)E(G.location+Be,Se/G.locationSize,Qe,_e,Oe*$,(Ce+Se/G.locationSize*Be)*$,ge)}else{if(re.isInstancedBufferAttribute){for(let de=0;de<G.locationSize;de++)m(G.location+de,re.meshPerAttribute);M.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let de=0;de<G.locationSize;de++)g(G.location+de);s.bindBuffer(s.ARRAY_BUFFER,Je);for(let de=0;de<G.locationSize;de++)E(G.location+de,Se/G.locationSize,Qe,_e,Se*$,Se/G.locationSize*de*$,ge)}}else if(V!==void 0){const _e=V[K];if(_e!==void 0)switch(_e.length){case 2:s.vertexAttrib2fv(G.location,_e);break;case 3:s.vertexAttrib3fv(G.location,_e);break;case 4:s.vertexAttrib4fv(G.location,_e);break;default:s.vertexAttrib1fv(G.location,_e)}}}}A()}c(y,"setupVertexAttributes");function C(){D();for(const M in n){const S=n[M];for(const B in S){const N=S[B];for(const H in N)h(N[H].object),delete N[H];delete S[B]}delete n[M]}}c(C,"dispose");function I(M){if(n[M.id]===void 0)return;const S=n[M.id];for(const B in S){const N=S[B];for(const H in N)h(N[H].object),delete N[H];delete S[B]}delete n[M.id]}c(I,"releaseStatesOfGeometry");function P(M){for(const S in n){const B=n[S];if(B[M.id]===void 0)continue;const N=B[M.id];for(const H in N)h(N[H].object),delete N[H];delete B[M.id]}}c(P,"releaseStatesOfProgram");function D(){w(),o=!0,r!==i&&(r=i,u(r.object))}c(D,"reset");function w(){i.geometry=null,i.program=null,i.wireframe=!1}return c(w,"resetDefaultState"),{setup:a,reset:D,resetDefaultState:w,dispose:C,releaseStatesOfGeometry:I,releaseStatesOfProgram:P,initAttributes:v,enableAttribute:g,disableUnusedAttributes:A}}c(PS,"WebGLBindingStates");function LS(s,e,t){let n;function i(u){n=u}c(i,"setMode");function r(u,h){s.drawArrays(n,u,h),t.update(h,n,1)}c(r,"render");function o(u,h,d){d!==0&&(s.drawArraysInstanced(n,u,h,d),t.update(h,n,d))}c(o,"renderInstances");function a(u,h,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,u,0,h,0,d);let p=0;for(let _=0;_<d;_++)p+=h[_];t.update(p,n,1)}c(a,"renderMultiDraw");function l(u,h,d,f){if(d===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let _=0;_<u.length;_++)o(u[_],h[_],f[_]);else{p.multiDrawArraysInstancedWEBGL(n,u,0,h,0,f,0,d);let _=0;for(let v=0;v<d;v++)_+=h[v]*f[v];t.update(_,n,1)}}c(l,"renderMultiDrawInstances"),this.setMode=i,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}c(LS,"WebGLBufferRenderer");function IS(s,e,t,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const P=e.get("EXT_texture_filter_anisotropic");i=s.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}c(r,"getMaxAnisotropy");function o(P){return!(P!==un&&n.convert(P)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}c(o,"textureFormatReadable");function a(P){const D=P===to&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(P!==Cn&&n.convert(P)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==bn&&!D)}c(a,"textureTypeReadable");function l(P){if(P==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}c(l,"getMaxPrecision");let u=t.precision!==void 0?t.precision:"highp";const h=l(u);h!==u&&(console.warn("THREE.WebGLRenderer:",u,"not supported, using",h,"instead."),u=h);const d=t.logarithmicDepthBuffer===!0,f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),p=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),_=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=s.getParameter(s.MAX_TEXTURE_SIZE),g=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),m=s.getParameter(s.MAX_VERTEX_ATTRIBS),A=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),E=s.getParameter(s.MAX_VARYING_VECTORS),y=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),C=_>0,I=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:u,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:_,maxTextureSize:v,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:A,maxVaryings:E,maxFragmentUniforms:y,vertexTextures:C,maxSamples:I}}c(IS,"WebGLCapabilities");function DS(s){const e=this;let t=null,n=0,i=!1,r=!1;const o=new Gn,a=new Ye,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const p=d.length!==0||f||n!==0||i;return i=f,n=d.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,f){t=h(d,f,0)},this.setState=function(d,f,p){const _=d.clippingPlanes,v=d.clipIntersection,g=d.clipShadows,m=s.get(d);if(!i||_===null||_.length===0||r&&!g)r?h(null):u();else{const A=r?0:n,E=A*4;let y=m.clippingState||null;l.value=y,y=h(_,f,E,p);for(let C=0;C!==E;++C)y[C]=t[C];m.clippingState=y,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=A}};function u(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}c(u,"resetGlobalState");function h(d,f,p,_){const v=d!==null?d.length:0;let g=null;if(v!==0){if(g=l.value,_!==!0||g===null){const m=p+v*4,A=f.matrixWorldInverse;a.getNormalMatrix(A),(g===null||g.length<m)&&(g=new Float32Array(m));for(let E=0,y=p;E!==v;++E,y+=4)o.copy(d[E]).applyMatrix4(A,a),o.normal.toArray(g,y),g[y+3]=o.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,g}c(h,"projectPlanes")}c(DS,"WebGLClipping");function OS(s){let e=new WeakMap;function t(o,a){return a===$c?o.mapping=Ks:a===Kc&&(o.mapping=Js),o}c(t,"mapTextureMapping");function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===$c||a===Kc)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const u=new Cl(l.height);return u.fromEquirectangularTexture(s,o),e.set(o,u),o.addEventListener("dispose",i),t(u.texture,o.mapping)}else return null}}return o}c(n,"get");function i(o){const a=o.target;a.removeEventListener("dispose",i);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}c(i,"onTextureDispose");function r(){e=new WeakMap}return c(r,"dispose"),{get:n,dispose:r}}c(OS,"WebGLCubeMaps");const hs=4,xg=[.125,.215,.35,.446,.526,.582],Oi=20,wc=new Jr,yg=new ze;let Tc=null,Ac=0,Rc=0,Cc=!1;const Li=(1+Math.sqrt(5))/2,as=1/Li,bg=[new R(-Li,as,0),new R(Li,as,0),new R(-as,0,Li),new R(as,0,Li),new R(0,Li,-as),new R(0,Li,as),new R(-1,1,-1),new R(1,1,-1),new R(-1,1,1),new R(1,1,1)],NS=new R,ip=class ip{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100,r={}){const{size:o=256,position:a=NS}=r;Tc=this._renderer.getRenderTarget(),Ac=this._renderer.getActiveCubeFace(),Rc=this._renderer.getActiveMipmapLevel(),Cc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,i,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Eg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Mg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Tc,Ac,Rc),this._renderer.xr.enabled=Cc,e.scissorTest=!1,Do(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ks||e.mapping===Js?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Tc=this._renderer.getRenderTarget(),Ac=this._renderer.getActiveCubeFace(),Rc=this._renderer.getActiveMipmapLevel(),Cc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:en,minFilter:en,generateMipmaps:!1,type:to,format:un,colorSpace:Gt,depthBuffer:!1},i=Sg(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Sg(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=US(r)),this._blurMaterial=FS(r,e,t)}return i}_compileMaterial(e){const t=new ut(this._lodPlanes[0],e);this._renderer.compile(t,wc)}_sceneToCubeUV(e,t,n,i,r){const l=new Dt(90,1,t,n),u=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,f=d.autoClear,p=d.toneMapping;d.getClearColor(yg),d.toneMapping=li,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(i),d.clearDepth(),d.setRenderTarget(null));const v=new Xn({name:"PMREM.Background",side:jt,depthWrite:!1,depthTest:!1}),g=new ut(new Pn,v);let m=!1;const A=e.background;A?A.isColor&&(v.color.copy(A),e.background=null,m=!0):(v.color.copy(yg),m=!0);for(let E=0;E<6;E++){const y=E%3;y===0?(l.up.set(0,u[E],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[E],r.y,r.z)):y===1?(l.up.set(0,0,u[E]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[E],r.z)):(l.up.set(0,u[E],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[E]));const C=this._cubeSize;Do(i,y*C,E>2?C:0,C,C),d.setRenderTarget(i),m&&d.render(g,l),d.render(e,l)}g.geometry.dispose(),g.material.dispose(),d.toneMapping=p,d.autoClear=f,e.background=A}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Ks||e.mapping===Js;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Eg()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Mg());const r=i?this._cubemapMaterial:this._equirectMaterial,o=new ut(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;Do(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,wc)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodPlanes.length;for(let r=1;r<i;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=bg[(i-r-1)%bg.length];this._blur(e,r-1,r,o,a)}t.autoClear=n}_blur(e,t,n,i,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",r),this._halfBlur(o,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,o,a){const l=this._renderer,u=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,d=new ut(this._lodPlanes[i],u),f=u.uniforms,p=this._sizeLods[n]-1,_=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*Oi-1),v=r/_,g=isFinite(r)?1+Math.floor(h*v):Oi;g>Oi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Oi}`);const m=[];let A=0;for(let P=0;P<Oi;++P){const D=P/v,w=Math.exp(-D*D/2);m.push(w),P===0?A+=w:P<g&&(A+=2*w)}for(let P=0;P<m.length;P++)m[P]=m[P]/A;f.envMap.value=e.texture,f.samples.value=g,f.weights.value=m,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:E}=this;f.dTheta.value=_,f.mipInt.value=E-n;const y=this._sizeLods[i],C=3*y*(i>E-hs?i-E+hs:0),I=4*(this._cubeSize-y);Do(t,C,I,3*y,2*y),l.setRenderTarget(t),l.render(d,wc)}};c(ip,"PMREMGenerator");let _a=ip;function US(s){const e=[],t=[],n=[];let i=s;const r=s-hs+1+xg.length;for(let o=0;o<r;o++){const a=Math.pow(2,i);t.push(a);let l=1/a;o>s-hs?l=xg[o-s+hs-1]:o===0&&(l=0),n.push(l);const u=1/(a-2),h=-u,d=1+u,f=[h,h,d,h,d,d,h,h,d,d,h,d],p=6,_=6,v=3,g=2,m=1,A=new Float32Array(v*_*p),E=new Float32Array(g*_*p),y=new Float32Array(m*_*p);for(let I=0;I<p;I++){const P=I%3*2/3-1,D=I>2?0:-1,w=[P,D,0,P+2/3,D,0,P+2/3,D+1,0,P,D,0,P+2/3,D+1,0,P,D+1,0];A.set(w,v*_*I),E.set(f,g*_*I);const M=[I,I,I,I,I,I];y.set(M,m*_*I)}const C=new qt;C.setAttribute("position",new Ot(A,v)),C.setAttribute("uv",new Ot(E,g)),C.setAttribute("faceIndex",new Ot(y,m)),e.push(C),i>hs&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}c(US,"_createPlanes");function Sg(s,e,t){const n=new Kn(s,e,t);return n.texture.mapping=Wa,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}c(Sg,"_createRenderTarget");function Do(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}c(Do,"_setViewport");function FS(s,e,t){const n=new Float32Array(Oi),i=new R(0,1,0);return new Ln({name:"SphericalGaussianBlur",defines:{n:Oi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:od(),fragmentShader:`

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
		`,blending:ci,depthTest:!1,depthWrite:!1})}c(FS,"_getBlurShader");function Mg(){return new Ln({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:od(),fragmentShader:`

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
		`,blending:ci,depthTest:!1,depthWrite:!1})}c(Mg,"_getEquirectMaterial");function Eg(){return new Ln({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:od(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ci,depthTest:!1,depthWrite:!1})}c(Eg,"_getCubemapMaterial");function od(){return`

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
	`}c(od,"_getCommonVertexShader");function BS(s){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,u=l===$c||l===Kc,h=l===Ks||l===Js;if(u||h){let d=e.get(a);const f=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return t===null&&(t=new _a(s)),d=u?t.fromEquirectangular(a,d):t.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),d.texture;if(d!==void 0)return d.texture;{const p=a.image;return u&&p&&p.height>0||h&&p&&i(p)?(t===null&&(t=new _a(s)),d=u?t.fromEquirectangular(a):t.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),a.addEventListener("dispose",r),d.texture):null}}}return a}c(n,"get");function i(a){let l=0;const u=6;for(let h=0;h<u;h++)a[h]!==void 0&&l++;return l===u}c(i,"isCubeTextureComplete");function r(a){const l=a.target;l.removeEventListener("dispose",r);const u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}c(r,"onTextureDispose");function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return c(o,"dispose"),{get:n,dispose:o}}c(BS,"WebGLCubeUVMaps");function kS(s){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return c(t,"getExtension"),{has:c(function(n){return t(n)!==null},"has"),init:c(function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},"init"),get:c(function(n){const i=t(n);return i===null&&_s("THREE.WebGLRenderer: "+n+" extension not supported."),i},"get")}}c(kS,"WebGLExtensions");function HS(s,e,t,n){const i={},r=new WeakMap;function o(d){const f=d.target;f.index!==null&&e.remove(f.index);for(const _ in f.attributes)e.remove(f.attributes[_]);f.removeEventListener("dispose",o),delete i[f.id];const p=r.get(f);p&&(e.remove(p),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}c(o,"onGeometryDispose");function a(d,f){return i[f.id]===!0||(f.addEventListener("dispose",o),i[f.id]=!0,t.memory.geometries++),f}c(a,"get");function l(d){const f=d.attributes;for(const p in f)e.update(f[p],s.ARRAY_BUFFER)}c(l,"update");function u(d){const f=[],p=d.index,_=d.attributes.position;let v=0;if(p!==null){const A=p.array;v=p.version;for(let E=0,y=A.length;E<y;E+=3){const C=A[E+0],I=A[E+1],P=A[E+2];f.push(C,I,I,P,P,C)}}else if(_!==void 0){const A=_.array;v=_.version;for(let E=0,y=A.length/3-1;E<y;E+=3){const C=E+0,I=E+1,P=E+2;f.push(C,I,I,P,P,C)}}else return;const g=new(x_(f)?$o:Yo)(f,1);g.version=v;const m=r.get(d);m&&e.remove(m),r.set(d,g)}c(u,"updateWireframeAttribute");function h(d){const f=r.get(d);if(f){const p=d.index;p!==null&&f.version<p.version&&u(d)}else u(d);return r.get(d)}return c(h,"getWireframeAttribute"),{get:a,update:l,getWireframeAttribute:h}}c(HS,"WebGLGeometries");function zS(s,e,t){let n;function i(f){n=f}c(i,"setMode");let r,o;function a(f){r=f.type,o=f.bytesPerElement}c(a,"setIndex");function l(f,p){s.drawElements(n,p,r,f*o),t.update(p,n,1)}c(l,"render");function u(f,p,_){_!==0&&(s.drawElementsInstanced(n,p,r,f*o,_),t.update(p,n,_))}c(u,"renderInstances");function h(f,p,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,f,0,_);let g=0;for(let m=0;m<_;m++)g+=p[m];t.update(g,n,1)}c(h,"renderMultiDraw");function d(f,p,_,v){if(_===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let m=0;m<f.length;m++)u(f[m]/o,p[m],v[m]);else{g.multiDrawElementsInstancedWEBGL(n,p,0,r,f,0,v,0,_);let m=0;for(let A=0;A<_;A++)m+=p[A]*v[A];t.update(m,n,1)}}c(d,"renderMultiDrawInstances"),this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=u,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}c(zS,"WebGLIndexedBufferRenderer");function VS(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case s.TRIANGLES:t.triangles+=a*(r/3);break;case s.LINES:t.lines+=a*(r/2);break;case s.LINE_STRIP:t.lines+=a*(r-1);break;case s.LINE_LOOP:t.lines+=a*r;break;case s.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}c(n,"update");function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return c(i,"reset"),{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}c(VS,"WebGLInfo");function GS(s,e,t){const n=new WeakMap,i=new it;function r(o,a,l){const u=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=h!==void 0?h.length:0;let f=n.get(a);if(f===void 0||f.count!==d){let M=function(){D.dispose(),n.delete(a),a.removeEventListener("dispose",M)};var p=M;c(M,"disposeTexture"),f!==void 0&&f.texture.dispose();const _=a.morphAttributes.position!==void 0,v=a.morphAttributes.normal!==void 0,g=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],A=a.morphAttributes.normal||[],E=a.morphAttributes.color||[];let y=0;_===!0&&(y=1),v===!0&&(y=2),g===!0&&(y=3);let C=a.attributes.position.count*y,I=1;C>e.maxTextureSize&&(I=Math.ceil(C/e.maxTextureSize),C=e.maxTextureSize);const P=new Float32Array(C*I*4*d),D=new qo(P,C,I,d);D.type=bn,D.needsUpdate=!0;const w=y*4;for(let S=0;S<d;S++){const B=m[S],N=A[S],H=E[S],j=C*I*4*S;for(let V=0;V<B.count;V++){const K=V*w;_===!0&&(i.fromBufferAttribute(B,V),P[j+K+0]=i.x,P[j+K+1]=i.y,P[j+K+2]=i.z,P[j+K+3]=0),v===!0&&(i.fromBufferAttribute(N,V),P[j+K+4]=i.x,P[j+K+5]=i.y,P[j+K+6]=i.z,P[j+K+7]=0),g===!0&&(i.fromBufferAttribute(H,V),P[j+K+8]=i.x,P[j+K+9]=i.y,P[j+K+10]=i.z,P[j+K+11]=H.itemSize===4?i.w:1)}}f={count:d,texture:D,size:new le(C,I)},n.set(a,f),a.addEventListener("dispose",M)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",o.morphTexture,t);else{let _=0;for(let g=0;g<u.length;g++)_+=u[g];const v=a.morphTargetsRelative?1:1-_;l.getUniforms().setValue(s,"morphTargetBaseInfluence",v),l.getUniforms().setValue(s,"morphTargetInfluences",u)}l.getUniforms().setValue(s,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(s,"morphTargetsTextureSize",f.size)}return c(r,"update"),{update:r}}c(GS,"WebGLMorphtargets");function WS(s,e,t,n){let i=new WeakMap;function r(l){const u=n.render.frame,h=l.geometry,d=e.get(l,h);if(i.get(d)!==u&&(e.update(d),i.set(d,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==u&&(t.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,s.ARRAY_BUFFER),i.set(l,u))),l.isSkinnedMesh){const f=l.skeleton;i.get(f)!==u&&(f.update(),i.set(f,u))}return d}c(r,"update");function o(){i=new WeakMap}c(o,"dispose");function a(l){const u=l.target;u.removeEventListener("dispose",a),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return c(a,"onInstancedMeshDispose"),{update:r,dispose:o}}c(WS,"WebGLObjects");const R_=new Nt,wg=new sa(1,1),C_=new qo,P_=new Al,L_=new Jo,Tg=[],Ag=[],Rg=new Float32Array(16),Cg=new Float32Array(9),Pg=new Float32Array(4);function ir(s,e,t){const n=s[0];if(n<=0||n>0)return s;const i=e*t;let r=Tg[i];if(r===void 0&&(r=new Float32Array(i),Tg[i]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,s[o].toArray(r,a)}return r}c(ir,"flatten");function At(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}c(At,"arraysEqual");function Rt(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}c(Rt,"copyArray");function Xa(s,e){let t=Ag[e];t===void 0&&(t=new Int32Array(e),Ag[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}c(Xa,"allocTexUnits");function XS(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}c(XS,"setValueV1f");function jS(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(At(t,e))return;s.uniform2fv(this.addr,e),Rt(t,e)}}c(jS,"setValueV2f");function qS(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(At(t,e))return;s.uniform3fv(this.addr,e),Rt(t,e)}}c(qS,"setValueV3f");function YS(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(At(t,e))return;s.uniform4fv(this.addr,e),Rt(t,e)}}c(YS,"setValueV4f");function $S(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(At(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),Rt(t,e)}else{if(At(t,n))return;Pg.set(n),s.uniformMatrix2fv(this.addr,!1,Pg),Rt(t,n)}}c($S,"setValueM2");function KS(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(At(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),Rt(t,e)}else{if(At(t,n))return;Cg.set(n),s.uniformMatrix3fv(this.addr,!1,Cg),Rt(t,n)}}c(KS,"setValueM3");function JS(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(At(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),Rt(t,e)}else{if(At(t,n))return;Rg.set(n),s.uniformMatrix4fv(this.addr,!1,Rg),Rt(t,n)}}c(JS,"setValueM4");function ZS(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}c(ZS,"setValueV1i");function QS(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(At(t,e))return;s.uniform2iv(this.addr,e),Rt(t,e)}}c(QS,"setValueV2i");function eM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(At(t,e))return;s.uniform3iv(this.addr,e),Rt(t,e)}}c(eM,"setValueV3i");function tM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(At(t,e))return;s.uniform4iv(this.addr,e),Rt(t,e)}}c(tM,"setValueV4i");function nM(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}c(nM,"setValueV1ui");function iM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(At(t,e))return;s.uniform2uiv(this.addr,e),Rt(t,e)}}c(iM,"setValueV2ui");function sM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(At(t,e))return;s.uniform3uiv(this.addr,e),Rt(t,e)}}c(sM,"setValueV3ui");function rM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(At(t,e))return;s.uniform4uiv(this.addr,e),Rt(t,e)}}c(rM,"setValueV4ui");function oM(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(wg.compareFunction=v_,r=wg):r=R_,t.setTexture2D(e||r,i)}c(oM,"setValueT1");function aM(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||P_,i)}c(aM,"setValueT3D1");function cM(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||L_,i)}c(cM,"setValueT6");function lM(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||C_,i)}c(lM,"setValueT2DArray1");function uM(s){switch(s){case 5126:return XS;case 35664:return jS;case 35665:return qS;case 35666:return YS;case 35674:return $S;case 35675:return KS;case 35676:return JS;case 5124:case 35670:return ZS;case 35667:case 35671:return QS;case 35668:case 35672:return eM;case 35669:case 35673:return tM;case 5125:return nM;case 36294:return iM;case 36295:return sM;case 36296:return rM;case 35678:case 36198:case 36298:case 36306:case 35682:return oM;case 35679:case 36299:case 36307:return aM;case 35680:case 36300:case 36308:case 36293:return cM;case 36289:case 36303:case 36311:case 36292:return lM}}c(uM,"getSingularSetter");function hM(s,e){s.uniform1fv(this.addr,e)}c(hM,"setValueV1fArray");function dM(s,e){const t=ir(e,this.size,2);s.uniform2fv(this.addr,t)}c(dM,"setValueV2fArray");function fM(s,e){const t=ir(e,this.size,3);s.uniform3fv(this.addr,t)}c(fM,"setValueV3fArray");function pM(s,e){const t=ir(e,this.size,4);s.uniform4fv(this.addr,t)}c(pM,"setValueV4fArray");function mM(s,e){const t=ir(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}c(mM,"setValueM2Array");function gM(s,e){const t=ir(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}c(gM,"setValueM3Array");function _M(s,e){const t=ir(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}c(_M,"setValueM4Array");function vM(s,e){s.uniform1iv(this.addr,e)}c(vM,"setValueV1iArray");function xM(s,e){s.uniform2iv(this.addr,e)}c(xM,"setValueV2iArray");function yM(s,e){s.uniform3iv(this.addr,e)}c(yM,"setValueV3iArray");function bM(s,e){s.uniform4iv(this.addr,e)}c(bM,"setValueV4iArray");function SM(s,e){s.uniform1uiv(this.addr,e)}c(SM,"setValueV1uiArray");function MM(s,e){s.uniform2uiv(this.addr,e)}c(MM,"setValueV2uiArray");function EM(s,e){s.uniform3uiv(this.addr,e)}c(EM,"setValueV3uiArray");function wM(s,e){s.uniform4uiv(this.addr,e)}c(wM,"setValueV4uiArray");function TM(s,e,t){const n=this.cache,i=e.length,r=Xa(t,i);At(n,r)||(s.uniform1iv(this.addr,r),Rt(n,r));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||R_,r[o])}c(TM,"setValueT1Array");function AM(s,e,t){const n=this.cache,i=e.length,r=Xa(t,i);At(n,r)||(s.uniform1iv(this.addr,r),Rt(n,r));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||P_,r[o])}c(AM,"setValueT3DArray");function RM(s,e,t){const n=this.cache,i=e.length,r=Xa(t,i);At(n,r)||(s.uniform1iv(this.addr,r),Rt(n,r));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||L_,r[o])}c(RM,"setValueT6Array");function CM(s,e,t){const n=this.cache,i=e.length,r=Xa(t,i);At(n,r)||(s.uniform1iv(this.addr,r),Rt(n,r));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||C_,r[o])}c(CM,"setValueT2DArrayArray");function PM(s){switch(s){case 5126:return hM;case 35664:return dM;case 35665:return fM;case 35666:return pM;case 35674:return mM;case 35675:return gM;case 35676:return _M;case 5124:case 35670:return vM;case 35667:case 35671:return xM;case 35668:case 35672:return yM;case 35669:case 35673:return bM;case 5125:return SM;case 36294:return MM;case 36295:return EM;case 36296:return wM;case 35678:case 36198:case 36298:case 36306:case 35682:return TM;case 35679:case 36299:case 36307:return AM;case 35680:case 36300:case 36308:case 36293:return RM;case 36289:case 36303:case 36311:case 36292:return CM}}c(PM,"getPureArraySetter");const sp=class sp{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=uM(t.type)}};c(sp,"SingleUniform");let xu=sp;const rp=class rp{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=PM(t.type)}};c(rp,"PureArrayUniform");let yu=rp;const op=class op{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let r=0,o=i.length;r!==o;++r){const a=i[r];a.setValue(e,t[a.id],n)}}};c(op,"StructuredUniform");let bu=op;const Pc=/(\w+)(\])?(\[|\.)?/g;function Lg(s,e){s.seq.push(e),s.map[e.id]=e}c(Lg,"addUniform");function LM(s,e,t){const n=s.name,i=n.length;for(Pc.lastIndex=0;;){const r=Pc.exec(n),o=Pc.lastIndex;let a=r[1];const l=r[2]==="]",u=r[3];if(l&&(a=a|0),u===void 0||u==="["&&o+2===i){Lg(t,u===void 0?new xu(a,s,e):new yu(a,s,e));break}else{let d=t.map[a];d===void 0&&(d=new bu(a),Lg(t,d)),t=d}}}c(LM,"parseUniform");const ap=class ap{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=e.getActiveUniform(t,i),o=e.getUniformLocation(t,r.name);LM(r,o,this)}}setValue(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,o=t.length;r!==o;++r){const a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const o=e[i];o.id in t&&n.push(o)}return n}};c(ap,"WebGLUniforms");let xs=ap;function Ig(s,e,t){const n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}c(Ig,"WebGLShader");const IM=37297;let DM=0;function OM(s,e){const t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=i;o<r;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}c(OM,"handleSource");const Dg=new Ye;function NM(s){tt._getMatrix(Dg,tt.workingColorSpace,s);const e=`mat3( ${Dg.elements.map(t=>t.toFixed(4))} )`;switch(tt.getTransfer(s)){case Xo:return[e,"LinearTransferOETF"];case ct:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}c(NM,"getEncodingComponents");function Og(s,e,t){const n=s.getShaderParameter(e,s.COMPILE_STATUS),r=(s.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+OM(s.getShaderSource(e),a)}else return r}c(Og,"getShaderErrors");function UM(s,e){const t=NM(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}c(UM,"getTexelEncodingFunction");function FM(s,e){let t;switch(e){case Qv:t="Linear";break;case e0:t="Reinhard";break;case t0:t="Cineon";break;case n0:t="ACESFilmic";break;case s0:t="AgX";break;case r0:t="Neutral";break;case i0:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}c(FM,"getToneMappingFunction");const Oo=new R;function BM(){tt.getLuminanceCoefficients(Oo);const s=Oo.x.toFixed(4),e=Oo.y.toFixed(4),t=Oo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}c(BM,"getLuminanceFunction");function kM(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(vr).join(`
`)}c(kM,"generateVertexExtensions");function HM(s){const e=[];for(const t in s){const n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}c(HM,"generateDefines");function zM(s,e){const t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(e,i),o=r.name;let a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:s.getAttribLocation(e,o),locationSize:a}}return t}c(zM,"fetchAttributeLocations");function vr(s){return s!==""}c(vr,"filterEmptyLine");function Ng(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}c(Ng,"replaceLightNums");function Ug(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}c(Ug,"replaceClippingPlaneNums");const VM=/^[ \t]*#include +<([\w\d./]+)>/gm;function Su(s){return s.replace(VM,WM)}c(Su,"resolveIncludes");const GM=new Map;function WM(s,e){let t=$e[e];if(t===void 0){const n=GM.get(e);if(n!==void 0)t=$e[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Su(t)}c(WM,"includeReplacer");const XM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Fg(s){return s.replace(XM,jM)}c(Fg,"unrollLoops");function jM(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}c(jM,"loopReplacer");function Bg(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}c(Bg,"generatePrecision");function qM(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===a_?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===Iv?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===zn&&(e="SHADOWMAP_TYPE_VSM"),e}c(qM,"generateShadowMapTypeDefine");function YM(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Ks:case Js:e="ENVMAP_TYPE_CUBE";break;case Wa:e="ENVMAP_TYPE_CUBE_UV";break}return e}c(YM,"generateEnvMapTypeDefine");function $M(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Js:e="ENVMAP_MODE_REFRACTION";break}return e}c($M,"generateEnvMapModeDefine");function KM(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case qh:e="ENVMAP_BLENDING_MULTIPLY";break;case Jv:e="ENVMAP_BLENDING_MIX";break;case Zv:e="ENVMAP_BLENDING_ADD";break}return e}c(KM,"generateEnvMapBlendingDefine");function JM(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}c(JM,"generateCubeUVSize");function ZM(s,e,t,n){const i=s.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=qM(t),u=YM(t),h=$M(t),d=KM(t),f=JM(t),p=kM(t),_=HM(r),v=i.createProgram();let g,m,A=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(vr).join(`
`),g.length>0&&(g+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(vr).join(`
`),m.length>0&&(m+=`
`)):(g=[Bg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reversedDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(vr).join(`
`),m=[Bg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reversedDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==li?"#define TONE_MAPPING":"",t.toneMapping!==li?$e.tonemapping_pars_fragment:"",t.toneMapping!==li?FM("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",$e.colorspace_pars_fragment,UM("linearToOutputTexel",t.outputColorSpace),BM(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(vr).join(`
`)),o=Su(o),o=Ng(o,t),o=Ug(o,t),a=Su(a),a=Ng(a,t),a=Ug(a,t),o=Fg(o),a=Fg(a),t.isRawShaderMaterial!==!0&&(A=`#version 300 es
`,g=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,m=["#define varying in",t.glslVersion===Cm?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Cm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const E=A+g+o,y=A+m+a,C=Ig(i,i.VERTEX_SHADER,E),I=Ig(i,i.FRAGMENT_SHADER,y);i.attachShader(v,C),i.attachShader(v,I),t.index0AttributeName!==void 0?i.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(v,0,"position"),i.linkProgram(v);function P(S){if(s.debug.checkShaderErrors){const B=i.getProgramInfoLog(v)||"",N=i.getShaderInfoLog(C)||"",H=i.getShaderInfoLog(I)||"",j=B.trim(),V=N.trim(),K=H.trim();let G=!0,re=!0;if(i.getProgramParameter(v,i.LINK_STATUS)===!1)if(G=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,v,C,I);else{const _e=Og(i,C,"vertex"),Se=Og(i,I,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(v,i.VALIDATE_STATUS)+`

Material Name: `+S.name+`
Material Type: `+S.type+`

Program Info Log: `+j+`
`+_e+`
`+Se)}else j!==""?console.warn("THREE.WebGLProgram: Program Info Log:",j):(V===""||K==="")&&(re=!1);re&&(S.diagnostics={runnable:G,programLog:j,vertexShader:{log:V,prefix:g},fragmentShader:{log:K,prefix:m}})}i.deleteShader(C),i.deleteShader(I),D=new xs(i,v),w=zM(i,v)}c(P,"onFirstUse");let D;this.getUniforms=function(){return D===void 0&&P(this),D};let w;this.getAttributes=function(){return w===void 0&&P(this),w};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=i.getProgramParameter(v,IM)),M},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=DM++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=C,this.fragmentShader=I,this}c(ZM,"WebGLProgram");let QM=0;const cp=class cp{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Eu(e),t.set(e,n)),n}};c(cp,"WebGLShaderCache");let Mu=cp;const lp=class lp{constructor(e){this.id=QM++,this.code=e,this.usedTimes=0}};c(lp,"WebGLShaderStage");let Eu=lp;function eE(s,e,t,n,i,r,o){const a=new kr,l=new Mu,u=new Set,h=[],d=i.logarithmicDepthBuffer,f=i.vertexTextures;let p=i.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(w){return u.add(w),w===0?"uv":`uv${w}`}c(v,"getChannel");function g(w,M,S,B,N){const H=B.fog,j=N.geometry,V=w.isMeshStandardMaterial?B.environment:null,K=(w.isMeshStandardMaterial?t:e).get(w.envMap||V),G=K&&K.mapping===Wa?K.image.height:null,re=_[w.type];w.precision!==null&&(p=i.getMaxPrecision(w.precision),p!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",p,"instead."));const _e=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,Se=_e!==void 0?_e.length:0;let Ue=0;j.morphAttributes.position!==void 0&&(Ue=1),j.morphAttributes.normal!==void 0&&(Ue=2),j.morphAttributes.color!==void 0&&(Ue=3);let Je,Qe,$,ge;if(re){const st=An[re];Je=st.vertexShader,Qe=st.fragmentShader}else Je=w.vertexShader,Qe=w.fragmentShader,l.update(w),$=l.getVertexShaderID(w),ge=l.getFragmentShaderID(w);const de=s.getRenderTarget(),Oe=s.state.buffers.depth.getReversed(),Ce=N.isInstancedMesh===!0,Be=N.isBatchedMesh===!0,gt=!!w.map,Ge=!!w.matcap,L=!!K,te=!!w.aoMap,J=!!w.lightMap,ie=!!w.bumpMap,Q=!!w.normalMap,fe=!!w.displacementMap,se=!!w.emissiveMap,pe=!!w.metalnessMap,We=!!w.roughnessMap,Ve=w.anisotropy>0,T=w.clearcoat>0,x=w.dispersion>0,k=w.iridescence>0,q=w.sheen>0,ne=w.transmission>0,Y=Ve&&!!w.anisotropyMap,Pe=T&&!!w.clearcoatMap,he=T&&!!w.clearcoatNormalMap,Te=T&&!!w.clearcoatRoughnessMap,Ae=k&&!!w.iridescenceMap,oe=k&&!!w.iridescenceThicknessMap,be=q&&!!w.sheenColorMap,ke=q&&!!w.sheenRoughnessMap,Le=!!w.specularMap,xe=!!w.specularColorMap,qe=!!w.specularIntensityMap,O=ne&&!!w.transmissionMap,ue=ne&&!!w.thicknessMap,me=!!w.gradientMap,Ee=!!w.alphaMap,ae=w.alphaTest>0,ee=!!w.alphaHash,Re=!!w.extensions;let Xe=li;w.toneMapped&&(de===null||de.isXRRenderTarget===!0)&&(Xe=s.toneMapping);const ht={shaderID:re,shaderType:w.type,shaderName:w.name,vertexShader:Je,fragmentShader:Qe,defines:w.defines,customVertexShaderID:$,customFragmentShaderID:ge,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:p,batching:Be,batchingColor:Be&&N._colorsTexture!==null,instancing:Ce,instancingColor:Ce&&N.instanceColor!==null,instancingMorph:Ce&&N.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:de===null?s.outputColorSpace:de.isXRRenderTarget===!0?de.texture.colorSpace:Gt,alphaToCoverage:!!w.alphaToCoverage,map:gt,matcap:Ge,envMap:L,envMapMode:L&&K.mapping,envMapCubeUVHeight:G,aoMap:te,lightMap:J,bumpMap:ie,normalMap:Q,displacementMap:f&&fe,emissiveMap:se,normalMapObjectSpace:Q&&w.normalMapType===h0,normalMapTangentSpace:Q&&w.normalMapType===td,metalnessMap:pe,roughnessMap:We,anisotropy:Ve,anisotropyMap:Y,clearcoat:T,clearcoatMap:Pe,clearcoatNormalMap:he,clearcoatRoughnessMap:Te,dispersion:x,iridescence:k,iridescenceMap:Ae,iridescenceThicknessMap:oe,sheen:q,sheenColorMap:be,sheenRoughnessMap:ke,specularMap:Le,specularColorMap:xe,specularIntensityMap:qe,transmission:ne,transmissionMap:O,thicknessMap:ue,gradientMap:me,opaque:w.transparent===!1&&w.blending===gs&&w.alphaToCoverage===!1,alphaMap:Ee,alphaTest:ae,alphaHash:ee,combine:w.combine,mapUv:gt&&v(w.map.channel),aoMapUv:te&&v(w.aoMap.channel),lightMapUv:J&&v(w.lightMap.channel),bumpMapUv:ie&&v(w.bumpMap.channel),normalMapUv:Q&&v(w.normalMap.channel),displacementMapUv:fe&&v(w.displacementMap.channel),emissiveMapUv:se&&v(w.emissiveMap.channel),metalnessMapUv:pe&&v(w.metalnessMap.channel),roughnessMapUv:We&&v(w.roughnessMap.channel),anisotropyMapUv:Y&&v(w.anisotropyMap.channel),clearcoatMapUv:Pe&&v(w.clearcoatMap.channel),clearcoatNormalMapUv:he&&v(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Te&&v(w.clearcoatRoughnessMap.channel),iridescenceMapUv:Ae&&v(w.iridescenceMap.channel),iridescenceThicknessMapUv:oe&&v(w.iridescenceThicknessMap.channel),sheenColorMapUv:be&&v(w.sheenColorMap.channel),sheenRoughnessMapUv:ke&&v(w.sheenRoughnessMap.channel),specularMapUv:Le&&v(w.specularMap.channel),specularColorMapUv:xe&&v(w.specularColorMap.channel),specularIntensityMapUv:qe&&v(w.specularIntensityMap.channel),transmissionMapUv:O&&v(w.transmissionMap.channel),thicknessMapUv:ue&&v(w.thicknessMap.channel),alphaMapUv:Ee&&v(w.alphaMap.channel),vertexTangents:!!j.attributes.tangent&&(Q||Ve),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!j.attributes.uv&&(gt||Ee),fog:!!H,useFog:w.fog===!0,fogExp2:!!H&&H.isFogExp2,flatShading:w.flatShading===!0&&w.wireframe===!1,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:Oe,skinning:N.isSkinnedMesh===!0,morphTargets:j.morphAttributes.position!==void 0,morphNormals:j.morphAttributes.normal!==void 0,morphColors:j.morphAttributes.color!==void 0,morphTargetsCount:Se,morphTextureStride:Ue,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:w.dithering,shadowMapEnabled:s.shadowMap.enabled&&S.length>0,shadowMapType:s.shadowMap.type,toneMapping:Xe,decodeVideoTexture:gt&&w.map.isVideoTexture===!0&&tt.getTransfer(w.map.colorSpace)===ct,decodeVideoTextureEmissive:se&&w.emissiveMap.isVideoTexture===!0&&tt.getTransfer(w.emissiveMap.colorSpace)===ct,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===xn,flipSided:w.side===jt,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:Re&&w.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Re&&w.extensions.multiDraw===!0||Be)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return ht.vertexUv1s=u.has(1),ht.vertexUv2s=u.has(2),ht.vertexUv3s=u.has(3),u.clear(),ht}c(g,"getParameters");function m(w){const M=[];if(w.shaderID?M.push(w.shaderID):(M.push(w.customVertexShaderID),M.push(w.customFragmentShaderID)),w.defines!==void 0)for(const S in w.defines)M.push(S),M.push(w.defines[S]);return w.isRawShaderMaterial===!1&&(A(M,w),E(M,w),M.push(s.outputColorSpace)),M.push(w.customProgramCacheKey),M.join()}c(m,"getProgramCacheKey");function A(w,M){w.push(M.precision),w.push(M.outputColorSpace),w.push(M.envMapMode),w.push(M.envMapCubeUVHeight),w.push(M.mapUv),w.push(M.alphaMapUv),w.push(M.lightMapUv),w.push(M.aoMapUv),w.push(M.bumpMapUv),w.push(M.normalMapUv),w.push(M.displacementMapUv),w.push(M.emissiveMapUv),w.push(M.metalnessMapUv),w.push(M.roughnessMapUv),w.push(M.anisotropyMapUv),w.push(M.clearcoatMapUv),w.push(M.clearcoatNormalMapUv),w.push(M.clearcoatRoughnessMapUv),w.push(M.iridescenceMapUv),w.push(M.iridescenceThicknessMapUv),w.push(M.sheenColorMapUv),w.push(M.sheenRoughnessMapUv),w.push(M.specularMapUv),w.push(M.specularColorMapUv),w.push(M.specularIntensityMapUv),w.push(M.transmissionMapUv),w.push(M.thicknessMapUv),w.push(M.combine),w.push(M.fogExp2),w.push(M.sizeAttenuation),w.push(M.morphTargetsCount),w.push(M.morphAttributeCount),w.push(M.numDirLights),w.push(M.numPointLights),w.push(M.numSpotLights),w.push(M.numSpotLightMaps),w.push(M.numHemiLights),w.push(M.numRectAreaLights),w.push(M.numDirLightShadows),w.push(M.numPointLightShadows),w.push(M.numSpotLightShadows),w.push(M.numSpotLightShadowsWithMaps),w.push(M.numLightProbes),w.push(M.shadowMapType),w.push(M.toneMapping),w.push(M.numClippingPlanes),w.push(M.numClipIntersection),w.push(M.depthPacking)}c(A,"getProgramCacheKeyParameters");function E(w,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),M.gradientMap&&a.enable(22),w.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reversedDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),w.push(a.mask)}c(E,"getProgramCacheKeyBooleans");function y(w){const M=_[w.type];let S;if(M){const B=An[M];S=Z0.clone(B.uniforms)}else S=w.uniforms;return S}c(y,"getUniforms");function C(w,M){let S;for(let B=0,N=h.length;B<N;B++){const H=h[B];if(H.cacheKey===M){S=H,++S.usedTimes;break}}return S===void 0&&(S=new ZM(s,M,w,r),h.push(S)),S}c(C,"acquireProgram");function I(w){if(--w.usedTimes===0){const M=h.indexOf(w);h[M]=h[h.length-1],h.pop(),w.destroy()}}c(I,"releaseProgram");function P(w){l.remove(w)}c(P,"releaseShaderCache");function D(){l.dispose()}return c(D,"dispose"),{getParameters:g,getProgramCacheKey:m,getUniforms:y,acquireProgram:C,releaseProgram:I,releaseShaderCache:P,programs:h,dispose:D}}c(eE,"WebGLPrograms");function tE(){let s=new WeakMap;function e(o){return s.has(o)}c(e,"has");function t(o){let a=s.get(o);return a===void 0&&(a={},s.set(o,a)),a}c(t,"get");function n(o){s.delete(o)}c(n,"remove");function i(o,a,l){s.get(o)[a]=l}c(i,"update");function r(){s=new WeakMap}return c(r,"dispose"),{has:e,get:t,remove:n,update:i,dispose:r}}c(tE,"WebGLProperties");function nE(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}c(nE,"painterSortStable");function kg(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}c(kg,"reversePainterSortStable");function Hg(){const s=[];let e=0;const t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}c(r,"init");function o(d,f,p,_,v,g){let m=s[e];return m===void 0?(m={id:d.id,object:d,geometry:f,material:p,groupOrder:_,renderOrder:d.renderOrder,z:v,group:g},s[e]=m):(m.id=d.id,m.object=d,m.geometry=f,m.material=p,m.groupOrder=_,m.renderOrder=d.renderOrder,m.z=v,m.group=g),e++,m}c(o,"getNextRenderItem");function a(d,f,p,_,v,g){const m=o(d,f,p,_,v,g);p.transmission>0?n.push(m):p.transparent===!0?i.push(m):t.push(m)}c(a,"push");function l(d,f,p,_,v,g){const m=o(d,f,p,_,v,g);p.transmission>0?n.unshift(m):p.transparent===!0?i.unshift(m):t.unshift(m)}c(l,"unshift");function u(d,f){t.length>1&&t.sort(d||nE),n.length>1&&n.sort(f||kg),i.length>1&&i.sort(f||kg)}c(u,"sort");function h(){for(let d=e,f=s.length;d<f;d++){const p=s[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return c(h,"finish"),{opaque:t,transmissive:n,transparent:i,init:r,push:a,unshift:l,finish:h,sort:u}}c(Hg,"WebGLRenderList");function iE(){let s=new WeakMap;function e(n,i){const r=s.get(n);let o;return r===void 0?(o=new Hg,s.set(n,[o])):i>=r.length?(o=new Hg,r.push(o)):o=r[i],o}c(e,"get");function t(){s=new WeakMap}return c(t,"dispose"),{get:e,dispose:t}}c(iE,"WebGLRenderLists");function sE(){const s={};return{get:c(function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new R,color:new ze};break;case"SpotLight":t={position:new R,direction:new R,color:new ze,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new R,color:new ze,distance:0,decay:0};break;case"HemisphereLight":t={direction:new R,skyColor:new ze,groundColor:new ze};break;case"RectAreaLight":t={color:new ze,position:new R,halfWidth:new R,halfHeight:new R};break}return s[e.id]=t,t},"get")}}c(sE,"UniformsCache");function rE(){const s={};return{get:c(function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new le};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new le};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new le,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t},"get")}}c(rE,"ShadowUniformsCache");let oE=0;function aE(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}c(aE,"shadowCastingAndTexturingLightsFirst");function cE(s){const e=new sE,t=rE(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)n.probe.push(new R);const i=new R,r=new je,o=new je;function a(u){let h=0,d=0,f=0;for(let w=0;w<9;w++)n.probe[w].set(0,0,0);let p=0,_=0,v=0,g=0,m=0,A=0,E=0,y=0,C=0,I=0,P=0;u.sort(aE);for(let w=0,M=u.length;w<M;w++){const S=u[w],B=S.color,N=S.intensity,H=S.distance,j=S.shadow&&S.shadow.map?S.shadow.map.texture:null;if(S.isAmbientLight)h+=B.r*N,d+=B.g*N,f+=B.b*N;else if(S.isLightProbe){for(let V=0;V<9;V++)n.probe[V].addScaledVector(S.sh.coefficients[V],N);P++}else if(S.isDirectionalLight){const V=e.get(S);if(V.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){const K=S.shadow,G=t.get(S);G.shadowIntensity=K.intensity,G.shadowBias=K.bias,G.shadowNormalBias=K.normalBias,G.shadowRadius=K.radius,G.shadowMapSize=K.mapSize,n.directionalShadow[p]=G,n.directionalShadowMap[p]=j,n.directionalShadowMatrix[p]=S.shadow.matrix,A++}n.directional[p]=V,p++}else if(S.isSpotLight){const V=e.get(S);V.position.setFromMatrixPosition(S.matrixWorld),V.color.copy(B).multiplyScalar(N),V.distance=H,V.coneCos=Math.cos(S.angle),V.penumbraCos=Math.cos(S.angle*(1-S.penumbra)),V.decay=S.decay,n.spot[v]=V;const K=S.shadow;if(S.map&&(n.spotLightMap[C]=S.map,C++,K.updateMatrices(S),S.castShadow&&I++),n.spotLightMatrix[v]=K.matrix,S.castShadow){const G=t.get(S);G.shadowIntensity=K.intensity,G.shadowBias=K.bias,G.shadowNormalBias=K.normalBias,G.shadowRadius=K.radius,G.shadowMapSize=K.mapSize,n.spotShadow[v]=G,n.spotShadowMap[v]=j,y++}v++}else if(S.isRectAreaLight){const V=e.get(S);V.color.copy(B).multiplyScalar(N),V.halfWidth.set(S.width*.5,0,0),V.halfHeight.set(0,S.height*.5,0),n.rectArea[g]=V,g++}else if(S.isPointLight){const V=e.get(S);if(V.color.copy(S.color).multiplyScalar(S.intensity),V.distance=S.distance,V.decay=S.decay,S.castShadow){const K=S.shadow,G=t.get(S);G.shadowIntensity=K.intensity,G.shadowBias=K.bias,G.shadowNormalBias=K.normalBias,G.shadowRadius=K.radius,G.shadowMapSize=K.mapSize,G.shadowCameraNear=K.camera.near,G.shadowCameraFar=K.camera.far,n.pointShadow[_]=G,n.pointShadowMap[_]=j,n.pointShadowMatrix[_]=S.shadow.matrix,E++}n.point[_]=V,_++}else if(S.isHemisphereLight){const V=e.get(S);V.skyColor.copy(S.color).multiplyScalar(N),V.groundColor.copy(S.groundColor).multiplyScalar(N),n.hemi[m]=V,m++}}g>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ve.LTC_FLOAT_1,n.rectAreaLTC2=ve.LTC_FLOAT_2):(n.rectAreaLTC1=ve.LTC_HALF_1,n.rectAreaLTC2=ve.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=f;const D=n.hash;(D.directionalLength!==p||D.pointLength!==_||D.spotLength!==v||D.rectAreaLength!==g||D.hemiLength!==m||D.numDirectionalShadows!==A||D.numPointShadows!==E||D.numSpotShadows!==y||D.numSpotMaps!==C||D.numLightProbes!==P)&&(n.directional.length=p,n.spot.length=v,n.rectArea.length=g,n.point.length=_,n.hemi.length=m,n.directionalShadow.length=A,n.directionalShadowMap.length=A,n.pointShadow.length=E,n.pointShadowMap.length=E,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=A,n.pointShadowMatrix.length=E,n.spotLightMatrix.length=y+C-I,n.spotLightMap.length=C,n.numSpotLightShadowsWithMaps=I,n.numLightProbes=P,D.directionalLength=p,D.pointLength=_,D.spotLength=v,D.rectAreaLength=g,D.hemiLength=m,D.numDirectionalShadows=A,D.numPointShadows=E,D.numSpotShadows=y,D.numSpotMaps=C,D.numLightProbes=P,n.version=oE++)}c(a,"setup");function l(u,h){let d=0,f=0,p=0,_=0,v=0;const g=h.matrixWorldInverse;for(let m=0,A=u.length;m<A;m++){const E=u[m];if(E.isDirectionalLight){const y=n.directional[d];y.direction.setFromMatrixPosition(E.matrixWorld),i.setFromMatrixPosition(E.target.matrixWorld),y.direction.sub(i),y.direction.transformDirection(g),d++}else if(E.isSpotLight){const y=n.spot[p];y.position.setFromMatrixPosition(E.matrixWorld),y.position.applyMatrix4(g),y.direction.setFromMatrixPosition(E.matrixWorld),i.setFromMatrixPosition(E.target.matrixWorld),y.direction.sub(i),y.direction.transformDirection(g),p++}else if(E.isRectAreaLight){const y=n.rectArea[_];y.position.setFromMatrixPosition(E.matrixWorld),y.position.applyMatrix4(g),o.identity(),r.copy(E.matrixWorld),r.premultiply(g),o.extractRotation(r),y.halfWidth.set(E.width*.5,0,0),y.halfHeight.set(0,E.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),_++}else if(E.isPointLight){const y=n.point[f];y.position.setFromMatrixPosition(E.matrixWorld),y.position.applyMatrix4(g),f++}else if(E.isHemisphereLight){const y=n.hemi[v];y.direction.setFromMatrixPosition(E.matrixWorld),y.direction.transformDirection(g),v++}}}return c(l,"setupView"),{setup:a,setupView:l,state:n}}c(cE,"WebGLLights");function zg(s){const e=new cE(s),t=[],n=[];function i(h){u.camera=h,t.length=0,n.length=0}c(i,"init");function r(h){t.push(h)}c(r,"pushLight");function o(h){n.push(h)}c(o,"pushShadow");function a(){e.setup(t)}c(a,"setupLights");function l(h){e.setupView(t,h)}c(l,"setupLightsView");const u={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:u,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}c(zg,"WebGLRenderState");function lE(s){let e=new WeakMap;function t(i,r=0){const o=e.get(i);let a;return o===void 0?(a=new zg(s),e.set(i,[a])):r>=o.length?(a=new zg(s),o.push(a)):a=o[r],a}c(t,"get");function n(){e=new WeakMap}return c(n,"dispose"),{get:t,dispose:n}}c(lE,"WebGLRenderStates");const uE=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,hE=`uniform sampler2D shadow_pass;
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
}`;function dE(s,e,t){let n=new zr;const i=new le,r=new le,o=new it,a=new Kl({depthPacking:u0}),l=new Jl,u={},h=t.maxTextureSize,d={[Yn]:jt,[jt]:Yn,[xn]:xn},f=new Ln({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new le},radius:{value:4}},vertexShader:uE,fragmentShader:hE}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const _=new qt;_.setAttribute("position",new Ot(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new ut(_,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=a_;let m=this.type;this.render=function(I,P,D){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||I.length===0)return;const w=s.getRenderTarget(),M=s.getActiveCubeFace(),S=s.getActiveMipmapLevel(),B=s.state;B.setBlending(ci),B.buffers.depth.getReversed()?B.buffers.color.setClear(0,0,0,0):B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);const N=m!==zn&&this.type===zn,H=m===zn&&this.type!==zn;for(let j=0,V=I.length;j<V;j++){const K=I[j],G=K.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;i.copy(G.mapSize);const re=G.getFrameExtents();if(i.multiply(re),r.copy(G.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/re.x),i.x=r.x*re.x,G.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/re.y),i.y=r.y*re.y,G.mapSize.y=r.y)),G.map===null||N===!0||H===!0){const Se=this.type!==zn?{minFilter:Vt,magFilter:Vt}:{};G.map!==null&&G.map.dispose(),G.map=new Kn(i.x,i.y,Se),G.map.texture.name=K.name+".shadowMap",G.camera.updateProjectionMatrix()}s.setRenderTarget(G.map),s.clear();const _e=G.getViewportCount();for(let Se=0;Se<_e;Se++){const Ue=G.getViewport(Se);o.set(r.x*Ue.x,r.y*Ue.y,r.x*Ue.z,r.y*Ue.w),B.viewport(o),G.updateMatrices(K,Se),n=G.getFrustum(),y(P,D,G.camera,K,this.type)}G.isPointLightShadow!==!0&&this.type===zn&&A(G,D),G.needsUpdate=!1}m=this.type,g.needsUpdate=!1,s.setRenderTarget(w,M,S)};function A(I,P){const D=e.update(v);f.defines.VSM_SAMPLES!==I.blurSamples&&(f.defines.VSM_SAMPLES=I.blurSamples,p.defines.VSM_SAMPLES=I.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),I.mapPass===null&&(I.mapPass=new Kn(i.x,i.y)),f.uniforms.shadow_pass.value=I.map.texture,f.uniforms.resolution.value=I.mapSize,f.uniforms.radius.value=I.radius,s.setRenderTarget(I.mapPass),s.clear(),s.renderBufferDirect(P,null,D,f,v,null),p.uniforms.shadow_pass.value=I.mapPass.texture,p.uniforms.resolution.value=I.mapSize,p.uniforms.radius.value=I.radius,s.setRenderTarget(I.map),s.clear(),s.renderBufferDirect(P,null,D,p,v,null)}c(A,"VSMPass");function E(I,P,D,w){let M=null;const S=D.isPointLight===!0?I.customDistanceMaterial:I.customDepthMaterial;if(S!==void 0)M=S;else if(M=D.isPointLight===!0?l:a,s.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){const B=M.uuid,N=P.uuid;let H=u[B];H===void 0&&(H={},u[B]=H);let j=H[N];j===void 0&&(j=M.clone(),H[N]=j,P.addEventListener("dispose",C)),M=j}if(M.visible=P.visible,M.wireframe=P.wireframe,w===zn?M.side=P.shadowSide!==null?P.shadowSide:P.side:M.side=P.shadowSide!==null?P.shadowSide:d[P.side],M.alphaMap=P.alphaMap,M.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,M.map=P.map,M.clipShadows=P.clipShadows,M.clippingPlanes=P.clippingPlanes,M.clipIntersection=P.clipIntersection,M.displacementMap=P.displacementMap,M.displacementScale=P.displacementScale,M.displacementBias=P.displacementBias,M.wireframeLinewidth=P.wireframeLinewidth,M.linewidth=P.linewidth,D.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const B=s.properties.get(M);B.light=D}return M}c(E,"getDepthMaterial");function y(I,P,D,w,M){if(I.visible===!1)return;if(I.layers.test(P.layers)&&(I.isMesh||I.isLine||I.isPoints)&&(I.castShadow||I.receiveShadow&&M===zn)&&(!I.frustumCulled||n.intersectsObject(I))){I.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,I.matrixWorld);const N=e.update(I),H=I.material;if(Array.isArray(H)){const j=N.groups;for(let V=0,K=j.length;V<K;V++){const G=j[V],re=H[G.materialIndex];if(re&&re.visible){const _e=E(I,re,w,M);I.onBeforeShadow(s,I,P,D,N,_e,G),s.renderBufferDirect(D,null,N,_e,I,G),I.onAfterShadow(s,I,P,D,N,_e,G)}}}else if(H.visible){const j=E(I,H,w,M);I.onBeforeShadow(s,I,P,D,N,j,null),s.renderBufferDirect(D,null,N,j,I,null),I.onAfterShadow(s,I,P,D,N,j,null)}}const B=I.children;for(let N=0,H=B.length;N<H;N++)y(B[N],P,D,w,M)}c(y,"renderObject");function C(I){I.target.removeEventListener("dispose",C);for(const D in u){const w=u[D],M=I.target.uuid;M in w&&(w[M].dispose(),delete w[M])}}c(C,"onMaterialDispose")}c(dE,"WebGLShadowMap");const fE={[Vc]:Gc,[Wc]:qc,[Xc]:Yc,[$s]:jc,[Gc]:Vc,[qc]:Wc,[Yc]:Xc,[jc]:$s};function pE(s,e){function t(){let O=!1;const ue=new it;let me=null;const Ee=new it(0,0,0,0);return{setMask:c(function(ae){me!==ae&&!O&&(s.colorMask(ae,ae,ae,ae),me=ae)},"setMask"),setLocked:c(function(ae){O=ae},"setLocked"),setClear:c(function(ae,ee,Re,Xe,ht){ht===!0&&(ae*=Xe,ee*=Xe,Re*=Xe),ue.set(ae,ee,Re,Xe),Ee.equals(ue)===!1&&(s.clearColor(ae,ee,Re,Xe),Ee.copy(ue))},"setClear"),reset:c(function(){O=!1,me=null,Ee.set(-1,0,0,0)},"reset")}}c(t,"ColorBuffer");function n(){let O=!1,ue=!1,me=null,Ee=null,ae=null;return{setReversed:c(function(ee){if(ue!==ee){const Re=e.get("EXT_clip_control");ee?Re.clipControlEXT(Re.LOWER_LEFT_EXT,Re.ZERO_TO_ONE_EXT):Re.clipControlEXT(Re.LOWER_LEFT_EXT,Re.NEGATIVE_ONE_TO_ONE_EXT),ue=ee;const Xe=ae;ae=null,this.setClear(Xe)}},"setReversed"),getReversed:c(function(){return ue},"getReversed"),setTest:c(function(ee){ee?de(s.DEPTH_TEST):Oe(s.DEPTH_TEST)},"setTest"),setMask:c(function(ee){me!==ee&&!O&&(s.depthMask(ee),me=ee)},"setMask"),setFunc:c(function(ee){if(ue&&(ee=fE[ee]),Ee!==ee){switch(ee){case Vc:s.depthFunc(s.NEVER);break;case Gc:s.depthFunc(s.ALWAYS);break;case Wc:s.depthFunc(s.LESS);break;case $s:s.depthFunc(s.LEQUAL);break;case Xc:s.depthFunc(s.EQUAL);break;case jc:s.depthFunc(s.GEQUAL);break;case qc:s.depthFunc(s.GREATER);break;case Yc:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Ee=ee}},"setFunc"),setLocked:c(function(ee){O=ee},"setLocked"),setClear:c(function(ee){ae!==ee&&(ue&&(ee=1-ee),s.clearDepth(ee),ae=ee)},"setClear"),reset:c(function(){O=!1,me=null,Ee=null,ae=null,ue=!1},"reset")}}c(n,"DepthBuffer");function i(){let O=!1,ue=null,me=null,Ee=null,ae=null,ee=null,Re=null,Xe=null,ht=null;return{setTest:c(function(st){O||(st?de(s.STENCIL_TEST):Oe(s.STENCIL_TEST))},"setTest"),setMask:c(function(st){ue!==st&&!O&&(s.stencilMask(st),ue=st)},"setMask"),setFunc:c(function(st,On,wn){(me!==st||Ee!==On||ae!==wn)&&(s.stencilFunc(st,On,wn),me=st,Ee=On,ae=wn)},"setFunc"),setOp:c(function(st,On,wn){(ee!==st||Re!==On||Xe!==wn)&&(s.stencilOp(st,On,wn),ee=st,Re=On,Xe=wn)},"setOp"),setLocked:c(function(st){O=st},"setLocked"),setClear:c(function(st){ht!==st&&(s.clearStencil(st),ht=st)},"setClear"),reset:c(function(){O=!1,ue=null,me=null,Ee=null,ae=null,ee=null,Re=null,Xe=null,ht=null},"reset")}}c(i,"StencilBuffer");const r=new t,o=new n,a=new i,l=new WeakMap,u=new WeakMap;let h={},d={},f=new WeakMap,p=[],_=null,v=!1,g=null,m=null,A=null,E=null,y=null,C=null,I=null,P=new ze(0,0,0),D=0,w=!1,M=null,S=null,B=null,N=null,H=null;const j=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let V=!1,K=0;const G=s.getParameter(s.VERSION);G.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(G)[1]),V=K>=1):G.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),V=K>=2);let re=null,_e={};const Se=s.getParameter(s.SCISSOR_BOX),Ue=s.getParameter(s.VIEWPORT),Je=new it().fromArray(Se),Qe=new it().fromArray(Ue);function $(O,ue,me,Ee){const ae=new Uint8Array(4),ee=s.createTexture();s.bindTexture(O,ee),s.texParameteri(O,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(O,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Re=0;Re<me;Re++)O===s.TEXTURE_3D||O===s.TEXTURE_2D_ARRAY?s.texImage3D(ue,0,s.RGBA,1,1,Ee,0,s.RGBA,s.UNSIGNED_BYTE,ae):s.texImage2D(ue+Re,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,ae);return ee}c($,"createTexture");const ge={};ge[s.TEXTURE_2D]=$(s.TEXTURE_2D,s.TEXTURE_2D,1),ge[s.TEXTURE_CUBE_MAP]=$(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),ge[s.TEXTURE_2D_ARRAY]=$(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),ge[s.TEXTURE_3D]=$(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),de(s.DEPTH_TEST),o.setFunc($s),ie(!1),Q(ym),de(s.CULL_FACE),te(ci);function de(O){h[O]!==!0&&(s.enable(O),h[O]=!0)}c(de,"enable");function Oe(O){h[O]!==!1&&(s.disable(O),h[O]=!1)}c(Oe,"disable");function Ce(O,ue){return d[O]!==ue?(s.bindFramebuffer(O,ue),d[O]=ue,O===s.DRAW_FRAMEBUFFER&&(d[s.FRAMEBUFFER]=ue),O===s.FRAMEBUFFER&&(d[s.DRAW_FRAMEBUFFER]=ue),!0):!1}c(Ce,"bindFramebuffer");function Be(O,ue){let me=p,Ee=!1;if(O){me=f.get(ue),me===void 0&&(me=[],f.set(ue,me));const ae=O.textures;if(me.length!==ae.length||me[0]!==s.COLOR_ATTACHMENT0){for(let ee=0,Re=ae.length;ee<Re;ee++)me[ee]=s.COLOR_ATTACHMENT0+ee;me.length=ae.length,Ee=!0}}else me[0]!==s.BACK&&(me[0]=s.BACK,Ee=!0);Ee&&s.drawBuffers(me)}c(Be,"drawBuffers");function gt(O){return _!==O?(s.useProgram(O),_=O,!0):!1}c(gt,"useProgram");const Ge={[Ii]:s.FUNC_ADD,[Ov]:s.FUNC_SUBTRACT,[Nv]:s.FUNC_REVERSE_SUBTRACT};Ge[Uv]=s.MIN,Ge[Fv]=s.MAX;const L={[Bv]:s.ZERO,[kv]:s.ONE,[Hv]:s.SRC_COLOR,[Hc]:s.SRC_ALPHA,[jv]:s.SRC_ALPHA_SATURATE,[Wv]:s.DST_COLOR,[Vv]:s.DST_ALPHA,[zv]:s.ONE_MINUS_SRC_COLOR,[zc]:s.ONE_MINUS_SRC_ALPHA,[Xv]:s.ONE_MINUS_DST_COLOR,[Gv]:s.ONE_MINUS_DST_ALPHA,[qv]:s.CONSTANT_COLOR,[Yv]:s.ONE_MINUS_CONSTANT_COLOR,[$v]:s.CONSTANT_ALPHA,[Kv]:s.ONE_MINUS_CONSTANT_ALPHA};function te(O,ue,me,Ee,ae,ee,Re,Xe,ht,st){if(O===ci){v===!0&&(Oe(s.BLEND),v=!1);return}if(v===!1&&(de(s.BLEND),v=!0),O!==Dv){if(O!==g||st!==w){if((m!==Ii||y!==Ii)&&(s.blendEquation(s.FUNC_ADD),m=Ii,y=Ii),st)switch(O){case gs:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case bm:s.blendFunc(s.ONE,s.ONE);break;case Sm:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Mm:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}else switch(O){case gs:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case bm:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case Sm:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Mm:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}A=null,E=null,C=null,I=null,P.set(0,0,0),D=0,g=O,w=st}return}ae=ae||ue,ee=ee||me,Re=Re||Ee,(ue!==m||ae!==y)&&(s.blendEquationSeparate(Ge[ue],Ge[ae]),m=ue,y=ae),(me!==A||Ee!==E||ee!==C||Re!==I)&&(s.blendFuncSeparate(L[me],L[Ee],L[ee],L[Re]),A=me,E=Ee,C=ee,I=Re),(Xe.equals(P)===!1||ht!==D)&&(s.blendColor(Xe.r,Xe.g,Xe.b,ht),P.copy(Xe),D=ht),g=O,w=!1}c(te,"setBlending");function J(O,ue){O.side===xn?Oe(s.CULL_FACE):de(s.CULL_FACE);let me=O.side===jt;ue&&(me=!me),ie(me),O.blending===gs&&O.transparent===!1?te(ci):te(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),o.setFunc(O.depthFunc),o.setTest(O.depthTest),o.setMask(O.depthWrite),r.setMask(O.colorWrite);const Ee=O.stencilWrite;a.setTest(Ee),Ee&&(a.setMask(O.stencilWriteMask),a.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),a.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),se(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?de(s.SAMPLE_ALPHA_TO_COVERAGE):Oe(s.SAMPLE_ALPHA_TO_COVERAGE)}c(J,"setMaterial");function ie(O){M!==O&&(O?s.frontFace(s.CW):s.frontFace(s.CCW),M=O)}c(ie,"setFlipSided");function Q(O){O!==Pv?(de(s.CULL_FACE),O!==S&&(O===ym?s.cullFace(s.BACK):O===Lv?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Oe(s.CULL_FACE),S=O}c(Q,"setCullFace");function fe(O){O!==B&&(V&&s.lineWidth(O),B=O)}c(fe,"setLineWidth");function se(O,ue,me){O?(de(s.POLYGON_OFFSET_FILL),(N!==ue||H!==me)&&(s.polygonOffset(ue,me),N=ue,H=me)):Oe(s.POLYGON_OFFSET_FILL)}c(se,"setPolygonOffset");function pe(O){O?de(s.SCISSOR_TEST):Oe(s.SCISSOR_TEST)}c(pe,"setScissorTest");function We(O){O===void 0&&(O=s.TEXTURE0+j-1),re!==O&&(s.activeTexture(O),re=O)}c(We,"activeTexture");function Ve(O,ue,me){me===void 0&&(re===null?me=s.TEXTURE0+j-1:me=re);let Ee=_e[me];Ee===void 0&&(Ee={type:void 0,texture:void 0},_e[me]=Ee),(Ee.type!==O||Ee.texture!==ue)&&(re!==me&&(s.activeTexture(me),re=me),s.bindTexture(O,ue||ge[O]),Ee.type=O,Ee.texture=ue)}c(Ve,"bindTexture");function T(){const O=_e[re];O!==void 0&&O.type!==void 0&&(s.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}c(T,"unbindTexture");function x(){try{s.compressedTexImage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}c(x,"compressedTexImage2D");function k(){try{s.compressedTexImage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}c(k,"compressedTexImage3D");function q(){try{s.texSubImage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}c(q,"texSubImage2D");function ne(){try{s.texSubImage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}c(ne,"texSubImage3D");function Y(){try{s.compressedTexSubImage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}c(Y,"compressedTexSubImage2D");function Pe(){try{s.compressedTexSubImage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}c(Pe,"compressedTexSubImage3D");function he(){try{s.texStorage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}c(he,"texStorage2D");function Te(){try{s.texStorage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}c(Te,"texStorage3D");function Ae(){try{s.texImage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}c(Ae,"texImage2D");function oe(){try{s.texImage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}c(oe,"texImage3D");function be(O){Je.equals(O)===!1&&(s.scissor(O.x,O.y,O.z,O.w),Je.copy(O))}c(be,"scissor");function ke(O){Qe.equals(O)===!1&&(s.viewport(O.x,O.y,O.z,O.w),Qe.copy(O))}c(ke,"viewport");function Le(O,ue){let me=u.get(ue);me===void 0&&(me=new WeakMap,u.set(ue,me));let Ee=me.get(O);Ee===void 0&&(Ee=s.getUniformBlockIndex(ue,O.name),me.set(O,Ee))}c(Le,"updateUBOMapping");function xe(O,ue){const Ee=u.get(ue).get(O);l.get(ue)!==Ee&&(s.uniformBlockBinding(ue,Ee,O.__bindingPointIndex),l.set(ue,Ee))}c(xe,"uniformBlockBinding");function qe(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),o.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),h={},re=null,_e={},d={},f=new WeakMap,p=[],_=null,v=!1,g=null,m=null,A=null,E=null,y=null,C=null,I=null,P=new ze(0,0,0),D=0,w=!1,M=null,S=null,B=null,N=null,H=null,Je.set(0,0,s.canvas.width,s.canvas.height),Qe.set(0,0,s.canvas.width,s.canvas.height),r.reset(),o.reset(),a.reset()}return c(qe,"reset"),{buffers:{color:r,depth:o,stencil:a},enable:de,disable:Oe,bindFramebuffer:Ce,drawBuffers:Be,useProgram:gt,setBlending:te,setMaterial:J,setFlipSided:ie,setCullFace:Q,setLineWidth:fe,setPolygonOffset:se,setScissorTest:pe,activeTexture:We,bindTexture:Ve,unbindTexture:T,compressedTexImage2D:x,compressedTexImage3D:k,texImage2D:Ae,texImage3D:oe,updateUBOMapping:Le,uniformBlockBinding:xe,texStorage2D:he,texStorage3D:Te,texSubImage2D:q,texSubImage3D:ne,compressedTexSubImage2D:Y,compressedTexSubImage3D:Pe,scissor:be,viewport:ke,reset:qe}}c(pE,"WebGLState");function mE(s,e,t,n,i,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new le,h=new WeakMap;let d;const f=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(T,x){return p?new OffscreenCanvas(T,x):Fr("canvas")}c(_,"createCanvas");function v(T,x,k){let q=1;const ne=Ve(T);if((ne.width>k||ne.height>k)&&(q=k/Math.max(ne.width,ne.height)),q<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){const Y=Math.floor(q*ne.width),Pe=Math.floor(q*ne.height);d===void 0&&(d=_(Y,Pe));const he=x?_(Y,Pe):d;return he.width=Y,he.height=Pe,he.getContext("2d").drawImage(T,0,0,Y,Pe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ne.width+"x"+ne.height+") to ("+Y+"x"+Pe+")."),he}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ne.width+"x"+ne.height+")."),T;return T}c(v,"resizeImage");function g(T){return T.generateMipmaps}c(g,"textureNeedsGenerateMipmaps");function m(T){s.generateMipmap(T)}c(m,"generateMipmap");function A(T){return T.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?s.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}c(A,"getTargetType");function E(T,x,k,q,ne=!1){if(T!==null){if(s[T]!==void 0)return s[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let Y=x;if(x===s.RED&&(k===s.FLOAT&&(Y=s.R32F),k===s.HALF_FLOAT&&(Y=s.R16F),k===s.UNSIGNED_BYTE&&(Y=s.R8)),x===s.RED_INTEGER&&(k===s.UNSIGNED_BYTE&&(Y=s.R8UI),k===s.UNSIGNED_SHORT&&(Y=s.R16UI),k===s.UNSIGNED_INT&&(Y=s.R32UI),k===s.BYTE&&(Y=s.R8I),k===s.SHORT&&(Y=s.R16I),k===s.INT&&(Y=s.R32I)),x===s.RG&&(k===s.FLOAT&&(Y=s.RG32F),k===s.HALF_FLOAT&&(Y=s.RG16F),k===s.UNSIGNED_BYTE&&(Y=s.RG8)),x===s.RG_INTEGER&&(k===s.UNSIGNED_BYTE&&(Y=s.RG8UI),k===s.UNSIGNED_SHORT&&(Y=s.RG16UI),k===s.UNSIGNED_INT&&(Y=s.RG32UI),k===s.BYTE&&(Y=s.RG8I),k===s.SHORT&&(Y=s.RG16I),k===s.INT&&(Y=s.RG32I)),x===s.RGB_INTEGER&&(k===s.UNSIGNED_BYTE&&(Y=s.RGB8UI),k===s.UNSIGNED_SHORT&&(Y=s.RGB16UI),k===s.UNSIGNED_INT&&(Y=s.RGB32UI),k===s.BYTE&&(Y=s.RGB8I),k===s.SHORT&&(Y=s.RGB16I),k===s.INT&&(Y=s.RGB32I)),x===s.RGBA_INTEGER&&(k===s.UNSIGNED_BYTE&&(Y=s.RGBA8UI),k===s.UNSIGNED_SHORT&&(Y=s.RGBA16UI),k===s.UNSIGNED_INT&&(Y=s.RGBA32UI),k===s.BYTE&&(Y=s.RGBA8I),k===s.SHORT&&(Y=s.RGBA16I),k===s.INT&&(Y=s.RGBA32I)),x===s.RGB&&k===s.UNSIGNED_INT_5_9_9_9_REV&&(Y=s.RGB9_E5),x===s.RGBA){const Pe=ne?Xo:tt.getTransfer(q);k===s.FLOAT&&(Y=s.RGBA32F),k===s.HALF_FLOAT&&(Y=s.RGBA16F),k===s.UNSIGNED_BYTE&&(Y=Pe===ct?s.SRGB8_ALPHA8:s.RGBA8),k===s.UNSIGNED_SHORT_4_4_4_4&&(Y=s.RGBA4),k===s.UNSIGNED_SHORT_5_5_5_1&&(Y=s.RGB5_A1)}return(Y===s.R16F||Y===s.R32F||Y===s.RG16F||Y===s.RG32F||Y===s.RGBA16F||Y===s.RGBA32F)&&e.get("EXT_color_buffer_float"),Y}c(E,"getInternalFormat");function y(T,x){let k;return T?x===null||x===ki||x===Ir?k=s.DEPTH24_STENCIL8:x===bn?k=s.DEPTH32F_STENCIL8:x===Lr&&(k=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===ki||x===Ir?k=s.DEPTH_COMPONENT24:x===bn?k=s.DEPTH_COMPONENT32F:x===Lr&&(k=s.DEPTH_COMPONENT16),k}c(y,"getInternalDepthFormat");function C(T,x){return g(T)===!0||T.isFramebufferTexture&&T.minFilter!==Vt&&T.minFilter!==en?Math.log2(Math.max(x.width,x.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?x.mipmaps.length:1}c(C,"getMipLevels");function I(T){const x=T.target;x.removeEventListener("dispose",I),D(x),x.isVideoTexture&&h.delete(x)}c(I,"onTextureDispose");function P(T){const x=T.target;x.removeEventListener("dispose",P),M(x)}c(P,"onRenderTargetDispose");function D(T){const x=n.get(T);if(x.__webglInit===void 0)return;const k=T.source,q=f.get(k);if(q){const ne=q[x.__cacheKey];ne.usedTimes--,ne.usedTimes===0&&w(T),Object.keys(q).length===0&&f.delete(k)}n.remove(T)}c(D,"deallocateTexture");function w(T){const x=n.get(T);s.deleteTexture(x.__webglTexture);const k=T.source,q=f.get(k);delete q[x.__cacheKey],o.memory.textures--}c(w,"deleteTexture");function M(T){const x=n.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),n.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(x.__webglFramebuffer[q]))for(let ne=0;ne<x.__webglFramebuffer[q].length;ne++)s.deleteFramebuffer(x.__webglFramebuffer[q][ne]);else s.deleteFramebuffer(x.__webglFramebuffer[q]);x.__webglDepthbuffer&&s.deleteRenderbuffer(x.__webglDepthbuffer[q])}else{if(Array.isArray(x.__webglFramebuffer))for(let q=0;q<x.__webglFramebuffer.length;q++)s.deleteFramebuffer(x.__webglFramebuffer[q]);else s.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&s.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&s.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let q=0;q<x.__webglColorRenderbuffer.length;q++)x.__webglColorRenderbuffer[q]&&s.deleteRenderbuffer(x.__webglColorRenderbuffer[q]);x.__webglDepthRenderbuffer&&s.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const k=T.textures;for(let q=0,ne=k.length;q<ne;q++){const Y=n.get(k[q]);Y.__webglTexture&&(s.deleteTexture(Y.__webglTexture),o.memory.textures--),n.remove(k[q])}n.remove(T)}c(M,"deallocateRenderTarget");let S=0;function B(){S=0}c(B,"resetTextureUnits");function N(){const T=S;return T>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+i.maxTextures),S+=1,T}c(N,"allocateTextureUnit");function H(T){const x=[];return x.push(T.wrapS),x.push(T.wrapT),x.push(T.wrapR||0),x.push(T.magFilter),x.push(T.minFilter),x.push(T.anisotropy),x.push(T.internalFormat),x.push(T.format),x.push(T.type),x.push(T.generateMipmaps),x.push(T.premultiplyAlpha),x.push(T.flipY),x.push(T.unpackAlignment),x.push(T.colorSpace),x.join()}c(H,"getTextureCacheKey");function j(T,x){const k=n.get(T);if(T.isVideoTexture&&pe(T),T.isRenderTargetTexture===!1&&T.isExternalTexture!==!0&&T.version>0&&k.__version!==T.version){const q=T.image;if(q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ge(k,T,x);return}}else T.isExternalTexture&&(k.__webglTexture=T.sourceTexture?T.sourceTexture:null);t.bindTexture(s.TEXTURE_2D,k.__webglTexture,s.TEXTURE0+x)}c(j,"setTexture2D");function V(T,x){const k=n.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&k.__version!==T.version){ge(k,T,x);return}t.bindTexture(s.TEXTURE_2D_ARRAY,k.__webglTexture,s.TEXTURE0+x)}c(V,"setTexture2DArray");function K(T,x){const k=n.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&k.__version!==T.version){ge(k,T,x);return}t.bindTexture(s.TEXTURE_3D,k.__webglTexture,s.TEXTURE0+x)}c(K,"setTexture3D");function G(T,x){const k=n.get(T);if(T.version>0&&k.__version!==T.version){de(k,T,x);return}t.bindTexture(s.TEXTURE_CUBE_MAP,k.__webglTexture,s.TEXTURE0+x)}c(G,"setTextureCube");const re={[Zs]:s.REPEAT,[ai]:s.CLAMP_TO_EDGE,[Wo]:s.MIRRORED_REPEAT},_e={[Vt]:s.NEAREST,[l_]:s.NEAREST_MIPMAP_NEAREST,[gr]:s.NEAREST_MIPMAP_LINEAR,[en]:s.LINEAR,[Fo]:s.LINEAR_MIPMAP_NEAREST,[Wn]:s.LINEAR_MIPMAP_LINEAR},Se={[d0]:s.NEVER,[v0]:s.ALWAYS,[f0]:s.LESS,[v_]:s.LEQUAL,[p0]:s.EQUAL,[_0]:s.GEQUAL,[m0]:s.GREATER,[g0]:s.NOTEQUAL};function Ue(T,x){if(x.type===bn&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===en||x.magFilter===Fo||x.magFilter===gr||x.magFilter===Wn||x.minFilter===en||x.minFilter===Fo||x.minFilter===gr||x.minFilter===Wn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(T,s.TEXTURE_WRAP_S,re[x.wrapS]),s.texParameteri(T,s.TEXTURE_WRAP_T,re[x.wrapT]),(T===s.TEXTURE_3D||T===s.TEXTURE_2D_ARRAY)&&s.texParameteri(T,s.TEXTURE_WRAP_R,re[x.wrapR]),s.texParameteri(T,s.TEXTURE_MAG_FILTER,_e[x.magFilter]),s.texParameteri(T,s.TEXTURE_MIN_FILTER,_e[x.minFilter]),x.compareFunction&&(s.texParameteri(T,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(T,s.TEXTURE_COMPARE_FUNC,Se[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===Vt||x.minFilter!==gr&&x.minFilter!==Wn||x.type===bn&&e.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){const k=e.get("EXT_texture_filter_anisotropic");s.texParameterf(T,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,i.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}c(Ue,"setTextureParameters");function Je(T,x){let k=!1;T.__webglInit===void 0&&(T.__webglInit=!0,x.addEventListener("dispose",I));const q=x.source;let ne=f.get(q);ne===void 0&&(ne={},f.set(q,ne));const Y=H(x);if(Y!==T.__cacheKey){ne[Y]===void 0&&(ne[Y]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,k=!0),ne[Y].usedTimes++;const Pe=ne[T.__cacheKey];Pe!==void 0&&(ne[T.__cacheKey].usedTimes--,Pe.usedTimes===0&&w(x)),T.__cacheKey=Y,T.__webglTexture=ne[Y].texture}return k}c(Je,"initTexture");function Qe(T,x,k){return Math.floor(Math.floor(T/k)/x)}c(Qe,"getRow");function $(T,x,k,q){const Y=T.updateRanges;if(Y.length===0)t.texSubImage2D(s.TEXTURE_2D,0,0,0,x.width,x.height,k,q,x.data);else{Y.sort((oe,be)=>oe.start-be.start);let Pe=0;for(let oe=1;oe<Y.length;oe++){const be=Y[Pe],ke=Y[oe],Le=be.start+be.count,xe=Qe(ke.start,x.width,4),qe=Qe(be.start,x.width,4);ke.start<=Le+1&&xe===qe&&Qe(ke.start+ke.count-1,x.width,4)===xe?be.count=Math.max(be.count,ke.start+ke.count-be.start):(++Pe,Y[Pe]=ke)}Y.length=Pe+1;const he=s.getParameter(s.UNPACK_ROW_LENGTH),Te=s.getParameter(s.UNPACK_SKIP_PIXELS),Ae=s.getParameter(s.UNPACK_SKIP_ROWS);s.pixelStorei(s.UNPACK_ROW_LENGTH,x.width);for(let oe=0,be=Y.length;oe<be;oe++){const ke=Y[oe],Le=Math.floor(ke.start/4),xe=Math.ceil(ke.count/4),qe=Le%x.width,O=Math.floor(Le/x.width),ue=xe,me=1;s.pixelStorei(s.UNPACK_SKIP_PIXELS,qe),s.pixelStorei(s.UNPACK_SKIP_ROWS,O),t.texSubImage2D(s.TEXTURE_2D,0,qe,O,ue,me,k,q,x.data)}T.clearUpdateRanges(),s.pixelStorei(s.UNPACK_ROW_LENGTH,he),s.pixelStorei(s.UNPACK_SKIP_PIXELS,Te),s.pixelStorei(s.UNPACK_SKIP_ROWS,Ae)}}c($,"updateTexture");function ge(T,x,k){let q=s.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(q=s.TEXTURE_2D_ARRAY),x.isData3DTexture&&(q=s.TEXTURE_3D);const ne=Je(T,x),Y=x.source;t.bindTexture(q,T.__webglTexture,s.TEXTURE0+k);const Pe=n.get(Y);if(Y.version!==Pe.__version||ne===!0){t.activeTexture(s.TEXTURE0+k);const he=tt.getPrimaries(tt.workingColorSpace),Te=x.colorSpace===oi?null:tt.getPrimaries(x.colorSpace),Ae=x.colorSpace===oi||he===Te?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,x.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,x.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ae);let oe=v(x.image,!1,i.maxTextureSize);oe=We(x,oe);const be=r.convert(x.format,x.colorSpace),ke=r.convert(x.type);let Le=E(x.internalFormat,be,ke,x.colorSpace,x.isVideoTexture);Ue(q,x);let xe;const qe=x.mipmaps,O=x.isVideoTexture!==!0,ue=Pe.__version===void 0||ne===!0,me=Y.dataReady,Ee=C(x,oe);if(x.isDepthTexture)Le=y(x.format===Or,x.type),ue&&(O?t.texStorage2D(s.TEXTURE_2D,1,Le,oe.width,oe.height):t.texImage2D(s.TEXTURE_2D,0,Le,oe.width,oe.height,0,be,ke,null));else if(x.isDataTexture)if(qe.length>0){O&&ue&&t.texStorage2D(s.TEXTURE_2D,Ee,Le,qe[0].width,qe[0].height);for(let ae=0,ee=qe.length;ae<ee;ae++)xe=qe[ae],O?me&&t.texSubImage2D(s.TEXTURE_2D,ae,0,0,xe.width,xe.height,be,ke,xe.data):t.texImage2D(s.TEXTURE_2D,ae,Le,xe.width,xe.height,0,be,ke,xe.data);x.generateMipmaps=!1}else O?(ue&&t.texStorage2D(s.TEXTURE_2D,Ee,Le,oe.width,oe.height),me&&$(x,oe,be,ke)):t.texImage2D(s.TEXTURE_2D,0,Le,oe.width,oe.height,0,be,ke,oe.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){O&&ue&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Ee,Le,qe[0].width,qe[0].height,oe.depth);for(let ae=0,ee=qe.length;ae<ee;ae++)if(xe=qe[ae],x.format!==un)if(be!==null)if(O){if(me)if(x.layerUpdates.size>0){const Re=vg(xe.width,xe.height,x.format,x.type);for(const Xe of x.layerUpdates){const ht=xe.data.subarray(Xe*Re/xe.data.BYTES_PER_ELEMENT,(Xe+1)*Re/xe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ae,0,0,Xe,xe.width,xe.height,1,be,ht)}x.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ae,0,0,0,xe.width,xe.height,oe.depth,be,xe.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,ae,Le,xe.width,xe.height,oe.depth,0,xe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else O?me&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,ae,0,0,0,xe.width,xe.height,oe.depth,be,ke,xe.data):t.texImage3D(s.TEXTURE_2D_ARRAY,ae,Le,xe.width,xe.height,oe.depth,0,be,ke,xe.data)}else{O&&ue&&t.texStorage2D(s.TEXTURE_2D,Ee,Le,qe[0].width,qe[0].height);for(let ae=0,ee=qe.length;ae<ee;ae++)xe=qe[ae],x.format!==un?be!==null?O?me&&t.compressedTexSubImage2D(s.TEXTURE_2D,ae,0,0,xe.width,xe.height,be,xe.data):t.compressedTexImage2D(s.TEXTURE_2D,ae,Le,xe.width,xe.height,0,xe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):O?me&&t.texSubImage2D(s.TEXTURE_2D,ae,0,0,xe.width,xe.height,be,ke,xe.data):t.texImage2D(s.TEXTURE_2D,ae,Le,xe.width,xe.height,0,be,ke,xe.data)}else if(x.isDataArrayTexture)if(O){if(ue&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Ee,Le,oe.width,oe.height,oe.depth),me)if(x.layerUpdates.size>0){const ae=vg(oe.width,oe.height,x.format,x.type);for(const ee of x.layerUpdates){const Re=oe.data.subarray(ee*ae/oe.data.BYTES_PER_ELEMENT,(ee+1)*ae/oe.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,ee,oe.width,oe.height,1,be,ke,Re)}x.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,oe.width,oe.height,oe.depth,be,ke,oe.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,Le,oe.width,oe.height,oe.depth,0,be,ke,oe.data);else if(x.isData3DTexture)O?(ue&&t.texStorage3D(s.TEXTURE_3D,Ee,Le,oe.width,oe.height,oe.depth),me&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,oe.width,oe.height,oe.depth,be,ke,oe.data)):t.texImage3D(s.TEXTURE_3D,0,Le,oe.width,oe.height,oe.depth,0,be,ke,oe.data);else if(x.isFramebufferTexture){if(ue)if(O)t.texStorage2D(s.TEXTURE_2D,Ee,Le,oe.width,oe.height);else{let ae=oe.width,ee=oe.height;for(let Re=0;Re<Ee;Re++)t.texImage2D(s.TEXTURE_2D,Re,Le,ae,ee,0,be,ke,null),ae>>=1,ee>>=1}}else if(qe.length>0){if(O&&ue){const ae=Ve(qe[0]);t.texStorage2D(s.TEXTURE_2D,Ee,Le,ae.width,ae.height)}for(let ae=0,ee=qe.length;ae<ee;ae++)xe=qe[ae],O?me&&t.texSubImage2D(s.TEXTURE_2D,ae,0,0,be,ke,xe):t.texImage2D(s.TEXTURE_2D,ae,Le,be,ke,xe);x.generateMipmaps=!1}else if(O){if(ue){const ae=Ve(oe);t.texStorage2D(s.TEXTURE_2D,Ee,Le,ae.width,ae.height)}me&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,be,ke,oe)}else t.texImage2D(s.TEXTURE_2D,0,Le,be,ke,oe);g(x)&&m(q),Pe.__version=Y.version,x.onUpdate&&x.onUpdate(x)}T.__version=x.version}c(ge,"uploadTexture");function de(T,x,k){if(x.image.length!==6)return;const q=Je(T,x),ne=x.source;t.bindTexture(s.TEXTURE_CUBE_MAP,T.__webglTexture,s.TEXTURE0+k);const Y=n.get(ne);if(ne.version!==Y.__version||q===!0){t.activeTexture(s.TEXTURE0+k);const Pe=tt.getPrimaries(tt.workingColorSpace),he=x.colorSpace===oi?null:tt.getPrimaries(x.colorSpace),Te=x.colorSpace===oi||Pe===he?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,x.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,x.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Te);const Ae=x.isCompressedTexture||x.image[0].isCompressedTexture,oe=x.image[0]&&x.image[0].isDataTexture,be=[];for(let ee=0;ee<6;ee++)!Ae&&!oe?be[ee]=v(x.image[ee],!0,i.maxCubemapSize):be[ee]=oe?x.image[ee].image:x.image[ee],be[ee]=We(x,be[ee]);const ke=be[0],Le=r.convert(x.format,x.colorSpace),xe=r.convert(x.type),qe=E(x.internalFormat,Le,xe,x.colorSpace),O=x.isVideoTexture!==!0,ue=Y.__version===void 0||q===!0,me=ne.dataReady;let Ee=C(x,ke);Ue(s.TEXTURE_CUBE_MAP,x);let ae;if(Ae){O&&ue&&t.texStorage2D(s.TEXTURE_CUBE_MAP,Ee,qe,ke.width,ke.height);for(let ee=0;ee<6;ee++){ae=be[ee].mipmaps;for(let Re=0;Re<ae.length;Re++){const Xe=ae[Re];x.format!==un?Le!==null?O?me&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Re,0,0,Xe.width,Xe.height,Le,Xe.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Re,qe,Xe.width,Xe.height,0,Xe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):O?me&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Re,0,0,Xe.width,Xe.height,Le,xe,Xe.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Re,qe,Xe.width,Xe.height,0,Le,xe,Xe.data)}}}else{if(ae=x.mipmaps,O&&ue){ae.length>0&&Ee++;const ee=Ve(be[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,Ee,qe,ee.width,ee.height)}for(let ee=0;ee<6;ee++)if(oe){O?me&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,be[ee].width,be[ee].height,Le,xe,be[ee].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,qe,be[ee].width,be[ee].height,0,Le,xe,be[ee].data);for(let Re=0;Re<ae.length;Re++){const ht=ae[Re].image[ee].image;O?me&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Re+1,0,0,ht.width,ht.height,Le,xe,ht.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Re+1,qe,ht.width,ht.height,0,Le,xe,ht.data)}}else{O?me&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,Le,xe,be[ee]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,qe,Le,xe,be[ee]);for(let Re=0;Re<ae.length;Re++){const Xe=ae[Re];O?me&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Re+1,0,0,Le,xe,Xe.image[ee]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Re+1,qe,Le,xe,Xe.image[ee])}}}g(x)&&m(s.TEXTURE_CUBE_MAP),Y.__version=ne.version,x.onUpdate&&x.onUpdate(x)}T.__version=x.version}c(de,"uploadCubeTexture");function Oe(T,x,k,q,ne,Y){const Pe=r.convert(k.format,k.colorSpace),he=r.convert(k.type),Te=E(k.internalFormat,Pe,he,k.colorSpace),Ae=n.get(x),oe=n.get(k);if(oe.__renderTarget=x,!Ae.__hasExternalTextures){const be=Math.max(1,x.width>>Y),ke=Math.max(1,x.height>>Y);ne===s.TEXTURE_3D||ne===s.TEXTURE_2D_ARRAY?t.texImage3D(ne,Y,Te,be,ke,x.depth,0,Pe,he,null):t.texImage2D(ne,Y,Te,be,ke,0,Pe,he,null)}t.bindFramebuffer(s.FRAMEBUFFER,T),se(x)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,q,ne,oe.__webglTexture,0,fe(x)):(ne===s.TEXTURE_2D||ne>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&ne<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,q,ne,oe.__webglTexture,Y),t.bindFramebuffer(s.FRAMEBUFFER,null)}c(Oe,"setupFrameBufferTexture");function Ce(T,x,k){if(s.bindRenderbuffer(s.RENDERBUFFER,T),x.depthBuffer){const q=x.depthTexture,ne=q&&q.isDepthTexture?q.type:null,Y=y(x.stencilBuffer,ne),Pe=x.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,he=fe(x);se(x)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,he,Y,x.width,x.height):k?s.renderbufferStorageMultisample(s.RENDERBUFFER,he,Y,x.width,x.height):s.renderbufferStorage(s.RENDERBUFFER,Y,x.width,x.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Pe,s.RENDERBUFFER,T)}else{const q=x.textures;for(let ne=0;ne<q.length;ne++){const Y=q[ne],Pe=r.convert(Y.format,Y.colorSpace),he=r.convert(Y.type),Te=E(Y.internalFormat,Pe,he,Y.colorSpace),Ae=fe(x);k&&se(x)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ae,Te,x.width,x.height):se(x)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ae,Te,x.width,x.height):s.renderbufferStorage(s.RENDERBUFFER,Te,x.width,x.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}c(Ce,"setupRenderBufferStorage");function Be(T,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,T),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const q=n.get(x.depthTexture);q.__renderTarget=x,(!q.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),j(x.depthTexture,0);const ne=q.__webglTexture,Y=fe(x);if(x.depthTexture.format===Dr)se(x)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ne,0,Y):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ne,0);else if(x.depthTexture.format===Or)se(x)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ne,0,Y):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ne,0);else throw new Error("Unknown depthTexture format")}c(Be,"setupDepthTexture");function gt(T){const x=n.get(T),k=T.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==T.depthTexture){const q=T.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),q){const ne=c(()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,q.removeEventListener("dispose",ne)},"disposeEvent");q.addEventListener("dispose",ne),x.__depthDisposeCallback=ne}x.__boundDepthTexture=q}if(T.depthTexture&&!x.__autoAllocateDepthBuffer){if(k)throw new Error("target.depthTexture not supported in Cube render targets");const q=T.texture.mipmaps;q&&q.length>0?Be(x.__webglFramebuffer[0],T):Be(x.__webglFramebuffer,T)}else if(k){x.__webglDepthbuffer=[];for(let q=0;q<6;q++)if(t.bindFramebuffer(s.FRAMEBUFFER,x.__webglFramebuffer[q]),x.__webglDepthbuffer[q]===void 0)x.__webglDepthbuffer[q]=s.createRenderbuffer(),Ce(x.__webglDepthbuffer[q],T,!1);else{const ne=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Y=x.__webglDepthbuffer[q];s.bindRenderbuffer(s.RENDERBUFFER,Y),s.framebufferRenderbuffer(s.FRAMEBUFFER,ne,s.RENDERBUFFER,Y)}}else{const q=T.texture.mipmaps;if(q&&q.length>0?t.bindFramebuffer(s.FRAMEBUFFER,x.__webglFramebuffer[0]):t.bindFramebuffer(s.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=s.createRenderbuffer(),Ce(x.__webglDepthbuffer,T,!1);else{const ne=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Y=x.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,Y),s.framebufferRenderbuffer(s.FRAMEBUFFER,ne,s.RENDERBUFFER,Y)}}t.bindFramebuffer(s.FRAMEBUFFER,null)}c(gt,"setupDepthRenderbuffer");function Ge(T,x,k){const q=n.get(T);x!==void 0&&Oe(q.__webglFramebuffer,T,T.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),k!==void 0&&gt(T)}c(Ge,"rebindTextures");function L(T){const x=T.texture,k=n.get(T),q=n.get(x);T.addEventListener("dispose",P);const ne=T.textures,Y=T.isWebGLCubeRenderTarget===!0,Pe=ne.length>1;if(Pe||(q.__webglTexture===void 0&&(q.__webglTexture=s.createTexture()),q.__version=x.version,o.memory.textures++),Y){k.__webglFramebuffer=[];for(let he=0;he<6;he++)if(x.mipmaps&&x.mipmaps.length>0){k.__webglFramebuffer[he]=[];for(let Te=0;Te<x.mipmaps.length;Te++)k.__webglFramebuffer[he][Te]=s.createFramebuffer()}else k.__webglFramebuffer[he]=s.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){k.__webglFramebuffer=[];for(let he=0;he<x.mipmaps.length;he++)k.__webglFramebuffer[he]=s.createFramebuffer()}else k.__webglFramebuffer=s.createFramebuffer();if(Pe)for(let he=0,Te=ne.length;he<Te;he++){const Ae=n.get(ne[he]);Ae.__webglTexture===void 0&&(Ae.__webglTexture=s.createTexture(),o.memory.textures++)}if(T.samples>0&&se(T)===!1){k.__webglMultisampledFramebuffer=s.createFramebuffer(),k.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let he=0;he<ne.length;he++){const Te=ne[he];k.__webglColorRenderbuffer[he]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,k.__webglColorRenderbuffer[he]);const Ae=r.convert(Te.format,Te.colorSpace),oe=r.convert(Te.type),be=E(Te.internalFormat,Ae,oe,Te.colorSpace,T.isXRRenderTarget===!0),ke=fe(T);s.renderbufferStorageMultisample(s.RENDERBUFFER,ke,be,T.width,T.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+he,s.RENDERBUFFER,k.__webglColorRenderbuffer[he])}s.bindRenderbuffer(s.RENDERBUFFER,null),T.depthBuffer&&(k.__webglDepthRenderbuffer=s.createRenderbuffer(),Ce(k.__webglDepthRenderbuffer,T,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(Y){t.bindTexture(s.TEXTURE_CUBE_MAP,q.__webglTexture),Ue(s.TEXTURE_CUBE_MAP,x);for(let he=0;he<6;he++)if(x.mipmaps&&x.mipmaps.length>0)for(let Te=0;Te<x.mipmaps.length;Te++)Oe(k.__webglFramebuffer[he][Te],T,x,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+he,Te);else Oe(k.__webglFramebuffer[he],T,x,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+he,0);g(x)&&m(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Pe){for(let he=0,Te=ne.length;he<Te;he++){const Ae=ne[he],oe=n.get(Ae);let be=s.TEXTURE_2D;(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(be=T.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(be,oe.__webglTexture),Ue(be,Ae),Oe(k.__webglFramebuffer,T,Ae,s.COLOR_ATTACHMENT0+he,be,0),g(Ae)&&m(be)}t.unbindTexture()}else{let he=s.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(he=T.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(he,q.__webglTexture),Ue(he,x),x.mipmaps&&x.mipmaps.length>0)for(let Te=0;Te<x.mipmaps.length;Te++)Oe(k.__webglFramebuffer[Te],T,x,s.COLOR_ATTACHMENT0,he,Te);else Oe(k.__webglFramebuffer,T,x,s.COLOR_ATTACHMENT0,he,0);g(x)&&m(he),t.unbindTexture()}T.depthBuffer&&gt(T)}c(L,"setupRenderTarget");function te(T){const x=T.textures;for(let k=0,q=x.length;k<q;k++){const ne=x[k];if(g(ne)){const Y=A(T),Pe=n.get(ne).__webglTexture;t.bindTexture(Y,Pe),m(Y),t.unbindTexture()}}}c(te,"updateRenderTargetMipmap");const J=[],ie=[];function Q(T){if(T.samples>0){if(se(T)===!1){const x=T.textures,k=T.width,q=T.height;let ne=s.COLOR_BUFFER_BIT;const Y=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Pe=n.get(T),he=x.length>1;if(he)for(let Ae=0;Ae<x.length;Ae++)t.bindFramebuffer(s.FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ae,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,Pe.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ae,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,Pe.__webglMultisampledFramebuffer);const Te=T.texture.mipmaps;Te&&Te.length>0?t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Pe.__webglFramebuffer[0]):t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Pe.__webglFramebuffer);for(let Ae=0;Ae<x.length;Ae++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(ne|=s.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(ne|=s.STENCIL_BUFFER_BIT)),he){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Pe.__webglColorRenderbuffer[Ae]);const oe=n.get(x[Ae]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,oe,0)}s.blitFramebuffer(0,0,k,q,0,0,k,q,ne,s.NEAREST),l===!0&&(J.length=0,ie.length=0,J.push(s.COLOR_ATTACHMENT0+Ae),T.depthBuffer&&T.resolveDepthBuffer===!1&&(J.push(Y),ie.push(Y),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,ie)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,J))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),he)for(let Ae=0;Ae<x.length;Ae++){t.bindFramebuffer(s.FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ae,s.RENDERBUFFER,Pe.__webglColorRenderbuffer[Ae]);const oe=n.get(x[Ae]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,Pe.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ae,s.TEXTURE_2D,oe,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Pe.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&l){const x=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[x])}}}c(Q,"updateMultisampleRenderTarget");function fe(T){return Math.min(i.maxSamples,T.samples)}c(fe,"getRenderTargetSamples");function se(T){const x=n.get(T);return T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}c(se,"useMultisampledRTT");function pe(T){const x=o.render.frame;h.get(T)!==x&&(h.set(T,x),T.update())}c(pe,"updateVideoTexture");function We(T,x){const k=T.colorSpace,q=T.format,ne=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||k!==Gt&&k!==oi&&(tt.getTransfer(k)===ct?(q!==un||ne!==Cn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",k)),x}c(We,"verifyColorSpace");function Ve(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(u.width=T.naturalWidth||T.width,u.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(u.width=T.displayWidth,u.height=T.displayHeight):(u.width=T.width,u.height=T.height),u}c(Ve,"getDimensions"),this.allocateTextureUnit=N,this.resetTextureUnits=B,this.setTexture2D=j,this.setTexture2DArray=V,this.setTexture3D=K,this.setTextureCube=G,this.rebindTextures=Ge,this.setupRenderTarget=L,this.updateRenderTargetMipmap=te,this.updateMultisampleRenderTarget=Q,this.setupDepthRenderbuffer=gt,this.setupFrameBufferTexture=Oe,this.useMultisampledRTT=se}c(mE,"WebGLTextures");function gE(s,e){function t(n,i=oi){let r;const o=tt.getTransfer(i);if(n===Cn)return s.UNSIGNED_BYTE;if(n===$h)return s.UNSIGNED_SHORT_4_4_4_4;if(n===Kh)return s.UNSIGNED_SHORT_5_5_5_1;if(n===d_)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===u_)return s.BYTE;if(n===h_)return s.SHORT;if(n===Lr)return s.UNSIGNED_SHORT;if(n===Yh)return s.INT;if(n===ki)return s.UNSIGNED_INT;if(n===bn)return s.FLOAT;if(n===to)return s.HALF_FLOAT;if(n===f_)return s.ALPHA;if(n===p_)return s.RGB;if(n===un)return s.RGBA;if(n===Dr)return s.DEPTH_COMPONENT;if(n===Or)return s.DEPTH_STENCIL;if(n===Jh)return s.RED;if(n===Zh)return s.RED_INTEGER;if(n===m_)return s.RG;if(n===Qh)return s.RG_INTEGER;if(n===ed)return s.RGBA_INTEGER;if(n===Bo||n===ko||n===Ho||n===zo)if(o===ct)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Bo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ko)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ho)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===zo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Bo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ko)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ho)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===zo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Jc||n===Zc||n===Qc||n===el)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Jc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Zc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Qc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===el)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===tl||n===nl||n===il)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===tl||n===nl)return o===ct?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===il)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===sl||n===rl||n===ol||n===al||n===cl||n===ll||n===ul||n===hl||n===dl||n===fl||n===pl||n===ml||n===gl||n===_l)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===sl)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===rl)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ol)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===al)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===cl)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ll)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ul)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===hl)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===dl)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===fl)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===pl)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ml)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===gl)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===_l)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Vo||n===vl||n===xl)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Vo)return o===ct?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===vl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===xl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===g_||n===yl||n===bl||n===Sl)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Vo)return r.COMPRESSED_RED_RGTC1_EXT;if(n===yl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===bl)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Sl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ir?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return c(t,"convert"),{convert:t}}c(gE,"WebGLUtils");const up=class up extends Nt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}};c(up,"ExternalTexture");let va=up;const _E=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,vE=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,hp=class hp{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new va(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Ln({vertexShader:_E,fragmentShader:vE,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ut(new da(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}};c(hp,"WebXRDepthSensing");let wu=hp;const dp=class dp extends $n{constructor(e,t){super();const n=this;let i=null,r=1,o=null,a="local-floor",l=1,u=null,h=null,d=null,f=null,p=null,_=null;const v=new wu,g={},m=t.getContextAttributes();let A=null,E=null;const y=[],C=[],I=new le;let P=null;const D=new Dt;D.viewport=new it;const w=new Dt;w.viewport=new it;const M=[D,w],S=new pu;let B=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let ge=y[$];return ge===void 0&&(ge=new Mr,y[$]=ge),ge.getTargetRaySpace()},this.getControllerGrip=function($){let ge=y[$];return ge===void 0&&(ge=new Mr,y[$]=ge),ge.getGripSpace()},this.getHand=function($){let ge=y[$];return ge===void 0&&(ge=new Mr,y[$]=ge),ge.getHandSpace()};function H($){const ge=C.indexOf($.inputSource);if(ge===-1)return;const de=y[ge];de!==void 0&&(de.update($.inputSource,$.frame,u||o),de.dispatchEvent({type:$.type,data:$.inputSource}))}c(H,"onSessionEvent");function j(){i.removeEventListener("select",H),i.removeEventListener("selectstart",H),i.removeEventListener("selectend",H),i.removeEventListener("squeeze",H),i.removeEventListener("squeezestart",H),i.removeEventListener("squeezeend",H),i.removeEventListener("end",j),i.removeEventListener("inputsourceschange",V);for(let $=0;$<y.length;$++){const ge=C[$];ge!==null&&(C[$]=null,y[$].disconnect(ge))}B=null,N=null,v.reset();for(const $ in g)delete g[$];e.setRenderTarget(A),p=null,f=null,d=null,i=null,E=null,Qe.stop(),n.isPresenting=!1,e.setPixelRatio(P),e.setSize(I.width,I.height,!1),n.dispatchEvent({type:"sessionend"})}c(j,"onSessionEnd"),this.setFramebufferScaleFactor=function($){r=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){a=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||o},this.setReferenceSpace=function($){u=$},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return d},this.getFrame=function(){return _},this.getSession=function(){return i},this.setSession=async function($){if(i=$,i!==null){if(A=e.getRenderTarget(),i.addEventListener("select",H),i.addEventListener("selectstart",H),i.addEventListener("selectend",H),i.addEventListener("squeeze",H),i.addEventListener("squeezestart",H),i.addEventListener("squeezeend",H),i.addEventListener("end",j),i.addEventListener("inputsourceschange",V),m.xrCompatible!==!0&&await t.makeXRCompatible(),P=e.getPixelRatio(),e.getSize(I),typeof XRWebGLBinding<"u"&&(d=new XRWebGLBinding(i,t)),d!==null&&"createProjectionLayer"in XRWebGLBinding.prototype){let de=null,Oe=null,Ce=null;m.depth&&(Ce=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,de=m.stencil?Or:Dr,Oe=m.stencil?Ir:ki);const Be={colorFormat:t.RGBA8,depthFormat:Ce,scaleFactor:r};f=d.createProjectionLayer(Be),i.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),E=new Kn(f.textureWidth,f.textureHeight,{format:un,type:Cn,depthTexture:new sa(f.textureWidth,f.textureHeight,Oe,void 0,void 0,void 0,void 0,void 0,void 0,de),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const de={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(i,t,de),i.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),E=new Kn(p.framebufferWidth,p.framebufferHeight,{format:un,type:Cn,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(l),u=null,o=await i.requestReferenceSpace(a),Qe.setContext(i),Qe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function V($){for(let ge=0;ge<$.removed.length;ge++){const de=$.removed[ge],Oe=C.indexOf(de);Oe>=0&&(C[Oe]=null,y[Oe].disconnect(de))}for(let ge=0;ge<$.added.length;ge++){const de=$.added[ge];let Oe=C.indexOf(de);if(Oe===-1){for(let Be=0;Be<y.length;Be++)if(Be>=C.length){C.push(de),Oe=Be;break}else if(C[Be]===null){C[Be]=de,Oe=Be;break}if(Oe===-1)break}const Ce=y[Oe];Ce&&Ce.connect(de)}}c(V,"onInputSourcesChange");const K=new R,G=new R;function re($,ge,de){K.setFromMatrixPosition(ge.matrixWorld),G.setFromMatrixPosition(de.matrixWorld);const Oe=K.distanceTo(G),Ce=ge.projectionMatrix.elements,Be=de.projectionMatrix.elements,gt=Ce[14]/(Ce[10]-1),Ge=Ce[14]/(Ce[10]+1),L=(Ce[9]+1)/Ce[5],te=(Ce[9]-1)/Ce[5],J=(Ce[8]-1)/Ce[0],ie=(Be[8]+1)/Be[0],Q=gt*J,fe=gt*ie,se=Oe/(-J+ie),pe=se*-J;if(ge.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(pe),$.translateZ(se),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),Ce[10]===-1)$.projectionMatrix.copy(ge.projectionMatrix),$.projectionMatrixInverse.copy(ge.projectionMatrixInverse);else{const We=gt+se,Ve=Ge+se,T=Q-pe,x=fe+(Oe-pe),k=L*Ge/Ve*We,q=te*Ge/Ve*We;$.projectionMatrix.makePerspective(T,x,k,q,We,Ve),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}c(re,"setProjectionFromUnion");function _e($,ge){ge===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(ge.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}c(_e,"updateCamera"),this.updateCamera=function($){if(i===null)return;let ge=$.near,de=$.far;v.texture!==null&&(v.depthNear>0&&(ge=v.depthNear),v.depthFar>0&&(de=v.depthFar)),S.near=w.near=D.near=ge,S.far=w.far=D.far=de,(B!==S.near||N!==S.far)&&(i.updateRenderState({depthNear:S.near,depthFar:S.far}),B=S.near,N=S.far),S.layers.mask=$.layers.mask|6,D.layers.mask=S.layers.mask&3,w.layers.mask=S.layers.mask&5;const Oe=$.parent,Ce=S.cameras;_e(S,Oe);for(let Be=0;Be<Ce.length;Be++)_e(Ce[Be],Oe);Ce.length===2?re(S,D,w):S.projectionMatrix.copy(D.projectionMatrix),Se($,S,Oe)};function Se($,ge,de){de===null?$.matrix.copy(ge.matrixWorld):($.matrix.copy(de.matrixWorld),$.matrix.invert(),$.matrix.multiply(ge.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(ge.projectionMatrix),$.projectionMatrixInverse.copy(ge.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=Qs*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}c(Se,"updateUserCamera"),this.getCamera=function(){return S},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function($){l=$,f!==null&&(f.fixedFoveation=$),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=$)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(S)},this.getCameraTexture=function($){return g[$]};let Ue=null;function Je($,ge){if(h=ge.getViewerPose(u||o),_=ge,h!==null){const de=h.views;p!==null&&(e.setRenderTargetFramebuffer(E,p.framebuffer),e.setRenderTarget(E));let Oe=!1;de.length!==S.cameras.length&&(S.cameras.length=0,Oe=!0);for(let Ge=0;Ge<de.length;Ge++){const L=de[Ge];let te=null;if(p!==null)te=p.getViewport(L);else{const ie=d.getViewSubImage(f,L);te=ie.viewport,Ge===0&&(e.setRenderTargetTextures(E,ie.colorTexture,ie.depthStencilTexture),e.setRenderTarget(E))}let J=M[Ge];J===void 0&&(J=new Dt,J.layers.enable(Ge),J.viewport=new it,M[Ge]=J),J.matrix.fromArray(L.transform.matrix),J.matrix.decompose(J.position,J.quaternion,J.scale),J.projectionMatrix.fromArray(L.projectionMatrix),J.projectionMatrixInverse.copy(J.projectionMatrix).invert(),J.viewport.set(te.x,te.y,te.width,te.height),Ge===0&&(S.matrix.copy(J.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),Oe===!0&&S.cameras.push(J)}const Ce=i.enabledFeatures;if(Ce&&Ce.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&d){const Ge=d.getDepthInformation(de[0]);Ge&&Ge.isValid&&Ge.texture&&v.init(Ge,i.renderState)}if(Ce&&Ce.includes("camera-access")&&(e.state.unbindTexture(),d))for(let Ge=0;Ge<de.length;Ge++){const L=de[Ge].camera;if(L){let te=g[L];te||(te=new va,g[L]=te);const J=d.getCameraImage(L);te.sourceTexture=J}}}for(let de=0;de<y.length;de++){const Oe=C[de],Ce=y[de];Oe!==null&&Ce!==void 0&&Ce.update(Oe,ge,u||o)}Ue&&Ue($,ge),ge.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ge}),_=null}c(Je,"onAnimationFrame");const Qe=new A_;Qe.setAnimationLoop(Je),this.setAnimationLoop=function($){Ue=$},this.dispose=function(){}}};c(dp,"WebXRManager");let Tu=dp;const Ri=new Sn,xE=new je;function yE(s,e){function t(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}c(t,"refreshTransformUniform");function n(g,m){m.color.getRGB(g.fogColor.value,b_(s)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}c(n,"refreshFogUniforms");function i(g,m,A,E,y){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(g,m):m.isMeshToonMaterial?(r(g,m),d(g,m)):m.isMeshPhongMaterial?(r(g,m),h(g,m)):m.isMeshStandardMaterial?(r(g,m),f(g,m),m.isMeshPhysicalMaterial&&p(g,m,y)):m.isMeshMatcapMaterial?(r(g,m),_(g,m)):m.isMeshDepthMaterial?r(g,m):m.isMeshDistanceMaterial?(r(g,m),v(g,m)):m.isMeshNormalMaterial?r(g,m):m.isLineBasicMaterial?(o(g,m),m.isLineDashedMaterial&&a(g,m)):m.isPointsMaterial?l(g,m,A,E):m.isSpriteMaterial?u(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}c(i,"refreshMaterialUniforms");function r(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,t(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===jt&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,t(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===jt&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,t(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,t(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);const A=e.get(m),E=A.envMap,y=A.envMapRotation;E&&(g.envMap.value=E,Ri.copy(y),Ri.x*=-1,Ri.y*=-1,Ri.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(Ri.y*=-1,Ri.z*=-1),g.envMapRotation.value.setFromMatrix4(xE.makeRotationFromEuler(Ri)),g.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,g.aoMapTransform))}c(r,"refreshUniformsCommon");function o(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform))}c(o,"refreshUniformsLine");function a(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}c(a,"refreshUniformsDash");function l(g,m,A,E){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*A,g.scale.value=E*.5,m.map&&(g.map.value=m.map,t(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}c(l,"refreshUniformsPoints");function u(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}c(u,"refreshUniformsSprites");function h(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}c(h,"refreshUniformsPhong");function d(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}c(d,"refreshUniformsToon");function f(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}c(f,"refreshUniformsStandard");function p(g,m,A){g.ior.value=m.ior,m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===jt&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=A.texture,g.transmissionSamplerSize.value.set(A.width,A.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,g.specularIntensityMapTransform))}c(p,"refreshUniformsPhysical");function _(g,m){m.matcap&&(g.matcap.value=m.matcap)}c(_,"refreshUniformsMatcap");function v(g,m){const A=e.get(m).light;g.referencePosition.value.setFromMatrixPosition(A.matrixWorld),g.nearDistance.value=A.shadow.camera.near,g.farDistance.value=A.shadow.camera.far}return c(v,"refreshUniformsDistance"),{refreshFogUniforms:n,refreshMaterialUniforms:i}}c(yE,"WebGLMaterials");function bE(s,e,t,n){let i={},r={},o=[];const a=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(A,E){const y=E.program;n.uniformBlockBinding(A,y)}c(l,"bind");function u(A,E){let y=i[A.id];y===void 0&&(_(A),y=h(A),i[A.id]=y,A.addEventListener("dispose",g));const C=E.program;n.updateUBOMapping(A,C);const I=e.render.frame;r[A.id]!==I&&(f(A),r[A.id]=I)}c(u,"update");function h(A){const E=d();A.__bindingPointIndex=E;const y=s.createBuffer(),C=A.__size,I=A.usage;return s.bindBuffer(s.UNIFORM_BUFFER,y),s.bufferData(s.UNIFORM_BUFFER,C,I),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,E,y),y}c(h,"createBuffer");function d(){for(let A=0;A<a;A++)if(o.indexOf(A)===-1)return o.push(A),A;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}c(d,"allocateBindingPointIndex");function f(A){const E=i[A.id],y=A.uniforms,C=A.__cache;s.bindBuffer(s.UNIFORM_BUFFER,E);for(let I=0,P=y.length;I<P;I++){const D=Array.isArray(y[I])?y[I]:[y[I]];for(let w=0,M=D.length;w<M;w++){const S=D[w];if(p(S,I,w,C)===!0){const B=S.__offset,N=Array.isArray(S.value)?S.value:[S.value];let H=0;for(let j=0;j<N.length;j++){const V=N[j],K=v(V);typeof V=="number"||typeof V=="boolean"?(S.__data[0]=V,s.bufferSubData(s.UNIFORM_BUFFER,B+H,S.__data)):V.isMatrix3?(S.__data[0]=V.elements[0],S.__data[1]=V.elements[1],S.__data[2]=V.elements[2],S.__data[3]=0,S.__data[4]=V.elements[3],S.__data[5]=V.elements[4],S.__data[6]=V.elements[5],S.__data[7]=0,S.__data[8]=V.elements[6],S.__data[9]=V.elements[7],S.__data[10]=V.elements[8],S.__data[11]=0):(V.toArray(S.__data,H),H+=K.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,B,S.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}c(f,"updateBufferData");function p(A,E,y,C){const I=A.value,P=E+"_"+y;if(C[P]===void 0)return typeof I=="number"||typeof I=="boolean"?C[P]=I:C[P]=I.clone(),!0;{const D=C[P];if(typeof I=="number"||typeof I=="boolean"){if(D!==I)return C[P]=I,!0}else if(D.equals(I)===!1)return D.copy(I),!0}return!1}c(p,"hasUniformChanged");function _(A){const E=A.uniforms;let y=0;const C=16;for(let P=0,D=E.length;P<D;P++){const w=Array.isArray(E[P])?E[P]:[E[P]];for(let M=0,S=w.length;M<S;M++){const B=w[M],N=Array.isArray(B.value)?B.value:[B.value];for(let H=0,j=N.length;H<j;H++){const V=N[H],K=v(V),G=y%C,re=G%K.boundary,_e=G+re;y+=re,_e!==0&&C-_e<K.storage&&(y+=C-_e),B.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=y,y+=K.storage}}}const I=y%C;return I>0&&(y+=C-I),A.__size=y,A.__cache={},this}c(_,"prepareUniformsGroup");function v(A){const E={boundary:0,storage:0};return typeof A=="number"||typeof A=="boolean"?(E.boundary=4,E.storage=4):A.isVector2?(E.boundary=8,E.storage=8):A.isVector3||A.isColor?(E.boundary=16,E.storage=12):A.isVector4?(E.boundary=16,E.storage=16):A.isMatrix3?(E.boundary=48,E.storage=48):A.isMatrix4?(E.boundary=64,E.storage=64):A.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",A),E}c(v,"getUniformSize");function g(A){const E=A.target;E.removeEventListener("dispose",g);const y=o.indexOf(E.__bindingPointIndex);o.splice(y,1),s.deleteBuffer(i[E.id]),delete i[E.id],delete r[E.id]}c(g,"onUniformsGroupsDispose");function m(){for(const A in i)s.deleteBuffer(i[A]);o=[],i={},r={}}return c(m,"dispose"),{bind:l,update:u,dispose:m}}c(bE,"WebGLUniformsGroups");const fp=class fp{constructor(e={}){const{canvas:t=N0(),context:n=null,depth:i=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;const _=new Uint32Array(4),v=new Int32Array(4);let g=null,m=null;const A=[],E=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=li,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const y=this;let C=!1;this._outputColorSpace=Lt;let I=0,P=0,D=null,w=-1,M=null;const S=new it,B=new it;let N=null;const H=new ze(0);let j=0,V=t.width,K=t.height,G=1,re=null,_e=null;const Se=new it(0,0,V,K),Ue=new it(0,0,V,K);let Je=!1;const Qe=new zr;let $=!1,ge=!1;const de=new je,Oe=new R,Ce=new it,Be={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let gt=!1;function Ge(){return D===null?G:1}c(Ge,"getTargetPixelRatio");let L=n;function te(b,U){return t.getContext(b,U)}c(te,"getContext");try{const b={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${jh}`),t.addEventListener("webglcontextlost",me,!1),t.addEventListener("webglcontextrestored",Ee,!1),t.addEventListener("webglcontextcreationerror",ae,!1),L===null){const U="webgl2";if(L=te(U,b),L===null)throw te(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let J,ie,Q,fe,se,pe,We,Ve,T,x,k,q,ne,Y,Pe,he,Te,Ae,oe,be,ke,Le,xe,qe;function O(){J=new kS(L),J.init(),Le=new gE(L,J),ie=new IS(L,J,e,Le),Q=new pE(L,J),ie.reversedDepthBuffer&&f&&Q.buffers.depth.setReversed(!0),fe=new VS(L),se=new tE,pe=new mE(L,J,Q,se,ie,Le,fe),We=new OS(y),Ve=new BS(y),T=new Yx(L),xe=new PS(L,T),x=new HS(L,T,fe,xe),k=new WS(L,x,T,fe),oe=new GS(L,ie,pe),he=new DS(se),q=new eE(y,We,Ve,J,ie,xe,he),ne=new yE(y,se),Y=new iE,Pe=new lE(J),Ae=new CS(y,We,Ve,Q,k,p,l),Te=new dE(y,k,ie),qe=new bE(L,fe,ie,Q),be=new LS(L,J,fe),ke=new zS(L,J,fe),fe.programs=q.programs,y.capabilities=ie,y.extensions=J,y.properties=se,y.renderLists=Y,y.shadowMap=Te,y.state=Q,y.info=fe}c(O,"initGLContext"),O();const ue=new Tu(y,L);this.xr=ue,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const b=J.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=J.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(b){b!==void 0&&(G=b,this.setSize(V,K,!1))},this.getSize=function(b){return b.set(V,K)},this.setSize=function(b,U,W=!0){if(ue.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}V=b,K=U,t.width=Math.floor(b*G),t.height=Math.floor(U*G),W===!0&&(t.style.width=b+"px",t.style.height=U+"px"),this.setViewport(0,0,b,U)},this.getDrawingBufferSize=function(b){return b.set(V*G,K*G).floor()},this.setDrawingBufferSize=function(b,U,W){V=b,K=U,G=W,t.width=Math.floor(b*W),t.height=Math.floor(U*W),this.setViewport(0,0,b,U)},this.getCurrentViewport=function(b){return b.copy(S)},this.getViewport=function(b){return b.copy(Se)},this.setViewport=function(b,U,W,X){b.isVector4?Se.set(b.x,b.y,b.z,b.w):Se.set(b,U,W,X),Q.viewport(S.copy(Se).multiplyScalar(G).round())},this.getScissor=function(b){return b.copy(Ue)},this.setScissor=function(b,U,W,X){b.isVector4?Ue.set(b.x,b.y,b.z,b.w):Ue.set(b,U,W,X),Q.scissor(B.copy(Ue).multiplyScalar(G).round())},this.getScissorTest=function(){return Je},this.setScissorTest=function(b){Q.setScissorTest(Je=b)},this.setOpaqueSort=function(b){re=b},this.setTransparentSort=function(b){_e=b},this.getClearColor=function(b){return b.copy(Ae.getClearColor())},this.setClearColor=function(){Ae.setClearColor(...arguments)},this.getClearAlpha=function(){return Ae.getClearAlpha()},this.setClearAlpha=function(){Ae.setClearAlpha(...arguments)},this.clear=function(b=!0,U=!0,W=!0){let X=0;if(b){let F=!1;if(D!==null){const ce=D.texture.format;F=ce===ed||ce===Qh||ce===Zh}if(F){const ce=D.texture.type,ye=ce===Cn||ce===ki||ce===Lr||ce===Ir||ce===$h||ce===Kh,we=Ae.getClearColor(),Me=Ae.getClearAlpha(),Fe=we.r,He=we.g,De=we.b;ye?(_[0]=Fe,_[1]=He,_[2]=De,_[3]=Me,L.clearBufferuiv(L.COLOR,0,_)):(v[0]=Fe,v[1]=He,v[2]=De,v[3]=Me,L.clearBufferiv(L.COLOR,0,v))}else X|=L.COLOR_BUFFER_BIT}U&&(X|=L.DEPTH_BUFFER_BIT),W&&(X|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",me,!1),t.removeEventListener("webglcontextrestored",Ee,!1),t.removeEventListener("webglcontextcreationerror",ae,!1),Ae.dispose(),Y.dispose(),Pe.dispose(),se.dispose(),We.dispose(),Ve.dispose(),k.dispose(),xe.dispose(),qe.dispose(),q.dispose(),ue.dispose(),ue.removeEventListener("sessionstart",wn),ue.removeEventListener("sessionend",hm),bi.stop()};function me(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),C=!0}c(me,"onContextLost");function Ee(){console.log("THREE.WebGLRenderer: Context Restored."),C=!1;const b=fe.autoReset,U=Te.enabled,W=Te.autoUpdate,X=Te.needsUpdate,F=Te.type;O(),fe.autoReset=b,Te.enabled=U,Te.autoUpdate=W,Te.needsUpdate=X,Te.type=F}c(Ee,"onContextRestore");function ae(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}c(ae,"onContextCreationError");function ee(b){const U=b.target;U.removeEventListener("dispose",ee),Re(U)}c(ee,"onMaterialDispose");function Re(b){Xe(b),se.remove(b)}c(Re,"deallocateMaterial");function Xe(b){const U=se.get(b).programs;U!==void 0&&(U.forEach(function(W){q.releaseProgram(W)}),b.isShaderMaterial&&q.releaseShaderCache(b))}c(Xe,"releaseMaterialProgramReferences"),this.renderBufferDirect=function(b,U,W,X,F,ce){U===null&&(U=Be);const ye=F.isMesh&&F.matrixWorld.determinant()<0,we=W_(b,U,W,X,F);Q.setMaterial(X,ye);let Me=W.index,Fe=1;if(X.wireframe===!0){if(Me=x.getWireframeAttribute(W),Me===void 0)return;Fe=2}const He=W.drawRange,De=W.attributes.position;let et=He.start*Fe,ot=(He.start+He.count)*Fe;ce!==null&&(et=Math.max(et,ce.start*Fe),ot=Math.min(ot,(ce.start+ce.count)*Fe)),Me!==null?(et=Math.max(et,0),ot=Math.min(ot,Me.count)):De!=null&&(et=Math.max(et,0),ot=Math.min(ot,De.count));const bt=ot-et;if(bt<0||bt===1/0)return;xe.setup(F,X,we,W,Me);let ft,lt=be;if(Me!==null&&(ft=T.get(Me),lt=ke,lt.setIndex(ft)),F.isMesh)X.wireframe===!0?(Q.setLineWidth(X.wireframeLinewidth*Ge()),lt.setMode(L.LINES)):lt.setMode(L.TRIANGLES);else if(F.isLine){let Ne=X.linewidth;Ne===void 0&&(Ne=1),Q.setLineWidth(Ne*Ge()),F.isLineSegments?lt.setMode(L.LINES):F.isLineLoop?lt.setMode(L.LINE_LOOP):lt.setMode(L.LINE_STRIP)}else F.isPoints?lt.setMode(L.POINTS):F.isSprite&&lt.setMode(L.TRIANGLES);if(F.isBatchedMesh)if(F._multiDrawInstances!==null)_s("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),lt.renderMultiDrawInstances(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount,F._multiDrawInstances);else if(J.get("WEBGL_multi_draw"))lt.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else{const Ne=F._multiDrawStarts,_t=F._multiDrawCounts,nt=F._multiDrawCount,Kt=Me?T.get(Me).bytesPerElement:1,Xi=se.get(X).currentProgram.getUniforms();for(let Jt=0;Jt<nt;Jt++)Xi.setValue(L,"_gl_DrawID",Jt),lt.render(Ne[Jt]/Kt,_t[Jt])}else if(F.isInstancedMesh)lt.renderInstances(et,bt,F.count);else if(W.isInstancedBufferGeometry){const Ne=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,_t=Math.min(W.instanceCount,Ne);lt.renderInstances(et,bt,_t)}else lt.render(et,bt)};function ht(b,U,W){b.transparent===!0&&b.side===xn&&b.forceSinglePass===!1?(b.side=jt,b.needsUpdate=!0,io(b,U,W),b.side=Yn,b.needsUpdate=!0,io(b,U,W),b.side=xn):io(b,U,W)}c(ht,"prepareMaterial"),this.compile=function(b,U,W=null){W===null&&(W=b),m=Pe.get(W),m.init(U),E.push(m),W.traverseVisible(function(F){F.isLight&&F.layers.test(U.layers)&&(m.pushLight(F),F.castShadow&&m.pushShadow(F))}),b!==W&&b.traverseVisible(function(F){F.isLight&&F.layers.test(U.layers)&&(m.pushLight(F),F.castShadow&&m.pushShadow(F))}),m.setupLights();const X=new Set;return b.traverse(function(F){if(!(F.isMesh||F.isPoints||F.isLine||F.isSprite))return;const ce=F.material;if(ce)if(Array.isArray(ce))for(let ye=0;ye<ce.length;ye++){const we=ce[ye];ht(we,W,F),X.add(we)}else ht(ce,W,F),X.add(ce)}),m=E.pop(),X},this.compileAsync=function(b,U,W=null){const X=this.compile(b,U,W);return new Promise(F=>{function ce(){if(X.forEach(function(ye){se.get(ye).currentProgram.isReady()&&X.delete(ye)}),X.size===0){F(b);return}setTimeout(ce,10)}c(ce,"checkMaterialsReady"),J.get("KHR_parallel_shader_compile")!==null?ce():setTimeout(ce,10)})};let st=null;function On(b){st&&st(b)}c(On,"onAnimationFrame");function wn(){bi.stop()}c(wn,"onXRSessionStart");function hm(){bi.start()}c(hm,"onXRSessionEnd");const bi=new A_;bi.setAnimationLoop(On),typeof self<"u"&&bi.setContext(self),this.setAnimationLoop=function(b){st=b,ue.setAnimationLoop(b),b===null?bi.stop():bi.start()},ue.addEventListener("sessionstart",wn),ue.addEventListener("sessionend",hm),this.render=function(b,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),ue.enabled===!0&&ue.isPresenting===!0&&(ue.cameraAutoUpdate===!0&&ue.updateCamera(U),U=ue.getCamera()),b.isScene===!0&&b.onBeforeRender(y,b,U,D),m=Pe.get(b,E.length),m.init(U),E.push(m),de.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),Qe.setFromProjectionMatrix(de,Rn,U.reversedDepth),ge=this.localClippingEnabled,$=he.init(this.clippingPlanes,ge),g=Y.get(b,A.length),g.init(),A.push(g),ue.enabled===!0&&ue.isPresenting===!0){const ce=y.xr.getDepthSensingMesh();ce!==null&&ja(ce,U,-1/0,y.sortObjects)}ja(b,U,0,y.sortObjects),g.finish(),y.sortObjects===!0&&g.sort(re,_e),gt=ue.enabled===!1||ue.isPresenting===!1||ue.hasDepthSensing()===!1,gt&&Ae.addToRenderList(g,b),this.info.render.frame++,$===!0&&he.beginShadows();const W=m.state.shadowsArray;Te.render(W,b,U),$===!0&&he.endShadows(),this.info.autoReset===!0&&this.info.reset();const X=g.opaque,F=g.transmissive;if(m.setupLights(),U.isArrayCamera){const ce=U.cameras;if(F.length>0)for(let ye=0,we=ce.length;ye<we;ye++){const Me=ce[ye];fm(X,F,b,Me)}gt&&Ae.render(b);for(let ye=0,we=ce.length;ye<we;ye++){const Me=ce[ye];dm(g,b,Me,Me.viewport)}}else F.length>0&&fm(X,F,b,U),gt&&Ae.render(b),dm(g,b,U);D!==null&&P===0&&(pe.updateMultisampleRenderTarget(D),pe.updateRenderTargetMipmap(D)),b.isScene===!0&&b.onAfterRender(y,b,U),xe.resetDefaultState(),w=-1,M=null,E.pop(),E.length>0?(m=E[E.length-1],$===!0&&he.setGlobalState(y.clippingPlanes,m.state.camera)):m=null,A.pop(),A.length>0?g=A[A.length-1]:g=null};function ja(b,U,W,X){if(b.visible===!1)return;if(b.layers.test(U.layers)){if(b.isGroup)W=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(U);else if(b.isLight)m.pushLight(b),b.castShadow&&m.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||Qe.intersectsSprite(b)){X&&Ce.setFromMatrixPosition(b.matrixWorld).applyMatrix4(de);const ye=k.update(b),we=b.material;we.visible&&g.push(b,ye,we,W,Ce.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||Qe.intersectsObject(b))){const ye=k.update(b),we=b.material;if(X&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Ce.copy(b.boundingSphere.center)):(ye.boundingSphere===null&&ye.computeBoundingSphere(),Ce.copy(ye.boundingSphere.center)),Ce.applyMatrix4(b.matrixWorld).applyMatrix4(de)),Array.isArray(we)){const Me=ye.groups;for(let Fe=0,He=Me.length;Fe<He;Fe++){const De=Me[Fe],et=we[De.materialIndex];et&&et.visible&&g.push(b,ye,et,W,Ce.z,De)}}else we.visible&&g.push(b,ye,we,W,Ce.z,null)}}const ce=b.children;for(let ye=0,we=ce.length;ye<we;ye++)ja(ce[ye],U,W,X)}c(ja,"projectObject");function dm(b,U,W,X){const F=b.opaque,ce=b.transmissive,ye=b.transparent;m.setupLightsView(W),$===!0&&he.setGlobalState(y.clippingPlanes,W),X&&Q.viewport(S.copy(X)),F.length>0&&no(F,U,W),ce.length>0&&no(ce,U,W),ye.length>0&&no(ye,U,W),Q.buffers.depth.setTest(!0),Q.buffers.depth.setMask(!0),Q.buffers.color.setMask(!0),Q.setPolygonOffset(!1)}c(dm,"renderScene");function fm(b,U,W,X){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[X.id]===void 0&&(m.state.transmissionRenderTarget[X.id]=new Kn(1,1,{generateMipmaps:!0,type:J.has("EXT_color_buffer_half_float")||J.has("EXT_color_buffer_float")?to:Cn,minFilter:Wn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:tt.workingColorSpace}));const ce=m.state.transmissionRenderTarget[X.id],ye=X.viewport||S;ce.setSize(ye.z*y.transmissionResolutionScale,ye.w*y.transmissionResolutionScale);const we=y.getRenderTarget(),Me=y.getActiveCubeFace(),Fe=y.getActiveMipmapLevel();y.setRenderTarget(ce),y.getClearColor(H),j=y.getClearAlpha(),j<1&&y.setClearColor(16777215,.5),y.clear(),gt&&Ae.render(W);const He=y.toneMapping;y.toneMapping=li;const De=X.viewport;if(X.viewport!==void 0&&(X.viewport=void 0),m.setupLightsView(X),$===!0&&he.setGlobalState(y.clippingPlanes,X),no(b,W,X),pe.updateMultisampleRenderTarget(ce),pe.updateRenderTargetMipmap(ce),J.has("WEBGL_multisampled_render_to_texture")===!1){let et=!1;for(let ot=0,bt=U.length;ot<bt;ot++){const ft=U[ot],lt=ft.object,Ne=ft.geometry,_t=ft.material,nt=ft.group;if(_t.side===xn&&lt.layers.test(X.layers)){const Kt=_t.side;_t.side=jt,_t.needsUpdate=!0,pm(lt,W,X,Ne,_t,nt),_t.side=Kt,_t.needsUpdate=!0,et=!0}}et===!0&&(pe.updateMultisampleRenderTarget(ce),pe.updateRenderTargetMipmap(ce))}y.setRenderTarget(we,Me,Fe),y.setClearColor(H,j),De!==void 0&&(X.viewport=De),y.toneMapping=He}c(fm,"renderTransmissionPass");function no(b,U,W){const X=U.isScene===!0?U.overrideMaterial:null;for(let F=0,ce=b.length;F<ce;F++){const ye=b[F],we=ye.object,Me=ye.geometry,Fe=ye.group;let He=ye.material;He.allowOverride===!0&&X!==null&&(He=X),we.layers.test(W.layers)&&pm(we,U,W,Me,He,Fe)}}c(no,"renderObjects");function pm(b,U,W,X,F,ce){b.onBeforeRender(y,U,W,X,F,ce),b.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),F.onBeforeRender(y,U,W,X,b,ce),F.transparent===!0&&F.side===xn&&F.forceSinglePass===!1?(F.side=jt,F.needsUpdate=!0,y.renderBufferDirect(W,U,X,F,b,ce),F.side=Yn,F.needsUpdate=!0,y.renderBufferDirect(W,U,X,F,b,ce),F.side=xn):y.renderBufferDirect(W,U,X,F,b,ce),b.onAfterRender(y,U,W,X,F,ce)}c(pm,"renderObject");function io(b,U,W){U.isScene!==!0&&(U=Be);const X=se.get(b),F=m.state.lights,ce=m.state.shadowsArray,ye=F.state.version,we=q.getParameters(b,F.state,ce,U,W),Me=q.getProgramCacheKey(we);let Fe=X.programs;X.environment=b.isMeshStandardMaterial?U.environment:null,X.fog=U.fog,X.envMap=(b.isMeshStandardMaterial?Ve:We).get(b.envMap||X.environment),X.envMapRotation=X.environment!==null&&b.envMap===null?U.environmentRotation:b.envMapRotation,Fe===void 0&&(b.addEventListener("dispose",ee),Fe=new Map,X.programs=Fe);let He=Fe.get(Me);if(He!==void 0){if(X.currentProgram===He&&X.lightsStateVersion===ye)return gm(b,we),He}else we.uniforms=q.getUniforms(b),b.onBeforeCompile(we,y),He=q.acquireProgram(we,Me),Fe.set(Me,He),X.uniforms=we.uniforms;const De=X.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(De.clippingPlanes=he.uniform),gm(b,we),X.needsLights=j_(b),X.lightsStateVersion=ye,X.needsLights&&(De.ambientLightColor.value=F.state.ambient,De.lightProbe.value=F.state.probe,De.directionalLights.value=F.state.directional,De.directionalLightShadows.value=F.state.directionalShadow,De.spotLights.value=F.state.spot,De.spotLightShadows.value=F.state.spotShadow,De.rectAreaLights.value=F.state.rectArea,De.ltc_1.value=F.state.rectAreaLTC1,De.ltc_2.value=F.state.rectAreaLTC2,De.pointLights.value=F.state.point,De.pointLightShadows.value=F.state.pointShadow,De.hemisphereLights.value=F.state.hemi,De.directionalShadowMap.value=F.state.directionalShadowMap,De.directionalShadowMatrix.value=F.state.directionalShadowMatrix,De.spotShadowMap.value=F.state.spotShadowMap,De.spotLightMatrix.value=F.state.spotLightMatrix,De.spotLightMap.value=F.state.spotLightMap,De.pointShadowMap.value=F.state.pointShadowMap,De.pointShadowMatrix.value=F.state.pointShadowMatrix),X.currentProgram=He,X.uniformsList=null,He}c(io,"getProgram");function mm(b){if(b.uniformsList===null){const U=b.currentProgram.getUniforms();b.uniformsList=xs.seqWithValue(U.seq,b.uniforms)}return b.uniformsList}c(mm,"getUniformList");function gm(b,U){const W=se.get(b);W.outputColorSpace=U.outputColorSpace,W.batching=U.batching,W.batchingColor=U.batchingColor,W.instancing=U.instancing,W.instancingColor=U.instancingColor,W.instancingMorph=U.instancingMorph,W.skinning=U.skinning,W.morphTargets=U.morphTargets,W.morphNormals=U.morphNormals,W.morphColors=U.morphColors,W.morphTargetsCount=U.morphTargetsCount,W.numClippingPlanes=U.numClippingPlanes,W.numIntersection=U.numClipIntersection,W.vertexAlphas=U.vertexAlphas,W.vertexTangents=U.vertexTangents,W.toneMapping=U.toneMapping}c(gm,"updateCommonMaterialProperties");function W_(b,U,W,X,F){U.isScene!==!0&&(U=Be),pe.resetTextureUnits();const ce=U.fog,ye=X.isMeshStandardMaterial?U.environment:null,we=D===null?y.outputColorSpace:D.isXRRenderTarget===!0?D.texture.colorSpace:Gt,Me=(X.isMeshStandardMaterial?Ve:We).get(X.envMap||ye),Fe=X.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,He=!!W.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),De=!!W.morphAttributes.position,et=!!W.morphAttributes.normal,ot=!!W.morphAttributes.color;let bt=li;X.toneMapped&&(D===null||D.isXRRenderTarget===!0)&&(bt=y.toneMapping);const ft=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,lt=ft!==void 0?ft.length:0,Ne=se.get(X),_t=m.state.lights;if($===!0&&(ge===!0||b!==M)){const kt=b===M&&X.id===w;he.setState(X,b,kt)}let nt=!1;X.version===Ne.__version?(Ne.needsLights&&Ne.lightsStateVersion!==_t.state.version||Ne.outputColorSpace!==we||F.isBatchedMesh&&Ne.batching===!1||!F.isBatchedMesh&&Ne.batching===!0||F.isBatchedMesh&&Ne.batchingColor===!0&&F.colorTexture===null||F.isBatchedMesh&&Ne.batchingColor===!1&&F.colorTexture!==null||F.isInstancedMesh&&Ne.instancing===!1||!F.isInstancedMesh&&Ne.instancing===!0||F.isSkinnedMesh&&Ne.skinning===!1||!F.isSkinnedMesh&&Ne.skinning===!0||F.isInstancedMesh&&Ne.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&Ne.instancingColor===!1&&F.instanceColor!==null||F.isInstancedMesh&&Ne.instancingMorph===!0&&F.morphTexture===null||F.isInstancedMesh&&Ne.instancingMorph===!1&&F.morphTexture!==null||Ne.envMap!==Me||X.fog===!0&&Ne.fog!==ce||Ne.numClippingPlanes!==void 0&&(Ne.numClippingPlanes!==he.numPlanes||Ne.numIntersection!==he.numIntersection)||Ne.vertexAlphas!==Fe||Ne.vertexTangents!==He||Ne.morphTargets!==De||Ne.morphNormals!==et||Ne.morphColors!==ot||Ne.toneMapping!==bt||Ne.morphTargetsCount!==lt)&&(nt=!0):(nt=!0,Ne.__version=X.version);let Kt=Ne.currentProgram;nt===!0&&(Kt=io(X,U,F));let Xi=!1,Jt=!1,sr=!1;const vt=Kt.getUniforms(),on=Ne.uniforms;if(Q.useProgram(Kt.program)&&(Xi=!0,Jt=!0,sr=!0),X.id!==w&&(w=X.id,Jt=!0),Xi||M!==b){Q.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),vt.setValue(L,"projectionMatrix",b.projectionMatrix),vt.setValue(L,"viewMatrix",b.matrixWorldInverse);const Xt=vt.map.cameraPosition;Xt!==void 0&&Xt.setValue(L,Oe.setFromMatrixPosition(b.matrixWorld)),ie.logarithmicDepthBuffer&&vt.setValue(L,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&vt.setValue(L,"isOrthographic",b.isOrthographicCamera===!0),M!==b&&(M=b,Jt=!0,sr=!0)}if(F.isSkinnedMesh){vt.setOptional(L,F,"bindMatrix"),vt.setOptional(L,F,"bindMatrixInverse");const kt=F.skeleton;kt&&(kt.boneTexture===null&&kt.computeBoneTexture(),vt.setValue(L,"boneTexture",kt.boneTexture,pe))}F.isBatchedMesh&&(vt.setOptional(L,F,"batchingTexture"),vt.setValue(L,"batchingTexture",F._matricesTexture,pe),vt.setOptional(L,F,"batchingIdTexture"),vt.setValue(L,"batchingIdTexture",F._indirectTexture,pe),vt.setOptional(L,F,"batchingColorTexture"),F._colorsTexture!==null&&vt.setValue(L,"batchingColorTexture",F._colorsTexture,pe));const an=W.morphAttributes;if((an.position!==void 0||an.normal!==void 0||an.color!==void 0)&&oe.update(F,W,Kt),(Jt||Ne.receiveShadow!==F.receiveShadow)&&(Ne.receiveShadow=F.receiveShadow,vt.setValue(L,"receiveShadow",F.receiveShadow)),X.isMeshGouraudMaterial&&X.envMap!==null&&(on.envMap.value=Me,on.flipEnvMap.value=Me.isCubeTexture&&Me.isRenderTargetTexture===!1?-1:1),X.isMeshStandardMaterial&&X.envMap===null&&U.environment!==null&&(on.envMapIntensity.value=U.environmentIntensity),Jt&&(vt.setValue(L,"toneMappingExposure",y.toneMappingExposure),Ne.needsLights&&X_(on,sr),ce&&X.fog===!0&&ne.refreshFogUniforms(on,ce),ne.refreshMaterialUniforms(on,X,G,K,m.state.transmissionRenderTarget[b.id]),xs.upload(L,mm(Ne),on,pe)),X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(xs.upload(L,mm(Ne),on,pe),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&vt.setValue(L,"center",F.center),vt.setValue(L,"modelViewMatrix",F.modelViewMatrix),vt.setValue(L,"normalMatrix",F.normalMatrix),vt.setValue(L,"modelMatrix",F.matrixWorld),X.isShaderMaterial||X.isRawShaderMaterial){const kt=X.uniformsGroups;for(let Xt=0,qa=kt.length;Xt<qa;Xt++){const Si=kt[Xt];qe.update(Si,Kt),qe.bind(Si,Kt)}}return Kt}c(W_,"setProgram");function X_(b,U){b.ambientLightColor.needsUpdate=U,b.lightProbe.needsUpdate=U,b.directionalLights.needsUpdate=U,b.directionalLightShadows.needsUpdate=U,b.pointLights.needsUpdate=U,b.pointLightShadows.needsUpdate=U,b.spotLights.needsUpdate=U,b.spotLightShadows.needsUpdate=U,b.rectAreaLights.needsUpdate=U,b.hemisphereLights.needsUpdate=U}c(X_,"markUniformsLightsNeedsUpdate");function j_(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}c(j_,"materialNeedsLights"),this.getActiveCubeFace=function(){return I},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return D},this.setRenderTargetTextures=function(b,U,W){const X=se.get(b);X.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,X.__autoAllocateDepthBuffer===!1&&(X.__useRenderToTexture=!1),se.get(b.texture).__webglTexture=U,se.get(b.depthTexture).__webglTexture=X.__autoAllocateDepthBuffer?void 0:W,X.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,U){const W=se.get(b);W.__webglFramebuffer=U,W.__useDefaultFramebuffer=U===void 0};const q_=L.createFramebuffer();this.setRenderTarget=function(b,U=0,W=0){D=b,I=U,P=W;let X=!0,F=null,ce=!1,ye=!1;if(b){const Me=se.get(b);if(Me.__useDefaultFramebuffer!==void 0)Q.bindFramebuffer(L.FRAMEBUFFER,null),X=!1;else if(Me.__webglFramebuffer===void 0)pe.setupRenderTarget(b);else if(Me.__hasExternalTextures)pe.rebindTextures(b,se.get(b.texture).__webglTexture,se.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const De=b.depthTexture;if(Me.__boundDepthTexture!==De){if(De!==null&&se.has(De)&&(b.width!==De.image.width||b.height!==De.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");pe.setupDepthRenderbuffer(b)}}const Fe=b.texture;(Fe.isData3DTexture||Fe.isDataArrayTexture||Fe.isCompressedArrayTexture)&&(ye=!0);const He=se.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(He[U])?F=He[U][W]:F=He[U],ce=!0):b.samples>0&&pe.useMultisampledRTT(b)===!1?F=se.get(b).__webglMultisampledFramebuffer:Array.isArray(He)?F=He[W]:F=He,S.copy(b.viewport),B.copy(b.scissor),N=b.scissorTest}else S.copy(Se).multiplyScalar(G).floor(),B.copy(Ue).multiplyScalar(G).floor(),N=Je;if(W!==0&&(F=q_),Q.bindFramebuffer(L.FRAMEBUFFER,F)&&X&&Q.drawBuffers(b,F),Q.viewport(S),Q.scissor(B),Q.setScissorTest(N),ce){const Me=se.get(b.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+U,Me.__webglTexture,W)}else if(ye){const Me=U;for(let Fe=0;Fe<b.textures.length;Fe++){const He=se.get(b.textures[Fe]);L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0+Fe,He.__webglTexture,W,Me)}}else if(b!==null&&W!==0){const Me=se.get(b.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Me.__webglTexture,W)}w=-1},this.readRenderTargetPixels=function(b,U,W,X,F,ce,ye,we=0){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Me=se.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&ye!==void 0&&(Me=Me[ye]),Me){Q.bindFramebuffer(L.FRAMEBUFFER,Me);try{const Fe=b.textures[we],He=Fe.format,De=Fe.type;if(!ie.textureFormatReadable(He)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ie.textureTypeReadable(De)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=b.width-X&&W>=0&&W<=b.height-F&&(b.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+we),L.readPixels(U,W,X,F,Le.convert(He),Le.convert(De),ce))}finally{const Fe=D!==null?se.get(D).__webglFramebuffer:null;Q.bindFramebuffer(L.FRAMEBUFFER,Fe)}}},this.readRenderTargetPixelsAsync=async function(b,U,W,X,F,ce,ye,we=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Me=se.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&ye!==void 0&&(Me=Me[ye]),Me)if(U>=0&&U<=b.width-X&&W>=0&&W<=b.height-F){Q.bindFramebuffer(L.FRAMEBUFFER,Me);const Fe=b.textures[we],He=Fe.format,De=Fe.type;if(!ie.textureFormatReadable(He))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ie.textureTypeReadable(De))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const et=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,et),L.bufferData(L.PIXEL_PACK_BUFFER,ce.byteLength,L.STREAM_READ),b.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+we),L.readPixels(U,W,X,F,Le.convert(He),Le.convert(De),0);const ot=D!==null?se.get(D).__webglFramebuffer:null;Q.bindFramebuffer(L.FRAMEBUFFER,ot);const bt=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await U0(L,bt,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,et),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,ce),L.deleteBuffer(et),L.deleteSync(bt),ce}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,U=null,W=0){const X=Math.pow(2,-W),F=Math.floor(b.image.width*X),ce=Math.floor(b.image.height*X),ye=U!==null?U.x:0,we=U!==null?U.y:0;pe.setTexture2D(b,0),L.copyTexSubImage2D(L.TEXTURE_2D,W,0,0,ye,we,F,ce),Q.unbindTexture()};const Y_=L.createFramebuffer(),$_=L.createFramebuffer();this.copyTextureToTexture=function(b,U,W=null,X=null,F=0,ce=null){ce===null&&(F!==0?(_s("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ce=F,F=0):ce=0);let ye,we,Me,Fe,He,De,et,ot,bt;const ft=b.isCompressedTexture?b.mipmaps[ce]:b.image;if(W!==null)ye=W.max.x-W.min.x,we=W.max.y-W.min.y,Me=W.isBox3?W.max.z-W.min.z:1,Fe=W.min.x,He=W.min.y,De=W.isBox3?W.min.z:0;else{const an=Math.pow(2,-F);ye=Math.floor(ft.width*an),we=Math.floor(ft.height*an),b.isDataArrayTexture?Me=ft.depth:b.isData3DTexture?Me=Math.floor(ft.depth*an):Me=1,Fe=0,He=0,De=0}X!==null?(et=X.x,ot=X.y,bt=X.z):(et=0,ot=0,bt=0);const lt=Le.convert(U.format),Ne=Le.convert(U.type);let _t;U.isData3DTexture?(pe.setTexture3D(U,0),_t=L.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(pe.setTexture2DArray(U,0),_t=L.TEXTURE_2D_ARRAY):(pe.setTexture2D(U,0),_t=L.TEXTURE_2D),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,U.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,U.unpackAlignment);const nt=L.getParameter(L.UNPACK_ROW_LENGTH),Kt=L.getParameter(L.UNPACK_IMAGE_HEIGHT),Xi=L.getParameter(L.UNPACK_SKIP_PIXELS),Jt=L.getParameter(L.UNPACK_SKIP_ROWS),sr=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,ft.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,ft.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Fe),L.pixelStorei(L.UNPACK_SKIP_ROWS,He),L.pixelStorei(L.UNPACK_SKIP_IMAGES,De);const vt=b.isDataArrayTexture||b.isData3DTexture,on=U.isDataArrayTexture||U.isData3DTexture;if(b.isDepthTexture){const an=se.get(b),kt=se.get(U),Xt=se.get(an.__renderTarget),qa=se.get(kt.__renderTarget);Q.bindFramebuffer(L.READ_FRAMEBUFFER,Xt.__webglFramebuffer),Q.bindFramebuffer(L.DRAW_FRAMEBUFFER,qa.__webglFramebuffer);for(let Si=0;Si<Me;Si++)vt&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,se.get(b).__webglTexture,F,De+Si),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,se.get(U).__webglTexture,ce,bt+Si)),L.blitFramebuffer(Fe,He,ye,we,et,ot,ye,we,L.DEPTH_BUFFER_BIT,L.NEAREST);Q.bindFramebuffer(L.READ_FRAMEBUFFER,null),Q.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(F!==0||b.isRenderTargetTexture||se.has(b)){const an=se.get(b),kt=se.get(U);Q.bindFramebuffer(L.READ_FRAMEBUFFER,Y_),Q.bindFramebuffer(L.DRAW_FRAMEBUFFER,$_);for(let Xt=0;Xt<Me;Xt++)vt?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,an.__webglTexture,F,De+Xt):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,an.__webglTexture,F),on?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,kt.__webglTexture,ce,bt+Xt):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,kt.__webglTexture,ce),F!==0?L.blitFramebuffer(Fe,He,ye,we,et,ot,ye,we,L.COLOR_BUFFER_BIT,L.NEAREST):on?L.copyTexSubImage3D(_t,ce,et,ot,bt+Xt,Fe,He,ye,we):L.copyTexSubImage2D(_t,ce,et,ot,Fe,He,ye,we);Q.bindFramebuffer(L.READ_FRAMEBUFFER,null),Q.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else on?b.isDataTexture||b.isData3DTexture?L.texSubImage3D(_t,ce,et,ot,bt,ye,we,Me,lt,Ne,ft.data):U.isCompressedArrayTexture?L.compressedTexSubImage3D(_t,ce,et,ot,bt,ye,we,Me,lt,ft.data):L.texSubImage3D(_t,ce,et,ot,bt,ye,we,Me,lt,Ne,ft):b.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,ce,et,ot,ye,we,lt,Ne,ft.data):b.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,ce,et,ot,ft.width,ft.height,lt,ft.data):L.texSubImage2D(L.TEXTURE_2D,ce,et,ot,ye,we,lt,Ne,ft);L.pixelStorei(L.UNPACK_ROW_LENGTH,nt),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Kt),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Xi),L.pixelStorei(L.UNPACK_SKIP_ROWS,Jt),L.pixelStorei(L.UNPACK_SKIP_IMAGES,sr),ce===0&&U.generateMipmaps&&L.generateMipmap(_t),Q.unbindTexture()},this.copyTextureToTexture3D=function(b,U,W=null,X=null,F=0){return _s('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(b,U,W,X,F)},this.initRenderTarget=function(b){se.get(b).__webglFramebuffer===void 0&&pe.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?pe.setTextureCube(b,0):b.isData3DTexture?pe.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?pe.setTexture2DArray(b,0):pe.setTexture2D(b,0),Q.unbindTexture()},this.resetState=function(){I=0,P=0,D=null,Q.reset(),xe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Rn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=tt._getDrawingBufferColorSpace(e),t.unpackColorSpace=tt._getUnpackColorSpace()}};c(fp,"WebGLRenderer");let Au=fp;var ui=Object.freeze({Linear:Object.freeze({None:c(function(s){return s},"None"),In:c(function(s){return s},"In"),Out:c(function(s){return s},"Out"),InOut:c(function(s){return s},"InOut")}),Quadratic:Object.freeze({In:c(function(s){return s*s},"In"),Out:c(function(s){return s*(2-s)},"Out"),InOut:c(function(s){return(s*=2)<1?.5*s*s:-.5*(--s*(s-2)-1)},"InOut")}),Cubic:Object.freeze({In:c(function(s){return s*s*s},"In"),Out:c(function(s){return--s*s*s+1},"Out"),InOut:c(function(s){return(s*=2)<1?.5*s*s*s:.5*((s-=2)*s*s+2)},"InOut")}),Quartic:Object.freeze({In:c(function(s){return s*s*s*s},"In"),Out:c(function(s){return 1- --s*s*s*s},"Out"),InOut:c(function(s){return(s*=2)<1?.5*s*s*s*s:-.5*((s-=2)*s*s*s-2)},"InOut")}),Quintic:Object.freeze({In:c(function(s){return s*s*s*s*s},"In"),Out:c(function(s){return--s*s*s*s*s+1},"Out"),InOut:c(function(s){return(s*=2)<1?.5*s*s*s*s*s:.5*((s-=2)*s*s*s*s+2)},"InOut")}),Sinusoidal:Object.freeze({In:c(function(s){return 1-Math.sin((1-s)*Math.PI/2)},"In"),Out:c(function(s){return Math.sin(s*Math.PI/2)},"Out"),InOut:c(function(s){return .5*(1-Math.sin(Math.PI*(.5-s)))},"InOut")}),Exponential:Object.freeze({In:c(function(s){return s===0?0:Math.pow(1024,s-1)},"In"),Out:c(function(s){return s===1?1:1-Math.pow(2,-10*s)},"Out"),InOut:c(function(s){return s===0?0:s===1?1:(s*=2)<1?.5*Math.pow(1024,s-1):.5*(-Math.pow(2,-10*(s-1))+2)},"InOut")}),Circular:Object.freeze({In:c(function(s){return 1-Math.sqrt(1-s*s)},"In"),Out:c(function(s){return Math.sqrt(1- --s*s)},"Out"),InOut:c(function(s){return(s*=2)<1?-.5*(Math.sqrt(1-s*s)-1):.5*(Math.sqrt(1-(s-=2)*s)+1)},"InOut")}),Elastic:Object.freeze({In:c(function(s){return s===0?0:s===1?1:-Math.pow(2,10*(s-1))*Math.sin((s-1.1)*5*Math.PI)},"In"),Out:c(function(s){return s===0?0:s===1?1:Math.pow(2,-10*s)*Math.sin((s-.1)*5*Math.PI)+1},"Out"),InOut:c(function(s){return s===0?0:s===1?1:(s*=2,s<1?-.5*Math.pow(2,10*(s-1))*Math.sin((s-1.1)*5*Math.PI):.5*Math.pow(2,-10*(s-1))*Math.sin((s-1.1)*5*Math.PI)+1)},"InOut")}),Back:Object.freeze({In:c(function(s){var e=1.70158;return s===1?1:s*s*((e+1)*s-e)},"In"),Out:c(function(s){var e=1.70158;return s===0?0:--s*s*((e+1)*s+e)+1},"Out"),InOut:c(function(s){var e=2.5949095;return(s*=2)<1?.5*(s*s*((e+1)*s-e)):.5*((s-=2)*s*((e+1)*s+e)+2)},"InOut")}),Bounce:Object.freeze({In:c(function(s){return 1-ui.Bounce.Out(1-s)},"In"),Out:c(function(s){return s<1/2.75?7.5625*s*s:s<2/2.75?7.5625*(s-=1.5/2.75)*s+.75:s<2.5/2.75?7.5625*(s-=2.25/2.75)*s+.9375:7.5625*(s-=2.625/2.75)*s+.984375},"Out"),InOut:c(function(s){return s<.5?ui.Bounce.In(s*2)*.5:ui.Bounce.Out(s*2-1)*.5+.5},"InOut")}),generatePow:c(function(s){return s===void 0&&(s=4),s=s<Number.EPSILON?Number.EPSILON:s,s=s>1e4?1e4:s,{In:c(function(e){return Math.pow(e,s)},"In"),Out:c(function(e){return 1-Math.pow(1-e,s)},"Out"),InOut:c(function(e){return e<.5?Math.pow(e*2,s)/2:(1-Math.pow(2-e*2,s))/2+.5},"InOut")}},"generatePow")}),xr=c(function(){return performance.now()},"now"),I_=function(){function s(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this._tweens={},this._tweensAddedDuringUpdate={},this.add.apply(this,e)}return c(s,"Group"),s.prototype.getAll=function(){var e=this;return Object.keys(this._tweens).map(function(t){return e._tweens[t]})},s.prototype.removeAll=function(){this._tweens={}},s.prototype.add=function(){for(var e,t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];for(var i=0,r=t;i<r.length;i++){var o=r[i];(e=o._group)===null||e===void 0||e.remove(o),o._group=this,this._tweens[o.getId()]=o,this._tweensAddedDuringUpdate[o.getId()]=o}},s.prototype.remove=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];for(var n=0,i=e;n<i.length;n++){var r=i[n];r._group=void 0,delete this._tweens[r.getId()],delete this._tweensAddedDuringUpdate[r.getId()]}},s.prototype.allStopped=function(){return this.getAll().every(function(e){return!e.isPlaying()})},s.prototype.update=function(e,t){e===void 0&&(e=xr()),t===void 0&&(t=!0);var n=Object.keys(this._tweens);if(n.length!==0)for(;n.length>0;){this._tweensAddedDuringUpdate={};for(var i=0;i<n.length;i++){var r=this._tweens[n[i]],o=!t;r&&r.update(e,o)===!1&&!t&&this.remove(r)}n=Object.keys(this._tweensAddedDuringUpdate)}},s}(),Ru={Linear:c(function(s,e){var t=s.length-1,n=t*e,i=Math.floor(n),r=Ru.Utils.Linear;return e<0?r(s[0],s[1],n):e>1?r(s[t],s[t-1],t-n):r(s[i],s[i+1>t?t:i+1],n-i)},"Linear"),Utils:{Linear:c(function(s,e,t){return(e-s)*t+s},"Linear")}},D_=function(){function s(){}return c(s,"Sequence"),s.nextId=function(){return s._nextId++},s._nextId=0,s}(),Cu=new I_,Lc=function(){function s(e,t){this._isPaused=!1,this._pauseStart=0,this._valuesStart={},this._valuesEnd={},this._valuesStartRepeat={},this._duration=1e3,this._isDynamic=!1,this._initialRepeat=0,this._repeat=0,this._yoyo=!1,this._isPlaying=!1,this._reversed=!1,this._delayTime=0,this._startTime=0,this._easingFunction=ui.Linear.None,this._interpolationFunction=Ru.Linear,this._chainedTweens=[],this._onStartCallbackFired=!1,this._onEveryStartCallbackFired=!1,this._id=D_.nextId(),this._isChainStopped=!1,this._propertiesAreSetUp=!1,this._goToEnd=!1,this._object=e,typeof t=="object"?(this._group=t,t.add(this)):t===!0&&(this._group=Cu,Cu.add(this))}return c(s,"Tween"),s.prototype.getId=function(){return this._id},s.prototype.isPlaying=function(){return this._isPlaying},s.prototype.isPaused=function(){return this._isPaused},s.prototype.getDuration=function(){return this._duration},s.prototype.to=function(e,t){if(t===void 0&&(t=1e3),this._isPlaying)throw new Error("Can not call Tween.to() while Tween is already started or paused. Stop the Tween first.");return this._valuesEnd=e,this._propertiesAreSetUp=!1,this._duration=t<0?0:t,this},s.prototype.duration=function(e){return e===void 0&&(e=1e3),this._duration=e<0?0:e,this},s.prototype.dynamic=function(e){return e===void 0&&(e=!1),this._isDynamic=e,this},s.prototype.start=function(e,t){if(e===void 0&&(e=xr()),t===void 0&&(t=!1),this._isPlaying)return this;if(this._repeat=this._initialRepeat,this._reversed){this._reversed=!1;for(var n in this._valuesStartRepeat)this._swapEndStartRepeatValues(n),this._valuesStart[n]=this._valuesStartRepeat[n]}if(this._isPlaying=!0,this._isPaused=!1,this._onStartCallbackFired=!1,this._onEveryStartCallbackFired=!1,this._isChainStopped=!1,this._startTime=e,this._startTime+=this._delayTime,!this._propertiesAreSetUp||t){if(this._propertiesAreSetUp=!0,!this._isDynamic){var i={};for(var r in this._valuesEnd)i[r]=this._valuesEnd[r];this._valuesEnd=i}this._setupProperties(this._object,this._valuesStart,this._valuesEnd,this._valuesStartRepeat,t)}return this},s.prototype.startFromCurrentValues=function(e){return this.start(e,!0)},s.prototype._setupProperties=function(e,t,n,i,r){for(var o in n){var a=e[o],l=Array.isArray(a),u=l?"array":typeof a,h=!l&&Array.isArray(n[o]);if(!(u==="undefined"||u==="function")){if(h){var d=n[o];if(d.length===0)continue;for(var f=[a],p=0,_=d.length;p<_;p+=1){var v=this._handleRelativeValue(a,d[p]);if(isNaN(v)){h=!1,console.warn("Found invalid interpolation list. Skipping.");break}f.push(v)}h&&(n[o]=f)}if((u==="object"||l)&&a&&!h){t[o]=l?[]:{};var g=a;for(var m in g)t[o][m]=g[m];i[o]=l?[]:{};var d=n[o];if(!this._isDynamic){var A={};for(var m in d)A[m]=d[m];n[o]=d=A}this._setupProperties(g,t[o],d,i[o],r)}else(typeof t[o]>"u"||r)&&(t[o]=a),l||(t[o]*=1),h?i[o]=n[o].slice().reverse():i[o]=t[o]||0}}},s.prototype.stop=function(){return this._isChainStopped||(this._isChainStopped=!0,this.stopChainedTweens()),this._isPlaying?(this._isPlaying=!1,this._isPaused=!1,this._onStopCallback&&this._onStopCallback(this._object),this):this},s.prototype.end=function(){return this._goToEnd=!0,this.update(this._startTime+this._duration),this},s.prototype.pause=function(e){return e===void 0&&(e=xr()),this._isPaused||!this._isPlaying?this:(this._isPaused=!0,this._pauseStart=e,this)},s.prototype.resume=function(e){return e===void 0&&(e=xr()),!this._isPaused||!this._isPlaying?this:(this._isPaused=!1,this._startTime+=e-this._pauseStart,this._pauseStart=0,this)},s.prototype.stopChainedTweens=function(){for(var e=0,t=this._chainedTweens.length;e<t;e++)this._chainedTweens[e].stop();return this},s.prototype.group=function(e){return e?(e.add(this),this):(console.warn("tween.group() without args has been removed, use group.add(tween) instead."),this)},s.prototype.remove=function(){var e;return(e=this._group)===null||e===void 0||e.remove(this),this},s.prototype.delay=function(e){return e===void 0&&(e=0),this._delayTime=e,this},s.prototype.repeat=function(e){return e===void 0&&(e=0),this._initialRepeat=e,this._repeat=e,this},s.prototype.repeatDelay=function(e){return this._repeatDelayTime=e,this},s.prototype.yoyo=function(e){return e===void 0&&(e=!1),this._yoyo=e,this},s.prototype.easing=function(e){return e===void 0&&(e=ui.Linear.None),this._easingFunction=e,this},s.prototype.interpolation=function(e){return e===void 0&&(e=Ru.Linear),this._interpolationFunction=e,this},s.prototype.chain=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return this._chainedTweens=e,this},s.prototype.onStart=function(e){return this._onStartCallback=e,this},s.prototype.onEveryStart=function(e){return this._onEveryStartCallback=e,this},s.prototype.onUpdate=function(e){return this._onUpdateCallback=e,this},s.prototype.onRepeat=function(e){return this._onRepeatCallback=e,this},s.prototype.onComplete=function(e){return this._onCompleteCallback=e,this},s.prototype.onStop=function(e){return this._onStopCallback=e,this},s.prototype.update=function(e,t){var n=this,i;if(e===void 0&&(e=xr()),t===void 0&&(t=s.autoStartOnUpdate),this._isPaused)return!0;var r;if(!this._goToEnd&&!this._isPlaying)if(t)this.start(e,!0);else return!1;if(this._goToEnd=!1,e<this._startTime)return!0;this._onStartCallbackFired===!1&&(this._onStartCallback&&this._onStartCallback(this._object),this._onStartCallbackFired=!0),this._onEveryStartCallbackFired===!1&&(this._onEveryStartCallback&&this._onEveryStartCallback(this._object),this._onEveryStartCallbackFired=!0);var o=e-this._startTime,a=this._duration+((i=this._repeatDelayTime)!==null&&i!==void 0?i:this._delayTime),l=this._duration+this._repeat*a,u=c(function(){if(n._duration===0||o>l)return 1;var v=Math.trunc(o/a),g=o-v*a,m=Math.min(g/n._duration,1);return m===0&&o===n._duration?1:m},"calculateElapsedPortion"),h=u(),d=this._easingFunction(h);if(this._updateProperties(this._object,this._valuesStart,this._valuesEnd,d),this._onUpdateCallback&&this._onUpdateCallback(this._object,h),this._duration===0||o>=this._duration)if(this._repeat>0){var f=Math.min(Math.trunc((o-this._duration)/a)+1,this._repeat);isFinite(this._repeat)&&(this._repeat-=f);for(r in this._valuesStartRepeat)!this._yoyo&&typeof this._valuesEnd[r]=="string"&&(this._valuesStartRepeat[r]=this._valuesStartRepeat[r]+parseFloat(this._valuesEnd[r])),this._yoyo&&this._swapEndStartRepeatValues(r),this._valuesStart[r]=this._valuesStartRepeat[r];return this._yoyo&&(this._reversed=!this._reversed),this._startTime+=a*f,this._onRepeatCallback&&this._onRepeatCallback(this._object),this._onEveryStartCallbackFired=!1,!0}else{this._onCompleteCallback&&this._onCompleteCallback(this._object);for(var p=0,_=this._chainedTweens.length;p<_;p++)this._chainedTweens[p].start(this._startTime+this._duration,!1);return this._isPlaying=!1,!1}return!0},s.prototype._updateProperties=function(e,t,n,i){for(var r in n)if(t[r]!==void 0){var o=t[r]||0,a=n[r],l=Array.isArray(e[r]),u=Array.isArray(a),h=!l&&u;h?e[r]=this._interpolationFunction(a,i):typeof a=="object"&&a?this._updateProperties(e[r],o,a,i):(a=this._handleRelativeValue(o,a),typeof a=="number"&&(e[r]=o+(a-o)*i))}},s.prototype._handleRelativeValue=function(e,t){return typeof t!="string"?t:t.charAt(0)==="+"||t.charAt(0)==="-"?e+parseFloat(t):parseFloat(t)},s.prototype._swapEndStartRepeatValues=function(e){var t=this._valuesStartRepeat[e],n=this._valuesEnd[e];typeof n=="string"?this._valuesStartRepeat[e]=this._valuesStartRepeat[e]+parseFloat(n):this._valuesStartRepeat[e]=this._valuesEnd[e],this._valuesEnd[e]=t},s.autoStartOnUpdate=!1,s}();D_.nextId;var In=Cu;In.getAll.bind(In);In.removeAll.bind(In);In.add.bind(In);In.remove.bind(In);In.update.bind(In);const pp=class pp{constructor(){this.tweenGroup=new I_}update(){this.tweenGroup.update()}animateObjectToTarget(e,t,n,i={duration:1e3}){const r=[];if(t){const o=new Lc(e.position).to(t);r.push(o)}if(n){const o=new Lc(e.quaternion).to(n);r.push(o)}r.forEach(o=>{i?.duration&&o.duration(i?.duration),i?.easing&&o.easing(i?.easing),o.start()}),this.tweenGroup.add(...r)}createTween(e,t,n){const i=new Lc(e).to(t);return n?.duration&&i.duration(n.duration),n?.easing&&i.easing(n.easing),this.tweenGroup.add(i),i}removeTween(e){this.tweenGroup.remove(e)}};c(pp,"ThreeAnimator");let Pu=pp;var xa=c(function(s,e,t,n){var i=this;this.object=s,this.trackballRadius=e,this.camera=t,this.domElement=n!==void 0?n:document,this.enabled=!0,this.rotateSensitivity=1,this.relativelySpinOffTrackball=!0,this.enableDamping=!0,this.dampingFactor=5,this.spinAxisConstraint,this.POINTER_SPHERE_MAPPING={SHOEMAKE:"shoemake",HOLROYD:"holroyd",AZIMUTHAL:"azimuthal",RAYCAST:"raycast"},this.offTrackBallVelocityGainMap={shoemake:20,holroyd:8,azimuthal:8,raycast:20},this._pointerMapping=this.POINTER_SPHERE_MAPPING.RAYCAST,this._offTrackBallVelocityGain=this.offTrackBallVelocityGainMap[this._pointerMapping],this._pointerUpVelDamping=2e3,this.screen={left:0,top:0,width:0,height:0};var r=new R(0,0,0),o=new wt,a,l=new R,u=new le,h=new R,d=0,f=!1,p=!1,_=1e-6,v={type:"change"},g={type:"start"},m={type:"end"};this.update=function(){var S,B=performance.now()/1e3,N;return c(function(){S=performance.now()/1e3,N=S-B,B=S,i.enableDamping&&(r.multiplyScalar(1/(N*i.dampingFactor+1)),i.applyVelocity()),i.enableDamping||(a=performance.now()),i.hasPointerMovedThisFrame=!1},"update")}(),this.updateAngularVelocity=function(){var S=new wt,B=new wt,N=new wt;return c(function(j,V,K){N.set(V.x,V.y,V.z,0),N.normalize(),N.conjugate(),B.set(j.x,j.y,j.z,0).multiply(N),K*=2,S.set(V.x,V.y,V.z,1);var G=B.angleTo(S)/K;r.crossVectors(V,j),r.setLength(G),i.applyVelocity()},"updateAngularVelocity")}(),this.applyVelocity=function(){var S=new wt,B=new R,N,H,j;return c(function(){j=performance.now(),H=(j-a)/1e3,a=j,i.spinAxisConstraint?(B.copy(i.spinAxisConstraint),N=B.dot(r)):(B.copy(r),N=r.length()),N&&H&&(B.normalize(),S.setFromAxisAngle(B,N*H*i.rotateSensitivity),i.object.quaternion.normalize(),i.object.quaternion.premultiply(S),8*(1-o.dot(i.object.quaternion))>_&&(i.dispatchEvent(v),o.copy(i.object.quaternion)))},"applyVelocity")}(),this.onWindowResize=function(){if(i.domElement===document)i.screen.left=0,i.screen.top=0,i.screen.width=window.innerWidth,i.screen.height=window.innerHeight;else{var S=i.domElement.getBoundingClientRect(),B=i.domElement.ownerDocument.documentElement;i.screen.left=S.left+window.pageXOffset-B.clientLeft,i.screen.top=S.top+window.pageYOffset-B.clientTop,i.screen.width=S.width,i.screen.height=S.height}},this.resetInputAfterCameraMovement=function(){p&&(i.camera.updateWorldMatrix(!0,!1),i.camera.matrixWorldInverse.copy(i.camera.matrixWorld).invert(),l.copy(y(A(u.x,u.y))))};var A=function(){var S=new le;return c(function(N,H){return S.set((N-i.screen.width*.5-i.screen.left)/(i.screen.width*.5),(i.screen.height+2*(i.screen.top-H))/i.screen.height),S},"getPointerInNdc")}();this.getPointerInNdc=A;var E=function(){var S=new R,B=new R,N=new R,H=new le,j=new wt;return c(function(K){i.object.updateWorldMatrix(!0,!1),S.setFromMatrixPosition(i.object.matrixWorld),i.camera.updateWorldMatrix(!0,!1),i.camera.matrixWorldInverse.copy(i.camera.matrixWorld).invert(),S.project(i.camera),H.set(S.x,S.y),H.subVectors(K,H),B.setFromMatrixPosition(i.object.matrixWorld),N.set(i.trackballRadius,0,0),N.applyQuaternion(j.setFromRotationMatrix(i.camera.matrixWorld)),B.add(N),B.project(i.camera),B.z=0,S.z=0;var G=B.distanceTo(S);return H.x/=G,H.y/=G,i.camera.aspect&&(H.y/=i.camera.aspect),H},"getObjectToPointer")}(),y=function(){var S=new R,B=new R,N=new le,H=new wt,j=new nn,V=new hi;return c(function(G){if(N.copy(E(G)),H.setFromRotationMatrix(i.camera.matrixWorld),i._pointerMapping===i.POINTER_SPHERE_MAPPING.RAYCAST)N.lengthSq()<1?(B.setFromMatrixPosition(i.object.matrixWorld),j.set(B,i.trackballRadius),V.origin.copy(i.camera.position),V.direction.set(G.x,G.y,.5),V.direction.unproject(i.camera),V.direction.sub(i.camera.position).normalize(),V.intersectSphere(j,S),S.sub(B),S.normalize()):(N.normalize(),S.set(N.x,N.y,0),S.applyQuaternion(H));else if(i._pointerMapping===i.POINTER_SPHERE_MAPPING.HOLROYD){var re=N.lengthSq();re<.5?S.set(N.x,N.y,Math.sqrt(1-re)):(S.set(N.x,N.y,1/(2*Math.sqrt(re))),S.normalize()),S.applyQuaternion(H)}else if(i._pointerMapping===i.POINTER_SPHERE_MAPPING.SHOEMAKE){var re=N.lengthSq();re<1?S.set(N.x,N.y,Math.sqrt(1-re)):(N.normalize(),S.set(N.x,N.y,0)),S.applyQuaternion(H)}else if(i._pointerMapping===i.POINTER_SPHERE_MAPPING.AZIMUTHAL){var re=Math.PI/2*N.length(),_e=re<Number.EPSILON?1:Math.sin(re)/re;N.multiplyScalar(Math.PI/2*_e),S.set(N.x,N.y,Math.cos(re)),S.applyQuaternion(H)}return S},"getPointerInSphere")}();this.onPointerDown=function(S,B,N){var H=A(S,B),j=E(H);j.lengthSq()<1?(f=!0,l.copy(y(H))):f=!1,u.set(S,B),d=N,p=!0},this.onPointerMove=function(){var S=new R,B=new le,N=new le,H=new le,j=new R,V=new R,K=new R,G=new R;return c(function(_e,Se,Ue){var Je=(Ue-d)/1e3;if(d=Ue,h.copy(l),S.copy(A(_e,Se)),B.copy(E(S)),B.lengthSq()<1||!this.relativelySpinOffTrackball)l.copy(y(S)),f?Je>0&&i.updateAngularVelocity(l,h,Je):a=Ue,f=!0;else{if(f)a=Ue;else if(Je>0){H.copy(A(u.x,u.y)),N.subVectors(S,H),j.setFromMatrixPosition(i.object.matrixWorld),i.camera.isPerspectiveCamera?V.copy(i.camera.position).sub(j):(i.camera.getWorldDirection(V),V.negate()),l.copy(y(S)),r.crossVectors(V,l);var Qe;i.camera.isPerspectiveCamera?Qe=2/i.camera.fov/Math.atan(i.trackballRadius/V.length()):Qe=i.trackballRadius/((i.camera.top-i.camera.bottom)/i.camera.zoom*2),B.normalize();var $=N.dot(B)*Qe/Je;r.setLength($*i._offTrackBallVelocityGain),G.copy(y(H));var ge=G.angleTo(l)/Je;K.crossVectors(G,l),K.setLength(ge),r.add(K),i.applyVelocity()}f=!1}u.set(_e,Se),i.hasPointerMovedThisFrame=!0},"onPointerMove")}(),this.setPointerToSphereMapping=function(S){i._pointerMapping=S,i._offTrackBallVelocityGain=i.offTrackBallVelocityGainMap[i._pointerMapping]},this.handlePointerDown=function(S){S.preventDefault(),i.domElement.focus?i.domElement.focus():window.focus(),i.dispatchEvent(g)},this.handlePointerUp=function(S){if(S.preventDefault(),!i.hasPointerMovedThisFrame){var B=(S.timeStamp-d)/1e3;r.multiplyScalar(1/(i._pointerUpVelDamping*Math.pow(B,2)+i.dampingFactor*B+1))}p=!1,i.dispatchEvent(m)};function C(S){i.enabled===!1||S.button!==0||(i.onPointerDown(S.pageX,S.pageY,S.timeStamp),document.addEventListener("mousemove",I,!1),document.addEventListener("mouseup",P,!1),i.handlePointerDown(S))}c(C,"onMouseDown");function I(S){i.enabled!==!1&&(S.preventDefault(),i.onPointerMove(S.pageX,S.pageY,S.timeStamp))}c(I,"onMouseMove");function P(S){i.enabled!==!1&&(document.removeEventListener("mousemove",I),document.removeEventListener("mouseup",P),i.handlePointerUp(S))}c(P,"onMouseUp"),this.cancelSpin=function(){r.set(0,0,0)},this.handleTouchStart=function(S){i.onPointerDown(S.pageX,S.pageY,S.timeStamp),i.applyVelocity()};function D(S){i.enabled!==!1&&(i.handleTouchStart(S),i.handlePointerDown(S))}c(D,"onTouchStart");function w(S){i.enabled===!1||!p||(S.preventDefault(),S.stopImmediatePropagation(),i.onPointerMove(S.touches[0].pageX,S.touches[0].pageY,S.timeStamp))}c(w,"onTouchMove");function M(S){i.enabled!==!1&&(i.handlePointerUp(S),S.touches.length>0&&(p=!0))}c(M,"onTouchEnd"),this.dispose=function(){i.domElement.removeEventListener("mousedown",C),document.removeEventListener("mousemove",I),document.removeEventListener("mouseup",P),i.domElement.removeEventListener("touchstart",D),i.domElement.removeEventListener("touchmove",w),i.domElement.removeEventListener("touchend",M)},i.domElement.addEventListener("mousedown",C),i.domElement.addEventListener("touchstart",D,{passive:!1}),i.domElement.addEventListener("touchmove",w,{passive:!1}),i.domElement.addEventListener("touchend",M,{passive:!1}),i.onWindowResize(),i.update()},"SpinControls");xa.prototype=Object.create($n.prototype);xa.prototype.constructor=xa;const mp=class mp{constructor(e){this.defaultSpinControlsState={autoRotateAxis:new R(0,1,0),trackballRadius:100,spinAxisConstraint:void 0},this.autoRotateAxis=new R(0,1,0),this.autoRotateQuaternion=new wt,this.autoRotateEnabled=!0;const t=e.getRenderer().domElement;this.camera=this.buildPerspectiveCamera(t),this.spinControls=this.buildSpinControls(t),this.defaultCameraState=this.camera.clone()}buildPerspectiveCamera(e){const t=e.parentElement,n=c(()=>t.offsetWidth/t.offsetHeight,"aspectRatio"),i=new Dt(36,n(),1,3e3);return i.position.set(0,0,400),window.addEventListener("resize",()=>{i.aspect=n(),i.updateProjectionMatrix();const r=this.defaultCameraState;r.aspect=n(),r.updateProjectionMatrix()}),i}buildSpinControls(e){const t=new yt,n=new xa(t,0,this.getCamera(),e);return n.rotateSensitivity=.4,n.dampingFactor=10,n.relativelySpinOffTrackball=!0,window.addEventListener("resize",()=>n.onWindowResize()),n.addEventListener("start",()=>{this.autoRotateEnabled=!1}),n.addEventListener("end",()=>{this.autoRotateEnabled=!0}),n}setSpinControlsObject(e,t,n){this.spinControls.object=e,this.spinControls.trackballRadius=t,this.spinControls.spinAxisConstraint=n,this.defaultSpinControlsState.trackballRadius=t,this.defaultSpinControlsState.spinAxisConstraint=n}setRotationAxis(e){this.autoRotateAxis.copy(e),this.spinControls.spinAxisConstraint=e}resetSpinControls(){const{autoRotateAxis:e,trackballRadius:t,spinAxisConstraint:n}=this.defaultSpinControlsState;this.autoRotateAxis.copy(e),this.spinControls.trackballRadius=t,this.spinControls.spinAxisConstraint=n}autoRotate(e){this.autoRotateQuaternion.setFromAxisAngle(this.autoRotateAxis,e*-.1),this.spinControls.object.quaternion.premultiply(this.autoRotateQuaternion)}update(e){this.spinControls.update(),this.autoRotateEnabled&&this.autoRotate(e)}getCamera(){return this.camera}getSpinControls(){return this.spinControls}getDefaultCameraState(){return this.defaultCameraState}};c(mp,"ThreeControls");let Lu=mp;const Vg=c((s,e)=>new R().subVectors(e,s).normalize(),"getDirectionBetweenVectors"),SE=c(s=>{const e=new R;return s.getWorldDirection(e),e},"getObjectDirection"),Iu=c(s=>{const e=new R;return new fn().setFromObject(s).getCenter(e),e},"getObjectCenter"),ME=c((s,e,t)=>{const n=new R().copy(s);return n.project(e),new le((n.x+1)/2*t.clientWidth,-(n.y-1)/2*t.clientHeight)},"getObjectPositionOnScreen"),gp=class gp{constructor(){this.onObjectMoveListeners=new Map,this.previousObjectPositions=new Map,this.defaultObjectPosition=new R(0,0,0)}update(){for(const[e,t]of this.onObjectMoveListeners){const n=this.getObjectPosition(e);t.forEach(i=>{this.hasObjectPositionChanged(e,n)&&i(e)}),this.previousObjectPositions.set(e,n.clone())}}onObjectMove(e,t){this.onObjectMoveListeners.has(e)||this.onObjectMoveListeners.set(e,new Set),this.onObjectMoveListeners.get(e)?.add(t),this.previousObjectPositions.set(e,this.getObjectPosition(e))}removeObjectMoveListener(e,t){this.onObjectMoveListeners.get(e)?.delete(t),this.onObjectMoveListeners.get(e)?.size===0&&(this.onObjectMoveListeners.delete(e),this.previousObjectPositions.delete(e))}hasObjectPositionChanged(e,t){const n=this.previousObjectPositions.get(e);return n?!t.equals(n):!1}getObjectPosition(e){return e.position.equals(this.defaultObjectPosition)?Iu(e):e.position}};c(gp,"ThreeEventHandler");let Du=gp;const _p=class _p{constructor(e){this.renderer=this.buildRenderer(e)}buildRenderer(e){const t=e.parentElement,n=new Au({canvas:e,antialias:!0,alpha:!0});n.outputColorSpace=Lt,n.setPixelRatio(window.devicePixelRatio);const i=c(()=>n.setSize(this.rendererWidth(t),this.rendererHeight(t),!1),"updateWebGlRendererSize");return i(),window.addEventListener("resize",i),n}rendererWidth(e){return e.offsetWidth>0?e.offsetWidth:window.innerWidth}rendererHeight(e){return e.offsetHeight>0?e.offsetHeight:window.innerWidth}getRenderer(){return this.renderer}getCanvas(){return this.renderer.domElement}};c(_p,"ThreeRenderer");let Ou=_p;const Bt=c(s=>new ze(s),"color"),Wt={ambientLight:Bt("#ffffff"),star:Bt("#ffffff"),sun:Bt("#fcd900"),earth:Bt("#4d96ff"),mountain:Bt("#9ede73"),cloud:Bt("#ffffff"),tree:{trunk:Bt("#be8c63"),crown:Bt("#9ede73")},house:{roof:Bt("#b20600"),base:Bt("#f1eee9")},land:{brown:Bt("#ffcc8f"),green:Bt("#83bd75")},building:{floor:Bt("#f1eee9"),split:Bt("#73777b")},hut:{roof:Bt("#a64b2a"),pillar:Bt("#d7a86e")}},vp=class vp{constructor(){this.scene=new Pl,this.setupLights()}setupLights(){const e=new du(Wt.ambientLight,3),t=new mt;t.name="lights",t.add(e),this.scene.add(t)}getScene(){return this.scene}};c(vp,"ThreeScene");let Nu=vp;const xp=class xp{constructor(e,t){this.controls=t,this.rayCasterPoint=new le(0,0),this.objectsToIgnore=new Set,this.intersectableMouseMoveObjects=new Set,this.intersectableClickObjects=new Set,this.mouseOverListenersMap=new Map,this.mouseOutListenersMap=new Map,this.clickableListenersMap=new Map,this.rayCaster=new _u,this.rendererElement=e.getRenderer().domElement,this.setupMouseMoveListeners(),this.setupMouseClickListener()}update(){this.onAnimationFrame?.()}setupMouseMoveListeners(){let e;const t=new Set,n=c(r=>{e=r},"updatePointerPosition"),i=c(r=>{if(!e||!this.hasMouseMoveListeners())return;const o=this.getIntersectedObject(r,this.intersectableMouseMoveObjects);for(const a of t)o!==a&&(t.delete(a),this.mouseOutListenersMap.get(a)?.());o&&!t.has(o)&&(t.add(o),this.mouseOverListenersMap.get(o)?.()),e=r},"mouseMoveEventHandler");this.onAnimationFrame=()=>i(e),this.rendererElement.addEventListener("mousemove",n),this.rendererElement.addEventListener("touchmove",r=>{n(r.changedTouches[0])})}setupMouseClickListener(){let e=0,t=0;const n=c(r=>{e=r.clientX,t=r.clientY},"mouseDownEventHandler"),i=c(r=>{const o=Math.abs(r.clientX-e),a=Math.abs(r.clientY-t);if(o!==0&&a!==0||!this.hasClickListeners())return;const l=this.getIntersectedObject(r,this.intersectableClickObjects);l&&this.clickableListenersMap.get(l)?.()},"mouseUpEventHandler");this.rendererElement.addEventListener("mousedown",n),this.rendererElement.addEventListener("mouseup",i),this.rendererElement.addEventListener("touchstart",r=>{n(r.changedTouches[0])}),this.rendererElement.addEventListener("touchend",r=>{i(r.changedTouches[0])})}getIntersectedObject(e,t){this.rayCasterPoint.setX(e.clientX/this.rendererElement.clientWidth*2-1),this.rayCasterPoint.setY(-(e.clientY/this.rendererElement.clientHeight)*2+1),this.rayCaster.setFromCamera(this.rayCasterPoint,this.controls.getCamera());const n=this.rayCaster.intersectObjects([...t]);if(n.length!==0)return this.findIntersectedObject(n[0].object,t)}onMouseOver(e,t){this.mouseOverListenersMap.set(e,t),this.intersectableMouseMoveObjects.add(e)}onMouseOut(e,t){this.mouseOutListenersMap.set(e,t),this.intersectableMouseMoveObjects.add(e)}onClick(e,t){this.clickableListenersMap.set(e,t),this.intersectableClickObjects.add(e)}intersectButIgnoreObject(e){this.objectsToIgnore.add(e),this.intersectableClickObjects.add(e),this.intersectableMouseMoveObjects.add(e)}findIntersectedObject(e,t){if(!this.objectsToIgnore.has(e))return t.has(e)?e:e.parent?this.findIntersectedObject(e.parent,t):void 0}hasMouseMoveListeners(){return this.mouseOverListenersMap.size>0||this.mouseOutListenersMap.size>0}hasClickListeners(){return this.clickableListenersMap.size>0}};c(xp,"ThreeSelector");let Uu=xp;const yp=class yp{constructor(e){this.threeScene=new Nu,this.threeRenderer=new Ou(e.canvasElement),this.threeControls=new Lu(this.threeRenderer),this.threeSelector=new Uu(this.threeRenderer,this.threeControls),this.threeEventHandler=new Du,this.threeAnimator=new Pu,this.animate()}animate(){const e=this.threeScene.getScene(),t=this.threeControls.getCamera(),n=this.threeRenderer.getRenderer(),i=new mu;n.setAnimationLoop(()=>{const r=i.getDelta();this.threeControls.update(r),this.threeSelector.update(),this.threeEventHandler.update(),this.threeAnimator.update(),n.render(e,t)})}getScene(){return this.threeScene.getScene()}getControls(){return this.threeControls}getSelector(){return this.threeSelector}getRenderer(){return this.threeRenderer}getEventHandler(){return this.threeEventHandler}getAnimator(){return this.threeAnimator}};c(yp,"Three");let Fu=yp;const EE=c((s,e,t)=>{const n=dn.degToRad(-e+90),i=dn.degToRad(t),r=new R;return r.setFromSphericalCoords(s,n,i),r},"getPositionFromLatLng"),wE=c((s,e)=>{const{x:t,y:n,z:i}=s,r=-dn.radToDeg(Math.acos(n/e))+90,o=dn.radToDeg(Math.atan(t/i));return{lat:r,lng:o}},"getLatLngFromPosition"),bp=class bp{constructor(...[e]){this.properties=e,this.object=this.constructObject(),this.properties?.name&&(this.object.name=this.properties.name),this.properties?.scale&&this.object.scale.setScalar(this.properties.scale)}getObject(){return this.object}addTo(e){e.add(this.object)}applyLatLng(e,t,n){const i=EE(e,t,n);this.object.position.copy(i),this.object.lookAt(0,0,0),this.object.rotateX(dn.degToRad(-90))}getPosition(){const e=new R(0,0,0),t=this.object.position.distanceTo(e),{lat:n,lng:i}=wE(this.object.position,t);return{coordinates:this.object.position,lat:n,lng:i,altitude:t}}};c(bp,"BaseObject");let rn=bp;const Sp=class Sp extends rn{constructObject(){const{size:e,color:t=Wt.earth}=this.properties,n=new fa(e,e/2,e/3),i=new Yt({color:t}),r=new ut(n,i);return r.name="globe",r}getRadius(){return this.properties.size}};c(Sp,"Globe");let Bu=Sp;const Mp=class Mp extends rn{constructObject(){const e=new mt,t=new mt,n=this.properties.radius??120;return t.add(this.constructLight()),t.position.setScalar(n),e.add(t),e.name="sun",e}constructLight(){return new ga(Wt.sun,2.5)}setPosition(e){this.object.position.copy(e)}};c(Mp,"Sun");let ku=Mp;const Ci=c((s,e)=>Math.floor(Math.random()*(e-s+1)+s),"generateRandomInRange"),Ep=class Ep extends rn{constructObject(){const{size:e=10}=this.properties??{},t=new mt,n=e*.75,i=e*.25,r=this.createCloudSphere(e),o=this.createCloudSphere(n),a=this.createCloudSphere(n);return o.position.set(-n,-i,0),a.position.set(n,-i,0),t.add(r,o,a),t.name="cloud",t}createCloudSphere(e){const t=Math.max(8,e),n=new fa(e,t,t),i=new Yt({color:Wt.cloud});return new ut(n,i)}};c(Ep,"Cloud");let Hu=Ep;const wp=class wp extends rn{constructObject(){const{cloudsCount:e}=this.properties,t=new mt;for(let n=0;n<e;n++)t.add(this.generateRandomCloud().getObject());return t.name="clouds",t}animateClouds(e){const t=this.object,n=1e3,i=Ci(0,100)*.001,r=Ci(0,100)*.001,o=Ci(0,100)*.001,a=c(l=>{const{x:u,y:h,z:d}=l.rotation,f={x:u+i,y:h+r,z:d+o},p=e.createTween(l.rotation,f,{duration:n});p.start(),p.onComplete(()=>{e.removeTween(p),a(l)})},"animateClouds");a(t)}generateRandomCloud(){const{baseCloudSize:e,orbitRadius:t}=this.properties,n=Ci(e-5,e+5),i=Ci(t,t+20),r=Ci(-90,90),o=Ci(-180,180),a=new Hu({size:n});return a.applyLatLng(i,r,o),a}};c(wp,"Clouds");let zu=wp;const Tp=class Tp extends rn{constructObject(){const e=new mt,{floors:t=3,size:n=10}=this.properties??{};for(let i=0;i<t;i++){const r=this.constructFloor(i,n),o=this.constructSplit(i,n);e.add(r,o)}return e.name="building",e}constructFloor(e,t){const n=new Pn(t,t,t),i=new Yt({color:this.properties?.floorColor??Wt.building.floor}),r=new ut(n,i),o=t/2,a=this.getSplitHeight(t);return n.translate(0,o+e*(t+a),0),r}constructSplit(e,t){const n=this.getSplitHeight(t),i=new Pn(t*.8,n,t*.8),r=new Yt({color:this.properties?.splitColor??Wt.building.split}),o=new ut(i,r),a=n/2;return i.translate(0,(e+1)*(t+n)-a,0),o}getSplitHeight(e){return e*.1}};c(Tp,"Building");let Vu=Tp;const Ap=class Ap extends rn{constructObject(){const e=new mt,t=this.constructRoof(this.properties?.size),n=this.constructBase(this.properties?.size);return e.add(t,n),e.name="house",e}constructBase(e=10){const t=new Pn(e*.7,e/2,e),n=new Yt({color:Wt.house.base}),i=new ut(t,n);return t.translate(0,e/2/2,0),i}constructRoof(e=10){const[t,n]=[e,e/3],i=e/2,r=this.constructRoofGeometry(t,n),o=new Yt({color:Wt.house.roof,side:xn}),a=new ut(r,o);return r.translate(0,i+n/2,0),a}constructRoofGeometry(e,t){const n=[[0,0],[e/2,t],[e,0]].map(o=>new le(...o)),i=new ha(n),r=new $l(i,{depth:e});return r.translate(-e/2,-t/2,-e/2),r}};c(Ap,"House");let Gu=Ap;const Rp=class Rp extends rn{constructObject(){const e=new mt,t=this.constructRoof(this.properties?.size),n=this.constructPillars(this.properties?.size);return e.add(t,n),e.name="hut",e}constructRoof(e=5){const t=e/1.25,n=new Wr(e*1.2,t,6),i=new Yt({color:Wt.hut.roof}),r=new ut(n,i),o=e/1.1;return n.translate(0,o+t/2,0),r}constructPillars(e=5){const t=[{x:2.5,z:2.5},{x:-2.5,z:2.5},{x:2.5,z:-2.5},{x:-2.5,z:-2.5}],n=new mt;n.name="pillars";for(const i of t)n.add(this.constructPillar(i,e));return n}constructPillar(e,t){const[n,i,r]=[t/5,t/1.1,t/5],o=new Pn(n,i,r),a=new Yt({color:Wt.hut.pillar}),l=new ut(o,a);return o.translate(e.x,i/2,e.z),l}};c(Rp,"Hut");let Wu=Rp;const Cp=class Cp extends rn{constructObject(){const{size:e=10,height:t=1,sides:n=6,color:i=Wt.land.green}=this.properties??{},r=new ra(e,e,t,n,1),o=new Yt({color:i}),a=new ut(r,o);return a.name="land",a}};c(Cp,"Land");let Xu=Cp;const Pp=class Pp extends rn{constructObject(){const{size:e,color:t=Wt.mountain,height:n=e}=this.properties,i=new Wr(e,n,4),r=new Yt({color:t}),o=new ut(i,r);return o.name="mountain",i.translate(0,n/2,0),o}};c(Pp,"Mountain");let ju=Pp;const Lp=class Lp extends rn{constructObject(){const e=new mt,t=this.constructTrunk(),n=this.constructCrown();return e.add(t,n),e.name="tree",e}constructTrunk(e=3){const t=new Pn(1,e,1),n=new Yt({color:Wt.tree.trunk}),i=new ut(t,n);return t.translate(0,e/2,0),i}constructCrown(e=3){const n=new Wr(3,7,3),i=new Yt({color:Wt.tree.crown}),r=new ut(n,i);return n.translate(0,e+7/2,0),r}};c(Lp,"Tree");let qu=Lp;var Ie=(s=>(s[s.LevelOne=2.25]="LevelOne",s[s.LevelTwo=4.5]="LevelTwo",s))(Ie||{});function TE(s){if(!(typeof window>"u")){var e=document.createElement("style");return e.setAttribute("type","text/css"),e.innerHTML=s,document.head.appendChild(e),s}}c(TE,"___$insertStyle");function ds(s,e){var t=s.__state.conversionName.toString(),n=Math.round(s.r),i=Math.round(s.g),r=Math.round(s.b),o=s.a,a=Math.round(s.h),l=s.s.toFixed(1),u=s.v.toFixed(1);if(e||t==="THREE_CHAR_HEX"||t==="SIX_CHAR_HEX"){for(var h=s.hex.toString(16);h.length<6;)h="0"+h;return"#"+h}else{if(t==="CSS_RGB")return"rgb("+n+","+i+","+r+")";if(t==="CSS_RGBA")return"rgba("+n+","+i+","+r+","+o+")";if(t==="HEX")return"0x"+s.hex.toString(16);if(t==="RGB_ARRAY")return"["+n+","+i+","+r+"]";if(t==="RGBA_ARRAY")return"["+n+","+i+","+r+","+o+"]";if(t==="RGB_OBJ")return"{r:"+n+",g:"+i+",b:"+r+"}";if(t==="RGBA_OBJ")return"{r:"+n+",g:"+i+",b:"+r+",a:"+o+"}";if(t==="HSV_OBJ")return"{h:"+a+",s:"+l+",v:"+u+"}";if(t==="HSVA_OBJ")return"{h:"+a+",s:"+l+",v:"+u+",a:"+o+"}"}return"unknown format"}c(ds,"colorToString");var Gg=Array.prototype.forEach,fr=Array.prototype.slice,Z={BREAK:{},extend:c(function(e){return this.each(fr.call(arguments,1),function(t){var n=this.isObject(t)?Object.keys(t):[];n.forEach((function(i){this.isUndefined(t[i])||(e[i]=t[i])}).bind(this))},this),e},"extend"),defaults:c(function(e){return this.each(fr.call(arguments,1),function(t){var n=this.isObject(t)?Object.keys(t):[];n.forEach((function(i){this.isUndefined(e[i])&&(e[i]=t[i])}).bind(this))},this),e},"defaults"),compose:c(function(){var e=fr.call(arguments);return function(){for(var t=fr.call(arguments),n=e.length-1;n>=0;n--)t=[e[n].apply(this,t)];return t[0]}},"compose"),each:c(function(e,t,n){if(e){if(Gg&&e.forEach&&e.forEach===Gg)e.forEach(t,n);else if(e.length===e.length+0){var i=void 0,r=void 0;for(i=0,r=e.length;i<r;i++)if(i in e&&t.call(n,e[i],i)===this.BREAK)return}else for(var o in e)if(t.call(n,e[o],o)===this.BREAK)return}},"each"),defer:c(function(e){setTimeout(e,0)},"defer"),debounce:c(function(e,t,n){var i=void 0;return function(){var r=this,o=arguments;function a(){i=null,n||e.apply(r,o)}c(a,"delayed");var l=n||!i;clearTimeout(i),i=setTimeout(a,t),l&&e.apply(r,o)}},"debounce"),toArray:c(function(e){return e.toArray?e.toArray():fr.call(e)},"toArray"),isUndefined:c(function(e){return e===void 0},"isUndefined"),isNull:c(function(e){return e===null},"isNull"),isNaN:function(s){function e(t){return s.apply(this,arguments)}return c(e,"isNaN"),e.toString=function(){return s.toString()},e}(function(s){return isNaN(s)}),isArray:Array.isArray||function(s){return s.constructor===Array},isObject:c(function(e){return e===Object(e)},"isObject"),isNumber:c(function(e){return e===e+0},"isNumber"),isString:c(function(e){return e===e+""},"isString"),isBoolean:c(function(e){return e===!1||e===!0},"isBoolean"),isFunction:c(function(e){return e instanceof Function},"isFunction")},AE=[{litmus:Z.isString,conversions:{THREE_CHAR_HEX:{read:c(function(e){var t=e.match(/^#([A-F0-9])([A-F0-9])([A-F0-9])$/i);return t===null?!1:{space:"HEX",hex:parseInt("0x"+t[1].toString()+t[1].toString()+t[2].toString()+t[2].toString()+t[3].toString()+t[3].toString(),0)}},"read"),write:ds},SIX_CHAR_HEX:{read:c(function(e){var t=e.match(/^#([A-F0-9]{6})$/i);return t===null?!1:{space:"HEX",hex:parseInt("0x"+t[1].toString(),0)}},"read"),write:ds},CSS_RGB:{read:c(function(e){var t=e.match(/^rgb\(\s*(\S+)\s*,\s*(\S+)\s*,\s*(\S+)\s*\)/);return t===null?!1:{space:"RGB",r:parseFloat(t[1]),g:parseFloat(t[2]),b:parseFloat(t[3])}},"read"),write:ds},CSS_RGBA:{read:c(function(e){var t=e.match(/^rgba\(\s*(\S+)\s*,\s*(\S+)\s*,\s*(\S+)\s*,\s*(\S+)\s*\)/);return t===null?!1:{space:"RGB",r:parseFloat(t[1]),g:parseFloat(t[2]),b:parseFloat(t[3]),a:parseFloat(t[4])}},"read"),write:ds}}},{litmus:Z.isNumber,conversions:{HEX:{read:c(function(e){return{space:"HEX",hex:e,conversionName:"HEX"}},"read"),write:c(function(e){return e.hex},"write")}}},{litmus:Z.isArray,conversions:{RGB_ARRAY:{read:c(function(e){return e.length!==3?!1:{space:"RGB",r:e[0],g:e[1],b:e[2]}},"read"),write:c(function(e){return[e.r,e.g,e.b]},"write")},RGBA_ARRAY:{read:c(function(e){return e.length!==4?!1:{space:"RGB",r:e[0],g:e[1],b:e[2],a:e[3]}},"read"),write:c(function(e){return[e.r,e.g,e.b,e.a]},"write")}}},{litmus:Z.isObject,conversions:{RGBA_OBJ:{read:c(function(e){return Z.isNumber(e.r)&&Z.isNumber(e.g)&&Z.isNumber(e.b)&&Z.isNumber(e.a)?{space:"RGB",r:e.r,g:e.g,b:e.b,a:e.a}:!1},"read"),write:c(function(e){return{r:e.r,g:e.g,b:e.b,a:e.a}},"write")},RGB_OBJ:{read:c(function(e){return Z.isNumber(e.r)&&Z.isNumber(e.g)&&Z.isNumber(e.b)?{space:"RGB",r:e.r,g:e.g,b:e.b}:!1},"read"),write:c(function(e){return{r:e.r,g:e.g,b:e.b}},"write")},HSVA_OBJ:{read:c(function(e){return Z.isNumber(e.h)&&Z.isNumber(e.s)&&Z.isNumber(e.v)&&Z.isNumber(e.a)?{space:"HSV",h:e.h,s:e.s,v:e.v,a:e.a}:!1},"read"),write:c(function(e){return{h:e.h,s:e.s,v:e.v,a:e.a}},"write")},HSV_OBJ:{read:c(function(e){return Z.isNumber(e.h)&&Z.isNumber(e.s)&&Z.isNumber(e.v)?{space:"HSV",h:e.h,s:e.s,v:e.v}:!1},"read"),write:c(function(e){return{h:e.h,s:e.s,v:e.v}},"write")}}}],pr=void 0,No=void 0,Yu=c(function(){No=!1;var e=arguments.length>1?Z.toArray(arguments):arguments[0];return Z.each(AE,function(t){if(t.litmus(e))return Z.each(t.conversions,function(n,i){if(pr=n.read(e),No===!1&&pr!==!1)return No=pr,pr.conversionName=i,pr.conversion=n,Z.BREAK}),Z.BREAK}),No},"interpret"),Wg=void 0,ya={hsv_to_rgb:c(function(e,t,n){var i=Math.floor(e/60)%6,r=e/60-Math.floor(e/60),o=n*(1-t),a=n*(1-r*t),l=n*(1-(1-r)*t),u=[[n,l,o],[a,n,o],[o,n,l],[o,a,n],[l,o,n],[n,o,a]][i];return{r:u[0]*255,g:u[1]*255,b:u[2]*255}},"hsv_to_rgb"),rgb_to_hsv:c(function(e,t,n){var i=Math.min(e,t,n),r=Math.max(e,t,n),o=r-i,a=void 0,l=void 0;if(r!==0)l=o/r;else return{h:NaN,s:0,v:0};return e===r?a=(t-n)/o:t===r?a=2+(n-e)/o:a=4+(e-t)/o,a/=6,a<0&&(a+=1),{h:a*360,s:l,v:r/255}},"rgb_to_hsv"),rgb_to_hex:c(function(e,t,n){var i=this.hex_with_component(0,2,e);return i=this.hex_with_component(i,1,t),i=this.hex_with_component(i,0,n),i},"rgb_to_hex"),component_from_hex:c(function(e,t){return e>>t*8&255},"component_from_hex"),hex_with_component:c(function(e,t,n){return n<<(Wg=t*8)|e&~(255<<Wg)},"hex_with_component")},RE=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(s){return typeof s}:function(s){return s&&typeof Symbol=="function"&&s.constructor===Symbol&&s!==Symbol.prototype?"symbol":typeof s},Mn=c(function(s,e){if(!(s instanceof e))throw new TypeError("Cannot call a class as a function")},"classCallCheck"),En=function(){function s(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return c(s,"defineProperties"),function(e,t,n){return t&&s(e.prototype,t),n&&s(e,n),e}}(),vi=c(function s(e,t,n){e===null&&(e=Function.prototype);var i=Object.getOwnPropertyDescriptor(e,t);if(i===void 0){var r=Object.getPrototypeOf(e);return r===null?void 0:s(r,t,n)}else{if("value"in i)return i.value;var o=i.get;return o===void 0?void 0:o.call(n)}},"get"),xi=c(function(s,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof e);s.prototype=Object.create(e&&e.prototype,{constructor:{value:s,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(s,e):s.__proto__=e)},"inherits"),yi=c(function(s,e){if(!s)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e&&(typeof e=="object"||typeof e=="function")?e:s},"possibleConstructorReturn"),It=function(){function s(){if(Mn(this,s),this.__state=Yu.apply(this,arguments),this.__state===!1)throw new Error("Failed to interpret color arguments");this.__state.a=this.__state.a||1}return c(s,"Color"),En(s,[{key:"toString",value:c(function(){return ds(this)},"toString")},{key:"toHexString",value:c(function(){return ds(this,!0)},"toHexString")},{key:"toOriginal",value:c(function(){return this.__state.conversion.write(this)},"toOriginal")}]),s}();function ad(s,e,t){Object.defineProperty(s,e,{get:c(function(){return this.__state.space==="RGB"?this.__state[e]:(It.recalculateRGB(this,e,t),this.__state[e])},"get$$1"),set:c(function(i){this.__state.space!=="RGB"&&(It.recalculateRGB(this,e,t),this.__state.space="RGB"),this.__state[e]=i},"set$$1")})}c(ad,"defineRGBComponent");function cd(s,e){Object.defineProperty(s,e,{get:c(function(){return this.__state.space==="HSV"?this.__state[e]:(It.recalculateHSV(this),this.__state[e])},"get$$1"),set:c(function(n){this.__state.space!=="HSV"&&(It.recalculateHSV(this),this.__state.space="HSV"),this.__state[e]=n},"set$$1")})}c(cd,"defineHSVComponent");It.recalculateRGB=function(s,e,t){if(s.__state.space==="HEX")s.__state[e]=ya.component_from_hex(s.__state.hex,t);else if(s.__state.space==="HSV")Z.extend(s.__state,ya.hsv_to_rgb(s.__state.h,s.__state.s,s.__state.v));else throw new Error("Corrupted color state")};It.recalculateHSV=function(s){var e=ya.rgb_to_hsv(s.r,s.g,s.b);Z.extend(s.__state,{s:e.s,v:e.v}),Z.isNaN(e.h)?Z.isUndefined(s.__state.h)&&(s.__state.h=0):s.__state.h=e.h};It.COMPONENTS=["r","g","b","h","s","v","hex","a"];ad(It.prototype,"r",2);ad(It.prototype,"g",1);ad(It.prototype,"b",0);cd(It.prototype,"h");cd(It.prototype,"s");cd(It.prototype,"v");Object.defineProperty(It.prototype,"a",{get:c(function(){return this.__state.a},"get$$1"),set:c(function(e){this.__state.a=e},"set$$1")});Object.defineProperty(It.prototype,"hex",{get:c(function(){return this.__state.space!=="HEX"&&(this.__state.hex=ya.rgb_to_hex(this.r,this.g,this.b),this.__state.space="HEX"),this.__state.hex},"get$$1"),set:c(function(e){this.__state.space="HEX",this.__state.hex=e},"set$$1")});var Wi=function(){function s(e,t){Mn(this,s),this.initialValue=e[t],this.domElement=document.createElement("div"),this.object=e,this.property=t,this.__onChange=void 0,this.__onFinishChange=void 0}return c(s,"Controller"),En(s,[{key:"onChange",value:c(function(t){return this.__onChange=t,this},"onChange")},{key:"onFinishChange",value:c(function(t){return this.__onFinishChange=t,this},"onFinishChange")},{key:"setValue",value:c(function(t){return this.object[this.property]=t,this.__onChange&&this.__onChange.call(this,t),this.updateDisplay(),this},"setValue")},{key:"getValue",value:c(function(){return this.object[this.property]},"getValue")},{key:"updateDisplay",value:c(function(){return this},"updateDisplay")},{key:"isModified",value:c(function(){return this.initialValue!==this.getValue()},"isModified")}]),s}(),CE={HTMLEvents:["change"],MouseEvents:["click","mousemove","mousedown","mouseup","mouseover"],KeyboardEvents:["keydown"]},O_={};Z.each(CE,function(s,e){Z.each(s,function(t){O_[t]=e})});var PE=/(\d+(\.\d+)?)px/;function Tn(s){if(s==="0"||Z.isUndefined(s))return 0;var e=s.match(PE);return Z.isNull(e)?0:parseFloat(e[1])}c(Tn,"cssValueToPixels");var z={makeSelectable:c(function(e,t){e===void 0||e.style===void 0||(e.onselectstart=t?function(){return!1}:function(){},e.style.MozUserSelect=t?"auto":"none",e.style.KhtmlUserSelect=t?"auto":"none",e.unselectable=t?"on":"off")},"makeSelectable"),makeFullscreen:c(function(e,t,n){var i=n,r=t;Z.isUndefined(r)&&(r=!0),Z.isUndefined(i)&&(i=!0),e.style.position="absolute",r&&(e.style.left=0,e.style.right=0),i&&(e.style.top=0,e.style.bottom=0)},"makeFullscreen"),fakeEvent:c(function(e,t,n,i){var r=n||{},o=O_[t];if(!o)throw new Error("Event type "+t+" not supported.");var a=document.createEvent(o);switch(o){case"MouseEvents":{var l=r.x||r.clientX||0,u=r.y||r.clientY||0;a.initMouseEvent(t,r.bubbles||!1,r.cancelable||!0,window,r.clickCount||1,0,0,l,u,!1,!1,!1,!1,0,null);break}case"KeyboardEvents":{var h=a.initKeyboardEvent||a.initKeyEvent;Z.defaults(r,{cancelable:!0,ctrlKey:!1,altKey:!1,shiftKey:!1,metaKey:!1,keyCode:void 0,charCode:void 0}),h(t,r.bubbles||!1,r.cancelable,window,r.ctrlKey,r.altKey,r.shiftKey,r.metaKey,r.keyCode,r.charCode);break}default:{a.initEvent(t,r.bubbles||!1,r.cancelable||!0);break}}Z.defaults(a,i),e.dispatchEvent(a)},"fakeEvent"),bind:c(function(e,t,n,i){var r=i||!1;return e.addEventListener?e.addEventListener(t,n,r):e.attachEvent&&e.attachEvent("on"+t,n),z},"bind"),unbind:c(function(e,t,n,i){var r=i||!1;return e.removeEventListener?e.removeEventListener(t,n,r):e.detachEvent&&e.detachEvent("on"+t,n),z},"unbind"),addClass:c(function(e,t){if(e.className===void 0)e.className=t;else if(e.className!==t){var n=e.className.split(/ +/);n.indexOf(t)===-1&&(n.push(t),e.className=n.join(" ").replace(/^\s+/,"").replace(/\s+$/,""))}return z},"addClass"),removeClass:c(function(e,t){if(t)if(e.className===t)e.removeAttribute("class");else{var n=e.className.split(/ +/),i=n.indexOf(t);i!==-1&&(n.splice(i,1),e.className=n.join(" "))}else e.className=void 0;return z},"removeClass"),hasClass:c(function(e,t){return new RegExp("(?:^|\\s+)"+t+"(?:\\s+|$)").test(e.className)||!1},"hasClass"),getWidth:c(function(e){var t=getComputedStyle(e);return Tn(t["border-left-width"])+Tn(t["border-right-width"])+Tn(t["padding-left"])+Tn(t["padding-right"])+Tn(t.width)},"getWidth"),getHeight:c(function(e){var t=getComputedStyle(e);return Tn(t["border-top-width"])+Tn(t["border-bottom-width"])+Tn(t["padding-top"])+Tn(t["padding-bottom"])+Tn(t.height)},"getHeight"),getOffset:c(function(e){var t=e,n={left:0,top:0};if(t.offsetParent)do n.left+=t.offsetLeft,n.top+=t.offsetTop,t=t.offsetParent;while(t);return n},"getOffset"),isActive:c(function(e){return e===document.activeElement&&(e.type||e.href)},"isActive")},N_=function(s){xi(e,s);function e(t,n){Mn(this,e);var i=yi(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n)),r=i;i.__prev=i.getValue(),i.__checkbox=document.createElement("input"),i.__checkbox.setAttribute("type","checkbox");function o(){r.setValue(!r.__prev)}return c(o,"onChange"),z.bind(i.__checkbox,"change",o,!1),i.domElement.appendChild(i.__checkbox),i.updateDisplay(),i}return c(e,"BooleanController"),En(e,[{key:"setValue",value:c(function(n){var i=vi(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"setValue",this).call(this,n);return this.__onFinishChange&&this.__onFinishChange.call(this,this.getValue()),this.__prev=this.getValue(),i},"setValue")},{key:"updateDisplay",value:c(function(){return this.getValue()===!0?(this.__checkbox.setAttribute("checked","checked"),this.__checkbox.checked=!0,this.__prev=!0):(this.__checkbox.checked=!1,this.__prev=!1),vi(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"updateDisplay",this).call(this)},"updateDisplay")}]),e}(Wi),LE=function(s){xi(e,s);function e(t,n,i){Mn(this,e);var r=yi(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n)),o=i,a=r;if(r.__select=document.createElement("select"),Z.isArray(o)){var l={};Z.each(o,function(u){l[u]=u}),o=l}return Z.each(o,function(u,h){var d=document.createElement("option");d.innerHTML=h,d.setAttribute("value",u),a.__select.appendChild(d)}),r.updateDisplay(),z.bind(r.__select,"change",function(){var u=this.options[this.selectedIndex].value;a.setValue(u)}),r.domElement.appendChild(r.__select),r}return c(e,"OptionController"),En(e,[{key:"setValue",value:c(function(n){var i=vi(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"setValue",this).call(this,n);return this.__onFinishChange&&this.__onFinishChange.call(this,this.getValue()),i},"setValue")},{key:"updateDisplay",value:c(function(){return z.isActive(this.__select)?this:(this.__select.value=this.getValue(),vi(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"updateDisplay",this).call(this))},"updateDisplay")}]),e}(Wi),IE=function(s){xi(e,s);function e(t,n){Mn(this,e);var i=yi(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n)),r=i;function o(){r.setValue(r.__input.value)}c(o,"onChange");function a(){r.__onFinishChange&&r.__onFinishChange.call(r,r.getValue())}return c(a,"onBlur"),i.__input=document.createElement("input"),i.__input.setAttribute("type","text"),z.bind(i.__input,"keyup",o),z.bind(i.__input,"change",o),z.bind(i.__input,"blur",a),z.bind(i.__input,"keydown",function(l){l.keyCode===13&&this.blur()}),i.updateDisplay(),i.domElement.appendChild(i.__input),i}return c(e,"StringController"),En(e,[{key:"updateDisplay",value:c(function(){return z.isActive(this.__input)||(this.__input.value=this.getValue()),vi(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"updateDisplay",this).call(this)},"updateDisplay")}]),e}(Wi);function Xg(s){var e=s.toString();return e.indexOf(".")>-1?e.length-e.indexOf(".")-1:0}c(Xg,"numDecimals");var U_=function(s){xi(e,s);function e(t,n,i){Mn(this,e);var r=yi(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n)),o=i||{};return r.__min=o.min,r.__max=o.max,r.__step=o.step,Z.isUndefined(r.__step)?r.initialValue===0?r.__impliedStep=1:r.__impliedStep=Math.pow(10,Math.floor(Math.log(Math.abs(r.initialValue))/Math.LN10))/10:r.__impliedStep=r.__step,r.__precision=Xg(r.__impliedStep),r}return c(e,"NumberController"),En(e,[{key:"setValue",value:c(function(n){var i=n;return this.__min!==void 0&&i<this.__min?i=this.__min:this.__max!==void 0&&i>this.__max&&(i=this.__max),this.__step!==void 0&&i%this.__step!==0&&(i=Math.round(i/this.__step)*this.__step),vi(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"setValue",this).call(this,i)},"setValue")},{key:"min",value:c(function(n){return this.__min=n,this},"min")},{key:"max",value:c(function(n){return this.__max=n,this},"max")},{key:"step",value:c(function(n){return this.__step=n,this.__impliedStep=n,this.__precision=Xg(n),this},"step")}]),e}(Wi);function DE(s,e){var t=Math.pow(10,e);return Math.round(s*t)/t}c(DE,"roundToDecimal");var ba=function(s){xi(e,s);function e(t,n,i){Mn(this,e);var r=yi(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n,i));r.__truncationSuspended=!1;var o=r,a=void 0;function l(){var _=parseFloat(o.__input.value);Z.isNaN(_)||o.setValue(_)}c(l,"onChange");function u(){o.__onFinishChange&&o.__onFinishChange.call(o,o.getValue())}c(u,"onFinish");function h(){u()}c(h,"onBlur");function d(_){var v=a-_.clientY;o.setValue(o.getValue()+v*o.__impliedStep),a=_.clientY}c(d,"onMouseDrag");function f(){z.unbind(window,"mousemove",d),z.unbind(window,"mouseup",f),u()}c(f,"onMouseUp");function p(_){z.bind(window,"mousemove",d),z.bind(window,"mouseup",f),a=_.clientY}return c(p,"onMouseDown"),r.__input=document.createElement("input"),r.__input.setAttribute("type","text"),z.bind(r.__input,"change",l),z.bind(r.__input,"blur",h),z.bind(r.__input,"mousedown",p),z.bind(r.__input,"keydown",function(_){_.keyCode===13&&(o.__truncationSuspended=!0,this.blur(),o.__truncationSuspended=!1,u())}),r.updateDisplay(),r.domElement.appendChild(r.__input),r}return c(e,"NumberControllerBox"),En(e,[{key:"updateDisplay",value:c(function(){return this.__input.value=this.__truncationSuspended?this.getValue():DE(this.getValue(),this.__precision),vi(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"updateDisplay",this).call(this)},"updateDisplay")}]),e}(U_);function jg(s,e,t,n,i){return n+(i-n)*((s-e)/(t-e))}c(jg,"map");var $u=function(s){xi(e,s);function e(t,n,i,r,o){Mn(this,e);var a=yi(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n,{min:i,max:r,step:o})),l=a;a.__background=document.createElement("div"),a.__foreground=document.createElement("div"),z.bind(a.__background,"mousedown",u),z.bind(a.__background,"touchstart",f),z.addClass(a.__background,"slider"),z.addClass(a.__foreground,"slider-fg");function u(v){document.activeElement.blur(),z.bind(window,"mousemove",h),z.bind(window,"mouseup",d),h(v)}c(u,"onMouseDown");function h(v){v.preventDefault();var g=l.__background.getBoundingClientRect();return l.setValue(jg(v.clientX,g.left,g.right,l.__min,l.__max)),!1}c(h,"onMouseDrag");function d(){z.unbind(window,"mousemove",h),z.unbind(window,"mouseup",d),l.__onFinishChange&&l.__onFinishChange.call(l,l.getValue())}c(d,"onMouseUp");function f(v){v.touches.length===1&&(z.bind(window,"touchmove",p),z.bind(window,"touchend",_),p(v))}c(f,"onTouchStart");function p(v){var g=v.touches[0].clientX,m=l.__background.getBoundingClientRect();l.setValue(jg(g,m.left,m.right,l.__min,l.__max))}c(p,"onTouchMove");function _(){z.unbind(window,"touchmove",p),z.unbind(window,"touchend",_),l.__onFinishChange&&l.__onFinishChange.call(l,l.getValue())}return c(_,"onTouchEnd"),a.updateDisplay(),a.__background.appendChild(a.__foreground),a.domElement.appendChild(a.__background),a}return c(e,"NumberControllerSlider"),En(e,[{key:"updateDisplay",value:c(function(){var n=(this.getValue()-this.__min)/(this.__max-this.__min);return this.__foreground.style.width=n*100+"%",vi(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"updateDisplay",this).call(this)},"updateDisplay")}]),e}(U_),F_=function(s){xi(e,s);function e(t,n,i){Mn(this,e);var r=yi(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n)),o=r;return r.__button=document.createElement("div"),r.__button.innerHTML=i===void 0?"Fire":i,z.bind(r.__button,"click",function(a){return a.preventDefault(),o.fire(),!1}),z.addClass(r.__button,"button"),r.domElement.appendChild(r.__button),r}return c(e,"FunctionController"),En(e,[{key:"fire",value:c(function(){this.__onChange&&this.__onChange.call(this),this.getValue().call(this.object),this.__onFinishChange&&this.__onFinishChange.call(this,this.getValue())},"fire")}]),e}(Wi),Ku=function(s){xi(e,s);function e(t,n){Mn(this,e);var i=yi(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n));i.__color=new It(i.getValue()),i.__temp=new It(0);var r=i;i.domElement=document.createElement("div"),z.makeSelectable(i.domElement,!1),i.__selector=document.createElement("div"),i.__selector.className="selector",i.__saturation_field=document.createElement("div"),i.__saturation_field.className="saturation-field",i.__field_knob=document.createElement("div"),i.__field_knob.className="field-knob",i.__field_knob_border="2px solid ",i.__hue_knob=document.createElement("div"),i.__hue_knob.className="hue-knob",i.__hue_field=document.createElement("div"),i.__hue_field.className="hue-field",i.__input=document.createElement("input"),i.__input.type="text",i.__input_textShadow="0 1px 1px ",z.bind(i.__input,"keydown",function(v){v.keyCode===13&&d.call(this)}),z.bind(i.__input,"blur",d),z.bind(i.__selector,"mousedown",function(){z.addClass(this,"drag").bind(window,"mouseup",function(){z.removeClass(r.__selector,"drag")})}),z.bind(i.__selector,"touchstart",function(){z.addClass(this,"drag").bind(window,"touchend",function(){z.removeClass(r.__selector,"drag")})});var o=document.createElement("div");Z.extend(i.__selector.style,{width:"122px",height:"102px",padding:"3px",backgroundColor:"#222",boxShadow:"0px 1px 3px rgba(0,0,0,0.3)"}),Z.extend(i.__field_knob.style,{position:"absolute",width:"12px",height:"12px",border:i.__field_knob_border+(i.__color.v<.5?"#fff":"#000"),boxShadow:"0px 1px 3px rgba(0,0,0,0.5)",borderRadius:"12px",zIndex:1}),Z.extend(i.__hue_knob.style,{position:"absolute",width:"15px",height:"2px",borderRight:"4px solid #fff",zIndex:1}),Z.extend(i.__saturation_field.style,{width:"100px",height:"100px",border:"1px solid #555",marginRight:"3px",display:"inline-block",cursor:"pointer"}),Z.extend(o.style,{width:"100%",height:"100%",background:"none"}),qg(o,"top","rgba(0,0,0,0)","#000"),Z.extend(i.__hue_field.style,{width:"15px",height:"100px",border:"1px solid #555",cursor:"ns-resize",position:"absolute",top:"3px",right:"3px"}),NE(i.__hue_field),Z.extend(i.__input.style,{outline:"none",textAlign:"center",color:"#fff",border:0,fontWeight:"bold",textShadow:i.__input_textShadow+"rgba(0,0,0,0.7)"}),z.bind(i.__saturation_field,"mousedown",a),z.bind(i.__saturation_field,"touchstart",a),z.bind(i.__field_knob,"mousedown",a),z.bind(i.__field_knob,"touchstart",a),z.bind(i.__hue_field,"mousedown",l),z.bind(i.__hue_field,"touchstart",l);function a(v){p(v),z.bind(window,"mousemove",p),z.bind(window,"touchmove",p),z.bind(window,"mouseup",u),z.bind(window,"touchend",u)}c(a,"fieldDown");function l(v){_(v),z.bind(window,"mousemove",_),z.bind(window,"touchmove",_),z.bind(window,"mouseup",h),z.bind(window,"touchend",h)}c(l,"fieldDownH");function u(){z.unbind(window,"mousemove",p),z.unbind(window,"touchmove",p),z.unbind(window,"mouseup",u),z.unbind(window,"touchend",u),f()}c(u,"fieldUpSV");function h(){z.unbind(window,"mousemove",_),z.unbind(window,"touchmove",_),z.unbind(window,"mouseup",h),z.unbind(window,"touchend",h),f()}c(h,"fieldUpH");function d(){var v=Yu(this.value);v!==!1?(r.__color.__state=v,r.setValue(r.__color.toOriginal())):this.value=r.__color.toString()}c(d,"onBlur");function f(){r.__onFinishChange&&r.__onFinishChange.call(r,r.__color.toOriginal())}c(f,"onFinish"),i.__saturation_field.appendChild(o),i.__selector.appendChild(i.__field_knob),i.__selector.appendChild(i.__saturation_field),i.__selector.appendChild(i.__hue_field),i.__hue_field.appendChild(i.__hue_knob),i.domElement.appendChild(i.__input),i.domElement.appendChild(i.__selector),i.updateDisplay();function p(v){v.type.indexOf("touch")===-1&&v.preventDefault();var g=r.__saturation_field.getBoundingClientRect(),m=v.touches&&v.touches[0]||v,A=m.clientX,E=m.clientY,y=(A-g.left)/(g.right-g.left),C=1-(E-g.top)/(g.bottom-g.top);return C>1?C=1:C<0&&(C=0),y>1?y=1:y<0&&(y=0),r.__color.v=C,r.__color.s=y,r.setValue(r.__color.toOriginal()),!1}c(p,"setSV");function _(v){v.type.indexOf("touch")===-1&&v.preventDefault();var g=r.__hue_field.getBoundingClientRect(),m=v.touches&&v.touches[0]||v,A=m.clientY,E=1-(A-g.top)/(g.bottom-g.top);return E>1?E=1:E<0&&(E=0),r.__color.h=E*360,r.setValue(r.__color.toOriginal()),!1}return c(_,"setH"),i}return c(e,"ColorController"),En(e,[{key:"updateDisplay",value:c(function(){var n=Yu(this.getValue());if(n!==!1){var i=!1;Z.each(It.COMPONENTS,function(a){if(!Z.isUndefined(n[a])&&!Z.isUndefined(this.__color.__state[a])&&n[a]!==this.__color.__state[a])return i=!0,{}},this),i&&Z.extend(this.__color.__state,n)}Z.extend(this.__temp.__state,this.__color.__state),this.__temp.a=1;var r=this.__color.v<.5||this.__color.s>.5?255:0,o=255-r;Z.extend(this.__field_knob.style,{marginLeft:100*this.__color.s-7+"px",marginTop:100*(1-this.__color.v)-7+"px",backgroundColor:this.__temp.toHexString(),border:this.__field_knob_border+"rgb("+r+","+r+","+r+")"}),this.__hue_knob.style.marginTop=(1-this.__color.h/360)*100+"px",this.__temp.s=1,this.__temp.v=1,qg(this.__saturation_field,"left","#fff",this.__temp.toHexString()),this.__input.value=this.__color.toString(),Z.extend(this.__input.style,{backgroundColor:this.__color.toHexString(),color:"rgb("+r+","+r+","+r+")",textShadow:this.__input_textShadow+"rgba("+o+","+o+","+o+",.7)"})},"updateDisplay")}]),e}(Wi),OE=["-moz-","-o-","-webkit-","-ms-",""];function qg(s,e,t,n){s.style.background="",Z.each(OE,function(i){s.style.cssText+="background: "+i+"linear-gradient("+e+", "+t+" 0%, "+n+" 100%); "})}c(qg,"linearGradient");function NE(s){s.style.background="",s.style.cssText+="background: -moz-linear-gradient(top,  #ff0000 0%, #ff00ff 17%, #0000ff 34%, #00ffff 50%, #00ff00 67%, #ffff00 84%, #ff0000 100%);",s.style.cssText+="background: -webkit-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);",s.style.cssText+="background: -o-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);",s.style.cssText+="background: -ms-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);",s.style.cssText+="background: linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);"}c(NE,"hueGradient");var UE={load:c(function(e,t){var n=t||document,i=n.createElement("link");i.type="text/css",i.rel="stylesheet",i.href=e,n.getElementsByTagName("head")[0].appendChild(i)},"load"),inject:c(function(e,t){var n=t||document,i=document.createElement("style");i.type="text/css",i.innerHTML=e;var r=n.getElementsByTagName("head")[0];try{r.appendChild(i)}catch{}},"inject")},FE=`<div id="dg-save" class="dg dialogue">

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

</div>`,BE=c(function(e,t){var n=e[t];return Z.isArray(arguments[2])||Z.isObject(arguments[2])?new LE(e,t,arguments[2]):Z.isNumber(n)?Z.isNumber(arguments[2])&&Z.isNumber(arguments[3])?Z.isNumber(arguments[4])?new $u(e,t,arguments[2],arguments[3],arguments[4]):new $u(e,t,arguments[2],arguments[3]):Z.isNumber(arguments[4])?new ba(e,t,{min:arguments[2],max:arguments[3],step:arguments[4]}):new ba(e,t,{min:arguments[2],max:arguments[3]}):Z.isString(n)?new IE(e,t):Z.isFunction(n)?new F_(e,t,""):Z.isBoolean(n)?new N_(e,t):null},"ControllerFactory");function kE(s){setTimeout(s,1e3/60)}c(kE,"requestAnimationFrame$1");var HE=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||kE,zE=function(){function s(){Mn(this,s),this.backgroundElement=document.createElement("div"),Z.extend(this.backgroundElement.style,{backgroundColor:"rgba(0,0,0,0.8)",top:0,left:0,display:"none",zIndex:"1000",opacity:0,WebkitTransition:"opacity 0.2s linear",transition:"opacity 0.2s linear"}),z.makeFullscreen(this.backgroundElement),this.backgroundElement.style.position="fixed",this.domElement=document.createElement("div"),Z.extend(this.domElement.style,{position:"fixed",display:"none",zIndex:"1001",opacity:0,WebkitTransition:"-webkit-transform 0.2s ease-out, opacity 0.2s linear",transition:"transform 0.2s ease-out, opacity 0.2s linear"}),document.body.appendChild(this.backgroundElement),document.body.appendChild(this.domElement);var e=this;z.bind(this.backgroundElement,"click",function(){e.hide()})}return c(s,"CenteredDiv"),En(s,[{key:"show",value:c(function(){var t=this;this.backgroundElement.style.display="block",this.domElement.style.display="block",this.domElement.style.opacity=0,this.domElement.style.webkitTransform="scale(1.1)",this.layout(),Z.defer(function(){t.backgroundElement.style.opacity=1,t.domElement.style.opacity=1,t.domElement.style.webkitTransform="scale(1)"})},"show")},{key:"hide",value:c(function(){var t=this,n=c(function i(){t.domElement.style.display="none",t.backgroundElement.style.display="none",z.unbind(t.domElement,"webkitTransitionEnd",i),z.unbind(t.domElement,"transitionend",i),z.unbind(t.domElement,"oTransitionEnd",i)},"hide");z.bind(this.domElement,"webkitTransitionEnd",n),z.bind(this.domElement,"transitionend",n),z.bind(this.domElement,"oTransitionEnd",n),this.backgroundElement.style.opacity=0,this.domElement.style.opacity=0,this.domElement.style.webkitTransform="scale(1.1)"},"hide")},{key:"layout",value:c(function(){this.domElement.style.left=window.innerWidth/2-z.getWidth(this.domElement)/2+"px",this.domElement.style.top=window.innerHeight/2-z.getHeight(this.domElement)/2+"px"},"layout")}]),s}(),VE=TE(`.dg ul{list-style:none;margin:0;padding:0;width:100%;clear:both}.dg.ac{position:fixed;top:0;left:0;right:0;height:0;z-index:0}.dg:not(.ac) .main{overflow:hidden}.dg.main{-webkit-transition:opacity .1s linear;-o-transition:opacity .1s linear;-moz-transition:opacity .1s linear;transition:opacity .1s linear}.dg.main.taller-than-window{overflow-y:auto}.dg.main.taller-than-window .close-button{opacity:1;margin-top:-1px;border-top:1px solid #2c2c2c}.dg.main ul.closed .close-button{opacity:1 !important}.dg.main:hover .close-button,.dg.main .close-button.drag{opacity:1}.dg.main .close-button{-webkit-transition:opacity .1s linear;-o-transition:opacity .1s linear;-moz-transition:opacity .1s linear;transition:opacity .1s linear;border:0;line-height:19px;height:20px;cursor:pointer;text-align:center;background-color:#000}.dg.main .close-button.close-top{position:relative}.dg.main .close-button.close-bottom{position:absolute}.dg.main .close-button:hover{background-color:#111}.dg.a{float:right;margin-right:15px;overflow-y:visible}.dg.a.has-save>ul.close-top{margin-top:0}.dg.a.has-save>ul.close-bottom{margin-top:27px}.dg.a.has-save>ul.closed{margin-top:0}.dg.a .save-row{top:0;z-index:1002}.dg.a .save-row.close-top{position:relative}.dg.a .save-row.close-bottom{position:fixed}.dg li{-webkit-transition:height .1s ease-out;-o-transition:height .1s ease-out;-moz-transition:height .1s ease-out;transition:height .1s ease-out;-webkit-transition:overflow .1s linear;-o-transition:overflow .1s linear;-moz-transition:overflow .1s linear;transition:overflow .1s linear}.dg li:not(.folder){cursor:auto;height:27px;line-height:27px;padding:0 4px 0 5px}.dg li.folder{padding:0;border-left:4px solid rgba(0,0,0,0)}.dg li.title{cursor:pointer;margin-left:-4px}.dg .closed li:not(.title),.dg .closed ul li,.dg .closed ul li>*{height:0;overflow:hidden;border:0}.dg .cr{clear:both;padding-left:3px;height:27px;overflow:hidden}.dg .property-name{cursor:default;float:left;clear:left;width:40%;overflow:hidden;text-overflow:ellipsis}.dg .cr.function .property-name{width:100%}.dg .c{float:left;width:60%;position:relative}.dg .c input[type=text]{border:0;margin-top:4px;padding:3px;width:100%;float:right}.dg .has-slider input[type=text]{width:30%;margin-left:0}.dg .slider{float:left;width:66%;margin-left:-5px;margin-right:0;height:19px;margin-top:4px}.dg .slider-fg{height:100%}.dg .c input[type=checkbox]{margin-top:7px}.dg .c select{margin-top:5px}.dg .cr.function,.dg .cr.function .property-name,.dg .cr.function *,.dg .cr.boolean,.dg .cr.boolean *{cursor:pointer}.dg .cr.color{overflow:visible}.dg .selector{display:none;position:absolute;margin-left:-9px;margin-top:23px;z-index:10}.dg .c:hover .selector,.dg .selector.drag{display:block}.dg li.save-row{padding:0}.dg li.save-row .button{display:inline-block;padding:0px 6px}.dg.dialogue{background-color:#222;width:460px;padding:15px;font-size:13px;line-height:15px}#dg-new-constructor{padding:10px;color:#222;font-family:Monaco, monospace;font-size:10px;border:0;resize:none;box-shadow:inset 1px 1px 1px #888;word-wrap:break-word;margin:12px 0;display:block;width:440px;overflow-y:scroll;height:100px;position:relative}#dg-local-explain{display:none;font-size:11px;line-height:17px;border-radius:3px;background-color:#333;padding:8px;margin-top:10px}#dg-local-explain code{font-size:10px}#dat-gui-save-locally{display:none}.dg{color:#eee;font:11px 'Lucida Grande', sans-serif;text-shadow:0 -1px 0 #111}.dg.main::-webkit-scrollbar{width:5px;background:#1a1a1a}.dg.main::-webkit-scrollbar-corner{height:0;display:none}.dg.main::-webkit-scrollbar-thumb{border-radius:5px;background:#676767}.dg li:not(.folder){background:#1a1a1a;border-bottom:1px solid #2c2c2c}.dg li.save-row{line-height:25px;background:#dad5cb;border:0}.dg li.save-row select{margin-left:5px;width:108px}.dg li.save-row .button{margin-left:5px;margin-top:1px;border-radius:2px;font-size:9px;line-height:7px;padding:4px 4px 5px 4px;background:#c5bdad;color:#fff;text-shadow:0 1px 0 #b0a58f;box-shadow:0 -1px 0 #b0a58f;cursor:pointer}.dg li.save-row .button.gears{background:#c5bdad url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAANCAYAAAB/9ZQ7AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAQJJREFUeNpiYKAU/P//PwGIC/ApCABiBSAW+I8AClAcgKxQ4T9hoMAEUrxx2QSGN6+egDX+/vWT4e7N82AMYoPAx/evwWoYoSYbACX2s7KxCxzcsezDh3evFoDEBYTEEqycggWAzA9AuUSQQgeYPa9fPv6/YWm/Acx5IPb7ty/fw+QZblw67vDs8R0YHyQhgObx+yAJkBqmG5dPPDh1aPOGR/eugW0G4vlIoTIfyFcA+QekhhHJhPdQxbiAIguMBTQZrPD7108M6roWYDFQiIAAv6Aow/1bFwXgis+f2LUAynwoIaNcz8XNx3Dl7MEJUDGQpx9gtQ8YCueB+D26OECAAQDadt7e46D42QAAAABJRU5ErkJggg==) 2px 1px no-repeat;height:7px;width:8px}.dg li.save-row .button:hover{background-color:#bab19e;box-shadow:0 -1px 0 #b0a58f}.dg li.folder{border-bottom:0}.dg li.title{padding-left:16px;background:#000 url(data:image/gif;base64,R0lGODlhBQAFAJEAAP////Pz8////////yH5BAEAAAIALAAAAAAFAAUAAAIIlI+hKgFxoCgAOw==) 6px 10px no-repeat;cursor:pointer;border-bottom:1px solid rgba(255,255,255,0.2)}.dg .closed li.title{background-image:url(data:image/gif;base64,R0lGODlhBQAFAJEAAP////Pz8////////yH5BAEAAAIALAAAAAAFAAUAAAIIlGIWqMCbWAEAOw==)}.dg .cr.boolean{border-left:3px solid #806787}.dg .cr.color{border-left:3px solid}.dg .cr.function{border-left:3px solid #e61d5f}.dg .cr.number{border-left:3px solid #2FA1D6}.dg .cr.number input[type=text]{color:#2FA1D6}.dg .cr.string{border-left:3px solid #1ed36f}.dg .cr.string input[type=text]{color:#1ed36f}.dg .cr.function:hover,.dg .cr.boolean:hover{background:#111}.dg .c input[type=text]{background:#303030;outline:none}.dg .c input[type=text]:hover{background:#3c3c3c}.dg .c input[type=text]:focus{background:#494949;color:#fff}.dg .c .slider{background:#303030;cursor:ew-resize}.dg .c .slider-fg{background:#2FA1D6;max-width:100%}.dg .c .slider:hover{background:#3c3c3c}.dg .c .slider:hover .slider-fg{background:#44abda}
`);UE.inject(VE);var Yg="dg",$g=72,Kg=20,Zr="Default",yr=function(){try{return!!window.localStorage}catch{return!1}}(),Tr=void 0,Jg=!0,cs=void 0,Ic=!1,B_=[],dt=c(function s(e){var t=this,n=e||{};this.domElement=document.createElement("div"),this.__ul=document.createElement("ul"),this.domElement.appendChild(this.__ul),z.addClass(this.domElement,Yg),this.__folders={},this.__controllers=[],this.__rememberedObjects=[],this.__rememberedObjectIndecesToControllers=[],this.__listening=[],n=Z.defaults(n,{closeOnTop:!1,autoPlace:!0,width:s.DEFAULT_WIDTH}),n=Z.defaults(n,{resizable:n.autoPlace,hideable:n.autoPlace}),Z.isUndefined(n.load)?n.load={preset:Zr}:n.preset&&(n.load.preset=n.preset),Z.isUndefined(n.parent)&&n.hideable&&B_.push(this),n.resizable=Z.isUndefined(n.parent)&&n.resizable,n.autoPlace&&Z.isUndefined(n.scrollable)&&(n.scrollable=!0);var i=yr&&localStorage.getItem(ls(this,"isLocal"))==="true",r=void 0,o=void 0;if(Object.defineProperties(this,{parent:{get:c(function(){return n.parent},"get$$1")},scrollable:{get:c(function(){return n.scrollable},"get$$1")},autoPlace:{get:c(function(){return n.autoPlace},"get$$1")},closeOnTop:{get:c(function(){return n.closeOnTop},"get$$1")},preset:{get:c(function(){return t.parent?t.getRoot().preset:n.load.preset},"get$$1"),set:c(function(f){t.parent?t.getRoot().preset=f:n.load.preset=f,jE(this),t.revert()},"set$$1")},width:{get:c(function(){return n.width},"get$$1"),set:c(function(f){n.width=f,Qu(t,f)},"set$$1")},name:{get:c(function(){return n.name},"get$$1"),set:c(function(f){n.name=f,o&&(o.innerHTML=n.name)},"set$$1")},closed:{get:c(function(){return n.closed},"get$$1"),set:c(function(f){n.closed=f,n.closed?z.addClass(t.__ul,s.CLASS_CLOSED):z.removeClass(t.__ul,s.CLASS_CLOSED),this.onResize(),t.__closeButton&&(t.__closeButton.innerHTML=f?s.TEXT_OPEN:s.TEXT_CLOSED)},"set$$1")},load:{get:c(function(){return n.load},"get$$1")},useLocalStorage:{get:c(function(){return i},"get$$1"),set:c(function(f){yr&&(i=f,f?z.bind(window,"unload",r):z.unbind(window,"unload",r),localStorage.setItem(ls(t,"isLocal"),f))},"set$$1")}}),Z.isUndefined(n.parent)){if(this.closed=n.closed||!1,z.addClass(this.domElement,s.CLASS_MAIN),z.makeSelectable(this.domElement,!1),yr&&i){t.useLocalStorage=!0;var a=localStorage.getItem(ls(this,"gui"));a&&(n.load=JSON.parse(a))}this.__closeButton=document.createElement("div"),this.__closeButton.innerHTML=s.TEXT_CLOSED,z.addClass(this.__closeButton,s.CLASS_CLOSE_BUTTON),n.closeOnTop?(z.addClass(this.__closeButton,s.CLASS_CLOSE_TOP),this.domElement.insertBefore(this.__closeButton,this.domElement.childNodes[0])):(z.addClass(this.__closeButton,s.CLASS_CLOSE_BOTTOM),this.domElement.appendChild(this.__closeButton)),z.bind(this.__closeButton,"click",function(){t.closed=!t.closed})}else{n.closed===void 0&&(n.closed=!0);var l=document.createTextNode(n.name);z.addClass(l,"controller-name"),o=ld(t,l);var u=c(function(f){return f.preventDefault(),t.closed=!t.closed,!1},"onClickTitle");z.addClass(this.__ul,s.CLASS_CLOSED),z.addClass(o,"title"),z.bind(o,"click",u),n.closed||(this.closed=!1)}n.autoPlace&&(Z.isUndefined(n.parent)&&(Jg&&(cs=document.createElement("div"),z.addClass(cs,Yg),z.addClass(cs,s.CLASS_AUTO_PLACE_CONTAINER),document.body.appendChild(cs),Jg=!1),cs.appendChild(this.domElement),z.addClass(this.domElement,s.CLASS_AUTO_PLACE)),this.parent||Qu(t,n.width)),this.__resizeHandler=function(){t.onResizeDebounced()},z.bind(window,"resize",this.__resizeHandler),z.bind(this.__ul,"webkitTransitionEnd",this.__resizeHandler),z.bind(this.__ul,"transitionend",this.__resizeHandler),z.bind(this.__ul,"oTransitionEnd",this.__resizeHandler),this.onResize(),n.resizable&&XE(this),r=c(function(){yr&&localStorage.getItem(ls(t,"isLocal"))==="true"&&localStorage.setItem(ls(t,"gui"),JSON.stringify(t.getSaveObject()))},"saveToLocalStorage"),this.saveToLocalStorageIfPossible=r;function h(){var d=t.getRoot();d.width+=1,Z.defer(function(){d.width-=1})}c(h,"resetWidth"),n.parent||h()},"GUI");dt.toggleHide=function(){Ic=!Ic,Z.each(B_,function(s){s.domElement.style.display=Ic?"none":""})};dt.CLASS_AUTO_PLACE="a";dt.CLASS_AUTO_PLACE_CONTAINER="ac";dt.CLASS_MAIN="main";dt.CLASS_CONTROLLER_ROW="cr";dt.CLASS_TOO_TALL="taller-than-window";dt.CLASS_CLOSED="closed";dt.CLASS_CLOSE_BUTTON="close-button";dt.CLASS_CLOSE_TOP="close-top";dt.CLASS_CLOSE_BOTTOM="close-bottom";dt.CLASS_DRAG="drag";dt.DEFAULT_WIDTH=245;dt.TEXT_CLOSED="Close Controls";dt.TEXT_OPEN="Open Controls";dt._keydownHandler=function(s){document.activeElement.type!=="text"&&(s.which===$g||s.keyCode===$g)&&dt.toggleHide()};z.bind(window,"keydown",dt._keydownHandler,!1);Z.extend(dt.prototype,{add:c(function(e,t){return Ar(this,e,t,{factoryArgs:Array.prototype.slice.call(arguments,2)})},"add"),addColor:c(function(e,t){return Ar(this,e,t,{color:!0})},"addColor"),remove:c(function(e){this.__ul.removeChild(e.__li),this.__controllers.splice(this.__controllers.indexOf(e),1);var t=this;Z.defer(function(){t.onResize()})},"remove"),destroy:c(function(){if(this.parent)throw new Error("Only the root GUI should be removed with .destroy(). For subfolders, use gui.removeFolder(folder) instead.");this.autoPlace&&cs.removeChild(this.domElement);var e=this;Z.each(this.__folders,function(t){e.removeFolder(t)}),z.unbind(window,"keydown",dt._keydownHandler,!1),Zg(this)},"destroy"),addFolder:c(function(e){if(this.__folders[e]!==void 0)throw new Error('You already have a folder in this GUI by the name "'+e+'"');var t={name:e,parent:this};t.autoPlace=this.autoPlace,this.load&&this.load.folders&&this.load.folders[e]&&(t.closed=this.load.folders[e].closed,t.load=this.load.folders[e]);var n=new dt(t);this.__folders[e]=n;var i=ld(this,n.domElement);return z.addClass(i,"folder"),n},"addFolder"),removeFolder:c(function(e){this.__ul.removeChild(e.domElement.parentElement),delete this.__folders[e.name],this.load&&this.load.folders&&this.load.folders[e.name]&&delete this.load.folders[e.name],Zg(e);var t=this;Z.each(e.__folders,function(n){e.removeFolder(n)}),Z.defer(function(){t.onResize()})},"removeFolder"),open:c(function(){this.closed=!1},"open"),close:c(function(){this.closed=!0},"close"),hide:c(function(){this.domElement.style.display="none"},"hide"),show:c(function(){this.domElement.style.display=""},"show"),onResize:c(function(){var e=this.getRoot();if(e.scrollable){var t=z.getOffset(e.__ul).top,n=0;Z.each(e.__ul.childNodes,function(i){e.autoPlace&&i===e.__save_row||(n+=z.getHeight(i))}),window.innerHeight-t-Kg<n?(z.addClass(e.domElement,dt.CLASS_TOO_TALL),e.__ul.style.height=window.innerHeight-t-Kg+"px"):(z.removeClass(e.domElement,dt.CLASS_TOO_TALL),e.__ul.style.height="auto")}e.__resize_handle&&Z.defer(function(){e.__resize_handle.style.height=e.__ul.offsetHeight+"px"}),e.__closeButton&&(e.__closeButton.style.width=e.width+"px")},"onResize"),onResizeDebounced:Z.debounce(function(){this.onResize()},50),remember:c(function(){if(Z.isUndefined(Tr)&&(Tr=new zE,Tr.domElement.innerHTML=FE),this.parent)throw new Error("You can only call remember on a top level GUI.");var e=this;Z.each(Array.prototype.slice.call(arguments),function(t){e.__rememberedObjects.length===0&&WE(e),e.__rememberedObjects.indexOf(t)===-1&&e.__rememberedObjects.push(t)}),this.autoPlace&&Qu(this,this.width)},"remember"),getRoot:c(function(){for(var e=this;e.parent;)e=e.parent;return e},"getRoot"),getSaveObject:c(function(){var e=this.load;return e.closed=this.closed,this.__rememberedObjects.length>0&&(e.preset=this.preset,e.remembered||(e.remembered={}),e.remembered[this.preset]=Uo(this)),e.folders={},Z.each(this.__folders,function(t,n){e.folders[n]=t.getSaveObject()}),e},"getSaveObject"),save:c(function(){this.load.remembered||(this.load.remembered={}),this.load.remembered[this.preset]=Uo(this),Ju(this,!1),this.saveToLocalStorageIfPossible()},"save"),saveAs:c(function(e){this.load.remembered||(this.load.remembered={},this.load.remembered[Zr]=Uo(this,!0)),this.load.remembered[e]=Uo(this),this.preset=e,Zu(this,e,!0),this.saveToLocalStorageIfPossible()},"saveAs"),revert:c(function(e){Z.each(this.__controllers,function(t){this.getRoot().load.remembered?k_(e||this.getRoot(),t):t.setValue(t.initialValue),t.__onFinishChange&&t.__onFinishChange.call(t,t.getValue())},this),Z.each(this.__folders,function(t){t.revert(t)}),e||Ju(this.getRoot(),!1)},"revert"),listen:c(function(e){var t=this.__listening.length===0;this.__listening.push(e),t&&H_(this.__listening)},"listen"),updateDisplay:c(function(){Z.each(this.__controllers,function(e){e.updateDisplay()}),Z.each(this.__folders,function(e){e.updateDisplay()})},"updateDisplay")});function ld(s,e,t){var n=document.createElement("li");return e&&n.appendChild(e),t?s.__ul.insertBefore(n,t):s.__ul.appendChild(n),s.onResize(),n}c(ld,"addRow");function Zg(s){z.unbind(window,"resize",s.__resizeHandler),s.saveToLocalStorageIfPossible&&z.unbind(window,"unload",s.saveToLocalStorageIfPossible)}c(Zg,"removeListeners");function Ju(s,e){var t=s.__preset_select[s.__preset_select.selectedIndex];e?t.innerHTML=t.value+"*":t.innerHTML=t.value}c(Ju,"markPresetModified");function GE(s,e,t){if(t.__li=e,t.__gui=s,Z.extend(t,{options:c(function(o){if(arguments.length>1){var a=t.__li.nextElementSibling;return t.remove(),Ar(s,t.object,t.property,{before:a,factoryArgs:[Z.toArray(arguments)]})}if(Z.isArray(o)||Z.isObject(o)){var l=t.__li.nextElementSibling;return t.remove(),Ar(s,t.object,t.property,{before:l,factoryArgs:[o]})}},"options"),name:c(function(o){return t.__li.firstElementChild.firstElementChild.innerHTML=o,t},"name"),listen:c(function(){return t.__gui.listen(t),t},"listen"),remove:c(function(){return t.__gui.remove(t),t},"remove")}),t instanceof $u){var n=new ba(t.object,t.property,{min:t.__min,max:t.__max,step:t.__step});Z.each(["updateDisplay","onChange","onFinishChange","step","min","max"],function(r){var o=t[r],a=n[r];t[r]=n[r]=function(){var l=Array.prototype.slice.call(arguments);return a.apply(n,l),o.apply(t,l)}}),z.addClass(e,"has-slider"),t.domElement.insertBefore(n.domElement,t.domElement.firstElementChild)}else if(t instanceof ba){var i=c(function(o){if(Z.isNumber(t.__min)&&Z.isNumber(t.__max)){var a=t.__li.firstElementChild.firstElementChild.innerHTML,l=t.__gui.__listening.indexOf(t)>-1;t.remove();var u=Ar(s,t.object,t.property,{before:t.__li.nextElementSibling,factoryArgs:[t.__min,t.__max,t.__step]});return u.name(a),l&&u.listen(),u}return o},"r");t.min=Z.compose(i,t.min),t.max=Z.compose(i,t.max)}else t instanceof N_?(z.bind(e,"click",function(){z.fakeEvent(t.__checkbox,"click")}),z.bind(t.__checkbox,"click",function(r){r.stopPropagation()})):t instanceof F_?(z.bind(e,"click",function(){z.fakeEvent(t.__button,"click")}),z.bind(e,"mouseover",function(){z.addClass(t.__button,"hover")}),z.bind(e,"mouseout",function(){z.removeClass(t.__button,"hover")})):t instanceof Ku&&(z.addClass(e,"color"),t.updateDisplay=Z.compose(function(r){return e.style.borderLeftColor=t.__color.toString(),r},t.updateDisplay),t.updateDisplay());t.setValue=Z.compose(function(r){return s.getRoot().__preset_select&&t.isModified()&&Ju(s.getRoot(),!0),r},t.setValue)}c(GE,"augmentController");function k_(s,e){var t=s.getRoot(),n=t.__rememberedObjects.indexOf(e.object);if(n!==-1){var i=t.__rememberedObjectIndecesToControllers[n];if(i===void 0&&(i={},t.__rememberedObjectIndecesToControllers[n]=i),i[e.property]=e,t.load&&t.load.remembered){var r=t.load.remembered,o=void 0;if(r[s.preset])o=r[s.preset];else if(r[Zr])o=r[Zr];else return;if(o[n]&&o[n][e.property]!==void 0){var a=o[n][e.property];e.initialValue=a,e.setValue(a)}}}}c(k_,"recallSavedValue");function Ar(s,e,t,n){if(e[t]===void 0)throw new Error('Object "'+e+'" has no property "'+t+'"');var i=void 0;if(n.color)i=new Ku(e,t);else{var r=[e,t].concat(n.factoryArgs);i=BE.apply(s,r)}n.before instanceof Wi&&(n.before=n.before.__li),k_(s,i),z.addClass(i.domElement,"c");var o=document.createElement("span");z.addClass(o,"property-name"),o.innerHTML=i.property;var a=document.createElement("div");a.appendChild(o),a.appendChild(i.domElement);var l=ld(s,a,n.before);return z.addClass(l,dt.CLASS_CONTROLLER_ROW),i instanceof Ku?z.addClass(l,"color"):z.addClass(l,RE(i.getValue())),GE(s,l,i),s.__controllers.push(i),i}c(Ar,"_add");function ls(s,e){return document.location.href+"."+e}c(ls,"getLocalStorageHash");function Zu(s,e,t){var n=document.createElement("option");n.innerHTML=e,n.value=e,s.__preset_select.appendChild(n),t&&(s.__preset_select.selectedIndex=s.__preset_select.length-1)}c(Zu,"addPresetOption");function Qg(s,e){e.style.display=s.useLocalStorage?"block":"none"}c(Qg,"showHideExplain");function WE(s){var e=s.__save_row=document.createElement("li");z.addClass(s.domElement,"has-save"),s.__ul.insertBefore(e,s.__ul.firstChild),z.addClass(e,"save-row");var t=document.createElement("span");t.innerHTML="&nbsp;",z.addClass(t,"button gears");var n=document.createElement("span");n.innerHTML="Save",z.addClass(n,"button"),z.addClass(n,"save");var i=document.createElement("span");i.innerHTML="New",z.addClass(i,"button"),z.addClass(i,"save-as");var r=document.createElement("span");r.innerHTML="Revert",z.addClass(r,"button"),z.addClass(r,"revert");var o=s.__preset_select=document.createElement("select");if(s.load&&s.load.remembered?Z.each(s.load.remembered,function(d,f){Zu(s,f,f===s.preset)}):Zu(s,Zr,!1),z.bind(o,"change",function(){for(var d=0;d<s.__preset_select.length;d++)s.__preset_select[d].innerHTML=s.__preset_select[d].value;s.preset=this.value}),e.appendChild(o),e.appendChild(t),e.appendChild(n),e.appendChild(i),e.appendChild(r),yr){var a=document.getElementById("dg-local-explain"),l=document.getElementById("dg-local-storage"),u=document.getElementById("dg-save-locally");u.style.display="block",localStorage.getItem(ls(s,"isLocal"))==="true"&&l.setAttribute("checked","checked"),Qg(s,a),z.bind(l,"change",function(){s.useLocalStorage=!s.useLocalStorage,Qg(s,a)})}var h=document.getElementById("dg-new-constructor");z.bind(h,"keydown",function(d){d.metaKey&&(d.which===67||d.keyCode===67)&&Tr.hide()}),z.bind(t,"click",function(){h.innerHTML=JSON.stringify(s.getSaveObject(),void 0,2),Tr.show(),h.focus(),h.select()}),z.bind(n,"click",function(){s.save()}),z.bind(i,"click",function(){var d=prompt("Enter a new preset name.");d&&s.saveAs(d)}),z.bind(r,"click",function(){s.revert()})}c(WE,"addSaveMenu");function XE(s){var e=void 0;s.__resize_handle=document.createElement("div"),Z.extend(s.__resize_handle.style,{width:"6px",marginLeft:"-3px",height:"200px",cursor:"ew-resize",position:"absolute"});function t(r){return r.preventDefault(),s.width+=e-r.clientX,s.onResize(),e=r.clientX,!1}c(t,"drag");function n(){z.removeClass(s.__closeButton,dt.CLASS_DRAG),z.unbind(window,"mousemove",t),z.unbind(window,"mouseup",n)}c(n,"dragStop");function i(r){return r.preventDefault(),e=r.clientX,z.addClass(s.__closeButton,dt.CLASS_DRAG),z.bind(window,"mousemove",t),z.bind(window,"mouseup",n),!1}c(i,"dragStart"),z.bind(s.__resize_handle,"mousedown",i),z.bind(s.__closeButton,"mousedown",i),s.domElement.insertBefore(s.__resize_handle,s.domElement.firstElementChild)}c(XE,"addResizeHandle");function Qu(s,e){s.domElement.style.width=e+"px",s.__save_row&&s.autoPlace&&(s.__save_row.style.width=e+"px"),s.__closeButton&&(s.__closeButton.style.width=e+"px")}c(Qu,"setWidth");function Uo(s,e){var t={};return Z.each(s.__rememberedObjects,function(n,i){var r={},o=s.__rememberedObjectIndecesToControllers[i];Z.each(o,function(a,l){r[l]=e?a.initialValue:a.getValue()}),t[i]=r}),t}c(Uo,"getCurrentPreset");function jE(s){for(var e=0;e<s.__preset_select.length;e++)s.__preset_select[e].value===s.preset&&(s.__preset_select.selectedIndex=e)}c(jE,"setPresetSelectIndex");function H_(s){s.length!==0&&HE.call(window,function(){H_(s)}),Z.each(s,function(e){e.updateDisplay()})}c(H_,"updateDisplays");var qE=dt;const Ip=class Ip{constructor(e){this.globeRadius=e,this.gui=new qE}addObjectOptions(e,t,{lat:n,lng:i,rotation:r,landHeight:o},a){const l=this.gui.__folders[e]??this.gui.addFolder(e),u=t.getObject(),h=l.addFolder(u.name+a);h.add(u,"visible"),h.add({scale:u.scale.x},"scale",0,5).onChange(v=>{u.scale.setScalar(v)});const d=u.clone();r&&d.rotateY(-dn.degToRad(r));const f=d.rotation.clone(),p={y:r??0};h.add(p,"y",0,360).name("rotation").onChange(v=>{u.rotation.copy(f),u.rotateY(dn.degToRad(v))});const _={lat:n,lng:i,landHeight:o??0};Object.keys(_).forEach(v=>{h.add(_,v,-360,360,1).onChange(()=>{t.applyLatLng(this.globeRadius+(_.landHeight??0),_.lat,_.lng),f.copy(u.rotation),u.rotateY(dn.degToRad(p.y))})})}};c(Ip,"ContinentDebugControls");let eh=Ip;const Dp=class Dp{constructor(e,t=!1){this.properties=e,t&&(this.debugControls=new eh(e.globeRadius)),this.continent=this.constructContinent(),this.continent.name&&this.continent.traverse(n=>{n.userData.continent=this.continent.name})}getObject(){return this.continent}addTo(e){e.add(this.continent)}constructObject(e,t){const{lat:n,lng:i,rotation:r,landHeight:o=Ie.LevelOne,...a}=t,l=new e({...a});return l.applyLatLng(this.properties.globeRadius+o,n,i),r!==void 0&&l.getObject().rotateY(dn.degToRad(r)),l}constructObjectsGroup(e,t,n){const i=new mt;return i.name=t,n.forEach((r,o)=>{const a=this.constructObject(e,r);i.add(a.getObject()),this.debugControls?.addObjectOptions(t,a,r,o)}),i}constructLands(e,t){return this.constructObjectsGroup(Xu,e,t)}constructTrees(e,t){return this.constructObjectsGroup(qu,e,t)}constructMountains(e,t){return this.constructObjectsGroup(ju,e,t)}constructHouses(e,t){return this.constructObjectsGroup(Gu,e,t)}constructBuildings(e,t){return this.constructObjectsGroup(Vu,e,t)}constructHuts(e,t){return this.constructObjectsGroup(Wu,e,t)}};c(Dp,"BaseContinent");let Vi=Dp;const YE=[{scale:1.5,landHeight:Ie.LevelTwo,lat:20,lng:100,rotation:10},{scale:1,landHeight:Ie.LevelOne,lat:40,lng:90,rotation:0}],$E=[{scale:1.2,landHeight:Ie.LevelOne,lat:18,lng:88},{scale:1.5,landHeight:Ie.LevelOne,lat:23,lng:88},{scale:2,landHeight:Ie.LevelOne,lat:21,lng:83},{scale:1.2,landHeight:Ie.LevelOne,lat:40,lng:110},{scale:1.5,landHeight:Ie.LevelOne,lat:40,lng:105},{scale:2,landHeight:Ie.LevelOne,lat:35,lng:110}];var Ps;let KE=(Ps=class extends Vi{constructContinent(){const e=new mt;return e.name="aboutContinent",e.add(this.constructTrees("aboutTrees",$E)),e.add(this.constructHouses("aboutHouses",YE)),e}},c(Ps,"AboutContinent"),Ps);const JE=[{size:15,lat:53,lng:4,rotation:7,landHeight:Ie.LevelTwo-.75}],ZE=[{scale:1,lat:48,lng:-20,landHeight:Ie.LevelTwo},{scale:1.2,lat:31,lng:-14,rotation:36,landHeight:Ie.LevelOne}],QE=[{scale:1,lat:52,lng:-12,landHeight:Ie.LevelTwo},{scale:1.2,lat:48,lng:-10,landHeight:Ie.LevelTwo},{scale:1.2,lat:32,lng:-6,landHeight:Ie.LevelOne},{scale:1.5,lat:36,lng:-6,landHeight:Ie.LevelOne},{scale:1,lat:33,lng:-2,landHeight:Ie.LevelOne}],ew=[{lat:40,lng:18,landHeight:Ie.LevelOne},{lat:35,lng:8,landHeight:Ie.LevelOne}];var Ls;let tw=(Ls=class extends Vi{constructContinent(){const e=new mt;return e.name="projectsContinent",e.add(this.constructMountains("projectsMountains",JE)),e.add(this.constructHouses("projectsHouses",ZE)),e.add(this.constructTrees("projectsTrees",QE)),e.add(this.constructHuts("projectsHuts",ew)),e}},c(Ls,"ProjectsContinent"),Ls);function e_(s,e){if(e===c0)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(e===Ml||e===__){let t=s.getIndex();if(t===null){const o=[],a=s.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);s.setIndex(o),t=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}const n=t.count-2,i=[];if(e===Ml)for(let o=1;o<=n;o++)i.push(t.getX(0)),i.push(t.getX(o)),i.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(i.push(t.getX(o)),i.push(t.getX(o+1)),i.push(t.getX(o+2))):(i.push(t.getX(o+2)),i.push(t.getX(o+1)),i.push(t.getX(o)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=s.clone();return r.setIndex(i),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),s}c(e_,"toTrianglesDrawMode");const Op=class Op extends _i{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new rh(t)}),this.register(function(t){return new oh(t)}),this.register(function(t){return new mh(t)}),this.register(function(t){return new gh(t)}),this.register(function(t){return new _h(t)}),this.register(function(t){return new ch(t)}),this.register(function(t){return new lh(t)}),this.register(function(t){return new uh(t)}),this.register(function(t){return new hh(t)}),this.register(function(t){return new sh(t)}),this.register(function(t){return new dh(t)}),this.register(function(t){return new ah(t)}),this.register(function(t){return new ph(t)}),this.register(function(t){return new fh(t)}),this.register(function(t){return new nh(t)}),this.register(function(t){return new vh(t)}),this.register(function(t){return new xh(t)})}load(e,t,n,i){const r=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const u=Fi.extractUrlBase(e);o=Fi.resolveURL(u,this.path)}else o=Fi.extractUrlBase(e);this.manager.itemStart(e);const a=c(function(u){i?i(u):console.error(u),r.manager.itemError(e),r.manager.itemEnd(e)},"_onError"),l=new ma(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(u){try{r.parse(u,o,function(h){t(h),r.manager.itemEnd(e)},a)}catch(h){a(h)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let r;const o={},a={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===z_){try{o[Ze.KHR_BINARY_GLTF]=new yh(e)}catch(d){i&&i(d);return}r=JSON.parse(o[Ze.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const u=new Ah(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});u.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){const d=this.pluginCallbacks[h](u);d.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[d.name]=d,o[d.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){const d=r.extensionsUsed[h],f=r.extensionsRequired||[];switch(d){case Ze.KHR_MATERIALS_UNLIT:o[d]=new ih;break;case Ze.KHR_DRACO_MESH_COMPRESSION:o[d]=new bh(r,this.dracoLoader);break;case Ze.KHR_TEXTURE_TRANSFORM:o[d]=new Sh;break;case Ze.KHR_MESH_QUANTIZATION:o[d]=new Mh;break;default:f.indexOf(d)>=0&&a[d]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+d+'".')}}u.setExtensions(o),u.setPlugins(a),u.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,r){n.parse(e,t,i,r)})}};c(Op,"GLTFLoader");let th=Op;function nw(){let s={};return{get:c(function(e){return s[e]},"get"),add:c(function(e,t){s[e]=t},"add"),remove:c(function(e){delete s[e]},"remove"),removeAll:c(function(){s={}},"removeAll")}}c(nw,"GLTFRegistry");const Ze={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},Np=class Np{constructor(e){this.parser=e,this.name=Ze.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let u;const h=new ze(16777215);l.color!==void 0&&h.setRGB(l.color[0],l.color[1],l.color[2],Gt);const d=l.range!==void 0?l.range:0;switch(l.type){case"directional":u=new ga(h),u.target.position.set(0,0,-1),u.add(u.target);break;case"point":u=new uu(h),u.distance=d;break;case"spot":u=new cu(h),u.distance=d,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,u.angle=l.spot.outerConeAngle,u.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,u.target.position.set(0,0,-1),u.add(u.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return u.position.set(0,0,0),Vn(u,l),l.intensity!==void 0&&(u.intensity=l.intensity),u.name=t.createUniqueName(l.name||"light_"+e),i=Promise.resolve(u),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,r=n.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return n._getNodeRef(t.cache,a,l)})}};c(Np,"GLTFLightsExtension");let nh=Np;const Up=class Up{constructor(){this.name=Ze.KHR_MATERIALS_UNLIT}getMaterialType(){return Xn}extendParams(e,t,n){const i=[];e.color=new ze(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],Gt),e.opacity=o[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",r.baseColorTexture,Lt))}return Promise.all(i)}};c(Up,"GLTFMaterialsUnlitExtension");let ih=Up;const Fp=class Fp{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}};c(Fp,"GLTFMaterialsEmissiveStrengthExtension");let sh=Fp;const Bp=class Bp{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:mn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new le(a,a)}return Promise.all(r)}};c(Bp,"GLTFMaterialsClearcoatExtension");let rh=Bp;const kp=class kp{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_DISPERSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:mn}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}};c(kp,"GLTFMaterialsDispersionExtension");let oh=kp;const Hp=class Hp{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:mn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}};c(Hp,"GLTFMaterialsIridescenceExtension");let ah=Hp;const zp=class zp{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:mn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[];t.sheenColor=new ze(0,0,0),t.sheenRoughness=0,t.sheen=1;const o=i.extensions[this.name];if(o.sheenColorFactor!==void 0){const a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],Gt)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,Lt)),o.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}};c(zp,"GLTFMaterialsSheenExtension");let ch=zp;const Vp=class Vp{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:mn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(r)}};c(Vp,"GLTFMaterialsTransmissionExtension");let lh=Vp;const Gp=class Gp{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:mn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return t.attenuationColor=new ze().setRGB(a[0],a[1],a[2],Gt),Promise.all(r)}};c(Gp,"GLTFMaterialsVolumeExtension");let uh=Gp;const Wp=class Wp{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:mn}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}};c(Wp,"GLTFMaterialsIorExtension");let hh=Wp;const Xp=class Xp{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:mn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return t.specularColor=new ze().setRGB(a[0],a[1],a[2],Gt),o.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,Lt)),Promise.all(r)}};c(Xp,"GLTFMaterialsSpecularExtension");let dh=Xp;const jp=class jp{constructor(e){this.parser=e,this.name=Ze.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:mn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(r)}};c(jp,"GLTFMaterialsBumpExtension");let fh=jp;const qp=class qp{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:mn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(r)}};c(qp,"GLTFMaterialsAnisotropyExtension");let ph=qp;const Yp=class Yp{constructor(e){this.parser=e,this.name=Ze.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const r=i.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}};c(Yp,"GLTFTextureBasisUExtension");let mh=Yp;const $p=class $p{constructor(e){this.parser=e,this.name=Ze.EXT_TEXTURE_WEBP}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=i.images[o.source];let l=n.textureLoader;if(a.uri){const u=n.options.manager.getHandler(a.uri);u!==null&&(l=u)}return n.loadTextureImage(e,o.source,l)}};c($p,"GLTFTextureWebPExtension");let gh=$p;const Kp=class Kp{constructor(e){this.parser=e,this.name=Ze.EXT_TEXTURE_AVIF}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=i.images[o.source];let l=n.textureLoader;if(a.uri){const u=n.options.manager.getHandler(a.uri);u!==null&&(l=u)}return n.loadTextureImage(e,o.source,l)}};c(Kp,"GLTFTextureAVIFExtension");let _h=Kp;const Jp=class Jp{constructor(e){this.name=Ze.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){const l=i.byteOffset||0,u=i.byteLength||0,h=i.count,d=i.byteStride,f=new Uint8Array(a,l,u);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(h,d,f,i.mode,i.filter).then(function(p){return p.buffer}):o.ready.then(function(){const p=new ArrayBuffer(h*d);return o.decodeGltfBuffer(new Uint8Array(p),h,d,f,i.mode,i.filter),p})})}else return null}};c(Jp,"GLTFMeshoptCompression");let vh=Jp;const Zp=class Zp{constructor(e){this.name=Ze.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const u of i.primitives)if(u.mode!==ln.TRIANGLES&&u.mode!==ln.TRIANGLE_STRIP&&u.mode!==ln.TRIANGLE_FAN&&u.mode!==void 0)return null;const o=n.extensions[this.name].attributes,a=[],l={};for(const u in o)a.push(this.parser.getDependency("accessor",o[u]).then(h=>(l[u]=h,l[u])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(u=>{const h=u.pop(),d=h.isGroup?h.children:[h],f=u[0].count,p=[];for(const _ of d){const v=new je,g=new R,m=new wt,A=new R(1,1,1),E=new Nl(_.geometry,_.material,f);for(let y=0;y<f;y++)l.TRANSLATION&&g.fromBufferAttribute(l.TRANSLATION,y),l.ROTATION&&m.fromBufferAttribute(l.ROTATION,y),l.SCALE&&A.fromBufferAttribute(l.SCALE,y),E.setMatrixAt(y,v.compose(g,m,A));for(const y in l)if(y==="_COLOR_0"){const C=l[y];E.instanceColor=new Hr(C.array,C.itemSize,C.normalized)}else y!=="TRANSLATION"&&y!=="ROTATION"&&y!=="SCALE"&&_.geometry.setAttribute(y,l[y]);yt.prototype.copy.call(E,_),this.parser.assignFinalMaterial(E),p.push(E)}return h.isGroup?(h.clear(),h.add(...p),h):p[0]}))}};c(Zp,"GLTFMeshGpuInstancing");let xh=Zp;const z_="glTF",mr=12,t_={JSON:1313821514,BIN:5130562},Qp=class Qp{constructor(e){this.name=Ze.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,mr),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==z_)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-mr,r=new DataView(e,mr);let o=0;for(;o<i;){const a=r.getUint32(o,!0);o+=4;const l=r.getUint32(o,!0);if(o+=4,l===t_.JSON){const u=new Uint8Array(e,mr+o,a);this.content=n.decode(u)}else if(l===t_.BIN){const u=mr+o;this.body=e.slice(u,u+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}};c(Qp,"GLTFBinaryExtension");let yh=Qp;const em=class em{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Ze.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},u={};for(const h in o){const d=wh[h]||h.toLowerCase();a[d]=o[h]}for(const h in e.attributes){const d=wh[h]||h.toLowerCase();if(o[h]!==void 0){const f=n.accessors[e.attributes[h]],p=ys[f.componentType];u[d]=p.name,l[d]=f.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(d,f){i.decodeDracoFile(h,function(p){for(const _ in p.attributes){const v=p.attributes[_],g=l[_];g!==void 0&&(v.normalized=g)}d(p)},a,u,Gt,f)})})}};c(em,"GLTFDracoMeshCompressionExtension");let bh=em;const tm=class tm{constructor(){this.name=Ze.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}};c(tm,"GLTFTextureTransformExtension");let Sh=tm;const nm=class nm{constructor(){this.name=Ze.KHR_MESH_QUANTIZATION}};c(nm,"GLTFMeshQuantizationExtension");let Mh=nm;const im=class im extends zi{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i*3+i;for(let o=0;o!==i;o++)t[o]=n[r+o];return t}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,u=a*3,h=i-t,d=(n-t)/h,f=d*d,p=f*d,_=e*u,v=_-u,g=-2*p+3*f,m=p-f,A=1-g,E=m-f+d;for(let y=0;y!==a;y++){const C=o[v+y+a],I=o[v+y+l]*h,P=o[_+y+a],D=o[_+y]*h;r[y]=A*C+E*I+g*P+m*D}return r}};c(im,"GLTFCubicSplineInterpolant");let Sa=im;const iw=new wt,sm=class sm extends Sa{interpolate_(e,t,n,i){const r=super.interpolate_(e,t,n,i);return iw.fromArray(r).normalize().toArray(r),r}};c(sm,"GLTFCubicSplineQuaternionInterpolant");let Eh=sm;const ln={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},ys={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},n_={9728:Vt,9729:en,9984:l_,9985:Fo,9986:gr,9987:Wn},i_={33071:ai,33648:Wo,10497:Zs},Dc={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},wh={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},ii={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},sw={CUBICSPLINE:void 0,LINEAR:Ur,STEP:Nr},Oc={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function rw(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new $r({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Yn})),s.DefaultMaterial}c(rw,"createDefaultMaterial");function Pi(s,e,t){for(const n in t.extensions)s[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}c(Pi,"addUnknownExtensionsToUserData");function Vn(s,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(s.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}c(Vn,"assignExtrasToUserData");function ow(s,e,t){let n=!1,i=!1,r=!1;for(let u=0,h=e.length;u<h;u++){const d=e[u];if(d.POSITION!==void 0&&(n=!0),d.NORMAL!==void 0&&(i=!0),d.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(s);const o=[],a=[],l=[];for(let u=0,h=e.length;u<h;u++){const d=e[u];if(n){const f=d.POSITION!==void 0?t.getDependency("accessor",d.POSITION):s.attributes.position;o.push(f)}if(i){const f=d.NORMAL!==void 0?t.getDependency("accessor",d.NORMAL):s.attributes.normal;a.push(f)}if(r){const f=d.COLOR_0!==void 0?t.getDependency("accessor",d.COLOR_0):s.attributes.color;l.push(f)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(u){const h=u[0],d=u[1],f=u[2];return n&&(s.morphAttributes.position=h),i&&(s.morphAttributes.normal=d),r&&(s.morphAttributes.color=f),s.morphTargetsRelative=!0,s})}c(ow,"addMorphTargets");function aw(s,e){if(s.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)s.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(s.morphTargetInfluences.length===t.length){s.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)s.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}c(aw,"updateMorphTargets");function cw(s){let e;const t=s.extensions&&s.extensions[Ze.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Nc(t.attributes):e=s.indices+":"+Nc(s.attributes)+":"+s.mode,s.targets!==void 0)for(let n=0,i=s.targets.length;n<i;n++)e+=":"+Nc(s.targets[n]);return e}c(cw,"createPrimitiveKey");function Nc(s){let e="";const t=Object.keys(s).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+s[t[n]]+";";return e}c(Nc,"createAttributesKey");function Th(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}c(Th,"getNormalizedComponentScale");function lw(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":s.search(/\.ktx2($|\?)/i)>0||s.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}c(lw,"getImageURIMimeType");const uw=new je,rm=class rm{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new nw,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,r=!1,o=-1;if(typeof navigator<"u"){const a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;const l=a.match(/Version\/(\d+)/);i=n&&l?parseInt(l[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||r&&o<98?this.textureLoader=new ou(this.options.manager):this.textureLoader=new fu(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new ma(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){const a={scene:o[0][i.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:i.asset,parser:n,userData:{}};return Pi(r,a,i),Vn(a,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){for(const l of a.scenes)l.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=t.length;i<r;i++){const o=t[i].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let i=0,r=e.length;i<r;i++){const o=e[i];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),r=c((o,a)=>{const l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(const[u,h]of o.children.entries())r(h,a.children[u])},"updateMappings");return r(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const r=e(t[i]);r&&n.push(r)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(r,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Ze.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(r,o){n.load(Fi.resolveURL(t.uri,i.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const o=Dc[i.type],a=ys[i.componentType],l=i.normalized===!0,u=new a(i.count*o);return Promise.resolve(new Ot(u,o,l))}const r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(o){const a=o[0],l=Dc[i.type],u=ys[i.componentType],h=u.BYTES_PER_ELEMENT,d=h*l,f=i.byteOffset||0,p=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,_=i.normalized===!0;let v,g;if(p&&p!==d){const m=Math.floor(f/p),A="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+m+":"+i.count;let E=t.cache.get(A);E||(v=new u(a,m*p,i.count*p/h),E=new Ll(v,p/h),t.cache.add(A,E)),g=new Il(E,l,f%p/h,_)}else a===null?v=new u(i.count*l):v=new u(a,f,i.count*l),g=new Ot(v,l,_);if(i.sparse!==void 0){const m=Dc.SCALAR,A=ys[i.sparse.indices.componentType],E=i.sparse.indices.byteOffset||0,y=i.sparse.values.byteOffset||0,C=new A(o[1],E,i.sparse.count*m),I=new u(o[2],y,i.sparse.count*l);a!==null&&(g=new Ot(g.array.slice(),g.itemSize,g.normalized)),g.normalized=!1;for(let P=0,D=C.length;P<D;P++){const w=C[P];if(g.setX(w,I[P*l]),l>=2&&g.setY(w,I[P*l+1]),l>=3&&g.setZ(w,I[P*l+2]),l>=4&&g.setW(w,I[P*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}g.normalized=_}return g})}loadTexture(e){const t=this.json,n=this.options,r=t.textures[e].source,o=t.images[r];let a=this.textureLoader;if(o.uri){const l=n.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){const i=this,r=this.json,o=r.textures[e],a=r.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];const u=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=o.name||a.name||"",h.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(h.name=a.uri);const f=(r.samplers||{})[o.sampler]||{};return h.magFilter=n_[f.magFilter]||en,h.minFilter=n_[f.minFilter]||Wn,h.wrapS=i_[f.wrapS]||Zs,h.wrapT=i_[f.wrapT]||Zs,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==Vt&&h.minFilter!==en,i.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[l]=u,u}loadImageSource(e,t){const n=this,i=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(d=>d.clone());const o=i.images[e],a=self.URL||self.webkitURL;let l=o.uri||"",u=!1;if(o.bufferView!==void 0)l=n.getDependency("bufferView",o.bufferView).then(function(d){u=!0;const f=new Blob([d],{type:o.mimeType});return l=a.createObjectURL(f),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const h=Promise.resolve(l).then(function(d){return new Promise(function(f,p){let _=f;t.isImageBitmapLoader===!0&&(_=c(function(v){const g=new Nt(v);g.needsUpdate=!0,f(g)},"onLoad")),t.load(Fi.resolveURL(d,r.path),_,void 0,p)})}).then(function(d){return u===!0&&a.revokeObjectURL(l),Vn(d,o),d.userData.mimeType=o.mimeType||lw(o.uri),d}).catch(function(d){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),d});return this.sourceCache[e]=h,h}assignTexture(e,t,n,i){const r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[Ze.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[Ze.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const l=r.associations.get(o);o=r.extensions[Ze.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,l)}}return i!==void 0&&(o.colorSpace=i),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new Gr,tn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(a,l)),n=l}else if(e.isLine){const a="LineBasicMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new ea,tn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(a,l)),n=l}if(i||r||o){let a="ClonedMaterial:"+n.uuid+":";i&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=n.clone(),r&&(l.vertexColors=!0),o&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return $r}loadMaterial(e){const t=this,n=this.json,i=this.extensions,r=n.materials[e];let o;const a={},l=r.extensions||{},u=[];if(l[Ze.KHR_MATERIALS_UNLIT]){const d=i[Ze.KHR_MATERIALS_UNLIT];o=d.getMaterialType(),u.push(d.extendParams(a,r,t))}else{const d=r.pbrMetallicRoughness||{};if(a.color=new ze(1,1,1),a.opacity=1,Array.isArray(d.baseColorFactor)){const f=d.baseColorFactor;a.color.setRGB(f[0],f[1],f[2],Gt),a.opacity=f[3]}d.baseColorTexture!==void 0&&u.push(t.assignTexture(a,"map",d.baseColorTexture,Lt)),a.metalness=d.metallicFactor!==void 0?d.metallicFactor:1,a.roughness=d.roughnessFactor!==void 0?d.roughnessFactor:1,d.metallicRoughnessTexture!==void 0&&(u.push(t.assignTexture(a,"metalnessMap",d.metallicRoughnessTexture)),u.push(t.assignTexture(a,"roughnessMap",d.metallicRoughnessTexture))),o=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),u.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=xn);const h=r.alphaMode||Oc.OPAQUE;if(h===Oc.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,h===Oc.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==Xn&&(u.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new le(1,1),r.normalTexture.scale!==void 0)){const d=r.normalTexture.scale;a.normalScale.set(d,d)}if(r.occlusionTexture!==void 0&&o!==Xn&&(u.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==Xn){const d=r.emissiveFactor;a.emissive=new ze().setRGB(d[0],d[1],d[2],Gt)}return r.emissiveTexture!==void 0&&o!==Xn&&u.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,Lt)),Promise.all(u).then(function(){const d=new o(a);return r.name&&(d.name=r.name),Vn(d,r),t.associations.set(d,{materials:e}),r.extensions&&Pi(i,d,r),d})}createUniqueName(e){const t=pt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function r(a){return n[Ze.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return s_(l,a,t)})}c(r,"createDracoPrimitive");const o=[];for(let a=0,l=e.length;a<l;a++){const u=e[a],h=cw(u),d=i[h];if(d)o.push(d.promise);else{let f;u.extensions&&u.extensions[Ze.KHR_DRACO_MESH_COMPRESSION]?f=r(u):f=s_(new qt,u,t),i[h]={primitive:u,promise:f},o.push(f)}}return Promise.all(o)}loadMesh(e){const t=this,n=this.json,i=this.extensions,r=n.meshes[e],o=r.primitives,a=[];for(let l=0,u=o.length;l<u;l++){const h=o[l].material===void 0?rw(this.cache):this.getDependency("material",o[l].material);a.push(h)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(l){const u=l.slice(0,l.length-1),h=l[l.length-1],d=[];for(let p=0,_=h.length;p<_;p++){const v=h[p],g=o[p];let m;const A=u[p];if(g.mode===ln.TRIANGLES||g.mode===ln.TRIANGLE_STRIP||g.mode===ln.TRIANGLE_FAN||g.mode===void 0)m=r.isSkinnedMesh===!0?new Dl(v,A):new ut(v,A),m.isSkinnedMesh===!0&&m.normalizeSkinWeights(),g.mode===ln.TRIANGLE_STRIP?m.geometry=e_(m.geometry,__):g.mode===ln.TRIANGLE_FAN&&(m.geometry=e_(m.geometry,Ml));else if(g.mode===ln.LINES)m=new Ul(v,A);else if(g.mode===ln.LINE_STRIP)m=new Vr(v,A);else if(g.mode===ln.LINE_LOOP)m=new Fl(v,A);else if(g.mode===ln.POINTS)m=new ia(v,A);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+g.mode);Object.keys(m.geometry.morphAttributes).length>0&&aw(m,r),m.name=t.createUniqueName(r.name||"mesh_"+e),Vn(m,r),g.extensions&&Pi(i,m,g),t.assignFinalMaterial(m),d.push(m)}for(let p=0,_=d.length;p<_;p++)t.associations.set(d[p],{meshes:e,primitives:p});if(d.length===1)return r.extensions&&Pi(i,d[0],r),d[0];const f=new mt;r.extensions&&Pi(i,f,r),t.associations.set(f,{meshes:e});for(let p=0,_=d.length;p<_;p++)f.add(d[p]);return f})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Dt(dn.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new Jr(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Vn(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,r=t.joints.length;i<r;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const r=i.pop(),o=i,a=[],l=[];for(let u=0,h=o.length;u<h;u++){const d=o[u];if(d){a.push(d);const f=new je;r!==null&&f.fromArray(r.array,u*16),l.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[u])}return new Ol(a,l)})}loadAnimation(e){const t=this.json,n=this,i=t.animations[e],r=i.name?i.name:"animation_"+e,o=[],a=[],l=[],u=[],h=[];for(let d=0,f=i.channels.length;d<f;d++){const p=i.channels[d],_=i.samplers[p.sampler],v=p.target,g=v.node,m=i.parameters!==void 0?i.parameters[_.input]:_.input,A=i.parameters!==void 0?i.parameters[_.output]:_.output;v.node!==void 0&&(o.push(this.getDependency("node",g)),a.push(this.getDependency("accessor",m)),l.push(this.getDependency("accessor",A)),u.push(_),h.push(v))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(u),Promise.all(h)]).then(function(d){const f=d[0],p=d[1],_=d[2],v=d[3],g=d[4],m=[];for(let A=0,E=f.length;A<E;A++){const y=f[A],C=p[A],I=_[A],P=v[A],D=g[A];if(y===void 0)continue;y.updateMatrix&&y.updateMatrix();const w=n._createAnimationTracks(y,C,I,P,D);if(w)for(let M=0;M<w.length;M++)m.push(w[M])}return new nu(r,void 0,m)})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){const o=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,u=i.weights.length;l<u;l++)a.morphTargetInfluences[l]=i.weights[l]}),o})}loadNode(e){const t=this.json,n=this,i=t.nodes[e],r=n._loadNodeShallow(e),o=[],a=i.children||[];for(let u=0,h=a.length;u<h;u++)o.push(n.getDependency("node",a[u]));const l=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([r,Promise.all(o),l]).then(function(u){const h=u[0],d=u[1],f=u[2];f!==null&&h.traverse(function(p){p.isSkinnedMesh&&p.bind(f,uw)});for(let p=0,_=d.length;p<_;p++)h.add(d[p]);return h})}_loadNodeShallow(e){const t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const r=t.nodes[e],o=r.name?i.createUniqueName(r.name):"",a=[],l=i._invokeOne(function(u){return u.createNodeMesh&&u.createNodeMesh(e)});return l&&a.push(l),r.camera!==void 0&&a.push(i.getDependency("camera",r.camera).then(function(u){return i._getNodeRef(i.cameraCache,r.camera,u)})),i._invokeAll(function(u){return u.createNodeAttachment&&u.createNodeAttachment(e)}).forEach(function(u){a.push(u)}),this.nodeCache[e]=Promise.all(a).then(function(u){let h;if(r.isBone===!0?h=new Zo:u.length>1?h=new mt:u.length===1?h=u[0]:h=new yt,h!==u[0])for(let d=0,f=u.length;d<f;d++)h.add(u[d]);if(r.name&&(h.userData.name=r.name,h.name=o),Vn(h,r),r.extensions&&Pi(n,h,r),r.matrix!==void 0){const d=new je;d.fromArray(r.matrix),h.applyMatrix4(d)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);if(!i.associations.has(h))i.associations.set(h,{});else if(r.mesh!==void 0&&i.meshCache.refs[r.mesh]>1){const d=i.associations.get(h);i.associations.set(h,{...d})}return i.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,r=new mt;n.name&&(r.name=i.createUniqueName(n.name)),Vn(r,n),n.extensions&&Pi(t,r,n);const o=n.nodes||[],a=[];for(let l=0,u=o.length;l<u;l++)a.push(i.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let h=0,d=l.length;h<d;h++)r.add(l[h]);const u=c(h=>{const d=new Map;for(const[f,p]of i.associations)(f instanceof tn||f instanceof Nt)&&d.set(f,p);return h.traverse(f=>{const p=i.associations.get(f);p!=null&&d.set(f,p)}),d},"reduceAssociations");return i.associations=u(r),r})}_createAnimationTracks(e,t,n,i,r){const o=[],a=e.name?e.name:e.uuid,l=[];ii[r.path]===ii.weights?e.traverse(function(f){f.morphTargetInfluences&&l.push(f.name?f.name:f.uuid)}):l.push(a);let u;switch(ii[r.path]){case ii.weights:u=fi;break;case ii.rotation:u=pi;break;case ii.translation:case ii.scale:u=gi;break;default:switch(n.itemSize){case 1:u=fi;break;case 2:case 3:default:u=gi;break}break}const h=i.interpolation!==void 0?sw[i.interpolation]:Ur,d=this._getArrayFromAccessor(n);for(let f=0,p=l.length;f<p;f++){const _=new u(l[f]+"."+ii[r.path],t.array,d,h);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(_),o.push(_)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=Th(t.constructor),i=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)i[r]=t[r]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=c(function(n){const i=this instanceof pi?Eh:Sa;return new i(this.times,this.values,this.getValueSize()/3,n)},"InterpolantFactoryMethodGLTFCubicSpline"),e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};c(rm,"GLTFParser");let Ah=rm;function hw(s,e,t){const n=e.attributes,i=new fn;if(n.POSITION!==void 0){const a=t.json.accessors[n.POSITION],l=a.min,u=a.max;if(l!==void 0&&u!==void 0){if(i.set(new R(l[0],l[1],l[2]),new R(u[0],u[1],u[2])),a.normalized){const h=Th(ys[a.componentType]);i.min.multiplyScalar(h),i.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const a=new R,l=new R;for(let u=0,h=r.length;u<h;u++){const d=r[u];if(d.POSITION!==void 0){const f=t.json.accessors[d.POSITION],p=f.min,_=f.max;if(p!==void 0&&_!==void 0){if(l.setX(Math.max(Math.abs(p[0]),Math.abs(_[0]))),l.setY(Math.max(Math.abs(p[1]),Math.abs(_[1]))),l.setZ(Math.max(Math.abs(p[2]),Math.abs(_[2]))),f.normalized){const v=Th(ys[f.componentType]);l.multiplyScalar(v)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(a)}s.boundingBox=i;const o=new nn;i.getCenter(o.center),o.radius=i.min.distanceTo(i.max)/2,s.boundingSphere=o}c(hw,"computeBounds");function s_(s,e,t){const n=e.attributes,i=[];function r(o,a){return t.getDependency("accessor",o).then(function(l){s.setAttribute(a,l)})}c(r,"assignAttributeAccessor");for(const o in n){const a=wh[o]||o.toLowerCase();a in s.attributes||i.push(r(n[o],a))}if(e.indices!==void 0&&!s.index){const o=t.getDependency("accessor",e.indices).then(function(a){s.setIndex(a)});i.push(o)}return tt.workingColorSpace!==Gt&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${tt.workingColorSpace}" not supported.`),Vn(s,e),hw(s,e,t),Promise.all(i).then(function(){return e.targets!==void 0?ow(s,e.targets,t):s})}c(s_,"addPrimitiveAttributes");const Ni=class Ni{constructor(){return this.prefix="LOGGER:",Ni.instance===void 0&&(Ni.instance=this),Ni.instance}static getInstance(){return new Ni}logInfo(e,...t){console.info(this.prefix,"[INFO]",e,...t)}logWarning(e,...t){console.warn(this.prefix,"[WARN]",e,...t)}logError(e,...t){console.error(this.prefix,"[ERROR]",e,...t)}};c(Ni,"Logger");let Qr=Ni;const ms=class ms{constructor(){return this.loader=new th,ms.instance==null&&(ms.instance=this),ms.instance}async loadFile(e){try{return(await this.loader.loadAsync(e)).scene}catch(t){throw Qr.getInstance().logError("Failed to load glTF file",e,`
`,t),t}}};c(ms,"GltfLoader");let Rh=ms;const dw=[{lat:33,lng:-77,rotation:30,landHeight:Ie.LevelOne},{scale:1.5,lat:30,lng:-72,landHeight:Ie.LevelOne},{scale:1.2,lat:26,lng:-68,landHeight:Ie.LevelOne},{lat:26,lng:-73,rotation:60,landHeight:Ie.LevelOne},{scale:.8,lat:31,lng:-67,landHeight:Ie.LevelOne},{scale:1,lat:12,lng:-79,landHeight:Ie.LevelTwo},{scale:1.2,lat:13,lng:-83,landHeight:Ie.LevelTwo}],fw=[{lat:21,lng:-83,rotation:65,landHeight:Ie.LevelTwo,floors:2},{lat:16,lng:-73,rotation:65,landHeight:Ie.LevelTwo}],pw=[{scale:.7,lat:-1,lng:-78,landHeight:Ie.LevelOne},{lat:1,lng:-84,landHeight:Ie.LevelOne},{lat:7,lng:-94,landHeight:Ie.LevelOne}];var Is;let mw=(Is=class extends Vi{constructContinent(){const e=new mt;return e.name="workContinent",e.add(this.constructTrees("workTrees",dw)),e.add(this.constructBuildings("workBuildings",fw)),e.add(this.constructHuts("workHuts",pw)),e}},c(Is,"WorkContinent"),Is);const gw=[{scale:1.1,size:20,lat:-29,lng:-142,rotation:70,height:15,landHeight:Ie.LevelOne-2}],_w=[{scale:1.2,lat:-11,lng:-158,landHeight:Ie.LevelOne},{lat:-16,lng:-158,landHeight:Ie.LevelOne},{scale:1.3,lat:-21,lng:-172,rotation:10,landHeight:Ie.LevelTwo},{scale:1.1,lat:-23,lng:-168,rotation:60,landHeight:Ie.LevelTwo},{lat:-21,lng:-177,rotation:30,landHeight:Ie.LevelTwo},{scale:1.2,lat:-25,lng:-174,landHeight:Ie.LevelTwo},{scale:1.5,lat:-50,lng:-142,landHeight:Ie.LevelOne},{scale:1.2,lat:-46,lng:-137,rotation:60,landHeight:Ie.LevelOne},{lat:-45,lng:-144,rotation:15,landHeight:Ie.LevelOne}],vw=[{lat:-16,lng:-153,rotation:20,landHeight:Ie.LevelOne},{scale:.8,lat:-14,lng:-163,rotation:45,landHeight:Ie.LevelOne}],xw=[{scale:1,lat:-37,lng:-164,rotation:30,landHeight:Ie.LevelTwo},{scale:.7,lat:-30,lng:-168,rotation:30,landHeight:Ie.LevelTwo}];var Ds;let yw=(Ds=class extends Vi{constructContinent(){const e=new mt;return e.name="lifeContinent",e.add(this.constructMountains("lifeMountains",gw)),e.add(this.constructTrees("lifeTrees",_w)),e.add(this.constructHouses("lifeHouses",vw)),e.add(this.constructBuildings("lifeBuildings",xw)),e}},c(Ds,"LifeContinent"),Ds);const bw=[{scale:1.2,lat:222,lng:-157,landHeight:Ie.LevelTwo},{lat:225,lng:-159,landHeight:Ie.LevelTwo},{scale:1.3,lat:-126,lng:-132,landHeight:Ie.LevelOne},{lat:-128,lng:-165,landHeight:Ie.LevelOne},{scale:.9,lat:-125,lng:-161,rotation:45,landHeight:Ie.LevelOne}],Sw=[{scale:1,lat:-140,lng:-167,rotation:120,landHeight:Ie.LevelTwo}],Mw=[{scale:1,lat:-133,lng:-147,rotation:70,landHeight:Ie.LevelTwo,floors:2}],Ew=[{lat:-50,lng:-5,landHeight:Ie.LevelOne}];var Os;let ww=(Os=class extends Vi{constructContinent(){const e=new mt;return e.name="connectContinent",e.add(this.constructTrees("connectTrees",bw)),e.add(this.constructHouses("connectHouses",Sw)),e.add(this.constructBuildings("connectBuildings",Mw)),e.add(this.constructHuts("connectHuts",Ew)),e}},c(Os,"ConnectContinent"),Os);const om=class om extends rn{constructObject(){const{starsCount:e,endRadius:t=3e3}=this.properties,n=4,i=new mt;i.name="galaxy";for(let r=0;r<n;r++){const o=this.constructStarsGroup(e/n,t);i.add(o)}return i}constructStarsGroup(e,t){const n=new qt;n.setAttribute("position",this.constructStarsPositions(e,t));const i=new Gr({color:Wt.star,size:5,map:this.createStarTexture(),transparent:!0,depthWrite:!1}),r=new ia(n,i);return r.name="stars",r}constructStarsPositions(e,t=3e3){const n=(this.properties.startRadius??700)+50,i=[];for(let r=0;r<e;r++){const o=new R;o.randomDirection(),o.multiplyScalar(dn.randFloat(n,t/2)),i.push(o.x,o.y,o.z)}return new Et(i,3)}createStarTexture(){const t=document.createElement("canvas");t.width=t.height=128;const n=t.getContext("2d"),i=128/2;n.beginPath(),n.arc(i,i,128/2,0,2*Math.PI,!1),n.closePath(),n.fillStyle="#ffffff",n.fill();const r=new Nt(t);return r.needsUpdate=!0,r}animateGalaxy(e){const t=this.object.children,n=.02,i=1e3,r=c((o,a=1)=>{const l={y:o.rotation.y+n*a},u=e.createTween(o.rotation,l,{duration:i});u.start(),u.onComplete(()=>{e.removeTween(u),r(o,a)})},"animateStarsGroup");for(let o=0;o<t.length;o++)r(t[o],o%2===0?1:-1)}};c(om,"Galaxy");let Ch=om;const r_=c((s,e=.1,t=document.body,n=.06)=>{let i;const r=new le,o=c(()=>{const{x:a,y:l}=s.position,{x:u,y:h}=r,d=Ea(a,u),f=Ea(l,h);if(d&&f){cancelAnimationFrame(i);return}s.position.x=Ma(a,u,n),s.position.y=Ma(l,h,n),i=requestAnimationFrame(o)},"animate");t.addEventListener("mousemove",a=>{cancelAnimationFrame(i);const l=t.clientWidth/2,u=t.clientHeight/2;r.x=-(a.clientX-l)*e,r.y=(a.clientY-u)*e,i=requestAnimationFrame(o)})},"enableParallax"),Tw=c((s,e=.1,t=.06)=>{if(!("ondeviceorientation"in window))return;let n;const i=new le,r=c(()=>{const{x:o,y:a}=s.position,{x:l,y:u}=i,h=Ea(o,l),d=Ea(a,u);if(h&&d){cancelAnimationFrame(n);return}s.position.x=Ma(o,l,t),s.position.y=Ma(a,u,t),n=requestAnimationFrame(r)},"animate");window.addEventListener("deviceorientation",o=>{cancelAnimationFrame(n);const{beta:a,gamma:l}=o;!l||!a||!(a>=0&&a<=90)||(i.x=l*100*e,i.y=-((a-45)*150)*e,n=requestAnimationFrame(r))})},"enableParallaxMobile"),Ma=c((s,e,t)=>(1-t)*s+t*e,"linearlyInterpolate"),Ea=c((s,e,t=1e-4)=>Math.abs(e-s)<t,"areNearlyEqual"),ud=c(()=>window.innerHeight>window.innerWidth,"isScreenPortrait"),Aw={cameraDistanceUpContinent:100,cameraDistanceToContinent:300,cameraRotation:0,cameraLeftSpace:0,cameraTopSpace:65},Rw={cameraDistanceUpContinent:100,cameraDistanceToContinent:150,cameraRotation:30,cameraLeftSpace:50,cameraTopSpace:0},am=class am{constructor(e,t,n){this.three=e,this.sun=n,this.cameraAnimationOptions={duration:2e3,easing:ui.Cubic.Out},this.onContinentClickCallbacks=[],this.continentObject=t.getObject(),this.continentShadowRoot=document.querySelector(`mp-${Va(this.continentObject.name)}`)?.shadowRoot}setupEventHandlers(){this.setupContinentClick(),this.setupContinentMouseOver()}setupContinentClick(){this.three.getSelector().onClick(this.continentObject,()=>{this.onContinentClickCallbacks.forEach(e=>e())})}setupContinentMouseOver(){const e=this.three.getSelector(),t=this.three.getEventHandler(),n=c(()=>this.updateContinentPinPosition(),"updateContinentPinPosition");e.onMouseOver(this.continentObject,()=>{n(),this.onContinentMouseOver(),t.onObjectMove(this.continentObject,n)}),e.onMouseOut(this.continentObject,()=>{this.onContinentMouseOut(),t.removeObjectMoveListener(this.continentObject,n)})}onContinentClick(e){this.onContinentClickCallbacks.push(e)}openContinent(){this.handleContinentClick()}handleContinentClick(){if(this.isContinentInfoOpen()||this.isAnyContinentInfoOpening())return;const e=Iu(this.continentObject),t=new R(0,0,0),n=Vg(t,e),i=this.three.getControls();i.getSpinControls().trackballRadius=50,i.setRotationAxis(n);const r=this.getContinentCameraTransform(n,e),o=this.three.getControls().getCamera(),a=this.three.getAnimator();[o,this.sun].forEach(l=>{a.animateObjectToTarget(l,r.position,r.quaternion,this.cameraAnimationOptions)}),this.openContinentInfo(this.cameraAnimationOptions.duration/2)}openContinentInfo(e){document.querySelector("mp-continents > *[open]")?.removeAttribute("open");const t=this.continentShadowRoot.host;t?.setAttribute("opening",""),setTimeout(()=>{t?.setAttribute("open",""),t?.removeAttribute("opening")},e)}isContinentInfoOpen(){return this.getContinentInfo().hasAttribute("open")??!1}isAnyContinentInfoOpening(){return!!document.querySelector("mp-continents > *[opening]")}getContinentCameraTransform(e,t){const{cameraDistanceUpContinent:n,cameraDistanceToContinent:i,cameraRotation:r,cameraLeftSpace:o,cameraTopSpace:a}=ud()?Aw:Rw,l=new yt;l.lookAt(e),l.position.copy(t),l.translateZ(n).translateX(i),l.lookAt(t);const u=SE(l),h=new R().copy(e).applyAxisAngle(u,dn.degToRad(r)),d=new wt().setFromRotationMatrix(new je().lookAt(l.position,t,h));return l.quaternion.copy(d),l.translateX(-o),l.translateY(a),{position:l.position,quaternion:l.quaternion}}onContinentMouseOver(){if(this.isContinentInfoOpen()||this.isAnyContinentInfoOpening())return;const e=this.three.getRenderer().getCanvas(),t=this.getContinentPinElement();e.classList.add("has-pointer"),t.setAttribute("mouseover","")}onContinentMouseOut(){const e=this.getContinentPinElement(),t=this.three.getRenderer().getCanvas();e.removeAttribute("mouseover"),t.classList.remove("has-pointer")}updateContinentPinPosition(){const e=this.three.getRenderer().getCanvas(),t=this.three.getControls().getCamera(),n=Iu(this.continentObject),i=new R(0,0,0),r=Vg(i,n);n.add(r.clone().multiplyScalar(-5));const o=ME(n,t,e),{x:a,y:l}=o;this.getContinentPinElement().style.setProperty("transform",`translate(-50%, -50%) translate(${a}px, ${l}px)`)}getContinentPinElement(){return this.continentShadowRoot.querySelector("mp-continent-pin")}getContinentInfo(){return this.continentShadowRoot.querySelector("mp-continent-info")}};c(am,"ContinentInteractor");let Ph=am;const Cw=new R(0,0,450),Pw=new R(0,0,800),Lw="https://fawadali.dev/assets/geometries/continents.gltf";var Bi;let Iw=(Bi=class{constructor(e){this.onLoadCallbacks=[],this.continents={},this.cameraAnimationOptions={duration:2e3,easing:ui.Cubic.Out},this.three=new Fu(e),this.setupDefaultCameraConfig(),this.initializePlanet().then(()=>{this.onLoadCallbacks.forEach(t=>t(this))})}static build(e){return new Bi(e)}async initializePlanet(){const e=this.three.getSelector(),t=this.three.getControls().getCamera(),n=this.three.getScene(),i=new ku({size:10});i.setPosition(t.position),i.addTo(n),this.sun=i;const r=new mt;r_(r,.0075),Tw(r,.0075),r.name="planet",n.add(r);const o=new Bu({size:100});o.addTo(r);const a=o.getRadius();e.intersectButIgnoreObject(o.getObject()),this.three.getControls().setSpinControlsObject(r,a);const l=t.position.z,u=t.far,h=new Ch({starsCount:1e3,startRadius:l,endRadius:u});h.animateGalaxy(this.getAnimator()),r_(h.getObject(),.075),h.addTo(n);const d=new zu({cloudsCount:5,orbitRadius:a+40,baseCloudSize:15});d.animateClouds(this.getAnimator()),d.addTo(r);const f=await this.loadContinentsLand(),p=[new KE({globeRadius:a}),new tw({globeRadius:a}),new mw({globeRadius:a}),new yw({globeRadius:a}),new ww({globeRadius:a})];for(const _ of p){const v=_.getObject(),g=f[v.name];g.name=g.name+"Land",v.add(g),_.addTo(r);const m=new Ph(this.three,_,this.sun.getObject());m.setupEventHandlers(),this.continents[v.name]={continent:_,continentInteractor:m}}}resetControls(){const e=this.three.getControls(),t=this.three.getAnimator(),n=e.getDefaultCameraState();e.resetSpinControls(),[e.getCamera(),this.sun.getObject()].forEach(i=>{t.animateObjectToTarget(i,n.position,n.quaternion,this.cameraAnimationOptions)})}setupDefaultCameraConfig(){const e=this.three.getControls().getCamera(),t=this.three.getControls().getDefaultCameraState(),n=this.getCameraConfigForScreen();e.position.copy(n),t.position.copy(n),window.addEventListener("resize",()=>{t.position.copy(this.getCameraConfigForScreen())})}onLoad(e){this.onLoadCallbacks.push(e)}getScene(){return this.three.getScene()}getAnimator(){return this.three.getAnimator()}getContinents(){return this.continents}async loadContinentsLand(){const t=await new Rh().loadFile(Lw),n={};for(const i of t.children)n[i.name]=i;return n}getCameraConfigForScreen(){return ud()?Pw:Cw}},c(Bi,"Planet"),Bi);const cm=class cm{constructor(){this.historyStack=[],this.routeHandlers={}}initialize(){this.setupDOMEvents()}setFallbackRoute(e){this.fallbackRoute=e}addRoute(e,t){this.routeHandlers[e]=t}to(e){this.runRouteHandler(e,()=>{window.history.pushState(null,"",this.prependBaseURL(e)),this.historyStack.push(e)})}replace(e){this.runRouteHandler(e,()=>{window.history.replaceState(null,"",this.prependBaseURL(e)),this.historyStack.length>0&&(this.historyStack[this.historyStack.length-1]=e)})}back(){window.history.back(),this.historyStack.pop()}getCurrentRoute(){return this.historyStack[this.historyStack.length-1]}runRouteHandler(e,t){if(this.routeHandlers[e]){this.routeHandlers[e](),t?.();return}Qr.getInstance().logError(`No route defined for the path "${e}".`),this.fallbackRoute&&(this.replace(this.fallbackRoute),Qr.getInstance().logWarning(`Using fallback route "${e}".`))}};c(cm,"Router");let Lh=cm;const Ui=class Ui extends Lh{constructor(){return super(),Ui.instance===void 0&&(Ui.instance=this),Ui.instance}static getInstance(){return new Ui}setupDOMEvents(){const e=this.getRouteFromHash();document.readyState==="complete"?this.replace(e):window.addEventListener("load",()=>this.replace(e)),window.addEventListener("hashchange",()=>{this.runRouteHandler(this.getRouteFromHash())})}prependBaseURL(e){return`https://fawadali.dev/#${e}`}getRouteFromHash(){const e=window.location.hash.slice(1);return e===""?"/":e}};c(Ui,"HashRouter");let eo=Ui;const Dw=`<main class="planet">
  <canvas id="planet-canvas"></canvas>
</main>
`,Ow=`.planet {
  width: 100%;
  height: 100%;
  background: radial-gradient(#424242, #000000);
}

#planet-canvas {
  width: 100%;
  height: 100%;
  display: block;
}

#planet-canvas.has-pointer {
  cursor: pointer;
}
`;var Nw=Object.getOwnPropertyDescriptor,Uw=c((s,e,t,n)=>{for(var i=n>1?void 0:n?Nw(e,t):e,r=s.length-1,o;r>=0;r--)(o=s[r])&&(i=o(i)||i);return i},"__decorateClass$c"),Ns;let Ih=(Ns=class extends Tt{constructor(){super(...arguments),this.router=eo.getInstance()}onInit(){const e=this.shadowDOM.querySelector("#planet-canvas");window.planet=Iw.build({canvasElement:e}),this.closeContinentOnEscape(),window.planet.onLoad(()=>{this.router.addRoute("/",()=>this.closeOpenContinent()),this.setupContinentsRouting()})}closeOpenContinent(){window.planet.resetControls(),document.querySelector("mp-continents > *[open]")?.removeAttribute("open")}closeContinentOnEscape(){document.addEventListener("keydown",e=>{const t=!!document.querySelector("mp-continents > *[open]");e.key!=="Escape"||!t||this.router.to("/")})}setupContinentsRouting(){const e=window.planet.getContinents(),t=document.querySelector("mp-planet-splash");for(const n in e){const i=Va(`/${n}`);this.router.addRoute(i,()=>{e[n].continentInteractor.openContinent(),t?.hasAttribute("closed")||setTimeout(()=>{(t?.shadowRoot?.firstChild).click()})}),e[n].continentInteractor.onContinentClick(()=>this.router.to(i))}this.router.setFallbackRoute("/"),this.router.initialize()}},c(Ns,"Planet"),Ns);Ih=Uw([Ct(Dw),$t(Ow)],Ih);St(Ih);const Fw="https://fawadali.dev/assets/./planet-icon-01.ico",Bw="https://fawadali.dev/assets/./planet-icon-02.ico",kw="https://fawadali.dev/assets/./planet-icon-03.ico",Hw="https://fawadali.dev/assets/./planet-icon-04.ico",zw="https://fawadali.dev/assets/./planet-icon-05.ico",Vw="https://fawadali.dev/assets/./planet-icon-06.ico",Gw="https://fawadali.dev/assets/./planet-icon-07.ico",Ww="https://fawadali.dev/assets/./planet-icon-08.ico",Xw="https://fawadali.dev/assets/./planet-icon-09.ico",jw="https://fawadali.dev/assets/./planet-icon-10.ico",qw="https://fawadali.dev/assets/./planet-icon-11.ico",Yw=Object.freeze(Object.defineProperty({__proto__:null,planetFavicon01:Fw,planetFavicon02:Bw,planetFavicon03:kw,planetFavicon04:Hw,planetFavicon05:zw,planetFavicon06:Vw,planetFavicon07:Gw,planetFavicon08:Ww,planetFavicon09:Xw,planetFavicon10:jw,planetFavicon11:qw},Symbol.toStringTag,{value:"Module"})),lm=class lm extends Tt{constructor(){super(...arguments),this.frameDelay=600}onInit(){this.animateFavicon()}animateFavicon(){const e=document.head.querySelector('link[rel="icon"]'),t=Object.values(Yw);let n=0;setInterval(()=>{e.href=t[n++],n===t.length&&(n=0)},this.frameDelay)}};c(lm,"PlanetFavicon");let Dh=lm;St(Dh);const $w=`<header
  class="planet-splash"
  on:click="this.onHeaderClick"
  on:mouseover="this.onMouseOver"
  on:mouseout="this.onMouseOut"
>
  <mp-heading level="h1" class="planet-splash-title">My Planet</mp-heading>
  <mp-arrow-button :enterButton>Enter</mp-arrow-button>
</header>
`,Kw=`:host {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transform: scale(1);
  opacity: 1;
  visibility: visible;
  transition: all 0.5s ease-out;
}

:host([closed]) {
  visibility: hidden;
  transform: scale(7);
  opacity: 0;
}

.planet-splash {
  color: var(--primary);
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  filter: drop-shadow(
    0.25rem 0.25rem 0.25rem rgba(var(--bg-primary-rgb), 0.25)
  );
  cursor: pointer;
}

.planet-splash > .planet-splash-title {
  font-size: 5rem;
  margin: 0;
  margin-top: 1rem;
}

/* Portrait */
@media screen and (orientation: portrait) {
  .planet-splash > .planet-splash-title {
    font-size: 4rem;
  }
}

/* Mobile */
@media screen and (max-width: 768px) {
  .planet-splash {
    width: 100%;
  }

  .planet-splash > .planet-splash-title {
    font-size: 3rem;
  }
}
`;var Jw=Object.getOwnPropertyDescriptor,Zw=c((s,e,t,n)=>{for(var i=n>1?void 0:n?Jw(e,t):e,r=s.length-1,o;r>=0;r--)(o=s[r])&&(i=o(i)||i);return i},"__decorateClass$b"),Us;let Oh=(Us=class extends Tt{onInit(){window.planet.onLoad(()=>{this.planetObject=window.planet.getScene().getObjectByName("planet"),this.planetObject?.scale.setScalar(.5),document.body.removeAttribute("loading")})}onHeaderClick(){if(!this.planetObject)return;const e=new R().setScalar(1),t=window.planet.getAnimator().createTween(this.planetObject.scale,e,{duration:2e3,easing:ui.Quintic.Out});this.setAttribute("closed",""),t.start()}onMouseOver(){this.getElement("enterButton")?.setAttribute("active","")}onMouseOut(){this.getElement("enterButton")?.removeAttribute("active")}},c(Us,"PlanetSplash"),Us);Oh=Zw([Ct($w),$t(Kw)],Oh);St(Oh);const Qw=`<mp-backdrop :backdrop on:click="this.onMenuToggleClick">
  <mp-circle-button
    class="continents-menu-toggle"
    on:click="this.onMenuToggleClick"
    icon="accessibility"
    tooltip-position="right"
  >
    Accessibility Menu
  </mp-circle-button>
  <div :continentsMenuOptions class="continents-menu-options">
    <mp-circle-button
      icon="about-continent"
      tooltip-position="right"
      on:click="this.getMenuItemClickListener('/about-continent')"
    >
      About
    </mp-circle-button>
    <mp-circle-button
      icon="projects-continent"
      tooltip-position="right"
      on:click="this.getMenuItemClickListener('/projects-continent')"
    >
      Projects
    </mp-circle-button>
    <mp-circle-button
      icon="work-continent"
      tooltip-position="right"
      on:click="this.getMenuItemClickListener('/work-continent')"
    >
      Work
    </mp-circle-button>
    <mp-circle-button
      icon="life-continent"
      tooltip-position="right"
      on:click="this.getMenuItemClickListener('/life-continent')"
    >
      Life
    </mp-circle-button>
    <mp-circle-button
      icon="connect-continent"
      tooltip-position="right"
      on:click="this.getMenuItemClickListener('/connect-continent')"
    >
      Connect
    </mp-circle-button>
  </div>
</mp-backdrop>
`,eT=`:host {
  --primary-color: currentColor;
  --secondary-color: currentColor;

  position: fixed;
  top: 1rem;
  left: 1rem;
  z-index: var(--layer-front);
}

.continents-menu-toggle {
  position: absolute;
  opacity: 0;
  pointer-events: none;
}

:host([open]) > mp-backdrop > .continents-menu-toggle,
.continents-menu-toggle:focus-within {
  opacity: 1;
}

.continents-menu-options {
  position: relative;
}

.continents-menu-options > mp-circle-button {
  position: absolute;
  top: 0;
  left: 0;
  visibility: hidden;
  opacity: 0;
  transition: all 0.5s;
}

:host([open]) > mp-backdrop > .continents-menu-options > mp-circle-button {
  visibility: visible;
  opacity: 1;
}
`;var tT=Object.getOwnPropertyDescriptor,nT=c((s,e,t,n)=>{for(var i=n>1?void 0:n?tT(e,t):e,r=s.length-1,o;r>=0;r--)(o=s[r])&&(i=o(i)||i);return i},"__decorateClass$a"),Fs;let Nh=(Fs=class extends Tt{constructor(){super(...arguments),this.router=eo.getInstance(),this.radius=8,this.startAngle=0,this.rotationAngle=90}onInit(){const e=this.constructMenuOptionsStyles(),t=new CSSStyleSheet;t.replaceSync(e),this.shadowDOM.adoptedStyleSheets.push(t)}onMenuToggleClick(e){e.stopPropagation(),this.hasAttribute("open")?(this.removeAttribute("open"),this.getElement("backdrop")?.removeAttribute("active")):(this.setAttribute("open",""),this.getElement("backdrop")?.setAttribute("active",""))}onBackDropClick(){this.removeAttribute("open"),this.getElement("backdrop")?.removeAttribute("active")}getMenuItemClickListener(e){return()=>this.router.to(e)}constructMenuOptionsStyles(){const e=[...this.getElement("continentsMenuOptions")?.children??[]],t=e.length-1,n=this.startAngle+this.rotationAngle/t;return e.reduce((r,o,a)=>{const l=this.getMenuItemSelector(a);return r+=`${l} {
        transform: ${this.getMenuItemTransformStyle(this.radius,n*a)};
      }
      `,r},"")}getMenuItemSelector(e){return`:host([open]) > mp-backdrop > .continents-menu-options > mp-circle-button:nth-child(${e+1})`}getMenuItemTransformStyle(e,t){return`rotate(${t}deg) translate(${e}rem) rotate(${-t}deg)`}},c(Fs,"ContinentsMenu"),Fs);Nh=nT([Ct(Qw),$t(eT)],Nh);St(Nh);const iT=`<header :continentHeader class="continent-header">
  <nav>
    <mp-arrow-button
      class="back-button"
      direction="left"
      on:click="this.onBackClick"
    >
      Back
    </mp-arrow-button>
  </nav>
  <mp-heading level="h2" class="continent-title">
    <mp-icon icon="\${this.icon}" class="continent-icon"></mp-icon>
    <span><slot></slot></span>
  </mp-heading>
</header>
`,sT=`.continent-header {
  padding: 2.5rem 0;
  transition: margin-top 0.5s;
}

.continent-title {
  font-size: 3.5rem;
  color: var(--primary);
  margin: 0;
}

.back-button {
  display: block;
  margin-bottom: 1rem;
}

.continent-icon {
  height: 3rem;
  --primary-color: var(--primary);
  --secondary-color: var(--primary);
}

/* Tablet */
@media screen and (max-width: 992px) {
  .continent-header {
    padding: 1.5rem 0;
  }

  .continent-title {
    font-size: 3rem;
  }
}

/* Mobile */
@media screen and (max-width: 768px) {
  .continent-header {
    padding: 1rem 0;
  }

  .continent-title {
    font-size: 2.5rem;
  }
}
`;var rT=Object.defineProperty,oT=Object.getOwnPropertyDescriptor,V_=c((s,e,t,n)=>{for(var i=n>1?void 0:n?oT(e,t):e,r=s.length-1,o;r>=0;r--)(o=s[r])&&(i=(n?o(e,t,i):o(i))||i);return n&&i&&rT(e,t,i),i},"__decorateClass$9"),Bs;let wa=(Bs=class extends Tt{constructor(){super(...arguments),this.router=eo.getInstance()}onBackClick(e){e.stopPropagation(),this.router.to("/")}},c(Bs,"ContinentHeader"),Bs);V_([Dn()],wa.prototype,"icon",2);wa=V_([Ct(iT),$t(sT)],wa);St(wa);const aT=`<slot></slot>
`;var cT=Object.getOwnPropertyDescriptor,lT=c((s,e,t,n)=>{for(var i=n>1?void 0:n?cT(e,t):e,r=s.length-1,o;r>=0;r--)(o=s[r])&&(i=o(i)||i);return i},"__decorateClass$8"),ks;let Uh=(ks=class extends Tt{},c(ks,"ContinentBody"),ks);Uh=lT([Ct(aT)],Uh);St(Uh);const uT=`<article
  :continent
  tabindex="0"
  class="continent"
  on:scroll="this.onContinentScroll"
>
  <div class="continent-inner">
    <div class="continent-header">
      <slot name="continent-header"></slot>
    </div>
    <div :continentBody class="continent-body">
      <slot name="continent-body"></slot>
    </div>
  </div>
</article>
`,hT=`:host {
  /* This spacing should be the same as \`continentVerticalSpacing\` in
  \`continent-info.ts\`. */
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

  /* Open/Close Animation */
  visibility: hidden;
  transform: translateY(15rem);
  opacity: 0;
  transition: all var(--continent-open-close-duration),
    padding-top var(--continent-scroll-duration);

  /* For making scroll appear on the left which is a design element. */
  direction: rtl;
  overflow: auto;
  mask-image: linear-gradient(to top, transparent, #000000 10%);
  -webkit-mask-image: linear-gradient(
    to top,
    transparent,
    #000000 10%
  );
}

.continent.scrollable {
  padding-bottom: var(--continent-vertical-spacing);
}

.continent-inner {
  direction: ltr;
}

:host([open]) .continent {
  /* Open/Close Animation */
  visibility: visible;
  transform: translateY(0);
  opacity: 1;
}

/* Sticky Continent Header */

.continent-header {
  position: sticky;
  top: calc(-1 * var(--continent-vertical-spacing));
  z-index: var(--layer-front);
}

/* Scrollbar Styles */

.continent::-webkit-scrollbar {
  width: 0.5rem;
}

.continent::-webkit-scrollbar-track {
  background: transparent;
}

.continent::-webkit-scrollbar-thumb {
  background: var(--primary);
  border-radius: 1rem;
}

.continent::-webkit-scrollbar-thumb:hover {
  background: var(--primary-dim);
}

.continent::-webkit-scrollbar-track-piece:end {
  background: transparent;
  margin-bottom: 10rem;
}

.continent::-webkit-scrollbar-track-piece:start {
  background: transparent;
  margin-top: calc(var(--continent-vertical-spacing) * 1.5);
}

/* Desktop */
@media screen and (min-width: 992px) {
  .continent.scrollable {
    /* Scrollbar */
    padding-left: 2rem;
    /* 0.5rem left for the width of scrollbar. */
    margin-left: 1.5rem;
  }
}

/* Tablet */
@media screen and (max-width: 992px) {
  .continent {
    width: 50%;
  }

  .continent::-webkit-scrollbar-track-piece:end {
    margin-bottom: 0;
  }

  .continent::-webkit-scrollbar-track-piece:start {
    margin-top: 0;
  }
}

/* Mobile */
@media screen and (max-width: 768px) {
  .continent-body {
    font-size: 1rem;
  }

  /* Hide Scrollbar on Mobile */

  .continent::-webkit-scrollbar {
    display: none;
  }

  .continent {
    padding-left: 2rem;
    padding-right: 2rem;
  }
}

/* Portrait */
@media screen and (orientation: portrait) {
  :host {
    --continent-vertical-spacing: 5rem;
  }

  .continent {
    width: unset;
    top: 0;
    bottom: 42%;
  }
}
`;var dT=Object.getOwnPropertyDescriptor,fT=c((s,e,t,n)=>{for(var i=n>1?void 0:n?dT(e,t):e,r=s.length-1,o;r>=0;r--)(o=s[r])&&(i=o(i)||i);return i},"__decorateClass$7"),Hs;let Fh=(Hs=class extends Tt{onInit(){this.continent=this.getElement("continent"),this.continentBody=this.getElement("continentBody")}static get observedAttributes(){return["open"]}attributeChangedCallback(e){e==="open"&&this.isContentScrollable()&&this.continent.classList.add("scrollable")}onContinentScroll(){const e=ud()?80:.35*document.documentElement.clientHeight,t=this.continent.scrollTop-e;t>0?this.continentBody.style.clipPath=`polygon(0 ${t}px, 100% ${t}px, 100% 100%, 0 100%)`:this.continentBody.removeAttribute("style")}isContentScrollable(){return this.continent.scrollHeight>this.continent.offsetHeight}},c(Hs,"ContinentInfo"),Hs);Fh=fT([Ct(uT),$t(hT)],Fh);St(Fh);const pT=`<div class="continent-pin">
  <div class="continent-pin-content">
    <mp-heading level="h3" class="continent-pin-title">
      <slot name="title"></slot>
    </mp-heading>
    <slot name="subtitle" class="continent-pin-subtitle"></slot>
  </div>
  <mp-icon icon="\${this.icon}" class="continent-pin-icon"></mp-icon>
</div>
`,mT=`:host {
  --gradient: linear-gradient(
    to right,
    var(--primary-color) 0%,
    var(--secondary-color) 90%
  );

  position: fixed;
  top: 1rem;
  left: 0;
  pointer-events: none;
  /* Hide the pin on page load using transform. Because \`visibility:
  hidden;\` takes effect only after 0.25s due to the \`transition\` applied
  to it. */
  transform: translateX(-500%);
  /* Only displays on hover of continent. */
  visibility: hidden;
  opacity: 0;
  transition: opacity 0.25s, top 0.25s, visibility 0.25s;
}

:host([mouseover]) {
  visibility: visible;
  opacity: 1;
  top: 0;
}

.continent-pin {
  display: flex;
  align-items: center;
  /* This gap should be the same as horizontal padding. */
  gap: 1rem;
  padding: 0.75rem 1rem;
  background: var(--primary);
  border-radius: 0.5rem;
  text-align: left;
  box-shadow: 0 1rem 3rem rgba(var(--bg-primary-rgb), 0.425);
}

.continent-pin-title {
  margin: 0;
}

.continent-pin-title > slot::slotted(*) {
  background-image: var(--gradient);
  background-clip: text;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.continent-pin-subtitle::slotted(*) {
  font-size: 0.75rem;
  opacity: 0.5;
}

.continent-pin-icon {
  box-sizing: border-box;
  position: relative;
  /* Height should change if the font size of \`.continent-pin-content\`
  changes. */
  height: 2.825rem;
  padding: 0.125rem;
}
`;var gT=Object.defineProperty,_T=Object.getOwnPropertyDescriptor,G_=c((s,e,t,n)=>{for(var i=n>1?void 0:n?_T(e,t):e,r=s.length-1,o;r>=0;r--)(o=s[r])&&(i=(n?o(e,t,i):o(i))||i);return n&&i&&gT(e,t,i),i},"__decorateClass$6"),zs;let Ta=(zs=class extends Tt{},c(zs,"ContinentPin"),zs);G_([Dn()],Ta.prototype,"icon",2);Ta=G_([Ct(pT),$t(mT)],Ta);St(Ta);const vT=`<section>
  <slot name="project-title"></slot>
  <slot name="project-description"></slot>
  <slot name="project-links"></slot>
</section>
`;var xT=Object.getOwnPropertyDescriptor,yT=c((s,e,t,n)=>{for(var i=n>1?void 0:n?xT(e,t):e,r=s.length-1,o;r>=0;r--)(o=s[r])&&(i=o(i)||i);return i},"__decorateClass$5"),Vs;let Bh=(Vs=class extends Tt{},c(Vs,"Project"),Vs);Bh=yT([Ct(vT)],Bh);St(Bh);const um=class um extends Tt{static get observedAttributes(){return["open"]}attributeChangedCallback(e,t,n){if(e!=="open")return;const i=this.shadowDOM.querySelector("mp-continent-info");n===null?i?.removeAttribute(e):i?.setAttribute(e,n)}};c(um,"Continent");let Gi=um;const bT=`<mp-continent-pin icon="about-continent">
  <span slot="title">About</span>
  <span slot="subtitle">Click on the continent to land</span>
</mp-continent-pin>
<mp-continent-info>
  <mp-continent-header slot="continent-header" icon="about-continent">
    About
  </mp-continent-header>
  <mp-continent-body slot="continent-body">
    <mp-heading level="h3">Who am I?</mp-heading>
    <p>Hi there!</p>
    <p><b>Fawad Ali</b> here. An anime guy who loves to develop software.</p>
    <p>
      A <b>Software Engineer</b> currently helping build web3 applications at
      Puffer Finance. Someone who is interested in contributing to the world
      through software with experience working across multiple tech stacks.
    </p>
    <p>
      Originally from the beautiful land of Pakistan and enjoying life in
      Madrid, Spain these days.
    </p>
    <p>In my free time, I like to watch anime and contribute to open source.</p>
    <mp-heading level="h3">Programming</mp-heading>
    <p class="dev-icons">
      <mp-icon icon="dev/typescript" title="TypeScript"></mp-icon>
      <mp-icon icon="dev/javascript" title="JavaScript"></mp-icon>
      <mp-icon icon="dev/java" title="Java"></mp-icon>
      <mp-icon icon="dev/kotlin" title="Kotlin"></mp-icon>
      <mp-icon icon="dev/cplusplus" title="C++"></mp-icon>
    </p>
    <mp-heading level="h3">Web</mp-heading>
    <p class="dev-icons">
      <mp-icon icon="dev/react" title="React"></mp-icon>
      <mp-icon icon="dev/angularjs" title="Angular"></mp-icon>
      <mp-icon icon="dev/nodejs" title="Node.js"></mp-icon>
      <mp-icon icon="dev/php" title="PHP"></mp-icon>
      <mp-icon icon="dev/spring" title="Spring"></mp-icon>
      <mp-icon icon="dev/aws" title="Amazon Web Services"></mp-icon>
      <mp-icon icon="dev/postgresql" title="PostgreSQL"></mp-icon>
      <mp-icon icon="dev/mysql" title="MySQL"></mp-icon>
      <mp-icon icon="dev/mongodb" title="MongoDB"></mp-icon>
      <mp-icon icon="dev/graphql" title="GraphQL"></mp-icon>
    </p>
  </mp-continent-body>
</mp-continent-info>
`,ST=`.dev-icons {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.dev-icons > mp-icon {
  width: 3.5rem;
  height: 3.5rem;
}
`;var MT=Object.getOwnPropertyDescriptor,ET=c((s,e,t,n)=>{for(var i=n>1?void 0:n?MT(e,t):e,r=s.length-1,o;r>=0;r--)(o=s[r])&&(i=o(i)||i);return i},"__decorateClass$4"),Gs;let kh=(Gs=class extends Gi{},c(Gs,"AboutContinent"),Gs);kh=ET([Ct(bT),$t(ST)],kh);St(kh);const wT=`<mp-continent-pin icon="connect-continent">
  <span slot="title">Connect</span>
  <span slot="subtitle">Click on the continent to land</span>
</mp-continent-pin>
<mp-continent-info>
  <mp-continent-header slot="continent-header" icon="connect-continent">
    Connect
  </mp-continent-header>
  <mp-continent-body slot="continent-body">
    <mp-circle-button
      icon="social/email"
      tooltip-position="right"
      link="mailto:m.fawaadali98@gmail.com"
    >
      Email
    </mp-circle-button>
    <mp-circle-button
      icon="social/facebook"
      tooltip-position="right"
      link="https://facebook.com/9inpachi"
    >
      Facebook
    </mp-circle-button>
    <mp-circle-button
      icon="social/linkedin"
      tooltip-position="right"
      link="https://www.linkedin.com/in/fawadaliq/"
    >
      LinkedIn
    </mp-circle-button>
    <mp-circle-button
      icon="social/github"
      tooltip-position="right"
      link="https://github.com/9inpachi"
    >
      GitHub
    </mp-circle-button>
  </mp-continent-body>
</mp-continent-info>
`;var TT=Object.getOwnPropertyDescriptor,AT=c((s,e,t,n)=>{for(var i=n>1?void 0:n?TT(e,t):e,r=s.length-1,o;r>=0;r--)(o=s[r])&&(i=o(i)||i);return i},"__decorateClass$3"),Ws;let Hh=(Ws=class extends Gi{},c(Ws,"ConnectContinent"),Ws);Hh=AT([Ct(wT)],Hh);St(Hh);const RT=`<mp-continent-pin icon="life-continent">
  <span slot="title">Life</span>
  <span slot="subtitle">Click on the continent to land</span>
</mp-continent-pin>
<mp-continent-info>
  <mp-continent-header slot="continent-header" icon="life-continent">
    Life
  </mp-continent-header>
  <mp-continent-body slot="continent-body">
    <mp-timeline>
      <mp-timeline-event>
        <span slot="time">2024/05</span>
        <mp-heading level="h3" slot="title">Puffer Finance</mp-heading>
        <span slot="subtitle">Senior Software Engineer Job</span>
        Hello World!
      </mp-timeline-event>
      <mp-timeline-event>
        <span slot="time">2023/10</span>
        <mp-heading level="h3" slot="title">IntuVision</mp-heading>
        <span slot="subtitle">3D Visualization Engineer Consultancy</span>
      </mp-timeline-event>
      <mp-timeline-event>
        <span slot="time">2023/03</span>
        <mp-heading level="h3" slot="title">TomTom</mp-heading>
        <span slot="subtitle">Software Engineer III Job</span>
      </mp-timeline-event>
      <mp-timeline-event>
        <span slot="time">2022/11</span>
        <mp-heading level="h3" slot="title">Amazon</mp-heading>
        <span slot="subtitle">Software Development Engineer Job</span>
      </mp-timeline-event>
      <mp-timeline-event>
        <span slot="time">2020/12</span>
        <mp-heading level="h3" slot="title">Unite/Mercateo</mp-heading>
        <span slot="subtitle">Software Engineer Job</span>
      </mp-timeline-event>
      <mp-timeline-event>
        <span slot="time">2020/10</span>
        <mp-heading level="h3" slot="title">University of Sussex</mp-heading>
        <span slot="subtitle">
          OpenCL Backend for GPU-enhanced Neural Networks (GeNN) Project
        </span>
      </mp-timeline-event>
      <mp-timeline-event>
        <span slot="time">2020/05</span>
        <mp-heading level="h3" slot="title">Phoenix Project</mp-heading>
        <span slot="subtitle">Google Summer of Code with CERN</span>
      </mp-timeline-event>
      <mp-timeline-event>
        <span slot="time">2019/05</span>
        <mp-heading level="h3" slot="title">
          Interactive Maps Application Project
        </mp-heading>
        <span slot="subtitle">Google Summer of Code with XWiki</span>
      </mp-timeline-event>
      <mp-timeline-event>
        <span slot="time">2017/07</span>
        <mp-heading level="h3" slot="title">Spring Jumper 2D</mp-heading>
        <span slot="subtitle">Design and Animation for the Game</span>
      </mp-timeline-event>
      <mp-timeline-event>
        <span slot="time">2017/03</span>
        <mp-heading level="h3" slot="title">NUST CEME Olympiad</mp-heading>
        <span slot="subtitle">Won Poster and Logo Designing Competition</span>
      </mp-timeline-event>
      <mp-timeline-event>
        <span slot="time">2016/10</span>
        <mp-heading level="h3" slot="title">
          University of Engineering and Technology, Taxila
        </mp-heading>
        <span slot="subtitle">Graduation as a Software Engineer</span>
      </mp-timeline-event>
      <mp-timeline-event>
        <span slot="time">2014/06</span>
        <mp-heading level="h3" slot="title">
          The Scholars Science College
        </mp-heading>
        <span slot="subtitle">
          Higher Secondary School (11<sup>th</sup> and 12<sup>th</sup> Grade)
        </span>
      </mp-timeline-event>
      <mp-timeline-event>
        <span slot="time">2012/06</span>
        <mp-heading level="h3" slot="title">POF Model High School</mp-heading>
        <span slot="subtitle">
          Secondary School (9<sup>th</sup> and 10<sup>th</sup> Grade)
        </span>
      </mp-timeline-event>
      <mp-timeline-event>
        <span slot="time">2006/03</span>
        <mp-heading level="h3" slot="title">
          Army Public Schools and Colleges System
        </mp-heading>
        <span slot="subtitle">1<sup>st</sup> to 7<sup>th</sup> Grade</span>
      </mp-timeline-event>
    </mp-timeline>
  </mp-continent-body>
</mp-continent-info>
`;var CT=Object.getOwnPropertyDescriptor,PT=c((s,e,t,n)=>{for(var i=n>1?void 0:n?CT(e,t):e,r=s.length-1,o;r>=0;r--)(o=s[r])&&(i=o(i)||i);return i},"__decorateClass$2"),Xs;let zh=(Xs=class extends Gi{},c(Xs,"LifeContinent"),Xs);zh=PT([Ct(RT)],zh);St(zh);const LT=`<mp-continent-pin icon="projects-continent">
  <span slot="title">Projects</span>
  <span slot="subtitle">Click on the continent to land</span>
</mp-continent-pin>
<mp-continent-info>
  <mp-continent-header slot="continent-header" icon="projects-continent">
    Projects
  </mp-continent-header>
  <mp-continent-body slot="continent-body">
    <mp-project>
      <mp-heading level="h3" slot="project-title">
        Interactive Maps Application
      </mp-heading>
      <p slot="project-description">
        An application extension in XWiki to easily create interactive maps with
        ability to share locations and associate structured data with areas.
      </p>
      <div slot="project-links">
        <mp-circle-button
          icon="code"
          tooltip-position="right"
          link="https://github.com/xwiki-contrib/application-interactive-maps"
        >
          Source
        </mp-circle-button>
        <mp-circle-button
          icon="link"
          tooltip-position="right"
          link="https://extensions.xwiki.org/xwiki/bin/view/Extension/InteractiveMapsApplication/"
        >
          App
        </mp-circle-button>
      </div>
    </mp-project>
    <mp-project>
      <mp-heading level="h3" slot="project-title">
        OpenCL code-generation backend for GPU-enhanced Neural Networks
      </mp-heading>
      <p slot="project-description">
        GeNN is a GPU-enhanced Neuronal Network simulation environment based on
        code generation for NVIDIA CUDA. This project added a new OpenCL based
        backend to GeNN.
      </p>
      <div slot="project-links">
        <mp-circle-button
          icon="code"
          tooltip-position="right"
          link="https://github.com/9inpachi/genn"
        >
          Source
        </mp-circle-button>
      </div>
    </mp-project>
    <mp-project>
      <mp-heading level="h3" slot="project-title">Phoenix</mp-heading>
      <p slot="project-description">
        A web-based experiment independent event display for High Energy
        Physics.
      </p>
      <div slot="project-links">
        <mp-circle-button
          icon="code"
          tooltip-position="right"
          link="https://github.com/HSF/phoenix"
        >
          Source
        </mp-circle-button>
        <mp-circle-button
          icon="link"
          tooltip-position="right"
          link="https://hepsoftwarefoundation.org/phoenix/"
        >
          App
        </mp-circle-button>
      </div>
    </mp-project>
    <mp-project>
      <mp-heading level="h3" slot="project-title">
        React Circular Menu
      </mp-heading>
      <p slot="project-description">
        Circle based menu component for React with custom angle range and any
        number of menu items.
      </p>
      <div slot="project-links">
        <mp-circle-button
          icon="code"
          tooltip-position="right"
          link="https://github.com/9inpachi/react-circular-menu"
        >
          Source
        </mp-circle-button>
        <mp-circle-button
          icon="link"
          tooltip-position="right"
          link="https://9inpachi.github.io/react-circular-menu/"
        >
          Demo
        </mp-circle-button>
      </div>
    </mp-project>
    <mp-project>
      <mp-heading level="h3" slot="project-title">Recit</mp-heading>
      <p slot="project-description">
        An image recognition android application to recognize images in
        real-time using TensorFlow Lite.
      </p>
      <div slot="project-links">
        <mp-circle-button
          icon="code"
          tooltip-position="right"
          link="https://github.com/9inpachi/recit"
        >
          Source
        </mp-circle-button>
      </div>
    </mp-project>
  </mp-continent-body>
</mp-continent-info>
`;var IT=Object.getOwnPropertyDescriptor,DT=c((s,e,t,n)=>{for(var i=n>1?void 0:n?IT(e,t):e,r=s.length-1,o;r>=0;r--)(o=s[r])&&(i=o(i)||i);return i},"__decorateClass$1"),js;let Vh=(js=class extends Gi{},c(js,"ProjectsContinent"),js);Vh=DT([Ct(LT)],Vh);St(Vh);const OT=`<mp-continent-pin icon="work-continent">
  <span slot="title">Work</span>
  <span slot="subtitle">Click on the continent to land</span>
</mp-continent-pin>
<mp-continent-info>
  <mp-continent-header slot="continent-header" icon="work-continent">
    Work
  </mp-continent-header>
  <mp-continent-body slot="continent-body">
    <mp-timeline>
      <mp-timeline-event>
        <span slot="time">2024/05</span>
        <mp-heading level="h3" slot="title">Puffer Finance</mp-heading>
        <span slot="subtitle">Senior Software Engineer</span>
        <p>
          Developing Web3 applications and services on Ethereum for liquid
          restaking, staking vaults, and protocol infrastructure.
        </p>
      </mp-timeline-event>
      <mp-timeline-event>
        <span slot="time">2023/03</span>
        <mp-heading level="h3" slot="title">TomTom</mp-heading>
        <span slot="subtitle">Software Engineer III</span>
        <p>
          Part of the Orbis Areas and Postal team. Worked on the Orbis product
          to provide near real-time updated areas and postal map data to
          customers.
        </p>
      </mp-timeline-event>
      <mp-timeline-event>
        <span slot="time">2022/11</span>
        <mp-heading level="h3" slot="title">Amazon</mp-heading>
        <span slot="subtitle">Software Development Engineer</span>
        <p>
          A member of the Amazon Business Value team where we built solutions
          for customers to see value in purchasing from Amazon Business.
        </p>
      </mp-timeline-event>
      <mp-timeline-event>
        <span slot="time">2022/05</span>
        <mp-heading level="h3" slot="title">Google Summer of Code</mp-heading>
        <span slot="subtitle">Mentor at CERN</span>
        <p>
          Mentored the "Revamped Testing Infrastructure for Phoenix" project.
          Supported in creating an infrastructure for test-driven development in
          Phoenix by introducing unit, integration, screenshot and end-to-end
          tests.
        </p>
      </mp-timeline-event>
      <mp-timeline-event>
        <span slot="time">2021/05</span>
        <mp-heading level="h3" slot="title">Google Summer of Code</mp-heading>
        <span slot="subtitle">Mentor at XWiki</span>
        <p>
          Mentored the "Add WebAuthn support to XWiki" project. Supported the
          development of an extension for authentication in XWiki using
          public-key cryptography and the WebAuthn W3C standard.
        </p>
      </mp-timeline-event>
      <mp-timeline-event>
        <span slot="time">2021/01</span>
        <mp-heading level="h3" slot="title">CERN</mp-heading>
        <span slot="subtitle">Consultant Software Developer</span>
        <p>
          Developed an ATLAS experiment specific version of Phoenix. Implemented
          features like performance mode, augmented reality (AR) etc. and
          created documentation for users and developers.
        </p>
      </mp-timeline-event>
      <mp-timeline-event>
        <span slot="time">2020/12</span>
        <mp-heading level="h3" slot="title">Unite/Mercateo</mp-heading>
        <span slot="subtitle">Software Engineer</span>
        <p>
          A member of the procurement portal team at first and then the checkout
          team later. Developed Unite's design system and the new Unite
          Procurement Portal (UPP). Also worked on features and fixes related to
          user settings, approval workflow and the checkout process.
        </p>
      </mp-timeline-event>
      <mp-timeline-event>
        <span slot="time">2020/05</span>
        <mp-heading level="h3" slot="title">Google Summer of Code</mp-heading>
        <span slot="subtitle">Student Developer at CERN</span>
        <p>
          Implemented new features for Phoenix — an experiment independent 3D
          display framework for visualizing CERN experiment data.
        </p>
      </mp-timeline-event>
      <mp-timeline-event>
        <span slot="time">2019/05</span>
        <mp-heading level="h3" slot="title">Google Summer of Code</mp-heading>
        <span slot="subtitle">Student Developer at XWiki</span>
        <p>
          Developed the "Interactive Maps Application" extension in XWiki for
          easily creating maps, sharing locations and associating structured
          data with areas.
        </p>
      </mp-timeline-event>
      <mp-timeline-event>
        <span slot="time">2016/06</span>
        <mp-heading level="h3" slot="title">TechKnok</mp-heading>
        <span slot="subtitle">Software Developer</span>
        <p>
          Worked project-based at TechKnok developing web based systems for
          small to medium scale foreign and local businesses.
        </p>
      </mp-timeline-event>
    </mp-timeline>
  </mp-continent-body>
</mp-continent-info>
`;var NT=Object.getOwnPropertyDescriptor,UT=c((s,e,t,n)=>{for(var i=n>1?void 0:n?NT(e,t):e,r=s.length-1,o;r>=0;r--)(o=s[r])&&(i=o(i)||i);return i},"__decorateClass"),qs;let Gh=(qs=class extends Gi{},c(qs,"WorkContinent"),qs);Gh=UT([Ct(OT)],Gh);St(Gh);
