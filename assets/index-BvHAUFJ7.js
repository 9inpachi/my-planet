var x0=Object.defineProperty;var l=(s,e)=>x0(s,"name",{value:e,configurable:!0});l(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}l(t,"getFetchOpts");function n(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}l(n,"processPreload")},"polyfill")();const Um="on:",Td=class Td{constructor(e,t){this.componentContext=t;const r=new DOMParser().parseFromString(e,"text/html").querySelector("body");if(this.parsedFragment=document.createDocumentFragment(),r)for(const o of[...r.children])this.parsedFragment.appendChild(o)}processEventListeners(){this.getRootElements().forEach(e=>{this.addEventListenersToNodes(e)})}getRootElements(){return[...this.parsedFragment.children]}addEventListenersToNodes(e){const t=e.getAttributeNames().filter(n=>n.startsWith(Um));for(const n of t){const i=n.substring(Um.length),r=e.getAttribute(n);r&&(e.addEventListener(i,new Function(`return ${r}`).apply(this.componentContext)?.bind(this.componentContext)),e.removeAttribute(n))}for(const n of e.children)this.addEventListenersToNodes(n)}};l(Td,"HTMLParser");let Vl=Td;const y0=l((s,e)=>{const t=Object.getOwnPropertyNames(e),n=Object.values(e);return new Function(...t,`return \`${s}\`;`).apply(e,...n)},"evaluateStringTemplate"),Ad=class Ad extends HTMLElement{constructor(){super(),this.shadowDOM=this.attachShadow({mode:"open"})}connectedCallback(){this.onBeforeInit?.();const e=y0(this.template,this);this.htmlParser=new Vl(e,this),this.styles&&this.processStyles(),this.template&&this.shadowDOM.append(...this.processTemplate()),this.onInit?.()}processStyles(){const e=new CSSStyleSheet;e.replaceSync(this.styles),this.shadowDOM.adoptedStyleSheets=[e]}processTemplate(){return this.htmlParser.processEventListeners(),this.htmlParser.getRootElements()}getElement(e){return this.shadowDOM.querySelector(`*[\\:${e}]`)}};l(Ad,"Component");let Pt=Ad;const Dt=l(s=>e=>{Reflect.defineProperty(e.prototype,"template",{value:s})},"template"),Qt=l(s=>e=>{const t=[s];e.prototype.styles&&t.push(e.prototype.styles),Reflect.defineProperty(e.prototype,"styles",{value:t.join(`

`)})},"styles"),qa=l(s=>s.replace(/[A-Z]/g,e=>`-${e.toLowerCase()}`),"camelCaseToKebabCase"),b0=l(s=>qa(s).substring(1),"pascalCaseToKebabCase"),Hn=l(s=>(e,t)=>{const n=qa(t.toString()),i={get(){return this.getAttribute(n)},set(r){this.getAttribute(n)||this.setAttribute(n,r)}};return t!==void 0?S0(e,t,i):M0(e,i)},"property"),S0=l((s,e,t)=>{Reflect.defineProperty(s,e,t)},"legacyProperty"),M0=l((s,e)=>({kind:"field",key:s?.key,placement:"own",descriptor:e}),"currentProperty"),wt=l(s=>{const e=b0(s.name);customElements.define(`mp-${e}`,s)},"registerComponent"),E0='<${this.level} class="heading"><slot></slot></${this.level}>\n',w0=`.heading {
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
`;var T0=Object.defineProperty,A0=Object.getOwnPropertyDescriptor,M_=l((s,e,t,n)=>{for(var i=n>1?void 0:n?A0(e,t):e,r=s.length-1,o;r>=0;r--)(o=s[r])&&(i=(n?o(e,t,i):o(i))||i);return n&&i&&T0(e,t,i),i},"__decorateClass$j"),Ts;let Yo=(Ts=class extends Pt{},l(Ts,"Heading"),Ts);M_([Hn()],Yo.prototype,"level",2);Yo=M_([Dt(E0),Qt(w0)],Yo);wt(Yo);const C0=`<!-- "on:click" is not set here because we can add "on:click" on the
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
`,R0=`:host {
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
`;var P0=Object.defineProperty,L0=Object.getOwnPropertyDescriptor,sd=l((s,e,t,n)=>{for(var i=n>1?void 0:n?L0(e,t):e,r=s.length-1,o;r>=0;r--)(o=s[r])&&(i=(n?o(e,t,i):o(i))||i);return n&&i&&P0(e,t,i),i},"__decorateClass$i"),As;let Fr=(As=class extends Pt{},l(As,"ArrowButton"),As);sd([Hn()],Fr.prototype,"direction",2);sd([Hn()],Fr.prototype,"label",2);Fr=sd([Dt(C0),Qt(R0)],Fr);wt(Fr);const I0="modulepreload",D0=l(function(s){return"https://fawadali.dev/"+s},"assetsURL"),Fm={},ht=l(function(e,t,n){let i=Promise.resolve();if(t&&t.length>0){let u=function(h){return Promise.all(h.map(d=>Promise.resolve(d).then(f=>({status:"fulfilled",value:f}),f=>({status:"rejected",reason:f}))))};var o=u;l(u,"allSettled"),document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),c=a?.nonce||a?.getAttribute("nonce");i=u(t.map(h=>{if(h=D0(h),h in Fm)return;Fm[h]=!0;const d=h.endsWith(".css"),f=d?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${h}"]${f}`))return;const p=document.createElement("link");if(p.rel=d?"stylesheet":I0,d||(p.as="script"),p.crossOrigin="",p.href=h,c&&p.setAttribute("nonce",c),document.head.appendChild(p),d)return new Promise((_,v)=>{p.addEventListener("load",_),p.addEventListener("error",()=>v(new Error(`Unable to preload CSS for ${h}`)))})}))}function r(a){const c=new Event("vite:preloadError",{cancelable:!0});if(c.payload=a,window.dispatchEvent(c),!c.defaultPrevented)throw a}return l(r,"handlePreloadError"),i.then(a=>{for(const c of a||[])c.status==="rejected"&&r(c.reason);return e().catch(r)})},"preload"),Bm=l((s,e,t)=>{const n=s[e];return n?typeof n=="function"?n():Promise.resolve(n):new Promise((i,r)=>{(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(r.bind(null,new Error("Unknown variable dynamic import: "+e+(e.split("/").length!==t?". Note that variables only represent file names one level deep.":""))))})},"__variableDynamicImportRuntimeHelper"),N0=`:host {
  display: inline-block;
}

svg {
  width: 100%;
  height: 100%;
}
`;var O0=Object.defineProperty,U0=Object.getOwnPropertyDescriptor,rd=l((s,e,t,n)=>{for(var i=n>1?void 0:n?U0(e,t):e,r=s.length-1,o;r>=0;r--)(o=s[r])&&(i=(n?o(e,t,i):o(i))||i);return n&&i&&O0(e,t,i),i},"__decorateClass$h"),Cs;let Br=(Cs=class extends Pt{onInit(){this.loadIcon()}async loadIcon(){const e=this.icon?await this.importIconFromAssets():await this.fetchIcon();this.shadowDOM.innerHTML=e,this.shadowDOM.firstElementChild?.setAttribute("part","svg")}async fetchIcon(){return await(await fetch(this.src)).text()}async importIconFromAssets(){if(this.icon.includes("/")){const[e,t]=this.icon.split("/");return(await Bm(Object.assign({"../../../assets/icons/dev/angularjs.svg":l(()=>ht(()=>import("./angularjs-Dp5rC_a1.js"),[]),"../../../assets/icons/dev/angularjs.svg"),"../../../assets/icons/dev/aws.svg":l(()=>ht(()=>import("./aws-m6ZH-kyL.js"),[]),"../../../assets/icons/dev/aws.svg"),"../../../assets/icons/dev/cplusplus.svg":l(()=>ht(()=>import("./cplusplus-CNWWsQIM.js"),[]),"../../../assets/icons/dev/cplusplus.svg"),"../../../assets/icons/dev/graphql.svg":l(()=>ht(()=>import("./graphql-DXLf6Cdz.js"),[]),"../../../assets/icons/dev/graphql.svg"),"../../../assets/icons/dev/java.svg":l(()=>ht(()=>import("./java-BkuGeyTS.js"),[]),"../../../assets/icons/dev/java.svg"),"../../../assets/icons/dev/javascript.svg":l(()=>ht(()=>import("./javascript-DDC1CPuv.js"),[]),"../../../assets/icons/dev/javascript.svg"),"../../../assets/icons/dev/kotlin.svg":l(()=>ht(()=>import("./kotlin-Bxzp5xrd.js"),[]),"../../../assets/icons/dev/kotlin.svg"),"../../../assets/icons/dev/mongodb.svg":l(()=>ht(()=>import("./mongodb-BCWtQfdm.js"),[]),"../../../assets/icons/dev/mongodb.svg"),"../../../assets/icons/dev/mysql.svg":l(()=>ht(()=>import("./mysql-CjQNA-fq.js"),[]),"../../../assets/icons/dev/mysql.svg"),"../../../assets/icons/dev/nodejs.svg":l(()=>ht(()=>import("./nodejs-EI9uqLs_.js"),[]),"../../../assets/icons/dev/nodejs.svg"),"../../../assets/icons/dev/php.svg":l(()=>ht(()=>import("./php-M9g3Z2-n.js"),[]),"../../../assets/icons/dev/php.svg"),"../../../assets/icons/dev/postgresql.svg":l(()=>ht(()=>import("./postgresql-C7jF8uAA.js"),[]),"../../../assets/icons/dev/postgresql.svg"),"../../../assets/icons/dev/react.svg":l(()=>ht(()=>import("./react-BfT4JLvc.js"),[]),"../../../assets/icons/dev/react.svg"),"../../../assets/icons/dev/spring.svg":l(()=>ht(()=>import("./spring-BWtxD4Pr.js"),[]),"../../../assets/icons/dev/spring.svg"),"../../../assets/icons/dev/typescript.svg":l(()=>ht(()=>import("./typescript-D0TbaYWg.js"),[]),"../../../assets/icons/dev/typescript.svg"),"../../../assets/icons/social/email.svg":l(()=>ht(()=>import("./email-CWr6QoES.js"),[]),"../../../assets/icons/social/email.svg"),"../../../assets/icons/social/facebook.svg":l(()=>ht(()=>import("./facebook-C2D9Hbpy.js"),[]),"../../../assets/icons/social/facebook.svg"),"../../../assets/icons/social/github.svg":l(()=>ht(()=>import("./github-BLMasBwa.js"),[]),"../../../assets/icons/social/github.svg"),"../../../assets/icons/social/linkedin.svg":l(()=>ht(()=>import("./linkedin-BPjWRcho.js"),[]),"../../../assets/icons/social/linkedin.svg")}),`../../../assets/icons/${e}/${t}.svg`,7)).default}else return(await Bm(Object.assign({"../../../assets/icons/about-continent.svg":l(()=>ht(()=>import("./about-continent-CTGD7rx1.js"),[]),"../../../assets/icons/about-continent.svg"),"../../../assets/icons/accessibility.svg":l(()=>ht(()=>import("./accessibility-AkkeFAHp.js"),[]),"../../../assets/icons/accessibility.svg"),"../../../assets/icons/arrow.svg":l(()=>ht(()=>import("./arrow-CGB5doHk.js"),[]),"../../../assets/icons/arrow.svg"),"../../../assets/icons/code.svg":l(()=>ht(()=>import("./code-Bxv5tjxA.js"),[]),"../../../assets/icons/code.svg"),"../../../assets/icons/connect-continent.svg":l(()=>ht(()=>import("./connect-continent-C9-03iB-.js"),[]),"../../../assets/icons/connect-continent.svg"),"../../../assets/icons/life-continent.svg":l(()=>ht(()=>import("./life-continent-4FlchGgH.js"),[]),"../../../assets/icons/life-continent.svg"),"../../../assets/icons/link.svg":l(()=>ht(()=>import("./link-D-No-mmY.js"),[]),"../../../assets/icons/link.svg"),"../../../assets/icons/projects-continent.svg":l(()=>ht(()=>import("./projects-continent-Bhb5gNvo.js"),[]),"../../../assets/icons/projects-continent.svg"),"../../../assets/icons/work-continent.svg":l(()=>ht(()=>import("./work-continent-DBEVwq92.js"),[]),"../../../assets/icons/work-continent.svg")}),`../../../assets/icons/${this.icon}.svg`,6)).default}},l(Cs,"Icon"),Cs);rd([Hn()],Br.prototype,"src",2);rd([Hn()],Br.prototype,"icon",2);Br=rd([Qt(N0)],Br);wt(Br);const F0=`<!-- "on:click" is not set here because we can add "on:click" on the
host element and event bubbling will make that "on:click" run on
clicking this button. -->
<\${this.tag} class="circle-button" \${this.link ? \`href="\${this.link}"\` : ''}>
  <mp-icon icon="\${this.icon}" class="circle-button-icon" part="icon"></mp-icon>
  <span class="circle-button-tooltip \${this.tooltipPosition}">
    <slot></slot>
  </span>
</\${this.tag}>
`,B0=`.circle-button {
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
`;var k0=Object.defineProperty,z0=Object.getOwnPropertyDescriptor,Ya=l((s,e,t,n)=>{for(var i=n>1?void 0:n?z0(e,t):e,r=s.length-1,o;r>=0;r--)(o=s[r])&&(i=(n?o(e,t,i):o(i))||i);return n&&i&&k0(e,t,i),i},"__decorateClass$g"),Rs;let Qs=(Rs=class extends Pt{constructor(){super(...arguments),this.tooltipPosition="top"}onBeforeInit(){this.tag=this.link?"a":"button"}},l(Rs,"CircleButton"),Rs);Ya([Hn()],Qs.prototype,"icon",2);Ya([Hn()],Qs.prototype,"tooltipPosition",2);Ya([Hn()],Qs.prototype,"link",2);Qs=Ya([Dt(F0),Qt(B0)],Qs);wt(Qs);const H0=`<div class="backdrop"></div>
<div class="backdrop-focus">
  <slot></slot>
</div>
`,V0=`:host([active]) > .backdrop {
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
`;var G0=Object.getOwnPropertyDescriptor,W0=l((s,e,t,n)=>{for(var i=n>1?void 0:n?G0(e,t):e,r=s.length-1,o;r>=0;r--)(o=s[r])&&(i=o(i)||i);return i},"__decorateClass$f"),Ps;let Gl=(Ps=class extends Pt{},l(Ps,"Backdrop"),Ps);Gl=W0([Dt(H0),Qt(V0)],Gl);wt(Gl);const X0=`<slot name="time" class="timeline-event-time"></slot>
<slot name="title" class="timeline-event-title"></slot>
<slot name="subtitle" class="timeline-event-subtitle"></slot>
<p><slot></slot></p>
`,j0=`:host {
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
`;var q0=Object.getOwnPropertyDescriptor,Y0=l((s,e,t,n)=>{for(var i=n>1?void 0:n?q0(e,t):e,r=s.length-1,o;r>=0;r--)(o=s[r])&&(i=o(i)||i);return i},"__decorateClass$e"),Ls;let Wl=(Ls=class extends Pt{},l(Ls,"TimelineEvent"),Ls);Wl=Y0([Dt(X0),Qt(j0)],Wl);wt(Wl);const $0=`<slot class="timeline-event"></slot>
`,K0=`/* Hide the vertical bar for the last timeline event. */
.timeline-event::slotted(*:last-child)::after {
  display: none;
}
`;var J0=Object.getOwnPropertyDescriptor,Z0=l((s,e,t,n)=>{for(var i=n>1?void 0:n?J0(e,t):e,r=s.length-1,o;r>=0;r--)(o=s[r])&&(i=o(i)||i);return i},"__decorateClass$d"),Is;let Xl=(Is=class extends Pt{},l(Is,"Timeline"),Is);Xl=Z0([Dt($0),Qt(K0)],Xl);wt(Xl);const od="182",Q0=0,km=1,ev=2,Vo=1,tv=2,Mr=3,ti=0,Jt=1,wn=2,Qn=0,Ss=1,zm=2,Hm=3,Vm=4,nv=5,Fi=100,iv=101,sv=102,rv=103,ov=104,av=200,lv=201,cv=202,uv=203,jl=204,ql=205,hv=206,dv=207,fv=208,pv=209,mv=210,gv=211,_v=212,vv=213,xv=214,Yl=0,$l=1,Kl=2,er=3,Jl=4,Zl=5,Ql=6,ec=7,ad=0,yv=1,bv=2,Fn=0,E_=1,w_=2,T_=3,A_=4,C_=5,R_=6,P_=7,Gm="attached",Sv="detached",L_=300,Xi=301,tr=302,tc=303,nc=304,$a=306,nr=1e3,On=1001,$o=1002,Ct=1003,I_=1004,Er=1005,Rt=1006,Go=1007,Kn=1008,rn=1009,D_=1010,N_=1011,kr=1012,ld=1013,Bn=1014,fn=1015,ni=1016,cd=1017,ud=1018,zr=1020,O_=35902,U_=35899,F_=1021,B_=1022,pn=1023,ii=1026,Vi=1027,hd=1028,dd=1029,ir=1030,fd=1031,pd=1033,Wo=33776,Xo=33777,jo=33778,qo=33779,ic=35840,sc=35841,rc=35842,oc=35843,ac=36196,lc=37492,cc=37496,uc=37488,hc=37489,dc=37490,fc=37491,pc=37808,mc=37809,gc=37810,_c=37811,vc=37812,xc=37813,yc=37814,bc=37815,Sc=37816,Mc=37817,Ec=37818,wc=37819,Tc=37820,Ac=37821,Cc=36492,Rc=36494,Pc=36495,Lc=36283,Ic=36284,Dc=36285,Nc=36286,Hr=2300,Vr=2301,tl=2302,Wm=2400,Xm=2401,jm=2402,Mv=2500,Ev=0,k_=1,Oc=2,wv=3200,md=0,Tv=1,pi="",Ot="srgb",qt="srgb-linear",Ko="linear",at="srgb",Qi=7680,qm=519,Av=512,Cv=513,Rv=514,gd=515,Pv=516,Lv=517,_d=518,Iv=519,Uc=35044,Ym="300 es",Un=2e3,Jo=2001;function z_(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}l(z_,"arrayNeedsUint32");function Dv(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}l(Dv,"isTypedArray");function Gr(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}l(Gr,"createElementNS");function Nv(){const s=Gr("canvas");return s.style.display="block",s}l(Nv,"createCanvasElement");const $m={};function Zo(...s){const e="THREE."+s.shift();console.log(e,...s)}l(Zo,"log");function Ie(...s){const e="THREE."+s.shift();console.warn(e,...s)}l(Ie,"warn");function He(...s){const e="THREE."+s.shift();console.error(e,...s)}l(He,"error");function Wr(...s){const e=s.join(" ");e in $m||($m[e]=!0,Ie(...s))}l(Wr,"warnOnce");function Ov(s,e,t){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}l(r,"probe"),setTimeout(r,t)})}l(Ov,"probeAsync");const Cd=class Cd{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const i=n[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,e);e.target=null}}};l(Cd,"EventDispatcher");let si=Cd;const zt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Km=1234567;const Rr=Math.PI/180,sr=180/Math.PI;function mn(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(zt[s&255]+zt[s>>8&255]+zt[s>>16&255]+zt[s>>24&255]+"-"+zt[e&255]+zt[e>>8&255]+"-"+zt[e>>16&15|64]+zt[e>>24&255]+"-"+zt[t&63|128]+zt[t>>8&255]+"-"+zt[t>>16&255]+zt[t>>24&255]+zt[n&255]+zt[n>>8&255]+zt[n>>16&255]+zt[n>>24&255]).toLowerCase()}l(mn,"generateUUID");function Je(s,e,t){return Math.max(e,Math.min(t,s))}l(Je,"clamp");function vd(s,e){return(s%e+e)%e}l(vd,"euclideanModulo");function Uv(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}l(Uv,"mapLinear");function Fv(s,e,t){return s!==e?(t-s)/(e-s):0}l(Fv,"inverseLerp");function Pr(s,e,t){return(1-t)*s+t*e}l(Pr,"lerp");function Bv(s,e,t,n){return Pr(s,e,1-Math.exp(-t*n))}l(Bv,"damp");function kv(s,e=1){return e-Math.abs(vd(s,e*2)-e)}l(kv,"pingpong");function zv(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}l(zv,"smoothstep");function Hv(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}l(Hv,"smootherstep");function Vv(s,e){return s+Math.floor(Math.random()*(e-s+1))}l(Vv,"randInt");function Gv(s,e){return s+Math.random()*(e-s)}l(Gv,"randFloat");function Wv(s){return s*(.5-Math.random())}l(Wv,"randFloatSpread");function Xv(s){s!==void 0&&(Km=s);let e=Km+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}l(Xv,"seededRandom");function jv(s){return s*Rr}l(jv,"degToRad");function qv(s){return s*sr}l(qv,"radToDeg");function Yv(s){return(s&s-1)===0&&s!==0}l(Yv,"isPowerOfTwo");function $v(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}l($v,"ceilPowerOfTwo");function Kv(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}l(Kv,"floorPowerOfTwo");function Jv(s,e,t,n,i){const r=Math.cos,o=Math.sin,a=r(t/2),c=o(t/2),u=r((e+n)/2),h=o((e+n)/2),d=r((e-n)/2),f=o((e-n)/2),p=r((n-e)/2),_=o((n-e)/2);switch(i){case"XYX":s.set(a*h,c*d,c*f,a*u);break;case"YZY":s.set(c*f,a*h,c*d,a*u);break;case"ZXZ":s.set(c*d,c*f,a*h,a*u);break;case"XZX":s.set(a*h,c*_,c*p,a*u);break;case"YXY":s.set(c*p,a*h,c*_,a*u);break;case"ZYZ":s.set(c*_,c*p,a*h,a*u);break;default:Ie("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}l(Jv,"setQuaternionFromProperEuler");function Tn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}l(Tn,"denormalize");function lt(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}l(lt,"normalize");const gn={DEG2RAD:Rr,RAD2DEG:sr,generateUUID:mn,clamp:Je,euclideanModulo:vd,mapLinear:Uv,inverseLerp:Fv,lerp:Pr,damp:Bv,pingpong:kv,smoothstep:zv,smootherstep:Hv,randInt:Vv,randFloat:Gv,randFloatSpread:Wv,seededRandom:Xv,degToRad:jv,radToDeg:qv,isPowerOfTwo:Yv,ceilPowerOfTwo:$v,floorPowerOfTwo:Kv,setQuaternionFromProperEuler:Jv,normalize:lt,denormalize:Tn},Ia=class Ia{constructor(e=0,t=0){Ia.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Je(this.x,e.x,t.x),this.y=Je(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Je(this.x,e,t),this.y=Je(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Je(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Je(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*i+e.x,this.y=r*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};l(Ia,"Vector2");let oe=Ia;const Rd=class Rd{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,o,a){let c=n[i+0],u=n[i+1],h=n[i+2],d=n[i+3],f=r[o+0],p=r[o+1],_=r[o+2],v=r[o+3];if(a<=0){e[t+0]=c,e[t+1]=u,e[t+2]=h,e[t+3]=d;return}if(a>=1){e[t+0]=f,e[t+1]=p,e[t+2]=_,e[t+3]=v;return}if(d!==v||c!==f||u!==p||h!==_){let g=c*f+u*p+h*_+d*v;g<0&&(f=-f,p=-p,_=-_,v=-v,g=-g);let m=1-a;if(g<.9995){const T=Math.acos(g),M=Math.sin(T);m=Math.sin(m*T)/M,a=Math.sin(a*T)/M,c=c*m+f*a,u=u*m+p*a,h=h*m+_*a,d=d*m+v*a}else{c=c*m+f*a,u=u*m+p*a,h=h*m+_*a,d=d*m+v*a;const T=1/Math.sqrt(c*c+u*u+h*h+d*d);c*=T,u*=T,h*=T,d*=T}}e[t]=c,e[t+1]=u,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,i,r,o){const a=n[i],c=n[i+1],u=n[i+2],h=n[i+3],d=r[o],f=r[o+1],p=r[o+2],_=r[o+3];return e[t]=a*_+h*d+c*p-u*f,e[t+1]=c*_+h*f+u*d-a*p,e[t+2]=u*_+h*p+a*f-c*d,e[t+3]=h*_-a*d-c*f-u*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,r=e._z,o=e._order,a=Math.cos,c=Math.sin,u=a(n/2),h=a(i/2),d=a(r/2),f=c(n/2),p=c(i/2),_=c(r/2);switch(o){case"XYZ":this._x=f*h*d+u*p*_,this._y=u*p*d-f*h*_,this._z=u*h*_+f*p*d,this._w=u*h*d-f*p*_;break;case"YXZ":this._x=f*h*d+u*p*_,this._y=u*p*d-f*h*_,this._z=u*h*_-f*p*d,this._w=u*h*d+f*p*_;break;case"ZXY":this._x=f*h*d-u*p*_,this._y=u*p*d+f*h*_,this._z=u*h*_+f*p*d,this._w=u*h*d-f*p*_;break;case"ZYX":this._x=f*h*d-u*p*_,this._y=u*p*d+f*h*_,this._z=u*h*_-f*p*d,this._w=u*h*d+f*p*_;break;case"YZX":this._x=f*h*d+u*p*_,this._y=u*p*d+f*h*_,this._z=u*h*_-f*p*d,this._w=u*h*d-f*p*_;break;case"XZY":this._x=f*h*d-u*p*_,this._y=u*p*d-f*h*_,this._z=u*h*_+f*p*d,this._w=u*h*d+f*p*_;break;default:Ie("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],o=t[1],a=t[5],c=t[9],u=t[2],h=t[6],d=t[10],f=n+a+d;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(h-c)*p,this._y=(r-u)*p,this._z=(o-i)*p}else if(n>a&&n>d){const p=2*Math.sqrt(1+n-a-d);this._w=(h-c)/p,this._x=.25*p,this._y=(i+o)/p,this._z=(r+u)/p}else if(a>d){const p=2*Math.sqrt(1+a-n-d);this._w=(r-u)/p,this._x=(i+o)/p,this._y=.25*p,this._z=(c+h)/p}else{const p=2*Math.sqrt(1+d-n-a);this._w=(o-i)/p,this._x=(r+u)/p,this._y=(c+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Je(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,o=e._w,a=t._x,c=t._y,u=t._z,h=t._w;return this._x=n*h+o*a+i*u-r*c,this._y=i*h+o*c+r*a-n*u,this._z=r*h+o*u+n*c-i*a,this._w=o*h-n*a-i*c-r*u,this._onChangeCallback(),this}slerp(e,t){if(t<=0)return this;if(t>=1)return this.copy(e);let n=e._x,i=e._y,r=e._z,o=e._w,a=this.dot(e);a<0&&(n=-n,i=-i,r=-r,o=-o,a=-a);let c=1-t;if(a<.9995){const u=Math.acos(a),h=Math.sin(u);c=Math.sin(c*u)/h,t=Math.sin(t*u)/h,this._x=this._x*c+n*t,this._y=this._y*c+i*t,this._z=this._z*c+r*t,this._w=this._w*c+o*t,this._onChangeCallback()}else this._x=this._x*c+n*t,this._y=this._y*c+i*t,this._z=this._z*c+r*t,this._w=this._w*c+o*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}};l(Rd,"Quaternion");let At=Rd;const Da=class Da{constructor(e=0,t=0,n=0){Da.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Jm.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Jm.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,o=e.y,a=e.z,c=e.w,u=2*(o*i-a*n),h=2*(a*t-r*i),d=2*(r*n-o*t);return this.x=t+c*u+o*d-a*h,this.y=n+c*h+a*u-r*d,this.z=i+c*d+r*h-o*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Je(this.x,e.x,t.x),this.y=Je(this.y,e.y,t.y),this.z=Je(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Je(this.x,e,t),this.y=Je(this.y,e,t),this.z=Je(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Je(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,o=t.x,a=t.y,c=t.z;return this.x=i*c-r*a,this.y=r*o-n*c,this.z=n*a-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return nl.copy(this).projectOnVector(e),this.sub(nl)}reflect(e){return this.sub(nl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Je(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};l(Da,"Vector3");let I=Da;const nl=new I,Jm=new At,Na=class Na{constructor(e,t,n,i,r,o,a,c,u){Na.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,c,u)}set(e,t,n,i,r,o,a,c,u){const h=this.elements;return h[0]=e,h[1]=i,h[2]=a,h[3]=t,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[3],c=n[6],u=n[1],h=n[4],d=n[7],f=n[2],p=n[5],_=n[8],v=i[0],g=i[3],m=i[6],T=i[1],M=i[4],S=i[7],C=i[2],P=i[5],L=i[8];return r[0]=o*v+a*T+c*C,r[3]=o*g+a*M+c*P,r[6]=o*m+a*S+c*L,r[1]=u*v+h*T+d*C,r[4]=u*g+h*M+d*P,r[7]=u*m+h*S+d*L,r[2]=f*v+p*T+_*C,r[5]=f*g+p*M+_*P,r[8]=f*m+p*S+_*L,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],c=e[6],u=e[7],h=e[8];return t*o*h-t*a*u-n*r*h+n*a*c+i*r*u-i*o*c}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],c=e[6],u=e[7],h=e[8],d=h*o-a*u,f=a*c-h*r,p=u*r-o*c,_=t*d+n*f+i*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/_;return e[0]=d*v,e[1]=(i*u-h*n)*v,e[2]=(a*n-i*o)*v,e[3]=f*v,e[4]=(h*t-i*c)*v,e[5]=(i*r-a*t)*v,e[6]=p*v,e[7]=(n*c-u*t)*v,e[8]=(o*t-n*r)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,o,a){const c=Math.cos(r),u=Math.sin(r);return this.set(n*c,n*u,-n*(c*o+u*a)+o+e,-i*u,i*c,-i*(-u*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(il.makeScale(e,t)),this}rotate(e){return this.premultiply(il.makeRotation(-e)),this}translate(e,t){return this.premultiply(il.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};l(Na,"Matrix3");let Ye=Na;const il=new Ye,Zm=new Ye().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Qm=new Ye().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Zv(){const s={enabled:!0,workingColorSpace:qt,spaces:{},convert:l(function(i,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===at&&(i.r=ei(i.r),i.g=ei(i.g),i.b=ei(i.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===at&&(i.r=Ms(i.r),i.g=Ms(i.g),i.b=Ms(i.b))),i},"convert"),workingToColorSpace:l(function(i,r){return this.convert(i,this.workingColorSpace,r)},"workingToColorSpace"),colorSpaceToWorking:l(function(i,r){return this.convert(i,r,this.workingColorSpace)},"colorSpaceToWorking"),getPrimaries:l(function(i){return this.spaces[i].primaries},"getPrimaries"),getTransfer:l(function(i){return i===pi?Ko:this.spaces[i].transfer},"getTransfer"),getToneMappingMode:l(function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},"getToneMappingMode"),getLuminanceCoefficients:l(function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},"getLuminanceCoefficients"),define:l(function(i){Object.assign(this.spaces,i)},"define"),_getMatrix:l(function(i,r,o){return i.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},"_getMatrix"),_getDrawingBufferColorSpace:l(function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},"_getDrawingBufferColorSpace"),_getUnpackColorSpace:l(function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},"_getUnpackColorSpace"),fromWorkingColorSpace:l(function(i,r){return Wr("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(i,r)},"fromWorkingColorSpace"),toWorkingColorSpace:l(function(i,r){return Wr("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(i,r)},"toWorkingColorSpace")},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[qt]:{primaries:e,whitePoint:n,transfer:Ko,toXYZ:Zm,fromXYZ:Qm,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Ot},outputColorSpaceConfig:{drawingBufferColorSpace:Ot}},[Ot]:{primaries:e,whitePoint:n,transfer:at,toXYZ:Zm,fromXYZ:Qm,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Ot}}}),s}l(Zv,"createColorManagement");const et=Zv();function ei(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}l(ei,"SRGBToLinear");function Ms(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}l(Ms,"LinearToSRGB");let es;const Pd=class Pd{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{es===void 0&&(es=Gr("canvas")),es.width=e.width,es.height=e.height;const i=es.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=es}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Gr("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=ei(r[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(ei(t[n]/255)*255):t[n]=ei(t[n]);return{data:t,width:e.width,height:e.height}}else return Ie("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}};l(Pd,"ImageUtils");let Fc=Pd,Qv=0;const Ld=class Ld{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Qv++}),this.uuid=mn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(sl(i[o].image)):r.push(sl(i[o]))}else r=sl(i);n.url=r}return t||(e.images[this.uuid]=n),n}};l(Ld,"Source");let Xr=Ld;function sl(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Fc.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(Ie("Texture: Unable to serialize Texture."),{})}l(sl,"serializeImage");let ex=0;const rl=new I,xs=class xs extends si{constructor(e=xs.DEFAULT_IMAGE,t=xs.DEFAULT_MAPPING,n=On,i=On,r=Rt,o=Kn,a=pn,c=rn,u=xs.DEFAULT_ANISOTROPY,h=pi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ex++}),this.uuid=mn(),this.name="",this.source=new Xr(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=u,this.format=a,this.internalFormat=null,this.type=c,this.offset=new oe(0,0),this.repeat=new oe(1,1),this.center=new oe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ye,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(rl).x}get height(){return this.source.getSize(rl).y}get depth(){return this.source.getSize(rl).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){Ie(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){Ie(`Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==L_)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case nr:e.x=e.x-Math.floor(e.x);break;case On:e.x=e.x<0?0:1;break;case $o:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case nr:e.y=e.y-Math.floor(e.y);break;case On:e.y=e.y<0?0:1;break;case $o:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};l(xs,"Texture");let kt=xs;kt.DEFAULT_IMAGE=null;kt.DEFAULT_MAPPING=L_;kt.DEFAULT_ANISOTROPY=1;const Oa=class Oa{constructor(e=0,t=0,n=0,i=1){Oa.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const c=e.elements,u=c[0],h=c[4],d=c[8],f=c[1],p=c[5],_=c[9],v=c[2],g=c[6],m=c[10];if(Math.abs(h-f)<.01&&Math.abs(d-v)<.01&&Math.abs(_-g)<.01){if(Math.abs(h+f)<.1&&Math.abs(d+v)<.1&&Math.abs(_+g)<.1&&Math.abs(u+p+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const M=(u+1)/2,S=(p+1)/2,C=(m+1)/2,P=(h+f)/4,L=(d+v)/4,F=(_+g)/4;return M>S&&M>C?M<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(M),i=P/n,r=L/n):S>C?S<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(S),n=P/i,r=F/i):C<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(C),n=L/r,i=F/r),this.set(n,i,r,t),this}let T=Math.sqrt((g-_)*(g-_)+(d-v)*(d-v)+(f-h)*(f-h));return Math.abs(T)<.001&&(T=1),this.x=(g-_)/T,this.y=(d-v)/T,this.z=(f-h)/T,this.w=Math.acos((u+p+m-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Je(this.x,e.x,t.x),this.y=Je(this.y,e.y,t.y),this.z=Je(this.z,e.z,t.z),this.w=Je(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Je(this.x,e,t),this.y=Je(this.y,e,t),this.z=Je(this.z,e,t),this.w=Je(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Je(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};l(Oa,"Vector4");let vt=Oa;const Id=class Id extends si{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Rt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new vt(0,0,e,t),this.scissorTest=!1,this.viewport=new vt(0,0,e,t);const i={width:e,height:t,depth:n.depth},r=new kt(i);this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:Rt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const i=Object.assign({},e.textures[t].image);this.textures[t].source=new Xr(i)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}};l(Id,"RenderTarget");let Bc=Id;const Dd=class Dd extends Bc{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}};l(Dd,"WebGLRenderTarget");let _n=Dd;const Nd=class Nd extends kt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Ct,this.minFilter=Ct,this.wrapR=On,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};l(Nd,"DataArrayTexture");let Qo=Nd;const Od=class Od extends kt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Ct,this.minFilter=Ct,this.wrapR=On,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};l(Od,"Data3DTexture");let kc=Od;const Ud=class Ud{constructor(e=new I(1/0,1/0,1/0),t=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Sn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Sn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Sn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Sn):Sn.fromBufferAttribute(r,o),Sn.applyMatrix4(e.matrixWorld),this.expandByPoint(Sn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),uo.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),uo.copy(n.boundingBox)),uo.applyMatrix4(e.matrixWorld),this.union(uo)}const i=e.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Sn),Sn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(hr),ho.subVectors(this.max,hr),ts.subVectors(e.a,hr),ns.subVectors(e.b,hr),is.subVectors(e.c,hr),ri.subVectors(ns,ts),oi.subVectors(is,ns),Ri.subVectors(ts,is);let t=[0,-ri.z,ri.y,0,-oi.z,oi.y,0,-Ri.z,Ri.y,ri.z,0,-ri.x,oi.z,0,-oi.x,Ri.z,0,-Ri.x,-ri.y,ri.x,0,-oi.y,oi.x,0,-Ri.y,Ri.x,0];return!ol(t,ts,ns,is,ho)||(t=[1,0,0,0,1,0,0,0,1],!ol(t,ts,ns,is,ho))?!1:(fo.crossVectors(ri,oi),t=[fo.x,fo.y,fo.z],ol(t,ts,ns,is,ho))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Sn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Sn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Gn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Gn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Gn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Gn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Gn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Gn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Gn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Gn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Gn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}};l(Ud,"Box3");let vn=Ud;const Gn=[new I,new I,new I,new I,new I,new I,new I,new I],Sn=new I,uo=new vn,ts=new I,ns=new I,is=new I,ri=new I,oi=new I,Ri=new I,hr=new I,ho=new I,fo=new I,Pi=new I;function ol(s,e,t,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){Pi.fromArray(s,r);const a=i.x*Math.abs(Pi.x)+i.y*Math.abs(Pi.y)+i.z*Math.abs(Pi.z),c=e.dot(Pi),u=t.dot(Pi),h=n.dot(Pi);if(Math.max(-Math.max(c,u,h),Math.min(c,u,h))>a)return!1}return!0}l(ol,"satForAxes");const tx=new vn,dr=new I,al=new I,Fd=class Fd{constructor(e=new I,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):tx.setFromPoints(e).getCenter(n);let i=0;for(let r=0,o=e.length;r<o;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;dr.subVectors(e,this.center);const t=dr.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(dr,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(al.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(dr.copy(e.center).add(al)),this.expandByPoint(dr.copy(e.center).sub(al))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}};l(Fd,"Sphere");let an=Fd;const Wn=new I,ll=new I,po=new I,ai=new I,cl=new I,mo=new I,ul=new I,Bd=class Bd{constructor(e=new I,t=new I(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Wn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Wn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Wn.copy(this.origin).addScaledVector(this.direction,t),Wn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){ll.copy(e).add(t).multiplyScalar(.5),po.copy(t).sub(e).normalize(),ai.copy(this.origin).sub(ll);const r=e.distanceTo(t)*.5,o=-this.direction.dot(po),a=ai.dot(this.direction),c=-ai.dot(po),u=ai.lengthSq(),h=Math.abs(1-o*o);let d,f,p,_;if(h>0)if(d=o*c-a,f=o*a-c,_=r*h,d>=0)if(f>=-_)if(f<=_){const v=1/h;d*=v,f*=v,p=d*(d+o*f+2*a)+f*(o*d+f+2*c)+u}else f=r,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*c)+u;else f=-r,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*c)+u;else f<=-_?(d=Math.max(0,-(-o*r+a)),f=d>0?-r:Math.min(Math.max(-r,-c),r),p=-d*d+f*(f+2*c)+u):f<=_?(d=0,f=Math.min(Math.max(-r,-c),r),p=f*(f+2*c)+u):(d=Math.max(0,-(o*r+a)),f=d>0?r:Math.min(Math.max(-r,-c),r),p=-d*d+f*(f+2*c)+u);else f=o>0?-r:r,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*c)+u;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(ll).addScaledVector(po,f),p}intersectSphere(e,t){Wn.subVectors(e.center,this.origin);const n=Wn.dot(this.direction),i=Wn.dot(Wn)-n*n,r=e.radius*e.radius;if(i>r)return null;const o=Math.sqrt(r-i),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,o,a,c;const u=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,f=this.origin;return u>=0?(n=(e.min.x-f.x)*u,i=(e.max.x-f.x)*u):(n=(e.max.x-f.x)*u,i=(e.min.x-f.x)*u),h>=0?(r=(e.min.y-f.y)*h,o=(e.max.y-f.y)*h):(r=(e.max.y-f.y)*h,o=(e.min.y-f.y)*h),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),d>=0?(a=(e.min.z-f.z)*d,c=(e.max.z-f.z)*d):(a=(e.max.z-f.z)*d,c=(e.min.z-f.z)*d),n>c||a>i)||((a>n||n!==n)&&(n=a),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Wn)!==null}intersectTriangle(e,t,n,i,r){cl.subVectors(t,e),mo.subVectors(n,e),ul.crossVectors(cl,mo);let o=this.direction.dot(ul),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ai.subVectors(this.origin,e);const c=a*this.direction.dot(mo.crossVectors(ai,mo));if(c<0)return null;const u=a*this.direction.dot(cl.cross(ai));if(u<0||c+u>o)return null;const h=-a*ai.dot(ul);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}};l(Bd,"Ray");let _i=Bd;const Ur=class Ur{constructor(e,t,n,i,r,o,a,c,u,h,d,f,p,_,v,g){Ur.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,c,u,h,d,f,p,_,v,g)}set(e,t,n,i,r,o,a,c,u,h,d,f,p,_,v,g){const m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=i,m[1]=r,m[5]=o,m[9]=a,m[13]=c,m[2]=u,m[6]=h,m[10]=d,m[14]=f,m[3]=p,m[7]=_,m[11]=v,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ur().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,n=e.elements,i=1/ss.setFromMatrixColumn(e,0).length(),r=1/ss.setFromMatrixColumn(e,1).length(),o=1/ss.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(i),u=Math.sin(i),h=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){const f=o*h,p=o*d,_=a*h,v=a*d;t[0]=c*h,t[4]=-c*d,t[8]=u,t[1]=p+_*u,t[5]=f-v*u,t[9]=-a*c,t[2]=v-f*u,t[6]=_+p*u,t[10]=o*c}else if(e.order==="YXZ"){const f=c*h,p=c*d,_=u*h,v=u*d;t[0]=f+v*a,t[4]=_*a-p,t[8]=o*u,t[1]=o*d,t[5]=o*h,t[9]=-a,t[2]=p*a-_,t[6]=v+f*a,t[10]=o*c}else if(e.order==="ZXY"){const f=c*h,p=c*d,_=u*h,v=u*d;t[0]=f-v*a,t[4]=-o*d,t[8]=_+p*a,t[1]=p+_*a,t[5]=o*h,t[9]=v-f*a,t[2]=-o*u,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){const f=o*h,p=o*d,_=a*h,v=a*d;t[0]=c*h,t[4]=_*u-p,t[8]=f*u+v,t[1]=c*d,t[5]=v*u+f,t[9]=p*u-_,t[2]=-u,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){const f=o*c,p=o*u,_=a*c,v=a*u;t[0]=c*h,t[4]=v-f*d,t[8]=_*d+p,t[1]=d,t[5]=o*h,t[9]=-a*h,t[2]=-u*h,t[6]=p*d+_,t[10]=f-v*d}else if(e.order==="XZY"){const f=o*c,p=o*u,_=a*c,v=a*u;t[0]=c*h,t[4]=-d,t[8]=u*h,t[1]=f*d+v,t[5]=o*h,t[9]=p*d-_,t[2]=_*d-p,t[6]=a*h,t[10]=v*d+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(nx,e,ix)}lookAt(e,t,n){const i=this.elements;return nn.subVectors(e,t),nn.lengthSq()===0&&(nn.z=1),nn.normalize(),li.crossVectors(n,nn),li.lengthSq()===0&&(Math.abs(n.z)===1?nn.x+=1e-4:nn.z+=1e-4,nn.normalize(),li.crossVectors(n,nn)),li.normalize(),go.crossVectors(nn,li),i[0]=li.x,i[4]=go.x,i[8]=nn.x,i[1]=li.y,i[5]=go.y,i[9]=nn.y,i[2]=li.z,i[6]=go.z,i[10]=nn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[4],c=n[8],u=n[12],h=n[1],d=n[5],f=n[9],p=n[13],_=n[2],v=n[6],g=n[10],m=n[14],T=n[3],M=n[7],S=n[11],C=n[15],P=i[0],L=i[4],F=i[8],y=i[12],E=i[1],w=i[5],U=i[9],D=i[13],V=i[2],G=i[6],H=i[10],z=i[14],K=i[3],ae=i[7],ce=i[11],he=i[15];return r[0]=o*P+a*E+c*V+u*K,r[4]=o*L+a*w+c*G+u*ae,r[8]=o*F+a*U+c*H+u*ce,r[12]=o*y+a*D+c*z+u*he,r[1]=h*P+d*E+f*V+p*K,r[5]=h*L+d*w+f*G+p*ae,r[9]=h*F+d*U+f*H+p*ce,r[13]=h*y+d*D+f*z+p*he,r[2]=_*P+v*E+g*V+m*K,r[6]=_*L+v*w+g*G+m*ae,r[10]=_*F+v*U+g*H+m*ce,r[14]=_*y+v*D+g*z+m*he,r[3]=T*P+M*E+S*V+C*K,r[7]=T*L+M*w+S*G+C*ae,r[11]=T*F+M*U+S*H+C*ce,r[15]=T*y+M*D+S*z+C*he,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],o=e[1],a=e[5],c=e[9],u=e[13],h=e[2],d=e[6],f=e[10],p=e[14],_=e[3],v=e[7],g=e[11],m=e[15],T=c*p-u*f,M=a*p-u*d,S=a*f-c*d,C=o*p-u*h,P=o*f-c*h,L=o*d-a*h;return t*(v*T-g*M+m*S)-n*(_*T-g*C+m*P)+i*(_*M-v*C+m*L)-r*(_*S-v*P+g*L)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],c=e[6],u=e[7],h=e[8],d=e[9],f=e[10],p=e[11],_=e[12],v=e[13],g=e[14],m=e[15],T=d*g*u-v*f*u+v*c*p-a*g*p-d*c*m+a*f*m,M=_*f*u-h*g*u-_*c*p+o*g*p+h*c*m-o*f*m,S=h*v*u-_*d*u+_*a*p-o*v*p-h*a*m+o*d*m,C=_*d*c-h*v*c-_*a*f+o*v*f+h*a*g-o*d*g,P=t*T+n*M+i*S+r*C;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const L=1/P;return e[0]=T*L,e[1]=(v*f*r-d*g*r-v*i*p+n*g*p+d*i*m-n*f*m)*L,e[2]=(a*g*r-v*c*r+v*i*u-n*g*u-a*i*m+n*c*m)*L,e[3]=(d*c*r-a*f*r-d*i*u+n*f*u+a*i*p-n*c*p)*L,e[4]=M*L,e[5]=(h*g*r-_*f*r+_*i*p-t*g*p-h*i*m+t*f*m)*L,e[6]=(_*c*r-o*g*r-_*i*u+t*g*u+o*i*m-t*c*m)*L,e[7]=(o*f*r-h*c*r+h*i*u-t*f*u-o*i*p+t*c*p)*L,e[8]=S*L,e[9]=(_*d*r-h*v*r-_*n*p+t*v*p+h*n*m-t*d*m)*L,e[10]=(o*v*r-_*a*r+_*n*u-t*v*u-o*n*m+t*a*m)*L,e[11]=(h*a*r-o*d*r-h*n*u+t*d*u+o*n*p-t*a*p)*L,e[12]=C*L,e[13]=(h*v*i-_*d*i+_*n*f-t*v*f-h*n*g+t*d*g)*L,e[14]=(_*a*i-o*v*i-_*n*c+t*v*c+o*n*g-t*a*g)*L,e[15]=(o*d*i-h*a*i+h*n*c-t*d*c-o*n*f+t*a*f)*L,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,o=e.x,a=e.y,c=e.z,u=r*o,h=r*a;return this.set(u*o+n,u*a-i*c,u*c+i*a,0,u*a+i*c,h*a+n,h*c-i*o,0,u*c-i*a,h*c+i*o,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,o){return this.set(1,n,r,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,o=t._y,a=t._z,c=t._w,u=r+r,h=o+o,d=a+a,f=r*u,p=r*h,_=r*d,v=o*h,g=o*d,m=a*d,T=c*u,M=c*h,S=c*d,C=n.x,P=n.y,L=n.z;return i[0]=(1-(v+m))*C,i[1]=(p+S)*C,i[2]=(_-M)*C,i[3]=0,i[4]=(p-S)*P,i[5]=(1-(f+m))*P,i[6]=(g+T)*P,i[7]=0,i[8]=(_+M)*L,i[9]=(g-T)*L,i[10]=(1-(f+v))*L,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;if(e.x=i[12],e.y=i[13],e.z=i[14],this.determinant()===0)return n.set(1,1,1),t.identity(),this;let r=ss.set(i[0],i[1],i[2]).length();const o=ss.set(i[4],i[5],i[6]).length(),a=ss.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),Mn.copy(this);const u=1/r,h=1/o,d=1/a;return Mn.elements[0]*=u,Mn.elements[1]*=u,Mn.elements[2]*=u,Mn.elements[4]*=h,Mn.elements[5]*=h,Mn.elements[6]*=h,Mn.elements[8]*=d,Mn.elements[9]*=d,Mn.elements[10]*=d,t.setFromRotationMatrix(Mn),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,i,r,o,a=Un,c=!1){const u=this.elements,h=2*r/(t-e),d=2*r/(n-i),f=(t+e)/(t-e),p=(n+i)/(n-i);let _,v;if(c)_=r/(o-r),v=o*r/(o-r);else if(a===Un)_=-(o+r)/(o-r),v=-2*o*r/(o-r);else if(a===Jo)_=-o/(o-r),v=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return u[0]=h,u[4]=0,u[8]=f,u[12]=0,u[1]=0,u[5]=d,u[9]=p,u[13]=0,u[2]=0,u[6]=0,u[10]=_,u[14]=v,u[3]=0,u[7]=0,u[11]=-1,u[15]=0,this}makeOrthographic(e,t,n,i,r,o,a=Un,c=!1){const u=this.elements,h=2/(t-e),d=2/(n-i),f=-(t+e)/(t-e),p=-(n+i)/(n-i);let _,v;if(c)_=1/(o-r),v=o/(o-r);else if(a===Un)_=-2/(o-r),v=-(o+r)/(o-r);else if(a===Jo)_=-1/(o-r),v=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return u[0]=h,u[4]=0,u[8]=0,u[12]=f,u[1]=0,u[5]=d,u[9]=0,u[13]=p,u[2]=0,u[6]=0,u[10]=_,u[14]=v,u[3]=0,u[7]=0,u[11]=0,u[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};l(Ur,"Matrix4");let qe=Ur;const ss=new I,Mn=new qe,nx=new I(0,0,0),ix=new I(1,1,1),li=new I,go=new I,nn=new I,eg=new qe,tg=new At,Ua=class Ua{constructor(e=0,t=0,n=0,i=Ua.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],o=i[4],a=i[8],c=i[1],u=i[5],h=i[9],d=i[2],f=i[6],p=i[10];switch(t){case"XYZ":this._y=Math.asin(Je(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,u),this._z=0);break;case"YXZ":this._x=Math.asin(-Je(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(c,u)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Je(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Je(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin(Je(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,u),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Je(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,u),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:Ie("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return eg.makeRotationFromQuaternion(e),this.setFromRotationMatrix(eg,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return tg.setFromEuler(this),this.setFromQuaternion(tg,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};l(Ua,"Euler");let An=Ua;An.DEFAULT_ORDER="XYZ";const kd=class kd{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}};l(kd,"Layers");let jr=kd,sx=0;const ng=new I,rs=new At,Xn=new qe,_o=new I,fr=new I,rx=new I,ox=new At,ig=new I(1,0,0),sg=new I(0,1,0),rg=new I(0,0,1),og={type:"added"},ax={type:"removed"},os={type:"childadded",child:null},hl={type:"childremoved",child:null},ys=class ys extends si{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:sx++}),this.uuid=mn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ys.DEFAULT_UP.clone();const e=new I,t=new An,n=new At,i=new I(1,1,1);function r(){n.setFromEuler(t,!1)}l(r,"onRotationChange");function o(){t.setFromQuaternion(n,void 0,!1)}l(o,"onQuaternionChange"),t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new qe},normalMatrix:{value:new Ye}}),this.matrix=new qe,this.matrixWorld=new qe,this.matrixAutoUpdate=ys.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ys.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new jr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return rs.setFromAxisAngle(e,t),this.quaternion.multiply(rs),this}rotateOnWorldAxis(e,t){return rs.setFromAxisAngle(e,t),this.quaternion.premultiply(rs),this}rotateX(e){return this.rotateOnAxis(ig,e)}rotateY(e){return this.rotateOnAxis(sg,e)}rotateZ(e){return this.rotateOnAxis(rg,e)}translateOnAxis(e,t){return ng.copy(e).applyQuaternion(this.quaternion),this.position.add(ng.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ig,e)}translateY(e){return this.translateOnAxis(sg,e)}translateZ(e){return this.translateOnAxis(rg,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Xn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?_o.copy(e):_o.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),fr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Xn.lookAt(fr,_o,this.up):Xn.lookAt(_o,fr,this.up),this.quaternion.setFromRotationMatrix(Xn),i&&(Xn.extractRotation(i.matrixWorld),rs.setFromRotationMatrix(Xn),this.quaternion.premultiply(rs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(He("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(og),os.child=e,this.dispatchEvent(os),os.child=null):He("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(ax),hl.child=e,this.dispatchEvent(hl),hl.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Xn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Xn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Xn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(og),os.child=e,this.dispatchEvent(os),os.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(fr,e,rx),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(fr,ox,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(a=>({...a})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(l(r,"serialize"),this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let u=0,h=c.length;u<h;u++){const d=c[u];r(e.shapes,d)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,u=this.material.length;c<u;c++)a.push(r(e.materials,this.material[c]));i.material=a}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];i.animations.push(r(e.animations,c))}}if(t){const a=o(e.geometries),c=o(e.materials),u=o(e.textures),h=o(e.images),d=o(e.shapes),f=o(e.skeletons),p=o(e.animations),_=o(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),u.length>0&&(n.textures=u),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),f.length>0&&(n.skeletons=f),p.length>0&&(n.animations=p),_.length>0&&(n.nodes=_)}return n.object=i,n;function o(a){const c=[];for(const u in a){const h=a[u];delete h.metadata,c.push(h)}return c}l(o,"extractFromCache")}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}};l(ys,"Object3D");let bt=ys;bt.DEFAULT_UP=new I(0,1,0);bt.DEFAULT_MATRIX_AUTO_UPDATE=!0;bt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const En=new I,jn=new I,dl=new I,qn=new I,as=new I,ls=new I,ag=new I,fl=new I,pl=new I,ml=new I,gl=new vt,_l=new vt,vl=new vt,di=class di{constructor(e=new I,t=new I,n=new I){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),En.subVectors(e,t),i.cross(En);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){En.subVectors(i,t),jn.subVectors(n,t),dl.subVectors(e,t);const o=En.dot(En),a=En.dot(jn),c=En.dot(dl),u=jn.dot(jn),h=jn.dot(dl),d=o*u-a*a;if(d===0)return r.set(0,0,0),null;const f=1/d,p=(u*c-a*h)*f,_=(o*h-a*c)*f;return r.set(1-p-_,_,p)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,qn)===null?!1:qn.x>=0&&qn.y>=0&&qn.x+qn.y<=1}static getInterpolation(e,t,n,i,r,o,a,c){return this.getBarycoord(e,t,n,i,qn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,qn.x),c.addScaledVector(o,qn.y),c.addScaledVector(a,qn.z),c)}static getInterpolatedAttribute(e,t,n,i,r,o){return gl.setScalar(0),_l.setScalar(0),vl.setScalar(0),gl.fromBufferAttribute(e,t),_l.fromBufferAttribute(e,n),vl.fromBufferAttribute(e,i),o.setScalar(0),o.addScaledVector(gl,r.x),o.addScaledVector(_l,r.y),o.addScaledVector(vl,r.z),o}static isFrontFacing(e,t,n,i){return En.subVectors(n,t),jn.subVectors(e,t),En.cross(jn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return En.subVectors(this.c,this.b),jn.subVectors(this.a,this.b),En.cross(jn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return di.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return di.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,r){return di.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return di.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return di.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let o,a;as.subVectors(i,n),ls.subVectors(r,n),fl.subVectors(e,n);const c=as.dot(fl),u=ls.dot(fl);if(c<=0&&u<=0)return t.copy(n);pl.subVectors(e,i);const h=as.dot(pl),d=ls.dot(pl);if(h>=0&&d<=h)return t.copy(i);const f=c*d-h*u;if(f<=0&&c>=0&&h<=0)return o=c/(c-h),t.copy(n).addScaledVector(as,o);ml.subVectors(e,r);const p=as.dot(ml),_=ls.dot(ml);if(_>=0&&p<=_)return t.copy(r);const v=p*u-c*_;if(v<=0&&u>=0&&_<=0)return a=u/(u-_),t.copy(n).addScaledVector(ls,a);const g=h*_-p*d;if(g<=0&&d-h>=0&&p-_>=0)return ag.subVectors(r,i),a=(d-h)/(d-h+(p-_)),t.copy(i).addScaledVector(ag,a);const m=1/(g+v+f);return o=v*m,a=f*m,t.copy(n).addScaledVector(as,o).addScaledVector(ls,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}};l(di,"Triangle");let Bi=di;const H_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ci={h:0,s:0,l:0},vo={h:0,s:0,l:0};function xl(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}l(xl,"hue2rgb");var Ds;let We=(Ds=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ot){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,et.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=et.workingColorSpace){return this.r=e,this.g=t,this.b=n,et.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=et.workingColorSpace){if(e=vd(e,1),t=Je(t,0,1),n=Je(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=xl(o,r,e+1/3),this.g=xl(o,r,e),this.b=xl(o,r,e-1/3)}return et.colorSpaceToWorking(this,i),this}setStyle(e,t=Ot){function n(r){r!==void 0&&parseFloat(r)<1&&Ie("Color: Alpha component of "+e+" will be ignored.")}l(n,"handleAlpha");let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Ie("Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);Ie("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ot){const n=H_[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Ie("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ei(e.r),this.g=ei(e.g),this.b=ei(e.b),this}copyLinearToSRGB(e){return this.r=Ms(e.r),this.g=Ms(e.g),this.b=Ms(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ot){return et.workingToColorSpace(Ht.copy(this),e),Math.round(Je(Ht.r*255,0,255))*65536+Math.round(Je(Ht.g*255,0,255))*256+Math.round(Je(Ht.b*255,0,255))}getHexString(e=Ot){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=et.workingColorSpace){et.workingToColorSpace(Ht.copy(this),t);const n=Ht.r,i=Ht.g,r=Ht.b,o=Math.max(n,i,r),a=Math.min(n,i,r);let c,u;const h=(a+o)/2;if(a===o)c=0,u=0;else{const d=o-a;switch(u=h<=.5?d/(o+a):d/(2-o-a),o){case n:c=(i-r)/d+(i<r?6:0);break;case i:c=(r-n)/d+2;break;case r:c=(n-i)/d+4;break}c/=6}return e.h=c,e.s=u,e.l=h,e}getRGB(e,t=et.workingColorSpace){return et.workingToColorSpace(Ht.copy(this),t),e.r=Ht.r,e.g=Ht.g,e.b=Ht.b,e}getStyle(e=Ot){et.workingToColorSpace(Ht.copy(this),e);const t=Ht.r,n=Ht.g,i=Ht.b;return e!==Ot?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(ci),this.setHSL(ci.h+e,ci.s+t,ci.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ci),e.getHSL(vo);const n=Pr(ci.h,vo.h,t),i=Pr(ci.s,vo.s,t),r=Pr(ci.l,vo.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},l(Ds,"Color"),Ds);const Ht=new We;We.NAMES=H_;let lx=0;const zd=class zd extends si{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:lx++}),this.uuid=mn(),this.name="",this.type="Material",this.blending=Ss,this.side=ti,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=jl,this.blendDst=ql,this.blendEquation=Fi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new We(0,0,0),this.blendAlpha=0,this.depthFunc=er,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=qm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Qi,this.stencilZFail=Qi,this.stencilZPass=Qi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){Ie(`Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){Ie(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ss&&(n.blending=this.blending),this.side!==ti&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==jl&&(n.blendSrc=this.blendSrc),this.blendDst!==ql&&(n.blendDst=this.blendDst),this.blendEquation!==Fi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==er&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==qm&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Qi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Qi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Qi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(l(i,"extractFromCache"),t){const r=i(e.textures),o=i(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};l(zd,"Material");let on=zd;const Hd=class Hd extends on{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new We(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new An,this.combine=ad,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};l(Hd,"MeshBasicMaterial");let Jn=Hd;const Tt=new I,xo=new oe;let cx=0;const Vd=class Vd{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:cx++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Uc,this.updateRanges=[],this.gpuType=fn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)xo.fromBufferAttribute(this,t),xo.applyMatrix3(e),this.setXY(t,xo.x,xo.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Tt.fromBufferAttribute(this,t),Tt.applyMatrix3(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Tt.fromBufferAttribute(this,t),Tt.applyMatrix4(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Tt.fromBufferAttribute(this,t),Tt.applyNormalMatrix(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Tt.fromBufferAttribute(this,t),Tt.transformDirection(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Tn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=lt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Tn(t,this.array)),t}setX(e,t){return this.normalized&&(t=lt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Tn(t,this.array)),t}setY(e,t){return this.normalized&&(t=lt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Tn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=lt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Tn(t,this.array)),t}setW(e,t){return this.normalized&&(t=lt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=lt(t,this.array),n=lt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=lt(t,this.array),n=lt(n,this.array),i=lt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=lt(t,this.array),n=lt(n,this.array),i=lt(i,this.array),r=lt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Uc&&(e.usage=this.usage),e}};l(Vd,"BufferAttribute");let Bt=Vd;const Gd=class Gd extends Bt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};l(Gd,"Uint16BufferAttribute");let ea=Gd;const Wd=class Wd extends Bt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};l(Wd,"Uint32BufferAttribute");let ta=Wd;const Xd=class Xd extends Bt{constructor(e,t,n){super(new Float32Array(e),t,n)}};l(Xd,"Float32BufferAttribute");let Et=Xd,ux=0;const hn=new qe,yl=new bt,cs=new I,sn=new vn,pr=new vn,Nt=new I,Fa=class Fa extends si{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ux++}),this.uuid=mn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(z_(e)?ta:ea)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Ye().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return hn.makeRotationFromQuaternion(e),this.applyMatrix4(hn),this}rotateX(e){return hn.makeRotationX(e),this.applyMatrix4(hn),this}rotateY(e){return hn.makeRotationY(e),this.applyMatrix4(hn),this}rotateZ(e){return hn.makeRotationZ(e),this.applyMatrix4(hn),this}translate(e,t,n){return hn.makeTranslation(e,t,n),this.applyMatrix4(hn),this}scale(e,t,n){return hn.makeScale(e,t,n),this.applyMatrix4(hn),this}lookAt(e){return yl.lookAt(e),yl.updateMatrix(),this.applyMatrix4(yl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(cs).negate(),this.translate(cs.x,cs.y,cs.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,r=e.length;i<r;i++){const o=e[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Et(n,3))}else{const n=Math.min(e.length,t.count);for(let i=0;i<n;i++){const r=e[i];t.setXYZ(i,r.x,r.y,r.z||0)}e.length>t.count&&Ie("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new vn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){He("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];sn.setFromBufferAttribute(r),this.morphTargetsRelative?(Nt.addVectors(this.boundingBox.min,sn.min),this.boundingBox.expandByPoint(Nt),Nt.addVectors(this.boundingBox.max,sn.max),this.boundingBox.expandByPoint(Nt)):(this.boundingBox.expandByPoint(sn.min),this.boundingBox.expandByPoint(sn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&He('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new an);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){He("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(e){const n=this.boundingSphere.center;if(sn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];pr.setFromBufferAttribute(a),this.morphTargetsRelative?(Nt.addVectors(sn.min,pr.min),sn.expandByPoint(Nt),Nt.addVectors(sn.max,pr.max),sn.expandByPoint(Nt)):(sn.expandByPoint(pr.min),sn.expandByPoint(pr.max))}sn.getCenter(n);let i=0;for(let r=0,o=e.count;r<o;r++)Nt.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(Nt));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],c=this.morphTargetsRelative;for(let u=0,h=a.count;u<h;u++)Nt.fromBufferAttribute(a,u),c&&(cs.fromBufferAttribute(e,u),Nt.add(cs)),i=Math.max(i,n.distanceToSquared(Nt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&He('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){He("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Bt(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let F=0;F<n.count;F++)a[F]=new I,c[F]=new I;const u=new I,h=new I,d=new I,f=new oe,p=new oe,_=new oe,v=new I,g=new I;function m(F,y,E){u.fromBufferAttribute(n,F),h.fromBufferAttribute(n,y),d.fromBufferAttribute(n,E),f.fromBufferAttribute(r,F),p.fromBufferAttribute(r,y),_.fromBufferAttribute(r,E),h.sub(u),d.sub(u),p.sub(f),_.sub(f);const w=1/(p.x*_.y-_.x*p.y);isFinite(w)&&(v.copy(h).multiplyScalar(_.y).addScaledVector(d,-p.y).multiplyScalar(w),g.copy(d).multiplyScalar(p.x).addScaledVector(h,-_.x).multiplyScalar(w),a[F].add(v),a[y].add(v),a[E].add(v),c[F].add(g),c[y].add(g),c[E].add(g))}l(m,"handleTriangle");let T=this.groups;T.length===0&&(T=[{start:0,count:e.count}]);for(let F=0,y=T.length;F<y;++F){const E=T[F],w=E.start,U=E.count;for(let D=w,V=w+U;D<V;D+=3)m(e.getX(D+0),e.getX(D+1),e.getX(D+2))}const M=new I,S=new I,C=new I,P=new I;function L(F){C.fromBufferAttribute(i,F),P.copy(C);const y=a[F];M.copy(y),M.sub(C.multiplyScalar(C.dot(y))).normalize(),S.crossVectors(P,y);const w=S.dot(c[F])<0?-1:1;o.setXYZW(F,M.x,M.y,M.z,w)}l(L,"handleVertex");for(let F=0,y=T.length;F<y;++F){const E=T[F],w=E.start,U=E.count;for(let D=w,V=w+U;D<V;D+=3)L(e.getX(D+0)),L(e.getX(D+1)),L(e.getX(D+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Bt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,p=n.count;f<p;f++)n.setXYZ(f,0,0,0);const i=new I,r=new I,o=new I,a=new I,c=new I,u=new I,h=new I,d=new I;if(e)for(let f=0,p=e.count;f<p;f+=3){const _=e.getX(f+0),v=e.getX(f+1),g=e.getX(f+2);i.fromBufferAttribute(t,_),r.fromBufferAttribute(t,v),o.fromBufferAttribute(t,g),h.subVectors(o,r),d.subVectors(i,r),h.cross(d),a.fromBufferAttribute(n,_),c.fromBufferAttribute(n,v),u.fromBufferAttribute(n,g),a.add(h),c.add(h),u.add(h),n.setXYZ(_,a.x,a.y,a.z),n.setXYZ(v,c.x,c.y,c.z),n.setXYZ(g,u.x,u.y,u.z)}else for(let f=0,p=t.count;f<p;f+=3)i.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),h.subVectors(o,r),d.subVectors(i,r),h.cross(d),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Nt.fromBufferAttribute(e,t),Nt.normalize(),e.setXYZ(t,Nt.x,Nt.y,Nt.z)}toNonIndexed(){function e(a,c){const u=a.array,h=a.itemSize,d=a.normalized,f=new u.constructor(c.length*h);let p=0,_=0;for(let v=0,g=c.length;v<g;v++){a.isInterleavedBufferAttribute?p=c[v]*a.data.stride+a.offset:p=c[v]*h;for(let m=0;m<h;m++)f[_++]=u[p++]}return new Bt(f,h,d)}if(l(e,"convertBufferAttribute"),this.index===null)return Ie("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Fa,n=this.index.array,i=this.attributes;for(const a in i){const c=i[a],u=e(c,n);t.setAttribute(a,u)}const r=this.morphAttributes;for(const a in r){const c=[],u=r[a];for(let h=0,d=u.length;h<d;h++){const f=u[h],p=e(f,n);c.push(p)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const u=o[a];t.addGroup(u.start,u.count,u.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const u in c)c[u]!==void 0&&(e[u]=c[u]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const u=n[c];e.data.attributes[c]=u.toJSON(e.data)}const i={};let r=!1;for(const c in this.morphAttributes){const u=this.morphAttributes[c],h=[];for(let d=0,f=u.length;d<f;d++){const p=u[d];h.push(p.toJSON(e.data))}h.length>0&&(i[c]=h,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const i=e.attributes;for(const u in i){const h=i[u];this.setAttribute(u,h.clone(t))}const r=e.morphAttributes;for(const u in r){const h=[],d=r[u];for(let f=0,p=d.length;f<p;f++)h.push(d[f].clone(t));this.morphAttributes[u]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let u=0,h=o.length;u<h;u++){const d=o[u];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}};l(Fa,"BufferGeometry");let Gt=Fa;const lg=new qe,Li=new _i,yo=new an,cg=new I,bo=new I,So=new I,Mo=new I,bl=new I,Eo=new I,ug=new I,wo=new I,jd=class jd extends bt{constructor(e=new Gt,t=new Jn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(r&&a){Eo.set(0,0,0);for(let c=0,u=r.length;c<u;c++){const h=a[c],d=r[c];h!==0&&(bl.fromBufferAttribute(d,e),o?Eo.addScaledVector(bl,h):Eo.addScaledVector(bl.sub(t),h))}t.add(Eo)}return t}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),yo.copy(n.boundingSphere),yo.applyMatrix4(r),Li.copy(e.ray).recast(e.near),!(yo.containsPoint(Li.origin)===!1&&(Li.intersectSphere(yo,cg)===null||Li.origin.distanceToSquared(cg)>(e.far-e.near)**2))&&(lg.copy(r).invert(),Li.copy(e.ray).applyMatrix4(lg),!(n.boundingBox!==null&&Li.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Li)))}_computeIntersections(e,t,n){let i;const r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,u=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,f=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,v=f.length;_<v;_++){const g=f[_],m=o[g.materialIndex],T=Math.max(g.start,p.start),M=Math.min(a.count,Math.min(g.start+g.count,p.start+p.count));for(let S=T,C=M;S<C;S+=3){const P=a.getX(S),L=a.getX(S+1),F=a.getX(S+2);i=To(this,m,e,n,u,h,d,P,L,F),i&&(i.faceIndex=Math.floor(S/3),i.face.materialIndex=g.materialIndex,t.push(i))}}else{const _=Math.max(0,p.start),v=Math.min(a.count,p.start+p.count);for(let g=_,m=v;g<m;g+=3){const T=a.getX(g),M=a.getX(g+1),S=a.getX(g+2);i=To(this,o,e,n,u,h,d,T,M,S),i&&(i.faceIndex=Math.floor(g/3),t.push(i))}}else if(c!==void 0)if(Array.isArray(o))for(let _=0,v=f.length;_<v;_++){const g=f[_],m=o[g.materialIndex],T=Math.max(g.start,p.start),M=Math.min(c.count,Math.min(g.start+g.count,p.start+p.count));for(let S=T,C=M;S<C;S+=3){const P=S,L=S+1,F=S+2;i=To(this,m,e,n,u,h,d,P,L,F),i&&(i.faceIndex=Math.floor(S/3),i.face.materialIndex=g.materialIndex,t.push(i))}}else{const _=Math.max(0,p.start),v=Math.min(c.count,p.start+p.count);for(let g=_,m=v;g<m;g+=3){const T=g,M=g+1,S=g+2;i=To(this,o,e,n,u,h,d,T,M,S),i&&(i.faceIndex=Math.floor(g/3),t.push(i))}}}};l(jd,"Mesh");let ft=jd;function hx(s,e,t,n,i,r,o,a){let c;if(e.side===Jt?c=n.intersectTriangle(o,r,i,!0,a):c=n.intersectTriangle(i,r,o,e.side===ti,a),c===null)return null;wo.copy(a),wo.applyMatrix4(s.matrixWorld);const u=t.ray.origin.distanceTo(wo);return u<t.near||u>t.far?null:{distance:u,point:wo.clone(),object:s}}l(hx,"checkIntersection$1");function To(s,e,t,n,i,r,o,a,c,u){s.getVertexPosition(a,bo),s.getVertexPosition(c,So),s.getVertexPosition(u,Mo);const h=hx(s,e,t,n,bo,So,Mo,ug);if(h){const d=new I;Bi.getBarycoord(ug,bo,So,Mo,d),i&&(h.uv=Bi.getInterpolatedAttribute(i,a,c,u,d,new oe)),r&&(h.uv1=Bi.getInterpolatedAttribute(r,a,c,u,d,new oe)),o&&(h.normal=Bi.getInterpolatedAttribute(o,a,c,u,d,new I),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const f={a,b:c,c:u,normal:new I,materialIndex:0};Bi.getNormal(bo,So,Mo,f.normal),h.face=f,h.barycoord=d}return h}l(To,"checkGeometryIntersection");const Ba=class Ba extends Gt{constructor(e=1,t=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};const a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);const c=[],u=[],h=[],d=[];let f=0,p=0;_("z","y","x",-1,-1,n,t,e,o,r,0),_("z","y","x",1,-1,n,t,-e,o,r,1),_("x","z","y",1,1,e,n,t,i,o,2),_("x","z","y",1,-1,e,n,-t,i,o,3),_("x","y","z",1,-1,e,t,n,i,r,4),_("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(c),this.setAttribute("position",new Et(u,3)),this.setAttribute("normal",new Et(h,3)),this.setAttribute("uv",new Et(d,2));function _(v,g,m,T,M,S,C,P,L,F,y){const E=S/L,w=C/F,U=S/2,D=C/2,V=P/2,G=L+1,H=F+1;let z=0,K=0;const ae=new I;for(let ce=0;ce<H;ce++){const he=ce*w-D;for(let Ve=0;Ve<G;Ve++){const Ne=Ve*E-U;ae[v]=Ne*T,ae[g]=he*M,ae[m]=V,u.push(ae.x,ae.y,ae.z),ae[v]=0,ae[g]=0,ae[m]=P>0?1:-1,h.push(ae.x,ae.y,ae.z),d.push(Ve/L),d.push(1-ce/F),z+=1}}for(let ce=0;ce<F;ce++)for(let he=0;he<L;he++){const Ve=f+he+G*ce,Ne=f+he+G*(ce+1),nt=f+(he+1)+G*(ce+1),st=f+(he+1)+G*ce;c.push(Ve,Ne,st),c.push(Ne,nt,st),K+=6}a.addGroup(p,K,y),p+=K,f+=z}l(_,"buildPlane")}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ba(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};l(Ba,"BoxGeometry");let kn=Ba;function rr(s){const e={};for(const t in s){e[t]={};for(const n in s[t]){const i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(Ie("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}l(rr,"cloneUniforms");function jt(s){const e={};for(let t=0;t<s.length;t++){const n=rr(s[t]);for(const i in n)e[i]=n[i]}return e}l(jt,"mergeUniforms");function dx(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}l(dx,"cloneUniformsGroups");function V_(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:et.workingColorSpace}l(V_,"getUnlitUniformColorSpace");const fx={clone:rr,merge:jt};var px=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,mx=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;const qd=class qd extends on{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=px,this.fragmentShader=mx,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=rr(e.uniforms),this.uniformsGroups=dx(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}};l(qd,"ShaderMaterial");let xn=qd;const Yd=class Yd extends bt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new qe,this.projectionMatrix=new qe,this.projectionMatrixInverse=new qe,this.coordinateSystem=Un,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}};l(Yd,"Camera");let na=Yd;const ui=new I,hg=new oe,dg=new oe,$d=class $d extends na{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=sr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Rr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return sr*2*Math.atan(Math.tan(Rr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){ui.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ui.x,ui.y).multiplyScalar(-e/ui.z),ui.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ui.x,ui.y).multiplyScalar(-e/ui.z)}getViewSize(e,t){return this.getViewBounds(e,hg,dg),t.subVectors(dg,hg)}setViewOffset(e,t,n,i,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Rr*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,u=o.fullHeight;r+=o.offsetX*i/c,t-=o.offsetY*n/u,i*=o.width/c,n*=o.height/u}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};l($d,"PerspectiveCamera");let Ft=$d;const us=-90,hs=1,Kd=class Kd extends bt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Ft(us,hs,e,t);i.layers=this.layers,this.add(i);const r=new Ft(us,hs,e,t);r.layers=this.layers,this.add(r);const o=new Ft(us,hs,e,t);o.layers=this.layers,this.add(o);const a=new Ft(us,hs,e,t);a.layers=this.layers,this.add(a);const c=new Ft(us,hs,e,t);c.layers=this.layers,this.add(c);const u=new Ft(us,hs,e,t);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,r,o,a,c]=t;for(const u of t)this.remove(u);if(e===Un)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Jo)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of t)this.add(u),u.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,c,u,h]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,r),e.setRenderTarget(n,1,i),e.render(t,o),e.setRenderTarget(n,2,i),e.render(t,a),e.setRenderTarget(n,3,i),e.render(t,c),e.setRenderTarget(n,4,i),e.render(t,u),n.texture.generateMipmaps=v,e.setRenderTarget(n,5,i),e.render(t,h),e.setRenderTarget(d,f,p),e.xr.enabled=_,n.texture.needsPMREMUpdate=!0}};l(Kd,"CubeCamera");let zc=Kd;const Jd=class Jd extends kt{constructor(e=[],t=Xi,n,i,r,o,a,c,u,h){super(e,t,n,i,r,o,a,c,u,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}};l(Jd,"CubeTexture");let ia=Jd;const Zd=class Zd extends _n{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new ia(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new kn(5,5,5),r=new xn({name:"CubemapFromEquirect",uniforms:rr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Jt,blending:Qn});r.uniforms.tEquirect.value=t;const o=new ft(i,r),a=t.minFilter;return t.minFilter===Kn&&(t.minFilter=Rt),new zc(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(r)}};l(Zd,"WebGLCubeRenderTarget");let sa=Zd;var Ns;let xt=(Ns=class extends bt{constructor(){super(),this.isGroup=!0,this.type="Group"}},l(Ns,"Group"),Ns);const gx={type:"move"},Qd=class Qd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new xt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new xt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new xt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,o=null;const a=this._targetRay,c=this._grip,u=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(u&&e.hand){o=!0;for(const v of e.hand.values()){const g=t.getJointPose(v,n),m=this._getHandJoint(u,v);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}const h=u.joints["index-finger-tip"],d=u.joints["thumb-tip"],f=h.position.distanceTo(d.position),p=.02,_=.005;u.inputState.pinching&&f>p+_?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&f<=p-_&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(gx)))}return a!==null&&(a.visible=i!==null),c!==null&&(c.visible=r!==null),u!==null&&(u.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new xt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}};l(Qd,"WebXRController");let Lr=Qd;const ef=class ef extends bt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new An,this.environmentIntensity=1,this.environmentRotation=new An,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}};l(ef,"Scene");let Hc=ef;const tf=class tf{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Uc,this.updateRanges=[],this.version=0,this.uuid=mn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=mn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=mn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}};l(tf,"InterleavedBuffer");let Vc=tf;const Xt=new I,ka=class ka{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Xt.fromBufferAttribute(this,t),Xt.applyMatrix4(e),this.setXYZ(t,Xt.x,Xt.y,Xt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Xt.fromBufferAttribute(this,t),Xt.applyNormalMatrix(e),this.setXYZ(t,Xt.x,Xt.y,Xt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Xt.fromBufferAttribute(this,t),Xt.transformDirection(e),this.setXYZ(t,Xt.x,Xt.y,Xt.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Tn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=lt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=lt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=lt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=lt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=lt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Tn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Tn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Tn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Tn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=lt(t,this.array),n=lt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=lt(t,this.array),n=lt(n,this.array),i=lt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=lt(t,this.array),n=lt(n,this.array),i=lt(i,this.array),r=lt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){Zo("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new Bt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new ka(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Zo("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}};l(ka,"InterleavedBufferAttribute");let Gc=ka;const fg=new I,pg=new vt,mg=new vt,_x=new I,gg=new qe,Ao=new I,Sl=new an,_g=new qe,Ml=new _i,nf=class nf extends ft{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Gm,this.bindMatrix=new qe,this.bindMatrixInverse=new qe,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new vn),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Ao),this.boundingBox.expandByPoint(Ao)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new an),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Ao),this.boundingSphere.expandByPoint(Ao)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Sl.copy(this.boundingSphere),Sl.applyMatrix4(i),e.ray.intersectsSphere(Sl)!==!1&&(_g.copy(i).invert(),Ml.copy(e.ray).applyMatrix4(_g),!(this.boundingBox!==null&&Ml.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Ml)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new vt,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Gm?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Sv?this.bindMatrixInverse.copy(this.bindMatrix).invert():Ie("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;pg.fromBufferAttribute(i.attributes.skinIndex,e),mg.fromBufferAttribute(i.attributes.skinWeight,e),fg.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const o=mg.getComponent(r);if(o!==0){const a=pg.getComponent(r);gg.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(_x.copy(fg).applyMatrix4(gg),o)}}return t.applyMatrix4(this.bindMatrixInverse)}};l(nf,"SkinnedMesh");let Wc=nf;const sf=class sf extends bt{constructor(){super(),this.isBone=!0,this.type="Bone"}};l(sf,"Bone");let ra=sf;const rf=class rf extends kt{constructor(e=null,t=1,n=1,i,r,o,a,c,u=Ct,h=Ct,d,f){super(null,o,a,c,u,h,i,r,d,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};l(rf,"DataTexture");let qr=rf;const vg=new qe,vx=new qe,za=class za{constructor(e=[],t=[]){this.uuid=mn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.previousBoneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){Ie("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new qe)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new qe;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,o=e.length;r<o;r++){const a=e[r]?e[r].matrixWorld:vx;vg.multiplyMatrices(a,t[r]),vg.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new za(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new qr(t,e,e,pn,fn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const r=e.bones[n];let o=t[r];o===void 0&&(Ie("Skeleton: No bone found with UUID:",r),o=new ra),this.bones.push(o),this.boneInverses.push(new qe().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){const o=t[i];e.bones.push(o.uuid);const a=n[i];e.boneInverses.push(a.toArray())}return e}};l(za,"Skeleton");let Xc=za;const of=class of extends Bt{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}};l(of,"InstancedBufferAttribute");let Yr=of;const ds=new qe,xg=new qe,Co=[],yg=new vn,xx=new qe,mr=new ft,gr=new an,af=class af extends ft{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Yr(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,xx)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new vn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ds),yg.copy(e.boundingBox).applyMatrix4(ds),this.boundingBox.union(yg)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new an),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ds),gr.copy(e.boundingSphere).applyMatrix4(ds),this.boundingSphere.union(gr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(e,t){const n=this.matrixWorld,i=this.count;if(mr.geometry=this.geometry,mr.material=this.material,mr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),gr.copy(this.boundingSphere),gr.applyMatrix4(n),e.ray.intersectsSphere(gr)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,ds),xg.multiplyMatrices(n,ds),mr.matrixWorld=xg,mr.raycast(e,Co);for(let o=0,a=Co.length;o<a;o++){const c=Co[o];c.instanceId=r,c.object=this,t.push(c)}Co.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Yr(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new qr(new Float32Array(i*this.count),i,this.count,hd,fn));const r=this.morphTexture.source.data.data;let o=0;for(let u=0;u<n.length;u++)o+=n[u];const a=this.geometry.morphTargetsRelative?1:1-o,c=i*e;r[c]=a,r.set(n,c+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}};l(af,"InstancedMesh");let jc=af;const El=new I,yx=new I,bx=new Ye,lf=class lf{constructor(e=new I(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=El.subVectors(n,t).cross(yx.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(El),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||bx.getNormalMatrix(e),i=this.coplanarPoint(El).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}};l(lf,"Plane");let $n=lf;const Ii=new an,Sx=new oe(.5,.5),Ro=new I,cf=class cf{constructor(e=new $n,t=new $n,n=new $n,i=new $n,r=new $n,o=new $n){this.planes=[e,t,n,i,r,o]}set(e,t,n,i,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Un,n=!1){const i=this.planes,r=e.elements,o=r[0],a=r[1],c=r[2],u=r[3],h=r[4],d=r[5],f=r[6],p=r[7],_=r[8],v=r[9],g=r[10],m=r[11],T=r[12],M=r[13],S=r[14],C=r[15];if(i[0].setComponents(u-o,p-h,m-_,C-T).normalize(),i[1].setComponents(u+o,p+h,m+_,C+T).normalize(),i[2].setComponents(u+a,p+d,m+v,C+M).normalize(),i[3].setComponents(u-a,p-d,m-v,C-M).normalize(),n)i[4].setComponents(c,f,g,S).normalize(),i[5].setComponents(u-c,p-f,m-g,C-S).normalize();else if(i[4].setComponents(u-c,p-f,m-g,C-S).normalize(),t===Un)i[5].setComponents(u+c,p+f,m+g,C+S).normalize();else if(t===Jo)i[5].setComponents(c,f,g,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ii.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ii.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ii)}intersectsSprite(e){Ii.center.set(0,0,0);const t=Sx.distanceTo(e.center);return Ii.radius=.7071067811865476+t,Ii.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ii)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Ro.x=i.normal.x>0?e.max.x:e.min.x,Ro.y=i.normal.y>0?e.max.y:e.min.y,Ro.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Ro)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};l(cf,"Frustum");let $r=cf;const uf=class uf extends on{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new We(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}};l(uf,"LineBasicMaterial");let oa=uf;const aa=new I,la=new I,bg=new qe,_r=new _i,Po=new an,wl=new I,Sg=new I,hf=class hf extends bt{constructor(e=new Gt,t=new oa){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)aa.fromBufferAttribute(t,i-1),la.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=aa.distanceTo(la);e.setAttribute("lineDistance",new Et(n,1))}else Ie("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Po.copy(n.boundingSphere),Po.applyMatrix4(i),Po.radius+=r,e.ray.intersectsSphere(Po)===!1)return;bg.copy(i).invert(),_r.copy(e.ray).applyMatrix4(bg);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,u=this.isLineSegments?2:1,h=n.index,f=n.attributes.position;if(h!==null){const p=Math.max(0,o.start),_=Math.min(h.count,o.start+o.count);for(let v=p,g=_-1;v<g;v+=u){const m=h.getX(v),T=h.getX(v+1),M=Lo(this,e,_r,c,m,T,v);M&&t.push(M)}if(this.isLineLoop){const v=h.getX(_-1),g=h.getX(p),m=Lo(this,e,_r,c,v,g,_-1);m&&t.push(m)}}else{const p=Math.max(0,o.start),_=Math.min(f.count,o.start+o.count);for(let v=p,g=_-1;v<g;v+=u){const m=Lo(this,e,_r,c,v,v+1,v);m&&t.push(m)}if(this.isLineLoop){const v=Lo(this,e,_r,c,_-1,p,_-1);v&&t.push(v)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};l(hf,"Line");let Kr=hf;function Lo(s,e,t,n,i,r,o){const a=s.geometry.attributes.position;if(aa.fromBufferAttribute(a,i),la.fromBufferAttribute(a,r),t.distanceSqToSegment(aa,la,wl,Sg)>n)return;wl.applyMatrix4(s.matrixWorld);const u=e.ray.origin.distanceTo(wl);if(!(u<e.near||u>e.far))return{distance:u,point:Sg.clone().applyMatrix4(s.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:s}}l(Lo,"checkIntersection");const Mg=new I,Eg=new I,df=class df extends Kr{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)Mg.fromBufferAttribute(t,i),Eg.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Mg.distanceTo(Eg);e.setAttribute("lineDistance",new Et(n,1))}else Ie("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};l(df,"LineSegments");let qc=df;const ff=class ff extends Kr{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}};l(ff,"LineLoop");let Yc=ff;const pf=class pf extends on{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new We(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}};l(pf,"PointsMaterial");let Jr=pf;const wg=new qe,$c=new _i,Io=new an,Do=new I,mf=class mf extends bt{constructor(e=new Gt,t=new Jr){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Io.copy(n.boundingSphere),Io.applyMatrix4(i),Io.radius+=r,e.ray.intersectsSphere(Io)===!1)return;wg.copy(i).invert(),$c.copy(e.ray).applyMatrix4(wg);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,u=n.index,d=n.attributes.position;if(u!==null){const f=Math.max(0,o.start),p=Math.min(u.count,o.start+o.count);for(let _=f,v=p;_<v;_++){const g=u.getX(_);Do.fromBufferAttribute(d,g),Tg(Do,g,c,i,e,t,this)}}else{const f=Math.max(0,o.start),p=Math.min(d.count,o.start+o.count);for(let _=f,v=p;_<v;_++)Do.fromBufferAttribute(d,_),Tg(Do,_,c,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};l(mf,"Points");let ca=mf;function Tg(s,e,t,n,i,r,o){const a=$c.distanceSqToPoint(s);if(a<t){const c=new I;$c.closestPointToPoint(s,c),c.applyMatrix4(n);const u=i.ray.origin.distanceTo(c);if(u<i.near||u>i.far)return;r.push({distance:u,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}l(Tg,"testPoint");const gf=class gf extends kt{constructor(e,t,n=Bn,i,r,o,a=Ct,c=Ct,u,h=ii,d=1){if(h!==ii&&h!==Vi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:e,height:t,depth:d};super(f,i,r,o,a,c,h,n,u),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Xr(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}};l(gf,"DepthTexture");let ji=gf;const _f=class _f extends ji{constructor(e,t=Bn,n=Xi,i,r,o=Ct,a=Ct,c,u=ii){const h={width:e,height:e,depth:1},d=[h,h,h,h,h,h];super(e,e,t,n,i,r,o,a,c,u),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}};l(_f,"CubeDepthTexture");let Kc=_f;const vf=class vf extends kt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}};l(vf,"ExternalTexture");let ua=vf;const Ha=class Ha extends Gt{constructor(e=1,t=1,n=1,i=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};const u=this;i=Math.floor(i),r=Math.floor(r);const h=[],d=[],f=[],p=[];let _=0;const v=[],g=n/2;let m=0;T(),o===!1&&(e>0&&M(!0),t>0&&M(!1)),this.setIndex(h),this.setAttribute("position",new Et(d,3)),this.setAttribute("normal",new Et(f,3)),this.setAttribute("uv",new Et(p,2));function T(){const S=new I,C=new I;let P=0;const L=(t-e)/n;for(let F=0;F<=r;F++){const y=[],E=F/r,w=E*(t-e)+e;for(let U=0;U<=i;U++){const D=U/i,V=D*c+a,G=Math.sin(V),H=Math.cos(V);C.x=w*G,C.y=-E*n+g,C.z=w*H,d.push(C.x,C.y,C.z),S.set(G,L,H).normalize(),f.push(S.x,S.y,S.z),p.push(D,1-E),y.push(_++)}v.push(y)}for(let F=0;F<i;F++)for(let y=0;y<r;y++){const E=v[y][F],w=v[y+1][F],U=v[y+1][F+1],D=v[y][F+1];(e>0||y!==0)&&(h.push(E,w,D),P+=3),(t>0||y!==r-1)&&(h.push(w,U,D),P+=3)}u.addGroup(m,P,0),m+=P}l(T,"generateTorso");function M(S){const C=_,P=new oe,L=new I;let F=0;const y=S===!0?e:t,E=S===!0?1:-1;for(let U=1;U<=i;U++)d.push(0,g*E,0),f.push(0,E,0),p.push(.5,.5),_++;const w=_;for(let U=0;U<=i;U++){const V=U/i*c+a,G=Math.cos(V),H=Math.sin(V);L.x=y*H,L.y=g*E,L.z=y*G,d.push(L.x,L.y,L.z),f.push(0,E,0),P.x=G*.5+.5,P.y=H*.5*E+.5,p.push(P.x,P.y),_++}for(let U=0;U<i;U++){const D=C+U,V=w+U;S===!0?h.push(V,V+1,D):h.push(V+1,V,D),F+=3}u.addGroup(m,F,S===!0?1:2),m+=F}l(M,"generateCap")}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ha(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};l(Ha,"CylinderGeometry");let ha=Ha;const Va=class Va extends ha{constructor(e=1,t=1,n=32,i=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,n,i,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new Va(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};l(Va,"ConeGeometry");let Zr=Va;const xf=class xf{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Ie("Curve: .getPoint() not implemented.")}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,i=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(i),t.push(r),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const n=this.getLengths();let i=0;const r=n.length;let o;t?o=t:o=e*n[r-1];let a=0,c=r-1,u;for(;a<=c;)if(i=Math.floor(a+(c-a)/2),u=n[i]-o,u<0)a=i+1;else if(u>0)c=i-1;else{c=i;break}if(i=c,n[i]===o)return i/(r-1);const h=n[i],f=n[i+1]-h,p=(o-h)/f;return(i+p)/(r-1)}getTangent(e,t){let i=e-1e-4,r=e+1e-4;i<0&&(i=0),r>1&&(r=1);const o=this.getPoint(i),a=this.getPoint(r),c=t||(o.isVector2?new oe:new I);return c.copy(a).sub(o).normalize(),c}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){const n=new I,i=[],r=[],o=[],a=new I,c=new qe;for(let p=0;p<=e;p++){const _=p/e;i[p]=this.getTangentAt(_,new I)}r[0]=new I,o[0]=new I;let u=Number.MAX_VALUE;const h=Math.abs(i[0].x),d=Math.abs(i[0].y),f=Math.abs(i[0].z);h<=u&&(u=h,n.set(1,0,0)),d<=u&&(u=d,n.set(0,1,0)),f<=u&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],a),o[0].crossVectors(i[0],r[0]);for(let p=1;p<=e;p++){if(r[p]=r[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(i[p-1],i[p]),a.length()>Number.EPSILON){a.normalize();const _=Math.acos(Je(i[p-1].dot(i[p]),-1,1));r[p].applyMatrix4(c.makeRotationAxis(a,_))}o[p].crossVectors(i[p],r[p])}if(t===!0){let p=Math.acos(Je(r[0].dot(r[e]),-1,1));p/=e,i[0].dot(a.crossVectors(r[0],r[e]))>0&&(p=-p);for(let _=1;_<=e;_++)r[_].applyMatrix4(c.makeRotationAxis(i[_],p*_)),o[_].crossVectors(i[_],r[_])}return{tangents:i,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}};l(xf,"Curve");let yn=xf;const yf=class yf extends yn{constructor(e=0,t=0,n=1,i=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(e,t=new oe){const n=t,i=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(o?r=0:r=i),this.aClockwise===!0&&!o&&(r===i?r=-i:r=r-i);const a=this.aStartAngle+e*r;let c=this.aX+this.xRadius*Math.cos(a),u=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),f=c-this.aX,p=u-this.aY;c=f*h-p*d+this.aX,u=f*d+p*h+this.aY}return n.set(c,u)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}};l(yf,"EllipseCurve");let Qr=yf;const bf=class bf extends Qr{constructor(e,t,n,i,r,o){super(e,t,n,n,i,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};l(bf,"ArcCurve");let Jc=bf;function xd(){let s=0,e=0,t=0,n=0;function i(r,o,a,c){s=r,e=a,t=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return l(i,"init"),{initCatmullRom:l(function(r,o,a,c,u){i(o,a,u*(a-r),u*(c-o))},"initCatmullRom"),initNonuniformCatmullRom:l(function(r,o,a,c,u,h,d){let f=(o-r)/u-(a-r)/(u+h)+(a-o)/h,p=(a-o)/h-(c-o)/(h+d)+(c-a)/d;f*=h,p*=h,i(o,a,f,p)},"initNonuniformCatmullRom"),calc:l(function(r){const o=r*r,a=o*r;return s+e*r+t*o+n*a},"calc")}}l(xd,"CubicPoly");const No=new I,Tl=new xd,Al=new xd,Cl=new xd,Sf=class Sf extends yn{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new I){const n=t,i=this.points,r=i.length,o=(r-(this.closed?0:1))*e;let a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let u,h;this.closed||a>0?u=i[(a-1)%r]:(No.subVectors(i[0],i[1]).add(i[0]),u=No);const d=i[a%r],f=i[(a+1)%r];if(this.closed||a+2<r?h=i[(a+2)%r]:(No.subVectors(i[r-1],i[r-2]).add(i[r-1]),h=No),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let _=Math.pow(u.distanceToSquared(d),p),v=Math.pow(d.distanceToSquared(f),p),g=Math.pow(f.distanceToSquared(h),p);v<1e-4&&(v=1),_<1e-4&&(_=v),g<1e-4&&(g=v),Tl.initNonuniformCatmullRom(u.x,d.x,f.x,h.x,_,v,g),Al.initNonuniformCatmullRom(u.y,d.y,f.y,h.y,_,v,g),Cl.initNonuniformCatmullRom(u.z,d.z,f.z,h.z,_,v,g)}else this.curveType==="catmullrom"&&(Tl.initCatmullRom(u.x,d.x,f.x,h.x,this.tension),Al.initCatmullRom(u.y,d.y,f.y,h.y,this.tension),Cl.initCatmullRom(u.z,d.z,f.z,h.z,this.tension));return n.set(Tl.calc(c),Al.calc(c),Cl.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new I().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};l(Sf,"CatmullRomCurve3");let Zc=Sf;function Ag(s,e,t,n,i){const r=(n-e)*.5,o=(i-t)*.5,a=s*s,c=s*a;return(2*t-2*n+r+o)*c+(-3*t+3*n-2*r-o)*a+r*s+t}l(Ag,"CatmullRom");function Mx(s,e){const t=1-s;return t*t*e}l(Mx,"QuadraticBezierP0");function Ex(s,e){return 2*(1-s)*s*e}l(Ex,"QuadraticBezierP1");function wx(s,e){return s*s*e}l(wx,"QuadraticBezierP2");function Ir(s,e,t,n){return Mx(s,e)+Ex(s,t)+wx(s,n)}l(Ir,"QuadraticBezier");function Tx(s,e){const t=1-s;return t*t*t*e}l(Tx,"CubicBezierP0");function Ax(s,e){const t=1-s;return 3*t*t*s*e}l(Ax,"CubicBezierP1");function Cx(s,e){return 3*(1-s)*s*s*e}l(Cx,"CubicBezierP2");function Rx(s,e){return s*s*s*e}l(Rx,"CubicBezierP3");function Dr(s,e,t,n,i){return Tx(s,e)+Ax(s,t)+Cx(s,n)+Rx(s,i)}l(Dr,"CubicBezier");const Mf=class Mf extends yn{constructor(e=new oe,t=new oe,n=new oe,i=new oe){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new oe){const n=t,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Dr(e,i.x,r.x,o.x,a.x),Dr(e,i.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}};l(Mf,"CubicBezierCurve");let da=Mf;const Ef=class Ef extends yn{constructor(e=new I,t=new I,n=new I,i=new I){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new I){const n=t,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Dr(e,i.x,r.x,o.x,a.x),Dr(e,i.y,r.y,o.y,a.y),Dr(e,i.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}};l(Ef,"CubicBezierCurve3");let Qc=Ef;const wf=class wf extends yn{constructor(e=new oe,t=new oe){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new oe){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new oe){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}};l(wf,"LineCurve");let fa=wf;const Tf=class Tf extends yn{constructor(e=new I,t=new I){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new I){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new I){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}};l(Tf,"LineCurve3");let eu=Tf;const Af=class Af extends yn{constructor(e=new oe,t=new oe,n=new oe){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new oe){const n=t,i=this.v0,r=this.v1,o=this.v2;return n.set(Ir(e,i.x,r.x,o.x),Ir(e,i.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}};l(Af,"QuadraticBezierCurve");let pa=Af;const Cf=class Cf extends yn{constructor(e=new I,t=new I,n=new I){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new I){const n=t,i=this.v0,r=this.v1,o=this.v2;return n.set(Ir(e,i.x,r.x,o.x),Ir(e,i.y,r.y,o.y),Ir(e,i.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}};l(Cf,"QuadraticBezierCurve3");let tu=Cf;const Rf=class Rf extends yn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new oe){const n=t,i=this.points,r=(i.length-1)*e,o=Math.floor(r),a=r-o,c=i[o===0?o:o-1],u=i[o],h=i[o>i.length-2?i.length-1:o+1],d=i[o>i.length-3?i.length-1:o+2];return n.set(Ag(a,c.x,u.x,h.x,d.x),Ag(a,c.y,u.y,h.y,d.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new oe().fromArray(i))}return this}};l(Rf,"SplineCurve");let ma=Rf;var nu=Object.freeze({__proto__:null,ArcCurve:Jc,CatmullRomCurve3:Zc,CubicBezierCurve:da,CubicBezierCurve3:Qc,EllipseCurve:Qr,LineCurve:fa,LineCurve3:eu,QuadraticBezierCurve:pa,QuadraticBezierCurve3:tu,SplineCurve:ma});const Pf=class Pf extends yn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new nu[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),i=this.getCurveLengths();let r=0;for(;r<i.length;){if(i[r]>=n){const o=i[r]-n,a=this.curves[r],c=a.getLength(),u=c===0?0:1-o/c;return a.getPointAt(u,t)}r++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let i=0,r=this.curves;i<r.length;i++){const o=r[i],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,c=o.getPoints(a);for(let u=0;u<c.length;u++){const h=c[u];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(new nu[i.type]().fromJSON(i))}return this}};l(Pf,"CurvePath");let iu=Pf;const Lf=class Lf extends iu{constructor(e){super(),this.type="Path",this.currentPoint=new oe,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new fa(this.currentPoint.clone(),new oe(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){const r=new pa(this.currentPoint.clone(),new oe(e,t),new oe(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,r,o){const a=new da(this.currentPoint.clone(),new oe(e,t),new oe(n,i),new oe(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new ma(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,r,o){const a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+a,t+c,n,i,r,o),this}absarc(e,t,n,i,r,o){return this.absellipse(e,t,n,n,i,r,o),this}ellipse(e,t,n,i,r,o,a,c){const u=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+u,t+h,n,i,r,o,a,c),this}absellipse(e,t,n,i,r,o,a,c){const u=new Qr(e,t,n,i,r,o,a,c);if(this.curves.length>0){const d=u.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(u);const h=u.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}};l(Lf,"Path");let ga=Lf;const If=class If extends ga{constructor(e){super(e),this.uuid=mn(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,i=this.holes.length;n<i;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const i=this.holes[t];e.holes.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(new ga().fromJSON(i))}return this}};l(If,"Shape");let _a=If;function Px(s,e,t=2){const n=e&&e.length,i=n?e[0]*t:s.length;let r=G_(s,0,i,t,!0);const o=[];if(!r||r.next===r.prev)return o;let a,c,u;if(n&&(r=Ox(s,e,r,t)),s.length>80*t){a=s[0],c=s[1];let h=a,d=c;for(let f=t;f<i;f+=t){const p=s[f],_=s[f+1];p<a&&(a=p),_<c&&(c=_),p>h&&(h=p),_>d&&(d=_)}u=Math.max(h-a,d-c),u=u!==0?32767/u:0}return eo(r,o,t,a,c,u,0),o}l(Px,"earcut");function G_(s,e,t,n,i){let r;if(i===jx(s,e,t,n)>0)for(let o=e;o<t;o+=n)r=Cg(o/n|0,s[o],s[o+1],r);else for(let o=t-n;o>=e;o-=n)r=Cg(o/n|0,s[o],s[o+1],r);return r&&or(r,r.next)&&(no(r),r=r.next),r}l(G_,"linkedList");function qi(s,e){if(!s)return s;e||(e=s);let t=s,n;do if(n=!1,!t.steiner&&(or(t,t.next)||yt(t.prev,t,t.next)===0)){if(no(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}l(qi,"filterPoints");function eo(s,e,t,n,i,r,o){if(!s)return;!o&&r&&zx(s,n,i,r);let a=s;for(;s.prev!==s.next;){const c=s.prev,u=s.next;if(r?Ix(s,n,i,r):Lx(s)){e.push(c.i,s.i,u.i),no(s),s=u.next,a=u.next;continue}if(s=u,s===a){o?o===1?(s=Dx(qi(s),e),eo(s,e,t,n,i,r,2)):o===2&&Nx(s,e,t,n,i,r):eo(qi(s),e,t,n,i,r,1);break}}}l(eo,"earcutLinked");function Lx(s){const e=s.prev,t=s,n=s.next;if(yt(e,t,n)>=0)return!1;const i=e.x,r=t.x,o=n.x,a=e.y,c=t.y,u=n.y,h=Math.min(i,r,o),d=Math.min(a,c,u),f=Math.max(i,r,o),p=Math.max(a,c,u);let _=n.next;for(;_!==e;){if(_.x>=h&&_.x<=f&&_.y>=d&&_.y<=p&&wr(i,a,r,c,o,u,_.x,_.y)&&yt(_.prev,_,_.next)>=0)return!1;_=_.next}return!0}l(Lx,"isEar");function Ix(s,e,t,n){const i=s.prev,r=s,o=s.next;if(yt(i,r,o)>=0)return!1;const a=i.x,c=r.x,u=o.x,h=i.y,d=r.y,f=o.y,p=Math.min(a,c,u),_=Math.min(h,d,f),v=Math.max(a,c,u),g=Math.max(h,d,f),m=su(p,_,e,t,n),T=su(v,g,e,t,n);let M=s.prevZ,S=s.nextZ;for(;M&&M.z>=m&&S&&S.z<=T;){if(M.x>=p&&M.x<=v&&M.y>=_&&M.y<=g&&M!==i&&M!==o&&wr(a,h,c,d,u,f,M.x,M.y)&&yt(M.prev,M,M.next)>=0||(M=M.prevZ,S.x>=p&&S.x<=v&&S.y>=_&&S.y<=g&&S!==i&&S!==o&&wr(a,h,c,d,u,f,S.x,S.y)&&yt(S.prev,S,S.next)>=0))return!1;S=S.nextZ}for(;M&&M.z>=m;){if(M.x>=p&&M.x<=v&&M.y>=_&&M.y<=g&&M!==i&&M!==o&&wr(a,h,c,d,u,f,M.x,M.y)&&yt(M.prev,M,M.next)>=0)return!1;M=M.prevZ}for(;S&&S.z<=T;){if(S.x>=p&&S.x<=v&&S.y>=_&&S.y<=g&&S!==i&&S!==o&&wr(a,h,c,d,u,f,S.x,S.y)&&yt(S.prev,S,S.next)>=0)return!1;S=S.nextZ}return!0}l(Ix,"isEarHashed");function Dx(s,e){let t=s;do{const n=t.prev,i=t.next.next;!or(n,i)&&X_(n,t,t.next,i)&&to(n,i)&&to(i,n)&&(e.push(n.i,t.i,i.i),no(t),no(t.next),t=s=i),t=t.next}while(t!==s);return qi(t)}l(Dx,"cureLocalIntersections");function Nx(s,e,t,n,i,r){let o=s;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Gx(o,a)){let c=j_(o,a);o=qi(o,o.next),c=qi(c,c.next),eo(o,e,t,n,i,r,0),eo(c,e,t,n,i,r,0);return}a=a.next}o=o.next}while(o!==s)}l(Nx,"splitEarcut");function Ox(s,e,t,n){const i=[];for(let r=0,o=e.length;r<o;r++){const a=e[r]*n,c=r<o-1?e[r+1]*n:s.length,u=G_(s,a,c,n,!1);u===u.next&&(u.steiner=!0),i.push(Vx(u))}i.sort(Ux);for(let r=0;r<i.length;r++)t=Fx(i[r],t);return t}l(Ox,"eliminateHoles");function Ux(s,e){let t=s.x-e.x;if(t===0&&(t=s.y-e.y,t===0)){const n=(s.next.y-s.y)/(s.next.x-s.x),i=(e.next.y-e.y)/(e.next.x-e.x);t=n-i}return t}l(Ux,"compareXYSlope");function Fx(s,e){const t=Bx(s,e);if(!t)return e;const n=j_(t,s);return qi(n,n.next),qi(t,t.next)}l(Fx,"eliminateHole");function Bx(s,e){let t=e;const n=s.x,i=s.y;let r=-1/0,o;if(or(s,t))return t;do{if(or(s,t.next))return t.next;if(i<=t.y&&i>=t.next.y&&t.next.y!==t.y){const d=t.x+(i-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=n&&d>r&&(r=d,o=t.x<t.next.x?t:t.next,d===n))return o}t=t.next}while(t!==e);if(!o)return null;const a=o,c=o.x,u=o.y;let h=1/0;t=o;do{if(n>=t.x&&t.x>=c&&n!==t.x&&W_(i<u?n:r,i,c,u,i<u?r:n,i,t.x,t.y)){const d=Math.abs(i-t.y)/(n-t.x);to(t,s)&&(d<h||d===h&&(t.x>o.x||t.x===o.x&&kx(o,t)))&&(o=t,h=d)}t=t.next}while(t!==a);return o}l(Bx,"findHoleBridge");function kx(s,e){return yt(s.prev,s,e.prev)<0&&yt(e.next,s,s.next)<0}l(kx,"sectorContainsSector");function zx(s,e,t,n){let i=s;do i.z===0&&(i.z=su(i.x,i.y,e,t,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,Hx(i)}l(zx,"indexCurve");function Hx(s){let e,t=1;do{let n=s,i;s=null;let r=null;for(e=0;n;){e++;let o=n,a=0;for(let u=0;u<t&&(a++,o=o.nextZ,!!o);u++);let c=t;for(;a>0||c>0&&o;)a!==0&&(c===0||!o||n.z<=o.z)?(i=n,n=n.nextZ,a--):(i=o,o=o.nextZ,c--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;n=o}r.nextZ=null,t*=2}while(e>1);return s}l(Hx,"sortLinked");function su(s,e,t,n,i){return s=(s-t)*i|0,e=(e-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,s|e<<1}l(su,"zOrder");function Vx(s){let e=s,t=s;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==s);return t}l(Vx,"getLeftmost");function W_(s,e,t,n,i,r,o,a){return(i-o)*(e-a)>=(s-o)*(r-a)&&(s-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(i-o)*(n-a)}l(W_,"pointInTriangle");function wr(s,e,t,n,i,r,o,a){return!(s===o&&e===a)&&W_(s,e,t,n,i,r,o,a)}l(wr,"pointInTriangleExceptFirst");function Gx(s,e){return s.next.i!==e.i&&s.prev.i!==e.i&&!Wx(s,e)&&(to(s,e)&&to(e,s)&&Xx(s,e)&&(yt(s.prev,s,e.prev)||yt(s,e.prev,e))||or(s,e)&&yt(s.prev,s,s.next)>0&&yt(e.prev,e,e.next)>0)}l(Gx,"isValidDiagonal");function yt(s,e,t){return(e.y-s.y)*(t.x-e.x)-(e.x-s.x)*(t.y-e.y)}l(yt,"area");function or(s,e){return s.x===e.x&&s.y===e.y}l(or,"equals");function X_(s,e,t,n){const i=Uo(yt(s,e,t)),r=Uo(yt(s,e,n)),o=Uo(yt(t,n,s)),a=Uo(yt(t,n,e));return!!(i!==r&&o!==a||i===0&&Oo(s,t,e)||r===0&&Oo(s,n,e)||o===0&&Oo(t,s,n)||a===0&&Oo(t,e,n))}l(X_,"intersects");function Oo(s,e,t){return e.x<=Math.max(s.x,t.x)&&e.x>=Math.min(s.x,t.x)&&e.y<=Math.max(s.y,t.y)&&e.y>=Math.min(s.y,t.y)}l(Oo,"onSegment");function Uo(s){return s>0?1:s<0?-1:0}l(Uo,"sign");function Wx(s,e){let t=s;do{if(t.i!==s.i&&t.next.i!==s.i&&t.i!==e.i&&t.next.i!==e.i&&X_(t,t.next,s,e))return!0;t=t.next}while(t!==s);return!1}l(Wx,"intersectsPolygon");function to(s,e){return yt(s.prev,s,s.next)<0?yt(s,e,s.next)>=0&&yt(s,s.prev,e)>=0:yt(s,e,s.prev)<0||yt(s,s.next,e)<0}l(to,"locallyInside");function Xx(s,e){let t=s,n=!1;const i=(s.x+e.x)/2,r=(s.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&i<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==s);return n}l(Xx,"middleInside");function j_(s,e){const t=ru(s.i,s.x,s.y),n=ru(e.i,e.x,e.y),i=s.next,r=e.prev;return s.next=e,e.prev=s,t.next=i,i.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}l(j_,"splitPolygon");function Cg(s,e,t,n){const i=ru(s,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}l(Cg,"insertNode");function no(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}l(no,"removeNode");function ru(s,e,t){return{i:s,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}l(ru,"createNode");function jx(s,e,t,n){let i=0;for(let r=e,o=t-n;r<t;r+=n)i+=(s[o]-s[r])*(s[r+1]+s[o+1]),o=r;return i}l(jx,"signedArea");const Df=class Df{static triangulate(e,t,n=2){return Px(e,t,n)}};l(Df,"Earcut");let ou=Df;const Ga=class Ga{static area(e){const t=e.length;let n=0;for(let i=t-1,r=0;r<t;i=r++)n+=e[i].x*e[r].y-e[r].x*e[i].y;return n*.5}static isClockWise(e){return Ga.area(e)<0}static triangulateShape(e,t){const n=[],i=[],r=[];Rg(e),Pg(n,e);let o=e.length;t.forEach(Rg);for(let c=0;c<t.length;c++)i.push(o),o+=t[c].length,Pg(n,t[c]);const a=ou.triangulate(n,i);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}};l(Ga,"ShapeUtils");let _s=Ga;function Rg(s){const e=s.length;e>2&&s[e-1].equals(s[0])&&s.pop()}l(Rg,"removeDupEndPts");function Pg(s,e){for(let t=0;t<e.length;t++)s.push(e[t].x),s.push(e[t].y)}l(Pg,"addContour");const Wa=class Wa extends Gt{constructor(e=new _a([new oe(.5,.5),new oe(-.5,.5),new oe(-.5,-.5),new oe(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,i=[],r=[];for(let a=0,c=e.length;a<c;a++){const u=e[a];o(u)}this.setAttribute("position",new Et(i,3)),this.setAttribute("uv",new Et(r,2)),this.computeVertexNormals();function o(a){const c=[],u=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,d=t.depth!==void 0?t.depth:1;let f=t.bevelEnabled!==void 0?t.bevelEnabled:!0,p=t.bevelThickness!==void 0?t.bevelThickness:.2,_=t.bevelSize!==void 0?t.bevelSize:p-.1,v=t.bevelOffset!==void 0?t.bevelOffset:0,g=t.bevelSegments!==void 0?t.bevelSegments:3;const m=t.extrudePath,T=t.UVGenerator!==void 0?t.UVGenerator:qx;let M,S=!1,C,P,L,F;if(m){M=m.getSpacedPoints(h),S=!0,f=!1;const ee=m.isCatmullRomCurve3?m.closed:!1;C=m.computeFrenetFrames(h,ee),P=new I,L=new I,F=new I}f||(g=0,p=0,_=0,v=0);const y=a.extractPoints(u);let E=y.shape;const w=y.holes;if(!_s.isClockWise(E)){E=E.reverse();for(let ee=0,se=w.length;ee<se;ee++){const te=w[ee];_s.isClockWise(te)&&(w[ee]=te.reverse())}}function D(ee){const te=10000000000000001e-36;let ve=ee[0];for(let R=1;R<=ee.length;R++){const Oe=R%ee.length,be=ee[Oe],ke=be.x-ve.x,ue=be.y-ve.y,A=ke*ke+ue*ue,x=Math.max(Math.abs(be.x),Math.abs(be.y),Math.abs(ve.x),Math.abs(ve.y)),O=te*x*x;if(A<=O){ee.splice(Oe,1),R--;continue}ve=be}}l(D,"mergeOverlappingPoints"),D(E),w.forEach(D);const V=w.length,G=E;for(let ee=0;ee<V;ee++){const se=w[ee];E=E.concat(se)}function H(ee,se,te){return se||He("ExtrudeGeometry: vec does not exist"),ee.clone().addScaledVector(se,te)}l(H,"scalePt2");const z=E.length;function K(ee,se,te){let ve,R,Oe;const be=ee.x-se.x,ke=ee.y-se.y,ue=te.x-ee.x,A=te.y-ee.y,x=be*be+ke*ke,O=be*A-ke*ue;if(Math.abs(O)>Number.EPSILON){const q=Math.sqrt(x),Z=Math.sqrt(ue*ue+A*A),Y=se.x-ke/q,Re=se.y+be/q,de=te.x-A/Z,Ae=te.y+ue/Z,ze=((de-Y)*A-(Ae-Re)*ue)/(be*A-ke*ue);ve=Y+be*ze-ee.x,R=Re+ke*ze-ee.y;const ie=ve*ve+R*R;if(ie<=2)return new oe(ve,R);Oe=Math.sqrt(ie/2)}else{let q=!1;be>Number.EPSILON?ue>Number.EPSILON&&(q=!0):be<-Number.EPSILON?ue<-Number.EPSILON&&(q=!0):Math.sign(ke)===Math.sign(A)&&(q=!0),q?(ve=-ke,R=be,Oe=Math.sqrt(x)):(ve=be,R=ke,Oe=Math.sqrt(x/2))}return new oe(ve/Oe,R/Oe)}l(K,"getBevelVec");const ae=[];for(let ee=0,se=G.length,te=se-1,ve=ee+1;ee<se;ee++,te++,ve++)te===se&&(te=0),ve===se&&(ve=0),ae[ee]=K(G[ee],G[te],G[ve]);const ce=[];let he,Ve=ae.concat();for(let ee=0,se=V;ee<se;ee++){const te=w[ee];he=[];for(let ve=0,R=te.length,Oe=R-1,be=ve+1;ve<R;ve++,Oe++,be++)Oe===R&&(Oe=0),be===R&&(be=0),he[ve]=K(te[ve],te[Oe],te[be]);ce.push(he),Ve=Ve.concat(he)}let Ne;if(g===0)Ne=_s.triangulateShape(G,w);else{const ee=[],se=[];for(let te=0;te<g;te++){const ve=te/g,R=p*Math.cos(ve*Math.PI/2),Oe=_*Math.sin(ve*Math.PI/2)+v;for(let be=0,ke=G.length;be<ke;be++){const ue=H(G[be],ae[be],Oe);Be(ue.x,ue.y,-R),ve===0&&ee.push(ue)}for(let be=0,ke=V;be<ke;be++){const ue=w[be];he=ce[be];const A=[];for(let x=0,O=ue.length;x<O;x++){const q=H(ue[x],he[x],Oe);Be(q.x,q.y,-R),ve===0&&A.push(q)}ve===0&&se.push(A)}}Ne=_s.triangulateShape(ee,se)}const nt=Ne.length,st=_+v;for(let ee=0;ee<z;ee++){const se=f?H(E[ee],Ve[ee],st):E[ee];S?(L.copy(C.normals[0]).multiplyScalar(se.x),P.copy(C.binormals[0]).multiplyScalar(se.y),F.copy(M[0]).add(L).add(P),Be(F.x,F.y,F.z)):Be(se.x,se.y,0)}for(let ee=1;ee<=h;ee++)for(let se=0;se<z;se++){const te=f?H(E[se],Ve[se],st):E[se];S?(L.copy(C.normals[ee]).multiplyScalar(te.x),P.copy(C.binormals[ee]).multiplyScalar(te.y),F.copy(M[ee]).add(L).add(P),Be(F.x,F.y,F.z)):Be(te.x,te.y,d/h*ee)}for(let ee=g-1;ee>=0;ee--){const se=ee/g,te=p*Math.cos(se*Math.PI/2),ve=_*Math.sin(se*Math.PI/2)+v;for(let R=0,Oe=G.length;R<Oe;R++){const be=H(G[R],ae[R],ve);Be(be.x,be.y,d+te)}for(let R=0,Oe=w.length;R<Oe;R++){const be=w[R];he=ce[R];for(let ke=0,ue=be.length;ke<ue;ke++){const A=H(be[ke],he[ke],ve);S?Be(A.x,A.y+M[h-1].y,M[h-1].x+te):Be(A.x,A.y,d+te)}}}$(),ne();function $(){const ee=i.length/3;if(f){let se=0,te=z*se;for(let ve=0;ve<nt;ve++){const R=Ne[ve];we(R[2]+te,R[1]+te,R[0]+te)}se=h+g*2,te=z*se;for(let ve=0;ve<nt;ve++){const R=Ne[ve];we(R[0]+te,R[1]+te,R[2]+te)}}else{for(let se=0;se<nt;se++){const te=Ne[se];we(te[2],te[1],te[0])}for(let se=0;se<nt;se++){const te=Ne[se];we(te[0]+z*h,te[1]+z*h,te[2]+z*h)}}n.addGroup(ee,i.length/3-ee,0)}l($,"buildLidFaces");function ne(){const ee=i.length/3;let se=0;Me(G,se),se+=G.length;for(let te=0,ve=w.length;te<ve;te++){const R=w[te];Me(R,se),se+=R.length}n.addGroup(ee,i.length/3-ee,1)}l(ne,"buildSideFaces");function Me(ee,se){let te=ee.length;for(;--te>=0;){const ve=te;let R=te-1;R<0&&(R=ee.length-1);for(let Oe=0,be=h+g*2;Oe<be;Oe++){const ke=z*Oe,ue=z*(Oe+1),A=se+ve+ke,x=se+R+ke,O=se+R+ue,q=se+ve+ue;tt(A,x,O,q)}}}l(Me,"sidewalls");function Be(ee,se,te){c.push(ee),c.push(se),c.push(te)}l(Be,"v");function we(ee,se,te){ct(ee),ct(se),ct(te);const ve=i.length/3,R=T.generateTopUV(n,i,ve-3,ve-2,ve-1);je(R[0]),je(R[1]),je(R[2])}l(we,"f3");function tt(ee,se,te,ve){ct(ee),ct(se),ct(ve),ct(se),ct(te),ct(ve);const R=i.length/3,Oe=T.generateSideWallUV(n,i,R-6,R-3,R-2,R-1);je(Oe[0]),je(Oe[1]),je(Oe[3]),je(Oe[1]),je(Oe[2]),je(Oe[3])}l(tt,"f4");function ct(ee){i.push(c[ee*3+0]),i.push(c[ee*3+1]),i.push(c[ee*3+2])}l(ct,"addVertex");function je(ee){r.push(ee.x),r.push(ee.y)}l(je,"addUV")}l(o,"addShape")}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return Yx(t,n,e)}static fromJSON(e,t){const n=[];for(let r=0,o=e.shapes.length;r<o;r++){const a=t[e.shapes[r]];n.push(a)}const i=e.options.extrudePath;return i!==void 0&&(e.options.extrudePath=new nu[i.type]().fromJSON(i)),new Wa(n,e.options)}};l(Wa,"ExtrudeGeometry");let au=Wa;const qx={generateTopUV:l(function(s,e,t,n,i){const r=e[t*3],o=e[t*3+1],a=e[n*3],c=e[n*3+1],u=e[i*3],h=e[i*3+1];return[new oe(r,o),new oe(a,c),new oe(u,h)]},"generateTopUV"),generateSideWallUV:l(function(s,e,t,n,i,r){const o=e[t*3],a=e[t*3+1],c=e[t*3+2],u=e[n*3],h=e[n*3+1],d=e[n*3+2],f=e[i*3],p=e[i*3+1],_=e[i*3+2],v=e[r*3],g=e[r*3+1],m=e[r*3+2];return Math.abs(a-h)<Math.abs(o-u)?[new oe(o,1-c),new oe(u,1-d),new oe(f,1-_),new oe(v,1-m)]:[new oe(a,1-c),new oe(h,1-d),new oe(p,1-_),new oe(g,1-m)]},"generateSideWallUV")};function Yx(s,e,t){if(t.shapes=[],Array.isArray(s))for(let n=0,i=s.length;n<i;n++){const r=s[n];t.shapes.push(r.uuid)}else t.shapes.push(s.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}l(Yx,"toJSON$1");const Xa=class Xa extends Gt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,o=t/2,a=Math.floor(n),c=Math.floor(i),u=a+1,h=c+1,d=e/a,f=t/c,p=[],_=[],v=[],g=[];for(let m=0;m<h;m++){const T=m*f-o;for(let M=0;M<u;M++){const S=M*d-r;_.push(S,-T,0),v.push(0,0,1),g.push(M/a),g.push(1-m/c)}}for(let m=0;m<c;m++)for(let T=0;T<a;T++){const M=T+u*m,S=T+u*(m+1),C=T+1+u*(m+1),P=T+1+u*m;p.push(M,S,P),p.push(S,C,P)}this.setIndex(p),this.setAttribute("position",new Et(_,3)),this.setAttribute("normal",new Et(v,3)),this.setAttribute("uv",new Et(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Xa(e.width,e.height,e.widthSegments,e.heightSegments)}};l(Xa,"PlaneGeometry");let va=Xa;const ja=class ja extends Gt{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const c=Math.min(o+a,Math.PI);let u=0;const h=[],d=new I,f=new I,p=[],_=[],v=[],g=[];for(let m=0;m<=n;m++){const T=[],M=m/n;let S=0;m===0&&o===0?S=.5/t:m===n&&c===Math.PI&&(S=-.5/t);for(let C=0;C<=t;C++){const P=C/t;d.x=-e*Math.cos(i+P*r)*Math.sin(o+M*a),d.y=e*Math.cos(o+M*a),d.z=e*Math.sin(i+P*r)*Math.sin(o+M*a),_.push(d.x,d.y,d.z),f.copy(d).normalize(),v.push(f.x,f.y,f.z),g.push(P+S,1-M),T.push(u++)}h.push(T)}for(let m=0;m<n;m++)for(let T=0;T<t;T++){const M=h[m][T+1],S=h[m][T],C=h[m+1][T],P=h[m+1][T+1];(m!==0||o>0)&&p.push(M,S,P),(m!==n-1||c<Math.PI)&&p.push(S,C,P)}this.setIndex(p),this.setAttribute("position",new Et(_,3)),this.setAttribute("normal",new Et(v,3)),this.setAttribute("uv",new Et(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ja(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};l(ja,"SphereGeometry");let xa=ja;const Nf=class Nf extends xn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};l(Nf,"RawShaderMaterial");let lu=Nf;const Of=class Of extends on{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new We(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new We(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=md,this.normalScale=new oe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new An,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};l(Of,"MeshStandardMaterial");let io=Of;const Uf=class Uf extends io{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new oe(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:l(function(){return Je(2.5*(this.ior-1)/(this.ior+1),0,1)},"get"),set:l(function(t){this.ior=(1+.4*t)/(1-.4*t)},"set")}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new We(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new We(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new We(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};l(Uf,"MeshPhysicalMaterial");let bn=Uf;const Ff=class Ff extends on{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new We(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new We(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=md,this.normalScale=new oe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new An,this.combine=ad,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};l(Ff,"MeshLambertMaterial");let Zt=Ff;const Bf=class Bf extends on{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=wv,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}};l(Bf,"MeshDepthMaterial");let cu=Bf;const kf=class kf extends on{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};l(kf,"MeshDistanceMaterial");let uu=kf;function Fo(s,e){return!s||s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}l(Fo,"convertArray");function $x(s){function e(i,r){return s[i]-s[r]}l(e,"compareTime");const t=s.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}l($x,"getKeyframeOrder");function Lg(s,e,t){const n=s.length,i=new s.constructor(n);for(let r=0,o=0;o!==n;++r){const a=t[r]*e;for(let c=0;c!==e;++c)i[o++]=s[a+c]}return i}l(Lg,"sortedArray");function q_(s,e,t,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push(...o)),r=s[i++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=s[i++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=s[i++];while(r!==void 0)}l(q_,"flattenJSON");const zf=class zf{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=i,i=t[++n],e<i)break e}o=t.length;break t}if(!(e>=r)){const a=t[1];e<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(i=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){const a=n+o>>>1;e<t[a]?o=a:n=a+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let o=0;o!==i;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}};l(zf,"Interpolant");let Yi=zf;const Hf=class Hf extends Yi{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Wm,endingEnd:Wm}}intervalChanged_(e,t,n){const i=this.parameterPositions;let r=e-2,o=e+1,a=i[r],c=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case Xm:r=e,a=2*t-n;break;case jm:r=i.length-2,a=t+i[r]-i[r+1];break;default:r=e,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Xm:o=e,c=2*n-t;break;case jm:o=1,c=n+i[1]-i[0];break;default:o=e-1,c=t}const u=(n-t)*.5,h=this.valueSize;this._weightPrev=u/(t-a),this._weightNext=u/(c-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,u=c-a,h=this._offsetPrev,d=this._offsetNext,f=this._weightPrev,p=this._weightNext,_=(n-t)/(i-t),v=_*_,g=v*_,m=-f*g+2*f*v-f*_,T=(1+f)*g+(-1.5-2*f)*v+(-.5+f)*_+1,M=(-1-p)*g+(1.5+p)*v+.5*_,S=p*g-p*v;for(let C=0;C!==a;++C)r[C]=m*o[h+C]+T*o[u+C]+M*o[c+C]+S*o[d+C];return r}};l(Hf,"CubicInterpolant");let hu=Hf;const Vf=class Vf extends Yi{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,u=c-a,h=(n-t)/(i-t),d=1-h;for(let f=0;f!==a;++f)r[f]=o[u+f]*d+o[c+f]*h;return r}};l(Vf,"LinearInterpolant");let du=Vf;const Gf=class Gf extends Yi{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}};l(Gf,"DiscreteInterpolant");let fu=Gf;const Wf=class Wf{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Fo(t,this.TimeBufferType),this.values=Fo(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Fo(e.times,Array),values:Fo(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new fu(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new du(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new hu(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Hr:t=this.InterpolantFactoryMethodDiscrete;break;case Vr:t=this.InterpolantFactoryMethodLinear;break;case tl:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Ie("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Hr;case this.InterpolantFactoryMethodLinear:return Vr;case this.InterpolantFactoryMethodSmooth:return tl}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let r=0,o=i-1;for(;r!==i&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==i){r>=o&&(o=Math.max(o,1),r=o-1);const a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(He("KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,r=n.length;r===0&&(He("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){const c=n[a];if(typeof c=="number"&&isNaN(c)){He("KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){He("KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(i!==void 0&&Dv(i))for(let a=0,c=i.length;a!==c;++a){const u=i[a];if(isNaN(u)){He("KeyframeTrack: Value is not a valid number.",this,a,u),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===tl,r=e.length-1;let o=1;for(let a=1;a<r;++a){let c=!1;const u=e[a],h=e[a+1];if(u!==h&&(a!==1||u!==e[0]))if(i)c=!0;else{const d=a*n,f=d-n,p=d+n;for(let _=0;_!==n;++_){const v=t[d+_];if(v!==t[f+_]||v!==t[p+_]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];const d=a*n,f=o*n;for(let p=0;p!==n;++p)t[f+p]=t[d+p]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,c=o*n,u=0;u!==n;++u)t[c+u]=t[a+u];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}};l(Wf,"KeyframeTrack");let ln=Wf;ln.prototype.ValueTypeName="";ln.prototype.TimeBufferType=Float32Array;ln.prototype.ValueBufferType=Float32Array;ln.prototype.DefaultInterpolation=Vr;const Xf=class Xf extends ln{constructor(e,t,n){super(e,t,n)}};l(Xf,"BooleanKeyframeTrack");let vi=Xf;vi.prototype.ValueTypeName="bool";vi.prototype.ValueBufferType=Array;vi.prototype.DefaultInterpolation=Hr;vi.prototype.InterpolantFactoryMethodLinear=void 0;vi.prototype.InterpolantFactoryMethodSmooth=void 0;const jf=class jf extends ln{constructor(e,t,n,i){super(e,t,n,i)}};l(jf,"ColorKeyframeTrack");let ya=jf;ya.prototype.ValueTypeName="color";const qf=class qf extends ln{constructor(e,t,n,i){super(e,t,n,i)}};l(qf,"NumberKeyframeTrack");let xi=qf;xi.prototype.ValueTypeName="number";const Yf=class Yf extends Yi{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-t)/(i-t);let u=e*a;for(let h=u+a;u!==h;u+=4)At.slerpFlat(r,0,o,u-a,o,u,c);return r}};l(Yf,"QuaternionLinearInterpolant");let pu=Yf;const $f=class $f extends ln{constructor(e,t,n,i){super(e,t,n,i)}InterpolantFactoryMethodLinear(e){return new pu(this.times,this.values,this.getValueSize(),e)}};l($f,"QuaternionKeyframeTrack");let yi=$f;yi.prototype.ValueTypeName="quaternion";yi.prototype.InterpolantFactoryMethodSmooth=void 0;const Kf=class Kf extends ln{constructor(e,t,n){super(e,t,n)}};l(Kf,"StringKeyframeTrack");let bi=Kf;bi.prototype.ValueTypeName="string";bi.prototype.ValueBufferType=Array;bi.prototype.DefaultInterpolation=Hr;bi.prototype.InterpolantFactoryMethodLinear=void 0;bi.prototype.InterpolantFactoryMethodSmooth=void 0;const Jf=class Jf extends ln{constructor(e,t,n,i){super(e,t,n,i)}};l(Jf,"VectorKeyframeTrack");let Si=Jf;Si.prototype.ValueTypeName="vector";const Zf=class Zf{constructor(e="",t=-1,n=[],i=Mv){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=mn(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(Jx(n[o]).scale(i));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,o=n.length;r!==o;++r)t.push(ln.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const r=t.length,o=[];for(let a=0;a<r;a++){let c=[],u=[];c.push((a+r-1)%r,a,(a+1)%r),u.push(0,1,0);const h=$x(c);c=Lg(c,1,h),u=Lg(u,1,h),!i&&c[0]===0&&(c.push(r),u.push(u[0])),o.push(new xi(".morphTargetInfluences["+t[a].name+"]",c,u).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,c=e.length;a<c;a++){const u=e[a],h=u.name.match(r);if(h&&h.length>1){const d=h[1];let f=i[d];f||(i[d]=f=[]),f.push(u)}}const o=[];for(const a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],t,n));return o}static parseAnimation(e,t){if(Ie("AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!e)return He("AnimationClip: No animation in JSONLoader data."),null;const n=l(function(d,f,p,_,v){if(p.length!==0){const g=[],m=[];q_(p,g,m,_),g.length!==0&&v.push(new d(f,g,m))}},"addNonemptyTrack"),i=[],r=e.name||"default",o=e.fps||30,a=e.blendMode;let c=e.length||-1;const u=e.hierarchy||[];for(let d=0;d<u.length;d++){const f=u[d].keys;if(!(!f||f.length===0))if(f[0].morphTargets){const p={};let _;for(_=0;_<f.length;_++)if(f[_].morphTargets)for(let v=0;v<f[_].morphTargets.length;v++)p[f[_].morphTargets[v]]=-1;for(const v in p){const g=[],m=[];for(let T=0;T!==f[_].morphTargets.length;++T){const M=f[_];g.push(M.time),m.push(M.morphTarget===v?1:0)}i.push(new xi(".morphTargetInfluence["+v+"]",g,m))}c=p.length*o}else{const p=".bones["+t[d].name+"]";n(Si,p+".position",f,"pos",i),n(yi,p+".quaternion",f,"rot",i),n(Si,p+".scale",f,"scl",i)}}return i.length===0?null:new this(r,c,i,a)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());const t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}};l(Zf,"AnimationClip");let mu=Zf;function Kx(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return xi;case"vector":case"vector2":case"vector3":case"vector4":return Si;case"color":return ya;case"quaternion":return yi;case"bool":case"boolean":return vi;case"string":return bi}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}l(Kx,"getTrackTypeForValueTypeName");function Jx(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=Kx(s.type);if(s.times===void 0){const t=[],n=[];q_(s.keys,t,n,"value"),s.times=t,s.values=n}return e.parse!==void 0?e.parse(s):new e(s.name,s.times,s.values,s.interpolation)}l(Jx,"parseKeyframeTrack");const Zn={enabled:!1,files:{},add:l(function(s,e){this.enabled!==!1&&(this.files[s]=e)},"add"),get:l(function(s){if(this.enabled!==!1)return this.files[s]},"get"),remove:l(function(s){delete this.files[s]},"remove"),clear:l(function(){this.files={}},"clear")},Qf=class Qf{constructor(e,t,n){const i=this;let r=!1,o=0,a=0,c;const u=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){a++,r===!1&&i.onStart!==void 0&&i.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,d){return u.push(h,d),this},this.removeHandler=function(h){const d=u.indexOf(h);return d!==-1&&u.splice(d,2),this},this.getHandler=function(h){for(let d=0,f=u.length;d<f;d+=2){const p=u[d],_=u[d+1];if(p.global&&(p.lastIndex=0),p.test(h))return _}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}};l(Qf,"LoadingManager");let gu=Qf;const Zx=new gu,ep=class ep{constructor(e){this.manager=e!==void 0?e:Zx,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};l(ep,"Loader");let Mi=ep;Mi.DEFAULT_MATERIAL_NAME="__DEFAULT";const Yn={},tp=class tp extends Error{constructor(e,t){super(e),this.response=t}};l(tp,"HttpError");let _u=tp;const np=class np extends Mi{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=Zn.get(`file:${e}`);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(Yn[e]!==void 0){Yn[e].push({onLoad:t,onProgress:n,onError:i});return}Yn[e]=[],Yn[e].push({onLoad:t,onProgress:n,onError:i});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),a=this.mimeType,c=this.responseType;fetch(o).then(u=>{if(u.status===200||u.status===0){if(u.status===0&&Ie("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||u.body===void 0||u.body.getReader===void 0)return u;const h=Yn[e],d=u.body.getReader(),f=u.headers.get("X-File-Size")||u.headers.get("Content-Length"),p=f?parseInt(f):0,_=p!==0;let v=0;const g=new ReadableStream({start(m){T();function T(){d.read().then(({done:M,value:S})=>{if(M)m.close();else{v+=S.byteLength;const C=new ProgressEvent("progress",{lengthComputable:_,loaded:v,total:p});for(let P=0,L=h.length;P<L;P++){const F=h[P];F.onProgress&&F.onProgress(C)}m.enqueue(S),T()}},M=>{m.error(M)})}l(T,"readData")}});return new Response(g)}else throw new _u(`fetch for "${u.url}" responded with ${u.status}: ${u.statusText}`,u)}).then(u=>{switch(c){case"arraybuffer":return u.arrayBuffer();case"blob":return u.blob();case"document":return u.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return u.json();default:if(a==="")return u.text();{const d=/charset="?([^;"\s]*)"?/i.exec(a),f=d&&d[1]?d[1].toLowerCase():void 0,p=new TextDecoder(f);return u.arrayBuffer().then(_=>p.decode(_))}}}).then(u=>{Zn.add(`file:${e}`,u);const h=Yn[e];delete Yn[e];for(let d=0,f=h.length;d<f;d++){const p=h[d];p.onLoad&&p.onLoad(u)}}).catch(u=>{const h=Yn[e];if(h===void 0)throw this.manager.itemError(e),u;delete Yn[e];for(let d=0,f=h.length;d<f;d++){const p=h[d];p.onError&&p.onError(u)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};l(np,"FileLoader");let ba=np;const fs=new WeakMap,ip=class ip extends Mi{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=Zn.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0);else{let d=fs.get(o);d===void 0&&(d=[],fs.set(o,d)),d.push({onLoad:t,onError:i})}return o}const a=Gr("img");function c(){h(),t&&t(this);const d=fs.get(this)||[];for(let f=0;f<d.length;f++){const p=d[f];p.onLoad&&p.onLoad(this)}fs.delete(this),r.manager.itemEnd(e)}l(c,"onImageLoad");function u(d){h(),i&&i(d),Zn.remove(`image:${e}`);const f=fs.get(this)||[];for(let p=0;p<f.length;p++){const _=f[p];_.onError&&_.onError(d)}fs.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}l(u,"onImageError");function h(){a.removeEventListener("load",c,!1),a.removeEventListener("error",u,!1)}return l(h,"removeEventListeners"),a.addEventListener("load",c,!1),a.addEventListener("error",u,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),Zn.add(`image:${e}`,a),r.manager.itemStart(e),a.src=e,a}};l(ip,"ImageLoader");let vu=ip;const sp=class sp extends Mi{constructor(e){super(e)}load(e,t,n,i){const r=new kt,o=new vu(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}};l(sp,"TextureLoader");let xu=sp;const rp=class rp extends bt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new We(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}};l(rp,"Light");let ar=rp;const Rl=new qe,Ig=new I,Dg=new I,op=class op{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new oe(512,512),this.mapType=rn,this.map=null,this.mapPass=null,this.matrix=new qe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new $r,this._frameExtents=new oe(1,1),this._viewportCount=1,this._viewports=[new vt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Ig.setFromMatrixPosition(e.matrixWorld),t.position.copy(Ig),Dg.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Dg),t.updateMatrixWorld(),Rl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Rl,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Rl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};l(op,"LightShadow");let so=op;const ap=class ap extends so{constructor(){super(new Ft(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,n=sr*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}};l(ap,"SpotLightShadow");let yu=ap;const lp=class lp extends ar{constructor(e,t,n=0,i=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(bt.DEFAULT_UP),this.updateMatrix(),this.target=new bt,this.distance=n,this.angle=i,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new yu}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}};l(lp,"SpotLight");let bu=lp;const cp=class cp extends so{constructor(){super(new Ft(90,1,.5,500)),this.isPointLightShadow=!0}};l(cp,"PointLightShadow");let Su=cp;const up=class up extends ar{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Su}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}};l(up,"PointLight");let Mu=up;const hp=class hp extends na{constructor(e=-1,t=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,o=n+e,a=i+t,c=i-t;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=u*this.view.offsetX,o=r+u*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}};l(hp,"OrthographicCamera");let lr=hp;const dp=class dp extends so{constructor(){super(new lr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}};l(dp,"DirectionalLightShadow");let Eu=dp;const fp=class fp extends ar{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(bt.DEFAULT_UP),this.updateMatrix(),this.target=new bt,this.shadow=new Eu}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};l(fp,"DirectionalLight");let Sa=fp;const pp=class pp extends ar{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}};l(pp,"AmbientLight");let wu=pp;const mp=class mp{static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};l(mp,"LoaderUtils");let Gi=mp;const Pl=new WeakMap,gp=class gp extends Mi{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&Ie("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&Ie("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=Zn.get(`image-bitmap:${e}`);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(u=>{if(Pl.has(o)===!0)i&&i(Pl.get(o)),r.manager.itemError(e),r.manager.itemEnd(e);else return t&&t(u),r.manager.itemEnd(e),u});return}return setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader,a.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;const c=fetch(e,a).then(function(u){return u.blob()}).then(function(u){return createImageBitmap(u,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(u){return Zn.add(`image-bitmap:${e}`,u),t&&t(u),r.manager.itemEnd(e),u}).catch(function(u){i&&i(u),Pl.set(c,u),Zn.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});Zn.add(`image-bitmap:${e}`,c),r.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};l(gp,"ImageBitmapLoader");let Tu=gp;const _p=class _p extends Ft{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};l(_p,"ArrayCamera");let Au=_p;const vp=class vp{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};l(vp,"Clock");let Cu=vp;const yd="\\[\\]\\.:\\/",Qx=new RegExp("["+yd+"]","g"),bd="[^"+yd+"]",ey="[^"+yd.replace("\\.","")+"]",ty=/((?:WC+[\/:])*)/.source.replace("WC",bd),ny=/(WCOD+)?/.source.replace("WCOD",ey),iy=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",bd),sy=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",bd),ry=new RegExp("^"+ty+ny+iy+sy+"$"),oy=["material","materials","bones","map"],xp=class xp{constructor(e,t,n){const i=n||_t.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}};l(xp,"Composite");let Ru=xp;const fi=class fi{constructor(e,t,n){this.path=t,this.parsedPath=n||fi.parseTrackName(t),this.node=fi.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new fi.Composite(e,t,n):new fi(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Qx,"")}static parseTrackName(e){const t=ry.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const r=n.nodeName.substring(i+1);oy.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=l(function(r){for(let o=0;o<r.length;o++){const a=r[o];if(a.name===t||a.uuid===t)return a;const c=n(a.children);if(c)return c}return null},"searchNodeSubtree"),i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let r=t.propertyIndex;if(e||(e=fi.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Ie("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let u=t.objectIndex;switch(n){case"materials":if(!e.material){He("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){He("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){He("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===u){u=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){He("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){He("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){He("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(u!==void 0){if(e[u]===void 0){He("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[u]}}const o=e[i];if(o===void 0){const u=t.nodeName;He("PropertyBinding: Trying to update property for track: "+u+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){He("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){He("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};l(fi,"PropertyBinding");let _t=fi;_t.Composite=Ru;_t.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};_t.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};_t.prototype.GetterByBindingType=[_t.prototype._getValue_direct,_t.prototype._getValue_array,_t.prototype._getValue_arrayElement,_t.prototype._getValue_toArray];_t.prototype.SetterByBindingTypeAndVersioning=[[_t.prototype._setValue_direct,_t.prototype._setValue_direct_setNeedsUpdate,_t.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[_t.prototype._setValue_array,_t.prototype._setValue_array_setNeedsUpdate,_t.prototype._setValue_array_setMatrixWorldNeedsUpdate],[_t.prototype._setValue_arrayElement,_t.prototype._setValue_arrayElement_setNeedsUpdate,_t.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[_t.prototype._setValue_fromArray,_t.prototype._setValue_fromArray_setNeedsUpdate,_t.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];const Ng=new qe,yp=class yp{constructor(e,t,n=0,i=1/0){this.ray=new _i(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new jr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):He("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Ng.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Ng),this}intersectObject(e,t=!0,n=[]){return Lu(e,this,n,t),n.sort(Og),n}intersectObjects(e,t=!0,n=[]){for(let i=0,r=e.length;i<r;i++)Lu(e[i],this,n,t);return n.sort(Og),n}};l(yp,"Raycaster");let Pu=yp;function Og(s,e){return s.distance-e.distance}l(Og,"ascSort");function Lu(s,e,t,n){let i=!0;if(s.layers.test(e.layers)&&s.raycast(e,t)===!1&&(i=!1),i===!0&&n===!0){const r=s.children;for(let o=0,a=r.length;o<a;o++)Lu(r[o],e,t,!0)}}l(Lu,"intersect");function Ug(s,e,t,n){const i=ay(n);switch(t){case F_:return s*e;case hd:return s*e/i.components*i.byteLength;case dd:return s*e/i.components*i.byteLength;case ir:return s*e*2/i.components*i.byteLength;case fd:return s*e*2/i.components*i.byteLength;case B_:return s*e*3/i.components*i.byteLength;case pn:return s*e*4/i.components*i.byteLength;case pd:return s*e*4/i.components*i.byteLength;case Wo:case Xo:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case jo:case qo:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case sc:case oc:return Math.max(s,16)*Math.max(e,8)/4;case ic:case rc:return Math.max(s,8)*Math.max(e,8)/2;case ac:case lc:case uc:case hc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case cc:case dc:case fc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case pc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case mc:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case gc:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case _c:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case vc:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case xc:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case yc:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case bc:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Sc:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case Mc:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Ec:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case wc:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Tc:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Ac:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Cc:case Rc:case Pc:return Math.ceil(s/4)*Math.ceil(e/4)*16;case Lc:case Ic:return Math.ceil(s/4)*Math.ceil(e/4)*8;case Dc:case Nc:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}l(Ug,"getByteLength");function ay(s){switch(s){case rn:case D_:return{byteLength:1,components:1};case kr:case N_:case ni:return{byteLength:2,components:1};case cd:case ud:return{byteLength:2,components:4};case Bn:case ld:case fn:return{byteLength:4,components:1};case O_:case U_:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}l(ay,"getTextureTypeByteLength");typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:od}}));typeof window<"u"&&(window.__THREE__?Ie("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=od);function Y_(){let s=null,e=!1,t=null,n=null;function i(r,o){t(r,o),n=s.requestAnimationFrame(i)}return l(i,"onAnimationFrame"),{start:l(function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},"start"),stop:l(function(){s.cancelAnimationFrame(n),e=!1},"stop"),setAnimationLoop:l(function(r){t=r},"setAnimationLoop"),setContext:l(function(r){s=r},"setContext")}}l(Y_,"WebGLAnimation");function ly(s){const e=new WeakMap;function t(a,c){const u=a.array,h=a.usage,d=u.byteLength,f=s.createBuffer();s.bindBuffer(c,f),s.bufferData(c,u,h),a.onUploadCallback();let p;if(u instanceof Float32Array)p=s.FLOAT;else if(typeof Float16Array<"u"&&u instanceof Float16Array)p=s.HALF_FLOAT;else if(u instanceof Uint16Array)a.isFloat16BufferAttribute?p=s.HALF_FLOAT:p=s.UNSIGNED_SHORT;else if(u instanceof Int16Array)p=s.SHORT;else if(u instanceof Uint32Array)p=s.UNSIGNED_INT;else if(u instanceof Int32Array)p=s.INT;else if(u instanceof Int8Array)p=s.BYTE;else if(u instanceof Uint8Array)p=s.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)p=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:f,type:p,bytesPerElement:u.BYTES_PER_ELEMENT,version:a.version,size:d}}l(t,"createBuffer");function n(a,c,u){const h=c.array,d=c.updateRanges;if(s.bindBuffer(u,a),d.length===0)s.bufferSubData(u,0,h);else{d.sort((p,_)=>p.start-_.start);let f=0;for(let p=1;p<d.length;p++){const _=d[f],v=d[p];v.start<=_.start+_.count+1?_.count=Math.max(_.count,v.start+v.count-_.start):(++f,d[f]=v)}d.length=f+1;for(let p=0,_=d.length;p<_;p++){const v=d[p];s.bufferSubData(u,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}c.clearUpdateRanges()}c.onUploadCallback()}l(n,"updateBuffer");function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}l(i,"get");function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=e.get(a);c&&(s.deleteBuffer(c.buffer),e.delete(a))}l(r,"remove");function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const u=e.get(a);if(u===void 0)e.set(a,t(a,c));else if(u.version<a.version){if(u.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(u.buffer,a,c),u.version=a.version}}return l(o,"update"),{get:i,remove:r,update:o}}l(ly,"WebGLAttributes");var cy=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,uy=`#ifdef USE_ALPHAHASH
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
#endif`,hy=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,dy=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,fy=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,py=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,my=`#ifdef USE_AOMAP
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
#endif`,gy=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,_y=`#ifdef USE_BATCHING
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
#endif`,vy=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,xy=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,yy=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,by=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Sy=`#ifdef USE_IRIDESCENCE
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
#endif`,My=`#ifdef USE_BUMPMAP
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
#endif`,Ey=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,wy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ty=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ay=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Cy=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Ry=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Py=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Ly=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Iy=`#define PI 3.141592653589793
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
} // validated`,Dy=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Ny=`vec3 transformedNormal = objectNormal;
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
#endif`,Oy=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Uy=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Fy=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,By=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ky="gl_FragColor = linearToOutputTexel( gl_FragColor );",zy=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Hy=`#ifdef USE_ENVMAP
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
#endif`,Vy=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Gy=`#ifdef USE_ENVMAP
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
#endif`,Wy=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Xy=`#ifdef USE_ENVMAP
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
#endif`,jy=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,qy=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Yy=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,$y=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ky=`#ifdef USE_GRADIENTMAP
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
}`,Jy=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Zy=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Qy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,eb=`uniform bool receiveShadow;
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
#endif`,tb=`#ifdef USE_ENVMAP
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
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
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
#endif`,nb=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ib=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,sb=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,rb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ob=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
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
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
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
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
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
#endif`,ab=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
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
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
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
		return v;
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
	vec3 f0 = material.specularColorBlended;
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
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
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
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
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
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( vec3( 1.0 ) - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
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
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,lb=`
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
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
#endif`,cb=`#if defined( RE_IndirectDiffuse )
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
#endif`,ub=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,hb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,db=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,fb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,pb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,mb=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,gb=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,_b=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,vb=`#if defined( USE_POINTS_UV )
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
#endif`,xb=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,yb=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,bb=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Sb=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Mb=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Eb=`#ifdef USE_MORPHTARGETS
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
#endif`,wb=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Tb=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Ab=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Cb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Rb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Pb=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Lb=`#ifdef USE_NORMALMAP
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
#endif`,Ib=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Db=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Nb=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ob=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ub=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Fb=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Bb=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,kb=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,zb=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Hb=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Vb=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Gb=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Wb=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
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
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 0, 5, phi ).x + bitangent * vogelDiskSample( 0, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 1, 5, phi ).x + bitangent * vogelDiskSample( 1, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 2, 5, phi ).x + bitangent * vogelDiskSample( 2, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 3, 5, phi ).x + bitangent * vogelDiskSample( 3, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 4, 5, phi ).x + bitangent * vogelDiskSample( 4, 5, phi ).y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadow = step( depth, dp );
			#else
				shadow = step( dp, depth );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Xb=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,jb=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,qb=`float getShadowMask() {
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
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
}`,Yb=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,$b=`#ifdef USE_SKINNING
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
#endif`,Kb=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Jb=`#ifdef USE_SKINNING
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
#endif`,Zb=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Qb=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,eS=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tS=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,nS=`#ifdef USE_TRANSMISSION
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
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,iS=`#ifdef USE_TRANSMISSION
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
#endif`,sS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,rS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,oS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,aS=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const lS=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,cS=`uniform sampler2D t2D;
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
}`,uS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,hS=`#ifdef ENVMAP_TYPE_CUBE
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
}`,dS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,fS=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,pS=`#include <common>
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
}`,mS=`#if DEPTH_PACKING == 3200
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
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
}`,gS=`#define DISTANCE
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
}`,_S=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
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
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,vS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,xS=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,yS=`uniform float scale;
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
}`,bS=`uniform vec3 diffuse;
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
}`,SS=`#include <common>
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
}`,MS=`uniform vec3 diffuse;
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
}`,ES=`#define LAMBERT
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
}`,wS=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
}`,TS=`#define MATCAP
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
}`,AS=`#define MATCAP
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
}`,CS=`#define NORMAL
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
}`,RS=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
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
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,PS=`#define PHONG
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
}`,LS=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
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
}`,IS=`#define STANDARD
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
}`,DS=`#define STANDARD
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
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
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
}`,NS=`#define TOON
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
}`,OS=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
}`,US=`uniform float size;
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
}`,FS=`uniform vec3 diffuse;
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
}`,BS=`#include <common>
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
}`,kS=`uniform vec3 color;
uniform float opacity;
#include <common>
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
}`,zS=`uniform float rotation;
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
}`,HS=`uniform vec3 diffuse;
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
}`,$e={alphahash_fragment:cy,alphahash_pars_fragment:uy,alphamap_fragment:hy,alphamap_pars_fragment:dy,alphatest_fragment:fy,alphatest_pars_fragment:py,aomap_fragment:my,aomap_pars_fragment:gy,batching_pars_vertex:_y,batching_vertex:vy,begin_vertex:xy,beginnormal_vertex:yy,bsdfs:by,iridescence_fragment:Sy,bumpmap_pars_fragment:My,clipping_planes_fragment:Ey,clipping_planes_pars_fragment:wy,clipping_planes_pars_vertex:Ty,clipping_planes_vertex:Ay,color_fragment:Cy,color_pars_fragment:Ry,color_pars_vertex:Py,color_vertex:Ly,common:Iy,cube_uv_reflection_fragment:Dy,defaultnormal_vertex:Ny,displacementmap_pars_vertex:Oy,displacementmap_vertex:Uy,emissivemap_fragment:Fy,emissivemap_pars_fragment:By,colorspace_fragment:ky,colorspace_pars_fragment:zy,envmap_fragment:Hy,envmap_common_pars_fragment:Vy,envmap_pars_fragment:Gy,envmap_pars_vertex:Wy,envmap_physical_pars_fragment:tb,envmap_vertex:Xy,fog_vertex:jy,fog_pars_vertex:qy,fog_fragment:Yy,fog_pars_fragment:$y,gradientmap_pars_fragment:Ky,lightmap_pars_fragment:Jy,lights_lambert_fragment:Zy,lights_lambert_pars_fragment:Qy,lights_pars_begin:eb,lights_toon_fragment:nb,lights_toon_pars_fragment:ib,lights_phong_fragment:sb,lights_phong_pars_fragment:rb,lights_physical_fragment:ob,lights_physical_pars_fragment:ab,lights_fragment_begin:lb,lights_fragment_maps:cb,lights_fragment_end:ub,logdepthbuf_fragment:hb,logdepthbuf_pars_fragment:db,logdepthbuf_pars_vertex:fb,logdepthbuf_vertex:pb,map_fragment:mb,map_pars_fragment:gb,map_particle_fragment:_b,map_particle_pars_fragment:vb,metalnessmap_fragment:xb,metalnessmap_pars_fragment:yb,morphinstance_vertex:bb,morphcolor_vertex:Sb,morphnormal_vertex:Mb,morphtarget_pars_vertex:Eb,morphtarget_vertex:wb,normal_fragment_begin:Tb,normal_fragment_maps:Ab,normal_pars_fragment:Cb,normal_pars_vertex:Rb,normal_vertex:Pb,normalmap_pars_fragment:Lb,clearcoat_normal_fragment_begin:Ib,clearcoat_normal_fragment_maps:Db,clearcoat_pars_fragment:Nb,iridescence_pars_fragment:Ob,opaque_fragment:Ub,packing:Fb,premultiplied_alpha_fragment:Bb,project_vertex:kb,dithering_fragment:zb,dithering_pars_fragment:Hb,roughnessmap_fragment:Vb,roughnessmap_pars_fragment:Gb,shadowmap_pars_fragment:Wb,shadowmap_pars_vertex:Xb,shadowmap_vertex:jb,shadowmask_pars_fragment:qb,skinbase_vertex:Yb,skinning_pars_vertex:$b,skinning_vertex:Kb,skinnormal_vertex:Jb,specularmap_fragment:Zb,specularmap_pars_fragment:Qb,tonemapping_fragment:eS,tonemapping_pars_fragment:tS,transmission_fragment:nS,transmission_pars_fragment:iS,uv_pars_fragment:sS,uv_pars_vertex:rS,uv_vertex:oS,worldpos_vertex:aS,background_vert:lS,background_frag:cS,backgroundCube_vert:uS,backgroundCube_frag:hS,cube_vert:dS,cube_frag:fS,depth_vert:pS,depth_frag:mS,distance_vert:gS,distance_frag:_S,equirect_vert:vS,equirect_frag:xS,linedashed_vert:yS,linedashed_frag:bS,meshbasic_vert:SS,meshbasic_frag:MS,meshlambert_vert:ES,meshlambert_frag:wS,meshmatcap_vert:TS,meshmatcap_frag:AS,meshnormal_vert:CS,meshnormal_frag:RS,meshphong_vert:PS,meshphong_frag:LS,meshphysical_vert:IS,meshphysical_frag:DS,meshtoon_vert:NS,meshtoon_frag:OS,points_vert:US,points_frag:FS,shadow_vert:BS,shadow_frag:kS,sprite_vert:zS,sprite_frag:HS},_e={common:{diffuse:{value:new We(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ye}},envmap:{envMap:{value:null},envMapRotation:{value:new Ye},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ye}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ye}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ye},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ye},normalScale:{value:new oe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ye},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ye}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ye}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ye}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new We(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new We(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0},uvTransform:{value:new Ye}},sprite:{diffuse:{value:new We(16777215)},opacity:{value:1},center:{value:new oe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}}},Nn={basic:{uniforms:jt([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.fog]),vertexShader:$e.meshbasic_vert,fragmentShader:$e.meshbasic_frag},lambert:{uniforms:jt([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,_e.lights,{emissive:{value:new We(0)}}]),vertexShader:$e.meshlambert_vert,fragmentShader:$e.meshlambert_frag},phong:{uniforms:jt([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,_e.lights,{emissive:{value:new We(0)},specular:{value:new We(1118481)},shininess:{value:30}}]),vertexShader:$e.meshphong_vert,fragmentShader:$e.meshphong_frag},standard:{uniforms:jt([_e.common,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.roughnessmap,_e.metalnessmap,_e.fog,_e.lights,{emissive:{value:new We(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:$e.meshphysical_vert,fragmentShader:$e.meshphysical_frag},toon:{uniforms:jt([_e.common,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.gradientmap,_e.fog,_e.lights,{emissive:{value:new We(0)}}]),vertexShader:$e.meshtoon_vert,fragmentShader:$e.meshtoon_frag},matcap:{uniforms:jt([_e.common,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,{matcap:{value:null}}]),vertexShader:$e.meshmatcap_vert,fragmentShader:$e.meshmatcap_frag},points:{uniforms:jt([_e.points,_e.fog]),vertexShader:$e.points_vert,fragmentShader:$e.points_frag},dashed:{uniforms:jt([_e.common,_e.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:$e.linedashed_vert,fragmentShader:$e.linedashed_frag},depth:{uniforms:jt([_e.common,_e.displacementmap]),vertexShader:$e.depth_vert,fragmentShader:$e.depth_frag},normal:{uniforms:jt([_e.common,_e.bumpmap,_e.normalmap,_e.displacementmap,{opacity:{value:1}}]),vertexShader:$e.meshnormal_vert,fragmentShader:$e.meshnormal_frag},sprite:{uniforms:jt([_e.sprite,_e.fog]),vertexShader:$e.sprite_vert,fragmentShader:$e.sprite_frag},background:{uniforms:{uvTransform:{value:new Ye},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:$e.background_vert,fragmentShader:$e.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ye}},vertexShader:$e.backgroundCube_vert,fragmentShader:$e.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:$e.cube_vert,fragmentShader:$e.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:$e.equirect_vert,fragmentShader:$e.equirect_frag},distance:{uniforms:jt([_e.common,_e.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:$e.distance_vert,fragmentShader:$e.distance_frag},shadow:{uniforms:jt([_e.lights,_e.fog,{color:{value:new We(0)},opacity:{value:1}}]),vertexShader:$e.shadow_vert,fragmentShader:$e.shadow_frag}};Nn.physical={uniforms:jt([Nn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ye},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ye},clearcoatNormalScale:{value:new oe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ye},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ye},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ye},sheen:{value:0},sheenColor:{value:new We(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ye},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ye},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ye},transmissionSamplerSize:{value:new oe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ye},attenuationDistance:{value:0},attenuationColor:{value:new We(0)},specularColor:{value:new We(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ye},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ye},anisotropyVector:{value:new oe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ye}}]),vertexShader:$e.meshphysical_vert,fragmentShader:$e.meshphysical_frag};const Bo={r:0,b:0,g:0},Di=new An,VS=new qe;function GS(s,e,t,n,i,r,o){const a=new We(0);let c=r===!0?0:1,u,h,d=null,f=0,p=null;function _(M){let S=M.isScene===!0?M.background:null;return S&&S.isTexture&&(S=(M.backgroundBlurriness>0?t:e).get(S)),S}l(_,"getBackground");function v(M){let S=!1;const C=_(M);C===null?m(a,c):C&&C.isColor&&(m(C,1),S=!0);const P=s.xr.getEnvironmentBlendMode();P==="additive"?n.buffers.color.setClear(0,0,0,1,o):P==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(s.autoClear||S)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}l(v,"render");function g(M,S){const C=_(S);C&&(C.isCubeTexture||C.mapping===$a)?(h===void 0&&(h=new ft(new kn(1,1,1),new xn({name:"BackgroundCubeMaterial",uniforms:rr(Nn.backgroundCube.uniforms),vertexShader:Nn.backgroundCube.vertexShader,fragmentShader:Nn.backgroundCube.fragmentShader,side:Jt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(P,L,F){this.matrixWorld.copyPosition(F.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:l(function(){return this.uniforms.envMap.value},"get")}),i.update(h)),Di.copy(S.backgroundRotation),Di.x*=-1,Di.y*=-1,Di.z*=-1,C.isCubeTexture&&C.isRenderTargetTexture===!1&&(Di.y*=-1,Di.z*=-1),h.material.uniforms.envMap.value=C,h.material.uniforms.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(VS.makeRotationFromEuler(Di)),h.material.toneMapped=et.getTransfer(C.colorSpace)!==at,(d!==C||f!==C.version||p!==s.toneMapping)&&(h.material.needsUpdate=!0,d=C,f=C.version,p=s.toneMapping),h.layers.enableAll(),M.unshift(h,h.geometry,h.material,0,0,null)):C&&C.isTexture&&(u===void 0&&(u=new ft(new va(2,2),new xn({name:"BackgroundMaterial",uniforms:rr(Nn.background.uniforms),vertexShader:Nn.background.vertexShader,fragmentShader:Nn.background.fragmentShader,side:ti,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:l(function(){return this.uniforms.t2D.value},"get")}),i.update(u)),u.material.uniforms.t2D.value=C,u.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,u.material.toneMapped=et.getTransfer(C.colorSpace)!==at,C.matrixAutoUpdate===!0&&C.updateMatrix(),u.material.uniforms.uvTransform.value.copy(C.matrix),(d!==C||f!==C.version||p!==s.toneMapping)&&(u.material.needsUpdate=!0,d=C,f=C.version,p=s.toneMapping),u.layers.enableAll(),M.unshift(u,u.geometry,u.material,0,0,null))}l(g,"addToRenderList");function m(M,S){M.getRGB(Bo,V_(s)),n.buffers.color.setClear(Bo.r,Bo.g,Bo.b,S,o)}l(m,"setClear");function T(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0)}return l(T,"dispose"),{getClearColor:l(function(){return a},"getClearColor"),setClearColor:l(function(M,S=1){a.set(M),c=S,m(a,c)},"setClearColor"),getClearAlpha:l(function(){return c},"getClearAlpha"),setClearAlpha:l(function(M){c=M,m(a,c)},"setClearAlpha"),render:v,addToRenderList:g,dispose:T}}l(GS,"WebGLBackground");function WS(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=f(null);let r=i,o=!1;function a(E,w,U,D,V){let G=!1;const H=d(D,U,w);r!==H&&(r=H,u(r.object)),G=p(E,D,U,V),G&&_(E,D,U,V),V!==null&&e.update(V,s.ELEMENT_ARRAY_BUFFER),(G||o)&&(o=!1,S(E,w,U,D),V!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(V).buffer))}l(a,"setup");function c(){return s.createVertexArray()}l(c,"createVertexArrayObject");function u(E){return s.bindVertexArray(E)}l(u,"bindVertexArrayObject");function h(E){return s.deleteVertexArray(E)}l(h,"deleteVertexArrayObject");function d(E,w,U){const D=U.wireframe===!0;let V=n[E.id];V===void 0&&(V={},n[E.id]=V);let G=V[w.id];G===void 0&&(G={},V[w.id]=G);let H=G[D];return H===void 0&&(H=f(c()),G[D]=H),H}l(d,"getBindingState");function f(E){const w=[],U=[],D=[];for(let V=0;V<t;V++)w[V]=0,U[V]=0,D[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:w,enabledAttributes:U,attributeDivisors:D,object:E,attributes:{},index:null}}l(f,"createBindingState");function p(E,w,U,D){const V=r.attributes,G=w.attributes;let H=0;const z=U.getAttributes();for(const K in z)if(z[K].location>=0){const ce=V[K];let he=G[K];if(he===void 0&&(K==="instanceMatrix"&&E.instanceMatrix&&(he=E.instanceMatrix),K==="instanceColor"&&E.instanceColor&&(he=E.instanceColor)),ce===void 0||ce.attribute!==he||he&&ce.data!==he.data)return!0;H++}return r.attributesNum!==H||r.index!==D}l(p,"needsUpdate");function _(E,w,U,D){const V={},G=w.attributes;let H=0;const z=U.getAttributes();for(const K in z)if(z[K].location>=0){let ce=G[K];ce===void 0&&(K==="instanceMatrix"&&E.instanceMatrix&&(ce=E.instanceMatrix),K==="instanceColor"&&E.instanceColor&&(ce=E.instanceColor));const he={};he.attribute=ce,ce&&ce.data&&(he.data=ce.data),V[K]=he,H++}r.attributes=V,r.attributesNum=H,r.index=D}l(_,"saveCache");function v(){const E=r.newAttributes;for(let w=0,U=E.length;w<U;w++)E[w]=0}l(v,"initAttributes");function g(E){m(E,0)}l(g,"enableAttribute");function m(E,w){const U=r.newAttributes,D=r.enabledAttributes,V=r.attributeDivisors;U[E]=1,D[E]===0&&(s.enableVertexAttribArray(E),D[E]=1),V[E]!==w&&(s.vertexAttribDivisor(E,w),V[E]=w)}l(m,"enableAttributeAndDivisor");function T(){const E=r.newAttributes,w=r.enabledAttributes;for(let U=0,D=w.length;U<D;U++)w[U]!==E[U]&&(s.disableVertexAttribArray(U),w[U]=0)}l(T,"disableUnusedAttributes");function M(E,w,U,D,V,G,H){H===!0?s.vertexAttribIPointer(E,w,U,V,G):s.vertexAttribPointer(E,w,U,D,V,G)}l(M,"vertexAttribPointer");function S(E,w,U,D){v();const V=D.attributes,G=U.getAttributes(),H=w.defaultAttributeValues;for(const z in G){const K=G[z];if(K.location>=0){let ae=V[z];if(ae===void 0&&(z==="instanceMatrix"&&E.instanceMatrix&&(ae=E.instanceMatrix),z==="instanceColor"&&E.instanceColor&&(ae=E.instanceColor)),ae!==void 0){const ce=ae.normalized,he=ae.itemSize,Ve=e.get(ae);if(Ve===void 0)continue;const Ne=Ve.buffer,nt=Ve.type,st=Ve.bytesPerElement,$=nt===s.INT||nt===s.UNSIGNED_INT||ae.gpuType===ld;if(ae.isInterleavedBufferAttribute){const ne=ae.data,Me=ne.stride,Be=ae.offset;if(ne.isInstancedInterleavedBuffer){for(let we=0;we<K.locationSize;we++)m(K.location+we,ne.meshPerAttribute);E.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let we=0;we<K.locationSize;we++)g(K.location+we);s.bindBuffer(s.ARRAY_BUFFER,Ne);for(let we=0;we<K.locationSize;we++)M(K.location+we,he/K.locationSize,nt,ce,Me*st,(Be+he/K.locationSize*we)*st,$)}else{if(ae.isInstancedBufferAttribute){for(let ne=0;ne<K.locationSize;ne++)m(K.location+ne,ae.meshPerAttribute);E.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let ne=0;ne<K.locationSize;ne++)g(K.location+ne);s.bindBuffer(s.ARRAY_BUFFER,Ne);for(let ne=0;ne<K.locationSize;ne++)M(K.location+ne,he/K.locationSize,nt,ce,he*st,he/K.locationSize*ne*st,$)}}else if(H!==void 0){const ce=H[z];if(ce!==void 0)switch(ce.length){case 2:s.vertexAttrib2fv(K.location,ce);break;case 3:s.vertexAttrib3fv(K.location,ce);break;case 4:s.vertexAttrib4fv(K.location,ce);break;default:s.vertexAttrib1fv(K.location,ce)}}}}T()}l(S,"setupVertexAttributes");function C(){F();for(const E in n){const w=n[E];for(const U in w){const D=w[U];for(const V in D)h(D[V].object),delete D[V];delete w[U]}delete n[E]}}l(C,"dispose");function P(E){if(n[E.id]===void 0)return;const w=n[E.id];for(const U in w){const D=w[U];for(const V in D)h(D[V].object),delete D[V];delete w[U]}delete n[E.id]}l(P,"releaseStatesOfGeometry");function L(E){for(const w in n){const U=n[w];if(U[E.id]===void 0)continue;const D=U[E.id];for(const V in D)h(D[V].object),delete D[V];delete U[E.id]}}l(L,"releaseStatesOfProgram");function F(){y(),o=!0,r!==i&&(r=i,u(r.object))}l(F,"reset");function y(){i.geometry=null,i.program=null,i.wireframe=!1}return l(y,"resetDefaultState"),{setup:a,reset:F,resetDefaultState:y,dispose:C,releaseStatesOfGeometry:P,releaseStatesOfProgram:L,initAttributes:v,enableAttribute:g,disableUnusedAttributes:T}}l(WS,"WebGLBindingStates");function XS(s,e,t){let n;function i(u){n=u}l(i,"setMode");function r(u,h){s.drawArrays(n,u,h),t.update(h,n,1)}l(r,"render");function o(u,h,d){d!==0&&(s.drawArraysInstanced(n,u,h,d),t.update(h,n,d))}l(o,"renderInstances");function a(u,h,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,u,0,h,0,d);let p=0;for(let _=0;_<d;_++)p+=h[_];t.update(p,n,1)}l(a,"renderMultiDraw");function c(u,h,d,f){if(d===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let _=0;_<u.length;_++)o(u[_],h[_],f[_]);else{p.multiDrawArraysInstancedWEBGL(n,u,0,h,0,f,0,d);let _=0;for(let v=0;v<d;v++)_+=h[v]*f[v];t.update(_,n,1)}}l(c,"renderMultiDrawInstances"),this.setMode=i,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}l(XS,"WebGLBufferRenderer");function jS(s,e,t,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const L=e.get("EXT_texture_filter_anisotropic");i=s.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}l(r,"getMaxAnisotropy");function o(L){return!(L!==pn&&n.convert(L)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}l(o,"textureFormatReadable");function a(L){const F=L===ni&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(L!==rn&&n.convert(L)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&L!==fn&&!F)}l(a,"textureTypeReadable");function c(L){if(L==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";L="mediump"}return L==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}l(c,"getMaxPrecision");let u=t.precision!==void 0?t.precision:"highp";const h=c(u);h!==u&&(Ie("WebGLRenderer:",u,"not supported, using",h,"instead."),u=h);const d=t.logarithmicDepthBuffer===!0,f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),p=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),_=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=s.getParameter(s.MAX_TEXTURE_SIZE),g=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),m=s.getParameter(s.MAX_VERTEX_ATTRIBS),T=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),M=s.getParameter(s.MAX_VARYING_VECTORS),S=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),C=s.getParameter(s.MAX_SAMPLES),P=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:u,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:_,maxTextureSize:v,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:T,maxVaryings:M,maxFragmentUniforms:S,maxSamples:C,samples:P}}l(jS,"WebGLCapabilities");function qS(s){const e=this;let t=null,n=0,i=!1,r=!1;const o=new $n,a=new Ye,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const p=d.length!==0||f||n!==0||i;return i=f,n=d.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,f){t=h(d,f,0)},this.setState=function(d,f,p){const _=d.clippingPlanes,v=d.clipIntersection,g=d.clipShadows,m=s.get(d);if(!i||_===null||_.length===0||r&&!g)r?h(null):u();else{const T=r?0:n,M=T*4;let S=m.clippingState||null;c.value=S,S=h(_,f,M,p);for(let C=0;C!==M;++C)S[C]=t[C];m.clippingState=S,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=T}};function u(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}l(u,"resetGlobalState");function h(d,f,p,_){const v=d!==null?d.length:0;let g=null;if(v!==0){if(g=c.value,_!==!0||g===null){const m=p+v*4,T=f.matrixWorldInverse;a.getNormalMatrix(T),(g===null||g.length<m)&&(g=new Float32Array(m));for(let M=0,S=p;M!==v;++M,S+=4)o.copy(d[M]).applyMatrix4(T,a),o.normal.toArray(g,S),g[S+3]=o.constant}c.value=g,c.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,g}l(h,"projectPlanes")}l(qS,"WebGLClipping");function YS(s){let e=new WeakMap;function t(o,a){return a===tc?o.mapping=Xi:a===nc&&(o.mapping=tr),o}l(t,"mapTextureMapping");function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===tc||a===nc)if(e.has(o)){const c=e.get(o).texture;return t(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const u=new sa(c.height);return u.fromEquirectangularTexture(s,o),e.set(o,u),o.addEventListener("dispose",i),t(u.texture,o.mapping)}else return null}}return o}l(n,"get");function i(o){const a=o.target;a.removeEventListener("dispose",i);const c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}l(i,"onTextureDispose");function r(){e=new WeakMap}return l(r,"dispose"),{get:n,dispose:r}}l(YS,"WebGLCubeMaps");const mi=4,Fg=[.125,.215,.35,.446,.526,.582],ki=20,$S=256,vr=new lr,Bg=new We;let Ll=null,Il=0,Dl=0,Nl=!1;const KS=new I,bp=class bp{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,i=100,r={}){const{size:o=256,position:a=KS}=r;Ll=this._renderer.getRenderTarget(),Il=this._renderer.getActiveCubeFace(),Dl=this._renderer.getActiveMipmapLevel(),Nl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,i,c,a),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Hg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=zg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Ll,Il,Dl),this._renderer.xr.enabled=Nl,e.scissorTest=!1,ps(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Xi||e.mapping===tr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ll=this._renderer.getRenderTarget(),Il=this._renderer.getActiveCubeFace(),Dl=this._renderer.getActiveMipmapLevel(),Nl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Rt,minFilter:Rt,generateMipmaps:!1,type:ni,format:pn,colorSpace:qt,depthBuffer:!1},i=kg(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=kg(e,t,n);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=JS(r)),this._blurMaterial=QS(r,e,t),this._ggxMaterial=ZS(r,e,t)}return i}_compileMaterial(e){const t=new ft(new Gt,e);this._renderer.compile(t,vr)}_sceneToCubeUV(e,t,n,i,r){const c=new Ft(90,1,t,n),u=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,f=d.autoClear,p=d.toneMapping;d.getClearColor(Bg),d.toneMapping=Fn,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(i),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new ft(new kn,new Jn({name:"PMREM.Background",side:Jt,depthWrite:!1,depthTest:!1})));const v=this._backgroundBox,g=v.material;let m=!1;const T=e.background;T?T.isColor&&(g.color.copy(T),e.background=null,m=!0):(g.color.copy(Bg),m=!0);for(let M=0;M<6;M++){const S=M%3;S===0?(c.up.set(0,u[M],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+h[M],r.y,r.z)):S===1?(c.up.set(0,0,u[M]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+h[M],r.z)):(c.up.set(0,u[M],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+h[M]));const C=this._cubeSize;ps(i,S*C,M>2?C:0,C,C),d.setRenderTarget(i),m&&d.render(v,c),d.render(e,c)}d.toneMapping=p,d.autoClear=f,e.background=T}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Xi||e.mapping===tr;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Hg()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=zg());const r=i?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;const a=r.uniforms;a.envMap.value=e;const c=this._cubeSize;ps(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,vr)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodMeshes.length;for(let r=1;r<i;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=n}_applyGGXFilter(e,t,n){const i=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[n];a.material=o;const c=o.uniforms,u=n/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),d=Math.sqrt(u*u-h*h),f=0+u*1.25,p=d*f,{_lodMax:_}=this,v=this._sizeLods[n],g=3*v*(n>_-mi?n-_+mi:0),m=4*(this._cubeSize-v);c.envMap.value=e.texture,c.roughness.value=p,c.mipInt.value=_-t,ps(r,g,m,3*v,2*v),i.setRenderTarget(r),i.render(a,vr),c.envMap.value=r.texture,c.roughness.value=0,c.mipInt.value=_-n,ps(e,g,m,3*v,2*v),i.setRenderTarget(e),i.render(a,vr)}_blur(e,t,n,i,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",r),this._halfBlur(o,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,o,a){const c=this._renderer,u=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&He("blur direction must be either latitudinal or longitudinal!");const h=3,d=this._lodMeshes[i];d.material=u;const f=u.uniforms,p=this._sizeLods[n]-1,_=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*ki-1),v=r/_,g=isFinite(r)?1+Math.floor(h*v):ki;g>ki&&Ie(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${ki}`);const m=[];let T=0;for(let L=0;L<ki;++L){const F=L/v,y=Math.exp(-F*F/2);m.push(y),L===0?T+=y:L<g&&(T+=2*y)}for(let L=0;L<m.length;L++)m[L]=m[L]/T;f.envMap.value=e.texture,f.samples.value=g,f.weights.value=m,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:M}=this;f.dTheta.value=_,f.mipInt.value=M-n;const S=this._sizeLods[i],C=3*S*(i>M-mi?i-M+mi:0),P=4*(this._cubeSize-S);ps(t,C,P,3*S,2*S),c.setRenderTarget(t),c.render(d,vr)}};l(bp,"PMREMGenerator");let Ma=bp;function JS(s){const e=[],t=[],n=[];let i=s;const r=s-mi+1+Fg.length;for(let o=0;o<r;o++){const a=Math.pow(2,i);e.push(a);let c=1/a;o>s-mi?c=Fg[o-s+mi-1]:o===0&&(c=0),t.push(c);const u=1/(a-2),h=-u,d=1+u,f=[h,h,d,h,d,d,h,h,d,d,h,d],p=6,_=6,v=3,g=2,m=1,T=new Float32Array(v*_*p),M=new Float32Array(g*_*p),S=new Float32Array(m*_*p);for(let P=0;P<p;P++){const L=P%3*2/3-1,F=P>2?0:-1,y=[L,F,0,L+2/3,F,0,L+2/3,F+1,0,L,F,0,L+2/3,F+1,0,L,F+1,0];T.set(y,v*_*P),M.set(f,g*_*P);const E=[P,P,P,P,P,P];S.set(E,m*_*P)}const C=new Gt;C.setAttribute("position",new Bt(T,v)),C.setAttribute("uv",new Bt(M,g)),C.setAttribute("faceIndex",new Bt(S,m)),n.push(new ft(C,null)),i>mi&&i--}return{lodMeshes:n,sizeLods:e,sigmas:t}}l(JS,"_createPlanes");function kg(s,e,t){const n=new _n(s,e,t);return n.texture.mapping=$a,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}l(kg,"_createRenderTarget");function ps(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}l(ps,"_setViewport");function ZS(s,e,t){return new xn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:$S,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Ka(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Qn,depthTest:!1,depthWrite:!1})}l(ZS,"_getGGXShader");function QS(s,e,t){const n=new Float32Array(ki),i=new I(0,1,0);return new xn({name:"SphericalGaussianBlur",defines:{n:ki,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Ka(),fragmentShader:`

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
		`,blending:Qn,depthTest:!1,depthWrite:!1})}l(QS,"_getBlurShader");function zg(){return new xn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ka(),fragmentShader:`

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
		`,blending:Qn,depthTest:!1,depthWrite:!1})}l(zg,"_getEquirectMaterial");function Hg(){return new xn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ka(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Qn,depthTest:!1,depthWrite:!1})}l(Hg,"_getCubemapMaterial");function Ka(){return`

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
	`}l(Ka,"_getCommonVertexShader");function eM(s){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const c=a.mapping,u=c===tc||c===nc,h=c===Xi||c===tr;if(u||h){let d=e.get(a);const f=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return t===null&&(t=new Ma(s)),d=u?t.fromEquirectangular(a,d):t.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),d.texture;if(d!==void 0)return d.texture;{const p=a.image;return u&&p&&p.height>0||h&&p&&i(p)?(t===null&&(t=new Ma(s)),d=u?t.fromEquirectangular(a):t.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),a.addEventListener("dispose",r),d.texture):null}}}return a}l(n,"get");function i(a){let c=0;const u=6;for(let h=0;h<u;h++)a[h]!==void 0&&c++;return c===u}l(i,"isCubeTextureComplete");function r(a){const c=a.target;c.removeEventListener("dispose",r);const u=e.get(c);u!==void 0&&(e.delete(c),u.dispose())}l(r,"onTextureDispose");function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return l(o,"dispose"),{get:n,dispose:o}}l(eM,"WebGLCubeUVMaps");function tM(s){const e={};function t(n){if(e[n]!==void 0)return e[n];const i=s.getExtension(n);return e[n]=i,i}return l(t,"getExtension"),{has:l(function(n){return t(n)!==null},"has"),init:l(function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},"init"),get:l(function(n){const i=t(n);return i===null&&Wr("WebGLRenderer: "+n+" extension not supported."),i},"get")}}l(tM,"WebGLExtensions");function nM(s,e,t,n){const i={},r=new WeakMap;function o(d){const f=d.target;f.index!==null&&e.remove(f.index);for(const _ in f.attributes)e.remove(f.attributes[_]);f.removeEventListener("dispose",o),delete i[f.id];const p=r.get(f);p&&(e.remove(p),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}l(o,"onGeometryDispose");function a(d,f){return i[f.id]===!0||(f.addEventListener("dispose",o),i[f.id]=!0,t.memory.geometries++),f}l(a,"get");function c(d){const f=d.attributes;for(const p in f)e.update(f[p],s.ARRAY_BUFFER)}l(c,"update");function u(d){const f=[],p=d.index,_=d.attributes.position;let v=0;if(p!==null){const T=p.array;v=p.version;for(let M=0,S=T.length;M<S;M+=3){const C=T[M+0],P=T[M+1],L=T[M+2];f.push(C,P,P,L,L,C)}}else if(_!==void 0){const T=_.array;v=_.version;for(let M=0,S=T.length/3-1;M<S;M+=3){const C=M+0,P=M+1,L=M+2;f.push(C,P,P,L,L,C)}}else return;const g=new(z_(f)?ta:ea)(f,1);g.version=v;const m=r.get(d);m&&e.remove(m),r.set(d,g)}l(u,"updateWireframeAttribute");function h(d){const f=r.get(d);if(f){const p=d.index;p!==null&&f.version<p.version&&u(d)}else u(d);return r.get(d)}return l(h,"getWireframeAttribute"),{get:a,update:c,getWireframeAttribute:h}}l(nM,"WebGLGeometries");function iM(s,e,t){let n;function i(f){n=f}l(i,"setMode");let r,o;function a(f){r=f.type,o=f.bytesPerElement}l(a,"setIndex");function c(f,p){s.drawElements(n,p,r,f*o),t.update(p,n,1)}l(c,"render");function u(f,p,_){_!==0&&(s.drawElementsInstanced(n,p,r,f*o,_),t.update(p,n,_))}l(u,"renderInstances");function h(f,p,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,f,0,_);let g=0;for(let m=0;m<_;m++)g+=p[m];t.update(g,n,1)}l(h,"renderMultiDraw");function d(f,p,_,v){if(_===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let m=0;m<f.length;m++)u(f[m]/o,p[m],v[m]);else{g.multiDrawElementsInstancedWEBGL(n,p,0,r,f,0,v,0,_);let m=0;for(let T=0;T<_;T++)m+=p[T]*v[T];t.update(m,n,1)}}l(d,"renderMultiDrawInstances"),this.setMode=i,this.setIndex=a,this.render=c,this.renderInstances=u,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}l(iM,"WebGLIndexedBufferRenderer");function sM(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case s.TRIANGLES:t.triangles+=a*(r/3);break;case s.LINES:t.lines+=a*(r/2);break;case s.LINE_STRIP:t.lines+=a*(r-1);break;case s.LINE_LOOP:t.lines+=a*r;break;case s.POINTS:t.points+=a*r;break;default:He("WebGLInfo: Unknown draw mode:",o);break}}l(n,"update");function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return l(i,"reset"),{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}l(sM,"WebGLInfo");function rM(s,e,t){const n=new WeakMap,i=new vt;function r(o,a,c){const u=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=h!==void 0?h.length:0;let f=n.get(a);if(f===void 0||f.count!==d){let E=function(){F.dispose(),n.delete(a),a.removeEventListener("dispose",E)};var p=E;l(E,"disposeTexture"),f!==void 0&&f.texture.dispose();const _=a.morphAttributes.position!==void 0,v=a.morphAttributes.normal!==void 0,g=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],T=a.morphAttributes.normal||[],M=a.morphAttributes.color||[];let S=0;_===!0&&(S=1),v===!0&&(S=2),g===!0&&(S=3);let C=a.attributes.position.count*S,P=1;C>e.maxTextureSize&&(P=Math.ceil(C/e.maxTextureSize),C=e.maxTextureSize);const L=new Float32Array(C*P*4*d),F=new Qo(L,C,P,d);F.type=fn,F.needsUpdate=!0;const y=S*4;for(let w=0;w<d;w++){const U=m[w],D=T[w],V=M[w],G=C*P*4*w;for(let H=0;H<U.count;H++){const z=H*y;_===!0&&(i.fromBufferAttribute(U,H),L[G+z+0]=i.x,L[G+z+1]=i.y,L[G+z+2]=i.z,L[G+z+3]=0),v===!0&&(i.fromBufferAttribute(D,H),L[G+z+4]=i.x,L[G+z+5]=i.y,L[G+z+6]=i.z,L[G+z+7]=0),g===!0&&(i.fromBufferAttribute(V,H),L[G+z+8]=i.x,L[G+z+9]=i.y,L[G+z+10]=i.z,L[G+z+11]=V.itemSize===4?i.w:1)}}f={count:d,texture:F,size:new oe(C,P)},n.set(a,f),a.addEventListener("dispose",E)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(s,"morphTexture",o.morphTexture,t);else{let _=0;for(let g=0;g<u.length;g++)_+=u[g];const v=a.morphTargetsRelative?1:1-_;c.getUniforms().setValue(s,"morphTargetBaseInfluence",v),c.getUniforms().setValue(s,"morphTargetInfluences",u)}c.getUniforms().setValue(s,"morphTargetsTexture",f.texture,t),c.getUniforms().setValue(s,"morphTargetsTextureSize",f.size)}return l(r,"update"),{update:r}}l(rM,"WebGLMorphtargets");function oM(s,e,t,n){let i=new WeakMap;function r(c){const u=n.render.frame,h=c.geometry,d=e.get(c,h);if(i.get(d)!==u&&(e.update(d),i.set(d,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),i.get(c)!==u&&(t.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,s.ARRAY_BUFFER),i.set(c,u))),c.isSkinnedMesh){const f=c.skeleton;i.get(f)!==u&&(f.update(),i.set(f,u))}return d}l(r,"update");function o(){i=new WeakMap}l(o,"dispose");function a(c){const u=c.target;u.removeEventListener("dispose",a),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return l(a,"onInstancedMeshDispose"),{update:r,dispose:o}}l(oM,"WebGLObjects");const aM={[E_]:"LINEAR_TONE_MAPPING",[w_]:"REINHARD_TONE_MAPPING",[T_]:"CINEON_TONE_MAPPING",[A_]:"ACES_FILMIC_TONE_MAPPING",[R_]:"AGX_TONE_MAPPING",[P_]:"NEUTRAL_TONE_MAPPING",[C_]:"CUSTOM_TONE_MAPPING"};function lM(s,e,t,n,i){const r=new _n(e,t,{type:s,depthBuffer:n,stencilBuffer:i}),o=new _n(e,t,{type:ni,depthBuffer:!1,stencilBuffer:!1}),a=new Gt;a.setAttribute("position",new Et([-1,3,0,-1,-1,0,3,-1,0],3)),a.setAttribute("uv",new Et([0,2,0,0,2,0],2));const c=new lu({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),u=new ft(a,c),h=new lr(-1,1,1,-1,0,1);let d=null,f=null,p=!1,_,v=null,g=[],m=!1;this.setSize=function(T,M){r.setSize(T,M),o.setSize(T,M);for(let S=0;S<g.length;S++){const C=g[S];C.setSize&&C.setSize(T,M)}},this.setEffects=function(T){g=T,m=g.length>0&&g[0].isRenderPass===!0;const M=r.width,S=r.height;for(let C=0;C<g.length;C++){const P=g[C];P.setSize&&P.setSize(M,S)}},this.begin=function(T,M){if(p||T.toneMapping===Fn&&g.length===0)return!1;if(v=M,M!==null){const S=M.width,C=M.height;(r.width!==S||r.height!==C)&&this.setSize(S,C)}return m===!1&&T.setRenderTarget(r),_=T.toneMapping,T.toneMapping=Fn,!0},this.hasRenderPass=function(){return m},this.end=function(T,M){T.toneMapping=_,p=!0;let S=r,C=o;for(let P=0;P<g.length;P++){const L=g[P];if(L.enabled!==!1&&(L.render(T,C,S,M),L.needsSwap!==!1)){const F=S;S=C,C=F}}if(d!==T.outputColorSpace||f!==T.toneMapping){d=T.outputColorSpace,f=T.toneMapping,c.defines={},et.getTransfer(d)===at&&(c.defines.SRGB_TRANSFER="");const P=aM[f];P&&(c.defines[P]=""),c.needsUpdate=!0}c.uniforms.tDiffuse.value=S.texture,T.setRenderTarget(v),T.render(u,h),v=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){r.dispose(),o.dispose(),a.dispose(),c.dispose()}}l(lM,"WebGLOutput");const $_=new kt,Iu=new ji(1,1),K_=new Qo,J_=new kc,Z_=new ia,Vg=[],Gg=[],Wg=new Float32Array(16),Xg=new Float32Array(9),jg=new Float32Array(4);function cr(s,e,t){const n=s[0];if(n<=0||n>0)return s;const i=e*t;let r=Vg[i];if(r===void 0&&(r=new Float32Array(i),Vg[i]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,s[o].toArray(r,a)}return r}l(cr,"flatten");function Lt(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}l(Lt,"arraysEqual");function It(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}l(It,"copyArray");function Ja(s,e){let t=Gg[e];t===void 0&&(t=new Int32Array(e),Gg[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}l(Ja,"allocTexUnits");function cM(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}l(cM,"setValueV1f");function uM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Lt(t,e))return;s.uniform2fv(this.addr,e),It(t,e)}}l(uM,"setValueV2f");function hM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Lt(t,e))return;s.uniform3fv(this.addr,e),It(t,e)}}l(hM,"setValueV3f");function dM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Lt(t,e))return;s.uniform4fv(this.addr,e),It(t,e)}}l(dM,"setValueV4f");function fM(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Lt(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),It(t,e)}else{if(Lt(t,n))return;jg.set(n),s.uniformMatrix2fv(this.addr,!1,jg),It(t,n)}}l(fM,"setValueM2");function pM(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Lt(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),It(t,e)}else{if(Lt(t,n))return;Xg.set(n),s.uniformMatrix3fv(this.addr,!1,Xg),It(t,n)}}l(pM,"setValueM3");function mM(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Lt(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),It(t,e)}else{if(Lt(t,n))return;Wg.set(n),s.uniformMatrix4fv(this.addr,!1,Wg),It(t,n)}}l(mM,"setValueM4");function gM(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}l(gM,"setValueV1i");function _M(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Lt(t,e))return;s.uniform2iv(this.addr,e),It(t,e)}}l(_M,"setValueV2i");function vM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Lt(t,e))return;s.uniform3iv(this.addr,e),It(t,e)}}l(vM,"setValueV3i");function xM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Lt(t,e))return;s.uniform4iv(this.addr,e),It(t,e)}}l(xM,"setValueV4i");function yM(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}l(yM,"setValueV1ui");function bM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Lt(t,e))return;s.uniform2uiv(this.addr,e),It(t,e)}}l(bM,"setValueV2ui");function SM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Lt(t,e))return;s.uniform3uiv(this.addr,e),It(t,e)}}l(SM,"setValueV3ui");function MM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Lt(t,e))return;s.uniform4uiv(this.addr,e),It(t,e)}}l(MM,"setValueV4ui");function EM(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(Iu.compareFunction=t.isReversedDepthBuffer()?_d:gd,r=Iu):r=$_,t.setTexture2D(e||r,i)}l(EM,"setValueT1");function wM(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||J_,i)}l(wM,"setValueT3D1");function TM(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Z_,i)}l(TM,"setValueT6");function AM(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||K_,i)}l(AM,"setValueT2DArray1");function CM(s){switch(s){case 5126:return cM;case 35664:return uM;case 35665:return hM;case 35666:return dM;case 35674:return fM;case 35675:return pM;case 35676:return mM;case 5124:case 35670:return gM;case 35667:case 35671:return _M;case 35668:case 35672:return vM;case 35669:case 35673:return xM;case 5125:return yM;case 36294:return bM;case 36295:return SM;case 36296:return MM;case 35678:case 36198:case 36298:case 36306:case 35682:return EM;case 35679:case 36299:case 36307:return wM;case 35680:case 36300:case 36308:case 36293:return TM;case 36289:case 36303:case 36311:case 36292:return AM}}l(CM,"getSingularSetter");function RM(s,e){s.uniform1fv(this.addr,e)}l(RM,"setValueV1fArray");function PM(s,e){const t=cr(e,this.size,2);s.uniform2fv(this.addr,t)}l(PM,"setValueV2fArray");function LM(s,e){const t=cr(e,this.size,3);s.uniform3fv(this.addr,t)}l(LM,"setValueV3fArray");function IM(s,e){const t=cr(e,this.size,4);s.uniform4fv(this.addr,t)}l(IM,"setValueV4fArray");function DM(s,e){const t=cr(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}l(DM,"setValueM2Array");function NM(s,e){const t=cr(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}l(NM,"setValueM3Array");function OM(s,e){const t=cr(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}l(OM,"setValueM4Array");function UM(s,e){s.uniform1iv(this.addr,e)}l(UM,"setValueV1iArray");function FM(s,e){s.uniform2iv(this.addr,e)}l(FM,"setValueV2iArray");function BM(s,e){s.uniform3iv(this.addr,e)}l(BM,"setValueV3iArray");function kM(s,e){s.uniform4iv(this.addr,e)}l(kM,"setValueV4iArray");function zM(s,e){s.uniform1uiv(this.addr,e)}l(zM,"setValueV1uiArray");function HM(s,e){s.uniform2uiv(this.addr,e)}l(HM,"setValueV2uiArray");function VM(s,e){s.uniform3uiv(this.addr,e)}l(VM,"setValueV3uiArray");function GM(s,e){s.uniform4uiv(this.addr,e)}l(GM,"setValueV4uiArray");function WM(s,e,t){const n=this.cache,i=e.length,r=Ja(t,i);Lt(n,r)||(s.uniform1iv(this.addr,r),It(n,r));let o;this.type===s.SAMPLER_2D_SHADOW?o=Iu:o=$_;for(let a=0;a!==i;++a)t.setTexture2D(e[a]||o,r[a])}l(WM,"setValueT1Array");function XM(s,e,t){const n=this.cache,i=e.length,r=Ja(t,i);Lt(n,r)||(s.uniform1iv(this.addr,r),It(n,r));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||J_,r[o])}l(XM,"setValueT3DArray");function jM(s,e,t){const n=this.cache,i=e.length,r=Ja(t,i);Lt(n,r)||(s.uniform1iv(this.addr,r),It(n,r));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||Z_,r[o])}l(jM,"setValueT6Array");function qM(s,e,t){const n=this.cache,i=e.length,r=Ja(t,i);Lt(n,r)||(s.uniform1iv(this.addr,r),It(n,r));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||K_,r[o])}l(qM,"setValueT2DArrayArray");function YM(s){switch(s){case 5126:return RM;case 35664:return PM;case 35665:return LM;case 35666:return IM;case 35674:return DM;case 35675:return NM;case 35676:return OM;case 5124:case 35670:return UM;case 35667:case 35671:return FM;case 35668:case 35672:return BM;case 35669:case 35673:return kM;case 5125:return zM;case 36294:return HM;case 36295:return VM;case 36296:return GM;case 35678:case 36198:case 36298:case 36306:case 35682:return WM;case 35679:case 36299:case 36307:return XM;case 35680:case 36300:case 36308:case 36293:return jM;case 36289:case 36303:case 36311:case 36292:return qM}}l(YM,"getPureArraySetter");const Sp=class Sp{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=CM(t.type)}};l(Sp,"SingleUniform");let Du=Sp;const Mp=class Mp{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=YM(t.type)}};l(Mp,"PureArrayUniform");let Nu=Mp;const Ep=class Ep{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let r=0,o=i.length;r!==o;++r){const a=i[r];a.setValue(e,t[a.id],n)}}};l(Ep,"StructuredUniform");let Ou=Ep;const Ol=/(\w+)(\])?(\[|\.)?/g;function qg(s,e){s.seq.push(e),s.map[e.id]=e}l(qg,"addUniform");function $M(s,e,t){const n=s.name,i=n.length;for(Ol.lastIndex=0;;){const r=Ol.exec(n),o=Ol.lastIndex;let a=r[1];const c=r[2]==="]",u=r[3];if(c&&(a=a|0),u===void 0||u==="["&&o+2===i){qg(t,u===void 0?new Du(a,s,e):new Nu(a,s,e));break}else{let d=t.map[a];d===void 0&&(d=new Ou(a),qg(t,d)),t=d}}}l($M,"parseUniform");const wp=class wp{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){const a=e.getActiveUniform(t,o),c=e.getUniformLocation(t,a.name);$M(a,c,this)}const i=[],r=[];for(const o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?i.push(o):r.push(o);i.length>0&&(this.seq=i.concat(r))}setValue(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,o=t.length;r!==o;++r){const a=t[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const o=e[i];o.id in t&&n.push(o)}return n}};l(wp,"WebGLUniforms");let Es=wp;function Yg(s,e,t){const n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}l(Yg,"WebGLShader");const KM=37297;let JM=0;function ZM(s,e){const t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=i;o<r;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}l(ZM,"handleSource");const $g=new Ye;function QM(s){et._getMatrix($g,et.workingColorSpace,s);const e=`mat3( ${$g.elements.map(t=>t.toFixed(4))} )`;switch(et.getTransfer(s)){case Ko:return[e,"LinearTransferOETF"];case at:return[e,"sRGBTransferOETF"];default:return Ie("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}l(QM,"getEncodingComponents");function Kg(s,e,t){const n=s.getShaderParameter(e,s.COMPILE_STATUS),r=(s.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+ZM(s.getShaderSource(e),a)}else return r}l(Kg,"getShaderErrors");function eE(s,e){const t=QM(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}l(eE,"getTexelEncodingFunction");const tE={[E_]:"Linear",[w_]:"Reinhard",[T_]:"Cineon",[A_]:"ACESFilmic",[R_]:"AgX",[P_]:"Neutral",[C_]:"Custom"};function nE(s,e){const t=tE[e];return t===void 0?(Ie("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}l(nE,"getToneMappingFunction");const ko=new I;function iE(){et.getLuminanceCoefficients(ko);const s=ko.x.toFixed(4),e=ko.y.toFixed(4),t=ko.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}l(iE,"getLuminanceFunction");function sE(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Tr).join(`
`)}l(sE,"generateVertexExtensions");function rE(s){const e=[];for(const t in s){const n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}l(rE,"generateDefines");function oE(s,e){const t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(e,i),o=r.name;let a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:s.getAttribLocation(e,o),locationSize:a}}return t}l(oE,"fetchAttributeLocations");function Tr(s){return s!==""}l(Tr,"filterEmptyLine");function Jg(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}l(Jg,"replaceLightNums");function Zg(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}l(Zg,"replaceClippingPlaneNums");const aE=/^[ \t]*#include +<([\w\d./]+)>/gm;function Uu(s){return s.replace(aE,cE)}l(Uu,"resolveIncludes");const lE=new Map;function cE(s,e){let t=$e[e];if(t===void 0){const n=lE.get(e);if(n!==void 0)t=$e[n],Ie('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Uu(t)}l(cE,"includeReplacer");const uE=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Qg(s){return s.replace(uE,hE)}l(Qg,"unrollLoops");function hE(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}l(hE,"loopReplacer");function e_(s){let e=`precision ${s.precision} float;
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
#define LOW_PRECISION`),e}l(e_,"generatePrecision");const dE={[Vo]:"SHADOWMAP_TYPE_PCF",[Mr]:"SHADOWMAP_TYPE_VSM"};function fE(s){return dE[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}l(fE,"generateShadowMapTypeDefine");const pE={[Xi]:"ENVMAP_TYPE_CUBE",[tr]:"ENVMAP_TYPE_CUBE",[$a]:"ENVMAP_TYPE_CUBE_UV"};function mE(s){return s.envMap===!1?"ENVMAP_TYPE_CUBE":pE[s.envMapMode]||"ENVMAP_TYPE_CUBE"}l(mE,"generateEnvMapTypeDefine");const gE={[tr]:"ENVMAP_MODE_REFRACTION"};function _E(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":gE[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}l(_E,"generateEnvMapModeDefine");const vE={[ad]:"ENVMAP_BLENDING_MULTIPLY",[yv]:"ENVMAP_BLENDING_MIX",[bv]:"ENVMAP_BLENDING_ADD"};function xE(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":vE[s.combine]||"ENVMAP_BLENDING_NONE"}l(xE,"generateEnvMapBlendingDefine");function yE(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}l(yE,"generateCubeUVSize");function bE(s,e,t,n){const i=s.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const c=fE(t),u=mE(t),h=_E(t),d=xE(t),f=yE(t),p=sE(t),_=rE(r),v=i.createProgram();let g,m,T=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Tr).join(`
`),g.length>0&&(g+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Tr).join(`
`),m.length>0&&(m+=`
`)):(g=[e_(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Tr).join(`
`),m=[e_(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Fn?"#define TONE_MAPPING":"",t.toneMapping!==Fn?$e.tonemapping_pars_fragment:"",t.toneMapping!==Fn?nE("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",$e.colorspace_pars_fragment,eE("linearToOutputTexel",t.outputColorSpace),iE(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Tr).join(`
`)),o=Uu(o),o=Jg(o,t),o=Zg(o,t),a=Uu(a),a=Jg(a,t),a=Zg(a,t),o=Qg(o),a=Qg(a),t.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,g=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,m=["#define varying in",t.glslVersion===Ym?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Ym?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const M=T+g+o,S=T+m+a,C=Yg(i,i.VERTEX_SHADER,M),P=Yg(i,i.FRAGMENT_SHADER,S);i.attachShader(v,C),i.attachShader(v,P),t.index0AttributeName!==void 0?i.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(v,0,"position"),i.linkProgram(v);function L(w){if(s.debug.checkShaderErrors){const U=i.getProgramInfoLog(v)||"",D=i.getShaderInfoLog(C)||"",V=i.getShaderInfoLog(P)||"",G=U.trim(),H=D.trim(),z=V.trim();let K=!0,ae=!0;if(i.getProgramParameter(v,i.LINK_STATUS)===!1)if(K=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,v,C,P);else{const ce=Kg(i,C,"vertex"),he=Kg(i,P,"fragment");He("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(v,i.VALIDATE_STATUS)+`

Material Name: `+w.name+`
Material Type: `+w.type+`

Program Info Log: `+G+`
`+ce+`
`+he)}else G!==""?Ie("WebGLProgram: Program Info Log:",G):(H===""||z==="")&&(ae=!1);ae&&(w.diagnostics={runnable:K,programLog:G,vertexShader:{log:H,prefix:g},fragmentShader:{log:z,prefix:m}})}i.deleteShader(C),i.deleteShader(P),F=new Es(i,v),y=oE(i,v)}l(L,"onFirstUse");let F;this.getUniforms=function(){return F===void 0&&L(this),F};let y;this.getAttributes=function(){return y===void 0&&L(this),y};let E=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=i.getProgramParameter(v,KM)),E},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=JM++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=C,this.fragmentShader=P,this}l(bE,"WebGLProgram");let SE=0;const Tp=class Tp{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Bu(e),t.set(e,n)),n}};l(Tp,"WebGLShaderCache");let Fu=Tp;const Ap=class Ap{constructor(e){this.id=SE++,this.code=e,this.usedTimes=0}};l(Ap,"WebGLShaderStage");let Bu=Ap;function ME(s,e,t,n,i,r,o){const a=new jr,c=new Fu,u=new Set,h=[],d=new Map,f=i.logarithmicDepthBuffer;let p=i.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(y){return u.add(y),y===0?"uv":`uv${y}`}l(v,"getChannel");function g(y,E,w,U,D){const V=U.fog,G=D.geometry,H=y.isMeshStandardMaterial?U.environment:null,z=(y.isMeshStandardMaterial?t:e).get(y.envMap||H),K=z&&z.mapping===$a?z.image.height:null,ae=_[y.type];y.precision!==null&&(p=i.getMaxPrecision(y.precision),p!==y.precision&&Ie("WebGLProgram.getParameters:",y.precision,"not supported, using",p,"instead."));const ce=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,he=ce!==void 0?ce.length:0;let Ve=0;G.morphAttributes.position!==void 0&&(Ve=1),G.morphAttributes.normal!==void 0&&(Ve=2),G.morphAttributes.color!==void 0&&(Ve=3);let Ne,nt,st,$;if(ae){const rt=Nn[ae];Ne=rt.vertexShader,nt=rt.fragmentShader}else Ne=y.vertexShader,nt=y.fragmentShader,c.update(y),st=c.getVertexShaderID(y),$=c.getFragmentShaderID(y);const ne=s.getRenderTarget(),Me=s.state.buffers.depth.getReversed(),Be=D.isInstancedMesh===!0,we=D.isBatchedMesh===!0,tt=!!y.map,ct=!!y.matcap,je=!!z,ee=!!y.aoMap,se=!!y.lightMap,te=!!y.bumpMap,ve=!!y.normalMap,R=!!y.displacementMap,Oe=!!y.emissiveMap,be=!!y.metalnessMap,ke=!!y.roughnessMap,ue=y.anisotropy>0,A=y.clearcoat>0,x=y.dispersion>0,O=y.iridescence>0,q=y.sheen>0,Z=y.transmission>0,Y=ue&&!!y.anisotropyMap,Re=A&&!!y.clearcoatMap,de=A&&!!y.clearcoatNormalMap,Ae=A&&!!y.clearcoatRoughnessMap,ze=O&&!!y.iridescenceMap,ie=O&&!!y.iridescenceThicknessMap,me=q&&!!y.sheenColorMap,Ce=q&&!!y.sheenRoughnessMap,Pe=!!y.specularMap,pe=!!y.specularColorMap,Ke=!!y.specularIntensityMap,N=Z&&!!y.transmissionMap,ye=Z&&!!y.thicknessMap,le=!!y.gradientMap,Se=!!y.alphaMap,re=y.alphaTest>0,Q=!!y.alphaHash,fe=!!y.extensions;let Xe=Fn;y.toneMapped&&(ne===null||ne.isXRRenderTarget===!0)&&(Xe=s.toneMapping);const pt={shaderID:ae,shaderType:y.type,shaderName:y.name,vertexShader:Ne,fragmentShader:nt,defines:y.defines,customVertexShaderID:st,customFragmentShaderID:$,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:p,batching:we,batchingColor:we&&D._colorsTexture!==null,instancing:Be,instancingColor:Be&&D.instanceColor!==null,instancingMorph:Be&&D.morphTexture!==null,outputColorSpace:ne===null?s.outputColorSpace:ne.isXRRenderTarget===!0?ne.texture.colorSpace:qt,alphaToCoverage:!!y.alphaToCoverage,map:tt,matcap:ct,envMap:je,envMapMode:je&&z.mapping,envMapCubeUVHeight:K,aoMap:ee,lightMap:se,bumpMap:te,normalMap:ve,displacementMap:R,emissiveMap:Oe,normalMapObjectSpace:ve&&y.normalMapType===Tv,normalMapTangentSpace:ve&&y.normalMapType===md,metalnessMap:be,roughnessMap:ke,anisotropy:ue,anisotropyMap:Y,clearcoat:A,clearcoatMap:Re,clearcoatNormalMap:de,clearcoatRoughnessMap:Ae,dispersion:x,iridescence:O,iridescenceMap:ze,iridescenceThicknessMap:ie,sheen:q,sheenColorMap:me,sheenRoughnessMap:Ce,specularMap:Pe,specularColorMap:pe,specularIntensityMap:Ke,transmission:Z,transmissionMap:N,thicknessMap:ye,gradientMap:le,opaque:y.transparent===!1&&y.blending===Ss&&y.alphaToCoverage===!1,alphaMap:Se,alphaTest:re,alphaHash:Q,combine:y.combine,mapUv:tt&&v(y.map.channel),aoMapUv:ee&&v(y.aoMap.channel),lightMapUv:se&&v(y.lightMap.channel),bumpMapUv:te&&v(y.bumpMap.channel),normalMapUv:ve&&v(y.normalMap.channel),displacementMapUv:R&&v(y.displacementMap.channel),emissiveMapUv:Oe&&v(y.emissiveMap.channel),metalnessMapUv:be&&v(y.metalnessMap.channel),roughnessMapUv:ke&&v(y.roughnessMap.channel),anisotropyMapUv:Y&&v(y.anisotropyMap.channel),clearcoatMapUv:Re&&v(y.clearcoatMap.channel),clearcoatNormalMapUv:de&&v(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ae&&v(y.clearcoatRoughnessMap.channel),iridescenceMapUv:ze&&v(y.iridescenceMap.channel),iridescenceThicknessMapUv:ie&&v(y.iridescenceThicknessMap.channel),sheenColorMapUv:me&&v(y.sheenColorMap.channel),sheenRoughnessMapUv:Ce&&v(y.sheenRoughnessMap.channel),specularMapUv:Pe&&v(y.specularMap.channel),specularColorMapUv:pe&&v(y.specularColorMap.channel),specularIntensityMapUv:Ke&&v(y.specularIntensityMap.channel),transmissionMapUv:N&&v(y.transmissionMap.channel),thicknessMapUv:ye&&v(y.thicknessMap.channel),alphaMapUv:Se&&v(y.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&(ve||ue),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!G.attributes.uv&&(tt||Se),fog:!!V,useFog:y.fog===!0,fogExp2:!!V&&V.isFogExp2,flatShading:y.flatShading===!0&&y.wireframe===!1,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:Me,skinning:D.isSkinnedMesh===!0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:he,morphTextureStride:Ve,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:s.shadowMap.enabled&&w.length>0,shadowMapType:s.shadowMap.type,toneMapping:Xe,decodeVideoTexture:tt&&y.map.isVideoTexture===!0&&et.getTransfer(y.map.colorSpace)===at,decodeVideoTextureEmissive:Oe&&y.emissiveMap.isVideoTexture===!0&&et.getTransfer(y.emissiveMap.colorSpace)===at,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===wn,flipSided:y.side===Jt,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:fe&&y.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(fe&&y.extensions.multiDraw===!0||we)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return pt.vertexUv1s=u.has(1),pt.vertexUv2s=u.has(2),pt.vertexUv3s=u.has(3),u.clear(),pt}l(g,"getParameters");function m(y){const E=[];if(y.shaderID?E.push(y.shaderID):(E.push(y.customVertexShaderID),E.push(y.customFragmentShaderID)),y.defines!==void 0)for(const w in y.defines)E.push(w),E.push(y.defines[w]);return y.isRawShaderMaterial===!1&&(T(E,y),M(E,y),E.push(s.outputColorSpace)),E.push(y.customProgramCacheKey),E.join()}l(m,"getProgramCacheKey");function T(y,E){y.push(E.precision),y.push(E.outputColorSpace),y.push(E.envMapMode),y.push(E.envMapCubeUVHeight),y.push(E.mapUv),y.push(E.alphaMapUv),y.push(E.lightMapUv),y.push(E.aoMapUv),y.push(E.bumpMapUv),y.push(E.normalMapUv),y.push(E.displacementMapUv),y.push(E.emissiveMapUv),y.push(E.metalnessMapUv),y.push(E.roughnessMapUv),y.push(E.anisotropyMapUv),y.push(E.clearcoatMapUv),y.push(E.clearcoatNormalMapUv),y.push(E.clearcoatRoughnessMapUv),y.push(E.iridescenceMapUv),y.push(E.iridescenceThicknessMapUv),y.push(E.sheenColorMapUv),y.push(E.sheenRoughnessMapUv),y.push(E.specularMapUv),y.push(E.specularColorMapUv),y.push(E.specularIntensityMapUv),y.push(E.transmissionMapUv),y.push(E.thicknessMapUv),y.push(E.combine),y.push(E.fogExp2),y.push(E.sizeAttenuation),y.push(E.morphTargetsCount),y.push(E.morphAttributeCount),y.push(E.numDirLights),y.push(E.numPointLights),y.push(E.numSpotLights),y.push(E.numSpotLightMaps),y.push(E.numHemiLights),y.push(E.numRectAreaLights),y.push(E.numDirLightShadows),y.push(E.numPointLightShadows),y.push(E.numSpotLightShadows),y.push(E.numSpotLightShadowsWithMaps),y.push(E.numLightProbes),y.push(E.shadowMapType),y.push(E.toneMapping),y.push(E.numClippingPlanes),y.push(E.numClipIntersection),y.push(E.depthPacking)}l(T,"getProgramCacheKeyParameters");function M(y,E){a.disableAll(),E.instancing&&a.enable(0),E.instancingColor&&a.enable(1),E.instancingMorph&&a.enable(2),E.matcap&&a.enable(3),E.envMap&&a.enable(4),E.normalMapObjectSpace&&a.enable(5),E.normalMapTangentSpace&&a.enable(6),E.clearcoat&&a.enable(7),E.iridescence&&a.enable(8),E.alphaTest&&a.enable(9),E.vertexColors&&a.enable(10),E.vertexAlphas&&a.enable(11),E.vertexUv1s&&a.enable(12),E.vertexUv2s&&a.enable(13),E.vertexUv3s&&a.enable(14),E.vertexTangents&&a.enable(15),E.anisotropy&&a.enable(16),E.alphaHash&&a.enable(17),E.batching&&a.enable(18),E.dispersion&&a.enable(19),E.batchingColor&&a.enable(20),E.gradientMap&&a.enable(21),y.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.reversedDepthBuffer&&a.enable(4),E.skinning&&a.enable(5),E.morphTargets&&a.enable(6),E.morphNormals&&a.enable(7),E.morphColors&&a.enable(8),E.premultipliedAlpha&&a.enable(9),E.shadowMapEnabled&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),E.decodeVideoTextureEmissive&&a.enable(20),E.alphaToCoverage&&a.enable(21),y.push(a.mask)}l(M,"getProgramCacheKeyBooleans");function S(y){const E=_[y.type];let w;if(E){const U=Nn[E];w=fx.clone(U.uniforms)}else w=y.uniforms;return w}l(S,"getUniforms");function C(y,E){let w=d.get(E);return w!==void 0?++w.usedTimes:(w=new bE(s,E,y,r),h.push(w),d.set(E,w)),w}l(C,"acquireProgram");function P(y){if(--y.usedTimes===0){const E=h.indexOf(y);h[E]=h[h.length-1],h.pop(),d.delete(y.cacheKey),y.destroy()}}l(P,"releaseProgram");function L(y){c.remove(y)}l(L,"releaseShaderCache");function F(){c.dispose()}return l(F,"dispose"),{getParameters:g,getProgramCacheKey:m,getUniforms:S,acquireProgram:C,releaseProgram:P,releaseShaderCache:L,programs:h,dispose:F}}l(ME,"WebGLPrograms");function EE(){let s=new WeakMap;function e(o){return s.has(o)}l(e,"has");function t(o){let a=s.get(o);return a===void 0&&(a={},s.set(o,a)),a}l(t,"get");function n(o){s.delete(o)}l(n,"remove");function i(o,a,c){s.get(o)[a]=c}l(i,"update");function r(){s=new WeakMap}return l(r,"dispose"),{has:e,get:t,remove:n,update:i,dispose:r}}l(EE,"WebGLProperties");function wE(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}l(wE,"painterSortStable");function t_(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}l(t_,"reversePainterSortStable");function n_(){const s=[];let e=0;const t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}l(r,"init");function o(d,f,p,_,v,g){let m=s[e];return m===void 0?(m={id:d.id,object:d,geometry:f,material:p,groupOrder:_,renderOrder:d.renderOrder,z:v,group:g},s[e]=m):(m.id=d.id,m.object=d,m.geometry=f,m.material=p,m.groupOrder=_,m.renderOrder=d.renderOrder,m.z=v,m.group=g),e++,m}l(o,"getNextRenderItem");function a(d,f,p,_,v,g){const m=o(d,f,p,_,v,g);p.transmission>0?n.push(m):p.transparent===!0?i.push(m):t.push(m)}l(a,"push");function c(d,f,p,_,v,g){const m=o(d,f,p,_,v,g);p.transmission>0?n.unshift(m):p.transparent===!0?i.unshift(m):t.unshift(m)}l(c,"unshift");function u(d,f){t.length>1&&t.sort(d||wE),n.length>1&&n.sort(f||t_),i.length>1&&i.sort(f||t_)}l(u,"sort");function h(){for(let d=e,f=s.length;d<f;d++){const p=s[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return l(h,"finish"),{opaque:t,transmissive:n,transparent:i,init:r,push:a,unshift:c,finish:h,sort:u}}l(n_,"WebGLRenderList");function TE(){let s=new WeakMap;function e(n,i){const r=s.get(n);let o;return r===void 0?(o=new n_,s.set(n,[o])):i>=r.length?(o=new n_,r.push(o)):o=r[i],o}l(e,"get");function t(){s=new WeakMap}return l(t,"dispose"),{get:e,dispose:t}}l(TE,"WebGLRenderLists");function AE(){const s={};return{get:l(function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new I,color:new We};break;case"SpotLight":t={position:new I,direction:new I,color:new We,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new I,color:new We,distance:0,decay:0};break;case"HemisphereLight":t={direction:new I,skyColor:new We,groundColor:new We};break;case"RectAreaLight":t={color:new We,position:new I,halfWidth:new I,halfHeight:new I};break}return s[e.id]=t,t},"get")}}l(AE,"UniformsCache");function CE(){const s={};return{get:l(function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new oe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new oe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new oe,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t},"get")}}l(CE,"ShadowUniformsCache");let RE=0;function PE(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}l(PE,"shadowCastingAndTexturingLightsFirst");function LE(s){const e=new AE,t=CE(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)n.probe.push(new I);const i=new I,r=new qe,o=new qe;function a(u){let h=0,d=0,f=0;for(let y=0;y<9;y++)n.probe[y].set(0,0,0);let p=0,_=0,v=0,g=0,m=0,T=0,M=0,S=0,C=0,P=0,L=0;u.sort(PE);for(let y=0,E=u.length;y<E;y++){const w=u[y],U=w.color,D=w.intensity,V=w.distance;let G=null;if(w.shadow&&w.shadow.map&&(w.shadow.map.texture.format===ir?G=w.shadow.map.texture:G=w.shadow.map.depthTexture||w.shadow.map.texture),w.isAmbientLight)h+=U.r*D,d+=U.g*D,f+=U.b*D;else if(w.isLightProbe){for(let H=0;H<9;H++)n.probe[H].addScaledVector(w.sh.coefficients[H],D);L++}else if(w.isDirectionalLight){const H=e.get(w);if(H.color.copy(w.color).multiplyScalar(w.intensity),w.castShadow){const z=w.shadow,K=t.get(w);K.shadowIntensity=z.intensity,K.shadowBias=z.bias,K.shadowNormalBias=z.normalBias,K.shadowRadius=z.radius,K.shadowMapSize=z.mapSize,n.directionalShadow[p]=K,n.directionalShadowMap[p]=G,n.directionalShadowMatrix[p]=w.shadow.matrix,T++}n.directional[p]=H,p++}else if(w.isSpotLight){const H=e.get(w);H.position.setFromMatrixPosition(w.matrixWorld),H.color.copy(U).multiplyScalar(D),H.distance=V,H.coneCos=Math.cos(w.angle),H.penumbraCos=Math.cos(w.angle*(1-w.penumbra)),H.decay=w.decay,n.spot[v]=H;const z=w.shadow;if(w.map&&(n.spotLightMap[C]=w.map,C++,z.updateMatrices(w),w.castShadow&&P++),n.spotLightMatrix[v]=z.matrix,w.castShadow){const K=t.get(w);K.shadowIntensity=z.intensity,K.shadowBias=z.bias,K.shadowNormalBias=z.normalBias,K.shadowRadius=z.radius,K.shadowMapSize=z.mapSize,n.spotShadow[v]=K,n.spotShadowMap[v]=G,S++}v++}else if(w.isRectAreaLight){const H=e.get(w);H.color.copy(U).multiplyScalar(D),H.halfWidth.set(w.width*.5,0,0),H.halfHeight.set(0,w.height*.5,0),n.rectArea[g]=H,g++}else if(w.isPointLight){const H=e.get(w);if(H.color.copy(w.color).multiplyScalar(w.intensity),H.distance=w.distance,H.decay=w.decay,w.castShadow){const z=w.shadow,K=t.get(w);K.shadowIntensity=z.intensity,K.shadowBias=z.bias,K.shadowNormalBias=z.normalBias,K.shadowRadius=z.radius,K.shadowMapSize=z.mapSize,K.shadowCameraNear=z.camera.near,K.shadowCameraFar=z.camera.far,n.pointShadow[_]=K,n.pointShadowMap[_]=G,n.pointShadowMatrix[_]=w.shadow.matrix,M++}n.point[_]=H,_++}else if(w.isHemisphereLight){const H=e.get(w);H.skyColor.copy(w.color).multiplyScalar(D),H.groundColor.copy(w.groundColor).multiplyScalar(D),n.hemi[m]=H,m++}}g>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=_e.LTC_FLOAT_1,n.rectAreaLTC2=_e.LTC_FLOAT_2):(n.rectAreaLTC1=_e.LTC_HALF_1,n.rectAreaLTC2=_e.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=f;const F=n.hash;(F.directionalLength!==p||F.pointLength!==_||F.spotLength!==v||F.rectAreaLength!==g||F.hemiLength!==m||F.numDirectionalShadows!==T||F.numPointShadows!==M||F.numSpotShadows!==S||F.numSpotMaps!==C||F.numLightProbes!==L)&&(n.directional.length=p,n.spot.length=v,n.rectArea.length=g,n.point.length=_,n.hemi.length=m,n.directionalShadow.length=T,n.directionalShadowMap.length=T,n.pointShadow.length=M,n.pointShadowMap.length=M,n.spotShadow.length=S,n.spotShadowMap.length=S,n.directionalShadowMatrix.length=T,n.pointShadowMatrix.length=M,n.spotLightMatrix.length=S+C-P,n.spotLightMap.length=C,n.numSpotLightShadowsWithMaps=P,n.numLightProbes=L,F.directionalLength=p,F.pointLength=_,F.spotLength=v,F.rectAreaLength=g,F.hemiLength=m,F.numDirectionalShadows=T,F.numPointShadows=M,F.numSpotShadows=S,F.numSpotMaps=C,F.numLightProbes=L,n.version=RE++)}l(a,"setup");function c(u,h){let d=0,f=0,p=0,_=0,v=0;const g=h.matrixWorldInverse;for(let m=0,T=u.length;m<T;m++){const M=u[m];if(M.isDirectionalLight){const S=n.directional[d];S.direction.setFromMatrixPosition(M.matrixWorld),i.setFromMatrixPosition(M.target.matrixWorld),S.direction.sub(i),S.direction.transformDirection(g),d++}else if(M.isSpotLight){const S=n.spot[p];S.position.setFromMatrixPosition(M.matrixWorld),S.position.applyMatrix4(g),S.direction.setFromMatrixPosition(M.matrixWorld),i.setFromMatrixPosition(M.target.matrixWorld),S.direction.sub(i),S.direction.transformDirection(g),p++}else if(M.isRectAreaLight){const S=n.rectArea[_];S.position.setFromMatrixPosition(M.matrixWorld),S.position.applyMatrix4(g),o.identity(),r.copy(M.matrixWorld),r.premultiply(g),o.extractRotation(r),S.halfWidth.set(M.width*.5,0,0),S.halfHeight.set(0,M.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),_++}else if(M.isPointLight){const S=n.point[f];S.position.setFromMatrixPosition(M.matrixWorld),S.position.applyMatrix4(g),f++}else if(M.isHemisphereLight){const S=n.hemi[v];S.direction.setFromMatrixPosition(M.matrixWorld),S.direction.transformDirection(g),v++}}}return l(c,"setupView"),{setup:a,setupView:c,state:n}}l(LE,"WebGLLights");function i_(s){const e=new LE(s),t=[],n=[];function i(h){u.camera=h,t.length=0,n.length=0}l(i,"init");function r(h){t.push(h)}l(r,"pushLight");function o(h){n.push(h)}l(o,"pushShadow");function a(){e.setup(t)}l(a,"setupLights");function c(h){e.setupView(t,h)}l(c,"setupLightsView");const u={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:u,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}l(i_,"WebGLRenderState");function IE(s){let e=new WeakMap;function t(i,r=0){const o=e.get(i);let a;return o===void 0?(a=new i_(s),e.set(i,[a])):r>=o.length?(a=new i_(s),o.push(a)):a=o[r],a}l(t,"get");function n(){e=new WeakMap}return l(n,"dispose"),{get:t,dispose:n}}l(IE,"WebGLRenderStates");const DE=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,NE=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,OE=[new I(1,0,0),new I(-1,0,0),new I(0,1,0),new I(0,-1,0),new I(0,0,1),new I(0,0,-1)],UE=[new I(0,-1,0),new I(0,-1,0),new I(0,0,1),new I(0,0,-1),new I(0,-1,0),new I(0,-1,0)],s_=new qe,xr=new I,Ul=new I;function FE(s,e,t){let n=new $r;const i=new oe,r=new oe,o=new vt,a=new cu,c=new uu,u={},h=t.maxTextureSize,d={[ti]:Jt,[Jt]:ti,[wn]:wn},f=new xn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new oe},radius:{value:4}},vertexShader:DE,fragmentShader:NE}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const _=new Gt;_.setAttribute("position",new Bt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new ft(_,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Vo;let m=this.type;this.render=function(P,L,F){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||P.length===0)return;P.type===tv&&(Ie("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),P.type=Vo);const y=s.getRenderTarget(),E=s.getActiveCubeFace(),w=s.getActiveMipmapLevel(),U=s.state;U.setBlending(Qn),U.buffers.depth.getReversed()===!0?U.buffers.color.setClear(0,0,0,0):U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);const D=m!==this.type;D&&L.traverse(function(V){V.material&&(Array.isArray(V.material)?V.material.forEach(G=>G.needsUpdate=!0):V.material.needsUpdate=!0)});for(let V=0,G=P.length;V<G;V++){const H=P[V],z=H.shadow;if(z===void 0){Ie("WebGLShadowMap:",H,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;i.copy(z.mapSize);const K=z.getFrameExtents();if(i.multiply(K),r.copy(z.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/K.x),i.x=r.x*K.x,z.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/K.y),i.y=r.y*K.y,z.mapSize.y=r.y)),z.map===null||D===!0){if(z.map!==null&&(z.map.depthTexture!==null&&(z.map.depthTexture.dispose(),z.map.depthTexture=null),z.map.dispose()),this.type===Mr){if(H.isPointLight){Ie("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}z.map=new _n(i.x,i.y,{format:ir,type:ni,minFilter:Rt,magFilter:Rt,generateMipmaps:!1}),z.map.texture.name=H.name+".shadowMap",z.map.depthTexture=new ji(i.x,i.y,fn),z.map.depthTexture.name=H.name+".shadowMapDepth",z.map.depthTexture.format=ii,z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=Ct,z.map.depthTexture.magFilter=Ct}else{H.isPointLight?(z.map=new sa(i.x),z.map.depthTexture=new Kc(i.x,Bn)):(z.map=new _n(i.x,i.y),z.map.depthTexture=new ji(i.x,i.y,Bn)),z.map.depthTexture.name=H.name+".shadowMap",z.map.depthTexture.format=ii;const ce=s.state.buffers.depth.getReversed();this.type===Vo?(z.map.depthTexture.compareFunction=ce?_d:gd,z.map.depthTexture.minFilter=Rt,z.map.depthTexture.magFilter=Rt):(z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=Ct,z.map.depthTexture.magFilter=Ct)}z.camera.updateProjectionMatrix()}const ae=z.map.isWebGLCubeRenderTarget?6:1;for(let ce=0;ce<ae;ce++){if(z.map.isWebGLCubeRenderTarget)s.setRenderTarget(z.map,ce),s.clear();else{ce===0&&(s.setRenderTarget(z.map),s.clear());const he=z.getViewport(ce);o.set(r.x*he.x,r.y*he.y,r.x*he.z,r.y*he.w),U.viewport(o)}if(H.isPointLight){const he=z.camera,Ve=z.matrix,Ne=H.distance||he.far;Ne!==he.far&&(he.far=Ne,he.updateProjectionMatrix()),xr.setFromMatrixPosition(H.matrixWorld),he.position.copy(xr),Ul.copy(he.position),Ul.add(OE[ce]),he.up.copy(UE[ce]),he.lookAt(Ul),he.updateMatrixWorld(),Ve.makeTranslation(-xr.x,-xr.y,-xr.z),s_.multiplyMatrices(he.projectionMatrix,he.matrixWorldInverse),z._frustum.setFromProjectionMatrix(s_,he.coordinateSystem,he.reversedDepth)}else z.updateMatrices(H);n=z.getFrustum(),S(L,F,z.camera,H,this.type)}z.isPointLightShadow!==!0&&this.type===Mr&&T(z,F),z.needsUpdate=!1}m=this.type,g.needsUpdate=!1,s.setRenderTarget(y,E,w)};function T(P,L){const F=e.update(v);f.defines.VSM_SAMPLES!==P.blurSamples&&(f.defines.VSM_SAMPLES=P.blurSamples,p.defines.VSM_SAMPLES=P.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new _n(i.x,i.y,{format:ir,type:ni})),f.uniforms.shadow_pass.value=P.map.depthTexture,f.uniforms.resolution.value=P.mapSize,f.uniforms.radius.value=P.radius,s.setRenderTarget(P.mapPass),s.clear(),s.renderBufferDirect(L,null,F,f,v,null),p.uniforms.shadow_pass.value=P.mapPass.texture,p.uniforms.resolution.value=P.mapSize,p.uniforms.radius.value=P.radius,s.setRenderTarget(P.map),s.clear(),s.renderBufferDirect(L,null,F,p,v,null)}l(T,"VSMPass");function M(P,L,F,y){let E=null;const w=F.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(w!==void 0)E=w;else if(E=F.isPointLight===!0?c:a,s.localClippingEnabled&&L.clipShadows===!0&&Array.isArray(L.clippingPlanes)&&L.clippingPlanes.length!==0||L.displacementMap&&L.displacementScale!==0||L.alphaMap&&L.alphaTest>0||L.map&&L.alphaTest>0||L.alphaToCoverage===!0){const U=E.uuid,D=L.uuid;let V=u[U];V===void 0&&(V={},u[U]=V);let G=V[D];G===void 0&&(G=E.clone(),V[D]=G,L.addEventListener("dispose",C)),E=G}if(E.visible=L.visible,E.wireframe=L.wireframe,y===Mr?E.side=L.shadowSide!==null?L.shadowSide:L.side:E.side=L.shadowSide!==null?L.shadowSide:d[L.side],E.alphaMap=L.alphaMap,E.alphaTest=L.alphaToCoverage===!0?.5:L.alphaTest,E.map=L.map,E.clipShadows=L.clipShadows,E.clippingPlanes=L.clippingPlanes,E.clipIntersection=L.clipIntersection,E.displacementMap=L.displacementMap,E.displacementScale=L.displacementScale,E.displacementBias=L.displacementBias,E.wireframeLinewidth=L.wireframeLinewidth,E.linewidth=L.linewidth,F.isPointLight===!0&&E.isMeshDistanceMaterial===!0){const U=s.properties.get(E);U.light=F}return E}l(M,"getDepthMaterial");function S(P,L,F,y,E){if(P.visible===!1)return;if(P.layers.test(L.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&E===Mr)&&(!P.frustumCulled||n.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,P.matrixWorld);const D=e.update(P),V=P.material;if(Array.isArray(V)){const G=D.groups;for(let H=0,z=G.length;H<z;H++){const K=G[H],ae=V[K.materialIndex];if(ae&&ae.visible){const ce=M(P,ae,y,E);P.onBeforeShadow(s,P,L,F,D,ce,K),s.renderBufferDirect(F,null,D,ce,P,K),P.onAfterShadow(s,P,L,F,D,ce,K)}}}else if(V.visible){const G=M(P,V,y,E);P.onBeforeShadow(s,P,L,F,D,G,null),s.renderBufferDirect(F,null,D,G,P,null),P.onAfterShadow(s,P,L,F,D,G,null)}}const U=P.children;for(let D=0,V=U.length;D<V;D++)S(U[D],L,F,y,E)}l(S,"renderObject");function C(P){P.target.removeEventListener("dispose",C);for(const F in u){const y=u[F],E=P.target.uuid;E in y&&(y[E].dispose(),delete y[E])}}l(C,"onMaterialDispose")}l(FE,"WebGLShadowMap");const BE={[Yl]:$l,[Kl]:Ql,[Jl]:ec,[er]:Zl,[$l]:Yl,[Ql]:Kl,[ec]:Jl,[Zl]:er};function kE(s,e){function t(){let N=!1;const ye=new vt;let le=null;const Se=new vt(0,0,0,0);return{setMask:l(function(re){le!==re&&!N&&(s.colorMask(re,re,re,re),le=re)},"setMask"),setLocked:l(function(re){N=re},"setLocked"),setClear:l(function(re,Q,fe,Xe,pt){pt===!0&&(re*=Xe,Q*=Xe,fe*=Xe),ye.set(re,Q,fe,Xe),Se.equals(ye)===!1&&(s.clearColor(re,Q,fe,Xe),Se.copy(ye))},"setClear"),reset:l(function(){N=!1,le=null,Se.set(-1,0,0,0)},"reset")}}l(t,"ColorBuffer");function n(){let N=!1,ye=!1,le=null,Se=null,re=null;return{setReversed:l(function(Q){if(ye!==Q){const fe=e.get("EXT_clip_control");Q?fe.clipControlEXT(fe.LOWER_LEFT_EXT,fe.ZERO_TO_ONE_EXT):fe.clipControlEXT(fe.LOWER_LEFT_EXT,fe.NEGATIVE_ONE_TO_ONE_EXT),ye=Q;const Xe=re;re=null,this.setClear(Xe)}},"setReversed"),getReversed:l(function(){return ye},"getReversed"),setTest:l(function(Q){Q?ne(s.DEPTH_TEST):Me(s.DEPTH_TEST)},"setTest"),setMask:l(function(Q){le!==Q&&!N&&(s.depthMask(Q),le=Q)},"setMask"),setFunc:l(function(Q){if(ye&&(Q=BE[Q]),Se!==Q){switch(Q){case Yl:s.depthFunc(s.NEVER);break;case $l:s.depthFunc(s.ALWAYS);break;case Kl:s.depthFunc(s.LESS);break;case er:s.depthFunc(s.LEQUAL);break;case Jl:s.depthFunc(s.EQUAL);break;case Zl:s.depthFunc(s.GEQUAL);break;case Ql:s.depthFunc(s.GREATER);break;case ec:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Se=Q}},"setFunc"),setLocked:l(function(Q){N=Q},"setLocked"),setClear:l(function(Q){re!==Q&&(ye&&(Q=1-Q),s.clearDepth(Q),re=Q)},"setClear"),reset:l(function(){N=!1,le=null,Se=null,re=null,ye=!1},"reset")}}l(n,"DepthBuffer");function i(){let N=!1,ye=null,le=null,Se=null,re=null,Q=null,fe=null,Xe=null,pt=null;return{setTest:l(function(rt){N||(rt?ne(s.STENCIL_TEST):Me(s.STENCIL_TEST))},"setTest"),setMask:l(function(rt){ye!==rt&&!N&&(s.stencilMask(rt),ye=rt)},"setMask"),setFunc:l(function(rt,Pn,Vn){(le!==rt||Se!==Pn||re!==Vn)&&(s.stencilFunc(rt,Pn,Vn),le=rt,Se=Pn,re=Vn)},"setFunc"),setOp:l(function(rt,Pn,Vn){(Q!==rt||fe!==Pn||Xe!==Vn)&&(s.stencilOp(rt,Pn,Vn),Q=rt,fe=Pn,Xe=Vn)},"setOp"),setLocked:l(function(rt){N=rt},"setLocked"),setClear:l(function(rt){pt!==rt&&(s.clearStencil(rt),pt=rt)},"setClear"),reset:l(function(){N=!1,ye=null,le=null,Se=null,re=null,Q=null,fe=null,Xe=null,pt=null},"reset")}}l(i,"StencilBuffer");const r=new t,o=new n,a=new i,c=new WeakMap,u=new WeakMap;let h={},d={},f=new WeakMap,p=[],_=null,v=!1,g=null,m=null,T=null,M=null,S=null,C=null,P=null,L=new We(0,0,0),F=0,y=!1,E=null,w=null,U=null,D=null,V=null;const G=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,z=0;const K=s.getParameter(s.VERSION);K.indexOf("WebGL")!==-1?(z=parseFloat(/^WebGL (\d)/.exec(K)[1]),H=z>=1):K.indexOf("OpenGL ES")!==-1&&(z=parseFloat(/^OpenGL ES (\d)/.exec(K)[1]),H=z>=2);let ae=null,ce={};const he=s.getParameter(s.SCISSOR_BOX),Ve=s.getParameter(s.VIEWPORT),Ne=new vt().fromArray(he),nt=new vt().fromArray(Ve);function st(N,ye,le,Se){const re=new Uint8Array(4),Q=s.createTexture();s.bindTexture(N,Q),s.texParameteri(N,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(N,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let fe=0;fe<le;fe++)N===s.TEXTURE_3D||N===s.TEXTURE_2D_ARRAY?s.texImage3D(ye,0,s.RGBA,1,1,Se,0,s.RGBA,s.UNSIGNED_BYTE,re):s.texImage2D(ye+fe,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,re);return Q}l(st,"createTexture");const $={};$[s.TEXTURE_2D]=st(s.TEXTURE_2D,s.TEXTURE_2D,1),$[s.TEXTURE_CUBE_MAP]=st(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),$[s.TEXTURE_2D_ARRAY]=st(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),$[s.TEXTURE_3D]=st(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ne(s.DEPTH_TEST),o.setFunc(er),te(!1),ve(km),ne(s.CULL_FACE),ee(Qn);function ne(N){h[N]!==!0&&(s.enable(N),h[N]=!0)}l(ne,"enable");function Me(N){h[N]!==!1&&(s.disable(N),h[N]=!1)}l(Me,"disable");function Be(N,ye){return d[N]!==ye?(s.bindFramebuffer(N,ye),d[N]=ye,N===s.DRAW_FRAMEBUFFER&&(d[s.FRAMEBUFFER]=ye),N===s.FRAMEBUFFER&&(d[s.DRAW_FRAMEBUFFER]=ye),!0):!1}l(Be,"bindFramebuffer");function we(N,ye){let le=p,Se=!1;if(N){le=f.get(ye),le===void 0&&(le=[],f.set(ye,le));const re=N.textures;if(le.length!==re.length||le[0]!==s.COLOR_ATTACHMENT0){for(let Q=0,fe=re.length;Q<fe;Q++)le[Q]=s.COLOR_ATTACHMENT0+Q;le.length=re.length,Se=!0}}else le[0]!==s.BACK&&(le[0]=s.BACK,Se=!0);Se&&s.drawBuffers(le)}l(we,"drawBuffers");function tt(N){return _!==N?(s.useProgram(N),_=N,!0):!1}l(tt,"useProgram");const ct={[Fi]:s.FUNC_ADD,[iv]:s.FUNC_SUBTRACT,[sv]:s.FUNC_REVERSE_SUBTRACT};ct[rv]=s.MIN,ct[ov]=s.MAX;const je={[av]:s.ZERO,[lv]:s.ONE,[cv]:s.SRC_COLOR,[jl]:s.SRC_ALPHA,[mv]:s.SRC_ALPHA_SATURATE,[fv]:s.DST_COLOR,[hv]:s.DST_ALPHA,[uv]:s.ONE_MINUS_SRC_COLOR,[ql]:s.ONE_MINUS_SRC_ALPHA,[pv]:s.ONE_MINUS_DST_COLOR,[dv]:s.ONE_MINUS_DST_ALPHA,[gv]:s.CONSTANT_COLOR,[_v]:s.ONE_MINUS_CONSTANT_COLOR,[vv]:s.CONSTANT_ALPHA,[xv]:s.ONE_MINUS_CONSTANT_ALPHA};function ee(N,ye,le,Se,re,Q,fe,Xe,pt,rt){if(N===Qn){v===!0&&(Me(s.BLEND),v=!1);return}if(v===!1&&(ne(s.BLEND),v=!0),N!==nv){if(N!==g||rt!==y){if((m!==Fi||S!==Fi)&&(s.blendEquation(s.FUNC_ADD),m=Fi,S=Fi),rt)switch(N){case Ss:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case zm:s.blendFunc(s.ONE,s.ONE);break;case Hm:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Vm:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:He("WebGLState: Invalid blending: ",N);break}else switch(N){case Ss:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case zm:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case Hm:He("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Vm:He("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:He("WebGLState: Invalid blending: ",N);break}T=null,M=null,C=null,P=null,L.set(0,0,0),F=0,g=N,y=rt}return}re=re||ye,Q=Q||le,fe=fe||Se,(ye!==m||re!==S)&&(s.blendEquationSeparate(ct[ye],ct[re]),m=ye,S=re),(le!==T||Se!==M||Q!==C||fe!==P)&&(s.blendFuncSeparate(je[le],je[Se],je[Q],je[fe]),T=le,M=Se,C=Q,P=fe),(Xe.equals(L)===!1||pt!==F)&&(s.blendColor(Xe.r,Xe.g,Xe.b,pt),L.copy(Xe),F=pt),g=N,y=!1}l(ee,"setBlending");function se(N,ye){N.side===wn?Me(s.CULL_FACE):ne(s.CULL_FACE);let le=N.side===Jt;ye&&(le=!le),te(le),N.blending===Ss&&N.transparent===!1?ee(Qn):ee(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),o.setFunc(N.depthFunc),o.setTest(N.depthTest),o.setMask(N.depthWrite),r.setMask(N.colorWrite);const Se=N.stencilWrite;a.setTest(Se),Se&&(a.setMask(N.stencilWriteMask),a.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),a.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),Oe(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?ne(s.SAMPLE_ALPHA_TO_COVERAGE):Me(s.SAMPLE_ALPHA_TO_COVERAGE)}l(se,"setMaterial");function te(N){E!==N&&(N?s.frontFace(s.CW):s.frontFace(s.CCW),E=N)}l(te,"setFlipSided");function ve(N){N!==Q0?(ne(s.CULL_FACE),N!==w&&(N===km?s.cullFace(s.BACK):N===ev?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Me(s.CULL_FACE),w=N}l(ve,"setCullFace");function R(N){N!==U&&(H&&s.lineWidth(N),U=N)}l(R,"setLineWidth");function Oe(N,ye,le){N?(ne(s.POLYGON_OFFSET_FILL),(D!==ye||V!==le)&&(s.polygonOffset(ye,le),D=ye,V=le)):Me(s.POLYGON_OFFSET_FILL)}l(Oe,"setPolygonOffset");function be(N){N?ne(s.SCISSOR_TEST):Me(s.SCISSOR_TEST)}l(be,"setScissorTest");function ke(N){N===void 0&&(N=s.TEXTURE0+G-1),ae!==N&&(s.activeTexture(N),ae=N)}l(ke,"activeTexture");function ue(N,ye,le){le===void 0&&(ae===null?le=s.TEXTURE0+G-1:le=ae);let Se=ce[le];Se===void 0&&(Se={type:void 0,texture:void 0},ce[le]=Se),(Se.type!==N||Se.texture!==ye)&&(ae!==le&&(s.activeTexture(le),ae=le),s.bindTexture(N,ye||$[N]),Se.type=N,Se.texture=ye)}l(ue,"bindTexture");function A(){const N=ce[ae];N!==void 0&&N.type!==void 0&&(s.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}l(A,"unbindTexture");function x(){try{s.compressedTexImage2D(...arguments)}catch(N){He("WebGLState:",N)}}l(x,"compressedTexImage2D");function O(){try{s.compressedTexImage3D(...arguments)}catch(N){He("WebGLState:",N)}}l(O,"compressedTexImage3D");function q(){try{s.texSubImage2D(...arguments)}catch(N){He("WebGLState:",N)}}l(q,"texSubImage2D");function Z(){try{s.texSubImage3D(...arguments)}catch(N){He("WebGLState:",N)}}l(Z,"texSubImage3D");function Y(){try{s.compressedTexSubImage2D(...arguments)}catch(N){He("WebGLState:",N)}}l(Y,"compressedTexSubImage2D");function Re(){try{s.compressedTexSubImage3D(...arguments)}catch(N){He("WebGLState:",N)}}l(Re,"compressedTexSubImage3D");function de(){try{s.texStorage2D(...arguments)}catch(N){He("WebGLState:",N)}}l(de,"texStorage2D");function Ae(){try{s.texStorage3D(...arguments)}catch(N){He("WebGLState:",N)}}l(Ae,"texStorage3D");function ze(){try{s.texImage2D(...arguments)}catch(N){He("WebGLState:",N)}}l(ze,"texImage2D");function ie(){try{s.texImage3D(...arguments)}catch(N){He("WebGLState:",N)}}l(ie,"texImage3D");function me(N){Ne.equals(N)===!1&&(s.scissor(N.x,N.y,N.z,N.w),Ne.copy(N))}l(me,"scissor");function Ce(N){nt.equals(N)===!1&&(s.viewport(N.x,N.y,N.z,N.w),nt.copy(N))}l(Ce,"viewport");function Pe(N,ye){let le=u.get(ye);le===void 0&&(le=new WeakMap,u.set(ye,le));let Se=le.get(N);Se===void 0&&(Se=s.getUniformBlockIndex(ye,N.name),le.set(N,Se))}l(Pe,"updateUBOMapping");function pe(N,ye){const Se=u.get(ye).get(N);c.get(ye)!==Se&&(s.uniformBlockBinding(ye,Se,N.__bindingPointIndex),c.set(ye,Se))}l(pe,"uniformBlockBinding");function Ke(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),o.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),h={},ae=null,ce={},d={},f=new WeakMap,p=[],_=null,v=!1,g=null,m=null,T=null,M=null,S=null,C=null,P=null,L=new We(0,0,0),F=0,y=!1,E=null,w=null,U=null,D=null,V=null,Ne.set(0,0,s.canvas.width,s.canvas.height),nt.set(0,0,s.canvas.width,s.canvas.height),r.reset(),o.reset(),a.reset()}return l(Ke,"reset"),{buffers:{color:r,depth:o,stencil:a},enable:ne,disable:Me,bindFramebuffer:Be,drawBuffers:we,useProgram:tt,setBlending:ee,setMaterial:se,setFlipSided:te,setCullFace:ve,setLineWidth:R,setPolygonOffset:Oe,setScissorTest:be,activeTexture:ke,bindTexture:ue,unbindTexture:A,compressedTexImage2D:x,compressedTexImage3D:O,texImage2D:ze,texImage3D:ie,updateUBOMapping:Pe,uniformBlockBinding:pe,texStorage2D:de,texStorage3D:Ae,texSubImage2D:q,texSubImage3D:Z,compressedTexSubImage2D:Y,compressedTexSubImage3D:Re,scissor:me,viewport:Ce,reset:Ke}}l(kE,"WebGLState");function zE(s,e,t,n,i,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new oe,h=new WeakMap;let d;const f=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(A,x){return p?new OffscreenCanvas(A,x):Gr("canvas")}l(_,"createCanvas");function v(A,x,O){let q=1;const Z=ue(A);if((Z.width>O||Z.height>O)&&(q=O/Math.max(Z.width,Z.height)),q<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const Y=Math.floor(q*Z.width),Re=Math.floor(q*Z.height);d===void 0&&(d=_(Y,Re));const de=x?_(Y,Re):d;return de.width=Y,de.height=Re,de.getContext("2d").drawImage(A,0,0,Y,Re),Ie("WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+Y+"x"+Re+")."),de}else return"data"in A&&Ie("WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),A;return A}l(v,"resizeImage");function g(A){return A.generateMipmaps}l(g,"textureNeedsGenerateMipmaps");function m(A){s.generateMipmap(A)}l(m,"generateMipmap");function T(A){return A.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?s.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}l(T,"getTargetType");function M(A,x,O,q,Z=!1){if(A!==null){if(s[A]!==void 0)return s[A];Ie("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let Y=x;if(x===s.RED&&(O===s.FLOAT&&(Y=s.R32F),O===s.HALF_FLOAT&&(Y=s.R16F),O===s.UNSIGNED_BYTE&&(Y=s.R8)),x===s.RED_INTEGER&&(O===s.UNSIGNED_BYTE&&(Y=s.R8UI),O===s.UNSIGNED_SHORT&&(Y=s.R16UI),O===s.UNSIGNED_INT&&(Y=s.R32UI),O===s.BYTE&&(Y=s.R8I),O===s.SHORT&&(Y=s.R16I),O===s.INT&&(Y=s.R32I)),x===s.RG&&(O===s.FLOAT&&(Y=s.RG32F),O===s.HALF_FLOAT&&(Y=s.RG16F),O===s.UNSIGNED_BYTE&&(Y=s.RG8)),x===s.RG_INTEGER&&(O===s.UNSIGNED_BYTE&&(Y=s.RG8UI),O===s.UNSIGNED_SHORT&&(Y=s.RG16UI),O===s.UNSIGNED_INT&&(Y=s.RG32UI),O===s.BYTE&&(Y=s.RG8I),O===s.SHORT&&(Y=s.RG16I),O===s.INT&&(Y=s.RG32I)),x===s.RGB_INTEGER&&(O===s.UNSIGNED_BYTE&&(Y=s.RGB8UI),O===s.UNSIGNED_SHORT&&(Y=s.RGB16UI),O===s.UNSIGNED_INT&&(Y=s.RGB32UI),O===s.BYTE&&(Y=s.RGB8I),O===s.SHORT&&(Y=s.RGB16I),O===s.INT&&(Y=s.RGB32I)),x===s.RGBA_INTEGER&&(O===s.UNSIGNED_BYTE&&(Y=s.RGBA8UI),O===s.UNSIGNED_SHORT&&(Y=s.RGBA16UI),O===s.UNSIGNED_INT&&(Y=s.RGBA32UI),O===s.BYTE&&(Y=s.RGBA8I),O===s.SHORT&&(Y=s.RGBA16I),O===s.INT&&(Y=s.RGBA32I)),x===s.RGB&&(O===s.UNSIGNED_INT_5_9_9_9_REV&&(Y=s.RGB9_E5),O===s.UNSIGNED_INT_10F_11F_11F_REV&&(Y=s.R11F_G11F_B10F)),x===s.RGBA){const Re=Z?Ko:et.getTransfer(q);O===s.FLOAT&&(Y=s.RGBA32F),O===s.HALF_FLOAT&&(Y=s.RGBA16F),O===s.UNSIGNED_BYTE&&(Y=Re===at?s.SRGB8_ALPHA8:s.RGBA8),O===s.UNSIGNED_SHORT_4_4_4_4&&(Y=s.RGBA4),O===s.UNSIGNED_SHORT_5_5_5_1&&(Y=s.RGB5_A1)}return(Y===s.R16F||Y===s.R32F||Y===s.RG16F||Y===s.RG32F||Y===s.RGBA16F||Y===s.RGBA32F)&&e.get("EXT_color_buffer_float"),Y}l(M,"getInternalFormat");function S(A,x){let O;return A?x===null||x===Bn||x===zr?O=s.DEPTH24_STENCIL8:x===fn?O=s.DEPTH32F_STENCIL8:x===kr&&(O=s.DEPTH24_STENCIL8,Ie("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===Bn||x===zr?O=s.DEPTH_COMPONENT24:x===fn?O=s.DEPTH_COMPONENT32F:x===kr&&(O=s.DEPTH_COMPONENT16),O}l(S,"getInternalDepthFormat");function C(A,x){return g(A)===!0||A.isFramebufferTexture&&A.minFilter!==Ct&&A.minFilter!==Rt?Math.log2(Math.max(x.width,x.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?x.mipmaps.length:1}l(C,"getMipLevels");function P(A){const x=A.target;x.removeEventListener("dispose",P),F(x),x.isVideoTexture&&h.delete(x)}l(P,"onTextureDispose");function L(A){const x=A.target;x.removeEventListener("dispose",L),E(x)}l(L,"onRenderTargetDispose");function F(A){const x=n.get(A);if(x.__webglInit===void 0)return;const O=A.source,q=f.get(O);if(q){const Z=q[x.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&y(A),Object.keys(q).length===0&&f.delete(O)}n.remove(A)}l(F,"deallocateTexture");function y(A){const x=n.get(A);s.deleteTexture(x.__webglTexture);const O=A.source,q=f.get(O);delete q[x.__cacheKey],o.memory.textures--}l(y,"deleteTexture");function E(A){const x=n.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),n.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(x.__webglFramebuffer[q]))for(let Z=0;Z<x.__webglFramebuffer[q].length;Z++)s.deleteFramebuffer(x.__webglFramebuffer[q][Z]);else s.deleteFramebuffer(x.__webglFramebuffer[q]);x.__webglDepthbuffer&&s.deleteRenderbuffer(x.__webglDepthbuffer[q])}else{if(Array.isArray(x.__webglFramebuffer))for(let q=0;q<x.__webglFramebuffer.length;q++)s.deleteFramebuffer(x.__webglFramebuffer[q]);else s.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&s.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&s.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let q=0;q<x.__webglColorRenderbuffer.length;q++)x.__webglColorRenderbuffer[q]&&s.deleteRenderbuffer(x.__webglColorRenderbuffer[q]);x.__webglDepthRenderbuffer&&s.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const O=A.textures;for(let q=0,Z=O.length;q<Z;q++){const Y=n.get(O[q]);Y.__webglTexture&&(s.deleteTexture(Y.__webglTexture),o.memory.textures--),n.remove(O[q])}n.remove(A)}l(E,"deallocateRenderTarget");let w=0;function U(){w=0}l(U,"resetTextureUnits");function D(){const A=w;return A>=i.maxTextures&&Ie("WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+i.maxTextures),w+=1,A}l(D,"allocateTextureUnit");function V(A){const x=[];return x.push(A.wrapS),x.push(A.wrapT),x.push(A.wrapR||0),x.push(A.magFilter),x.push(A.minFilter),x.push(A.anisotropy),x.push(A.internalFormat),x.push(A.format),x.push(A.type),x.push(A.generateMipmaps),x.push(A.premultiplyAlpha),x.push(A.flipY),x.push(A.unpackAlignment),x.push(A.colorSpace),x.join()}l(V,"getTextureCacheKey");function G(A,x){const O=n.get(A);if(A.isVideoTexture&&be(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&O.__version!==A.version){const q=A.image;if(q===null)Ie("WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)Ie("WebGLRenderer: Texture marked for update but image is incomplete");else{$(O,A,x);return}}else A.isExternalTexture&&(O.__webglTexture=A.sourceTexture?A.sourceTexture:null);t.bindTexture(s.TEXTURE_2D,O.__webglTexture,s.TEXTURE0+x)}l(G,"setTexture2D");function H(A,x){const O=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&O.__version!==A.version){$(O,A,x);return}else A.isExternalTexture&&(O.__webglTexture=A.sourceTexture?A.sourceTexture:null);t.bindTexture(s.TEXTURE_2D_ARRAY,O.__webglTexture,s.TEXTURE0+x)}l(H,"setTexture2DArray");function z(A,x){const O=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&O.__version!==A.version){$(O,A,x);return}t.bindTexture(s.TEXTURE_3D,O.__webglTexture,s.TEXTURE0+x)}l(z,"setTexture3D");function K(A,x){const O=n.get(A);if(A.isCubeDepthTexture!==!0&&A.version>0&&O.__version!==A.version){ne(O,A,x);return}t.bindTexture(s.TEXTURE_CUBE_MAP,O.__webglTexture,s.TEXTURE0+x)}l(K,"setTextureCube");const ae={[nr]:s.REPEAT,[On]:s.CLAMP_TO_EDGE,[$o]:s.MIRRORED_REPEAT},ce={[Ct]:s.NEAREST,[I_]:s.NEAREST_MIPMAP_NEAREST,[Er]:s.NEAREST_MIPMAP_LINEAR,[Rt]:s.LINEAR,[Go]:s.LINEAR_MIPMAP_NEAREST,[Kn]:s.LINEAR_MIPMAP_LINEAR},he={[Av]:s.NEVER,[Iv]:s.ALWAYS,[Cv]:s.LESS,[gd]:s.LEQUAL,[Rv]:s.EQUAL,[_d]:s.GEQUAL,[Pv]:s.GREATER,[Lv]:s.NOTEQUAL};function Ve(A,x){if(x.type===fn&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===Rt||x.magFilter===Go||x.magFilter===Er||x.magFilter===Kn||x.minFilter===Rt||x.minFilter===Go||x.minFilter===Er||x.minFilter===Kn)&&Ie("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(A,s.TEXTURE_WRAP_S,ae[x.wrapS]),s.texParameteri(A,s.TEXTURE_WRAP_T,ae[x.wrapT]),(A===s.TEXTURE_3D||A===s.TEXTURE_2D_ARRAY)&&s.texParameteri(A,s.TEXTURE_WRAP_R,ae[x.wrapR]),s.texParameteri(A,s.TEXTURE_MAG_FILTER,ce[x.magFilter]),s.texParameteri(A,s.TEXTURE_MIN_FILTER,ce[x.minFilter]),x.compareFunction&&(s.texParameteri(A,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(A,s.TEXTURE_COMPARE_FUNC,he[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===Ct||x.minFilter!==Er&&x.minFilter!==Kn||x.type===fn&&e.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){const O=e.get("EXT_texture_filter_anisotropic");s.texParameterf(A,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,i.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}l(Ve,"setTextureParameters");function Ne(A,x){let O=!1;A.__webglInit===void 0&&(A.__webglInit=!0,x.addEventListener("dispose",P));const q=x.source;let Z=f.get(q);Z===void 0&&(Z={},f.set(q,Z));const Y=V(x);if(Y!==A.__cacheKey){Z[Y]===void 0&&(Z[Y]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,O=!0),Z[Y].usedTimes++;const Re=Z[A.__cacheKey];Re!==void 0&&(Z[A.__cacheKey].usedTimes--,Re.usedTimes===0&&y(x)),A.__cacheKey=Y,A.__webglTexture=Z[Y].texture}return O}l(Ne,"initTexture");function nt(A,x,O){return Math.floor(Math.floor(A/O)/x)}l(nt,"getRow");function st(A,x,O,q){const Y=A.updateRanges;if(Y.length===0)t.texSubImage2D(s.TEXTURE_2D,0,0,0,x.width,x.height,O,q,x.data);else{Y.sort((ie,me)=>ie.start-me.start);let Re=0;for(let ie=1;ie<Y.length;ie++){const me=Y[Re],Ce=Y[ie],Pe=me.start+me.count,pe=nt(Ce.start,x.width,4),Ke=nt(me.start,x.width,4);Ce.start<=Pe+1&&pe===Ke&&nt(Ce.start+Ce.count-1,x.width,4)===pe?me.count=Math.max(me.count,Ce.start+Ce.count-me.start):(++Re,Y[Re]=Ce)}Y.length=Re+1;const de=s.getParameter(s.UNPACK_ROW_LENGTH),Ae=s.getParameter(s.UNPACK_SKIP_PIXELS),ze=s.getParameter(s.UNPACK_SKIP_ROWS);s.pixelStorei(s.UNPACK_ROW_LENGTH,x.width);for(let ie=0,me=Y.length;ie<me;ie++){const Ce=Y[ie],Pe=Math.floor(Ce.start/4),pe=Math.ceil(Ce.count/4),Ke=Pe%x.width,N=Math.floor(Pe/x.width),ye=pe,le=1;s.pixelStorei(s.UNPACK_SKIP_PIXELS,Ke),s.pixelStorei(s.UNPACK_SKIP_ROWS,N),t.texSubImage2D(s.TEXTURE_2D,0,Ke,N,ye,le,O,q,x.data)}A.clearUpdateRanges(),s.pixelStorei(s.UNPACK_ROW_LENGTH,de),s.pixelStorei(s.UNPACK_SKIP_PIXELS,Ae),s.pixelStorei(s.UNPACK_SKIP_ROWS,ze)}}l(st,"updateTexture");function $(A,x,O){let q=s.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(q=s.TEXTURE_2D_ARRAY),x.isData3DTexture&&(q=s.TEXTURE_3D);const Z=Ne(A,x),Y=x.source;t.bindTexture(q,A.__webglTexture,s.TEXTURE0+O);const Re=n.get(Y);if(Y.version!==Re.__version||Z===!0){t.activeTexture(s.TEXTURE0+O);const de=et.getPrimaries(et.workingColorSpace),Ae=x.colorSpace===pi?null:et.getPrimaries(x.colorSpace),ze=x.colorSpace===pi||de===Ae?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,x.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,x.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ze);let ie=v(x.image,!1,i.maxTextureSize);ie=ke(x,ie);const me=r.convert(x.format,x.colorSpace),Ce=r.convert(x.type);let Pe=M(x.internalFormat,me,Ce,x.colorSpace,x.isVideoTexture);Ve(q,x);let pe;const Ke=x.mipmaps,N=x.isVideoTexture!==!0,ye=Re.__version===void 0||Z===!0,le=Y.dataReady,Se=C(x,ie);if(x.isDepthTexture)Pe=S(x.format===Vi,x.type),ye&&(N?t.texStorage2D(s.TEXTURE_2D,1,Pe,ie.width,ie.height):t.texImage2D(s.TEXTURE_2D,0,Pe,ie.width,ie.height,0,me,Ce,null));else if(x.isDataTexture)if(Ke.length>0){N&&ye&&t.texStorage2D(s.TEXTURE_2D,Se,Pe,Ke[0].width,Ke[0].height);for(let re=0,Q=Ke.length;re<Q;re++)pe=Ke[re],N?le&&t.texSubImage2D(s.TEXTURE_2D,re,0,0,pe.width,pe.height,me,Ce,pe.data):t.texImage2D(s.TEXTURE_2D,re,Pe,pe.width,pe.height,0,me,Ce,pe.data);x.generateMipmaps=!1}else N?(ye&&t.texStorage2D(s.TEXTURE_2D,Se,Pe,ie.width,ie.height),le&&st(x,ie,me,Ce)):t.texImage2D(s.TEXTURE_2D,0,Pe,ie.width,ie.height,0,me,Ce,ie.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){N&&ye&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Se,Pe,Ke[0].width,Ke[0].height,ie.depth);for(let re=0,Q=Ke.length;re<Q;re++)if(pe=Ke[re],x.format!==pn)if(me!==null)if(N){if(le)if(x.layerUpdates.size>0){const fe=Ug(pe.width,pe.height,x.format,x.type);for(const Xe of x.layerUpdates){const pt=pe.data.subarray(Xe*fe/pe.data.BYTES_PER_ELEMENT,(Xe+1)*fe/pe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,re,0,0,Xe,pe.width,pe.height,1,me,pt)}x.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,re,0,0,0,pe.width,pe.height,ie.depth,me,pe.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,re,Pe,pe.width,pe.height,ie.depth,0,pe.data,0,0);else Ie("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else N?le&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,re,0,0,0,pe.width,pe.height,ie.depth,me,Ce,pe.data):t.texImage3D(s.TEXTURE_2D_ARRAY,re,Pe,pe.width,pe.height,ie.depth,0,me,Ce,pe.data)}else{N&&ye&&t.texStorage2D(s.TEXTURE_2D,Se,Pe,Ke[0].width,Ke[0].height);for(let re=0,Q=Ke.length;re<Q;re++)pe=Ke[re],x.format!==pn?me!==null?N?le&&t.compressedTexSubImage2D(s.TEXTURE_2D,re,0,0,pe.width,pe.height,me,pe.data):t.compressedTexImage2D(s.TEXTURE_2D,re,Pe,pe.width,pe.height,0,pe.data):Ie("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):N?le&&t.texSubImage2D(s.TEXTURE_2D,re,0,0,pe.width,pe.height,me,Ce,pe.data):t.texImage2D(s.TEXTURE_2D,re,Pe,pe.width,pe.height,0,me,Ce,pe.data)}else if(x.isDataArrayTexture)if(N){if(ye&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Se,Pe,ie.width,ie.height,ie.depth),le)if(x.layerUpdates.size>0){const re=Ug(ie.width,ie.height,x.format,x.type);for(const Q of x.layerUpdates){const fe=ie.data.subarray(Q*re/ie.data.BYTES_PER_ELEMENT,(Q+1)*re/ie.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,Q,ie.width,ie.height,1,me,Ce,fe)}x.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,ie.width,ie.height,ie.depth,me,Ce,ie.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,Pe,ie.width,ie.height,ie.depth,0,me,Ce,ie.data);else if(x.isData3DTexture)N?(ye&&t.texStorage3D(s.TEXTURE_3D,Se,Pe,ie.width,ie.height,ie.depth),le&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,ie.width,ie.height,ie.depth,me,Ce,ie.data)):t.texImage3D(s.TEXTURE_3D,0,Pe,ie.width,ie.height,ie.depth,0,me,Ce,ie.data);else if(x.isFramebufferTexture){if(ye)if(N)t.texStorage2D(s.TEXTURE_2D,Se,Pe,ie.width,ie.height);else{let re=ie.width,Q=ie.height;for(let fe=0;fe<Se;fe++)t.texImage2D(s.TEXTURE_2D,fe,Pe,re,Q,0,me,Ce,null),re>>=1,Q>>=1}}else if(Ke.length>0){if(N&&ye){const re=ue(Ke[0]);t.texStorage2D(s.TEXTURE_2D,Se,Pe,re.width,re.height)}for(let re=0,Q=Ke.length;re<Q;re++)pe=Ke[re],N?le&&t.texSubImage2D(s.TEXTURE_2D,re,0,0,me,Ce,pe):t.texImage2D(s.TEXTURE_2D,re,Pe,me,Ce,pe);x.generateMipmaps=!1}else if(N){if(ye){const re=ue(ie);t.texStorage2D(s.TEXTURE_2D,Se,Pe,re.width,re.height)}le&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,me,Ce,ie)}else t.texImage2D(s.TEXTURE_2D,0,Pe,me,Ce,ie);g(x)&&m(q),Re.__version=Y.version,x.onUpdate&&x.onUpdate(x)}A.__version=x.version}l($,"uploadTexture");function ne(A,x,O){if(x.image.length!==6)return;const q=Ne(A,x),Z=x.source;t.bindTexture(s.TEXTURE_CUBE_MAP,A.__webglTexture,s.TEXTURE0+O);const Y=n.get(Z);if(Z.version!==Y.__version||q===!0){t.activeTexture(s.TEXTURE0+O);const Re=et.getPrimaries(et.workingColorSpace),de=x.colorSpace===pi?null:et.getPrimaries(x.colorSpace),Ae=x.colorSpace===pi||Re===de?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,x.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,x.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ae);const ze=x.isCompressedTexture||x.image[0].isCompressedTexture,ie=x.image[0]&&x.image[0].isDataTexture,me=[];for(let Q=0;Q<6;Q++)!ze&&!ie?me[Q]=v(x.image[Q],!0,i.maxCubemapSize):me[Q]=ie?x.image[Q].image:x.image[Q],me[Q]=ke(x,me[Q]);const Ce=me[0],Pe=r.convert(x.format,x.colorSpace),pe=r.convert(x.type),Ke=M(x.internalFormat,Pe,pe,x.colorSpace),N=x.isVideoTexture!==!0,ye=Y.__version===void 0||q===!0,le=Z.dataReady;let Se=C(x,Ce);Ve(s.TEXTURE_CUBE_MAP,x);let re;if(ze){N&&ye&&t.texStorage2D(s.TEXTURE_CUBE_MAP,Se,Ke,Ce.width,Ce.height);for(let Q=0;Q<6;Q++){re=me[Q].mipmaps;for(let fe=0;fe<re.length;fe++){const Xe=re[fe];x.format!==pn?Pe!==null?N?le&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,fe,0,0,Xe.width,Xe.height,Pe,Xe.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,fe,Ke,Xe.width,Xe.height,0,Xe.data):Ie("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):N?le&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,fe,0,0,Xe.width,Xe.height,Pe,pe,Xe.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,fe,Ke,Xe.width,Xe.height,0,Pe,pe,Xe.data)}}}else{if(re=x.mipmaps,N&&ye){re.length>0&&Se++;const Q=ue(me[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,Se,Ke,Q.width,Q.height)}for(let Q=0;Q<6;Q++)if(ie){N?le&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,me[Q].width,me[Q].height,Pe,pe,me[Q].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,Ke,me[Q].width,me[Q].height,0,Pe,pe,me[Q].data);for(let fe=0;fe<re.length;fe++){const pt=re[fe].image[Q].image;N?le&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,fe+1,0,0,pt.width,pt.height,Pe,pe,pt.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,fe+1,Ke,pt.width,pt.height,0,Pe,pe,pt.data)}}else{N?le&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,Pe,pe,me[Q]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,Ke,Pe,pe,me[Q]);for(let fe=0;fe<re.length;fe++){const Xe=re[fe];N?le&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,fe+1,0,0,Pe,pe,Xe.image[Q]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,fe+1,Ke,Pe,pe,Xe.image[Q])}}}g(x)&&m(s.TEXTURE_CUBE_MAP),Y.__version=Z.version,x.onUpdate&&x.onUpdate(x)}A.__version=x.version}l(ne,"uploadCubeTexture");function Me(A,x,O,q,Z,Y){const Re=r.convert(O.format,O.colorSpace),de=r.convert(O.type),Ae=M(O.internalFormat,Re,de,O.colorSpace),ze=n.get(x),ie=n.get(O);if(ie.__renderTarget=x,!ze.__hasExternalTextures){const me=Math.max(1,x.width>>Y),Ce=Math.max(1,x.height>>Y);Z===s.TEXTURE_3D||Z===s.TEXTURE_2D_ARRAY?t.texImage3D(Z,Y,Ae,me,Ce,x.depth,0,Re,de,null):t.texImage2D(Z,Y,Ae,me,Ce,0,Re,de,null)}t.bindFramebuffer(s.FRAMEBUFFER,A),Oe(x)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,q,Z,ie.__webglTexture,0,R(x)):(Z===s.TEXTURE_2D||Z>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,q,Z,ie.__webglTexture,Y),t.bindFramebuffer(s.FRAMEBUFFER,null)}l(Me,"setupFrameBufferTexture");function Be(A,x,O){if(s.bindRenderbuffer(s.RENDERBUFFER,A),x.depthBuffer){const q=x.depthTexture,Z=q&&q.isDepthTexture?q.type:null,Y=S(x.stencilBuffer,Z),Re=x.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;Oe(x)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,R(x),Y,x.width,x.height):O?s.renderbufferStorageMultisample(s.RENDERBUFFER,R(x),Y,x.width,x.height):s.renderbufferStorage(s.RENDERBUFFER,Y,x.width,x.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Re,s.RENDERBUFFER,A)}else{const q=x.textures;for(let Z=0;Z<q.length;Z++){const Y=q[Z],Re=r.convert(Y.format,Y.colorSpace),de=r.convert(Y.type),Ae=M(Y.internalFormat,Re,de,Y.colorSpace);Oe(x)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,R(x),Ae,x.width,x.height):O?s.renderbufferStorageMultisample(s.RENDERBUFFER,R(x),Ae,x.width,x.height):s.renderbufferStorage(s.RENDERBUFFER,Ae,x.width,x.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}l(Be,"setupRenderBufferStorage");function we(A,x,O){const q=x.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(s.FRAMEBUFFER,A),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Z=n.get(x.depthTexture);if(Z.__renderTarget=x,(!Z.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),q){if(Z.__webglInit===void 0&&(Z.__webglInit=!0,x.depthTexture.addEventListener("dispose",P)),Z.__webglTexture===void 0){Z.__webglTexture=s.createTexture(),t.bindTexture(s.TEXTURE_CUBE_MAP,Z.__webglTexture),Ve(s.TEXTURE_CUBE_MAP,x.depthTexture);const ze=r.convert(x.depthTexture.format),ie=r.convert(x.depthTexture.type);let me;x.depthTexture.format===ii?me=s.DEPTH_COMPONENT24:x.depthTexture.format===Vi&&(me=s.DEPTH24_STENCIL8);for(let Ce=0;Ce<6;Ce++)s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,0,me,x.width,x.height,0,ze,ie,null)}}else G(x.depthTexture,0);const Y=Z.__webglTexture,Re=R(x),de=q?s.TEXTURE_CUBE_MAP_POSITIVE_X+O:s.TEXTURE_2D,Ae=x.depthTexture.format===Vi?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(x.depthTexture.format===ii)Oe(x)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Ae,de,Y,0,Re):s.framebufferTexture2D(s.FRAMEBUFFER,Ae,de,Y,0);else if(x.depthTexture.format===Vi)Oe(x)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Ae,de,Y,0,Re):s.framebufferTexture2D(s.FRAMEBUFFER,Ae,de,Y,0);else throw new Error("Unknown depthTexture format")}l(we,"setupDepthTexture");function tt(A){const x=n.get(A),O=A.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==A.depthTexture){const q=A.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),q){const Z=l(()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,q.removeEventListener("dispose",Z)},"disposeEvent");q.addEventListener("dispose",Z),x.__depthDisposeCallback=Z}x.__boundDepthTexture=q}if(A.depthTexture&&!x.__autoAllocateDepthBuffer)if(O)for(let q=0;q<6;q++)we(x.__webglFramebuffer[q],A,q);else{const q=A.texture.mipmaps;q&&q.length>0?we(x.__webglFramebuffer[0],A,0):we(x.__webglFramebuffer,A,0)}else if(O){x.__webglDepthbuffer=[];for(let q=0;q<6;q++)if(t.bindFramebuffer(s.FRAMEBUFFER,x.__webglFramebuffer[q]),x.__webglDepthbuffer[q]===void 0)x.__webglDepthbuffer[q]=s.createRenderbuffer(),Be(x.__webglDepthbuffer[q],A,!1);else{const Z=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Y=x.__webglDepthbuffer[q];s.bindRenderbuffer(s.RENDERBUFFER,Y),s.framebufferRenderbuffer(s.FRAMEBUFFER,Z,s.RENDERBUFFER,Y)}}else{const q=A.texture.mipmaps;if(q&&q.length>0?t.bindFramebuffer(s.FRAMEBUFFER,x.__webglFramebuffer[0]):t.bindFramebuffer(s.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=s.createRenderbuffer(),Be(x.__webglDepthbuffer,A,!1);else{const Z=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Y=x.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,Y),s.framebufferRenderbuffer(s.FRAMEBUFFER,Z,s.RENDERBUFFER,Y)}}t.bindFramebuffer(s.FRAMEBUFFER,null)}l(tt,"setupDepthRenderbuffer");function ct(A,x,O){const q=n.get(A);x!==void 0&&Me(q.__webglFramebuffer,A,A.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),O!==void 0&&tt(A)}l(ct,"rebindTextures");function je(A){const x=A.texture,O=n.get(A),q=n.get(x);A.addEventListener("dispose",L);const Z=A.textures,Y=A.isWebGLCubeRenderTarget===!0,Re=Z.length>1;if(Re||(q.__webglTexture===void 0&&(q.__webglTexture=s.createTexture()),q.__version=x.version,o.memory.textures++),Y){O.__webglFramebuffer=[];for(let de=0;de<6;de++)if(x.mipmaps&&x.mipmaps.length>0){O.__webglFramebuffer[de]=[];for(let Ae=0;Ae<x.mipmaps.length;Ae++)O.__webglFramebuffer[de][Ae]=s.createFramebuffer()}else O.__webglFramebuffer[de]=s.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){O.__webglFramebuffer=[];for(let de=0;de<x.mipmaps.length;de++)O.__webglFramebuffer[de]=s.createFramebuffer()}else O.__webglFramebuffer=s.createFramebuffer();if(Re)for(let de=0,Ae=Z.length;de<Ae;de++){const ze=n.get(Z[de]);ze.__webglTexture===void 0&&(ze.__webglTexture=s.createTexture(),o.memory.textures++)}if(A.samples>0&&Oe(A)===!1){O.__webglMultisampledFramebuffer=s.createFramebuffer(),O.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let de=0;de<Z.length;de++){const Ae=Z[de];O.__webglColorRenderbuffer[de]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,O.__webglColorRenderbuffer[de]);const ze=r.convert(Ae.format,Ae.colorSpace),ie=r.convert(Ae.type),me=M(Ae.internalFormat,ze,ie,Ae.colorSpace,A.isXRRenderTarget===!0),Ce=R(A);s.renderbufferStorageMultisample(s.RENDERBUFFER,Ce,me,A.width,A.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+de,s.RENDERBUFFER,O.__webglColorRenderbuffer[de])}s.bindRenderbuffer(s.RENDERBUFFER,null),A.depthBuffer&&(O.__webglDepthRenderbuffer=s.createRenderbuffer(),Be(O.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(Y){t.bindTexture(s.TEXTURE_CUBE_MAP,q.__webglTexture),Ve(s.TEXTURE_CUBE_MAP,x);for(let de=0;de<6;de++)if(x.mipmaps&&x.mipmaps.length>0)for(let Ae=0;Ae<x.mipmaps.length;Ae++)Me(O.__webglFramebuffer[de][Ae],A,x,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+de,Ae);else Me(O.__webglFramebuffer[de],A,x,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+de,0);g(x)&&m(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Re){for(let de=0,Ae=Z.length;de<Ae;de++){const ze=Z[de],ie=n.get(ze);let me=s.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(me=A.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(me,ie.__webglTexture),Ve(me,ze),Me(O.__webglFramebuffer,A,ze,s.COLOR_ATTACHMENT0+de,me,0),g(ze)&&m(me)}t.unbindTexture()}else{let de=s.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(de=A.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(de,q.__webglTexture),Ve(de,x),x.mipmaps&&x.mipmaps.length>0)for(let Ae=0;Ae<x.mipmaps.length;Ae++)Me(O.__webglFramebuffer[Ae],A,x,s.COLOR_ATTACHMENT0,de,Ae);else Me(O.__webglFramebuffer,A,x,s.COLOR_ATTACHMENT0,de,0);g(x)&&m(de),t.unbindTexture()}A.depthBuffer&&tt(A)}l(je,"setupRenderTarget");function ee(A){const x=A.textures;for(let O=0,q=x.length;O<q;O++){const Z=x[O];if(g(Z)){const Y=T(A),Re=n.get(Z).__webglTexture;t.bindTexture(Y,Re),m(Y),t.unbindTexture()}}}l(ee,"updateRenderTargetMipmap");const se=[],te=[];function ve(A){if(A.samples>0){if(Oe(A)===!1){const x=A.textures,O=A.width,q=A.height;let Z=s.COLOR_BUFFER_BIT;const Y=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Re=n.get(A),de=x.length>1;if(de)for(let ze=0;ze<x.length;ze++)t.bindFramebuffer(s.FRAMEBUFFER,Re.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ze,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,Re.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ze,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,Re.__webglMultisampledFramebuffer);const Ae=A.texture.mipmaps;Ae&&Ae.length>0?t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Re.__webglFramebuffer[0]):t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Re.__webglFramebuffer);for(let ze=0;ze<x.length;ze++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(Z|=s.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(Z|=s.STENCIL_BUFFER_BIT)),de){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Re.__webglColorRenderbuffer[ze]);const ie=n.get(x[ze]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,ie,0)}s.blitFramebuffer(0,0,O,q,0,0,O,q,Z,s.NEAREST),c===!0&&(se.length=0,te.length=0,se.push(s.COLOR_ATTACHMENT0+ze),A.depthBuffer&&A.resolveDepthBuffer===!1&&(se.push(Y),te.push(Y),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,te)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,se))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),de)for(let ze=0;ze<x.length;ze++){t.bindFramebuffer(s.FRAMEBUFFER,Re.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ze,s.RENDERBUFFER,Re.__webglColorRenderbuffer[ze]);const ie=n.get(x[ze]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,Re.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ze,s.TEXTURE_2D,ie,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Re.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&c){const x=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[x])}}}l(ve,"updateMultisampleRenderTarget");function R(A){return Math.min(i.maxSamples,A.samples)}l(R,"getRenderTargetSamples");function Oe(A){const x=n.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}l(Oe,"useMultisampledRTT");function be(A){const x=o.render.frame;h.get(A)!==x&&(h.set(A,x),A.update())}l(be,"updateVideoTexture");function ke(A,x){const O=A.colorSpace,q=A.format,Z=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||O!==qt&&O!==pi&&(et.getTransfer(O)===at?(q!==pn||Z!==rn)&&Ie("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):He("WebGLTextures: Unsupported texture color space:",O)),x}l(ke,"verifyColorSpace");function ue(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(u.width=A.naturalWidth||A.width,u.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(u.width=A.displayWidth,u.height=A.displayHeight):(u.width=A.width,u.height=A.height),u}l(ue,"getDimensions"),this.allocateTextureUnit=D,this.resetTextureUnits=U,this.setTexture2D=G,this.setTexture2DArray=H,this.setTexture3D=z,this.setTextureCube=K,this.rebindTextures=ct,this.setupRenderTarget=je,this.updateRenderTargetMipmap=ee,this.updateMultisampleRenderTarget=ve,this.setupDepthRenderbuffer=tt,this.setupFrameBufferTexture=Me,this.useMultisampledRTT=Oe,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}l(zE,"WebGLTextures");function HE(s,e){function t(n,i=pi){let r;const o=et.getTransfer(i);if(n===rn)return s.UNSIGNED_BYTE;if(n===cd)return s.UNSIGNED_SHORT_4_4_4_4;if(n===ud)return s.UNSIGNED_SHORT_5_5_5_1;if(n===O_)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===U_)return s.UNSIGNED_INT_10F_11F_11F_REV;if(n===D_)return s.BYTE;if(n===N_)return s.SHORT;if(n===kr)return s.UNSIGNED_SHORT;if(n===ld)return s.INT;if(n===Bn)return s.UNSIGNED_INT;if(n===fn)return s.FLOAT;if(n===ni)return s.HALF_FLOAT;if(n===F_)return s.ALPHA;if(n===B_)return s.RGB;if(n===pn)return s.RGBA;if(n===ii)return s.DEPTH_COMPONENT;if(n===Vi)return s.DEPTH_STENCIL;if(n===hd)return s.RED;if(n===dd)return s.RED_INTEGER;if(n===ir)return s.RG;if(n===fd)return s.RG_INTEGER;if(n===pd)return s.RGBA_INTEGER;if(n===Wo||n===Xo||n===jo||n===qo)if(o===at)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Wo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Xo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===jo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===qo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Wo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Xo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===jo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===qo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ic||n===sc||n===rc||n===oc)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===ic)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===sc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===rc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===oc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ac||n===lc||n===cc||n===uc||n===hc||n===dc||n===fc)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===ac||n===lc)return o===at?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===cc)return o===at?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===uc)return r.COMPRESSED_R11_EAC;if(n===hc)return r.COMPRESSED_SIGNED_R11_EAC;if(n===dc)return r.COMPRESSED_RG11_EAC;if(n===fc)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===pc||n===mc||n===gc||n===_c||n===vc||n===xc||n===yc||n===bc||n===Sc||n===Mc||n===Ec||n===wc||n===Tc||n===Ac)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===pc)return o===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===mc)return o===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===gc)return o===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===_c)return o===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===vc)return o===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===xc)return o===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===yc)return o===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===bc)return o===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Sc)return o===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Mc)return o===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ec)return o===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===wc)return o===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Tc)return o===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ac)return o===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Cc||n===Rc||n===Pc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Cc)return o===at?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Rc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Pc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Lc||n===Ic||n===Dc||n===Nc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Lc)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Ic)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Dc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Nc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===zr?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return l(t,"convert"),{convert:t}}l(HE,"WebGLUtils");const VE=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,GE=`
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

}`,Cp=class Cp{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new ua(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new xn({vertexShader:VE,fragmentShader:GE,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ft(new va(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}};l(Cp,"WebXRDepthSensing");let ku=Cp;const Rp=class Rp extends si{constructor(e,t){super();const n=this;let i=null,r=1,o=null,a="local-floor",c=1,u=null,h=null,d=null,f=null,p=null,_=null;const v=typeof XRWebGLBinding<"u",g=new ku,m={},T=t.getContextAttributes();let M=null,S=null;const C=[],P=[],L=new oe;let F=null;const y=new Ft;y.viewport=new vt;const E=new Ft;E.viewport=new vt;const w=[y,E],U=new Au;let D=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let ne=C[$];return ne===void 0&&(ne=new Lr,C[$]=ne),ne.getTargetRaySpace()},this.getControllerGrip=function($){let ne=C[$];return ne===void 0&&(ne=new Lr,C[$]=ne),ne.getGripSpace()},this.getHand=function($){let ne=C[$];return ne===void 0&&(ne=new Lr,C[$]=ne),ne.getHandSpace()};function G($){const ne=P.indexOf($.inputSource);if(ne===-1)return;const Me=C[ne];Me!==void 0&&(Me.update($.inputSource,$.frame,u||o),Me.dispatchEvent({type:$.type,data:$.inputSource}))}l(G,"onSessionEvent");function H(){i.removeEventListener("select",G),i.removeEventListener("selectstart",G),i.removeEventListener("selectend",G),i.removeEventListener("squeeze",G),i.removeEventListener("squeezestart",G),i.removeEventListener("squeezeend",G),i.removeEventListener("end",H),i.removeEventListener("inputsourceschange",z);for(let $=0;$<C.length;$++){const ne=P[$];ne!==null&&(P[$]=null,C[$].disconnect(ne))}D=null,V=null,g.reset();for(const $ in m)delete m[$];e.setRenderTarget(M),p=null,f=null,d=null,i=null,S=null,st.stop(),n.isPresenting=!1,e.setPixelRatio(F),e.setSize(L.width,L.height,!1),n.dispatchEvent({type:"sessionend"})}l(H,"onSessionEnd"),this.setFramebufferScaleFactor=function($){r=$,n.isPresenting===!0&&Ie("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){a=$,n.isPresenting===!0&&Ie("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||o},this.setReferenceSpace=function($){u=$},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return d===null&&v&&(d=new XRWebGLBinding(i,t)),d},this.getFrame=function(){return _},this.getSession=function(){return i},this.setSession=async function($){if(i=$,i!==null){if(M=e.getRenderTarget(),i.addEventListener("select",G),i.addEventListener("selectstart",G),i.addEventListener("selectend",G),i.addEventListener("squeeze",G),i.addEventListener("squeezestart",G),i.addEventListener("squeezeend",G),i.addEventListener("end",H),i.addEventListener("inputsourceschange",z),T.xrCompatible!==!0&&await t.makeXRCompatible(),F=e.getPixelRatio(),e.getSize(L),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let Me=null,Be=null,we=null;T.depth&&(we=T.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Me=T.stencil?Vi:ii,Be=T.stencil?zr:Bn);const tt={colorFormat:t.RGBA8,depthFormat:we,scaleFactor:r};d=this.getBinding(),f=d.createProjectionLayer(tt),i.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),S=new _n(f.textureWidth,f.textureHeight,{format:pn,type:rn,depthTexture:new ji(f.textureWidth,f.textureHeight,Be,void 0,void 0,void 0,void 0,void 0,void 0,Me),stencilBuffer:T.stencil,colorSpace:e.outputColorSpace,samples:T.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const Me={antialias:T.antialias,alpha:!0,depth:T.depth,stencil:T.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(i,t,Me),i.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),S=new _n(p.framebufferWidth,p.framebufferHeight,{format:pn,type:rn,colorSpace:e.outputColorSpace,stencilBuffer:T.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(c),u=null,o=await i.requestReferenceSpace(a),st.setContext(i),st.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function z($){for(let ne=0;ne<$.removed.length;ne++){const Me=$.removed[ne],Be=P.indexOf(Me);Be>=0&&(P[Be]=null,C[Be].disconnect(Me))}for(let ne=0;ne<$.added.length;ne++){const Me=$.added[ne];let Be=P.indexOf(Me);if(Be===-1){for(let tt=0;tt<C.length;tt++)if(tt>=P.length){P.push(Me),Be=tt;break}else if(P[tt]===null){P[tt]=Me,Be=tt;break}if(Be===-1)break}const we=C[Be];we&&we.connect(Me)}}l(z,"onInputSourcesChange");const K=new I,ae=new I;function ce($,ne,Me){K.setFromMatrixPosition(ne.matrixWorld),ae.setFromMatrixPosition(Me.matrixWorld);const Be=K.distanceTo(ae),we=ne.projectionMatrix.elements,tt=Me.projectionMatrix.elements,ct=we[14]/(we[10]-1),je=we[14]/(we[10]+1),ee=(we[9]+1)/we[5],se=(we[9]-1)/we[5],te=(we[8]-1)/we[0],ve=(tt[8]+1)/tt[0],R=ct*te,Oe=ct*ve,be=Be/(-te+ve),ke=be*-te;if(ne.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(ke),$.translateZ(be),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),we[10]===-1)$.projectionMatrix.copy(ne.projectionMatrix),$.projectionMatrixInverse.copy(ne.projectionMatrixInverse);else{const ue=ct+be,A=je+be,x=R-ke,O=Oe+(Be-ke),q=ee*je/A*ue,Z=se*je/A*ue;$.projectionMatrix.makePerspective(x,O,q,Z,ue,A),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}l(ce,"setProjectionFromUnion");function he($,ne){ne===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(ne.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}l(he,"updateCamera"),this.updateCamera=function($){if(i===null)return;let ne=$.near,Me=$.far;g.texture!==null&&(g.depthNear>0&&(ne=g.depthNear),g.depthFar>0&&(Me=g.depthFar)),U.near=E.near=y.near=ne,U.far=E.far=y.far=Me,(D!==U.near||V!==U.far)&&(i.updateRenderState({depthNear:U.near,depthFar:U.far}),D=U.near,V=U.far),U.layers.mask=$.layers.mask|6,y.layers.mask=U.layers.mask&3,E.layers.mask=U.layers.mask&5;const Be=$.parent,we=U.cameras;he(U,Be);for(let tt=0;tt<we.length;tt++)he(we[tt],Be);we.length===2?ce(U,y,E):U.projectionMatrix.copy(y.projectionMatrix),Ve($,U,Be)};function Ve($,ne,Me){Me===null?$.matrix.copy(ne.matrixWorld):($.matrix.copy(Me.matrixWorld),$.matrix.invert(),$.matrix.multiply(ne.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(ne.projectionMatrix),$.projectionMatrixInverse.copy(ne.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=sr*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}l(Ve,"updateUserCamera"),this.getCamera=function(){return U},this.getFoveation=function(){if(!(f===null&&p===null))return c},this.setFoveation=function($){c=$,f!==null&&(f.fixedFoveation=$),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=$)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(U)},this.getCameraTexture=function($){return m[$]};let Ne=null;function nt($,ne){if(h=ne.getViewerPose(u||o),_=ne,h!==null){const Me=h.views;p!==null&&(e.setRenderTargetFramebuffer(S,p.framebuffer),e.setRenderTarget(S));let Be=!1;Me.length!==U.cameras.length&&(U.cameras.length=0,Be=!0);for(let je=0;je<Me.length;je++){const ee=Me[je];let se=null;if(p!==null)se=p.getViewport(ee);else{const ve=d.getViewSubImage(f,ee);se=ve.viewport,je===0&&(e.setRenderTargetTextures(S,ve.colorTexture,ve.depthStencilTexture),e.setRenderTarget(S))}let te=w[je];te===void 0&&(te=new Ft,te.layers.enable(je),te.viewport=new vt,w[je]=te),te.matrix.fromArray(ee.transform.matrix),te.matrix.decompose(te.position,te.quaternion,te.scale),te.projectionMatrix.fromArray(ee.projectionMatrix),te.projectionMatrixInverse.copy(te.projectionMatrix).invert(),te.viewport.set(se.x,se.y,se.width,se.height),je===0&&(U.matrix.copy(te.matrix),U.matrix.decompose(U.position,U.quaternion,U.scale)),Be===!0&&U.cameras.push(te)}const we=i.enabledFeatures;if(we&&we.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&v){d=n.getBinding();const je=d.getDepthInformation(Me[0]);je&&je.isValid&&je.texture&&g.init(je,i.renderState)}if(we&&we.includes("camera-access")&&v){e.state.unbindTexture(),d=n.getBinding();for(let je=0;je<Me.length;je++){const ee=Me[je].camera;if(ee){let se=m[ee];se||(se=new ua,m[ee]=se);const te=d.getCameraImage(ee);se.sourceTexture=te}}}}for(let Me=0;Me<C.length;Me++){const Be=P[Me],we=C[Me];Be!==null&&we!==void 0&&we.update(Be,ne,u||o)}Ne&&Ne($,ne),ne.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ne}),_=null}l(nt,"onAnimationFrame");const st=new Y_;st.setAnimationLoop(nt),this.setAnimationLoop=function($){Ne=$},this.dispose=function(){}}};l(Rp,"WebXRManager");let zu=Rp;const Ni=new An,WE=new qe;function XE(s,e){function t(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}l(t,"refreshTransformUniform");function n(g,m){m.color.getRGB(g.fogColor.value,V_(s)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}l(n,"refreshFogUniforms");function i(g,m,T,M,S){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(g,m):m.isMeshToonMaterial?(r(g,m),d(g,m)):m.isMeshPhongMaterial?(r(g,m),h(g,m)):m.isMeshStandardMaterial?(r(g,m),f(g,m),m.isMeshPhysicalMaterial&&p(g,m,S)):m.isMeshMatcapMaterial?(r(g,m),_(g,m)):m.isMeshDepthMaterial?r(g,m):m.isMeshDistanceMaterial?(r(g,m),v(g,m)):m.isMeshNormalMaterial?r(g,m):m.isLineBasicMaterial?(o(g,m),m.isLineDashedMaterial&&a(g,m)):m.isPointsMaterial?c(g,m,T,M):m.isSpriteMaterial?u(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}l(i,"refreshMaterialUniforms");function r(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,t(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===Jt&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,t(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===Jt&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,t(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,t(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);const T=e.get(m),M=T.envMap,S=T.envMapRotation;M&&(g.envMap.value=M,Ni.copy(S),Ni.x*=-1,Ni.y*=-1,Ni.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(Ni.y*=-1,Ni.z*=-1),g.envMapRotation.value.setFromMatrix4(WE.makeRotationFromEuler(Ni)),g.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,g.aoMapTransform))}l(r,"refreshUniformsCommon");function o(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform))}l(o,"refreshUniformsLine");function a(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}l(a,"refreshUniformsDash");function c(g,m,T,M){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*T,g.scale.value=M*.5,m.map&&(g.map.value=m.map,t(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}l(c,"refreshUniformsPoints");function u(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}l(u,"refreshUniformsSprites");function h(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}l(h,"refreshUniformsPhong");function d(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}l(d,"refreshUniformsToon");function f(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}l(f,"refreshUniformsStandard");function p(g,m,T){g.ior.value=m.ior,m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Jt&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=T.texture,g.transmissionSamplerSize.value.set(T.width,T.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,g.specularIntensityMapTransform))}l(p,"refreshUniformsPhysical");function _(g,m){m.matcap&&(g.matcap.value=m.matcap)}l(_,"refreshUniformsMatcap");function v(g,m){const T=e.get(m).light;g.referencePosition.value.setFromMatrixPosition(T.matrixWorld),g.nearDistance.value=T.shadow.camera.near,g.farDistance.value=T.shadow.camera.far}return l(v,"refreshUniformsDistance"),{refreshFogUniforms:n,refreshMaterialUniforms:i}}l(XE,"WebGLMaterials");function jE(s,e,t,n){let i={},r={},o=[];const a=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function c(T,M){const S=M.program;n.uniformBlockBinding(T,S)}l(c,"bind");function u(T,M){let S=i[T.id];S===void 0&&(_(T),S=h(T),i[T.id]=S,T.addEventListener("dispose",g));const C=M.program;n.updateUBOMapping(T,C);const P=e.render.frame;r[T.id]!==P&&(f(T),r[T.id]=P)}l(u,"update");function h(T){const M=d();T.__bindingPointIndex=M;const S=s.createBuffer(),C=T.__size,P=T.usage;return s.bindBuffer(s.UNIFORM_BUFFER,S),s.bufferData(s.UNIFORM_BUFFER,C,P),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,M,S),S}l(h,"createBuffer");function d(){for(let T=0;T<a;T++)if(o.indexOf(T)===-1)return o.push(T),T;return He("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}l(d,"allocateBindingPointIndex");function f(T){const M=i[T.id],S=T.uniforms,C=T.__cache;s.bindBuffer(s.UNIFORM_BUFFER,M);for(let P=0,L=S.length;P<L;P++){const F=Array.isArray(S[P])?S[P]:[S[P]];for(let y=0,E=F.length;y<E;y++){const w=F[y];if(p(w,P,y,C)===!0){const U=w.__offset,D=Array.isArray(w.value)?w.value:[w.value];let V=0;for(let G=0;G<D.length;G++){const H=D[G],z=v(H);typeof H=="number"||typeof H=="boolean"?(w.__data[0]=H,s.bufferSubData(s.UNIFORM_BUFFER,U+V,w.__data)):H.isMatrix3?(w.__data[0]=H.elements[0],w.__data[1]=H.elements[1],w.__data[2]=H.elements[2],w.__data[3]=0,w.__data[4]=H.elements[3],w.__data[5]=H.elements[4],w.__data[6]=H.elements[5],w.__data[7]=0,w.__data[8]=H.elements[6],w.__data[9]=H.elements[7],w.__data[10]=H.elements[8],w.__data[11]=0):(H.toArray(w.__data,V),V+=z.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,U,w.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}l(f,"updateBufferData");function p(T,M,S,C){const P=T.value,L=M+"_"+S;if(C[L]===void 0)return typeof P=="number"||typeof P=="boolean"?C[L]=P:C[L]=P.clone(),!0;{const F=C[L];if(typeof P=="number"||typeof P=="boolean"){if(F!==P)return C[L]=P,!0}else if(F.equals(P)===!1)return F.copy(P),!0}return!1}l(p,"hasUniformChanged");function _(T){const M=T.uniforms;let S=0;const C=16;for(let L=0,F=M.length;L<F;L++){const y=Array.isArray(M[L])?M[L]:[M[L]];for(let E=0,w=y.length;E<w;E++){const U=y[E],D=Array.isArray(U.value)?U.value:[U.value];for(let V=0,G=D.length;V<G;V++){const H=D[V],z=v(H),K=S%C,ae=K%z.boundary,ce=K+ae;S+=ae,ce!==0&&C-ce<z.storage&&(S+=C-ce),U.__data=new Float32Array(z.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=S,S+=z.storage}}}const P=S%C;return P>0&&(S+=C-P),T.__size=S,T.__cache={},this}l(_,"prepareUniformsGroup");function v(T){const M={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(M.boundary=4,M.storage=4):T.isVector2?(M.boundary=8,M.storage=8):T.isVector3||T.isColor?(M.boundary=16,M.storage=12):T.isVector4?(M.boundary=16,M.storage=16):T.isMatrix3?(M.boundary=48,M.storage=48):T.isMatrix4?(M.boundary=64,M.storage=64):T.isTexture?Ie("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Ie("WebGLRenderer: Unsupported uniform value type.",T),M}l(v,"getUniformSize");function g(T){const M=T.target;M.removeEventListener("dispose",g);const S=o.indexOf(M.__bindingPointIndex);o.splice(S,1),s.deleteBuffer(i[M.id]),delete i[M.id],delete r[M.id]}l(g,"onUniformsGroupsDispose");function m(){for(const T in i)s.deleteBuffer(i[T]);o=[],i={},r={}}return l(m,"dispose"),{bind:c,update:u,dispose:m}}l(jE,"WebGLUniformsGroups");const qE=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Ln=null;function YE(){return Ln===null&&(Ln=new qr(qE,16,16,ir,ni),Ln.name="DFG_LUT",Ln.minFilter=Rt,Ln.magFilter=Rt,Ln.wrapS=On,Ln.wrapT=On,Ln.generateMipmaps=!1,Ln.needsUpdate=!0),Ln}l(YE,"getDFGLUT");const Pp=class Pp{constructor(e={}){const{canvas:t=Nv(),context:n=null,depth:i=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:u=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:f=!1,outputBufferType:p=rn}=e;this.isWebGLRenderer=!0;let _;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=n.getContextAttributes().alpha}else _=o;const v=p,g=new Set([pd,fd,dd]),m=new Set([rn,Bn,kr,zr,cd,ud]),T=new Uint32Array(4),M=new Int32Array(4);let S=null,C=null;const P=[],L=[];let F=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Fn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const y=this;let E=!1;this._outputColorSpace=Ot;let w=0,U=0,D=null,V=-1,G=null;const H=new vt,z=new vt;let K=null;const ae=new We(0);let ce=0,he=t.width,Ve=t.height,Ne=1,nt=null,st=null;const $=new vt(0,0,he,Ve),ne=new vt(0,0,he,Ve);let Me=!1;const Be=new $r;let we=!1,tt=!1;const ct=new qe,je=new I,ee=new vt,se={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let te=!1;function ve(){return D===null?Ne:1}l(ve,"getTargetPixelRatio");let R=n;function Oe(b,B){return t.getContext(b,B)}l(Oe,"getContext");try{const b={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:u,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${od}`),t.addEventListener("webglcontextlost",Xe,!1),t.addEventListener("webglcontextrestored",pt,!1),t.addEventListener("webglcontextcreationerror",rt,!1),R===null){const B="webgl2";if(R=Oe(B,b),R===null)throw Oe(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw He("WebGLRenderer: "+b.message),b}let be,ke,ue,A,x,O,q,Z,Y,Re,de,Ae,ze,ie,me,Ce,Pe,pe,Ke,N,ye,le,Se,re;function Q(){be=new tM(R),be.init(),le=new HE(R,be),ke=new jS(R,be,e,le),ue=new kE(R,be),ke.reversedDepthBuffer&&f&&ue.buffers.depth.setReversed(!0),A=new sM(R),x=new EE,O=new zE(R,be,ue,x,ke,le,A),q=new YS(y),Z=new eM(y),Y=new ly(R),Se=new WS(R,Y),Re=new nM(R,Y,A,Se),de=new oM(R,Re,Y,A),Ke=new rM(R,ke,O),Ce=new qS(x),Ae=new ME(y,q,Z,be,ke,Se,Ce),ze=new XE(y,x),ie=new TE,me=new IE(be),pe=new GS(y,q,Z,ue,de,_,c),Pe=new FE(y,de,ke),re=new jE(R,A,ke,ue),N=new XS(R,be,A),ye=new iM(R,be,A),A.programs=Ae.programs,y.capabilities=ke,y.extensions=be,y.properties=x,y.renderLists=ie,y.shadowMap=Pe,y.state=ue,y.info=A}l(Q,"initGLContext"),Q(),v!==rn&&(F=new lM(v,t.width,t.height,i,r));const fe=new zu(y,R);this.xr=fe,this.getContext=function(){return R},this.getContextAttributes=function(){return R.getContextAttributes()},this.forceContextLoss=function(){const b=be.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=be.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return Ne},this.setPixelRatio=function(b){b!==void 0&&(Ne=b,this.setSize(he,Ve,!1))},this.getSize=function(b){return b.set(he,Ve)},this.setSize=function(b,B,j=!0){if(fe.isPresenting){Ie("WebGLRenderer: Can't change size while VR device is presenting.");return}he=b,Ve=B,t.width=Math.floor(b*Ne),t.height=Math.floor(B*Ne),j===!0&&(t.style.width=b+"px",t.style.height=B+"px"),F!==null&&F.setSize(t.width,t.height),this.setViewport(0,0,b,B)},this.getDrawingBufferSize=function(b){return b.set(he*Ne,Ve*Ne).floor()},this.setDrawingBufferSize=function(b,B,j){he=b,Ve=B,Ne=j,t.width=Math.floor(b*j),t.height=Math.floor(B*j),this.setViewport(0,0,b,B)},this.setEffects=function(b){if(v===rn){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(b){for(let B=0;B<b.length;B++)if(b[B].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}F.setEffects(b||[])},this.getCurrentViewport=function(b){return b.copy(H)},this.getViewport=function(b){return b.copy($)},this.setViewport=function(b,B,j,X){b.isVector4?$.set(b.x,b.y,b.z,b.w):$.set(b,B,j,X),ue.viewport(H.copy($).multiplyScalar(Ne).round())},this.getScissor=function(b){return b.copy(ne)},this.setScissor=function(b,B,j,X){b.isVector4?ne.set(b.x,b.y,b.z,b.w):ne.set(b,B,j,X),ue.scissor(z.copy(ne).multiplyScalar(Ne).round())},this.getScissorTest=function(){return Me},this.setScissorTest=function(b){ue.setScissorTest(Me=b)},this.setOpaqueSort=function(b){nt=b},this.setTransparentSort=function(b){st=b},this.getClearColor=function(b){return b.copy(pe.getClearColor())},this.setClearColor=function(){pe.setClearColor(...arguments)},this.getClearAlpha=function(){return pe.getClearAlpha()},this.setClearAlpha=function(){pe.setClearAlpha(...arguments)},this.clear=function(b=!0,B=!0,j=!0){let X=0;if(b){let k=!1;if(D!==null){const ge=D.texture.format;k=g.has(ge)}if(k){const ge=D.texture.type,Ee=m.has(ge),xe=pe.getClearColor(),Te=pe.getClearAlpha(),Le=xe.r,Ge=xe.g,Ue=xe.b;Ee?(T[0]=Le,T[1]=Ge,T[2]=Ue,T[3]=Te,R.clearBufferuiv(R.COLOR,0,T)):(M[0]=Le,M[1]=Ge,M[2]=Ue,M[3]=Te,R.clearBufferiv(R.COLOR,0,M))}else X|=R.COLOR_BUFFER_BIT}B&&(X|=R.DEPTH_BUFFER_BIT),j&&(X|=R.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),R.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Xe,!1),t.removeEventListener("webglcontextrestored",pt,!1),t.removeEventListener("webglcontextcreationerror",rt,!1),pe.dispose(),ie.dispose(),me.dispose(),x.dispose(),q.dispose(),Z.dispose(),de.dispose(),Se.dispose(),re.dispose(),Ae.dispose(),fe.dispose(),fe.removeEventListener("sessionstart",Rm),fe.removeEventListener("sessionend",Pm),Ai.stop()};function Xe(b){b.preventDefault(),Zo("WebGLRenderer: Context Lost."),E=!0}l(Xe,"onContextLost");function pt(){Zo("WebGLRenderer: Context Restored."),E=!1;const b=A.autoReset,B=Pe.enabled,j=Pe.autoUpdate,X=Pe.needsUpdate,k=Pe.type;Q(),A.autoReset=b,Pe.enabled=B,Pe.autoUpdate=j,Pe.needsUpdate=X,Pe.type=k}l(pt,"onContextRestore");function rt(b){He("WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}l(rt,"onContextCreationError");function Pn(b){const B=b.target;B.removeEventListener("dispose",Pn),Vn(B)}l(Pn,"onMaterialDispose");function Vn(b){h0(b),x.remove(b)}l(Vn,"deallocateMaterial");function h0(b){const B=x.get(b).programs;B!==void 0&&(B.forEach(function(j){Ae.releaseProgram(j)}),b.isShaderMaterial&&Ae.releaseShaderCache(b))}l(h0,"releaseMaterialProgramReferences"),this.renderBufferDirect=function(b,B,j,X,k,ge){B===null&&(B=se);const Ee=k.isMesh&&k.matrixWorld.determinant()<0,xe=f0(b,B,j,X,k);ue.setMaterial(X,Ee);let Te=j.index,Le=1;if(X.wireframe===!0){if(Te=Re.getWireframeAttribute(j),Te===void 0)return;Le=2}const Ge=j.drawRange,Ue=j.attributes.position;let Ze=Ge.start*Le,ut=(Ge.start+Ge.count)*Le;ge!==null&&(Ze=Math.max(Ze,ge.start*Le),ut=Math.min(ut,(ge.start+ge.count)*Le)),Te!==null?(Ze=Math.max(Ze,0),ut=Math.min(ut,Te.count)):Ue!=null&&(Ze=Math.max(Ze,0),ut=Math.min(ut,Ue.count));const St=ut-Ze;if(St<0||St===1/0)return;Se.setup(k,X,xe,j,Te);let Mt,dt=N;if(Te!==null&&(Mt=Y.get(Te),dt=ye,dt.setIndex(Mt)),k.isMesh)X.wireframe===!0?(ue.setLineWidth(X.wireframeLinewidth*ve()),dt.setMode(R.LINES)):dt.setMode(R.TRIANGLES);else if(k.isLine){let Fe=X.linewidth;Fe===void 0&&(Fe=1),ue.setLineWidth(Fe*ve()),k.isLineSegments?dt.setMode(R.LINES):k.isLineLoop?dt.setMode(R.LINE_LOOP):dt.setMode(R.LINE_STRIP)}else k.isPoints?dt.setMode(R.POINTS):k.isSprite&&dt.setMode(R.TRIANGLES);if(k.isBatchedMesh)if(k._multiDrawInstances!==null)Wr("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),dt.renderMultiDrawInstances(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount,k._multiDrawInstances);else if(be.get("WEBGL_multi_draw"))dt.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else{const Fe=k._multiDrawStarts,ot=k._multiDrawCounts,it=k._multiDrawCount,en=Te?Y.get(Te).bytesPerElement:1,Zi=x.get(X).currentProgram.getUniforms();for(let tn=0;tn<it;tn++)Zi.setValue(R,"_gl_DrawID",tn),dt.render(Fe[tn]/en,ot[tn])}else if(k.isInstancedMesh)dt.renderInstances(Ze,St,k.count);else if(j.isInstancedBufferGeometry){const Fe=j._maxInstanceCount!==void 0?j._maxInstanceCount:1/0,ot=Math.min(j.instanceCount,Fe);dt.renderInstances(Ze,St,ot)}else dt.render(Ze,St)};function Cm(b,B,j){b.transparent===!0&&b.side===wn&&b.forceSinglePass===!1?(b.side=Jt,b.needsUpdate=!0,co(b,B,j),b.side=ti,b.needsUpdate=!0,co(b,B,j),b.side=wn):co(b,B,j)}l(Cm,"prepareMaterial"),this.compile=function(b,B,j=null){j===null&&(j=b),C=me.get(j),C.init(B),L.push(C),j.traverseVisible(function(k){k.isLight&&k.layers.test(B.layers)&&(C.pushLight(k),k.castShadow&&C.pushShadow(k))}),b!==j&&b.traverseVisible(function(k){k.isLight&&k.layers.test(B.layers)&&(C.pushLight(k),k.castShadow&&C.pushShadow(k))}),C.setupLights();const X=new Set;return b.traverse(function(k){if(!(k.isMesh||k.isPoints||k.isLine||k.isSprite))return;const ge=k.material;if(ge)if(Array.isArray(ge))for(let Ee=0;Ee<ge.length;Ee++){const xe=ge[Ee];Cm(xe,j,k),X.add(xe)}else Cm(ge,j,k),X.add(ge)}),C=L.pop(),X},this.compileAsync=function(b,B,j=null){const X=this.compile(b,B,j);return new Promise(k=>{function ge(){if(X.forEach(function(Ee){x.get(Ee).currentProgram.isReady()&&X.delete(Ee)}),X.size===0){k(b);return}setTimeout(ge,10)}l(ge,"checkMaterialsReady"),be.get("KHR_parallel_shader_compile")!==null?ge():setTimeout(ge,10)})};let Za=null;function d0(b){Za&&Za(b)}l(d0,"onAnimationFrame");function Rm(){Ai.stop()}l(Rm,"onXRSessionStart");function Pm(){Ai.start()}l(Pm,"onXRSessionEnd");const Ai=new Y_;Ai.setAnimationLoop(d0),typeof self<"u"&&Ai.setContext(self),this.setAnimationLoop=function(b){Za=b,fe.setAnimationLoop(b),b===null?Ai.stop():Ai.start()},fe.addEventListener("sessionstart",Rm),fe.addEventListener("sessionend",Pm),this.render=function(b,B){if(B!==void 0&&B.isCamera!==!0){He("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;const j=fe.enabled===!0&&fe.isPresenting===!0,X=F!==null&&(D===null||j)&&F.begin(y,D);if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),fe.enabled===!0&&fe.isPresenting===!0&&(F===null||F.isCompositing()===!1)&&(fe.cameraAutoUpdate===!0&&fe.updateCamera(B),B=fe.getCamera()),b.isScene===!0&&b.onBeforeRender(y,b,B,D),C=me.get(b,L.length),C.init(B),L.push(C),ct.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),Be.setFromProjectionMatrix(ct,Un,B.reversedDepth),tt=this.localClippingEnabled,we=Ce.init(this.clippingPlanes,tt),S=ie.get(b,P.length),S.init(),P.push(S),fe.enabled===!0&&fe.isPresenting===!0){const Ee=y.xr.getDepthSensingMesh();Ee!==null&&Qa(Ee,B,-1/0,y.sortObjects)}Qa(b,B,0,y.sortObjects),S.finish(),y.sortObjects===!0&&S.sort(nt,st),te=fe.enabled===!1||fe.isPresenting===!1||fe.hasDepthSensing()===!1,te&&pe.addToRenderList(S,b),this.info.render.frame++,we===!0&&Ce.beginShadows();const k=C.state.shadowsArray;if(Pe.render(k,b,B),we===!0&&Ce.endShadows(),this.info.autoReset===!0&&this.info.reset(),(X&&F.hasRenderPass())===!1){const Ee=S.opaque,xe=S.transmissive;if(C.setupLights(),B.isArrayCamera){const Te=B.cameras;if(xe.length>0)for(let Le=0,Ge=Te.length;Le<Ge;Le++){const Ue=Te[Le];Im(Ee,xe,b,Ue)}te&&pe.render(b);for(let Le=0,Ge=Te.length;Le<Ge;Le++){const Ue=Te[Le];Lm(S,b,Ue,Ue.viewport)}}else xe.length>0&&Im(Ee,xe,b,B),te&&pe.render(b),Lm(S,b,B)}D!==null&&U===0&&(O.updateMultisampleRenderTarget(D),O.updateRenderTargetMipmap(D)),X&&F.end(y),b.isScene===!0&&b.onAfterRender(y,b,B),Se.resetDefaultState(),V=-1,G=null,L.pop(),L.length>0?(C=L[L.length-1],we===!0&&Ce.setGlobalState(y.clippingPlanes,C.state.camera)):C=null,P.pop(),P.length>0?S=P[P.length-1]:S=null};function Qa(b,B,j,X){if(b.visible===!1)return;if(b.layers.test(B.layers)){if(b.isGroup)j=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(B);else if(b.isLight)C.pushLight(b),b.castShadow&&C.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||Be.intersectsSprite(b)){X&&ee.setFromMatrixPosition(b.matrixWorld).applyMatrix4(ct);const Ee=de.update(b),xe=b.material;xe.visible&&S.push(b,Ee,xe,j,ee.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||Be.intersectsObject(b))){const Ee=de.update(b),xe=b.material;if(X&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),ee.copy(b.boundingSphere.center)):(Ee.boundingSphere===null&&Ee.computeBoundingSphere(),ee.copy(Ee.boundingSphere.center)),ee.applyMatrix4(b.matrixWorld).applyMatrix4(ct)),Array.isArray(xe)){const Te=Ee.groups;for(let Le=0,Ge=Te.length;Le<Ge;Le++){const Ue=Te[Le],Ze=xe[Ue.materialIndex];Ze&&Ze.visible&&S.push(b,Ee,Ze,j,ee.z,Ue)}}else xe.visible&&S.push(b,Ee,xe,j,ee.z,null)}}const ge=b.children;for(let Ee=0,xe=ge.length;Ee<xe;Ee++)Qa(ge[Ee],B,j,X)}l(Qa,"projectObject");function Lm(b,B,j,X){const{opaque:k,transmissive:ge,transparent:Ee}=b;C.setupLightsView(j),we===!0&&Ce.setGlobalState(y.clippingPlanes,j),X&&ue.viewport(H.copy(X)),k.length>0&&lo(k,B,j),ge.length>0&&lo(ge,B,j),Ee.length>0&&lo(Ee,B,j),ue.buffers.depth.setTest(!0),ue.buffers.depth.setMask(!0),ue.buffers.color.setMask(!0),ue.setPolygonOffset(!1)}l(Lm,"renderScene");function Im(b,B,j,X){if((j.isScene===!0?j.overrideMaterial:null)!==null)return;if(C.state.transmissionRenderTarget[X.id]===void 0){const Ze=be.has("EXT_color_buffer_half_float")||be.has("EXT_color_buffer_float");C.state.transmissionRenderTarget[X.id]=new _n(1,1,{generateMipmaps:!0,type:Ze?ni:rn,minFilter:Kn,samples:ke.samples,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:et.workingColorSpace})}const ge=C.state.transmissionRenderTarget[X.id],Ee=X.viewport||H;ge.setSize(Ee.z*y.transmissionResolutionScale,Ee.w*y.transmissionResolutionScale);const xe=y.getRenderTarget(),Te=y.getActiveCubeFace(),Le=y.getActiveMipmapLevel();y.setRenderTarget(ge),y.getClearColor(ae),ce=y.getClearAlpha(),ce<1&&y.setClearColor(16777215,.5),y.clear(),te&&pe.render(j);const Ge=y.toneMapping;y.toneMapping=Fn;const Ue=X.viewport;if(X.viewport!==void 0&&(X.viewport=void 0),C.setupLightsView(X),we===!0&&Ce.setGlobalState(y.clippingPlanes,X),lo(b,j,X),O.updateMultisampleRenderTarget(ge),O.updateRenderTargetMipmap(ge),be.has("WEBGL_multisampled_render_to_texture")===!1){let Ze=!1;for(let ut=0,St=B.length;ut<St;ut++){const Mt=B[ut],{object:dt,geometry:Fe,material:ot,group:it}=Mt;if(ot.side===wn&&dt.layers.test(X.layers)){const en=ot.side;ot.side=Jt,ot.needsUpdate=!0,Dm(dt,j,X,Fe,ot,it),ot.side=en,ot.needsUpdate=!0,Ze=!0}}Ze===!0&&(O.updateMultisampleRenderTarget(ge),O.updateRenderTargetMipmap(ge))}y.setRenderTarget(xe,Te,Le),y.setClearColor(ae,ce),Ue!==void 0&&(X.viewport=Ue),y.toneMapping=Ge}l(Im,"renderTransmissionPass");function lo(b,B,j){const X=B.isScene===!0?B.overrideMaterial:null;for(let k=0,ge=b.length;k<ge;k++){const Ee=b[k],{object:xe,geometry:Te,group:Le}=Ee;let Ge=Ee.material;Ge.allowOverride===!0&&X!==null&&(Ge=X),xe.layers.test(j.layers)&&Dm(xe,B,j,Te,Ge,Le)}}l(lo,"renderObjects");function Dm(b,B,j,X,k,ge){b.onBeforeRender(y,B,j,X,k,ge),b.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),k.onBeforeRender(y,B,j,X,b,ge),k.transparent===!0&&k.side===wn&&k.forceSinglePass===!1?(k.side=Jt,k.needsUpdate=!0,y.renderBufferDirect(j,B,X,k,b,ge),k.side=ti,k.needsUpdate=!0,y.renderBufferDirect(j,B,X,k,b,ge),k.side=wn):y.renderBufferDirect(j,B,X,k,b,ge),b.onAfterRender(y,B,j,X,k,ge)}l(Dm,"renderObject");function co(b,B,j){B.isScene!==!0&&(B=se);const X=x.get(b),k=C.state.lights,ge=C.state.shadowsArray,Ee=k.state.version,xe=Ae.getParameters(b,k.state,ge,B,j),Te=Ae.getProgramCacheKey(xe);let Le=X.programs;X.environment=b.isMeshStandardMaterial?B.environment:null,X.fog=B.fog,X.envMap=(b.isMeshStandardMaterial?Z:q).get(b.envMap||X.environment),X.envMapRotation=X.environment!==null&&b.envMap===null?B.environmentRotation:b.envMapRotation,Le===void 0&&(b.addEventListener("dispose",Pn),Le=new Map,X.programs=Le);let Ge=Le.get(Te);if(Ge!==void 0){if(X.currentProgram===Ge&&X.lightsStateVersion===Ee)return Om(b,xe),Ge}else xe.uniforms=Ae.getUniforms(b),b.onBeforeCompile(xe,y),Ge=Ae.acquireProgram(xe,Te),Le.set(Te,Ge),X.uniforms=xe.uniforms;const Ue=X.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Ue.clippingPlanes=Ce.uniform),Om(b,xe),X.needsLights=m0(b),X.lightsStateVersion=Ee,X.needsLights&&(Ue.ambientLightColor.value=k.state.ambient,Ue.lightProbe.value=k.state.probe,Ue.directionalLights.value=k.state.directional,Ue.directionalLightShadows.value=k.state.directionalShadow,Ue.spotLights.value=k.state.spot,Ue.spotLightShadows.value=k.state.spotShadow,Ue.rectAreaLights.value=k.state.rectArea,Ue.ltc_1.value=k.state.rectAreaLTC1,Ue.ltc_2.value=k.state.rectAreaLTC2,Ue.pointLights.value=k.state.point,Ue.pointLightShadows.value=k.state.pointShadow,Ue.hemisphereLights.value=k.state.hemi,Ue.directionalShadowMap.value=k.state.directionalShadowMap,Ue.directionalShadowMatrix.value=k.state.directionalShadowMatrix,Ue.spotShadowMap.value=k.state.spotShadowMap,Ue.spotLightMatrix.value=k.state.spotLightMatrix,Ue.spotLightMap.value=k.state.spotLightMap,Ue.pointShadowMap.value=k.state.pointShadowMap,Ue.pointShadowMatrix.value=k.state.pointShadowMatrix),X.currentProgram=Ge,X.uniformsList=null,Ge}l(co,"getProgram");function Nm(b){if(b.uniformsList===null){const B=b.currentProgram.getUniforms();b.uniformsList=Es.seqWithValue(B.seq,b.uniforms)}return b.uniformsList}l(Nm,"getUniformList");function Om(b,B){const j=x.get(b);j.outputColorSpace=B.outputColorSpace,j.batching=B.batching,j.batchingColor=B.batchingColor,j.instancing=B.instancing,j.instancingColor=B.instancingColor,j.instancingMorph=B.instancingMorph,j.skinning=B.skinning,j.morphTargets=B.morphTargets,j.morphNormals=B.morphNormals,j.morphColors=B.morphColors,j.morphTargetsCount=B.morphTargetsCount,j.numClippingPlanes=B.numClippingPlanes,j.numIntersection=B.numClipIntersection,j.vertexAlphas=B.vertexAlphas,j.vertexTangents=B.vertexTangents,j.toneMapping=B.toneMapping}l(Om,"updateCommonMaterialProperties");function f0(b,B,j,X,k){B.isScene!==!0&&(B=se),O.resetTextureUnits();const ge=B.fog,Ee=X.isMeshStandardMaterial?B.environment:null,xe=D===null?y.outputColorSpace:D.isXRRenderTarget===!0?D.texture.colorSpace:qt,Te=(X.isMeshStandardMaterial?Z:q).get(X.envMap||Ee),Le=X.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,Ge=!!j.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),Ue=!!j.morphAttributes.position,Ze=!!j.morphAttributes.normal,ut=!!j.morphAttributes.color;let St=Fn;X.toneMapped&&(D===null||D.isXRRenderTarget===!0)&&(St=y.toneMapping);const Mt=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,dt=Mt!==void 0?Mt.length:0,Fe=x.get(X),ot=C.state.lights;if(we===!0&&(tt===!0||b!==G)){const Wt=b===G&&X.id===V;Ce.setState(X,b,Wt)}let it=!1;X.version===Fe.__version?(Fe.needsLights&&Fe.lightsStateVersion!==ot.state.version||Fe.outputColorSpace!==xe||k.isBatchedMesh&&Fe.batching===!1||!k.isBatchedMesh&&Fe.batching===!0||k.isBatchedMesh&&Fe.batchingColor===!0&&k.colorTexture===null||k.isBatchedMesh&&Fe.batchingColor===!1&&k.colorTexture!==null||k.isInstancedMesh&&Fe.instancing===!1||!k.isInstancedMesh&&Fe.instancing===!0||k.isSkinnedMesh&&Fe.skinning===!1||!k.isSkinnedMesh&&Fe.skinning===!0||k.isInstancedMesh&&Fe.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&Fe.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&Fe.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&Fe.instancingMorph===!1&&k.morphTexture!==null||Fe.envMap!==Te||X.fog===!0&&Fe.fog!==ge||Fe.numClippingPlanes!==void 0&&(Fe.numClippingPlanes!==Ce.numPlanes||Fe.numIntersection!==Ce.numIntersection)||Fe.vertexAlphas!==Le||Fe.vertexTangents!==Ge||Fe.morphTargets!==Ue||Fe.morphNormals!==Ze||Fe.morphColors!==ut||Fe.toneMapping!==St||Fe.morphTargetsCount!==dt)&&(it=!0):(it=!0,Fe.__version=X.version);let en=Fe.currentProgram;it===!0&&(en=co(X,B,k));let Zi=!1,tn=!1,ur=!1;const mt=en.getUniforms(),$t=Fe.uniforms;if(ue.useProgram(en.program)&&(Zi=!0,tn=!0,ur=!0),X.id!==V&&(V=X.id,tn=!0),Zi||G!==b){ue.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),mt.setValue(R,"projectionMatrix",b.projectionMatrix),mt.setValue(R,"viewMatrix",b.matrixWorldInverse);const Kt=mt.map.cameraPosition;Kt!==void 0&&Kt.setValue(R,je.setFromMatrixPosition(b.matrixWorld)),ke.logarithmicDepthBuffer&&mt.setValue(R,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&mt.setValue(R,"isOrthographic",b.isOrthographicCamera===!0),G!==b&&(G=b,tn=!0,ur=!0)}if(Fe.needsLights&&(ot.state.directionalShadowMap.length>0&&mt.setValue(R,"directionalShadowMap",ot.state.directionalShadowMap,O),ot.state.spotShadowMap.length>0&&mt.setValue(R,"spotShadowMap",ot.state.spotShadowMap,O),ot.state.pointShadowMap.length>0&&mt.setValue(R,"pointShadowMap",ot.state.pointShadowMap,O)),k.isSkinnedMesh){mt.setOptional(R,k,"bindMatrix"),mt.setOptional(R,k,"bindMatrixInverse");const Wt=k.skeleton;Wt&&(Wt.boneTexture===null&&Wt.computeBoneTexture(),mt.setValue(R,"boneTexture",Wt.boneTexture,O))}k.isBatchedMesh&&(mt.setOptional(R,k,"batchingTexture"),mt.setValue(R,"batchingTexture",k._matricesTexture,O),mt.setOptional(R,k,"batchingIdTexture"),mt.setValue(R,"batchingIdTexture",k._indirectTexture,O),mt.setOptional(R,k,"batchingColorTexture"),k._colorsTexture!==null&&mt.setValue(R,"batchingColorTexture",k._colorsTexture,O));const un=j.morphAttributes;if((un.position!==void 0||un.normal!==void 0||un.color!==void 0)&&Ke.update(k,j,en),(tn||Fe.receiveShadow!==k.receiveShadow)&&(Fe.receiveShadow=k.receiveShadow,mt.setValue(R,"receiveShadow",k.receiveShadow)),X.isMeshGouraudMaterial&&X.envMap!==null&&($t.envMap.value=Te,$t.flipEnvMap.value=Te.isCubeTexture&&Te.isRenderTargetTexture===!1?-1:1),X.isMeshStandardMaterial&&X.envMap===null&&B.environment!==null&&($t.envMapIntensity.value=B.environmentIntensity),$t.dfgLUT!==void 0&&($t.dfgLUT.value=YE()),tn&&(mt.setValue(R,"toneMappingExposure",y.toneMappingExposure),Fe.needsLights&&p0($t,ur),ge&&X.fog===!0&&ze.refreshFogUniforms($t,ge),ze.refreshMaterialUniforms($t,X,Ne,Ve,C.state.transmissionRenderTarget[b.id]),Es.upload(R,Nm(Fe),$t,O)),X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(Es.upload(R,Nm(Fe),$t,O),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&mt.setValue(R,"center",k.center),mt.setValue(R,"modelViewMatrix",k.modelViewMatrix),mt.setValue(R,"normalMatrix",k.normalMatrix),mt.setValue(R,"modelMatrix",k.matrixWorld),X.isShaderMaterial||X.isRawShaderMaterial){const Wt=X.uniformsGroups;for(let Kt=0,el=Wt.length;Kt<el;Kt++){const Ci=Wt[Kt];re.update(Ci,en),re.bind(Ci,en)}}return en}l(f0,"setProgram");function p0(b,B){b.ambientLightColor.needsUpdate=B,b.lightProbe.needsUpdate=B,b.directionalLights.needsUpdate=B,b.directionalLightShadows.needsUpdate=B,b.pointLights.needsUpdate=B,b.pointLightShadows.needsUpdate=B,b.spotLights.needsUpdate=B,b.spotLightShadows.needsUpdate=B,b.rectAreaLights.needsUpdate=B,b.hemisphereLights.needsUpdate=B}l(p0,"markUniformsLightsNeedsUpdate");function m0(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}l(m0,"materialNeedsLights"),this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return U},this.getRenderTarget=function(){return D},this.setRenderTargetTextures=function(b,B,j){const X=x.get(b);X.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,X.__autoAllocateDepthBuffer===!1&&(X.__useRenderToTexture=!1),x.get(b.texture).__webglTexture=B,x.get(b.depthTexture).__webglTexture=X.__autoAllocateDepthBuffer?void 0:j,X.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,B){const j=x.get(b);j.__webglFramebuffer=B,j.__useDefaultFramebuffer=B===void 0};const g0=R.createFramebuffer();this.setRenderTarget=function(b,B=0,j=0){D=b,w=B,U=j;let X=null,k=!1,ge=!1;if(b){const xe=x.get(b);if(xe.__useDefaultFramebuffer!==void 0){ue.bindFramebuffer(R.FRAMEBUFFER,xe.__webglFramebuffer),H.copy(b.viewport),z.copy(b.scissor),K=b.scissorTest,ue.viewport(H),ue.scissor(z),ue.setScissorTest(K),V=-1;return}else if(xe.__webglFramebuffer===void 0)O.setupRenderTarget(b);else if(xe.__hasExternalTextures)O.rebindTextures(b,x.get(b.texture).__webglTexture,x.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const Ge=b.depthTexture;if(xe.__boundDepthTexture!==Ge){if(Ge!==null&&x.has(Ge)&&(b.width!==Ge.image.width||b.height!==Ge.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");O.setupDepthRenderbuffer(b)}}const Te=b.texture;(Te.isData3DTexture||Te.isDataArrayTexture||Te.isCompressedArrayTexture)&&(ge=!0);const Le=x.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Le[B])?X=Le[B][j]:X=Le[B],k=!0):b.samples>0&&O.useMultisampledRTT(b)===!1?X=x.get(b).__webglMultisampledFramebuffer:Array.isArray(Le)?X=Le[j]:X=Le,H.copy(b.viewport),z.copy(b.scissor),K=b.scissorTest}else H.copy($).multiplyScalar(Ne).floor(),z.copy(ne).multiplyScalar(Ne).floor(),K=Me;if(j!==0&&(X=g0),ue.bindFramebuffer(R.FRAMEBUFFER,X)&&ue.drawBuffers(b,X),ue.viewport(H),ue.scissor(z),ue.setScissorTest(K),k){const xe=x.get(b.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_CUBE_MAP_POSITIVE_X+B,xe.__webglTexture,j)}else if(ge){const xe=B;for(let Te=0;Te<b.textures.length;Te++){const Le=x.get(b.textures[Te]);R.framebufferTextureLayer(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0+Te,Le.__webglTexture,j,xe)}}else if(b!==null&&j!==0){const xe=x.get(b.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,xe.__webglTexture,j)}V=-1},this.readRenderTargetPixels=function(b,B,j,X,k,ge,Ee,xe=0){if(!(b&&b.isWebGLRenderTarget)){He("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Te=x.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Ee!==void 0&&(Te=Te[Ee]),Te){ue.bindFramebuffer(R.FRAMEBUFFER,Te);try{const Le=b.textures[xe],Ge=Le.format,Ue=Le.type;if(!ke.textureFormatReadable(Ge)){He("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ke.textureTypeReadable(Ue)){He("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=b.width-X&&j>=0&&j<=b.height-k&&(b.textures.length>1&&R.readBuffer(R.COLOR_ATTACHMENT0+xe),R.readPixels(B,j,X,k,le.convert(Ge),le.convert(Ue),ge))}finally{const Le=D!==null?x.get(D).__webglFramebuffer:null;ue.bindFramebuffer(R.FRAMEBUFFER,Le)}}},this.readRenderTargetPixelsAsync=async function(b,B,j,X,k,ge,Ee,xe=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Te=x.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Ee!==void 0&&(Te=Te[Ee]),Te)if(B>=0&&B<=b.width-X&&j>=0&&j<=b.height-k){ue.bindFramebuffer(R.FRAMEBUFFER,Te);const Le=b.textures[xe],Ge=Le.format,Ue=Le.type;if(!ke.textureFormatReadable(Ge))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ke.textureTypeReadable(Ue))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ze=R.createBuffer();R.bindBuffer(R.PIXEL_PACK_BUFFER,Ze),R.bufferData(R.PIXEL_PACK_BUFFER,ge.byteLength,R.STREAM_READ),b.textures.length>1&&R.readBuffer(R.COLOR_ATTACHMENT0+xe),R.readPixels(B,j,X,k,le.convert(Ge),le.convert(Ue),0);const ut=D!==null?x.get(D).__webglFramebuffer:null;ue.bindFramebuffer(R.FRAMEBUFFER,ut);const St=R.fenceSync(R.SYNC_GPU_COMMANDS_COMPLETE,0);return R.flush(),await Ov(R,St,4),R.bindBuffer(R.PIXEL_PACK_BUFFER,Ze),R.getBufferSubData(R.PIXEL_PACK_BUFFER,0,ge),R.deleteBuffer(Ze),R.deleteSync(St),ge}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,B=null,j=0){const X=Math.pow(2,-j),k=Math.floor(b.image.width*X),ge=Math.floor(b.image.height*X),Ee=B!==null?B.x:0,xe=B!==null?B.y:0;O.setTexture2D(b,0),R.copyTexSubImage2D(R.TEXTURE_2D,j,0,0,Ee,xe,k,ge),ue.unbindTexture()};const _0=R.createFramebuffer(),v0=R.createFramebuffer();this.copyTextureToTexture=function(b,B,j=null,X=null,k=0,ge=null){ge===null&&(k!==0?(Wr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ge=k,k=0):ge=0);let Ee,xe,Te,Le,Ge,Ue,Ze,ut,St;const Mt=b.isCompressedTexture?b.mipmaps[ge]:b.image;if(j!==null)Ee=j.max.x-j.min.x,xe=j.max.y-j.min.y,Te=j.isBox3?j.max.z-j.min.z:1,Le=j.min.x,Ge=j.min.y,Ue=j.isBox3?j.min.z:0;else{const un=Math.pow(2,-k);Ee=Math.floor(Mt.width*un),xe=Math.floor(Mt.height*un),b.isDataArrayTexture?Te=Mt.depth:b.isData3DTexture?Te=Math.floor(Mt.depth*un):Te=1,Le=0,Ge=0,Ue=0}X!==null?(Ze=X.x,ut=X.y,St=X.z):(Ze=0,ut=0,St=0);const dt=le.convert(B.format),Fe=le.convert(B.type);let ot;B.isData3DTexture?(O.setTexture3D(B,0),ot=R.TEXTURE_3D):B.isDataArrayTexture||B.isCompressedArrayTexture?(O.setTexture2DArray(B,0),ot=R.TEXTURE_2D_ARRAY):(O.setTexture2D(B,0),ot=R.TEXTURE_2D),R.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,B.flipY),R.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),R.pixelStorei(R.UNPACK_ALIGNMENT,B.unpackAlignment);const it=R.getParameter(R.UNPACK_ROW_LENGTH),en=R.getParameter(R.UNPACK_IMAGE_HEIGHT),Zi=R.getParameter(R.UNPACK_SKIP_PIXELS),tn=R.getParameter(R.UNPACK_SKIP_ROWS),ur=R.getParameter(R.UNPACK_SKIP_IMAGES);R.pixelStorei(R.UNPACK_ROW_LENGTH,Mt.width),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,Mt.height),R.pixelStorei(R.UNPACK_SKIP_PIXELS,Le),R.pixelStorei(R.UNPACK_SKIP_ROWS,Ge),R.pixelStorei(R.UNPACK_SKIP_IMAGES,Ue);const mt=b.isDataArrayTexture||b.isData3DTexture,$t=B.isDataArrayTexture||B.isData3DTexture;if(b.isDepthTexture){const un=x.get(b),Wt=x.get(B),Kt=x.get(un.__renderTarget),el=x.get(Wt.__renderTarget);ue.bindFramebuffer(R.READ_FRAMEBUFFER,Kt.__webglFramebuffer),ue.bindFramebuffer(R.DRAW_FRAMEBUFFER,el.__webglFramebuffer);for(let Ci=0;Ci<Te;Ci++)mt&&(R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,x.get(b).__webglTexture,k,Ue+Ci),R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,x.get(B).__webglTexture,ge,St+Ci)),R.blitFramebuffer(Le,Ge,Ee,xe,Ze,ut,Ee,xe,R.DEPTH_BUFFER_BIT,R.NEAREST);ue.bindFramebuffer(R.READ_FRAMEBUFFER,null),ue.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else if(k!==0||b.isRenderTargetTexture||x.has(b)){const un=x.get(b),Wt=x.get(B);ue.bindFramebuffer(R.READ_FRAMEBUFFER,_0),ue.bindFramebuffer(R.DRAW_FRAMEBUFFER,v0);for(let Kt=0;Kt<Te;Kt++)mt?R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,un.__webglTexture,k,Ue+Kt):R.framebufferTexture2D(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,un.__webglTexture,k),$t?R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,Wt.__webglTexture,ge,St+Kt):R.framebufferTexture2D(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,Wt.__webglTexture,ge),k!==0?R.blitFramebuffer(Le,Ge,Ee,xe,Ze,ut,Ee,xe,R.COLOR_BUFFER_BIT,R.NEAREST):$t?R.copyTexSubImage3D(ot,ge,Ze,ut,St+Kt,Le,Ge,Ee,xe):R.copyTexSubImage2D(ot,ge,Ze,ut,Le,Ge,Ee,xe);ue.bindFramebuffer(R.READ_FRAMEBUFFER,null),ue.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else $t?b.isDataTexture||b.isData3DTexture?R.texSubImage3D(ot,ge,Ze,ut,St,Ee,xe,Te,dt,Fe,Mt.data):B.isCompressedArrayTexture?R.compressedTexSubImage3D(ot,ge,Ze,ut,St,Ee,xe,Te,dt,Mt.data):R.texSubImage3D(ot,ge,Ze,ut,St,Ee,xe,Te,dt,Fe,Mt):b.isDataTexture?R.texSubImage2D(R.TEXTURE_2D,ge,Ze,ut,Ee,xe,dt,Fe,Mt.data):b.isCompressedTexture?R.compressedTexSubImage2D(R.TEXTURE_2D,ge,Ze,ut,Mt.width,Mt.height,dt,Mt.data):R.texSubImage2D(R.TEXTURE_2D,ge,Ze,ut,Ee,xe,dt,Fe,Mt);R.pixelStorei(R.UNPACK_ROW_LENGTH,it),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,en),R.pixelStorei(R.UNPACK_SKIP_PIXELS,Zi),R.pixelStorei(R.UNPACK_SKIP_ROWS,tn),R.pixelStorei(R.UNPACK_SKIP_IMAGES,ur),ge===0&&B.generateMipmaps&&R.generateMipmap(ot),ue.unbindTexture()},this.initRenderTarget=function(b){x.get(b).__webglFramebuffer===void 0&&O.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?O.setTextureCube(b,0):b.isData3DTexture?O.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?O.setTexture2DArray(b,0):O.setTexture2D(b,0),ue.unbindTexture()},this.resetState=function(){w=0,U=0,D=null,ue.reset(),Se.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Un}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=et._getDrawingBufferColorSpace(e),t.unpackColorSpace=et._getUnpackColorSpace()}};l(Pp,"WebGLRenderer");let Hu=Pp;var gi=Object.freeze({Linear:Object.freeze({None:l(function(s){return s},"None"),In:l(function(s){return s},"In"),Out:l(function(s){return s},"Out"),InOut:l(function(s){return s},"InOut")}),Quadratic:Object.freeze({In:l(function(s){return s*s},"In"),Out:l(function(s){return s*(2-s)},"Out"),InOut:l(function(s){return(s*=2)<1?.5*s*s:-.5*(--s*(s-2)-1)},"InOut")}),Cubic:Object.freeze({In:l(function(s){return s*s*s},"In"),Out:l(function(s){return--s*s*s+1},"Out"),InOut:l(function(s){return(s*=2)<1?.5*s*s*s:.5*((s-=2)*s*s+2)},"InOut")}),Quartic:Object.freeze({In:l(function(s){return s*s*s*s},"In"),Out:l(function(s){return 1- --s*s*s*s},"Out"),InOut:l(function(s){return(s*=2)<1?.5*s*s*s*s:-.5*((s-=2)*s*s*s-2)},"InOut")}),Quintic:Object.freeze({In:l(function(s){return s*s*s*s*s},"In"),Out:l(function(s){return--s*s*s*s*s+1},"Out"),InOut:l(function(s){return(s*=2)<1?.5*s*s*s*s*s:.5*((s-=2)*s*s*s*s+2)},"InOut")}),Sinusoidal:Object.freeze({In:l(function(s){return 1-Math.sin((1-s)*Math.PI/2)},"In"),Out:l(function(s){return Math.sin(s*Math.PI/2)},"Out"),InOut:l(function(s){return .5*(1-Math.sin(Math.PI*(.5-s)))},"InOut")}),Exponential:Object.freeze({In:l(function(s){return s===0?0:Math.pow(1024,s-1)},"In"),Out:l(function(s){return s===1?1:1-Math.pow(2,-10*s)},"Out"),InOut:l(function(s){return s===0?0:s===1?1:(s*=2)<1?.5*Math.pow(1024,s-1):.5*(-Math.pow(2,-10*(s-1))+2)},"InOut")}),Circular:Object.freeze({In:l(function(s){return 1-Math.sqrt(1-s*s)},"In"),Out:l(function(s){return Math.sqrt(1- --s*s)},"Out"),InOut:l(function(s){return(s*=2)<1?-.5*(Math.sqrt(1-s*s)-1):.5*(Math.sqrt(1-(s-=2)*s)+1)},"InOut")}),Elastic:Object.freeze({In:l(function(s){return s===0?0:s===1?1:-Math.pow(2,10*(s-1))*Math.sin((s-1.1)*5*Math.PI)},"In"),Out:l(function(s){return s===0?0:s===1?1:Math.pow(2,-10*s)*Math.sin((s-.1)*5*Math.PI)+1},"Out"),InOut:l(function(s){return s===0?0:s===1?1:(s*=2,s<1?-.5*Math.pow(2,10*(s-1))*Math.sin((s-1.1)*5*Math.PI):.5*Math.pow(2,-10*(s-1))*Math.sin((s-1.1)*5*Math.PI)+1)},"InOut")}),Back:Object.freeze({In:l(function(s){var e=1.70158;return s===1?1:s*s*((e+1)*s-e)},"In"),Out:l(function(s){var e=1.70158;return s===0?0:--s*s*((e+1)*s+e)+1},"Out"),InOut:l(function(s){var e=2.5949095;return(s*=2)<1?.5*(s*s*((e+1)*s-e)):.5*((s-=2)*s*((e+1)*s+e)+2)},"InOut")}),Bounce:Object.freeze({In:l(function(s){return 1-gi.Bounce.Out(1-s)},"In"),Out:l(function(s){return s<1/2.75?7.5625*s*s:s<2/2.75?7.5625*(s-=1.5/2.75)*s+.75:s<2.5/2.75?7.5625*(s-=2.25/2.75)*s+.9375:7.5625*(s-=2.625/2.75)*s+.984375},"Out"),InOut:l(function(s){return s<.5?gi.Bounce.In(s*2)*.5:gi.Bounce.Out(s*2-1)*.5+.5},"InOut")}),generatePow:l(function(s){return s===void 0&&(s=4),s=s<Number.EPSILON?Number.EPSILON:s,s=s>1e4?1e4:s,{In:l(function(e){return Math.pow(e,s)},"In"),Out:l(function(e){return 1-Math.pow(1-e,s)},"Out"),InOut:l(function(e){return e<.5?Math.pow(e*2,s)/2:(1-Math.pow(2-e*2,s))/2+.5},"InOut")}},"generatePow")}),Ar=l(function(){return performance.now()},"now"),Q_=(function(){function s(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this._tweens={},this._tweensAddedDuringUpdate={},this.add.apply(this,e)}return l(s,"Group"),s.prototype.getAll=function(){var e=this;return Object.keys(this._tweens).map(function(t){return e._tweens[t]})},s.prototype.removeAll=function(){this._tweens={}},s.prototype.add=function(){for(var e,t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];for(var i=0,r=t;i<r.length;i++){var o=r[i];(e=o._group)===null||e===void 0||e.remove(o),o._group=this,this._tweens[o.getId()]=o,this._tweensAddedDuringUpdate[o.getId()]=o}},s.prototype.remove=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];for(var n=0,i=e;n<i.length;n++){var r=i[n];r._group=void 0,delete this._tweens[r.getId()],delete this._tweensAddedDuringUpdate[r.getId()]}},s.prototype.allStopped=function(){return this.getAll().every(function(e){return!e.isPlaying()})},s.prototype.update=function(e,t){e===void 0&&(e=Ar()),t===void 0&&(t=!0);var n=Object.keys(this._tweens);if(n.length!==0)for(;n.length>0;){this._tweensAddedDuringUpdate={};for(var i=0;i<n.length;i++){var r=this._tweens[n[i]],o=!t;r&&r.update(e,o)===!1&&!t&&this.remove(r)}n=Object.keys(this._tweensAddedDuringUpdate)}},s})(),Vu={Linear:l(function(s,e){var t=s.length-1,n=t*e,i=Math.floor(n),r=Vu.Utils.Linear;return e<0?r(s[0],s[1],n):e>1?r(s[t],s[t-1],t-n):r(s[i],s[i+1>t?t:i+1],n-i)},"Linear"),Utils:{Linear:l(function(s,e,t){return(e-s)*t+s},"Linear")}},e0=(function(){function s(){}return l(s,"Sequence"),s.nextId=function(){return s._nextId++},s._nextId=0,s})(),Gu=new Q_,Fl=(function(){function s(e,t){this._isPaused=!1,this._pauseStart=0,this._valuesStart={},this._valuesEnd={},this._valuesStartRepeat={},this._duration=1e3,this._isDynamic=!1,this._initialRepeat=0,this._repeat=0,this._yoyo=!1,this._isPlaying=!1,this._reversed=!1,this._delayTime=0,this._startTime=0,this._easingFunction=gi.Linear.None,this._interpolationFunction=Vu.Linear,this._chainedTweens=[],this._onStartCallbackFired=!1,this._onEveryStartCallbackFired=!1,this._id=e0.nextId(),this._isChainStopped=!1,this._propertiesAreSetUp=!1,this._goToEnd=!1,this._object=e,typeof t=="object"?(this._group=t,t.add(this)):t===!0&&(this._group=Gu,Gu.add(this))}return l(s,"Tween"),s.prototype.getId=function(){return this._id},s.prototype.isPlaying=function(){return this._isPlaying},s.prototype.isPaused=function(){return this._isPaused},s.prototype.getDuration=function(){return this._duration},s.prototype.to=function(e,t){if(t===void 0&&(t=1e3),this._isPlaying)throw new Error("Can not call Tween.to() while Tween is already started or paused. Stop the Tween first.");return this._valuesEnd=e,this._propertiesAreSetUp=!1,this._duration=t<0?0:t,this},s.prototype.duration=function(e){return e===void 0&&(e=1e3),this._duration=e<0?0:e,this},s.prototype.dynamic=function(e){return e===void 0&&(e=!1),this._isDynamic=e,this},s.prototype.start=function(e,t){if(e===void 0&&(e=Ar()),t===void 0&&(t=!1),this._isPlaying)return this;if(this._repeat=this._initialRepeat,this._reversed){this._reversed=!1;for(var n in this._valuesStartRepeat)this._swapEndStartRepeatValues(n),this._valuesStart[n]=this._valuesStartRepeat[n]}if(this._isPlaying=!0,this._isPaused=!1,this._onStartCallbackFired=!1,this._onEveryStartCallbackFired=!1,this._isChainStopped=!1,this._startTime=e,this._startTime+=this._delayTime,!this._propertiesAreSetUp||t){if(this._propertiesAreSetUp=!0,!this._isDynamic){var i={};for(var r in this._valuesEnd)i[r]=this._valuesEnd[r];this._valuesEnd=i}this._setupProperties(this._object,this._valuesStart,this._valuesEnd,this._valuesStartRepeat,t)}return this},s.prototype.startFromCurrentValues=function(e){return this.start(e,!0)},s.prototype._setupProperties=function(e,t,n,i,r){for(var o in n){var a=e[o],c=Array.isArray(a),u=c?"array":typeof a,h=!c&&Array.isArray(n[o]);if(!(u==="undefined"||u==="function")){if(h){var d=n[o];if(d.length===0)continue;for(var f=[a],p=0,_=d.length;p<_;p+=1){var v=this._handleRelativeValue(a,d[p]);if(isNaN(v)){h=!1,console.warn("Found invalid interpolation list. Skipping.");break}f.push(v)}h&&(n[o]=f)}if((u==="object"||c)&&a&&!h){t[o]=c?[]:{};var g=a;for(var m in g)t[o][m]=g[m];i[o]=c?[]:{};var d=n[o];if(!this._isDynamic){var T={};for(var m in d)T[m]=d[m];n[o]=d=T}this._setupProperties(g,t[o],d,i[o],r)}else(typeof t[o]>"u"||r)&&(t[o]=a),c||(t[o]*=1),h?i[o]=n[o].slice().reverse():i[o]=t[o]||0}}},s.prototype.stop=function(){return this._isChainStopped||(this._isChainStopped=!0,this.stopChainedTweens()),this._isPlaying?(this._isPlaying=!1,this._isPaused=!1,this._onStopCallback&&this._onStopCallback(this._object),this):this},s.prototype.end=function(){return this._goToEnd=!0,this.update(this._startTime+this._duration),this},s.prototype.pause=function(e){return e===void 0&&(e=Ar()),this._isPaused||!this._isPlaying?this:(this._isPaused=!0,this._pauseStart=e,this)},s.prototype.resume=function(e){return e===void 0&&(e=Ar()),!this._isPaused||!this._isPlaying?this:(this._isPaused=!1,this._startTime+=e-this._pauseStart,this._pauseStart=0,this)},s.prototype.stopChainedTweens=function(){for(var e=0,t=this._chainedTweens.length;e<t;e++)this._chainedTweens[e].stop();return this},s.prototype.group=function(e){return e?(e.add(this),this):(console.warn("tween.group() without args has been removed, use group.add(tween) instead."),this)},s.prototype.remove=function(){var e;return(e=this._group)===null||e===void 0||e.remove(this),this},s.prototype.delay=function(e){return e===void 0&&(e=0),this._delayTime=e,this},s.prototype.repeat=function(e){return e===void 0&&(e=0),this._initialRepeat=e,this._repeat=e,this},s.prototype.repeatDelay=function(e){return this._repeatDelayTime=e,this},s.prototype.yoyo=function(e){return e===void 0&&(e=!1),this._yoyo=e,this},s.prototype.easing=function(e){return e===void 0&&(e=gi.Linear.None),this._easingFunction=e,this},s.prototype.interpolation=function(e){return e===void 0&&(e=Vu.Linear),this._interpolationFunction=e,this},s.prototype.chain=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return this._chainedTweens=e,this},s.prototype.onStart=function(e){return this._onStartCallback=e,this},s.prototype.onEveryStart=function(e){return this._onEveryStartCallback=e,this},s.prototype.onUpdate=function(e){return this._onUpdateCallback=e,this},s.prototype.onRepeat=function(e){return this._onRepeatCallback=e,this},s.prototype.onComplete=function(e){return this._onCompleteCallback=e,this},s.prototype.onStop=function(e){return this._onStopCallback=e,this},s.prototype.update=function(e,t){var n=this,i;if(e===void 0&&(e=Ar()),t===void 0&&(t=s.autoStartOnUpdate),this._isPaused)return!0;var r;if(!this._goToEnd&&!this._isPlaying)if(t)this.start(e,!0);else return!1;if(this._goToEnd=!1,e<this._startTime)return!0;this._onStartCallbackFired===!1&&(this._onStartCallback&&this._onStartCallback(this._object),this._onStartCallbackFired=!0),this._onEveryStartCallbackFired===!1&&(this._onEveryStartCallback&&this._onEveryStartCallback(this._object),this._onEveryStartCallbackFired=!0);var o=e-this._startTime,a=this._duration+((i=this._repeatDelayTime)!==null&&i!==void 0?i:this._delayTime),c=this._duration+this._repeat*a,u=l(function(){if(n._duration===0||o>c)return 1;var v=Math.trunc(o/a),g=o-v*a,m=Math.min(g/n._duration,1);return m===0&&o===n._duration?1:m},"calculateElapsedPortion"),h=u(),d=this._easingFunction(h);if(this._updateProperties(this._object,this._valuesStart,this._valuesEnd,d),this._onUpdateCallback&&this._onUpdateCallback(this._object,h),this._duration===0||o>=this._duration)if(this._repeat>0){var f=Math.min(Math.trunc((o-this._duration)/a)+1,this._repeat);isFinite(this._repeat)&&(this._repeat-=f);for(r in this._valuesStartRepeat)!this._yoyo&&typeof this._valuesEnd[r]=="string"&&(this._valuesStartRepeat[r]=this._valuesStartRepeat[r]+parseFloat(this._valuesEnd[r])),this._yoyo&&this._swapEndStartRepeatValues(r),this._valuesStart[r]=this._valuesStartRepeat[r];return this._yoyo&&(this._reversed=!this._reversed),this._startTime+=a*f,this._onRepeatCallback&&this._onRepeatCallback(this._object),this._onEveryStartCallbackFired=!1,!0}else{this._onCompleteCallback&&this._onCompleteCallback(this._object);for(var p=0,_=this._chainedTweens.length;p<_;p++)this._chainedTweens[p].start(this._startTime+this._duration,!1);return this._isPlaying=!1,!1}return!0},s.prototype._updateProperties=function(e,t,n,i){for(var r in n)if(t[r]!==void 0){var o=t[r]||0,a=n[r],c=Array.isArray(e[r]),u=Array.isArray(a),h=!c&&u;h?e[r]=this._interpolationFunction(a,i):typeof a=="object"&&a?this._updateProperties(e[r],o,a,i):(a=this._handleRelativeValue(o,a),typeof a=="number"&&(e[r]=o+(a-o)*i))}},s.prototype._handleRelativeValue=function(e,t){return typeof t!="string"?t:t.charAt(0)==="+"||t.charAt(0)==="-"?e+parseFloat(t):parseFloat(t)},s.prototype._swapEndStartRepeatValues=function(e){var t=this._valuesStartRepeat[e],n=this._valuesEnd[e];typeof n=="string"?this._valuesStartRepeat[e]=this._valuesStartRepeat[e]+parseFloat(n):this._valuesStartRepeat[e]=this._valuesEnd[e],this._valuesEnd[e]=t},s.autoStartOnUpdate=!1,s})();e0.nextId;var zn=Gu;zn.getAll.bind(zn);zn.removeAll.bind(zn);zn.add.bind(zn);zn.remove.bind(zn);zn.update.bind(zn);const Lp=class Lp{constructor(){this.tweenGroup=new Q_}update(){this.tweenGroup.update()}animateObjectToTarget(e,t,n,i={duration:1e3}){const r=[];if(t){const o=new Fl(e.position).to(t);r.push(o)}if(n){const o=new Fl(e.quaternion).to(n);r.push(o)}r.forEach(o=>{i?.duration&&o.duration(i?.duration),i?.easing&&o.easing(i?.easing),o.start()}),this.tweenGroup.add(...r)}createTween(e,t,n){const i=new Fl(e).to(t);return n?.duration&&i.duration(n.duration),n?.easing&&i.easing(n.easing),this.tweenGroup.add(i),i}removeTween(e){this.tweenGroup.remove(e)}};l(Lp,"ThreeAnimator");let Wu=Lp;var Ea=l(function(s,e,t,n){var i=this;this.object=s,this.trackballRadius=e,this.camera=t,this.domElement=n!==void 0?n:document,this.enabled=!0,this.rotateSensitivity=1,this.relativelySpinOffTrackball=!0,this.enableDamping=!0,this.dampingFactor=5,this.spinAxisConstraint,this.POINTER_SPHERE_MAPPING={SHOEMAKE:"shoemake",HOLROYD:"holroyd",AZIMUTHAL:"azimuthal",RAYCAST:"raycast"},this.offTrackBallVelocityGainMap={shoemake:20,holroyd:8,azimuthal:8,raycast:20},this._pointerMapping=this.POINTER_SPHERE_MAPPING.RAYCAST,this._offTrackBallVelocityGain=this.offTrackBallVelocityGainMap[this._pointerMapping],this._pointerUpVelDamping=2e3,this.screen={left:0,top:0,width:0,height:0};var r=new I(0,0,0),o=new At,a,c=new I,u=new oe,h=new I,d=0,f=!1,p=!1,_=1e-6,v={type:"change"},g={type:"start"},m={type:"end"};this.update=(function(){var w,U=performance.now()/1e3,D;return l(function(){w=performance.now()/1e3,D=w-U,U=w,i.enableDamping&&(r.multiplyScalar(1/(D*i.dampingFactor+1)),i.applyVelocity()),i.enableDamping||(a=performance.now()),i.hasPointerMovedThisFrame=!1},"update")})(),this.updateAngularVelocity=(function(){var w=new At,U=new At,D=new At;return l(function(G,H,z){D.set(H.x,H.y,H.z,0),D.normalize(),D.conjugate(),U.set(G.x,G.y,G.z,0).multiply(D),z*=2,w.set(H.x,H.y,H.z,1);var K=U.angleTo(w)/z;r.crossVectors(H,G),r.setLength(K),i.applyVelocity()},"updateAngularVelocity")})(),this.applyVelocity=(function(){var w=new At,U=new I,D,V,G;return l(function(){G=performance.now(),V=(G-a)/1e3,a=G,i.spinAxisConstraint?(U.copy(i.spinAxisConstraint),D=U.dot(r)):(U.copy(r),D=r.length()),D&&V&&(U.normalize(),w.setFromAxisAngle(U,D*V*i.rotateSensitivity),i.object.quaternion.normalize(),i.object.quaternion.premultiply(w),8*(1-o.dot(i.object.quaternion))>_&&(i.dispatchEvent(v),o.copy(i.object.quaternion)))},"applyVelocity")})(),this.onWindowResize=function(){if(i.domElement===document)i.screen.left=0,i.screen.top=0,i.screen.width=window.innerWidth,i.screen.height=window.innerHeight;else{var w=i.domElement.getBoundingClientRect(),U=i.domElement.ownerDocument.documentElement;i.screen.left=w.left+window.pageXOffset-U.clientLeft,i.screen.top=w.top+window.pageYOffset-U.clientTop,i.screen.width=w.width,i.screen.height=w.height}},this.resetInputAfterCameraMovement=function(){p&&(i.camera.updateWorldMatrix(!0,!1),i.camera.matrixWorldInverse.copy(i.camera.matrixWorld).invert(),c.copy(S(T(u.x,u.y))))};var T=(function(){var w=new oe;return l(function(D,V){return w.set((D-i.screen.width*.5-i.screen.left)/(i.screen.width*.5),(i.screen.height+2*(i.screen.top-V))/i.screen.height),w},"getPointerInNdc")})();this.getPointerInNdc=T;var M=(function(){var w=new I,U=new I,D=new I,V=new oe,G=new At;return l(function(z){i.object.updateWorldMatrix(!0,!1),w.setFromMatrixPosition(i.object.matrixWorld),i.camera.updateWorldMatrix(!0,!1),i.camera.matrixWorldInverse.copy(i.camera.matrixWorld).invert(),w.project(i.camera),V.set(w.x,w.y),V.subVectors(z,V),U.setFromMatrixPosition(i.object.matrixWorld),D.set(i.trackballRadius,0,0),D.applyQuaternion(G.setFromRotationMatrix(i.camera.matrixWorld)),U.add(D),U.project(i.camera),U.z=0,w.z=0;var K=U.distanceTo(w);return V.x/=K,V.y/=K,i.camera.aspect&&(V.y/=i.camera.aspect),V},"getObjectToPointer")})(),S=(function(){var w=new I,U=new I,D=new oe,V=new At,G=new an,H=new _i;return l(function(K){if(D.copy(M(K)),V.setFromRotationMatrix(i.camera.matrixWorld),i._pointerMapping===i.POINTER_SPHERE_MAPPING.RAYCAST)D.lengthSq()<1?(U.setFromMatrixPosition(i.object.matrixWorld),G.set(U,i.trackballRadius),H.origin.copy(i.camera.position),H.direction.set(K.x,K.y,.5),H.direction.unproject(i.camera),H.direction.sub(i.camera.position).normalize(),H.intersectSphere(G,w),w.sub(U),w.normalize()):(D.normalize(),w.set(D.x,D.y,0),w.applyQuaternion(V));else if(i._pointerMapping===i.POINTER_SPHERE_MAPPING.HOLROYD){var ae=D.lengthSq();ae<.5?w.set(D.x,D.y,Math.sqrt(1-ae)):(w.set(D.x,D.y,1/(2*Math.sqrt(ae))),w.normalize()),w.applyQuaternion(V)}else if(i._pointerMapping===i.POINTER_SPHERE_MAPPING.SHOEMAKE){var ae=D.lengthSq();ae<1?w.set(D.x,D.y,Math.sqrt(1-ae)):(D.normalize(),w.set(D.x,D.y,0)),w.applyQuaternion(V)}else if(i._pointerMapping===i.POINTER_SPHERE_MAPPING.AZIMUTHAL){var ae=Math.PI/2*D.length(),ce=ae<Number.EPSILON?1:Math.sin(ae)/ae;D.multiplyScalar(Math.PI/2*ce),w.set(D.x,D.y,Math.cos(ae)),w.applyQuaternion(V)}return w},"getPointerInSphere")})();this.onPointerDown=function(w,U,D){var V=T(w,U),G=M(V);G.lengthSq()<1?(f=!0,c.copy(S(V))):f=!1,u.set(w,U),d=D,p=!0},this.onPointerMove=(function(){var w=new I,U=new oe,D=new oe,V=new oe,G=new I,H=new I,z=new I,K=new I;return l(function(ce,he,Ve){var Ne=(Ve-d)/1e3;if(d=Ve,h.copy(c),w.copy(T(ce,he)),U.copy(M(w)),U.lengthSq()<1||!this.relativelySpinOffTrackball)c.copy(S(w)),f?Ne>0&&i.updateAngularVelocity(c,h,Ne):a=Ve,f=!0;else{if(f)a=Ve;else if(Ne>0){V.copy(T(u.x,u.y)),D.subVectors(w,V),G.setFromMatrixPosition(i.object.matrixWorld),i.camera.isPerspectiveCamera?H.copy(i.camera.position).sub(G):(i.camera.getWorldDirection(H),H.negate()),c.copy(S(w)),r.crossVectors(H,c);var nt;i.camera.isPerspectiveCamera?nt=2/i.camera.fov/Math.atan(i.trackballRadius/H.length()):nt=i.trackballRadius/((i.camera.top-i.camera.bottom)/i.camera.zoom*2),U.normalize();var st=D.dot(U)*nt/Ne;r.setLength(st*i._offTrackBallVelocityGain),K.copy(S(V));var $=K.angleTo(c)/Ne;z.crossVectors(K,c),z.setLength($),r.add(z),i.applyVelocity()}f=!1}u.set(ce,he),i.hasPointerMovedThisFrame=!0},"onPointerMove")})(),this.setPointerToSphereMapping=function(w){i._pointerMapping=w,i._offTrackBallVelocityGain=i.offTrackBallVelocityGainMap[i._pointerMapping]},this.handlePointerDown=function(w){w.preventDefault(),i.domElement.focus?i.domElement.focus():window.focus(),i.dispatchEvent(g)},this.handlePointerUp=function(w){if(w.preventDefault(),!i.hasPointerMovedThisFrame){var U=(w.timeStamp-d)/1e3;r.multiplyScalar(1/(i._pointerUpVelDamping*Math.pow(U,2)+i.dampingFactor*U+1))}p=!1,i.dispatchEvent(m)};function C(w){i.enabled===!1||w.button!==0||(i.onPointerDown(w.pageX,w.pageY,w.timeStamp),document.addEventListener("mousemove",P,!1),document.addEventListener("mouseup",L,!1),i.handlePointerDown(w))}l(C,"onMouseDown");function P(w){i.enabled!==!1&&(w.preventDefault(),i.onPointerMove(w.pageX,w.pageY,w.timeStamp))}l(P,"onMouseMove");function L(w){i.enabled!==!1&&(document.removeEventListener("mousemove",P),document.removeEventListener("mouseup",L),i.handlePointerUp(w))}l(L,"onMouseUp"),this.cancelSpin=function(){r.set(0,0,0)},this.handleTouchStart=function(w){i.onPointerDown(w.pageX,w.pageY,w.timeStamp),i.applyVelocity()};function F(w){i.enabled!==!1&&(i.handleTouchStart(w),i.handlePointerDown(w))}l(F,"onTouchStart");function y(w){i.enabled===!1||!p||(w.preventDefault(),w.stopImmediatePropagation(),i.onPointerMove(w.touches[0].pageX,w.touches[0].pageY,w.timeStamp))}l(y,"onTouchMove");function E(w){i.enabled!==!1&&(i.handlePointerUp(w),w.touches.length>0&&(p=!0))}l(E,"onTouchEnd"),this.dispose=function(){i.domElement.removeEventListener("mousedown",C),document.removeEventListener("mousemove",P),document.removeEventListener("mouseup",L),i.domElement.removeEventListener("touchstart",F),i.domElement.removeEventListener("touchmove",y),i.domElement.removeEventListener("touchend",E)},i.domElement.addEventListener("mousedown",C),i.domElement.addEventListener("touchstart",F,{passive:!1}),i.domElement.addEventListener("touchmove",y,{passive:!1}),i.domElement.addEventListener("touchend",E,{passive:!1}),i.onWindowResize(),i.update()},"SpinControls");Ea.prototype=Object.create(si.prototype);Ea.prototype.constructor=Ea;const Ip=class Ip{constructor(e){this.defaultSpinControlsState={autoRotateAxis:new I(0,1,0),trackballRadius:100,spinAxisConstraint:void 0},this.autoRotateAxis=new I(0,1,0),this.autoRotateQuaternion=new At,this.autoRotateEnabled=!0;const t=e.getRenderer().domElement;this.camera=this.buildPerspectiveCamera(t),this.spinControls=this.buildSpinControls(t),this.defaultCameraState=this.camera.clone()}buildPerspectiveCamera(e){const t=e.parentElement,n=l(()=>t.offsetWidth/t.offsetHeight,"aspectRatio"),i=new Ft(36,n(),1,3e3);return i.position.set(0,0,400),window.addEventListener("resize",()=>{i.aspect=n(),i.updateProjectionMatrix();const r=this.defaultCameraState;r.aspect=n(),r.updateProjectionMatrix()}),i}buildSpinControls(e){const t=new bt,n=new Ea(t,0,this.getCamera(),e);return n.rotateSensitivity=.4,n.dampingFactor=10,n.relativelySpinOffTrackball=!0,window.addEventListener("resize",()=>n.onWindowResize()),n.addEventListener("start",()=>{this.autoRotateEnabled=!1}),n.addEventListener("end",()=>{this.autoRotateEnabled=!0}),n}setSpinControlsObject(e,t,n){this.spinControls.object=e,this.spinControls.trackballRadius=t,this.spinControls.spinAxisConstraint=n,this.defaultSpinControlsState.trackballRadius=t,this.defaultSpinControlsState.spinAxisConstraint=n}setRotationAxis(e){this.autoRotateAxis.copy(e),this.spinControls.spinAxisConstraint=e}resetSpinControls(){const{autoRotateAxis:e,trackballRadius:t,spinAxisConstraint:n}=this.defaultSpinControlsState;this.autoRotateAxis.copy(e),this.spinControls.trackballRadius=t,this.spinControls.spinAxisConstraint=n}autoRotate(e){this.autoRotateQuaternion.setFromAxisAngle(this.autoRotateAxis,e*-.1),this.spinControls.object.quaternion.premultiply(this.autoRotateQuaternion)}update(e){this.spinControls.update(),this.autoRotateEnabled&&this.autoRotate(e)}getCamera(){return this.camera}getSpinControls(){return this.spinControls}getDefaultCameraState(){return this.defaultCameraState}};l(Ip,"ThreeControls");let Xu=Ip;const r_=l((s,e)=>new I().subVectors(e,s).normalize(),"getDirectionBetweenVectors"),$E=l(s=>{const e=new I;return s.getWorldDirection(e),e},"getObjectDirection"),ju=l(s=>{const e=new I;return new vn().setFromObject(s).getCenter(e),e},"getObjectCenter"),KE=l((s,e,t)=>{const n=new I().copy(s);return n.project(e),new oe((n.x+1)/2*t.clientWidth,-(n.y-1)/2*t.clientHeight)},"getObjectPositionOnScreen"),Dp=class Dp{constructor(){this.onObjectMoveListeners=new Map,this.previousObjectPositions=new Map,this.defaultObjectPosition=new I(0,0,0)}update(){for(const[e,t]of this.onObjectMoveListeners){const n=this.getObjectPosition(e);t.forEach(i=>{this.hasObjectPositionChanged(e,n)&&i(e)}),this.previousObjectPositions.set(e,n.clone())}}onObjectMove(e,t){this.onObjectMoveListeners.has(e)||this.onObjectMoveListeners.set(e,new Set),this.onObjectMoveListeners.get(e)?.add(t),this.previousObjectPositions.set(e,this.getObjectPosition(e))}removeObjectMoveListener(e,t){this.onObjectMoveListeners.get(e)?.delete(t),this.onObjectMoveListeners.get(e)?.size===0&&(this.onObjectMoveListeners.delete(e),this.previousObjectPositions.delete(e))}hasObjectPositionChanged(e,t){const n=this.previousObjectPositions.get(e);return n?!t.equals(n):!1}getObjectPosition(e){return e.position.equals(this.defaultObjectPosition)?ju(e):e.position}};l(Dp,"ThreeEventHandler");let qu=Dp;const Np=class Np{constructor(e){this.renderer=this.buildRenderer(e)}buildRenderer(e){const t=e.parentElement,n=new Hu({canvas:e,antialias:!0,alpha:!0});n.outputColorSpace=Ot,n.setPixelRatio(window.devicePixelRatio);const i=l(()=>n.setSize(this.rendererWidth(t),this.rendererHeight(t),!1),"updateWebGlRendererSize");return i(),window.addEventListener("resize",i),n}rendererWidth(e){return e.offsetWidth>0?e.offsetWidth:window.innerWidth}rendererHeight(e){return e.offsetHeight>0?e.offsetHeight:window.innerWidth}getRenderer(){return this.renderer}getCanvas(){return this.renderer.domElement}};l(Np,"ThreeRenderer");let Yu=Np;const Vt=l(s=>new We(s),"color"),Yt={ambientLight:Vt("#ffffff"),star:Vt("#ffffff"),sun:Vt("#fcd900"),earth:Vt("#4d96ff"),mountain:Vt("#9ede73"),cloud:Vt("#ffffff"),tree:{trunk:Vt("#be8c63"),crown:Vt("#9ede73")},house:{roof:Vt("#b20600"),base:Vt("#f1eee9")},land:{brown:Vt("#ffcc8f"),green:Vt("#83bd75")},building:{floor:Vt("#f1eee9"),split:Vt("#73777b")},hut:{roof:Vt("#a64b2a"),pillar:Vt("#d7a86e")}},Op=class Op{constructor(){this.scene=new Hc,this.setupLights()}setupLights(){const e=new wu(Yt.ambientLight,3),t=new xt;t.name="lights",t.add(e),this.scene.add(t)}getScene(){return this.scene}};l(Op,"ThreeScene");let $u=Op;const Up=class Up{constructor(e,t){this.controls=t,this.rayCasterPoint=new oe(0,0),this.objectsToIgnore=new Set,this.intersectableMouseMoveObjects=new Set,this.intersectableClickObjects=new Set,this.mouseOverListenersMap=new Map,this.mouseOutListenersMap=new Map,this.clickableListenersMap=new Map,this.rayCaster=new Pu,this.rendererElement=e.getRenderer().domElement,this.setupMouseMoveListeners(),this.setupMouseClickListener()}update(){this.onAnimationFrame?.()}setupMouseMoveListeners(){let e;const t=new Set,n=l(r=>{e=r},"updatePointerPosition"),i=l(r=>{if(!e||!this.hasMouseMoveListeners())return;const o=this.getIntersectedObject(r,this.intersectableMouseMoveObjects);for(const a of t)o!==a&&(t.delete(a),this.mouseOutListenersMap.get(a)?.());o&&!t.has(o)&&(t.add(o),this.mouseOverListenersMap.get(o)?.()),e=r},"mouseMoveEventHandler");this.onAnimationFrame=()=>i(e),this.rendererElement.addEventListener("mousemove",n),this.rendererElement.addEventListener("touchmove",r=>{n(r.changedTouches[0])})}setupMouseClickListener(){let e=0,t=0;const n=l(r=>{e=r.clientX,t=r.clientY},"mouseDownEventHandler"),i=l(r=>{const o=Math.abs(r.clientX-e),a=Math.abs(r.clientY-t);if(o!==0&&a!==0||!this.hasClickListeners())return;const c=this.getIntersectedObject(r,this.intersectableClickObjects);c&&this.clickableListenersMap.get(c)?.()},"mouseUpEventHandler");this.rendererElement.addEventListener("mousedown",n),this.rendererElement.addEventListener("mouseup",i),this.rendererElement.addEventListener("touchstart",r=>{n(r.changedTouches[0])}),this.rendererElement.addEventListener("touchend",r=>{i(r.changedTouches[0])})}getIntersectedObject(e,t){this.rayCasterPoint.setX(e.clientX/this.rendererElement.clientWidth*2-1),this.rayCasterPoint.setY(-(e.clientY/this.rendererElement.clientHeight)*2+1),this.rayCaster.setFromCamera(this.rayCasterPoint,this.controls.getCamera());const n=this.rayCaster.intersectObjects([...t]);if(n.length!==0)return this.findIntersectedObject(n[0].object,t)}onMouseOver(e,t){this.mouseOverListenersMap.set(e,t),this.intersectableMouseMoveObjects.add(e)}onMouseOut(e,t){this.mouseOutListenersMap.set(e,t),this.intersectableMouseMoveObjects.add(e)}onClick(e,t){this.clickableListenersMap.set(e,t),this.intersectableClickObjects.add(e)}intersectButIgnoreObject(e){this.objectsToIgnore.add(e),this.intersectableClickObjects.add(e),this.intersectableMouseMoveObjects.add(e)}findIntersectedObject(e,t){if(!this.objectsToIgnore.has(e))return t.has(e)?e:e.parent?this.findIntersectedObject(e.parent,t):void 0}hasMouseMoveListeners(){return this.mouseOverListenersMap.size>0||this.mouseOutListenersMap.size>0}hasClickListeners(){return this.clickableListenersMap.size>0}};l(Up,"ThreeSelector");let Ku=Up;const Fp=class Fp{constructor(e){this.threeScene=new $u,this.threeRenderer=new Yu(e.canvasElement),this.threeControls=new Xu(this.threeRenderer),this.threeSelector=new Ku(this.threeRenderer,this.threeControls),this.threeEventHandler=new qu,this.threeAnimator=new Wu,this.animate()}animate(){const e=this.threeScene.getScene(),t=this.threeControls.getCamera(),n=this.threeRenderer.getRenderer(),i=new Cu;n.setAnimationLoop(()=>{const r=i.getDelta();this.threeControls.update(r),this.threeSelector.update(),this.threeEventHandler.update(),this.threeAnimator.update(),n.render(e,t)})}getScene(){return this.threeScene.getScene()}getControls(){return this.threeControls}getSelector(){return this.threeSelector}getRenderer(){return this.threeRenderer}getEventHandler(){return this.threeEventHandler}getAnimator(){return this.threeAnimator}};l(Fp,"Three");let Ju=Fp;const JE=l((s,e,t)=>{const n=gn.degToRad(-e+90),i=gn.degToRad(t),r=new I;return r.setFromSphericalCoords(s,n,i),r},"getPositionFromLatLng"),ZE=l((s,e)=>{const{x:t,y:n,z:i}=s,r=-gn.radToDeg(Math.acos(n/e))+90,o=gn.radToDeg(Math.atan(t/i));return{lat:r,lng:o}},"getLatLngFromPosition"),Bp=class Bp{constructor(...[e]){this.properties=e,this.object=this.constructObject(),this.properties?.name&&(this.object.name=this.properties.name),this.properties?.scale&&this.object.scale.setScalar(this.properties.scale)}getObject(){return this.object}addTo(e){e.add(this.object)}applyLatLng(e,t,n){const i=JE(e,t,n);this.object.position.copy(i),this.object.lookAt(0,0,0),this.object.rotateX(gn.degToRad(-90))}getPosition(){const e=new I(0,0,0),t=this.object.position.distanceTo(e),{lat:n,lng:i}=ZE(this.object.position,t);return{coordinates:this.object.position,lat:n,lng:i,altitude:t}}};l(Bp,"BaseObject");let cn=Bp;const kp=class kp extends cn{constructObject(){const{size:e,color:t=Yt.earth}=this.properties,n=new xa(e,e/2,e/3),i=new Zt({color:t}),r=new ft(n,i);return r.name="globe",r}getRadius(){return this.properties.size}};l(kp,"Globe");let Zu=kp;const zp=class zp extends cn{constructObject(){const e=new xt,t=new xt,n=this.properties.radius??120;return t.add(this.constructLight()),t.position.setScalar(n),e.add(t),e.name="sun",e}constructLight(){return new Sa(Yt.sun,2.5)}setPosition(e){this.object.position.copy(e)}};l(zp,"Sun");let Qu=zp;const Oi=l((s,e)=>Math.floor(Math.random()*(e-s+1)+s),"generateRandomInRange"),Hp=class Hp extends cn{constructObject(){const{size:e=10}=this.properties??{},t=new xt,n=e*.75,i=e*.25,r=this.createCloudSphere(e),o=this.createCloudSphere(n),a=this.createCloudSphere(n);return o.position.set(-n,-i,0),a.position.set(n,-i,0),t.add(r,o,a),t.name="cloud",t}createCloudSphere(e){const t=Math.max(8,e),n=new xa(e,t,t),i=new Zt({color:Yt.cloud});return new ft(n,i)}};l(Hp,"Cloud");let eh=Hp;const Vp=class Vp extends cn{constructObject(){const{cloudsCount:e}=this.properties,t=new xt;for(let n=0;n<e;n++)t.add(this.generateRandomCloud().getObject());return t.name="clouds",t}animateClouds(e){const t=this.object,n=1e3,i=Oi(0,100)*.001,r=Oi(0,100)*.001,o=Oi(0,100)*.001,a=l(c=>{const{x:u,y:h,z:d}=c.rotation,f={x:u+i,y:h+r,z:d+o},p=e.createTween(c.rotation,f,{duration:n});p.start(),p.onComplete(()=>{e.removeTween(p),a(c)})},"animateClouds");a(t)}generateRandomCloud(){const{baseCloudSize:e,orbitRadius:t}=this.properties,n=Oi(e-5,e+5),i=Oi(t,t+20),r=Oi(-90,90),o=Oi(-180,180),a=new eh({size:n});return a.applyLatLng(i,r,o),a}};l(Vp,"Clouds");let th=Vp;const Gp=class Gp extends cn{constructObject(){const e=new xt,{floors:t=3,size:n=10}=this.properties??{};for(let i=0;i<t;i++){const r=this.constructFloor(i,n),o=this.constructSplit(i,n);e.add(r,o)}return e.name="building",e}constructFloor(e,t){const n=new kn(t,t,t),i=new Zt({color:this.properties?.floorColor??Yt.building.floor}),r=new ft(n,i),o=t/2,a=this.getSplitHeight(t);return n.translate(0,o+e*(t+a),0),r}constructSplit(e,t){const n=this.getSplitHeight(t),i=new kn(t*.8,n,t*.8),r=new Zt({color:this.properties?.splitColor??Yt.building.split}),o=new ft(i,r),a=n/2;return i.translate(0,(e+1)*(t+n)-a,0),o}getSplitHeight(e){return e*.1}};l(Gp,"Building");let nh=Gp;const Wp=class Wp extends cn{constructObject(){const e=new xt,t=this.constructRoof(this.properties?.size),n=this.constructBase(this.properties?.size);return e.add(t,n),e.name="house",e}constructBase(e=10){const t=new kn(e*.7,e/2,e),n=new Zt({color:Yt.house.base}),i=new ft(t,n);return t.translate(0,e/2/2,0),i}constructRoof(e=10){const[t,n]=[e,e/3],i=e/2,r=this.constructRoofGeometry(t,n),o=new Zt({color:Yt.house.roof,side:wn}),a=new ft(r,o);return r.translate(0,i+n/2,0),a}constructRoofGeometry(e,t){const n=[[0,0],[e/2,t],[e,0]].map(o=>new oe(...o)),i=new _a(n),r=new au(i,{depth:e});return r.translate(-e/2,-t/2,-e/2),r}};l(Wp,"House");let ih=Wp;const Xp=class Xp extends cn{constructObject(){const e=new xt,t=this.constructRoof(this.properties?.size),n=this.constructPillars(this.properties?.size);return e.add(t,n),e.name="hut",e}constructRoof(e=5){const t=e/1.25,n=new Zr(e*1.2,t,6),i=new Zt({color:Yt.hut.roof}),r=new ft(n,i),o=e/1.1;return n.translate(0,o+t/2,0),r}constructPillars(e=5){const t=[{x:2.5,z:2.5},{x:-2.5,z:2.5},{x:2.5,z:-2.5},{x:-2.5,z:-2.5}],n=new xt;n.name="pillars";for(const i of t)n.add(this.constructPillar(i,e));return n}constructPillar(e,t){const[n,i,r]=[t/5,t/1.1,t/5],o=new kn(n,i,r),a=new Zt({color:Yt.hut.pillar}),c=new ft(o,a);return o.translate(e.x,i/2,e.z),c}};l(Xp,"Hut");let sh=Xp;const jp=class jp extends cn{constructObject(){const{size:e=10,height:t=1,sides:n=6,color:i=Yt.land.green}=this.properties??{},r=new ha(e,e,t,n,1),o=new Zt({color:i}),a=new ft(r,o);return a.name="land",a}};l(jp,"Land");let rh=jp;const qp=class qp extends cn{constructObject(){const{size:e,color:t=Yt.mountain,height:n=e}=this.properties,i=new Zr(e,n,4),r=new Zt({color:t}),o=new ft(i,r);return o.name="mountain",i.translate(0,n/2,0),o}};l(qp,"Mountain");let oh=qp;const Yp=class Yp extends cn{constructObject(){const e=new xt,t=this.constructTrunk(),n=this.constructCrown();return e.add(t,n),e.name="tree",e}constructTrunk(e=3){const t=new kn(1,e,1),n=new Zt({color:Yt.tree.trunk}),i=new ft(t,n);return t.translate(0,e/2,0),i}constructCrown(e=3){const n=new Zr(3,7,3),i=new Zt({color:Yt.tree.crown}),r=new ft(n,i);return n.translate(0,e+7/2,0),r}};l(Yp,"Tree");let ah=Yp;var De=(s=>(s[s.LevelOne=2.25]="LevelOne",s[s.LevelTwo=4.5]="LevelTwo",s))(De||{});function QE(s){if(!(typeof window>"u")){var e=document.createElement("style");return e.setAttribute("type","text/css"),e.innerHTML=s,document.head.appendChild(e),s}}l(QE,"___$insertStyle");function vs(s,e){var t=s.__state.conversionName.toString(),n=Math.round(s.r),i=Math.round(s.g),r=Math.round(s.b),o=s.a,a=Math.round(s.h),c=s.s.toFixed(1),u=s.v.toFixed(1);if(e||t==="THREE_CHAR_HEX"||t==="SIX_CHAR_HEX"){for(var h=s.hex.toString(16);h.length<6;)h="0"+h;return"#"+h}else{if(t==="CSS_RGB")return"rgb("+n+","+i+","+r+")";if(t==="CSS_RGBA")return"rgba("+n+","+i+","+r+","+o+")";if(t==="HEX")return"0x"+s.hex.toString(16);if(t==="RGB_ARRAY")return"["+n+","+i+","+r+"]";if(t==="RGBA_ARRAY")return"["+n+","+i+","+r+","+o+"]";if(t==="RGB_OBJ")return"{r:"+n+",g:"+i+",b:"+r+"}";if(t==="RGBA_OBJ")return"{r:"+n+",g:"+i+",b:"+r+",a:"+o+"}";if(t==="HSV_OBJ")return"{h:"+a+",s:"+c+",v:"+u+"}";if(t==="HSVA_OBJ")return"{h:"+a+",s:"+c+",v:"+u+",a:"+o+"}"}return"unknown format"}l(vs,"colorToString");var o_=Array.prototype.forEach,yr=Array.prototype.slice,J={BREAK:{},extend:l(function(e){return this.each(yr.call(arguments,1),function(t){var n=this.isObject(t)?Object.keys(t):[];n.forEach((function(i){this.isUndefined(t[i])||(e[i]=t[i])}).bind(this))},this),e},"extend"),defaults:l(function(e){return this.each(yr.call(arguments,1),function(t){var n=this.isObject(t)?Object.keys(t):[];n.forEach((function(i){this.isUndefined(e[i])&&(e[i]=t[i])}).bind(this))},this),e},"defaults"),compose:l(function(){var e=yr.call(arguments);return function(){for(var t=yr.call(arguments),n=e.length-1;n>=0;n--)t=[e[n].apply(this,t)];return t[0]}},"compose"),each:l(function(e,t,n){if(e){if(o_&&e.forEach&&e.forEach===o_)e.forEach(t,n);else if(e.length===e.length+0){var i=void 0,r=void 0;for(i=0,r=e.length;i<r;i++)if(i in e&&t.call(n,e[i],i)===this.BREAK)return}else for(var o in e)if(t.call(n,e[o],o)===this.BREAK)return}},"each"),defer:l(function(e){setTimeout(e,0)},"defer"),debounce:l(function(e,t,n){var i=void 0;return function(){var r=this,o=arguments;function a(){i=null,n||e.apply(r,o)}l(a,"delayed");var c=n||!i;clearTimeout(i),i=setTimeout(a,t),c&&e.apply(r,o)}},"debounce"),toArray:l(function(e){return e.toArray?e.toArray():yr.call(e)},"toArray"),isUndefined:l(function(e){return e===void 0},"isUndefined"),isNull:l(function(e){return e===null},"isNull"),isNaN:(function(s){function e(t){return s.apply(this,arguments)}return l(e,"isNaN"),e.toString=function(){return s.toString()},e})(function(s){return isNaN(s)}),isArray:Array.isArray||function(s){return s.constructor===Array},isObject:l(function(e){return e===Object(e)},"isObject"),isNumber:l(function(e){return e===e+0},"isNumber"),isString:l(function(e){return e===e+""},"isString"),isBoolean:l(function(e){return e===!1||e===!0},"isBoolean"),isFunction:l(function(e){return e instanceof Function},"isFunction")},ew=[{litmus:J.isString,conversions:{THREE_CHAR_HEX:{read:l(function(e){var t=e.match(/^#([A-F0-9])([A-F0-9])([A-F0-9])$/i);return t===null?!1:{space:"HEX",hex:parseInt("0x"+t[1].toString()+t[1].toString()+t[2].toString()+t[2].toString()+t[3].toString()+t[3].toString(),0)}},"read"),write:vs},SIX_CHAR_HEX:{read:l(function(e){var t=e.match(/^#([A-F0-9]{6})$/i);return t===null?!1:{space:"HEX",hex:parseInt("0x"+t[1].toString(),0)}},"read"),write:vs},CSS_RGB:{read:l(function(e){var t=e.match(/^rgb\(\s*(\S+)\s*,\s*(\S+)\s*,\s*(\S+)\s*\)/);return t===null?!1:{space:"RGB",r:parseFloat(t[1]),g:parseFloat(t[2]),b:parseFloat(t[3])}},"read"),write:vs},CSS_RGBA:{read:l(function(e){var t=e.match(/^rgba\(\s*(\S+)\s*,\s*(\S+)\s*,\s*(\S+)\s*,\s*(\S+)\s*\)/);return t===null?!1:{space:"RGB",r:parseFloat(t[1]),g:parseFloat(t[2]),b:parseFloat(t[3]),a:parseFloat(t[4])}},"read"),write:vs}}},{litmus:J.isNumber,conversions:{HEX:{read:l(function(e){return{space:"HEX",hex:e,conversionName:"HEX"}},"read"),write:l(function(e){return e.hex},"write")}}},{litmus:J.isArray,conversions:{RGB_ARRAY:{read:l(function(e){return e.length!==3?!1:{space:"RGB",r:e[0],g:e[1],b:e[2]}},"read"),write:l(function(e){return[e.r,e.g,e.b]},"write")},RGBA_ARRAY:{read:l(function(e){return e.length!==4?!1:{space:"RGB",r:e[0],g:e[1],b:e[2],a:e[3]}},"read"),write:l(function(e){return[e.r,e.g,e.b,e.a]},"write")}}},{litmus:J.isObject,conversions:{RGBA_OBJ:{read:l(function(e){return J.isNumber(e.r)&&J.isNumber(e.g)&&J.isNumber(e.b)&&J.isNumber(e.a)?{space:"RGB",r:e.r,g:e.g,b:e.b,a:e.a}:!1},"read"),write:l(function(e){return{r:e.r,g:e.g,b:e.b,a:e.a}},"write")},RGB_OBJ:{read:l(function(e){return J.isNumber(e.r)&&J.isNumber(e.g)&&J.isNumber(e.b)?{space:"RGB",r:e.r,g:e.g,b:e.b}:!1},"read"),write:l(function(e){return{r:e.r,g:e.g,b:e.b}},"write")},HSVA_OBJ:{read:l(function(e){return J.isNumber(e.h)&&J.isNumber(e.s)&&J.isNumber(e.v)&&J.isNumber(e.a)?{space:"HSV",h:e.h,s:e.s,v:e.v,a:e.a}:!1},"read"),write:l(function(e){return{h:e.h,s:e.s,v:e.v,a:e.a}},"write")},HSV_OBJ:{read:l(function(e){return J.isNumber(e.h)&&J.isNumber(e.s)&&J.isNumber(e.v)?{space:"HSV",h:e.h,s:e.s,v:e.v}:!1},"read"),write:l(function(e){return{h:e.h,s:e.s,v:e.v}},"write")}}}],br=void 0,zo=void 0,lh=l(function(){zo=!1;var e=arguments.length>1?J.toArray(arguments):arguments[0];return J.each(ew,function(t){if(t.litmus(e))return J.each(t.conversions,function(n,i){if(br=n.read(e),zo===!1&&br!==!1)return zo=br,br.conversionName=i,br.conversion=n,J.BREAK}),J.BREAK}),zo},"interpret"),a_=void 0,wa={hsv_to_rgb:l(function(e,t,n){var i=Math.floor(e/60)%6,r=e/60-Math.floor(e/60),o=n*(1-t),a=n*(1-r*t),c=n*(1-(1-r)*t),u=[[n,c,o],[a,n,o],[o,n,c],[o,a,n],[c,o,n],[n,o,a]][i];return{r:u[0]*255,g:u[1]*255,b:u[2]*255}},"hsv_to_rgb"),rgb_to_hsv:l(function(e,t,n){var i=Math.min(e,t,n),r=Math.max(e,t,n),o=r-i,a=void 0,c=void 0;if(r!==0)c=o/r;else return{h:NaN,s:0,v:0};return e===r?a=(t-n)/o:t===r?a=2+(n-e)/o:a=4+(e-t)/o,a/=6,a<0&&(a+=1),{h:a*360,s:c,v:r/255}},"rgb_to_hsv"),rgb_to_hex:l(function(e,t,n){var i=this.hex_with_component(0,2,e);return i=this.hex_with_component(i,1,t),i=this.hex_with_component(i,0,n),i},"rgb_to_hex"),component_from_hex:l(function(e,t){return e>>t*8&255},"component_from_hex"),hex_with_component:l(function(e,t,n){return n<<(a_=t*8)|e&~(255<<a_)},"hex_with_component")},tw=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(s){return typeof s}:function(s){return s&&typeof Symbol=="function"&&s.constructor===Symbol&&s!==Symbol.prototype?"symbol":typeof s},Cn=l(function(s,e){if(!(s instanceof e))throw new TypeError("Cannot call a class as a function")},"classCallCheck"),Rn=(function(){function s(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return l(s,"defineProperties"),function(e,t,n){return t&&s(e.prototype,t),n&&s(e,n),e}})(),Ei=l(function s(e,t,n){e===null&&(e=Function.prototype);var i=Object.getOwnPropertyDescriptor(e,t);if(i===void 0){var r=Object.getPrototypeOf(e);return r===null?void 0:s(r,t,n)}else{if("value"in i)return i.value;var o=i.get;return o===void 0?void 0:o.call(n)}},"get"),wi=l(function(s,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof e);s.prototype=Object.create(e&&e.prototype,{constructor:{value:s,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(s,e):s.__proto__=e)},"inherits"),Ti=l(function(s,e){if(!s)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e&&(typeof e=="object"||typeof e=="function")?e:s},"possibleConstructorReturn"),Ut=(function(){function s(){if(Cn(this,s),this.__state=lh.apply(this,arguments),this.__state===!1)throw new Error("Failed to interpret color arguments");this.__state.a=this.__state.a||1}return l(s,"Color"),Rn(s,[{key:"toString",value:l(function(){return vs(this)},"toString")},{key:"toHexString",value:l(function(){return vs(this,!0)},"toHexString")},{key:"toOriginal",value:l(function(){return this.__state.conversion.write(this)},"toOriginal")}]),s})();function Sd(s,e,t){Object.defineProperty(s,e,{get:l(function(){return this.__state.space==="RGB"?this.__state[e]:(Ut.recalculateRGB(this,e,t),this.__state[e])},"get$$1"),set:l(function(i){this.__state.space!=="RGB"&&(Ut.recalculateRGB(this,e,t),this.__state.space="RGB"),this.__state[e]=i},"set$$1")})}l(Sd,"defineRGBComponent");function Md(s,e){Object.defineProperty(s,e,{get:l(function(){return this.__state.space==="HSV"?this.__state[e]:(Ut.recalculateHSV(this),this.__state[e])},"get$$1"),set:l(function(n){this.__state.space!=="HSV"&&(Ut.recalculateHSV(this),this.__state.space="HSV"),this.__state[e]=n},"set$$1")})}l(Md,"defineHSVComponent");Ut.recalculateRGB=function(s,e,t){if(s.__state.space==="HEX")s.__state[e]=wa.component_from_hex(s.__state.hex,t);else if(s.__state.space==="HSV")J.extend(s.__state,wa.hsv_to_rgb(s.__state.h,s.__state.s,s.__state.v));else throw new Error("Corrupted color state")};Ut.recalculateHSV=function(s){var e=wa.rgb_to_hsv(s.r,s.g,s.b);J.extend(s.__state,{s:e.s,v:e.v}),J.isNaN(e.h)?J.isUndefined(s.__state.h)&&(s.__state.h=0):s.__state.h=e.h};Ut.COMPONENTS=["r","g","b","h","s","v","hex","a"];Sd(Ut.prototype,"r",2);Sd(Ut.prototype,"g",1);Sd(Ut.prototype,"b",0);Md(Ut.prototype,"h");Md(Ut.prototype,"s");Md(Ut.prototype,"v");Object.defineProperty(Ut.prototype,"a",{get:l(function(){return this.__state.a},"get$$1"),set:l(function(e){this.__state.a=e},"set$$1")});Object.defineProperty(Ut.prototype,"hex",{get:l(function(){return this.__state.space!=="HEX"&&(this.__state.hex=wa.rgb_to_hex(this.r,this.g,this.b),this.__state.space="HEX"),this.__state.hex},"get$$1"),set:l(function(e){this.__state.space="HEX",this.__state.hex=e},"set$$1")});var Ji=(function(){function s(e,t){Cn(this,s),this.initialValue=e[t],this.domElement=document.createElement("div"),this.object=e,this.property=t,this.__onChange=void 0,this.__onFinishChange=void 0}return l(s,"Controller"),Rn(s,[{key:"onChange",value:l(function(t){return this.__onChange=t,this},"onChange")},{key:"onFinishChange",value:l(function(t){return this.__onFinishChange=t,this},"onFinishChange")},{key:"setValue",value:l(function(t){return this.object[this.property]=t,this.__onChange&&this.__onChange.call(this,t),this.updateDisplay(),this},"setValue")},{key:"getValue",value:l(function(){return this.object[this.property]},"getValue")},{key:"updateDisplay",value:l(function(){return this},"updateDisplay")},{key:"isModified",value:l(function(){return this.initialValue!==this.getValue()},"isModified")}]),s})(),nw={HTMLEvents:["change"],MouseEvents:["click","mousemove","mousedown","mouseup","mouseover"],KeyboardEvents:["keydown"]},t0={};J.each(nw,function(s,e){J.each(s,function(t){t0[t]=e})});var iw=/(\d+(\.\d+)?)px/;function In(s){if(s==="0"||J.isUndefined(s))return 0;var e=s.match(iw);return J.isNull(e)?0:parseFloat(e[1])}l(In,"cssValueToPixels");var W={makeSelectable:l(function(e,t){e===void 0||e.style===void 0||(e.onselectstart=t?function(){return!1}:function(){},e.style.MozUserSelect=t?"auto":"none",e.style.KhtmlUserSelect=t?"auto":"none",e.unselectable=t?"on":"off")},"makeSelectable"),makeFullscreen:l(function(e,t,n){var i=n,r=t;J.isUndefined(r)&&(r=!0),J.isUndefined(i)&&(i=!0),e.style.position="absolute",r&&(e.style.left=0,e.style.right=0),i&&(e.style.top=0,e.style.bottom=0)},"makeFullscreen"),fakeEvent:l(function(e,t,n,i){var r=n||{},o=t0[t];if(!o)throw new Error("Event type "+t+" not supported.");var a=document.createEvent(o);switch(o){case"MouseEvents":{var c=r.x||r.clientX||0,u=r.y||r.clientY||0;a.initMouseEvent(t,r.bubbles||!1,r.cancelable||!0,window,r.clickCount||1,0,0,c,u,!1,!1,!1,!1,0,null);break}case"KeyboardEvents":{var h=a.initKeyboardEvent||a.initKeyEvent;J.defaults(r,{cancelable:!0,ctrlKey:!1,altKey:!1,shiftKey:!1,metaKey:!1,keyCode:void 0,charCode:void 0}),h(t,r.bubbles||!1,r.cancelable,window,r.ctrlKey,r.altKey,r.shiftKey,r.metaKey,r.keyCode,r.charCode);break}default:{a.initEvent(t,r.bubbles||!1,r.cancelable||!0);break}}J.defaults(a,i),e.dispatchEvent(a)},"fakeEvent"),bind:l(function(e,t,n,i){var r=i||!1;return e.addEventListener?e.addEventListener(t,n,r):e.attachEvent&&e.attachEvent("on"+t,n),W},"bind"),unbind:l(function(e,t,n,i){var r=i||!1;return e.removeEventListener?e.removeEventListener(t,n,r):e.detachEvent&&e.detachEvent("on"+t,n),W},"unbind"),addClass:l(function(e,t){if(e.className===void 0)e.className=t;else if(e.className!==t){var n=e.className.split(/ +/);n.indexOf(t)===-1&&(n.push(t),e.className=n.join(" ").replace(/^\s+/,"").replace(/\s+$/,""))}return W},"addClass"),removeClass:l(function(e,t){if(t)if(e.className===t)e.removeAttribute("class");else{var n=e.className.split(/ +/),i=n.indexOf(t);i!==-1&&(n.splice(i,1),e.className=n.join(" "))}else e.className=void 0;return W},"removeClass"),hasClass:l(function(e,t){return new RegExp("(?:^|\\s+)"+t+"(?:\\s+|$)").test(e.className)||!1},"hasClass"),getWidth:l(function(e){var t=getComputedStyle(e);return In(t["border-left-width"])+In(t["border-right-width"])+In(t["padding-left"])+In(t["padding-right"])+In(t.width)},"getWidth"),getHeight:l(function(e){var t=getComputedStyle(e);return In(t["border-top-width"])+In(t["border-bottom-width"])+In(t["padding-top"])+In(t["padding-bottom"])+In(t.height)},"getHeight"),getOffset:l(function(e){var t=e,n={left:0,top:0};if(t.offsetParent)do n.left+=t.offsetLeft,n.top+=t.offsetTop,t=t.offsetParent;while(t);return n},"getOffset"),isActive:l(function(e){return e===document.activeElement&&(e.type||e.href)},"isActive")},n0=(function(s){wi(e,s);function e(t,n){Cn(this,e);var i=Ti(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n)),r=i;i.__prev=i.getValue(),i.__checkbox=document.createElement("input"),i.__checkbox.setAttribute("type","checkbox");function o(){r.setValue(!r.__prev)}return l(o,"onChange"),W.bind(i.__checkbox,"change",o,!1),i.domElement.appendChild(i.__checkbox),i.updateDisplay(),i}return l(e,"BooleanController"),Rn(e,[{key:"setValue",value:l(function(n){var i=Ei(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"setValue",this).call(this,n);return this.__onFinishChange&&this.__onFinishChange.call(this,this.getValue()),this.__prev=this.getValue(),i},"setValue")},{key:"updateDisplay",value:l(function(){return this.getValue()===!0?(this.__checkbox.setAttribute("checked","checked"),this.__checkbox.checked=!0,this.__prev=!0):(this.__checkbox.checked=!1,this.__prev=!1),Ei(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"updateDisplay",this).call(this)},"updateDisplay")}]),e})(Ji),sw=(function(s){wi(e,s);function e(t,n,i){Cn(this,e);var r=Ti(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n)),o=i,a=r;if(r.__select=document.createElement("select"),J.isArray(o)){var c={};J.each(o,function(u){c[u]=u}),o=c}return J.each(o,function(u,h){var d=document.createElement("option");d.innerHTML=h,d.setAttribute("value",u),a.__select.appendChild(d)}),r.updateDisplay(),W.bind(r.__select,"change",function(){var u=this.options[this.selectedIndex].value;a.setValue(u)}),r.domElement.appendChild(r.__select),r}return l(e,"OptionController"),Rn(e,[{key:"setValue",value:l(function(n){var i=Ei(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"setValue",this).call(this,n);return this.__onFinishChange&&this.__onFinishChange.call(this,this.getValue()),i},"setValue")},{key:"updateDisplay",value:l(function(){return W.isActive(this.__select)?this:(this.__select.value=this.getValue(),Ei(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"updateDisplay",this).call(this))},"updateDisplay")}]),e})(Ji),rw=(function(s){wi(e,s);function e(t,n){Cn(this,e);var i=Ti(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n)),r=i;function o(){r.setValue(r.__input.value)}l(o,"onChange");function a(){r.__onFinishChange&&r.__onFinishChange.call(r,r.getValue())}return l(a,"onBlur"),i.__input=document.createElement("input"),i.__input.setAttribute("type","text"),W.bind(i.__input,"keyup",o),W.bind(i.__input,"change",o),W.bind(i.__input,"blur",a),W.bind(i.__input,"keydown",function(c){c.keyCode===13&&this.blur()}),i.updateDisplay(),i.domElement.appendChild(i.__input),i}return l(e,"StringController"),Rn(e,[{key:"updateDisplay",value:l(function(){return W.isActive(this.__input)||(this.__input.value=this.getValue()),Ei(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"updateDisplay",this).call(this)},"updateDisplay")}]),e})(Ji);function l_(s){var e=s.toString();return e.indexOf(".")>-1?e.length-e.indexOf(".")-1:0}l(l_,"numDecimals");var i0=(function(s){wi(e,s);function e(t,n,i){Cn(this,e);var r=Ti(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n)),o=i||{};return r.__min=o.min,r.__max=o.max,r.__step=o.step,J.isUndefined(r.__step)?r.initialValue===0?r.__impliedStep=1:r.__impliedStep=Math.pow(10,Math.floor(Math.log(Math.abs(r.initialValue))/Math.LN10))/10:r.__impliedStep=r.__step,r.__precision=l_(r.__impliedStep),r}return l(e,"NumberController"),Rn(e,[{key:"setValue",value:l(function(n){var i=n;return this.__min!==void 0&&i<this.__min?i=this.__min:this.__max!==void 0&&i>this.__max&&(i=this.__max),this.__step!==void 0&&i%this.__step!==0&&(i=Math.round(i/this.__step)*this.__step),Ei(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"setValue",this).call(this,i)},"setValue")},{key:"min",value:l(function(n){return this.__min=n,this},"min")},{key:"max",value:l(function(n){return this.__max=n,this},"max")},{key:"step",value:l(function(n){return this.__step=n,this.__impliedStep=n,this.__precision=l_(n),this},"step")}]),e})(Ji);function ow(s,e){var t=Math.pow(10,e);return Math.round(s*t)/t}l(ow,"roundToDecimal");var Ta=(function(s){wi(e,s);function e(t,n,i){Cn(this,e);var r=Ti(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n,i));r.__truncationSuspended=!1;var o=r,a=void 0;function c(){var _=parseFloat(o.__input.value);J.isNaN(_)||o.setValue(_)}l(c,"onChange");function u(){o.__onFinishChange&&o.__onFinishChange.call(o,o.getValue())}l(u,"onFinish");function h(){u()}l(h,"onBlur");function d(_){var v=a-_.clientY;o.setValue(o.getValue()+v*o.__impliedStep),a=_.clientY}l(d,"onMouseDrag");function f(){W.unbind(window,"mousemove",d),W.unbind(window,"mouseup",f),u()}l(f,"onMouseUp");function p(_){W.bind(window,"mousemove",d),W.bind(window,"mouseup",f),a=_.clientY}return l(p,"onMouseDown"),r.__input=document.createElement("input"),r.__input.setAttribute("type","text"),W.bind(r.__input,"change",c),W.bind(r.__input,"blur",h),W.bind(r.__input,"mousedown",p),W.bind(r.__input,"keydown",function(_){_.keyCode===13&&(o.__truncationSuspended=!0,this.blur(),o.__truncationSuspended=!1,u())}),r.updateDisplay(),r.domElement.appendChild(r.__input),r}return l(e,"NumberControllerBox"),Rn(e,[{key:"updateDisplay",value:l(function(){return this.__input.value=this.__truncationSuspended?this.getValue():ow(this.getValue(),this.__precision),Ei(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"updateDisplay",this).call(this)},"updateDisplay")}]),e})(i0);function c_(s,e,t,n,i){return n+(i-n)*((s-e)/(t-e))}l(c_,"map");var ch=(function(s){wi(e,s);function e(t,n,i,r,o){Cn(this,e);var a=Ti(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n,{min:i,max:r,step:o})),c=a;a.__background=document.createElement("div"),a.__foreground=document.createElement("div"),W.bind(a.__background,"mousedown",u),W.bind(a.__background,"touchstart",f),W.addClass(a.__background,"slider"),W.addClass(a.__foreground,"slider-fg");function u(v){document.activeElement.blur(),W.bind(window,"mousemove",h),W.bind(window,"mouseup",d),h(v)}l(u,"onMouseDown");function h(v){v.preventDefault();var g=c.__background.getBoundingClientRect();return c.setValue(c_(v.clientX,g.left,g.right,c.__min,c.__max)),!1}l(h,"onMouseDrag");function d(){W.unbind(window,"mousemove",h),W.unbind(window,"mouseup",d),c.__onFinishChange&&c.__onFinishChange.call(c,c.getValue())}l(d,"onMouseUp");function f(v){v.touches.length===1&&(W.bind(window,"touchmove",p),W.bind(window,"touchend",_),p(v))}l(f,"onTouchStart");function p(v){var g=v.touches[0].clientX,m=c.__background.getBoundingClientRect();c.setValue(c_(g,m.left,m.right,c.__min,c.__max))}l(p,"onTouchMove");function _(){W.unbind(window,"touchmove",p),W.unbind(window,"touchend",_),c.__onFinishChange&&c.__onFinishChange.call(c,c.getValue())}return l(_,"onTouchEnd"),a.updateDisplay(),a.__background.appendChild(a.__foreground),a.domElement.appendChild(a.__background),a}return l(e,"NumberControllerSlider"),Rn(e,[{key:"updateDisplay",value:l(function(){var n=(this.getValue()-this.__min)/(this.__max-this.__min);return this.__foreground.style.width=n*100+"%",Ei(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"updateDisplay",this).call(this)},"updateDisplay")}]),e})(i0),s0=(function(s){wi(e,s);function e(t,n,i){Cn(this,e);var r=Ti(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n)),o=r;return r.__button=document.createElement("div"),r.__button.innerHTML=i===void 0?"Fire":i,W.bind(r.__button,"click",function(a){return a.preventDefault(),o.fire(),!1}),W.addClass(r.__button,"button"),r.domElement.appendChild(r.__button),r}return l(e,"FunctionController"),Rn(e,[{key:"fire",value:l(function(){this.__onChange&&this.__onChange.call(this),this.getValue().call(this.object),this.__onFinishChange&&this.__onFinishChange.call(this,this.getValue())},"fire")}]),e})(Ji),uh=(function(s){wi(e,s);function e(t,n){Cn(this,e);var i=Ti(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n));i.__color=new Ut(i.getValue()),i.__temp=new Ut(0);var r=i;i.domElement=document.createElement("div"),W.makeSelectable(i.domElement,!1),i.__selector=document.createElement("div"),i.__selector.className="selector",i.__saturation_field=document.createElement("div"),i.__saturation_field.className="saturation-field",i.__field_knob=document.createElement("div"),i.__field_knob.className="field-knob",i.__field_knob_border="2px solid ",i.__hue_knob=document.createElement("div"),i.__hue_knob.className="hue-knob",i.__hue_field=document.createElement("div"),i.__hue_field.className="hue-field",i.__input=document.createElement("input"),i.__input.type="text",i.__input_textShadow="0 1px 1px ",W.bind(i.__input,"keydown",function(v){v.keyCode===13&&d.call(this)}),W.bind(i.__input,"blur",d),W.bind(i.__selector,"mousedown",function(){W.addClass(this,"drag").bind(window,"mouseup",function(){W.removeClass(r.__selector,"drag")})}),W.bind(i.__selector,"touchstart",function(){W.addClass(this,"drag").bind(window,"touchend",function(){W.removeClass(r.__selector,"drag")})});var o=document.createElement("div");J.extend(i.__selector.style,{width:"122px",height:"102px",padding:"3px",backgroundColor:"#222",boxShadow:"0px 1px 3px rgba(0,0,0,0.3)"}),J.extend(i.__field_knob.style,{position:"absolute",width:"12px",height:"12px",border:i.__field_knob_border+(i.__color.v<.5?"#fff":"#000"),boxShadow:"0px 1px 3px rgba(0,0,0,0.5)",borderRadius:"12px",zIndex:1}),J.extend(i.__hue_knob.style,{position:"absolute",width:"15px",height:"2px",borderRight:"4px solid #fff",zIndex:1}),J.extend(i.__saturation_field.style,{width:"100px",height:"100px",border:"1px solid #555",marginRight:"3px",display:"inline-block",cursor:"pointer"}),J.extend(o.style,{width:"100%",height:"100%",background:"none"}),u_(o,"top","rgba(0,0,0,0)","#000"),J.extend(i.__hue_field.style,{width:"15px",height:"100px",border:"1px solid #555",cursor:"ns-resize",position:"absolute",top:"3px",right:"3px"}),lw(i.__hue_field),J.extend(i.__input.style,{outline:"none",textAlign:"center",color:"#fff",border:0,fontWeight:"bold",textShadow:i.__input_textShadow+"rgba(0,0,0,0.7)"}),W.bind(i.__saturation_field,"mousedown",a),W.bind(i.__saturation_field,"touchstart",a),W.bind(i.__field_knob,"mousedown",a),W.bind(i.__field_knob,"touchstart",a),W.bind(i.__hue_field,"mousedown",c),W.bind(i.__hue_field,"touchstart",c);function a(v){p(v),W.bind(window,"mousemove",p),W.bind(window,"touchmove",p),W.bind(window,"mouseup",u),W.bind(window,"touchend",u)}l(a,"fieldDown");function c(v){_(v),W.bind(window,"mousemove",_),W.bind(window,"touchmove",_),W.bind(window,"mouseup",h),W.bind(window,"touchend",h)}l(c,"fieldDownH");function u(){W.unbind(window,"mousemove",p),W.unbind(window,"touchmove",p),W.unbind(window,"mouseup",u),W.unbind(window,"touchend",u),f()}l(u,"fieldUpSV");function h(){W.unbind(window,"mousemove",_),W.unbind(window,"touchmove",_),W.unbind(window,"mouseup",h),W.unbind(window,"touchend",h),f()}l(h,"fieldUpH");function d(){var v=lh(this.value);v!==!1?(r.__color.__state=v,r.setValue(r.__color.toOriginal())):this.value=r.__color.toString()}l(d,"onBlur");function f(){r.__onFinishChange&&r.__onFinishChange.call(r,r.__color.toOriginal())}l(f,"onFinish"),i.__saturation_field.appendChild(o),i.__selector.appendChild(i.__field_knob),i.__selector.appendChild(i.__saturation_field),i.__selector.appendChild(i.__hue_field),i.__hue_field.appendChild(i.__hue_knob),i.domElement.appendChild(i.__input),i.domElement.appendChild(i.__selector),i.updateDisplay();function p(v){v.type.indexOf("touch")===-1&&v.preventDefault();var g=r.__saturation_field.getBoundingClientRect(),m=v.touches&&v.touches[0]||v,T=m.clientX,M=m.clientY,S=(T-g.left)/(g.right-g.left),C=1-(M-g.top)/(g.bottom-g.top);return C>1?C=1:C<0&&(C=0),S>1?S=1:S<0&&(S=0),r.__color.v=C,r.__color.s=S,r.setValue(r.__color.toOriginal()),!1}l(p,"setSV");function _(v){v.type.indexOf("touch")===-1&&v.preventDefault();var g=r.__hue_field.getBoundingClientRect(),m=v.touches&&v.touches[0]||v,T=m.clientY,M=1-(T-g.top)/(g.bottom-g.top);return M>1?M=1:M<0&&(M=0),r.__color.h=M*360,r.setValue(r.__color.toOriginal()),!1}return l(_,"setH"),i}return l(e,"ColorController"),Rn(e,[{key:"updateDisplay",value:l(function(){var n=lh(this.getValue());if(n!==!1){var i=!1;J.each(Ut.COMPONENTS,function(a){if(!J.isUndefined(n[a])&&!J.isUndefined(this.__color.__state[a])&&n[a]!==this.__color.__state[a])return i=!0,{}},this),i&&J.extend(this.__color.__state,n)}J.extend(this.__temp.__state,this.__color.__state),this.__temp.a=1;var r=this.__color.v<.5||this.__color.s>.5?255:0,o=255-r;J.extend(this.__field_knob.style,{marginLeft:100*this.__color.s-7+"px",marginTop:100*(1-this.__color.v)-7+"px",backgroundColor:this.__temp.toHexString(),border:this.__field_knob_border+"rgb("+r+","+r+","+r+")"}),this.__hue_knob.style.marginTop=(1-this.__color.h/360)*100+"px",this.__temp.s=1,this.__temp.v=1,u_(this.__saturation_field,"left","#fff",this.__temp.toHexString()),this.__input.value=this.__color.toString(),J.extend(this.__input.style,{backgroundColor:this.__color.toHexString(),color:"rgb("+r+","+r+","+r+")",textShadow:this.__input_textShadow+"rgba("+o+","+o+","+o+",.7)"})},"updateDisplay")}]),e})(Ji),aw=["-moz-","-o-","-webkit-","-ms-",""];function u_(s,e,t,n){s.style.background="",J.each(aw,function(i){s.style.cssText+="background: "+i+"linear-gradient("+e+", "+t+" 0%, "+n+" 100%); "})}l(u_,"linearGradient");function lw(s){s.style.background="",s.style.cssText+="background: -moz-linear-gradient(top,  #ff0000 0%, #ff00ff 17%, #0000ff 34%, #00ffff 50%, #00ff00 67%, #ffff00 84%, #ff0000 100%);",s.style.cssText+="background: -webkit-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);",s.style.cssText+="background: -o-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);",s.style.cssText+="background: -ms-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);",s.style.cssText+="background: linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);"}l(lw,"hueGradient");var cw={load:l(function(e,t){var n=t||document,i=n.createElement("link");i.type="text/css",i.rel="stylesheet",i.href=e,n.getElementsByTagName("head")[0].appendChild(i)},"load"),inject:l(function(e,t){var n=t||document,i=document.createElement("style");i.type="text/css",i.innerHTML=e;var r=n.getElementsByTagName("head")[0];try{r.appendChild(i)}catch{}},"inject")},uw=`<div id="dg-save" class="dg dialogue">

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

</div>`,hw=l(function(e,t){var n=e[t];return J.isArray(arguments[2])||J.isObject(arguments[2])?new sw(e,t,arguments[2]):J.isNumber(n)?J.isNumber(arguments[2])&&J.isNumber(arguments[3])?J.isNumber(arguments[4])?new ch(e,t,arguments[2],arguments[3],arguments[4]):new ch(e,t,arguments[2],arguments[3]):J.isNumber(arguments[4])?new Ta(e,t,{min:arguments[2],max:arguments[3],step:arguments[4]}):new Ta(e,t,{min:arguments[2],max:arguments[3]}):J.isString(n)?new rw(e,t):J.isFunction(n)?new s0(e,t,""):J.isBoolean(n)?new n0(e,t):null},"ControllerFactory");function dw(s){setTimeout(s,1e3/60)}l(dw,"requestAnimationFrame$1");var fw=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||dw,pw=(function(){function s(){Cn(this,s),this.backgroundElement=document.createElement("div"),J.extend(this.backgroundElement.style,{backgroundColor:"rgba(0,0,0,0.8)",top:0,left:0,display:"none",zIndex:"1000",opacity:0,WebkitTransition:"opacity 0.2s linear",transition:"opacity 0.2s linear"}),W.makeFullscreen(this.backgroundElement),this.backgroundElement.style.position="fixed",this.domElement=document.createElement("div"),J.extend(this.domElement.style,{position:"fixed",display:"none",zIndex:"1001",opacity:0,WebkitTransition:"-webkit-transform 0.2s ease-out, opacity 0.2s linear",transition:"transform 0.2s ease-out, opacity 0.2s linear"}),document.body.appendChild(this.backgroundElement),document.body.appendChild(this.domElement);var e=this;W.bind(this.backgroundElement,"click",function(){e.hide()})}return l(s,"CenteredDiv"),Rn(s,[{key:"show",value:l(function(){var t=this;this.backgroundElement.style.display="block",this.domElement.style.display="block",this.domElement.style.opacity=0,this.domElement.style.webkitTransform="scale(1.1)",this.layout(),J.defer(function(){t.backgroundElement.style.opacity=1,t.domElement.style.opacity=1,t.domElement.style.webkitTransform="scale(1)"})},"show")},{key:"hide",value:l(function(){var t=this,n=l(function i(){t.domElement.style.display="none",t.backgroundElement.style.display="none",W.unbind(t.domElement,"webkitTransitionEnd",i),W.unbind(t.domElement,"transitionend",i),W.unbind(t.domElement,"oTransitionEnd",i)},"hide");W.bind(this.domElement,"webkitTransitionEnd",n),W.bind(this.domElement,"transitionend",n),W.bind(this.domElement,"oTransitionEnd",n),this.backgroundElement.style.opacity=0,this.domElement.style.opacity=0,this.domElement.style.webkitTransform="scale(1.1)"},"hide")},{key:"layout",value:l(function(){this.domElement.style.left=window.innerWidth/2-W.getWidth(this.domElement)/2+"px",this.domElement.style.top=window.innerHeight/2-W.getHeight(this.domElement)/2+"px"},"layout")}]),s})(),mw=QE(`.dg ul{list-style:none;margin:0;padding:0;width:100%;clear:both}.dg.ac{position:fixed;top:0;left:0;right:0;height:0;z-index:0}.dg:not(.ac) .main{overflow:hidden}.dg.main{-webkit-transition:opacity .1s linear;-o-transition:opacity .1s linear;-moz-transition:opacity .1s linear;transition:opacity .1s linear}.dg.main.taller-than-window{overflow-y:auto}.dg.main.taller-than-window .close-button{opacity:1;margin-top:-1px;border-top:1px solid #2c2c2c}.dg.main ul.closed .close-button{opacity:1 !important}.dg.main:hover .close-button,.dg.main .close-button.drag{opacity:1}.dg.main .close-button{-webkit-transition:opacity .1s linear;-o-transition:opacity .1s linear;-moz-transition:opacity .1s linear;transition:opacity .1s linear;border:0;line-height:19px;height:20px;cursor:pointer;text-align:center;background-color:#000}.dg.main .close-button.close-top{position:relative}.dg.main .close-button.close-bottom{position:absolute}.dg.main .close-button:hover{background-color:#111}.dg.a{float:right;margin-right:15px;overflow-y:visible}.dg.a.has-save>ul.close-top{margin-top:0}.dg.a.has-save>ul.close-bottom{margin-top:27px}.dg.a.has-save>ul.closed{margin-top:0}.dg.a .save-row{top:0;z-index:1002}.dg.a .save-row.close-top{position:relative}.dg.a .save-row.close-bottom{position:fixed}.dg li{-webkit-transition:height .1s ease-out;-o-transition:height .1s ease-out;-moz-transition:height .1s ease-out;transition:height .1s ease-out;-webkit-transition:overflow .1s linear;-o-transition:overflow .1s linear;-moz-transition:overflow .1s linear;transition:overflow .1s linear}.dg li:not(.folder){cursor:auto;height:27px;line-height:27px;padding:0 4px 0 5px}.dg li.folder{padding:0;border-left:4px solid rgba(0,0,0,0)}.dg li.title{cursor:pointer;margin-left:-4px}.dg .closed li:not(.title),.dg .closed ul li,.dg .closed ul li>*{height:0;overflow:hidden;border:0}.dg .cr{clear:both;padding-left:3px;height:27px;overflow:hidden}.dg .property-name{cursor:default;float:left;clear:left;width:40%;overflow:hidden;text-overflow:ellipsis}.dg .cr.function .property-name{width:100%}.dg .c{float:left;width:60%;position:relative}.dg .c input[type=text]{border:0;margin-top:4px;padding:3px;width:100%;float:right}.dg .has-slider input[type=text]{width:30%;margin-left:0}.dg .slider{float:left;width:66%;margin-left:-5px;margin-right:0;height:19px;margin-top:4px}.dg .slider-fg{height:100%}.dg .c input[type=checkbox]{margin-top:7px}.dg .c select{margin-top:5px}.dg .cr.function,.dg .cr.function .property-name,.dg .cr.function *,.dg .cr.boolean,.dg .cr.boolean *{cursor:pointer}.dg .cr.color{overflow:visible}.dg .selector{display:none;position:absolute;margin-left:-9px;margin-top:23px;z-index:10}.dg .c:hover .selector,.dg .selector.drag{display:block}.dg li.save-row{padding:0}.dg li.save-row .button{display:inline-block;padding:0px 6px}.dg.dialogue{background-color:#222;width:460px;padding:15px;font-size:13px;line-height:15px}#dg-new-constructor{padding:10px;color:#222;font-family:Monaco, monospace;font-size:10px;border:0;resize:none;box-shadow:inset 1px 1px 1px #888;word-wrap:break-word;margin:12px 0;display:block;width:440px;overflow-y:scroll;height:100px;position:relative}#dg-local-explain{display:none;font-size:11px;line-height:17px;border-radius:3px;background-color:#333;padding:8px;margin-top:10px}#dg-local-explain code{font-size:10px}#dat-gui-save-locally{display:none}.dg{color:#eee;font:11px 'Lucida Grande', sans-serif;text-shadow:0 -1px 0 #111}.dg.main::-webkit-scrollbar{width:5px;background:#1a1a1a}.dg.main::-webkit-scrollbar-corner{height:0;display:none}.dg.main::-webkit-scrollbar-thumb{border-radius:5px;background:#676767}.dg li:not(.folder){background:#1a1a1a;border-bottom:1px solid #2c2c2c}.dg li.save-row{line-height:25px;background:#dad5cb;border:0}.dg li.save-row select{margin-left:5px;width:108px}.dg li.save-row .button{margin-left:5px;margin-top:1px;border-radius:2px;font-size:9px;line-height:7px;padding:4px 4px 5px 4px;background:#c5bdad;color:#fff;text-shadow:0 1px 0 #b0a58f;box-shadow:0 -1px 0 #b0a58f;cursor:pointer}.dg li.save-row .button.gears{background:#c5bdad url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAANCAYAAAB/9ZQ7AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAQJJREFUeNpiYKAU/P//PwGIC/ApCABiBSAW+I8AClAcgKxQ4T9hoMAEUrxx2QSGN6+egDX+/vWT4e7N82AMYoPAx/evwWoYoSYbACX2s7KxCxzcsezDh3evFoDEBYTEEqycggWAzA9AuUSQQgeYPa9fPv6/YWm/Acx5IPb7ty/fw+QZblw67vDs8R0YHyQhgObx+yAJkBqmG5dPPDh1aPOGR/eugW0G4vlIoTIfyFcA+QekhhHJhPdQxbiAIguMBTQZrPD7108M6roWYDFQiIAAv6Aow/1bFwXgis+f2LUAynwoIaNcz8XNx3Dl7MEJUDGQpx9gtQ8YCueB+D26OECAAQDadt7e46D42QAAAABJRU5ErkJggg==) 2px 1px no-repeat;height:7px;width:8px}.dg li.save-row .button:hover{background-color:#bab19e;box-shadow:0 -1px 0 #b0a58f}.dg li.folder{border-bottom:0}.dg li.title{padding-left:16px;background:#000 url(data:image/gif;base64,R0lGODlhBQAFAJEAAP////Pz8////////yH5BAEAAAIALAAAAAAFAAUAAAIIlI+hKgFxoCgAOw==) 6px 10px no-repeat;cursor:pointer;border-bottom:1px solid rgba(255,255,255,0.2)}.dg .closed li.title{background-image:url(data:image/gif;base64,R0lGODlhBQAFAJEAAP////Pz8////////yH5BAEAAAIALAAAAAAFAAUAAAIIlGIWqMCbWAEAOw==)}.dg .cr.boolean{border-left:3px solid #806787}.dg .cr.color{border-left:3px solid}.dg .cr.function{border-left:3px solid #e61d5f}.dg .cr.number{border-left:3px solid #2FA1D6}.dg .cr.number input[type=text]{color:#2FA1D6}.dg .cr.string{border-left:3px solid #1ed36f}.dg .cr.string input[type=text]{color:#1ed36f}.dg .cr.function:hover,.dg .cr.boolean:hover{background:#111}.dg .c input[type=text]{background:#303030;outline:none}.dg .c input[type=text]:hover{background:#3c3c3c}.dg .c input[type=text]:focus{background:#494949;color:#fff}.dg .c .slider{background:#303030;cursor:ew-resize}.dg .c .slider-fg{background:#2FA1D6;max-width:100%}.dg .c .slider:hover{background:#3c3c3c}.dg .c .slider:hover .slider-fg{background:#44abda}
`);cw.inject(mw);var h_="dg",d_=72,f_=20,ro="Default",Cr=(function(){try{return!!window.localStorage}catch{return!1}})(),Nr=void 0,p_=!0,ms=void 0,Bl=!1,r0=[],gt=l(function s(e){var t=this,n=e||{};this.domElement=document.createElement("div"),this.__ul=document.createElement("ul"),this.domElement.appendChild(this.__ul),W.addClass(this.domElement,h_),this.__folders={},this.__controllers=[],this.__rememberedObjects=[],this.__rememberedObjectIndecesToControllers=[],this.__listening=[],n=J.defaults(n,{closeOnTop:!1,autoPlace:!0,width:s.DEFAULT_WIDTH}),n=J.defaults(n,{resizable:n.autoPlace,hideable:n.autoPlace}),J.isUndefined(n.load)?n.load={preset:ro}:n.preset&&(n.load.preset=n.preset),J.isUndefined(n.parent)&&n.hideable&&r0.push(this),n.resizable=J.isUndefined(n.parent)&&n.resizable,n.autoPlace&&J.isUndefined(n.scrollable)&&(n.scrollable=!0);var i=Cr&&localStorage.getItem(gs(this,"isLocal"))==="true",r=void 0,o=void 0;if(Object.defineProperties(this,{parent:{get:l(function(){return n.parent},"get$$1")},scrollable:{get:l(function(){return n.scrollable},"get$$1")},autoPlace:{get:l(function(){return n.autoPlace},"get$$1")},closeOnTop:{get:l(function(){return n.closeOnTop},"get$$1")},preset:{get:l(function(){return t.parent?t.getRoot().preset:n.load.preset},"get$$1"),set:l(function(f){t.parent?t.getRoot().preset=f:n.load.preset=f,xw(this),t.revert()},"set$$1")},width:{get:l(function(){return n.width},"get$$1"),set:l(function(f){n.width=f,fh(t,f)},"set$$1")},name:{get:l(function(){return n.name},"get$$1"),set:l(function(f){n.name=f,o&&(o.innerHTML=n.name)},"set$$1")},closed:{get:l(function(){return n.closed},"get$$1"),set:l(function(f){n.closed=f,n.closed?W.addClass(t.__ul,s.CLASS_CLOSED):W.removeClass(t.__ul,s.CLASS_CLOSED),this.onResize(),t.__closeButton&&(t.__closeButton.innerHTML=f?s.TEXT_OPEN:s.TEXT_CLOSED)},"set$$1")},load:{get:l(function(){return n.load},"get$$1")},useLocalStorage:{get:l(function(){return i},"get$$1"),set:l(function(f){Cr&&(i=f,f?W.bind(window,"unload",r):W.unbind(window,"unload",r),localStorage.setItem(gs(t,"isLocal"),f))},"set$$1")}}),J.isUndefined(n.parent)){if(this.closed=n.closed||!1,W.addClass(this.domElement,s.CLASS_MAIN),W.makeSelectable(this.domElement,!1),Cr&&i){t.useLocalStorage=!0;var a=localStorage.getItem(gs(this,"gui"));a&&(n.load=JSON.parse(a))}this.__closeButton=document.createElement("div"),this.__closeButton.innerHTML=s.TEXT_CLOSED,W.addClass(this.__closeButton,s.CLASS_CLOSE_BUTTON),n.closeOnTop?(W.addClass(this.__closeButton,s.CLASS_CLOSE_TOP),this.domElement.insertBefore(this.__closeButton,this.domElement.childNodes[0])):(W.addClass(this.__closeButton,s.CLASS_CLOSE_BOTTOM),this.domElement.appendChild(this.__closeButton)),W.bind(this.__closeButton,"click",function(){t.closed=!t.closed})}else{n.closed===void 0&&(n.closed=!0);var c=document.createTextNode(n.name);W.addClass(c,"controller-name"),o=Ed(t,c);var u=l(function(f){return f.preventDefault(),t.closed=!t.closed,!1},"onClickTitle");W.addClass(this.__ul,s.CLASS_CLOSED),W.addClass(o,"title"),W.bind(o,"click",u),n.closed||(this.closed=!1)}n.autoPlace&&(J.isUndefined(n.parent)&&(p_&&(ms=document.createElement("div"),W.addClass(ms,h_),W.addClass(ms,s.CLASS_AUTO_PLACE_CONTAINER),document.body.appendChild(ms),p_=!1),ms.appendChild(this.domElement),W.addClass(this.domElement,s.CLASS_AUTO_PLACE)),this.parent||fh(t,n.width)),this.__resizeHandler=function(){t.onResizeDebounced()},W.bind(window,"resize",this.__resizeHandler),W.bind(this.__ul,"webkitTransitionEnd",this.__resizeHandler),W.bind(this.__ul,"transitionend",this.__resizeHandler),W.bind(this.__ul,"oTransitionEnd",this.__resizeHandler),this.onResize(),n.resizable&&vw(this),r=l(function(){Cr&&localStorage.getItem(gs(t,"isLocal"))==="true"&&localStorage.setItem(gs(t,"gui"),JSON.stringify(t.getSaveObject()))},"saveToLocalStorage"),this.saveToLocalStorageIfPossible=r;function h(){var d=t.getRoot();d.width+=1,J.defer(function(){d.width-=1})}l(h,"resetWidth"),n.parent||h()},"GUI");gt.toggleHide=function(){Bl=!Bl,J.each(r0,function(s){s.domElement.style.display=Bl?"none":""})};gt.CLASS_AUTO_PLACE="a";gt.CLASS_AUTO_PLACE_CONTAINER="ac";gt.CLASS_MAIN="main";gt.CLASS_CONTROLLER_ROW="cr";gt.CLASS_TOO_TALL="taller-than-window";gt.CLASS_CLOSED="closed";gt.CLASS_CLOSE_BUTTON="close-button";gt.CLASS_CLOSE_TOP="close-top";gt.CLASS_CLOSE_BOTTOM="close-bottom";gt.CLASS_DRAG="drag";gt.DEFAULT_WIDTH=245;gt.TEXT_CLOSED="Close Controls";gt.TEXT_OPEN="Open Controls";gt._keydownHandler=function(s){document.activeElement.type!=="text"&&(s.which===d_||s.keyCode===d_)&&gt.toggleHide()};W.bind(window,"keydown",gt._keydownHandler,!1);J.extend(gt.prototype,{add:l(function(e,t){return Or(this,e,t,{factoryArgs:Array.prototype.slice.call(arguments,2)})},"add"),addColor:l(function(e,t){return Or(this,e,t,{color:!0})},"addColor"),remove:l(function(e){this.__ul.removeChild(e.__li),this.__controllers.splice(this.__controllers.indexOf(e),1);var t=this;J.defer(function(){t.onResize()})},"remove"),destroy:l(function(){if(this.parent)throw new Error("Only the root GUI should be removed with .destroy(). For subfolders, use gui.removeFolder(folder) instead.");this.autoPlace&&ms.removeChild(this.domElement);var e=this;J.each(this.__folders,function(t){e.removeFolder(t)}),W.unbind(window,"keydown",gt._keydownHandler,!1),m_(this)},"destroy"),addFolder:l(function(e){if(this.__folders[e]!==void 0)throw new Error('You already have a folder in this GUI by the name "'+e+'"');var t={name:e,parent:this};t.autoPlace=this.autoPlace,this.load&&this.load.folders&&this.load.folders[e]&&(t.closed=this.load.folders[e].closed,t.load=this.load.folders[e]);var n=new gt(t);this.__folders[e]=n;var i=Ed(this,n.domElement);return W.addClass(i,"folder"),n},"addFolder"),removeFolder:l(function(e){this.__ul.removeChild(e.domElement.parentElement),delete this.__folders[e.name],this.load&&this.load.folders&&this.load.folders[e.name]&&delete this.load.folders[e.name],m_(e);var t=this;J.each(e.__folders,function(n){e.removeFolder(n)}),J.defer(function(){t.onResize()})},"removeFolder"),open:l(function(){this.closed=!1},"open"),close:l(function(){this.closed=!0},"close"),hide:l(function(){this.domElement.style.display="none"},"hide"),show:l(function(){this.domElement.style.display=""},"show"),onResize:l(function(){var e=this.getRoot();if(e.scrollable){var t=W.getOffset(e.__ul).top,n=0;J.each(e.__ul.childNodes,function(i){e.autoPlace&&i===e.__save_row||(n+=W.getHeight(i))}),window.innerHeight-t-f_<n?(W.addClass(e.domElement,gt.CLASS_TOO_TALL),e.__ul.style.height=window.innerHeight-t-f_+"px"):(W.removeClass(e.domElement,gt.CLASS_TOO_TALL),e.__ul.style.height="auto")}e.__resize_handle&&J.defer(function(){e.__resize_handle.style.height=e.__ul.offsetHeight+"px"}),e.__closeButton&&(e.__closeButton.style.width=e.width+"px")},"onResize"),onResizeDebounced:J.debounce(function(){this.onResize()},50),remember:l(function(){if(J.isUndefined(Nr)&&(Nr=new pw,Nr.domElement.innerHTML=uw),this.parent)throw new Error("You can only call remember on a top level GUI.");var e=this;J.each(Array.prototype.slice.call(arguments),function(t){e.__rememberedObjects.length===0&&_w(e),e.__rememberedObjects.indexOf(t)===-1&&e.__rememberedObjects.push(t)}),this.autoPlace&&fh(this,this.width)},"remember"),getRoot:l(function(){for(var e=this;e.parent;)e=e.parent;return e},"getRoot"),getSaveObject:l(function(){var e=this.load;return e.closed=this.closed,this.__rememberedObjects.length>0&&(e.preset=this.preset,e.remembered||(e.remembered={}),e.remembered[this.preset]=Ho(this)),e.folders={},J.each(this.__folders,function(t,n){e.folders[n]=t.getSaveObject()}),e},"getSaveObject"),save:l(function(){this.load.remembered||(this.load.remembered={}),this.load.remembered[this.preset]=Ho(this),hh(this,!1),this.saveToLocalStorageIfPossible()},"save"),saveAs:l(function(e){this.load.remembered||(this.load.remembered={},this.load.remembered[ro]=Ho(this,!0)),this.load.remembered[e]=Ho(this),this.preset=e,dh(this,e,!0),this.saveToLocalStorageIfPossible()},"saveAs"),revert:l(function(e){J.each(this.__controllers,function(t){this.getRoot().load.remembered?o0(e||this.getRoot(),t):t.setValue(t.initialValue),t.__onFinishChange&&t.__onFinishChange.call(t,t.getValue())},this),J.each(this.__folders,function(t){t.revert(t)}),e||hh(this.getRoot(),!1)},"revert"),listen:l(function(e){var t=this.__listening.length===0;this.__listening.push(e),t&&a0(this.__listening)},"listen"),updateDisplay:l(function(){J.each(this.__controllers,function(e){e.updateDisplay()}),J.each(this.__folders,function(e){e.updateDisplay()})},"updateDisplay")});function Ed(s,e,t){var n=document.createElement("li");return e&&n.appendChild(e),t?s.__ul.insertBefore(n,t):s.__ul.appendChild(n),s.onResize(),n}l(Ed,"addRow");function m_(s){W.unbind(window,"resize",s.__resizeHandler),s.saveToLocalStorageIfPossible&&W.unbind(window,"unload",s.saveToLocalStorageIfPossible)}l(m_,"removeListeners");function hh(s,e){var t=s.__preset_select[s.__preset_select.selectedIndex];e?t.innerHTML=t.value+"*":t.innerHTML=t.value}l(hh,"markPresetModified");function gw(s,e,t){if(t.__li=e,t.__gui=s,J.extend(t,{options:l(function(o){if(arguments.length>1){var a=t.__li.nextElementSibling;return t.remove(),Or(s,t.object,t.property,{before:a,factoryArgs:[J.toArray(arguments)]})}if(J.isArray(o)||J.isObject(o)){var c=t.__li.nextElementSibling;return t.remove(),Or(s,t.object,t.property,{before:c,factoryArgs:[o]})}},"options"),name:l(function(o){return t.__li.firstElementChild.firstElementChild.innerHTML=o,t},"name"),listen:l(function(){return t.__gui.listen(t),t},"listen"),remove:l(function(){return t.__gui.remove(t),t},"remove")}),t instanceof ch){var n=new Ta(t.object,t.property,{min:t.__min,max:t.__max,step:t.__step});J.each(["updateDisplay","onChange","onFinishChange","step","min","max"],function(r){var o=t[r],a=n[r];t[r]=n[r]=function(){var c=Array.prototype.slice.call(arguments);return a.apply(n,c),o.apply(t,c)}}),W.addClass(e,"has-slider"),t.domElement.insertBefore(n.domElement,t.domElement.firstElementChild)}else if(t instanceof Ta){var i=l(function(o){if(J.isNumber(t.__min)&&J.isNumber(t.__max)){var a=t.__li.firstElementChild.firstElementChild.innerHTML,c=t.__gui.__listening.indexOf(t)>-1;t.remove();var u=Or(s,t.object,t.property,{before:t.__li.nextElementSibling,factoryArgs:[t.__min,t.__max,t.__step]});return u.name(a),c&&u.listen(),u}return o},"r");t.min=J.compose(i,t.min),t.max=J.compose(i,t.max)}else t instanceof n0?(W.bind(e,"click",function(){W.fakeEvent(t.__checkbox,"click")}),W.bind(t.__checkbox,"click",function(r){r.stopPropagation()})):t instanceof s0?(W.bind(e,"click",function(){W.fakeEvent(t.__button,"click")}),W.bind(e,"mouseover",function(){W.addClass(t.__button,"hover")}),W.bind(e,"mouseout",function(){W.removeClass(t.__button,"hover")})):t instanceof uh&&(W.addClass(e,"color"),t.updateDisplay=J.compose(function(r){return e.style.borderLeftColor=t.__color.toString(),r},t.updateDisplay),t.updateDisplay());t.setValue=J.compose(function(r){return s.getRoot().__preset_select&&t.isModified()&&hh(s.getRoot(),!0),r},t.setValue)}l(gw,"augmentController");function o0(s,e){var t=s.getRoot(),n=t.__rememberedObjects.indexOf(e.object);if(n!==-1){var i=t.__rememberedObjectIndecesToControllers[n];if(i===void 0&&(i={},t.__rememberedObjectIndecesToControllers[n]=i),i[e.property]=e,t.load&&t.load.remembered){var r=t.load.remembered,o=void 0;if(r[s.preset])o=r[s.preset];else if(r[ro])o=r[ro];else return;if(o[n]&&o[n][e.property]!==void 0){var a=o[n][e.property];e.initialValue=a,e.setValue(a)}}}}l(o0,"recallSavedValue");function Or(s,e,t,n){if(e[t]===void 0)throw new Error('Object "'+e+'" has no property "'+t+'"');var i=void 0;if(n.color)i=new uh(e,t);else{var r=[e,t].concat(n.factoryArgs);i=hw.apply(s,r)}n.before instanceof Ji&&(n.before=n.before.__li),o0(s,i),W.addClass(i.domElement,"c");var o=document.createElement("span");W.addClass(o,"property-name"),o.innerHTML=i.property;var a=document.createElement("div");a.appendChild(o),a.appendChild(i.domElement);var c=Ed(s,a,n.before);return W.addClass(c,gt.CLASS_CONTROLLER_ROW),i instanceof uh?W.addClass(c,"color"):W.addClass(c,tw(i.getValue())),gw(s,c,i),s.__controllers.push(i),i}l(Or,"_add");function gs(s,e){return document.location.href+"."+e}l(gs,"getLocalStorageHash");function dh(s,e,t){var n=document.createElement("option");n.innerHTML=e,n.value=e,s.__preset_select.appendChild(n),t&&(s.__preset_select.selectedIndex=s.__preset_select.length-1)}l(dh,"addPresetOption");function g_(s,e){e.style.display=s.useLocalStorage?"block":"none"}l(g_,"showHideExplain");function _w(s){var e=s.__save_row=document.createElement("li");W.addClass(s.domElement,"has-save"),s.__ul.insertBefore(e,s.__ul.firstChild),W.addClass(e,"save-row");var t=document.createElement("span");t.innerHTML="&nbsp;",W.addClass(t,"button gears");var n=document.createElement("span");n.innerHTML="Save",W.addClass(n,"button"),W.addClass(n,"save");var i=document.createElement("span");i.innerHTML="New",W.addClass(i,"button"),W.addClass(i,"save-as");var r=document.createElement("span");r.innerHTML="Revert",W.addClass(r,"button"),W.addClass(r,"revert");var o=s.__preset_select=document.createElement("select");if(s.load&&s.load.remembered?J.each(s.load.remembered,function(d,f){dh(s,f,f===s.preset)}):dh(s,ro,!1),W.bind(o,"change",function(){for(var d=0;d<s.__preset_select.length;d++)s.__preset_select[d].innerHTML=s.__preset_select[d].value;s.preset=this.value}),e.appendChild(o),e.appendChild(t),e.appendChild(n),e.appendChild(i),e.appendChild(r),Cr){var a=document.getElementById("dg-local-explain"),c=document.getElementById("dg-local-storage"),u=document.getElementById("dg-save-locally");u.style.display="block",localStorage.getItem(gs(s,"isLocal"))==="true"&&c.setAttribute("checked","checked"),g_(s,a),W.bind(c,"change",function(){s.useLocalStorage=!s.useLocalStorage,g_(s,a)})}var h=document.getElementById("dg-new-constructor");W.bind(h,"keydown",function(d){d.metaKey&&(d.which===67||d.keyCode===67)&&Nr.hide()}),W.bind(t,"click",function(){h.innerHTML=JSON.stringify(s.getSaveObject(),void 0,2),Nr.show(),h.focus(),h.select()}),W.bind(n,"click",function(){s.save()}),W.bind(i,"click",function(){var d=prompt("Enter a new preset name.");d&&s.saveAs(d)}),W.bind(r,"click",function(){s.revert()})}l(_w,"addSaveMenu");function vw(s){var e=void 0;s.__resize_handle=document.createElement("div"),J.extend(s.__resize_handle.style,{width:"6px",marginLeft:"-3px",height:"200px",cursor:"ew-resize",position:"absolute"});function t(r){return r.preventDefault(),s.width+=e-r.clientX,s.onResize(),e=r.clientX,!1}l(t,"drag");function n(){W.removeClass(s.__closeButton,gt.CLASS_DRAG),W.unbind(window,"mousemove",t),W.unbind(window,"mouseup",n)}l(n,"dragStop");function i(r){return r.preventDefault(),e=r.clientX,W.addClass(s.__closeButton,gt.CLASS_DRAG),W.bind(window,"mousemove",t),W.bind(window,"mouseup",n),!1}l(i,"dragStart"),W.bind(s.__resize_handle,"mousedown",i),W.bind(s.__closeButton,"mousedown",i),s.domElement.insertBefore(s.__resize_handle,s.domElement.firstElementChild)}l(vw,"addResizeHandle");function fh(s,e){s.domElement.style.width=e+"px",s.__save_row&&s.autoPlace&&(s.__save_row.style.width=e+"px"),s.__closeButton&&(s.__closeButton.style.width=e+"px")}l(fh,"setWidth");function Ho(s,e){var t={};return J.each(s.__rememberedObjects,function(n,i){var r={},o=s.__rememberedObjectIndecesToControllers[i];J.each(o,function(a,c){r[c]=e?a.initialValue:a.getValue()}),t[i]=r}),t}l(Ho,"getCurrentPreset");function xw(s){for(var e=0;e<s.__preset_select.length;e++)s.__preset_select[e].value===s.preset&&(s.__preset_select.selectedIndex=e)}l(xw,"setPresetSelectIndex");function a0(s){s.length!==0&&fw.call(window,function(){a0(s)}),J.each(s,function(e){e.updateDisplay()})}l(a0,"updateDisplays");var yw=gt;const $p=class $p{constructor(e){this.globeRadius=e,this.gui=new yw}addObjectOptions(e,t,{lat:n,lng:i,rotation:r,landHeight:o},a){const c=this.gui.__folders[e]??this.gui.addFolder(e),u=t.getObject(),h=c.addFolder(u.name+a);h.add(u,"visible"),h.add({scale:u.scale.x},"scale",0,5).onChange(v=>{u.scale.setScalar(v)});const d=u.clone();r&&d.rotateY(-gn.degToRad(r));const f=d.rotation.clone(),p={y:r??0};h.add(p,"y",0,360).name("rotation").onChange(v=>{u.rotation.copy(f),u.rotateY(gn.degToRad(v))});const _={lat:n,lng:i,landHeight:o??0};Object.keys(_).forEach(v=>{h.add(_,v,-360,360,1).onChange(()=>{t.applyLatLng(this.globeRadius+(_.landHeight??0),_.lat,_.lng),f.copy(u.rotation),u.rotateY(gn.degToRad(p.y))})})}};l($p,"ContinentDebugControls");let ph=$p;const Kp=class Kp{constructor(e,t=!1){this.properties=e,t&&(this.debugControls=new ph(e.globeRadius)),this.continent=this.constructContinent(),this.continent.name&&this.continent.traverse(n=>{n.userData.continent=this.continent.name})}getObject(){return this.continent}addTo(e){e.add(this.continent)}constructObject(e,t){const{lat:n,lng:i,rotation:r,landHeight:o=De.LevelOne,...a}=t,c=new e({...a});return c.applyLatLng(this.properties.globeRadius+o,n,i),r!==void 0&&c.getObject().rotateY(gn.degToRad(r)),c}constructObjectsGroup(e,t,n){const i=new xt;return i.name=t,n.forEach((r,o)=>{const a=this.constructObject(e,r);i.add(a.getObject()),this.debugControls?.addObjectOptions(t,a,r,o)}),i}constructLands(e,t){return this.constructObjectsGroup(rh,e,t)}constructTrees(e,t){return this.constructObjectsGroup(ah,e,t)}constructMountains(e,t){return this.constructObjectsGroup(oh,e,t)}constructHouses(e,t){return this.constructObjectsGroup(ih,e,t)}constructBuildings(e,t){return this.constructObjectsGroup(nh,e,t)}constructHuts(e,t){return this.constructObjectsGroup(sh,e,t)}};l(Kp,"BaseContinent");let $i=Kp;const bw=[{scale:1.5,landHeight:De.LevelTwo,lat:20,lng:100,rotation:10},{scale:1,landHeight:De.LevelOne,lat:40,lng:90,rotation:0}],Sw=[{scale:1.2,landHeight:De.LevelOne,lat:18,lng:88},{scale:1.5,landHeight:De.LevelOne,lat:23,lng:88},{scale:2,landHeight:De.LevelOne,lat:21,lng:83},{scale:1.2,landHeight:De.LevelOne,lat:40,lng:110},{scale:1.5,landHeight:De.LevelOne,lat:40,lng:105},{scale:2,landHeight:De.LevelOne,lat:35,lng:110}];var Os;let Mw=(Os=class extends $i{constructContinent(){const e=new xt;return e.name="aboutContinent",e.add(this.constructTrees("aboutTrees",Sw)),e.add(this.constructHouses("aboutHouses",bw)),e}},l(Os,"AboutContinent"),Os);const Ew=[{size:15,lat:53,lng:4,rotation:7,landHeight:De.LevelTwo-.75}],ww=[{scale:1,lat:48,lng:-20,landHeight:De.LevelTwo},{scale:1.2,lat:31,lng:-14,rotation:36,landHeight:De.LevelOne}],Tw=[{scale:1,lat:52,lng:-12,landHeight:De.LevelTwo},{scale:1.2,lat:48,lng:-10,landHeight:De.LevelTwo},{scale:1.2,lat:32,lng:-6,landHeight:De.LevelOne},{scale:1.5,lat:36,lng:-6,landHeight:De.LevelOne},{scale:1,lat:33,lng:-2,landHeight:De.LevelOne}],Aw=[{lat:40,lng:18,landHeight:De.LevelOne},{lat:35,lng:8,landHeight:De.LevelOne}];var Us;let Cw=(Us=class extends $i{constructContinent(){const e=new xt;return e.name="projectsContinent",e.add(this.constructMountains("projectsMountains",Ew)),e.add(this.constructHouses("projectsHouses",ww)),e.add(this.constructTrees("projectsTrees",Tw)),e.add(this.constructHuts("projectsHuts",Aw)),e}},l(Us,"ProjectsContinent"),Us);function __(s,e){if(e===Ev)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(e===Oc||e===k_){let t=s.getIndex();if(t===null){const o=[],a=s.getAttribute("position");if(a!==void 0){for(let c=0;c<a.count;c++)o.push(c);s.setIndex(o),t=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}const n=t.count-2,i=[];if(e===Oc)for(let o=1;o<=n;o++)i.push(t.getX(0)),i.push(t.getX(o)),i.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(i.push(t.getX(o)),i.push(t.getX(o+1)),i.push(t.getX(o+2))):(i.push(t.getX(o+2)),i.push(t.getX(o+1)),i.push(t.getX(o)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=s.clone();return r.setIndex(i),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),s}l(__,"toTrianglesDrawMode");const Jp=class Jp extends Mi{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new xh(t)}),this.register(function(t){return new yh(t)}),this.register(function(t){return new Rh(t)}),this.register(function(t){return new Ph(t)}),this.register(function(t){return new Lh(t)}),this.register(function(t){return new Sh(t)}),this.register(function(t){return new Mh(t)}),this.register(function(t){return new Eh(t)}),this.register(function(t){return new wh(t)}),this.register(function(t){return new vh(t)}),this.register(function(t){return new Th(t)}),this.register(function(t){return new bh(t)}),this.register(function(t){return new Ch(t)}),this.register(function(t){return new Ah(t)}),this.register(function(t){return new gh(t)}),this.register(function(t){return new Ih(t)}),this.register(function(t){return new Dh(t)})}load(e,t,n,i){const r=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const u=Gi.extractUrlBase(e);o=Gi.resolveURL(u,this.path)}else o=Gi.extractUrlBase(e);this.manager.itemStart(e);const a=l(function(u){i?i(u):console.error(u),r.manager.itemError(e),r.manager.itemEnd(e)},"_onError"),c=new ba(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(u){try{r.parse(u,o,function(h){t(h),r.manager.itemEnd(e)},a)}catch(h){a(h)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let r;const o={},a={},c=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===l0){try{o[Qe.KHR_BINARY_GLTF]=new Nh(e)}catch(d){i&&i(d);return}r=JSON.parse(o[Qe.KHR_BINARY_GLTF].content)}else r=JSON.parse(c.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const u=new Hh(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});u.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){const d=this.pluginCallbacks[h](u);d.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[d.name]=d,o[d.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){const d=r.extensionsUsed[h],f=r.extensionsRequired||[];switch(d){case Qe.KHR_MATERIALS_UNLIT:o[d]=new _h;break;case Qe.KHR_DRACO_MESH_COMPRESSION:o[d]=new Oh(r,this.dracoLoader);break;case Qe.KHR_TEXTURE_TRANSFORM:o[d]=new Uh;break;case Qe.KHR_MESH_QUANTIZATION:o[d]=new Fh;break;default:f.indexOf(d)>=0&&a[d]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+d+'".')}}u.setExtensions(o),u.setPlugins(a),u.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,r){n.parse(e,t,i,r)})}};l(Jp,"GLTFLoader");let mh=Jp;function Rw(){let s={};return{get:l(function(e){return s[e]},"get"),add:l(function(e,t){s[e]=t},"add"),remove:l(function(e){delete s[e]},"remove"),removeAll:l(function(){s={}},"removeAll")}}l(Rw,"GLTFRegistry");const Qe={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},Zp=class Zp{constructor(e){this.parser=e,this.name=Qe.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const r=t.json,c=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let u;const h=new We(16777215);c.color!==void 0&&h.setRGB(c.color[0],c.color[1],c.color[2],qt);const d=c.range!==void 0?c.range:0;switch(c.type){case"directional":u=new Sa(h),u.target.position.set(0,0,-1),u.add(u.target);break;case"point":u=new Mu(h),u.distance=d;break;case"spot":u=new bu(h),u.distance=d,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,u.angle=c.spot.outerConeAngle,u.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,u.target.position.set(0,0,-1),u.add(u.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return u.position.set(0,0,0),Dn(u,c),c.intensity!==void 0&&(u.intensity=c.intensity),u.name=t.createUniqueName(c.name||"light_"+e),i=Promise.resolve(u),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,r=n.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(c){return n._getNodeRef(t.cache,a,c)})}};l(Zp,"GLTFLightsExtension");let gh=Zp;const Qp=class Qp{constructor(){this.name=Qe.KHR_MATERIALS_UNLIT}getMaterialType(){return Jn}extendParams(e,t,n){const i=[];e.color=new We(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],qt),e.opacity=o[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",r.baseColorTexture,Ot))}return Promise.all(i)}};l(Qp,"GLTFMaterialsUnlitExtension");let _h=Qp;const em=class em{constructor(e){this.parser=e,this.name=Qe.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}};l(em,"GLTFMaterialsEmissiveStrengthExtension");let vh=em;const tm=class tm{constructor(e){this.parser=e,this.name=Qe.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:bn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new oe(a,a)}return Promise.all(r)}};l(tm,"GLTFMaterialsClearcoatExtension");let xh=tm;const nm=class nm{constructor(e){this.parser=e,this.name=Qe.KHR_MATERIALS_DISPERSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:bn}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}};l(nm,"GLTFMaterialsDispersionExtension");let yh=nm;const im=class im{constructor(e){this.parser=e,this.name=Qe.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:bn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}};l(im,"GLTFMaterialsIridescenceExtension");let bh=im;const sm=class sm{constructor(e){this.parser=e,this.name=Qe.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:bn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[];t.sheenColor=new We(0,0,0),t.sheenRoughness=0,t.sheen=1;const o=i.extensions[this.name];if(o.sheenColorFactor!==void 0){const a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],qt)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,Ot)),o.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}};l(sm,"GLTFMaterialsSheenExtension");let Sh=sm;const rm=class rm{constructor(e){this.parser=e,this.name=Qe.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:bn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(r)}};l(rm,"GLTFMaterialsTransmissionExtension");let Mh=rm;const om=class om{constructor(e){this.parser=e,this.name=Qe.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:bn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return t.attenuationColor=new We().setRGB(a[0],a[1],a[2],qt),Promise.all(r)}};l(om,"GLTFMaterialsVolumeExtension");let Eh=om;const am=class am{constructor(e){this.parser=e,this.name=Qe.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:bn}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}};l(am,"GLTFMaterialsIorExtension");let wh=am;const lm=class lm{constructor(e){this.parser=e,this.name=Qe.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:bn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return t.specularColor=new We().setRGB(a[0],a[1],a[2],qt),o.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,Ot)),Promise.all(r)}};l(lm,"GLTFMaterialsSpecularExtension");let Th=lm;const cm=class cm{constructor(e){this.parser=e,this.name=Qe.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:bn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(r)}};l(cm,"GLTFMaterialsBumpExtension");let Ah=cm;const um=class um{constructor(e){this.parser=e,this.name=Qe.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:bn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(r)}};l(um,"GLTFMaterialsAnisotropyExtension");let Ch=um;const hm=class hm{constructor(e){this.parser=e,this.name=Qe.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const r=i.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}};l(hm,"GLTFTextureBasisUExtension");let Rh=hm;const dm=class dm{constructor(e){this.parser=e,this.name=Qe.EXT_TEXTURE_WEBP}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=i.images[o.source];let c=n.textureLoader;if(a.uri){const u=n.options.manager.getHandler(a.uri);u!==null&&(c=u)}return n.loadTextureImage(e,o.source,c)}};l(dm,"GLTFTextureWebPExtension");let Ph=dm;const fm=class fm{constructor(e){this.parser=e,this.name=Qe.EXT_TEXTURE_AVIF}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=i.images[o.source];let c=n.textureLoader;if(a.uri){const u=n.options.manager.getHandler(a.uri);u!==null&&(c=u)}return n.loadTextureImage(e,o.source,c)}};l(fm,"GLTFTextureAVIFExtension");let Lh=fm;const pm=class pm{constructor(e){this.name=Qe.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){const c=i.byteOffset||0,u=i.byteLength||0,h=i.count,d=i.byteStride,f=new Uint8Array(a,c,u);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(h,d,f,i.mode,i.filter).then(function(p){return p.buffer}):o.ready.then(function(){const p=new ArrayBuffer(h*d);return o.decodeGltfBuffer(new Uint8Array(p),h,d,f,i.mode,i.filter),p})})}else return null}};l(pm,"GLTFMeshoptCompression");let Ih=pm;const mm=class mm{constructor(e){this.name=Qe.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const u of i.primitives)if(u.mode!==dn.TRIANGLES&&u.mode!==dn.TRIANGLE_STRIP&&u.mode!==dn.TRIANGLE_FAN&&u.mode!==void 0)return null;const o=n.extensions[this.name].attributes,a=[],c={};for(const u in o)a.push(this.parser.getDependency("accessor",o[u]).then(h=>(c[u]=h,c[u])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(u=>{const h=u.pop(),d=h.isGroup?h.children:[h],f=u[0].count,p=[];for(const _ of d){const v=new qe,g=new I,m=new At,T=new I(1,1,1),M=new jc(_.geometry,_.material,f);for(let S=0;S<f;S++)c.TRANSLATION&&g.fromBufferAttribute(c.TRANSLATION,S),c.ROTATION&&m.fromBufferAttribute(c.ROTATION,S),c.SCALE&&T.fromBufferAttribute(c.SCALE,S),M.setMatrixAt(S,v.compose(g,m,T));for(const S in c)if(S==="_COLOR_0"){const C=c[S];M.instanceColor=new Yr(C.array,C.itemSize,C.normalized)}else S!=="TRANSLATION"&&S!=="ROTATION"&&S!=="SCALE"&&_.geometry.setAttribute(S,c[S]);bt.prototype.copy.call(M,_),this.parser.assignFinalMaterial(M),p.push(M)}return h.isGroup?(h.clear(),h.add(...p),h):p[0]}))}};l(mm,"GLTFMeshGpuInstancing");let Dh=mm;const l0="glTF",Sr=12,v_={JSON:1313821514,BIN:5130562},gm=class gm{constructor(e){this.name=Qe.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,Sr),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==l0)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-Sr,r=new DataView(e,Sr);let o=0;for(;o<i;){const a=r.getUint32(o,!0);o+=4;const c=r.getUint32(o,!0);if(o+=4,c===v_.JSON){const u=new Uint8Array(e,Sr+o,a);this.content=n.decode(u)}else if(c===v_.BIN){const u=Sr+o;this.body=e.slice(u,u+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}};l(gm,"GLTFBinaryExtension");let Nh=gm;const _m=class _m{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Qe.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},c={},u={};for(const h in o){const d=kh[h]||h.toLowerCase();a[d]=o[h]}for(const h in e.attributes){const d=kh[h]||h.toLowerCase();if(o[h]!==void 0){const f=n.accessors[e.attributes[h]],p=ws[f.componentType];u[d]=p.name,c[d]=f.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(d,f){i.decodeDracoFile(h,function(p){for(const _ in p.attributes){const v=p.attributes[_],g=c[_];g!==void 0&&(v.normalized=g)}d(p)},a,u,qt,f)})})}};l(_m,"GLTFDracoMeshCompressionExtension");let Oh=_m;const vm=class vm{constructor(){this.name=Qe.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}};l(vm,"GLTFTextureTransformExtension");let Uh=vm;const xm=class xm{constructor(){this.name=Qe.KHR_MESH_QUANTIZATION}};l(xm,"GLTFMeshQuantizationExtension");let Fh=xm;const ym=class ym extends Yi{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i*3+i;for(let o=0;o!==i;o++)t[o]=n[r+o];return t}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=a*2,u=a*3,h=i-t,d=(n-t)/h,f=d*d,p=f*d,_=e*u,v=_-u,g=-2*p+3*f,m=p-f,T=1-g,M=m-f+d;for(let S=0;S!==a;S++){const C=o[v+S+a],P=o[v+S+c]*h,L=o[_+S+a],F=o[_+S]*h;r[S]=T*C+M*P+g*L+m*F}return r}};l(ym,"GLTFCubicSplineInterpolant");let Aa=ym;const Pw=new At,bm=class bm extends Aa{interpolate_(e,t,n,i){const r=super.interpolate_(e,t,n,i);return Pw.fromArray(r).normalize().toArray(r),r}};l(bm,"GLTFCubicSplineQuaternionInterpolant");let Bh=bm;const dn={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},ws={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},x_={9728:Ct,9729:Rt,9984:I_,9985:Go,9986:Er,9987:Kn},y_={33071:On,33648:$o,10497:nr},kl={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},kh={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},hi={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},Lw={CUBICSPLINE:void 0,LINEAR:Vr,STEP:Hr},zl={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function Iw(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new io({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:ti})),s.DefaultMaterial}l(Iw,"createDefaultMaterial");function Ui(s,e,t){for(const n in t.extensions)s[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}l(Ui,"addUnknownExtensionsToUserData");function Dn(s,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(s.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}l(Dn,"assignExtrasToUserData");function Dw(s,e,t){let n=!1,i=!1,r=!1;for(let u=0,h=e.length;u<h;u++){const d=e[u];if(d.POSITION!==void 0&&(n=!0),d.NORMAL!==void 0&&(i=!0),d.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(s);const o=[],a=[],c=[];for(let u=0,h=e.length;u<h;u++){const d=e[u];if(n){const f=d.POSITION!==void 0?t.getDependency("accessor",d.POSITION):s.attributes.position;o.push(f)}if(i){const f=d.NORMAL!==void 0?t.getDependency("accessor",d.NORMAL):s.attributes.normal;a.push(f)}if(r){const f=d.COLOR_0!==void 0?t.getDependency("accessor",d.COLOR_0):s.attributes.color;c.push(f)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c)]).then(function(u){const h=u[0],d=u[1],f=u[2];return n&&(s.morphAttributes.position=h),i&&(s.morphAttributes.normal=d),r&&(s.morphAttributes.color=f),s.morphTargetsRelative=!0,s})}l(Dw,"addMorphTargets");function Nw(s,e){if(s.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)s.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(s.morphTargetInfluences.length===t.length){s.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)s.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}l(Nw,"updateMorphTargets");function Ow(s){let e;const t=s.extensions&&s.extensions[Qe.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Hl(t.attributes):e=s.indices+":"+Hl(s.attributes)+":"+s.mode,s.targets!==void 0)for(let n=0,i=s.targets.length;n<i;n++)e+=":"+Hl(s.targets[n]);return e}l(Ow,"createPrimitiveKey");function Hl(s){let e="";const t=Object.keys(s).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+s[t[n]]+";";return e}l(Hl,"createAttributesKey");function zh(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}l(zh,"getNormalizedComponentScale");function Uw(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":s.search(/\.ktx2($|\?)/i)>0||s.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}l(Uw,"getImageURIMimeType");const Fw=new qe,Sm=class Sm{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new Rw,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,r=!1,o=-1;if(typeof navigator<"u"){const a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;const c=a.match(/Version\/(\d+)/);i=n&&c?parseInt(c[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||r&&o<98?this.textureLoader=new xu(this.options.manager):this.textureLoader=new Tu(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new ba(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){const a={scene:o[0][i.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:i.asset,parser:n,userData:{}};return Ui(r,a,i),Dn(a,i),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(a)})).then(function(){for(const c of a.scenes)c.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=t.length;i<r;i++){const o=t[i].joints;for(let a=0,c=o.length;a<c;a++)e[o[a]].isBone=!0}for(let i=0,r=e.length;i<r;i++){const o=e[i];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),r=l((o,a)=>{const c=this.associations.get(o);c!=null&&this.associations.set(a,c);for(const[u,h]of o.children.entries())r(h,a.children[u])},"updateMappings");return r(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const r=e(t[i]);r&&n.push(r)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(r,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Qe.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(r,o){n.load(Gi.resolveURL(t.uri,i.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const o=kl[i.type],a=ws[i.componentType],c=i.normalized===!0,u=new a(i.count*o);return Promise.resolve(new Bt(u,o,c))}const r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(o){const a=o[0],c=kl[i.type],u=ws[i.componentType],h=u.BYTES_PER_ELEMENT,d=h*c,f=i.byteOffset||0,p=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,_=i.normalized===!0;let v,g;if(p&&p!==d){const m=Math.floor(f/p),T="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+m+":"+i.count;let M=t.cache.get(T);M||(v=new u(a,m*p,i.count*p/h),M=new Vc(v,p/h),t.cache.add(T,M)),g=new Gc(M,c,f%p/h,_)}else a===null?v=new u(i.count*c):v=new u(a,f,i.count*c),g=new Bt(v,c,_);if(i.sparse!==void 0){const m=kl.SCALAR,T=ws[i.sparse.indices.componentType],M=i.sparse.indices.byteOffset||0,S=i.sparse.values.byteOffset||0,C=new T(o[1],M,i.sparse.count*m),P=new u(o[2],S,i.sparse.count*c);a!==null&&(g=new Bt(g.array.slice(),g.itemSize,g.normalized)),g.normalized=!1;for(let L=0,F=C.length;L<F;L++){const y=C[L];if(g.setX(y,P[L*c]),c>=2&&g.setY(y,P[L*c+1]),c>=3&&g.setZ(y,P[L*c+2]),c>=4&&g.setW(y,P[L*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}g.normalized=_}return g})}loadTexture(e){const t=this.json,n=this.options,r=t.textures[e].source,o=t.images[r];let a=this.textureLoader;if(o.uri){const c=n.manager.getHandler(o.uri);c!==null&&(a=c)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){const i=this,r=this.json,o=r.textures[e],a=r.images[t],c=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[c])return this.textureCache[c];const u=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=o.name||a.name||"",h.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(h.name=a.uri);const f=(r.samplers||{})[o.sampler]||{};return h.magFilter=x_[f.magFilter]||Rt,h.minFilter=x_[f.minFilter]||Kn,h.wrapS=y_[f.wrapS]||nr,h.wrapT=y_[f.wrapT]||nr,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==Ct&&h.minFilter!==Rt,i.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[c]=u,u}loadImageSource(e,t){const n=this,i=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(d=>d.clone());const o=i.images[e],a=self.URL||self.webkitURL;let c=o.uri||"",u=!1;if(o.bufferView!==void 0)c=n.getDependency("bufferView",o.bufferView).then(function(d){u=!0;const f=new Blob([d],{type:o.mimeType});return c=a.createObjectURL(f),c});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const h=Promise.resolve(c).then(function(d){return new Promise(function(f,p){let _=f;t.isImageBitmapLoader===!0&&(_=l(function(v){const g=new kt(v);g.needsUpdate=!0,f(g)},"onLoad")),t.load(Gi.resolveURL(d,r.path),_,void 0,p)})}).then(function(d){return u===!0&&a.revokeObjectURL(c),Dn(d,o),d.userData.mimeType=o.mimeType||Uw(o.uri),d}).catch(function(d){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),d});return this.sourceCache[e]=h,h}assignTexture(e,t,n,i){const r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[Qe.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[Qe.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const c=r.associations.get(o);o=r.extensions[Qe.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,c)}}return i!==void 0&&(o.colorSpace=i),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+n.uuid;let c=this.cache.get(a);c||(c=new Jr,on.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(a,c)),n=c}else if(e.isLine){const a="LineBasicMaterial:"+n.uuid;let c=this.cache.get(a);c||(c=new oa,on.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(a,c)),n=c}if(i||r||o){let a="ClonedMaterial:"+n.uuid+":";i&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let c=this.cache.get(a);c||(c=n.clone(),r&&(c.vertexColors=!0),o&&(c.flatShading=!0),i&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(a,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return io}loadMaterial(e){const t=this,n=this.json,i=this.extensions,r=n.materials[e];let o;const a={},c=r.extensions||{},u=[];if(c[Qe.KHR_MATERIALS_UNLIT]){const d=i[Qe.KHR_MATERIALS_UNLIT];o=d.getMaterialType(),u.push(d.extendParams(a,r,t))}else{const d=r.pbrMetallicRoughness||{};if(a.color=new We(1,1,1),a.opacity=1,Array.isArray(d.baseColorFactor)){const f=d.baseColorFactor;a.color.setRGB(f[0],f[1],f[2],qt),a.opacity=f[3]}d.baseColorTexture!==void 0&&u.push(t.assignTexture(a,"map",d.baseColorTexture,Ot)),a.metalness=d.metallicFactor!==void 0?d.metallicFactor:1,a.roughness=d.roughnessFactor!==void 0?d.roughnessFactor:1,d.metallicRoughnessTexture!==void 0&&(u.push(t.assignTexture(a,"metalnessMap",d.metallicRoughnessTexture)),u.push(t.assignTexture(a,"roughnessMap",d.metallicRoughnessTexture))),o=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),u.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=wn);const h=r.alphaMode||zl.OPAQUE;if(h===zl.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,h===zl.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==Jn&&(u.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new oe(1,1),r.normalTexture.scale!==void 0)){const d=r.normalTexture.scale;a.normalScale.set(d,d)}if(r.occlusionTexture!==void 0&&o!==Jn&&(u.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==Jn){const d=r.emissiveFactor;a.emissive=new We().setRGB(d[0],d[1],d[2],qt)}return r.emissiveTexture!==void 0&&o!==Jn&&u.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,Ot)),Promise.all(u).then(function(){const d=new o(a);return r.name&&(d.name=r.name),Dn(d,r),t.associations.set(d,{materials:e}),r.extensions&&Ui(i,d,r),d})}createUniqueName(e){const t=_t.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function r(a){return n[Qe.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(c){return b_(c,a,t)})}l(r,"createDracoPrimitive");const o=[];for(let a=0,c=e.length;a<c;a++){const u=e[a],h=Ow(u),d=i[h];if(d)o.push(d.promise);else{let f;u.extensions&&u.extensions[Qe.KHR_DRACO_MESH_COMPRESSION]?f=r(u):f=b_(new Gt,u,t),i[h]={primitive:u,promise:f},o.push(f)}}return Promise.all(o)}loadMesh(e){const t=this,n=this.json,i=this.extensions,r=n.meshes[e],o=r.primitives,a=[];for(let c=0,u=o.length;c<u;c++){const h=o[c].material===void 0?Iw(this.cache):this.getDependency("material",o[c].material);a.push(h)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(c){const u=c.slice(0,c.length-1),h=c[c.length-1],d=[];for(let p=0,_=h.length;p<_;p++){const v=h[p],g=o[p];let m;const T=u[p];if(g.mode===dn.TRIANGLES||g.mode===dn.TRIANGLE_STRIP||g.mode===dn.TRIANGLE_FAN||g.mode===void 0)m=r.isSkinnedMesh===!0?new Wc(v,T):new ft(v,T),m.isSkinnedMesh===!0&&m.normalizeSkinWeights(),g.mode===dn.TRIANGLE_STRIP?m.geometry=__(m.geometry,k_):g.mode===dn.TRIANGLE_FAN&&(m.geometry=__(m.geometry,Oc));else if(g.mode===dn.LINES)m=new qc(v,T);else if(g.mode===dn.LINE_STRIP)m=new Kr(v,T);else if(g.mode===dn.LINE_LOOP)m=new Yc(v,T);else if(g.mode===dn.POINTS)m=new ca(v,T);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+g.mode);Object.keys(m.geometry.morphAttributes).length>0&&Nw(m,r),m.name=t.createUniqueName(r.name||"mesh_"+e),Dn(m,r),g.extensions&&Ui(i,m,g),t.assignFinalMaterial(m),d.push(m)}for(let p=0,_=d.length;p<_;p++)t.associations.set(d[p],{meshes:e,primitives:p});if(d.length===1)return r.extensions&&Ui(i,d[0],r),d[0];const f=new xt;r.extensions&&Ui(i,f,r),t.associations.set(f,{meshes:e});for(let p=0,_=d.length;p<_;p++)f.add(d[p]);return f})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Ft(gn.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new lr(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Dn(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,r=t.joints.length;i<r;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const r=i.pop(),o=i,a=[],c=[];for(let u=0,h=o.length;u<h;u++){const d=o[u];if(d){a.push(d);const f=new qe;r!==null&&f.fromArray(r.array,u*16),c.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[u])}return new Xc(a,c)})}loadAnimation(e){const t=this.json,n=this,i=t.animations[e],r=i.name?i.name:"animation_"+e,o=[],a=[],c=[],u=[],h=[];for(let d=0,f=i.channels.length;d<f;d++){const p=i.channels[d],_=i.samplers[p.sampler],v=p.target,g=v.node,m=i.parameters!==void 0?i.parameters[_.input]:_.input,T=i.parameters!==void 0?i.parameters[_.output]:_.output;v.node!==void 0&&(o.push(this.getDependency("node",g)),a.push(this.getDependency("accessor",m)),c.push(this.getDependency("accessor",T)),u.push(_),h.push(v))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c),Promise.all(u),Promise.all(h)]).then(function(d){const f=d[0],p=d[1],_=d[2],v=d[3],g=d[4],m=[];for(let M=0,S=f.length;M<S;M++){const C=f[M],P=p[M],L=_[M],F=v[M],y=g[M];if(C===void 0)continue;C.updateMatrix&&C.updateMatrix();const E=n._createAnimationTracks(C,P,L,F,y);if(E)for(let w=0;w<E.length;w++)m.push(E[w])}const T=new mu(r,void 0,m);return Dn(T,i),T})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){const o=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let c=0,u=i.weights.length;c<u;c++)a.morphTargetInfluences[c]=i.weights[c]}),o})}loadNode(e){const t=this.json,n=this,i=t.nodes[e],r=n._loadNodeShallow(e),o=[],a=i.children||[];for(let u=0,h=a.length;u<h;u++)o.push(n.getDependency("node",a[u]));const c=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([r,Promise.all(o),c]).then(function(u){const h=u[0],d=u[1],f=u[2];f!==null&&h.traverse(function(p){p.isSkinnedMesh&&p.bind(f,Fw)});for(let p=0,_=d.length;p<_;p++)h.add(d[p]);return h})}_loadNodeShallow(e){const t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const r=t.nodes[e],o=r.name?i.createUniqueName(r.name):"",a=[],c=i._invokeOne(function(u){return u.createNodeMesh&&u.createNodeMesh(e)});return c&&a.push(c),r.camera!==void 0&&a.push(i.getDependency("camera",r.camera).then(function(u){return i._getNodeRef(i.cameraCache,r.camera,u)})),i._invokeAll(function(u){return u.createNodeAttachment&&u.createNodeAttachment(e)}).forEach(function(u){a.push(u)}),this.nodeCache[e]=Promise.all(a).then(function(u){let h;if(r.isBone===!0?h=new ra:u.length>1?h=new xt:u.length===1?h=u[0]:h=new bt,h!==u[0])for(let d=0,f=u.length;d<f;d++)h.add(u[d]);if(r.name&&(h.userData.name=r.name,h.name=o),Dn(h,r),r.extensions&&Ui(n,h,r),r.matrix!==void 0){const d=new qe;d.fromArray(r.matrix),h.applyMatrix4(d)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);if(!i.associations.has(h))i.associations.set(h,{});else if(r.mesh!==void 0&&i.meshCache.refs[r.mesh]>1){const d=i.associations.get(h);i.associations.set(h,{...d})}return i.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,r=new xt;n.name&&(r.name=i.createUniqueName(n.name)),Dn(r,n),n.extensions&&Ui(t,r,n);const o=n.nodes||[],a=[];for(let c=0,u=o.length;c<u;c++)a.push(i.getDependency("node",o[c]));return Promise.all(a).then(function(c){for(let h=0,d=c.length;h<d;h++)r.add(c[h]);const u=l(h=>{const d=new Map;for(const[f,p]of i.associations)(f instanceof on||f instanceof kt)&&d.set(f,p);return h.traverse(f=>{const p=i.associations.get(f);p!=null&&d.set(f,p)}),d},"reduceAssociations");return i.associations=u(r),r})}_createAnimationTracks(e,t,n,i,r){const o=[],a=e.name?e.name:e.uuid,c=[];hi[r.path]===hi.weights?e.traverse(function(f){f.morphTargetInfluences&&c.push(f.name?f.name:f.uuid)}):c.push(a);let u;switch(hi[r.path]){case hi.weights:u=xi;break;case hi.rotation:u=yi;break;case hi.translation:case hi.scale:u=Si;break;default:n.itemSize===1?u=xi:u=Si;break}const h=i.interpolation!==void 0?Lw[i.interpolation]:Vr,d=this._getArrayFromAccessor(n);for(let f=0,p=c.length;f<p;f++){const _=new u(c[f]+"."+hi[r.path],t.array,d,h);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(_),o.push(_)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=zh(t.constructor),i=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)i[r]=t[r]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=l(function(n){const i=this instanceof yi?Bh:Aa;return new i(this.times,this.values,this.getValueSize()/3,n)},"InterpolantFactoryMethodGLTFCubicSpline"),e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};l(Sm,"GLTFParser");let Hh=Sm;function Bw(s,e,t){const n=e.attributes,i=new vn;if(n.POSITION!==void 0){const a=t.json.accessors[n.POSITION],c=a.min,u=a.max;if(c!==void 0&&u!==void 0){if(i.set(new I(c[0],c[1],c[2]),new I(u[0],u[1],u[2])),a.normalized){const h=zh(ws[a.componentType]);i.min.multiplyScalar(h),i.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const a=new I,c=new I;for(let u=0,h=r.length;u<h;u++){const d=r[u];if(d.POSITION!==void 0){const f=t.json.accessors[d.POSITION],p=f.min,_=f.max;if(p!==void 0&&_!==void 0){if(c.setX(Math.max(Math.abs(p[0]),Math.abs(_[0]))),c.setY(Math.max(Math.abs(p[1]),Math.abs(_[1]))),c.setZ(Math.max(Math.abs(p[2]),Math.abs(_[2]))),f.normalized){const v=zh(ws[f.componentType]);c.multiplyScalar(v)}a.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(a)}s.boundingBox=i;const o=new an;i.getCenter(o.center),o.radius=i.min.distanceTo(i.max)/2,s.boundingSphere=o}l(Bw,"computeBounds");function b_(s,e,t){const n=e.attributes,i=[];function r(o,a){return t.getDependency("accessor",o).then(function(c){s.setAttribute(a,c)})}l(r,"assignAttributeAccessor");for(const o in n){const a=kh[o]||o.toLowerCase();a in s.attributes||i.push(r(n[o],a))}if(e.indices!==void 0&&!s.index){const o=t.getDependency("accessor",e.indices).then(function(a){s.setIndex(a)});i.push(o)}return et.workingColorSpace!==qt&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${et.workingColorSpace}" not supported.`),Dn(s,e),Bw(s,e,t),Promise.all(i).then(function(){return e.targets!==void 0?Dw(s,e.targets,t):s})}l(b_,"addPrimitiveAttributes");const zi=class zi{constructor(){return this.prefix="LOGGER:",zi.instance===void 0&&(zi.instance=this),zi.instance}static getInstance(){return new zi}logInfo(e,...t){console.info(this.prefix,"[INFO]",e,...t)}logWarning(e,...t){console.warn(this.prefix,"[WARN]",e,...t)}logError(e,...t){console.error(this.prefix,"[ERROR]",e,...t)}};l(zi,"Logger");let oo=zi;const bs=class bs{constructor(){return this.loader=new mh,bs.instance==null&&(bs.instance=this),bs.instance}async loadFile(e){try{return(await this.loader.loadAsync(e)).scene}catch(t){throw oo.getInstance().logError("Failed to load glTF file",e,`
`,t),t}}};l(bs,"GltfLoader");let Vh=bs;const kw=[{lat:33,lng:-77,rotation:30,landHeight:De.LevelOne},{scale:1.5,lat:30,lng:-72,landHeight:De.LevelOne},{scale:1.2,lat:26,lng:-68,landHeight:De.LevelOne},{lat:26,lng:-73,rotation:60,landHeight:De.LevelOne},{scale:.8,lat:31,lng:-67,landHeight:De.LevelOne},{scale:1,lat:12,lng:-79,landHeight:De.LevelTwo},{scale:1.2,lat:13,lng:-83,landHeight:De.LevelTwo}],zw=[{lat:21,lng:-83,rotation:65,landHeight:De.LevelTwo,floors:2},{lat:16,lng:-73,rotation:65,landHeight:De.LevelTwo}],Hw=[{scale:.7,lat:-1,lng:-78,landHeight:De.LevelOne},{lat:1,lng:-84,landHeight:De.LevelOne},{lat:7,lng:-94,landHeight:De.LevelOne}];var Fs;let Vw=(Fs=class extends $i{constructContinent(){const e=new xt;return e.name="workContinent",e.add(this.constructTrees("workTrees",kw)),e.add(this.constructBuildings("workBuildings",zw)),e.add(this.constructHuts("workHuts",Hw)),e}},l(Fs,"WorkContinent"),Fs);const Gw=[{scale:1.1,size:20,lat:-29,lng:-142,rotation:70,height:15,landHeight:De.LevelOne-2}],Ww=[{scale:1.2,lat:-11,lng:-158,landHeight:De.LevelOne},{lat:-16,lng:-158,landHeight:De.LevelOne},{scale:1.3,lat:-21,lng:-172,rotation:10,landHeight:De.LevelTwo},{scale:1.1,lat:-23,lng:-168,rotation:60,landHeight:De.LevelTwo},{lat:-21,lng:-177,rotation:30,landHeight:De.LevelTwo},{scale:1.2,lat:-25,lng:-174,landHeight:De.LevelTwo},{scale:1.5,lat:-50,lng:-142,landHeight:De.LevelOne},{scale:1.2,lat:-46,lng:-137,rotation:60,landHeight:De.LevelOne},{lat:-45,lng:-144,rotation:15,landHeight:De.LevelOne}],Xw=[{lat:-16,lng:-153,rotation:20,landHeight:De.LevelOne},{scale:.8,lat:-14,lng:-163,rotation:45,landHeight:De.LevelOne}],jw=[{scale:1,lat:-37,lng:-164,rotation:30,landHeight:De.LevelTwo},{scale:.7,lat:-30,lng:-168,rotation:30,landHeight:De.LevelTwo}];var Bs;let qw=(Bs=class extends $i{constructContinent(){const e=new xt;return e.name="lifeContinent",e.add(this.constructMountains("lifeMountains",Gw)),e.add(this.constructTrees("lifeTrees",Ww)),e.add(this.constructHouses("lifeHouses",Xw)),e.add(this.constructBuildings("lifeBuildings",jw)),e}},l(Bs,"LifeContinent"),Bs);const Yw=[{scale:1.2,lat:222,lng:-157,landHeight:De.LevelTwo},{lat:225,lng:-159,landHeight:De.LevelTwo},{scale:1.3,lat:-126,lng:-132,landHeight:De.LevelOne},{lat:-128,lng:-165,landHeight:De.LevelOne},{scale:.9,lat:-125,lng:-161,rotation:45,landHeight:De.LevelOne}],$w=[{scale:1,lat:-140,lng:-167,rotation:120,landHeight:De.LevelTwo}],Kw=[{scale:1,lat:-133,lng:-147,rotation:70,landHeight:De.LevelTwo,floors:2}],Jw=[{lat:-50,lng:-5,landHeight:De.LevelOne}];var ks;let Zw=(ks=class extends $i{constructContinent(){const e=new xt;return e.name="connectContinent",e.add(this.constructTrees("connectTrees",Yw)),e.add(this.constructHouses("connectHouses",$w)),e.add(this.constructBuildings("connectBuildings",Kw)),e.add(this.constructHuts("connectHuts",Jw)),e}},l(ks,"ConnectContinent"),ks);const Mm=class Mm extends cn{constructObject(){const{starsCount:e,endRadius:t=3e3}=this.properties,n=4,i=new xt;i.name="galaxy";for(let r=0;r<n;r++){const o=this.constructStarsGroup(e/n,t);i.add(o)}return i}constructStarsGroup(e,t){const n=new Gt;n.setAttribute("position",this.constructStarsPositions(e,t));const i=new Jr({color:Yt.star,size:5,map:this.createStarTexture(),transparent:!0,depthWrite:!1}),r=new ca(n,i);return r.name="stars",r}constructStarsPositions(e,t=3e3){const n=(this.properties.startRadius??700)+50,i=[];for(let r=0;r<e;r++){const o=new I;o.randomDirection(),o.multiplyScalar(gn.randFloat(n,t/2)),i.push(o.x,o.y,o.z)}return new Et(i,3)}createStarTexture(){const t=document.createElement("canvas");t.width=t.height=128;const n=t.getContext("2d"),i=128/2;n.beginPath(),n.arc(i,i,128/2,0,2*Math.PI,!1),n.closePath(),n.fillStyle="#ffffff",n.fill();const r=new kt(t);return r.needsUpdate=!0,r}animateGalaxy(e){const t=this.object.children,n=.02,i=1e3,r=l((o,a=1)=>{const c={y:o.rotation.y+n*a},u=e.createTween(o.rotation,c,{duration:i});u.start(),u.onComplete(()=>{e.removeTween(u),r(o,a)})},"animateStarsGroup");for(let o=0;o<t.length;o++)r(t[o],o%2===0?1:-1)}};l(Mm,"Galaxy");let Gh=Mm;const S_=l((s,e=.1,t=document.body,n=.06)=>{let i;const r=new oe,o=l(()=>{const{x:a,y:c}=s.position,{x:u,y:h}=r,d=Ra(a,u),f=Ra(c,h);if(d&&f){cancelAnimationFrame(i);return}s.position.x=Ca(a,u,n),s.position.y=Ca(c,h,n),i=requestAnimationFrame(o)},"animate");t.addEventListener("mousemove",a=>{cancelAnimationFrame(i);const c=t.clientWidth/2,u=t.clientHeight/2;r.x=-(a.clientX-c)*e,r.y=(a.clientY-u)*e,i=requestAnimationFrame(o)})},"enableParallax"),Qw=l((s,e=.1,t=.06)=>{if(!("ondeviceorientation"in window))return;let n;const i=new oe,r=l(()=>{const{x:o,y:a}=s.position,{x:c,y:u}=i,h=Ra(o,c),d=Ra(a,u);if(h&&d){cancelAnimationFrame(n);return}s.position.x=Ca(o,c,t),s.position.y=Ca(a,u,t),n=requestAnimationFrame(r)},"animate");window.addEventListener("deviceorientation",o=>{cancelAnimationFrame(n);const{beta:a,gamma:c}=o;!c||!a||!(a>=0&&a<=90)||(i.x=c*100*e,i.y=-((a-45)*150)*e,n=requestAnimationFrame(r))})},"enableParallaxMobile"),Ca=l((s,e,t)=>(1-t)*s+t*e,"linearlyInterpolate"),Ra=l((s,e,t=1e-4)=>Math.abs(e-s)<t,"areNearlyEqual"),wd=l(()=>window.innerHeight>window.innerWidth,"isScreenPortrait"),eT={cameraDistanceUpContinent:100,cameraDistanceToContinent:300,cameraRotation:0,cameraLeftSpace:0,cameraTopSpace:65},tT={cameraDistanceUpContinent:100,cameraDistanceToContinent:150,cameraRotation:30,cameraLeftSpace:50,cameraTopSpace:0},Em=class Em{constructor(e,t,n){this.three=e,this.sun=n,this.cameraAnimationOptions={duration:2e3,easing:gi.Cubic.Out},this.onContinentClickCallbacks=[],this.continentObject=t.getObject(),this.continentShadowRoot=document.querySelector(`mp-${qa(this.continentObject.name)}`)?.shadowRoot}setupEventHandlers(){this.setupContinentClick(),this.setupContinentMouseOver()}setupContinentClick(){this.three.getSelector().onClick(this.continentObject,()=>{this.onContinentClickCallbacks.forEach(e=>e())})}setupContinentMouseOver(){const e=this.three.getSelector(),t=this.three.getEventHandler(),n=l(()=>this.updateContinentPinPosition(),"updateContinentPinPosition");e.onMouseOver(this.continentObject,()=>{n(),this.onContinentMouseOver(),t.onObjectMove(this.continentObject,n)}),e.onMouseOut(this.continentObject,()=>{this.onContinentMouseOut(),t.removeObjectMoveListener(this.continentObject,n)})}onContinentClick(e){this.onContinentClickCallbacks.push(e)}openContinent(){this.handleContinentClick()}handleContinentClick(){if(this.isContinentInfoOpen()||this.isAnyContinentInfoOpening())return;const e=ju(this.continentObject),t=new I(0,0,0),n=r_(t,e),i=this.three.getControls();i.getSpinControls().trackballRadius=50,i.setRotationAxis(n);const r=this.getContinentCameraTransform(n,e),o=this.three.getControls().getCamera(),a=this.three.getAnimator();[o,this.sun].forEach(c=>{a.animateObjectToTarget(c,r.position,r.quaternion,this.cameraAnimationOptions)}),this.openContinentInfo(this.cameraAnimationOptions.duration/2)}openContinentInfo(e){document.querySelector("mp-continents > *[open]")?.removeAttribute("open");const t=this.continentShadowRoot.host;t?.setAttribute("opening",""),setTimeout(()=>{t?.setAttribute("open",""),t?.removeAttribute("opening")},e)}isContinentInfoOpen(){return this.getContinentInfo().hasAttribute("open")??!1}isAnyContinentInfoOpening(){return!!document.querySelector("mp-continents > *[opening]")}getContinentCameraTransform(e,t){const{cameraDistanceUpContinent:n,cameraDistanceToContinent:i,cameraRotation:r,cameraLeftSpace:o,cameraTopSpace:a}=wd()?eT:tT,c=new bt;c.lookAt(e),c.position.copy(t),c.translateZ(n).translateX(i),c.lookAt(t);const u=$E(c),h=new I().copy(e).applyAxisAngle(u,gn.degToRad(r)),d=new At().setFromRotationMatrix(new qe().lookAt(c.position,t,h));return c.quaternion.copy(d),c.translateX(-o),c.translateY(a),{position:c.position,quaternion:c.quaternion}}onContinentMouseOver(){if(this.isContinentInfoOpen()||this.isAnyContinentInfoOpening())return;const e=this.three.getRenderer().getCanvas(),t=this.getContinentPinElement();e.classList.add("has-pointer"),t.setAttribute("mouseover","")}onContinentMouseOut(){const e=this.getContinentPinElement(),t=this.three.getRenderer().getCanvas();e.removeAttribute("mouseover"),t.classList.remove("has-pointer")}updateContinentPinPosition(){const e=this.three.getRenderer().getCanvas(),t=this.three.getControls().getCamera(),n=ju(this.continentObject),i=new I(0,0,0),r=r_(i,n);n.add(r.clone().multiplyScalar(-5));const o=KE(n,t,e),{x:a,y:c}=o;this.getContinentPinElement().style.setProperty("transform",`translate(-50%, -50%) translate(${a}px, ${c}px)`)}getContinentPinElement(){return this.continentShadowRoot.querySelector("mp-continent-pin")}getContinentInfo(){return this.continentShadowRoot.querySelector("mp-continent-info")}};l(Em,"ContinentInteractor");let Wh=Em;const nT=new I(0,0,450),iT=new I(0,0,800),sT="https://fawadali.dev/assets/geometries/continents.gltf";var Wi;let rT=(Wi=class{constructor(e){this.onLoadCallbacks=[],this.continents={},this.cameraAnimationOptions={duration:2e3,easing:gi.Cubic.Out},this.three=new Ju(e),this.setupDefaultCameraConfig(),this.initializePlanet().then(()=>{this.onLoadCallbacks.forEach(t=>t(this))})}static build(e){return new Wi(e)}async initializePlanet(){const e=this.three.getSelector(),t=this.three.getControls().getCamera(),n=this.three.getScene(),i=new Qu({size:10});i.setPosition(t.position),i.addTo(n),this.sun=i;const r=new xt;S_(r,.0075),Qw(r,.0075),r.name="planet",n.add(r);const o=new Zu({size:100});o.addTo(r);const a=o.getRadius();e.intersectButIgnoreObject(o.getObject()),this.three.getControls().setSpinControlsObject(r,a);const c=t.position.z,u=t.far,h=new Gh({starsCount:1e3,startRadius:c,endRadius:u});h.animateGalaxy(this.getAnimator()),S_(h.getObject(),.075),h.addTo(n);const d=new th({cloudsCount:5,orbitRadius:a+40,baseCloudSize:15});d.animateClouds(this.getAnimator()),d.addTo(r);const f=await this.loadContinentsLand(),p=[new Mw({globeRadius:a}),new Cw({globeRadius:a}),new Vw({globeRadius:a}),new qw({globeRadius:a}),new Zw({globeRadius:a})];for(const _ of p){const v=_.getObject(),g=f[v.name];g.name=g.name+"Land",v.add(g),_.addTo(r);const m=new Wh(this.three,_,this.sun.getObject());m.setupEventHandlers(),this.continents[v.name]={continent:_,continentInteractor:m}}}resetControls(){const e=this.three.getControls(),t=this.three.getAnimator(),n=e.getDefaultCameraState();e.resetSpinControls(),[e.getCamera(),this.sun.getObject()].forEach(i=>{t.animateObjectToTarget(i,n.position,n.quaternion,this.cameraAnimationOptions)})}setupDefaultCameraConfig(){const e=this.three.getControls().getCamera(),t=this.three.getControls().getDefaultCameraState(),n=this.getCameraConfigForScreen();e.position.copy(n),t.position.copy(n),window.addEventListener("resize",()=>{t.position.copy(this.getCameraConfigForScreen())})}onLoad(e){this.onLoadCallbacks.push(e)}getScene(){return this.three.getScene()}getAnimator(){return this.three.getAnimator()}getContinents(){return this.continents}async loadContinentsLand(){const t=await new Vh().loadFile(sT),n={};for(const i of t.children)n[i.name]=i;return n}getCameraConfigForScreen(){return wd()?iT:nT}},l(Wi,"Planet"),Wi);const wm=class wm{constructor(){this.historyStack=[],this.routeHandlers={}}initialize(){this.setupDOMEvents()}setFallbackRoute(e){this.fallbackRoute=e}addRoute(e,t){this.routeHandlers[e]=t}to(e){this.runRouteHandler(e,()=>{window.history.pushState(null,"",this.prependBaseURL(e)),this.historyStack.push(e)})}replace(e){this.runRouteHandler(e,()=>{window.history.replaceState(null,"",this.prependBaseURL(e)),this.historyStack.length>0&&(this.historyStack[this.historyStack.length-1]=e)})}back(){window.history.back(),this.historyStack.pop()}getCurrentRoute(){return this.historyStack[this.historyStack.length-1]}runRouteHandler(e,t){if(this.routeHandlers[e]){this.routeHandlers[e](),t?.();return}oo.getInstance().logError(`No route defined for the path "${e}".`),this.fallbackRoute&&(this.replace(this.fallbackRoute),oo.getInstance().logWarning(`Using fallback route "${e}".`))}};l(wm,"Router");let Xh=wm;const Hi=class Hi extends Xh{constructor(){return super(),Hi.instance===void 0&&(Hi.instance=this),Hi.instance}static getInstance(){return new Hi}setupDOMEvents(){const e=this.getRouteFromHash();document.readyState==="complete"?this.replace(e):window.addEventListener("load",()=>this.replace(e)),window.addEventListener("hashchange",()=>{this.runRouteHandler(this.getRouteFromHash())})}prependBaseURL(e){return`https://fawadali.dev/#${e}`}getRouteFromHash(){const e=window.location.hash.slice(1);return e===""?"/":e}};l(Hi,"HashRouter");let ao=Hi;const oT=`<main class="planet">
  <canvas id="planet-canvas"></canvas>
</main>
`,aT=`.planet {
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
`;var lT=Object.getOwnPropertyDescriptor,cT=l((s,e,t,n)=>{for(var i=n>1?void 0:n?lT(e,t):e,r=s.length-1,o;r>=0;r--)(o=s[r])&&(i=o(i)||i);return i},"__decorateClass$c"),zs;let jh=(zs=class extends Pt{constructor(){super(...arguments),this.router=ao.getInstance()}onInit(){const e=this.shadowDOM.querySelector("#planet-canvas");window.planet=rT.build({canvasElement:e}),this.closeContinentOnEscape(),window.planet.onLoad(()=>{this.router.addRoute("/",()=>this.closeOpenContinent()),this.setupContinentsRouting()})}closeOpenContinent(){window.planet.resetControls(),document.querySelector("mp-continents > *[open]")?.removeAttribute("open")}closeContinentOnEscape(){document.addEventListener("keydown",e=>{const t=!!document.querySelector("mp-continents > *[open]");e.key!=="Escape"||!t||this.router.to("/")})}setupContinentsRouting(){const e=window.planet.getContinents(),t=document.querySelector("mp-planet-splash");for(const n in e){const i=qa(`/${n}`);this.router.addRoute(i,()=>{e[n].continentInteractor.openContinent(),t?.hasAttribute("closed")||setTimeout(()=>{(t?.shadowRoot?.firstChild).click()})}),e[n].continentInteractor.onContinentClick(()=>this.router.to(i))}this.router.setFallbackRoute("/"),this.router.initialize()}},l(zs,"Planet"),zs);jh=cT([Dt(oT),Qt(aT)],jh);wt(jh);const uT="https://fawadali.dev/assets/./planet-icon-01.ico",hT="https://fawadali.dev/assets/./planet-icon-02.ico",dT="https://fawadali.dev/assets/./planet-icon-03.ico",fT="https://fawadali.dev/assets/./planet-icon-04.ico",pT="https://fawadali.dev/assets/./planet-icon-05.ico",mT="https://fawadali.dev/assets/./planet-icon-06.ico",gT="https://fawadali.dev/assets/./planet-icon-07.ico",_T="https://fawadali.dev/assets/./planet-icon-08.ico",vT="https://fawadali.dev/assets/./planet-icon-09.ico",xT="https://fawadali.dev/assets/./planet-icon-10.ico",yT="https://fawadali.dev/assets/./planet-icon-11.ico",bT=Object.freeze(Object.defineProperty({__proto__:null,planetFavicon01:uT,planetFavicon02:hT,planetFavicon03:dT,planetFavicon04:fT,planetFavicon05:pT,planetFavicon06:mT,planetFavicon07:gT,planetFavicon08:_T,planetFavicon09:vT,planetFavicon10:xT,planetFavicon11:yT},Symbol.toStringTag,{value:"Module"})),Tm=class Tm extends Pt{constructor(){super(...arguments),this.frameDelay=600}onInit(){this.animateFavicon()}animateFavicon(){const e=document.head.querySelector('link[rel="icon"]'),t=Object.values(bT);let n=0;setInterval(()=>{e.href=t[n++],n===t.length&&(n=0)},this.frameDelay)}};l(Tm,"PlanetFavicon");let qh=Tm;wt(qh);const ST=`<header
  class="planet-splash"
  on:click="this.onHeaderClick"
  on:mouseover="this.onMouseOver"
  on:mouseout="this.onMouseOut"
>
  <mp-heading level="h1" class="planet-splash-title">My Planet</mp-heading>
  <mp-arrow-button :enterButton>Enter</mp-arrow-button>
</header>
`,MT=`:host {
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
`;var ET=Object.getOwnPropertyDescriptor,wT=l((s,e,t,n)=>{for(var i=n>1?void 0:n?ET(e,t):e,r=s.length-1,o;r>=0;r--)(o=s[r])&&(i=o(i)||i);return i},"__decorateClass$b"),Hs;let Yh=(Hs=class extends Pt{onInit(){window.planet.onLoad(()=>{this.planetObject=window.planet.getScene().getObjectByName("planet"),this.planetObject?.scale.setScalar(.5),document.body.removeAttribute("loading")})}onHeaderClick(){if(!this.planetObject)return;const e=new I().setScalar(1),t=window.planet.getAnimator().createTween(this.planetObject.scale,e,{duration:2e3,easing:gi.Quintic.Out});this.setAttribute("closed",""),t.start()}onMouseOver(){this.getElement("enterButton")?.setAttribute("active","")}onMouseOut(){this.getElement("enterButton")?.removeAttribute("active")}},l(Hs,"PlanetSplash"),Hs);Yh=wT([Dt(ST),Qt(MT)],Yh);wt(Yh);const TT=`<mp-backdrop :backdrop on:click="this.onMenuToggleClick">
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
`,AT=`:host {
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
`;var CT=Object.getOwnPropertyDescriptor,RT=l((s,e,t,n)=>{for(var i=n>1?void 0:n?CT(e,t):e,r=s.length-1,o;r>=0;r--)(o=s[r])&&(i=o(i)||i);return i},"__decorateClass$a"),Vs;let $h=(Vs=class extends Pt{constructor(){super(...arguments),this.router=ao.getInstance(),this.radius=8,this.startAngle=0,this.rotationAngle=90}onInit(){const e=this.constructMenuOptionsStyles(),t=new CSSStyleSheet;t.replaceSync(e),this.shadowDOM.adoptedStyleSheets.push(t)}onMenuToggleClick(e){e.stopPropagation(),this.hasAttribute("open")?(this.removeAttribute("open"),this.getElement("backdrop")?.removeAttribute("active")):(this.setAttribute("open",""),this.getElement("backdrop")?.setAttribute("active",""))}onBackDropClick(){this.removeAttribute("open"),this.getElement("backdrop")?.removeAttribute("active")}getMenuItemClickListener(e){return()=>this.router.to(e)}constructMenuOptionsStyles(){const e=[...this.getElement("continentsMenuOptions")?.children??[]],t=e.length-1,n=this.startAngle+this.rotationAngle/t;return e.reduce((r,o,a)=>{const c=this.getMenuItemSelector(a);return r+=`${c} {
        transform: ${this.getMenuItemTransformStyle(this.radius,n*a)};
      }
      `,r},"")}getMenuItemSelector(e){return`:host([open]) > mp-backdrop > .continents-menu-options > mp-circle-button:nth-child(${e+1})`}getMenuItemTransformStyle(e,t){return`rotate(${t}deg) translate(${e}rem) rotate(${-t}deg)`}},l(Vs,"ContinentsMenu"),Vs);$h=RT([Dt(TT),Qt(AT)],$h);wt($h);const PT=`<header :continentHeader class="continent-header">
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
`,LT=`.continent-header {
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
`;var IT=Object.defineProperty,DT=Object.getOwnPropertyDescriptor,c0=l((s,e,t,n)=>{for(var i=n>1?void 0:n?DT(e,t):e,r=s.length-1,o;r>=0;r--)(o=s[r])&&(i=(n?o(e,t,i):o(i))||i);return n&&i&&IT(e,t,i),i},"__decorateClass$9"),Gs;let Pa=(Gs=class extends Pt{constructor(){super(...arguments),this.router=ao.getInstance()}onBackClick(e){e.stopPropagation(),this.router.to("/")}},l(Gs,"ContinentHeader"),Gs);c0([Hn()],Pa.prototype,"icon",2);Pa=c0([Dt(PT),Qt(LT)],Pa);wt(Pa);const NT=`<slot></slot>
`;var OT=Object.getOwnPropertyDescriptor,UT=l((s,e,t,n)=>{for(var i=n>1?void 0:n?OT(e,t):e,r=s.length-1,o;r>=0;r--)(o=s[r])&&(i=o(i)||i);return i},"__decorateClass$8"),Ws;let Kh=(Ws=class extends Pt{},l(Ws,"ContinentBody"),Ws);Kh=UT([Dt(NT)],Kh);wt(Kh);const FT=`<article
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
`,BT=`:host {
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
`;var kT=Object.getOwnPropertyDescriptor,zT=l((s,e,t,n)=>{for(var i=n>1?void 0:n?kT(e,t):e,r=s.length-1,o;r>=0;r--)(o=s[r])&&(i=o(i)||i);return i},"__decorateClass$7"),Xs;let Jh=(Xs=class extends Pt{onInit(){this.continent=this.getElement("continent"),this.continentBody=this.getElement("continentBody")}static get observedAttributes(){return["open"]}attributeChangedCallback(e){e==="open"&&this.isContentScrollable()&&this.continent.classList.add("scrollable")}onContinentScroll(){const e=wd()?80:.35*document.documentElement.clientHeight,t=this.continent.scrollTop-e;t>0?this.continentBody.style.clipPath=`polygon(0 ${t}px, 100% ${t}px, 100% 100%, 0 100%)`:this.continentBody.removeAttribute("style")}isContentScrollable(){return this.continent.scrollHeight>this.continent.offsetHeight}},l(Xs,"ContinentInfo"),Xs);Jh=zT([Dt(FT),Qt(BT)],Jh);wt(Jh);const HT=`<div class="continent-pin">
  <div class="continent-pin-content">
    <mp-heading level="h3" class="continent-pin-title">
      <slot name="title"></slot>
    </mp-heading>
    <slot name="subtitle" class="continent-pin-subtitle"></slot>
  </div>
  <mp-icon icon="\${this.icon}" class="continent-pin-icon"></mp-icon>
</div>
`,VT=`:host {
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
`;var GT=Object.defineProperty,WT=Object.getOwnPropertyDescriptor,u0=l((s,e,t,n)=>{for(var i=n>1?void 0:n?WT(e,t):e,r=s.length-1,o;r>=0;r--)(o=s[r])&&(i=(n?o(e,t,i):o(i))||i);return n&&i&&GT(e,t,i),i},"__decorateClass$6"),js;let La=(js=class extends Pt{},l(js,"ContinentPin"),js);u0([Hn()],La.prototype,"icon",2);La=u0([Dt(HT),Qt(VT)],La);wt(La);const XT=`<section>
  <slot name="project-title"></slot>
  <slot name="project-description"></slot>
  <slot name="project-links"></slot>
</section>
`;var jT=Object.getOwnPropertyDescriptor,qT=l((s,e,t,n)=>{for(var i=n>1?void 0:n?jT(e,t):e,r=s.length-1,o;r>=0;r--)(o=s[r])&&(i=o(i)||i);return i},"__decorateClass$5"),qs;let Zh=(qs=class extends Pt{},l(qs,"Project"),qs);Zh=qT([Dt(XT)],Zh);wt(Zh);const Am=class Am extends Pt{static get observedAttributes(){return["open"]}attributeChangedCallback(e,t,n){if(e!=="open")return;const i=this.shadowDOM.querySelector("mp-continent-info");n===null?i?.removeAttribute(e):i?.setAttribute(e,n)}};l(Am,"Continent");let Ki=Am;const YT=`<mp-continent-pin icon="about-continent">
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
`,$T=`.dev-icons {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.dev-icons > mp-icon {
  width: 3.5rem;
  height: 3.5rem;
}
`;var KT=Object.getOwnPropertyDescriptor,JT=l((s,e,t,n)=>{for(var i=n>1?void 0:n?KT(e,t):e,r=s.length-1,o;r>=0;r--)(o=s[r])&&(i=o(i)||i);return i},"__decorateClass$4"),Ys;let Qh=(Ys=class extends Ki{},l(Ys,"AboutContinent"),Ys);Qh=JT([Dt(YT),Qt($T)],Qh);wt(Qh);const ZT=`<mp-continent-pin icon="connect-continent">
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
`;var QT=Object.getOwnPropertyDescriptor,eA=l((s,e,t,n)=>{for(var i=n>1?void 0:n?QT(e,t):e,r=s.length-1,o;r>=0;r--)(o=s[r])&&(i=o(i)||i);return i},"__decorateClass$3"),$s;let ed=($s=class extends Ki{},l($s,"ConnectContinent"),$s);ed=eA([Dt(ZT)],ed);wt(ed);const tA=`<mp-continent-pin icon="life-continent">
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
`;var nA=Object.getOwnPropertyDescriptor,iA=l((s,e,t,n)=>{for(var i=n>1?void 0:n?nA(e,t):e,r=s.length-1,o;r>=0;r--)(o=s[r])&&(i=o(i)||i);return i},"__decorateClass$2"),Ks;let td=(Ks=class extends Ki{},l(Ks,"LifeContinent"),Ks);td=iA([Dt(tA)],td);wt(td);const sA=`<mp-continent-pin icon="projects-continent">
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
`;var rA=Object.getOwnPropertyDescriptor,oA=l((s,e,t,n)=>{for(var i=n>1?void 0:n?rA(e,t):e,r=s.length-1,o;r>=0;r--)(o=s[r])&&(i=o(i)||i);return i},"__decorateClass$1"),Js;let nd=(Js=class extends Ki{},l(Js,"ProjectsContinent"),Js);nd=oA([Dt(sA)],nd);wt(nd);const aA=`<mp-continent-pin icon="work-continent">
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
`;var lA=Object.getOwnPropertyDescriptor,cA=l((s,e,t,n)=>{for(var i=n>1?void 0:n?lA(e,t):e,r=s.length-1,o;r>=0;r--)(o=s[r])&&(i=o(i)||i);return i},"__decorateClass"),Zs;let id=(Zs=class extends Ki{},l(Zs,"WorkContinent"),Zs);id=cA([Dt(aA)],id);wt(id);
