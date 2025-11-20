var ex=Object.defineProperty;var c=(s,e)=>ex(s,"name",{value:e,configurable:!0});c(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}c(t,"getFetchOpts");function n(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}c(n,"processPreload")},"polyfill")();const Sm="on:",md=class md{constructor(e,t){this.componentContext=t;const r=new DOMParser().parseFromString(e,"text/html").querySelector("body");if(this.parsedFragment=document.createDocumentFragment(),r)for(const o of[...r.children])this.parsedFragment.appendChild(o)}processEventListeners(){this.getRootElements().forEach(e=>{this.addEventListenersToNodes(e)})}getRootElements(){return[...this.parsedFragment.children]}addEventListenersToNodes(e){const t=e.getAttributeNames().filter(n=>n.startsWith(Sm));for(const n of t){const i=n.substring(Sm.length),r=e.getAttribute(n);r&&(e.addEventListener(i,new Function(`return ${r}`).apply(this.componentContext)?.bind(this.componentContext)),e.removeAttribute(n))}for(const n of e.children)this.addEventListenersToNodes(n)}};c(md,"HTMLParser");let Bc=md;const tx=c((s,e)=>{const t=Object.getOwnPropertyNames(e),n=Object.values(e);return new Function(...t,`return \`${s}\`;`).apply(e,...n)},"evaluateStringTemplate"),gd=class gd extends HTMLElement{constructor(){super(),this.shadowDOM=this.attachShadow({mode:"open"})}connectedCallback(){this.onBeforeInit?.();const e=tx(this.template,this);this.htmlParser=new Bc(e,this),this.styles&&this.processStyles(),this.template&&this.shadowDOM.append(...this.processTemplate()),this.onInit?.()}processStyles(){const e=new CSSStyleSheet;e.replaceSync(this.styles),this.shadowDOM.adoptedStyleSheets=[e]}processTemplate(){return this.htmlParser.processEventListeners(),this.htmlParser.getRootElements()}getElement(e){return this.shadowDOM.querySelector(`*[\\:${e}]`)}};c(gd,"Component");let Ct=gd;const Lt=c(s=>e=>{Reflect.defineProperty(e.prototype,"template",{value:s})},"template"),Qt=c(s=>e=>{const t=[s];e.prototype.styles&&t.push(e.prototype.styles),Reflect.defineProperty(e.prototype,"styles",{value:t.join(`

`)})},"styles"),Wa=c(s=>s.replace(/[A-Z]/g,e=>`-${e.toLowerCase()}`),"camelCaseToKebabCase"),nx=c(s=>Wa(s).substring(1),"pascalCaseToKebabCase"),Bn=c(s=>(e,t)=>{const n=Wa(t.toString()),i={get(){return this.getAttribute(n)},set(r){this.getAttribute(n)||this.setAttribute(n,r)}};return t!==void 0?ix(e,t,i):sx(e,i)},"property"),ix=c((s,e,t)=>{Reflect.defineProperty(s,e,t)},"legacyProperty"),sx=c((s,e)=>({kind:"field",key:s?.key,placement:"own",descriptor:e}),"currentProperty"),Et=c(s=>{const e=nx(s.name);customElements.define(`mp-${e}`,s)},"registerComponent"),rx='<${this.level} class="heading"><slot></slot></${this.level}>\n',ox=`.heading {
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
`;var ax=Object.defineProperty,cx=Object.getOwnPropertyDescriptor,ug=c((s,e,t,n)=>{for(var i=n>1?void 0:n?cx(e,t):e,r=s.length-1,o;r>=0;r--)(o=s[r])&&(i=(n?o(e,t,i):o(i))||i);return n&&i&&ax(e,t,i),i},"__decorateClass$j"),Ss;let Xo=(Ss=class extends Ct{},c(Ss,"Heading"),Ss);ug([Bn()],Xo.prototype,"level",2);Xo=ug([Lt(rx),Qt(ox)],Xo);Et(Xo);const lx=`<!-- "on:click" is not set here because we can add "on:click" on the
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
`,ux=`:host {
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
`;var hx=Object.defineProperty,dx=Object.getOwnPropertyDescriptor,Yh=c((s,e,t,n)=>{for(var i=n>1?void 0:n?dx(e,t):e,r=s.length-1,o;r>=0;r--)(o=s[r])&&(i=(n?o(e,t,i):o(i))||i);return n&&i&&hx(e,t,i),i},"__decorateClass$i"),Ms;let Ir=(Ms=class extends Ct{},c(Ms,"ArrowButton"),Ms);Yh([Bn()],Ir.prototype,"direction",2);Yh([Bn()],Ir.prototype,"label",2);Ir=Yh([Lt(lx),Qt(ux)],Ir);Et(Ir);const fx="modulepreload",px=c(function(s){return"https://fawadali.dev/"+s},"assetsURL"),Mm={},lt=c(function(e,t,n){let i=Promise.resolve();if(t&&t.length>0){let u=function(h){return Promise.all(h.map(d=>Promise.resolve(d).then(f=>({status:"fulfilled",value:f}),f=>({status:"rejected",reason:f}))))};var o=u;c(u,"allSettled"),document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),l=a?.nonce||a?.getAttribute("nonce");i=u(t.map(h=>{if(h=px(h),h in Mm)return;Mm[h]=!0;const d=h.endsWith(".css"),f=d?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${h}"]${f}`))return;const p=document.createElement("link");if(p.rel=d?"stylesheet":fx,d||(p.as="script"),p.crossOrigin="",p.href=h,l&&p.setAttribute("nonce",l),document.head.appendChild(p),d)return new Promise((x,_)=>{p.addEventListener("load",x),p.addEventListener("error",()=>_(new Error(`Unable to preload CSS for ${h}`)))})}))}function r(a){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=a,window.dispatchEvent(l),!l.defaultPrevented)throw a}return c(r,"handlePreloadError"),i.then(a=>{for(const l of a||[])l.status==="rejected"&&r(l.reason);return e().catch(r)})},"preload"),Em=c((s,e,t)=>{const n=s[e];return n?typeof n=="function"?n():Promise.resolve(n):new Promise((i,r)=>{(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(r.bind(null,new Error("Unknown variable dynamic import: "+e+(e.split("/").length!==t?". Note that variables only represent file names one level deep.":""))))})},"__variableDynamicImportRuntimeHelper"),mx=`:host {
  display: inline-block;
}

svg {
  width: 100%;
  height: 100%;
}
`;var gx=Object.defineProperty,xx=Object.getOwnPropertyDescriptor,$h=c((s,e,t,n)=>{for(var i=n>1?void 0:n?xx(e,t):e,r=s.length-1,o;r>=0;r--)(o=s[r])&&(i=(n?o(e,t,i):o(i))||i);return n&&i&&gx(e,t,i),i},"__decorateClass$h"),Es;let Dr=(Es=class extends Ct{onInit(){this.loadIcon()}async loadIcon(){const e=this.icon?await this.importIconFromAssets():await this.fetchIcon();this.shadowDOM.innerHTML=e,this.shadowDOM.firstElementChild?.setAttribute("part","svg")}async fetchIcon(){return await(await fetch(this.src)).text()}async importIconFromAssets(){if(this.icon.includes("/")){const[e,t]=this.icon.split("/");return(await Em(Object.assign({"../../../assets/icons/dev/angularjs.svg":c(()=>lt(()=>import("./angularjs-Dp5rC_a1.js"),[]),"../../../assets/icons/dev/angularjs.svg"),"../../../assets/icons/dev/aws.svg":c(()=>lt(()=>import("./aws-m6ZH-kyL.js"),[]),"../../../assets/icons/dev/aws.svg"),"../../../assets/icons/dev/cplusplus.svg":c(()=>lt(()=>import("./cplusplus-CNWWsQIM.js"),[]),"../../../assets/icons/dev/cplusplus.svg"),"../../../assets/icons/dev/graphql.svg":c(()=>lt(()=>import("./graphql-DXLf6Cdz.js"),[]),"../../../assets/icons/dev/graphql.svg"),"../../../assets/icons/dev/java.svg":c(()=>lt(()=>import("./java-BkuGeyTS.js"),[]),"../../../assets/icons/dev/java.svg"),"../../../assets/icons/dev/javascript.svg":c(()=>lt(()=>import("./javascript-DDC1CPuv.js"),[]),"../../../assets/icons/dev/javascript.svg"),"../../../assets/icons/dev/kotlin.svg":c(()=>lt(()=>import("./kotlin-Bxzp5xrd.js"),[]),"../../../assets/icons/dev/kotlin.svg"),"../../../assets/icons/dev/mongodb.svg":c(()=>lt(()=>import("./mongodb-BCWtQfdm.js"),[]),"../../../assets/icons/dev/mongodb.svg"),"../../../assets/icons/dev/mysql.svg":c(()=>lt(()=>import("./mysql-CjQNA-fq.js"),[]),"../../../assets/icons/dev/mysql.svg"),"../../../assets/icons/dev/nodejs.svg":c(()=>lt(()=>import("./nodejs-EI9uqLs_.js"),[]),"../../../assets/icons/dev/nodejs.svg"),"../../../assets/icons/dev/php.svg":c(()=>lt(()=>import("./php-M9g3Z2-n.js"),[]),"../../../assets/icons/dev/php.svg"),"../../../assets/icons/dev/postgresql.svg":c(()=>lt(()=>import("./postgresql-C7jF8uAA.js"),[]),"../../../assets/icons/dev/postgresql.svg"),"../../../assets/icons/dev/react.svg":c(()=>lt(()=>import("./react-BfT4JLvc.js"),[]),"../../../assets/icons/dev/react.svg"),"../../../assets/icons/dev/spring.svg":c(()=>lt(()=>import("./spring-BWtxD4Pr.js"),[]),"../../../assets/icons/dev/spring.svg"),"../../../assets/icons/dev/typescript.svg":c(()=>lt(()=>import("./typescript-D0TbaYWg.js"),[]),"../../../assets/icons/dev/typescript.svg"),"../../../assets/icons/social/email.svg":c(()=>lt(()=>import("./email-CWr6QoES.js"),[]),"../../../assets/icons/social/email.svg"),"../../../assets/icons/social/facebook.svg":c(()=>lt(()=>import("./facebook-C2D9Hbpy.js"),[]),"../../../assets/icons/social/facebook.svg"),"../../../assets/icons/social/github.svg":c(()=>lt(()=>import("./github-BLMasBwa.js"),[]),"../../../assets/icons/social/github.svg"),"../../../assets/icons/social/linkedin.svg":c(()=>lt(()=>import("./linkedin-BPjWRcho.js"),[]),"../../../assets/icons/social/linkedin.svg")}),`../../../assets/icons/${e}/${t}.svg`,7)).default}else return(await Em(Object.assign({"../../../assets/icons/about-continent.svg":c(()=>lt(()=>import("./about-continent-CTGD7rx1.js"),[]),"../../../assets/icons/about-continent.svg"),"../../../assets/icons/accessibility.svg":c(()=>lt(()=>import("./accessibility-AkkeFAHp.js"),[]),"../../../assets/icons/accessibility.svg"),"../../../assets/icons/arrow.svg":c(()=>lt(()=>import("./arrow-CGB5doHk.js"),[]),"../../../assets/icons/arrow.svg"),"../../../assets/icons/code.svg":c(()=>lt(()=>import("./code-Bxv5tjxA.js"),[]),"../../../assets/icons/code.svg"),"../../../assets/icons/connect-continent.svg":c(()=>lt(()=>import("./connect-continent-C9-03iB-.js"),[]),"../../../assets/icons/connect-continent.svg"),"../../../assets/icons/life-continent.svg":c(()=>lt(()=>import("./life-continent-4FlchGgH.js"),[]),"../../../assets/icons/life-continent.svg"),"../../../assets/icons/link.svg":c(()=>lt(()=>import("./link-D-No-mmY.js"),[]),"../../../assets/icons/link.svg"),"../../../assets/icons/projects-continent.svg":c(()=>lt(()=>import("./projects-continent-Bhb5gNvo.js"),[]),"../../../assets/icons/projects-continent.svg"),"../../../assets/icons/work-continent.svg":c(()=>lt(()=>import("./work-continent-DBEVwq92.js"),[]),"../../../assets/icons/work-continent.svg")}),`../../../assets/icons/${this.icon}.svg`,6)).default}},c(Es,"Icon"),Es);$h([Bn()],Dr.prototype,"src",2);$h([Bn()],Dr.prototype,"icon",2);Dr=$h([Qt(mx)],Dr);Et(Dr);const _x=`<!-- "on:click" is not set here because we can add "on:click" on the
host element and event bubbling will make that "on:click" run on
clicking this button. -->
<\${this.tag} class="circle-button" \${this.link ? \`href="\${this.link}"\` : ''}>
  <mp-icon icon="\${this.icon}" class="circle-button-icon" part="icon"></mp-icon>
  <span class="circle-button-tooltip \${this.tooltipPosition}">
    <slot></slot>
  </span>
</\${this.tag}>
`,vx=`.circle-button {
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
`;var bx=Object.defineProperty,yx=Object.getOwnPropertyDescriptor,Xa=c((s,e,t,n)=>{for(var i=n>1?void 0:n?yx(e,t):e,r=s.length-1,o;r>=0;r--)(o=s[r])&&(i=(n?o(e,t,i):o(i))||i);return n&&i&&bx(e,t,i),i},"__decorateClass$g"),ws;let $s=(ws=class extends Ct{constructor(){super(...arguments),this.tooltipPosition="top"}onBeforeInit(){this.tag=this.link?"a":"button"}},c(ws,"CircleButton"),ws);Xa([Bn()],$s.prototype,"icon",2);Xa([Bn()],$s.prototype,"tooltipPosition",2);Xa([Bn()],$s.prototype,"link",2);$s=Xa([Lt(_x),Qt(vx)],$s);Et($s);const Sx=`<div class="backdrop"></div>
<div class="backdrop-focus">
  <slot></slot>
</div>
`,Mx=`:host([active]) > .backdrop {
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
`;var Ex=Object.getOwnPropertyDescriptor,wx=c((s,e,t,n)=>{for(var i=n>1?void 0:n?Ex(e,t):e,r=s.length-1,o;r>=0;r--)(o=s[r])&&(i=o(i)||i);return i},"__decorateClass$f"),Ts;let kc=(Ts=class extends Ct{},c(Ts,"Backdrop"),Ts);kc=wx([Lt(Sx),Qt(Mx)],kc);Et(kc);const Tx=`<slot name="time" class="timeline-event-time"></slot>
<slot name="title" class="timeline-event-title"></slot>
<slot name="subtitle" class="timeline-event-subtitle"></slot>
<p><slot></slot></p>
`,Ax=`:host {
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
`;var Cx=Object.getOwnPropertyDescriptor,Rx=c((s,e,t,n)=>{for(var i=n>1?void 0:n?Cx(e,t):e,r=s.length-1,o;r>=0;r--)(o=s[r])&&(i=o(i)||i);return i},"__decorateClass$e"),As;let zc=(As=class extends Ct{},c(As,"TimelineEvent"),As);zc=Rx([Lt(Tx),Qt(Ax)],zc);Et(zc);const Px=`<slot class="timeline-event"></slot>
`,Lx=`/* Hide the vertical bar for the last timeline event. */
.timeline-event::slotted(*:last-child)::after {
  display: none;
}
`;var Ix=Object.getOwnPropertyDescriptor,Dx=c((s,e,t,n)=>{for(var i=n>1?void 0:n?Ix(e,t):e,r=s.length-1,o;r>=0;r--)(o=s[r])&&(i=o(i)||i);return i},"__decorateClass$d"),Cs;let Hc=(Cs=class extends Ct{},c(Cs,"Timeline"),Cs);Hc=Dx([Lt(Px),Qt(Lx)],Hc);Et(Hc);const Kh="181",Ox=0,wm=1,Nx=2,hg=1,Ux=2,jn=3,Qn=0,Jt=1,Sn=2,Jn=0,_s=1,Tm=2,Am=3,Cm=4,Fx=5,Ni=100,Bx=101,kx=102,zx=103,Hx=104,Vx=200,Gx=201,Wx=202,Xx=203,Vc=204,Gc=205,jx=206,qx=207,Yx=208,$x=209,Kx=210,Jx=211,Zx=212,Qx=213,e_=214,Wc=0,Xc=1,jc=2,Ks=3,qc=4,Yc=5,$c=6,Kc=7,Jh=0,t_=1,n_=2,fi=0,i_=1,s_=2,r_=3,o_=4,a_=5,c_=6,l_=7,Rm="attached",u_="detached",dg=300,Js=301,Zs=302,Jc=303,Zc=304,ja=306,Qs=1e3,Dn=1001,jo=1002,Xt=1003,fg=1004,vr=1005,Wt=1006,zo=1007,Yn=1008,Nn=1009,pg=1010,mg=1011,Or=1012,Zh=1013,Vi=1014,En=1015,sr=1016,Qh=1017,ed=1018,Nr=1020,gg=35902,xg=35899,_g=1021,vg=1022,dn=1023,Ur=1026,Fr=1027,td=1028,nd=1029,id=1030,sd=1031,rd=1033,Ho=33776,Vo=33777,Go=33778,Wo=33779,Qc=35840,el=35841,tl=35842,nl=35843,il=36196,sl=37492,rl=37496,ol=37808,al=37809,cl=37810,ll=37811,ul=37812,hl=37813,dl=37814,fl=37815,pl=37816,ml=37817,gl=37818,xl=37819,_l=37820,vl=37821,bl=36492,yl=36494,Sl=36495,Ml=36283,El=36284,wl=36285,Tl=36286,Br=2300,kr=2301,Ja=2302,Pm=2400,Lm=2401,Im=2402,h_=2500,d_=0,bg=1,Al=2,f_=3200,p_=3201,od=0,m_=1,hi="",Dt="srgb",jt="srgb-linear",qo="linear",ut="srgb",$i=7680,Dm=519,g_=512,x_=513,__=514,yg=515,v_=516,b_=517,y_=518,S_=519,Cl=35044,Om="300 es",On=2e3,Yo=2001;function Sg(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}c(Sg,"arrayNeedsUint32");function zr(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}c(zr,"createElementNS");function M_(){const s=zr("canvas");return s.style.display="block",s}c(M_,"createCanvasElement");const Nm={};function $o(...s){const e="THREE."+s.shift();console.log(e,...s)}c($o,"log");function Le(...s){const e="THREE."+s.shift();console.warn(e,...s)}c(Le,"warn");function Ke(...s){const e="THREE."+s.shift();console.error(e,...s)}c(Ke,"error");function Hr(...s){const e=s.join(" ");e in Nm||(Nm[e]=!0,Le(...s))}c(Hr,"warnOnce");function E_(s,e,t){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}c(r,"probe"),setTimeout(r,t)})}c(E_,"probeAsync");const xd=class xd{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const i=n[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,e);e.target=null}}};c(xd,"EventDispatcher");let ei=xd;const Bt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Um=1234567;const Er=Math.PI/180,er=180/Math.PI;function fn(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Bt[s&255]+Bt[s>>8&255]+Bt[s>>16&255]+Bt[s>>24&255]+"-"+Bt[e&255]+Bt[e>>8&255]+"-"+Bt[e>>16&15|64]+Bt[e>>24&255]+"-"+Bt[t&63|128]+Bt[t>>8&255]+"-"+Bt[t>>16&255]+Bt[t>>24&255]+Bt[n&255]+Bt[n>>8&255]+Bt[n>>16&255]+Bt[n>>24&255]).toLowerCase()}c(fn,"generateUUID");function Je(s,e,t){return Math.max(e,Math.min(t,s))}c(Je,"clamp");function ad(s,e){return(s%e+e)%e}c(ad,"euclideanModulo");function w_(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}c(w_,"mapLinear");function T_(s,e,t){return s!==e?(t-s)/(e-s):0}c(T_,"inverseLerp");function wr(s,e,t){return(1-t)*s+t*e}c(wr,"lerp");function A_(s,e,t,n){return wr(s,e,1-Math.exp(-t*n))}c(A_,"damp");function C_(s,e=1){return e-Math.abs(ad(s,e*2)-e)}c(C_,"pingpong");function R_(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}c(R_,"smoothstep");function P_(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}c(P_,"smootherstep");function L_(s,e){return s+Math.floor(Math.random()*(e-s+1))}c(L_,"randInt");function I_(s,e){return s+Math.random()*(e-s)}c(I_,"randFloat");function D_(s){return s*(.5-Math.random())}c(D_,"randFloatSpread");function O_(s){s!==void 0&&(Um=s);let e=Um+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}c(O_,"seededRandom");function N_(s){return s*Er}c(N_,"degToRad");function U_(s){return s*er}c(U_,"radToDeg");function F_(s){return(s&s-1)===0&&s!==0}c(F_,"isPowerOfTwo");function B_(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}c(B_,"ceilPowerOfTwo");function k_(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}c(k_,"floorPowerOfTwo");function z_(s,e,t,n,i){const r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),u=r((e+n)/2),h=o((e+n)/2),d=r((e-n)/2),f=o((e-n)/2),p=r((n-e)/2),x=o((n-e)/2);switch(i){case"XYX":s.set(a*h,l*d,l*f,a*u);break;case"YZY":s.set(l*f,a*h,l*d,a*u);break;case"ZXZ":s.set(l*d,l*f,a*h,a*u);break;case"XZX":s.set(a*h,l*x,l*p,a*u);break;case"YXY":s.set(l*p,a*h,l*x,a*u);break;case"ZYZ":s.set(l*x,l*p,a*h,a*u);break;default:Le("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}c(z_,"setQuaternionFromProperEuler");function Mn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}c(Mn,"denormalize");function ot(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}c(ot,"normalize");const pn={DEG2RAD:Er,RAD2DEG:er,generateUUID:fn,clamp:Je,euclideanModulo:ad,mapLinear:w_,inverseLerp:T_,lerp:wr,damp:A_,pingpong:C_,smoothstep:R_,smootherstep:P_,randInt:L_,randFloat:I_,randFloatSpread:D_,seededRandom:O_,degToRad:N_,radToDeg:U_,isPowerOfTwo:F_,ceilPowerOfTwo:B_,floorPowerOfTwo:k_,setQuaternionFromProperEuler:z_,normalize:ot,denormalize:Mn},Ra=class Ra{constructor(e=0,t=0){Ra.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Je(this.x,e.x,t.x),this.y=Je(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Je(this.x,e,t),this.y=Je(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Je(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Je(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*i+e.x,this.y=r*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};c(Ra,"Vector2");let ce=Ra;const _d=class _d{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,o,a){let l=n[i+0],u=n[i+1],h=n[i+2],d=n[i+3],f=r[o+0],p=r[o+1],x=r[o+2],_=r[o+3];if(a<=0){e[t+0]=l,e[t+1]=u,e[t+2]=h,e[t+3]=d;return}if(a>=1){e[t+0]=f,e[t+1]=p,e[t+2]=x,e[t+3]=_;return}if(d!==_||l!==f||u!==p||h!==x){let g=l*f+u*p+h*x+d*_;g<0&&(f=-f,p=-p,x=-x,_=-_,g=-g);let m=1-a;if(g<.9995){const C=Math.acos(g),b=Math.sin(C);m=Math.sin(m*C)/b,a=Math.sin(a*C)/b,l=l*m+f*a,u=u*m+p*a,h=h*m+x*a,d=d*m+_*a}else{l=l*m+f*a,u=u*m+p*a,h=h*m+x*a,d=d*m+_*a;const C=1/Math.sqrt(l*l+u*u+h*h+d*d);l*=C,u*=C,h*=C,d*=C}}e[t]=l,e[t+1]=u,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,i,r,o){const a=n[i],l=n[i+1],u=n[i+2],h=n[i+3],d=r[o],f=r[o+1],p=r[o+2],x=r[o+3];return e[t]=a*x+h*d+l*p-u*f,e[t+1]=l*x+h*f+u*d-a*p,e[t+2]=u*x+h*p+a*f-l*d,e[t+3]=h*x-a*d-l*f-u*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,u=a(n/2),h=a(i/2),d=a(r/2),f=l(n/2),p=l(i/2),x=l(r/2);switch(o){case"XYZ":this._x=f*h*d+u*p*x,this._y=u*p*d-f*h*x,this._z=u*h*x+f*p*d,this._w=u*h*d-f*p*x;break;case"YXZ":this._x=f*h*d+u*p*x,this._y=u*p*d-f*h*x,this._z=u*h*x-f*p*d,this._w=u*h*d+f*p*x;break;case"ZXY":this._x=f*h*d-u*p*x,this._y=u*p*d+f*h*x,this._z=u*h*x+f*p*d,this._w=u*h*d-f*p*x;break;case"ZYX":this._x=f*h*d-u*p*x,this._y=u*p*d+f*h*x,this._z=u*h*x-f*p*d,this._w=u*h*d+f*p*x;break;case"YZX":this._x=f*h*d+u*p*x,this._y=u*p*d+f*h*x,this._z=u*h*x-f*p*d,this._w=u*h*d-f*p*x;break;case"XZY":this._x=f*h*d-u*p*x,this._y=u*p*d-f*h*x,this._z=u*h*x+f*p*d,this._w=u*h*d+f*p*x;break;default:Le("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],o=t[1],a=t[5],l=t[9],u=t[2],h=t[6],d=t[10],f=n+a+d;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(h-l)*p,this._y=(r-u)*p,this._z=(o-i)*p}else if(n>a&&n>d){const p=2*Math.sqrt(1+n-a-d);this._w=(h-l)/p,this._x=.25*p,this._y=(i+o)/p,this._z=(r+u)/p}else if(a>d){const p=2*Math.sqrt(1+a-n-d);this._w=(r-u)/p,this._x=(i+o)/p,this._y=.25*p,this._z=(l+h)/p}else{const p=2*Math.sqrt(1+d-n-a);this._w=(o-i)/p,this._x=(r+u)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Je(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,o=e._w,a=t._x,l=t._y,u=t._z,h=t._w;return this._x=n*h+o*a+i*u-r*l,this._y=i*h+o*l+r*a-n*u,this._z=r*h+o*u+n*l-i*a,this._w=o*h-n*a-i*l-r*u,this._onChangeCallback(),this}slerp(e,t){if(t<=0)return this;if(t>=1)return this.copy(e);let n=e._x,i=e._y,r=e._z,o=e._w,a=this.dot(e);a<0&&(n=-n,i=-i,r=-r,o=-o,a=-a);let l=1-t;if(a<.9995){const u=Math.acos(a),h=Math.sin(u);l=Math.sin(l*u)/h,t=Math.sin(t*u)/h,this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}};c(_d,"Quaternion");let At=_d;const Pa=class Pa{constructor(e=0,t=0,n=0){Pa.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Fm.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Fm.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,o=e.y,a=e.z,l=e.w,u=2*(o*i-a*n),h=2*(a*t-r*i),d=2*(r*n-o*t);return this.x=t+l*u+o*d-a*h,this.y=n+l*h+a*u-r*d,this.z=i+l*d+r*h-o*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Je(this.x,e.x,t.x),this.y=Je(this.y,e.y,t.y),this.z=Je(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Je(this.x,e,t),this.y=Je(this.y,e,t),this.z=Je(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Je(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=i*l-r*a,this.y=r*o-n*l,this.z=n*a-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Za.copy(this).projectOnVector(e),this.sub(Za)}reflect(e){return this.sub(Za.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Je(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};c(Pa,"Vector3");let L=Pa;const Za=new L,Fm=new At,La=class La{constructor(e,t,n,i,r,o,a,l,u){La.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,l,u)}set(e,t,n,i,r,o,a,l,u){const h=this.elements;return h[0]=e,h[1]=i,h[2]=a,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],u=n[1],h=n[4],d=n[7],f=n[2],p=n[5],x=n[8],_=i[0],g=i[3],m=i[6],C=i[1],b=i[4],M=i[7],P=i[2],R=i[5],I=i[8];return r[0]=o*_+a*C+l*P,r[3]=o*g+a*b+l*R,r[6]=o*m+a*M+l*I,r[1]=u*_+h*C+d*P,r[4]=u*g+h*b+d*R,r[7]=u*m+h*M+d*I,r[2]=f*_+p*C+x*P,r[5]=f*g+p*b+x*R,r[8]=f*m+p*M+x*I,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],u=e[7],h=e[8];return t*o*h-t*a*u-n*r*h+n*a*l+i*r*u-i*o*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],u=e[7],h=e[8],d=h*o-a*u,f=a*l-h*r,p=u*r-o*l,x=t*d+n*f+i*p;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/x;return e[0]=d*_,e[1]=(i*u-h*n)*_,e[2]=(a*n-i*o)*_,e[3]=f*_,e[4]=(h*t-i*l)*_,e[5]=(i*r-a*t)*_,e[6]=p*_,e[7]=(n*l-u*t)*_,e[8]=(o*t-n*r)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,o,a){const l=Math.cos(r),u=Math.sin(r);return this.set(n*l,n*u,-n*(l*o+u*a)+o+e,-i*u,i*l,-i*(-u*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Qa.makeScale(e,t)),this}rotate(e){return this.premultiply(Qa.makeRotation(-e)),this}translate(e,t){return this.premultiply(Qa.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};c(La,"Matrix3");let Ye=La;const Qa=new Ye,Bm=new Ye().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),km=new Ye().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function H_(){const s={enabled:!0,workingColorSpace:jt,spaces:{},convert:c(function(i,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===ut&&(i.r=Zn(i.r),i.g=Zn(i.g),i.b=Zn(i.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ut&&(i.r=vs(i.r),i.g=vs(i.g),i.b=vs(i.b))),i},"convert"),workingToColorSpace:c(function(i,r){return this.convert(i,this.workingColorSpace,r)},"workingToColorSpace"),colorSpaceToWorking:c(function(i,r){return this.convert(i,r,this.workingColorSpace)},"colorSpaceToWorking"),getPrimaries:c(function(i){return this.spaces[i].primaries},"getPrimaries"),getTransfer:c(function(i){return i===hi?qo:this.spaces[i].transfer},"getTransfer"),getToneMappingMode:c(function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},"getToneMappingMode"),getLuminanceCoefficients:c(function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},"getLuminanceCoefficients"),define:c(function(i){Object.assign(this.spaces,i)},"define"),_getMatrix:c(function(i,r,o){return i.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},"_getMatrix"),_getDrawingBufferColorSpace:c(function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},"_getDrawingBufferColorSpace"),_getUnpackColorSpace:c(function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},"_getUnpackColorSpace"),fromWorkingColorSpace:c(function(i,r){return Hr("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(i,r)},"fromWorkingColorSpace"),toWorkingColorSpace:c(function(i,r){return Hr("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(i,r)},"toWorkingColorSpace")},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[jt]:{primaries:e,whitePoint:n,transfer:qo,toXYZ:Bm,fromXYZ:km,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Dt},outputColorSpaceConfig:{drawingBufferColorSpace:Dt}},[Dt]:{primaries:e,whitePoint:n,transfer:ut,toXYZ:Bm,fromXYZ:km,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Dt}}}),s}c(H_,"createColorManagement");const nt=H_();function Zn(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}c(Zn,"SRGBToLinear");function vs(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}c(vs,"LinearToSRGB");let Ki;const vd=class vd{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Ki===void 0&&(Ki=zr("canvas")),Ki.width=e.width,Ki.height=e.height;const i=Ki.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Ki}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=zr("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=Zn(r[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Zn(t[n]/255)*255):t[n]=Zn(t[n]);return{data:t,width:e.width,height:e.height}}else return Le("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}};c(vd,"ImageUtils");let Rl=vd,V_=0;const bd=class bd{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:V_++}),this.uuid=fn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(ec(i[o].image)):r.push(ec(i[o]))}else r=ec(i);n.url=r}return t||(e.images[this.uuid]=n),n}};c(bd,"Source");let Vr=bd;function ec(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Rl.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(Le("Texture: Unable to serialize Texture."),{})}c(ec,"serializeImage");let G_=0;const tc=new L,ms=class ms extends ei{constructor(e=ms.DEFAULT_IMAGE,t=ms.DEFAULT_MAPPING,n=Dn,i=Dn,r=Wt,o=Yn,a=dn,l=Nn,u=ms.DEFAULT_ANISOTROPY,h=hi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:G_++}),this.uuid=fn(),this.name="",this.source=new Vr(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=u,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ce(0,0),this.repeat=new ce(1,1),this.center=new ce(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ye,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(tc).x}get height(){return this.source.getSize(tc).y}get depth(){return this.source.getSize(tc).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){Le(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){Le(`Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==dg)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Qs:e.x=e.x-Math.floor(e.x);break;case Dn:e.x=e.x<0?0:1;break;case jo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Qs:e.y=e.y-Math.floor(e.y);break;case Dn:e.y=e.y<0?0:1;break;case jo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};c(ms,"Texture");let Ft=ms;Ft.DEFAULT_IMAGE=null;Ft.DEFAULT_MAPPING=dg;Ft.DEFAULT_ANISOTROPY=1;const Ia=class Ia{constructor(e=0,t=0,n=0,i=1){Ia.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const l=e.elements,u=l[0],h=l[4],d=l[8],f=l[1],p=l[5],x=l[9],_=l[2],g=l[6],m=l[10];if(Math.abs(h-f)<.01&&Math.abs(d-_)<.01&&Math.abs(x-g)<.01){if(Math.abs(h+f)<.1&&Math.abs(d+_)<.1&&Math.abs(x+g)<.1&&Math.abs(u+p+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const b=(u+1)/2,M=(p+1)/2,P=(m+1)/2,R=(h+f)/4,I=(d+_)/4,F=(x+g)/4;return b>M&&b>P?b<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(b),i=R/n,r=I/n):M>P?M<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(M),n=R/i,r=F/i):P<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(P),n=I/r,i=F/r),this.set(n,i,r,t),this}let C=Math.sqrt((g-x)*(g-x)+(d-_)*(d-_)+(f-h)*(f-h));return Math.abs(C)<.001&&(C=1),this.x=(g-x)/C,this.y=(d-_)/C,this.z=(f-h)/C,this.w=Math.acos((u+p+m-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Je(this.x,e.x,t.x),this.y=Je(this.y,e.y,t.y),this.z=Je(this.z,e.z,t.z),this.w=Je(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Je(this.x,e,t),this.y=Je(this.y,e,t),this.z=Je(this.z,e,t),this.w=Je(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Je(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};c(Ia,"Vector4");let rt=Ia;const yd=class yd extends ei{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Wt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new rt(0,0,e,t),this.scissorTest=!1,this.viewport=new rt(0,0,e,t);const i={width:e,height:t,depth:n.depth},r=new Ft(i);this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:Wt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const i=Object.assign({},e.textures[t].image);this.textures[t].source=new Vr(i)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}};c(yd,"RenderTarget");let Pl=yd;const Sd=class Sd extends Pl{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}};c(Sd,"WebGLRenderTarget");let ti=Sd;const Md=class Md extends Ft{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Xt,this.minFilter=Xt,this.wrapR=Dn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};c(Md,"DataArrayTexture");let Ko=Md;const Ed=class Ed extends Ft{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Xt,this.minFilter=Xt,this.wrapR=Dn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};c(Ed,"Data3DTexture");let Ll=Ed;const wd=class wd{constructor(e=new L(1/0,1/0,1/0),t=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(vn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(vn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=vn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,vn):vn.fromBufferAttribute(r,o),vn.applyMatrix4(e.matrixWorld),this.expandByPoint(vn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),co.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),co.copy(n.boundingBox)),co.applyMatrix4(e.matrixWorld),this.union(co)}const i=e.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,vn),vn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ar),lo.subVectors(this.max,ar),Ji.subVectors(e.a,ar),Zi.subVectors(e.b,ar),Qi.subVectors(e.c,ar),ni.subVectors(Zi,Ji),ii.subVectors(Qi,Zi),Ai.subVectors(Ji,Qi);let t=[0,-ni.z,ni.y,0,-ii.z,ii.y,0,-Ai.z,Ai.y,ni.z,0,-ni.x,ii.z,0,-ii.x,Ai.z,0,-Ai.x,-ni.y,ni.x,0,-ii.y,ii.x,0,-Ai.y,Ai.x,0];return!nc(t,Ji,Zi,Qi,lo)||(t=[1,0,0,0,1,0,0,0,1],!nc(t,Ji,Zi,Qi,lo))?!1:(uo.crossVectors(ni,ii),t=[uo.x,uo.y,uo.z],nc(t,Ji,Zi,Qi,lo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,vn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(vn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(kn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),kn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),kn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),kn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),kn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),kn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),kn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),kn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(kn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}};c(wd,"Box3");let mn=wd;const kn=[new L,new L,new L,new L,new L,new L,new L,new L],vn=new L,co=new mn,Ji=new L,Zi=new L,Qi=new L,ni=new L,ii=new L,Ai=new L,ar=new L,lo=new L,uo=new L,Ci=new L;function nc(s,e,t,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){Ci.fromArray(s,r);const a=i.x*Math.abs(Ci.x)+i.y*Math.abs(Ci.y)+i.z*Math.abs(Ci.z),l=e.dot(Ci),u=t.dot(Ci),h=n.dot(Ci);if(Math.max(-Math.max(l,u,h),Math.min(l,u,h))>a)return!1}return!0}c(nc,"satForAxes");const W_=new mn,cr=new L,ic=new L,Td=class Td{constructor(e=new L,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):W_.setFromPoints(e).getCenter(n);let i=0;for(let r=0,o=e.length;r<o;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;cr.subVectors(e,this.center);const t=cr.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(cr,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ic.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(cr.copy(e.center).add(ic)),this.expandByPoint(cr.copy(e.center).sub(ic))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}};c(Td,"Sphere");let on=Td;const zn=new L,sc=new L,ho=new L,si=new L,rc=new L,fo=new L,oc=new L,Ad=class Ad{constructor(e=new L,t=new L(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,zn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=zn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(zn.copy(this.origin).addScaledVector(this.direction,t),zn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){sc.copy(e).add(t).multiplyScalar(.5),ho.copy(t).sub(e).normalize(),si.copy(this.origin).sub(sc);const r=e.distanceTo(t)*.5,o=-this.direction.dot(ho),a=si.dot(this.direction),l=-si.dot(ho),u=si.lengthSq(),h=Math.abs(1-o*o);let d,f,p,x;if(h>0)if(d=o*l-a,f=o*a-l,x=r*h,d>=0)if(f>=-x)if(f<=x){const _=1/h;d*=_,f*=_,p=d*(d+o*f+2*a)+f*(o*d+f+2*l)+u}else f=r,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*l)+u;else f=-r,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*l)+u;else f<=-x?(d=Math.max(0,-(-o*r+a)),f=d>0?-r:Math.min(Math.max(-r,-l),r),p=-d*d+f*(f+2*l)+u):f<=x?(d=0,f=Math.min(Math.max(-r,-l),r),p=f*(f+2*l)+u):(d=Math.max(0,-(o*r+a)),f=d>0?r:Math.min(Math.max(-r,-l),r),p=-d*d+f*(f+2*l)+u);else f=o>0?-r:r,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*l)+u;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(sc).addScaledVector(ho,f),p}intersectSphere(e,t){zn.subVectors(e.center,this.origin);const n=zn.dot(this.direction),i=zn.dot(zn)-n*n,r=e.radius*e.radius;if(i>r)return null;const o=Math.sqrt(r-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,o,a,l;const u=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,f=this.origin;return u>=0?(n=(e.min.x-f.x)*u,i=(e.max.x-f.x)*u):(n=(e.max.x-f.x)*u,i=(e.min.x-f.x)*u),h>=0?(r=(e.min.y-f.y)*h,o=(e.max.y-f.y)*h):(r=(e.max.y-f.y)*h,o=(e.min.y-f.y)*h),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),d>=0?(a=(e.min.z-f.z)*d,l=(e.max.z-f.z)*d):(a=(e.max.z-f.z)*d,l=(e.min.z-f.z)*d),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,zn)!==null}intersectTriangle(e,t,n,i,r){rc.subVectors(t,e),fo.subVectors(n,e),oc.crossVectors(rc,fo);let o=this.direction.dot(oc),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;si.subVectors(this.origin,e);const l=a*this.direction.dot(fo.crossVectors(si,fo));if(l<0)return null;const u=a*this.direction.dot(rc.cross(si));if(u<0||l+u>o)return null;const h=-a*si.dot(oc);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}};c(Ad,"Ray");let mi=Ad;const Lr=class Lr{constructor(e,t,n,i,r,o,a,l,u,h,d,f,p,x,_,g){Lr.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,l,u,h,d,f,p,x,_,g)}set(e,t,n,i,r,o,a,l,u,h,d,f,p,x,_,g){const m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=i,m[1]=r,m[5]=o,m[9]=a,m[13]=l,m[2]=u,m[6]=h,m[10]=d,m[14]=f,m[3]=p,m[7]=x,m[11]=_,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Lr().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/es.setFromMatrixColumn(e,0).length(),r=1/es.setFromMatrixColumn(e,1).length(),o=1/es.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),u=Math.sin(i),h=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){const f=o*h,p=o*d,x=a*h,_=a*d;t[0]=l*h,t[4]=-l*d,t[8]=u,t[1]=p+x*u,t[5]=f-_*u,t[9]=-a*l,t[2]=_-f*u,t[6]=x+p*u,t[10]=o*l}else if(e.order==="YXZ"){const f=l*h,p=l*d,x=u*h,_=u*d;t[0]=f+_*a,t[4]=x*a-p,t[8]=o*u,t[1]=o*d,t[5]=o*h,t[9]=-a,t[2]=p*a-x,t[6]=_+f*a,t[10]=o*l}else if(e.order==="ZXY"){const f=l*h,p=l*d,x=u*h,_=u*d;t[0]=f-_*a,t[4]=-o*d,t[8]=x+p*a,t[1]=p+x*a,t[5]=o*h,t[9]=_-f*a,t[2]=-o*u,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const f=o*h,p=o*d,x=a*h,_=a*d;t[0]=l*h,t[4]=x*u-p,t[8]=f*u+_,t[1]=l*d,t[5]=_*u+f,t[9]=p*u-x,t[2]=-u,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const f=o*l,p=o*u,x=a*l,_=a*u;t[0]=l*h,t[4]=_-f*d,t[8]=x*d+p,t[1]=d,t[5]=o*h,t[9]=-a*h,t[2]=-u*h,t[6]=p*d+x,t[10]=f-_*d}else if(e.order==="XZY"){const f=o*l,p=o*u,x=a*l,_=a*u;t[0]=l*h,t[4]=-d,t[8]=u*h,t[1]=f*d+_,t[5]=o*h,t[9]=p*d-x,t[2]=x*d-p,t[6]=a*h,t[10]=_*d+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(X_,e,j_)}lookAt(e,t,n){const i=this.elements;return nn.subVectors(e,t),nn.lengthSq()===0&&(nn.z=1),nn.normalize(),ri.crossVectors(n,nn),ri.lengthSq()===0&&(Math.abs(n.z)===1?nn.x+=1e-4:nn.z+=1e-4,nn.normalize(),ri.crossVectors(n,nn)),ri.normalize(),po.crossVectors(nn,ri),i[0]=ri.x,i[4]=po.x,i[8]=nn.x,i[1]=ri.y,i[5]=po.y,i[9]=nn.y,i[2]=ri.z,i[6]=po.z,i[10]=nn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],u=n[12],h=n[1],d=n[5],f=n[9],p=n[13],x=n[2],_=n[6],g=n[10],m=n[14],C=n[3],b=n[7],M=n[11],P=n[15],R=i[0],I=i[4],F=i[8],w=i[12],y=i[1],E=i[5],O=i[9],N=i[13],H=i[2],z=i[6],W=i[10],K=i[14],j=i[3],se=i[7],le=i[11],Ee=i[15];return r[0]=o*R+a*y+l*H+u*j,r[4]=o*I+a*E+l*z+u*se,r[8]=o*F+a*O+l*W+u*le,r[12]=o*w+a*N+l*K+u*Ee,r[1]=h*R+d*y+f*H+p*j,r[5]=h*I+d*E+f*z+p*se,r[9]=h*F+d*O+f*W+p*le,r[13]=h*w+d*N+f*K+p*Ee,r[2]=x*R+_*y+g*H+m*j,r[6]=x*I+_*E+g*z+m*se,r[10]=x*F+_*O+g*W+m*le,r[14]=x*w+_*N+g*K+m*Ee,r[3]=C*R+b*y+M*H+P*j,r[7]=C*I+b*E+M*z+P*se,r[11]=C*F+b*O+M*W+P*le,r[15]=C*w+b*N+M*K+P*Ee,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],o=e[1],a=e[5],l=e[9],u=e[13],h=e[2],d=e[6],f=e[10],p=e[14],x=e[3],_=e[7],g=e[11],m=e[15];return x*(+r*l*d-i*u*d-r*a*f+n*u*f+i*a*p-n*l*p)+_*(+t*l*p-t*u*f+r*o*f-i*o*p+i*u*h-r*l*h)+g*(+t*u*d-t*a*p-r*o*d+n*o*p+r*a*h-n*u*h)+m*(-i*a*h-t*l*d+t*a*f+i*o*d-n*o*f+n*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],u=e[7],h=e[8],d=e[9],f=e[10],p=e[11],x=e[12],_=e[13],g=e[14],m=e[15],C=d*g*u-_*f*u+_*l*p-a*g*p-d*l*m+a*f*m,b=x*f*u-h*g*u-x*l*p+o*g*p+h*l*m-o*f*m,M=h*_*u-x*d*u+x*a*p-o*_*p-h*a*m+o*d*m,P=x*d*l-h*_*l-x*a*f+o*_*f+h*a*g-o*d*g,R=t*C+n*b+i*M+r*P;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const I=1/R;return e[0]=C*I,e[1]=(_*f*r-d*g*r-_*i*p+n*g*p+d*i*m-n*f*m)*I,e[2]=(a*g*r-_*l*r+_*i*u-n*g*u-a*i*m+n*l*m)*I,e[3]=(d*l*r-a*f*r-d*i*u+n*f*u+a*i*p-n*l*p)*I,e[4]=b*I,e[5]=(h*g*r-x*f*r+x*i*p-t*g*p-h*i*m+t*f*m)*I,e[6]=(x*l*r-o*g*r-x*i*u+t*g*u+o*i*m-t*l*m)*I,e[7]=(o*f*r-h*l*r+h*i*u-t*f*u-o*i*p+t*l*p)*I,e[8]=M*I,e[9]=(x*d*r-h*_*r-x*n*p+t*_*p+h*n*m-t*d*m)*I,e[10]=(o*_*r-x*a*r+x*n*u-t*_*u-o*n*m+t*a*m)*I,e[11]=(h*a*r-o*d*r-h*n*u+t*d*u+o*n*p-t*a*p)*I,e[12]=P*I,e[13]=(h*_*i-x*d*i+x*n*f-t*_*f-h*n*g+t*d*g)*I,e[14]=(x*a*i-o*_*i-x*n*l+t*_*l+o*n*g-t*a*g)*I,e[15]=(o*d*i-h*a*i+h*n*l-t*d*l-o*n*f+t*a*f)*I,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,u=r*o,h=r*a;return this.set(u*o+n,u*a-i*l,u*l+i*a,0,u*a+i*l,h*a+n,h*l-i*o,0,u*l-i*a,h*l+i*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,o){return this.set(1,n,r,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,u=r+r,h=o+o,d=a+a,f=r*u,p=r*h,x=r*d,_=o*h,g=o*d,m=a*d,C=l*u,b=l*h,M=l*d,P=n.x,R=n.y,I=n.z;return i[0]=(1-(_+m))*P,i[1]=(p+M)*P,i[2]=(x-b)*P,i[3]=0,i[4]=(p-M)*R,i[5]=(1-(f+m))*R,i[6]=(g+C)*R,i[7]=0,i[8]=(x+b)*I,i[9]=(g-C)*I,i[10]=(1-(f+_))*I,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let r=es.set(i[0],i[1],i[2]).length();const o=es.set(i[4],i[5],i[6]).length(),a=es.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],bn.copy(this);const u=1/r,h=1/o,d=1/a;return bn.elements[0]*=u,bn.elements[1]*=u,bn.elements[2]*=u,bn.elements[4]*=h,bn.elements[5]*=h,bn.elements[6]*=h,bn.elements[8]*=d,bn.elements[9]*=d,bn.elements[10]*=d,t.setFromRotationMatrix(bn),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,i,r,o,a=On,l=!1){const u=this.elements,h=2*r/(t-e),d=2*r/(n-i),f=(t+e)/(t-e),p=(n+i)/(n-i);let x,_;if(l)x=r/(o-r),_=o*r/(o-r);else if(a===On)x=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===Yo)x=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return u[0]=h,u[4]=0,u[8]=f,u[12]=0,u[1]=0,u[5]=d,u[9]=p,u[13]=0,u[2]=0,u[6]=0,u[10]=x,u[14]=_,u[3]=0,u[7]=0,u[11]=-1,u[15]=0,this}makeOrthographic(e,t,n,i,r,o,a=On,l=!1){const u=this.elements,h=2/(t-e),d=2/(n-i),f=-(t+e)/(t-e),p=-(n+i)/(n-i);let x,_;if(l)x=1/(o-r),_=o/(o-r);else if(a===On)x=-2/(o-r),_=-(o+r)/(o-r);else if(a===Yo)x=-1/(o-r),_=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return u[0]=h,u[4]=0,u[8]=0,u[12]=f,u[1]=0,u[5]=d,u[9]=0,u[13]=p,u[2]=0,u[6]=0,u[10]=x,u[14]=_,u[3]=0,u[7]=0,u[11]=0,u[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};c(Lr,"Matrix4");let qe=Lr;const es=new L,bn=new qe,X_=new L(0,0,0),j_=new L(1,1,1),ri=new L,po=new L,nn=new L,zm=new qe,Hm=new At,Da=class Da{constructor(e=0,t=0,n=0,i=Da.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],o=i[4],a=i[8],l=i[1],u=i[5],h=i[9],d=i[2],f=i[6],p=i[10];switch(t){case"XYZ":this._y=Math.asin(Je(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,u),this._z=0);break;case"YXZ":this._x=Math.asin(-Je(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Je(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Je(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin(Je(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,u),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Je(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,u),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:Le("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return zm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(zm,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Hm.setFromEuler(this),this.setFromQuaternion(Hm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};c(Da,"Euler");let wn=Da;wn.DEFAULT_ORDER="XYZ";const Cd=class Cd{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}};c(Cd,"Layers");let Gr=Cd,q_=0;const Vm=new L,ts=new At,Hn=new qe,mo=new L,lr=new L,Y_=new L,$_=new At,Gm=new L(1,0,0),Wm=new L(0,1,0),Xm=new L(0,0,1),jm={type:"added"},K_={type:"removed"},ns={type:"childadded",child:null},ac={type:"childremoved",child:null},gs=class gs extends ei{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:q_++}),this.uuid=fn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=gs.DEFAULT_UP.clone();const e=new L,t=new wn,n=new At,i=new L(1,1,1);function r(){n.setFromEuler(t,!1)}c(r,"onRotationChange");function o(){t.setFromQuaternion(n,void 0,!1)}c(o,"onQuaternionChange"),t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new qe},normalMatrix:{value:new Ye}}),this.matrix=new qe,this.matrixWorld=new qe,this.matrixAutoUpdate=gs.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=gs.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Gr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ts.setFromAxisAngle(e,t),this.quaternion.multiply(ts),this}rotateOnWorldAxis(e,t){return ts.setFromAxisAngle(e,t),this.quaternion.premultiply(ts),this}rotateX(e){return this.rotateOnAxis(Gm,e)}rotateY(e){return this.rotateOnAxis(Wm,e)}rotateZ(e){return this.rotateOnAxis(Xm,e)}translateOnAxis(e,t){return Vm.copy(e).applyQuaternion(this.quaternion),this.position.add(Vm.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Gm,e)}translateY(e){return this.translateOnAxis(Wm,e)}translateZ(e){return this.translateOnAxis(Xm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Hn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?mo.copy(e):mo.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),lr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Hn.lookAt(lr,mo,this.up):Hn.lookAt(mo,lr,this.up),this.quaternion.setFromRotationMatrix(Hn),i&&(Hn.extractRotation(i.matrixWorld),ts.setFromRotationMatrix(Hn),this.quaternion.premultiply(ts.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Ke("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(jm),ns.child=e,this.dispatchEvent(ns),ns.child=null):Ke("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(K_),ac.child=e,this.dispatchEvent(ac),ac.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Hn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Hn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Hn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(jm),ns.child=e,this.dispatchEvent(ns),ns.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(lr,e,Y_),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(lr,$_,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(a=>({...a})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(c(r,"serialize"),this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let u=0,h=l.length;u<h;u++){const d=l[u];r(e.shapes,d)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,u=this.material.length;l<u;l++)a.push(r(e.materials,this.material[l]));i.material=a}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(r(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),u=o(e.textures),h=o(e.images),d=o(e.shapes),f=o(e.skeletons),p=o(e.animations),x=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),u.length>0&&(n.textures=u),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),f.length>0&&(n.skeletons=f),p.length>0&&(n.animations=p),x.length>0&&(n.nodes=x)}return n.object=i,n;function o(a){const l=[];for(const u in a){const h=a[u];delete h.metadata,l.push(h)}return l}c(o,"extractFromCache")}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}};c(gs,"Object3D");let yt=gs;yt.DEFAULT_UP=new L(0,1,0);yt.DEFAULT_MATRIX_AUTO_UPDATE=!0;yt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const yn=new L,Vn=new L,cc=new L,Gn=new L,is=new L,ss=new L,qm=new L,lc=new L,uc=new L,hc=new L,dc=new rt,fc=new rt,pc=new rt,li=class li{constructor(e=new L,t=new L,n=new L){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),yn.subVectors(e,t),i.cross(yn);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){yn.subVectors(i,t),Vn.subVectors(n,t),cc.subVectors(e,t);const o=yn.dot(yn),a=yn.dot(Vn),l=yn.dot(cc),u=Vn.dot(Vn),h=Vn.dot(cc),d=o*u-a*a;if(d===0)return r.set(0,0,0),null;const f=1/d,p=(u*l-a*h)*f,x=(o*h-a*l)*f;return r.set(1-p-x,x,p)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Gn)===null?!1:Gn.x>=0&&Gn.y>=0&&Gn.x+Gn.y<=1}static getInterpolation(e,t,n,i,r,o,a,l){return this.getBarycoord(e,t,n,i,Gn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Gn.x),l.addScaledVector(o,Gn.y),l.addScaledVector(a,Gn.z),l)}static getInterpolatedAttribute(e,t,n,i,r,o){return dc.setScalar(0),fc.setScalar(0),pc.setScalar(0),dc.fromBufferAttribute(e,t),fc.fromBufferAttribute(e,n),pc.fromBufferAttribute(e,i),o.setScalar(0),o.addScaledVector(dc,r.x),o.addScaledVector(fc,r.y),o.addScaledVector(pc,r.z),o}static isFrontFacing(e,t,n,i){return yn.subVectors(n,t),Vn.subVectors(e,t),yn.cross(Vn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return yn.subVectors(this.c,this.b),Vn.subVectors(this.a,this.b),yn.cross(Vn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return li.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return li.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,r){return li.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return li.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return li.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let o,a;is.subVectors(i,n),ss.subVectors(r,n),lc.subVectors(e,n);const l=is.dot(lc),u=ss.dot(lc);if(l<=0&&u<=0)return t.copy(n);uc.subVectors(e,i);const h=is.dot(uc),d=ss.dot(uc);if(h>=0&&d<=h)return t.copy(i);const f=l*d-h*u;if(f<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(n).addScaledVector(is,o);hc.subVectors(e,r);const p=is.dot(hc),x=ss.dot(hc);if(x>=0&&p<=x)return t.copy(r);const _=p*u-l*x;if(_<=0&&u>=0&&x<=0)return a=u/(u-x),t.copy(n).addScaledVector(ss,a);const g=h*x-p*d;if(g<=0&&d-h>=0&&p-x>=0)return qm.subVectors(r,i),a=(d-h)/(d-h+(p-x)),t.copy(i).addScaledVector(qm,a);const m=1/(g+_+f);return o=_*m,a=f*m,t.copy(n).addScaledVector(is,o).addScaledVector(ss,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}};c(li,"Triangle");let Ui=li;const Mg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},oi={h:0,s:0,l:0},go={h:0,s:0,l:0};function mc(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}c(mc,"hue2rgb");var Rs;let Ge=(Rs=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Dt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,nt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=nt.workingColorSpace){return this.r=e,this.g=t,this.b=n,nt.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=nt.workingColorSpace){if(e=ad(e,1),t=Je(t,0,1),n=Je(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=mc(o,r,e+1/3),this.g=mc(o,r,e),this.b=mc(o,r,e-1/3)}return nt.colorSpaceToWorking(this,i),this}setStyle(e,t=Dt){function n(r){r!==void 0&&parseFloat(r)<1&&Le("Color: Alpha component of "+e+" will be ignored.")}c(n,"handleAlpha");let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Le("Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);Le("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Dt){const n=Mg[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Le("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Zn(e.r),this.g=Zn(e.g),this.b=Zn(e.b),this}copyLinearToSRGB(e){return this.r=vs(e.r),this.g=vs(e.g),this.b=vs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Dt){return nt.workingToColorSpace(kt.copy(this),e),Math.round(Je(kt.r*255,0,255))*65536+Math.round(Je(kt.g*255,0,255))*256+Math.round(Je(kt.b*255,0,255))}getHexString(e=Dt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=nt.workingColorSpace){nt.workingToColorSpace(kt.copy(this),t);const n=kt.r,i=kt.g,r=kt.b,o=Math.max(n,i,r),a=Math.min(n,i,r);let l,u;const h=(a+o)/2;if(a===o)l=0,u=0;else{const d=o-a;switch(u=h<=.5?d/(o+a):d/(2-o-a),o){case n:l=(i-r)/d+(i<r?6:0);break;case i:l=(r-n)/d+2;break;case r:l=(n-i)/d+4;break}l/=6}return e.h=l,e.s=u,e.l=h,e}getRGB(e,t=nt.workingColorSpace){return nt.workingToColorSpace(kt.copy(this),t),e.r=kt.r,e.g=kt.g,e.b=kt.b,e}getStyle(e=Dt){nt.workingToColorSpace(kt.copy(this),e);const t=kt.r,n=kt.g,i=kt.b;return e!==Dt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(oi),this.setHSL(oi.h+e,oi.s+t,oi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(oi),e.getHSL(go);const n=wr(oi.h,go.h,t),i=wr(oi.s,go.s,t),r=wr(oi.l,go.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},c(Rs,"Color"),Rs);const kt=new Ge;Ge.NAMES=Mg;let J_=0;const Rd=class Rd extends ei{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:J_++}),this.uuid=fn(),this.name="",this.type="Material",this.blending=_s,this.side=Qn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Vc,this.blendDst=Gc,this.blendEquation=Ni,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ge(0,0,0),this.blendAlpha=0,this.depthFunc=Ks,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Dm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=$i,this.stencilZFail=$i,this.stencilZPass=$i,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){Le(`Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){Le(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==_s&&(n.blending=this.blending),this.side!==Qn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Vc&&(n.blendSrc=this.blendSrc),this.blendDst!==Gc&&(n.blendDst=this.blendDst),this.blendEquation!==Ni&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ks&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Dm&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==$i&&(n.stencilFail=this.stencilFail),this.stencilZFail!==$i&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==$i&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(c(i,"extractFromCache"),t){const r=i(e.textures),o=i(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};c(Rd,"Material");let rn=Rd;const Pd=class Pd extends rn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ge(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new wn,this.combine=Jh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};c(Pd,"MeshBasicMaterial");let $n=Pd;const wt=new L,xo=new ce;let Z_=0;const Ld=class Ld{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Z_++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Cl,this.updateRanges=[],this.gpuType=En,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)xo.fromBufferAttribute(this,t),xo.applyMatrix3(e),this.setXY(t,xo.x,xo.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)wt.fromBufferAttribute(this,t),wt.applyMatrix3(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)wt.fromBufferAttribute(this,t),wt.applyMatrix4(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)wt.fromBufferAttribute(this,t),wt.applyNormalMatrix(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)wt.fromBufferAttribute(this,t),wt.transformDirection(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Mn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ot(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Mn(t,this.array)),t}setX(e,t){return this.normalized&&(t=ot(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Mn(t,this.array)),t}setY(e,t){return this.normalized&&(t=ot(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Mn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ot(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Mn(t,this.array)),t}setW(e,t){return this.normalized&&(t=ot(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=ot(t,this.array),n=ot(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=ot(t,this.array),n=ot(n,this.array),i=ot(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=ot(t,this.array),n=ot(n,this.array),i=ot(i,this.array),r=ot(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Cl&&(e.usage=this.usage),e}};c(Ld,"BufferAttribute");let Ut=Ld;const Id=class Id extends Ut{constructor(e,t,n){super(new Uint16Array(e),t,n)}};c(Id,"Uint16BufferAttribute");let Jo=Id;const Dd=class Dd extends Ut{constructor(e,t,n){super(new Uint32Array(e),t,n)}};c(Dd,"Uint32BufferAttribute");let Zo=Dd;const Od=class Od extends Ut{constructor(e,t,n){super(new Float32Array(e),t,n)}};c(Od,"Float32BufferAttribute");let Tt=Od,Q_=0;const un=new qe,gc=new yt,rs=new L,sn=new mn,ur=new mn,It=new L,Oa=class Oa extends ei{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Q_++}),this.uuid=fn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Sg(e)?Zo:Jo)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Ye().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return un.makeRotationFromQuaternion(e),this.applyMatrix4(un),this}rotateX(e){return un.makeRotationX(e),this.applyMatrix4(un),this}rotateY(e){return un.makeRotationY(e),this.applyMatrix4(un),this}rotateZ(e){return un.makeRotationZ(e),this.applyMatrix4(un),this}translate(e,t,n){return un.makeTranslation(e,t,n),this.applyMatrix4(un),this}scale(e,t,n){return un.makeScale(e,t,n),this.applyMatrix4(un),this}lookAt(e){return gc.lookAt(e),gc.updateMatrix(),this.applyMatrix4(gc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(rs).negate(),this.translate(rs.x,rs.y,rs.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,r=e.length;i<r;i++){const o=e[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Tt(n,3))}else{const n=Math.min(e.length,t.count);for(let i=0;i<n;i++){const r=e[i];t.setXYZ(i,r.x,r.y,r.z||0)}e.length>t.count&&Le("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new mn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ke("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];sn.setFromBufferAttribute(r),this.morphTargetsRelative?(It.addVectors(this.boundingBox.min,sn.min),this.boundingBox.expandByPoint(It),It.addVectors(this.boundingBox.max,sn.max),this.boundingBox.expandByPoint(It)):(this.boundingBox.expandByPoint(sn.min),this.boundingBox.expandByPoint(sn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ke('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new on);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ke("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(e){const n=this.boundingSphere.center;if(sn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];ur.setFromBufferAttribute(a),this.morphTargetsRelative?(It.addVectors(sn.min,ur.min),sn.expandByPoint(It),It.addVectors(sn.max,ur.max),sn.expandByPoint(It)):(sn.expandByPoint(ur.min),sn.expandByPoint(ur.max))}sn.getCenter(n);let i=0;for(let r=0,o=e.count;r<o;r++)It.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(It));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],l=this.morphTargetsRelative;for(let u=0,h=a.count;u<h;u++)It.fromBufferAttribute(a,u),l&&(rs.fromBufferAttribute(e,u),It.add(rs)),i=Math.max(i,n.distanceToSquared(It))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&Ke('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Ke("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ut(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let F=0;F<n.count;F++)a[F]=new L,l[F]=new L;const u=new L,h=new L,d=new L,f=new ce,p=new ce,x=new ce,_=new L,g=new L;function m(F,w,y){u.fromBufferAttribute(n,F),h.fromBufferAttribute(n,w),d.fromBufferAttribute(n,y),f.fromBufferAttribute(r,F),p.fromBufferAttribute(r,w),x.fromBufferAttribute(r,y),h.sub(u),d.sub(u),p.sub(f),x.sub(f);const E=1/(p.x*x.y-x.x*p.y);isFinite(E)&&(_.copy(h).multiplyScalar(x.y).addScaledVector(d,-p.y).multiplyScalar(E),g.copy(d).multiplyScalar(p.x).addScaledVector(h,-x.x).multiplyScalar(E),a[F].add(_),a[w].add(_),a[y].add(_),l[F].add(g),l[w].add(g),l[y].add(g))}c(m,"handleTriangle");let C=this.groups;C.length===0&&(C=[{start:0,count:e.count}]);for(let F=0,w=C.length;F<w;++F){const y=C[F],E=y.start,O=y.count;for(let N=E,H=E+O;N<H;N+=3)m(e.getX(N+0),e.getX(N+1),e.getX(N+2))}const b=new L,M=new L,P=new L,R=new L;function I(F){P.fromBufferAttribute(i,F),R.copy(P);const w=a[F];b.copy(w),b.sub(P.multiplyScalar(P.dot(w))).normalize(),M.crossVectors(R,w);const E=M.dot(l[F])<0?-1:1;o.setXYZW(F,b.x,b.y,b.z,E)}c(I,"handleVertex");for(let F=0,w=C.length;F<w;++F){const y=C[F],E=y.start,O=y.count;for(let N=E,H=E+O;N<H;N+=3)I(e.getX(N+0)),I(e.getX(N+1)),I(e.getX(N+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ut(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,p=n.count;f<p;f++)n.setXYZ(f,0,0,0);const i=new L,r=new L,o=new L,a=new L,l=new L,u=new L,h=new L,d=new L;if(e)for(let f=0,p=e.count;f<p;f+=3){const x=e.getX(f+0),_=e.getX(f+1),g=e.getX(f+2);i.fromBufferAttribute(t,x),r.fromBufferAttribute(t,_),o.fromBufferAttribute(t,g),h.subVectors(o,r),d.subVectors(i,r),h.cross(d),a.fromBufferAttribute(n,x),l.fromBufferAttribute(n,_),u.fromBufferAttribute(n,g),a.add(h),l.add(h),u.add(h),n.setXYZ(x,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(g,u.x,u.y,u.z)}else for(let f=0,p=t.count;f<p;f+=3)i.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),h.subVectors(o,r),d.subVectors(i,r),h.cross(d),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)It.fromBufferAttribute(e,t),It.normalize(),e.setXYZ(t,It.x,It.y,It.z)}toNonIndexed(){function e(a,l){const u=a.array,h=a.itemSize,d=a.normalized,f=new u.constructor(l.length*h);let p=0,x=0;for(let _=0,g=l.length;_<g;_++){a.isInterleavedBufferAttribute?p=l[_]*a.data.stride+a.offset:p=l[_]*h;for(let m=0;m<h;m++)f[x++]=u[p++]}return new Ut(f,h,d)}if(c(e,"convertBufferAttribute"),this.index===null)return Le("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Oa,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],u=e(l,n);t.setAttribute(a,u)}const r=this.morphAttributes;for(const a in r){const l=[],u=r[a];for(let h=0,d=u.length;h<d;h++){const f=u[h],p=e(f,n);l.push(p)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const u=o[a];t.addGroup(u.start,u.count,u.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const u=n[l];e.data.attributes[l]=u.toJSON(e.data)}const i={};let r=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],h=[];for(let d=0,f=u.length;d<f;d++){const p=u[d];h.push(p.toJSON(e.data))}h.length>0&&(i[l]=h,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const i=e.attributes;for(const u in i){const h=i[u];this.setAttribute(u,h.clone(t))}const r=e.morphAttributes;for(const u in r){const h=[],d=r[u];for(let f=0,p=d.length;f<p;f++)h.push(d[f].clone(t));this.morphAttributes[u]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let u=0,h=o.length;u<h;u++){const d=o[u];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}};c(Oa,"BufferGeometry");let qt=Oa;const Ym=new qe,Ri=new mi,_o=new on,$m=new L,vo=new L,bo=new L,yo=new L,xc=new L,So=new L,Km=new L,Mo=new L,Nd=class Nd extends yt{constructor(e=new qt,t=new $n){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(r&&a){So.set(0,0,0);for(let l=0,u=r.length;l<u;l++){const h=a[l],d=r[l];h!==0&&(xc.fromBufferAttribute(d,e),o?So.addScaledVector(xc,h):So.addScaledVector(xc.sub(t),h))}t.add(So)}return t}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),_o.copy(n.boundingSphere),_o.applyMatrix4(r),Ri.copy(e.ray).recast(e.near),!(_o.containsPoint(Ri.origin)===!1&&(Ri.intersectSphere(_o,$m)===null||Ri.origin.distanceToSquared($m)>(e.far-e.near)**2))&&(Ym.copy(r).invert(),Ri.copy(e.ray).applyMatrix4(Ym),!(n.boundingBox!==null&&Ri.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Ri)))}_computeIntersections(e,t,n){let i;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,u=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,f=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let x=0,_=f.length;x<_;x++){const g=f[x],m=o[g.materialIndex],C=Math.max(g.start,p.start),b=Math.min(a.count,Math.min(g.start+g.count,p.start+p.count));for(let M=C,P=b;M<P;M+=3){const R=a.getX(M),I=a.getX(M+1),F=a.getX(M+2);i=Eo(this,m,e,n,u,h,d,R,I,F),i&&(i.faceIndex=Math.floor(M/3),i.face.materialIndex=g.materialIndex,t.push(i))}}else{const x=Math.max(0,p.start),_=Math.min(a.count,p.start+p.count);for(let g=x,m=_;g<m;g+=3){const C=a.getX(g),b=a.getX(g+1),M=a.getX(g+2);i=Eo(this,o,e,n,u,h,d,C,b,M),i&&(i.faceIndex=Math.floor(g/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let x=0,_=f.length;x<_;x++){const g=f[x],m=o[g.materialIndex],C=Math.max(g.start,p.start),b=Math.min(l.count,Math.min(g.start+g.count,p.start+p.count));for(let M=C,P=b;M<P;M+=3){const R=M,I=M+1,F=M+2;i=Eo(this,m,e,n,u,h,d,R,I,F),i&&(i.faceIndex=Math.floor(M/3),i.face.materialIndex=g.materialIndex,t.push(i))}}else{const x=Math.max(0,p.start),_=Math.min(l.count,p.start+p.count);for(let g=x,m=_;g<m;g+=3){const C=g,b=g+1,M=g+2;i=Eo(this,o,e,n,u,h,d,C,b,M),i&&(i.faceIndex=Math.floor(g/3),t.push(i))}}}};c(Nd,"Mesh");let pt=Nd;function ev(s,e,t,n,i,r,o,a){let l;if(e.side===Jt?l=n.intersectTriangle(o,r,i,!0,a):l=n.intersectTriangle(i,r,o,e.side===Qn,a),l===null)return null;Mo.copy(a),Mo.applyMatrix4(s.matrixWorld);const u=t.ray.origin.distanceTo(Mo);return u<t.near||u>t.far?null:{distance:u,point:Mo.clone(),object:s}}c(ev,"checkIntersection$1");function Eo(s,e,t,n,i,r,o,a,l,u){s.getVertexPosition(a,vo),s.getVertexPosition(l,bo),s.getVertexPosition(u,yo);const h=ev(s,e,t,n,vo,bo,yo,Km);if(h){const d=new L;Ui.getBarycoord(Km,vo,bo,yo,d),i&&(h.uv=Ui.getInterpolatedAttribute(i,a,l,u,d,new ce)),r&&(h.uv1=Ui.getInterpolatedAttribute(r,a,l,u,d,new ce)),o&&(h.normal=Ui.getInterpolatedAttribute(o,a,l,u,d,new L),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const f={a,b:l,c:u,normal:new L,materialIndex:0};Ui.getNormal(vo,bo,yo,f.normal),h.face=f,h.barycoord=d}return h}c(Eo,"checkGeometryIntersection");const Na=class Na extends qt{constructor(e=1,t=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};const a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);const l=[],u=[],h=[],d=[];let f=0,p=0;x("z","y","x",-1,-1,n,t,e,o,r,0),x("z","y","x",1,-1,n,t,-e,o,r,1),x("x","z","y",1,1,e,n,t,i,o,2),x("x","z","y",1,-1,e,n,-t,i,o,3),x("x","y","z",1,-1,e,t,n,i,r,4),x("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new Tt(u,3)),this.setAttribute("normal",new Tt(h,3)),this.setAttribute("uv",new Tt(d,2));function x(_,g,m,C,b,M,P,R,I,F,w){const y=M/I,E=P/F,O=M/2,N=P/2,H=R/2,z=I+1,W=F+1;let K=0,j=0;const se=new L;for(let le=0;le<W;le++){const Ee=le*E-N;for(let We=0;We<z;We++){const je=We*y-O;se[_]=je*C,se[g]=Ee*b,se[m]=H,u.push(se.x,se.y,se.z),se[_]=0,se[g]=0,se[m]=R>0?1:-1,h.push(se.x,se.y,se.z),d.push(We/I),d.push(1-le/F),K+=1}}for(let le=0;le<F;le++)for(let Ee=0;Ee<I;Ee++){const We=f+Ee+z*le,je=f+Ee+z*(le+1),tt=f+(Ee+1)+z*(le+1),st=f+(Ee+1)+z*le;l.push(We,je,st),l.push(je,tt,st),j+=6}a.addGroup(p,j,w),p+=j,f+=K}c(x,"buildPlane")}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Na(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};c(Na,"BoxGeometry");let Un=Na;function tr(s){const e={};for(const t in s){e[t]={};for(const n in s[t]){const i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(Le("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}c(tr,"cloneUniforms");function Gt(s){const e={};for(let t=0;t<s.length;t++){const n=tr(s[t]);for(const i in n)e[i]=n[i]}return e}c(Gt,"mergeUniforms");function tv(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}c(tv,"cloneUniformsGroups");function Eg(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:nt.workingColorSpace}c(Eg,"getUnlitUniformColorSpace");const nv={clone:tr,merge:Gt};var iv=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,sv=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;const Ud=class Ud extends rn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=iv,this.fragmentShader=sv,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=tr(e.uniforms),this.uniformsGroups=tv(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}};c(Ud,"ShaderMaterial");let Tn=Ud;const Fd=class Fd extends yt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new qe,this.projectionMatrix=new qe,this.projectionMatrixInverse=new qe,this.coordinateSystem=On,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}};c(Fd,"Camera");let Qo=Fd;const ai=new L,Jm=new ce,Zm=new ce,Bd=class Bd extends Qo{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=er*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Er*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return er*2*Math.atan(Math.tan(Er*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){ai.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ai.x,ai.y).multiplyScalar(-e/ai.z),ai.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ai.x,ai.y).multiplyScalar(-e/ai.z)}getViewSize(e,t){return this.getViewBounds(e,Jm,Zm),t.subVectors(Zm,Jm)}setViewOffset(e,t,n,i,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Er*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,u=o.fullHeight;r+=o.offsetX*i/l,t-=o.offsetY*n/u,i*=o.width/l,n*=o.height/u}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};c(Bd,"PerspectiveCamera");let Nt=Bd;const os=-90,as=1,kd=class kd extends yt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Nt(os,as,e,t);i.layers=this.layers,this.add(i);const r=new Nt(os,as,e,t);r.layers=this.layers,this.add(r);const o=new Nt(os,as,e,t);o.layers=this.layers,this.add(o);const a=new Nt(os,as,e,t);a.layers=this.layers,this.add(a);const l=new Nt(os,as,e,t);l.layers=this.layers,this.add(l);const u=new Nt(os,as,e,t);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,r,o,a,l]=t;for(const u of t)this.remove(u);if(e===On)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Yo)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of t)this.add(u),u.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,u,h]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,r),e.setRenderTarget(n,1,i),e.render(t,o),e.setRenderTarget(n,2,i),e.render(t,a),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,u),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,i),e.render(t,h),e.setRenderTarget(d,f,p),e.xr.enabled=x,n.texture.needsPMREMUpdate=!0}};c(kd,"CubeCamera");let Il=kd;const zd=class zd extends Ft{constructor(e=[],t=Js,n,i,r,o,a,l,u,h){super(e,t,n,i,r,o,a,l,u,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}};c(zd,"CubeTexture");let ea=zd;const Hd=class Hd extends ti{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new ea(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Un(5,5,5),r=new Tn({name:"CubemapFromEquirect",uniforms:tr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Jt,blending:Jn});r.uniforms.tEquirect.value=t;const o=new pt(i,r),a=t.minFilter;return t.minFilter===Yn&&(t.minFilter=Wt),new Il(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(r)}};c(Hd,"WebGLCubeRenderTarget");let Dl=Hd;var Ps;let xt=(Ps=class extends yt{constructor(){super(),this.isGroup=!0,this.type="Group"}},c(Ps,"Group"),Ps);const rv={type:"move"},Vd=class Vd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new xt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new xt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new xt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,o=null;const a=this._targetRay,l=this._grip,u=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(u&&e.hand){o=!0;for(const _ of e.hand.values()){const g=t.getJointPose(_,n),m=this._getHandJoint(u,_);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}const h=u.joints["index-finger-tip"],d=u.joints["thumb-tip"],f=h.position.distanceTo(d.position),p=.02,x=.005;u.inputState.pinching&&f>p+x?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&f<=p-x&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(rv)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=r!==null),u!==null&&(u.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new xt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}};c(Vd,"WebXRController");let Tr=Vd;const Gd=class Gd extends yt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new wn,this.environmentIntensity=1,this.environmentRotation=new wn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}};c(Gd,"Scene");let Ol=Gd;const Wd=class Wd{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Cl,this.updateRanges=[],this.version=0,this.uuid=fn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=fn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=fn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}};c(Wd,"InterleavedBuffer");let Nl=Wd;const Vt=new L,Ua=class Ua{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Vt.fromBufferAttribute(this,t),Vt.applyMatrix4(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Vt.fromBufferAttribute(this,t),Vt.applyNormalMatrix(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Vt.fromBufferAttribute(this,t),Vt.transformDirection(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Mn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ot(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=ot(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=ot(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=ot(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=ot(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Mn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Mn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Mn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Mn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=ot(t,this.array),n=ot(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=ot(t,this.array),n=ot(n,this.array),i=ot(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=ot(t,this.array),n=ot(n,this.array),i=ot(i,this.array),r=ot(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){$o("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new Ut(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Ua(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){$o("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}};c(Ua,"InterleavedBufferAttribute");let Ul=Ua;const Qm=new L,e0=new rt,t0=new rt,ov=new L,n0=new qe,wo=new L,_c=new on,i0=new qe,vc=new mi,Xd=class Xd extends pt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Rm,this.bindMatrix=new qe,this.bindMatrixInverse=new qe,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new mn),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,wo),this.boundingBox.expandByPoint(wo)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new on),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,wo),this.boundingSphere.expandByPoint(wo)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),_c.copy(this.boundingSphere),_c.applyMatrix4(i),e.ray.intersectsSphere(_c)!==!1&&(i0.copy(i).invert(),vc.copy(e.ray).applyMatrix4(i0),!(this.boundingBox!==null&&vc.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,vc)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new rt,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Rm?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===u_?this.bindMatrixInverse.copy(this.bindMatrix).invert():Le("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;e0.fromBufferAttribute(i.attributes.skinIndex,e),t0.fromBufferAttribute(i.attributes.skinWeight,e),Qm.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const o=t0.getComponent(r);if(o!==0){const a=e0.getComponent(r);n0.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(ov.copy(Qm).applyMatrix4(n0),o)}}return t.applyMatrix4(this.bindMatrixInverse)}};c(Xd,"SkinnedMesh");let Fl=Xd;const jd=class jd extends yt{constructor(){super(),this.isBone=!0,this.type="Bone"}};c(jd,"Bone");let ta=jd;const qd=class qd extends Ft{constructor(e=null,t=1,n=1,i,r,o,a,l,u=Xt,h=Xt,d,f){super(null,o,a,l,u,h,i,r,d,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};c(qd,"DataTexture");let Wr=qd;const s0=new qe,av=new qe,Fa=class Fa{constructor(e=[],t=[]){this.uuid=fn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){Le("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new qe)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new qe;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,o=e.length;r<o;r++){const a=e[r]?e[r].matrixWorld:av;s0.multiplyMatrices(a,t[r]),s0.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new Fa(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new Wr(t,e,e,dn,En);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const r=e.bones[n];let o=t[r];o===void 0&&(Le("Skeleton: No bone found with UUID:",r),o=new ta),this.bones.push(o),this.boneInverses.push(new qe().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){const o=t[i];e.bones.push(o.uuid);const a=n[i];e.boneInverses.push(a.toArray())}return e}};c(Fa,"Skeleton");let Bl=Fa;const Yd=class Yd extends Ut{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}};c(Yd,"InstancedBufferAttribute");let Xr=Yd;const cs=new qe,r0=new qe,To=[],o0=new mn,cv=new qe,hr=new pt,dr=new on,$d=class $d extends pt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Xr(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,cv)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new mn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,cs),o0.copy(e.boundingBox).applyMatrix4(cs),this.boundingBox.union(o0)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new on),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,cs),dr.copy(e.boundingSphere).applyMatrix4(cs),this.boundingSphere.union(dr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(e,t){const n=this.matrixWorld,i=this.count;if(hr.geometry=this.geometry,hr.material=this.material,hr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),dr.copy(this.boundingSphere),dr.applyMatrix4(n),e.ray.intersectsSphere(dr)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,cs),r0.multiplyMatrices(n,cs),hr.matrixWorld=r0,hr.raycast(e,To);for(let o=0,a=To.length;o<a;o++){const l=To[o];l.instanceId=r,l.object=this,t.push(l)}To.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Xr(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Wr(new Float32Array(i*this.count),i,this.count,td,En));const r=this.morphTexture.source.data.data;let o=0;for(let u=0;u<n.length;u++)o+=n[u];const a=this.geometry.morphTargetsRelative?1:1-o,l=i*e;r[l]=a,r.set(n,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}};c($d,"InstancedMesh");let kl=$d;const bc=new L,lv=new L,uv=new Ye,Kd=class Kd{constructor(e=new L(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=bc.subVectors(n,t).cross(lv.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(bc),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||uv.getNormalMatrix(e),i=this.coplanarPoint(bc).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}};c(Kd,"Plane");let qn=Kd;const Pi=new on,hv=new ce(.5,.5),Ao=new L,Jd=class Jd{constructor(e=new qn,t=new qn,n=new qn,i=new qn,r=new qn,o=new qn){this.planes=[e,t,n,i,r,o]}set(e,t,n,i,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=On,n=!1){const i=this.planes,r=e.elements,o=r[0],a=r[1],l=r[2],u=r[3],h=r[4],d=r[5],f=r[6],p=r[7],x=r[8],_=r[9],g=r[10],m=r[11],C=r[12],b=r[13],M=r[14],P=r[15];if(i[0].setComponents(u-o,p-h,m-x,P-C).normalize(),i[1].setComponents(u+o,p+h,m+x,P+C).normalize(),i[2].setComponents(u+a,p+d,m+_,P+b).normalize(),i[3].setComponents(u-a,p-d,m-_,P-b).normalize(),n)i[4].setComponents(l,f,g,M).normalize(),i[5].setComponents(u-l,p-f,m-g,P-M).normalize();else if(i[4].setComponents(u-l,p-f,m-g,P-M).normalize(),t===On)i[5].setComponents(u+l,p+f,m+g,P+M).normalize();else if(t===Yo)i[5].setComponents(l,f,g,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Pi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Pi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Pi)}intersectsSprite(e){Pi.center.set(0,0,0);const t=hv.distanceTo(e.center);return Pi.radius=.7071067811865476+t,Pi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Pi)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Ao.x=i.normal.x>0?e.max.x:e.min.x,Ao.y=i.normal.y>0?e.max.y:e.min.y,Ao.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Ao)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};c(Jd,"Frustum");let jr=Jd;const Zd=class Zd extends rn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ge(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}};c(Zd,"LineBasicMaterial");let na=Zd;const ia=new L,sa=new L,a0=new qe,fr=new mi,Co=new on,yc=new L,c0=new L,Qd=class Qd extends yt{constructor(e=new qt,t=new na){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)ia.fromBufferAttribute(t,i-1),sa.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=ia.distanceTo(sa);e.setAttribute("lineDistance",new Tt(n,1))}else Le("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Co.copy(n.boundingSphere),Co.applyMatrix4(i),Co.radius+=r,e.ray.intersectsSphere(Co)===!1)return;a0.copy(i).invert(),fr.copy(e.ray).applyMatrix4(a0);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,u=this.isLineSegments?2:1,h=n.index,f=n.attributes.position;if(h!==null){const p=Math.max(0,o.start),x=Math.min(h.count,o.start+o.count);for(let _=p,g=x-1;_<g;_+=u){const m=h.getX(_),C=h.getX(_+1),b=Ro(this,e,fr,l,m,C,_);b&&t.push(b)}if(this.isLineLoop){const _=h.getX(x-1),g=h.getX(p),m=Ro(this,e,fr,l,_,g,x-1);m&&t.push(m)}}else{const p=Math.max(0,o.start),x=Math.min(f.count,o.start+o.count);for(let _=p,g=x-1;_<g;_+=u){const m=Ro(this,e,fr,l,_,_+1,_);m&&t.push(m)}if(this.isLineLoop){const _=Ro(this,e,fr,l,x-1,p,x-1);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};c(Qd,"Line");let qr=Qd;function Ro(s,e,t,n,i,r,o){const a=s.geometry.attributes.position;if(ia.fromBufferAttribute(a,i),sa.fromBufferAttribute(a,r),t.distanceSqToSegment(ia,sa,yc,c0)>n)return;yc.applyMatrix4(s.matrixWorld);const u=e.ray.origin.distanceTo(yc);if(!(u<e.near||u>e.far))return{distance:u,point:c0.clone().applyMatrix4(s.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:s}}c(Ro,"checkIntersection");const l0=new L,u0=new L,ef=class ef extends qr{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)l0.fromBufferAttribute(t,i),u0.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+l0.distanceTo(u0);e.setAttribute("lineDistance",new Tt(n,1))}else Le("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};c(ef,"LineSegments");let zl=ef;const tf=class tf extends qr{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}};c(tf,"LineLoop");let Hl=tf;const nf=class nf extends rn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ge(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}};c(nf,"PointsMaterial");let Yr=nf;const h0=new qe,Vl=new mi,Po=new on,Lo=new L,sf=class sf extends yt{constructor(e=new qt,t=new Yr){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Po.copy(n.boundingSphere),Po.applyMatrix4(i),Po.radius+=r,e.ray.intersectsSphere(Po)===!1)return;h0.copy(i).invert(),Vl.copy(e.ray).applyMatrix4(h0);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,u=n.index,d=n.attributes.position;if(u!==null){const f=Math.max(0,o.start),p=Math.min(u.count,o.start+o.count);for(let x=f,_=p;x<_;x++){const g=u.getX(x);Lo.fromBufferAttribute(d,g),d0(Lo,g,l,i,e,t,this)}}else{const f=Math.max(0,o.start),p=Math.min(d.count,o.start+o.count);for(let x=f,_=p;x<_;x++)Lo.fromBufferAttribute(d,x),d0(Lo,x,l,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};c(sf,"Points");let ra=sf;function d0(s,e,t,n,i,r,o){const a=Vl.distanceSqToPoint(s);if(a<t){const l=new L;Vl.closestPointToPoint(s,l),l.applyMatrix4(n);const u=i.ray.origin.distanceTo(l);if(u<i.near||u>i.far)return;r.push({distance:u,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}c(d0,"testPoint");const rf=class rf extends Ft{constructor(e,t,n=Vi,i,r,o,a=Xt,l=Xt,u,h=Ur,d=1){if(h!==Ur&&h!==Fr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:e,height:t,depth:d};super(f,i,r,o,a,l,h,n,u),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Vr(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}};c(rf,"DepthTexture");let oa=rf;const of=class of extends Ft{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}};c(of,"ExternalTexture");let aa=of;const Ba=class Ba extends qt{constructor(e=1,t=1,n=1,i=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const u=this;i=Math.floor(i),r=Math.floor(r);const h=[],d=[],f=[],p=[];let x=0;const _=[],g=n/2;let m=0;C(),o===!1&&(e>0&&b(!0),t>0&&b(!1)),this.setIndex(h),this.setAttribute("position",new Tt(d,3)),this.setAttribute("normal",new Tt(f,3)),this.setAttribute("uv",new Tt(p,2));function C(){const M=new L,P=new L;let R=0;const I=(t-e)/n;for(let F=0;F<=r;F++){const w=[],y=F/r,E=y*(t-e)+e;for(let O=0;O<=i;O++){const N=O/i,H=N*l+a,z=Math.sin(H),W=Math.cos(H);P.x=E*z,P.y=-y*n+g,P.z=E*W,d.push(P.x,P.y,P.z),M.set(z,I,W).normalize(),f.push(M.x,M.y,M.z),p.push(N,1-y),w.push(x++)}_.push(w)}for(let F=0;F<i;F++)for(let w=0;w<r;w++){const y=_[w][F],E=_[w+1][F],O=_[w+1][F+1],N=_[w][F+1];(e>0||w!==0)&&(h.push(y,E,N),R+=3),(t>0||w!==r-1)&&(h.push(E,O,N),R+=3)}u.addGroup(m,R,0),m+=R}c(C,"generateTorso");function b(M){const P=x,R=new ce,I=new L;let F=0;const w=M===!0?e:t,y=M===!0?1:-1;for(let O=1;O<=i;O++)d.push(0,g*y,0),f.push(0,y,0),p.push(.5,.5),x++;const E=x;for(let O=0;O<=i;O++){const H=O/i*l+a,z=Math.cos(H),W=Math.sin(H);I.x=w*W,I.y=g*y,I.z=w*z,d.push(I.x,I.y,I.z),f.push(0,y,0),R.x=z*.5+.5,R.y=W*.5*y+.5,p.push(R.x,R.y),x++}for(let O=0;O<i;O++){const N=P+O,H=E+O;M===!0?h.push(H,H+1,N):h.push(H+1,H,N),F+=3}u.addGroup(m,F,M===!0?1:2),m+=F}c(b,"generateCap")}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ba(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};c(Ba,"CylinderGeometry");let ca=Ba;const ka=class ka extends ca{constructor(e=1,t=1,n=32,i=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,n,i,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new ka(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};c(ka,"ConeGeometry");let $r=ka;const af=class af{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Le("Curve: .getPoint() not implemented.")}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,i=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(i),t.push(r),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const n=this.getLengths();let i=0;const r=n.length;let o;t?o=t:o=e*n[r-1];let a=0,l=r-1,u;for(;a<=l;)if(i=Math.floor(a+(l-a)/2),u=n[i]-o,u<0)a=i+1;else if(u>0)l=i-1;else{l=i;break}if(i=l,n[i]===o)return i/(r-1);const h=n[i],f=n[i+1]-h,p=(o-h)/f;return(i+p)/(r-1)}getTangent(e,t){let i=e-1e-4,r=e+1e-4;i<0&&(i=0),r>1&&(r=1);const o=this.getPoint(i),a=this.getPoint(r),l=t||(o.isVector2?new ce:new L);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){const n=new L,i=[],r=[],o=[],a=new L,l=new qe;for(let p=0;p<=e;p++){const x=p/e;i[p]=this.getTangentAt(x,new L)}r[0]=new L,o[0]=new L;let u=Number.MAX_VALUE;const h=Math.abs(i[0].x),d=Math.abs(i[0].y),f=Math.abs(i[0].z);h<=u&&(u=h,n.set(1,0,0)),d<=u&&(u=d,n.set(0,1,0)),f<=u&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],a),o[0].crossVectors(i[0],r[0]);for(let p=1;p<=e;p++){if(r[p]=r[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(i[p-1],i[p]),a.length()>Number.EPSILON){a.normalize();const x=Math.acos(Je(i[p-1].dot(i[p]),-1,1));r[p].applyMatrix4(l.makeRotationAxis(a,x))}o[p].crossVectors(i[p],r[p])}if(t===!0){let p=Math.acos(Je(r[0].dot(r[e]),-1,1));p/=e,i[0].dot(a.crossVectors(r[0],r[e]))>0&&(p=-p);for(let x=1;x<=e;x++)r[x].applyMatrix4(l.makeRotationAxis(i[x],p*x)),o[x].crossVectors(i[x],r[x])}return{tangents:i,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}};c(af,"Curve");let gn=af;const cf=class cf extends gn{constructor(e=0,t=0,n=1,i=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new ce){const n=t,i=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(o?r=0:r=i),this.aClockwise===!0&&!o&&(r===i?r=-i:r=r-i);const a=this.aStartAngle+e*r;let l=this.aX+this.xRadius*Math.cos(a),u=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),f=l-this.aX,p=u-this.aY;l=f*h-p*d+this.aX,u=f*d+p*h+this.aY}return n.set(l,u)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}};c(cf,"EllipseCurve");let Kr=cf;const lf=class lf extends Kr{constructor(e,t,n,i,r,o){super(e,t,n,n,i,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};c(lf,"ArcCurve");let Gl=lf;function cd(){let s=0,e=0,t=0,n=0;function i(r,o,a,l){s=r,e=a,t=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return c(i,"init"),{initCatmullRom:c(function(r,o,a,l,u){i(o,a,u*(a-r),u*(l-o))},"initCatmullRom"),initNonuniformCatmullRom:c(function(r,o,a,l,u,h,d){let f=(o-r)/u-(a-r)/(u+h)+(a-o)/h,p=(a-o)/h-(l-o)/(h+d)+(l-a)/d;f*=h,p*=h,i(o,a,f,p)},"initNonuniformCatmullRom"),calc:c(function(r){const o=r*r,a=o*r;return s+e*r+t*o+n*a},"calc")}}c(cd,"CubicPoly");const Io=new L,Sc=new cd,Mc=new cd,Ec=new cd,uf=class uf extends gn{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new L){const n=t,i=this.points,r=i.length,o=(r-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let u,h;this.closed||a>0?u=i[(a-1)%r]:(Io.subVectors(i[0],i[1]).add(i[0]),u=Io);const d=i[a%r],f=i[(a+1)%r];if(this.closed||a+2<r?h=i[(a+2)%r]:(Io.subVectors(i[r-1],i[r-2]).add(i[r-1]),h=Io),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let x=Math.pow(u.distanceToSquared(d),p),_=Math.pow(d.distanceToSquared(f),p),g=Math.pow(f.distanceToSquared(h),p);_<1e-4&&(_=1),x<1e-4&&(x=_),g<1e-4&&(g=_),Sc.initNonuniformCatmullRom(u.x,d.x,f.x,h.x,x,_,g),Mc.initNonuniformCatmullRom(u.y,d.y,f.y,h.y,x,_,g),Ec.initNonuniformCatmullRom(u.z,d.z,f.z,h.z,x,_,g)}else this.curveType==="catmullrom"&&(Sc.initCatmullRom(u.x,d.x,f.x,h.x,this.tension),Mc.initCatmullRom(u.y,d.y,f.y,h.y,this.tension),Ec.initCatmullRom(u.z,d.z,f.z,h.z,this.tension));return n.set(Sc.calc(l),Mc.calc(l),Ec.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new L().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};c(uf,"CatmullRomCurve3");let Wl=uf;function f0(s,e,t,n,i){const r=(n-e)*.5,o=(i-t)*.5,a=s*s,l=s*a;return(2*t-2*n+r+o)*l+(-3*t+3*n-2*r-o)*a+r*s+t}c(f0,"CatmullRom");function dv(s,e){const t=1-s;return t*t*e}c(dv,"QuadraticBezierP0");function fv(s,e){return 2*(1-s)*s*e}c(fv,"QuadraticBezierP1");function pv(s,e){return s*s*e}c(pv,"QuadraticBezierP2");function Ar(s,e,t,n){return dv(s,e)+fv(s,t)+pv(s,n)}c(Ar,"QuadraticBezier");function mv(s,e){const t=1-s;return t*t*t*e}c(mv,"CubicBezierP0");function gv(s,e){const t=1-s;return 3*t*t*s*e}c(gv,"CubicBezierP1");function xv(s,e){return 3*(1-s)*s*s*e}c(xv,"CubicBezierP2");function _v(s,e){return s*s*s*e}c(_v,"CubicBezierP3");function Cr(s,e,t,n,i){return mv(s,e)+gv(s,t)+xv(s,n)+_v(s,i)}c(Cr,"CubicBezier");const hf=class hf extends gn{constructor(e=new ce,t=new ce,n=new ce,i=new ce){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new ce){const n=t,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Cr(e,i.x,r.x,o.x,a.x),Cr(e,i.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}};c(hf,"CubicBezierCurve");let la=hf;const df=class df extends gn{constructor(e=new L,t=new L,n=new L,i=new L){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new L){const n=t,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Cr(e,i.x,r.x,o.x,a.x),Cr(e,i.y,r.y,o.y,a.y),Cr(e,i.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}};c(df,"CubicBezierCurve3");let Xl=df;const ff=class ff extends gn{constructor(e=new ce,t=new ce){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ce){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ce){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}};c(ff,"LineCurve");let ua=ff;const pf=class pf extends gn{constructor(e=new L,t=new L){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new L){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new L){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}};c(pf,"LineCurve3");let jl=pf;const mf=class mf extends gn{constructor(e=new ce,t=new ce,n=new ce){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new ce){const n=t,i=this.v0,r=this.v1,o=this.v2;return n.set(Ar(e,i.x,r.x,o.x),Ar(e,i.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}};c(mf,"QuadraticBezierCurve");let ha=mf;const gf=class gf extends gn{constructor(e=new L,t=new L,n=new L){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new L){const n=t,i=this.v0,r=this.v1,o=this.v2;return n.set(Ar(e,i.x,r.x,o.x),Ar(e,i.y,r.y,o.y),Ar(e,i.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}};c(gf,"QuadraticBezierCurve3");let ql=gf;const xf=class xf extends gn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ce){const n=t,i=this.points,r=(i.length-1)*e,o=Math.floor(r),a=r-o,l=i[o===0?o:o-1],u=i[o],h=i[o>i.length-2?i.length-1:o+1],d=i[o>i.length-3?i.length-1:o+2];return n.set(f0(a,l.x,u.x,h.x,d.x),f0(a,l.y,u.y,h.y,d.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new ce().fromArray(i))}return this}};c(xf,"SplineCurve");let da=xf;var Yl=Object.freeze({__proto__:null,ArcCurve:Gl,CatmullRomCurve3:Wl,CubicBezierCurve:la,CubicBezierCurve3:Xl,EllipseCurve:Kr,LineCurve:ua,LineCurve3:jl,QuadraticBezierCurve:ha,QuadraticBezierCurve3:ql,SplineCurve:da});const _f=class _f extends gn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Yl[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),i=this.getCurveLengths();let r=0;for(;r<i.length;){if(i[r]>=n){const o=i[r]-n,a=this.curves[r],l=a.getLength(),u=l===0?0:1-o/l;return a.getPointAt(u,t)}r++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let i=0,r=this.curves;i<r.length;i++){const o=r[i],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let u=0;u<l.length;u++){const h=l[u];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(new Yl[i.type]().fromJSON(i))}return this}};c(_f,"CurvePath");let $l=_f;const vf=class vf extends $l{constructor(e){super(),this.type="Path",this.currentPoint=new ce,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new ua(this.currentPoint.clone(),new ce(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){const r=new ha(this.currentPoint.clone(),new ce(e,t),new ce(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,r,o){const a=new la(this.currentPoint.clone(),new ce(e,t),new ce(n,i),new ce(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new da(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,r,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,n,i,r,o),this}absarc(e,t,n,i,r,o){return this.absellipse(e,t,n,n,i,r,o),this}ellipse(e,t,n,i,r,o,a,l){const u=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+u,t+h,n,i,r,o,a,l),this}absellipse(e,t,n,i,r,o,a,l){const u=new Kr(e,t,n,i,r,o,a,l);if(this.curves.length>0){const d=u.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(u);const h=u.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}};c(vf,"Path");let fa=vf;const bf=class bf extends fa{constructor(e){super(e),this.uuid=fn(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,i=this.holes.length;n<i;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const i=this.holes[t];e.holes.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(new fa().fromJSON(i))}return this}};c(bf,"Shape");let pa=bf;function vv(s,e,t=2){const n=e&&e.length,i=n?e[0]*t:s.length;let r=wg(s,0,i,t,!0);const o=[];if(!r||r.next===r.prev)return o;let a,l,u;if(n&&(r=Ev(s,e,r,t)),s.length>80*t){a=s[0],l=s[1];let h=a,d=l;for(let f=t;f<i;f+=t){const p=s[f],x=s[f+1];p<a&&(a=p),x<l&&(l=x),p>h&&(h=p),x>d&&(d=x)}u=Math.max(h-a,d-l),u=u!==0?32767/u:0}return Jr(r,o,t,a,l,u,0),o}c(vv,"earcut");function wg(s,e,t,n,i){let r;if(i===Nv(s,e,t,n)>0)for(let o=e;o<t;o+=n)r=p0(o/n|0,s[o],s[o+1],r);else for(let o=t-n;o>=e;o-=n)r=p0(o/n|0,s[o],s[o+1],r);return r&&nr(r,r.next)&&(Qr(r),r=r.next),r}c(wg,"linkedList");function Gi(s,e){if(!s)return s;e||(e=s);let t=s,n;do if(n=!1,!t.steiner&&(nr(t,t.next)||bt(t.prev,t,t.next)===0)){if(Qr(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}c(Gi,"filterPoints");function Jr(s,e,t,n,i,r,o){if(!s)return;!o&&r&&Rv(s,n,i,r);let a=s;for(;s.prev!==s.next;){const l=s.prev,u=s.next;if(r?yv(s,n,i,r):bv(s)){e.push(l.i,s.i,u.i),Qr(s),s=u.next,a=u.next;continue}if(s=u,s===a){o?o===1?(s=Sv(Gi(s),e),Jr(s,e,t,n,i,r,2)):o===2&&Mv(s,e,t,n,i,r):Jr(Gi(s),e,t,n,i,r,1);break}}}c(Jr,"earcutLinked");function bv(s){const e=s.prev,t=s,n=s.next;if(bt(e,t,n)>=0)return!1;const i=e.x,r=t.x,o=n.x,a=e.y,l=t.y,u=n.y,h=Math.min(i,r,o),d=Math.min(a,l,u),f=Math.max(i,r,o),p=Math.max(a,l,u);let x=n.next;for(;x!==e;){if(x.x>=h&&x.x<=f&&x.y>=d&&x.y<=p&&br(i,a,r,l,o,u,x.x,x.y)&&bt(x.prev,x,x.next)>=0)return!1;x=x.next}return!0}c(bv,"isEar");function yv(s,e,t,n){const i=s.prev,r=s,o=s.next;if(bt(i,r,o)>=0)return!1;const a=i.x,l=r.x,u=o.x,h=i.y,d=r.y,f=o.y,p=Math.min(a,l,u),x=Math.min(h,d,f),_=Math.max(a,l,u),g=Math.max(h,d,f),m=Kl(p,x,e,t,n),C=Kl(_,g,e,t,n);let b=s.prevZ,M=s.nextZ;for(;b&&b.z>=m&&M&&M.z<=C;){if(b.x>=p&&b.x<=_&&b.y>=x&&b.y<=g&&b!==i&&b!==o&&br(a,h,l,d,u,f,b.x,b.y)&&bt(b.prev,b,b.next)>=0||(b=b.prevZ,M.x>=p&&M.x<=_&&M.y>=x&&M.y<=g&&M!==i&&M!==o&&br(a,h,l,d,u,f,M.x,M.y)&&bt(M.prev,M,M.next)>=0))return!1;M=M.nextZ}for(;b&&b.z>=m;){if(b.x>=p&&b.x<=_&&b.y>=x&&b.y<=g&&b!==i&&b!==o&&br(a,h,l,d,u,f,b.x,b.y)&&bt(b.prev,b,b.next)>=0)return!1;b=b.prevZ}for(;M&&M.z<=C;){if(M.x>=p&&M.x<=_&&M.y>=x&&M.y<=g&&M!==i&&M!==o&&br(a,h,l,d,u,f,M.x,M.y)&&bt(M.prev,M,M.next)>=0)return!1;M=M.nextZ}return!0}c(yv,"isEarHashed");function Sv(s,e){let t=s;do{const n=t.prev,i=t.next.next;!nr(n,i)&&Ag(n,t,t.next,i)&&Zr(n,i)&&Zr(i,n)&&(e.push(n.i,t.i,i.i),Qr(t),Qr(t.next),t=s=i),t=t.next}while(t!==s);return Gi(t)}c(Sv,"cureLocalIntersections");function Mv(s,e,t,n,i,r){let o=s;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Iv(o,a)){let l=Cg(o,a);o=Gi(o,o.next),l=Gi(l,l.next),Jr(o,e,t,n,i,r,0),Jr(l,e,t,n,i,r,0);return}a=a.next}o=o.next}while(o!==s)}c(Mv,"splitEarcut");function Ev(s,e,t,n){const i=[];for(let r=0,o=e.length;r<o;r++){const a=e[r]*n,l=r<o-1?e[r+1]*n:s.length,u=wg(s,a,l,n,!1);u===u.next&&(u.steiner=!0),i.push(Lv(u))}i.sort(wv);for(let r=0;r<i.length;r++)t=Tv(i[r],t);return t}c(Ev,"eliminateHoles");function wv(s,e){let t=s.x-e.x;if(t===0&&(t=s.y-e.y,t===0)){const n=(s.next.y-s.y)/(s.next.x-s.x),i=(e.next.y-e.y)/(e.next.x-e.x);t=n-i}return t}c(wv,"compareXYSlope");function Tv(s,e){const t=Av(s,e);if(!t)return e;const n=Cg(t,s);return Gi(n,n.next),Gi(t,t.next)}c(Tv,"eliminateHole");function Av(s,e){let t=e;const n=s.x,i=s.y;let r=-1/0,o;if(nr(s,t))return t;do{if(nr(s,t.next))return t.next;if(i<=t.y&&i>=t.next.y&&t.next.y!==t.y){const d=t.x+(i-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=n&&d>r&&(r=d,o=t.x<t.next.x?t:t.next,d===n))return o}t=t.next}while(t!==e);if(!o)return null;const a=o,l=o.x,u=o.y;let h=1/0;t=o;do{if(n>=t.x&&t.x>=l&&n!==t.x&&Tg(i<u?n:r,i,l,u,i<u?r:n,i,t.x,t.y)){const d=Math.abs(i-t.y)/(n-t.x);Zr(t,s)&&(d<h||d===h&&(t.x>o.x||t.x===o.x&&Cv(o,t)))&&(o=t,h=d)}t=t.next}while(t!==a);return o}c(Av,"findHoleBridge");function Cv(s,e){return bt(s.prev,s,e.prev)<0&&bt(e.next,s,s.next)<0}c(Cv,"sectorContainsSector");function Rv(s,e,t,n){let i=s;do i.z===0&&(i.z=Kl(i.x,i.y,e,t,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,Pv(i)}c(Rv,"indexCurve");function Pv(s){let e,t=1;do{let n=s,i;s=null;let r=null;for(e=0;n;){e++;let o=n,a=0;for(let u=0;u<t&&(a++,o=o.nextZ,!!o);u++);let l=t;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||n.z<=o.z)?(i=n,n=n.nextZ,a--):(i=o,o=o.nextZ,l--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;n=o}r.nextZ=null,t*=2}while(e>1);return s}c(Pv,"sortLinked");function Kl(s,e,t,n,i){return s=(s-t)*i|0,e=(e-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,s|e<<1}c(Kl,"zOrder");function Lv(s){let e=s,t=s;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==s);return t}c(Lv,"getLeftmost");function Tg(s,e,t,n,i,r,o,a){return(i-o)*(e-a)>=(s-o)*(r-a)&&(s-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(i-o)*(n-a)}c(Tg,"pointInTriangle");function br(s,e,t,n,i,r,o,a){return!(s===o&&e===a)&&Tg(s,e,t,n,i,r,o,a)}c(br,"pointInTriangleExceptFirst");function Iv(s,e){return s.next.i!==e.i&&s.prev.i!==e.i&&!Dv(s,e)&&(Zr(s,e)&&Zr(e,s)&&Ov(s,e)&&(bt(s.prev,s,e.prev)||bt(s,e.prev,e))||nr(s,e)&&bt(s.prev,s,s.next)>0&&bt(e.prev,e,e.next)>0)}c(Iv,"isValidDiagonal");function bt(s,e,t){return(e.y-s.y)*(t.x-e.x)-(e.x-s.x)*(t.y-e.y)}c(bt,"area");function nr(s,e){return s.x===e.x&&s.y===e.y}c(nr,"equals");function Ag(s,e,t,n){const i=Oo(bt(s,e,t)),r=Oo(bt(s,e,n)),o=Oo(bt(t,n,s)),a=Oo(bt(t,n,e));return!!(i!==r&&o!==a||i===0&&Do(s,t,e)||r===0&&Do(s,n,e)||o===0&&Do(t,s,n)||a===0&&Do(t,e,n))}c(Ag,"intersects");function Do(s,e,t){return e.x<=Math.max(s.x,t.x)&&e.x>=Math.min(s.x,t.x)&&e.y<=Math.max(s.y,t.y)&&e.y>=Math.min(s.y,t.y)}c(Do,"onSegment");function Oo(s){return s>0?1:s<0?-1:0}c(Oo,"sign");function Dv(s,e){let t=s;do{if(t.i!==s.i&&t.next.i!==s.i&&t.i!==e.i&&t.next.i!==e.i&&Ag(t,t.next,s,e))return!0;t=t.next}while(t!==s);return!1}c(Dv,"intersectsPolygon");function Zr(s,e){return bt(s.prev,s,s.next)<0?bt(s,e,s.next)>=0&&bt(s,s.prev,e)>=0:bt(s,e,s.prev)<0||bt(s,s.next,e)<0}c(Zr,"locallyInside");function Ov(s,e){let t=s,n=!1;const i=(s.x+e.x)/2,r=(s.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&i<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==s);return n}c(Ov,"middleInside");function Cg(s,e){const t=Jl(s.i,s.x,s.y),n=Jl(e.i,e.x,e.y),i=s.next,r=e.prev;return s.next=e,e.prev=s,t.next=i,i.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}c(Cg,"splitPolygon");function p0(s,e,t,n){const i=Jl(s,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}c(p0,"insertNode");function Qr(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}c(Qr,"removeNode");function Jl(s,e,t){return{i:s,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}c(Jl,"createNode");function Nv(s,e,t,n){let i=0;for(let r=e,o=t-n;r<t;r+=n)i+=(s[o]-s[r])*(s[r+1]+s[o+1]),o=r;return i}c(Nv,"signedArea");const yf=class yf{static triangulate(e,t,n=2){return vv(e,t,n)}};c(yf,"Earcut");let Zl=yf;const za=class za{static area(e){const t=e.length;let n=0;for(let i=t-1,r=0;r<t;i=r++)n+=e[i].x*e[r].y-e[r].x*e[i].y;return n*.5}static isClockWise(e){return za.area(e)<0}static triangulateShape(e,t){const n=[],i=[],r=[];m0(e),g0(n,e);let o=e.length;t.forEach(m0);for(let l=0;l<t.length;l++)i.push(o),o+=t[l].length,g0(n,t[l]);const a=Zl.triangulate(n,i);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};c(za,"ShapeUtils");let fs=za;function m0(s){const e=s.length;e>2&&s[e-1].equals(s[0])&&s.pop()}c(m0,"removeDupEndPts");function g0(s,e){for(let t=0;t<e.length;t++)s.push(e[t].x),s.push(e[t].y)}c(g0,"addContour");const Ha=class Ha extends qt{constructor(e=new pa([new ce(.5,.5),new ce(-.5,.5),new ce(-.5,-.5),new ce(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,i=[],r=[];for(let a=0,l=e.length;a<l;a++){const u=e[a];o(u)}this.setAttribute("position",new Tt(i,3)),this.setAttribute("uv",new Tt(r,2)),this.computeVertexNormals();function o(a){const l=[],u=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,d=t.depth!==void 0?t.depth:1;let f=t.bevelEnabled!==void 0?t.bevelEnabled:!0,p=t.bevelThickness!==void 0?t.bevelThickness:.2,x=t.bevelSize!==void 0?t.bevelSize:p-.1,_=t.bevelOffset!==void 0?t.bevelOffset:0,g=t.bevelSegments!==void 0?t.bevelSegments:3;const m=t.extrudePath,C=t.UVGenerator!==void 0?t.UVGenerator:Uv;let b,M=!1,P,R,I,F;m&&(b=m.getSpacedPoints(h),M=!0,f=!1,P=m.computeFrenetFrames(h,!1),R=new L,I=new L,F=new L),f||(g=0,p=0,x=0,_=0);const w=a.extractPoints(u);let y=w.shape;const E=w.holes;if(!fs.isClockWise(y)){y=y.reverse();for(let ne=0,A=E.length;ne<A;ne++){const te=E[ne];fs.isClockWise(te)&&(E[ne]=te.reverse())}}function N(ne){const te=10000000000000001e-36;let ae=ne[0];for(let he=1;he<=ne.length;he++){const re=he%ne.length,we=ne[re],me=we.x-ae.x,ye=we.y-ae.y,T=me*me+ye*ye,v=Math.max(Math.abs(we.x),Math.abs(we.y),Math.abs(ae.x),Math.abs(ae.y)),k=te*v*v;if(T<=k){ne.splice(re,1),he--;continue}ae=we}}c(N,"mergeOverlappingPoints"),N(y),E.forEach(N);const H=E.length,z=y;for(let ne=0;ne<H;ne++){const A=E[ne];y=y.concat(A)}function W(ne,A,te){return A||Ke("ExtrudeGeometry: vec does not exist"),ne.clone().addScaledVector(A,te)}c(W,"scalePt2");const K=y.length;function j(ne,A,te){let ae,he,re;const we=ne.x-A.x,me=ne.y-A.y,ye=te.x-ne.x,T=te.y-ne.y,v=we*we+me*me,k=we*T-me*ye;if(Math.abs(k)>Number.EPSILON){const Y=Math.sqrt(v),Q=Math.sqrt(ye*ye+T*T),q=A.x-me/Y,Pe=A.y+we/Y,ge=te.x-T/Q,De=te.y+ye/Q,Ce=((ge-q)*T-(De-Pe)*ye)/(we*T-me*ye);ae=q+we*Ce-ne.x,he=Pe+me*Ce-ne.y;const ie=ae*ae+he*he;if(ie<=2)return new ce(ae,he);re=Math.sqrt(ie/2)}else{let Y=!1;we>Number.EPSILON?ye>Number.EPSILON&&(Y=!0):we<-Number.EPSILON?ye<-Number.EPSILON&&(Y=!0):Math.sign(me)===Math.sign(T)&&(Y=!0),Y?(ae=-me,he=we,re=Math.sqrt(v)):(ae=we,he=me,re=Math.sqrt(v/2))}return new ce(ae/re,he/re)}c(j,"getBevelVec");const se=[];for(let ne=0,A=z.length,te=A-1,ae=ne+1;ne<A;ne++,te++,ae++)te===A&&(te=0),ae===A&&(ae=0),se[ne]=j(z[ne],z[te],z[ae]);const le=[];let Ee,We=se.concat();for(let ne=0,A=H;ne<A;ne++){const te=E[ne];Ee=[];for(let ae=0,he=te.length,re=he-1,we=ae+1;ae<he;ae++,re++,we++)re===he&&(re=0),we===he&&(we=0),Ee[ae]=j(te[ae],te[re],te[we]);le.push(Ee),We=We.concat(Ee)}let je;if(g===0)je=fs.triangulateShape(z,E);else{const ne=[],A=[];for(let te=0;te<g;te++){const ae=te/g,he=p*Math.cos(ae*Math.PI/2),re=x*Math.sin(ae*Math.PI/2)+_;for(let we=0,me=z.length;we<me;we++){const ye=W(z[we],se[we],re);Ne(ye.x,ye.y,-he),ae===0&&ne.push(ye)}for(let we=0,me=H;we<me;we++){const ye=E[we];Ee=le[we];const T=[];for(let v=0,k=ye.length;v<k;v++){const Y=W(ye[v],Ee[v],re);Ne(Y.x,Y.y,-he),ae===0&&T.push(Y)}ae===0&&A.push(T)}}je=fs.triangulateShape(ne,A)}const tt=je.length,st=x+_;for(let ne=0;ne<K;ne++){const A=f?W(y[ne],We[ne],st):y[ne];M?(I.copy(P.normals[0]).multiplyScalar(A.x),R.copy(P.binormals[0]).multiplyScalar(A.y),F.copy(b[0]).add(I).add(R),Ne(F.x,F.y,F.z)):Ne(A.x,A.y,0)}for(let ne=1;ne<=h;ne++)for(let A=0;A<K;A++){const te=f?W(y[A],We[A],st):y[A];M?(I.copy(P.normals[ne]).multiplyScalar(te.x),R.copy(P.binormals[ne]).multiplyScalar(te.y),F.copy(b[ne]).add(I).add(R),Ne(F.x,F.y,F.z)):Ne(te.x,te.y,d/h*ne)}for(let ne=g-1;ne>=0;ne--){const A=ne/g,te=p*Math.cos(A*Math.PI/2),ae=x*Math.sin(A*Math.PI/2)+_;for(let he=0,re=z.length;he<re;he++){const we=W(z[he],se[he],ae);Ne(we.x,we.y,d+te)}for(let he=0,re=E.length;he<re;he++){const we=E[he];Ee=le[he];for(let me=0,ye=we.length;me<ye;me++){const T=W(we[me],Ee[me],ae);M?Ne(T.x,T.y+b[h-1].y,b[h-1].x+te):Ne(T.x,T.y,d+te)}}}$(),ee();function $(){const ne=i.length/3;if(f){let A=0,te=K*A;for(let ae=0;ae<tt;ae++){const he=je[ae];Re(he[2]+te,he[1]+te,he[0]+te)}A=h+g*2,te=K*A;for(let ae=0;ae<tt;ae++){const he=je[ae];Re(he[0]+te,he[1]+te,he[2]+te)}}else{for(let A=0;A<tt;A++){const te=je[A];Re(te[2],te[1],te[0])}for(let A=0;A<tt;A++){const te=je[A];Re(te[0]+K*h,te[1]+K*h,te[2]+K*h)}}n.addGroup(ne,i.length/3-ne,0)}c($,"buildLidFaces");function ee(){const ne=i.length/3;let A=0;Se(z,A),A+=z.length;for(let te=0,ae=E.length;te<ae;te++){const he=E[te];Se(he,A),A+=he.length}n.addGroup(ne,i.length/3-ne,1)}c(ee,"buildSideFaces");function Se(ne,A){let te=ne.length;for(;--te>=0;){const ae=te;let he=te-1;he<0&&(he=ne.length-1);for(let re=0,we=h+g*2;re<we;re++){const me=K*re,ye=K*(re+1),T=A+ae+me,v=A+he+me,k=A+he+ye,Y=A+ae+ye;Ze(T,v,k,Y)}}}c(Se,"sidewalls");function Ne(ne,A,te){l.push(ne),l.push(A),l.push(te)}c(Ne,"v");function Re(ne,A,te){ht(ne),ht(A),ht(te);const ae=i.length/3,he=C.generateTopUV(n,i,ae-3,ae-2,ae-1);ze(he[0]),ze(he[1]),ze(he[2])}c(Re,"f3");function Ze(ne,A,te,ae){ht(ne),ht(A),ht(ae),ht(A),ht(te),ht(ae);const he=i.length/3,re=C.generateSideWallUV(n,i,he-6,he-3,he-2,he-1);ze(re[0]),ze(re[1]),ze(re[3]),ze(re[1]),ze(re[2]),ze(re[3])}c(Ze,"f4");function ht(ne){i.push(l[ne*3+0]),i.push(l[ne*3+1]),i.push(l[ne*3+2])}c(ht,"addVertex");function ze(ne){r.push(ne.x),r.push(ne.y)}c(ze,"addUV")}c(o,"addShape")}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return Fv(t,n,e)}static fromJSON(e,t){const n=[];for(let r=0,o=e.shapes.length;r<o;r++){const a=t[e.shapes[r]];n.push(a)}const i=e.options.extrudePath;return i!==void 0&&(e.options.extrudePath=new Yl[i.type]().fromJSON(i)),new Ha(n,e.options)}};c(Ha,"ExtrudeGeometry");let Ql=Ha;const Uv={generateTopUV:c(function(s,e,t,n,i){const r=e[t*3],o=e[t*3+1],a=e[n*3],l=e[n*3+1],u=e[i*3],h=e[i*3+1];return[new ce(r,o),new ce(a,l),new ce(u,h)]},"generateTopUV"),generateSideWallUV:c(function(s,e,t,n,i,r){const o=e[t*3],a=e[t*3+1],l=e[t*3+2],u=e[n*3],h=e[n*3+1],d=e[n*3+2],f=e[i*3],p=e[i*3+1],x=e[i*3+2],_=e[r*3],g=e[r*3+1],m=e[r*3+2];return Math.abs(a-h)<Math.abs(o-u)?[new ce(o,1-l),new ce(u,1-d),new ce(f,1-x),new ce(_,1-m)]:[new ce(a,1-l),new ce(h,1-d),new ce(p,1-x),new ce(g,1-m)]},"generateSideWallUV")};function Fv(s,e,t){if(t.shapes=[],Array.isArray(s))for(let n=0,i=s.length;n<i;n++){const r=s[n];t.shapes.push(r.uuid)}else t.shapes.push(s.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}c(Fv,"toJSON$1");const Va=class Va extends qt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(i),u=a+1,h=l+1,d=e/a,f=t/l,p=[],x=[],_=[],g=[];for(let m=0;m<h;m++){const C=m*f-o;for(let b=0;b<u;b++){const M=b*d-r;x.push(M,-C,0),_.push(0,0,1),g.push(b/a),g.push(1-m/l)}}for(let m=0;m<l;m++)for(let C=0;C<a;C++){const b=C+u*m,M=C+u*(m+1),P=C+1+u*(m+1),R=C+1+u*m;p.push(b,M,R),p.push(M,P,R)}this.setIndex(p),this.setAttribute("position",new Tt(x,3)),this.setAttribute("normal",new Tt(_,3)),this.setAttribute("uv",new Tt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Va(e.width,e.height,e.widthSegments,e.heightSegments)}};c(Va,"PlaneGeometry");let ma=Va;const Ga=class Ga extends qt{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let u=0;const h=[],d=new L,f=new L,p=[],x=[],_=[],g=[];for(let m=0;m<=n;m++){const C=[],b=m/n;let M=0;m===0&&o===0?M=.5/t:m===n&&l===Math.PI&&(M=-.5/t);for(let P=0;P<=t;P++){const R=P/t;d.x=-e*Math.cos(i+R*r)*Math.sin(o+b*a),d.y=e*Math.cos(o+b*a),d.z=e*Math.sin(i+R*r)*Math.sin(o+b*a),x.push(d.x,d.y,d.z),f.copy(d).normalize(),_.push(f.x,f.y,f.z),g.push(R+M,1-b),C.push(u++)}h.push(C)}for(let m=0;m<n;m++)for(let C=0;C<t;C++){const b=h[m][C+1],M=h[m][C],P=h[m+1][C],R=h[m+1][C+1];(m!==0||o>0)&&p.push(b,M,R),(m!==n-1||l<Math.PI)&&p.push(M,P,R)}this.setIndex(p),this.setAttribute("position",new Tt(x,3)),this.setAttribute("normal",new Tt(_,3)),this.setAttribute("uv",new Tt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ga(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};c(Ga,"SphereGeometry");let ga=Ga;const Sf=class Sf extends rn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ge(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ge(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=od,this.normalScale=new ce(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new wn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};c(Sf,"MeshStandardMaterial");let eo=Sf;const Mf=class Mf extends eo{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ce(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:c(function(){return Je(2.5*(this.ior-1)/(this.ior+1),0,1)},"get"),set:c(function(t){this.ior=(1+.4*t)/(1-.4*t)},"set")}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ge(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ge(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ge(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};c(Mf,"MeshPhysicalMaterial");let xn=Mf;const Ef=class Ef extends rn{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Ge(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ge(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=od,this.normalScale=new ce(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new wn,this.combine=Jh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};c(Ef,"MeshLambertMaterial");let Zt=Ef;const wf=class wf extends rn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=f_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}};c(wf,"MeshDepthMaterial");let eu=wf;const Tf=class Tf extends rn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};c(Tf,"MeshDistanceMaterial");let tu=Tf;function No(s,e){return!s||s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}c(No,"convertArray");function Bv(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}c(Bv,"isTypedArray");function kv(s){function e(i,r){return s[i]-s[r]}c(e,"compareTime");const t=s.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}c(kv,"getKeyframeOrder");function x0(s,e,t){const n=s.length,i=new s.constructor(n);for(let r=0,o=0;o!==n;++r){const a=t[r]*e;for(let l=0;l!==e;++l)i[o++]=s[a+l]}return i}c(x0,"sortedArray");function Rg(s,e,t,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push(...o)),r=s[i++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=s[i++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=s[i++];while(r!==void 0)}c(Rg,"flattenJSON");const Af=class Af{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=i,i=t[++n],e<i)break e}o=t.length;break t}if(!(e>=r)){const a=t[1];e<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){const a=n+o>>>1;e<t[a]?o=a:n=a+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let o=0;o!==i;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}};c(Af,"Interpolant");let Wi=Af;const Cf=class Cf extends Wi{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Pm,endingEnd:Pm}}intervalChanged_(e,t,n){const i=this.parameterPositions;let r=e-2,o=e+1,a=i[r],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case Lm:r=e,a=2*t-n;break;case Im:r=i.length-2,a=t+i[r]-i[r+1];break;default:r=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Lm:o=e,l=2*n-t;break;case Im:o=1,l=n+i[1]-i[0];break;default:o=e-1,l=t}const u=(n-t)*.5,h=this.valueSize;this._weightPrev=u/(t-a),this._weightNext=u/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,u=l-a,h=this._offsetPrev,d=this._offsetNext,f=this._weightPrev,p=this._weightNext,x=(n-t)/(i-t),_=x*x,g=_*x,m=-f*g+2*f*_-f*x,C=(1+f)*g+(-1.5-2*f)*_+(-.5+f)*x+1,b=(-1-p)*g+(1.5+p)*_+.5*x,M=p*g-p*_;for(let P=0;P!==a;++P)r[P]=m*o[h+P]+C*o[u+P]+b*o[l+P]+M*o[d+P];return r}};c(Cf,"CubicInterpolant");let nu=Cf;const Rf=class Rf extends Wi{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,u=l-a,h=(n-t)/(i-t),d=1-h;for(let f=0;f!==a;++f)r[f]=o[u+f]*d+o[l+f]*h;return r}};c(Rf,"LinearInterpolant");let iu=Rf;const Pf=class Pf extends Wi{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}};c(Pf,"DiscreteInterpolant");let su=Pf;const Lf=class Lf{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=No(t,this.TimeBufferType),this.values=No(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:No(e.times,Array),values:No(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new su(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new iu(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new nu(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Br:t=this.InterpolantFactoryMethodDiscrete;break;case kr:t=this.InterpolantFactoryMethodLinear;break;case Ja:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Le("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Br;case this.InterpolantFactoryMethodLinear:return kr;case this.InterpolantFactoryMethodSmooth:return Ja}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let r=0,o=i-1;for(;r!==i&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==i){r>=o&&(o=Math.max(o,1),r=o-1);const a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(Ke("KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,r=n.length;r===0&&(Ke("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){const l=n[a];if(typeof l=="number"&&isNaN(l)){Ke("KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){Ke("KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(i!==void 0&&Bv(i))for(let a=0,l=i.length;a!==l;++a){const u=i[a];if(isNaN(u)){Ke("KeyframeTrack: Value is not a valid number.",this,a,u),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Ja,r=e.length-1;let o=1;for(let a=1;a<r;++a){let l=!1;const u=e[a],h=e[a+1];if(u!==h&&(a!==1||u!==e[0]))if(i)l=!0;else{const d=a*n,f=d-n,p=d+n;for(let x=0;x!==n;++x){const _=t[d+x];if(_!==t[f+x]||_!==t[p+x]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];const d=a*n,f=o*n;for(let p=0;p!==n;++p)t[f+p]=t[d+p]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,l=o*n,u=0;u!==n;++u)t[l+u]=t[a+u];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}};c(Lf,"KeyframeTrack");let an=Lf;an.prototype.ValueTypeName="";an.prototype.TimeBufferType=Float32Array;an.prototype.ValueBufferType=Float32Array;an.prototype.DefaultInterpolation=kr;const If=class If extends an{constructor(e,t,n){super(e,t,n)}};c(If,"BooleanKeyframeTrack");let gi=If;gi.prototype.ValueTypeName="bool";gi.prototype.ValueBufferType=Array;gi.prototype.DefaultInterpolation=Br;gi.prototype.InterpolantFactoryMethodLinear=void 0;gi.prototype.InterpolantFactoryMethodSmooth=void 0;const Df=class Df extends an{constructor(e,t,n,i){super(e,t,n,i)}};c(Df,"ColorKeyframeTrack");let xa=Df;xa.prototype.ValueTypeName="color";const Of=class Of extends an{constructor(e,t,n,i){super(e,t,n,i)}};c(Of,"NumberKeyframeTrack");let xi=Of;xi.prototype.ValueTypeName="number";const Nf=class Nf extends Wi{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(i-t);let u=e*a;for(let h=u+a;u!==h;u+=4)At.slerpFlat(r,0,o,u-a,o,u,l);return r}};c(Nf,"QuaternionLinearInterpolant");let ru=Nf;const Uf=class Uf extends an{constructor(e,t,n,i){super(e,t,n,i)}InterpolantFactoryMethodLinear(e){return new ru(this.times,this.values,this.getValueSize(),e)}};c(Uf,"QuaternionKeyframeTrack");let _i=Uf;_i.prototype.ValueTypeName="quaternion";_i.prototype.InterpolantFactoryMethodSmooth=void 0;const Ff=class Ff extends an{constructor(e,t,n){super(e,t,n)}};c(Ff,"StringKeyframeTrack");let vi=Ff;vi.prototype.ValueTypeName="string";vi.prototype.ValueBufferType=Array;vi.prototype.DefaultInterpolation=Br;vi.prototype.InterpolantFactoryMethodLinear=void 0;vi.prototype.InterpolantFactoryMethodSmooth=void 0;const Bf=class Bf extends an{constructor(e,t,n,i){super(e,t,n,i)}};c(Bf,"VectorKeyframeTrack");let bi=Bf;bi.prototype.ValueTypeName="vector";const kf=class kf{constructor(e="",t=-1,n=[],i=h_){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=fn(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(Hv(n[o]).scale(i));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,o=n.length;r!==o;++r)t.push(an.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const r=t.length,o=[];for(let a=0;a<r;a++){let l=[],u=[];l.push((a+r-1)%r,a,(a+1)%r),u.push(0,1,0);const h=kv(l);l=x0(l,1,h),u=x0(u,1,h),!i&&l[0]===0&&(l.push(r),u.push(u[0])),o.push(new xi(".morphTargetInfluences["+t[a].name+"]",l,u).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){const u=e[a],h=u.name.match(r);if(h&&h.length>1){const d=h[1];let f=i[d];f||(i[d]=f=[]),f.push(u)}}const o=[];for(const a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],t,n));return o}static parseAnimation(e,t){if(Le("AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!e)return Ke("AnimationClip: No animation in JSONLoader data."),null;const n=c(function(d,f,p,x,_){if(p.length!==0){const g=[],m=[];Rg(p,g,m,x),g.length!==0&&_.push(new d(f,g,m))}},"addNonemptyTrack"),i=[],r=e.name||"default",o=e.fps||30,a=e.blendMode;let l=e.length||-1;const u=e.hierarchy||[];for(let d=0;d<u.length;d++){const f=u[d].keys;if(!(!f||f.length===0))if(f[0].morphTargets){const p={};let x;for(x=0;x<f.length;x++)if(f[x].morphTargets)for(let _=0;_<f[x].morphTargets.length;_++)p[f[x].morphTargets[_]]=-1;for(const _ in p){const g=[],m=[];for(let C=0;C!==f[x].morphTargets.length;++C){const b=f[x];g.push(b.time),m.push(b.morphTarget===_?1:0)}i.push(new xi(".morphTargetInfluence["+_+"]",g,m))}l=p.length*o}else{const p=".bones["+t[d].name+"]";n(bi,p+".position",f,"pos",i),n(_i,p+".quaternion",f,"rot",i),n(bi,p+".scale",f,"scl",i)}}return i.length===0?null:new this(r,l,i,a)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());const t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}};c(kf,"AnimationClip");let ou=kf;function zv(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return xi;case"vector":case"vector2":case"vector3":case"vector4":return bi;case"color":return xa;case"quaternion":return _i;case"bool":case"boolean":return gi;case"string":return vi}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}c(zv,"getTrackTypeForValueTypeName");function Hv(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=zv(s.type);if(s.times===void 0){const t=[],n=[];Rg(s.keys,t,n,"value"),s.times=t,s.values=n}return e.parse!==void 0?e.parse(s):new e(s.name,s.times,s.values,s.interpolation)}c(Hv,"parseKeyframeTrack");const Kn={enabled:!1,files:{},add:c(function(s,e){this.enabled!==!1&&(this.files[s]=e)},"add"),get:c(function(s){if(this.enabled!==!1)return this.files[s]},"get"),remove:c(function(s){delete this.files[s]},"remove"),clear:c(function(){this.files={}},"clear")},zf=class zf{constructor(e,t,n){const i=this;let r=!1,o=0,a=0,l;const u=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){a++,r===!1&&i.onStart!==void 0&&i.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return u.push(h,d),this},this.removeHandler=function(h){const d=u.indexOf(h);return d!==-1&&u.splice(d,2),this},this.getHandler=function(h){for(let d=0,f=u.length;d<f;d+=2){const p=u[d],x=u[d+1];if(p.global&&(p.lastIndex=0),p.test(h))return x}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}};c(zf,"LoadingManager");let au=zf;const Vv=new au,Hf=class Hf{constructor(e){this.manager=e!==void 0?e:Vv,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};c(Hf,"Loader");let yi=Hf;yi.DEFAULT_MATERIAL_NAME="__DEFAULT";const Wn={},Vf=class Vf extends Error{constructor(e,t){super(e),this.response=t}};c(Vf,"HttpError");let cu=Vf;const Gf=class Gf extends yi{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=Kn.get(`file:${e}`);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(Wn[e]!==void 0){Wn[e].push({onLoad:t,onProgress:n,onError:i});return}Wn[e]=[],Wn[e].push({onLoad:t,onProgress:n,onError:i});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),a=this.mimeType,l=this.responseType;fetch(o).then(u=>{if(u.status===200||u.status===0){if(u.status===0&&Le("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||u.body===void 0||u.body.getReader===void 0)return u;const h=Wn[e],d=u.body.getReader(),f=u.headers.get("X-File-Size")||u.headers.get("Content-Length"),p=f?parseInt(f):0,x=p!==0;let _=0;const g=new ReadableStream({start(m){C();function C(){d.read().then(({done:b,value:M})=>{if(b)m.close();else{_+=M.byteLength;const P=new ProgressEvent("progress",{lengthComputable:x,loaded:_,total:p});for(let R=0,I=h.length;R<I;R++){const F=h[R];F.onProgress&&F.onProgress(P)}m.enqueue(M),C()}},b=>{m.error(b)})}c(C,"readData")}});return new Response(g)}else throw new cu(`fetch for "${u.url}" responded with ${u.status}: ${u.statusText}`,u)}).then(u=>{switch(l){case"arraybuffer":return u.arrayBuffer();case"blob":return u.blob();case"document":return u.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return u.json();default:if(a==="")return u.text();{const d=/charset="?([^;"\s]*)"?/i.exec(a),f=d&&d[1]?d[1].toLowerCase():void 0,p=new TextDecoder(f);return u.arrayBuffer().then(x=>p.decode(x))}}}).then(u=>{Kn.add(`file:${e}`,u);const h=Wn[e];delete Wn[e];for(let d=0,f=h.length;d<f;d++){const p=h[d];p.onLoad&&p.onLoad(u)}}).catch(u=>{const h=Wn[e];if(h===void 0)throw this.manager.itemError(e),u;delete Wn[e];for(let d=0,f=h.length;d<f;d++){const p=h[d];p.onError&&p.onError(u)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};c(Gf,"FileLoader");let _a=Gf;const ls=new WeakMap,Wf=class Wf extends yi{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=Kn.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0);else{let d=ls.get(o);d===void 0&&(d=[],ls.set(o,d)),d.push({onLoad:t,onError:i})}return o}const a=zr("img");function l(){h(),t&&t(this);const d=ls.get(this)||[];for(let f=0;f<d.length;f++){const p=d[f];p.onLoad&&p.onLoad(this)}ls.delete(this),r.manager.itemEnd(e)}c(l,"onImageLoad");function u(d){h(),i&&i(d),Kn.remove(`image:${e}`);const f=ls.get(this)||[];for(let p=0;p<f.length;p++){const x=f[p];x.onError&&x.onError(d)}ls.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}c(u,"onImageError");function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",u,!1)}return c(h,"removeEventListeners"),a.addEventListener("load",l,!1),a.addEventListener("error",u,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),Kn.add(`image:${e}`,a),r.manager.itemStart(e),a.src=e,a}};c(Wf,"ImageLoader");let lu=Wf;const Xf=class Xf extends yi{constructor(e){super(e)}load(e,t,n,i){const r=new Ft,o=new lu(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}};c(Xf,"TextureLoader");let uu=Xf;const jf=class jf extends yt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ge(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}};c(jf,"Light");let ir=jf;const wc=new qe,_0=new L,v0=new L,qf=class qf{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ce(512,512),this.mapType=Nn,this.map=null,this.mapPass=null,this.matrix=new qe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new jr,this._frameExtents=new ce(1,1),this._viewportCount=1,this._viewports=[new rt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;_0.setFromMatrixPosition(e.matrixWorld),t.position.copy(_0),v0.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(v0),t.updateMatrixWorld(),wc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(wc,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(wc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};c(qf,"LightShadow");let to=qf;const Yf=class Yf extends to{constructor(){super(new Nt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,n=er*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}};c(Yf,"SpotLightShadow");let hu=Yf;const $f=class $f extends ir{constructor(e,t,n=0,i=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(yt.DEFAULT_UP),this.updateMatrix(),this.target=new yt,this.distance=n,this.angle=i,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new hu}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};c($f,"SpotLight");let du=$f;const b0=new qe,pr=new L,Tc=new L,Kf=class Kf extends to{constructor(){super(new Nt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ce(4,2),this._viewportCount=6,this._viewports=[new rt(2,1,1,1),new rt(0,1,1,1),new rt(3,1,1,1),new rt(1,1,1,1),new rt(3,0,1,1),new rt(1,0,1,1)],this._cubeDirections=[new L(1,0,0),new L(-1,0,0),new L(0,0,1),new L(0,0,-1),new L(0,1,0),new L(0,-1,0)],this._cubeUps=[new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,0,1),new L(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),pr.setFromMatrixPosition(e.matrixWorld),n.position.copy(pr),Tc.copy(n.position),Tc.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Tc),n.updateMatrixWorld(),i.makeTranslation(-pr.x,-pr.y,-pr.z),b0.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(b0,n.coordinateSystem,n.reversedDepth)}};c(Kf,"PointLightShadow");let fu=Kf;const Jf=class Jf extends ir{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new fu}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}};c(Jf,"PointLight");let pu=Jf;const Zf=class Zf extends Qo{constructor(e=-1,t=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,o=n+e,a=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=u*this.view.offsetX,o=r+u*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}};c(Zf,"OrthographicCamera");let no=Zf;const Qf=class Qf extends to{constructor(){super(new no(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}};c(Qf,"DirectionalLightShadow");let mu=Qf;const ep=class ep extends ir{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(yt.DEFAULT_UP),this.updateMatrix(),this.target=new yt,this.shadow=new mu}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};c(ep,"DirectionalLight");let va=ep;const tp=class tp extends ir{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}};c(tp,"AmbientLight");let gu=tp;const np=class np{static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};c(np,"LoaderUtils");let zi=np;const Ac=new WeakMap,ip=class ip extends yi{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&Le("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&Le("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=Kn.get(`image-bitmap:${e}`);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(u=>{if(Ac.has(o)===!0)i&&i(Ac.get(o)),r.manager.itemError(e),r.manager.itemEnd(e);else return t&&t(u),r.manager.itemEnd(e),u});return}return setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader,a.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;const l=fetch(e,a).then(function(u){return u.blob()}).then(function(u){return createImageBitmap(u,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(u){return Kn.add(`image-bitmap:${e}`,u),t&&t(u),r.manager.itemEnd(e),u}).catch(function(u){i&&i(u),Ac.set(l,u),Kn.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});Kn.add(`image-bitmap:${e}`,l),r.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};c(ip,"ImageBitmapLoader");let xu=ip;const sp=class sp extends Nt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};c(sp,"ArrayCamera");let _u=sp;const rp=class rp{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};c(rp,"Clock");let vu=rp;const ld="\\[\\]\\.:\\/",Gv=new RegExp("["+ld+"]","g"),ud="[^"+ld+"]",Wv="[^"+ld.replace("\\.","")+"]",Xv=/((?:WC+[\/:])*)/.source.replace("WC",ud),jv=/(WCOD+)?/.source.replace("WCOD",Wv),qv=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",ud),Yv=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",ud),$v=new RegExp("^"+Xv+jv+qv+Yv+"$"),Kv=["material","materials","bones","map"],op=class op{constructor(e,t,n){const i=n||gt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}};c(op,"Composite");let bu=op;const ui=class ui{constructor(e,t,n){this.path=t,this.parsedPath=n||ui.parseTrackName(t),this.node=ui.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new ui.Composite(e,t,n):new ui(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Gv,"")}static parseTrackName(e){const t=$v.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const r=n.nodeName.substring(i+1);Kv.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=c(function(r){for(let o=0;o<r.length;o++){const a=r[o];if(a.name===t||a.uuid===t)return a;const l=n(a.children);if(l)return l}return null},"searchNodeSubtree"),i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let r=t.propertyIndex;if(e||(e=ui.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Le("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let u=t.objectIndex;switch(n){case"materials":if(!e.material){Ke("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Ke("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Ke("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===u){u=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Ke("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Ke("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){Ke("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(u!==void 0){if(e[u]===void 0){Ke("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[u]}}const o=e[i];if(o===void 0){const u=t.nodeName;Ke("PropertyBinding: Trying to update property for track: "+u+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){Ke("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Ke("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};c(ui,"PropertyBinding");let gt=ui;gt.Composite=bu;gt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};gt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};gt.prototype.GetterByBindingType=[gt.prototype._getValue_direct,gt.prototype._getValue_array,gt.prototype._getValue_arrayElement,gt.prototype._getValue_toArray];gt.prototype.SetterByBindingTypeAndVersioning=[[gt.prototype._setValue_direct,gt.prototype._setValue_direct_setNeedsUpdate,gt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[gt.prototype._setValue_array,gt.prototype._setValue_array_setNeedsUpdate,gt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[gt.prototype._setValue_arrayElement,gt.prototype._setValue_arrayElement_setNeedsUpdate,gt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[gt.prototype._setValue_fromArray,gt.prototype._setValue_fromArray_setNeedsUpdate,gt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];const y0=new qe,ap=class ap{constructor(e,t,n=0,i=1/0){this.ray=new mi(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new Gr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):Ke("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return y0.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(y0),this}intersectObject(e,t=!0,n=[]){return Su(e,this,n,t),n.sort(S0),n}intersectObjects(e,t=!0,n=[]){for(let i=0,r=e.length;i<r;i++)Su(e[i],this,n,t);return n.sort(S0),n}};c(ap,"Raycaster");let yu=ap;function S0(s,e){return s.distance-e.distance}c(S0,"ascSort");function Su(s,e,t,n){let i=!0;if(s.layers.test(e.layers)&&s.raycast(e,t)===!1&&(i=!1),i===!0&&n===!0){const r=s.children;for(let o=0,a=r.length;o<a;o++)Su(r[o],e,t,!0)}}c(Su,"intersect");function M0(s,e,t,n){const i=Jv(n);switch(t){case _g:return s*e;case td:return s*e/i.components*i.byteLength;case nd:return s*e/i.components*i.byteLength;case id:return s*e*2/i.components*i.byteLength;case sd:return s*e*2/i.components*i.byteLength;case vg:return s*e*3/i.components*i.byteLength;case dn:return s*e*4/i.components*i.byteLength;case rd:return s*e*4/i.components*i.byteLength;case Ho:case Vo:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Go:case Wo:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case el:case nl:return Math.max(s,16)*Math.max(e,8)/4;case Qc:case tl:return Math.max(s,8)*Math.max(e,8)/2;case il:case sl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case rl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case ol:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case al:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case cl:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case ll:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case ul:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case hl:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case dl:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case fl:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case pl:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case ml:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case gl:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case xl:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case _l:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case vl:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case bl:case yl:case Sl:return Math.ceil(s/4)*Math.ceil(e/4)*16;case Ml:case El:return Math.ceil(s/4)*Math.ceil(e/4)*8;case wl:case Tl:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}c(M0,"getByteLength");function Jv(s){switch(s){case Nn:case pg:return{byteLength:1,components:1};case Or:case mg:case sr:return{byteLength:2,components:1};case Qh:case ed:return{byteLength:2,components:4};case Vi:case Zh:case En:return{byteLength:4,components:1};case gg:case xg:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}c(Jv,"getTextureTypeByteLength");typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Kh}}));typeof window<"u"&&(window.__THREE__?Le("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Kh);function Pg(){let s=null,e=!1,t=null,n=null;function i(r,o){t(r,o),n=s.requestAnimationFrame(i)}return c(i,"onAnimationFrame"),{start:c(function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},"start"),stop:c(function(){s.cancelAnimationFrame(n),e=!1},"stop"),setAnimationLoop:c(function(r){t=r},"setAnimationLoop"),setContext:c(function(r){s=r},"setContext")}}c(Pg,"WebGLAnimation");function Zv(s){const e=new WeakMap;function t(a,l){const u=a.array,h=a.usage,d=u.byteLength,f=s.createBuffer();s.bindBuffer(l,f),s.bufferData(l,u,h),a.onUploadCallback();let p;if(u instanceof Float32Array)p=s.FLOAT;else if(typeof Float16Array<"u"&&u instanceof Float16Array)p=s.HALF_FLOAT;else if(u instanceof Uint16Array)a.isFloat16BufferAttribute?p=s.HALF_FLOAT:p=s.UNSIGNED_SHORT;else if(u instanceof Int16Array)p=s.SHORT;else if(u instanceof Uint32Array)p=s.UNSIGNED_INT;else if(u instanceof Int32Array)p=s.INT;else if(u instanceof Int8Array)p=s.BYTE;else if(u instanceof Uint8Array)p=s.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)p=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:f,type:p,bytesPerElement:u.BYTES_PER_ELEMENT,version:a.version,size:d}}c(t,"createBuffer");function n(a,l,u){const h=l.array,d=l.updateRanges;if(s.bindBuffer(u,a),d.length===0)s.bufferSubData(u,0,h);else{d.sort((p,x)=>p.start-x.start);let f=0;for(let p=1;p<d.length;p++){const x=d[f],_=d[p];_.start<=x.start+x.count+1?x.count=Math.max(x.count,_.start+_.count-x.start):(++f,d[f]=_)}d.length=f+1;for(let p=0,x=d.length;p<x;p++){const _=d[p];s.bufferSubData(u,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}c(n,"updateBuffer");function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}c(i,"get");function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(s.deleteBuffer(l.buffer),e.delete(a))}c(r,"remove");function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const u=e.get(a);if(u===void 0)e.set(a,t(a,l));else if(u.version<a.version){if(u.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(u.buffer,a,l),u.version=a.version}}return c(o,"update"),{get:i,remove:r,update:o}}c(Zv,"WebGLAttributes");var Qv=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,eb=`#ifdef USE_ALPHAHASH
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
#endif`,tb=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,nb=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ib=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,sb=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,rb=`#ifdef USE_AOMAP
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
#endif`,ob=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ab=`#ifdef USE_BATCHING
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
#endif`,cb=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,lb=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ub=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,hb=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,db=`#ifdef USE_IRIDESCENCE
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
#endif`,fb=`#ifdef USE_BUMPMAP
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
#endif`,pb=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,mb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,gb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,xb=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,_b=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,vb=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,bb=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,yb=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Sb=`#define PI 3.141592653589793
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
} // validated`,Mb=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Eb=`vec3 transformedNormal = objectNormal;
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
#endif`,wb=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Tb=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ab=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Cb=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Rb="gl_FragColor = linearToOutputTexel( gl_FragColor );",Pb=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Lb=`#ifdef USE_ENVMAP
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
#endif`,Ib=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Db=`#ifdef USE_ENVMAP
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
#endif`,Ob=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Nb=`#ifdef USE_ENVMAP
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
#endif`,Ub=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Fb=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Bb=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,kb=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,zb=`#ifdef USE_GRADIENTMAP
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
}`,Hb=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Vb=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Gb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Wb=`uniform bool receiveShadow;
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
#endif`,Xb=`#ifdef USE_ENVMAP
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
#endif`,jb=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,qb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Yb=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,$b=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Kb=`PhysicalMaterial material;
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
#endif`,Jb=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
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
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 uv = vec2( roughness, dotNV );
	return texture2D( dfgLUT, uv ).rg;
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
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = DFGApprox( vec3(0.0, 0.0, 1.0), vec3(sqrt(1.0 - dotNV * dotNV), 0.0, dotNV), material.roughness );
	vec2 dfgL = DFGApprox( vec3(0.0, 0.0, 1.0), vec3(sqrt(1.0 - dotNL * dotNL), 0.0, dotNL), material.roughness );
	vec3 FssEss_V = material.specularColor * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColor * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColor + ( 1.0 - material.specularColor ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg * Favg + EPSILON );
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
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
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
}`,Zb=`
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
#endif`,Qb=`#if defined( RE_IndirectDiffuse )
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
#endif`,ey=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ty=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ny=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,iy=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,sy=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,ry=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,oy=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ay=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,cy=`#if defined( USE_POINTS_UV )
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
#endif`,ly=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,uy=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,hy=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,dy=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,fy=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,py=`#ifdef USE_MORPHTARGETS
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
#endif`,my=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,gy=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,xy=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,_y=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,vy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,by=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,yy=`#ifdef USE_NORMALMAP
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
#endif`,Sy=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,My=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Ey=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,wy=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ty=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ay=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Cy=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ry=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Py=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Ly=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Iy=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Dy=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Oy=`#if NUM_SPOT_LIGHT_COORDS > 0
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
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
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
#endif`,Ny=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Uy=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Fy=`float getShadowMask() {
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
}`,By=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ky=`#ifdef USE_SKINNING
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
#endif`,zy=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Hy=`#ifdef USE_SKINNING
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
#endif`,Vy=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Gy=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Wy=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Xy=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,jy=`#ifdef USE_TRANSMISSION
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
#endif`,qy=`#ifdef USE_TRANSMISSION
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
#endif`,Yy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,$y=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ky=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Jy=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Zy=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Qy=`uniform sampler2D t2D;
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
}`,eS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,tS=`#ifdef ENVMAP_TYPE_CUBE
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
}`,nS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,iS=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,sS=`#include <common>
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
}`,rS=`#if DEPTH_PACKING == 3200
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
}`,oS=`#define DISTANCE
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
}`,aS=`#define DISTANCE
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
}`,cS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,lS=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,uS=`uniform float scale;
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
}`,hS=`uniform vec3 diffuse;
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
}`,dS=`#include <common>
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
}`,fS=`uniform vec3 diffuse;
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
}`,pS=`#define LAMBERT
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
}`,mS=`#define LAMBERT
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
}`,gS=`#define MATCAP
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
}`,xS=`#define MATCAP
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
}`,_S=`#define NORMAL
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
}`,vS=`#define NORMAL
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
}`,bS=`#define PHONG
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
}`,yS=`#define PHONG
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
}`,SS=`#define STANDARD
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
}`,MS=`#define STANDARD
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
}`,ES=`#define TOON
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
}`,wS=`#define TOON
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
}`,TS=`uniform float size;
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
}`,AS=`uniform vec3 diffuse;
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
}`,CS=`#include <common>
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
}`,RS=`uniform vec3 color;
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
}`,PS=`uniform float rotation;
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
}`,LS=`uniform vec3 diffuse;
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
}`,$e={alphahash_fragment:Qv,alphahash_pars_fragment:eb,alphamap_fragment:tb,alphamap_pars_fragment:nb,alphatest_fragment:ib,alphatest_pars_fragment:sb,aomap_fragment:rb,aomap_pars_fragment:ob,batching_pars_vertex:ab,batching_vertex:cb,begin_vertex:lb,beginnormal_vertex:ub,bsdfs:hb,iridescence_fragment:db,bumpmap_pars_fragment:fb,clipping_planes_fragment:pb,clipping_planes_pars_fragment:mb,clipping_planes_pars_vertex:gb,clipping_planes_vertex:xb,color_fragment:_b,color_pars_fragment:vb,color_pars_vertex:bb,color_vertex:yb,common:Sb,cube_uv_reflection_fragment:Mb,defaultnormal_vertex:Eb,displacementmap_pars_vertex:wb,displacementmap_vertex:Tb,emissivemap_fragment:Ab,emissivemap_pars_fragment:Cb,colorspace_fragment:Rb,colorspace_pars_fragment:Pb,envmap_fragment:Lb,envmap_common_pars_fragment:Ib,envmap_pars_fragment:Db,envmap_pars_vertex:Ob,envmap_physical_pars_fragment:Xb,envmap_vertex:Nb,fog_vertex:Ub,fog_pars_vertex:Fb,fog_fragment:Bb,fog_pars_fragment:kb,gradientmap_pars_fragment:zb,lightmap_pars_fragment:Hb,lights_lambert_fragment:Vb,lights_lambert_pars_fragment:Gb,lights_pars_begin:Wb,lights_toon_fragment:jb,lights_toon_pars_fragment:qb,lights_phong_fragment:Yb,lights_phong_pars_fragment:$b,lights_physical_fragment:Kb,lights_physical_pars_fragment:Jb,lights_fragment_begin:Zb,lights_fragment_maps:Qb,lights_fragment_end:ey,logdepthbuf_fragment:ty,logdepthbuf_pars_fragment:ny,logdepthbuf_pars_vertex:iy,logdepthbuf_vertex:sy,map_fragment:ry,map_pars_fragment:oy,map_particle_fragment:ay,map_particle_pars_fragment:cy,metalnessmap_fragment:ly,metalnessmap_pars_fragment:uy,morphinstance_vertex:hy,morphcolor_vertex:dy,morphnormal_vertex:fy,morphtarget_pars_vertex:py,morphtarget_vertex:my,normal_fragment_begin:gy,normal_fragment_maps:xy,normal_pars_fragment:_y,normal_pars_vertex:vy,normal_vertex:by,normalmap_pars_fragment:yy,clearcoat_normal_fragment_begin:Sy,clearcoat_normal_fragment_maps:My,clearcoat_pars_fragment:Ey,iridescence_pars_fragment:wy,opaque_fragment:Ty,packing:Ay,premultiplied_alpha_fragment:Cy,project_vertex:Ry,dithering_fragment:Py,dithering_pars_fragment:Ly,roughnessmap_fragment:Iy,roughnessmap_pars_fragment:Dy,shadowmap_pars_fragment:Oy,shadowmap_pars_vertex:Ny,shadowmap_vertex:Uy,shadowmask_pars_fragment:Fy,skinbase_vertex:By,skinning_pars_vertex:ky,skinning_vertex:zy,skinnormal_vertex:Hy,specularmap_fragment:Vy,specularmap_pars_fragment:Gy,tonemapping_fragment:Wy,tonemapping_pars_fragment:Xy,transmission_fragment:jy,transmission_pars_fragment:qy,uv_pars_fragment:Yy,uv_pars_vertex:$y,uv_vertex:Ky,worldpos_vertex:Jy,background_vert:Zy,background_frag:Qy,backgroundCube_vert:eS,backgroundCube_frag:tS,cube_vert:nS,cube_frag:iS,depth_vert:sS,depth_frag:rS,distanceRGBA_vert:oS,distanceRGBA_frag:aS,equirect_vert:cS,equirect_frag:lS,linedashed_vert:uS,linedashed_frag:hS,meshbasic_vert:dS,meshbasic_frag:fS,meshlambert_vert:pS,meshlambert_frag:mS,meshmatcap_vert:gS,meshmatcap_frag:xS,meshnormal_vert:_S,meshnormal_frag:vS,meshphong_vert:bS,meshphong_frag:yS,meshphysical_vert:SS,meshphysical_frag:MS,meshtoon_vert:ES,meshtoon_frag:wS,points_vert:TS,points_frag:AS,shadow_vert:CS,shadow_frag:RS,sprite_vert:PS,sprite_frag:LS},xe={common:{diffuse:{value:new Ge(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ye}},envmap:{envMap:{value:null},envMapRotation:{value:new Ye},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ye}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ye}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ye},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ye},normalScale:{value:new ce(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ye},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ye}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ye}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ye}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ge(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ge(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0},uvTransform:{value:new Ye}},sprite:{diffuse:{value:new Ge(16777215)},opacity:{value:1},center:{value:new ce(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}}},In={basic:{uniforms:Gt([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.fog]),vertexShader:$e.meshbasic_vert,fragmentShader:$e.meshbasic_frag},lambert:{uniforms:Gt([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,xe.lights,{emissive:{value:new Ge(0)}}]),vertexShader:$e.meshlambert_vert,fragmentShader:$e.meshlambert_frag},phong:{uniforms:Gt([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,xe.lights,{emissive:{value:new Ge(0)},specular:{value:new Ge(1118481)},shininess:{value:30}}]),vertexShader:$e.meshphong_vert,fragmentShader:$e.meshphong_frag},standard:{uniforms:Gt([xe.common,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.roughnessmap,xe.metalnessmap,xe.fog,xe.lights,{emissive:{value:new Ge(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:$e.meshphysical_vert,fragmentShader:$e.meshphysical_frag},toon:{uniforms:Gt([xe.common,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.gradientmap,xe.fog,xe.lights,{emissive:{value:new Ge(0)}}]),vertexShader:$e.meshtoon_vert,fragmentShader:$e.meshtoon_frag},matcap:{uniforms:Gt([xe.common,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,{matcap:{value:null}}]),vertexShader:$e.meshmatcap_vert,fragmentShader:$e.meshmatcap_frag},points:{uniforms:Gt([xe.points,xe.fog]),vertexShader:$e.points_vert,fragmentShader:$e.points_frag},dashed:{uniforms:Gt([xe.common,xe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:$e.linedashed_vert,fragmentShader:$e.linedashed_frag},depth:{uniforms:Gt([xe.common,xe.displacementmap]),vertexShader:$e.depth_vert,fragmentShader:$e.depth_frag},normal:{uniforms:Gt([xe.common,xe.bumpmap,xe.normalmap,xe.displacementmap,{opacity:{value:1}}]),vertexShader:$e.meshnormal_vert,fragmentShader:$e.meshnormal_frag},sprite:{uniforms:Gt([xe.sprite,xe.fog]),vertexShader:$e.sprite_vert,fragmentShader:$e.sprite_frag},background:{uniforms:{uvTransform:{value:new Ye},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:$e.background_vert,fragmentShader:$e.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ye}},vertexShader:$e.backgroundCube_vert,fragmentShader:$e.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:$e.cube_vert,fragmentShader:$e.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:$e.equirect_vert,fragmentShader:$e.equirect_frag},distanceRGBA:{uniforms:Gt([xe.common,xe.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:$e.distanceRGBA_vert,fragmentShader:$e.distanceRGBA_frag},shadow:{uniforms:Gt([xe.lights,xe.fog,{color:{value:new Ge(0)},opacity:{value:1}}]),vertexShader:$e.shadow_vert,fragmentShader:$e.shadow_frag}};In.physical={uniforms:Gt([In.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ye},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ye},clearcoatNormalScale:{value:new ce(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ye},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ye},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ye},sheen:{value:0},sheenColor:{value:new Ge(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ye},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ye},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ye},transmissionSamplerSize:{value:new ce},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ye},attenuationDistance:{value:0},attenuationColor:{value:new Ge(0)},specularColor:{value:new Ge(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ye},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ye},anisotropyVector:{value:new ce},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ye}}]),vertexShader:$e.meshphysical_vert,fragmentShader:$e.meshphysical_frag};const Uo={r:0,b:0,g:0},Li=new wn,IS=new qe;function DS(s,e,t,n,i,r,o){const a=new Ge(0);let l=r===!0?0:1,u,h,d=null,f=0,p=null;function x(b){let M=b.isScene===!0?b.background:null;return M&&M.isTexture&&(M=(b.backgroundBlurriness>0?t:e).get(M)),M}c(x,"getBackground");function _(b){let M=!1;const P=x(b);P===null?m(a,l):P&&P.isColor&&(m(P,1),M=!0);const R=s.xr.getEnvironmentBlendMode();R==="additive"?n.buffers.color.setClear(0,0,0,1,o):R==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(s.autoClear||M)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}c(_,"render");function g(b,M){const P=x(M);P&&(P.isCubeTexture||P.mapping===ja)?(h===void 0&&(h=new pt(new Un(1,1,1),new Tn({name:"BackgroundCubeMaterial",uniforms:tr(In.backgroundCube.uniforms),vertexShader:In.backgroundCube.vertexShader,fragmentShader:In.backgroundCube.fragmentShader,side:Jt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(R,I,F){this.matrixWorld.copyPosition(F.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:c(function(){return this.uniforms.envMap.value},"get")}),i.update(h)),Li.copy(M.backgroundRotation),Li.x*=-1,Li.y*=-1,Li.z*=-1,P.isCubeTexture&&P.isRenderTargetTexture===!1&&(Li.y*=-1,Li.z*=-1),h.material.uniforms.envMap.value=P,h.material.uniforms.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(IS.makeRotationFromEuler(Li)),h.material.toneMapped=nt.getTransfer(P.colorSpace)!==ut,(d!==P||f!==P.version||p!==s.toneMapping)&&(h.material.needsUpdate=!0,d=P,f=P.version,p=s.toneMapping),h.layers.enableAll(),b.unshift(h,h.geometry,h.material,0,0,null)):P&&P.isTexture&&(u===void 0&&(u=new pt(new ma(2,2),new Tn({name:"BackgroundMaterial",uniforms:tr(In.background.uniforms),vertexShader:In.background.vertexShader,fragmentShader:In.background.fragmentShader,side:Qn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:c(function(){return this.uniforms.t2D.value},"get")}),i.update(u)),u.material.uniforms.t2D.value=P,u.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,u.material.toneMapped=nt.getTransfer(P.colorSpace)!==ut,P.matrixAutoUpdate===!0&&P.updateMatrix(),u.material.uniforms.uvTransform.value.copy(P.matrix),(d!==P||f!==P.version||p!==s.toneMapping)&&(u.material.needsUpdate=!0,d=P,f=P.version,p=s.toneMapping),u.layers.enableAll(),b.unshift(u,u.geometry,u.material,0,0,null))}c(g,"addToRenderList");function m(b,M){b.getRGB(Uo,Eg(s)),n.buffers.color.setClear(Uo.r,Uo.g,Uo.b,M,o)}c(m,"setClear");function C(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0)}return c(C,"dispose"),{getClearColor:c(function(){return a},"getClearColor"),setClearColor:c(function(b,M=1){a.set(b),l=M,m(a,l)},"setClearColor"),getClearAlpha:c(function(){return l},"getClearAlpha"),setClearAlpha:c(function(b){l=b,m(a,l)},"setClearAlpha"),render:_,addToRenderList:g,dispose:C}}c(DS,"WebGLBackground");function OS(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=f(null);let r=i,o=!1;function a(y,E,O,N,H){let z=!1;const W=d(N,O,E);r!==W&&(r=W,u(r.object)),z=p(y,N,O,H),z&&x(y,N,O,H),H!==null&&e.update(H,s.ELEMENT_ARRAY_BUFFER),(z||o)&&(o=!1,M(y,E,O,N),H!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(H).buffer))}c(a,"setup");function l(){return s.createVertexArray()}c(l,"createVertexArrayObject");function u(y){return s.bindVertexArray(y)}c(u,"bindVertexArrayObject");function h(y){return s.deleteVertexArray(y)}c(h,"deleteVertexArrayObject");function d(y,E,O){const N=O.wireframe===!0;let H=n[y.id];H===void 0&&(H={},n[y.id]=H);let z=H[E.id];z===void 0&&(z={},H[E.id]=z);let W=z[N];return W===void 0&&(W=f(l()),z[N]=W),W}c(d,"getBindingState");function f(y){const E=[],O=[],N=[];for(let H=0;H<t;H++)E[H]=0,O[H]=0,N[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:E,enabledAttributes:O,attributeDivisors:N,object:y,attributes:{},index:null}}c(f,"createBindingState");function p(y,E,O,N){const H=r.attributes,z=E.attributes;let W=0;const K=O.getAttributes();for(const j in K)if(K[j].location>=0){const le=H[j];let Ee=z[j];if(Ee===void 0&&(j==="instanceMatrix"&&y.instanceMatrix&&(Ee=y.instanceMatrix),j==="instanceColor"&&y.instanceColor&&(Ee=y.instanceColor)),le===void 0||le.attribute!==Ee||Ee&&le.data!==Ee.data)return!0;W++}return r.attributesNum!==W||r.index!==N}c(p,"needsUpdate");function x(y,E,O,N){const H={},z=E.attributes;let W=0;const K=O.getAttributes();for(const j in K)if(K[j].location>=0){let le=z[j];le===void 0&&(j==="instanceMatrix"&&y.instanceMatrix&&(le=y.instanceMatrix),j==="instanceColor"&&y.instanceColor&&(le=y.instanceColor));const Ee={};Ee.attribute=le,le&&le.data&&(Ee.data=le.data),H[j]=Ee,W++}r.attributes=H,r.attributesNum=W,r.index=N}c(x,"saveCache");function _(){const y=r.newAttributes;for(let E=0,O=y.length;E<O;E++)y[E]=0}c(_,"initAttributes");function g(y){m(y,0)}c(g,"enableAttribute");function m(y,E){const O=r.newAttributes,N=r.enabledAttributes,H=r.attributeDivisors;O[y]=1,N[y]===0&&(s.enableVertexAttribArray(y),N[y]=1),H[y]!==E&&(s.vertexAttribDivisor(y,E),H[y]=E)}c(m,"enableAttributeAndDivisor");function C(){const y=r.newAttributes,E=r.enabledAttributes;for(let O=0,N=E.length;O<N;O++)E[O]!==y[O]&&(s.disableVertexAttribArray(O),E[O]=0)}c(C,"disableUnusedAttributes");function b(y,E,O,N,H,z,W){W===!0?s.vertexAttribIPointer(y,E,O,H,z):s.vertexAttribPointer(y,E,O,N,H,z)}c(b,"vertexAttribPointer");function M(y,E,O,N){_();const H=N.attributes,z=O.getAttributes(),W=E.defaultAttributeValues;for(const K in z){const j=z[K];if(j.location>=0){let se=H[K];if(se===void 0&&(K==="instanceMatrix"&&y.instanceMatrix&&(se=y.instanceMatrix),K==="instanceColor"&&y.instanceColor&&(se=y.instanceColor)),se!==void 0){const le=se.normalized,Ee=se.itemSize,We=e.get(se);if(We===void 0)continue;const je=We.buffer,tt=We.type,st=We.bytesPerElement,$=tt===s.INT||tt===s.UNSIGNED_INT||se.gpuType===Zh;if(se.isInterleavedBufferAttribute){const ee=se.data,Se=ee.stride,Ne=se.offset;if(ee.isInstancedInterleavedBuffer){for(let Re=0;Re<j.locationSize;Re++)m(j.location+Re,ee.meshPerAttribute);y.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let Re=0;Re<j.locationSize;Re++)g(j.location+Re);s.bindBuffer(s.ARRAY_BUFFER,je);for(let Re=0;Re<j.locationSize;Re++)b(j.location+Re,Ee/j.locationSize,tt,le,Se*st,(Ne+Ee/j.locationSize*Re)*st,$)}else{if(se.isInstancedBufferAttribute){for(let ee=0;ee<j.locationSize;ee++)m(j.location+ee,se.meshPerAttribute);y.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let ee=0;ee<j.locationSize;ee++)g(j.location+ee);s.bindBuffer(s.ARRAY_BUFFER,je);for(let ee=0;ee<j.locationSize;ee++)b(j.location+ee,Ee/j.locationSize,tt,le,Ee*st,Ee/j.locationSize*ee*st,$)}}else if(W!==void 0){const le=W[K];if(le!==void 0)switch(le.length){case 2:s.vertexAttrib2fv(j.location,le);break;case 3:s.vertexAttrib3fv(j.location,le);break;case 4:s.vertexAttrib4fv(j.location,le);break;default:s.vertexAttrib1fv(j.location,le)}}}}C()}c(M,"setupVertexAttributes");function P(){F();for(const y in n){const E=n[y];for(const O in E){const N=E[O];for(const H in N)h(N[H].object),delete N[H];delete E[O]}delete n[y]}}c(P,"dispose");function R(y){if(n[y.id]===void 0)return;const E=n[y.id];for(const O in E){const N=E[O];for(const H in N)h(N[H].object),delete N[H];delete E[O]}delete n[y.id]}c(R,"releaseStatesOfGeometry");function I(y){for(const E in n){const O=n[E];if(O[y.id]===void 0)continue;const N=O[y.id];for(const H in N)h(N[H].object),delete N[H];delete O[y.id]}}c(I,"releaseStatesOfProgram");function F(){w(),o=!0,r!==i&&(r=i,u(r.object))}c(F,"reset");function w(){i.geometry=null,i.program=null,i.wireframe=!1}return c(w,"resetDefaultState"),{setup:a,reset:F,resetDefaultState:w,dispose:P,releaseStatesOfGeometry:R,releaseStatesOfProgram:I,initAttributes:_,enableAttribute:g,disableUnusedAttributes:C}}c(OS,"WebGLBindingStates");function NS(s,e,t){let n;function i(u){n=u}c(i,"setMode");function r(u,h){s.drawArrays(n,u,h),t.update(h,n,1)}c(r,"render");function o(u,h,d){d!==0&&(s.drawArraysInstanced(n,u,h,d),t.update(h,n,d))}c(o,"renderInstances");function a(u,h,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,u,0,h,0,d);let p=0;for(let x=0;x<d;x++)p+=h[x];t.update(p,n,1)}c(a,"renderMultiDraw");function l(u,h,d,f){if(d===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let x=0;x<u.length;x++)o(u[x],h[x],f[x]);else{p.multiDrawArraysInstancedWEBGL(n,u,0,h,0,f,0,d);let x=0;for(let _=0;_<d;_++)x+=h[_]*f[_];t.update(x,n,1)}}c(l,"renderMultiDrawInstances"),this.setMode=i,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}c(NS,"WebGLBufferRenderer");function US(s,e,t,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const I=e.get("EXT_texture_filter_anisotropic");i=s.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}c(r,"getMaxAnisotropy");function o(I){return!(I!==dn&&n.convert(I)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}c(o,"textureFormatReadable");function a(I){const F=I===sr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(I!==Nn&&n.convert(I)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&I!==En&&!F)}c(a,"textureTypeReadable");function l(I){if(I==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}c(l,"getMaxPrecision");let u=t.precision!==void 0?t.precision:"highp";const h=l(u);h!==u&&(Le("WebGLRenderer:",u,"not supported, using",h,"instead."),u=h);const d=t.logarithmicDepthBuffer===!0,f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),p=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),x=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=s.getParameter(s.MAX_TEXTURE_SIZE),g=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),m=s.getParameter(s.MAX_VERTEX_ATTRIBS),C=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),b=s.getParameter(s.MAX_VARYING_VECTORS),M=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),P=x>0,R=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:u,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:x,maxTextureSize:_,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:C,maxVaryings:b,maxFragmentUniforms:M,vertexTextures:P,maxSamples:R}}c(US,"WebGLCapabilities");function FS(s){const e=this;let t=null,n=0,i=!1,r=!1;const o=new qn,a=new Ye,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const p=d.length!==0||f||n!==0||i;return i=f,n=d.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,f){t=h(d,f,0)},this.setState=function(d,f,p){const x=d.clippingPlanes,_=d.clipIntersection,g=d.clipShadows,m=s.get(d);if(!i||x===null||x.length===0||r&&!g)r?h(null):u();else{const C=r?0:n,b=C*4;let M=m.clippingState||null;l.value=M,M=h(x,f,b,p);for(let P=0;P!==b;++P)M[P]=t[P];m.clippingState=M,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=C}};function u(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}c(u,"resetGlobalState");function h(d,f,p,x){const _=d!==null?d.length:0;let g=null;if(_!==0){if(g=l.value,x!==!0||g===null){const m=p+_*4,C=f.matrixWorldInverse;a.getNormalMatrix(C),(g===null||g.length<m)&&(g=new Float32Array(m));for(let b=0,M=p;b!==_;++b,M+=4)o.copy(d[b]).applyMatrix4(C,a),o.normal.toArray(g,M),g[M+3]=o.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,g}c(h,"projectPlanes")}c(FS,"WebGLClipping");function BS(s){let e=new WeakMap;function t(o,a){return a===Jc?o.mapping=Js:a===Zc&&(o.mapping=Zs),o}c(t,"mapTextureMapping");function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Jc||a===Zc)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const u=new Dl(l.height);return u.fromEquirectangularTexture(s,o),e.set(o,u),o.addEventListener("dispose",i),t(u.texture,o.mapping)}else return null}}return o}c(n,"get");function i(o){const a=o.target;a.removeEventListener("dispose",i);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}c(i,"onTextureDispose");function r(){e=new WeakMap}return c(r,"dispose"),{get:n,dispose:r}}c(BS,"WebGLCubeMaps");const di=4,E0=[.125,.215,.35,.446,.526,.582],Fi=20,kS=256,mr=new no,w0=new Ge;let Cc=null,Rc=0,Pc=0,Lc=!1;const zS=new L,cp=class cp{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,i=100,r={}){const{size:o=256,position:a=zS}=r;Cc=this._renderer.getRenderTarget(),Rc=this._renderer.getActiveCubeFace(),Pc=this._renderer.getActiveMipmapLevel(),Lc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,i,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=C0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=A0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Cc,Rc,Pc),this._renderer.xr.enabled=Lc,e.scissorTest=!1,us(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Js||e.mapping===Zs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Cc=this._renderer.getRenderTarget(),Rc=this._renderer.getActiveCubeFace(),Pc=this._renderer.getActiveMipmapLevel(),Lc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Wt,minFilter:Wt,generateMipmaps:!1,type:sr,format:dn,colorSpace:jt,depthBuffer:!1},i=T0(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=T0(e,t,n);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=HS(r)),this._blurMaterial=GS(r,e,t),this._ggxMaterial=VS(r,e,t)}return i}_compileMaterial(e){const t=new pt(new qt,e);this._renderer.compile(t,mr)}_sceneToCubeUV(e,t,n,i,r){const l=new Nt(90,1,t,n),u=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,f=d.autoClear,p=d.toneMapping;d.getClearColor(w0),d.toneMapping=fi,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(i),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new pt(new Un,new $n({name:"PMREM.Background",side:Jt,depthWrite:!1,depthTest:!1})));const _=this._backgroundBox,g=_.material;let m=!1;const C=e.background;C?C.isColor&&(g.color.copy(C),e.background=null,m=!0):(g.color.copy(w0),m=!0);for(let b=0;b<6;b++){const M=b%3;M===0?(l.up.set(0,u[b],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[b],r.y,r.z)):M===1?(l.up.set(0,0,u[b]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[b],r.z)):(l.up.set(0,u[b],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[b]));const P=this._cubeSize;us(i,M*P,b>2?P:0,P,P),d.setRenderTarget(i),m&&d.render(_,l),d.render(e,l)}d.toneMapping=p,d.autoClear=f,e.background=C}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Js||e.mapping===Zs;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=C0()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=A0());const r=i?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;const a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;us(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,mr)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodMeshes.length;for(let r=1;r<i;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=n}_applyGGXFilter(e,t,n){const i=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[n];a.material=o;const l=o.uniforms,u=n/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),d=Math.sqrt(u*u-h*h),f=.05+u*.95,p=d*f,{_lodMax:x}=this,_=this._sizeLods[n],g=3*_*(n>x-di?n-x+di:0),m=4*(this._cubeSize-_);l.envMap.value=e.texture,l.roughness.value=p,l.mipInt.value=x-t,us(r,g,m,3*_,2*_),i.setRenderTarget(r),i.render(a,mr),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=x-n,us(e,g,m,3*_,2*_),i.setRenderTarget(e),i.render(a,mr)}_blur(e,t,n,i,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",r),this._halfBlur(o,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,o,a){const l=this._renderer,u=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&Ke("blur direction must be either latitudinal or longitudinal!");const h=3,d=this._lodMeshes[i];d.material=u;const f=u.uniforms,p=this._sizeLods[n]-1,x=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*Fi-1),_=r/x,g=isFinite(r)?1+Math.floor(h*_):Fi;g>Fi&&Le(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Fi}`);const m=[];let C=0;for(let I=0;I<Fi;++I){const F=I/_,w=Math.exp(-F*F/2);m.push(w),I===0?C+=w:I<g&&(C+=2*w)}for(let I=0;I<m.length;I++)m[I]=m[I]/C;f.envMap.value=e.texture,f.samples.value=g,f.weights.value=m,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:b}=this;f.dTheta.value=x,f.mipInt.value=b-n;const M=this._sizeLods[i],P=3*M*(i>b-di?i-b+di:0),R=4*(this._cubeSize-M);us(t,P,R,3*M,2*M),l.setRenderTarget(t),l.render(d,mr)}};c(cp,"PMREMGenerator");let ba=cp;function HS(s){const e=[],t=[],n=[];let i=s;const r=s-di+1+E0.length;for(let o=0;o<r;o++){const a=Math.pow(2,i);e.push(a);let l=1/a;o>s-di?l=E0[o-s+di-1]:o===0&&(l=0),t.push(l);const u=1/(a-2),h=-u,d=1+u,f=[h,h,d,h,d,d,h,h,d,d,h,d],p=6,x=6,_=3,g=2,m=1,C=new Float32Array(_*x*p),b=new Float32Array(g*x*p),M=new Float32Array(m*x*p);for(let R=0;R<p;R++){const I=R%3*2/3-1,F=R>2?0:-1,w=[I,F,0,I+2/3,F,0,I+2/3,F+1,0,I,F,0,I+2/3,F+1,0,I,F+1,0];C.set(w,_*x*R),b.set(f,g*x*R);const y=[R,R,R,R,R,R];M.set(y,m*x*R)}const P=new qt;P.setAttribute("position",new Ut(C,_)),P.setAttribute("uv",new Ut(b,g)),P.setAttribute("faceIndex",new Ut(M,m)),n.push(new pt(P,null)),i>di&&i--}return{lodMeshes:n,sizeLods:e,sigmas:t}}c(HS,"_createPlanes");function T0(s,e,t){const n=new ti(s,e,t);return n.texture.mapping=ja,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}c(T0,"_createRenderTarget");function us(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}c(us,"_setViewport");function VS(s,e,t){return new Tn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:kS,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:qa(),fragmentShader:`

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
		`,blending:Jn,depthTest:!1,depthWrite:!1})}c(VS,"_getGGXShader");function GS(s,e,t){const n=new Float32Array(Fi),i=new L(0,1,0);return new Tn({name:"SphericalGaussianBlur",defines:{n:Fi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:qa(),fragmentShader:`

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
		`,blending:Jn,depthTest:!1,depthWrite:!1})}c(GS,"_getBlurShader");function A0(){return new Tn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:qa(),fragmentShader:`

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
		`,blending:Jn,depthTest:!1,depthWrite:!1})}c(A0,"_getEquirectMaterial");function C0(){return new Tn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:qa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Jn,depthTest:!1,depthWrite:!1})}c(C0,"_getCubemapMaterial");function qa(){return`

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
	`}c(qa,"_getCommonVertexShader");function WS(s){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,u=l===Jc||l===Zc,h=l===Js||l===Zs;if(u||h){let d=e.get(a);const f=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return t===null&&(t=new ba(s)),d=u?t.fromEquirectangular(a,d):t.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),d.texture;if(d!==void 0)return d.texture;{const p=a.image;return u&&p&&p.height>0||h&&p&&i(p)?(t===null&&(t=new ba(s)),d=u?t.fromEquirectangular(a):t.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),a.addEventListener("dispose",r),d.texture):null}}}return a}c(n,"get");function i(a){let l=0;const u=6;for(let h=0;h<u;h++)a[h]!==void 0&&l++;return l===u}c(i,"isCubeTextureComplete");function r(a){const l=a.target;l.removeEventListener("dispose",r);const u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}c(r,"onTextureDispose");function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return c(o,"dispose"),{get:n,dispose:o}}c(WS,"WebGLCubeUVMaps");function XS(s){const e={};function t(n){if(e[n]!==void 0)return e[n];const i=s.getExtension(n);return e[n]=i,i}return c(t,"getExtension"),{has:c(function(n){return t(n)!==null},"has"),init:c(function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},"init"),get:c(function(n){const i=t(n);return i===null&&Hr("WebGLRenderer: "+n+" extension not supported."),i},"get")}}c(XS,"WebGLExtensions");function jS(s,e,t,n){const i={},r=new WeakMap;function o(d){const f=d.target;f.index!==null&&e.remove(f.index);for(const x in f.attributes)e.remove(f.attributes[x]);f.removeEventListener("dispose",o),delete i[f.id];const p=r.get(f);p&&(e.remove(p),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}c(o,"onGeometryDispose");function a(d,f){return i[f.id]===!0||(f.addEventListener("dispose",o),i[f.id]=!0,t.memory.geometries++),f}c(a,"get");function l(d){const f=d.attributes;for(const p in f)e.update(f[p],s.ARRAY_BUFFER)}c(l,"update");function u(d){const f=[],p=d.index,x=d.attributes.position;let _=0;if(p!==null){const C=p.array;_=p.version;for(let b=0,M=C.length;b<M;b+=3){const P=C[b+0],R=C[b+1],I=C[b+2];f.push(P,R,R,I,I,P)}}else if(x!==void 0){const C=x.array;_=x.version;for(let b=0,M=C.length/3-1;b<M;b+=3){const P=b+0,R=b+1,I=b+2;f.push(P,R,R,I,I,P)}}else return;const g=new(Sg(f)?Zo:Jo)(f,1);g.version=_;const m=r.get(d);m&&e.remove(m),r.set(d,g)}c(u,"updateWireframeAttribute");function h(d){const f=r.get(d);if(f){const p=d.index;p!==null&&f.version<p.version&&u(d)}else u(d);return r.get(d)}return c(h,"getWireframeAttribute"),{get:a,update:l,getWireframeAttribute:h}}c(jS,"WebGLGeometries");function qS(s,e,t){let n;function i(f){n=f}c(i,"setMode");let r,o;function a(f){r=f.type,o=f.bytesPerElement}c(a,"setIndex");function l(f,p){s.drawElements(n,p,r,f*o),t.update(p,n,1)}c(l,"render");function u(f,p,x){x!==0&&(s.drawElementsInstanced(n,p,r,f*o,x),t.update(p,n,x))}c(u,"renderInstances");function h(f,p,x){if(x===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,f,0,x);let g=0;for(let m=0;m<x;m++)g+=p[m];t.update(g,n,1)}c(h,"renderMultiDraw");function d(f,p,x,_){if(x===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let m=0;m<f.length;m++)u(f[m]/o,p[m],_[m]);else{g.multiDrawElementsInstancedWEBGL(n,p,0,r,f,0,_,0,x);let m=0;for(let C=0;C<x;C++)m+=p[C]*_[C];t.update(m,n,1)}}c(d,"renderMultiDrawInstances"),this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=u,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}c(qS,"WebGLIndexedBufferRenderer");function YS(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case s.TRIANGLES:t.triangles+=a*(r/3);break;case s.LINES:t.lines+=a*(r/2);break;case s.LINE_STRIP:t.lines+=a*(r-1);break;case s.LINE_LOOP:t.lines+=a*r;break;case s.POINTS:t.points+=a*r;break;default:Ke("WebGLInfo: Unknown draw mode:",o);break}}c(n,"update");function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return c(i,"reset"),{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}c(YS,"WebGLInfo");function $S(s,e,t){const n=new WeakMap,i=new rt;function r(o,a,l){const u=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=h!==void 0?h.length:0;let f=n.get(a);if(f===void 0||f.count!==d){let y=function(){F.dispose(),n.delete(a),a.removeEventListener("dispose",y)};var p=y;c(y,"disposeTexture"),f!==void 0&&f.texture.dispose();const x=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,g=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],C=a.morphAttributes.normal||[],b=a.morphAttributes.color||[];let M=0;x===!0&&(M=1),_===!0&&(M=2),g===!0&&(M=3);let P=a.attributes.position.count*M,R=1;P>e.maxTextureSize&&(R=Math.ceil(P/e.maxTextureSize),P=e.maxTextureSize);const I=new Float32Array(P*R*4*d),F=new Ko(I,P,R,d);F.type=En,F.needsUpdate=!0;const w=M*4;for(let E=0;E<d;E++){const O=m[E],N=C[E],H=b[E],z=P*R*4*E;for(let W=0;W<O.count;W++){const K=W*w;x===!0&&(i.fromBufferAttribute(O,W),I[z+K+0]=i.x,I[z+K+1]=i.y,I[z+K+2]=i.z,I[z+K+3]=0),_===!0&&(i.fromBufferAttribute(N,W),I[z+K+4]=i.x,I[z+K+5]=i.y,I[z+K+6]=i.z,I[z+K+7]=0),g===!0&&(i.fromBufferAttribute(H,W),I[z+K+8]=i.x,I[z+K+9]=i.y,I[z+K+10]=i.z,I[z+K+11]=H.itemSize===4?i.w:1)}}f={count:d,texture:F,size:new ce(P,R)},n.set(a,f),a.addEventListener("dispose",y)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",o.morphTexture,t);else{let x=0;for(let g=0;g<u.length;g++)x+=u[g];const _=a.morphTargetsRelative?1:1-x;l.getUniforms().setValue(s,"morphTargetBaseInfluence",_),l.getUniforms().setValue(s,"morphTargetInfluences",u)}l.getUniforms().setValue(s,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(s,"morphTargetsTextureSize",f.size)}return c(r,"update"),{update:r}}c($S,"WebGLMorphtargets");function KS(s,e,t,n){let i=new WeakMap;function r(l){const u=n.render.frame,h=l.geometry,d=e.get(l,h);if(i.get(d)!==u&&(e.update(d),i.set(d,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==u&&(t.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,s.ARRAY_BUFFER),i.set(l,u))),l.isSkinnedMesh){const f=l.skeleton;i.get(f)!==u&&(f.update(),i.set(f,u))}return d}c(r,"update");function o(){i=new WeakMap}c(o,"dispose");function a(l){const u=l.target;u.removeEventListener("dispose",a),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return c(a,"onInstancedMeshDispose"),{update:r,dispose:o}}c(KS,"WebGLObjects");const Lg=new Ft,R0=new oa(1,1),Ig=new Ko,Dg=new Ll,Og=new ea,P0=[],L0=[],I0=new Float32Array(16),D0=new Float32Array(9),O0=new Float32Array(4);function rr(s,e,t){const n=s[0];if(n<=0||n>0)return s;const i=e*t;let r=P0[i];if(r===void 0&&(r=new Float32Array(i),P0[i]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,s[o].toArray(r,a)}return r}c(rr,"flatten");function Rt(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}c(Rt,"arraysEqual");function Pt(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}c(Pt,"copyArray");function Ya(s,e){let t=L0[e];t===void 0&&(t=new Int32Array(e),L0[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}c(Ya,"allocTexUnits");function JS(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}c(JS,"setValueV1f");function ZS(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Rt(t,e))return;s.uniform2fv(this.addr,e),Pt(t,e)}}c(ZS,"setValueV2f");function QS(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Rt(t,e))return;s.uniform3fv(this.addr,e),Pt(t,e)}}c(QS,"setValueV3f");function eM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Rt(t,e))return;s.uniform4fv(this.addr,e),Pt(t,e)}}c(eM,"setValueV4f");function tM(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Rt(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),Pt(t,e)}else{if(Rt(t,n))return;O0.set(n),s.uniformMatrix2fv(this.addr,!1,O0),Pt(t,n)}}c(tM,"setValueM2");function nM(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Rt(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),Pt(t,e)}else{if(Rt(t,n))return;D0.set(n),s.uniformMatrix3fv(this.addr,!1,D0),Pt(t,n)}}c(nM,"setValueM3");function iM(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Rt(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),Pt(t,e)}else{if(Rt(t,n))return;I0.set(n),s.uniformMatrix4fv(this.addr,!1,I0),Pt(t,n)}}c(iM,"setValueM4");function sM(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}c(sM,"setValueV1i");function rM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Rt(t,e))return;s.uniform2iv(this.addr,e),Pt(t,e)}}c(rM,"setValueV2i");function oM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Rt(t,e))return;s.uniform3iv(this.addr,e),Pt(t,e)}}c(oM,"setValueV3i");function aM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Rt(t,e))return;s.uniform4iv(this.addr,e),Pt(t,e)}}c(aM,"setValueV4i");function cM(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}c(cM,"setValueV1ui");function lM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Rt(t,e))return;s.uniform2uiv(this.addr,e),Pt(t,e)}}c(lM,"setValueV2ui");function uM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Rt(t,e))return;s.uniform3uiv(this.addr,e),Pt(t,e)}}c(uM,"setValueV3ui");function hM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Rt(t,e))return;s.uniform4uiv(this.addr,e),Pt(t,e)}}c(hM,"setValueV4ui");function dM(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(R0.compareFunction=yg,r=R0):r=Lg,t.setTexture2D(e||r,i)}c(dM,"setValueT1");function fM(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Dg,i)}c(fM,"setValueT3D1");function pM(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Og,i)}c(pM,"setValueT6");function mM(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Ig,i)}c(mM,"setValueT2DArray1");function gM(s){switch(s){case 5126:return JS;case 35664:return ZS;case 35665:return QS;case 35666:return eM;case 35674:return tM;case 35675:return nM;case 35676:return iM;case 5124:case 35670:return sM;case 35667:case 35671:return rM;case 35668:case 35672:return oM;case 35669:case 35673:return aM;case 5125:return cM;case 36294:return lM;case 36295:return uM;case 36296:return hM;case 35678:case 36198:case 36298:case 36306:case 35682:return dM;case 35679:case 36299:case 36307:return fM;case 35680:case 36300:case 36308:case 36293:return pM;case 36289:case 36303:case 36311:case 36292:return mM}}c(gM,"getSingularSetter");function xM(s,e){s.uniform1fv(this.addr,e)}c(xM,"setValueV1fArray");function _M(s,e){const t=rr(e,this.size,2);s.uniform2fv(this.addr,t)}c(_M,"setValueV2fArray");function vM(s,e){const t=rr(e,this.size,3);s.uniform3fv(this.addr,t)}c(vM,"setValueV3fArray");function bM(s,e){const t=rr(e,this.size,4);s.uniform4fv(this.addr,t)}c(bM,"setValueV4fArray");function yM(s,e){const t=rr(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}c(yM,"setValueM2Array");function SM(s,e){const t=rr(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}c(SM,"setValueM3Array");function MM(s,e){const t=rr(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}c(MM,"setValueM4Array");function EM(s,e){s.uniform1iv(this.addr,e)}c(EM,"setValueV1iArray");function wM(s,e){s.uniform2iv(this.addr,e)}c(wM,"setValueV2iArray");function TM(s,e){s.uniform3iv(this.addr,e)}c(TM,"setValueV3iArray");function AM(s,e){s.uniform4iv(this.addr,e)}c(AM,"setValueV4iArray");function CM(s,e){s.uniform1uiv(this.addr,e)}c(CM,"setValueV1uiArray");function RM(s,e){s.uniform2uiv(this.addr,e)}c(RM,"setValueV2uiArray");function PM(s,e){s.uniform3uiv(this.addr,e)}c(PM,"setValueV3uiArray");function LM(s,e){s.uniform4uiv(this.addr,e)}c(LM,"setValueV4uiArray");function IM(s,e,t){const n=this.cache,i=e.length,r=Ya(t,i);Rt(n,r)||(s.uniform1iv(this.addr,r),Pt(n,r));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||Lg,r[o])}c(IM,"setValueT1Array");function DM(s,e,t){const n=this.cache,i=e.length,r=Ya(t,i);Rt(n,r)||(s.uniform1iv(this.addr,r),Pt(n,r));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||Dg,r[o])}c(DM,"setValueT3DArray");function OM(s,e,t){const n=this.cache,i=e.length,r=Ya(t,i);Rt(n,r)||(s.uniform1iv(this.addr,r),Pt(n,r));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||Og,r[o])}c(OM,"setValueT6Array");function NM(s,e,t){const n=this.cache,i=e.length,r=Ya(t,i);Rt(n,r)||(s.uniform1iv(this.addr,r),Pt(n,r));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||Ig,r[o])}c(NM,"setValueT2DArrayArray");function UM(s){switch(s){case 5126:return xM;case 35664:return _M;case 35665:return vM;case 35666:return bM;case 35674:return yM;case 35675:return SM;case 35676:return MM;case 5124:case 35670:return EM;case 35667:case 35671:return wM;case 35668:case 35672:return TM;case 35669:case 35673:return AM;case 5125:return CM;case 36294:return RM;case 36295:return PM;case 36296:return LM;case 35678:case 36198:case 36298:case 36306:case 35682:return IM;case 35679:case 36299:case 36307:return DM;case 35680:case 36300:case 36308:case 36293:return OM;case 36289:case 36303:case 36311:case 36292:return NM}}c(UM,"getPureArraySetter");const lp=class lp{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=gM(t.type)}};c(lp,"SingleUniform");let Mu=lp;const up=class up{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=UM(t.type)}};c(up,"PureArrayUniform");let Eu=up;const hp=class hp{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let r=0,o=i.length;r!==o;++r){const a=i[r];a.setValue(e,t[a.id],n)}}};c(hp,"StructuredUniform");let wu=hp;const Ic=/(\w+)(\])?(\[|\.)?/g;function N0(s,e){s.seq.push(e),s.map[e.id]=e}c(N0,"addUniform");function FM(s,e,t){const n=s.name,i=n.length;for(Ic.lastIndex=0;;){const r=Ic.exec(n),o=Ic.lastIndex;let a=r[1];const l=r[2]==="]",u=r[3];if(l&&(a=a|0),u===void 0||u==="["&&o+2===i){N0(t,u===void 0?new Mu(a,s,e):new Eu(a,s,e));break}else{let d=t.map[a];d===void 0&&(d=new wu(a),N0(t,d)),t=d}}}c(FM,"parseUniform");const dp=class dp{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=e.getActiveUniform(t,i),o=e.getUniformLocation(t,r.name);FM(r,o,this)}}setValue(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,o=t.length;r!==o;++r){const a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const o=e[i];o.id in t&&n.push(o)}return n}};c(dp,"WebGLUniforms");let bs=dp;function U0(s,e,t){const n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}c(U0,"WebGLShader");const BM=37297;let kM=0;function zM(s,e){const t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=i;o<r;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}c(zM,"handleSource");const F0=new Ye;function HM(s){nt._getMatrix(F0,nt.workingColorSpace,s);const e=`mat3( ${F0.elements.map(t=>t.toFixed(4))} )`;switch(nt.getTransfer(s)){case qo:return[e,"LinearTransferOETF"];case ut:return[e,"sRGBTransferOETF"];default:return Le("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}c(HM,"getEncodingComponents");function B0(s,e,t){const n=s.getShaderParameter(e,s.COMPILE_STATUS),r=(s.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+zM(s.getShaderSource(e),a)}else return r}c(B0,"getShaderErrors");function VM(s,e){const t=HM(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}c(VM,"getTexelEncodingFunction");function GM(s,e){let t;switch(e){case i_:t="Linear";break;case s_:t="Reinhard";break;case r_:t="Cineon";break;case o_:t="ACESFilmic";break;case c_:t="AgX";break;case l_:t="Neutral";break;case a_:t="Custom";break;default:Le("WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}c(GM,"getToneMappingFunction");const Fo=new L;function WM(){nt.getLuminanceCoefficients(Fo);const s=Fo.x.toFixed(4),e=Fo.y.toFixed(4),t=Fo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}c(WM,"getLuminanceFunction");function XM(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(yr).join(`
`)}c(XM,"generateVertexExtensions");function jM(s){const e=[];for(const t in s){const n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}c(jM,"generateDefines");function qM(s,e){const t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(e,i),o=r.name;let a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:s.getAttribLocation(e,o),locationSize:a}}return t}c(qM,"fetchAttributeLocations");function yr(s){return s!==""}c(yr,"filterEmptyLine");function k0(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}c(k0,"replaceLightNums");function z0(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}c(z0,"replaceClippingPlaneNums");const YM=/^[ \t]*#include +<([\w\d./]+)>/gm;function Tu(s){return s.replace(YM,KM)}c(Tu,"resolveIncludes");const $M=new Map;function KM(s,e){let t=$e[e];if(t===void 0){const n=$M.get(e);if(n!==void 0)t=$e[n],Le('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Tu(t)}c(KM,"includeReplacer");const JM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function H0(s){return s.replace(JM,ZM)}c(H0,"unrollLoops");function ZM(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}c(ZM,"loopReplacer");function V0(s){let e=`precision ${s.precision} float;
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
#define LOW_PRECISION`),e}c(V0,"generatePrecision");function QM(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===hg?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===Ux?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===jn&&(e="SHADOWMAP_TYPE_VSM"),e}c(QM,"generateShadowMapTypeDefine");function eE(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Js:case Zs:e="ENVMAP_TYPE_CUBE";break;case ja:e="ENVMAP_TYPE_CUBE_UV";break}return e}c(eE,"generateEnvMapTypeDefine");function tE(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Zs:e="ENVMAP_MODE_REFRACTION";break}return e}c(tE,"generateEnvMapModeDefine");function nE(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Jh:e="ENVMAP_BLENDING_MULTIPLY";break;case t_:e="ENVMAP_BLENDING_MIX";break;case n_:e="ENVMAP_BLENDING_ADD";break}return e}c(nE,"generateEnvMapBlendingDefine");function iE(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}c(iE,"generateCubeUVSize");function sE(s,e,t,n){const i=s.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=QM(t),u=eE(t),h=tE(t),d=nE(t),f=iE(t),p=XM(t),x=jM(r),_=i.createProgram();let g,m,C=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(yr).join(`
`),g.length>0&&(g+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(yr).join(`
`),m.length>0&&(m+=`
`)):(g=[V0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(yr).join(`
`),m=[V0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==fi?"#define TONE_MAPPING":"",t.toneMapping!==fi?$e.tonemapping_pars_fragment:"",t.toneMapping!==fi?GM("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",$e.colorspace_pars_fragment,VM("linearToOutputTexel",t.outputColorSpace),WM(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(yr).join(`
`)),o=Tu(o),o=k0(o,t),o=z0(o,t),a=Tu(a),a=k0(a,t),a=z0(a,t),o=H0(o),a=H0(a),t.isRawShaderMaterial!==!0&&(C=`#version 300 es
`,g=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,m=["#define varying in",t.glslVersion===Om?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Om?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const b=C+g+o,M=C+m+a,P=U0(i,i.VERTEX_SHADER,b),R=U0(i,i.FRAGMENT_SHADER,M);i.attachShader(_,P),i.attachShader(_,R),t.index0AttributeName!==void 0?i.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function I(E){if(s.debug.checkShaderErrors){const O=i.getProgramInfoLog(_)||"",N=i.getShaderInfoLog(P)||"",H=i.getShaderInfoLog(R)||"",z=O.trim(),W=N.trim(),K=H.trim();let j=!0,se=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(j=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,_,P,R);else{const le=B0(i,P,"vertex"),Ee=B0(i,R,"fragment");Ke("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+E.name+`
Material Type: `+E.type+`

Program Info Log: `+z+`
`+le+`
`+Ee)}else z!==""?Le("WebGLProgram: Program Info Log:",z):(W===""||K==="")&&(se=!1);se&&(E.diagnostics={runnable:j,programLog:z,vertexShader:{log:W,prefix:g},fragmentShader:{log:K,prefix:m}})}i.deleteShader(P),i.deleteShader(R),F=new bs(i,_),w=qM(i,_)}c(I,"onFirstUse");let F;this.getUniforms=function(){return F===void 0&&I(this),F};let w;this.getAttributes=function(){return w===void 0&&I(this),w};let y=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=i.getProgramParameter(_,BM)),y},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=kM++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=P,this.fragmentShader=R,this}c(sE,"WebGLProgram");let rE=0;const fp=class fp{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Cu(e),t.set(e,n)),n}};c(fp,"WebGLShaderCache");let Au=fp;const pp=class pp{constructor(e){this.id=rE++,this.code=e,this.usedTimes=0}};c(pp,"WebGLShaderStage");let Cu=pp;function oE(s,e,t,n,i,r,o){const a=new Gr,l=new Au,u=new Set,h=[],d=i.logarithmicDepthBuffer,f=i.vertexTextures;let p=i.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(w){return u.add(w),w===0?"uv":`uv${w}`}c(_,"getChannel");function g(w,y,E,O,N){const H=O.fog,z=N.geometry,W=w.isMeshStandardMaterial?O.environment:null,K=(w.isMeshStandardMaterial?t:e).get(w.envMap||W),j=K&&K.mapping===ja?K.image.height:null,se=x[w.type];w.precision!==null&&(p=i.getMaxPrecision(w.precision),p!==w.precision&&Le("WebGLProgram.getParameters:",w.precision,"not supported, using",p,"instead."));const le=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,Ee=le!==void 0?le.length:0;let We=0;z.morphAttributes.position!==void 0&&(We=1),z.morphAttributes.normal!==void 0&&(We=2),z.morphAttributes.color!==void 0&&(We=3);let je,tt,st,$;if(se){const at=In[se];je=at.vertexShader,tt=at.fragmentShader}else je=w.vertexShader,tt=w.fragmentShader,l.update(w),st=l.getVertexShaderID(w),$=l.getFragmentShaderID(w);const ee=s.getRenderTarget(),Se=s.state.buffers.depth.getReversed(),Ne=N.isInstancedMesh===!0,Re=N.isBatchedMesh===!0,Ze=!!w.map,ht=!!w.matcap,ze=!!K,ne=!!w.aoMap,A=!!w.lightMap,te=!!w.bumpMap,ae=!!w.normalMap,he=!!w.displacementMap,re=!!w.emissiveMap,we=!!w.metalnessMap,me=!!w.roughnessMap,ye=w.anisotropy>0,T=w.clearcoat>0,v=w.dispersion>0,k=w.iridescence>0,Y=w.sheen>0,Q=w.transmission>0,q=ye&&!!w.anisotropyMap,Pe=T&&!!w.clearcoatMap,ge=T&&!!w.clearcoatNormalMap,De=T&&!!w.clearcoatRoughnessMap,Ce=k&&!!w.iridescenceMap,ie=k&&!!w.iridescenceThicknessMap,de=Y&&!!w.sheenColorMap,ke=Y&&!!w.sheenRoughnessMap,Fe=!!w.specularMap,be=!!w.specularColorMap,Ve=!!w.specularIntensityMap,D=Q&&!!w.transmissionMap,_e=Q&&!!w.thicknessMap,fe=!!w.gradientMap,pe=!!w.alphaMap,oe=w.alphaTest>0,Z=!!w.alphaHash,Te=!!w.extensions;let Xe=fi;w.toneMapped&&(ee===null||ee.isXRRenderTarget===!0)&&(Xe=s.toneMapping);const mt={shaderID:se,shaderType:w.type,shaderName:w.name,vertexShader:je,fragmentShader:tt,defines:w.defines,customVertexShaderID:st,customFragmentShaderID:$,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:p,batching:Re,batchingColor:Re&&N._colorsTexture!==null,instancing:Ne,instancingColor:Ne&&N.instanceColor!==null,instancingMorph:Ne&&N.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:ee===null?s.outputColorSpace:ee.isXRRenderTarget===!0?ee.texture.colorSpace:jt,alphaToCoverage:!!w.alphaToCoverage,map:Ze,matcap:ht,envMap:ze,envMapMode:ze&&K.mapping,envMapCubeUVHeight:j,aoMap:ne,lightMap:A,bumpMap:te,normalMap:ae,displacementMap:f&&he,emissiveMap:re,normalMapObjectSpace:ae&&w.normalMapType===m_,normalMapTangentSpace:ae&&w.normalMapType===od,metalnessMap:we,roughnessMap:me,anisotropy:ye,anisotropyMap:q,clearcoat:T,clearcoatMap:Pe,clearcoatNormalMap:ge,clearcoatRoughnessMap:De,dispersion:v,iridescence:k,iridescenceMap:Ce,iridescenceThicknessMap:ie,sheen:Y,sheenColorMap:de,sheenRoughnessMap:ke,specularMap:Fe,specularColorMap:be,specularIntensityMap:Ve,transmission:Q,transmissionMap:D,thicknessMap:_e,gradientMap:fe,opaque:w.transparent===!1&&w.blending===_s&&w.alphaToCoverage===!1,alphaMap:pe,alphaTest:oe,alphaHash:Z,combine:w.combine,mapUv:Ze&&_(w.map.channel),aoMapUv:ne&&_(w.aoMap.channel),lightMapUv:A&&_(w.lightMap.channel),bumpMapUv:te&&_(w.bumpMap.channel),normalMapUv:ae&&_(w.normalMap.channel),displacementMapUv:he&&_(w.displacementMap.channel),emissiveMapUv:re&&_(w.emissiveMap.channel),metalnessMapUv:we&&_(w.metalnessMap.channel),roughnessMapUv:me&&_(w.roughnessMap.channel),anisotropyMapUv:q&&_(w.anisotropyMap.channel),clearcoatMapUv:Pe&&_(w.clearcoatMap.channel),clearcoatNormalMapUv:ge&&_(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:De&&_(w.clearcoatRoughnessMap.channel),iridescenceMapUv:Ce&&_(w.iridescenceMap.channel),iridescenceThicknessMapUv:ie&&_(w.iridescenceThicknessMap.channel),sheenColorMapUv:de&&_(w.sheenColorMap.channel),sheenRoughnessMapUv:ke&&_(w.sheenRoughnessMap.channel),specularMapUv:Fe&&_(w.specularMap.channel),specularColorMapUv:be&&_(w.specularColorMap.channel),specularIntensityMapUv:Ve&&_(w.specularIntensityMap.channel),transmissionMapUv:D&&_(w.transmissionMap.channel),thicknessMapUv:_e&&_(w.thicknessMap.channel),alphaMapUv:pe&&_(w.alphaMap.channel),vertexTangents:!!z.attributes.tangent&&(ae||ye),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!z.attributes.uv&&(Ze||pe),fog:!!H,useFog:w.fog===!0,fogExp2:!!H&&H.isFogExp2,flatShading:w.flatShading===!0&&w.wireframe===!1,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:Se,skinning:N.isSkinnedMesh===!0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:Ee,morphTextureStride:We,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:w.dithering,shadowMapEnabled:s.shadowMap.enabled&&E.length>0,shadowMapType:s.shadowMap.type,toneMapping:Xe,decodeVideoTexture:Ze&&w.map.isVideoTexture===!0&&nt.getTransfer(w.map.colorSpace)===ut,decodeVideoTextureEmissive:re&&w.emissiveMap.isVideoTexture===!0&&nt.getTransfer(w.emissiveMap.colorSpace)===ut,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===Sn,flipSided:w.side===Jt,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:Te&&w.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Te&&w.extensions.multiDraw===!0||Re)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return mt.vertexUv1s=u.has(1),mt.vertexUv2s=u.has(2),mt.vertexUv3s=u.has(3),u.clear(),mt}c(g,"getParameters");function m(w){const y=[];if(w.shaderID?y.push(w.shaderID):(y.push(w.customVertexShaderID),y.push(w.customFragmentShaderID)),w.defines!==void 0)for(const E in w.defines)y.push(E),y.push(w.defines[E]);return w.isRawShaderMaterial===!1&&(C(y,w),b(y,w),y.push(s.outputColorSpace)),y.push(w.customProgramCacheKey),y.join()}c(m,"getProgramCacheKey");function C(w,y){w.push(y.precision),w.push(y.outputColorSpace),w.push(y.envMapMode),w.push(y.envMapCubeUVHeight),w.push(y.mapUv),w.push(y.alphaMapUv),w.push(y.lightMapUv),w.push(y.aoMapUv),w.push(y.bumpMapUv),w.push(y.normalMapUv),w.push(y.displacementMapUv),w.push(y.emissiveMapUv),w.push(y.metalnessMapUv),w.push(y.roughnessMapUv),w.push(y.anisotropyMapUv),w.push(y.clearcoatMapUv),w.push(y.clearcoatNormalMapUv),w.push(y.clearcoatRoughnessMapUv),w.push(y.iridescenceMapUv),w.push(y.iridescenceThicknessMapUv),w.push(y.sheenColorMapUv),w.push(y.sheenRoughnessMapUv),w.push(y.specularMapUv),w.push(y.specularColorMapUv),w.push(y.specularIntensityMapUv),w.push(y.transmissionMapUv),w.push(y.thicknessMapUv),w.push(y.combine),w.push(y.fogExp2),w.push(y.sizeAttenuation),w.push(y.morphTargetsCount),w.push(y.morphAttributeCount),w.push(y.numDirLights),w.push(y.numPointLights),w.push(y.numSpotLights),w.push(y.numSpotLightMaps),w.push(y.numHemiLights),w.push(y.numRectAreaLights),w.push(y.numDirLightShadows),w.push(y.numPointLightShadows),w.push(y.numSpotLightShadows),w.push(y.numSpotLightShadowsWithMaps),w.push(y.numLightProbes),w.push(y.shadowMapType),w.push(y.toneMapping),w.push(y.numClippingPlanes),w.push(y.numClipIntersection),w.push(y.depthPacking)}c(C,"getProgramCacheKeyParameters");function b(w,y){a.disableAll(),y.supportsVertexTextures&&a.enable(0),y.instancing&&a.enable(1),y.instancingColor&&a.enable(2),y.instancingMorph&&a.enable(3),y.matcap&&a.enable(4),y.envMap&&a.enable(5),y.normalMapObjectSpace&&a.enable(6),y.normalMapTangentSpace&&a.enable(7),y.clearcoat&&a.enable(8),y.iridescence&&a.enable(9),y.alphaTest&&a.enable(10),y.vertexColors&&a.enable(11),y.vertexAlphas&&a.enable(12),y.vertexUv1s&&a.enable(13),y.vertexUv2s&&a.enable(14),y.vertexUv3s&&a.enable(15),y.vertexTangents&&a.enable(16),y.anisotropy&&a.enable(17),y.alphaHash&&a.enable(18),y.batching&&a.enable(19),y.dispersion&&a.enable(20),y.batchingColor&&a.enable(21),y.gradientMap&&a.enable(22),w.push(a.mask),a.disableAll(),y.fog&&a.enable(0),y.useFog&&a.enable(1),y.flatShading&&a.enable(2),y.logarithmicDepthBuffer&&a.enable(3),y.reversedDepthBuffer&&a.enable(4),y.skinning&&a.enable(5),y.morphTargets&&a.enable(6),y.morphNormals&&a.enable(7),y.morphColors&&a.enable(8),y.premultipliedAlpha&&a.enable(9),y.shadowMapEnabled&&a.enable(10),y.doubleSided&&a.enable(11),y.flipSided&&a.enable(12),y.useDepthPacking&&a.enable(13),y.dithering&&a.enable(14),y.transmission&&a.enable(15),y.sheen&&a.enable(16),y.opaque&&a.enable(17),y.pointsUvs&&a.enable(18),y.decodeVideoTexture&&a.enable(19),y.decodeVideoTextureEmissive&&a.enable(20),y.alphaToCoverage&&a.enable(21),w.push(a.mask)}c(b,"getProgramCacheKeyBooleans");function M(w){const y=x[w.type];let E;if(y){const O=In[y];E=nv.clone(O.uniforms)}else E=w.uniforms;return E}c(M,"getUniforms");function P(w,y){let E;for(let O=0,N=h.length;O<N;O++){const H=h[O];if(H.cacheKey===y){E=H,++E.usedTimes;break}}return E===void 0&&(E=new sE(s,y,w,r),h.push(E)),E}c(P,"acquireProgram");function R(w){if(--w.usedTimes===0){const y=h.indexOf(w);h[y]=h[h.length-1],h.pop(),w.destroy()}}c(R,"releaseProgram");function I(w){l.remove(w)}c(I,"releaseShaderCache");function F(){l.dispose()}return c(F,"dispose"),{getParameters:g,getProgramCacheKey:m,getUniforms:M,acquireProgram:P,releaseProgram:R,releaseShaderCache:I,programs:h,dispose:F}}c(oE,"WebGLPrograms");function aE(){let s=new WeakMap;function e(o){return s.has(o)}c(e,"has");function t(o){let a=s.get(o);return a===void 0&&(a={},s.set(o,a)),a}c(t,"get");function n(o){s.delete(o)}c(n,"remove");function i(o,a,l){s.get(o)[a]=l}c(i,"update");function r(){s=new WeakMap}return c(r,"dispose"),{has:e,get:t,remove:n,update:i,dispose:r}}c(aE,"WebGLProperties");function cE(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}c(cE,"painterSortStable");function G0(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}c(G0,"reversePainterSortStable");function W0(){const s=[];let e=0;const t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}c(r,"init");function o(d,f,p,x,_,g){let m=s[e];return m===void 0?(m={id:d.id,object:d,geometry:f,material:p,groupOrder:x,renderOrder:d.renderOrder,z:_,group:g},s[e]=m):(m.id=d.id,m.object=d,m.geometry=f,m.material=p,m.groupOrder=x,m.renderOrder=d.renderOrder,m.z=_,m.group=g),e++,m}c(o,"getNextRenderItem");function a(d,f,p,x,_,g){const m=o(d,f,p,x,_,g);p.transmission>0?n.push(m):p.transparent===!0?i.push(m):t.push(m)}c(a,"push");function l(d,f,p,x,_,g){const m=o(d,f,p,x,_,g);p.transmission>0?n.unshift(m):p.transparent===!0?i.unshift(m):t.unshift(m)}c(l,"unshift");function u(d,f){t.length>1&&t.sort(d||cE),n.length>1&&n.sort(f||G0),i.length>1&&i.sort(f||G0)}c(u,"sort");function h(){for(let d=e,f=s.length;d<f;d++){const p=s[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return c(h,"finish"),{opaque:t,transmissive:n,transparent:i,init:r,push:a,unshift:l,finish:h,sort:u}}c(W0,"WebGLRenderList");function lE(){let s=new WeakMap;function e(n,i){const r=s.get(n);let o;return r===void 0?(o=new W0,s.set(n,[o])):i>=r.length?(o=new W0,r.push(o)):o=r[i],o}c(e,"get");function t(){s=new WeakMap}return c(t,"dispose"),{get:e,dispose:t}}c(lE,"WebGLRenderLists");function uE(){const s={};return{get:c(function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new L,color:new Ge};break;case"SpotLight":t={position:new L,direction:new L,color:new Ge,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new L,color:new Ge,distance:0,decay:0};break;case"HemisphereLight":t={direction:new L,skyColor:new Ge,groundColor:new Ge};break;case"RectAreaLight":t={color:new Ge,position:new L,halfWidth:new L,halfHeight:new L};break}return s[e.id]=t,t},"get")}}c(uE,"UniformsCache");function hE(){const s={};return{get:c(function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t},"get")}}c(hE,"ShadowUniformsCache");let dE=0;function fE(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}c(fE,"shadowCastingAndTexturingLightsFirst");function pE(s){const e=new uE,t=hE(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)n.probe.push(new L);const i=new L,r=new qe,o=new qe;function a(u){let h=0,d=0,f=0;for(let w=0;w<9;w++)n.probe[w].set(0,0,0);let p=0,x=0,_=0,g=0,m=0,C=0,b=0,M=0,P=0,R=0,I=0;u.sort(fE);for(let w=0,y=u.length;w<y;w++){const E=u[w],O=E.color,N=E.intensity,H=E.distance,z=E.shadow&&E.shadow.map?E.shadow.map.texture:null;if(E.isAmbientLight)h+=O.r*N,d+=O.g*N,f+=O.b*N;else if(E.isLightProbe){for(let W=0;W<9;W++)n.probe[W].addScaledVector(E.sh.coefficients[W],N);I++}else if(E.isDirectionalLight){const W=e.get(E);if(W.color.copy(E.color).multiplyScalar(E.intensity),E.castShadow){const K=E.shadow,j=t.get(E);j.shadowIntensity=K.intensity,j.shadowBias=K.bias,j.shadowNormalBias=K.normalBias,j.shadowRadius=K.radius,j.shadowMapSize=K.mapSize,n.directionalShadow[p]=j,n.directionalShadowMap[p]=z,n.directionalShadowMatrix[p]=E.shadow.matrix,C++}n.directional[p]=W,p++}else if(E.isSpotLight){const W=e.get(E);W.position.setFromMatrixPosition(E.matrixWorld),W.color.copy(O).multiplyScalar(N),W.distance=H,W.coneCos=Math.cos(E.angle),W.penumbraCos=Math.cos(E.angle*(1-E.penumbra)),W.decay=E.decay,n.spot[_]=W;const K=E.shadow;if(E.map&&(n.spotLightMap[P]=E.map,P++,K.updateMatrices(E),E.castShadow&&R++),n.spotLightMatrix[_]=K.matrix,E.castShadow){const j=t.get(E);j.shadowIntensity=K.intensity,j.shadowBias=K.bias,j.shadowNormalBias=K.normalBias,j.shadowRadius=K.radius,j.shadowMapSize=K.mapSize,n.spotShadow[_]=j,n.spotShadowMap[_]=z,M++}_++}else if(E.isRectAreaLight){const W=e.get(E);W.color.copy(O).multiplyScalar(N),W.halfWidth.set(E.width*.5,0,0),W.halfHeight.set(0,E.height*.5,0),n.rectArea[g]=W,g++}else if(E.isPointLight){const W=e.get(E);if(W.color.copy(E.color).multiplyScalar(E.intensity),W.distance=E.distance,W.decay=E.decay,E.castShadow){const K=E.shadow,j=t.get(E);j.shadowIntensity=K.intensity,j.shadowBias=K.bias,j.shadowNormalBias=K.normalBias,j.shadowRadius=K.radius,j.shadowMapSize=K.mapSize,j.shadowCameraNear=K.camera.near,j.shadowCameraFar=K.camera.far,n.pointShadow[x]=j,n.pointShadowMap[x]=z,n.pointShadowMatrix[x]=E.shadow.matrix,b++}n.point[x]=W,x++}else if(E.isHemisphereLight){const W=e.get(E);W.skyColor.copy(E.color).multiplyScalar(N),W.groundColor.copy(E.groundColor).multiplyScalar(N),n.hemi[m]=W,m++}}g>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=xe.LTC_FLOAT_1,n.rectAreaLTC2=xe.LTC_FLOAT_2):(n.rectAreaLTC1=xe.LTC_HALF_1,n.rectAreaLTC2=xe.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=f;const F=n.hash;(F.directionalLength!==p||F.pointLength!==x||F.spotLength!==_||F.rectAreaLength!==g||F.hemiLength!==m||F.numDirectionalShadows!==C||F.numPointShadows!==b||F.numSpotShadows!==M||F.numSpotMaps!==P||F.numLightProbes!==I)&&(n.directional.length=p,n.spot.length=_,n.rectArea.length=g,n.point.length=x,n.hemi.length=m,n.directionalShadow.length=C,n.directionalShadowMap.length=C,n.pointShadow.length=b,n.pointShadowMap.length=b,n.spotShadow.length=M,n.spotShadowMap.length=M,n.directionalShadowMatrix.length=C,n.pointShadowMatrix.length=b,n.spotLightMatrix.length=M+P-R,n.spotLightMap.length=P,n.numSpotLightShadowsWithMaps=R,n.numLightProbes=I,F.directionalLength=p,F.pointLength=x,F.spotLength=_,F.rectAreaLength=g,F.hemiLength=m,F.numDirectionalShadows=C,F.numPointShadows=b,F.numSpotShadows=M,F.numSpotMaps=P,F.numLightProbes=I,n.version=dE++)}c(a,"setup");function l(u,h){let d=0,f=0,p=0,x=0,_=0;const g=h.matrixWorldInverse;for(let m=0,C=u.length;m<C;m++){const b=u[m];if(b.isDirectionalLight){const M=n.directional[d];M.direction.setFromMatrixPosition(b.matrixWorld),i.setFromMatrixPosition(b.target.matrixWorld),M.direction.sub(i),M.direction.transformDirection(g),d++}else if(b.isSpotLight){const M=n.spot[p];M.position.setFromMatrixPosition(b.matrixWorld),M.position.applyMatrix4(g),M.direction.setFromMatrixPosition(b.matrixWorld),i.setFromMatrixPosition(b.target.matrixWorld),M.direction.sub(i),M.direction.transformDirection(g),p++}else if(b.isRectAreaLight){const M=n.rectArea[x];M.position.setFromMatrixPosition(b.matrixWorld),M.position.applyMatrix4(g),o.identity(),r.copy(b.matrixWorld),r.premultiply(g),o.extractRotation(r),M.halfWidth.set(b.width*.5,0,0),M.halfHeight.set(0,b.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),x++}else if(b.isPointLight){const M=n.point[f];M.position.setFromMatrixPosition(b.matrixWorld),M.position.applyMatrix4(g),f++}else if(b.isHemisphereLight){const M=n.hemi[_];M.direction.setFromMatrixPosition(b.matrixWorld),M.direction.transformDirection(g),_++}}}return c(l,"setupView"),{setup:a,setupView:l,state:n}}c(pE,"WebGLLights");function X0(s){const e=new pE(s),t=[],n=[];function i(h){u.camera=h,t.length=0,n.length=0}c(i,"init");function r(h){t.push(h)}c(r,"pushLight");function o(h){n.push(h)}c(o,"pushShadow");function a(){e.setup(t)}c(a,"setupLights");function l(h){e.setupView(t,h)}c(l,"setupLightsView");const u={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:u,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}c(X0,"WebGLRenderState");function mE(s){let e=new WeakMap;function t(i,r=0){const o=e.get(i);let a;return o===void 0?(a=new X0(s),e.set(i,[a])):r>=o.length?(a=new X0(s),o.push(a)):a=o[r],a}c(t,"get");function n(){e=new WeakMap}return c(n,"dispose"),{get:t,dispose:n}}c(mE,"WebGLRenderStates");const gE=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,xE=`uniform sampler2D shadow_pass;
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
}`;function _E(s,e,t){let n=new jr;const i=new ce,r=new ce,o=new rt,a=new eu({depthPacking:p_}),l=new tu,u={},h=t.maxTextureSize,d={[Qn]:Jt,[Jt]:Qn,[Sn]:Sn},f=new Tn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ce},radius:{value:4}},vertexShader:gE,fragmentShader:xE}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const x=new qt;x.setAttribute("position",new Ut(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new pt(x,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=hg;let m=this.type;this.render=function(R,I,F){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||R.length===0)return;const w=s.getRenderTarget(),y=s.getActiveCubeFace(),E=s.getActiveMipmapLevel(),O=s.state;O.setBlending(Jn),O.buffers.depth.getReversed()===!0?O.buffers.color.setClear(0,0,0,0):O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);const N=m!==jn&&this.type===jn,H=m===jn&&this.type!==jn;for(let z=0,W=R.length;z<W;z++){const K=R[z],j=K.shadow;if(j===void 0){Le("WebGLShadowMap:",K,"has no shadow.");continue}if(j.autoUpdate===!1&&j.needsUpdate===!1)continue;i.copy(j.mapSize);const se=j.getFrameExtents();if(i.multiply(se),r.copy(j.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/se.x),i.x=r.x*se.x,j.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/se.y),i.y=r.y*se.y,j.mapSize.y=r.y)),j.map===null||N===!0||H===!0){const Ee=this.type!==jn?{minFilter:Xt,magFilter:Xt}:{};j.map!==null&&j.map.dispose(),j.map=new ti(i.x,i.y,Ee),j.map.texture.name=K.name+".shadowMap",j.camera.updateProjectionMatrix()}s.setRenderTarget(j.map),s.clear();const le=j.getViewportCount();for(let Ee=0;Ee<le;Ee++){const We=j.getViewport(Ee);o.set(r.x*We.x,r.y*We.y,r.x*We.z,r.y*We.w),O.viewport(o),j.updateMatrices(K,Ee),n=j.getFrustum(),M(I,F,j.camera,K,this.type)}j.isPointLightShadow!==!0&&this.type===jn&&C(j,F),j.needsUpdate=!1}m=this.type,g.needsUpdate=!1,s.setRenderTarget(w,y,E)};function C(R,I){const F=e.update(_);f.defines.VSM_SAMPLES!==R.blurSamples&&(f.defines.VSM_SAMPLES=R.blurSamples,p.defines.VSM_SAMPLES=R.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new ti(i.x,i.y)),f.uniforms.shadow_pass.value=R.map.texture,f.uniforms.resolution.value=R.mapSize,f.uniforms.radius.value=R.radius,s.setRenderTarget(R.mapPass),s.clear(),s.renderBufferDirect(I,null,F,f,_,null),p.uniforms.shadow_pass.value=R.mapPass.texture,p.uniforms.resolution.value=R.mapSize,p.uniforms.radius.value=R.radius,s.setRenderTarget(R.map),s.clear(),s.renderBufferDirect(I,null,F,p,_,null)}c(C,"VSMPass");function b(R,I,F,w){let y=null;const E=F.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(E!==void 0)y=E;else if(y=F.isPointLight===!0?l:a,s.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0||I.alphaToCoverage===!0){const O=y.uuid,N=I.uuid;let H=u[O];H===void 0&&(H={},u[O]=H);let z=H[N];z===void 0&&(z=y.clone(),H[N]=z,I.addEventListener("dispose",P)),y=z}if(y.visible=I.visible,y.wireframe=I.wireframe,w===jn?y.side=I.shadowSide!==null?I.shadowSide:I.side:y.side=I.shadowSide!==null?I.shadowSide:d[I.side],y.alphaMap=I.alphaMap,y.alphaTest=I.alphaToCoverage===!0?.5:I.alphaTest,y.map=I.map,y.clipShadows=I.clipShadows,y.clippingPlanes=I.clippingPlanes,y.clipIntersection=I.clipIntersection,y.displacementMap=I.displacementMap,y.displacementScale=I.displacementScale,y.displacementBias=I.displacementBias,y.wireframeLinewidth=I.wireframeLinewidth,y.linewidth=I.linewidth,F.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const O=s.properties.get(y);O.light=F}return y}c(b,"getDepthMaterial");function M(R,I,F,w,y){if(R.visible===!1)return;if(R.layers.test(I.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&y===jn)&&(!R.frustumCulled||n.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,R.matrixWorld);const N=e.update(R),H=R.material;if(Array.isArray(H)){const z=N.groups;for(let W=0,K=z.length;W<K;W++){const j=z[W],se=H[j.materialIndex];if(se&&se.visible){const le=b(R,se,w,y);R.onBeforeShadow(s,R,I,F,N,le,j),s.renderBufferDirect(F,null,N,le,R,j),R.onAfterShadow(s,R,I,F,N,le,j)}}}else if(H.visible){const z=b(R,H,w,y);R.onBeforeShadow(s,R,I,F,N,z,null),s.renderBufferDirect(F,null,N,z,R,null),R.onAfterShadow(s,R,I,F,N,z,null)}}const O=R.children;for(let N=0,H=O.length;N<H;N++)M(O[N],I,F,w,y)}c(M,"renderObject");function P(R){R.target.removeEventListener("dispose",P);for(const F in u){const w=u[F],y=R.target.uuid;y in w&&(w[y].dispose(),delete w[y])}}c(P,"onMaterialDispose")}c(_E,"WebGLShadowMap");const vE={[Wc]:Xc,[jc]:$c,[qc]:Kc,[Ks]:Yc,[Xc]:Wc,[$c]:jc,[Kc]:qc,[Yc]:Ks};function bE(s,e){function t(){let D=!1;const _e=new rt;let fe=null;const pe=new rt(0,0,0,0);return{setMask:c(function(oe){fe!==oe&&!D&&(s.colorMask(oe,oe,oe,oe),fe=oe)},"setMask"),setLocked:c(function(oe){D=oe},"setLocked"),setClear:c(function(oe,Z,Te,Xe,mt){mt===!0&&(oe*=Xe,Z*=Xe,Te*=Xe),_e.set(oe,Z,Te,Xe),pe.equals(_e)===!1&&(s.clearColor(oe,Z,Te,Xe),pe.copy(_e))},"setClear"),reset:c(function(){D=!1,fe=null,pe.set(-1,0,0,0)},"reset")}}c(t,"ColorBuffer");function n(){let D=!1,_e=!1,fe=null,pe=null,oe=null;return{setReversed:c(function(Z){if(_e!==Z){const Te=e.get("EXT_clip_control");Z?Te.clipControlEXT(Te.LOWER_LEFT_EXT,Te.ZERO_TO_ONE_EXT):Te.clipControlEXT(Te.LOWER_LEFT_EXT,Te.NEGATIVE_ONE_TO_ONE_EXT),_e=Z;const Xe=oe;oe=null,this.setClear(Xe)}},"setReversed"),getReversed:c(function(){return _e},"getReversed"),setTest:c(function(Z){Z?ee(s.DEPTH_TEST):Se(s.DEPTH_TEST)},"setTest"),setMask:c(function(Z){fe!==Z&&!D&&(s.depthMask(Z),fe=Z)},"setMask"),setFunc:c(function(Z){if(_e&&(Z=vE[Z]),pe!==Z){switch(Z){case Wc:s.depthFunc(s.NEVER);break;case Xc:s.depthFunc(s.ALWAYS);break;case jc:s.depthFunc(s.LESS);break;case Ks:s.depthFunc(s.LEQUAL);break;case qc:s.depthFunc(s.EQUAL);break;case Yc:s.depthFunc(s.GEQUAL);break;case $c:s.depthFunc(s.GREATER);break;case Kc:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}pe=Z}},"setFunc"),setLocked:c(function(Z){D=Z},"setLocked"),setClear:c(function(Z){oe!==Z&&(_e&&(Z=1-Z),s.clearDepth(Z),oe=Z)},"setClear"),reset:c(function(){D=!1,fe=null,pe=null,oe=null,_e=!1},"reset")}}c(n,"DepthBuffer");function i(){let D=!1,_e=null,fe=null,pe=null,oe=null,Z=null,Te=null,Xe=null,mt=null;return{setTest:c(function(at){D||(at?ee(s.STENCIL_TEST):Se(s.STENCIL_TEST))},"setTest"),setMask:c(function(at){_e!==at&&!D&&(s.stencilMask(at),_e=at)},"setMask"),setFunc:c(function(at,Rn,_n){(fe!==at||pe!==Rn||oe!==_n)&&(s.stencilFunc(at,Rn,_n),fe=at,pe=Rn,oe=_n)},"setFunc"),setOp:c(function(at,Rn,_n){(Z!==at||Te!==Rn||Xe!==_n)&&(s.stencilOp(at,Rn,_n),Z=at,Te=Rn,Xe=_n)},"setOp"),setLocked:c(function(at){D=at},"setLocked"),setClear:c(function(at){mt!==at&&(s.clearStencil(at),mt=at)},"setClear"),reset:c(function(){D=!1,_e=null,fe=null,pe=null,oe=null,Z=null,Te=null,Xe=null,mt=null},"reset")}}c(i,"StencilBuffer");const r=new t,o=new n,a=new i,l=new WeakMap,u=new WeakMap;let h={},d={},f=new WeakMap,p=[],x=null,_=!1,g=null,m=null,C=null,b=null,M=null,P=null,R=null,I=new Ge(0,0,0),F=0,w=!1,y=null,E=null,O=null,N=null,H=null;const z=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,K=0;const j=s.getParameter(s.VERSION);j.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(j)[1]),W=K>=1):j.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),W=K>=2);let se=null,le={};const Ee=s.getParameter(s.SCISSOR_BOX),We=s.getParameter(s.VIEWPORT),je=new rt().fromArray(Ee),tt=new rt().fromArray(We);function st(D,_e,fe,pe){const oe=new Uint8Array(4),Z=s.createTexture();s.bindTexture(D,Z),s.texParameteri(D,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(D,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Te=0;Te<fe;Te++)D===s.TEXTURE_3D||D===s.TEXTURE_2D_ARRAY?s.texImage3D(_e,0,s.RGBA,1,1,pe,0,s.RGBA,s.UNSIGNED_BYTE,oe):s.texImage2D(_e+Te,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,oe);return Z}c(st,"createTexture");const $={};$[s.TEXTURE_2D]=st(s.TEXTURE_2D,s.TEXTURE_2D,1),$[s.TEXTURE_CUBE_MAP]=st(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),$[s.TEXTURE_2D_ARRAY]=st(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),$[s.TEXTURE_3D]=st(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ee(s.DEPTH_TEST),o.setFunc(Ks),te(!1),ae(wm),ee(s.CULL_FACE),ne(Jn);function ee(D){h[D]!==!0&&(s.enable(D),h[D]=!0)}c(ee,"enable");function Se(D){h[D]!==!1&&(s.disable(D),h[D]=!1)}c(Se,"disable");function Ne(D,_e){return d[D]!==_e?(s.bindFramebuffer(D,_e),d[D]=_e,D===s.DRAW_FRAMEBUFFER&&(d[s.FRAMEBUFFER]=_e),D===s.FRAMEBUFFER&&(d[s.DRAW_FRAMEBUFFER]=_e),!0):!1}c(Ne,"bindFramebuffer");function Re(D,_e){let fe=p,pe=!1;if(D){fe=f.get(_e),fe===void 0&&(fe=[],f.set(_e,fe));const oe=D.textures;if(fe.length!==oe.length||fe[0]!==s.COLOR_ATTACHMENT0){for(let Z=0,Te=oe.length;Z<Te;Z++)fe[Z]=s.COLOR_ATTACHMENT0+Z;fe.length=oe.length,pe=!0}}else fe[0]!==s.BACK&&(fe[0]=s.BACK,pe=!0);pe&&s.drawBuffers(fe)}c(Re,"drawBuffers");function Ze(D){return x!==D?(s.useProgram(D),x=D,!0):!1}c(Ze,"useProgram");const ht={[Ni]:s.FUNC_ADD,[Bx]:s.FUNC_SUBTRACT,[kx]:s.FUNC_REVERSE_SUBTRACT};ht[zx]=s.MIN,ht[Hx]=s.MAX;const ze={[Vx]:s.ZERO,[Gx]:s.ONE,[Wx]:s.SRC_COLOR,[Vc]:s.SRC_ALPHA,[Kx]:s.SRC_ALPHA_SATURATE,[Yx]:s.DST_COLOR,[jx]:s.DST_ALPHA,[Xx]:s.ONE_MINUS_SRC_COLOR,[Gc]:s.ONE_MINUS_SRC_ALPHA,[$x]:s.ONE_MINUS_DST_COLOR,[qx]:s.ONE_MINUS_DST_ALPHA,[Jx]:s.CONSTANT_COLOR,[Zx]:s.ONE_MINUS_CONSTANT_COLOR,[Qx]:s.CONSTANT_ALPHA,[e_]:s.ONE_MINUS_CONSTANT_ALPHA};function ne(D,_e,fe,pe,oe,Z,Te,Xe,mt,at){if(D===Jn){_===!0&&(Se(s.BLEND),_=!1);return}if(_===!1&&(ee(s.BLEND),_=!0),D!==Fx){if(D!==g||at!==w){if((m!==Ni||M!==Ni)&&(s.blendEquation(s.FUNC_ADD),m=Ni,M=Ni),at)switch(D){case _s:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Tm:s.blendFunc(s.ONE,s.ONE);break;case Am:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Cm:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:Ke("WebGLState: Invalid blending: ",D);break}else switch(D){case _s:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Tm:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case Am:Ke("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Cm:Ke("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ke("WebGLState: Invalid blending: ",D);break}C=null,b=null,P=null,R=null,I.set(0,0,0),F=0,g=D,w=at}return}oe=oe||_e,Z=Z||fe,Te=Te||pe,(_e!==m||oe!==M)&&(s.blendEquationSeparate(ht[_e],ht[oe]),m=_e,M=oe),(fe!==C||pe!==b||Z!==P||Te!==R)&&(s.blendFuncSeparate(ze[fe],ze[pe],ze[Z],ze[Te]),C=fe,b=pe,P=Z,R=Te),(Xe.equals(I)===!1||mt!==F)&&(s.blendColor(Xe.r,Xe.g,Xe.b,mt),I.copy(Xe),F=mt),g=D,w=!1}c(ne,"setBlending");function A(D,_e){D.side===Sn?Se(s.CULL_FACE):ee(s.CULL_FACE);let fe=D.side===Jt;_e&&(fe=!fe),te(fe),D.blending===_s&&D.transparent===!1?ne(Jn):ne(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),o.setFunc(D.depthFunc),o.setTest(D.depthTest),o.setMask(D.depthWrite),r.setMask(D.colorWrite);const pe=D.stencilWrite;a.setTest(pe),pe&&(a.setMask(D.stencilWriteMask),a.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),a.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),re(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?ee(s.SAMPLE_ALPHA_TO_COVERAGE):Se(s.SAMPLE_ALPHA_TO_COVERAGE)}c(A,"setMaterial");function te(D){y!==D&&(D?s.frontFace(s.CW):s.frontFace(s.CCW),y=D)}c(te,"setFlipSided");function ae(D){D!==Ox?(ee(s.CULL_FACE),D!==E&&(D===wm?s.cullFace(s.BACK):D===Nx?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Se(s.CULL_FACE),E=D}c(ae,"setCullFace");function he(D){D!==O&&(W&&s.lineWidth(D),O=D)}c(he,"setLineWidth");function re(D,_e,fe){D?(ee(s.POLYGON_OFFSET_FILL),(N!==_e||H!==fe)&&(s.polygonOffset(_e,fe),N=_e,H=fe)):Se(s.POLYGON_OFFSET_FILL)}c(re,"setPolygonOffset");function we(D){D?ee(s.SCISSOR_TEST):Se(s.SCISSOR_TEST)}c(we,"setScissorTest");function me(D){D===void 0&&(D=s.TEXTURE0+z-1),se!==D&&(s.activeTexture(D),se=D)}c(me,"activeTexture");function ye(D,_e,fe){fe===void 0&&(se===null?fe=s.TEXTURE0+z-1:fe=se);let pe=le[fe];pe===void 0&&(pe={type:void 0,texture:void 0},le[fe]=pe),(pe.type!==D||pe.texture!==_e)&&(se!==fe&&(s.activeTexture(fe),se=fe),s.bindTexture(D,_e||$[D]),pe.type=D,pe.texture=_e)}c(ye,"bindTexture");function T(){const D=le[se];D!==void 0&&D.type!==void 0&&(s.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}c(T,"unbindTexture");function v(){try{s.compressedTexImage2D(...arguments)}catch(D){D("WebGLState:",D)}}c(v,"compressedTexImage2D");function k(){try{s.compressedTexImage3D(...arguments)}catch(D){D("WebGLState:",D)}}c(k,"compressedTexImage3D");function Y(){try{s.texSubImage2D(...arguments)}catch(D){D("WebGLState:",D)}}c(Y,"texSubImage2D");function Q(){try{s.texSubImage3D(...arguments)}catch(D){D("WebGLState:",D)}}c(Q,"texSubImage3D");function q(){try{s.compressedTexSubImage2D(...arguments)}catch(D){D("WebGLState:",D)}}c(q,"compressedTexSubImage2D");function Pe(){try{s.compressedTexSubImage3D(...arguments)}catch(D){D("WebGLState:",D)}}c(Pe,"compressedTexSubImage3D");function ge(){try{s.texStorage2D(...arguments)}catch(D){D("WebGLState:",D)}}c(ge,"texStorage2D");function De(){try{s.texStorage3D(...arguments)}catch(D){D("WebGLState:",D)}}c(De,"texStorage3D");function Ce(){try{s.texImage2D(...arguments)}catch(D){D("WebGLState:",D)}}c(Ce,"texImage2D");function ie(){try{s.texImage3D(...arguments)}catch(D){D("WebGLState:",D)}}c(ie,"texImage3D");function de(D){je.equals(D)===!1&&(s.scissor(D.x,D.y,D.z,D.w),je.copy(D))}c(de,"scissor");function ke(D){tt.equals(D)===!1&&(s.viewport(D.x,D.y,D.z,D.w),tt.copy(D))}c(ke,"viewport");function Fe(D,_e){let fe=u.get(_e);fe===void 0&&(fe=new WeakMap,u.set(_e,fe));let pe=fe.get(D);pe===void 0&&(pe=s.getUniformBlockIndex(_e,D.name),fe.set(D,pe))}c(Fe,"updateUBOMapping");function be(D,_e){const pe=u.get(_e).get(D);l.get(_e)!==pe&&(s.uniformBlockBinding(_e,pe,D.__bindingPointIndex),l.set(_e,pe))}c(be,"uniformBlockBinding");function Ve(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),o.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),h={},se=null,le={},d={},f=new WeakMap,p=[],x=null,_=!1,g=null,m=null,C=null,b=null,M=null,P=null,R=null,I=new Ge(0,0,0),F=0,w=!1,y=null,E=null,O=null,N=null,H=null,je.set(0,0,s.canvas.width,s.canvas.height),tt.set(0,0,s.canvas.width,s.canvas.height),r.reset(),o.reset(),a.reset()}return c(Ve,"reset"),{buffers:{color:r,depth:o,stencil:a},enable:ee,disable:Se,bindFramebuffer:Ne,drawBuffers:Re,useProgram:Ze,setBlending:ne,setMaterial:A,setFlipSided:te,setCullFace:ae,setLineWidth:he,setPolygonOffset:re,setScissorTest:we,activeTexture:me,bindTexture:ye,unbindTexture:T,compressedTexImage2D:v,compressedTexImage3D:k,texImage2D:Ce,texImage3D:ie,updateUBOMapping:Fe,uniformBlockBinding:be,texStorage2D:ge,texStorage3D:De,texSubImage2D:Y,texSubImage3D:Q,compressedTexSubImage2D:q,compressedTexSubImage3D:Pe,scissor:de,viewport:ke,reset:Ve}}c(bE,"WebGLState");function yE(s,e,t,n,i,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new ce,h=new WeakMap;let d;const f=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(T,v){return p?new OffscreenCanvas(T,v):zr("canvas")}c(x,"createCanvas");function _(T,v,k){let Y=1;const Q=ye(T);if((Q.width>k||Q.height>k)&&(Y=k/Math.max(Q.width,Q.height)),Y<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){const q=Math.floor(Y*Q.width),Pe=Math.floor(Y*Q.height);d===void 0&&(d=x(q,Pe));const ge=v?x(q,Pe):d;return ge.width=q,ge.height=Pe,ge.getContext("2d").drawImage(T,0,0,q,Pe),Le("WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+q+"x"+Pe+")."),ge}else return"data"in T&&Le("WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),T;return T}c(_,"resizeImage");function g(T){return T.generateMipmaps}c(g,"textureNeedsGenerateMipmaps");function m(T){s.generateMipmap(T)}c(m,"generateMipmap");function C(T){return T.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?s.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}c(C,"getTargetType");function b(T,v,k,Y,Q=!1){if(T!==null){if(s[T]!==void 0)return s[T];Le("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let q=v;if(v===s.RED&&(k===s.FLOAT&&(q=s.R32F),k===s.HALF_FLOAT&&(q=s.R16F),k===s.UNSIGNED_BYTE&&(q=s.R8)),v===s.RED_INTEGER&&(k===s.UNSIGNED_BYTE&&(q=s.R8UI),k===s.UNSIGNED_SHORT&&(q=s.R16UI),k===s.UNSIGNED_INT&&(q=s.R32UI),k===s.BYTE&&(q=s.R8I),k===s.SHORT&&(q=s.R16I),k===s.INT&&(q=s.R32I)),v===s.RG&&(k===s.FLOAT&&(q=s.RG32F),k===s.HALF_FLOAT&&(q=s.RG16F),k===s.UNSIGNED_BYTE&&(q=s.RG8)),v===s.RG_INTEGER&&(k===s.UNSIGNED_BYTE&&(q=s.RG8UI),k===s.UNSIGNED_SHORT&&(q=s.RG16UI),k===s.UNSIGNED_INT&&(q=s.RG32UI),k===s.BYTE&&(q=s.RG8I),k===s.SHORT&&(q=s.RG16I),k===s.INT&&(q=s.RG32I)),v===s.RGB_INTEGER&&(k===s.UNSIGNED_BYTE&&(q=s.RGB8UI),k===s.UNSIGNED_SHORT&&(q=s.RGB16UI),k===s.UNSIGNED_INT&&(q=s.RGB32UI),k===s.BYTE&&(q=s.RGB8I),k===s.SHORT&&(q=s.RGB16I),k===s.INT&&(q=s.RGB32I)),v===s.RGBA_INTEGER&&(k===s.UNSIGNED_BYTE&&(q=s.RGBA8UI),k===s.UNSIGNED_SHORT&&(q=s.RGBA16UI),k===s.UNSIGNED_INT&&(q=s.RGBA32UI),k===s.BYTE&&(q=s.RGBA8I),k===s.SHORT&&(q=s.RGBA16I),k===s.INT&&(q=s.RGBA32I)),v===s.RGB&&(k===s.UNSIGNED_INT_5_9_9_9_REV&&(q=s.RGB9_E5),k===s.UNSIGNED_INT_10F_11F_11F_REV&&(q=s.R11F_G11F_B10F)),v===s.RGBA){const Pe=Q?qo:nt.getTransfer(Y);k===s.FLOAT&&(q=s.RGBA32F),k===s.HALF_FLOAT&&(q=s.RGBA16F),k===s.UNSIGNED_BYTE&&(q=Pe===ut?s.SRGB8_ALPHA8:s.RGBA8),k===s.UNSIGNED_SHORT_4_4_4_4&&(q=s.RGBA4),k===s.UNSIGNED_SHORT_5_5_5_1&&(q=s.RGB5_A1)}return(q===s.R16F||q===s.R32F||q===s.RG16F||q===s.RG32F||q===s.RGBA16F||q===s.RGBA32F)&&e.get("EXT_color_buffer_float"),q}c(b,"getInternalFormat");function M(T,v){let k;return T?v===null||v===Vi||v===Nr?k=s.DEPTH24_STENCIL8:v===En?k=s.DEPTH32F_STENCIL8:v===Or&&(k=s.DEPTH24_STENCIL8,Le("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===Vi||v===Nr?k=s.DEPTH_COMPONENT24:v===En?k=s.DEPTH_COMPONENT32F:v===Or&&(k=s.DEPTH_COMPONENT16),k}c(M,"getInternalDepthFormat");function P(T,v){return g(T)===!0||T.isFramebufferTexture&&T.minFilter!==Xt&&T.minFilter!==Wt?Math.log2(Math.max(v.width,v.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?v.mipmaps.length:1}c(P,"getMipLevels");function R(T){const v=T.target;v.removeEventListener("dispose",R),F(v),v.isVideoTexture&&h.delete(v)}c(R,"onTextureDispose");function I(T){const v=T.target;v.removeEventListener("dispose",I),y(v)}c(I,"onRenderTargetDispose");function F(T){const v=n.get(T);if(v.__webglInit===void 0)return;const k=T.source,Y=f.get(k);if(Y){const Q=Y[v.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&w(T),Object.keys(Y).length===0&&f.delete(k)}n.remove(T)}c(F,"deallocateTexture");function w(T){const v=n.get(T);s.deleteTexture(v.__webglTexture);const k=T.source,Y=f.get(k);delete Y[v.__cacheKey],o.memory.textures--}c(w,"deleteTexture");function y(T){const v=n.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),n.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(v.__webglFramebuffer[Y]))for(let Q=0;Q<v.__webglFramebuffer[Y].length;Q++)s.deleteFramebuffer(v.__webglFramebuffer[Y][Q]);else s.deleteFramebuffer(v.__webglFramebuffer[Y]);v.__webglDepthbuffer&&s.deleteRenderbuffer(v.__webglDepthbuffer[Y])}else{if(Array.isArray(v.__webglFramebuffer))for(let Y=0;Y<v.__webglFramebuffer.length;Y++)s.deleteFramebuffer(v.__webglFramebuffer[Y]);else s.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&s.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&s.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let Y=0;Y<v.__webglColorRenderbuffer.length;Y++)v.__webglColorRenderbuffer[Y]&&s.deleteRenderbuffer(v.__webglColorRenderbuffer[Y]);v.__webglDepthRenderbuffer&&s.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const k=T.textures;for(let Y=0,Q=k.length;Y<Q;Y++){const q=n.get(k[Y]);q.__webglTexture&&(s.deleteTexture(q.__webglTexture),o.memory.textures--),n.remove(k[Y])}n.remove(T)}c(y,"deallocateRenderTarget");let E=0;function O(){E=0}c(O,"resetTextureUnits");function N(){const T=E;return T>=i.maxTextures&&Le("WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+i.maxTextures),E+=1,T}c(N,"allocateTextureUnit");function H(T){const v=[];return v.push(T.wrapS),v.push(T.wrapT),v.push(T.wrapR||0),v.push(T.magFilter),v.push(T.minFilter),v.push(T.anisotropy),v.push(T.internalFormat),v.push(T.format),v.push(T.type),v.push(T.generateMipmaps),v.push(T.premultiplyAlpha),v.push(T.flipY),v.push(T.unpackAlignment),v.push(T.colorSpace),v.join()}c(H,"getTextureCacheKey");function z(T,v){const k=n.get(T);if(T.isVideoTexture&&we(T),T.isRenderTargetTexture===!1&&T.isExternalTexture!==!0&&T.version>0&&k.__version!==T.version){const Y=T.image;if(Y===null)Le("WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)Le("WebGLRenderer: Texture marked for update but image is incomplete");else{$(k,T,v);return}}else T.isExternalTexture&&(k.__webglTexture=T.sourceTexture?T.sourceTexture:null);t.bindTexture(s.TEXTURE_2D,k.__webglTexture,s.TEXTURE0+v)}c(z,"setTexture2D");function W(T,v){const k=n.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&k.__version!==T.version){$(k,T,v);return}else T.isExternalTexture&&(k.__webglTexture=T.sourceTexture?T.sourceTexture:null);t.bindTexture(s.TEXTURE_2D_ARRAY,k.__webglTexture,s.TEXTURE0+v)}c(W,"setTexture2DArray");function K(T,v){const k=n.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&k.__version!==T.version){$(k,T,v);return}t.bindTexture(s.TEXTURE_3D,k.__webglTexture,s.TEXTURE0+v)}c(K,"setTexture3D");function j(T,v){const k=n.get(T);if(T.version>0&&k.__version!==T.version){ee(k,T,v);return}t.bindTexture(s.TEXTURE_CUBE_MAP,k.__webglTexture,s.TEXTURE0+v)}c(j,"setTextureCube");const se={[Qs]:s.REPEAT,[Dn]:s.CLAMP_TO_EDGE,[jo]:s.MIRRORED_REPEAT},le={[Xt]:s.NEAREST,[fg]:s.NEAREST_MIPMAP_NEAREST,[vr]:s.NEAREST_MIPMAP_LINEAR,[Wt]:s.LINEAR,[zo]:s.LINEAR_MIPMAP_NEAREST,[Yn]:s.LINEAR_MIPMAP_LINEAR},Ee={[g_]:s.NEVER,[S_]:s.ALWAYS,[x_]:s.LESS,[yg]:s.LEQUAL,[__]:s.EQUAL,[y_]:s.GEQUAL,[v_]:s.GREATER,[b_]:s.NOTEQUAL};function We(T,v){if(v.type===En&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===Wt||v.magFilter===zo||v.magFilter===vr||v.magFilter===Yn||v.minFilter===Wt||v.minFilter===zo||v.minFilter===vr||v.minFilter===Yn)&&Le("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(T,s.TEXTURE_WRAP_S,se[v.wrapS]),s.texParameteri(T,s.TEXTURE_WRAP_T,se[v.wrapT]),(T===s.TEXTURE_3D||T===s.TEXTURE_2D_ARRAY)&&s.texParameteri(T,s.TEXTURE_WRAP_R,se[v.wrapR]),s.texParameteri(T,s.TEXTURE_MAG_FILTER,le[v.magFilter]),s.texParameteri(T,s.TEXTURE_MIN_FILTER,le[v.minFilter]),v.compareFunction&&(s.texParameteri(T,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(T,s.TEXTURE_COMPARE_FUNC,Ee[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===Xt||v.minFilter!==vr&&v.minFilter!==Yn||v.type===En&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){const k=e.get("EXT_texture_filter_anisotropic");s.texParameterf(T,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,i.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}c(We,"setTextureParameters");function je(T,v){let k=!1;T.__webglInit===void 0&&(T.__webglInit=!0,v.addEventListener("dispose",R));const Y=v.source;let Q=f.get(Y);Q===void 0&&(Q={},f.set(Y,Q));const q=H(v);if(q!==T.__cacheKey){Q[q]===void 0&&(Q[q]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,k=!0),Q[q].usedTimes++;const Pe=Q[T.__cacheKey];Pe!==void 0&&(Q[T.__cacheKey].usedTimes--,Pe.usedTimes===0&&w(v)),T.__cacheKey=q,T.__webglTexture=Q[q].texture}return k}c(je,"initTexture");function tt(T,v,k){return Math.floor(Math.floor(T/k)/v)}c(tt,"getRow");function st(T,v,k,Y){const q=T.updateRanges;if(q.length===0)t.texSubImage2D(s.TEXTURE_2D,0,0,0,v.width,v.height,k,Y,v.data);else{q.sort((ie,de)=>ie.start-de.start);let Pe=0;for(let ie=1;ie<q.length;ie++){const de=q[Pe],ke=q[ie],Fe=de.start+de.count,be=tt(ke.start,v.width,4),Ve=tt(de.start,v.width,4);ke.start<=Fe+1&&be===Ve&&tt(ke.start+ke.count-1,v.width,4)===be?de.count=Math.max(de.count,ke.start+ke.count-de.start):(++Pe,q[Pe]=ke)}q.length=Pe+1;const ge=s.getParameter(s.UNPACK_ROW_LENGTH),De=s.getParameter(s.UNPACK_SKIP_PIXELS),Ce=s.getParameter(s.UNPACK_SKIP_ROWS);s.pixelStorei(s.UNPACK_ROW_LENGTH,v.width);for(let ie=0,de=q.length;ie<de;ie++){const ke=q[ie],Fe=Math.floor(ke.start/4),be=Math.ceil(ke.count/4),Ve=Fe%v.width,D=Math.floor(Fe/v.width),_e=be,fe=1;s.pixelStorei(s.UNPACK_SKIP_PIXELS,Ve),s.pixelStorei(s.UNPACK_SKIP_ROWS,D),t.texSubImage2D(s.TEXTURE_2D,0,Ve,D,_e,fe,k,Y,v.data)}T.clearUpdateRanges(),s.pixelStorei(s.UNPACK_ROW_LENGTH,ge),s.pixelStorei(s.UNPACK_SKIP_PIXELS,De),s.pixelStorei(s.UNPACK_SKIP_ROWS,Ce)}}c(st,"updateTexture");function $(T,v,k){let Y=s.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(Y=s.TEXTURE_2D_ARRAY),v.isData3DTexture&&(Y=s.TEXTURE_3D);const Q=je(T,v),q=v.source;t.bindTexture(Y,T.__webglTexture,s.TEXTURE0+k);const Pe=n.get(q);if(q.version!==Pe.__version||Q===!0){t.activeTexture(s.TEXTURE0+k);const ge=nt.getPrimaries(nt.workingColorSpace),De=v.colorSpace===hi?null:nt.getPrimaries(v.colorSpace),Ce=v.colorSpace===hi||ge===De?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,v.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,v.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ce);let ie=_(v.image,!1,i.maxTextureSize);ie=me(v,ie);const de=r.convert(v.format,v.colorSpace),ke=r.convert(v.type);let Fe=b(v.internalFormat,de,ke,v.colorSpace,v.isVideoTexture);We(Y,v);let be;const Ve=v.mipmaps,D=v.isVideoTexture!==!0,_e=Pe.__version===void 0||Q===!0,fe=q.dataReady,pe=P(v,ie);if(v.isDepthTexture)Fe=M(v.format===Fr,v.type),_e&&(D?t.texStorage2D(s.TEXTURE_2D,1,Fe,ie.width,ie.height):t.texImage2D(s.TEXTURE_2D,0,Fe,ie.width,ie.height,0,de,ke,null));else if(v.isDataTexture)if(Ve.length>0){D&&_e&&t.texStorage2D(s.TEXTURE_2D,pe,Fe,Ve[0].width,Ve[0].height);for(let oe=0,Z=Ve.length;oe<Z;oe++)be=Ve[oe],D?fe&&t.texSubImage2D(s.TEXTURE_2D,oe,0,0,be.width,be.height,de,ke,be.data):t.texImage2D(s.TEXTURE_2D,oe,Fe,be.width,be.height,0,de,ke,be.data);v.generateMipmaps=!1}else D?(_e&&t.texStorage2D(s.TEXTURE_2D,pe,Fe,ie.width,ie.height),fe&&st(v,ie,de,ke)):t.texImage2D(s.TEXTURE_2D,0,Fe,ie.width,ie.height,0,de,ke,ie.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){D&&_e&&t.texStorage3D(s.TEXTURE_2D_ARRAY,pe,Fe,Ve[0].width,Ve[0].height,ie.depth);for(let oe=0,Z=Ve.length;oe<Z;oe++)if(be=Ve[oe],v.format!==dn)if(de!==null)if(D){if(fe)if(v.layerUpdates.size>0){const Te=M0(be.width,be.height,v.format,v.type);for(const Xe of v.layerUpdates){const mt=be.data.subarray(Xe*Te/be.data.BYTES_PER_ELEMENT,(Xe+1)*Te/be.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,oe,0,0,Xe,be.width,be.height,1,de,mt)}v.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,oe,0,0,0,be.width,be.height,ie.depth,de,be.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,oe,Fe,be.width,be.height,ie.depth,0,be.data,0,0);else Le("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else D?fe&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,oe,0,0,0,be.width,be.height,ie.depth,de,ke,be.data):t.texImage3D(s.TEXTURE_2D_ARRAY,oe,Fe,be.width,be.height,ie.depth,0,de,ke,be.data)}else{D&&_e&&t.texStorage2D(s.TEXTURE_2D,pe,Fe,Ve[0].width,Ve[0].height);for(let oe=0,Z=Ve.length;oe<Z;oe++)be=Ve[oe],v.format!==dn?de!==null?D?fe&&t.compressedTexSubImage2D(s.TEXTURE_2D,oe,0,0,be.width,be.height,de,be.data):t.compressedTexImage2D(s.TEXTURE_2D,oe,Fe,be.width,be.height,0,be.data):Le("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):D?fe&&t.texSubImage2D(s.TEXTURE_2D,oe,0,0,be.width,be.height,de,ke,be.data):t.texImage2D(s.TEXTURE_2D,oe,Fe,be.width,be.height,0,de,ke,be.data)}else if(v.isDataArrayTexture)if(D){if(_e&&t.texStorage3D(s.TEXTURE_2D_ARRAY,pe,Fe,ie.width,ie.height,ie.depth),fe)if(v.layerUpdates.size>0){const oe=M0(ie.width,ie.height,v.format,v.type);for(const Z of v.layerUpdates){const Te=ie.data.subarray(Z*oe/ie.data.BYTES_PER_ELEMENT,(Z+1)*oe/ie.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,Z,ie.width,ie.height,1,de,ke,Te)}v.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,ie.width,ie.height,ie.depth,de,ke,ie.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,Fe,ie.width,ie.height,ie.depth,0,de,ke,ie.data);else if(v.isData3DTexture)D?(_e&&t.texStorage3D(s.TEXTURE_3D,pe,Fe,ie.width,ie.height,ie.depth),fe&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,ie.width,ie.height,ie.depth,de,ke,ie.data)):t.texImage3D(s.TEXTURE_3D,0,Fe,ie.width,ie.height,ie.depth,0,de,ke,ie.data);else if(v.isFramebufferTexture){if(_e)if(D)t.texStorage2D(s.TEXTURE_2D,pe,Fe,ie.width,ie.height);else{let oe=ie.width,Z=ie.height;for(let Te=0;Te<pe;Te++)t.texImage2D(s.TEXTURE_2D,Te,Fe,oe,Z,0,de,ke,null),oe>>=1,Z>>=1}}else if(Ve.length>0){if(D&&_e){const oe=ye(Ve[0]);t.texStorage2D(s.TEXTURE_2D,pe,Fe,oe.width,oe.height)}for(let oe=0,Z=Ve.length;oe<Z;oe++)be=Ve[oe],D?fe&&t.texSubImage2D(s.TEXTURE_2D,oe,0,0,de,ke,be):t.texImage2D(s.TEXTURE_2D,oe,Fe,de,ke,be);v.generateMipmaps=!1}else if(D){if(_e){const oe=ye(ie);t.texStorage2D(s.TEXTURE_2D,pe,Fe,oe.width,oe.height)}fe&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,de,ke,ie)}else t.texImage2D(s.TEXTURE_2D,0,Fe,de,ke,ie);g(v)&&m(Y),Pe.__version=q.version,v.onUpdate&&v.onUpdate(v)}T.__version=v.version}c($,"uploadTexture");function ee(T,v,k){if(v.image.length!==6)return;const Y=je(T,v),Q=v.source;t.bindTexture(s.TEXTURE_CUBE_MAP,T.__webglTexture,s.TEXTURE0+k);const q=n.get(Q);if(Q.version!==q.__version||Y===!0){t.activeTexture(s.TEXTURE0+k);const Pe=nt.getPrimaries(nt.workingColorSpace),ge=v.colorSpace===hi?null:nt.getPrimaries(v.colorSpace),De=v.colorSpace===hi||Pe===ge?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,v.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,v.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,De);const Ce=v.isCompressedTexture||v.image[0].isCompressedTexture,ie=v.image[0]&&v.image[0].isDataTexture,de=[];for(let Z=0;Z<6;Z++)!Ce&&!ie?de[Z]=_(v.image[Z],!0,i.maxCubemapSize):de[Z]=ie?v.image[Z].image:v.image[Z],de[Z]=me(v,de[Z]);const ke=de[0],Fe=r.convert(v.format,v.colorSpace),be=r.convert(v.type),Ve=b(v.internalFormat,Fe,be,v.colorSpace),D=v.isVideoTexture!==!0,_e=q.__version===void 0||Y===!0,fe=Q.dataReady;let pe=P(v,ke);We(s.TEXTURE_CUBE_MAP,v);let oe;if(Ce){D&&_e&&t.texStorage2D(s.TEXTURE_CUBE_MAP,pe,Ve,ke.width,ke.height);for(let Z=0;Z<6;Z++){oe=de[Z].mipmaps;for(let Te=0;Te<oe.length;Te++){const Xe=oe[Te];v.format!==dn?Fe!==null?D?fe&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Te,0,0,Xe.width,Xe.height,Fe,Xe.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Te,Ve,Xe.width,Xe.height,0,Xe.data):Le("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):D?fe&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Te,0,0,Xe.width,Xe.height,Fe,be,Xe.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Te,Ve,Xe.width,Xe.height,0,Fe,be,Xe.data)}}}else{if(oe=v.mipmaps,D&&_e){oe.length>0&&pe++;const Z=ye(de[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,pe,Ve,Z.width,Z.height)}for(let Z=0;Z<6;Z++)if(ie){D?fe&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,de[Z].width,de[Z].height,Fe,be,de[Z].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Ve,de[Z].width,de[Z].height,0,Fe,be,de[Z].data);for(let Te=0;Te<oe.length;Te++){const mt=oe[Te].image[Z].image;D?fe&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Te+1,0,0,mt.width,mt.height,Fe,be,mt.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Te+1,Ve,mt.width,mt.height,0,Fe,be,mt.data)}}else{D?fe&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,Fe,be,de[Z]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Ve,Fe,be,de[Z]);for(let Te=0;Te<oe.length;Te++){const Xe=oe[Te];D?fe&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Te+1,0,0,Fe,be,Xe.image[Z]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Te+1,Ve,Fe,be,Xe.image[Z])}}}g(v)&&m(s.TEXTURE_CUBE_MAP),q.__version=Q.version,v.onUpdate&&v.onUpdate(v)}T.__version=v.version}c(ee,"uploadCubeTexture");function Se(T,v,k,Y,Q,q){const Pe=r.convert(k.format,k.colorSpace),ge=r.convert(k.type),De=b(k.internalFormat,Pe,ge,k.colorSpace),Ce=n.get(v),ie=n.get(k);if(ie.__renderTarget=v,!Ce.__hasExternalTextures){const de=Math.max(1,v.width>>q),ke=Math.max(1,v.height>>q);Q===s.TEXTURE_3D||Q===s.TEXTURE_2D_ARRAY?t.texImage3D(Q,q,De,de,ke,v.depth,0,Pe,ge,null):t.texImage2D(Q,q,De,de,ke,0,Pe,ge,null)}t.bindFramebuffer(s.FRAMEBUFFER,T),re(v)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Y,Q,ie.__webglTexture,0,he(v)):(Q===s.TEXTURE_2D||Q>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,Y,Q,ie.__webglTexture,q),t.bindFramebuffer(s.FRAMEBUFFER,null)}c(Se,"setupFrameBufferTexture");function Ne(T,v,k){if(s.bindRenderbuffer(s.RENDERBUFFER,T),v.depthBuffer){const Y=v.depthTexture,Q=Y&&Y.isDepthTexture?Y.type:null,q=M(v.stencilBuffer,Q),Pe=v.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ge=he(v);re(v)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ge,q,v.width,v.height):k?s.renderbufferStorageMultisample(s.RENDERBUFFER,ge,q,v.width,v.height):s.renderbufferStorage(s.RENDERBUFFER,q,v.width,v.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Pe,s.RENDERBUFFER,T)}else{const Y=v.textures;for(let Q=0;Q<Y.length;Q++){const q=Y[Q],Pe=r.convert(q.format,q.colorSpace),ge=r.convert(q.type),De=b(q.internalFormat,Pe,ge,q.colorSpace),Ce=he(v);k&&re(v)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ce,De,v.width,v.height):re(v)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ce,De,v.width,v.height):s.renderbufferStorage(s.RENDERBUFFER,De,v.width,v.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}c(Ne,"setupRenderBufferStorage");function Re(T,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,T),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Y=n.get(v.depthTexture);Y.__renderTarget=v,(!Y.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),z(v.depthTexture,0);const Q=Y.__webglTexture,q=he(v);if(v.depthTexture.format===Ur)re(v)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Q,0,q):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Q,0);else if(v.depthTexture.format===Fr)re(v)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Q,0,q):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}c(Re,"setupDepthTexture");function Ze(T){const v=n.get(T),k=T.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==T.depthTexture){const Y=T.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),Y){const Q=c(()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,Y.removeEventListener("dispose",Q)},"disposeEvent");Y.addEventListener("dispose",Q),v.__depthDisposeCallback=Q}v.__boundDepthTexture=Y}if(T.depthTexture&&!v.__autoAllocateDepthBuffer){if(k)throw new Error("target.depthTexture not supported in Cube render targets");const Y=T.texture.mipmaps;Y&&Y.length>0?Re(v.__webglFramebuffer[0],T):Re(v.__webglFramebuffer,T)}else if(k){v.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(t.bindFramebuffer(s.FRAMEBUFFER,v.__webglFramebuffer[Y]),v.__webglDepthbuffer[Y]===void 0)v.__webglDepthbuffer[Y]=s.createRenderbuffer(),Ne(v.__webglDepthbuffer[Y],T,!1);else{const Q=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,q=v.__webglDepthbuffer[Y];s.bindRenderbuffer(s.RENDERBUFFER,q),s.framebufferRenderbuffer(s.FRAMEBUFFER,Q,s.RENDERBUFFER,q)}}else{const Y=T.texture.mipmaps;if(Y&&Y.length>0?t.bindFramebuffer(s.FRAMEBUFFER,v.__webglFramebuffer[0]):t.bindFramebuffer(s.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=s.createRenderbuffer(),Ne(v.__webglDepthbuffer,T,!1);else{const Q=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,q=v.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,q),s.framebufferRenderbuffer(s.FRAMEBUFFER,Q,s.RENDERBUFFER,q)}}t.bindFramebuffer(s.FRAMEBUFFER,null)}c(Ze,"setupDepthRenderbuffer");function ht(T,v,k){const Y=n.get(T);v!==void 0&&Se(Y.__webglFramebuffer,T,T.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),k!==void 0&&Ze(T)}c(ht,"rebindTextures");function ze(T){const v=T.texture,k=n.get(T),Y=n.get(v);T.addEventListener("dispose",I);const Q=T.textures,q=T.isWebGLCubeRenderTarget===!0,Pe=Q.length>1;if(Pe||(Y.__webglTexture===void 0&&(Y.__webglTexture=s.createTexture()),Y.__version=v.version,o.memory.textures++),q){k.__webglFramebuffer=[];for(let ge=0;ge<6;ge++)if(v.mipmaps&&v.mipmaps.length>0){k.__webglFramebuffer[ge]=[];for(let De=0;De<v.mipmaps.length;De++)k.__webglFramebuffer[ge][De]=s.createFramebuffer()}else k.__webglFramebuffer[ge]=s.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){k.__webglFramebuffer=[];for(let ge=0;ge<v.mipmaps.length;ge++)k.__webglFramebuffer[ge]=s.createFramebuffer()}else k.__webglFramebuffer=s.createFramebuffer();if(Pe)for(let ge=0,De=Q.length;ge<De;ge++){const Ce=n.get(Q[ge]);Ce.__webglTexture===void 0&&(Ce.__webglTexture=s.createTexture(),o.memory.textures++)}if(T.samples>0&&re(T)===!1){k.__webglMultisampledFramebuffer=s.createFramebuffer(),k.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let ge=0;ge<Q.length;ge++){const De=Q[ge];k.__webglColorRenderbuffer[ge]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,k.__webglColorRenderbuffer[ge]);const Ce=r.convert(De.format,De.colorSpace),ie=r.convert(De.type),de=b(De.internalFormat,Ce,ie,De.colorSpace,T.isXRRenderTarget===!0),ke=he(T);s.renderbufferStorageMultisample(s.RENDERBUFFER,ke,de,T.width,T.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ge,s.RENDERBUFFER,k.__webglColorRenderbuffer[ge])}s.bindRenderbuffer(s.RENDERBUFFER,null),T.depthBuffer&&(k.__webglDepthRenderbuffer=s.createRenderbuffer(),Ne(k.__webglDepthRenderbuffer,T,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(q){t.bindTexture(s.TEXTURE_CUBE_MAP,Y.__webglTexture),We(s.TEXTURE_CUBE_MAP,v);for(let ge=0;ge<6;ge++)if(v.mipmaps&&v.mipmaps.length>0)for(let De=0;De<v.mipmaps.length;De++)Se(k.__webglFramebuffer[ge][De],T,v,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,De);else Se(k.__webglFramebuffer[ge],T,v,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0);g(v)&&m(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Pe){for(let ge=0,De=Q.length;ge<De;ge++){const Ce=Q[ge],ie=n.get(Ce);let de=s.TEXTURE_2D;(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(de=T.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(de,ie.__webglTexture),We(de,Ce),Se(k.__webglFramebuffer,T,Ce,s.COLOR_ATTACHMENT0+ge,de,0),g(Ce)&&m(de)}t.unbindTexture()}else{let ge=s.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(ge=T.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(ge,Y.__webglTexture),We(ge,v),v.mipmaps&&v.mipmaps.length>0)for(let De=0;De<v.mipmaps.length;De++)Se(k.__webglFramebuffer[De],T,v,s.COLOR_ATTACHMENT0,ge,De);else Se(k.__webglFramebuffer,T,v,s.COLOR_ATTACHMENT0,ge,0);g(v)&&m(ge),t.unbindTexture()}T.depthBuffer&&Ze(T)}c(ze,"setupRenderTarget");function ne(T){const v=T.textures;for(let k=0,Y=v.length;k<Y;k++){const Q=v[k];if(g(Q)){const q=C(T),Pe=n.get(Q).__webglTexture;t.bindTexture(q,Pe),m(q),t.unbindTexture()}}}c(ne,"updateRenderTargetMipmap");const A=[],te=[];function ae(T){if(T.samples>0){if(re(T)===!1){const v=T.textures,k=T.width,Y=T.height;let Q=s.COLOR_BUFFER_BIT;const q=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Pe=n.get(T),ge=v.length>1;if(ge)for(let Ce=0;Ce<v.length;Ce++)t.bindFramebuffer(s.FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ce,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,Pe.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ce,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,Pe.__webglMultisampledFramebuffer);const De=T.texture.mipmaps;De&&De.length>0?t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Pe.__webglFramebuffer[0]):t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Pe.__webglFramebuffer);for(let Ce=0;Ce<v.length;Ce++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(Q|=s.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(Q|=s.STENCIL_BUFFER_BIT)),ge){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Pe.__webglColorRenderbuffer[Ce]);const ie=n.get(v[Ce]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,ie,0)}s.blitFramebuffer(0,0,k,Y,0,0,k,Y,Q,s.NEAREST),l===!0&&(A.length=0,te.length=0,A.push(s.COLOR_ATTACHMENT0+Ce),T.depthBuffer&&T.resolveDepthBuffer===!1&&(A.push(q),te.push(q),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,te)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,A))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),ge)for(let Ce=0;Ce<v.length;Ce++){t.bindFramebuffer(s.FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ce,s.RENDERBUFFER,Pe.__webglColorRenderbuffer[Ce]);const ie=n.get(v[Ce]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,Pe.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ce,s.TEXTURE_2D,ie,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Pe.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&l){const v=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[v])}}}c(ae,"updateMultisampleRenderTarget");function he(T){return Math.min(i.maxSamples,T.samples)}c(he,"getRenderTargetSamples");function re(T){const v=n.get(T);return T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}c(re,"useMultisampledRTT");function we(T){const v=o.render.frame;h.get(T)!==v&&(h.set(T,v),T.update())}c(we,"updateVideoTexture");function me(T,v){const k=T.colorSpace,Y=T.format,Q=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||k!==jt&&k!==hi&&(nt.getTransfer(k)===ut?(Y!==dn||Q!==Nn)&&Le("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ke("WebGLTextures: Unsupported texture color space:",k)),v}c(me,"verifyColorSpace");function ye(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(u.width=T.naturalWidth||T.width,u.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(u.width=T.displayWidth,u.height=T.displayHeight):(u.width=T.width,u.height=T.height),u}c(ye,"getDimensions"),this.allocateTextureUnit=N,this.resetTextureUnits=O,this.setTexture2D=z,this.setTexture2DArray=W,this.setTexture3D=K,this.setTextureCube=j,this.rebindTextures=ht,this.setupRenderTarget=ze,this.updateRenderTargetMipmap=ne,this.updateMultisampleRenderTarget=ae,this.setupDepthRenderbuffer=Ze,this.setupFrameBufferTexture=Se,this.useMultisampledRTT=re}c(yE,"WebGLTextures");function SE(s,e){function t(n,i=hi){let r;const o=nt.getTransfer(i);if(n===Nn)return s.UNSIGNED_BYTE;if(n===Qh)return s.UNSIGNED_SHORT_4_4_4_4;if(n===ed)return s.UNSIGNED_SHORT_5_5_5_1;if(n===gg)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===xg)return s.UNSIGNED_INT_10F_11F_11F_REV;if(n===pg)return s.BYTE;if(n===mg)return s.SHORT;if(n===Or)return s.UNSIGNED_SHORT;if(n===Zh)return s.INT;if(n===Vi)return s.UNSIGNED_INT;if(n===En)return s.FLOAT;if(n===sr)return s.HALF_FLOAT;if(n===_g)return s.ALPHA;if(n===vg)return s.RGB;if(n===dn)return s.RGBA;if(n===Ur)return s.DEPTH_COMPONENT;if(n===Fr)return s.DEPTH_STENCIL;if(n===td)return s.RED;if(n===nd)return s.RED_INTEGER;if(n===id)return s.RG;if(n===sd)return s.RG_INTEGER;if(n===rd)return s.RGBA_INTEGER;if(n===Ho||n===Vo||n===Go||n===Wo)if(o===ut)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Ho)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Vo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Go)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Wo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Ho)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Vo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Go)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Wo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Qc||n===el||n===tl||n===nl)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Qc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===el)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===tl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===nl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===il||n===sl||n===rl)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===il||n===sl)return o===ut?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===rl)return o===ut?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===ol||n===al||n===cl||n===ll||n===ul||n===hl||n===dl||n===fl||n===pl||n===ml||n===gl||n===xl||n===_l||n===vl)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===ol)return o===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===al)return o===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===cl)return o===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===ll)return o===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ul)return o===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===hl)return o===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===dl)return o===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===fl)return o===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===pl)return o===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ml)return o===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===gl)return o===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===xl)return o===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===_l)return o===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===vl)return o===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===bl||n===yl||n===Sl)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===bl)return o===ut?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===yl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Sl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Ml||n===El||n===wl||n===Tl)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Ml)return r.COMPRESSED_RED_RGTC1_EXT;if(n===El)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===wl)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Tl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Nr?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return c(t,"convert"),{convert:t}}c(SE,"WebGLUtils");const ME=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,EE=`
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

}`,mp=class mp{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new aa(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Tn({vertexShader:ME,fragmentShader:EE,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new pt(new ma(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}};c(mp,"WebXRDepthSensing");let Ru=mp;const gp=class gp extends ei{constructor(e,t){super();const n=this;let i=null,r=1,o=null,a="local-floor",l=1,u=null,h=null,d=null,f=null,p=null,x=null;const _=typeof XRWebGLBinding<"u",g=new Ru,m={},C=t.getContextAttributes();let b=null,M=null;const P=[],R=[],I=new ce;let F=null;const w=new Nt;w.viewport=new rt;const y=new Nt;y.viewport=new rt;const E=[w,y],O=new _u;let N=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let ee=P[$];return ee===void 0&&(ee=new Tr,P[$]=ee),ee.getTargetRaySpace()},this.getControllerGrip=function($){let ee=P[$];return ee===void 0&&(ee=new Tr,P[$]=ee),ee.getGripSpace()},this.getHand=function($){let ee=P[$];return ee===void 0&&(ee=new Tr,P[$]=ee),ee.getHandSpace()};function z($){const ee=R.indexOf($.inputSource);if(ee===-1)return;const Se=P[ee];Se!==void 0&&(Se.update($.inputSource,$.frame,u||o),Se.dispatchEvent({type:$.type,data:$.inputSource}))}c(z,"onSessionEvent");function W(){i.removeEventListener("select",z),i.removeEventListener("selectstart",z),i.removeEventListener("selectend",z),i.removeEventListener("squeeze",z),i.removeEventListener("squeezestart",z),i.removeEventListener("squeezeend",z),i.removeEventListener("end",W),i.removeEventListener("inputsourceschange",K);for(let $=0;$<P.length;$++){const ee=R[$];ee!==null&&(R[$]=null,P[$].disconnect(ee))}N=null,H=null,g.reset();for(const $ in m)delete m[$];e.setRenderTarget(b),p=null,f=null,d=null,i=null,M=null,st.stop(),n.isPresenting=!1,e.setPixelRatio(F),e.setSize(I.width,I.height,!1),n.dispatchEvent({type:"sessionend"})}c(W,"onSessionEnd"),this.setFramebufferScaleFactor=function($){r=$,n.isPresenting===!0&&Le("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){a=$,n.isPresenting===!0&&Le("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||o},this.setReferenceSpace=function($){u=$},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return d===null&&_&&(d=new XRWebGLBinding(i,t)),d},this.getFrame=function(){return x},this.getSession=function(){return i},this.setSession=async function($){if(i=$,i!==null){if(b=e.getRenderTarget(),i.addEventListener("select",z),i.addEventListener("selectstart",z),i.addEventListener("selectend",z),i.addEventListener("squeeze",z),i.addEventListener("squeezestart",z),i.addEventListener("squeezeend",z),i.addEventListener("end",W),i.addEventListener("inputsourceschange",K),C.xrCompatible!==!0&&await t.makeXRCompatible(),F=e.getPixelRatio(),e.getSize(I),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let Se=null,Ne=null,Re=null;C.depth&&(Re=C.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Se=C.stencil?Fr:Ur,Ne=C.stencil?Nr:Vi);const Ze={colorFormat:t.RGBA8,depthFormat:Re,scaleFactor:r};d=this.getBinding(),f=d.createProjectionLayer(Ze),i.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),M=new ti(f.textureWidth,f.textureHeight,{format:dn,type:Nn,depthTexture:new oa(f.textureWidth,f.textureHeight,Ne,void 0,void 0,void 0,void 0,void 0,void 0,Se),stencilBuffer:C.stencil,colorSpace:e.outputColorSpace,samples:C.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const Se={antialias:C.antialias,alpha:!0,depth:C.depth,stencil:C.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(i,t,Se),i.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),M=new ti(p.framebufferWidth,p.framebufferHeight,{format:dn,type:Nn,colorSpace:e.outputColorSpace,stencilBuffer:C.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),u=null,o=await i.requestReferenceSpace(a),st.setContext(i),st.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function K($){for(let ee=0;ee<$.removed.length;ee++){const Se=$.removed[ee],Ne=R.indexOf(Se);Ne>=0&&(R[Ne]=null,P[Ne].disconnect(Se))}for(let ee=0;ee<$.added.length;ee++){const Se=$.added[ee];let Ne=R.indexOf(Se);if(Ne===-1){for(let Ze=0;Ze<P.length;Ze++)if(Ze>=R.length){R.push(Se),Ne=Ze;break}else if(R[Ze]===null){R[Ze]=Se,Ne=Ze;break}if(Ne===-1)break}const Re=P[Ne];Re&&Re.connect(Se)}}c(K,"onInputSourcesChange");const j=new L,se=new L;function le($,ee,Se){j.setFromMatrixPosition(ee.matrixWorld),se.setFromMatrixPosition(Se.matrixWorld);const Ne=j.distanceTo(se),Re=ee.projectionMatrix.elements,Ze=Se.projectionMatrix.elements,ht=Re[14]/(Re[10]-1),ze=Re[14]/(Re[10]+1),ne=(Re[9]+1)/Re[5],A=(Re[9]-1)/Re[5],te=(Re[8]-1)/Re[0],ae=(Ze[8]+1)/Ze[0],he=ht*te,re=ht*ae,we=Ne/(-te+ae),me=we*-te;if(ee.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(me),$.translateZ(we),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),Re[10]===-1)$.projectionMatrix.copy(ee.projectionMatrix),$.projectionMatrixInverse.copy(ee.projectionMatrixInverse);else{const ye=ht+we,T=ze+we,v=he-me,k=re+(Ne-me),Y=ne*ze/T*ye,Q=A*ze/T*ye;$.projectionMatrix.makePerspective(v,k,Y,Q,ye,T),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}c(le,"setProjectionFromUnion");function Ee($,ee){ee===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(ee.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}c(Ee,"updateCamera"),this.updateCamera=function($){if(i===null)return;let ee=$.near,Se=$.far;g.texture!==null&&(g.depthNear>0&&(ee=g.depthNear),g.depthFar>0&&(Se=g.depthFar)),O.near=y.near=w.near=ee,O.far=y.far=w.far=Se,(N!==O.near||H!==O.far)&&(i.updateRenderState({depthNear:O.near,depthFar:O.far}),N=O.near,H=O.far),O.layers.mask=$.layers.mask|6,w.layers.mask=O.layers.mask&3,y.layers.mask=O.layers.mask&5;const Ne=$.parent,Re=O.cameras;Ee(O,Ne);for(let Ze=0;Ze<Re.length;Ze++)Ee(Re[Ze],Ne);Re.length===2?le(O,w,y):O.projectionMatrix.copy(w.projectionMatrix),We($,O,Ne)};function We($,ee,Se){Se===null?$.matrix.copy(ee.matrixWorld):($.matrix.copy(Se.matrixWorld),$.matrix.invert(),$.matrix.multiply(ee.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(ee.projectionMatrix),$.projectionMatrixInverse.copy(ee.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=er*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}c(We,"updateUserCamera"),this.getCamera=function(){return O},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function($){l=$,f!==null&&(f.fixedFoveation=$),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=$)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(O)},this.getCameraTexture=function($){return m[$]};let je=null;function tt($,ee){if(h=ee.getViewerPose(u||o),x=ee,h!==null){const Se=h.views;p!==null&&(e.setRenderTargetFramebuffer(M,p.framebuffer),e.setRenderTarget(M));let Ne=!1;Se.length!==O.cameras.length&&(O.cameras.length=0,Ne=!0);for(let ze=0;ze<Se.length;ze++){const ne=Se[ze];let A=null;if(p!==null)A=p.getViewport(ne);else{const ae=d.getViewSubImage(f,ne);A=ae.viewport,ze===0&&(e.setRenderTargetTextures(M,ae.colorTexture,ae.depthStencilTexture),e.setRenderTarget(M))}let te=E[ze];te===void 0&&(te=new Nt,te.layers.enable(ze),te.viewport=new rt,E[ze]=te),te.matrix.fromArray(ne.transform.matrix),te.matrix.decompose(te.position,te.quaternion,te.scale),te.projectionMatrix.fromArray(ne.projectionMatrix),te.projectionMatrixInverse.copy(te.projectionMatrix).invert(),te.viewport.set(A.x,A.y,A.width,A.height),ze===0&&(O.matrix.copy(te.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale)),Ne===!0&&O.cameras.push(te)}const Re=i.enabledFeatures;if(Re&&Re.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&_){d=n.getBinding();const ze=d.getDepthInformation(Se[0]);ze&&ze.isValid&&ze.texture&&g.init(ze,i.renderState)}if(Re&&Re.includes("camera-access")&&_){e.state.unbindTexture(),d=n.getBinding();for(let ze=0;ze<Se.length;ze++){const ne=Se[ze].camera;if(ne){let A=m[ne];A||(A=new aa,m[ne]=A);const te=d.getCameraImage(ne);A.sourceTexture=te}}}}for(let Se=0;Se<P.length;Se++){const Ne=R[Se],Re=P[Se];Ne!==null&&Re!==void 0&&Re.update(Ne,ee,u||o)}je&&je($,ee),ee.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ee}),x=null}c(tt,"onAnimationFrame");const st=new Pg;st.setAnimationLoop(tt),this.setAnimationLoop=function($){je=$},this.dispose=function(){}}};c(gp,"WebXRManager");let Pu=gp;const Ii=new wn,wE=new qe;function TE(s,e){function t(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}c(t,"refreshTransformUniform");function n(g,m){m.color.getRGB(g.fogColor.value,Eg(s)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}c(n,"refreshFogUniforms");function i(g,m,C,b,M){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(g,m):m.isMeshToonMaterial?(r(g,m),d(g,m)):m.isMeshPhongMaterial?(r(g,m),h(g,m)):m.isMeshStandardMaterial?(r(g,m),f(g,m),m.isMeshPhysicalMaterial&&p(g,m,M)):m.isMeshMatcapMaterial?(r(g,m),x(g,m)):m.isMeshDepthMaterial?r(g,m):m.isMeshDistanceMaterial?(r(g,m),_(g,m)):m.isMeshNormalMaterial?r(g,m):m.isLineBasicMaterial?(o(g,m),m.isLineDashedMaterial&&a(g,m)):m.isPointsMaterial?l(g,m,C,b):m.isSpriteMaterial?u(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}c(i,"refreshMaterialUniforms");function r(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,t(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===Jt&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,t(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===Jt&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,t(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,t(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);const C=e.get(m),b=C.envMap,M=C.envMapRotation;b&&(g.envMap.value=b,Ii.copy(M),Ii.x*=-1,Ii.y*=-1,Ii.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(Ii.y*=-1,Ii.z*=-1),g.envMapRotation.value.setFromMatrix4(wE.makeRotationFromEuler(Ii)),g.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,g.aoMapTransform))}c(r,"refreshUniformsCommon");function o(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform))}c(o,"refreshUniformsLine");function a(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}c(a,"refreshUniformsDash");function l(g,m,C,b){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*C,g.scale.value=b*.5,m.map&&(g.map.value=m.map,t(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}c(l,"refreshUniformsPoints");function u(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}c(u,"refreshUniformsSprites");function h(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}c(h,"refreshUniformsPhong");function d(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}c(d,"refreshUniformsToon");function f(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}c(f,"refreshUniformsStandard");function p(g,m,C){g.ior.value=m.ior,m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Jt&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=C.texture,g.transmissionSamplerSize.value.set(C.width,C.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,g.specularIntensityMapTransform))}c(p,"refreshUniformsPhysical");function x(g,m){m.matcap&&(g.matcap.value=m.matcap)}c(x,"refreshUniformsMatcap");function _(g,m){const C=e.get(m).light;g.referencePosition.value.setFromMatrixPosition(C.matrixWorld),g.nearDistance.value=C.shadow.camera.near,g.farDistance.value=C.shadow.camera.far}return c(_,"refreshUniformsDistance"),{refreshFogUniforms:n,refreshMaterialUniforms:i}}c(TE,"WebGLMaterials");function AE(s,e,t,n){let i={},r={},o=[];const a=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(C,b){const M=b.program;n.uniformBlockBinding(C,M)}c(l,"bind");function u(C,b){let M=i[C.id];M===void 0&&(x(C),M=h(C),i[C.id]=M,C.addEventListener("dispose",g));const P=b.program;n.updateUBOMapping(C,P);const R=e.render.frame;r[C.id]!==R&&(f(C),r[C.id]=R)}c(u,"update");function h(C){const b=d();C.__bindingPointIndex=b;const M=s.createBuffer(),P=C.__size,R=C.usage;return s.bindBuffer(s.UNIFORM_BUFFER,M),s.bufferData(s.UNIFORM_BUFFER,P,R),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,b,M),M}c(h,"createBuffer");function d(){for(let C=0;C<a;C++)if(o.indexOf(C)===-1)return o.push(C),C;return Ke("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}c(d,"allocateBindingPointIndex");function f(C){const b=i[C.id],M=C.uniforms,P=C.__cache;s.bindBuffer(s.UNIFORM_BUFFER,b);for(let R=0,I=M.length;R<I;R++){const F=Array.isArray(M[R])?M[R]:[M[R]];for(let w=0,y=F.length;w<y;w++){const E=F[w];if(p(E,R,w,P)===!0){const O=E.__offset,N=Array.isArray(E.value)?E.value:[E.value];let H=0;for(let z=0;z<N.length;z++){const W=N[z],K=_(W);typeof W=="number"||typeof W=="boolean"?(E.__data[0]=W,s.bufferSubData(s.UNIFORM_BUFFER,O+H,E.__data)):W.isMatrix3?(E.__data[0]=W.elements[0],E.__data[1]=W.elements[1],E.__data[2]=W.elements[2],E.__data[3]=0,E.__data[4]=W.elements[3],E.__data[5]=W.elements[4],E.__data[6]=W.elements[5],E.__data[7]=0,E.__data[8]=W.elements[6],E.__data[9]=W.elements[7],E.__data[10]=W.elements[8],E.__data[11]=0):(W.toArray(E.__data,H),H+=K.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,O,E.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}c(f,"updateBufferData");function p(C,b,M,P){const R=C.value,I=b+"_"+M;if(P[I]===void 0)return typeof R=="number"||typeof R=="boolean"?P[I]=R:P[I]=R.clone(),!0;{const F=P[I];if(typeof R=="number"||typeof R=="boolean"){if(F!==R)return P[I]=R,!0}else if(F.equals(R)===!1)return F.copy(R),!0}return!1}c(p,"hasUniformChanged");function x(C){const b=C.uniforms;let M=0;const P=16;for(let I=0,F=b.length;I<F;I++){const w=Array.isArray(b[I])?b[I]:[b[I]];for(let y=0,E=w.length;y<E;y++){const O=w[y],N=Array.isArray(O.value)?O.value:[O.value];for(let H=0,z=N.length;H<z;H++){const W=N[H],K=_(W),j=M%P,se=j%K.boundary,le=j+se;M+=se,le!==0&&P-le<K.storage&&(M+=P-le),O.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=M,M+=K.storage}}}const R=M%P;return R>0&&(M+=P-R),C.__size=M,C.__cache={},this}c(x,"prepareUniformsGroup");function _(C){const b={boundary:0,storage:0};return typeof C=="number"||typeof C=="boolean"?(b.boundary=4,b.storage=4):C.isVector2?(b.boundary=8,b.storage=8):C.isVector3||C.isColor?(b.boundary=16,b.storage=12):C.isVector4?(b.boundary=16,b.storage=16):C.isMatrix3?(b.boundary=48,b.storage=48):C.isMatrix4?(b.boundary=64,b.storage=64):C.isTexture?Le("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Le("WebGLRenderer: Unsupported uniform value type.",C),b}c(_,"getUniformSize");function g(C){const b=C.target;b.removeEventListener("dispose",g);const M=o.indexOf(b.__bindingPointIndex);o.splice(M,1),s.deleteBuffer(i[b.id]),delete i[b.id],delete r[b.id]}c(g,"onUniformsGroupsDispose");function m(){for(const C in i)s.deleteBuffer(i[C]);o=[],i={},r={}}return c(m,"dispose"),{bind:l,update:u,dispose:m}}c(AE,"WebGLUniformsGroups");const CE=new Uint16Array([11481,15204,11534,15171,11808,15015,12385,14843,12894,14716,13396,14600,13693,14483,13976,14366,14237,14171,14405,13961,14511,13770,14605,13598,14687,13444,14760,13305,14822,13066,14876,12857,14923,12675,14963,12517,14997,12379,15025,12230,15049,12023,15070,11843,15086,11687,15100,11551,15111,11433,15120,11330,15127,11217,15132,11060,15135,10922,15138,10801,15139,10695,15139,10600,13012,14923,13020,14917,13064,14886,13176,14800,13349,14666,13513,14526,13724,14398,13960,14230,14200,14020,14383,13827,14488,13651,14583,13491,14667,13348,14740,13132,14803,12908,14856,12713,14901,12542,14938,12394,14968,12241,14992,12017,15010,11822,15024,11654,15034,11507,15041,11380,15044,11269,15044,11081,15042,10913,15037,10764,15031,10635,15023,10520,15014,10419,15003,10330,13657,14676,13658,14673,13670,14660,13698,14622,13750,14547,13834,14442,13956,14317,14112,14093,14291,13889,14407,13704,14499,13538,14586,13389,14664,13201,14733,12966,14792,12758,14842,12577,14882,12418,14915,12272,14940,12033,14959,11826,14972,11646,14980,11490,14983,11355,14983,11212,14979,11008,14971,10830,14961,10675,14950,10540,14936,10420,14923,10315,14909,10204,14894,10041,14089,14460,14090,14459,14096,14452,14112,14431,14141,14388,14186,14305,14252,14130,14341,13941,14399,13756,14467,13585,14539,13430,14610,13272,14677,13026,14737,12808,14790,12617,14833,12449,14869,12303,14896,12065,14916,11845,14929,11655,14937,11490,14939,11347,14936,11184,14930,10970,14921,10783,14912,10621,14900,10480,14885,10356,14867,10247,14848,10062,14827,9894,14805,9745,14400,14208,14400,14206,14402,14198,14406,14174,14415,14122,14427,14035,14444,13913,14469,13767,14504,13613,14548,13463,14598,13324,14651,13082,14704,12858,14752,12658,14795,12483,14831,12330,14860,12106,14881,11875,14895,11675,14903,11501,14905,11351,14903,11178,14900,10953,14892,10757,14880,10589,14865,10442,14847,10313,14827,10162,14805,9965,14782,9792,14757,9642,14731,9507,14562,13883,14562,13883,14563,13877,14566,13862,14570,13830,14576,13773,14584,13689,14595,13582,14613,13461,14637,13336,14668,13120,14704,12897,14741,12695,14776,12516,14808,12358,14835,12150,14856,11910,14870,11701,14878,11519,14882,11361,14884,11187,14880,10951,14871,10748,14858,10572,14842,10418,14823,10286,14801,10099,14777,9897,14751,9722,14725,9567,14696,9430,14666,9309,14702,13604,14702,13604,14702,13600,14703,13591,14705,13570,14707,13533,14709,13477,14712,13400,14718,13305,14727,13106,14743,12907,14762,12716,14784,12539,14807,12380,14827,12190,14844,11943,14855,11727,14863,11539,14870,11376,14871,11204,14868,10960,14858,10748,14845,10565,14829,10406,14809,10269,14786,10058,14761,9852,14734,9671,14705,9512,14674,9374,14641,9253,14608,9076,14821,13366,14821,13365,14821,13364,14821,13358,14821,13344,14821,13320,14819,13252,14817,13145,14815,13011,14814,12858,14817,12698,14823,12539,14832,12389,14841,12214,14850,11968,14856,11750,14861,11558,14866,11390,14867,11226,14862,10972,14853,10754,14840,10565,14823,10401,14803,10259,14780,10032,14754,9820,14725,9635,14694,9473,14661,9333,14627,9203,14593,8988,14557,8798,14923,13014,14922,13014,14922,13012,14922,13004,14920,12987,14919,12957,14915,12907,14909,12834,14902,12738,14894,12623,14888,12498,14883,12370,14880,12203,14878,11970,14875,11759,14873,11569,14874,11401,14872,11243,14865,10986,14855,10762,14842,10568,14825,10401,14804,10255,14781,10017,14754,9799,14725,9611,14692,9445,14658,9301,14623,9139,14587,8920,14548,8729,14509,8562,15008,12672,15008,12672,15008,12671,15007,12667,15005,12656,15001,12637,14997,12605,14989,12556,14978,12490,14966,12407,14953,12313,14940,12136,14927,11934,14914,11742,14903,11563,14896,11401,14889,11247,14879,10992,14866,10767,14851,10570,14833,10400,14812,10252,14789,10007,14761,9784,14731,9592,14698,9424,14663,9279,14627,9088,14588,8868,14548,8676,14508,8508,14467,8360,15080,12386,15080,12386,15079,12385,15078,12383,15076,12378,15072,12367,15066,12347,15057,12315,15045,12253,15030,12138,15012,11998,14993,11845,14972,11685,14951,11530,14935,11383,14920,11228,14904,10981,14887,10762,14870,10567,14850,10397,14827,10248,14803,9997,14774,9771,14743,9578,14710,9407,14674,9259,14637,9048,14596,8826,14555,8632,14514,8464,14471,8317,14427,8182,15139,12008,15139,12008,15138,12008,15137,12007,15135,12003,15130,11990,15124,11969,15115,11929,15102,11872,15086,11794,15064,11693,15041,11581,15013,11459,14987,11336,14966,11170,14944,10944,14921,10738,14898,10552,14875,10387,14850,10239,14824,9983,14794,9758,14762,9563,14728,9392,14692,9244,14653,9014,14611,8791,14569,8597,14526,8427,14481,8281,14436,8110,14391,7885,15188,11617,15188,11617,15187,11617,15186,11618,15183,11617,15179,11612,15173,11601,15163,11581,15150,11546,15133,11495,15110,11427,15083,11346,15051,11246,15024,11057,14996,10868,14967,10687,14938,10517,14911,10362,14882,10206,14853,9956,14821,9737,14787,9543,14752,9375,14715,9228,14675,8980,14632,8760,14589,8565,14544,8395,14498,8248,14451,8049,14404,7824,14357,7630,15228,11298,15228,11298,15227,11299,15226,11301,15223,11303,15219,11302,15213,11299,15204,11290,15191,11271,15174,11217,15150,11129,15119,11015,15087,10886,15057,10744,15024,10599,14990,10455,14957,10318,14924,10143,14891,9911,14856,9701,14820,9516,14782,9352,14744,9200,14703,8946,14659,8725,14615,8533,14568,8366,14521,8220,14472,7992,14423,7770,14374,7578,14315,7408,15260,10819,15260,10819,15259,10822,15258,10826,15256,10832,15251,10836,15246,10841,15237,10838,15225,10821,15207,10788,15183,10734,15151,10660,15120,10571,15087,10469,15049,10359,15012,10249,14974,10041,14937,9837,14900,9647,14860,9475,14820,9320,14779,9147,14736,8902,14691,8688,14646,8499,14598,8335,14549,8189,14499,7940,14448,7720,14397,7529,14347,7363,14256,7218,15285,10410,15285,10411,15285,10413,15284,10418,15282,10425,15278,10434,15272,10442,15264,10449,15252,10445,15235,10433,15210,10403,15179,10358,15149,10301,15113,10218,15073,10059,15033,9894,14991,9726,14951,9565,14909,9413,14865,9273,14822,9073,14777,8845,14730,8641,14682,8459,14633,8300,14583,8129,14531,7883,14479,7670,14426,7482,14373,7321,14305,7176,14201,6939,15305,9939,15305,9940,15305,9945,15304,9955,15302,9967,15298,9989,15293,10010,15286,10033,15274,10044,15258,10045,15233,10022,15205,9975,15174,9903,15136,9808,15095,9697,15053,9578,15009,9451,14965,9327,14918,9198,14871,8973,14825,8766,14775,8579,14725,8408,14675,8259,14622,8058,14569,7821,14515,7615,14460,7435,14405,7276,14350,7108,14256,6866,14149,6653,15321,9444,15321,9445,15321,9448,15320,9458,15317,9470,15314,9490,15310,9515,15302,9540,15292,9562,15276,9579,15251,9577,15226,9559,15195,9519,15156,9463,15116,9389,15071,9304,15025,9208,14978,9023,14927,8838,14878,8661,14827,8496,14774,8344,14722,8206,14667,7973,14612,7749,14556,7555,14499,7382,14443,7229,14385,7025,14322,6791,14210,6588,14100,6409,15333,8920,15333,8921,15332,8927,15332,8943,15329,8965,15326,9002,15322,9048,15316,9106,15307,9162,15291,9204,15267,9221,15244,9221,15212,9196,15175,9134,15133,9043,15088,8930,15040,8801,14990,8665,14938,8526,14886,8391,14830,8261,14775,8087,14719,7866,14661,7664,14603,7482,14544,7322,14485,7178,14426,6936,14367,6713,14281,6517,14166,6348,14054,6198,15341,8360,15341,8361,15341,8366,15341,8379,15339,8399,15336,8431,15332,8473,15326,8527,15318,8585,15302,8632,15281,8670,15258,8690,15227,8690,15191,8664,15149,8612,15104,8543,15055,8456,15001,8360,14948,8259,14892,8122,14834,7923,14776,7734,14716,7558,14656,7397,14595,7250,14534,7070,14472,6835,14410,6628,14350,6443,14243,6283,14125,6135,14010,5889,15348,7715,15348,7717,15348,7725,15347,7745,15345,7780,15343,7836,15339,7905,15334,8e3,15326,8103,15310,8193,15293,8239,15270,8270,15240,8287,15204,8283,15163,8260,15118,8223,15067,8143,15014,8014,14958,7873,14899,7723,14839,7573,14778,7430,14715,7293,14652,7164,14588,6931,14524,6720,14460,6531,14396,6362,14330,6210,14207,6015,14086,5781,13969,5576,15352,7114,15352,7116,15352,7128,15352,7159,15350,7195,15348,7237,15345,7299,15340,7374,15332,7457,15317,7544,15301,7633,15280,7703,15251,7754,15216,7775,15176,7767,15131,7733,15079,7670,15026,7588,14967,7492,14906,7387,14844,7278,14779,7171,14714,6965,14648,6770,14581,6587,14515,6420,14448,6269,14382,6123,14299,5881,14172,5665,14049,5477,13929,5310,15355,6329,15355,6330,15355,6339,15355,6362,15353,6410,15351,6472,15349,6572,15344,6688,15337,6835,15323,6985,15309,7142,15287,7220,15260,7277,15226,7310,15188,7326,15142,7318,15090,7285,15036,7239,14976,7177,14914,7045,14849,6892,14782,6736,14714,6581,14645,6433,14576,6293,14506,6164,14438,5946,14369,5733,14270,5540,14140,5369,14014,5216,13892,5043,15357,5483,15357,5484,15357,5496,15357,5528,15356,5597,15354,5692,15351,5835,15347,6011,15339,6195,15328,6317,15314,6446,15293,6566,15268,6668,15235,6746,15197,6796,15152,6811,15101,6790,15046,6748,14985,6673,14921,6583,14854,6479,14785,6371,14714,6259,14643,6149,14571,5946,14499,5750,14428,5567,14358,5401,14242,5250,14109,5111,13980,4870,13856,4657,15359,4555,15359,4557,15358,4573,15358,4633,15357,4715,15355,4841,15353,5061,15349,5216,15342,5391,15331,5577,15318,5770,15299,5967,15274,6150,15243,6223,15206,6280,15161,6310,15111,6317,15055,6300,14994,6262,14928,6208,14860,6141,14788,5994,14715,5838,14641,5684,14566,5529,14492,5384,14418,5247,14346,5121,14216,4892,14079,4682,13948,4496,13822,4330,15359,3498,15359,3501,15359,3520,15359,3598,15358,3719,15356,3860,15355,4137,15351,4305,15344,4563,15334,4809,15321,5116,15303,5273,15280,5418,15250,5547,15214,5653,15170,5722,15120,5761,15064,5763,15002,5733,14935,5673,14865,5597,14792,5504,14716,5400,14640,5294,14563,5185,14486,5041,14410,4841,14335,4655,14191,4482,14051,4325,13918,4183,13790,4012,15360,2282,15360,2285,15360,2306,15360,2401,15359,2547,15357,2748,15355,3103,15352,3349,15345,3675,15336,4020,15324,4272,15307,4496,15285,4716,15255,4908,15220,5086,15178,5170,15128,5214,15072,5234,15010,5231,14943,5206,14871,5166,14796,5102,14718,4971,14639,4833,14559,4687,14480,4541,14402,4401,14315,4268,14167,4142,14025,3958,13888,3747,13759,3556,15360,923,15360,925,15360,946,15360,1052,15359,1214,15357,1494,15356,1892,15352,2274,15346,2663,15338,3099,15326,3393,15309,3679,15288,3980,15260,4183,15226,4325,15185,4437,15136,4517,15080,4570,15018,4591,14950,4581,14877,4545,14800,4485,14720,4411,14638,4325,14556,4231,14475,4136,14395,3988,14297,3803,14145,3628,13999,3465,13861,3314,13729,3177,15360,263,15360,264,15360,272,15360,325,15359,407,15358,548,15356,780,15352,1144,15347,1580,15339,2099,15328,2425,15312,2795,15292,3133,15264,3329,15232,3517,15191,3689,15143,3819,15088,3923,15025,3978,14956,3999,14882,3979,14804,3931,14722,3855,14639,3756,14554,3645,14470,3529,14388,3409,14279,3289,14124,3173,13975,3055,13834,2848,13701,2658,15360,49,15360,49,15360,52,15360,75,15359,111,15358,201,15356,283,15353,519,15348,726,15340,1045,15329,1415,15314,1795,15295,2173,15269,2410,15237,2649,15197,2866,15150,3054,15095,3140,15032,3196,14963,3228,14888,3236,14808,3224,14725,3191,14639,3146,14553,3088,14466,2976,14382,2836,14262,2692,14103,2549,13952,2409,13808,2278,13674,2154,15360,4,15360,4,15360,4,15360,13,15359,33,15358,59,15357,112,15353,199,15348,302,15341,456,15331,628,15316,827,15297,1082,15272,1332,15241,1601,15202,1851,15156,2069,15101,2172,15039,2256,14970,2314,14894,2348,14813,2358,14728,2344,14640,2311,14551,2263,14463,2203,14376,2133,14247,2059,14084,1915,13930,1761,13784,1609,13648,1464,15360,0,15360,0,15360,0,15360,3,15359,18,15358,26,15357,53,15354,80,15348,97,15341,165,15332,238,15318,326,15299,427,15275,529,15245,654,15207,771,15161,885,15108,994,15046,1089,14976,1170,14900,1229,14817,1266,14731,1284,14641,1282,14550,1260,14460,1223,14370,1174,14232,1116,14066,1050,13909,981,13761,910,13623,839]);let Xn=null;function RE(){return Xn===null&&(Xn=new Wr(CE,32,32,id,sr),Xn.minFilter=Wt,Xn.magFilter=Wt,Xn.wrapS=Dn,Xn.wrapT=Dn,Xn.generateMipmaps=!1,Xn.needsUpdate=!0),Xn}c(RE,"getDFGLUT");const xp=class xp{constructor(e={}){const{canvas:t=M_(),context:n=null,depth:i=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;const x=new Set([rd,sd,nd]),_=new Set([Nn,Vi,Or,Nr,Qh,ed]),g=new Uint32Array(4),m=new Int32Array(4);let C=null,b=null;const M=[],P=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=fi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const R=this;let I=!1;this._outputColorSpace=Dt;let F=0,w=0,y=null,E=-1,O=null;const N=new rt,H=new rt;let z=null;const W=new Ge(0);let K=0,j=t.width,se=t.height,le=1,Ee=null,We=null;const je=new rt(0,0,j,se),tt=new rt(0,0,j,se);let st=!1;const $=new jr;let ee=!1,Se=!1;const Ne=new qe,Re=new L,Ze=new rt,ht={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ze=!1;function ne(){return y===null?le:1}c(ne,"getTargetPixelRatio");let A=n;function te(S,U){return t.getContext(S,U)}c(te,"getContext");try{const S={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Kh}`),t.addEventListener("webglcontextlost",oe,!1),t.addEventListener("webglcontextrestored",Z,!1),t.addEventListener("webglcontextcreationerror",Te,!1),A===null){const U="webgl2";if(A=te(U,S),A===null)throw te(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(S){throw S("WebGLRenderer: "+S.message),S}let ae,he,re,we,me,ye,T,v,k,Y,Q,q,Pe,ge,De,Ce,ie,de,ke,Fe,be,Ve,D,_e;function fe(){ae=new XS(A),ae.init(),Ve=new SE(A,ae),he=new US(A,ae,e,Ve),re=new bE(A,ae),he.reversedDepthBuffer&&f&&re.buffers.depth.setReversed(!0),we=new YS(A),me=new aE,ye=new yE(A,ae,re,me,he,Ve,we),T=new BS(R),v=new WS(R),k=new Zv(A),D=new OS(A,k),Y=new jS(A,k,we,D),Q=new KS(A,Y,k,we),ke=new $S(A,he,ye),Ce=new FS(me),q=new oE(R,T,v,ae,he,D,Ce),Pe=new TE(R,me),ge=new lE,De=new mE(ae),de=new DS(R,T,v,re,Q,p,l),ie=new _E(R,Q,he),_e=new AE(A,we,he,re),Fe=new NS(A,ae,we),be=new qS(A,ae,we),we.programs=q.programs,R.capabilities=he,R.extensions=ae,R.properties=me,R.renderLists=ge,R.shadowMap=ie,R.state=re,R.info=we}c(fe,"initGLContext"),fe();const pe=new Pu(R,A);this.xr=pe,this.getContext=function(){return A},this.getContextAttributes=function(){return A.getContextAttributes()},this.forceContextLoss=function(){const S=ae.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=ae.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return le},this.setPixelRatio=function(S){S!==void 0&&(le=S,this.setSize(j,se,!1))},this.getSize=function(S){return S.set(j,se)},this.setSize=function(S,U,G=!0){if(pe.isPresenting){Le("WebGLRenderer: Can't change size while VR device is presenting.");return}j=S,se=U,t.width=Math.floor(S*le),t.height=Math.floor(U*le),G===!0&&(t.style.width=S+"px",t.style.height=U+"px"),this.setViewport(0,0,S,U)},this.getDrawingBufferSize=function(S){return S.set(j*le,se*le).floor()},this.setDrawingBufferSize=function(S,U,G){j=S,se=U,le=G,t.width=Math.floor(S*G),t.height=Math.floor(U*G),this.setViewport(0,0,S,U)},this.getCurrentViewport=function(S){return S.copy(N)},this.getViewport=function(S){return S.copy(je)},this.setViewport=function(S,U,G,X){S.isVector4?je.set(S.x,S.y,S.z,S.w):je.set(S,U,G,X),re.viewport(N.copy(je).multiplyScalar(le).round())},this.getScissor=function(S){return S.copy(tt)},this.setScissor=function(S,U,G,X){S.isVector4?tt.set(S.x,S.y,S.z,S.w):tt.set(S,U,G,X),re.scissor(H.copy(tt).multiplyScalar(le).round())},this.getScissorTest=function(){return st},this.setScissorTest=function(S){re.setScissorTest(st=S)},this.setOpaqueSort=function(S){Ee=S},this.setTransparentSort=function(S){We=S},this.getClearColor=function(S){return S.copy(de.getClearColor())},this.setClearColor=function(){de.setClearColor(...arguments)},this.getClearAlpha=function(){return de.getClearAlpha()},this.setClearAlpha=function(){de.setClearAlpha(...arguments)},this.clear=function(S=!0,U=!0,G=!0){let X=0;if(S){let B=!1;if(y!==null){const ue=y.texture.format;B=x.has(ue)}if(B){const ue=y.texture.type,ve=_.has(ue),Ae=de.getClearColor(),Me=de.getClearAlpha(),Be=Ae.r,He=Ae.g,Oe=Ae.b;ve?(g[0]=Be,g[1]=He,g[2]=Oe,g[3]=Me,A.clearBufferuiv(A.COLOR,0,g)):(m[0]=Be,m[1]=He,m[2]=Oe,m[3]=Me,A.clearBufferiv(A.COLOR,0,m))}else X|=A.COLOR_BUFFER_BIT}U&&(X|=A.DEPTH_BUFFER_BIT),G&&(X|=A.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),A.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",oe,!1),t.removeEventListener("webglcontextrestored",Z,!1),t.removeEventListener("webglcontextcreationerror",Te,!1),de.dispose(),ge.dispose(),De.dispose(),me.dispose(),T.dispose(),v.dispose(),Q.dispose(),D.dispose(),_e.dispose(),q.dispose(),pe.dispose(),pe.removeEventListener("sessionstart",mm),pe.removeEventListener("sessionend",gm),wi.stop()};function oe(S){S.preventDefault(),$o("WebGLRenderer: Context Lost."),I=!0}c(oe,"onContextLost");function Z(){$o("WebGLRenderer: Context Restored."),I=!1;const S=we.autoReset,U=ie.enabled,G=ie.autoUpdate,X=ie.needsUpdate,B=ie.type;fe(),we.autoReset=S,ie.enabled=U,ie.autoUpdate=G,ie.needsUpdate=X,ie.type=B}c(Z,"onContextRestore");function Te(S){Ke("WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}c(Te,"onContextCreationError");function Xe(S){const U=S.target;U.removeEventListener("dispose",Xe),mt(U)}c(Xe,"onMaterialDispose");function mt(S){at(S),me.remove(S)}c(mt,"deallocateMaterial");function at(S){const U=me.get(S).programs;U!==void 0&&(U.forEach(function(G){q.releaseProgram(G)}),S.isShaderMaterial&&q.releaseShaderCache(S))}c(at,"releaseMaterialProgramReferences"),this.renderBufferDirect=function(S,U,G,X,B,ue){U===null&&(U=ht);const ve=B.isMesh&&B.matrixWorld.determinant()<0,Ae=Yg(S,U,G,X,B);re.setMaterial(X,ve);let Me=G.index,Be=1;if(X.wireframe===!0){if(Me=Y.getWireframeAttribute(G),Me===void 0)return;Be=2}const He=G.drawRange,Oe=G.attributes.position;let et=He.start*Be,ct=(He.start+He.count)*Be;ue!==null&&(et=Math.max(et,ue.start*Be),ct=Math.min(ct,(ue.start+ue.count)*Be)),Me!==null?(et=Math.max(et,0),ct=Math.min(ct,Me.count)):Oe!=null&&(et=Math.max(et,0),ct=Math.min(ct,Oe.count));const St=ct-et;if(St<0||St===1/0)return;D.setup(B,X,Ae,G,Me);let Mt,dt=Fe;if(Me!==null&&(Mt=k.get(Me),dt=be,dt.setIndex(Mt)),B.isMesh)X.wireframe===!0?(re.setLineWidth(X.wireframeLinewidth*ne()),dt.setMode(A.LINES)):dt.setMode(A.TRIANGLES);else if(B.isLine){let Ue=X.linewidth;Ue===void 0&&(Ue=1),re.setLineWidth(Ue*ne()),B.isLineSegments?dt.setMode(A.LINES):B.isLineLoop?dt.setMode(A.LINE_LOOP):dt.setMode(A.LINE_STRIP)}else B.isPoints?dt.setMode(A.POINTS):B.isSprite&&dt.setMode(A.TRIANGLES);if(B.isBatchedMesh)if(B._multiDrawInstances!==null)Hr("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),dt.renderMultiDrawInstances(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount,B._multiDrawInstances);else if(ae.get("WEBGL_multi_draw"))dt.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else{const Ue=B._multiDrawStarts,_t=B._multiDrawCounts,it=B._multiDrawCount,en=Me?k.get(Me).bytesPerElement:1,Yi=me.get(X).currentProgram.getUniforms();for(let tn=0;tn<it;tn++)Yi.setValue(A,"_gl_DrawID",tn),dt.render(Ue[tn]/en,_t[tn])}else if(B.isInstancedMesh)dt.renderInstances(et,St,B.count);else if(G.isInstancedBufferGeometry){const Ue=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,_t=Math.min(G.instanceCount,Ue);dt.renderInstances(et,St,_t)}else dt.render(et,St)};function Rn(S,U,G){S.transparent===!0&&S.side===Sn&&S.forceSinglePass===!1?(S.side=Jt,S.needsUpdate=!0,ao(S,U,G),S.side=Qn,S.needsUpdate=!0,ao(S,U,G),S.side=Sn):ao(S,U,G)}c(Rn,"prepareMaterial"),this.compile=function(S,U,G=null){G===null&&(G=S),b=De.get(G),b.init(U),P.push(b),G.traverseVisible(function(B){B.isLight&&B.layers.test(U.layers)&&(b.pushLight(B),B.castShadow&&b.pushShadow(B))}),S!==G&&S.traverseVisible(function(B){B.isLight&&B.layers.test(U.layers)&&(b.pushLight(B),B.castShadow&&b.pushShadow(B))}),b.setupLights();const X=new Set;return S.traverse(function(B){if(!(B.isMesh||B.isPoints||B.isLine||B.isSprite))return;const ue=B.material;if(ue)if(Array.isArray(ue))for(let ve=0;ve<ue.length;ve++){const Ae=ue[ve];Rn(Ae,G,B),X.add(Ae)}else Rn(ue,G,B),X.add(ue)}),b=P.pop(),X},this.compileAsync=function(S,U,G=null){const X=this.compile(S,U,G);return new Promise(B=>{function ue(){if(X.forEach(function(ve){me.get(ve).currentProgram.isReady()&&X.delete(ve)}),X.size===0){B(S);return}setTimeout(ue,10)}c(ue,"checkMaterialsReady"),ae.get("KHR_parallel_shader_compile")!==null?ue():setTimeout(ue,10)})};let _n=null;function qg(S){_n&&_n(S)}c(qg,"onAnimationFrame");function mm(){wi.stop()}c(mm,"onXRSessionStart");function gm(){wi.start()}c(gm,"onXRSessionEnd");const wi=new Pg;wi.setAnimationLoop(qg),typeof self<"u"&&wi.setContext(self),this.setAnimationLoop=function(S){_n=S,pe.setAnimationLoop(S),S===null?wi.stop():wi.start()},pe.addEventListener("sessionstart",mm),pe.addEventListener("sessionend",gm),this.render=function(S,U){if(U!==void 0&&U.isCamera!==!0){Ke("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),pe.enabled===!0&&pe.isPresenting===!0&&(pe.cameraAutoUpdate===!0&&pe.updateCamera(U),U=pe.getCamera()),S.isScene===!0&&S.onBeforeRender(R,S,U,y),b=De.get(S,P.length),b.init(U),P.push(b),Ne.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),$.setFromProjectionMatrix(Ne,On,U.reversedDepth),Se=this.localClippingEnabled,ee=Ce.init(this.clippingPlanes,Se),C=ge.get(S,M.length),C.init(),M.push(C),pe.enabled===!0&&pe.isPresenting===!0){const ue=R.xr.getDepthSensingMesh();ue!==null&&$a(ue,U,-1/0,R.sortObjects)}$a(S,U,0,R.sortObjects),C.finish(),R.sortObjects===!0&&C.sort(Ee,We),ze=pe.enabled===!1||pe.isPresenting===!1||pe.hasDepthSensing()===!1,ze&&de.addToRenderList(C,S),this.info.render.frame++,ee===!0&&Ce.beginShadows();const G=b.state.shadowsArray;ie.render(G,S,U),ee===!0&&Ce.endShadows(),this.info.autoReset===!0&&this.info.reset();const X=C.opaque,B=C.transmissive;if(b.setupLights(),U.isArrayCamera){const ue=U.cameras;if(B.length>0)for(let ve=0,Ae=ue.length;ve<Ae;ve++){const Me=ue[ve];_m(X,B,S,Me)}ze&&de.render(S);for(let ve=0,Ae=ue.length;ve<Ae;ve++){const Me=ue[ve];xm(C,S,Me,Me.viewport)}}else B.length>0&&_m(X,B,S,U),ze&&de.render(S),xm(C,S,U);y!==null&&w===0&&(ye.updateMultisampleRenderTarget(y),ye.updateRenderTargetMipmap(y)),S.isScene===!0&&S.onAfterRender(R,S,U),D.resetDefaultState(),E=-1,O=null,P.pop(),P.length>0?(b=P[P.length-1],ee===!0&&Ce.setGlobalState(R.clippingPlanes,b.state.camera)):b=null,M.pop(),M.length>0?C=M[M.length-1]:C=null};function $a(S,U,G,X){if(S.visible===!1)return;if(S.layers.test(U.layers)){if(S.isGroup)G=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(U);else if(S.isLight)b.pushLight(S),S.castShadow&&b.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||$.intersectsSprite(S)){X&&Ze.setFromMatrixPosition(S.matrixWorld).applyMatrix4(Ne);const ve=Q.update(S),Ae=S.material;Ae.visible&&C.push(S,ve,Ae,G,Ze.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||$.intersectsObject(S))){const ve=Q.update(S),Ae=S.material;if(X&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),Ze.copy(S.boundingSphere.center)):(ve.boundingSphere===null&&ve.computeBoundingSphere(),Ze.copy(ve.boundingSphere.center)),Ze.applyMatrix4(S.matrixWorld).applyMatrix4(Ne)),Array.isArray(Ae)){const Me=ve.groups;for(let Be=0,He=Me.length;Be<He;Be++){const Oe=Me[Be],et=Ae[Oe.materialIndex];et&&et.visible&&C.push(S,ve,et,G,Ze.z,Oe)}}else Ae.visible&&C.push(S,ve,Ae,G,Ze.z,null)}}const ue=S.children;for(let ve=0,Ae=ue.length;ve<Ae;ve++)$a(ue[ve],U,G,X)}c($a,"projectObject");function xm(S,U,G,X){const{opaque:B,transmissive:ue,transparent:ve}=S;b.setupLightsView(G),ee===!0&&Ce.setGlobalState(R.clippingPlanes,G),X&&re.viewport(N.copy(X)),B.length>0&&oo(B,U,G),ue.length>0&&oo(ue,U,G),ve.length>0&&oo(ve,U,G),re.buffers.depth.setTest(!0),re.buffers.depth.setMask(!0),re.buffers.color.setMask(!0),re.setPolygonOffset(!1)}c(xm,"renderScene");function _m(S,U,G,X){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;b.state.transmissionRenderTarget[X.id]===void 0&&(b.state.transmissionRenderTarget[X.id]=new ti(1,1,{generateMipmaps:!0,type:ae.has("EXT_color_buffer_half_float")||ae.has("EXT_color_buffer_float")?sr:Nn,minFilter:Yn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:nt.workingColorSpace}));const ue=b.state.transmissionRenderTarget[X.id],ve=X.viewport||N;ue.setSize(ve.z*R.transmissionResolutionScale,ve.w*R.transmissionResolutionScale);const Ae=R.getRenderTarget(),Me=R.getActiveCubeFace(),Be=R.getActiveMipmapLevel();R.setRenderTarget(ue),R.getClearColor(W),K=R.getClearAlpha(),K<1&&R.setClearColor(16777215,.5),R.clear(),ze&&de.render(G);const He=R.toneMapping;R.toneMapping=fi;const Oe=X.viewport;if(X.viewport!==void 0&&(X.viewport=void 0),b.setupLightsView(X),ee===!0&&Ce.setGlobalState(R.clippingPlanes,X),oo(S,G,X),ye.updateMultisampleRenderTarget(ue),ye.updateRenderTargetMipmap(ue),ae.has("WEBGL_multisampled_render_to_texture")===!1){let et=!1;for(let ct=0,St=U.length;ct<St;ct++){const Mt=U[ct],{object:dt,geometry:Ue,material:_t,group:it}=Mt;if(_t.side===Sn&&dt.layers.test(X.layers)){const en=_t.side;_t.side=Jt,_t.needsUpdate=!0,vm(dt,G,X,Ue,_t,it),_t.side=en,_t.needsUpdate=!0,et=!0}}et===!0&&(ye.updateMultisampleRenderTarget(ue),ye.updateRenderTargetMipmap(ue))}R.setRenderTarget(Ae,Me,Be),R.setClearColor(W,K),Oe!==void 0&&(X.viewport=Oe),R.toneMapping=He}c(_m,"renderTransmissionPass");function oo(S,U,G){const X=U.isScene===!0?U.overrideMaterial:null;for(let B=0,ue=S.length;B<ue;B++){const ve=S[B],{object:Ae,geometry:Me,group:Be}=ve;let He=ve.material;He.allowOverride===!0&&X!==null&&(He=X),Ae.layers.test(G.layers)&&vm(Ae,U,G,Me,He,Be)}}c(oo,"renderObjects");function vm(S,U,G,X,B,ue){S.onBeforeRender(R,U,G,X,B,ue),S.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),B.onBeforeRender(R,U,G,X,S,ue),B.transparent===!0&&B.side===Sn&&B.forceSinglePass===!1?(B.side=Jt,B.needsUpdate=!0,R.renderBufferDirect(G,U,X,B,S,ue),B.side=Qn,B.needsUpdate=!0,R.renderBufferDirect(G,U,X,B,S,ue),B.side=Sn):R.renderBufferDirect(G,U,X,B,S,ue),S.onAfterRender(R,U,G,X,B,ue)}c(vm,"renderObject");function ao(S,U,G){U.isScene!==!0&&(U=ht);const X=me.get(S),B=b.state.lights,ue=b.state.shadowsArray,ve=B.state.version,Ae=q.getParameters(S,B.state,ue,U,G),Me=q.getProgramCacheKey(Ae);let Be=X.programs;X.environment=S.isMeshStandardMaterial?U.environment:null,X.fog=U.fog,X.envMap=(S.isMeshStandardMaterial?v:T).get(S.envMap||X.environment),X.envMapRotation=X.environment!==null&&S.envMap===null?U.environmentRotation:S.envMapRotation,Be===void 0&&(S.addEventListener("dispose",Xe),Be=new Map,X.programs=Be);let He=Be.get(Me);if(He!==void 0){if(X.currentProgram===He&&X.lightsStateVersion===ve)return ym(S,Ae),He}else Ae.uniforms=q.getUniforms(S),S.onBeforeCompile(Ae,R),He=q.acquireProgram(Ae,Me),Be.set(Me,He),X.uniforms=Ae.uniforms;const Oe=X.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Oe.clippingPlanes=Ce.uniform),ym(S,Ae),X.needsLights=Kg(S),X.lightsStateVersion=ve,X.needsLights&&(Oe.ambientLightColor.value=B.state.ambient,Oe.lightProbe.value=B.state.probe,Oe.directionalLights.value=B.state.directional,Oe.directionalLightShadows.value=B.state.directionalShadow,Oe.spotLights.value=B.state.spot,Oe.spotLightShadows.value=B.state.spotShadow,Oe.rectAreaLights.value=B.state.rectArea,Oe.ltc_1.value=B.state.rectAreaLTC1,Oe.ltc_2.value=B.state.rectAreaLTC2,Oe.pointLights.value=B.state.point,Oe.pointLightShadows.value=B.state.pointShadow,Oe.hemisphereLights.value=B.state.hemi,Oe.directionalShadowMap.value=B.state.directionalShadowMap,Oe.directionalShadowMatrix.value=B.state.directionalShadowMatrix,Oe.spotShadowMap.value=B.state.spotShadowMap,Oe.spotLightMatrix.value=B.state.spotLightMatrix,Oe.spotLightMap.value=B.state.spotLightMap,Oe.pointShadowMap.value=B.state.pointShadowMap,Oe.pointShadowMatrix.value=B.state.pointShadowMatrix),X.currentProgram=He,X.uniformsList=null,He}c(ao,"getProgram");function bm(S){if(S.uniformsList===null){const U=S.currentProgram.getUniforms();S.uniformsList=bs.seqWithValue(U.seq,S.uniforms)}return S.uniformsList}c(bm,"getUniformList");function ym(S,U){const G=me.get(S);G.outputColorSpace=U.outputColorSpace,G.batching=U.batching,G.batchingColor=U.batchingColor,G.instancing=U.instancing,G.instancingColor=U.instancingColor,G.instancingMorph=U.instancingMorph,G.skinning=U.skinning,G.morphTargets=U.morphTargets,G.morphNormals=U.morphNormals,G.morphColors=U.morphColors,G.morphTargetsCount=U.morphTargetsCount,G.numClippingPlanes=U.numClippingPlanes,G.numIntersection=U.numClipIntersection,G.vertexAlphas=U.vertexAlphas,G.vertexTangents=U.vertexTangents,G.toneMapping=U.toneMapping}c(ym,"updateCommonMaterialProperties");function Yg(S,U,G,X,B){U.isScene!==!0&&(U=ht),ye.resetTextureUnits();const ue=U.fog,ve=X.isMeshStandardMaterial?U.environment:null,Ae=y===null?R.outputColorSpace:y.isXRRenderTarget===!0?y.texture.colorSpace:jt,Me=(X.isMeshStandardMaterial?v:T).get(X.envMap||ve),Be=X.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,He=!!G.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),Oe=!!G.morphAttributes.position,et=!!G.morphAttributes.normal,ct=!!G.morphAttributes.color;let St=fi;X.toneMapped&&(y===null||y.isXRRenderTarget===!0)&&(St=R.toneMapping);const Mt=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,dt=Mt!==void 0?Mt.length:0,Ue=me.get(X),_t=b.state.lights;if(ee===!0&&(Se===!0||S!==O)){const Ht=S===O&&X.id===E;Ce.setState(X,S,Ht)}let it=!1;X.version===Ue.__version?(Ue.needsLights&&Ue.lightsStateVersion!==_t.state.version||Ue.outputColorSpace!==Ae||B.isBatchedMesh&&Ue.batching===!1||!B.isBatchedMesh&&Ue.batching===!0||B.isBatchedMesh&&Ue.batchingColor===!0&&B.colorTexture===null||B.isBatchedMesh&&Ue.batchingColor===!1&&B.colorTexture!==null||B.isInstancedMesh&&Ue.instancing===!1||!B.isInstancedMesh&&Ue.instancing===!0||B.isSkinnedMesh&&Ue.skinning===!1||!B.isSkinnedMesh&&Ue.skinning===!0||B.isInstancedMesh&&Ue.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&Ue.instancingColor===!1&&B.instanceColor!==null||B.isInstancedMesh&&Ue.instancingMorph===!0&&B.morphTexture===null||B.isInstancedMesh&&Ue.instancingMorph===!1&&B.morphTexture!==null||Ue.envMap!==Me||X.fog===!0&&Ue.fog!==ue||Ue.numClippingPlanes!==void 0&&(Ue.numClippingPlanes!==Ce.numPlanes||Ue.numIntersection!==Ce.numIntersection)||Ue.vertexAlphas!==Be||Ue.vertexTangents!==He||Ue.morphTargets!==Oe||Ue.morphNormals!==et||Ue.morphColors!==ct||Ue.toneMapping!==St||Ue.morphTargetsCount!==dt)&&(it=!0):(it=!0,Ue.__version=X.version);let en=Ue.currentProgram;it===!0&&(en=ao(X,U,B));let Yi=!1,tn=!1,or=!1;const vt=en.getUniforms(),$t=Ue.uniforms;if(re.useProgram(en.program)&&(Yi=!0,tn=!0,or=!0),X.id!==E&&(E=X.id,tn=!0),Yi||O!==S){re.buffers.depth.getReversed()&&S.reversedDepth!==!0&&(S._reversedDepth=!0,S.updateProjectionMatrix()),vt.setValue(A,"projectionMatrix",S.projectionMatrix),vt.setValue(A,"viewMatrix",S.matrixWorldInverse);const Kt=vt.map.cameraPosition;Kt!==void 0&&Kt.setValue(A,Re.setFromMatrixPosition(S.matrixWorld)),he.logarithmicDepthBuffer&&vt.setValue(A,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&vt.setValue(A,"isOrthographic",S.isOrthographicCamera===!0),O!==S&&(O=S,tn=!0,or=!0)}if(B.isSkinnedMesh){vt.setOptional(A,B,"bindMatrix"),vt.setOptional(A,B,"bindMatrixInverse");const Ht=B.skeleton;Ht&&(Ht.boneTexture===null&&Ht.computeBoneTexture(),vt.setValue(A,"boneTexture",Ht.boneTexture,ye))}B.isBatchedMesh&&(vt.setOptional(A,B,"batchingTexture"),vt.setValue(A,"batchingTexture",B._matricesTexture,ye),vt.setOptional(A,B,"batchingIdTexture"),vt.setValue(A,"batchingIdTexture",B._indirectTexture,ye),vt.setOptional(A,B,"batchingColorTexture"),B._colorsTexture!==null&&vt.setValue(A,"batchingColorTexture",B._colorsTexture,ye));const ln=G.morphAttributes;if((ln.position!==void 0||ln.normal!==void 0||ln.color!==void 0)&&ke.update(B,G,en),(tn||Ue.receiveShadow!==B.receiveShadow)&&(Ue.receiveShadow=B.receiveShadow,vt.setValue(A,"receiveShadow",B.receiveShadow)),X.isMeshGouraudMaterial&&X.envMap!==null&&($t.envMap.value=Me,$t.flipEnvMap.value=Me.isCubeTexture&&Me.isRenderTargetTexture===!1?-1:1),X.isMeshStandardMaterial&&X.envMap===null&&U.environment!==null&&($t.envMapIntensity.value=U.environmentIntensity),$t.dfgLUT!==void 0&&($t.dfgLUT.value=RE()),tn&&(vt.setValue(A,"toneMappingExposure",R.toneMappingExposure),Ue.needsLights&&$g($t,or),ue&&X.fog===!0&&Pe.refreshFogUniforms($t,ue),Pe.refreshMaterialUniforms($t,X,le,se,b.state.transmissionRenderTarget[S.id]),bs.upload(A,bm(Ue),$t,ye)),X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(bs.upload(A,bm(Ue),$t,ye),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&vt.setValue(A,"center",B.center),vt.setValue(A,"modelViewMatrix",B.modelViewMatrix),vt.setValue(A,"normalMatrix",B.normalMatrix),vt.setValue(A,"modelMatrix",B.matrixWorld),X.isShaderMaterial||X.isRawShaderMaterial){const Ht=X.uniformsGroups;for(let Kt=0,Ka=Ht.length;Kt<Ka;Kt++){const Ti=Ht[Kt];_e.update(Ti,en),_e.bind(Ti,en)}}return en}c(Yg,"setProgram");function $g(S,U){S.ambientLightColor.needsUpdate=U,S.lightProbe.needsUpdate=U,S.directionalLights.needsUpdate=U,S.directionalLightShadows.needsUpdate=U,S.pointLights.needsUpdate=U,S.pointLightShadows.needsUpdate=U,S.spotLights.needsUpdate=U,S.spotLightShadows.needsUpdate=U,S.rectAreaLights.needsUpdate=U,S.hemisphereLights.needsUpdate=U}c($g,"markUniformsLightsNeedsUpdate");function Kg(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}c(Kg,"materialNeedsLights"),this.getActiveCubeFace=function(){return F},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return y},this.setRenderTargetTextures=function(S,U,G){const X=me.get(S);X.__autoAllocateDepthBuffer=S.resolveDepthBuffer===!1,X.__autoAllocateDepthBuffer===!1&&(X.__useRenderToTexture=!1),me.get(S.texture).__webglTexture=U,me.get(S.depthTexture).__webglTexture=X.__autoAllocateDepthBuffer?void 0:G,X.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(S,U){const G=me.get(S);G.__webglFramebuffer=U,G.__useDefaultFramebuffer=U===void 0};const Jg=A.createFramebuffer();this.setRenderTarget=function(S,U=0,G=0){y=S,F=U,w=G;let X=!0,B=null,ue=!1,ve=!1;if(S){const Me=me.get(S);if(Me.__useDefaultFramebuffer!==void 0)re.bindFramebuffer(A.FRAMEBUFFER,null),X=!1;else if(Me.__webglFramebuffer===void 0)ye.setupRenderTarget(S);else if(Me.__hasExternalTextures)ye.rebindTextures(S,me.get(S.texture).__webglTexture,me.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){const Oe=S.depthTexture;if(Me.__boundDepthTexture!==Oe){if(Oe!==null&&me.has(Oe)&&(S.width!==Oe.image.width||S.height!==Oe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");ye.setupDepthRenderbuffer(S)}}const Be=S.texture;(Be.isData3DTexture||Be.isDataArrayTexture||Be.isCompressedArrayTexture)&&(ve=!0);const He=me.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(He[U])?B=He[U][G]:B=He[U],ue=!0):S.samples>0&&ye.useMultisampledRTT(S)===!1?B=me.get(S).__webglMultisampledFramebuffer:Array.isArray(He)?B=He[G]:B=He,N.copy(S.viewport),H.copy(S.scissor),z=S.scissorTest}else N.copy(je).multiplyScalar(le).floor(),H.copy(tt).multiplyScalar(le).floor(),z=st;if(G!==0&&(B=Jg),re.bindFramebuffer(A.FRAMEBUFFER,B)&&X&&re.drawBuffers(S,B),re.viewport(N),re.scissor(H),re.setScissorTest(z),ue){const Me=me.get(S.texture);A.framebufferTexture2D(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_CUBE_MAP_POSITIVE_X+U,Me.__webglTexture,G)}else if(ve){const Me=U;for(let Be=0;Be<S.textures.length;Be++){const He=me.get(S.textures[Be]);A.framebufferTextureLayer(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0+Be,He.__webglTexture,G,Me)}}else if(S!==null&&G!==0){const Me=me.get(S.texture);A.framebufferTexture2D(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_2D,Me.__webglTexture,G)}E=-1},this.readRenderTargetPixels=function(S,U,G,X,B,ue,ve,Ae=0){if(!(S&&S.isWebGLRenderTarget)){Ke("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Me=me.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&ve!==void 0&&(Me=Me[ve]),Me){re.bindFramebuffer(A.FRAMEBUFFER,Me);try{const Be=S.textures[Ae],He=Be.format,Oe=Be.type;if(!he.textureFormatReadable(He)){Ke("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!he.textureTypeReadable(Oe)){Ke("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=S.width-X&&G>=0&&G<=S.height-B&&(S.textures.length>1&&A.readBuffer(A.COLOR_ATTACHMENT0+Ae),A.readPixels(U,G,X,B,Ve.convert(He),Ve.convert(Oe),ue))}finally{const Be=y!==null?me.get(y).__webglFramebuffer:null;re.bindFramebuffer(A.FRAMEBUFFER,Be)}}},this.readRenderTargetPixelsAsync=async function(S,U,G,X,B,ue,ve,Ae=0){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Me=me.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&ve!==void 0&&(Me=Me[ve]),Me)if(U>=0&&U<=S.width-X&&G>=0&&G<=S.height-B){re.bindFramebuffer(A.FRAMEBUFFER,Me);const Be=S.textures[Ae],He=Be.format,Oe=Be.type;if(!he.textureFormatReadable(He))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!he.textureTypeReadable(Oe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const et=A.createBuffer();A.bindBuffer(A.PIXEL_PACK_BUFFER,et),A.bufferData(A.PIXEL_PACK_BUFFER,ue.byteLength,A.STREAM_READ),S.textures.length>1&&A.readBuffer(A.COLOR_ATTACHMENT0+Ae),A.readPixels(U,G,X,B,Ve.convert(He),Ve.convert(Oe),0);const ct=y!==null?me.get(y).__webglFramebuffer:null;re.bindFramebuffer(A.FRAMEBUFFER,ct);const St=A.fenceSync(A.SYNC_GPU_COMMANDS_COMPLETE,0);return A.flush(),await E_(A,St,4),A.bindBuffer(A.PIXEL_PACK_BUFFER,et),A.getBufferSubData(A.PIXEL_PACK_BUFFER,0,ue),A.deleteBuffer(et),A.deleteSync(St),ue}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(S,U=null,G=0){const X=Math.pow(2,-G),B=Math.floor(S.image.width*X),ue=Math.floor(S.image.height*X),ve=U!==null?U.x:0,Ae=U!==null?U.y:0;ye.setTexture2D(S,0),A.copyTexSubImage2D(A.TEXTURE_2D,G,0,0,ve,Ae,B,ue),re.unbindTexture()};const Zg=A.createFramebuffer(),Qg=A.createFramebuffer();this.copyTextureToTexture=function(S,U,G=null,X=null,B=0,ue=null){ue===null&&(B!==0?(Hr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ue=B,B=0):ue=0);let ve,Ae,Me,Be,He,Oe,et,ct,St;const Mt=S.isCompressedTexture?S.mipmaps[ue]:S.image;if(G!==null)ve=G.max.x-G.min.x,Ae=G.max.y-G.min.y,Me=G.isBox3?G.max.z-G.min.z:1,Be=G.min.x,He=G.min.y,Oe=G.isBox3?G.min.z:0;else{const ln=Math.pow(2,-B);ve=Math.floor(Mt.width*ln),Ae=Math.floor(Mt.height*ln),S.isDataArrayTexture?Me=Mt.depth:S.isData3DTexture?Me=Math.floor(Mt.depth*ln):Me=1,Be=0,He=0,Oe=0}X!==null?(et=X.x,ct=X.y,St=X.z):(et=0,ct=0,St=0);const dt=Ve.convert(U.format),Ue=Ve.convert(U.type);let _t;U.isData3DTexture?(ye.setTexture3D(U,0),_t=A.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(ye.setTexture2DArray(U,0),_t=A.TEXTURE_2D_ARRAY):(ye.setTexture2D(U,0),_t=A.TEXTURE_2D),A.pixelStorei(A.UNPACK_FLIP_Y_WEBGL,U.flipY),A.pixelStorei(A.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),A.pixelStorei(A.UNPACK_ALIGNMENT,U.unpackAlignment);const it=A.getParameter(A.UNPACK_ROW_LENGTH),en=A.getParameter(A.UNPACK_IMAGE_HEIGHT),Yi=A.getParameter(A.UNPACK_SKIP_PIXELS),tn=A.getParameter(A.UNPACK_SKIP_ROWS),or=A.getParameter(A.UNPACK_SKIP_IMAGES);A.pixelStorei(A.UNPACK_ROW_LENGTH,Mt.width),A.pixelStorei(A.UNPACK_IMAGE_HEIGHT,Mt.height),A.pixelStorei(A.UNPACK_SKIP_PIXELS,Be),A.pixelStorei(A.UNPACK_SKIP_ROWS,He),A.pixelStorei(A.UNPACK_SKIP_IMAGES,Oe);const vt=S.isDataArrayTexture||S.isData3DTexture,$t=U.isDataArrayTexture||U.isData3DTexture;if(S.isDepthTexture){const ln=me.get(S),Ht=me.get(U),Kt=me.get(ln.__renderTarget),Ka=me.get(Ht.__renderTarget);re.bindFramebuffer(A.READ_FRAMEBUFFER,Kt.__webglFramebuffer),re.bindFramebuffer(A.DRAW_FRAMEBUFFER,Ka.__webglFramebuffer);for(let Ti=0;Ti<Me;Ti++)vt&&(A.framebufferTextureLayer(A.READ_FRAMEBUFFER,A.COLOR_ATTACHMENT0,me.get(S).__webglTexture,B,Oe+Ti),A.framebufferTextureLayer(A.DRAW_FRAMEBUFFER,A.COLOR_ATTACHMENT0,me.get(U).__webglTexture,ue,St+Ti)),A.blitFramebuffer(Be,He,ve,Ae,et,ct,ve,Ae,A.DEPTH_BUFFER_BIT,A.NEAREST);re.bindFramebuffer(A.READ_FRAMEBUFFER,null),re.bindFramebuffer(A.DRAW_FRAMEBUFFER,null)}else if(B!==0||S.isRenderTargetTexture||me.has(S)){const ln=me.get(S),Ht=me.get(U);re.bindFramebuffer(A.READ_FRAMEBUFFER,Zg),re.bindFramebuffer(A.DRAW_FRAMEBUFFER,Qg);for(let Kt=0;Kt<Me;Kt++)vt?A.framebufferTextureLayer(A.READ_FRAMEBUFFER,A.COLOR_ATTACHMENT0,ln.__webglTexture,B,Oe+Kt):A.framebufferTexture2D(A.READ_FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_2D,ln.__webglTexture,B),$t?A.framebufferTextureLayer(A.DRAW_FRAMEBUFFER,A.COLOR_ATTACHMENT0,Ht.__webglTexture,ue,St+Kt):A.framebufferTexture2D(A.DRAW_FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_2D,Ht.__webglTexture,ue),B!==0?A.blitFramebuffer(Be,He,ve,Ae,et,ct,ve,Ae,A.COLOR_BUFFER_BIT,A.NEAREST):$t?A.copyTexSubImage3D(_t,ue,et,ct,St+Kt,Be,He,ve,Ae):A.copyTexSubImage2D(_t,ue,et,ct,Be,He,ve,Ae);re.bindFramebuffer(A.READ_FRAMEBUFFER,null),re.bindFramebuffer(A.DRAW_FRAMEBUFFER,null)}else $t?S.isDataTexture||S.isData3DTexture?A.texSubImage3D(_t,ue,et,ct,St,ve,Ae,Me,dt,Ue,Mt.data):U.isCompressedArrayTexture?A.compressedTexSubImage3D(_t,ue,et,ct,St,ve,Ae,Me,dt,Mt.data):A.texSubImage3D(_t,ue,et,ct,St,ve,Ae,Me,dt,Ue,Mt):S.isDataTexture?A.texSubImage2D(A.TEXTURE_2D,ue,et,ct,ve,Ae,dt,Ue,Mt.data):S.isCompressedTexture?A.compressedTexSubImage2D(A.TEXTURE_2D,ue,et,ct,Mt.width,Mt.height,dt,Mt.data):A.texSubImage2D(A.TEXTURE_2D,ue,et,ct,ve,Ae,dt,Ue,Mt);A.pixelStorei(A.UNPACK_ROW_LENGTH,it),A.pixelStorei(A.UNPACK_IMAGE_HEIGHT,en),A.pixelStorei(A.UNPACK_SKIP_PIXELS,Yi),A.pixelStorei(A.UNPACK_SKIP_ROWS,tn),A.pixelStorei(A.UNPACK_SKIP_IMAGES,or),ue===0&&U.generateMipmaps&&A.generateMipmap(_t),re.unbindTexture()},this.initRenderTarget=function(S){me.get(S).__webglFramebuffer===void 0&&ye.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?ye.setTextureCube(S,0):S.isData3DTexture?ye.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?ye.setTexture2DArray(S,0):ye.setTexture2D(S,0),re.unbindTexture()},this.resetState=function(){F=0,w=0,y=null,re.reset(),D.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return On}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=nt._getDrawingBufferColorSpace(e),t.unpackColorSpace=nt._getUnpackColorSpace()}};c(xp,"WebGLRenderer");let Lu=xp;var pi=Object.freeze({Linear:Object.freeze({None:c(function(s){return s},"None"),In:c(function(s){return s},"In"),Out:c(function(s){return s},"Out"),InOut:c(function(s){return s},"InOut")}),Quadratic:Object.freeze({In:c(function(s){return s*s},"In"),Out:c(function(s){return s*(2-s)},"Out"),InOut:c(function(s){return(s*=2)<1?.5*s*s:-.5*(--s*(s-2)-1)},"InOut")}),Cubic:Object.freeze({In:c(function(s){return s*s*s},"In"),Out:c(function(s){return--s*s*s+1},"Out"),InOut:c(function(s){return(s*=2)<1?.5*s*s*s:.5*((s-=2)*s*s+2)},"InOut")}),Quartic:Object.freeze({In:c(function(s){return s*s*s*s},"In"),Out:c(function(s){return 1- --s*s*s*s},"Out"),InOut:c(function(s){return(s*=2)<1?.5*s*s*s*s:-.5*((s-=2)*s*s*s-2)},"InOut")}),Quintic:Object.freeze({In:c(function(s){return s*s*s*s*s},"In"),Out:c(function(s){return--s*s*s*s*s+1},"Out"),InOut:c(function(s){return(s*=2)<1?.5*s*s*s*s*s:.5*((s-=2)*s*s*s*s+2)},"InOut")}),Sinusoidal:Object.freeze({In:c(function(s){return 1-Math.sin((1-s)*Math.PI/2)},"In"),Out:c(function(s){return Math.sin(s*Math.PI/2)},"Out"),InOut:c(function(s){return .5*(1-Math.sin(Math.PI*(.5-s)))},"InOut")}),Exponential:Object.freeze({In:c(function(s){return s===0?0:Math.pow(1024,s-1)},"In"),Out:c(function(s){return s===1?1:1-Math.pow(2,-10*s)},"Out"),InOut:c(function(s){return s===0?0:s===1?1:(s*=2)<1?.5*Math.pow(1024,s-1):.5*(-Math.pow(2,-10*(s-1))+2)},"InOut")}),Circular:Object.freeze({In:c(function(s){return 1-Math.sqrt(1-s*s)},"In"),Out:c(function(s){return Math.sqrt(1- --s*s)},"Out"),InOut:c(function(s){return(s*=2)<1?-.5*(Math.sqrt(1-s*s)-1):.5*(Math.sqrt(1-(s-=2)*s)+1)},"InOut")}),Elastic:Object.freeze({In:c(function(s){return s===0?0:s===1?1:-Math.pow(2,10*(s-1))*Math.sin((s-1.1)*5*Math.PI)},"In"),Out:c(function(s){return s===0?0:s===1?1:Math.pow(2,-10*s)*Math.sin((s-.1)*5*Math.PI)+1},"Out"),InOut:c(function(s){return s===0?0:s===1?1:(s*=2,s<1?-.5*Math.pow(2,10*(s-1))*Math.sin((s-1.1)*5*Math.PI):.5*Math.pow(2,-10*(s-1))*Math.sin((s-1.1)*5*Math.PI)+1)},"InOut")}),Back:Object.freeze({In:c(function(s){var e=1.70158;return s===1?1:s*s*((e+1)*s-e)},"In"),Out:c(function(s){var e=1.70158;return s===0?0:--s*s*((e+1)*s+e)+1},"Out"),InOut:c(function(s){var e=2.5949095;return(s*=2)<1?.5*(s*s*((e+1)*s-e)):.5*((s-=2)*s*((e+1)*s+e)+2)},"InOut")}),Bounce:Object.freeze({In:c(function(s){return 1-pi.Bounce.Out(1-s)},"In"),Out:c(function(s){return s<1/2.75?7.5625*s*s:s<2/2.75?7.5625*(s-=1.5/2.75)*s+.75:s<2.5/2.75?7.5625*(s-=2.25/2.75)*s+.9375:7.5625*(s-=2.625/2.75)*s+.984375},"Out"),InOut:c(function(s){return s<.5?pi.Bounce.In(s*2)*.5:pi.Bounce.Out(s*2-1)*.5+.5},"InOut")}),generatePow:c(function(s){return s===void 0&&(s=4),s=s<Number.EPSILON?Number.EPSILON:s,s=s>1e4?1e4:s,{In:c(function(e){return Math.pow(e,s)},"In"),Out:c(function(e){return 1-Math.pow(1-e,s)},"Out"),InOut:c(function(e){return e<.5?Math.pow(e*2,s)/2:(1-Math.pow(2-e*2,s))/2+.5},"InOut")}},"generatePow")}),Sr=c(function(){return performance.now()},"now"),Ng=function(){function s(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this._tweens={},this._tweensAddedDuringUpdate={},this.add.apply(this,e)}return c(s,"Group"),s.prototype.getAll=function(){var e=this;return Object.keys(this._tweens).map(function(t){return e._tweens[t]})},s.prototype.removeAll=function(){this._tweens={}},s.prototype.add=function(){for(var e,t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];for(var i=0,r=t;i<r.length;i++){var o=r[i];(e=o._group)===null||e===void 0||e.remove(o),o._group=this,this._tweens[o.getId()]=o,this._tweensAddedDuringUpdate[o.getId()]=o}},s.prototype.remove=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];for(var n=0,i=e;n<i.length;n++){var r=i[n];r._group=void 0,delete this._tweens[r.getId()],delete this._tweensAddedDuringUpdate[r.getId()]}},s.prototype.allStopped=function(){return this.getAll().every(function(e){return!e.isPlaying()})},s.prototype.update=function(e,t){e===void 0&&(e=Sr()),t===void 0&&(t=!0);var n=Object.keys(this._tweens);if(n.length!==0)for(;n.length>0;){this._tweensAddedDuringUpdate={};for(var i=0;i<n.length;i++){var r=this._tweens[n[i]],o=!t;r&&r.update(e,o)===!1&&!t&&this.remove(r)}n=Object.keys(this._tweensAddedDuringUpdate)}},s}(),Iu={Linear:c(function(s,e){var t=s.length-1,n=t*e,i=Math.floor(n),r=Iu.Utils.Linear;return e<0?r(s[0],s[1],n):e>1?r(s[t],s[t-1],t-n):r(s[i],s[i+1>t?t:i+1],n-i)},"Linear"),Utils:{Linear:c(function(s,e,t){return(e-s)*t+s},"Linear")}},Ug=function(){function s(){}return c(s,"Sequence"),s.nextId=function(){return s._nextId++},s._nextId=0,s}(),Du=new Ng,Dc=function(){function s(e,t){this._isPaused=!1,this._pauseStart=0,this._valuesStart={},this._valuesEnd={},this._valuesStartRepeat={},this._duration=1e3,this._isDynamic=!1,this._initialRepeat=0,this._repeat=0,this._yoyo=!1,this._isPlaying=!1,this._reversed=!1,this._delayTime=0,this._startTime=0,this._easingFunction=pi.Linear.None,this._interpolationFunction=Iu.Linear,this._chainedTweens=[],this._onStartCallbackFired=!1,this._onEveryStartCallbackFired=!1,this._id=Ug.nextId(),this._isChainStopped=!1,this._propertiesAreSetUp=!1,this._goToEnd=!1,this._object=e,typeof t=="object"?(this._group=t,t.add(this)):t===!0&&(this._group=Du,Du.add(this))}return c(s,"Tween"),s.prototype.getId=function(){return this._id},s.prototype.isPlaying=function(){return this._isPlaying},s.prototype.isPaused=function(){return this._isPaused},s.prototype.getDuration=function(){return this._duration},s.prototype.to=function(e,t){if(t===void 0&&(t=1e3),this._isPlaying)throw new Error("Can not call Tween.to() while Tween is already started or paused. Stop the Tween first.");return this._valuesEnd=e,this._propertiesAreSetUp=!1,this._duration=t<0?0:t,this},s.prototype.duration=function(e){return e===void 0&&(e=1e3),this._duration=e<0?0:e,this},s.prototype.dynamic=function(e){return e===void 0&&(e=!1),this._isDynamic=e,this},s.prototype.start=function(e,t){if(e===void 0&&(e=Sr()),t===void 0&&(t=!1),this._isPlaying)return this;if(this._repeat=this._initialRepeat,this._reversed){this._reversed=!1;for(var n in this._valuesStartRepeat)this._swapEndStartRepeatValues(n),this._valuesStart[n]=this._valuesStartRepeat[n]}if(this._isPlaying=!0,this._isPaused=!1,this._onStartCallbackFired=!1,this._onEveryStartCallbackFired=!1,this._isChainStopped=!1,this._startTime=e,this._startTime+=this._delayTime,!this._propertiesAreSetUp||t){if(this._propertiesAreSetUp=!0,!this._isDynamic){var i={};for(var r in this._valuesEnd)i[r]=this._valuesEnd[r];this._valuesEnd=i}this._setupProperties(this._object,this._valuesStart,this._valuesEnd,this._valuesStartRepeat,t)}return this},s.prototype.startFromCurrentValues=function(e){return this.start(e,!0)},s.prototype._setupProperties=function(e,t,n,i,r){for(var o in n){var a=e[o],l=Array.isArray(a),u=l?"array":typeof a,h=!l&&Array.isArray(n[o]);if(!(u==="undefined"||u==="function")){if(h){var d=n[o];if(d.length===0)continue;for(var f=[a],p=0,x=d.length;p<x;p+=1){var _=this._handleRelativeValue(a,d[p]);if(isNaN(_)){h=!1,console.warn("Found invalid interpolation list. Skipping.");break}f.push(_)}h&&(n[o]=f)}if((u==="object"||l)&&a&&!h){t[o]=l?[]:{};var g=a;for(var m in g)t[o][m]=g[m];i[o]=l?[]:{};var d=n[o];if(!this._isDynamic){var C={};for(var m in d)C[m]=d[m];n[o]=d=C}this._setupProperties(g,t[o],d,i[o],r)}else(typeof t[o]>"u"||r)&&(t[o]=a),l||(t[o]*=1),h?i[o]=n[o].slice().reverse():i[o]=t[o]||0}}},s.prototype.stop=function(){return this._isChainStopped||(this._isChainStopped=!0,this.stopChainedTweens()),this._isPlaying?(this._isPlaying=!1,this._isPaused=!1,this._onStopCallback&&this._onStopCallback(this._object),this):this},s.prototype.end=function(){return this._goToEnd=!0,this.update(this._startTime+this._duration),this},s.prototype.pause=function(e){return e===void 0&&(e=Sr()),this._isPaused||!this._isPlaying?this:(this._isPaused=!0,this._pauseStart=e,this)},s.prototype.resume=function(e){return e===void 0&&(e=Sr()),!this._isPaused||!this._isPlaying?this:(this._isPaused=!1,this._startTime+=e-this._pauseStart,this._pauseStart=0,this)},s.prototype.stopChainedTweens=function(){for(var e=0,t=this._chainedTweens.length;e<t;e++)this._chainedTweens[e].stop();return this},s.prototype.group=function(e){return e?(e.add(this),this):(console.warn("tween.group() without args has been removed, use group.add(tween) instead."),this)},s.prototype.remove=function(){var e;return(e=this._group)===null||e===void 0||e.remove(this),this},s.prototype.delay=function(e){return e===void 0&&(e=0),this._delayTime=e,this},s.prototype.repeat=function(e){return e===void 0&&(e=0),this._initialRepeat=e,this._repeat=e,this},s.prototype.repeatDelay=function(e){return this._repeatDelayTime=e,this},s.prototype.yoyo=function(e){return e===void 0&&(e=!1),this._yoyo=e,this},s.prototype.easing=function(e){return e===void 0&&(e=pi.Linear.None),this._easingFunction=e,this},s.prototype.interpolation=function(e){return e===void 0&&(e=Iu.Linear),this._interpolationFunction=e,this},s.prototype.chain=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return this._chainedTweens=e,this},s.prototype.onStart=function(e){return this._onStartCallback=e,this},s.prototype.onEveryStart=function(e){return this._onEveryStartCallback=e,this},s.prototype.onUpdate=function(e){return this._onUpdateCallback=e,this},s.prototype.onRepeat=function(e){return this._onRepeatCallback=e,this},s.prototype.onComplete=function(e){return this._onCompleteCallback=e,this},s.prototype.onStop=function(e){return this._onStopCallback=e,this},s.prototype.update=function(e,t){var n=this,i;if(e===void 0&&(e=Sr()),t===void 0&&(t=s.autoStartOnUpdate),this._isPaused)return!0;var r;if(!this._goToEnd&&!this._isPlaying)if(t)this.start(e,!0);else return!1;if(this._goToEnd=!1,e<this._startTime)return!0;this._onStartCallbackFired===!1&&(this._onStartCallback&&this._onStartCallback(this._object),this._onStartCallbackFired=!0),this._onEveryStartCallbackFired===!1&&(this._onEveryStartCallback&&this._onEveryStartCallback(this._object),this._onEveryStartCallbackFired=!0);var o=e-this._startTime,a=this._duration+((i=this._repeatDelayTime)!==null&&i!==void 0?i:this._delayTime),l=this._duration+this._repeat*a,u=c(function(){if(n._duration===0||o>l)return 1;var _=Math.trunc(o/a),g=o-_*a,m=Math.min(g/n._duration,1);return m===0&&o===n._duration?1:m},"calculateElapsedPortion"),h=u(),d=this._easingFunction(h);if(this._updateProperties(this._object,this._valuesStart,this._valuesEnd,d),this._onUpdateCallback&&this._onUpdateCallback(this._object,h),this._duration===0||o>=this._duration)if(this._repeat>0){var f=Math.min(Math.trunc((o-this._duration)/a)+1,this._repeat);isFinite(this._repeat)&&(this._repeat-=f);for(r in this._valuesStartRepeat)!this._yoyo&&typeof this._valuesEnd[r]=="string"&&(this._valuesStartRepeat[r]=this._valuesStartRepeat[r]+parseFloat(this._valuesEnd[r])),this._yoyo&&this._swapEndStartRepeatValues(r),this._valuesStart[r]=this._valuesStartRepeat[r];return this._yoyo&&(this._reversed=!this._reversed),this._startTime+=a*f,this._onRepeatCallback&&this._onRepeatCallback(this._object),this._onEveryStartCallbackFired=!1,!0}else{this._onCompleteCallback&&this._onCompleteCallback(this._object);for(var p=0,x=this._chainedTweens.length;p<x;p++)this._chainedTweens[p].start(this._startTime+this._duration,!1);return this._isPlaying=!1,!1}return!0},s.prototype._updateProperties=function(e,t,n,i){for(var r in n)if(t[r]!==void 0){var o=t[r]||0,a=n[r],l=Array.isArray(e[r]),u=Array.isArray(a),h=!l&&u;h?e[r]=this._interpolationFunction(a,i):typeof a=="object"&&a?this._updateProperties(e[r],o,a,i):(a=this._handleRelativeValue(o,a),typeof a=="number"&&(e[r]=o+(a-o)*i))}},s.prototype._handleRelativeValue=function(e,t){return typeof t!="string"?t:t.charAt(0)==="+"||t.charAt(0)==="-"?e+parseFloat(t):parseFloat(t)},s.prototype._swapEndStartRepeatValues=function(e){var t=this._valuesStartRepeat[e],n=this._valuesEnd[e];typeof n=="string"?this._valuesStartRepeat[e]=this._valuesStartRepeat[e]+parseFloat(n):this._valuesStartRepeat[e]=this._valuesEnd[e],this._valuesEnd[e]=t},s.autoStartOnUpdate=!1,s}();Ug.nextId;var Fn=Du;Fn.getAll.bind(Fn);Fn.removeAll.bind(Fn);Fn.add.bind(Fn);Fn.remove.bind(Fn);Fn.update.bind(Fn);const _p=class _p{constructor(){this.tweenGroup=new Ng}update(){this.tweenGroup.update()}animateObjectToTarget(e,t,n,i={duration:1e3}){const r=[];if(t){const o=new Dc(e.position).to(t);r.push(o)}if(n){const o=new Dc(e.quaternion).to(n);r.push(o)}r.forEach(o=>{i?.duration&&o.duration(i?.duration),i?.easing&&o.easing(i?.easing),o.start()}),this.tweenGroup.add(...r)}createTween(e,t,n){const i=new Dc(e).to(t);return n?.duration&&i.duration(n.duration),n?.easing&&i.easing(n.easing),this.tweenGroup.add(i),i}removeTween(e){this.tweenGroup.remove(e)}};c(_p,"ThreeAnimator");let Ou=_p;var ya=c(function(s,e,t,n){var i=this;this.object=s,this.trackballRadius=e,this.camera=t,this.domElement=n!==void 0?n:document,this.enabled=!0,this.rotateSensitivity=1,this.relativelySpinOffTrackball=!0,this.enableDamping=!0,this.dampingFactor=5,this.spinAxisConstraint,this.POINTER_SPHERE_MAPPING={SHOEMAKE:"shoemake",HOLROYD:"holroyd",AZIMUTHAL:"azimuthal",RAYCAST:"raycast"},this.offTrackBallVelocityGainMap={shoemake:20,holroyd:8,azimuthal:8,raycast:20},this._pointerMapping=this.POINTER_SPHERE_MAPPING.RAYCAST,this._offTrackBallVelocityGain=this.offTrackBallVelocityGainMap[this._pointerMapping],this._pointerUpVelDamping=2e3,this.screen={left:0,top:0,width:0,height:0};var r=new L(0,0,0),o=new At,a,l=new L,u=new ce,h=new L,d=0,f=!1,p=!1,x=1e-6,_={type:"change"},g={type:"start"},m={type:"end"};this.update=function(){var E,O=performance.now()/1e3,N;return c(function(){E=performance.now()/1e3,N=E-O,O=E,i.enableDamping&&(r.multiplyScalar(1/(N*i.dampingFactor+1)),i.applyVelocity()),i.enableDamping||(a=performance.now()),i.hasPointerMovedThisFrame=!1},"update")}(),this.updateAngularVelocity=function(){var E=new At,O=new At,N=new At;return c(function(z,W,K){N.set(W.x,W.y,W.z,0),N.normalize(),N.conjugate(),O.set(z.x,z.y,z.z,0).multiply(N),K*=2,E.set(W.x,W.y,W.z,1);var j=O.angleTo(E)/K;r.crossVectors(W,z),r.setLength(j),i.applyVelocity()},"updateAngularVelocity")}(),this.applyVelocity=function(){var E=new At,O=new L,N,H,z;return c(function(){z=performance.now(),H=(z-a)/1e3,a=z,i.spinAxisConstraint?(O.copy(i.spinAxisConstraint),N=O.dot(r)):(O.copy(r),N=r.length()),N&&H&&(O.normalize(),E.setFromAxisAngle(O,N*H*i.rotateSensitivity),i.object.quaternion.normalize(),i.object.quaternion.premultiply(E),8*(1-o.dot(i.object.quaternion))>x&&(i.dispatchEvent(_),o.copy(i.object.quaternion)))},"applyVelocity")}(),this.onWindowResize=function(){if(i.domElement===document)i.screen.left=0,i.screen.top=0,i.screen.width=window.innerWidth,i.screen.height=window.innerHeight;else{var E=i.domElement.getBoundingClientRect(),O=i.domElement.ownerDocument.documentElement;i.screen.left=E.left+window.pageXOffset-O.clientLeft,i.screen.top=E.top+window.pageYOffset-O.clientTop,i.screen.width=E.width,i.screen.height=E.height}},this.resetInputAfterCameraMovement=function(){p&&(i.camera.updateWorldMatrix(!0,!1),i.camera.matrixWorldInverse.copy(i.camera.matrixWorld).invert(),l.copy(M(C(u.x,u.y))))};var C=function(){var E=new ce;return c(function(N,H){return E.set((N-i.screen.width*.5-i.screen.left)/(i.screen.width*.5),(i.screen.height+2*(i.screen.top-H))/i.screen.height),E},"getPointerInNdc")}();this.getPointerInNdc=C;var b=function(){var E=new L,O=new L,N=new L,H=new ce,z=new At;return c(function(K){i.object.updateWorldMatrix(!0,!1),E.setFromMatrixPosition(i.object.matrixWorld),i.camera.updateWorldMatrix(!0,!1),i.camera.matrixWorldInverse.copy(i.camera.matrixWorld).invert(),E.project(i.camera),H.set(E.x,E.y),H.subVectors(K,H),O.setFromMatrixPosition(i.object.matrixWorld),N.set(i.trackballRadius,0,0),N.applyQuaternion(z.setFromRotationMatrix(i.camera.matrixWorld)),O.add(N),O.project(i.camera),O.z=0,E.z=0;var j=O.distanceTo(E);return H.x/=j,H.y/=j,i.camera.aspect&&(H.y/=i.camera.aspect),H},"getObjectToPointer")}(),M=function(){var E=new L,O=new L,N=new ce,H=new At,z=new on,W=new mi;return c(function(j){if(N.copy(b(j)),H.setFromRotationMatrix(i.camera.matrixWorld),i._pointerMapping===i.POINTER_SPHERE_MAPPING.RAYCAST)N.lengthSq()<1?(O.setFromMatrixPosition(i.object.matrixWorld),z.set(O,i.trackballRadius),W.origin.copy(i.camera.position),W.direction.set(j.x,j.y,.5),W.direction.unproject(i.camera),W.direction.sub(i.camera.position).normalize(),W.intersectSphere(z,E),E.sub(O),E.normalize()):(N.normalize(),E.set(N.x,N.y,0),E.applyQuaternion(H));else if(i._pointerMapping===i.POINTER_SPHERE_MAPPING.HOLROYD){var se=N.lengthSq();se<.5?E.set(N.x,N.y,Math.sqrt(1-se)):(E.set(N.x,N.y,1/(2*Math.sqrt(se))),E.normalize()),E.applyQuaternion(H)}else if(i._pointerMapping===i.POINTER_SPHERE_MAPPING.SHOEMAKE){var se=N.lengthSq();se<1?E.set(N.x,N.y,Math.sqrt(1-se)):(N.normalize(),E.set(N.x,N.y,0)),E.applyQuaternion(H)}else if(i._pointerMapping===i.POINTER_SPHERE_MAPPING.AZIMUTHAL){var se=Math.PI/2*N.length(),le=se<Number.EPSILON?1:Math.sin(se)/se;N.multiplyScalar(Math.PI/2*le),E.set(N.x,N.y,Math.cos(se)),E.applyQuaternion(H)}return E},"getPointerInSphere")}();this.onPointerDown=function(E,O,N){var H=C(E,O),z=b(H);z.lengthSq()<1?(f=!0,l.copy(M(H))):f=!1,u.set(E,O),d=N,p=!0},this.onPointerMove=function(){var E=new L,O=new ce,N=new ce,H=new ce,z=new L,W=new L,K=new L,j=new L;return c(function(le,Ee,We){var je=(We-d)/1e3;if(d=We,h.copy(l),E.copy(C(le,Ee)),O.copy(b(E)),O.lengthSq()<1||!this.relativelySpinOffTrackball)l.copy(M(E)),f?je>0&&i.updateAngularVelocity(l,h,je):a=We,f=!0;else{if(f)a=We;else if(je>0){H.copy(C(u.x,u.y)),N.subVectors(E,H),z.setFromMatrixPosition(i.object.matrixWorld),i.camera.isPerspectiveCamera?W.copy(i.camera.position).sub(z):(i.camera.getWorldDirection(W),W.negate()),l.copy(M(E)),r.crossVectors(W,l);var tt;i.camera.isPerspectiveCamera?tt=2/i.camera.fov/Math.atan(i.trackballRadius/W.length()):tt=i.trackballRadius/((i.camera.top-i.camera.bottom)/i.camera.zoom*2),O.normalize();var st=N.dot(O)*tt/je;r.setLength(st*i._offTrackBallVelocityGain),j.copy(M(H));var $=j.angleTo(l)/je;K.crossVectors(j,l),K.setLength($),r.add(K),i.applyVelocity()}f=!1}u.set(le,Ee),i.hasPointerMovedThisFrame=!0},"onPointerMove")}(),this.setPointerToSphereMapping=function(E){i._pointerMapping=E,i._offTrackBallVelocityGain=i.offTrackBallVelocityGainMap[i._pointerMapping]},this.handlePointerDown=function(E){E.preventDefault(),i.domElement.focus?i.domElement.focus():window.focus(),i.dispatchEvent(g)},this.handlePointerUp=function(E){if(E.preventDefault(),!i.hasPointerMovedThisFrame){var O=(E.timeStamp-d)/1e3;r.multiplyScalar(1/(i._pointerUpVelDamping*Math.pow(O,2)+i.dampingFactor*O+1))}p=!1,i.dispatchEvent(m)};function P(E){i.enabled===!1||E.button!==0||(i.onPointerDown(E.pageX,E.pageY,E.timeStamp),document.addEventListener("mousemove",R,!1),document.addEventListener("mouseup",I,!1),i.handlePointerDown(E))}c(P,"onMouseDown");function R(E){i.enabled!==!1&&(E.preventDefault(),i.onPointerMove(E.pageX,E.pageY,E.timeStamp))}c(R,"onMouseMove");function I(E){i.enabled!==!1&&(document.removeEventListener("mousemove",R),document.removeEventListener("mouseup",I),i.handlePointerUp(E))}c(I,"onMouseUp"),this.cancelSpin=function(){r.set(0,0,0)},this.handleTouchStart=function(E){i.onPointerDown(E.pageX,E.pageY,E.timeStamp),i.applyVelocity()};function F(E){i.enabled!==!1&&(i.handleTouchStart(E),i.handlePointerDown(E))}c(F,"onTouchStart");function w(E){i.enabled===!1||!p||(E.preventDefault(),E.stopImmediatePropagation(),i.onPointerMove(E.touches[0].pageX,E.touches[0].pageY,E.timeStamp))}c(w,"onTouchMove");function y(E){i.enabled!==!1&&(i.handlePointerUp(E),E.touches.length>0&&(p=!0))}c(y,"onTouchEnd"),this.dispose=function(){i.domElement.removeEventListener("mousedown",P),document.removeEventListener("mousemove",R),document.removeEventListener("mouseup",I),i.domElement.removeEventListener("touchstart",F),i.domElement.removeEventListener("touchmove",w),i.domElement.removeEventListener("touchend",y)},i.domElement.addEventListener("mousedown",P),i.domElement.addEventListener("touchstart",F,{passive:!1}),i.domElement.addEventListener("touchmove",w,{passive:!1}),i.domElement.addEventListener("touchend",y,{passive:!1}),i.onWindowResize(),i.update()},"SpinControls");ya.prototype=Object.create(ei.prototype);ya.prototype.constructor=ya;const vp=class vp{constructor(e){this.defaultSpinControlsState={autoRotateAxis:new L(0,1,0),trackballRadius:100,spinAxisConstraint:void 0},this.autoRotateAxis=new L(0,1,0),this.autoRotateQuaternion=new At,this.autoRotateEnabled=!0;const t=e.getRenderer().domElement;this.camera=this.buildPerspectiveCamera(t),this.spinControls=this.buildSpinControls(t),this.defaultCameraState=this.camera.clone()}buildPerspectiveCamera(e){const t=e.parentElement,n=c(()=>t.offsetWidth/t.offsetHeight,"aspectRatio"),i=new Nt(36,n(),1,3e3);return i.position.set(0,0,400),window.addEventListener("resize",()=>{i.aspect=n(),i.updateProjectionMatrix();const r=this.defaultCameraState;r.aspect=n(),r.updateProjectionMatrix()}),i}buildSpinControls(e){const t=new yt,n=new ya(t,0,this.getCamera(),e);return n.rotateSensitivity=.4,n.dampingFactor=10,n.relativelySpinOffTrackball=!0,window.addEventListener("resize",()=>n.onWindowResize()),n.addEventListener("start",()=>{this.autoRotateEnabled=!1}),n.addEventListener("end",()=>{this.autoRotateEnabled=!0}),n}setSpinControlsObject(e,t,n){this.spinControls.object=e,this.spinControls.trackballRadius=t,this.spinControls.spinAxisConstraint=n,this.defaultSpinControlsState.trackballRadius=t,this.defaultSpinControlsState.spinAxisConstraint=n}setRotationAxis(e){this.autoRotateAxis.copy(e),this.spinControls.spinAxisConstraint=e}resetSpinControls(){const{autoRotateAxis:e,trackballRadius:t,spinAxisConstraint:n}=this.defaultSpinControlsState;this.autoRotateAxis.copy(e),this.spinControls.trackballRadius=t,this.spinControls.spinAxisConstraint=n}autoRotate(e){this.autoRotateQuaternion.setFromAxisAngle(this.autoRotateAxis,e*-.1),this.spinControls.object.quaternion.premultiply(this.autoRotateQuaternion)}update(e){this.spinControls.update(),this.autoRotateEnabled&&this.autoRotate(e)}getCamera(){return this.camera}getSpinControls(){return this.spinControls}getDefaultCameraState(){return this.defaultCameraState}};c(vp,"ThreeControls");let Nu=vp;const j0=c((s,e)=>new L().subVectors(e,s).normalize(),"getDirectionBetweenVectors"),PE=c(s=>{const e=new L;return s.getWorldDirection(e),e},"getObjectDirection"),Uu=c(s=>{const e=new L;return new mn().setFromObject(s).getCenter(e),e},"getObjectCenter"),LE=c((s,e,t)=>{const n=new L().copy(s);return n.project(e),new ce((n.x+1)/2*t.clientWidth,-(n.y-1)/2*t.clientHeight)},"getObjectPositionOnScreen"),bp=class bp{constructor(){this.onObjectMoveListeners=new Map,this.previousObjectPositions=new Map,this.defaultObjectPosition=new L(0,0,0)}update(){for(const[e,t]of this.onObjectMoveListeners){const n=this.getObjectPosition(e);t.forEach(i=>{this.hasObjectPositionChanged(e,n)&&i(e)}),this.previousObjectPositions.set(e,n.clone())}}onObjectMove(e,t){this.onObjectMoveListeners.has(e)||this.onObjectMoveListeners.set(e,new Set),this.onObjectMoveListeners.get(e)?.add(t),this.previousObjectPositions.set(e,this.getObjectPosition(e))}removeObjectMoveListener(e,t){this.onObjectMoveListeners.get(e)?.delete(t),this.onObjectMoveListeners.get(e)?.size===0&&(this.onObjectMoveListeners.delete(e),this.previousObjectPositions.delete(e))}hasObjectPositionChanged(e,t){const n=this.previousObjectPositions.get(e);return n?!t.equals(n):!1}getObjectPosition(e){return e.position.equals(this.defaultObjectPosition)?Uu(e):e.position}};c(bp,"ThreeEventHandler");let Fu=bp;const yp=class yp{constructor(e){this.renderer=this.buildRenderer(e)}buildRenderer(e){const t=e.parentElement,n=new Lu({canvas:e,antialias:!0,alpha:!0});n.outputColorSpace=Dt,n.setPixelRatio(window.devicePixelRatio);const i=c(()=>n.setSize(this.rendererWidth(t),this.rendererHeight(t),!1),"updateWebGlRendererSize");return i(),window.addEventListener("resize",i),n}rendererWidth(e){return e.offsetWidth>0?e.offsetWidth:window.innerWidth}rendererHeight(e){return e.offsetHeight>0?e.offsetHeight:window.innerWidth}getRenderer(){return this.renderer}getCanvas(){return this.renderer.domElement}};c(yp,"ThreeRenderer");let Bu=yp;const zt=c(s=>new Ge(s),"color"),Yt={ambientLight:zt("#ffffff"),star:zt("#ffffff"),sun:zt("#fcd900"),earth:zt("#4d96ff"),mountain:zt("#9ede73"),cloud:zt("#ffffff"),tree:{trunk:zt("#be8c63"),crown:zt("#9ede73")},house:{roof:zt("#b20600"),base:zt("#f1eee9")},land:{brown:zt("#ffcc8f"),green:zt("#83bd75")},building:{floor:zt("#f1eee9"),split:zt("#73777b")},hut:{roof:zt("#a64b2a"),pillar:zt("#d7a86e")}},Sp=class Sp{constructor(){this.scene=new Ol,this.setupLights()}setupLights(){const e=new gu(Yt.ambientLight,3),t=new xt;t.name="lights",t.add(e),this.scene.add(t)}getScene(){return this.scene}};c(Sp,"ThreeScene");let ku=Sp;const Mp=class Mp{constructor(e,t){this.controls=t,this.rayCasterPoint=new ce(0,0),this.objectsToIgnore=new Set,this.intersectableMouseMoveObjects=new Set,this.intersectableClickObjects=new Set,this.mouseOverListenersMap=new Map,this.mouseOutListenersMap=new Map,this.clickableListenersMap=new Map,this.rayCaster=new yu,this.rendererElement=e.getRenderer().domElement,this.setupMouseMoveListeners(),this.setupMouseClickListener()}update(){this.onAnimationFrame?.()}setupMouseMoveListeners(){let e;const t=new Set,n=c(r=>{e=r},"updatePointerPosition"),i=c(r=>{if(!e||!this.hasMouseMoveListeners())return;const o=this.getIntersectedObject(r,this.intersectableMouseMoveObjects);for(const a of t)o!==a&&(t.delete(a),this.mouseOutListenersMap.get(a)?.());o&&!t.has(o)&&(t.add(o),this.mouseOverListenersMap.get(o)?.()),e=r},"mouseMoveEventHandler");this.onAnimationFrame=()=>i(e),this.rendererElement.addEventListener("mousemove",n),this.rendererElement.addEventListener("touchmove",r=>{n(r.changedTouches[0])})}setupMouseClickListener(){let e=0,t=0;const n=c(r=>{e=r.clientX,t=r.clientY},"mouseDownEventHandler"),i=c(r=>{const o=Math.abs(r.clientX-e),a=Math.abs(r.clientY-t);if(o!==0&&a!==0||!this.hasClickListeners())return;const l=this.getIntersectedObject(r,this.intersectableClickObjects);l&&this.clickableListenersMap.get(l)?.()},"mouseUpEventHandler");this.rendererElement.addEventListener("mousedown",n),this.rendererElement.addEventListener("mouseup",i),this.rendererElement.addEventListener("touchstart",r=>{n(r.changedTouches[0])}),this.rendererElement.addEventListener("touchend",r=>{i(r.changedTouches[0])})}getIntersectedObject(e,t){this.rayCasterPoint.setX(e.clientX/this.rendererElement.clientWidth*2-1),this.rayCasterPoint.setY(-(e.clientY/this.rendererElement.clientHeight)*2+1),this.rayCaster.setFromCamera(this.rayCasterPoint,this.controls.getCamera());const n=this.rayCaster.intersectObjects([...t]);if(n.length!==0)return this.findIntersectedObject(n[0].object,t)}onMouseOver(e,t){this.mouseOverListenersMap.set(e,t),this.intersectableMouseMoveObjects.add(e)}onMouseOut(e,t){this.mouseOutListenersMap.set(e,t),this.intersectableMouseMoveObjects.add(e)}onClick(e,t){this.clickableListenersMap.set(e,t),this.intersectableClickObjects.add(e)}intersectButIgnoreObject(e){this.objectsToIgnore.add(e),this.intersectableClickObjects.add(e),this.intersectableMouseMoveObjects.add(e)}findIntersectedObject(e,t){if(!this.objectsToIgnore.has(e))return t.has(e)?e:e.parent?this.findIntersectedObject(e.parent,t):void 0}hasMouseMoveListeners(){return this.mouseOverListenersMap.size>0||this.mouseOutListenersMap.size>0}hasClickListeners(){return this.clickableListenersMap.size>0}};c(Mp,"ThreeSelector");let zu=Mp;const Ep=class Ep{constructor(e){this.threeScene=new ku,this.threeRenderer=new Bu(e.canvasElement),this.threeControls=new Nu(this.threeRenderer),this.threeSelector=new zu(this.threeRenderer,this.threeControls),this.threeEventHandler=new Fu,this.threeAnimator=new Ou,this.animate()}animate(){const e=this.threeScene.getScene(),t=this.threeControls.getCamera(),n=this.threeRenderer.getRenderer(),i=new vu;n.setAnimationLoop(()=>{const r=i.getDelta();this.threeControls.update(r),this.threeSelector.update(),this.threeEventHandler.update(),this.threeAnimator.update(),n.render(e,t)})}getScene(){return this.threeScene.getScene()}getControls(){return this.threeControls}getSelector(){return this.threeSelector}getRenderer(){return this.threeRenderer}getEventHandler(){return this.threeEventHandler}getAnimator(){return this.threeAnimator}};c(Ep,"Three");let Hu=Ep;const IE=c((s,e,t)=>{const n=pn.degToRad(-e+90),i=pn.degToRad(t),r=new L;return r.setFromSphericalCoords(s,n,i),r},"getPositionFromLatLng"),DE=c((s,e)=>{const{x:t,y:n,z:i}=s,r=-pn.radToDeg(Math.acos(n/e))+90,o=pn.radToDeg(Math.atan(t/i));return{lat:r,lng:o}},"getLatLngFromPosition"),wp=class wp{constructor(...[e]){this.properties=e,this.object=this.constructObject(),this.properties?.name&&(this.object.name=this.properties.name),this.properties?.scale&&this.object.scale.setScalar(this.properties.scale)}getObject(){return this.object}addTo(e){e.add(this.object)}applyLatLng(e,t,n){const i=IE(e,t,n);this.object.position.copy(i),this.object.lookAt(0,0,0),this.object.rotateX(pn.degToRad(-90))}getPosition(){const e=new L(0,0,0),t=this.object.position.distanceTo(e),{lat:n,lng:i}=DE(this.object.position,t);return{coordinates:this.object.position,lat:n,lng:i,altitude:t}}};c(wp,"BaseObject");let cn=wp;const Tp=class Tp extends cn{constructObject(){const{size:e,color:t=Yt.earth}=this.properties,n=new ga(e,e/2,e/3),i=new Zt({color:t}),r=new pt(n,i);return r.name="globe",r}getRadius(){return this.properties.size}};c(Tp,"Globe");let Vu=Tp;const Ap=class Ap extends cn{constructObject(){const e=new xt,t=new xt,n=this.properties.radius??120;return t.add(this.constructLight()),t.position.setScalar(n),e.add(t),e.name="sun",e}constructLight(){return new va(Yt.sun,2.5)}setPosition(e){this.object.position.copy(e)}};c(Ap,"Sun");let Gu=Ap;const Di=c((s,e)=>Math.floor(Math.random()*(e-s+1)+s),"generateRandomInRange"),Cp=class Cp extends cn{constructObject(){const{size:e=10}=this.properties??{},t=new xt,n=e*.75,i=e*.25,r=this.createCloudSphere(e),o=this.createCloudSphere(n),a=this.createCloudSphere(n);return o.position.set(-n,-i,0),a.position.set(n,-i,0),t.add(r,o,a),t.name="cloud",t}createCloudSphere(e){const t=Math.max(8,e),n=new ga(e,t,t),i=new Zt({color:Yt.cloud});return new pt(n,i)}};c(Cp,"Cloud");let Wu=Cp;const Rp=class Rp extends cn{constructObject(){const{cloudsCount:e}=this.properties,t=new xt;for(let n=0;n<e;n++)t.add(this.generateRandomCloud().getObject());return t.name="clouds",t}animateClouds(e){const t=this.object,n=1e3,i=Di(0,100)*.001,r=Di(0,100)*.001,o=Di(0,100)*.001,a=c(l=>{const{x:u,y:h,z:d}=l.rotation,f={x:u+i,y:h+r,z:d+o},p=e.createTween(l.rotation,f,{duration:n});p.start(),p.onComplete(()=>{e.removeTween(p),a(l)})},"animateClouds");a(t)}generateRandomCloud(){const{baseCloudSize:e,orbitRadius:t}=this.properties,n=Di(e-5,e+5),i=Di(t,t+20),r=Di(-90,90),o=Di(-180,180),a=new Wu({size:n});return a.applyLatLng(i,r,o),a}};c(Rp,"Clouds");let Xu=Rp;const Pp=class Pp extends cn{constructObject(){const e=new xt,{floors:t=3,size:n=10}=this.properties??{};for(let i=0;i<t;i++){const r=this.constructFloor(i,n),o=this.constructSplit(i,n);e.add(r,o)}return e.name="building",e}constructFloor(e,t){const n=new Un(t,t,t),i=new Zt({color:this.properties?.floorColor??Yt.building.floor}),r=new pt(n,i),o=t/2,a=this.getSplitHeight(t);return n.translate(0,o+e*(t+a),0),r}constructSplit(e,t){const n=this.getSplitHeight(t),i=new Un(t*.8,n,t*.8),r=new Zt({color:this.properties?.splitColor??Yt.building.split}),o=new pt(i,r),a=n/2;return i.translate(0,(e+1)*(t+n)-a,0),o}getSplitHeight(e){return e*.1}};c(Pp,"Building");let ju=Pp;const Lp=class Lp extends cn{constructObject(){const e=new xt,t=this.constructRoof(this.properties?.size),n=this.constructBase(this.properties?.size);return e.add(t,n),e.name="house",e}constructBase(e=10){const t=new Un(e*.7,e/2,e),n=new Zt({color:Yt.house.base}),i=new pt(t,n);return t.translate(0,e/2/2,0),i}constructRoof(e=10){const[t,n]=[e,e/3],i=e/2,r=this.constructRoofGeometry(t,n),o=new Zt({color:Yt.house.roof,side:Sn}),a=new pt(r,o);return r.translate(0,i+n/2,0),a}constructRoofGeometry(e,t){const n=[[0,0],[e/2,t],[e,0]].map(o=>new ce(...o)),i=new pa(n),r=new Ql(i,{depth:e});return r.translate(-e/2,-t/2,-e/2),r}};c(Lp,"House");let qu=Lp;const Ip=class Ip extends cn{constructObject(){const e=new xt,t=this.constructRoof(this.properties?.size),n=this.constructPillars(this.properties?.size);return e.add(t,n),e.name="hut",e}constructRoof(e=5){const t=e/1.25,n=new $r(e*1.2,t,6),i=new Zt({color:Yt.hut.roof}),r=new pt(n,i),o=e/1.1;return n.translate(0,o+t/2,0),r}constructPillars(e=5){const t=[{x:2.5,z:2.5},{x:-2.5,z:2.5},{x:2.5,z:-2.5},{x:-2.5,z:-2.5}],n=new xt;n.name="pillars";for(const i of t)n.add(this.constructPillar(i,e));return n}constructPillar(e,t){const[n,i,r]=[t/5,t/1.1,t/5],o=new Un(n,i,r),a=new Zt({color:Yt.hut.pillar}),l=new pt(o,a);return o.translate(e.x,i/2,e.z),l}};c(Ip,"Hut");let Yu=Ip;const Dp=class Dp extends cn{constructObject(){const{size:e=10,height:t=1,sides:n=6,color:i=Yt.land.green}=this.properties??{},r=new ca(e,e,t,n,1),o=new Zt({color:i}),a=new pt(r,o);return a.name="land",a}};c(Dp,"Land");let $u=Dp;const Op=class Op extends cn{constructObject(){const{size:e,color:t=Yt.mountain,height:n=e}=this.properties,i=new $r(e,n,4),r=new Zt({color:t}),o=new pt(i,r);return o.name="mountain",i.translate(0,n/2,0),o}};c(Op,"Mountain");let Ku=Op;const Np=class Np extends cn{constructObject(){const e=new xt,t=this.constructTrunk(),n=this.constructCrown();return e.add(t,n),e.name="tree",e}constructTrunk(e=3){const t=new Un(1,e,1),n=new Zt({color:Yt.tree.trunk}),i=new pt(t,n);return t.translate(0,e/2,0),i}constructCrown(e=3){const n=new $r(3,7,3),i=new Zt({color:Yt.tree.crown}),r=new pt(n,i);return n.translate(0,e+7/2,0),r}};c(Np,"Tree");let Ju=Np;var Ie=(s=>(s[s.LevelOne=2.25]="LevelOne",s[s.LevelTwo=4.5]="LevelTwo",s))(Ie||{});function OE(s){if(!(typeof window>"u")){var e=document.createElement("style");return e.setAttribute("type","text/css"),e.innerHTML=s,document.head.appendChild(e),s}}c(OE,"___$insertStyle");function ps(s,e){var t=s.__state.conversionName.toString(),n=Math.round(s.r),i=Math.round(s.g),r=Math.round(s.b),o=s.a,a=Math.round(s.h),l=s.s.toFixed(1),u=s.v.toFixed(1);if(e||t==="THREE_CHAR_HEX"||t==="SIX_CHAR_HEX"){for(var h=s.hex.toString(16);h.length<6;)h="0"+h;return"#"+h}else{if(t==="CSS_RGB")return"rgb("+n+","+i+","+r+")";if(t==="CSS_RGBA")return"rgba("+n+","+i+","+r+","+o+")";if(t==="HEX")return"0x"+s.hex.toString(16);if(t==="RGB_ARRAY")return"["+n+","+i+","+r+"]";if(t==="RGBA_ARRAY")return"["+n+","+i+","+r+","+o+"]";if(t==="RGB_OBJ")return"{r:"+n+",g:"+i+",b:"+r+"}";if(t==="RGBA_OBJ")return"{r:"+n+",g:"+i+",b:"+r+",a:"+o+"}";if(t==="HSV_OBJ")return"{h:"+a+",s:"+l+",v:"+u+"}";if(t==="HSVA_OBJ")return"{h:"+a+",s:"+l+",v:"+u+",a:"+o+"}"}return"unknown format"}c(ps,"colorToString");var q0=Array.prototype.forEach,gr=Array.prototype.slice,J={BREAK:{},extend:c(function(e){return this.each(gr.call(arguments,1),function(t){var n=this.isObject(t)?Object.keys(t):[];n.forEach((function(i){this.isUndefined(t[i])||(e[i]=t[i])}).bind(this))},this),e},"extend"),defaults:c(function(e){return this.each(gr.call(arguments,1),function(t){var n=this.isObject(t)?Object.keys(t):[];n.forEach((function(i){this.isUndefined(e[i])&&(e[i]=t[i])}).bind(this))},this),e},"defaults"),compose:c(function(){var e=gr.call(arguments);return function(){for(var t=gr.call(arguments),n=e.length-1;n>=0;n--)t=[e[n].apply(this,t)];return t[0]}},"compose"),each:c(function(e,t,n){if(e){if(q0&&e.forEach&&e.forEach===q0)e.forEach(t,n);else if(e.length===e.length+0){var i=void 0,r=void 0;for(i=0,r=e.length;i<r;i++)if(i in e&&t.call(n,e[i],i)===this.BREAK)return}else for(var o in e)if(t.call(n,e[o],o)===this.BREAK)return}},"each"),defer:c(function(e){setTimeout(e,0)},"defer"),debounce:c(function(e,t,n){var i=void 0;return function(){var r=this,o=arguments;function a(){i=null,n||e.apply(r,o)}c(a,"delayed");var l=n||!i;clearTimeout(i),i=setTimeout(a,t),l&&e.apply(r,o)}},"debounce"),toArray:c(function(e){return e.toArray?e.toArray():gr.call(e)},"toArray"),isUndefined:c(function(e){return e===void 0},"isUndefined"),isNull:c(function(e){return e===null},"isNull"),isNaN:function(s){function e(t){return s.apply(this,arguments)}return c(e,"isNaN"),e.toString=function(){return s.toString()},e}(function(s){return isNaN(s)}),isArray:Array.isArray||function(s){return s.constructor===Array},isObject:c(function(e){return e===Object(e)},"isObject"),isNumber:c(function(e){return e===e+0},"isNumber"),isString:c(function(e){return e===e+""},"isString"),isBoolean:c(function(e){return e===!1||e===!0},"isBoolean"),isFunction:c(function(e){return e instanceof Function},"isFunction")},NE=[{litmus:J.isString,conversions:{THREE_CHAR_HEX:{read:c(function(e){var t=e.match(/^#([A-F0-9])([A-F0-9])([A-F0-9])$/i);return t===null?!1:{space:"HEX",hex:parseInt("0x"+t[1].toString()+t[1].toString()+t[2].toString()+t[2].toString()+t[3].toString()+t[3].toString(),0)}},"read"),write:ps},SIX_CHAR_HEX:{read:c(function(e){var t=e.match(/^#([A-F0-9]{6})$/i);return t===null?!1:{space:"HEX",hex:parseInt("0x"+t[1].toString(),0)}},"read"),write:ps},CSS_RGB:{read:c(function(e){var t=e.match(/^rgb\(\s*(\S+)\s*,\s*(\S+)\s*,\s*(\S+)\s*\)/);return t===null?!1:{space:"RGB",r:parseFloat(t[1]),g:parseFloat(t[2]),b:parseFloat(t[3])}},"read"),write:ps},CSS_RGBA:{read:c(function(e){var t=e.match(/^rgba\(\s*(\S+)\s*,\s*(\S+)\s*,\s*(\S+)\s*,\s*(\S+)\s*\)/);return t===null?!1:{space:"RGB",r:parseFloat(t[1]),g:parseFloat(t[2]),b:parseFloat(t[3]),a:parseFloat(t[4])}},"read"),write:ps}}},{litmus:J.isNumber,conversions:{HEX:{read:c(function(e){return{space:"HEX",hex:e,conversionName:"HEX"}},"read"),write:c(function(e){return e.hex},"write")}}},{litmus:J.isArray,conversions:{RGB_ARRAY:{read:c(function(e){return e.length!==3?!1:{space:"RGB",r:e[0],g:e[1],b:e[2]}},"read"),write:c(function(e){return[e.r,e.g,e.b]},"write")},RGBA_ARRAY:{read:c(function(e){return e.length!==4?!1:{space:"RGB",r:e[0],g:e[1],b:e[2],a:e[3]}},"read"),write:c(function(e){return[e.r,e.g,e.b,e.a]},"write")}}},{litmus:J.isObject,conversions:{RGBA_OBJ:{read:c(function(e){return J.isNumber(e.r)&&J.isNumber(e.g)&&J.isNumber(e.b)&&J.isNumber(e.a)?{space:"RGB",r:e.r,g:e.g,b:e.b,a:e.a}:!1},"read"),write:c(function(e){return{r:e.r,g:e.g,b:e.b,a:e.a}},"write")},RGB_OBJ:{read:c(function(e){return J.isNumber(e.r)&&J.isNumber(e.g)&&J.isNumber(e.b)?{space:"RGB",r:e.r,g:e.g,b:e.b}:!1},"read"),write:c(function(e){return{r:e.r,g:e.g,b:e.b}},"write")},HSVA_OBJ:{read:c(function(e){return J.isNumber(e.h)&&J.isNumber(e.s)&&J.isNumber(e.v)&&J.isNumber(e.a)?{space:"HSV",h:e.h,s:e.s,v:e.v,a:e.a}:!1},"read"),write:c(function(e){return{h:e.h,s:e.s,v:e.v,a:e.a}},"write")},HSV_OBJ:{read:c(function(e){return J.isNumber(e.h)&&J.isNumber(e.s)&&J.isNumber(e.v)?{space:"HSV",h:e.h,s:e.s,v:e.v}:!1},"read"),write:c(function(e){return{h:e.h,s:e.s,v:e.v}},"write")}}}],xr=void 0,Bo=void 0,Zu=c(function(){Bo=!1;var e=arguments.length>1?J.toArray(arguments):arguments[0];return J.each(NE,function(t){if(t.litmus(e))return J.each(t.conversions,function(n,i){if(xr=n.read(e),Bo===!1&&xr!==!1)return Bo=xr,xr.conversionName=i,xr.conversion=n,J.BREAK}),J.BREAK}),Bo},"interpret"),Y0=void 0,Sa={hsv_to_rgb:c(function(e,t,n){var i=Math.floor(e/60)%6,r=e/60-Math.floor(e/60),o=n*(1-t),a=n*(1-r*t),l=n*(1-(1-r)*t),u=[[n,l,o],[a,n,o],[o,n,l],[o,a,n],[l,o,n],[n,o,a]][i];return{r:u[0]*255,g:u[1]*255,b:u[2]*255}},"hsv_to_rgb"),rgb_to_hsv:c(function(e,t,n){var i=Math.min(e,t,n),r=Math.max(e,t,n),o=r-i,a=void 0,l=void 0;if(r!==0)l=o/r;else return{h:NaN,s:0,v:0};return e===r?a=(t-n)/o:t===r?a=2+(n-e)/o:a=4+(e-t)/o,a/=6,a<0&&(a+=1),{h:a*360,s:l,v:r/255}},"rgb_to_hsv"),rgb_to_hex:c(function(e,t,n){var i=this.hex_with_component(0,2,e);return i=this.hex_with_component(i,1,t),i=this.hex_with_component(i,0,n),i},"rgb_to_hex"),component_from_hex:c(function(e,t){return e>>t*8&255},"component_from_hex"),hex_with_component:c(function(e,t,n){return n<<(Y0=t*8)|e&~(255<<Y0)},"hex_with_component")},UE=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(s){return typeof s}:function(s){return s&&typeof Symbol=="function"&&s.constructor===Symbol&&s!==Symbol.prototype?"symbol":typeof s},An=c(function(s,e){if(!(s instanceof e))throw new TypeError("Cannot call a class as a function")},"classCallCheck"),Cn=function(){function s(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return c(s,"defineProperties"),function(e,t,n){return t&&s(e.prototype,t),n&&s(e,n),e}}(),Si=c(function s(e,t,n){e===null&&(e=Function.prototype);var i=Object.getOwnPropertyDescriptor(e,t);if(i===void 0){var r=Object.getPrototypeOf(e);return r===null?void 0:s(r,t,n)}else{if("value"in i)return i.value;var o=i.get;return o===void 0?void 0:o.call(n)}},"get"),Mi=c(function(s,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof e);s.prototype=Object.create(e&&e.prototype,{constructor:{value:s,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(s,e):s.__proto__=e)},"inherits"),Ei=c(function(s,e){if(!s)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e&&(typeof e=="object"||typeof e=="function")?e:s},"possibleConstructorReturn"),Ot=function(){function s(){if(An(this,s),this.__state=Zu.apply(this,arguments),this.__state===!1)throw new Error("Failed to interpret color arguments");this.__state.a=this.__state.a||1}return c(s,"Color"),Cn(s,[{key:"toString",value:c(function(){return ps(this)},"toString")},{key:"toHexString",value:c(function(){return ps(this,!0)},"toHexString")},{key:"toOriginal",value:c(function(){return this.__state.conversion.write(this)},"toOriginal")}]),s}();function hd(s,e,t){Object.defineProperty(s,e,{get:c(function(){return this.__state.space==="RGB"?this.__state[e]:(Ot.recalculateRGB(this,e,t),this.__state[e])},"get$$1"),set:c(function(i){this.__state.space!=="RGB"&&(Ot.recalculateRGB(this,e,t),this.__state.space="RGB"),this.__state[e]=i},"set$$1")})}c(hd,"defineRGBComponent");function dd(s,e){Object.defineProperty(s,e,{get:c(function(){return this.__state.space==="HSV"?this.__state[e]:(Ot.recalculateHSV(this),this.__state[e])},"get$$1"),set:c(function(n){this.__state.space!=="HSV"&&(Ot.recalculateHSV(this),this.__state.space="HSV"),this.__state[e]=n},"set$$1")})}c(dd,"defineHSVComponent");Ot.recalculateRGB=function(s,e,t){if(s.__state.space==="HEX")s.__state[e]=Sa.component_from_hex(s.__state.hex,t);else if(s.__state.space==="HSV")J.extend(s.__state,Sa.hsv_to_rgb(s.__state.h,s.__state.s,s.__state.v));else throw new Error("Corrupted color state")};Ot.recalculateHSV=function(s){var e=Sa.rgb_to_hsv(s.r,s.g,s.b);J.extend(s.__state,{s:e.s,v:e.v}),J.isNaN(e.h)?J.isUndefined(s.__state.h)&&(s.__state.h=0):s.__state.h=e.h};Ot.COMPONENTS=["r","g","b","h","s","v","hex","a"];hd(Ot.prototype,"r",2);hd(Ot.prototype,"g",1);hd(Ot.prototype,"b",0);dd(Ot.prototype,"h");dd(Ot.prototype,"s");dd(Ot.prototype,"v");Object.defineProperty(Ot.prototype,"a",{get:c(function(){return this.__state.a},"get$$1"),set:c(function(e){this.__state.a=e},"set$$1")});Object.defineProperty(Ot.prototype,"hex",{get:c(function(){return this.__state.space!=="HEX"&&(this.__state.hex=Sa.rgb_to_hex(this.r,this.g,this.b),this.__state.space="HEX"),this.__state.hex},"get$$1"),set:c(function(e){this.__state.space="HEX",this.__state.hex=e},"set$$1")});var qi=function(){function s(e,t){An(this,s),this.initialValue=e[t],this.domElement=document.createElement("div"),this.object=e,this.property=t,this.__onChange=void 0,this.__onFinishChange=void 0}return c(s,"Controller"),Cn(s,[{key:"onChange",value:c(function(t){return this.__onChange=t,this},"onChange")},{key:"onFinishChange",value:c(function(t){return this.__onFinishChange=t,this},"onFinishChange")},{key:"setValue",value:c(function(t){return this.object[this.property]=t,this.__onChange&&this.__onChange.call(this,t),this.updateDisplay(),this},"setValue")},{key:"getValue",value:c(function(){return this.object[this.property]},"getValue")},{key:"updateDisplay",value:c(function(){return this},"updateDisplay")},{key:"isModified",value:c(function(){return this.initialValue!==this.getValue()},"isModified")}]),s}(),FE={HTMLEvents:["change"],MouseEvents:["click","mousemove","mousedown","mouseup","mouseover"],KeyboardEvents:["keydown"]},Fg={};J.each(FE,function(s,e){J.each(s,function(t){Fg[t]=e})});var BE=/(\d+(\.\d+)?)px/;function Pn(s){if(s==="0"||J.isUndefined(s))return 0;var e=s.match(BE);return J.isNull(e)?0:parseFloat(e[1])}c(Pn,"cssValueToPixels");var V={makeSelectable:c(function(e,t){e===void 0||e.style===void 0||(e.onselectstart=t?function(){return!1}:function(){},e.style.MozUserSelect=t?"auto":"none",e.style.KhtmlUserSelect=t?"auto":"none",e.unselectable=t?"on":"off")},"makeSelectable"),makeFullscreen:c(function(e,t,n){var i=n,r=t;J.isUndefined(r)&&(r=!0),J.isUndefined(i)&&(i=!0),e.style.position="absolute",r&&(e.style.left=0,e.style.right=0),i&&(e.style.top=0,e.style.bottom=0)},"makeFullscreen"),fakeEvent:c(function(e,t,n,i){var r=n||{},o=Fg[t];if(!o)throw new Error("Event type "+t+" not supported.");var a=document.createEvent(o);switch(o){case"MouseEvents":{var l=r.x||r.clientX||0,u=r.y||r.clientY||0;a.initMouseEvent(t,r.bubbles||!1,r.cancelable||!0,window,r.clickCount||1,0,0,l,u,!1,!1,!1,!1,0,null);break}case"KeyboardEvents":{var h=a.initKeyboardEvent||a.initKeyEvent;J.defaults(r,{cancelable:!0,ctrlKey:!1,altKey:!1,shiftKey:!1,metaKey:!1,keyCode:void 0,charCode:void 0}),h(t,r.bubbles||!1,r.cancelable,window,r.ctrlKey,r.altKey,r.shiftKey,r.metaKey,r.keyCode,r.charCode);break}default:{a.initEvent(t,r.bubbles||!1,r.cancelable||!0);break}}J.defaults(a,i),e.dispatchEvent(a)},"fakeEvent"),bind:c(function(e,t,n,i){var r=i||!1;return e.addEventListener?e.addEventListener(t,n,r):e.attachEvent&&e.attachEvent("on"+t,n),V},"bind"),unbind:c(function(e,t,n,i){var r=i||!1;return e.removeEventListener?e.removeEventListener(t,n,r):e.detachEvent&&e.detachEvent("on"+t,n),V},"unbind"),addClass:c(function(e,t){if(e.className===void 0)e.className=t;else if(e.className!==t){var n=e.className.split(/ +/);n.indexOf(t)===-1&&(n.push(t),e.className=n.join(" ").replace(/^\s+/,"").replace(/\s+$/,""))}return V},"addClass"),removeClass:c(function(e,t){if(t)if(e.className===t)e.removeAttribute("class");else{var n=e.className.split(/ +/),i=n.indexOf(t);i!==-1&&(n.splice(i,1),e.className=n.join(" "))}else e.className=void 0;return V},"removeClass"),hasClass:c(function(e,t){return new RegExp("(?:^|\\s+)"+t+"(?:\\s+|$)").test(e.className)||!1},"hasClass"),getWidth:c(function(e){var t=getComputedStyle(e);return Pn(t["border-left-width"])+Pn(t["border-right-width"])+Pn(t["padding-left"])+Pn(t["padding-right"])+Pn(t.width)},"getWidth"),getHeight:c(function(e){var t=getComputedStyle(e);return Pn(t["border-top-width"])+Pn(t["border-bottom-width"])+Pn(t["padding-top"])+Pn(t["padding-bottom"])+Pn(t.height)},"getHeight"),getOffset:c(function(e){var t=e,n={left:0,top:0};if(t.offsetParent)do n.left+=t.offsetLeft,n.top+=t.offsetTop,t=t.offsetParent;while(t);return n},"getOffset"),isActive:c(function(e){return e===document.activeElement&&(e.type||e.href)},"isActive")},Bg=function(s){Mi(e,s);function e(t,n){An(this,e);var i=Ei(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n)),r=i;i.__prev=i.getValue(),i.__checkbox=document.createElement("input"),i.__checkbox.setAttribute("type","checkbox");function o(){r.setValue(!r.__prev)}return c(o,"onChange"),V.bind(i.__checkbox,"change",o,!1),i.domElement.appendChild(i.__checkbox),i.updateDisplay(),i}return c(e,"BooleanController"),Cn(e,[{key:"setValue",value:c(function(n){var i=Si(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"setValue",this).call(this,n);return this.__onFinishChange&&this.__onFinishChange.call(this,this.getValue()),this.__prev=this.getValue(),i},"setValue")},{key:"updateDisplay",value:c(function(){return this.getValue()===!0?(this.__checkbox.setAttribute("checked","checked"),this.__checkbox.checked=!0,this.__prev=!0):(this.__checkbox.checked=!1,this.__prev=!1),Si(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"updateDisplay",this).call(this)},"updateDisplay")}]),e}(qi),kE=function(s){Mi(e,s);function e(t,n,i){An(this,e);var r=Ei(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n)),o=i,a=r;if(r.__select=document.createElement("select"),J.isArray(o)){var l={};J.each(o,function(u){l[u]=u}),o=l}return J.each(o,function(u,h){var d=document.createElement("option");d.innerHTML=h,d.setAttribute("value",u),a.__select.appendChild(d)}),r.updateDisplay(),V.bind(r.__select,"change",function(){var u=this.options[this.selectedIndex].value;a.setValue(u)}),r.domElement.appendChild(r.__select),r}return c(e,"OptionController"),Cn(e,[{key:"setValue",value:c(function(n){var i=Si(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"setValue",this).call(this,n);return this.__onFinishChange&&this.__onFinishChange.call(this,this.getValue()),i},"setValue")},{key:"updateDisplay",value:c(function(){return V.isActive(this.__select)?this:(this.__select.value=this.getValue(),Si(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"updateDisplay",this).call(this))},"updateDisplay")}]),e}(qi),zE=function(s){Mi(e,s);function e(t,n){An(this,e);var i=Ei(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n)),r=i;function o(){r.setValue(r.__input.value)}c(o,"onChange");function a(){r.__onFinishChange&&r.__onFinishChange.call(r,r.getValue())}return c(a,"onBlur"),i.__input=document.createElement("input"),i.__input.setAttribute("type","text"),V.bind(i.__input,"keyup",o),V.bind(i.__input,"change",o),V.bind(i.__input,"blur",a),V.bind(i.__input,"keydown",function(l){l.keyCode===13&&this.blur()}),i.updateDisplay(),i.domElement.appendChild(i.__input),i}return c(e,"StringController"),Cn(e,[{key:"updateDisplay",value:c(function(){return V.isActive(this.__input)||(this.__input.value=this.getValue()),Si(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"updateDisplay",this).call(this)},"updateDisplay")}]),e}(qi);function $0(s){var e=s.toString();return e.indexOf(".")>-1?e.length-e.indexOf(".")-1:0}c($0,"numDecimals");var kg=function(s){Mi(e,s);function e(t,n,i){An(this,e);var r=Ei(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n)),o=i||{};return r.__min=o.min,r.__max=o.max,r.__step=o.step,J.isUndefined(r.__step)?r.initialValue===0?r.__impliedStep=1:r.__impliedStep=Math.pow(10,Math.floor(Math.log(Math.abs(r.initialValue))/Math.LN10))/10:r.__impliedStep=r.__step,r.__precision=$0(r.__impliedStep),r}return c(e,"NumberController"),Cn(e,[{key:"setValue",value:c(function(n){var i=n;return this.__min!==void 0&&i<this.__min?i=this.__min:this.__max!==void 0&&i>this.__max&&(i=this.__max),this.__step!==void 0&&i%this.__step!==0&&(i=Math.round(i/this.__step)*this.__step),Si(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"setValue",this).call(this,i)},"setValue")},{key:"min",value:c(function(n){return this.__min=n,this},"min")},{key:"max",value:c(function(n){return this.__max=n,this},"max")},{key:"step",value:c(function(n){return this.__step=n,this.__impliedStep=n,this.__precision=$0(n),this},"step")}]),e}(qi);function HE(s,e){var t=Math.pow(10,e);return Math.round(s*t)/t}c(HE,"roundToDecimal");var Ma=function(s){Mi(e,s);function e(t,n,i){An(this,e);var r=Ei(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n,i));r.__truncationSuspended=!1;var o=r,a=void 0;function l(){var x=parseFloat(o.__input.value);J.isNaN(x)||o.setValue(x)}c(l,"onChange");function u(){o.__onFinishChange&&o.__onFinishChange.call(o,o.getValue())}c(u,"onFinish");function h(){u()}c(h,"onBlur");function d(x){var _=a-x.clientY;o.setValue(o.getValue()+_*o.__impliedStep),a=x.clientY}c(d,"onMouseDrag");function f(){V.unbind(window,"mousemove",d),V.unbind(window,"mouseup",f),u()}c(f,"onMouseUp");function p(x){V.bind(window,"mousemove",d),V.bind(window,"mouseup",f),a=x.clientY}return c(p,"onMouseDown"),r.__input=document.createElement("input"),r.__input.setAttribute("type","text"),V.bind(r.__input,"change",l),V.bind(r.__input,"blur",h),V.bind(r.__input,"mousedown",p),V.bind(r.__input,"keydown",function(x){x.keyCode===13&&(o.__truncationSuspended=!0,this.blur(),o.__truncationSuspended=!1,u())}),r.updateDisplay(),r.domElement.appendChild(r.__input),r}return c(e,"NumberControllerBox"),Cn(e,[{key:"updateDisplay",value:c(function(){return this.__input.value=this.__truncationSuspended?this.getValue():HE(this.getValue(),this.__precision),Si(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"updateDisplay",this).call(this)},"updateDisplay")}]),e}(kg);function K0(s,e,t,n,i){return n+(i-n)*((s-e)/(t-e))}c(K0,"map");var Qu=function(s){Mi(e,s);function e(t,n,i,r,o){An(this,e);var a=Ei(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n,{min:i,max:r,step:o})),l=a;a.__background=document.createElement("div"),a.__foreground=document.createElement("div"),V.bind(a.__background,"mousedown",u),V.bind(a.__background,"touchstart",f),V.addClass(a.__background,"slider"),V.addClass(a.__foreground,"slider-fg");function u(_){document.activeElement.blur(),V.bind(window,"mousemove",h),V.bind(window,"mouseup",d),h(_)}c(u,"onMouseDown");function h(_){_.preventDefault();var g=l.__background.getBoundingClientRect();return l.setValue(K0(_.clientX,g.left,g.right,l.__min,l.__max)),!1}c(h,"onMouseDrag");function d(){V.unbind(window,"mousemove",h),V.unbind(window,"mouseup",d),l.__onFinishChange&&l.__onFinishChange.call(l,l.getValue())}c(d,"onMouseUp");function f(_){_.touches.length===1&&(V.bind(window,"touchmove",p),V.bind(window,"touchend",x),p(_))}c(f,"onTouchStart");function p(_){var g=_.touches[0].clientX,m=l.__background.getBoundingClientRect();l.setValue(K0(g,m.left,m.right,l.__min,l.__max))}c(p,"onTouchMove");function x(){V.unbind(window,"touchmove",p),V.unbind(window,"touchend",x),l.__onFinishChange&&l.__onFinishChange.call(l,l.getValue())}return c(x,"onTouchEnd"),a.updateDisplay(),a.__background.appendChild(a.__foreground),a.domElement.appendChild(a.__background),a}return c(e,"NumberControllerSlider"),Cn(e,[{key:"updateDisplay",value:c(function(){var n=(this.getValue()-this.__min)/(this.__max-this.__min);return this.__foreground.style.width=n*100+"%",Si(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"updateDisplay",this).call(this)},"updateDisplay")}]),e}(kg),zg=function(s){Mi(e,s);function e(t,n,i){An(this,e);var r=Ei(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n)),o=r;return r.__button=document.createElement("div"),r.__button.innerHTML=i===void 0?"Fire":i,V.bind(r.__button,"click",function(a){return a.preventDefault(),o.fire(),!1}),V.addClass(r.__button,"button"),r.domElement.appendChild(r.__button),r}return c(e,"FunctionController"),Cn(e,[{key:"fire",value:c(function(){this.__onChange&&this.__onChange.call(this),this.getValue().call(this.object),this.__onFinishChange&&this.__onFinishChange.call(this,this.getValue())},"fire")}]),e}(qi),eh=function(s){Mi(e,s);function e(t,n){An(this,e);var i=Ei(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n));i.__color=new Ot(i.getValue()),i.__temp=new Ot(0);var r=i;i.domElement=document.createElement("div"),V.makeSelectable(i.domElement,!1),i.__selector=document.createElement("div"),i.__selector.className="selector",i.__saturation_field=document.createElement("div"),i.__saturation_field.className="saturation-field",i.__field_knob=document.createElement("div"),i.__field_knob.className="field-knob",i.__field_knob_border="2px solid ",i.__hue_knob=document.createElement("div"),i.__hue_knob.className="hue-knob",i.__hue_field=document.createElement("div"),i.__hue_field.className="hue-field",i.__input=document.createElement("input"),i.__input.type="text",i.__input_textShadow="0 1px 1px ",V.bind(i.__input,"keydown",function(_){_.keyCode===13&&d.call(this)}),V.bind(i.__input,"blur",d),V.bind(i.__selector,"mousedown",function(){V.addClass(this,"drag").bind(window,"mouseup",function(){V.removeClass(r.__selector,"drag")})}),V.bind(i.__selector,"touchstart",function(){V.addClass(this,"drag").bind(window,"touchend",function(){V.removeClass(r.__selector,"drag")})});var o=document.createElement("div");J.extend(i.__selector.style,{width:"122px",height:"102px",padding:"3px",backgroundColor:"#222",boxShadow:"0px 1px 3px rgba(0,0,0,0.3)"}),J.extend(i.__field_knob.style,{position:"absolute",width:"12px",height:"12px",border:i.__field_knob_border+(i.__color.v<.5?"#fff":"#000"),boxShadow:"0px 1px 3px rgba(0,0,0,0.5)",borderRadius:"12px",zIndex:1}),J.extend(i.__hue_knob.style,{position:"absolute",width:"15px",height:"2px",borderRight:"4px solid #fff",zIndex:1}),J.extend(i.__saturation_field.style,{width:"100px",height:"100px",border:"1px solid #555",marginRight:"3px",display:"inline-block",cursor:"pointer"}),J.extend(o.style,{width:"100%",height:"100%",background:"none"}),J0(o,"top","rgba(0,0,0,0)","#000"),J.extend(i.__hue_field.style,{width:"15px",height:"100px",border:"1px solid #555",cursor:"ns-resize",position:"absolute",top:"3px",right:"3px"}),GE(i.__hue_field),J.extend(i.__input.style,{outline:"none",textAlign:"center",color:"#fff",border:0,fontWeight:"bold",textShadow:i.__input_textShadow+"rgba(0,0,0,0.7)"}),V.bind(i.__saturation_field,"mousedown",a),V.bind(i.__saturation_field,"touchstart",a),V.bind(i.__field_knob,"mousedown",a),V.bind(i.__field_knob,"touchstart",a),V.bind(i.__hue_field,"mousedown",l),V.bind(i.__hue_field,"touchstart",l);function a(_){p(_),V.bind(window,"mousemove",p),V.bind(window,"touchmove",p),V.bind(window,"mouseup",u),V.bind(window,"touchend",u)}c(a,"fieldDown");function l(_){x(_),V.bind(window,"mousemove",x),V.bind(window,"touchmove",x),V.bind(window,"mouseup",h),V.bind(window,"touchend",h)}c(l,"fieldDownH");function u(){V.unbind(window,"mousemove",p),V.unbind(window,"touchmove",p),V.unbind(window,"mouseup",u),V.unbind(window,"touchend",u),f()}c(u,"fieldUpSV");function h(){V.unbind(window,"mousemove",x),V.unbind(window,"touchmove",x),V.unbind(window,"mouseup",h),V.unbind(window,"touchend",h),f()}c(h,"fieldUpH");function d(){var _=Zu(this.value);_!==!1?(r.__color.__state=_,r.setValue(r.__color.toOriginal())):this.value=r.__color.toString()}c(d,"onBlur");function f(){r.__onFinishChange&&r.__onFinishChange.call(r,r.__color.toOriginal())}c(f,"onFinish"),i.__saturation_field.appendChild(o),i.__selector.appendChild(i.__field_knob),i.__selector.appendChild(i.__saturation_field),i.__selector.appendChild(i.__hue_field),i.__hue_field.appendChild(i.__hue_knob),i.domElement.appendChild(i.__input),i.domElement.appendChild(i.__selector),i.updateDisplay();function p(_){_.type.indexOf("touch")===-1&&_.preventDefault();var g=r.__saturation_field.getBoundingClientRect(),m=_.touches&&_.touches[0]||_,C=m.clientX,b=m.clientY,M=(C-g.left)/(g.right-g.left),P=1-(b-g.top)/(g.bottom-g.top);return P>1?P=1:P<0&&(P=0),M>1?M=1:M<0&&(M=0),r.__color.v=P,r.__color.s=M,r.setValue(r.__color.toOriginal()),!1}c(p,"setSV");function x(_){_.type.indexOf("touch")===-1&&_.preventDefault();var g=r.__hue_field.getBoundingClientRect(),m=_.touches&&_.touches[0]||_,C=m.clientY,b=1-(C-g.top)/(g.bottom-g.top);return b>1?b=1:b<0&&(b=0),r.__color.h=b*360,r.setValue(r.__color.toOriginal()),!1}return c(x,"setH"),i}return c(e,"ColorController"),Cn(e,[{key:"updateDisplay",value:c(function(){var n=Zu(this.getValue());if(n!==!1){var i=!1;J.each(Ot.COMPONENTS,function(a){if(!J.isUndefined(n[a])&&!J.isUndefined(this.__color.__state[a])&&n[a]!==this.__color.__state[a])return i=!0,{}},this),i&&J.extend(this.__color.__state,n)}J.extend(this.__temp.__state,this.__color.__state),this.__temp.a=1;var r=this.__color.v<.5||this.__color.s>.5?255:0,o=255-r;J.extend(this.__field_knob.style,{marginLeft:100*this.__color.s-7+"px",marginTop:100*(1-this.__color.v)-7+"px",backgroundColor:this.__temp.toHexString(),border:this.__field_knob_border+"rgb("+r+","+r+","+r+")"}),this.__hue_knob.style.marginTop=(1-this.__color.h/360)*100+"px",this.__temp.s=1,this.__temp.v=1,J0(this.__saturation_field,"left","#fff",this.__temp.toHexString()),this.__input.value=this.__color.toString(),J.extend(this.__input.style,{backgroundColor:this.__color.toHexString(),color:"rgb("+r+","+r+","+r+")",textShadow:this.__input_textShadow+"rgba("+o+","+o+","+o+",.7)"})},"updateDisplay")}]),e}(qi),VE=["-moz-","-o-","-webkit-","-ms-",""];function J0(s,e,t,n){s.style.background="",J.each(VE,function(i){s.style.cssText+="background: "+i+"linear-gradient("+e+", "+t+" 0%, "+n+" 100%); "})}c(J0,"linearGradient");function GE(s){s.style.background="",s.style.cssText+="background: -moz-linear-gradient(top,  #ff0000 0%, #ff00ff 17%, #0000ff 34%, #00ffff 50%, #00ff00 67%, #ffff00 84%, #ff0000 100%);",s.style.cssText+="background: -webkit-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);",s.style.cssText+="background: -o-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);",s.style.cssText+="background: -ms-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);",s.style.cssText+="background: linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);"}c(GE,"hueGradient");var WE={load:c(function(e,t){var n=t||document,i=n.createElement("link");i.type="text/css",i.rel="stylesheet",i.href=e,n.getElementsByTagName("head")[0].appendChild(i)},"load"),inject:c(function(e,t){var n=t||document,i=document.createElement("style");i.type="text/css",i.innerHTML=e;var r=n.getElementsByTagName("head")[0];try{r.appendChild(i)}catch{}},"inject")},XE=`<div id="dg-save" class="dg dialogue">

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

</div>`,jE=c(function(e,t){var n=e[t];return J.isArray(arguments[2])||J.isObject(arguments[2])?new kE(e,t,arguments[2]):J.isNumber(n)?J.isNumber(arguments[2])&&J.isNumber(arguments[3])?J.isNumber(arguments[4])?new Qu(e,t,arguments[2],arguments[3],arguments[4]):new Qu(e,t,arguments[2],arguments[3]):J.isNumber(arguments[4])?new Ma(e,t,{min:arguments[2],max:arguments[3],step:arguments[4]}):new Ma(e,t,{min:arguments[2],max:arguments[3]}):J.isString(n)?new zE(e,t):J.isFunction(n)?new zg(e,t,""):J.isBoolean(n)?new Bg(e,t):null},"ControllerFactory");function qE(s){setTimeout(s,1e3/60)}c(qE,"requestAnimationFrame$1");var YE=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||qE,$E=function(){function s(){An(this,s),this.backgroundElement=document.createElement("div"),J.extend(this.backgroundElement.style,{backgroundColor:"rgba(0,0,0,0.8)",top:0,left:0,display:"none",zIndex:"1000",opacity:0,WebkitTransition:"opacity 0.2s linear",transition:"opacity 0.2s linear"}),V.makeFullscreen(this.backgroundElement),this.backgroundElement.style.position="fixed",this.domElement=document.createElement("div"),J.extend(this.domElement.style,{position:"fixed",display:"none",zIndex:"1001",opacity:0,WebkitTransition:"-webkit-transform 0.2s ease-out, opacity 0.2s linear",transition:"transform 0.2s ease-out, opacity 0.2s linear"}),document.body.appendChild(this.backgroundElement),document.body.appendChild(this.domElement);var e=this;V.bind(this.backgroundElement,"click",function(){e.hide()})}return c(s,"CenteredDiv"),Cn(s,[{key:"show",value:c(function(){var t=this;this.backgroundElement.style.display="block",this.domElement.style.display="block",this.domElement.style.opacity=0,this.domElement.style.webkitTransform="scale(1.1)",this.layout(),J.defer(function(){t.backgroundElement.style.opacity=1,t.domElement.style.opacity=1,t.domElement.style.webkitTransform="scale(1)"})},"show")},{key:"hide",value:c(function(){var t=this,n=c(function i(){t.domElement.style.display="none",t.backgroundElement.style.display="none",V.unbind(t.domElement,"webkitTransitionEnd",i),V.unbind(t.domElement,"transitionend",i),V.unbind(t.domElement,"oTransitionEnd",i)},"hide");V.bind(this.domElement,"webkitTransitionEnd",n),V.bind(this.domElement,"transitionend",n),V.bind(this.domElement,"oTransitionEnd",n),this.backgroundElement.style.opacity=0,this.domElement.style.opacity=0,this.domElement.style.webkitTransform="scale(1.1)"},"hide")},{key:"layout",value:c(function(){this.domElement.style.left=window.innerWidth/2-V.getWidth(this.domElement)/2+"px",this.domElement.style.top=window.innerHeight/2-V.getHeight(this.domElement)/2+"px"},"layout")}]),s}(),KE=OE(`.dg ul{list-style:none;margin:0;padding:0;width:100%;clear:both}.dg.ac{position:fixed;top:0;left:0;right:0;height:0;z-index:0}.dg:not(.ac) .main{overflow:hidden}.dg.main{-webkit-transition:opacity .1s linear;-o-transition:opacity .1s linear;-moz-transition:opacity .1s linear;transition:opacity .1s linear}.dg.main.taller-than-window{overflow-y:auto}.dg.main.taller-than-window .close-button{opacity:1;margin-top:-1px;border-top:1px solid #2c2c2c}.dg.main ul.closed .close-button{opacity:1 !important}.dg.main:hover .close-button,.dg.main .close-button.drag{opacity:1}.dg.main .close-button{-webkit-transition:opacity .1s linear;-o-transition:opacity .1s linear;-moz-transition:opacity .1s linear;transition:opacity .1s linear;border:0;line-height:19px;height:20px;cursor:pointer;text-align:center;background-color:#000}.dg.main .close-button.close-top{position:relative}.dg.main .close-button.close-bottom{position:absolute}.dg.main .close-button:hover{background-color:#111}.dg.a{float:right;margin-right:15px;overflow-y:visible}.dg.a.has-save>ul.close-top{margin-top:0}.dg.a.has-save>ul.close-bottom{margin-top:27px}.dg.a.has-save>ul.closed{margin-top:0}.dg.a .save-row{top:0;z-index:1002}.dg.a .save-row.close-top{position:relative}.dg.a .save-row.close-bottom{position:fixed}.dg li{-webkit-transition:height .1s ease-out;-o-transition:height .1s ease-out;-moz-transition:height .1s ease-out;transition:height .1s ease-out;-webkit-transition:overflow .1s linear;-o-transition:overflow .1s linear;-moz-transition:overflow .1s linear;transition:overflow .1s linear}.dg li:not(.folder){cursor:auto;height:27px;line-height:27px;padding:0 4px 0 5px}.dg li.folder{padding:0;border-left:4px solid rgba(0,0,0,0)}.dg li.title{cursor:pointer;margin-left:-4px}.dg .closed li:not(.title),.dg .closed ul li,.dg .closed ul li>*{height:0;overflow:hidden;border:0}.dg .cr{clear:both;padding-left:3px;height:27px;overflow:hidden}.dg .property-name{cursor:default;float:left;clear:left;width:40%;overflow:hidden;text-overflow:ellipsis}.dg .cr.function .property-name{width:100%}.dg .c{float:left;width:60%;position:relative}.dg .c input[type=text]{border:0;margin-top:4px;padding:3px;width:100%;float:right}.dg .has-slider input[type=text]{width:30%;margin-left:0}.dg .slider{float:left;width:66%;margin-left:-5px;margin-right:0;height:19px;margin-top:4px}.dg .slider-fg{height:100%}.dg .c input[type=checkbox]{margin-top:7px}.dg .c select{margin-top:5px}.dg .cr.function,.dg .cr.function .property-name,.dg .cr.function *,.dg .cr.boolean,.dg .cr.boolean *{cursor:pointer}.dg .cr.color{overflow:visible}.dg .selector{display:none;position:absolute;margin-left:-9px;margin-top:23px;z-index:10}.dg .c:hover .selector,.dg .selector.drag{display:block}.dg li.save-row{padding:0}.dg li.save-row .button{display:inline-block;padding:0px 6px}.dg.dialogue{background-color:#222;width:460px;padding:15px;font-size:13px;line-height:15px}#dg-new-constructor{padding:10px;color:#222;font-family:Monaco, monospace;font-size:10px;border:0;resize:none;box-shadow:inset 1px 1px 1px #888;word-wrap:break-word;margin:12px 0;display:block;width:440px;overflow-y:scroll;height:100px;position:relative}#dg-local-explain{display:none;font-size:11px;line-height:17px;border-radius:3px;background-color:#333;padding:8px;margin-top:10px}#dg-local-explain code{font-size:10px}#dat-gui-save-locally{display:none}.dg{color:#eee;font:11px 'Lucida Grande', sans-serif;text-shadow:0 -1px 0 #111}.dg.main::-webkit-scrollbar{width:5px;background:#1a1a1a}.dg.main::-webkit-scrollbar-corner{height:0;display:none}.dg.main::-webkit-scrollbar-thumb{border-radius:5px;background:#676767}.dg li:not(.folder){background:#1a1a1a;border-bottom:1px solid #2c2c2c}.dg li.save-row{line-height:25px;background:#dad5cb;border:0}.dg li.save-row select{margin-left:5px;width:108px}.dg li.save-row .button{margin-left:5px;margin-top:1px;border-radius:2px;font-size:9px;line-height:7px;padding:4px 4px 5px 4px;background:#c5bdad;color:#fff;text-shadow:0 1px 0 #b0a58f;box-shadow:0 -1px 0 #b0a58f;cursor:pointer}.dg li.save-row .button.gears{background:#c5bdad url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAANCAYAAAB/9ZQ7AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAQJJREFUeNpiYKAU/P//PwGIC/ApCABiBSAW+I8AClAcgKxQ4T9hoMAEUrxx2QSGN6+egDX+/vWT4e7N82AMYoPAx/evwWoYoSYbACX2s7KxCxzcsezDh3evFoDEBYTEEqycggWAzA9AuUSQQgeYPa9fPv6/YWm/Acx5IPb7ty/fw+QZblw67vDs8R0YHyQhgObx+yAJkBqmG5dPPDh1aPOGR/eugW0G4vlIoTIfyFcA+QekhhHJhPdQxbiAIguMBTQZrPD7108M6roWYDFQiIAAv6Aow/1bFwXgis+f2LUAynwoIaNcz8XNx3Dl7MEJUDGQpx9gtQ8YCueB+D26OECAAQDadt7e46D42QAAAABJRU5ErkJggg==) 2px 1px no-repeat;height:7px;width:8px}.dg li.save-row .button:hover{background-color:#bab19e;box-shadow:0 -1px 0 #b0a58f}.dg li.folder{border-bottom:0}.dg li.title{padding-left:16px;background:#000 url(data:image/gif;base64,R0lGODlhBQAFAJEAAP////Pz8////////yH5BAEAAAIALAAAAAAFAAUAAAIIlI+hKgFxoCgAOw==) 6px 10px no-repeat;cursor:pointer;border-bottom:1px solid rgba(255,255,255,0.2)}.dg .closed li.title{background-image:url(data:image/gif;base64,R0lGODlhBQAFAJEAAP////Pz8////////yH5BAEAAAIALAAAAAAFAAUAAAIIlGIWqMCbWAEAOw==)}.dg .cr.boolean{border-left:3px solid #806787}.dg .cr.color{border-left:3px solid}.dg .cr.function{border-left:3px solid #e61d5f}.dg .cr.number{border-left:3px solid #2FA1D6}.dg .cr.number input[type=text]{color:#2FA1D6}.dg .cr.string{border-left:3px solid #1ed36f}.dg .cr.string input[type=text]{color:#1ed36f}.dg .cr.function:hover,.dg .cr.boolean:hover{background:#111}.dg .c input[type=text]{background:#303030;outline:none}.dg .c input[type=text]:hover{background:#3c3c3c}.dg .c input[type=text]:focus{background:#494949;color:#fff}.dg .c .slider{background:#303030;cursor:ew-resize}.dg .c .slider-fg{background:#2FA1D6;max-width:100%}.dg .c .slider:hover{background:#3c3c3c}.dg .c .slider:hover .slider-fg{background:#44abda}
`);WE.inject(KE);var Z0="dg",Q0=72,eg=20,io="Default",Mr=function(){try{return!!window.localStorage}catch{return!1}}(),Rr=void 0,tg=!0,hs=void 0,Oc=!1,Hg=[],ft=c(function s(e){var t=this,n=e||{};this.domElement=document.createElement("div"),this.__ul=document.createElement("ul"),this.domElement.appendChild(this.__ul),V.addClass(this.domElement,Z0),this.__folders={},this.__controllers=[],this.__rememberedObjects=[],this.__rememberedObjectIndecesToControllers=[],this.__listening=[],n=J.defaults(n,{closeOnTop:!1,autoPlace:!0,width:s.DEFAULT_WIDTH}),n=J.defaults(n,{resizable:n.autoPlace,hideable:n.autoPlace}),J.isUndefined(n.load)?n.load={preset:io}:n.preset&&(n.load.preset=n.preset),J.isUndefined(n.parent)&&n.hideable&&Hg.push(this),n.resizable=J.isUndefined(n.parent)&&n.resizable,n.autoPlace&&J.isUndefined(n.scrollable)&&(n.scrollable=!0);var i=Mr&&localStorage.getItem(ds(this,"isLocal"))==="true",r=void 0,o=void 0;if(Object.defineProperties(this,{parent:{get:c(function(){return n.parent},"get$$1")},scrollable:{get:c(function(){return n.scrollable},"get$$1")},autoPlace:{get:c(function(){return n.autoPlace},"get$$1")},closeOnTop:{get:c(function(){return n.closeOnTop},"get$$1")},preset:{get:c(function(){return t.parent?t.getRoot().preset:n.load.preset},"get$$1"),set:c(function(f){t.parent?t.getRoot().preset=f:n.load.preset=f,ew(this),t.revert()},"set$$1")},width:{get:c(function(){return n.width},"get$$1"),set:c(function(f){n.width=f,ih(t,f)},"set$$1")},name:{get:c(function(){return n.name},"get$$1"),set:c(function(f){n.name=f,o&&(o.innerHTML=n.name)},"set$$1")},closed:{get:c(function(){return n.closed},"get$$1"),set:c(function(f){n.closed=f,n.closed?V.addClass(t.__ul,s.CLASS_CLOSED):V.removeClass(t.__ul,s.CLASS_CLOSED),this.onResize(),t.__closeButton&&(t.__closeButton.innerHTML=f?s.TEXT_OPEN:s.TEXT_CLOSED)},"set$$1")},load:{get:c(function(){return n.load},"get$$1")},useLocalStorage:{get:c(function(){return i},"get$$1"),set:c(function(f){Mr&&(i=f,f?V.bind(window,"unload",r):V.unbind(window,"unload",r),localStorage.setItem(ds(t,"isLocal"),f))},"set$$1")}}),J.isUndefined(n.parent)){if(this.closed=n.closed||!1,V.addClass(this.domElement,s.CLASS_MAIN),V.makeSelectable(this.domElement,!1),Mr&&i){t.useLocalStorage=!0;var a=localStorage.getItem(ds(this,"gui"));a&&(n.load=JSON.parse(a))}this.__closeButton=document.createElement("div"),this.__closeButton.innerHTML=s.TEXT_CLOSED,V.addClass(this.__closeButton,s.CLASS_CLOSE_BUTTON),n.closeOnTop?(V.addClass(this.__closeButton,s.CLASS_CLOSE_TOP),this.domElement.insertBefore(this.__closeButton,this.domElement.childNodes[0])):(V.addClass(this.__closeButton,s.CLASS_CLOSE_BOTTOM),this.domElement.appendChild(this.__closeButton)),V.bind(this.__closeButton,"click",function(){t.closed=!t.closed})}else{n.closed===void 0&&(n.closed=!0);var l=document.createTextNode(n.name);V.addClass(l,"controller-name"),o=fd(t,l);var u=c(function(f){return f.preventDefault(),t.closed=!t.closed,!1},"onClickTitle");V.addClass(this.__ul,s.CLASS_CLOSED),V.addClass(o,"title"),V.bind(o,"click",u),n.closed||(this.closed=!1)}n.autoPlace&&(J.isUndefined(n.parent)&&(tg&&(hs=document.createElement("div"),V.addClass(hs,Z0),V.addClass(hs,s.CLASS_AUTO_PLACE_CONTAINER),document.body.appendChild(hs),tg=!1),hs.appendChild(this.domElement),V.addClass(this.domElement,s.CLASS_AUTO_PLACE)),this.parent||ih(t,n.width)),this.__resizeHandler=function(){t.onResizeDebounced()},V.bind(window,"resize",this.__resizeHandler),V.bind(this.__ul,"webkitTransitionEnd",this.__resizeHandler),V.bind(this.__ul,"transitionend",this.__resizeHandler),V.bind(this.__ul,"oTransitionEnd",this.__resizeHandler),this.onResize(),n.resizable&&QE(this),r=c(function(){Mr&&localStorage.getItem(ds(t,"isLocal"))==="true"&&localStorage.setItem(ds(t,"gui"),JSON.stringify(t.getSaveObject()))},"saveToLocalStorage"),this.saveToLocalStorageIfPossible=r;function h(){var d=t.getRoot();d.width+=1,J.defer(function(){d.width-=1})}c(h,"resetWidth"),n.parent||h()},"GUI");ft.toggleHide=function(){Oc=!Oc,J.each(Hg,function(s){s.domElement.style.display=Oc?"none":""})};ft.CLASS_AUTO_PLACE="a";ft.CLASS_AUTO_PLACE_CONTAINER="ac";ft.CLASS_MAIN="main";ft.CLASS_CONTROLLER_ROW="cr";ft.CLASS_TOO_TALL="taller-than-window";ft.CLASS_CLOSED="closed";ft.CLASS_CLOSE_BUTTON="close-button";ft.CLASS_CLOSE_TOP="close-top";ft.CLASS_CLOSE_BOTTOM="close-bottom";ft.CLASS_DRAG="drag";ft.DEFAULT_WIDTH=245;ft.TEXT_CLOSED="Close Controls";ft.TEXT_OPEN="Open Controls";ft._keydownHandler=function(s){document.activeElement.type!=="text"&&(s.which===Q0||s.keyCode===Q0)&&ft.toggleHide()};V.bind(window,"keydown",ft._keydownHandler,!1);J.extend(ft.prototype,{add:c(function(e,t){return Pr(this,e,t,{factoryArgs:Array.prototype.slice.call(arguments,2)})},"add"),addColor:c(function(e,t){return Pr(this,e,t,{color:!0})},"addColor"),remove:c(function(e){this.__ul.removeChild(e.__li),this.__controllers.splice(this.__controllers.indexOf(e),1);var t=this;J.defer(function(){t.onResize()})},"remove"),destroy:c(function(){if(this.parent)throw new Error("Only the root GUI should be removed with .destroy(). For subfolders, use gui.removeFolder(folder) instead.");this.autoPlace&&hs.removeChild(this.domElement);var e=this;J.each(this.__folders,function(t){e.removeFolder(t)}),V.unbind(window,"keydown",ft._keydownHandler,!1),ng(this)},"destroy"),addFolder:c(function(e){if(this.__folders[e]!==void 0)throw new Error('You already have a folder in this GUI by the name "'+e+'"');var t={name:e,parent:this};t.autoPlace=this.autoPlace,this.load&&this.load.folders&&this.load.folders[e]&&(t.closed=this.load.folders[e].closed,t.load=this.load.folders[e]);var n=new ft(t);this.__folders[e]=n;var i=fd(this,n.domElement);return V.addClass(i,"folder"),n},"addFolder"),removeFolder:c(function(e){this.__ul.removeChild(e.domElement.parentElement),delete this.__folders[e.name],this.load&&this.load.folders&&this.load.folders[e.name]&&delete this.load.folders[e.name],ng(e);var t=this;J.each(e.__folders,function(n){e.removeFolder(n)}),J.defer(function(){t.onResize()})},"removeFolder"),open:c(function(){this.closed=!1},"open"),close:c(function(){this.closed=!0},"close"),hide:c(function(){this.domElement.style.display="none"},"hide"),show:c(function(){this.domElement.style.display=""},"show"),onResize:c(function(){var e=this.getRoot();if(e.scrollable){var t=V.getOffset(e.__ul).top,n=0;J.each(e.__ul.childNodes,function(i){e.autoPlace&&i===e.__save_row||(n+=V.getHeight(i))}),window.innerHeight-t-eg<n?(V.addClass(e.domElement,ft.CLASS_TOO_TALL),e.__ul.style.height=window.innerHeight-t-eg+"px"):(V.removeClass(e.domElement,ft.CLASS_TOO_TALL),e.__ul.style.height="auto")}e.__resize_handle&&J.defer(function(){e.__resize_handle.style.height=e.__ul.offsetHeight+"px"}),e.__closeButton&&(e.__closeButton.style.width=e.width+"px")},"onResize"),onResizeDebounced:J.debounce(function(){this.onResize()},50),remember:c(function(){if(J.isUndefined(Rr)&&(Rr=new $E,Rr.domElement.innerHTML=XE),this.parent)throw new Error("You can only call remember on a top level GUI.");var e=this;J.each(Array.prototype.slice.call(arguments),function(t){e.__rememberedObjects.length===0&&ZE(e),e.__rememberedObjects.indexOf(t)===-1&&e.__rememberedObjects.push(t)}),this.autoPlace&&ih(this,this.width)},"remember"),getRoot:c(function(){for(var e=this;e.parent;)e=e.parent;return e},"getRoot"),getSaveObject:c(function(){var e=this.load;return e.closed=this.closed,this.__rememberedObjects.length>0&&(e.preset=this.preset,e.remembered||(e.remembered={}),e.remembered[this.preset]=ko(this)),e.folders={},J.each(this.__folders,function(t,n){e.folders[n]=t.getSaveObject()}),e},"getSaveObject"),save:c(function(){this.load.remembered||(this.load.remembered={}),this.load.remembered[this.preset]=ko(this),th(this,!1),this.saveToLocalStorageIfPossible()},"save"),saveAs:c(function(e){this.load.remembered||(this.load.remembered={},this.load.remembered[io]=ko(this,!0)),this.load.remembered[e]=ko(this),this.preset=e,nh(this,e,!0),this.saveToLocalStorageIfPossible()},"saveAs"),revert:c(function(e){J.each(this.__controllers,function(t){this.getRoot().load.remembered?Vg(e||this.getRoot(),t):t.setValue(t.initialValue),t.__onFinishChange&&t.__onFinishChange.call(t,t.getValue())},this),J.each(this.__folders,function(t){t.revert(t)}),e||th(this.getRoot(),!1)},"revert"),listen:c(function(e){var t=this.__listening.length===0;this.__listening.push(e),t&&Gg(this.__listening)},"listen"),updateDisplay:c(function(){J.each(this.__controllers,function(e){e.updateDisplay()}),J.each(this.__folders,function(e){e.updateDisplay()})},"updateDisplay")});function fd(s,e,t){var n=document.createElement("li");return e&&n.appendChild(e),t?s.__ul.insertBefore(n,t):s.__ul.appendChild(n),s.onResize(),n}c(fd,"addRow");function ng(s){V.unbind(window,"resize",s.__resizeHandler),s.saveToLocalStorageIfPossible&&V.unbind(window,"unload",s.saveToLocalStorageIfPossible)}c(ng,"removeListeners");function th(s,e){var t=s.__preset_select[s.__preset_select.selectedIndex];e?t.innerHTML=t.value+"*":t.innerHTML=t.value}c(th,"markPresetModified");function JE(s,e,t){if(t.__li=e,t.__gui=s,J.extend(t,{options:c(function(o){if(arguments.length>1){var a=t.__li.nextElementSibling;return t.remove(),Pr(s,t.object,t.property,{before:a,factoryArgs:[J.toArray(arguments)]})}if(J.isArray(o)||J.isObject(o)){var l=t.__li.nextElementSibling;return t.remove(),Pr(s,t.object,t.property,{before:l,factoryArgs:[o]})}},"options"),name:c(function(o){return t.__li.firstElementChild.firstElementChild.innerHTML=o,t},"name"),listen:c(function(){return t.__gui.listen(t),t},"listen"),remove:c(function(){return t.__gui.remove(t),t},"remove")}),t instanceof Qu){var n=new Ma(t.object,t.property,{min:t.__min,max:t.__max,step:t.__step});J.each(["updateDisplay","onChange","onFinishChange","step","min","max"],function(r){var o=t[r],a=n[r];t[r]=n[r]=function(){var l=Array.prototype.slice.call(arguments);return a.apply(n,l),o.apply(t,l)}}),V.addClass(e,"has-slider"),t.domElement.insertBefore(n.domElement,t.domElement.firstElementChild)}else if(t instanceof Ma){var i=c(function(o){if(J.isNumber(t.__min)&&J.isNumber(t.__max)){var a=t.__li.firstElementChild.firstElementChild.innerHTML,l=t.__gui.__listening.indexOf(t)>-1;t.remove();var u=Pr(s,t.object,t.property,{before:t.__li.nextElementSibling,factoryArgs:[t.__min,t.__max,t.__step]});return u.name(a),l&&u.listen(),u}return o},"r");t.min=J.compose(i,t.min),t.max=J.compose(i,t.max)}else t instanceof Bg?(V.bind(e,"click",function(){V.fakeEvent(t.__checkbox,"click")}),V.bind(t.__checkbox,"click",function(r){r.stopPropagation()})):t instanceof zg?(V.bind(e,"click",function(){V.fakeEvent(t.__button,"click")}),V.bind(e,"mouseover",function(){V.addClass(t.__button,"hover")}),V.bind(e,"mouseout",function(){V.removeClass(t.__button,"hover")})):t instanceof eh&&(V.addClass(e,"color"),t.updateDisplay=J.compose(function(r){return e.style.borderLeftColor=t.__color.toString(),r},t.updateDisplay),t.updateDisplay());t.setValue=J.compose(function(r){return s.getRoot().__preset_select&&t.isModified()&&th(s.getRoot(),!0),r},t.setValue)}c(JE,"augmentController");function Vg(s,e){var t=s.getRoot(),n=t.__rememberedObjects.indexOf(e.object);if(n!==-1){var i=t.__rememberedObjectIndecesToControllers[n];if(i===void 0&&(i={},t.__rememberedObjectIndecesToControllers[n]=i),i[e.property]=e,t.load&&t.load.remembered){var r=t.load.remembered,o=void 0;if(r[s.preset])o=r[s.preset];else if(r[io])o=r[io];else return;if(o[n]&&o[n][e.property]!==void 0){var a=o[n][e.property];e.initialValue=a,e.setValue(a)}}}}c(Vg,"recallSavedValue");function Pr(s,e,t,n){if(e[t]===void 0)throw new Error('Object "'+e+'" has no property "'+t+'"');var i=void 0;if(n.color)i=new eh(e,t);else{var r=[e,t].concat(n.factoryArgs);i=jE.apply(s,r)}n.before instanceof qi&&(n.before=n.before.__li),Vg(s,i),V.addClass(i.domElement,"c");var o=document.createElement("span");V.addClass(o,"property-name"),o.innerHTML=i.property;var a=document.createElement("div");a.appendChild(o),a.appendChild(i.domElement);var l=fd(s,a,n.before);return V.addClass(l,ft.CLASS_CONTROLLER_ROW),i instanceof eh?V.addClass(l,"color"):V.addClass(l,UE(i.getValue())),JE(s,l,i),s.__controllers.push(i),i}c(Pr,"_add");function ds(s,e){return document.location.href+"."+e}c(ds,"getLocalStorageHash");function nh(s,e,t){var n=document.createElement("option");n.innerHTML=e,n.value=e,s.__preset_select.appendChild(n),t&&(s.__preset_select.selectedIndex=s.__preset_select.length-1)}c(nh,"addPresetOption");function ig(s,e){e.style.display=s.useLocalStorage?"block":"none"}c(ig,"showHideExplain");function ZE(s){var e=s.__save_row=document.createElement("li");V.addClass(s.domElement,"has-save"),s.__ul.insertBefore(e,s.__ul.firstChild),V.addClass(e,"save-row");var t=document.createElement("span");t.innerHTML="&nbsp;",V.addClass(t,"button gears");var n=document.createElement("span");n.innerHTML="Save",V.addClass(n,"button"),V.addClass(n,"save");var i=document.createElement("span");i.innerHTML="New",V.addClass(i,"button"),V.addClass(i,"save-as");var r=document.createElement("span");r.innerHTML="Revert",V.addClass(r,"button"),V.addClass(r,"revert");var o=s.__preset_select=document.createElement("select");if(s.load&&s.load.remembered?J.each(s.load.remembered,function(d,f){nh(s,f,f===s.preset)}):nh(s,io,!1),V.bind(o,"change",function(){for(var d=0;d<s.__preset_select.length;d++)s.__preset_select[d].innerHTML=s.__preset_select[d].value;s.preset=this.value}),e.appendChild(o),e.appendChild(t),e.appendChild(n),e.appendChild(i),e.appendChild(r),Mr){var a=document.getElementById("dg-local-explain"),l=document.getElementById("dg-local-storage"),u=document.getElementById("dg-save-locally");u.style.display="block",localStorage.getItem(ds(s,"isLocal"))==="true"&&l.setAttribute("checked","checked"),ig(s,a),V.bind(l,"change",function(){s.useLocalStorage=!s.useLocalStorage,ig(s,a)})}var h=document.getElementById("dg-new-constructor");V.bind(h,"keydown",function(d){d.metaKey&&(d.which===67||d.keyCode===67)&&Rr.hide()}),V.bind(t,"click",function(){h.innerHTML=JSON.stringify(s.getSaveObject(),void 0,2),Rr.show(),h.focus(),h.select()}),V.bind(n,"click",function(){s.save()}),V.bind(i,"click",function(){var d=prompt("Enter a new preset name.");d&&s.saveAs(d)}),V.bind(r,"click",function(){s.revert()})}c(ZE,"addSaveMenu");function QE(s){var e=void 0;s.__resize_handle=document.createElement("div"),J.extend(s.__resize_handle.style,{width:"6px",marginLeft:"-3px",height:"200px",cursor:"ew-resize",position:"absolute"});function t(r){return r.preventDefault(),s.width+=e-r.clientX,s.onResize(),e=r.clientX,!1}c(t,"drag");function n(){V.removeClass(s.__closeButton,ft.CLASS_DRAG),V.unbind(window,"mousemove",t),V.unbind(window,"mouseup",n)}c(n,"dragStop");function i(r){return r.preventDefault(),e=r.clientX,V.addClass(s.__closeButton,ft.CLASS_DRAG),V.bind(window,"mousemove",t),V.bind(window,"mouseup",n),!1}c(i,"dragStart"),V.bind(s.__resize_handle,"mousedown",i),V.bind(s.__closeButton,"mousedown",i),s.domElement.insertBefore(s.__resize_handle,s.domElement.firstElementChild)}c(QE,"addResizeHandle");function ih(s,e){s.domElement.style.width=e+"px",s.__save_row&&s.autoPlace&&(s.__save_row.style.width=e+"px"),s.__closeButton&&(s.__closeButton.style.width=e+"px")}c(ih,"setWidth");function ko(s,e){var t={};return J.each(s.__rememberedObjects,function(n,i){var r={},o=s.__rememberedObjectIndecesToControllers[i];J.each(o,function(a,l){r[l]=e?a.initialValue:a.getValue()}),t[i]=r}),t}c(ko,"getCurrentPreset");function ew(s){for(var e=0;e<s.__preset_select.length;e++)s.__preset_select[e].value===s.preset&&(s.__preset_select.selectedIndex=e)}c(ew,"setPresetSelectIndex");function Gg(s){s.length!==0&&YE.call(window,function(){Gg(s)}),J.each(s,function(e){e.updateDisplay()})}c(Gg,"updateDisplays");var tw=ft;const Up=class Up{constructor(e){this.globeRadius=e,this.gui=new tw}addObjectOptions(e,t,{lat:n,lng:i,rotation:r,landHeight:o},a){const l=this.gui.__folders[e]??this.gui.addFolder(e),u=t.getObject(),h=l.addFolder(u.name+a);h.add(u,"visible"),h.add({scale:u.scale.x},"scale",0,5).onChange(_=>{u.scale.setScalar(_)});const d=u.clone();r&&d.rotateY(-pn.degToRad(r));const f=d.rotation.clone(),p={y:r??0};h.add(p,"y",0,360).name("rotation").onChange(_=>{u.rotation.copy(f),u.rotateY(pn.degToRad(_))});const x={lat:n,lng:i,landHeight:o??0};Object.keys(x).forEach(_=>{h.add(x,_,-360,360,1).onChange(()=>{t.applyLatLng(this.globeRadius+(x.landHeight??0),x.lat,x.lng),f.copy(u.rotation),u.rotateY(pn.degToRad(p.y))})})}};c(Up,"ContinentDebugControls");let sh=Up;const Fp=class Fp{constructor(e,t=!1){this.properties=e,t&&(this.debugControls=new sh(e.globeRadius)),this.continent=this.constructContinent(),this.continent.name&&this.continent.traverse(n=>{n.userData.continent=this.continent.name})}getObject(){return this.continent}addTo(e){e.add(this.continent)}constructObject(e,t){const{lat:n,lng:i,rotation:r,landHeight:o=Ie.LevelOne,...a}=t,l=new e({...a});return l.applyLatLng(this.properties.globeRadius+o,n,i),r!==void 0&&l.getObject().rotateY(pn.degToRad(r)),l}constructObjectsGroup(e,t,n){const i=new xt;return i.name=t,n.forEach((r,o)=>{const a=this.constructObject(e,r);i.add(a.getObject()),this.debugControls?.addObjectOptions(t,a,r,o)}),i}constructLands(e,t){return this.constructObjectsGroup($u,e,t)}constructTrees(e,t){return this.constructObjectsGroup(Ju,e,t)}constructMountains(e,t){return this.constructObjectsGroup(Ku,e,t)}constructHouses(e,t){return this.constructObjectsGroup(qu,e,t)}constructBuildings(e,t){return this.constructObjectsGroup(ju,e,t)}constructHuts(e,t){return this.constructObjectsGroup(Yu,e,t)}};c(Fp,"BaseContinent");let Xi=Fp;const nw=[{scale:1.5,landHeight:Ie.LevelTwo,lat:20,lng:100,rotation:10},{scale:1,landHeight:Ie.LevelOne,lat:40,lng:90,rotation:0}],iw=[{scale:1.2,landHeight:Ie.LevelOne,lat:18,lng:88},{scale:1.5,landHeight:Ie.LevelOne,lat:23,lng:88},{scale:2,landHeight:Ie.LevelOne,lat:21,lng:83},{scale:1.2,landHeight:Ie.LevelOne,lat:40,lng:110},{scale:1.5,landHeight:Ie.LevelOne,lat:40,lng:105},{scale:2,landHeight:Ie.LevelOne,lat:35,lng:110}];var Ls;let sw=(Ls=class extends Xi{constructContinent(){const e=new xt;return e.name="aboutContinent",e.add(this.constructTrees("aboutTrees",iw)),e.add(this.constructHouses("aboutHouses",nw)),e}},c(Ls,"AboutContinent"),Ls);const rw=[{size:15,lat:53,lng:4,rotation:7,landHeight:Ie.LevelTwo-.75}],ow=[{scale:1,lat:48,lng:-20,landHeight:Ie.LevelTwo},{scale:1.2,lat:31,lng:-14,rotation:36,landHeight:Ie.LevelOne}],aw=[{scale:1,lat:52,lng:-12,landHeight:Ie.LevelTwo},{scale:1.2,lat:48,lng:-10,landHeight:Ie.LevelTwo},{scale:1.2,lat:32,lng:-6,landHeight:Ie.LevelOne},{scale:1.5,lat:36,lng:-6,landHeight:Ie.LevelOne},{scale:1,lat:33,lng:-2,landHeight:Ie.LevelOne}],cw=[{lat:40,lng:18,landHeight:Ie.LevelOne},{lat:35,lng:8,landHeight:Ie.LevelOne}];var Is;let lw=(Is=class extends Xi{constructContinent(){const e=new xt;return e.name="projectsContinent",e.add(this.constructMountains("projectsMountains",rw)),e.add(this.constructHouses("projectsHouses",ow)),e.add(this.constructTrees("projectsTrees",aw)),e.add(this.constructHuts("projectsHuts",cw)),e}},c(Is,"ProjectsContinent"),Is);function sg(s,e){if(e===d_)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(e===Al||e===bg){let t=s.getIndex();if(t===null){const o=[],a=s.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);s.setIndex(o),t=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}const n=t.count-2,i=[];if(e===Al)for(let o=1;o<=n;o++)i.push(t.getX(0)),i.push(t.getX(o)),i.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(i.push(t.getX(o)),i.push(t.getX(o+1)),i.push(t.getX(o+2))):(i.push(t.getX(o+2)),i.push(t.getX(o+1)),i.push(t.getX(o)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=s.clone();return r.setIndex(i),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),s}c(sg,"toTrianglesDrawMode");const Bp=class Bp extends yi{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new lh(t)}),this.register(function(t){return new uh(t)}),this.register(function(t){return new vh(t)}),this.register(function(t){return new bh(t)}),this.register(function(t){return new yh(t)}),this.register(function(t){return new dh(t)}),this.register(function(t){return new fh(t)}),this.register(function(t){return new ph(t)}),this.register(function(t){return new mh(t)}),this.register(function(t){return new ch(t)}),this.register(function(t){return new gh(t)}),this.register(function(t){return new hh(t)}),this.register(function(t){return new _h(t)}),this.register(function(t){return new xh(t)}),this.register(function(t){return new oh(t)}),this.register(function(t){return new Sh(t)}),this.register(function(t){return new Mh(t)})}load(e,t,n,i){const r=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const u=zi.extractUrlBase(e);o=zi.resolveURL(u,this.path)}else o=zi.extractUrlBase(e);this.manager.itemStart(e);const a=c(function(u){i?i(u):console.error(u),r.manager.itemError(e),r.manager.itemEnd(e)},"_onError"),l=new _a(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(u){try{r.parse(u,o,function(h){t(h),r.manager.itemEnd(e)},a)}catch(h){a(h)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let r;const o={},a={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===Wg){try{o[Qe.KHR_BINARY_GLTF]=new Eh(e)}catch(d){i&&i(d);return}r=JSON.parse(o[Qe.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const u=new Lh(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});u.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){const d=this.pluginCallbacks[h](u);d.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[d.name]=d,o[d.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){const d=r.extensionsUsed[h],f=r.extensionsRequired||[];switch(d){case Qe.KHR_MATERIALS_UNLIT:o[d]=new ah;break;case Qe.KHR_DRACO_MESH_COMPRESSION:o[d]=new wh(r,this.dracoLoader);break;case Qe.KHR_TEXTURE_TRANSFORM:o[d]=new Th;break;case Qe.KHR_MESH_QUANTIZATION:o[d]=new Ah;break;default:f.indexOf(d)>=0&&a[d]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+d+'".')}}u.setExtensions(o),u.setPlugins(a),u.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,r){n.parse(e,t,i,r)})}};c(Bp,"GLTFLoader");let rh=Bp;function uw(){let s={};return{get:c(function(e){return s[e]},"get"),add:c(function(e,t){s[e]=t},"add"),remove:c(function(e){delete s[e]},"remove"),removeAll:c(function(){s={}},"removeAll")}}c(uw,"GLTFRegistry");const Qe={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},kp=class kp{constructor(e){this.parser=e,this.name=Qe.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let u;const h=new Ge(16777215);l.color!==void 0&&h.setRGB(l.color[0],l.color[1],l.color[2],jt);const d=l.range!==void 0?l.range:0;switch(l.type){case"directional":u=new va(h),u.target.position.set(0,0,-1),u.add(u.target);break;case"point":u=new pu(h),u.distance=d;break;case"spot":u=new du(h),u.distance=d,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,u.angle=l.spot.outerConeAngle,u.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,u.target.position.set(0,0,-1),u.add(u.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return u.position.set(0,0,0),Ln(u,l),l.intensity!==void 0&&(u.intensity=l.intensity),u.name=t.createUniqueName(l.name||"light_"+e),i=Promise.resolve(u),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,r=n.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return n._getNodeRef(t.cache,a,l)})}};c(kp,"GLTFLightsExtension");let oh=kp;const zp=class zp{constructor(){this.name=Qe.KHR_MATERIALS_UNLIT}getMaterialType(){return $n}extendParams(e,t,n){const i=[];e.color=new Ge(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],jt),e.opacity=o[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",r.baseColorTexture,Dt))}return Promise.all(i)}};c(zp,"GLTFMaterialsUnlitExtension");let ah=zp;const Hp=class Hp{constructor(e){this.parser=e,this.name=Qe.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}};c(Hp,"GLTFMaterialsEmissiveStrengthExtension");let ch=Hp;const Vp=class Vp{constructor(e){this.parser=e,this.name=Qe.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:xn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new ce(a,a)}return Promise.all(r)}};c(Vp,"GLTFMaterialsClearcoatExtension");let lh=Vp;const Gp=class Gp{constructor(e){this.parser=e,this.name=Qe.KHR_MATERIALS_DISPERSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:xn}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}};c(Gp,"GLTFMaterialsDispersionExtension");let uh=Gp;const Wp=class Wp{constructor(e){this.parser=e,this.name=Qe.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:xn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}};c(Wp,"GLTFMaterialsIridescenceExtension");let hh=Wp;const Xp=class Xp{constructor(e){this.parser=e,this.name=Qe.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:xn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[];t.sheenColor=new Ge(0,0,0),t.sheenRoughness=0,t.sheen=1;const o=i.extensions[this.name];if(o.sheenColorFactor!==void 0){const a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],jt)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,Dt)),o.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}};c(Xp,"GLTFMaterialsSheenExtension");let dh=Xp;const jp=class jp{constructor(e){this.parser=e,this.name=Qe.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:xn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(r)}};c(jp,"GLTFMaterialsTransmissionExtension");let fh=jp;const qp=class qp{constructor(e){this.parser=e,this.name=Qe.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:xn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return t.attenuationColor=new Ge().setRGB(a[0],a[1],a[2],jt),Promise.all(r)}};c(qp,"GLTFMaterialsVolumeExtension");let ph=qp;const Yp=class Yp{constructor(e){this.parser=e,this.name=Qe.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:xn}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}};c(Yp,"GLTFMaterialsIorExtension");let mh=Yp;const $p=class $p{constructor(e){this.parser=e,this.name=Qe.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:xn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return t.specularColor=new Ge().setRGB(a[0],a[1],a[2],jt),o.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,Dt)),Promise.all(r)}};c($p,"GLTFMaterialsSpecularExtension");let gh=$p;const Kp=class Kp{constructor(e){this.parser=e,this.name=Qe.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:xn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(r)}};c(Kp,"GLTFMaterialsBumpExtension");let xh=Kp;const Jp=class Jp{constructor(e){this.parser=e,this.name=Qe.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:xn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(r)}};c(Jp,"GLTFMaterialsAnisotropyExtension");let _h=Jp;const Zp=class Zp{constructor(e){this.parser=e,this.name=Qe.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const r=i.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}};c(Zp,"GLTFTextureBasisUExtension");let vh=Zp;const Qp=class Qp{constructor(e){this.parser=e,this.name=Qe.EXT_TEXTURE_WEBP}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=i.images[o.source];let l=n.textureLoader;if(a.uri){const u=n.options.manager.getHandler(a.uri);u!==null&&(l=u)}return n.loadTextureImage(e,o.source,l)}};c(Qp,"GLTFTextureWebPExtension");let bh=Qp;const em=class em{constructor(e){this.parser=e,this.name=Qe.EXT_TEXTURE_AVIF}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=i.images[o.source];let l=n.textureLoader;if(a.uri){const u=n.options.manager.getHandler(a.uri);u!==null&&(l=u)}return n.loadTextureImage(e,o.source,l)}};c(em,"GLTFTextureAVIFExtension");let yh=em;const tm=class tm{constructor(e){this.name=Qe.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){const l=i.byteOffset||0,u=i.byteLength||0,h=i.count,d=i.byteStride,f=new Uint8Array(a,l,u);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(h,d,f,i.mode,i.filter).then(function(p){return p.buffer}):o.ready.then(function(){const p=new ArrayBuffer(h*d);return o.decodeGltfBuffer(new Uint8Array(p),h,d,f,i.mode,i.filter),p})})}else return null}};c(tm,"GLTFMeshoptCompression");let Sh=tm;const nm=class nm{constructor(e){this.name=Qe.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const u of i.primitives)if(u.mode!==hn.TRIANGLES&&u.mode!==hn.TRIANGLE_STRIP&&u.mode!==hn.TRIANGLE_FAN&&u.mode!==void 0)return null;const o=n.extensions[this.name].attributes,a=[],l={};for(const u in o)a.push(this.parser.getDependency("accessor",o[u]).then(h=>(l[u]=h,l[u])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(u=>{const h=u.pop(),d=h.isGroup?h.children:[h],f=u[0].count,p=[];for(const x of d){const _=new qe,g=new L,m=new At,C=new L(1,1,1),b=new kl(x.geometry,x.material,f);for(let M=0;M<f;M++)l.TRANSLATION&&g.fromBufferAttribute(l.TRANSLATION,M),l.ROTATION&&m.fromBufferAttribute(l.ROTATION,M),l.SCALE&&C.fromBufferAttribute(l.SCALE,M),b.setMatrixAt(M,_.compose(g,m,C));for(const M in l)if(M==="_COLOR_0"){const P=l[M];b.instanceColor=new Xr(P.array,P.itemSize,P.normalized)}else M!=="TRANSLATION"&&M!=="ROTATION"&&M!=="SCALE"&&x.geometry.setAttribute(M,l[M]);yt.prototype.copy.call(b,x),this.parser.assignFinalMaterial(b),p.push(b)}return h.isGroup?(h.clear(),h.add(...p),h):p[0]}))}};c(nm,"GLTFMeshGpuInstancing");let Mh=nm;const Wg="glTF",_r=12,rg={JSON:1313821514,BIN:5130562},im=class im{constructor(e){this.name=Qe.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,_r),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Wg)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-_r,r=new DataView(e,_r);let o=0;for(;o<i;){const a=r.getUint32(o,!0);o+=4;const l=r.getUint32(o,!0);if(o+=4,l===rg.JSON){const u=new Uint8Array(e,_r+o,a);this.content=n.decode(u)}else if(l===rg.BIN){const u=_r+o;this.body=e.slice(u,u+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}};c(im,"GLTFBinaryExtension");let Eh=im;const sm=class sm{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Qe.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},u={};for(const h in o){const d=Rh[h]||h.toLowerCase();a[d]=o[h]}for(const h in e.attributes){const d=Rh[h]||h.toLowerCase();if(o[h]!==void 0){const f=n.accessors[e.attributes[h]],p=ys[f.componentType];u[d]=p.name,l[d]=f.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(d,f){i.decodeDracoFile(h,function(p){for(const x in p.attributes){const _=p.attributes[x],g=l[x];g!==void 0&&(_.normalized=g)}d(p)},a,u,jt,f)})})}};c(sm,"GLTFDracoMeshCompressionExtension");let wh=sm;const rm=class rm{constructor(){this.name=Qe.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}};c(rm,"GLTFTextureTransformExtension");let Th=rm;const om=class om{constructor(){this.name=Qe.KHR_MESH_QUANTIZATION}};c(om,"GLTFMeshQuantizationExtension");let Ah=om;const am=class am extends Wi{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i*3+i;for(let o=0;o!==i;o++)t[o]=n[r+o];return t}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,u=a*3,h=i-t,d=(n-t)/h,f=d*d,p=f*d,x=e*u,_=x-u,g=-2*p+3*f,m=p-f,C=1-g,b=m-f+d;for(let M=0;M!==a;M++){const P=o[_+M+a],R=o[_+M+l]*h,I=o[x+M+a],F=o[x+M]*h;r[M]=C*P+b*R+g*I+m*F}return r}};c(am,"GLTFCubicSplineInterpolant");let Ea=am;const hw=new At,cm=class cm extends Ea{interpolate_(e,t,n,i){const r=super.interpolate_(e,t,n,i);return hw.fromArray(r).normalize().toArray(r),r}};c(cm,"GLTFCubicSplineQuaternionInterpolant");let Ch=cm;const hn={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},ys={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},og={9728:Xt,9729:Wt,9984:fg,9985:zo,9986:vr,9987:Yn},ag={33071:Dn,33648:jo,10497:Qs},Nc={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Rh={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},ci={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},dw={CUBICSPLINE:void 0,LINEAR:kr,STEP:Br},Uc={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function fw(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new eo({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Qn})),s.DefaultMaterial}c(fw,"createDefaultMaterial");function Oi(s,e,t){for(const n in t.extensions)s[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}c(Oi,"addUnknownExtensionsToUserData");function Ln(s,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(s.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}c(Ln,"assignExtrasToUserData");function pw(s,e,t){let n=!1,i=!1,r=!1;for(let u=0,h=e.length;u<h;u++){const d=e[u];if(d.POSITION!==void 0&&(n=!0),d.NORMAL!==void 0&&(i=!0),d.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(s);const o=[],a=[],l=[];for(let u=0,h=e.length;u<h;u++){const d=e[u];if(n){const f=d.POSITION!==void 0?t.getDependency("accessor",d.POSITION):s.attributes.position;o.push(f)}if(i){const f=d.NORMAL!==void 0?t.getDependency("accessor",d.NORMAL):s.attributes.normal;a.push(f)}if(r){const f=d.COLOR_0!==void 0?t.getDependency("accessor",d.COLOR_0):s.attributes.color;l.push(f)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(u){const h=u[0],d=u[1],f=u[2];return n&&(s.morphAttributes.position=h),i&&(s.morphAttributes.normal=d),r&&(s.morphAttributes.color=f),s.morphTargetsRelative=!0,s})}c(pw,"addMorphTargets");function mw(s,e){if(s.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)s.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(s.morphTargetInfluences.length===t.length){s.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)s.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}c(mw,"updateMorphTargets");function gw(s){let e;const t=s.extensions&&s.extensions[Qe.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Fc(t.attributes):e=s.indices+":"+Fc(s.attributes)+":"+s.mode,s.targets!==void 0)for(let n=0,i=s.targets.length;n<i;n++)e+=":"+Fc(s.targets[n]);return e}c(gw,"createPrimitiveKey");function Fc(s){let e="";const t=Object.keys(s).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+s[t[n]]+";";return e}c(Fc,"createAttributesKey");function Ph(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}c(Ph,"getNormalizedComponentScale");function xw(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":s.search(/\.ktx2($|\?)/i)>0||s.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}c(xw,"getImageURIMimeType");const _w=new qe,lm=class lm{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new uw,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,r=!1,o=-1;if(typeof navigator<"u"){const a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;const l=a.match(/Version\/(\d+)/);i=n&&l?parseInt(l[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||r&&o<98?this.textureLoader=new uu(this.options.manager):this.textureLoader=new xu(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new _a(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){const a={scene:o[0][i.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:i.asset,parser:n,userData:{}};return Oi(r,a,i),Ln(a,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){for(const l of a.scenes)l.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=t.length;i<r;i++){const o=t[i].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let i=0,r=e.length;i<r;i++){const o=e[i];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),r=c((o,a)=>{const l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(const[u,h]of o.children.entries())r(h,a.children[u])},"updateMappings");return r(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const r=e(t[i]);r&&n.push(r)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(r,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Qe.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(r,o){n.load(zi.resolveURL(t.uri,i.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const o=Nc[i.type],a=ys[i.componentType],l=i.normalized===!0,u=new a(i.count*o);return Promise.resolve(new Ut(u,o,l))}const r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(o){const a=o[0],l=Nc[i.type],u=ys[i.componentType],h=u.BYTES_PER_ELEMENT,d=h*l,f=i.byteOffset||0,p=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,x=i.normalized===!0;let _,g;if(p&&p!==d){const m=Math.floor(f/p),C="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+m+":"+i.count;let b=t.cache.get(C);b||(_=new u(a,m*p,i.count*p/h),b=new Nl(_,p/h),t.cache.add(C,b)),g=new Ul(b,l,f%p/h,x)}else a===null?_=new u(i.count*l):_=new u(a,f,i.count*l),g=new Ut(_,l,x);if(i.sparse!==void 0){const m=Nc.SCALAR,C=ys[i.sparse.indices.componentType],b=i.sparse.indices.byteOffset||0,M=i.sparse.values.byteOffset||0,P=new C(o[1],b,i.sparse.count*m),R=new u(o[2],M,i.sparse.count*l);a!==null&&(g=new Ut(g.array.slice(),g.itemSize,g.normalized)),g.normalized=!1;for(let I=0,F=P.length;I<F;I++){const w=P[I];if(g.setX(w,R[I*l]),l>=2&&g.setY(w,R[I*l+1]),l>=3&&g.setZ(w,R[I*l+2]),l>=4&&g.setW(w,R[I*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}g.normalized=x}return g})}loadTexture(e){const t=this.json,n=this.options,r=t.textures[e].source,o=t.images[r];let a=this.textureLoader;if(o.uri){const l=n.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){const i=this,r=this.json,o=r.textures[e],a=r.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];const u=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=o.name||a.name||"",h.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(h.name=a.uri);const f=(r.samplers||{})[o.sampler]||{};return h.magFilter=og[f.magFilter]||Wt,h.minFilter=og[f.minFilter]||Yn,h.wrapS=ag[f.wrapS]||Qs,h.wrapT=ag[f.wrapT]||Qs,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==Xt&&h.minFilter!==Wt,i.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[l]=u,u}loadImageSource(e,t){const n=this,i=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(d=>d.clone());const o=i.images[e],a=self.URL||self.webkitURL;let l=o.uri||"",u=!1;if(o.bufferView!==void 0)l=n.getDependency("bufferView",o.bufferView).then(function(d){u=!0;const f=new Blob([d],{type:o.mimeType});return l=a.createObjectURL(f),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const h=Promise.resolve(l).then(function(d){return new Promise(function(f,p){let x=f;t.isImageBitmapLoader===!0&&(x=c(function(_){const g=new Ft(_);g.needsUpdate=!0,f(g)},"onLoad")),t.load(zi.resolveURL(d,r.path),x,void 0,p)})}).then(function(d){return u===!0&&a.revokeObjectURL(l),Ln(d,o),d.userData.mimeType=o.mimeType||xw(o.uri),d}).catch(function(d){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),d});return this.sourceCache[e]=h,h}assignTexture(e,t,n,i){const r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[Qe.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[Qe.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const l=r.associations.get(o);o=r.extensions[Qe.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,l)}}return i!==void 0&&(o.colorSpace=i),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new Yr,rn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(a,l)),n=l}else if(e.isLine){const a="LineBasicMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new na,rn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(a,l)),n=l}if(i||r||o){let a="ClonedMaterial:"+n.uuid+":";i&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=n.clone(),r&&(l.vertexColors=!0),o&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return eo}loadMaterial(e){const t=this,n=this.json,i=this.extensions,r=n.materials[e];let o;const a={},l=r.extensions||{},u=[];if(l[Qe.KHR_MATERIALS_UNLIT]){const d=i[Qe.KHR_MATERIALS_UNLIT];o=d.getMaterialType(),u.push(d.extendParams(a,r,t))}else{const d=r.pbrMetallicRoughness||{};if(a.color=new Ge(1,1,1),a.opacity=1,Array.isArray(d.baseColorFactor)){const f=d.baseColorFactor;a.color.setRGB(f[0],f[1],f[2],jt),a.opacity=f[3]}d.baseColorTexture!==void 0&&u.push(t.assignTexture(a,"map",d.baseColorTexture,Dt)),a.metalness=d.metallicFactor!==void 0?d.metallicFactor:1,a.roughness=d.roughnessFactor!==void 0?d.roughnessFactor:1,d.metallicRoughnessTexture!==void 0&&(u.push(t.assignTexture(a,"metalnessMap",d.metallicRoughnessTexture)),u.push(t.assignTexture(a,"roughnessMap",d.metallicRoughnessTexture))),o=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),u.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=Sn);const h=r.alphaMode||Uc.OPAQUE;if(h===Uc.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,h===Uc.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==$n&&(u.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new ce(1,1),r.normalTexture.scale!==void 0)){const d=r.normalTexture.scale;a.normalScale.set(d,d)}if(r.occlusionTexture!==void 0&&o!==$n&&(u.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==$n){const d=r.emissiveFactor;a.emissive=new Ge().setRGB(d[0],d[1],d[2],jt)}return r.emissiveTexture!==void 0&&o!==$n&&u.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,Dt)),Promise.all(u).then(function(){const d=new o(a);return r.name&&(d.name=r.name),Ln(d,r),t.associations.set(d,{materials:e}),r.extensions&&Oi(i,d,r),d})}createUniqueName(e){const t=gt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function r(a){return n[Qe.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return cg(l,a,t)})}c(r,"createDracoPrimitive");const o=[];for(let a=0,l=e.length;a<l;a++){const u=e[a],h=gw(u),d=i[h];if(d)o.push(d.promise);else{let f;u.extensions&&u.extensions[Qe.KHR_DRACO_MESH_COMPRESSION]?f=r(u):f=cg(new qt,u,t),i[h]={primitive:u,promise:f},o.push(f)}}return Promise.all(o)}loadMesh(e){const t=this,n=this.json,i=this.extensions,r=n.meshes[e],o=r.primitives,a=[];for(let l=0,u=o.length;l<u;l++){const h=o[l].material===void 0?fw(this.cache):this.getDependency("material",o[l].material);a.push(h)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(l){const u=l.slice(0,l.length-1),h=l[l.length-1],d=[];for(let p=0,x=h.length;p<x;p++){const _=h[p],g=o[p];let m;const C=u[p];if(g.mode===hn.TRIANGLES||g.mode===hn.TRIANGLE_STRIP||g.mode===hn.TRIANGLE_FAN||g.mode===void 0)m=r.isSkinnedMesh===!0?new Fl(_,C):new pt(_,C),m.isSkinnedMesh===!0&&m.normalizeSkinWeights(),g.mode===hn.TRIANGLE_STRIP?m.geometry=sg(m.geometry,bg):g.mode===hn.TRIANGLE_FAN&&(m.geometry=sg(m.geometry,Al));else if(g.mode===hn.LINES)m=new zl(_,C);else if(g.mode===hn.LINE_STRIP)m=new qr(_,C);else if(g.mode===hn.LINE_LOOP)m=new Hl(_,C);else if(g.mode===hn.POINTS)m=new ra(_,C);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+g.mode);Object.keys(m.geometry.morphAttributes).length>0&&mw(m,r),m.name=t.createUniqueName(r.name||"mesh_"+e),Ln(m,r),g.extensions&&Oi(i,m,g),t.assignFinalMaterial(m),d.push(m)}for(let p=0,x=d.length;p<x;p++)t.associations.set(d[p],{meshes:e,primitives:p});if(d.length===1)return r.extensions&&Oi(i,d[0],r),d[0];const f=new xt;r.extensions&&Oi(i,f,r),t.associations.set(f,{meshes:e});for(let p=0,x=d.length;p<x;p++)f.add(d[p]);return f})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Nt(pn.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new no(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Ln(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,r=t.joints.length;i<r;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const r=i.pop(),o=i,a=[],l=[];for(let u=0,h=o.length;u<h;u++){const d=o[u];if(d){a.push(d);const f=new qe;r!==null&&f.fromArray(r.array,u*16),l.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[u])}return new Bl(a,l)})}loadAnimation(e){const t=this.json,n=this,i=t.animations[e],r=i.name?i.name:"animation_"+e,o=[],a=[],l=[],u=[],h=[];for(let d=0,f=i.channels.length;d<f;d++){const p=i.channels[d],x=i.samplers[p.sampler],_=p.target,g=_.node,m=i.parameters!==void 0?i.parameters[x.input]:x.input,C=i.parameters!==void 0?i.parameters[x.output]:x.output;_.node!==void 0&&(o.push(this.getDependency("node",g)),a.push(this.getDependency("accessor",m)),l.push(this.getDependency("accessor",C)),u.push(x),h.push(_))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(u),Promise.all(h)]).then(function(d){const f=d[0],p=d[1],x=d[2],_=d[3],g=d[4],m=[];for(let b=0,M=f.length;b<M;b++){const P=f[b],R=p[b],I=x[b],F=_[b],w=g[b];if(P===void 0)continue;P.updateMatrix&&P.updateMatrix();const y=n._createAnimationTracks(P,R,I,F,w);if(y)for(let E=0;E<y.length;E++)m.push(y[E])}const C=new ou(r,void 0,m);return Ln(C,i),C})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){const o=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,u=i.weights.length;l<u;l++)a.morphTargetInfluences[l]=i.weights[l]}),o})}loadNode(e){const t=this.json,n=this,i=t.nodes[e],r=n._loadNodeShallow(e),o=[],a=i.children||[];for(let u=0,h=a.length;u<h;u++)o.push(n.getDependency("node",a[u]));const l=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([r,Promise.all(o),l]).then(function(u){const h=u[0],d=u[1],f=u[2];f!==null&&h.traverse(function(p){p.isSkinnedMesh&&p.bind(f,_w)});for(let p=0,x=d.length;p<x;p++)h.add(d[p]);return h})}_loadNodeShallow(e){const t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const r=t.nodes[e],o=r.name?i.createUniqueName(r.name):"",a=[],l=i._invokeOne(function(u){return u.createNodeMesh&&u.createNodeMesh(e)});return l&&a.push(l),r.camera!==void 0&&a.push(i.getDependency("camera",r.camera).then(function(u){return i._getNodeRef(i.cameraCache,r.camera,u)})),i._invokeAll(function(u){return u.createNodeAttachment&&u.createNodeAttachment(e)}).forEach(function(u){a.push(u)}),this.nodeCache[e]=Promise.all(a).then(function(u){let h;if(r.isBone===!0?h=new ta:u.length>1?h=new xt:u.length===1?h=u[0]:h=new yt,h!==u[0])for(let d=0,f=u.length;d<f;d++)h.add(u[d]);if(r.name&&(h.userData.name=r.name,h.name=o),Ln(h,r),r.extensions&&Oi(n,h,r),r.matrix!==void 0){const d=new qe;d.fromArray(r.matrix),h.applyMatrix4(d)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);if(!i.associations.has(h))i.associations.set(h,{});else if(r.mesh!==void 0&&i.meshCache.refs[r.mesh]>1){const d=i.associations.get(h);i.associations.set(h,{...d})}return i.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,r=new xt;n.name&&(r.name=i.createUniqueName(n.name)),Ln(r,n),n.extensions&&Oi(t,r,n);const o=n.nodes||[],a=[];for(let l=0,u=o.length;l<u;l++)a.push(i.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let h=0,d=l.length;h<d;h++)r.add(l[h]);const u=c(h=>{const d=new Map;for(const[f,p]of i.associations)(f instanceof rn||f instanceof Ft)&&d.set(f,p);return h.traverse(f=>{const p=i.associations.get(f);p!=null&&d.set(f,p)}),d},"reduceAssociations");return i.associations=u(r),r})}_createAnimationTracks(e,t,n,i,r){const o=[],a=e.name?e.name:e.uuid,l=[];ci[r.path]===ci.weights?e.traverse(function(f){f.morphTargetInfluences&&l.push(f.name?f.name:f.uuid)}):l.push(a);let u;switch(ci[r.path]){case ci.weights:u=xi;break;case ci.rotation:u=_i;break;case ci.translation:case ci.scale:u=bi;break;default:switch(n.itemSize){case 1:u=xi;break;case 2:case 3:default:u=bi;break}break}const h=i.interpolation!==void 0?dw[i.interpolation]:kr,d=this._getArrayFromAccessor(n);for(let f=0,p=l.length;f<p;f++){const x=new u(l[f]+"."+ci[r.path],t.array,d,h);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(x),o.push(x)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=Ph(t.constructor),i=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)i[r]=t[r]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=c(function(n){const i=this instanceof _i?Ch:Ea;return new i(this.times,this.values,this.getValueSize()/3,n)},"InterpolantFactoryMethodGLTFCubicSpline"),e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};c(lm,"GLTFParser");let Lh=lm;function vw(s,e,t){const n=e.attributes,i=new mn;if(n.POSITION!==void 0){const a=t.json.accessors[n.POSITION],l=a.min,u=a.max;if(l!==void 0&&u!==void 0){if(i.set(new L(l[0],l[1],l[2]),new L(u[0],u[1],u[2])),a.normalized){const h=Ph(ys[a.componentType]);i.min.multiplyScalar(h),i.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const a=new L,l=new L;for(let u=0,h=r.length;u<h;u++){const d=r[u];if(d.POSITION!==void 0){const f=t.json.accessors[d.POSITION],p=f.min,x=f.max;if(p!==void 0&&x!==void 0){if(l.setX(Math.max(Math.abs(p[0]),Math.abs(x[0]))),l.setY(Math.max(Math.abs(p[1]),Math.abs(x[1]))),l.setZ(Math.max(Math.abs(p[2]),Math.abs(x[2]))),f.normalized){const _=Ph(ys[f.componentType]);l.multiplyScalar(_)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(a)}s.boundingBox=i;const o=new on;i.getCenter(o.center),o.radius=i.min.distanceTo(i.max)/2,s.boundingSphere=o}c(vw,"computeBounds");function cg(s,e,t){const n=e.attributes,i=[];function r(o,a){return t.getDependency("accessor",o).then(function(l){s.setAttribute(a,l)})}c(r,"assignAttributeAccessor");for(const o in n){const a=Rh[o]||o.toLowerCase();a in s.attributes||i.push(r(n[o],a))}if(e.indices!==void 0&&!s.index){const o=t.getDependency("accessor",e.indices).then(function(a){s.setIndex(a)});i.push(o)}return nt.workingColorSpace!==jt&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${nt.workingColorSpace}" not supported.`),Ln(s,e),vw(s,e,t),Promise.all(i).then(function(){return e.targets!==void 0?pw(s,e.targets,t):s})}c(cg,"addPrimitiveAttributes");const Bi=class Bi{constructor(){return this.prefix="LOGGER:",Bi.instance===void 0&&(Bi.instance=this),Bi.instance}static getInstance(){return new Bi}logInfo(e,...t){console.info(this.prefix,"[INFO]",e,...t)}logWarning(e,...t){console.warn(this.prefix,"[WARN]",e,...t)}logError(e,...t){console.error(this.prefix,"[ERROR]",e,...t)}};c(Bi,"Logger");let so=Bi;const xs=class xs{constructor(){return this.loader=new rh,xs.instance==null&&(xs.instance=this),xs.instance}async loadFile(e){try{return(await this.loader.loadAsync(e)).scene}catch(t){throw so.getInstance().logError("Failed to load glTF file",e,`
`,t),t}}};c(xs,"GltfLoader");let Ih=xs;const bw=[{lat:33,lng:-77,rotation:30,landHeight:Ie.LevelOne},{scale:1.5,lat:30,lng:-72,landHeight:Ie.LevelOne},{scale:1.2,lat:26,lng:-68,landHeight:Ie.LevelOne},{lat:26,lng:-73,rotation:60,landHeight:Ie.LevelOne},{scale:.8,lat:31,lng:-67,landHeight:Ie.LevelOne},{scale:1,lat:12,lng:-79,landHeight:Ie.LevelTwo},{scale:1.2,lat:13,lng:-83,landHeight:Ie.LevelTwo}],yw=[{lat:21,lng:-83,rotation:65,landHeight:Ie.LevelTwo,floors:2},{lat:16,lng:-73,rotation:65,landHeight:Ie.LevelTwo}],Sw=[{scale:.7,lat:-1,lng:-78,landHeight:Ie.LevelOne},{lat:1,lng:-84,landHeight:Ie.LevelOne},{lat:7,lng:-94,landHeight:Ie.LevelOne}];var Ds;let Mw=(Ds=class extends Xi{constructContinent(){const e=new xt;return e.name="workContinent",e.add(this.constructTrees("workTrees",bw)),e.add(this.constructBuildings("workBuildings",yw)),e.add(this.constructHuts("workHuts",Sw)),e}},c(Ds,"WorkContinent"),Ds);const Ew=[{scale:1.1,size:20,lat:-29,lng:-142,rotation:70,height:15,landHeight:Ie.LevelOne-2}],ww=[{scale:1.2,lat:-11,lng:-158,landHeight:Ie.LevelOne},{lat:-16,lng:-158,landHeight:Ie.LevelOne},{scale:1.3,lat:-21,lng:-172,rotation:10,landHeight:Ie.LevelTwo},{scale:1.1,lat:-23,lng:-168,rotation:60,landHeight:Ie.LevelTwo},{lat:-21,lng:-177,rotation:30,landHeight:Ie.LevelTwo},{scale:1.2,lat:-25,lng:-174,landHeight:Ie.LevelTwo},{scale:1.5,lat:-50,lng:-142,landHeight:Ie.LevelOne},{scale:1.2,lat:-46,lng:-137,rotation:60,landHeight:Ie.LevelOne},{lat:-45,lng:-144,rotation:15,landHeight:Ie.LevelOne}],Tw=[{lat:-16,lng:-153,rotation:20,landHeight:Ie.LevelOne},{scale:.8,lat:-14,lng:-163,rotation:45,landHeight:Ie.LevelOne}],Aw=[{scale:1,lat:-37,lng:-164,rotation:30,landHeight:Ie.LevelTwo},{scale:.7,lat:-30,lng:-168,rotation:30,landHeight:Ie.LevelTwo}];var Os;let Cw=(Os=class extends Xi{constructContinent(){const e=new xt;return e.name="lifeContinent",e.add(this.constructMountains("lifeMountains",Ew)),e.add(this.constructTrees("lifeTrees",ww)),e.add(this.constructHouses("lifeHouses",Tw)),e.add(this.constructBuildings("lifeBuildings",Aw)),e}},c(Os,"LifeContinent"),Os);const Rw=[{scale:1.2,lat:222,lng:-157,landHeight:Ie.LevelTwo},{lat:225,lng:-159,landHeight:Ie.LevelTwo},{scale:1.3,lat:-126,lng:-132,landHeight:Ie.LevelOne},{lat:-128,lng:-165,landHeight:Ie.LevelOne},{scale:.9,lat:-125,lng:-161,rotation:45,landHeight:Ie.LevelOne}],Pw=[{scale:1,lat:-140,lng:-167,rotation:120,landHeight:Ie.LevelTwo}],Lw=[{scale:1,lat:-133,lng:-147,rotation:70,landHeight:Ie.LevelTwo,floors:2}],Iw=[{lat:-50,lng:-5,landHeight:Ie.LevelOne}];var Ns;let Dw=(Ns=class extends Xi{constructContinent(){const e=new xt;return e.name="connectContinent",e.add(this.constructTrees("connectTrees",Rw)),e.add(this.constructHouses("connectHouses",Pw)),e.add(this.constructBuildings("connectBuildings",Lw)),e.add(this.constructHuts("connectHuts",Iw)),e}},c(Ns,"ConnectContinent"),Ns);const um=class um extends cn{constructObject(){const{starsCount:e,endRadius:t=3e3}=this.properties,n=4,i=new xt;i.name="galaxy";for(let r=0;r<n;r++){const o=this.constructStarsGroup(e/n,t);i.add(o)}return i}constructStarsGroup(e,t){const n=new qt;n.setAttribute("position",this.constructStarsPositions(e,t));const i=new Yr({color:Yt.star,size:5,map:this.createStarTexture(),transparent:!0,depthWrite:!1}),r=new ra(n,i);return r.name="stars",r}constructStarsPositions(e,t=3e3){const n=(this.properties.startRadius??700)+50,i=[];for(let r=0;r<e;r++){const o=new L;o.randomDirection(),o.multiplyScalar(pn.randFloat(n,t/2)),i.push(o.x,o.y,o.z)}return new Tt(i,3)}createStarTexture(){const t=document.createElement("canvas");t.width=t.height=128;const n=t.getContext("2d"),i=128/2;n.beginPath(),n.arc(i,i,128/2,0,2*Math.PI,!1),n.closePath(),n.fillStyle="#ffffff",n.fill();const r=new Ft(t);return r.needsUpdate=!0,r}animateGalaxy(e){const t=this.object.children,n=.02,i=1e3,r=c((o,a=1)=>{const l={y:o.rotation.y+n*a},u=e.createTween(o.rotation,l,{duration:i});u.start(),u.onComplete(()=>{e.removeTween(u),r(o,a)})},"animateStarsGroup");for(let o=0;o<t.length;o++)r(t[o],o%2===0?1:-1)}};c(um,"Galaxy");let Dh=um;const lg=c((s,e=.1,t=document.body,n=.06)=>{let i;const r=new ce,o=c(()=>{const{x:a,y:l}=s.position,{x:u,y:h}=r,d=Ta(a,u),f=Ta(l,h);if(d&&f){cancelAnimationFrame(i);return}s.position.x=wa(a,u,n),s.position.y=wa(l,h,n),i=requestAnimationFrame(o)},"animate");t.addEventListener("mousemove",a=>{cancelAnimationFrame(i);const l=t.clientWidth/2,u=t.clientHeight/2;r.x=-(a.clientX-l)*e,r.y=(a.clientY-u)*e,i=requestAnimationFrame(o)})},"enableParallax"),Ow=c((s,e=.1,t=.06)=>{if(!("ondeviceorientation"in window))return;let n;const i=new ce,r=c(()=>{const{x:o,y:a}=s.position,{x:l,y:u}=i,h=Ta(o,l),d=Ta(a,u);if(h&&d){cancelAnimationFrame(n);return}s.position.x=wa(o,l,t),s.position.y=wa(a,u,t),n=requestAnimationFrame(r)},"animate");window.addEventListener("deviceorientation",o=>{cancelAnimationFrame(n);const{beta:a,gamma:l}=o;!l||!a||!(a>=0&&a<=90)||(i.x=l*100*e,i.y=-((a-45)*150)*e,n=requestAnimationFrame(r))})},"enableParallaxMobile"),wa=c((s,e,t)=>(1-t)*s+t*e,"linearlyInterpolate"),Ta=c((s,e,t=1e-4)=>Math.abs(e-s)<t,"areNearlyEqual"),pd=c(()=>window.innerHeight>window.innerWidth,"isScreenPortrait"),Nw={cameraDistanceUpContinent:100,cameraDistanceToContinent:300,cameraRotation:0,cameraLeftSpace:0,cameraTopSpace:65},Uw={cameraDistanceUpContinent:100,cameraDistanceToContinent:150,cameraRotation:30,cameraLeftSpace:50,cameraTopSpace:0},hm=class hm{constructor(e,t,n){this.three=e,this.sun=n,this.cameraAnimationOptions={duration:2e3,easing:pi.Cubic.Out},this.onContinentClickCallbacks=[],this.continentObject=t.getObject(),this.continentShadowRoot=document.querySelector(`mp-${Wa(this.continentObject.name)}`)?.shadowRoot}setupEventHandlers(){this.setupContinentClick(),this.setupContinentMouseOver()}setupContinentClick(){this.three.getSelector().onClick(this.continentObject,()=>{this.onContinentClickCallbacks.forEach(e=>e())})}setupContinentMouseOver(){const e=this.three.getSelector(),t=this.three.getEventHandler(),n=c(()=>this.updateContinentPinPosition(),"updateContinentPinPosition");e.onMouseOver(this.continentObject,()=>{n(),this.onContinentMouseOver(),t.onObjectMove(this.continentObject,n)}),e.onMouseOut(this.continentObject,()=>{this.onContinentMouseOut(),t.removeObjectMoveListener(this.continentObject,n)})}onContinentClick(e){this.onContinentClickCallbacks.push(e)}openContinent(){this.handleContinentClick()}handleContinentClick(){if(this.isContinentInfoOpen()||this.isAnyContinentInfoOpening())return;const e=Uu(this.continentObject),t=new L(0,0,0),n=j0(t,e),i=this.three.getControls();i.getSpinControls().trackballRadius=50,i.setRotationAxis(n);const r=this.getContinentCameraTransform(n,e),o=this.three.getControls().getCamera(),a=this.three.getAnimator();[o,this.sun].forEach(l=>{a.animateObjectToTarget(l,r.position,r.quaternion,this.cameraAnimationOptions)}),this.openContinentInfo(this.cameraAnimationOptions.duration/2)}openContinentInfo(e){document.querySelector("mp-continents > *[open]")?.removeAttribute("open");const t=this.continentShadowRoot.host;t?.setAttribute("opening",""),setTimeout(()=>{t?.setAttribute("open",""),t?.removeAttribute("opening")},e)}isContinentInfoOpen(){return this.getContinentInfo().hasAttribute("open")??!1}isAnyContinentInfoOpening(){return!!document.querySelector("mp-continents > *[opening]")}getContinentCameraTransform(e,t){const{cameraDistanceUpContinent:n,cameraDistanceToContinent:i,cameraRotation:r,cameraLeftSpace:o,cameraTopSpace:a}=pd()?Nw:Uw,l=new yt;l.lookAt(e),l.position.copy(t),l.translateZ(n).translateX(i),l.lookAt(t);const u=PE(l),h=new L().copy(e).applyAxisAngle(u,pn.degToRad(r)),d=new At().setFromRotationMatrix(new qe().lookAt(l.position,t,h));return l.quaternion.copy(d),l.translateX(-o),l.translateY(a),{position:l.position,quaternion:l.quaternion}}onContinentMouseOver(){if(this.isContinentInfoOpen()||this.isAnyContinentInfoOpening())return;const e=this.three.getRenderer().getCanvas(),t=this.getContinentPinElement();e.classList.add("has-pointer"),t.setAttribute("mouseover","")}onContinentMouseOut(){const e=this.getContinentPinElement(),t=this.three.getRenderer().getCanvas();e.removeAttribute("mouseover"),t.classList.remove("has-pointer")}updateContinentPinPosition(){const e=this.three.getRenderer().getCanvas(),t=this.three.getControls().getCamera(),n=Uu(this.continentObject),i=new L(0,0,0),r=j0(i,n);n.add(r.clone().multiplyScalar(-5));const o=LE(n,t,e),{x:a,y:l}=o;this.getContinentPinElement().style.setProperty("transform",`translate(-50%, -50%) translate(${a}px, ${l}px)`)}getContinentPinElement(){return this.continentShadowRoot.querySelector("mp-continent-pin")}getContinentInfo(){return this.continentShadowRoot.querySelector("mp-continent-info")}};c(hm,"ContinentInteractor");let Oh=hm;const Fw=new L(0,0,450),Bw=new L(0,0,800),kw="https://fawadali.dev/assets/geometries/continents.gltf";var Hi;let zw=(Hi=class{constructor(e){this.onLoadCallbacks=[],this.continents={},this.cameraAnimationOptions={duration:2e3,easing:pi.Cubic.Out},this.three=new Hu(e),this.setupDefaultCameraConfig(),this.initializePlanet().then(()=>{this.onLoadCallbacks.forEach(t=>t(this))})}static build(e){return new Hi(e)}async initializePlanet(){const e=this.three.getSelector(),t=this.three.getControls().getCamera(),n=this.three.getScene(),i=new Gu({size:10});i.setPosition(t.position),i.addTo(n),this.sun=i;const r=new xt;lg(r,.0075),Ow(r,.0075),r.name="planet",n.add(r);const o=new Vu({size:100});o.addTo(r);const a=o.getRadius();e.intersectButIgnoreObject(o.getObject()),this.three.getControls().setSpinControlsObject(r,a);const l=t.position.z,u=t.far,h=new Dh({starsCount:1e3,startRadius:l,endRadius:u});h.animateGalaxy(this.getAnimator()),lg(h.getObject(),.075),h.addTo(n);const d=new Xu({cloudsCount:5,orbitRadius:a+40,baseCloudSize:15});d.animateClouds(this.getAnimator()),d.addTo(r);const f=await this.loadContinentsLand(),p=[new sw({globeRadius:a}),new lw({globeRadius:a}),new Mw({globeRadius:a}),new Cw({globeRadius:a}),new Dw({globeRadius:a})];for(const x of p){const _=x.getObject(),g=f[_.name];g.name=g.name+"Land",_.add(g),x.addTo(r);const m=new Oh(this.three,x,this.sun.getObject());m.setupEventHandlers(),this.continents[_.name]={continent:x,continentInteractor:m}}}resetControls(){const e=this.three.getControls(),t=this.three.getAnimator(),n=e.getDefaultCameraState();e.resetSpinControls(),[e.getCamera(),this.sun.getObject()].forEach(i=>{t.animateObjectToTarget(i,n.position,n.quaternion,this.cameraAnimationOptions)})}setupDefaultCameraConfig(){const e=this.three.getControls().getCamera(),t=this.three.getControls().getDefaultCameraState(),n=this.getCameraConfigForScreen();e.position.copy(n),t.position.copy(n),window.addEventListener("resize",()=>{t.position.copy(this.getCameraConfigForScreen())})}onLoad(e){this.onLoadCallbacks.push(e)}getScene(){return this.three.getScene()}getAnimator(){return this.three.getAnimator()}getContinents(){return this.continents}async loadContinentsLand(){const t=await new Ih().loadFile(kw),n={};for(const i of t.children)n[i.name]=i;return n}getCameraConfigForScreen(){return pd()?Bw:Fw}},c(Hi,"Planet"),Hi);const dm=class dm{constructor(){this.historyStack=[],this.routeHandlers={}}initialize(){this.setupDOMEvents()}setFallbackRoute(e){this.fallbackRoute=e}addRoute(e,t){this.routeHandlers[e]=t}to(e){this.runRouteHandler(e,()=>{window.history.pushState(null,"",this.prependBaseURL(e)),this.historyStack.push(e)})}replace(e){this.runRouteHandler(e,()=>{window.history.replaceState(null,"",this.prependBaseURL(e)),this.historyStack.length>0&&(this.historyStack[this.historyStack.length-1]=e)})}back(){window.history.back(),this.historyStack.pop()}getCurrentRoute(){return this.historyStack[this.historyStack.length-1]}runRouteHandler(e,t){if(this.routeHandlers[e]){this.routeHandlers[e](),t?.();return}so.getInstance().logError(`No route defined for the path "${e}".`),this.fallbackRoute&&(this.replace(this.fallbackRoute),so.getInstance().logWarning(`Using fallback route "${e}".`))}};c(dm,"Router");let Nh=dm;const ki=class ki extends Nh{constructor(){return super(),ki.instance===void 0&&(ki.instance=this),ki.instance}static getInstance(){return new ki}setupDOMEvents(){const e=this.getRouteFromHash();document.readyState==="complete"?this.replace(e):window.addEventListener("load",()=>this.replace(e)),window.addEventListener("hashchange",()=>{this.runRouteHandler(this.getRouteFromHash())})}prependBaseURL(e){return`https://fawadali.dev/#${e}`}getRouteFromHash(){const e=window.location.hash.slice(1);return e===""?"/":e}};c(ki,"HashRouter");let ro=ki;const Hw=`<main class="planet">
  <canvas id="planet-canvas"></canvas>
</main>
`,Vw=`.planet {
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
`;var Gw=Object.getOwnPropertyDescriptor,Ww=c((s,e,t,n)=>{for(var i=n>1?void 0:n?Gw(e,t):e,r=s.length-1,o;r>=0;r--)(o=s[r])&&(i=o(i)||i);return i},"__decorateClass$c"),Us;let Uh=(Us=class extends Ct{constructor(){super(...arguments),this.router=ro.getInstance()}onInit(){const e=this.shadowDOM.querySelector("#planet-canvas");window.planet=zw.build({canvasElement:e}),this.closeContinentOnEscape(),window.planet.onLoad(()=>{this.router.addRoute("/",()=>this.closeOpenContinent()),this.setupContinentsRouting()})}closeOpenContinent(){window.planet.resetControls(),document.querySelector("mp-continents > *[open]")?.removeAttribute("open")}closeContinentOnEscape(){document.addEventListener("keydown",e=>{const t=!!document.querySelector("mp-continents > *[open]");e.key!=="Escape"||!t||this.router.to("/")})}setupContinentsRouting(){const e=window.planet.getContinents(),t=document.querySelector("mp-planet-splash");for(const n in e){const i=Wa(`/${n}`);this.router.addRoute(i,()=>{e[n].continentInteractor.openContinent(),t?.hasAttribute("closed")||setTimeout(()=>{(t?.shadowRoot?.firstChild).click()})}),e[n].continentInteractor.onContinentClick(()=>this.router.to(i))}this.router.setFallbackRoute("/"),this.router.initialize()}},c(Us,"Planet"),Us);Uh=Ww([Lt(Hw),Qt(Vw)],Uh);Et(Uh);const Xw="https://fawadali.dev/assets/./planet-icon-01.ico",jw="https://fawadali.dev/assets/./planet-icon-02.ico",qw="https://fawadali.dev/assets/./planet-icon-03.ico",Yw="https://fawadali.dev/assets/./planet-icon-04.ico",$w="https://fawadali.dev/assets/./planet-icon-05.ico",Kw="https://fawadali.dev/assets/./planet-icon-06.ico",Jw="https://fawadali.dev/assets/./planet-icon-07.ico",Zw="https://fawadali.dev/assets/./planet-icon-08.ico",Qw="https://fawadali.dev/assets/./planet-icon-09.ico",eT="https://fawadali.dev/assets/./planet-icon-10.ico",tT="https://fawadali.dev/assets/./planet-icon-11.ico",nT=Object.freeze(Object.defineProperty({__proto__:null,planetFavicon01:Xw,planetFavicon02:jw,planetFavicon03:qw,planetFavicon04:Yw,planetFavicon05:$w,planetFavicon06:Kw,planetFavicon07:Jw,planetFavicon08:Zw,planetFavicon09:Qw,planetFavicon10:eT,planetFavicon11:tT},Symbol.toStringTag,{value:"Module"})),fm=class fm extends Ct{constructor(){super(...arguments),this.frameDelay=600}onInit(){this.animateFavicon()}animateFavicon(){const e=document.head.querySelector('link[rel="icon"]'),t=Object.values(nT);let n=0;setInterval(()=>{e.href=t[n++],n===t.length&&(n=0)},this.frameDelay)}};c(fm,"PlanetFavicon");let Fh=fm;Et(Fh);const iT=`<header
  class="planet-splash"
  on:click="this.onHeaderClick"
  on:mouseover="this.onMouseOver"
  on:mouseout="this.onMouseOut"
>
  <mp-heading level="h1" class="planet-splash-title">My Planet</mp-heading>
  <mp-arrow-button :enterButton>Enter</mp-arrow-button>
</header>
`,sT=`:host {
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
`;var rT=Object.getOwnPropertyDescriptor,oT=c((s,e,t,n)=>{for(var i=n>1?void 0:n?rT(e,t):e,r=s.length-1,o;r>=0;r--)(o=s[r])&&(i=o(i)||i);return i},"__decorateClass$b"),Fs;let Bh=(Fs=class extends Ct{onInit(){window.planet.onLoad(()=>{this.planetObject=window.planet.getScene().getObjectByName("planet"),this.planetObject?.scale.setScalar(.5),document.body.removeAttribute("loading")})}onHeaderClick(){if(!this.planetObject)return;const e=new L().setScalar(1),t=window.planet.getAnimator().createTween(this.planetObject.scale,e,{duration:2e3,easing:pi.Quintic.Out});this.setAttribute("closed",""),t.start()}onMouseOver(){this.getElement("enterButton")?.setAttribute("active","")}onMouseOut(){this.getElement("enterButton")?.removeAttribute("active")}},c(Fs,"PlanetSplash"),Fs);Bh=oT([Lt(iT),Qt(sT)],Bh);Et(Bh);const aT=`<mp-backdrop :backdrop on:click="this.onMenuToggleClick">
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
`,cT=`:host {
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
`;var lT=Object.getOwnPropertyDescriptor,uT=c((s,e,t,n)=>{for(var i=n>1?void 0:n?lT(e,t):e,r=s.length-1,o;r>=0;r--)(o=s[r])&&(i=o(i)||i);return i},"__decorateClass$a"),Bs;let kh=(Bs=class extends Ct{constructor(){super(...arguments),this.router=ro.getInstance(),this.radius=8,this.startAngle=0,this.rotationAngle=90}onInit(){const e=this.constructMenuOptionsStyles(),t=new CSSStyleSheet;t.replaceSync(e),this.shadowDOM.adoptedStyleSheets.push(t)}onMenuToggleClick(e){e.stopPropagation(),this.hasAttribute("open")?(this.removeAttribute("open"),this.getElement("backdrop")?.removeAttribute("active")):(this.setAttribute("open",""),this.getElement("backdrop")?.setAttribute("active",""))}onBackDropClick(){this.removeAttribute("open"),this.getElement("backdrop")?.removeAttribute("active")}getMenuItemClickListener(e){return()=>this.router.to(e)}constructMenuOptionsStyles(){const e=[...this.getElement("continentsMenuOptions")?.children??[]],t=e.length-1,n=this.startAngle+this.rotationAngle/t;return e.reduce((r,o,a)=>{const l=this.getMenuItemSelector(a);return r+=`${l} {
        transform: ${this.getMenuItemTransformStyle(this.radius,n*a)};
      }
      `,r},"")}getMenuItemSelector(e){return`:host([open]) > mp-backdrop > .continents-menu-options > mp-circle-button:nth-child(${e+1})`}getMenuItemTransformStyle(e,t){return`rotate(${t}deg) translate(${e}rem) rotate(${-t}deg)`}},c(Bs,"ContinentsMenu"),Bs);kh=uT([Lt(aT),Qt(cT)],kh);Et(kh);const hT=`<header :continentHeader class="continent-header">
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
`,dT=`.continent-header {
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
`;var fT=Object.defineProperty,pT=Object.getOwnPropertyDescriptor,Xg=c((s,e,t,n)=>{for(var i=n>1?void 0:n?pT(e,t):e,r=s.length-1,o;r>=0;r--)(o=s[r])&&(i=(n?o(e,t,i):o(i))||i);return n&&i&&fT(e,t,i),i},"__decorateClass$9"),ks;let Aa=(ks=class extends Ct{constructor(){super(...arguments),this.router=ro.getInstance()}onBackClick(e){e.stopPropagation(),this.router.to("/")}},c(ks,"ContinentHeader"),ks);Xg([Bn()],Aa.prototype,"icon",2);Aa=Xg([Lt(hT),Qt(dT)],Aa);Et(Aa);const mT=`<slot></slot>
`;var gT=Object.getOwnPropertyDescriptor,xT=c((s,e,t,n)=>{for(var i=n>1?void 0:n?gT(e,t):e,r=s.length-1,o;r>=0;r--)(o=s[r])&&(i=o(i)||i);return i},"__decorateClass$8"),zs;let zh=(zs=class extends Ct{},c(zs,"ContinentBody"),zs);zh=xT([Lt(mT)],zh);Et(zh);const _T=`<article
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
`,vT=`:host {
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
`;var bT=Object.getOwnPropertyDescriptor,yT=c((s,e,t,n)=>{for(var i=n>1?void 0:n?bT(e,t):e,r=s.length-1,o;r>=0;r--)(o=s[r])&&(i=o(i)||i);return i},"__decorateClass$7"),Hs;let Hh=(Hs=class extends Ct{onInit(){this.continent=this.getElement("continent"),this.continentBody=this.getElement("continentBody")}static get observedAttributes(){return["open"]}attributeChangedCallback(e){e==="open"&&this.isContentScrollable()&&this.continent.classList.add("scrollable")}onContinentScroll(){const e=pd()?80:.35*document.documentElement.clientHeight,t=this.continent.scrollTop-e;t>0?this.continentBody.style.clipPath=`polygon(0 ${t}px, 100% ${t}px, 100% 100%, 0 100%)`:this.continentBody.removeAttribute("style")}isContentScrollable(){return this.continent.scrollHeight>this.continent.offsetHeight}},c(Hs,"ContinentInfo"),Hs);Hh=yT([Lt(_T),Qt(vT)],Hh);Et(Hh);const ST=`<div class="continent-pin">
  <div class="continent-pin-content">
    <mp-heading level="h3" class="continent-pin-title">
      <slot name="title"></slot>
    </mp-heading>
    <slot name="subtitle" class="continent-pin-subtitle"></slot>
  </div>
  <mp-icon icon="\${this.icon}" class="continent-pin-icon"></mp-icon>
</div>
`,MT=`:host {
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
`;var ET=Object.defineProperty,wT=Object.getOwnPropertyDescriptor,jg=c((s,e,t,n)=>{for(var i=n>1?void 0:n?wT(e,t):e,r=s.length-1,o;r>=0;r--)(o=s[r])&&(i=(n?o(e,t,i):o(i))||i);return n&&i&&ET(e,t,i),i},"__decorateClass$6"),Vs;let Ca=(Vs=class extends Ct{},c(Vs,"ContinentPin"),Vs);jg([Bn()],Ca.prototype,"icon",2);Ca=jg([Lt(ST),Qt(MT)],Ca);Et(Ca);const TT=`<section>
  <slot name="project-title"></slot>
  <slot name="project-description"></slot>
  <slot name="project-links"></slot>
</section>
`;var AT=Object.getOwnPropertyDescriptor,CT=c((s,e,t,n)=>{for(var i=n>1?void 0:n?AT(e,t):e,r=s.length-1,o;r>=0;r--)(o=s[r])&&(i=o(i)||i);return i},"__decorateClass$5"),Gs;let Vh=(Gs=class extends Ct{},c(Gs,"Project"),Gs);Vh=CT([Lt(TT)],Vh);Et(Vh);const pm=class pm extends Ct{static get observedAttributes(){return["open"]}attributeChangedCallback(e,t,n){if(e!=="open")return;const i=this.shadowDOM.querySelector("mp-continent-info");n===null?i?.removeAttribute(e):i?.setAttribute(e,n)}};c(pm,"Continent");let ji=pm;const RT=`<mp-continent-pin icon="about-continent">
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
`,PT=`.dev-icons {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.dev-icons > mp-icon {
  width: 3.5rem;
  height: 3.5rem;
}
`;var LT=Object.getOwnPropertyDescriptor,IT=c((s,e,t,n)=>{for(var i=n>1?void 0:n?LT(e,t):e,r=s.length-1,o;r>=0;r--)(o=s[r])&&(i=o(i)||i);return i},"__decorateClass$4"),Ws;let Gh=(Ws=class extends ji{},c(Ws,"AboutContinent"),Ws);Gh=IT([Lt(RT),Qt(PT)],Gh);Et(Gh);const DT=`<mp-continent-pin icon="connect-continent">
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
`;var OT=Object.getOwnPropertyDescriptor,NT=c((s,e,t,n)=>{for(var i=n>1?void 0:n?OT(e,t):e,r=s.length-1,o;r>=0;r--)(o=s[r])&&(i=o(i)||i);return i},"__decorateClass$3"),Xs;let Wh=(Xs=class extends ji{},c(Xs,"ConnectContinent"),Xs);Wh=NT([Lt(DT)],Wh);Et(Wh);const UT=`<mp-continent-pin icon="life-continent">
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
`;var FT=Object.getOwnPropertyDescriptor,BT=c((s,e,t,n)=>{for(var i=n>1?void 0:n?FT(e,t):e,r=s.length-1,o;r>=0;r--)(o=s[r])&&(i=o(i)||i);return i},"__decorateClass$2"),js;let Xh=(js=class extends ji{},c(js,"LifeContinent"),js);Xh=BT([Lt(UT)],Xh);Et(Xh);const kT=`<mp-continent-pin icon="projects-continent">
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
`;var zT=Object.getOwnPropertyDescriptor,HT=c((s,e,t,n)=>{for(var i=n>1?void 0:n?zT(e,t):e,r=s.length-1,o;r>=0;r--)(o=s[r])&&(i=o(i)||i);return i},"__decorateClass$1"),qs;let jh=(qs=class extends ji{},c(qs,"ProjectsContinent"),qs);jh=HT([Lt(kT)],jh);Et(jh);const VT=`<mp-continent-pin icon="work-continent">
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
`;var GT=Object.getOwnPropertyDescriptor,WT=c((s,e,t,n)=>{for(var i=n>1?void 0:n?GT(e,t):e,r=s.length-1,o;r>=0;r--)(o=s[r])&&(i=o(i)||i);return i},"__decorateClass"),Ys;let qh=(Ys=class extends ji{},c(Ys,"WorkContinent"),Ys);qh=WT([Lt(VT)],qh);Et(qh);
