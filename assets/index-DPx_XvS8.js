var e=Object.defineProperty,__name=(t,n)=>e(t,`name`,{value:n,configurable:!0}),__exportAll=(t,n)=>{let i={};for(var a in t)e(i,a,{get:t[a],enumerable:!0});return n||e(i,Symbol.toStringTag,{value:`Module`}),i};(function polyfill(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))processPreload(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&processPreload(e)}).observe(document,{childList:!0,subtree:!0});function getFetchOpts(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function processPreload(e){if(e.ep)return;e.ep=!0;let t=getFetchOpts(e);fetch(e.href,t)}})();var t=`on:`,HTMLParser=class{constructor(e,t){this.componentContext=t;let n=new DOMParser().parseFromString(e,`text/html`).querySelector(`body`);if(this.parsedFragment=document.createDocumentFragment(),n)for(let e of[...n.children])this.parsedFragment.appendChild(e)}processEventListeners(){this.getRootElements().forEach(e=>{this.addEventListenersToNodes(e)})}getRootElements(){return[...this.parsedFragment.children]}addEventListenersToNodes(e){let n=e.getAttributeNames().filter(e=>e.startsWith(t));for(let t of n){let n=t.substring(3),i=e.getAttribute(t);i&&(e.addEventListener(n,Function(`return ${i}`).apply(this.componentContext)?.bind(this.componentContext)),e.removeAttribute(t))}for(let t of e.children)this.addEventListenersToNodes(t)}},evaluateStringTemplate=(e,t)=>{let n=Object.getOwnPropertyNames(t),i=Object.values(t);return Function(...n,`return \`${e}\`;`).apply(t,...i)},Component=class extends HTMLElement{constructor(){super(),this.shadowDOM=this.attachShadow({mode:`open`})}connectedCallback(){this.onBeforeInit?.(),this.htmlParser=new HTMLParser(evaluateStringTemplate(this.template,this),this),this.styles&&this.processStyles(),this.template&&this.shadowDOM.append(...this.processTemplate()),this.onInit?.()}processStyles(){let e=new CSSStyleSheet;e.replaceSync(this.styles),this.shadowDOM.adoptedStyleSheets=[e]}processTemplate(){return this.htmlParser.processEventListeners(),this.htmlParser.getRootElements()}getElement(e){return this.shadowDOM.querySelector(`*[\\:${e}]`)}},template=e=>t=>{Reflect.defineProperty(t.prototype,`template`,{value:e})},styles=e=>t=>{let n=[e];t.prototype.styles&&n.push(t.prototype.styles),Reflect.defineProperty(t.prototype,`styles`,{value:n.join(`

`)})},camelCaseToKebabCase=e=>e.replace(/[A-Z]/g,e=>`-${e.toLowerCase()}`),pascalCaseToKebabCase=e=>camelCaseToKebabCase(e).substring(1),property=e=>(t,n)=>{let i=e??camelCaseToKebabCase(n.toString()),a={get(){return this.getAttribute(i)},set(e){this.getAttribute(i)||this.setAttribute(i,e)}};return n===void 0?currentProperty(t,a):legacyProperty(t,n,a)},legacyProperty=(e,t,n)=>{Reflect.defineProperty(e,t,n)},currentProperty=(e,t)=>({kind:`field`,key:e?.key,placement:`own`,descriptor:t}),registerComponent=e=>{let t=pascalCaseToKebabCase(e.name);customElements.define(`mp-${t}`,e)},n='<${this.level} class="heading"><slot></slot></${this.level}>\n',i=`.heading {
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
`;function __decorate(e,t,n,i){var a=arguments.length,o=a<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,n):i,s;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)o=Reflect.decorate(e,t,n,i);else for(var c=e.length-1;c>=0;c--)(s=e[c])&&(o=(a<3?s(o):a>3?s(t,n,o):s(t,n))||o);return a>3&&o&&Object.defineProperty(t,n,o),o}var a=class Heading extends Component{};__decorate([property()],a.prototype,`level`,void 0),a=__decorate([template(n),styles(i)],a),registerComponent(a);var o=`<!-- "on:click" is not set here because we can add "on:click" on the
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
`,s=`:host {
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
`,c=class ArrowButton extends Component{};__decorate([property()],c.prototype,`direction`,void 0),__decorate([property()],c.prototype,`label`,void 0),c=__decorate([template(o),styles(s)],c),registerComponent(c);var l=__name((e,t,n)=>{let i=t.lastIndexOf(`?`),a=e[i===-1||i<t.lastIndexOf(`/`)?t:t.slice(0,i)];return a?typeof a==`function`?a():Promise.resolve(a):new Promise((e,i)=>{(typeof queueMicrotask==`function`?queueMicrotask:setTimeout)(i.bind(null,Error(`Unknown variable dynamic import: `+t+(t.split(`/`).length===n?``:`. Note that variables only represent file names one level deep.`))))})},`default`),u=`:host {
  display: inline-block;
}

svg {
  width: 100%;
  height: 100%;
}
`,d=`modulepreload`,assetsURL=function(e){return`https://fawadali.dev/`+e},f={},p=function preload(e,t,n){let i=Promise.resolve();if(t&&t.length>0){let e=document.getElementsByTagName(`link`),a=document.querySelector(`meta[property=csp-nonce]`),o=a?.nonce||a?.getAttribute(`nonce`);function allSettled(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}i=allSettled(t.map(t=>{if(t=assetsURL(t,n),t in f)return;f[t]=!0;let i=t.endsWith(`.css`),a=i?`[rel="stylesheet"]`:``;if(n)for(let n=e.length-1;n>=0;n--){let a=e[n];if(a.href===t&&(!i||a.rel===`stylesheet`))return}else if(document.querySelector(`link[href="${t}"]${a}`))return;let s=document.createElement(`link`);if(s.rel=i?`stylesheet`:d,i||(s.as=`script`),s.crossOrigin=``,s.href=t,o&&s.setAttribute(`nonce`,o),document.head.appendChild(s),i)return new Promise((e,n)=>{s.addEventListener(`load`,e),s.addEventListener(`error`,()=>n(Error(`Unable to preload CSS for ${t}`)))})}))}function handlePreloadError(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return i.then(t=>{for(let e of t||[])e.status===`rejected`&&handlePreloadError(e.reason);return e().catch(handlePreloadError)})},m=class Icon extends Component{onInit(){this.loadIcon()}async loadIcon(){let e=this.icon?await this.importIconFromAssets():await this.fetchIcon();this.shadowDOM.innerHTML=e,this.shadowDOM.firstElementChild?.setAttribute(`part`,`svg`)}async fetchIcon(){return await(await fetch(this.src)).text()}async importIconFromAssets(){if(this.icon.includes(`/`)){let[e,t]=this.icon.split(`/`);return(await l(Object.assign({"../../../assets/icons/dev/angularjs.svg":()=>p(()=>import(`./angularjs-QdyeuxQP.js`),[]),"../../../assets/icons/dev/aws.svg":()=>p(()=>import(`./aws-D44vi5pk.js`),[]),"../../../assets/icons/dev/cplusplus.svg":()=>p(()=>import(`./cplusplus-BR3FTp1q.js`),[]),"../../../assets/icons/dev/graphql.svg":()=>p(()=>import(`./graphql-CPWh6O8W.js`),[]),"../../../assets/icons/dev/java.svg":()=>p(()=>import(`./java-CPE7dJ13.js`),[]),"../../../assets/icons/dev/javascript.svg":()=>p(()=>import(`./javascript-C9YisJST.js`),[]),"../../../assets/icons/dev/kotlin.svg":()=>p(()=>import(`./kotlin-DRWW4J2B.js`),[]),"../../../assets/icons/dev/mongodb.svg":()=>p(()=>import(`./mongodb-CQ0lSMGw.js`),[]),"../../../assets/icons/dev/mysql.svg":()=>p(()=>import(`./mysql-BGfqMPyt.js`),[]),"../../../assets/icons/dev/nodejs.svg":()=>p(()=>import(`./nodejs-KPy4I-ms.js`),[]),"../../../assets/icons/dev/php.svg":()=>p(()=>import(`./php-CNMVnypS.js`),[]),"../../../assets/icons/dev/postgresql.svg":()=>p(()=>import(`./postgresql-DBrx051U.js`),[]),"../../../assets/icons/dev/react.svg":()=>p(()=>import(`./react-DUIa4boN.js`),[]),"../../../assets/icons/dev/spring.svg":()=>p(()=>import(`./spring-BPzviUv1.js`),[]),"../../../assets/icons/dev/typescript.svg":()=>p(()=>import(`./typescript-BuM2rxam.js`),[]),"../../../assets/icons/social/email.svg":()=>p(()=>import(`./email-CrwlN3hm.js`),[]),"../../../assets/icons/social/facebook.svg":()=>p(()=>import(`./facebook-BUEAIhZ3.js`),[]),"../../../assets/icons/social/github.svg":()=>p(()=>import(`./github-BuoRCCWh.js`),[]),"../../../assets/icons/social/linkedin.svg":()=>p(()=>import(`./linkedin--iVqx2Yn.js`),[])}),`../../../assets/icons/${e}/${t}.svg?raw`,7)).default}else return(await l(Object.assign({"../../../assets/icons/about-continent.svg":()=>p(()=>import(`./about-continent-DkLinQzb.js`),[]),"../../../assets/icons/accessibility.svg":()=>p(()=>import(`./accessibility-BHGPlbF9.js`),[]),"../../../assets/icons/arrow.svg":()=>p(()=>import(`./arrow-BG42J31w.js`),[]),"../../../assets/icons/code.svg":()=>p(()=>import(`./code-CYIDVgLv.js`),[]),"../../../assets/icons/compass.svg":()=>p(()=>import(`./compass-CalUvzQI.js`),[]),"../../../assets/icons/connect-continent.svg":()=>p(()=>import(`./connect-continent-CN43XNYF.js`),[]),"../../../assets/icons/life-continent.svg":()=>p(()=>import(`./life-continent-CQAntA2p.js`),[]),"../../../assets/icons/link.svg":()=>p(()=>import(`./link-DrhuOFjj.js`),[]),"../../../assets/icons/projects-continent.svg":()=>p(()=>import(`./projects-continent-Cm0-2YMz.js`),[]),"../../../assets/icons/work-continent.svg":()=>p(()=>import(`./work-continent-ThOhpGg5.js`),[])}),`../../../assets/icons/${this.icon}.svg?raw`,6)).default}};__decorate([property()],m.prototype,`src`,void 0),__decorate([property()],m.prototype,`icon`,void 0),m=__decorate([styles(u)],m),registerComponent(m);var h=`<!-- "on:click" is not set here because we can add "on:click" on the
host element and event bubbling will make that "on:click" run on
clicking this button. -->
<\${this.tag} class="circle-button" \${this.link ? \`href="\${this.link}"\` : ''}>
  <mp-icon icon="\${this.icon}" class="circle-button-icon" part="icon"></mp-icon>
  <span class="circle-button-tooltip \${this.tooltipPosition}">
    <slot></slot>
  </span>
</\${this.tag}>
`,g=`.circle-button {
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
`,_=class CircleButton extends Component{constructor(...e){super(...e),this.tooltipPosition=`top`}onBeforeInit(){this.tag=this.link?`a`:`button`}};__decorate([property()],_.prototype,`icon`,void 0),__decorate([property()],_.prototype,`tooltipPosition`,void 0),__decorate([property()],_.prototype,`link`,void 0),_=__decorate([template(h),styles(g)],_),registerComponent(_);var y=`<div class="backdrop"></div>
<div class="backdrop-focus">
  <slot></slot>
</div>
`,b=`:host([active]) > .backdrop {
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
`,x=class Backdrop extends Component{};x=__decorate([template(y),styles(b)],x),registerComponent(x);var S=`<slot name="time" class="timeline-event-time"></slot>
<slot name="title" class="timeline-event-title"></slot>
<slot name="subtitle" class="timeline-event-subtitle"></slot>
<p><slot></slot></p>
`,C=`:host {
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
`,w=class TimelineEvent extends Component{};w=__decorate([template(S),styles(C)],w),registerComponent(w);var T=`<slot class="timeline-event"></slot>
`,E=`/* Hide the vertical bar for the last timeline event. */
.timeline-event::slotted(*:last-child)::after {
  display: none;
}
`,D=class Timeline extends Component{};D=__decorate([template(T),styles(E)],D),registerComponent(D);var O=`attached`,k=1e3,A=1001,j=1002,M=1003,N=1004,P=1005,F=1006,ee=1007,te=1008,ne=1009,re=1010,ie=1011,ae=1012,oe=1013,se=1014,ce=1015,le=1016,ue=1017,de=1018,fe=1020,pe=35902,me=35899,he=1021,ge=1022,_e=1023,ve=1026,ye=1027,be=1028,xe=1029,Se=1030,Ce=1031,we=1033,Te=33776,Ee=33777,De=33778,Oe=33779,I=35840,ke=35841,Ae=35842,L=35843,je=36196,R=37492,z=37496,Me=37488,Ne=37489,Pe=37490,Fe=37491,Ie=37808,Le=37809,Re=37810,ze=37811,Be=37812,Ve=37813,He=37814,Ue=37815,We=37816,Ge=37817,Ke=37818,qe=37819,Je=37820,Ye=37821,Xe=36492,Ze=36494,Qe=36495,$e=36283,et=36284,tt=36285,nt=36286,rt=2300,it=2301,at=2302,ot=2303,st=2400,ct=2401,lt=2402,ut=2500,dt=3200,ft=`srgb`,pt=`srgb-linear`,mt=`linear`,ht=`srgb`,gt=7680,_t=35044,vt=2e3;function arrayNeedsUint32(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function isTypedArray(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function createElementNS(e){return document.createElementNS(`http://www.w3.org/1999/xhtml`,e)}function createCanvasElement(){let e=createElementNS(`canvas`);return e.style.display=`block`,e}var yt={},bt=null;function log(...e){let t=`THREE.`+e.shift();bt?bt(`log`,t,...e):console.log(t,...e)}function enhanceLogMessage(e){let t=e[0];if(typeof t==`string`&&t.startsWith(`TSL:`)){let t=e[1];t&&t.isStackTrace?e[0]+=` `+t.getLocation():e[1]=`Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.`}return e}function warn(...e){e=enhanceLogMessage(e);let t=`THREE.`+e.shift();if(bt)bt(`warn`,t,...e);else{let n=e[0];n&&n.isStackTrace?console.warn(n.getError(t)):console.warn(t,...e)}}function error(...e){e=enhanceLogMessage(e);let t=`THREE.`+e.shift();if(bt)bt(`error`,t,...e);else{let n=e[0];n&&n.isStackTrace?console.error(n.getError(t)):console.error(t,...e)}}function warnOnce(...e){let t=e.join(` `);t in yt||(yt[t]=!0,warn(...e))}function probeAsync(e,t,n){return new Promise(function(i,a){function probe(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:a();break;case e.TIMEOUT_EXPIRED:setTimeout(probe,n);break;default:i()}}setTimeout(probe,n)})}var xt={0:1,2:6,4:7,3:5,1:0,6:2,7:4,5:3},EventDispatcher=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let i=n[e];if(i!==void 0){let e=i.indexOf(t);e!==-1&&i.splice(e,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let t=n.slice(0);for(let n=0,i=t.length;n<i;n++)t[n].call(this,e);e.target=null}}},St=`00.01.02.03.04.05.06.07.08.09.0a.0b.0c.0d.0e.0f.10.11.12.13.14.15.16.17.18.19.1a.1b.1c.1d.1e.1f.20.21.22.23.24.25.26.27.28.29.2a.2b.2c.2d.2e.2f.30.31.32.33.34.35.36.37.38.39.3a.3b.3c.3d.3e.3f.40.41.42.43.44.45.46.47.48.49.4a.4b.4c.4d.4e.4f.50.51.52.53.54.55.56.57.58.59.5a.5b.5c.5d.5e.5f.60.61.62.63.64.65.66.67.68.69.6a.6b.6c.6d.6e.6f.70.71.72.73.74.75.76.77.78.79.7a.7b.7c.7d.7e.7f.80.81.82.83.84.85.86.87.88.89.8a.8b.8c.8d.8e.8f.90.91.92.93.94.95.96.97.98.99.9a.9b.9c.9d.9e.9f.a0.a1.a2.a3.a4.a5.a6.a7.a8.a9.aa.ab.ac.ad.ae.af.b0.b1.b2.b3.b4.b5.b6.b7.b8.b9.ba.bb.bc.bd.be.bf.c0.c1.c2.c3.c4.c5.c6.c7.c8.c9.ca.cb.cc.cd.ce.cf.d0.d1.d2.d3.d4.d5.d6.d7.d8.d9.da.db.dc.dd.de.df.e0.e1.e2.e3.e4.e5.e6.e7.e8.e9.ea.eb.ec.ed.ee.ef.f0.f1.f2.f3.f4.f5.f6.f7.f8.f9.fa.fb.fc.fd.fe.ff`.split(`.`),Ct=1234567,wt=Math.PI/180,Tt=180/Math.PI;function generateUUID(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(St[e&255]+St[e>>8&255]+St[e>>16&255]+St[e>>24&255]+`-`+St[t&255]+St[t>>8&255]+`-`+St[t>>16&15|64]+St[t>>24&255]+`-`+St[n&63|128]+St[n>>8&255]+`-`+St[n>>16&255]+St[n>>24&255]+St[i&255]+St[i>>8&255]+St[i>>16&255]+St[i>>24&255]).toLowerCase()}function clamp(e,t,n){return Math.max(t,Math.min(n,e))}function euclideanModulo(e,t){return(e%t+t)%t}function mapLinear(e,t,n,i,a){return i+(e-t)*(a-i)/(n-t)}function inverseLerp(e,t,n){return e===t?0:(n-e)/(t-e)}function lerp(e,t,n){return(1-n)*e+n*t}function damp(e,t,n,i){return lerp(e,t,1-Math.exp(-n*i))}function pingpong(e,t=1){return t-Math.abs(euclideanModulo(e,t*2)-t)}function smoothstep(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*(3-2*e))}function smootherstep(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*e*(e*(e*6-15)+10))}function randInt(e,t){return e+Math.floor(Math.random()*(t-e+1))}function randFloat(e,t){return e+Math.random()*(t-e)}function randFloatSpread(e){return e*(.5-Math.random())}function seededRandom(e){e!==void 0&&(Ct=e);let t=Ct+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function degToRad(e){return e*wt}function radToDeg(e){return e*Tt}function isPowerOfTwo(e){return(e&e-1)==0&&e!==0}function ceilPowerOfTwo(e){return 2**Math.ceil(Math.log(e)/Math.LN2)}function floorPowerOfTwo(e){return 2**Math.floor(Math.log(e)/Math.LN2)}function setQuaternionFromProperEuler(e,t,n,i,a){let o=Math.cos,s=Math.sin,c=o(n/2),l=s(n/2),u=o((t+i)/2),d=s((t+i)/2),f=o((t-i)/2),p=s((t-i)/2),m=o((i-t)/2),h=s((i-t)/2);switch(a){case`XYX`:e.set(c*d,l*f,l*p,c*u);break;case`YZY`:e.set(l*p,c*d,l*f,c*u);break;case`ZXZ`:e.set(l*f,l*p,c*d,c*u);break;case`XZX`:e.set(c*d,l*h,l*m,c*u);break;case`YXY`:e.set(l*m,c*d,l*h,c*u);break;case`ZYZ`:e.set(l*h,l*m,c*d,c*u);break;default:warn(`MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: `+a)}}function denormalize(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw Error(`Invalid component type.`)}}function normalize(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw Error(`Invalid component type.`)}}var Et={DEG2RAD:wt,RAD2DEG:Tt,generateUUID,clamp,euclideanModulo,mapLinear,inverseLerp,lerp,damp,pingpong,smoothstep,smootherstep,randInt,randFloat,randFloatSpread,seededRandom,degToRad,radToDeg,isPowerOfTwo,ceilPowerOfTwo,floorPowerOfTwo,setQuaternionFromProperEuler,normalize,denormalize},B=class Vector2{constructor(e=0,t=0){Vector2.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw Error(`index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw Error(`index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=clamp(this.x,e.x,t.x),this.y=clamp(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=clamp(this.x,e,t),this.y=clamp(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(clamp(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(clamp(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),i=Math.sin(t),a=this.x-e.x,o=this.y-e.y;return this.x=a*n-o*i+e.x,this.y=a*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Quaternion=class{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,a,o,s){let c=n[i+0],l=n[i+1],u=n[i+2],d=n[i+3],f=a[o+0],p=a[o+1],m=a[o+2],h=a[o+3];if(d!==h||c!==f||l!==p||u!==m){let e=c*f+l*p+u*m+d*h;e<0&&(f=-f,p=-p,m=-m,h=-h,e=-e);let t=1-s;if(e<.9995){let n=Math.acos(e),i=Math.sin(n);t=Math.sin(t*n)/i,s=Math.sin(s*n)/i,c=c*t+f*s,l=l*t+p*s,u=u*t+m*s,d=d*t+h*s}else{c=c*t+f*s,l=l*t+p*s,u=u*t+m*s,d=d*t+h*s;let e=1/Math.sqrt(c*c+l*l+u*u+d*d);c*=e,l*=e,u*=e,d*=e}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,i,a,o){let s=n[i],c=n[i+1],l=n[i+2],u=n[i+3],d=a[o],f=a[o+1],p=a[o+2],m=a[o+3];return e[t]=s*m+u*d+c*p-l*f,e[t+1]=c*m+u*f+l*d-s*p,e[t+2]=l*m+u*p+s*f-c*d,e[t+3]=u*m-s*d-c*f-l*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,i=e._y,a=e._z,o=e._order,s=Math.cos,c=Math.sin,l=s(n/2),u=s(i/2),d=s(a/2),f=c(n/2),p=c(i/2),m=c(a/2);switch(o){case`XYZ`:this._x=f*u*d+l*p*m,this._y=l*p*d-f*u*m,this._z=l*u*m+f*p*d,this._w=l*u*d-f*p*m;break;case`YXZ`:this._x=f*u*d+l*p*m,this._y=l*p*d-f*u*m,this._z=l*u*m-f*p*d,this._w=l*u*d+f*p*m;break;case`ZXY`:this._x=f*u*d-l*p*m,this._y=l*p*d+f*u*m,this._z=l*u*m+f*p*d,this._w=l*u*d-f*p*m;break;case`ZYX`:this._x=f*u*d-l*p*m,this._y=l*p*d+f*u*m,this._z=l*u*m-f*p*d,this._w=l*u*d+f*p*m;break;case`YZX`:this._x=f*u*d+l*p*m,this._y=l*p*d+f*u*m,this._z=l*u*m-f*p*d,this._w=l*u*d-f*p*m;break;case`XZY`:this._x=f*u*d-l*p*m,this._y=l*p*d-f*u*m,this._z=l*u*m+f*p*d,this._w=l*u*d+f*p*m;break;default:warn(`Quaternion: .setFromEuler() encountered an unknown order: `+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],i=t[4],a=t[8],o=t[1],s=t[5],c=t[9],l=t[2],u=t[6],d=t[10],f=n+s+d;if(f>0){let e=.5/Math.sqrt(f+1);this._w=.25/e,this._x=(u-c)*e,this._y=(a-l)*e,this._z=(o-i)*e}else if(n>s&&n>d){let e=2*Math.sqrt(1+n-s-d);this._w=(u-c)/e,this._x=.25*e,this._y=(i+o)/e,this._z=(a+l)/e}else if(s>d){let e=2*Math.sqrt(1+s-n-d);this._w=(a-l)/e,this._x=(i+o)/e,this._y=.25*e,this._z=(c+u)/e}else{let e=2*Math.sqrt(1+d-n-s);this._w=(o-i)/e,this._x=(a+l)/e,this._y=(c+u)/e,this._z=.25*e}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(clamp(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x*=e,this._y*=e,this._z*=e,this._w*=e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,i=e._y,a=e._z,o=e._w,s=t._x,c=t._y,l=t._z,u=t._w;return this._x=n*u+o*s+i*l-a*c,this._y=i*u+o*c+a*s-n*l,this._z=a*u+o*l+n*c-i*s,this._w=o*u-n*s-i*c-a*l,this._onChangeCallback(),this}slerp(e,t){let n=e._x,i=e._y,a=e._z,o=e._w,s=this.dot(e);s<0&&(n=-n,i=-i,a=-a,o=-o,s=-s);let c=1-t;if(s<.9995){let e=Math.acos(s),l=Math.sin(e);c=Math.sin(c*e)/l,t=Math.sin(t*e)/l,this._x=this._x*c+n*t,this._y=this._y*c+i*t,this._z=this._z*c+a*t,this._w=this._w*c+o*t,this._onChangeCallback()}else this._x=this._x*c+n*t,this._y=this._y*c+i*t,this._z=this._z*c+a*t,this._w=this._w*c+o*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),a=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),a*Math.sin(t),a*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},V=class Vector3{constructor(e=0,t=0,n=0){Vector3.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw Error(`index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error(`index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ot.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ot.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,i=this.z,a=e.elements;return this.x=a[0]*t+a[3]*n+a[6]*i,this.y=a[1]*t+a[4]*n+a[7]*i,this.z=a[2]*t+a[5]*n+a[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,a=e.elements,o=1/(a[3]*t+a[7]*n+a[11]*i+a[15]);return this.x=(a[0]*t+a[4]*n+a[8]*i+a[12])*o,this.y=(a[1]*t+a[5]*n+a[9]*i+a[13])*o,this.z=(a[2]*t+a[6]*n+a[10]*i+a[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,i=this.z,a=e.x,o=e.y,s=e.z,c=e.w,l=2*(o*i-s*n),u=2*(s*t-a*i),d=2*(a*n-o*t);return this.x=t+c*l+o*d-s*u,this.y=n+c*u+s*l-a*d,this.z=i+c*d+a*u-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,i=this.z,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i,this.y=a[1]*t+a[5]*n+a[9]*i,this.z=a[2]*t+a[6]*n+a[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=clamp(this.x,e.x,t.x),this.y=clamp(this.y,e.y,t.y),this.z=clamp(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=clamp(this.x,e,t),this.y=clamp(this.y,e,t),this.z=clamp(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(clamp(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,i=e.y,a=e.z,o=t.x,s=t.y,c=t.z;return this.x=i*c-a*s,this.y=a*o-n*c,this.z=n*s-i*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Dt.copy(this).projectOnVector(e),this.sub(Dt)}reflect(e){return this.sub(Dt.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(clamp(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Dt=new V,Ot=new Quaternion,H=class Matrix3{constructor(e,t,n,i,a,o,s,c,l){Matrix3.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,a,o,s,c,l)}set(e,t,n,i,a,o,s,c,l){let u=this.elements;return u[0]=e,u[1]=i,u[2]=s,u[3]=t,u[4]=a,u[5]=c,u[6]=n,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,a=this.elements,o=n[0],s=n[3],c=n[6],l=n[1],u=n[4],d=n[7],f=n[2],p=n[5],m=n[8],h=i[0],g=i[3],_=i[6],y=i[1],b=i[4],x=i[7],S=i[2],C=i[5],w=i[8];return a[0]=o*h+s*y+c*S,a[3]=o*g+s*b+c*C,a[6]=o*_+s*x+c*w,a[1]=l*h+u*y+d*S,a[4]=l*g+u*b+d*C,a[7]=l*_+u*x+d*w,a[2]=f*h+p*y+m*S,a[5]=f*g+p*b+m*C,a[8]=f*_+p*x+m*w,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],i=e[2],a=e[3],o=e[4],s=e[5],c=e[6],l=e[7],u=e[8];return t*o*u-t*s*l-n*a*u+n*s*c+i*a*l-i*o*c}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],a=e[3],o=e[4],s=e[5],c=e[6],l=e[7],u=e[8],d=u*o-s*l,f=s*c-u*a,p=l*a-o*c,m=t*d+n*f+i*p;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let h=1/m;return e[0]=d*h,e[1]=(i*l-u*n)*h,e[2]=(s*n-i*o)*h,e[3]=f*h,e[4]=(u*t-i*c)*h,e[5]=(i*a-s*t)*h,e[6]=p*h,e[7]=(n*c-l*t)*h,e[8]=(o*t-n*a)*h,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,a,o,s){let c=Math.cos(a),l=Math.sin(a);return this.set(n*c,n*l,-n*(c*o+l*s)+o+e,-i*l,i*c,-i*(-l*o+c*s)+s+t,0,0,1),this}scale(e,t){return this.premultiply(kt.makeScale(e,t)),this}rotate(e){return this.premultiply(kt.makeRotation(-e)),this}translate(e,t){return this.premultiply(kt.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<9;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},kt=new H,At=new H().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),jt=new H().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function createColorManagement(){let e={enabled:!0,workingColorSpace:pt,spaces:{},convert:function(e,t,n){return this.enabled===!1||t===n||!t||!n?e:(this.spaces[t].transfer===`srgb`&&(e.r=SRGBToLinear(e.r),e.g=SRGBToLinear(e.g),e.b=SRGBToLinear(e.b)),this.spaces[t].primaries!==this.spaces[n].primaries&&(e.applyMatrix3(this.spaces[t].toXYZ),e.applyMatrix3(this.spaces[n].fromXYZ)),this.spaces[n].transfer===`srgb`&&(e.r=LinearToSRGB(e.r),e.g=LinearToSRGB(e.g),e.b=LinearToSRGB(e.b)),e)},workingToColorSpace:function(e,t){return this.convert(e,this.workingColorSpace,t)},colorSpaceToWorking:function(e,t){return this.convert(e,t,this.workingColorSpace)},getPrimaries:function(e){return this.spaces[e].primaries},getTransfer:function(e){return e===``?mt:this.spaces[e].transfer},getToneMappingMode:function(e){return this.spaces[e].outputColorSpaceConfig.toneMappingMode||`standard`},getLuminanceCoefficients:function(e,t=this.workingColorSpace){return e.fromArray(this.spaces[t].luminanceCoefficients)},define:function(e){Object.assign(this.spaces,e)},_getMatrix:function(e,t,n){return e.copy(this.spaces[t].toXYZ).multiply(this.spaces[n].fromXYZ)},_getDrawingBufferColorSpace:function(e){return this.spaces[e].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(e=this.workingColorSpace){return this.spaces[e].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(t,n){return warnOnce(`ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace().`),e.workingToColorSpace(t,n)},toWorkingColorSpace:function(t,n){return warnOnce(`ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking().`),e.colorSpaceToWorking(t,n)}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return e.define({[pt]:{primaries:t,whitePoint:i,transfer:mt,toXYZ:At,fromXYZ:jt,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:ft},outputColorSpaceConfig:{drawingBufferColorSpace:ft}},[ft]:{primaries:t,whitePoint:i,transfer:ht,toXYZ:At,fromXYZ:jt,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:ft}}}),e}var U=createColorManagement();function SRGBToLinear(e){return e<.04045?e*.0773993808:(e*.9478672986+.0521327014)**2.4}function LinearToSRGB(e){return e<.0031308?e*12.92:1.055*e**.41666-.055}var Mt,ImageUtils=class{static getDataURL(e,t=`image/png`){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>`u`)return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Mt===void 0&&(Mt=createElementNS(`canvas`)),Mt.width=e.width,Mt.height=e.height;let t=Mt.getContext(`2d`);e instanceof ImageData?t.putImageData(e,0,0):t.drawImage(e,0,0,e.width,e.height),n=Mt}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap){let t=createElementNS(`canvas`);t.width=e.width,t.height=e.height;let n=t.getContext(`2d`);n.drawImage(e,0,0,e.width,e.height);let i=n.getImageData(0,0,e.width,e.height),a=i.data;for(let e=0;e<a.length;e++)a[e]=SRGBToLinear(a[e]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){let t=e.data.slice(0);for(let e=0;e<t.length;e++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[e]=Math.floor(SRGBToLinear(t[e]/255)*255):t[e]=SRGBToLinear(t[e]);return{data:t,width:e.width,height:e.height}}else return warn(`ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied.`),e}},Nt=0,Source=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,`id`,{value:Nt++}),this.uuid=generateUUID(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<`u`&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<`u`&&t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t===null?e.set(0,0,0):e.set(t.width,t.height,t.depth||0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:``},i=this.data;if(i!==null){let e;if(Array.isArray(i)){e=[];for(let t=0,n=i.length;t<n;t++)i[t].isDataTexture?e.push(serializeImage(i[t].image)):e.push(serializeImage(i[t]))}else e=serializeImage(i);n.url=e}return t||(e.images[this.uuid]=n),n}};function serializeImage(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap?ImageUtils.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(warn(`Texture: Unable to serialize Texture.`),{})}var Pt=0,Ft=new V,It=class Texture extends EventDispatcher{constructor(e=Texture.DEFAULT_IMAGE,t=Texture.DEFAULT_MAPPING,n=A,i=A,a=F,o=te,s=_e,c=ne,l=Texture.DEFAULT_ANISOTROPY,u=``){super(),this.isTexture=!0,Object.defineProperty(this,`id`,{value:Pt++}),this.uuid=generateUUID(),this.name=``,this.source=new Source(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=a,this.minFilter=o,this.anisotropy=l,this.format=s,this.internalFormat=null,this.type=c,this.offset=new B(0,0),this.repeat=new B(1,1),this.center=new B(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new H,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Ft).x}get height(){return this.source.getSize(Ft).y}get depth(){return this.source.getSize(Ft).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){warn(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){warn(`Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:`Texture`,generator:`Texture.toJSON`},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:`dispose`})}transformUv(e){if(this.mapping!==300)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case k:e.x-=Math.floor(e.x);break;case A:e.x=e.x<0?0:1;break;case j:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x-=Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case k:e.y-=Math.floor(e.y);break;case A:e.y=e.y<0?0:1;break;case j:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y-=Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};It.DEFAULT_IMAGE=null,It.DEFAULT_MAPPING=300,It.DEFAULT_ANISOTROPY=1;var W=class Vector4{constructor(e=0,t=0,n=0,i=1){Vector4.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw Error(`index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error(`index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w===void 0?1:e.w,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,a=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*a,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*a,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*a,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*a,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,a,o=.01,s=.1,c=e.elements,l=c[0],u=c[4],d=c[8],f=c[1],p=c[5],m=c[9],h=c[2],g=c[6],_=c[10];if(Math.abs(u-f)<o&&Math.abs(d-h)<o&&Math.abs(m-g)<o){if(Math.abs(u+f)<s&&Math.abs(d+h)<s&&Math.abs(m+g)<s&&Math.abs(l+p+_-3)<s)return this.set(1,0,0,0),this;t=Math.PI;let e=(l+1)/2,c=(p+1)/2,y=(_+1)/2,b=(u+f)/4,x=(d+h)/4,S=(m+g)/4;return e>c&&e>y?e<o?(n=0,i=.707106781,a=.707106781):(n=Math.sqrt(e),i=b/n,a=x/n):c>y?c<o?(n=.707106781,i=0,a=.707106781):(i=Math.sqrt(c),n=b/i,a=S/i):y<o?(n=.707106781,i=.707106781,a=0):(a=Math.sqrt(y),n=x/a,i=S/a),this.set(n,i,a,t),this}let y=Math.sqrt((g-m)*(g-m)+(d-h)*(d-h)+(f-u)*(f-u));return Math.abs(y)<.001&&(y=1),this.x=(g-m)/y,this.y=(d-h)/y,this.z=(f-u)/y,this.w=Math.acos((l+p+_-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=clamp(this.x,e.x,t.x),this.y=clamp(this.y,e.y,t.y),this.z=clamp(this.z,e.z,t.z),this.w=clamp(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=clamp(this.x,e,t),this.y=clamp(this.y,e,t),this.z=clamp(this.z,e,t),this.w=clamp(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(clamp(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},RenderTarget=class extends EventDispatcher{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:F,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new W(0,0,e,t),this.scissorTest=!1,this.viewport=new W(0,0,e,t),this.textures=[];let i=new It({width:e,height:t,depth:n.depth}),a=n.count;for(let e=0;e<a;e++)this.textures[e]=i.clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){let t={minFilter:F,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let e=0;e<this.textures.length;e++)this.textures[e].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,a=this.textures.length;i<a;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let n=Object.assign({},e.textures[t].image);this.textures[t].source=new Source(n)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:`dispose`})}},WebGLRenderTarget=class extends RenderTarget{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},DataArrayTexture=class extends It{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=M,this.minFilter=M,this.wrapR=A,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},Data3DTexture=class extends It{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=M,this.minFilter=M,this.wrapR=A,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},G=class Matrix4{constructor(e,t,n,i,a,o,s,c,l,u,d,f,p,m,h,g){Matrix4.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,a,o,s,c,l,u,d,f,p,m,h,g)}set(e,t,n,i,a,o,s,c,l,u,d,f,p,m,h,g){let _=this.elements;return _[0]=e,_[4]=t,_[8]=n,_[12]=i,_[1]=a,_[5]=o,_[9]=s,_[13]=c,_[2]=l,_[6]=u,_[10]=d,_[14]=f,_[3]=p,_[7]=m,_[11]=h,_[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Matrix4().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();let t=this.elements,n=e.elements,i=1/Lt.setFromMatrixColumn(e,0).length(),a=1/Lt.setFromMatrixColumn(e,1).length(),o=1/Lt.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*a,t[5]=n[5]*a,t[6]=n[6]*a,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,i=e.y,a=e.z,o=Math.cos(n),s=Math.sin(n),c=Math.cos(i),l=Math.sin(i),u=Math.cos(a),d=Math.sin(a);if(e.order===`XYZ`){let e=o*u,n=o*d,i=s*u,a=s*d;t[0]=c*u,t[4]=-c*d,t[8]=l,t[1]=n+i*l,t[5]=e-a*l,t[9]=-s*c,t[2]=a-e*l,t[6]=i+n*l,t[10]=o*c}else if(e.order===`YXZ`){let e=c*u,n=c*d,i=l*u,a=l*d;t[0]=e+a*s,t[4]=i*s-n,t[8]=o*l,t[1]=o*d,t[5]=o*u,t[9]=-s,t[2]=n*s-i,t[6]=a+e*s,t[10]=o*c}else if(e.order===`ZXY`){let e=c*u,n=c*d,i=l*u,a=l*d;t[0]=e-a*s,t[4]=-o*d,t[8]=i+n*s,t[1]=n+i*s,t[5]=o*u,t[9]=a-e*s,t[2]=-o*l,t[6]=s,t[10]=o*c}else if(e.order===`ZYX`){let e=o*u,n=o*d,i=s*u,a=s*d;t[0]=c*u,t[4]=i*l-n,t[8]=e*l+a,t[1]=c*d,t[5]=a*l+e,t[9]=n*l-i,t[2]=-l,t[6]=s*c,t[10]=o*c}else if(e.order===`YZX`){let e=o*c,n=o*l,i=s*c,a=s*l;t[0]=c*u,t[4]=a-e*d,t[8]=i*d+n,t[1]=d,t[5]=o*u,t[9]=-s*u,t[2]=-l*u,t[6]=n*d+i,t[10]=e-a*d}else if(e.order===`XZY`){let e=o*c,n=o*l,i=s*c,a=s*l;t[0]=c*u,t[4]=-d,t[8]=l*u,t[1]=e*d+a,t[5]=o*u,t[9]=n*d-i,t[2]=i*d-n,t[6]=s*u,t[10]=a*d+e}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(zt,e,Bt)}lookAt(e,t,n){let i=this.elements;return Ut.subVectors(e,t),Ut.lengthSq()===0&&(Ut.z=1),Ut.normalize(),Vt.crossVectors(n,Ut),Vt.lengthSq()===0&&(Math.abs(n.z)===1?Ut.x+=1e-4:Ut.z+=1e-4,Ut.normalize(),Vt.crossVectors(n,Ut)),Vt.normalize(),Ht.crossVectors(Ut,Vt),i[0]=Vt.x,i[4]=Ht.x,i[8]=Ut.x,i[1]=Vt.y,i[5]=Ht.y,i[9]=Ut.y,i[2]=Vt.z,i[6]=Ht.z,i[10]=Ut.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,a=this.elements,o=n[0],s=n[4],c=n[8],l=n[12],u=n[1],d=n[5],f=n[9],p=n[13],m=n[2],h=n[6],g=n[10],_=n[14],y=n[3],b=n[7],x=n[11],S=n[15],C=i[0],w=i[4],T=i[8],E=i[12],D=i[1],O=i[5],k=i[9],A=i[13],j=i[2],M=i[6],N=i[10],P=i[14],F=i[3],ee=i[7],te=i[11],ne=i[15];return a[0]=o*C+s*D+c*j+l*F,a[4]=o*w+s*O+c*M+l*ee,a[8]=o*T+s*k+c*N+l*te,a[12]=o*E+s*A+c*P+l*ne,a[1]=u*C+d*D+f*j+p*F,a[5]=u*w+d*O+f*M+p*ee,a[9]=u*T+d*k+f*N+p*te,a[13]=u*E+d*A+f*P+p*ne,a[2]=m*C+h*D+g*j+_*F,a[6]=m*w+h*O+g*M+_*ee,a[10]=m*T+h*k+g*N+_*te,a[14]=m*E+h*A+g*P+_*ne,a[3]=y*C+b*D+x*j+S*F,a[7]=y*w+b*O+x*M+S*ee,a[11]=y*T+b*k+x*N+S*te,a[15]=y*E+b*A+x*P+S*ne,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],i=e[8],a=e[12],o=e[1],s=e[5],c=e[9],l=e[13],u=e[2],d=e[6],f=e[10],p=e[14],m=e[3],h=e[7],g=e[11],_=e[15],y=c*p-l*f,b=s*p-l*d,x=s*f-c*d,S=o*p-l*u,C=o*f-c*u,w=o*d-s*u;return t*(h*y-g*b+_*x)-n*(m*y-g*S+_*C)+i*(m*b-h*S+_*w)-a*(m*x-h*C+g*w)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],a=e[3],o=e[4],s=e[5],c=e[6],l=e[7],u=e[8],d=e[9],f=e[10],p=e[11],m=e[12],h=e[13],g=e[14],_=e[15],y=t*s-n*o,b=t*c-i*o,x=t*l-a*o,S=n*c-i*s,C=n*l-a*s,w=i*l-a*c,T=u*h-d*m,E=u*g-f*m,D=u*_-p*m,O=d*g-f*h,k=d*_-p*h,A=f*_-p*g,j=y*A-b*k+x*O+S*D-C*E+w*T;if(j===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let M=1/j;return e[0]=(s*A-c*k+l*O)*M,e[1]=(i*k-n*A-a*O)*M,e[2]=(h*w-g*C+_*S)*M,e[3]=(f*C-d*w-p*S)*M,e[4]=(c*D-o*A-l*E)*M,e[5]=(t*A-i*D+a*E)*M,e[6]=(g*x-m*w-_*b)*M,e[7]=(u*w-f*x+p*b)*M,e[8]=(o*k-s*D+l*T)*M,e[9]=(n*D-t*k-a*T)*M,e[10]=(m*C-h*x+_*y)*M,e[11]=(d*x-u*C-p*y)*M,e[12]=(s*E-o*O-c*T)*M,e[13]=(t*O-n*E+i*T)*M,e[14]=(h*b-m*S-g*y)*M,e[15]=(u*S-d*b+f*y)*M,this}scale(e){let t=this.elements,n=e.x,i=e.y,a=e.z;return t[0]*=n,t[4]*=i,t[8]*=a,t[1]*=n,t[5]*=i,t[9]*=a,t[2]*=n,t[6]*=i,t[10]*=a,t[3]*=n,t[7]*=i,t[11]*=a,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),i=Math.sin(t),a=1-n,o=e.x,s=e.y,c=e.z,l=a*o,u=a*s;return this.set(l*o+n,l*s-i*c,l*c+i*s,0,l*s+i*c,u*s+n,u*c-i*o,0,l*c-i*s,u*c+i*o,a*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,a,o){return this.set(1,n,a,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){let i=this.elements,a=t._x,o=t._y,s=t._z,c=t._w,l=a+a,u=o+o,d=s+s,f=a*l,p=a*u,m=a*d,h=o*u,g=o*d,_=s*d,y=c*l,b=c*u,x=c*d,S=n.x,C=n.y,w=n.z;return i[0]=(1-(h+_))*S,i[1]=(p+x)*S,i[2]=(m-b)*S,i[3]=0,i[4]=(p-x)*C,i[5]=(1-(f+_))*C,i[6]=(g+y)*C,i[7]=0,i[8]=(m+b)*w,i[9]=(g-y)*w,i[10]=(1-(f+h))*w,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){let i=this.elements;e.x=i[12],e.y=i[13],e.z=i[14];let a=this.determinant();if(a===0)return n.set(1,1,1),t.identity(),this;let o=Lt.set(i[0],i[1],i[2]).length(),s=Lt.set(i[4],i[5],i[6]).length(),c=Lt.set(i[8],i[9],i[10]).length();a<0&&(o=-o),Rt.copy(this);let l=1/o,u=1/s,d=1/c;return Rt.elements[0]*=l,Rt.elements[1]*=l,Rt.elements[2]*=l,Rt.elements[4]*=u,Rt.elements[5]*=u,Rt.elements[6]*=u,Rt.elements[8]*=d,Rt.elements[9]*=d,Rt.elements[10]*=d,t.setFromRotationMatrix(Rt),n.x=o,n.y=s,n.z=c,this}makePerspective(e,t,n,i,a,o,s=vt,c=!1){let l=this.elements,u=2*a/(t-e),d=2*a/(n-i),f=(t+e)/(t-e),p=(n+i)/(n-i),m,h;if(c)m=a/(o-a),h=o*a/(o-a);else if(s===2e3)m=-(o+a)/(o-a),h=-2*o*a/(o-a);else if(s===2001)m=-o/(o-a),h=-o*a/(o-a);else throw Error(`THREE.Matrix4.makePerspective(): Invalid coordinate system: `+s);return l[0]=u,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=d,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=h,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,a,o,s=vt,c=!1){let l=this.elements,u=2/(t-e),d=2/(n-i),f=-(t+e)/(t-e),p=-(n+i)/(n-i),m,h;if(c)m=1/(o-a),h=o/(o-a);else if(s===2e3)m=-2/(o-a),h=-(o+a)/(o-a);else if(s===2001)m=-1/(o-a),h=-a/(o-a);else throw Error(`THREE.Matrix4.makeOrthographic(): Invalid coordinate system: `+s);return l[0]=u,l[4]=0,l[8]=0,l[12]=f,l[1]=0,l[5]=d,l[9]=0,l[13]=p,l[2]=0,l[6]=0,l[10]=m,l[14]=h,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<16;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Lt=new V,Rt=new G,zt=new V(0,0,0),Bt=new V(1,1,1),Vt=new V,Ht=new V,Ut=new V,Wt=new G,Gt=new Quaternion,Kt=class Euler{constructor(e=0,t=0,n=0,i=Euler.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let i=e.elements,a=i[0],o=i[4],s=i[8],c=i[1],l=i[5],u=i[9],d=i[2],f=i[6],p=i[10];switch(t){case`XYZ`:this._y=Math.asin(clamp(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,a)):(this._x=Math.atan2(f,l),this._z=0);break;case`YXZ`:this._x=Math.asin(-clamp(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(s,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,a),this._z=0);break;case`ZXY`:this._x=Math.asin(clamp(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,a));break;case`ZYX`:this._y=Math.asin(-clamp(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(c,a)):(this._x=0,this._z=Math.atan2(-o,l));break;case`YZX`:this._z=Math.asin(clamp(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-d,a)):(this._x=0,this._y=Math.atan2(s,p));break;case`XZY`:this._z=Math.asin(-clamp(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(s,a)):(this._x=Math.atan2(-u,p),this._y=0);break;default:warn(`Euler: .setFromRotationMatrix() encountered an unknown order: `+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Wt.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Wt,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Gt.setFromEuler(this),this.setFromQuaternion(Gt,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Kt.DEFAULT_ORDER=`XYZ`;var Layers=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!=0}},qt=0,Jt=new V,Yt=new Quaternion,Xt=new G,Zt=new V,Qt=new V,$t=new V,en=new Quaternion,tn=new V(1,0,0),nn=new V(0,1,0),rn=new V(0,0,1),an={type:`added`},on={type:`removed`},sn={type:`childadded`,child:null},cn={type:`childremoved`,child:null},ln=class Object3D extends EventDispatcher{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,`id`,{value:qt++}),this.uuid=generateUUID(),this.name=``,this.type=`Object3D`,this.parent=null,this.children=[],this.up=Object3D.DEFAULT_UP.clone();let e=new V,t=new Kt,n=new Quaternion,i=new V(1,1,1);function onRotationChange(){n.setFromEuler(t,!1)}function onQuaternionChange(){t.setFromQuaternion(n,void 0,!1)}t._onChange(onRotationChange),n._onChange(onQuaternionChange),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new G},normalMatrix:{value:new H}}),this.matrix=new G,this.matrixWorld=new G,this.matrixAutoUpdate=Object3D.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Object3D.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Layers,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Yt.setFromAxisAngle(e,t),this.quaternion.multiply(Yt),this}rotateOnWorldAxis(e,t){return Yt.setFromAxisAngle(e,t),this.quaternion.premultiply(Yt),this}rotateX(e){return this.rotateOnAxis(tn,e)}rotateY(e){return this.rotateOnAxis(nn,e)}rotateZ(e){return this.rotateOnAxis(rn,e)}translateOnAxis(e,t){return Jt.copy(e).applyQuaternion(this.quaternion),this.position.add(Jt.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(tn,e)}translateY(e){return this.translateOnAxis(nn,e)}translateZ(e){return this.translateOnAxis(rn,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Xt.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Zt.copy(e):Zt.set(e,t,n);let i=this.parent;this.updateWorldMatrix(!0,!1),Qt.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Xt.lookAt(Qt,Zt,this.up):Xt.lookAt(Zt,Qt,this.up),this.quaternion.setFromRotationMatrix(Xt),i&&(Xt.extractRotation(i.matrixWorld),Yt.setFromRotationMatrix(Xt),this.quaternion.premultiply(Yt.invert()))}add(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return e===this?(error(`Object3D.add: object can't be added as a child of itself.`,e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(an),sn.child=e,this.dispatchEvent(sn),sn.child=null):error(`Object3D.add: object not an instance of THREE.Object3D.`,e),this)}remove(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.remove(arguments[e]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(on),cn.child=e,this.dispatchEvent(cn),cn.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Xt.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Xt.multiply(e.parent.matrixWorld)),e.applyMatrix4(Xt),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(an),sn.child=e,this.dispatchEvent(sn),sn.child=null,this}getObjectById(e){return this.getObjectByProperty(`id`,e)}getObjectByName(e){return this.getObjectByProperty(`name`,e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){let i=this.children[n].getObjectByProperty(e,t);if(i!==void 0)return i}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let i=this.children;for(let a=0,o=i.length;a<o;a++)i[a].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qt,e,$t),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qt,en,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,i=e.z,a=this.matrix.elements;a[12]+=t-a[0]*t-a[4]*n-a[8]*i,a[13]+=n-a[1]*t-a[5]*n-a[9]*i,a[14]+=i-a[2]*t-a[6]*n-a[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let e=this.children;for(let t=0,n=e.length;t<n;t++)e[t].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e==`string`,n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:`Object`,generator:`Object3D.toJSON`});let i={};i.uuid=this.uuid,i.type=this.type,this.name!==``&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),this.static!==!1&&(i.static=this.static),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type=`InstancedMesh`,i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type=`BatchedMesh`,i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(e=>({...e,boundingBox:e.boundingBox?e.boundingBox.toJSON():void 0,boundingSphere:e.boundingSphere?e.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(e=>({...e})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function serialize(t,n){return t[n.uuid]===void 0&&(t[n.uuid]=n.toJSON(e)),n.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=serialize(e.geometries,this.geometry);let t=this.geometry.parameters;if(t!==void 0&&t.shapes!==void 0){let n=t.shapes;if(Array.isArray(n))for(let t=0,i=n.length;t<i;t++){let i=n[t];serialize(e.shapes,i)}else serialize(e.shapes,n)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(serialize(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let t=[];for(let n=0,i=this.material.length;n<i;n++)t.push(serialize(e.materials,this.material[n]));i.material=t}else i.material=serialize(e.materials,this.material);if(this.children.length>0){i.children=[];for(let t=0;t<this.children.length;t++)i.children.push(this.children[t].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let t=0;t<this.animations.length;t++){let n=this.animations[t];i.animations.push(serialize(e.animations,n))}}if(t){let t=extractFromCache(e.geometries),i=extractFromCache(e.materials),a=extractFromCache(e.textures),o=extractFromCache(e.images),s=extractFromCache(e.shapes),c=extractFromCache(e.skeletons),l=extractFromCache(e.animations),u=extractFromCache(e.nodes);t.length>0&&(n.geometries=t),i.length>0&&(n.materials=i),a.length>0&&(n.textures=a),o.length>0&&(n.images=o),s.length>0&&(n.shapes=s),c.length>0&&(n.skeletons=c),l.length>0&&(n.animations=l),u.length>0&&(n.nodes=u)}return n.object=i,n;function extractFromCache(e){let t=[];for(let n in e){let i=e[n];delete i.metadata,t.push(i)}return t}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),e.pivot!==null&&(this.pivot=e.pivot.clone()),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let t=0;t<e.children.length;t++){let n=e.children[t];this.add(n.clone())}return this}};ln.DEFAULT_UP=new V(0,1,0),ln.DEFAULT_MATRIX_AUTO_UPDATE=!0,ln.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Group$1=class extends ln{static{__name(this,`Group`)}constructor(){super(),this.isGroup=!0,this.type=`Group`}},un={type:`move`},WebXRController=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Group$1,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Group$1,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new V,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new V),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Group$1,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new V,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new V),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:`connected`,data:e}),this}disconnect(e){return this.dispatchEvent({type:`disconnected`,data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,a=null,o=null,s=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!==`visible-blurred`){if(l&&e.hand){o=!0;for(let i of e.hand.values()){let e=t.getJointPose(i,n),a=this._getHandJoint(l,i);e!==null&&(a.matrix.fromArray(e.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,a.jointRadius=e.radius),a.visible=e!==null}let i=l.joints[`index-finger-tip`],a=l.joints[`thumb-tip`],s=i.position.distanceTo(a.position),c=.02,u=.005;l.inputState.pinching&&s>c+u?(l.inputState.pinching=!1,this.dispatchEvent({type:`pinchend`,handedness:e.handedness,target:this})):!l.inputState.pinching&&s<=c-u&&(l.inputState.pinching=!0,this.dispatchEvent({type:`pinchstart`,handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,n),a!==null&&(c.matrix.fromArray(a.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,a.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(a.linearVelocity)):c.hasLinearVelocity=!1,a.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(a.angularVelocity)):c.hasAngularVelocity=!1));s!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&a!==null&&(i=a),i!==null&&(s.matrix.fromArray(i.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),s.matrixWorldNeedsUpdate=!0,i.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(i.linearVelocity)):s.hasLinearVelocity=!1,i.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(i.angularVelocity)):s.hasAngularVelocity=!1,this.dispatchEvent(un)))}return s!==null&&(s.visible=i!==null),c!==null&&(c.visible=a!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Group$1;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},dn={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},fn={h:0,s:0,l:0},pn={h:0,s:0,l:0};function hue2rgb(e,t,n){return n<0&&(n+=1),n>1&&--n,n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}var Color$1=class{static{__name(this,`Color`)}constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let t=e;t&&t.isColor?this.copy(t):typeof t==`number`?this.setHex(t):typeof t==`string`&&this.setStyle(t)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ft){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,U.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=U.workingColorSpace){return this.r=e,this.g=t,this.b=n,U.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=U.workingColorSpace){if(e=euclideanModulo(e,1),t=clamp(t,0,1),n=clamp(n,0,1),t===0)this.r=this.g=this.b=n;else{let i=n<=.5?n*(1+t):n+t-n*t,a=2*n-i;this.r=hue2rgb(a,i,e+1/3),this.g=hue2rgb(a,i,e),this.b=hue2rgb(a,i,e-1/3)}return U.colorSpaceToWorking(this,i),this}setStyle(e,t=ft){function handleAlpha(t){t!==void 0&&parseFloat(t)<1&&warn(`Color: Alpha component of `+e+` will be ignored.`)}let n;if(n=/^(\w+)\(([^\)]*)\)/.exec(e)){let i,a=n[1],o=n[2];switch(a){case`rgb`:case`rgba`:if(i=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return handleAlpha(i[4]),this.setRGB(Math.min(255,parseInt(i[1],10))/255,Math.min(255,parseInt(i[2],10))/255,Math.min(255,parseInt(i[3],10))/255,t);if(i=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return handleAlpha(i[4]),this.setRGB(Math.min(100,parseInt(i[1],10))/100,Math.min(100,parseInt(i[2],10))/100,Math.min(100,parseInt(i[3],10))/100,t);break;case`hsl`:case`hsla`:if(i=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return handleAlpha(i[4]),this.setHSL(parseFloat(i[1])/360,parseFloat(i[2])/100,parseFloat(i[3])/100,t);break;default:warn(`Color: Unknown color model `+e)}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(e)){let i=n[1],a=i.length;if(a===3)return this.setRGB(parseInt(i.charAt(0),16)/15,parseInt(i.charAt(1),16)/15,parseInt(i.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(i,16),t);warn(`Color: Invalid hex color `+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ft){let n=dn[e.toLowerCase()];return n===void 0?warn(`Color: Unknown color `+e):this.setHex(n,t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=SRGBToLinear(e.r),this.g=SRGBToLinear(e.g),this.b=SRGBToLinear(e.b),this}copyLinearToSRGB(e){return this.r=LinearToSRGB(e.r),this.g=LinearToSRGB(e.g),this.b=LinearToSRGB(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ft){return U.workingToColorSpace(mn.copy(this),e),Math.round(clamp(mn.r*255,0,255))*65536+Math.round(clamp(mn.g*255,0,255))*256+Math.round(clamp(mn.b*255,0,255))}getHexString(e=ft){return(`000000`+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=U.workingColorSpace){U.workingToColorSpace(mn.copy(this),t);let n=mn.r,i=mn.g,a=mn.b,o=Math.max(n,i,a),s=Math.min(n,i,a),c,l,u=(s+o)/2;if(s===o)c=0,l=0;else{let e=o-s;switch(l=u<=.5?e/(o+s):e/(2-o-s),o){case n:c=(i-a)/e+(i<a?6:0);break;case i:c=(a-n)/e+2;break;case a:c=(n-i)/e+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=U.workingColorSpace){return U.workingToColorSpace(mn.copy(this),t),e.r=mn.r,e.g=mn.g,e.b=mn.b,e}getStyle(e=ft){U.workingToColorSpace(mn.copy(this),e);let t=mn.r,n=mn.g,i=mn.b;return e===`srgb`?`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`:`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`}offsetHSL(e,t,n){return this.getHSL(fn),this.setHSL(fn.h+e,fn.s+t,fn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(fn),e.getHSL(pn);let n=lerp(fn.h,pn.h,t),i=lerp(fn.s,pn.s,t),a=lerp(fn.l,pn.l,t);return this.setHSL(n,i,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,i=this.b,a=e.elements;return this.r=a[0]*t+a[3]*n+a[6]*i,this.g=a[1]*t+a[4]*n+a[7]*i,this.b=a[2]*t+a[5]*n+a[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},mn=new Color$1;Color$1.NAMES=dn;var Scene=class extends ln{constructor(){super(),this.isScene=!0,this.type=`Scene`,this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Kt,this.environmentIntensity=1,this.environmentRotation=new Kt,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},hn=new V,gn=new V,_n=new V,vn=new V,yn=new V,bn=new V,xn=new V,Sn=new V,Cn=new V,wn=new V,Tn=new W,En=new W,Dn=new W,On=class Triangle{constructor(e=new V,t=new V,n=new V){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),hn.subVectors(e,t),i.cross(hn);let a=i.lengthSq();return a>0?i.multiplyScalar(1/Math.sqrt(a)):i.set(0,0,0)}static getBarycoord(e,t,n,i,a){hn.subVectors(i,t),gn.subVectors(n,t),_n.subVectors(e,t);let o=hn.dot(hn),s=hn.dot(gn),c=hn.dot(_n),l=gn.dot(gn),u=gn.dot(_n),d=o*l-s*s;if(d===0)return a.set(0,0,0),null;let f=1/d,p=(l*c-s*u)*f,m=(o*u-s*c)*f;return a.set(1-p-m,m,p)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,vn)===null?!1:vn.x>=0&&vn.y>=0&&vn.x+vn.y<=1}static getInterpolation(e,t,n,i,a,o,s,c){return this.getBarycoord(e,t,n,i,vn)===null?(c.x=0,c.y=0,`z`in c&&(c.z=0),`w`in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(a,vn.x),c.addScaledVector(o,vn.y),c.addScaledVector(s,vn.z),c)}static getInterpolatedAttribute(e,t,n,i,a,o){return Tn.setScalar(0),En.setScalar(0),Dn.setScalar(0),Tn.fromBufferAttribute(e,t),En.fromBufferAttribute(e,n),Dn.fromBufferAttribute(e,i),o.setScalar(0),o.addScaledVector(Tn,a.x),o.addScaledVector(En,a.y),o.addScaledVector(Dn,a.z),o}static isFrontFacing(e,t,n,i){return hn.subVectors(n,t),gn.subVectors(e,t),hn.cross(gn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return hn.subVectors(this.c,this.b),gn.subVectors(this.a,this.b),hn.cross(gn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Triangle.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Triangle.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,a){return Triangle.getInterpolation(e,this.a,this.b,this.c,t,n,i,a)}containsPoint(e){return Triangle.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Triangle.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,i=this.b,a=this.c,o,s;yn.subVectors(i,n),bn.subVectors(a,n),Sn.subVectors(e,n);let c=yn.dot(Sn),l=bn.dot(Sn);if(c<=0&&l<=0)return t.copy(n);Cn.subVectors(e,i);let u=yn.dot(Cn),d=bn.dot(Cn);if(u>=0&&d<=u)return t.copy(i);let f=c*d-u*l;if(f<=0&&c>=0&&u<=0)return o=c/(c-u),t.copy(n).addScaledVector(yn,o);wn.subVectors(e,a);let p=yn.dot(wn),m=bn.dot(wn);if(m>=0&&p<=m)return t.copy(a);let h=p*l-c*m;if(h<=0&&l>=0&&m<=0)return s=l/(l-m),t.copy(n).addScaledVector(bn,s);let g=u*m-p*d;if(g<=0&&d-u>=0&&p-m>=0)return xn.subVectors(a,i),s=(d-u)/(d-u+(p-m)),t.copy(i).addScaledVector(xn,s);let _=1/(g+h+f);return o=h*_,s=f*_,t.copy(n).addScaledVector(yn,o).addScaledVector(bn,s)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Box3=class{constructor(e=new V(1/0,1/0,1/0),t=new V(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(An.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(An.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=An.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let i=n.getAttribute(`position`);if(t===!0&&i!==void 0&&e.isInstancedMesh!==!0)for(let t=0,n=i.count;t<n;t++)e.isMesh===!0?e.getVertexPosition(t,An):An.fromBufferAttribute(i,t),An.applyMatrix4(e.matrixWorld),this.expandByPoint(An);else e.boundingBox===void 0?(n.boundingBox===null&&n.computeBoundingBox(),jn.copy(n.boundingBox)):(e.boundingBox===null&&e.computeBoundingBox(),jn.copy(e.boundingBox)),jn.applyMatrix4(e.matrixWorld),this.union(jn)}let i=e.children;for(let e=0,n=i.length;e<n;e++)this.expandByObject(i[e],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,An),An.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Rn),zn.subVectors(this.max,Rn),Mn.subVectors(e.a,Rn),Nn.subVectors(e.b,Rn),Pn.subVectors(e.c,Rn),Fn.subVectors(Nn,Mn),In.subVectors(Pn,Nn),Ln.subVectors(Mn,Pn);let t=[0,-Fn.z,Fn.y,0,-In.z,In.y,0,-Ln.z,Ln.y,Fn.z,0,-Fn.x,In.z,0,-In.x,Ln.z,0,-Ln.x,-Fn.y,Fn.x,0,-In.y,In.x,0,-Ln.y,Ln.x,0];return!satForAxes(t,Mn,Nn,Pn,zn)||(t=[1,0,0,0,1,0,0,0,1],!satForAxes(t,Mn,Nn,Pn,zn))?!1:(Bn.crossVectors(Fn,In),t=[Bn.x,Bn.y,Bn.z],satForAxes(t,Mn,Nn,Pn,zn))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,An).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(An).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(kn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),kn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),kn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),kn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),kn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),kn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),kn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),kn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(kn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},kn=[new V,new V,new V,new V,new V,new V,new V,new V],An=new V,jn=new Box3,Mn=new V,Nn=new V,Pn=new V,Fn=new V,In=new V,Ln=new V,Rn=new V,zn=new V,Bn=new V,Vn=new V;function satForAxes(e,t,n,i,a){for(let o=0,s=e.length-3;o<=s;o+=3){Vn.fromArray(e,o);let s=a.x*Math.abs(Vn.x)+a.y*Math.abs(Vn.y)+a.z*Math.abs(Vn.z),c=t.dot(Vn),l=n.dot(Vn),u=i.dot(Vn);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>s)return!1}return!0}var Hn=new V,Un=new B,Wn=0,BufferAttribute=class{constructor(e,t,n=!1){if(Array.isArray(e))throw TypeError(`THREE.BufferAttribute: array should be a Typed Array.`);this.isBufferAttribute=!0,Object.defineProperty(this,`id`,{value:Wn++}),this.name=``,this.array=e,this.itemSize=t,this.count=e===void 0?0:e.length/t,this.normalized=n,this.usage=_t,this.updateRanges=[],this.gpuType=ce,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,a=this.itemSize;i<a;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Un.fromBufferAttribute(this,t),Un.applyMatrix3(e),this.setXY(t,Un.x,Un.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Hn.fromBufferAttribute(this,t),Hn.applyMatrix3(e),this.setXYZ(t,Hn.x,Hn.y,Hn.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Hn.fromBufferAttribute(this,t),Hn.applyMatrix4(e),this.setXYZ(t,Hn.x,Hn.y,Hn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Hn.fromBufferAttribute(this,t),Hn.applyNormalMatrix(e),this.setXYZ(t,Hn.x,Hn.y,Hn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Hn.fromBufferAttribute(this,t),Hn.transformDirection(e),this.setXYZ(t,Hn.x,Hn.y,Hn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=denormalize(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=normalize(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=denormalize(t,this.array)),t}setX(e,t){return this.normalized&&(t=normalize(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=denormalize(t,this.array)),t}setY(e,t){return this.normalized&&(t=normalize(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=denormalize(t,this.array)),t}setZ(e,t){return this.normalized&&(t=normalize(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=denormalize(t,this.array)),t}setW(e,t){return this.normalized&&(t=normalize(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=normalize(t,this.array),n=normalize(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=normalize(t,this.array),n=normalize(n,this.array),i=normalize(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,a){return e*=this.itemSize,this.normalized&&(t=normalize(t,this.array),n=normalize(n,this.array),i=normalize(i,this.array),a=normalize(a,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==``&&(e.name=this.name),this.usage!==35044&&(e.usage=this.usage),e}},Uint16BufferAttribute=class extends BufferAttribute{constructor(e,t,n){super(new Uint16Array(e),t,n)}},Uint32BufferAttribute=class extends BufferAttribute{constructor(e,t,n){super(new Uint32Array(e),t,n)}},Float32BufferAttribute=class extends BufferAttribute{constructor(e,t,n){super(new Float32Array(e),t,n)}},Gn=new Box3,Kn=new V,qn=new V,Sphere=class{constructor(e=new V,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t===void 0?Gn.setFromPoints(e).getCenter(n):n.copy(t);let i=0;for(let t=0,a=e.length;t<a;t++)i=Math.max(i,n.distanceToSquared(e[t]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius*=e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Kn.subVectors(e,this.center);let t=Kn.lengthSq();if(t>this.radius*this.radius){let e=Math.sqrt(t),n=(e-this.radius)*.5;this.center.addScaledVector(Kn,n/e),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(qn.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Kn.copy(e.center).add(qn)),this.expandByPoint(Kn.copy(e.center).sub(qn))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Jn=0,Yn=new G,Xn=new ln,Zn=new V,Qn=new Box3,$n=new Box3,er=new V,tr=class BufferGeometry extends EventDispatcher{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,`id`,{value:Jn++}),this.uuid=generateUUID(),this.name=``,this.type=`BufferGeometry`,this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(arrayNeedsUint32(e)?Uint32BufferAttribute:Uint16BufferAttribute)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let t=new H().getNormalMatrix(e);n.applyNormalMatrix(t),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Yn.makeRotationFromQuaternion(e),this.applyMatrix4(Yn),this}rotateX(e){return Yn.makeRotationX(e),this.applyMatrix4(Yn),this}rotateY(e){return Yn.makeRotationY(e),this.applyMatrix4(Yn),this}rotateZ(e){return Yn.makeRotationZ(e),this.applyMatrix4(Yn),this}translate(e,t,n){return Yn.makeTranslation(e,t,n),this.applyMatrix4(Yn),this}scale(e,t,n){return Yn.makeScale(e,t,n),this.applyMatrix4(Yn),this}lookAt(e){return Xn.lookAt(e),Xn.updateMatrix(),this.applyMatrix4(Xn.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Zn).negate(),this.translate(Zn.x,Zn.y,Zn.z),this}setFromPoints(e){let t=this.getAttribute(`position`);if(t===void 0){let t=[];for(let n=0,i=e.length;n<i;n++){let i=e[n];t.push(i.x,i.y,i.z||0)}this.setAttribute(`position`,new Float32BufferAttribute(t,3))}else{let n=Math.min(e.length,t.count);for(let i=0;i<n;i++){let n=e[i];t.setXYZ(i,n.x,n.y,n.z||0)}e.length>t.count&&warn(`BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.`),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Box3);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){error(`BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.`,this),this.boundingBox.set(new V(-1/0,-1/0,-1/0),new V(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];Qn.setFromBufferAttribute(n),this.morphTargetsRelative?(er.addVectors(this.boundingBox.min,Qn.min),this.boundingBox.expandByPoint(er),er.addVectors(this.boundingBox.max,Qn.max),this.boundingBox.expandByPoint(er)):(this.boundingBox.expandByPoint(Qn.min),this.boundingBox.expandByPoint(Qn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&error(`BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.`,this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Sphere);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){error(`BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.`,this),this.boundingSphere.set(new V,1/0);return}if(e){let n=this.boundingSphere.center;if(Qn.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];$n.setFromBufferAttribute(n),this.morphTargetsRelative?(er.addVectors(Qn.min,$n.min),Qn.expandByPoint(er),er.addVectors(Qn.max,$n.max),Qn.expandByPoint(er)):(Qn.expandByPoint($n.min),Qn.expandByPoint($n.max))}Qn.getCenter(n);let i=0;for(let t=0,a=e.count;t<a;t++)er.fromBufferAttribute(e,t),i=Math.max(i,n.distanceToSquared(er));if(t)for(let a=0,o=t.length;a<o;a++){let o=t[a],s=this.morphTargetsRelative;for(let t=0,a=o.count;t<a;t++)er.fromBufferAttribute(o,t),s&&(Zn.fromBufferAttribute(e,t),er.add(Zn)),i=Math.max(i,n.distanceToSquared(er))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&error(`BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.`,this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){error(`BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)`);return}let n=t.position,i=t.normal,a=t.uv;this.hasAttribute(`tangent`)===!1&&this.setAttribute(`tangent`,new BufferAttribute(new Float32Array(4*n.count),4));let o=this.getAttribute(`tangent`),s=[],c=[];for(let e=0;e<n.count;e++)s[e]=new V,c[e]=new V;let l=new V,u=new V,d=new V,f=new B,p=new B,m=new B,h=new V,g=new V;function handleTriangle(e,t,i){l.fromBufferAttribute(n,e),u.fromBufferAttribute(n,t),d.fromBufferAttribute(n,i),f.fromBufferAttribute(a,e),p.fromBufferAttribute(a,t),m.fromBufferAttribute(a,i),u.sub(l),d.sub(l),p.sub(f),m.sub(f);let o=1/(p.x*m.y-m.x*p.y);isFinite(o)&&(h.copy(u).multiplyScalar(m.y).addScaledVector(d,-p.y).multiplyScalar(o),g.copy(d).multiplyScalar(p.x).addScaledVector(u,-m.x).multiplyScalar(o),s[e].add(h),s[t].add(h),s[i].add(h),c[e].add(g),c[t].add(g),c[i].add(g))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let t=0,n=_.length;t<n;++t){let n=_[t],i=n.start,a=n.count;for(let t=i,n=i+a;t<n;t+=3)handleTriangle(e.getX(t+0),e.getX(t+1),e.getX(t+2))}let y=new V,b=new V,x=new V,S=new V;function handleVertex(e){x.fromBufferAttribute(i,e),S.copy(x);let t=s[e];y.copy(t),y.sub(x.multiplyScalar(x.dot(t))).normalize(),b.crossVectors(S,t);let n=b.dot(c[e])<0?-1:1;o.setXYZW(e,y.x,y.y,y.z,n)}for(let t=0,n=_.length;t<n;++t){let n=_[t],i=n.start,a=n.count;for(let t=i,n=i+a;t<n;t+=3)handleVertex(e.getX(t+0)),handleVertex(e.getX(t+1)),handleVertex(e.getX(t+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute(`position`);if(t!==void 0){let n=this.getAttribute(`normal`);if(n===void 0)n=new BufferAttribute(new Float32Array(t.count*3),3),this.setAttribute(`normal`,n);else for(let e=0,t=n.count;e<t;e++)n.setXYZ(e,0,0,0);let i=new V,a=new V,o=new V,s=new V,c=new V,l=new V,u=new V,d=new V;if(e)for(let f=0,p=e.count;f<p;f+=3){let p=e.getX(f+0),m=e.getX(f+1),h=e.getX(f+2);i.fromBufferAttribute(t,p),a.fromBufferAttribute(t,m),o.fromBufferAttribute(t,h),u.subVectors(o,a),d.subVectors(i,a),u.cross(d),s.fromBufferAttribute(n,p),c.fromBufferAttribute(n,m),l.fromBufferAttribute(n,h),s.add(u),c.add(u),l.add(u),n.setXYZ(p,s.x,s.y,s.z),n.setXYZ(m,c.x,c.y,c.z),n.setXYZ(h,l.x,l.y,l.z)}else for(let e=0,s=t.count;e<s;e+=3)i.fromBufferAttribute(t,e+0),a.fromBufferAttribute(t,e+1),o.fromBufferAttribute(t,e+2),u.subVectors(o,a),d.subVectors(i,a),u.cross(d),n.setXYZ(e+0,u.x,u.y,u.z),n.setXYZ(e+1,u.x,u.y,u.z),n.setXYZ(e+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)er.fromBufferAttribute(e,t),er.normalize(),e.setXYZ(t,er.x,er.y,er.z)}toNonIndexed(){function convertBufferAttribute(e,t){let n=e.array,i=e.itemSize,a=e.normalized,o=new n.constructor(t.length*i),s=0,c=0;for(let a=0,l=t.length;a<l;a++){s=e.isInterleavedBufferAttribute?t[a]*e.data.stride+e.offset:t[a]*i;for(let e=0;e<i;e++)o[c++]=n[s++]}return new BufferAttribute(o,i,a)}if(this.index===null)return warn(`BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed.`),this;let e=new BufferGeometry,t=this.index.array,n=this.attributes;for(let i in n){let a=n[i],o=convertBufferAttribute(a,t);e.setAttribute(i,o)}let i=this.morphAttributes;for(let n in i){let a=[],o=i[n];for(let e=0,n=o.length;e<n;e++){let n=o[e],i=convertBufferAttribute(n,t);a.push(i)}e.morphAttributes[n]=a}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let t=0,n=a.length;t<n;t++){let n=a[t];e.addGroup(n.start,n.count,n.materialIndex)}return e}toJSON(){let e={metadata:{version:4.7,type:`BufferGeometry`,generator:`BufferGeometry.toJSON`}};if(e.uuid=this.uuid,e.type=this.type,this.name!==``&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let t=this.parameters;for(let n in t)t[n]!==void 0&&(e[n]=t[n]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let t in n){let i=n[t];e.data.attributes[t]=i.toJSON(e.data)}let i={},a=!1;for(let t in this.morphAttributes){let n=this.morphAttributes[t],o=[];for(let t=0,i=n.length;t<i;t++){let i=n[t];o.push(i.toJSON(e.data))}o.length>0&&(i[t]=o,a=!0)}a&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let s=this.boundingSphere;return s!==null&&(e.data.boundingSphere=s.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let i=e.attributes;for(let e in i){let n=i[e];this.setAttribute(e,n.clone(t))}let a=e.morphAttributes;for(let e in a){let n=[],i=a[e];for(let e=0,a=i.length;e<a;e++)n.push(i[e].clone(t));this.morphAttributes[e]=n}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let e=0,t=o.length;e<t;e++){let t=o[e];this.addGroup(t.start,t.count,t.materialIndex)}let s=e.boundingBox;s!==null&&(this.boundingBox=s.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:`dispose`})}},InterleavedBuffer=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e===void 0?0:e.length/t,this.usage=_t,this.updateRanges=[],this.version=0,this.uuid=generateUUID()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,a=this.stride;i<a;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=generateUUID()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=generateUUID()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},nr=new V,rr=class InterleavedBufferAttribute{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name=``,this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)nr.fromBufferAttribute(this,t),nr.applyMatrix4(e),this.setXYZ(t,nr.x,nr.y,nr.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)nr.fromBufferAttribute(this,t),nr.applyNormalMatrix(e),this.setXYZ(t,nr.x,nr.y,nr.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)nr.fromBufferAttribute(this,t),nr.transformDirection(e),this.setXYZ(t,nr.x,nr.y,nr.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=denormalize(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=normalize(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=normalize(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=normalize(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=normalize(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=normalize(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=denormalize(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=denormalize(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=denormalize(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=denormalize(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=normalize(t,this.array),n=normalize(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=normalize(t,this.array),n=normalize(n,this.array),i=normalize(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,a){return e=e*this.data.stride+this.offset,this.normalized&&(t=normalize(t,this.array),n=normalize(n,this.array),i=normalize(i,this.array),a=normalize(a,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=a,this}clone(e){if(e===void 0){log(`InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.`);let e=[];for(let t=0;t<this.count;t++){let n=t*this.data.stride+this.offset;for(let t=0;t<this.itemSize;t++)e.push(this.data.array[n+t])}return new BufferAttribute(new this.array.constructor(e),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new InterleavedBufferAttribute(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){log(`InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.`);let e=[];for(let t=0;t<this.count;t++){let n=t*this.data.stride+this.offset;for(let t=0;t<this.itemSize;t++)e.push(this.data.array[n+t])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},ir=0,Material=class extends EventDispatcher{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,`id`,{value:ir++}),this.uuid=generateUUID(),this.name=``,this.type=`Material`,this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Color$1(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=gt,this.stencilZFail=gt,this.stencilZPass=gt,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){warn(`Material: parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){warn(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:`Material`,generator:`Material.toJSON`}};n.uuid=this.uuid,n.type=this.type,this.name!==``&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==1&&(n.blending=this.blending),this.side!==0&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==204&&(n.blendSrc=this.blendSrc),this.blendDst!==205&&(n.blendDst=this.blendDst),this.blendEquation!==100&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==3&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==519&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==7680&&(n.stencilFail=this.stencilFail),this.stencilZFail!==7680&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==7680&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==`round`&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==`round`&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function extractFromCache(e){let t=[];for(let n in e){let i=e[n];delete i.metadata,t.push(i)}return t}if(t){let t=extractFromCache(e.textures),i=extractFromCache(e.images);t.length>0&&(n.textures=t),i.length>0&&(n.images=i)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let e=t.length;n=Array(e);for(let i=0;i!==e;++i)n[i]=t[i].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:`dispose`})}set needsUpdate(e){e===!0&&this.version++}},ar=new V,or=new V,sr=new V,cr=new V,lr=new V,ur=new V,dr=new V,Ray=class{constructor(e=new V,t=new V(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ar)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=ar.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ar.copy(this.origin).addScaledVector(this.direction,t),ar.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){or.copy(e).add(t).multiplyScalar(.5),sr.copy(t).sub(e).normalize(),cr.copy(this.origin).sub(or);let a=e.distanceTo(t)*.5,o=-this.direction.dot(sr),s=cr.dot(this.direction),c=-cr.dot(sr),l=cr.lengthSq(),u=Math.abs(1-o*o),d,f,p,m;if(u>0)if(d=o*c-s,f=o*s-c,m=a*u,d>=0)if(f>=-m)if(f<=m){let e=1/u;d*=e,f*=e,p=d*(d+o*f+2*s)+f*(o*d+f+2*c)+l}else f=a,d=Math.max(0,-(o*f+s)),p=-d*d+f*(f+2*c)+l;else f=-a,d=Math.max(0,-(o*f+s)),p=-d*d+f*(f+2*c)+l;else f<=-m?(d=Math.max(0,-(-o*a+s)),f=d>0?-a:Math.min(Math.max(-a,-c),a),p=-d*d+f*(f+2*c)+l):f<=m?(d=0,f=Math.min(Math.max(-a,-c),a),p=f*(f+2*c)+l):(d=Math.max(0,-(o*a+s)),f=d>0?a:Math.min(Math.max(-a,-c),a),p=-d*d+f*(f+2*c)+l);else f=o>0?-a:a,d=Math.max(0,-(o*f+s)),p=-d*d+f*(f+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(or).addScaledVector(sr,f),p}intersectSphere(e,t){ar.subVectors(e.center,this.origin);let n=ar.dot(this.direction),i=ar.dot(ar)-n*n,a=e.radius*e.radius;if(i>a)return null;let o=Math.sqrt(a-i),s=n-o,c=n+o;return c<0?null:s<0?this.at(c,t):this.at(s,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,a,o,s,c,l=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,f=this.origin;return l>=0?(n=(e.min.x-f.x)*l,i=(e.max.x-f.x)*l):(n=(e.max.x-f.x)*l,i=(e.min.x-f.x)*l),u>=0?(a=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(a=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),n>o||a>i||((a>n||isNaN(n))&&(n=a),(o<i||isNaN(i))&&(i=o),d>=0?(s=(e.min.z-f.z)*d,c=(e.max.z-f.z)*d):(s=(e.max.z-f.z)*d,c=(e.min.z-f.z)*d),n>c||s>i)||((s>n||n!==n)&&(n=s),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,ar)!==null}intersectTriangle(e,t,n,i,a){lr.subVectors(t,e),ur.subVectors(n,e),dr.crossVectors(lr,ur);let o=this.direction.dot(dr),s;if(o>0){if(i)return null;s=1}else if(o<0)s=-1,o=-o;else return null;cr.subVectors(this.origin,e);let c=s*this.direction.dot(ur.crossVectors(cr,ur));if(c<0)return null;let l=s*this.direction.dot(lr.cross(cr));if(l<0||c+l>o)return null;let u=-s*cr.dot(dr);return u<0?null:this.at(u/o,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},MeshBasicMaterial=class extends Material{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type=`MeshBasicMaterial`,this.color=new Color$1(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Kt,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},fr=new G,pr=new Ray,mr=new Sphere,hr=new V,gr=new V,_r=new V,vr=new V,yr=new V,br=new V,xr=new V,Sr=new V,Mesh=class extends ln{constructor(e=new tr,t=new MeshBasicMaterial){super(),this.isMesh=!0,this.type=`Mesh`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}getVertexPosition(e,t){let n=this.geometry,i=n.attributes.position,a=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);let s=this.morphTargetInfluences;if(a&&s){br.set(0,0,0);for(let n=0,i=a.length;n<i;n++){let i=s[n],c=a[n];i!==0&&(yr.fromBufferAttribute(c,e),o?br.addScaledVector(yr,i):br.addScaledVector(yr.sub(t),i))}t.add(br)}return t}raycast(e,t){let n=this.geometry,i=this.material,a=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),mr.copy(n.boundingSphere),mr.applyMatrix4(a),pr.copy(e.ray).recast(e.near),!(mr.containsPoint(pr.origin)===!1&&(pr.intersectSphere(mr,hr)===null||pr.origin.distanceToSquared(hr)>(e.far-e.near)**2))&&(fr.copy(a).invert(),pr.copy(e.ray).applyMatrix4(fr),!(n.boundingBox!==null&&pr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,pr)))}_computeIntersections(e,t,n){let i,a=this.geometry,o=this.material,s=a.index,c=a.attributes.position,l=a.attributes.uv,u=a.attributes.uv1,d=a.attributes.normal,f=a.groups,p=a.drawRange;if(s!==null)if(Array.isArray(o))for(let a=0,c=f.length;a<c;a++){let c=f[a],m=o[c.materialIndex],h=Math.max(c.start,p.start),g=Math.min(s.count,Math.min(c.start+c.count,p.start+p.count));for(let a=h,o=g;a<o;a+=3){let o=s.getX(a),f=s.getX(a+1),p=s.getX(a+2);i=checkGeometryIntersection(this,m,e,n,l,u,d,o,f,p),i&&(i.faceIndex=Math.floor(a/3),i.face.materialIndex=c.materialIndex,t.push(i))}}else{let a=Math.max(0,p.start),c=Math.min(s.count,p.start+p.count);for(let f=a,p=c;f<p;f+=3){let a=s.getX(f),c=s.getX(f+1),p=s.getX(f+2);i=checkGeometryIntersection(this,o,e,n,l,u,d,a,c,p),i&&(i.faceIndex=Math.floor(f/3),t.push(i))}}else if(c!==void 0)if(Array.isArray(o))for(let a=0,s=f.length;a<s;a++){let s=f[a],m=o[s.materialIndex],h=Math.max(s.start,p.start),g=Math.min(c.count,Math.min(s.start+s.count,p.start+p.count));for(let a=h,o=g;a<o;a+=3){let o=a,c=a+1,f=a+2;i=checkGeometryIntersection(this,m,e,n,l,u,d,o,c,f),i&&(i.faceIndex=Math.floor(a/3),i.face.materialIndex=s.materialIndex,t.push(i))}}else{let a=Math.max(0,p.start),s=Math.min(c.count,p.start+p.count);for(let c=a,f=s;c<f;c+=3){let a=c,s=c+1,f=c+2;i=checkGeometryIntersection(this,o,e,n,l,u,d,a,s,f),i&&(i.faceIndex=Math.floor(c/3),t.push(i))}}}};function checkIntersection$1(e,t,n,i,a,o,s,c){let l;if(l=t.side===1?i.intersectTriangle(s,o,a,!0,c):i.intersectTriangle(a,o,s,t.side===0,c),l===null)return null;Sr.copy(c),Sr.applyMatrix4(e.matrixWorld);let u=n.ray.origin.distanceTo(Sr);return u<n.near||u>n.far?null:{distance:u,point:Sr.clone(),object:e}}function checkGeometryIntersection(e,t,n,i,a,o,s,c,l,u){e.getVertexPosition(c,gr),e.getVertexPosition(l,_r),e.getVertexPosition(u,vr);let d=checkIntersection$1(e,t,n,i,gr,_r,vr,xr);if(d){let e=new V;On.getBarycoord(xr,gr,_r,vr,e),a&&(d.uv=On.getInterpolatedAttribute(a,c,l,u,e,new B)),o&&(d.uv1=On.getInterpolatedAttribute(o,c,l,u,e,new B)),s&&(d.normal=On.getInterpolatedAttribute(s,c,l,u,e,new V),d.normal.dot(i.direction)>0&&d.normal.multiplyScalar(-1));let t={a:c,b:l,c:u,normal:new V,materialIndex:0};On.getNormal(gr,_r,vr,t.normal),d.face=t,d.barycoord=e}return d}var Cr=new V,wr=new W,Tr=new W,Er=new V,Dr=new G,Or=new V,kr=new Sphere,Ar=new G,jr=new Ray,SkinnedMesh=class extends Mesh{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type=`SkinnedMesh`,this.bindMode=O,this.bindMatrix=new G,this.bindMatrixInverse=new G,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Box3),this.boundingBox.makeEmpty();let t=e.getAttribute(`position`);for(let e=0;e<t.count;e++)this.getVertexPosition(e,Or),this.boundingBox.expandByPoint(Or)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Sphere),this.boundingSphere.makeEmpty();let t=e.getAttribute(`position`);for(let e=0;e<t.count;e++)this.getVertexPosition(e,Or),this.boundingSphere.expandByPoint(Or)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),kr.copy(this.boundingSphere),kr.applyMatrix4(i),e.ray.intersectsSphere(kr)!==!1&&(Ar.copy(i).invert(),jr.copy(e.ray).applyMatrix4(Ar),!(this.boundingBox!==null&&jr.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,jr)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new W,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);let i=1/e.manhattanLength();i===1/0?e.set(1,0,0,0):e.multiplyScalar(i),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===`attached`?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===`detached`?this.bindMatrixInverse.copy(this.bindMatrix).invert():warn(`SkinnedMesh: Unrecognized bindMode: `+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,i=this.geometry;wr.fromBufferAttribute(i.attributes.skinIndex,e),Tr.fromBufferAttribute(i.attributes.skinWeight,e),Cr.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let e=0;e<4;e++){let i=Tr.getComponent(e);if(i!==0){let a=wr.getComponent(e);Dr.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(Er.copy(Cr).applyMatrix4(Dr),i)}}return t.applyMatrix4(this.bindMatrixInverse)}},Bone=class extends ln{constructor(){super(),this.isBone=!0,this.type=`Bone`}},DataTexture=class extends It{constructor(e=null,t=1,n=1,i,a,o,s,c,l=M,u=M,d,f){super(null,o,s,c,l,u,i,a,d,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Mr=new G,Nr=new G,Pr=class Skeleton{constructor(e=[],t=[]){this.uuid=generateUUID(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.previousBoneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){warn(`Skeleton: Number of inverse bone matrices does not match amount of bones.`),this.boneInverses=[];for(let e=0,t=this.bones.length;e<t;e++)this.boneInverses.push(new G)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let t=new G;this.bones[e]&&t.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(t)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let t=this.bones[e];t&&t.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let t=this.bones[e];t&&(t.parent&&t.parent.isBone?(t.matrix.copy(t.parent.matrixWorld).invert(),t.matrix.multiply(t.matrixWorld)):t.matrix.copy(t.matrixWorld),t.matrix.decompose(t.position,t.quaternion,t.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let i=0,a=e.length;i<a;i++){let a=e[i]?e[i].matrixWorld:Nr;Mr.multiplyMatrices(a,t[i]),Mr.toArray(n,i*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new Skeleton(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new DataTexture(t,e,e,_e,ce);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let n=this.bones[t];if(n.name===e)return n}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){let i=e.bones[n],a=t[i];a===void 0&&(warn(`Skeleton: No bone found with UUID:`,i),a=new Bone),this.bones.push(a),this.boneInverses.push(new G().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.7,type:`Skeleton`,generator:`Skeleton.toJSON`},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let i=0,a=t.length;i<a;i++){let a=t[i];e.bones.push(a.uuid);let o=n[i];e.boneInverses.push(o.toArray())}return e}},InstancedBufferAttribute=class extends BufferAttribute{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Fr=new G,Ir=new G,Lr=[],Rr=new Box3,zr=new G,Br=new Mesh,Vr=new Sphere,InstancedMesh=class extends Mesh{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new InstancedBufferAttribute(new Float32Array(n*16),16),this.previousInstanceMatrix=null,this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let e=0;e<n;e++)this.setMatrixAt(e,zr)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Box3),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Fr),Rr.copy(e.boundingBox).applyMatrix4(Fr),this.boundingBox.union(Rr)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Sphere),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Fr),Vr.copy(e.boundingSphere).applyMatrix4(Fr),this.boundingSphere.union(Vr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.previousInstanceMatrix!==null&&(this.previousInstanceMatrix=e.previousInstanceMatrix.clone()),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,a=e*(n.length+1)+1;for(let e=0;e<n.length;e++)n[e]=i[a+e]}raycast(e,t){let n=this.matrixWorld,i=this.count;if(Br.geometry=this.geometry,Br.material=this.material,Br.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Vr.copy(this.boundingSphere),Vr.applyMatrix4(n),e.ray.intersectsSphere(Vr)!==!1))for(let a=0;a<i;a++){this.getMatrixAt(a,Fr),Ir.multiplyMatrices(n,Fr),Br.matrixWorld=Ir,Br.raycast(e,Lr);for(let e=0,n=Lr.length;e<n;e++){let n=Lr[e];n.instanceId=a,n.object=this,t.push(n)}Lr.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new InstancedBufferAttribute(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){let n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new DataTexture(new Float32Array(i*this.count),i,this.count,be,ce));let a=this.morphTexture.source.data.data,o=0;for(let e=0;e<n.length;e++)o+=n[e];let s=this.geometry.morphTargetsRelative?1:1-o,c=i*e;a[c]=s,a.set(n,c+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:`dispose`}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Hr=new V,Ur=new V,Wr=new H,Plane=class{constructor(e=new V(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let i=Hr.subVectors(n,t).cross(Ur.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(Hr),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/i;return a<0||a>1?null:t.copy(e.start).addScaledVector(n,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Wr.getNormalMatrix(e),i=this.coplanarPoint(Hr).applyMatrix4(e),a=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Gr=new Sphere,Kr=new B(.5,.5),qr=new V,Frustum=class{constructor(e=new Plane,t=new Plane,n=new Plane,i=new Plane,a=new Plane,o=new Plane){this.planes=[e,t,n,i,a,o]}set(e,t,n,i,a,o){let s=this.planes;return s[0].copy(e),s[1].copy(t),s[2].copy(n),s[3].copy(i),s[4].copy(a),s[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=vt,n=!1){let i=this.planes,a=e.elements,o=a[0],s=a[1],c=a[2],l=a[3],u=a[4],d=a[5],f=a[6],p=a[7],m=a[8],h=a[9],g=a[10],_=a[11],y=a[12],b=a[13],x=a[14],S=a[15];if(i[0].setComponents(l-o,p-u,_-m,S-y).normalize(),i[1].setComponents(l+o,p+u,_+m,S+y).normalize(),i[2].setComponents(l+s,p+d,_+h,S+b).normalize(),i[3].setComponents(l-s,p-d,_-h,S-b).normalize(),n)i[4].setComponents(c,f,g,x).normalize(),i[5].setComponents(l-c,p-f,_-g,S-x).normalize();else if(i[4].setComponents(l-c,p-f,_-g,S-x).normalize(),t===2e3)i[5].setComponents(l+c,p+f,_+g,S+x).normalize();else if(t===2001)i[5].setComponents(c,f,g,x).normalize();else throw Error(`THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: `+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Gr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Gr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Gr)}intersectsSprite(e){return Gr.center.set(0,0,0),Gr.radius=.7071067811865476+Kr.distanceTo(e.center),Gr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Gr)}intersectsSphere(e){let t=this.planes,n=e.center,i=-e.radius;for(let e=0;e<6;e++)if(t[e].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let i=t[n];if(qr.x=i.normal.x>0?e.max.x:e.min.x,qr.y=i.normal.y>0?e.max.y:e.min.y,qr.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(qr)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},LineBasicMaterial=class extends Material{constructor(e){super(),this.isLineBasicMaterial=!0,this.type=`LineBasicMaterial`,this.color=new Color$1(16777215),this.map=null,this.linewidth=1,this.linecap=`round`,this.linejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Jr=new V,Yr=new V,Xr=new G,Zr=new Ray,Qr=new Sphere,$r=new V,ei=new V,Line=class extends ln{constructor(e=new tr,t=new LineBasicMaterial){super(),this.isLine=!0,this.type=`Line`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let e=1,i=t.count;e<i;e++)Jr.fromBufferAttribute(t,e-1),Yr.fromBufferAttribute(t,e),n[e]=n[e-1],n[e]+=Jr.distanceTo(Yr);e.setAttribute(`lineDistance`,new Float32BufferAttribute(n,1))}else warn(`Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.`);return this}raycast(e,t){let n=this.geometry,i=this.matrixWorld,a=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Qr.copy(n.boundingSphere),Qr.applyMatrix4(i),Qr.radius+=a,e.ray.intersectsSphere(Qr)===!1)return;Xr.copy(i).invert(),Zr.copy(e.ray).applyMatrix4(Xr);let s=a/((this.scale.x+this.scale.y+this.scale.z)/3),c=s*s,l=this.isLineSegments?2:1,u=n.index,d=n.attributes.position;if(u!==null){let n=Math.max(0,o.start),i=Math.min(u.count,o.start+o.count);for(let a=n,o=i-1;a<o;a+=l){let n=u.getX(a),i=u.getX(a+1),o=checkIntersection(this,e,Zr,c,n,i,a);o&&t.push(o)}if(this.isLineLoop){let a=u.getX(i-1),o=u.getX(n),s=checkIntersection(this,e,Zr,c,a,o,i-1);s&&t.push(s)}}else{let n=Math.max(0,o.start),i=Math.min(d.count,o.start+o.count);for(let a=n,o=i-1;a<o;a+=l){let n=checkIntersection(this,e,Zr,c,a,a+1,a);n&&t.push(n)}if(this.isLineLoop){let a=checkIntersection(this,e,Zr,c,i-1,n,i-1);a&&t.push(a)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}};function checkIntersection(e,t,n,i,a,o,s){let c=e.geometry.attributes.position;if(Jr.fromBufferAttribute(c,a),Yr.fromBufferAttribute(c,o),n.distanceSqToSegment(Jr,Yr,$r,ei)>i)return;$r.applyMatrix4(e.matrixWorld);let l=t.ray.origin.distanceTo($r);if(!(l<t.near||l>t.far))return{distance:l,point:ei.clone().applyMatrix4(e.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:e}}var ti=new V,ni=new V,LineSegments=class extends Line{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type=`LineSegments`}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let e=0,i=t.count;e<i;e+=2)ti.fromBufferAttribute(t,e),ni.fromBufferAttribute(t,e+1),n[e]=e===0?0:n[e-1],n[e+1]=n[e]+ti.distanceTo(ni);e.setAttribute(`lineDistance`,new Float32BufferAttribute(n,1))}else warn(`LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.`);return this}},LineLoop=class extends Line{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type=`LineLoop`}},PointsMaterial=class extends Material{constructor(e){super(),this.isPointsMaterial=!0,this.type=`PointsMaterial`,this.color=new Color$1(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},ri=new G,ii=new Ray,ai=new Sphere,oi=new V,Points=class extends ln{constructor(e=new tr,t=new PointsMaterial){super(),this.isPoints=!0,this.type=`Points`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,i=this.matrixWorld,a=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ai.copy(n.boundingSphere),ai.applyMatrix4(i),ai.radius+=a,e.ray.intersectsSphere(ai)===!1)return;ri.copy(i).invert(),ii.copy(e.ray).applyMatrix4(ri);let s=a/((this.scale.x+this.scale.y+this.scale.z)/3),c=s*s,l=n.index,u=n.attributes.position;if(l!==null){let n=Math.max(0,o.start),a=Math.min(l.count,o.start+o.count);for(let o=n,s=a;o<s;o++){let n=l.getX(o);oi.fromBufferAttribute(u,n),testPoint(oi,n,c,i,e,t,this)}}else{let n=Math.max(0,o.start),a=Math.min(u.count,o.start+o.count);for(let o=n,s=a;o<s;o++)oi.fromBufferAttribute(u,o),testPoint(oi,o,c,i,e,t,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}};function testPoint(e,t,n,i,a,o,s){let c=ii.distanceSqToPoint(e);if(c<n){let n=new V;ii.closestPointToPoint(e,n),n.applyMatrix4(i);let l=a.ray.origin.distanceTo(n);if(l<a.near||l>a.far)return;o.push({distance:l,distanceToRay:Math.sqrt(c),point:n,index:t,face:null,faceIndex:null,barycoord:null,object:s})}}var CubeTexture=class extends It{constructor(e=[],t=301,n,i,a,o,s,c,l,u){super(e,t,n,i,a,o,s,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},DepthTexture=class extends It{constructor(e,t,n=se,i,a,o,s=M,c=M,l,u=ve,d=1){if(u!==1026&&u!==1027)throw Error(`DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat`);super({width:e,height:t,depth:d},i,a,o,s,c,u,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Source(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},CubeDepthTexture=class extends DepthTexture{constructor(e,t=se,n=301,i,a,o=M,s=M,c,l=ve){let u={width:e,height:e,depth:1},d=[u,u,u,u,u,u];super(e,e,t,n,i,a,o,s,c,l),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},ExternalTexture=class extends It{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},si=class BoxGeometry extends tr{constructor(e=1,t=1,n=1,i=1,a=1,o=1){super(),this.type=`BoxGeometry`,this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:a,depthSegments:o};let s=this;i=Math.floor(i),a=Math.floor(a),o=Math.floor(o);let c=[],l=[],u=[],d=[],f=0,p=0;buildPlane(`z`,`y`,`x`,-1,-1,n,t,e,o,a,0),buildPlane(`z`,`y`,`x`,1,-1,n,t,-e,o,a,1),buildPlane(`x`,`z`,`y`,1,1,e,n,t,i,o,2),buildPlane(`x`,`z`,`y`,1,-1,e,n,-t,i,o,3),buildPlane(`x`,`y`,`z`,1,-1,e,t,n,i,a,4),buildPlane(`x`,`y`,`z`,-1,-1,e,t,-n,i,a,5),this.setIndex(c),this.setAttribute(`position`,new Float32BufferAttribute(l,3)),this.setAttribute(`normal`,new Float32BufferAttribute(u,3)),this.setAttribute(`uv`,new Float32BufferAttribute(d,2));function buildPlane(e,t,n,i,a,o,m,h,g,_,y){let b=o/g,x=m/_,S=o/2,C=m/2,w=h/2,T=g+1,E=_+1,D=0,O=0,k=new V;for(let o=0;o<E;o++){let s=o*x-C;for(let c=0;c<T;c++)k[e]=(c*b-S)*i,k[t]=s*a,k[n]=w,l.push(k.x,k.y,k.z),k[e]=0,k[t]=0,k[n]=h>0?1:-1,u.push(k.x,k.y,k.z),d.push(c/g),d.push(1-o/_),D+=1}for(let e=0;e<_;e++)for(let t=0;t<g;t++){let n=f+t+T*e,i=f+t+T*(e+1),a=f+(t+1)+T*(e+1),o=f+(t+1)+T*e;c.push(n,i,o),c.push(i,a,o),O+=6}s.addGroup(p,O,y),p+=O,f+=D}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new BoxGeometry(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}},ci=class CylinderGeometry extends tr{constructor(e=1,t=1,n=1,i=32,a=1,o=!1,s=0,c=Math.PI*2){super(),this.type=`CylinderGeometry`,this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:a,openEnded:o,thetaStart:s,thetaLength:c};let l=this;i=Math.floor(i),a=Math.floor(a);let u=[],d=[],f=[],p=[],m=0,h=[],g=n/2,_=0;generateTorso(),o===!1&&(e>0&&generateCap(!0),t>0&&generateCap(!1)),this.setIndex(u),this.setAttribute(`position`,new Float32BufferAttribute(d,3)),this.setAttribute(`normal`,new Float32BufferAttribute(f,3)),this.setAttribute(`uv`,new Float32BufferAttribute(p,2));function generateTorso(){let o=new V,y=new V,b=0,x=(t-e)/n;for(let l=0;l<=a;l++){let u=[],_=l/a,b=_*(t-e)+e;for(let e=0;e<=i;e++){let t=e/i,a=t*c+s,l=Math.sin(a),h=Math.cos(a);y.x=b*l,y.y=-_*n+g,y.z=b*h,d.push(y.x,y.y,y.z),o.set(l,x,h).normalize(),f.push(o.x,o.y,o.z),p.push(t,1-_),u.push(m++)}h.push(u)}for(let n=0;n<i;n++)for(let i=0;i<a;i++){let o=h[i][n],s=h[i+1][n],c=h[i+1][n+1],l=h[i][n+1];(e>0||i!==0)&&(u.push(o,s,l),b+=3),(t>0||i!==a-1)&&(u.push(s,c,l),b+=3)}l.addGroup(_,b,0),_+=b}function generateCap(n){let a=m,o=new B,h=new V,y=0,b=n===!0?e:t,x=n===!0?1:-1;for(let e=1;e<=i;e++)d.push(0,g*x,0),f.push(0,x,0),p.push(.5,.5),m++;let S=m;for(let e=0;e<=i;e++){let t=e/i*c+s,n=Math.cos(t),a=Math.sin(t);h.x=b*a,h.y=g*x,h.z=b*n,d.push(h.x,h.y,h.z),f.push(0,x,0),o.x=n*.5+.5,o.y=a*.5*x+.5,p.push(o.x,o.y),m++}for(let e=0;e<i;e++){let t=a+e,i=S+e;n===!0?u.push(i,i+1,t):u.push(i+1,i,t),y+=3}l.addGroup(_,y,n===!0?1:2),_+=y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new CylinderGeometry(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},li=class ConeGeometry extends ci{constructor(e=1,t=1,n=32,i=1,a=!1,o=0,s=Math.PI*2){super(0,e,t,n,i,a,o,s),this.type=`ConeGeometry`,this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:a,thetaStart:o,thetaLength:s}}static fromJSON(e){return new ConeGeometry(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Curve=class{constructor(){this.type=`Curve`,this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){warn(`Curve: .getPoint() not implemented.`)}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,i=this.getPoint(0),a=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),a+=n.distanceTo(i),t.push(a),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),i=0,a=n.length,o;o=t||e*n[a-1];let s=0,c=a-1,l;for(;s<=c;)if(i=Math.floor(s+(c-s)/2),l=n[i]-o,l<0)s=i+1;else if(l>0)c=i-1;else{c=i;break}if(i=c,n[i]===o)return i/(a-1);let u=n[i],d=n[i+1]-u,f=(o-u)/d;return(i+f)/(a-1)}getTangent(e,t){let n=1e-4,i=e-n,a=e+n;i<0&&(i=0),a>1&&(a=1);let o=this.getPoint(i),s=this.getPoint(a),c=t||(o.isVector2?new B:new V);return c.copy(s).sub(o).normalize(),c}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new V,i=[],a=[],o=[],s=new V,c=new G;for(let t=0;t<=e;t++){let n=t/e;i[t]=this.getTangentAt(n,new V)}a[0]=new V,o[0]=new V;let l=Number.MAX_VALUE,u=Math.abs(i[0].x),d=Math.abs(i[0].y),f=Math.abs(i[0].z);u<=l&&(l=u,n.set(1,0,0)),d<=l&&(l=d,n.set(0,1,0)),f<=l&&n.set(0,0,1),s.crossVectors(i[0],n).normalize(),a[0].crossVectors(i[0],s),o[0].crossVectors(i[0],a[0]);for(let t=1;t<=e;t++){if(a[t]=a[t-1].clone(),o[t]=o[t-1].clone(),s.crossVectors(i[t-1],i[t]),s.length()>2**-52){s.normalize();let e=Math.acos(clamp(i[t-1].dot(i[t]),-1,1));a[t].applyMatrix4(c.makeRotationAxis(s,e))}o[t].crossVectors(i[t],a[t])}if(t===!0){let t=Math.acos(clamp(a[0].dot(a[e]),-1,1));t/=e,i[0].dot(s.crossVectors(a[0],a[e]))>0&&(t=-t);for(let n=1;n<=e;n++)a[n].applyMatrix4(c.makeRotationAxis(i[n],t*n)),o[n].crossVectors(i[n],a[n])}return{tangents:i,normals:a,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:`Curve`,generator:`Curve.toJSON`}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},EllipseCurve=class extends Curve{constructor(e=0,t=0,n=1,i=1,a=0,o=Math.PI*2,s=!1,c=0){super(),this.isEllipseCurve=!0,this.type=`EllipseCurve`,this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=a,this.aEndAngle=o,this.aClockwise=s,this.aRotation=c}getPoint(e,t=new B){let n=t,i=Math.PI*2,a=this.aEndAngle-this.aStartAngle,o=Math.abs(a)<2**-52;for(;a<0;)a+=i;for(;a>i;)a-=i;a<2**-52&&(a=o?0:i),this.aClockwise===!0&&!o&&(a===i?a=-i:a-=i);let s=this.aStartAngle+e*a,c=this.aX+this.xRadius*Math.cos(s),l=this.aY+this.yRadius*Math.sin(s);if(this.aRotation!==0){let e=Math.cos(this.aRotation),t=Math.sin(this.aRotation),n=c-this.aX,i=l-this.aY;c=n*e-i*t+this.aX,l=n*t+i*e+this.aY}return n.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},ArcCurve=class extends EllipseCurve{constructor(e,t,n,i,a,o){super(e,t,n,n,i,a,o),this.isArcCurve=!0,this.type=`ArcCurve`}};function CubicPoly(){let e=0,t=0,n=0,i=0;function init(a,o,s,c){e=a,t=s,n=-3*a+3*o-2*s-c,i=2*a-2*o+s+c}return{initCatmullRom:function(e,t,n,i,a){init(t,n,a*(n-e),a*(i-t))},initNonuniformCatmullRom:function(e,t,n,i,a,o,s){let c=(t-e)/a-(n-e)/(a+o)+(n-t)/o,l=(n-t)/o-(i-t)/(o+s)+(i-n)/s;c*=o,l*=o,init(t,n,c,l)},calc:function(a){let o=a*a,s=o*a;return e+t*a+n*o+i*s}}}var ui=new V,di=new CubicPoly,fi=new CubicPoly,pi=new CubicPoly,CatmullRomCurve3=class extends Curve{constructor(e=[],t=!1,n=`centripetal`,i=.5){super(),this.isCatmullRomCurve3=!0,this.type=`CatmullRomCurve3`,this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new V){let n=t,i=this.points,a=i.length,o=(a-(this.closed?0:1))*e,s=Math.floor(o),c=o-s;this.closed?s+=s>0?0:(Math.floor(Math.abs(s)/a)+1)*a:c===0&&s===a-1&&(s=a-2,c=1);let l,u;this.closed||s>0?l=i[(s-1)%a]:(ui.subVectors(i[0],i[1]).add(i[0]),l=ui);let d=i[s%a],f=i[(s+1)%a];if(this.closed||s+2<a?u=i[(s+2)%a]:(ui.subVectors(i[a-1],i[a-2]).add(i[a-1]),u=ui),this.curveType===`centripetal`||this.curveType===`chordal`){let e=this.curveType===`chordal`?.5:.25,t=l.distanceToSquared(d)**+e,n=d.distanceToSquared(f)**+e,i=f.distanceToSquared(u)**+e;n<1e-4&&(n=1),t<1e-4&&(t=n),i<1e-4&&(i=n),di.initNonuniformCatmullRom(l.x,d.x,f.x,u.x,t,n,i),fi.initNonuniformCatmullRom(l.y,d.y,f.y,u.y,t,n,i),pi.initNonuniformCatmullRom(l.z,d.z,f.z,u.z,t,n,i)}else this.curveType===`catmullrom`&&(di.initCatmullRom(l.x,d.x,f.x,u.x,this.tension),fi.initCatmullRom(l.y,d.y,f.y,u.y,this.tension),pi.initCatmullRom(l.z,d.z,f.z,u.z,this.tension));return n.set(di.calc(c),fi.calc(c),pi.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(n.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let n=this.points[t];e.points.push(n.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(new V().fromArray(n))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function CatmullRom(e,t,n,i,a){let o=(i-t)*.5,s=(a-n)*.5,c=e*e,l=e*c;return(2*n-2*i+o+s)*l+(-3*n+3*i-2*o-s)*c+o*e+n}function QuadraticBezierP0(e,t){let n=1-e;return n*n*t}function QuadraticBezierP1(e,t){return 2*(1-e)*e*t}function QuadraticBezierP2(e,t){return e*e*t}function QuadraticBezier(e,t,n,i){return QuadraticBezierP0(e,t)+QuadraticBezierP1(e,n)+QuadraticBezierP2(e,i)}function CubicBezierP0(e,t){let n=1-e;return n*n*n*t}function CubicBezierP1(e,t){let n=1-e;return 3*n*n*e*t}function CubicBezierP2(e,t){return 3*(1-e)*e*e*t}function CubicBezierP3(e,t){return e*e*e*t}function CubicBezier(e,t,n,i,a){return CubicBezierP0(e,t)+CubicBezierP1(e,n)+CubicBezierP2(e,i)+CubicBezierP3(e,a)}var CubicBezierCurve=class extends Curve{constructor(e=new B,t=new B,n=new B,i=new B){super(),this.isCubicBezierCurve=!0,this.type=`CubicBezierCurve`,this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new B){let n=t,i=this.v0,a=this.v1,o=this.v2,s=this.v3;return n.set(CubicBezier(e,i.x,a.x,o.x,s.x),CubicBezier(e,i.y,a.y,o.y,s.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},CubicBezierCurve3=class extends Curve{constructor(e=new V,t=new V,n=new V,i=new V){super(),this.isCubicBezierCurve3=!0,this.type=`CubicBezierCurve3`,this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new V){let n=t,i=this.v0,a=this.v1,o=this.v2,s=this.v3;return n.set(CubicBezier(e,i.x,a.x,o.x,s.x),CubicBezier(e,i.y,a.y,o.y,s.y),CubicBezier(e,i.z,a.z,o.z,s.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},LineCurve=class extends Curve{constructor(e=new B,t=new B){super(),this.isLineCurve=!0,this.type=`LineCurve`,this.v1=e,this.v2=t}getPoint(e,t=new B){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new B){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},LineCurve3=class extends Curve{constructor(e=new V,t=new V){super(),this.isLineCurve3=!0,this.type=`LineCurve3`,this.v1=e,this.v2=t}getPoint(e,t=new V){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new V){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},QuadraticBezierCurve=class extends Curve{constructor(e=new B,t=new B,n=new B){super(),this.isQuadraticBezierCurve=!0,this.type=`QuadraticBezierCurve`,this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new B){let n=t,i=this.v0,a=this.v1,o=this.v2;return n.set(QuadraticBezier(e,i.x,a.x,o.x),QuadraticBezier(e,i.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},QuadraticBezierCurve3=class extends Curve{constructor(e=new V,t=new V,n=new V){super(),this.isQuadraticBezierCurve3=!0,this.type=`QuadraticBezierCurve3`,this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new V){let n=t,i=this.v0,a=this.v1,o=this.v2;return n.set(QuadraticBezier(e,i.x,a.x,o.x),QuadraticBezier(e,i.y,a.y,o.y),QuadraticBezier(e,i.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},SplineCurve=class extends Curve{constructor(e=[]){super(),this.isSplineCurve=!0,this.type=`SplineCurve`,this.points=e}getPoint(e,t=new B){let n=t,i=this.points,a=(i.length-1)*e,o=Math.floor(a),s=a-o,c=i[o===0?o:o-1],l=i[o],u=i[o>i.length-2?i.length-1:o+1],d=i[o>i.length-3?i.length-1:o+2];return n.set(CatmullRom(s,c.x,l.x,u.x,d.x),CatmullRom(s,c.y,l.y,u.y,d.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(n.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let n=this.points[t];e.points.push(n.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(new B().fromArray(n))}return this}},mi=Object.freeze({__proto__:null,ArcCurve,CatmullRomCurve3,CubicBezierCurve,CubicBezierCurve3,EllipseCurve,LineCurve,LineCurve3,QuadraticBezierCurve,QuadraticBezierCurve3,SplineCurve}),CurvePath=class extends Curve{constructor(){super(),this.type=`CurvePath`,this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?`LineCurve`:`LineCurve3`;this.curves.push(new mi[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),i=this.getCurveLengths(),a=0;for(;a<i.length;){if(i[a]>=n){let e=i[a]-n,o=this.curves[a],s=o.getLength(),c=s===0?0:1-e/s;return o.getPointAt(c,t)}a++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let i=0,a=this.curves;i<a.length;i++){let o=a[i],s=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,c=o.getPoints(s);for(let e=0;e<c.length;e++){let i=c[e];n&&n.equals(i)||(t.push(i),n=i)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let n=e.curves[t];this.curves.push(n.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let n=this.curves[t];e.curves.push(n.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let n=e.curves[t];this.curves.push(new mi[n.type]().fromJSON(n))}return this}},Path=class extends CurvePath{constructor(e){super(),this.type=`Path`,this.currentPoint=new B,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new LineCurve(this.currentPoint.clone(),new B(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){let a=new QuadraticBezierCurve(this.currentPoint.clone(),new B(e,t),new B(n,i));return this.curves.push(a),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,a,o){let s=new CubicBezierCurve(this.currentPoint.clone(),new B(e,t),new B(n,i),new B(a,o));return this.curves.push(s),this.currentPoint.set(a,o),this}splineThru(e){let t=new SplineCurve([this.currentPoint.clone()].concat(e));return this.curves.push(t),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,a,o){let s=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+s,t+c,n,i,a,o),this}absarc(e,t,n,i,a,o){return this.absellipse(e,t,n,n,i,a,o),this}ellipse(e,t,n,i,a,o,s,c){let l=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+l,t+u,n,i,a,o,s,c),this}absellipse(e,t,n,i,a,o,s,c){let l=new EllipseCurve(e,t,n,i,a,o,s,c);if(this.curves.length>0){let e=l.getPoint(0);e.equals(this.currentPoint)||this.lineTo(e.x,e.y)}this.curves.push(l);let u=l.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Shape=class extends Path{constructor(e){super(e),this.uuid=generateUUID(),this.type=`Shape`,this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,i=this.holes.length;n<i;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let n=e.holes[t];this.holes.push(n.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let n=this.holes[t];e.holes.push(n.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let n=e.holes[t];this.holes.push(new Path().fromJSON(n))}return this}};function earcut(e,t,n=2){let i=t&&t.length,a=i?t[0]*n:e.length,o=linkedList(e,0,a,n,!0),s=[];if(!o||o.next===o.prev)return s;let c,l,u;if(i&&(o=eliminateHoles(e,t,o,n)),e.length>80*n){c=e[0],l=e[1];let t=c,i=l;for(let o=n;o<a;o+=n){let n=e[o],a=e[o+1];n<c&&(c=n),a<l&&(l=a),n>t&&(t=n),a>i&&(i=a)}u=Math.max(t-c,i-l),u=u===0?0:32767/u}return earcutLinked(o,s,n,c,l,u,0),s}function linkedList(e,t,n,i,a){let o;if(a===signedArea(e,t,n,i)>0)for(let a=t;a<n;a+=i)o=insertNode(a/i|0,e[a],e[a+1],o);else for(let a=n-i;a>=t;a-=i)o=insertNode(a/i|0,e[a],e[a+1],o);return o&&equals(o,o.next)&&(removeNode(o),o=o.next),o}function filterPoints(e,t){if(!e)return e;t||=e;let n=e,i;do if(i=!1,!n.steiner&&(equals(n,n.next)||area(n.prev,n,n.next)===0)){if(removeNode(n),n=t=n.prev,n===n.next)break;i=!0}else n=n.next;while(i||n!==t);return t}function earcutLinked(e,t,n,i,a,o,s){if(!e)return;!s&&o&&indexCurve(e,i,a,o);let c=e;for(;e.prev!==e.next;){let l=e.prev,u=e.next;if(o?isEarHashed(e,i,a,o):isEar(e)){t.push(l.i,e.i,u.i),removeNode(e),e=u.next,c=u.next;continue}if(e=u,e===c){s?s===1?(e=cureLocalIntersections(filterPoints(e),t),earcutLinked(e,t,n,i,a,o,2)):s===2&&splitEarcut(e,t,n,i,a,o):earcutLinked(filterPoints(e),t,n,i,a,o,1);break}}}function isEar(e){let t=e.prev,n=e,i=e.next;if(area(t,n,i)>=0)return!1;let a=t.x,o=n.x,s=i.x,c=t.y,l=n.y,u=i.y,d=Math.min(a,o,s),f=Math.min(c,l,u),p=Math.max(a,o,s),m=Math.max(c,l,u),h=i.next;for(;h!==t;){if(h.x>=d&&h.x<=p&&h.y>=f&&h.y<=m&&pointInTriangleExceptFirst(a,c,o,l,s,u,h.x,h.y)&&area(h.prev,h,h.next)>=0)return!1;h=h.next}return!0}function isEarHashed(e,t,n,i){let a=e.prev,o=e,s=e.next;if(area(a,o,s)>=0)return!1;let c=a.x,l=o.x,u=s.x,d=a.y,f=o.y,p=s.y,m=Math.min(c,l,u),h=Math.min(d,f,p),g=Math.max(c,l,u),_=Math.max(d,f,p),y=zOrder(m,h,t,n,i),b=zOrder(g,_,t,n,i),x=e.prevZ,S=e.nextZ;for(;x&&x.z>=y&&S&&S.z<=b;){if(x.x>=m&&x.x<=g&&x.y>=h&&x.y<=_&&x!==a&&x!==s&&pointInTriangleExceptFirst(c,d,l,f,u,p,x.x,x.y)&&area(x.prev,x,x.next)>=0||(x=x.prevZ,S.x>=m&&S.x<=g&&S.y>=h&&S.y<=_&&S!==a&&S!==s&&pointInTriangleExceptFirst(c,d,l,f,u,p,S.x,S.y)&&area(S.prev,S,S.next)>=0))return!1;S=S.nextZ}for(;x&&x.z>=y;){if(x.x>=m&&x.x<=g&&x.y>=h&&x.y<=_&&x!==a&&x!==s&&pointInTriangleExceptFirst(c,d,l,f,u,p,x.x,x.y)&&area(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;S&&S.z<=b;){if(S.x>=m&&S.x<=g&&S.y>=h&&S.y<=_&&S!==a&&S!==s&&pointInTriangleExceptFirst(c,d,l,f,u,p,S.x,S.y)&&area(S.prev,S,S.next)>=0)return!1;S=S.nextZ}return!0}function cureLocalIntersections(e,t){let n=e;do{let i=n.prev,a=n.next.next;!equals(i,a)&&intersects(i,n,n.next,a)&&locallyInside(i,a)&&locallyInside(a,i)&&(t.push(i.i,n.i,a.i),removeNode(n),removeNode(n.next),n=e=a),n=n.next}while(n!==e);return filterPoints(n)}function splitEarcut(e,t,n,i,a,o){let s=e;do{let e=s.next.next;for(;e!==s.prev;){if(s.i!==e.i&&isValidDiagonal(s,e)){let c=splitPolygon(s,e);s=filterPoints(s,s.next),c=filterPoints(c,c.next),earcutLinked(s,t,n,i,a,o,0),earcutLinked(c,t,n,i,a,o,0);return}e=e.next}s=s.next}while(s!==e)}function eliminateHoles(e,t,n,i){let a=[];for(let n=0,o=t.length;n<o;n++){let s=linkedList(e,t[n]*i,n<o-1?t[n+1]*i:e.length,i,!1);s===s.next&&(s.steiner=!0),a.push(getLeftmost(s))}a.sort(compareXYSlope);for(let e=0;e<a.length;e++)n=eliminateHole(a[e],n);return n}function compareXYSlope(e,t){let n=e.x-t.x;return n===0&&(n=e.y-t.y,n===0&&(n=(e.next.y-e.y)/(e.next.x-e.x)-(t.next.y-t.y)/(t.next.x-t.x))),n}function eliminateHole(e,t){let n=findHoleBridge(e,t);if(!n)return t;let i=splitPolygon(n,e);return filterPoints(i,i.next),filterPoints(n,n.next)}function findHoleBridge(e,t){let n=t,i=e.x,a=e.y,o=-1/0,s;if(equals(e,n))return n;do{if(equals(e,n.next))return n.next;if(a<=n.y&&a>=n.next.y&&n.next.y!==n.y){let e=n.x+(a-n.y)*(n.next.x-n.x)/(n.next.y-n.y);if(e<=i&&e>o&&(o=e,s=n.x<n.next.x?n:n.next,e===i))return s}n=n.next}while(n!==t);if(!s)return null;let c=s,l=s.x,u=s.y,d=1/0;n=s;do{if(i>=n.x&&n.x>=l&&i!==n.x&&pointInTriangle(a<u?i:o,a,l,u,a<u?o:i,a,n.x,n.y)){let t=Math.abs(a-n.y)/(i-n.x);locallyInside(n,e)&&(t<d||t===d&&(n.x>s.x||n.x===s.x&&sectorContainsSector(s,n)))&&(s=n,d=t)}n=n.next}while(n!==c);return s}function sectorContainsSector(e,t){return area(e.prev,e,t.prev)<0&&area(t.next,e,e.next)<0}function indexCurve(e,t,n,i){let a=e;do a.z===0&&(a.z=zOrder(a.x,a.y,t,n,i)),a.prevZ=a.prev,a.nextZ=a.next,a=a.next;while(a!==e);a.prevZ.nextZ=null,a.prevZ=null,sortLinked(a)}function sortLinked(e){let t,n=1;do{let i=e,a;e=null;let o=null;for(t=0;i;){t++;let s=i,c=0;for(let e=0;e<n&&(c++,s=s.nextZ,s);e++);let l=n;for(;c>0||l>0&&s;)c!==0&&(l===0||!s||i.z<=s.z)?(a=i,i=i.nextZ,c--):(a=s,s=s.nextZ,l--),o?o.nextZ=a:e=a,a.prevZ=o,o=a;i=s}o.nextZ=null,n*=2}while(t>1);return e}function zOrder(e,t,n,i,a){return e=(e-n)*a|0,t=(t-i)*a|0,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,e|t<<1}function getLeftmost(e){let t=e,n=e;do(t.x<n.x||t.x===n.x&&t.y<n.y)&&(n=t),t=t.next;while(t!==e);return n}function pointInTriangle(e,t,n,i,a,o,s,c){return(a-s)*(t-c)>=(e-s)*(o-c)&&(e-s)*(i-c)>=(n-s)*(t-c)&&(n-s)*(o-c)>=(a-s)*(i-c)}function pointInTriangleExceptFirst(e,t,n,i,a,o,s,c){return!(e===s&&t===c)&&pointInTriangle(e,t,n,i,a,o,s,c)}function isValidDiagonal(e,t){return e.next.i!==t.i&&e.prev.i!==t.i&&!intersectsPolygon(e,t)&&(locallyInside(e,t)&&locallyInside(t,e)&&middleInside(e,t)&&(area(e.prev,e,t.prev)||area(e,t.prev,t))||equals(e,t)&&area(e.prev,e,e.next)>0&&area(t.prev,t,t.next)>0)}function area(e,t,n){return(t.y-e.y)*(n.x-t.x)-(t.x-e.x)*(n.y-t.y)}function equals(e,t){return e.x===t.x&&e.y===t.y}function intersects(e,t,n,i){let a=sign(area(e,t,n)),o=sign(area(e,t,i)),s=sign(area(n,i,e)),c=sign(area(n,i,t));return!!(a!==o&&s!==c||a===0&&onSegment(e,n,t)||o===0&&onSegment(e,i,t)||s===0&&onSegment(n,e,i)||c===0&&onSegment(n,t,i))}function onSegment(e,t,n){return t.x<=Math.max(e.x,n.x)&&t.x>=Math.min(e.x,n.x)&&t.y<=Math.max(e.y,n.y)&&t.y>=Math.min(e.y,n.y)}function sign(e){return e>0?1:e<0?-1:0}function intersectsPolygon(e,t){let n=e;do{if(n.i!==e.i&&n.next.i!==e.i&&n.i!==t.i&&n.next.i!==t.i&&intersects(n,n.next,e,t))return!0;n=n.next}while(n!==e);return!1}function locallyInside(e,t){return area(e.prev,e,e.next)<0?area(e,t,e.next)>=0&&area(e,e.prev,t)>=0:area(e,t,e.prev)<0||area(e,e.next,t)<0}function middleInside(e,t){let n=e,i=!1,a=(e.x+t.x)/2,o=(e.y+t.y)/2;do n.y>o!=n.next.y>o&&n.next.y!==n.y&&a<(n.next.x-n.x)*(o-n.y)/(n.next.y-n.y)+n.x&&(i=!i),n=n.next;while(n!==e);return i}function splitPolygon(e,t){let n=createNode(e.i,e.x,e.y),i=createNode(t.i,t.x,t.y),a=e.next,o=t.prev;return e.next=t,t.prev=e,n.next=a,a.prev=n,i.next=n,n.prev=i,o.next=i,i.prev=o,i}function insertNode(e,t,n,i){let a=createNode(e,t,n);return i?(a.next=i.next,a.prev=i,i.next.prev=a,i.next=a):(a.prev=a,a.next=a),a}function removeNode(e){e.next.prev=e.prev,e.prev.next=e.next,e.prevZ&&(e.prevZ.nextZ=e.nextZ),e.nextZ&&(e.nextZ.prevZ=e.prevZ)}function createNode(e,t,n){return{i:e,x:t,y:n,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function signedArea(e,t,n,i){let a=0;for(let o=t,s=n-i;o<n;o+=i)a+=(e[s]-e[o])*(e[o+1]+e[s+1]),s=o;return a}var Earcut=class{static triangulate(e,t,n=2){return earcut(e,t,n)}},hi=class ShapeUtils{static area(e){let t=e.length,n=0;for(let i=t-1,a=0;a<t;i=a++)n+=e[i].x*e[a].y-e[a].x*e[i].y;return n*.5}static isClockWise(e){return ShapeUtils.area(e)<0}static triangulateShape(e,t){let n=[],i=[],a=[];removeDupEndPts(e),addContour(n,e);let o=e.length;t.forEach(removeDupEndPts);for(let e=0;e<t.length;e++)i.push(o),o+=t[e].length,addContour(n,t[e]);let s=Earcut.triangulate(n,i);for(let e=0;e<s.length;e+=3)a.push(s.slice(e,e+3));return a}};function removeDupEndPts(e){let t=e.length;t>2&&e[t-1].equals(e[0])&&e.pop()}function addContour(e,t){for(let n=0;n<t.length;n++)e.push(t[n].x),e.push(t[n].y)}var gi=class ExtrudeGeometry extends tr{constructor(e=new Shape([new B(.5,.5),new B(-.5,.5),new B(-.5,-.5),new B(.5,-.5)]),t={}){super(),this.type=`ExtrudeGeometry`,this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,i=[],a=[];for(let t=0,n=e.length;t<n;t++){let n=e[t];addShape(n)}this.setAttribute(`position`,new Float32BufferAttribute(i,3)),this.setAttribute(`uv`,new Float32BufferAttribute(a,2)),this.computeVertexNormals();function addShape(e){let o=[],s=t.curveSegments===void 0?12:t.curveSegments,c=t.steps===void 0?1:t.steps,l=t.depth===void 0?1:t.depth,u=t.bevelEnabled===void 0?!0:t.bevelEnabled,d=t.bevelThickness===void 0?.2:t.bevelThickness,f=t.bevelSize===void 0?d-.1:t.bevelSize,p=t.bevelOffset===void 0?0:t.bevelOffset,m=t.bevelSegments===void 0?3:t.bevelSegments,h=t.extrudePath,g=t.UVGenerator===void 0?_i:t.UVGenerator,_,y=!1,b,x,S,C;if(h){_=h.getSpacedPoints(c),y=!0,u=!1;let e=h.isCatmullRomCurve3?h.closed:!1;b=h.computeFrenetFrames(c,e),x=new V,S=new V,C=new V}u||(m=0,d=0,f=0,p=0);let w=e.extractPoints(s),T=w.shape,E=w.holes;if(!hi.isClockWise(T)){T=T.reverse();for(let e=0,t=E.length;e<t;e++){let t=E[e];hi.isClockWise(t)&&(E[e]=t.reverse())}}function mergeOverlappingPoints(e){let t=1e-10;t*t;let n=e[0];for(let t=1;t<=e.length;t++){let i=t%e.length,a=e[i],o=a.x-n.x,s=a.y-n.y,c=o*o+s*s,l=Math.max(Math.abs(a.x),Math.abs(a.y),Math.abs(n.x),Math.abs(n.y));if(c<=10000000000000001e-36*l*l){e.splice(i,1),t--;continue}n=a}}mergeOverlappingPoints(T),E.forEach(mergeOverlappingPoints);let D=E.length,O=T;for(let e=0;e<D;e++){let t=E[e];T=T.concat(t)}function scalePt2(e,t,n){return t||error(`ExtrudeGeometry: vec does not exist`),e.clone().addScaledVector(t,n)}let k=T.length;function getBevelVec(e,t,n){let i,a,o,s=e.x-t.x,c=e.y-t.y,l=n.x-e.x,u=n.y-e.y,d=s*s+c*c,f=s*u-c*l;if(Math.abs(f)>2**-52){let f=Math.sqrt(d),p=Math.sqrt(l*l+u*u),m=t.x-c/f,h=t.y+s/f,g=n.x-u/p,_=n.y+l/p,y=((g-m)*u-(_-h)*l)/(s*u-c*l);i=m+s*y-e.x,a=h+c*y-e.y;let b=i*i+a*a;if(b<=2)return new B(i,a);o=Math.sqrt(b/2)}else{let e=!1;s>2**-52?l>2**-52&&(e=!0):s<-(2**-52)?l<-(2**-52)&&(e=!0):Math.sign(c)===Math.sign(u)&&(e=!0),e?(i=-c,a=s,o=Math.sqrt(d)):(i=s,a=c,o=Math.sqrt(d/2))}return new B(i/o,a/o)}let A=[];for(let e=0,t=O.length,n=t-1,i=e+1;e<t;e++,n++,i++)n===t&&(n=0),i===t&&(i=0),A[e]=getBevelVec(O[e],O[n],O[i]);let j=[],M,N=A.concat();for(let e=0,t=D;e<t;e++){let t=E[e];M=[];for(let e=0,n=t.length,i=n-1,a=e+1;e<n;e++,i++,a++)i===n&&(i=0),a===n&&(a=0),M[e]=getBevelVec(t[e],t[i],t[a]);j.push(M),N=N.concat(M)}let P;if(m===0)P=hi.triangulateShape(O,E);else{let e=[],t=[];for(let n=0;n<m;n++){let i=n/m,a=d*Math.cos(i*Math.PI/2),o=f*Math.sin(i*Math.PI/2)+p;for(let t=0,n=O.length;t<n;t++){let n=scalePt2(O[t],A[t],o);v(n.x,n.y,-a),i===0&&e.push(n)}for(let e=0,n=D;e<n;e++){let n=E[e];M=j[e];let s=[];for(let e=0,t=n.length;e<t;e++){let t=scalePt2(n[e],M[e],o);v(t.x,t.y,-a),i===0&&s.push(t)}i===0&&t.push(s)}}P=hi.triangulateShape(e,t)}let F=P.length,ee=f+p;for(let e=0;e<k;e++){let t=u?scalePt2(T[e],N[e],ee):T[e];y?(S.copy(b.normals[0]).multiplyScalar(t.x),x.copy(b.binormals[0]).multiplyScalar(t.y),C.copy(_[0]).add(S).add(x),v(C.x,C.y,C.z)):v(t.x,t.y,0)}for(let e=1;e<=c;e++)for(let t=0;t<k;t++){let n=u?scalePt2(T[t],N[t],ee):T[t];y?(S.copy(b.normals[e]).multiplyScalar(n.x),x.copy(b.binormals[e]).multiplyScalar(n.y),C.copy(_[e]).add(S).add(x),v(C.x,C.y,C.z)):v(n.x,n.y,l/c*e)}for(let e=m-1;e>=0;e--){let t=e/m,n=d*Math.cos(t*Math.PI/2),i=f*Math.sin(t*Math.PI/2)+p;for(let e=0,t=O.length;e<t;e++){let t=scalePt2(O[e],A[e],i);v(t.x,t.y,l+n)}for(let e=0,t=E.length;e<t;e++){let t=E[e];M=j[e];for(let e=0,a=t.length;e<a;e++){let a=scalePt2(t[e],M[e],i);y?v(a.x,a.y+_[c-1].y,_[c-1].x+n):v(a.x,a.y,l+n)}}}buildLidFaces(),buildSideFaces();function buildLidFaces(){let e=i.length/3;if(u){let e=0,t=k*e;for(let e=0;e<F;e++){let n=P[e];f3(n[2]+t,n[1]+t,n[0]+t)}e=c+m*2,t=k*e;for(let e=0;e<F;e++){let n=P[e];f3(n[0]+t,n[1]+t,n[2]+t)}}else{for(let e=0;e<F;e++){let t=P[e];f3(t[2],t[1],t[0])}for(let e=0;e<F;e++){let t=P[e];f3(t[0]+k*c,t[1]+k*c,t[2]+k*c)}}n.addGroup(e,i.length/3-e,0)}function buildSideFaces(){let e=i.length/3,t=0;sidewalls(O,t),t+=O.length;for(let e=0,n=E.length;e<n;e++){let n=E[e];sidewalls(n,t),t+=n.length}n.addGroup(e,i.length/3-e,1)}function sidewalls(e,t){let n=e.length;for(;--n>=0;){let i=n,a=n-1;a<0&&(a=e.length-1);for(let e=0,n=c+m*2;e<n;e++){let n=k*e,o=k*(e+1);f4(t+i+n,t+a+n,t+a+o,t+i+o)}}}function v(e,t,n){o.push(e),o.push(t),o.push(n)}function f3(e,t,a){addVertex(e),addVertex(t),addVertex(a);let o=i.length/3,s=g.generateTopUV(n,i,o-3,o-2,o-1);addUV(s[0]),addUV(s[1]),addUV(s[2])}function f4(e,t,a,o){addVertex(e),addVertex(t),addVertex(o),addVertex(t),addVertex(a),addVertex(o);let s=i.length/3,c=g.generateSideWallUV(n,i,s-6,s-3,s-2,s-1);addUV(c[0]),addUV(c[1]),addUV(c[3]),addUV(c[1]),addUV(c[2]),addUV(c[3])}function addVertex(e){i.push(o[e*3+0]),i.push(o[e*3+1]),i.push(o[e*3+2])}function addUV(e){a.push(e.x),a.push(e.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return toJSON$1(t,n,e)}static fromJSON(e,t){let n=[];for(let i=0,a=e.shapes.length;i<a;i++){let a=t[e.shapes[i]];n.push(a)}let i=e.options.extrudePath;return i!==void 0&&(e.options.extrudePath=new mi[i.type]().fromJSON(i)),new ExtrudeGeometry(n,e.options)}},_i={generateTopUV:function(e,t,n,i,a){let o=t[n*3],s=t[n*3+1],c=t[i*3],l=t[i*3+1],u=t[a*3],d=t[a*3+1];return[new B(o,s),new B(c,l),new B(u,d)]},generateSideWallUV:function(e,t,n,i,a,o){let s=t[n*3],c=t[n*3+1],l=t[n*3+2],u=t[i*3],d=t[i*3+1],f=t[i*3+2],p=t[a*3],m=t[a*3+1],h=t[a*3+2],g=t[o*3],_=t[o*3+1],y=t[o*3+2];return Math.abs(c-d)<Math.abs(s-u)?[new B(s,1-l),new B(u,1-f),new B(p,1-h),new B(g,1-y)]:[new B(c,1-l),new B(d,1-f),new B(m,1-h),new B(_,1-y)]}};function toJSON$1(e,t,n){if(n.shapes=[],Array.isArray(e))for(let t=0,i=e.length;t<i;t++){let i=e[t];n.shapes.push(i.uuid)}else n.shapes.push(e.uuid);return n.options=Object.assign({},t),t.extrudePath!==void 0&&(n.options.extrudePath=t.extrudePath.toJSON()),n}var vi=class PlaneGeometry extends tr{constructor(e=1,t=1,n=1,i=1){super(),this.type=`PlaneGeometry`,this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};let a=e/2,o=t/2,s=Math.floor(n),c=Math.floor(i),l=s+1,u=c+1,d=e/s,f=t/c,p=[],m=[],h=[],g=[];for(let e=0;e<u;e++){let t=e*f-o;for(let n=0;n<l;n++){let i=n*d-a;m.push(i,-t,0),h.push(0,0,1),g.push(n/s),g.push(1-e/c)}}for(let e=0;e<c;e++)for(let t=0;t<s;t++){let n=t+l*e,i=t+l*(e+1),a=t+1+l*(e+1),o=t+1+l*e;p.push(n,i,o),p.push(i,a,o)}this.setIndex(p),this.setAttribute(`position`,new Float32BufferAttribute(m,3)),this.setAttribute(`normal`,new Float32BufferAttribute(h,3)),this.setAttribute(`uv`,new Float32BufferAttribute(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new PlaneGeometry(e.width,e.height,e.widthSegments,e.heightSegments)}},yi=class SphereGeometry extends tr{constructor(e=1,t=32,n=16,i=0,a=Math.PI*2,o=0,s=Math.PI){super(),this.type=`SphereGeometry`,this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:a,thetaStart:o,thetaLength:s},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let c=Math.min(o+s,Math.PI),l=0,u=[],d=new V,f=new V,p=[],m=[],h=[],g=[];for(let p=0;p<=n;p++){let _=[],y=p/n,b=0;p===0&&o===0?b=.5/t:p===n&&c===Math.PI&&(b=-.5/t);for(let n=0;n<=t;n++){let c=n/t;d.x=-e*Math.cos(i+c*a)*Math.sin(o+y*s),d.y=e*Math.cos(o+y*s),d.z=e*Math.sin(i+c*a)*Math.sin(o+y*s),m.push(d.x,d.y,d.z),f.copy(d).normalize(),h.push(f.x,f.y,f.z),g.push(c+b,1-y),_.push(l++)}u.push(_)}for(let e=0;e<n;e++)for(let i=0;i<t;i++){let t=u[e][i+1],a=u[e][i],s=u[e+1][i],l=u[e+1][i+1];(e!==0||o>0)&&p.push(t,a,l),(e!==n-1||c<Math.PI)&&p.push(a,s,l)}this.setIndex(p),this.setAttribute(`position`,new Float32BufferAttribute(m,3)),this.setAttribute(`normal`,new Float32BufferAttribute(h,3)),this.setAttribute(`uv`,new Float32BufferAttribute(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new SphereGeometry(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};function cloneUniforms(e){let t={};for(let n in e){t[n]={};for(let i in e[n]){let a=e[n][i];a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)?a.isRenderTargetTexture?(warn(`UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms().`),t[n][i]=null):t[n][i]=a.clone():Array.isArray(a)?t[n][i]=a.slice():t[n][i]=a}}return t}function mergeUniforms(e){let t={};for(let n=0;n<e.length;n++){let i=cloneUniforms(e[n]);for(let e in i)t[e]=i[e]}return t}function cloneUniformsGroups(e){let t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function getUnlitUniformColorSpace(e){let t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:U.workingColorSpace}var bi={clone:cloneUniforms,merge:mergeUniforms},xi=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Si=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,ShaderMaterial=class extends Material{constructor(e){super(),this.isShaderMaterial=!0,this.type=`ShaderMaterial`,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=xi,this.fragmentShader=Si,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=cloneUniforms(e.uniforms),this.uniformsGroups=cloneUniformsGroups(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let n in this.uniforms){let i=this.uniforms[n].value;i&&i.isTexture?t.uniforms[n]={type:`t`,value:i.toJSON(e).uuid}:i&&i.isColor?t.uniforms[n]={type:`c`,value:i.getHex()}:i&&i.isVector2?t.uniforms[n]={type:`v2`,value:i.toArray()}:i&&i.isVector3?t.uniforms[n]={type:`v3`,value:i.toArray()}:i&&i.isVector4?t.uniforms[n]={type:`v4`,value:i.toArray()}:i&&i.isMatrix3?t.uniforms[n]={type:`m3`,value:i.toArray()}:i&&i.isMatrix4?t.uniforms[n]={type:`m4`,value:i.toArray()}:t.uniforms[n]={value:i}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let e in this.extensions)this.extensions[e]===!0&&(n[e]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},RawShaderMaterial=class extends ShaderMaterial{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type=`RawShaderMaterial`}},MeshStandardMaterial=class extends Material{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type=`MeshStandardMaterial`,this.defines={STANDARD:``},this.color=new Color$1(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Color$1(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new B(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Kt,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:``},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},MeshPhysicalMaterial=class extends MeshStandardMaterial{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:``,PHYSICAL:``},this.type=`MeshPhysicalMaterial`,this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new B(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,`reflectivity`,{get:function(){return clamp(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Color$1(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Color$1(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Color$1(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:``,PHYSICAL:``},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}},MeshLambertMaterial=class extends Material{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type=`MeshLambertMaterial`,this.color=new Color$1(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Color$1(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new B(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Kt,this.combine=0,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},MeshDepthMaterial=class extends Material{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type=`MeshDepthMaterial`,this.depthPacking=dt,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},MeshDistanceMaterial=class extends Material{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type=`MeshDistanceMaterial`,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function convertArray(e,t){return!e||e.constructor===t?e:typeof t.BYTES_PER_ELEMENT==`number`?new t(e):Array.prototype.slice.call(e)}function getKeyframeOrder(e){function compareTime(t,n){return e[t]-e[n]}let t=e.length,n=Array(t);for(let e=0;e!==t;++e)n[e]=e;return n.sort(compareTime),n}function sortedArray(e,t,n){let i=e.length,a=new e.constructor(i);for(let o=0,s=0;s!==i;++o){let i=n[o]*t;for(let n=0;n!==t;++n)a[s++]=e[i+n]}return a}function flattenJSON(e,t,n,i){let a=1,o=e[0];for(;o!==void 0&&o[i]===void 0;)o=e[a++];if(o===void 0)return;let s=o[i];if(s!==void 0)if(Array.isArray(s))do s=o[i],s!==void 0&&(t.push(o.time),n.push(...s)),o=e[a++];while(o!==void 0);else if(s.toArray!==void 0)do s=o[i],s!==void 0&&(t.push(o.time),s.toArray(n,n.length)),o=e[a++];while(o!==void 0);else do s=o[i],s!==void 0&&(t.push(o.time),n.push(s)),o=e[a++];while(o!==void 0)}var Interpolant=class{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i===void 0?new t.constructor(n):i,this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,i=t[n],a=t[n-1];validate_interval:{seek:{let o;linear_scan:{forward_scan:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<a)break forward_scan;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(a=i,i=t[++n],e<i)break seek}o=t.length;break linear_scan}if(!(e>=a)){let s=t[1];e<s&&(n=2,a=s);for(let o=n-2;;){if(a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===o)break;if(i=a,a=t[--n-1],e>=a)break seek}o=n,n=0;break linear_scan}break validate_interval}for(;n<o;){let i=n+o>>>1;e<t[i]?o=i:n=i+1}if(i=t[n],a=t[n-1],a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,a,i)}return this.interpolate_(n,a,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,a=e*i;for(let e=0;e!==i;++e)t[e]=n[a+e];return t}interpolate_(){throw Error(`call to abstract method`)}intervalChanged_(){}},CubicInterpolant=class extends Interpolant{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:st,endingEnd:st}}intervalChanged_(e,t,n){let i=this.parameterPositions,a=e-2,o=e+1,s=i[a],c=i[o];if(s===void 0)switch(this.getSettings_().endingStart){case ct:a=e,s=2*t-n;break;case lt:a=i.length-2,s=t+i[a]-i[a+1];break;default:a=e,s=n}if(c===void 0)switch(this.getSettings_().endingEnd){case ct:o=e,c=2*n-t;break;case lt:o=1,c=n+i[1]-i[0];break;default:o=e-1,c=t}let l=(n-t)*.5,u=this.valueSize;this._weightPrev=l/(t-s),this._weightNext=l/(c-n),this._offsetPrev=a*u,this._offsetNext=o*u}interpolate_(e,t,n,i){let a=this.resultBuffer,o=this.sampleValues,s=this.valueSize,c=e*s,l=c-s,u=this._offsetPrev,d=this._offsetNext,f=this._weightPrev,p=this._weightNext,m=(n-t)/(i-t),h=m*m,g=h*m,_=-f*g+2*f*h-f*m,y=(1+f)*g+(-1.5-2*f)*h+(-.5+f)*m+1,b=(-1-p)*g+(1.5+p)*h+.5*m,x=p*g-p*h;for(let e=0;e!==s;++e)a[e]=_*o[u+e]+y*o[l+e]+b*o[c+e]+x*o[d+e];return a}},LinearInterpolant=class extends Interpolant{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let a=this.resultBuffer,o=this.sampleValues,s=this.valueSize,c=e*s,l=c-s,u=(n-t)/(i-t),d=1-u;for(let e=0;e!==s;++e)a[e]=o[l+e]*d+o[c+e]*u;return a}},DiscreteInterpolant=class extends Interpolant{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}},BezierInterpolant=class extends Interpolant{interpolate_(e,t,n,i){let a=this.resultBuffer,o=this.sampleValues,s=this.valueSize,c=e*s,l=c-s,u=this.settings||this.DefaultSettings_,d=u.inTangents,f=u.outTangents;if(!d||!f){let e=(n-t)/(i-t),u=1-e;for(let t=0;t!==s;++t)a[t]=o[l+t]*u+o[c+t]*e;return a}let p=s*2,m=e-1;for(let u=0;u!==s;++u){let s=o[l+u],h=o[c+u],g=m*p+u*2,_=f[g],y=f[g+1],b=e*p+u*2,x=d[b],S=d[b+1],C=(n-t)/(i-t),w,T,E,D,O;for(let e=0;e<8;e++){w=C*C,T=w*C,E=1-C,D=E*E,O=D*E;let e=O*t+3*D*C*_+3*E*w*x+T*i-n;if(Math.abs(e)<1e-10)break;let a=3*D*(_-t)+6*E*C*(x-_)+3*w*(i-x);if(Math.abs(a)<1e-10)break;C-=e/a,C=Math.max(0,Math.min(1,C))}a[u]=O*s+3*D*C*y+3*E*w*S+T*h}return a}},KeyframeTrack=class{constructor(e,t,n,i){if(e===void 0)throw Error(`THREE.KeyframeTrack: track name is undefined`);if(t===void 0||t.length===0)throw Error(`THREE.KeyframeTrack: no keyframes in track named `+e);this.name=e,this.times=convertArray(t,this.TimeBufferType),this.values=convertArray(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:convertArray(e.times,Array),values:convertArray(e.values,Array)};let t=e.getInterpolation();t!==e.DefaultInterpolation&&(n.interpolation=t)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new DiscreteInterpolant(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new LinearInterpolant(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new CubicInterpolant(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new BezierInterpolant(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.settings=this.settings),t}setInterpolation(e){let t;switch(e){case rt:t=this.InterpolantFactoryMethodDiscrete;break;case it:t=this.InterpolantFactoryMethodLinear;break;case at:t=this.InterpolantFactoryMethodSmooth;break;case ot:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let t=`unsupported interpolation for `+this.ValueTypeName+` keyframe track named `+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error(t);return warn(`KeyframeTrack:`,t),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return rt;case this.InterpolantFactoryMethodLinear:return it;case this.InterpolantFactoryMethodSmooth:return at;case this.InterpolantFactoryMethodBezier:return ot}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){let n=this.times,i=n.length,a=0,o=i-1;for(;a!==i&&n[a]<e;)++a;for(;o!==-1&&n[o]>t;)--o;if(++o,a!==0||o!==i){a>=o&&(o=Math.max(o,1),a=o-1);let e=this.getValueSize();this.times=n.slice(a,o),this.values=this.values.slice(a*e,o*e)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(error(`KeyframeTrack: Invalid value size in track.`,this),e=!1);let n=this.times,i=this.values,a=n.length;a===0&&(error(`KeyframeTrack: Track is empty.`,this),e=!1);let o=null;for(let t=0;t!==a;t++){let i=n[t];if(typeof i==`number`&&isNaN(i)){error(`KeyframeTrack: Time is not a valid number.`,this,t,i),e=!1;break}if(o!==null&&o>i){error(`KeyframeTrack: Out of order keys.`,this,t,i,o),e=!1;break}o=i}if(i!==void 0&&isTypedArray(i))for(let t=0,n=i.length;t!==n;++t){let n=i[t];if(isNaN(n)){error(`KeyframeTrack: Value is not a valid number.`,this,t,n),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===at,a=e.length-1,o=1;for(let s=1;s<a;++s){let a=!1,c=e[s];if(c!==e[s+1]&&(s!==1||c!==e[0]))if(i)a=!0;else{let e=s*n,i=e-n,o=e+n;for(let s=0;s!==n;++s){let n=t[e+s];if(n!==t[i+s]||n!==t[o+s]){a=!0;break}}}if(a){if(s!==o){e[o]=e[s];let i=s*n,a=o*n;for(let e=0;e!==n;++e)t[a+e]=t[i+e]}++o}}if(a>0){e[o]=e[a];for(let e=a*n,i=o*n,s=0;s!==n;++s)t[i+s]=t[e+s];++o}return o===e.length?(this.times=e,this.values=t):(this.times=e.slice(0,o),this.values=t.slice(0,o*n)),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}};KeyframeTrack.prototype.ValueTypeName=``,KeyframeTrack.prototype.TimeBufferType=Float32Array,KeyframeTrack.prototype.ValueBufferType=Float32Array,KeyframeTrack.prototype.DefaultInterpolation=it;var BooleanKeyframeTrack=class extends KeyframeTrack{constructor(e,t,n){super(e,t,n)}};BooleanKeyframeTrack.prototype.ValueTypeName=`bool`,BooleanKeyframeTrack.prototype.ValueBufferType=Array,BooleanKeyframeTrack.prototype.DefaultInterpolation=rt,BooleanKeyframeTrack.prototype.InterpolantFactoryMethodLinear=void 0,BooleanKeyframeTrack.prototype.InterpolantFactoryMethodSmooth=void 0;var ColorKeyframeTrack=class extends KeyframeTrack{constructor(e,t,n,i){super(e,t,n,i)}};ColorKeyframeTrack.prototype.ValueTypeName=`color`;var NumberKeyframeTrack=class extends KeyframeTrack{constructor(e,t,n,i){super(e,t,n,i)}};NumberKeyframeTrack.prototype.ValueTypeName=`number`;var QuaternionLinearInterpolant=class extends Interpolant{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let a=this.resultBuffer,o=this.sampleValues,s=this.valueSize,c=(n-t)/(i-t),l=e*s;for(let e=l+s;l!==e;l+=4)Quaternion.slerpFlat(a,0,o,l-s,o,l,c);return a}},QuaternionKeyframeTrack=class extends KeyframeTrack{constructor(e,t,n,i){super(e,t,n,i)}InterpolantFactoryMethodLinear(e){return new QuaternionLinearInterpolant(this.times,this.values,this.getValueSize(),e)}};QuaternionKeyframeTrack.prototype.ValueTypeName=`quaternion`,QuaternionKeyframeTrack.prototype.InterpolantFactoryMethodSmooth=void 0;var StringKeyframeTrack=class extends KeyframeTrack{constructor(e,t,n){super(e,t,n)}};StringKeyframeTrack.prototype.ValueTypeName=`string`,StringKeyframeTrack.prototype.ValueBufferType=Array,StringKeyframeTrack.prototype.DefaultInterpolation=rt,StringKeyframeTrack.prototype.InterpolantFactoryMethodLinear=void 0,StringKeyframeTrack.prototype.InterpolantFactoryMethodSmooth=void 0;var VectorKeyframeTrack=class extends KeyframeTrack{constructor(e,t,n,i){super(e,t,n,i)}};VectorKeyframeTrack.prototype.ValueTypeName=`vector`;var AnimationClip=class{constructor(e=``,t=-1,n=[],i=ut){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=generateUUID(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,i=1/(e.fps||1);for(let e=0,a=n.length;e!==a;++e)t.push(parseKeyframeTrack(n[e]).scale(i));let a=new this(e.name,e.duration,t,e.blendMode);return a.uuid=e.uuid,a.userData=JSON.parse(e.userData||`{}`),a}static toJSON(e){let t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let e=0,i=n.length;e!==i;++e)t.push(KeyframeTrack.toJSON(n[e]));return i}static CreateFromMorphTargetSequence(e,t,n,i){let a=t.length,o=[];for(let e=0;e<a;e++){let s=[],c=[];s.push((e+a-1)%a,e,(e+1)%a),c.push(0,1,0);let l=getKeyframeOrder(s);s=sortedArray(s,1,l),c=sortedArray(c,1,l),!i&&s[0]===0&&(s.push(a),c.push(c[0])),o.push(new NumberKeyframeTrack(`.morphTargetInfluences[`+t[e].name+`]`,s,c).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let t=e;n=t.geometry&&t.geometry.animations||t.animations}for(let e=0;e<n.length;e++)if(n[e].name===t)return n[e];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let i={},a=/^([\w-]*?)([\d]+)$/;for(let t=0,n=e.length;t<n;t++){let n=e[t],o=n.name.match(a);if(o&&o.length>1){let e=o[1],t=i[e];t||(i[e]=t=[]),t.push(n)}}let o=[];for(let e in i)o.push(this.CreateFromMorphTargetSequence(e,i[e],t,n));return o}static parseAnimation(e,t){if(warn(`AnimationClip: parseAnimation() is deprecated and will be removed with r185`),!e)return error(`AnimationClip: No animation in JSONLoader data.`),null;let addNonemptyTrack=function(e,t,n,i,a){if(n.length!==0){let o=[],s=[];flattenJSON(n,o,s,i),o.length!==0&&a.push(new e(t,o,s))}},n=[],i=e.name||`default`,a=e.fps||30,o=e.blendMode,s=e.length||-1,c=e.hierarchy||[];for(let e=0;e<c.length;e++){let i=c[e].keys;if(!(!i||i.length===0))if(i[0].morphTargets){let e={},t;for(t=0;t<i.length;t++)if(i[t].morphTargets)for(let n=0;n<i[t].morphTargets.length;n++)e[i[t].morphTargets[n]]=-1;for(let a in e){let e=[],o=[];for(let n=0;n!==i[t].morphTargets.length;++n){let n=i[t];e.push(n.time),o.push(n.morphTarget===a?1:0)}n.push(new NumberKeyframeTrack(`.morphTargetInfluence[`+a+`]`,e,o))}s=e.length*a}else{let a=`.bones[`+t[e].name+`]`;addNonemptyTrack(VectorKeyframeTrack,a+`.position`,i,`pos`,n),addNonemptyTrack(QuaternionKeyframeTrack,a+`.quaternion`,i,`rot`,n),addNonemptyTrack(VectorKeyframeTrack,a+`.scale`,i,`scl`,n)}}return n.length===0?null:new this(i,s,n,o)}resetDuration(){let e=this.tracks,t=0;for(let n=0,i=e.length;n!==i;++n){let e=this.tracks[n];t=Math.max(t,e.times[e.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e&&=this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());let t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}};function getTrackTypeForValueTypeName(e){switch(e.toLowerCase()){case`scalar`:case`double`:case`float`:case`number`:case`integer`:return NumberKeyframeTrack;case`vector`:case`vector2`:case`vector3`:case`vector4`:return VectorKeyframeTrack;case`color`:return ColorKeyframeTrack;case`quaternion`:return QuaternionKeyframeTrack;case`bool`:case`boolean`:return BooleanKeyframeTrack;case`string`:return StringKeyframeTrack}throw Error(`THREE.KeyframeTrack: Unsupported typeName: `+e)}function parseKeyframeTrack(e){if(e.type===void 0)throw Error(`THREE.KeyframeTrack: track type undefined, can not parse`);let t=getTrackTypeForValueTypeName(e.type);if(e.times===void 0){let t=[],n=[];flattenJSON(e.keys,t,n,`value`),e.times=t,e.values=n}return t.parse===void 0?new t(e.name,e.times,e.values,e.interpolation):t.parse(e)}var Ci={enabled:!1,files:{},add:function(e,t){this.enabled!==!1&&(isBlobURL(e)||(this.files[e]=t))},get:function(e){if(this.enabled!==!1&&!isBlobURL(e))return this.files[e]},remove:function(e){delete this.files[e]},clear:function(){this.files={}}};function isBlobURL(e){try{let t=e.slice(e.indexOf(`:`)+1);return new URL(t).protocol===`blob:`}catch{return!1}}var LoadingManager=class{constructor(e,t,n){let i=this,a=!1,o=0,s=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(e){s++,a===!1&&i.onStart!==void 0&&i.onStart(e,o,s),a=!0},this.itemEnd=function(e){o++,i.onProgress!==void 0&&i.onProgress(e,o,s),o===s&&(a=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(e){i.onError!==void 0&&i.onError(e)},this.resolveURL=function(e){return c?c(e):e},this.setURLModifier=function(e){return c=e,this},this.addHandler=function(e,t){return l.push(e,t),this},this.removeHandler=function(e){let t=l.indexOf(e);return t!==-1&&l.splice(t,2),this},this.getHandler=function(e){for(let t=0,n=l.length;t<n;t+=2){let n=l[t],i=l[t+1];if(n.global&&(n.lastIndex=0),n.test(e))return i}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||=new AbortController,this._abortController}},wi=new LoadingManager,Loader=class{constructor(e){this.manager=e===void 0?wi:e,this.crossOrigin=`anonymous`,this.withCredentials=!1,this.path=``,this.resourcePath=``,this.requestHeader={},typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(i,a){n.load(e,i,t,a)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};Loader.DEFAULT_MATERIAL_NAME=`__DEFAULT`;var Ti={},HttpError=class extends Error{constructor(e,t){super(e),this.response=t}},FileLoader=class extends Loader{constructor(e){super(e),this.mimeType=``,this.responseType=``,this._abortController=new AbortController}load(e,t,n,i){e===void 0&&(e=``),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let a=Ci.get(`file:${e}`);if(a!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(a),this.manager.itemEnd(e)},0),a;if(Ti[e]!==void 0){Ti[e].push({onLoad:t,onProgress:n,onError:i});return}Ti[e]=[],Ti[e].push({onLoad:t,onProgress:n,onError:i});let o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?`include`:`same-origin`,signal:typeof AbortSignal.any==`function`?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),s=this.mimeType,c=this.responseType;fetch(o).then(t=>{if(t.status===200||t.status===0){if(t.status===0&&warn(`FileLoader: HTTP Status 0 received.`),typeof ReadableStream>`u`||t.body===void 0||t.body.getReader===void 0)return t;let n=Ti[e],i=t.body.getReader(),a=t.headers.get(`X-File-Size`)||t.headers.get(`Content-Length`),o=a?parseInt(a):0,s=o!==0,c=0,l=new ReadableStream({start(e){readData();function readData(){i.read().then(({done:t,value:i})=>{if(t)e.close();else{c+=i.byteLength;let t=new ProgressEvent(`progress`,{lengthComputable:s,loaded:c,total:o});for(let e=0,i=n.length;e<i;e++){let i=n[e];i.onProgress&&i.onProgress(t)}e.enqueue(i),readData()}},t=>{e.error(t)})}}});return new Response(l)}else throw new HttpError(`fetch for "${t.url}" responded with ${t.status}: ${t.statusText}`,t)}).then(e=>{switch(c){case`arraybuffer`:return e.arrayBuffer();case`blob`:return e.blob();case`document`:return e.text().then(e=>new DOMParser().parseFromString(e,s));case`json`:return e.json();default:if(s===``)return e.text();{let t=/charset="?([^;"\s]*)"?/i.exec(s),n=t&&t[1]?t[1].toLowerCase():void 0,i=new TextDecoder(n);return e.arrayBuffer().then(e=>i.decode(e))}}}).then(t=>{Ci.add(`file:${e}`,t);let n=Ti[e];delete Ti[e];for(let e=0,i=n.length;e<i;e++){let i=n[e];i.onLoad&&i.onLoad(t)}}).catch(t=>{let n=Ti[e];if(n===void 0)throw this.manager.itemError(e),t;delete Ti[e];for(let e=0,i=n.length;e<i;e++){let i=n[e];i.onError&&i.onError(t)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}},Ei=new WeakMap,ImageLoader=class extends Loader{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let a=this,o=Ci.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)a.manager.itemStart(e),setTimeout(function(){t&&t(o),a.manager.itemEnd(e)},0);else{let e=Ei.get(o);e===void 0&&(e=[],Ei.set(o,e)),e.push({onLoad:t,onError:i})}return o}let s=createElementNS(`img`);function onImageLoad(){removeEventListeners(),t&&t(this);let n=Ei.get(this)||[];for(let e=0;e<n.length;e++){let t=n[e];t.onLoad&&t.onLoad(this)}Ei.delete(this),a.manager.itemEnd(e)}function onImageError(t){removeEventListeners(),i&&i(t),Ci.remove(`image:${e}`);let n=Ei.get(this)||[];for(let e=0;e<n.length;e++){let i=n[e];i.onError&&i.onError(t)}Ei.delete(this),a.manager.itemError(e),a.manager.itemEnd(e)}function removeEventListeners(){s.removeEventListener(`load`,onImageLoad,!1),s.removeEventListener(`error`,onImageError,!1)}return s.addEventListener(`load`,onImageLoad,!1),s.addEventListener(`error`,onImageError,!1),e.slice(0,5)!==`data:`&&this.crossOrigin!==void 0&&(s.crossOrigin=this.crossOrigin),Ci.add(`image:${e}`,s),a.manager.itemStart(e),s.src=e,s}},TextureLoader=class extends Loader{constructor(e){super(e)}load(e,t,n,i){let a=new It,o=new ImageLoader(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(e){a.image=e,a.needsUpdate=!0,t!==void 0&&t(a)},n,i),a}},Light=class extends ln{constructor(e,t=1){super(),this.isLight=!0,this.type=`Light`,this.color=new Color$1(e),this.intensity=t}dispose(){this.dispatchEvent({type:`dispose`})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},Di=new G,Oi=new V,ki=new V,LightShadow=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new B(512,512),this.mapType=ne,this.map=null,this.mapPass=null,this.matrix=new G,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Frustum,this._frameExtents=new B(1,1),this._viewportCount=1,this._viewports=[new W(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;Oi.setFromMatrixPosition(e.matrixWorld),t.position.copy(Oi),ki.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(ki),t.updateMatrixWorld(),Di.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Di,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===2001||t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Di)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Ai=new V,ji=new Quaternion,Mi=new V,Camera=class extends ln{constructor(){super(),this.isCamera=!0,this.type=`Camera`,this.matrixWorldInverse=new G,this.projectionMatrix=new G,this.projectionMatrixInverse=new G,this.coordinateSystem=vt,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Ai,ji,Mi),Mi.x===1&&Mi.y===1&&Mi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ai,ji,Mi.set(1,1,1)).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorld.decompose(Ai,ji,Mi),Mi.x===1&&Mi.y===1&&Mi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ai,ji,Mi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Ni=new V,Pi=new B,Fi=new B,PerspectiveCamera=class extends Camera{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type=`PerspectiveCamera`,this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Tt*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(wt*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Tt*2*Math.atan(Math.tan(wt*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Ni.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ni.x,Ni.y).multiplyScalar(-e/Ni.z),Ni.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ni.x,Ni.y).multiplyScalar(-e/Ni.z)}getViewSize(e,t){return this.getViewBounds(e,Pi,Fi),t.subVectors(Fi,Pi)}setViewOffset(e,t,n,i,a,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=a,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(wt*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,a=-.5*i,o=this.view;if(this.view!==null&&this.view.enabled){let e=o.fullWidth,s=o.fullHeight;a+=o.offsetX*i/e,t-=o.offsetY*n/s,i*=o.width/e,n*=o.height/s}let s=this.filmOffset;s!==0&&(a+=e*s/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+i,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},SpotLightShadow=class extends LightShadow{constructor(){super(new PerspectiveCamera(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,n=Tt*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height*this.aspect,a=e.distance||t.far;(n!==t.fov||i!==t.aspect||a!==t.far)&&(t.fov=n,t.aspect=i,t.far=a,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},SpotLight=class extends Light{constructor(e,t,n=0,i=Math.PI/3,a=0,o=2){super(e,t),this.isSpotLight=!0,this.type=`SpotLight`,this.position.copy(ln.DEFAULT_UP),this.updateMatrix(),this.target=new ln,this.distance=n,this.angle=i,this.penumbra=a,this.decay=o,this.map=null,this.shadow=new SpotLightShadow}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}},PointLightShadow=class extends LightShadow{constructor(){super(new PerspectiveCamera(90,1,.5,500)),this.isPointLightShadow=!0}},PointLight=class extends Light{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type=`PointLight`,this.distance=n,this.decay=i,this.shadow=new PointLightShadow}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},OrthographicCamera=class extends Camera{constructor(e=-1,t=1,n=1,i=-1,a=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type=`OrthographicCamera`,this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=a,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,a,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=a,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,a=n-e,o=n+e,s=i+t,c=i-t;if(this.view!==null&&this.view.enabled){let e=(this.right-this.left)/this.view.fullWidth/this.zoom,t=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=e*this.view.offsetX,o=a+e*this.view.width,s-=t*this.view.offsetY,c=s-t*this.view.height}this.projectionMatrix.makeOrthographic(a,o,s,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},DirectionalLightShadow=class extends LightShadow{constructor(){super(new OrthographicCamera(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},DirectionalLight=class extends Light{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type=`DirectionalLight`,this.position.copy(ln.DEFAULT_UP),this.updateMatrix(),this.target=new ln,this.shadow=new DirectionalLightShadow}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}},AmbientLight=class extends Light{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type=`AmbientLight`}},LoaderUtils=class{static extractUrlBase(e){let t=e.lastIndexOf(`/`);return t===-1?`./`:e.slice(0,t+1)}static resolveURL(e,t){return typeof e!=`string`||e===``?``:(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,`$1`)),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}},Ii=new WeakMap,ImageBitmapLoader=class extends Loader{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>`u`&&warn(`ImageBitmapLoader: createImageBitmap() not supported.`),typeof fetch>`u`&&warn(`ImageBitmapLoader: fetch() not supported.`),this.options={premultiplyAlpha:`none`},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=``),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let a=this,o=Ci.get(`image-bitmap:${e}`);if(o!==void 0){if(a.manager.itemStart(e),o.then){o.then(n=>{if(Ii.has(o)===!0)i&&i(Ii.get(o)),a.manager.itemError(e),a.manager.itemEnd(e);else return t&&t(n),a.manager.itemEnd(e),n});return}return setTimeout(function(){t&&t(o),a.manager.itemEnd(e)},0),o}let s={};s.credentials=this.crossOrigin===`anonymous`?`same-origin`:`include`,s.headers=this.requestHeader,s.signal=typeof AbortSignal.any==`function`?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let c=fetch(e,s).then(function(e){return e.blob()}).then(function(e){return createImageBitmap(e,Object.assign(a.options,{colorSpaceConversion:`none`}))}).then(function(n){return Ci.add(`image-bitmap:${e}`,n),t&&t(n),a.manager.itemEnd(e),n}).catch(function(t){i&&i(t),Ii.set(c,t),Ci.remove(`image-bitmap:${e}`),a.manager.itemError(e),a.manager.itemEnd(e)});Ci.add(`image-bitmap:${e}`,c),a.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}},Li=-90,Ri=1,CubeCamera=class extends ln{constructor(e,t,n){super(),this.type=`CubeCamera`,this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new PerspectiveCamera(Li,Ri,e,t);i.layers=this.layers,this.add(i);let a=new PerspectiveCamera(Li,Ri,e,t);a.layers=this.layers,this.add(a);let o=new PerspectiveCamera(Li,Ri,e,t);o.layers=this.layers,this.add(o);let s=new PerspectiveCamera(Li,Ri,e,t);s.layers=this.layers,this.add(s);let c=new PerspectiveCamera(Li,Ri,e,t);c.layers=this.layers,this.add(c);let l=new PerspectiveCamera(Li,Ri,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,i,a,o,s,c]=t;for(let e of t)this.remove(e);if(e===2e3)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),s.up.set(0,1,0),s.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===2001)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),s.up.set(0,-1,0),s.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw Error(`THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: `+e);for(let e of t)this.add(e),e.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[a,o,s,c,l,u]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;let h=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let g=!1;g=e.isWebGLRenderer===!0?e.state.buffers.depth.getReversed():e.reversedDepthBuffer,e.setRenderTarget(n,0,i),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,1,i),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,2,i),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,3,i),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(n,4,i),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),n.texture.generateMipmaps=h,e.setRenderTarget(n,5,i),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(d,f,p),e.xr.enabled=m,n.texture.needsPMREMUpdate=!0}},ArrayCamera=class extends PerspectiveCamera{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},Timer=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=handleVisibilityChange.bind(this),e.addEventListener(`visibilitychange`,this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener(`visibilitychange`,this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e===void 0?performance.now():e)-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function handleVisibilityChange(){this._document.hidden===!1&&this.reset()}var zi=`\\[\\]\\.:\\/`,Bi=RegExp(`[`+zi+`]`,`g`),Vi=`[^`+zi+`]`,Hi=`[^`+zi.replace(`\\.`,``)+`]`,Ui=`((?:WC+[\\/:])*)`.replace(`WC`,Vi),Wi=`(WCOD+)?`.replace(`WCOD`,Hi),Gi=`(?:\\.(WC+)(?:\\[(.+)\\])?)?`.replace(`WC`,Vi),Ki=`\\.(WC+)(?:\\[(.+)\\])?`.replace(`WC`,Vi),qi=RegExp(`^`+Ui+Wi+Gi+Ki+`$`),Ji=[`material`,`materials`,`bones`,`map`],Composite=class{constructor(e,t,n){let i=n||K.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,a=n.length;i!==a;++i)n[i].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},K=class PropertyBinding{constructor(e,t,n){this.path=t,this.parsedPath=n||PropertyBinding.parseTrackName(t),this.node=PropertyBinding.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new PropertyBinding.Composite(e,t,n):new PropertyBinding(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,`_`).replace(Bi,``)}static parseTrackName(e){let t=qi.exec(e);if(t===null)throw Error(`PropertyBinding: Cannot parse trackName: `+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(`.`);if(i!==void 0&&i!==-1){let e=n.nodeName.substring(i+1);Ji.indexOf(e)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=e)}if(n.propertyName===null||n.propertyName.length===0)throw Error(`PropertyBinding: can not parse propertyName from trackName: `+e);return n}static findNode(e,t){if(t===void 0||t===``||t===`.`||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let searchNodeSubtree=function(e){for(let n=0;n<e.length;n++){let i=e[n];if(i.name===t||i.uuid===t)return i;let a=searchNodeSubtree(i.children);if(a)return a}return null},n=searchNodeSubtree(e.children);if(n)return n}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let i=0,a=n.length;i!==a;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let i=0,a=n.length;i!==a;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,a=n.length;i!==a;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,a=n.length;i!==a;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,i=t.propertyName,a=t.propertyIndex;if(e||(e=PropertyBinding.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){warn(`PropertyBinding: No target node found for track: `+this.path+`.`);return}if(n){let i=t.objectIndex;switch(n){case`materials`:if(!e.material){error(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!e.material.materials){error(`PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.`,this);return}e=e.material.materials;break;case`bones`:if(!e.skeleton){error(`PropertyBinding: Can not bind to bones as node does not have a skeleton.`,this);return}e=e.skeleton.bones;for(let t=0;t<e.length;t++)if(e[t].name===i){i=t;break}break;case`map`:if(`map`in e){e=e.map;break}if(!e.material){error(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!e.material.map){error(`PropertyBinding: Can not bind to material.map as node.material does not have a map.`,this);return}e=e.material.map;break;default:if(e[n]===void 0){error(`PropertyBinding: Can not bind to objectName of node undefined.`,this);return}e=e[n]}if(i!==void 0){if(e[i]===void 0){error(`PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.`,this,e);return}e=e[i]}}let o=e[i];if(o===void 0){let n=t.nodeName;error(`PropertyBinding: Trying to update property for track: `+n+`.`+i+` but it wasn't found.`,e);return}let s=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?s=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(s=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(a!==void 0){if(i===`morphTargetInfluences`){if(!e.geometry){error(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.`,this);return}if(!e.geometry.morphAttributes){error(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.`,this);return}e.morphTargetDictionary[a]!==void 0&&(a=e.morphTargetDictionary[a])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=a}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][s]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};K.Composite=Composite,K.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},K.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},K.prototype.GetterByBindingType=[K.prototype._getValue_direct,K.prototype._getValue_array,K.prototype._getValue_arrayElement,K.prototype._getValue_toArray],K.prototype.SetterByBindingTypeAndVersioning=[[K.prototype._setValue_direct,K.prototype._setValue_direct_setNeedsUpdate,K.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[K.prototype._setValue_array,K.prototype._setValue_array_setNeedsUpdate,K.prototype._setValue_array_setMatrixWorldNeedsUpdate],[K.prototype._setValue_arrayElement,K.prototype._setValue_arrayElement_setNeedsUpdate,K.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[K.prototype._setValue_fromArray,K.prototype._setValue_fromArray_setNeedsUpdate,K.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Yi=new G,Raycaster=class{constructor(e,t,n=0,i=1/0){this.ray=new Ray(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new Layers,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):error(`Raycaster: Unsupported camera type: `+t.type)}setFromXRController(e){return Yi.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Yi),this}intersectObject(e,t=!0,n=[]){return intersect(e,this,n,t),n.sort(ascSort),n}intersectObjects(e,t=!0,n=[]){for(let i=0,a=e.length;i<a;i++)intersect(e[i],this,n,t);return n.sort(ascSort),n}};function ascSort(e,t){return e.distance-t.distance}function intersect(e,t,n,i){let a=!0;if(e.layers.test(t.layers)&&e.raycast(t,n)===!1&&(a=!1),a===!0&&i===!0){let i=e.children;for(let e=0,a=i.length;e<a;e++)intersect(i[e],t,n,!0)}}function getByteLength(e,t,n,i){let a=getTextureTypeByteLength(i);switch(n){case he:return e*t;case be:return e*t/a.components*a.byteLength;case xe:return e*t/a.components*a.byteLength;case Se:return e*t*2/a.components*a.byteLength;case Ce:return e*t*2/a.components*a.byteLength;case ge:return e*t*3/a.components*a.byteLength;case _e:return e*t*4/a.components*a.byteLength;case we:return e*t*4/a.components*a.byteLength;case Te:case Ee:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case De:case Oe:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case ke:case L:return Math.max(e,16)*Math.max(t,8)/4;case I:case Ae:return Math.max(e,8)*Math.max(t,8)/2;case je:case R:case Me:case Ne:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case z:case Pe:case Fe:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Ie:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Le:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case Re:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case ze:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case Be:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case Ve:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case He:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case Ue:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case We:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case Ge:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case Ke:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case qe:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case Je:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case Ye:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case Xe:case Ze:case Qe:return Math.ceil(e/4)*Math.ceil(t/4)*16;case $e:case et:return Math.ceil(e/4)*Math.ceil(t/4)*8;case tt:case nt:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw Error(`Unable to determine texture byte length for ${n} format.`)}function getTextureTypeByteLength(e){switch(e){case ne:case re:return{byteLength:1,components:1};case ae:case ie:case le:return{byteLength:2,components:1};case ue:case de:return{byteLength:2,components:4};case se:case oe:case ce:return{byteLength:4,components:1};case pe:case me:return{byteLength:4,components:3}}throw Error(`Unknown texture type ${e}.`)}typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`register`,{detail:{revision:`183`}})),typeof window<`u`&&(window.__THREE__?warn(`WARNING: Multiple instances of Three.js being imported.`):window.__THREE__=`183`);function WebGLAnimation(){let e=null,t=!1,n=null,i=null;function onAnimationFrame(t,a){n(t,a),i=e.requestAnimationFrame(onAnimationFrame)}return{start:function(){t!==!0&&n!==null&&(i=e.requestAnimationFrame(onAnimationFrame),t=!0)},stop:function(){e.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(e){n=e},setContext:function(t){e=t}}}function WebGLAttributes(e){let t=new WeakMap;function createBuffer(t,n){let i=t.array,a=t.usage,o=i.byteLength,s=e.createBuffer();e.bindBuffer(n,s),e.bufferData(n,i,a),t.onUploadCallback();let c;if(i instanceof Float32Array)c=e.FLOAT;else if(typeof Float16Array<`u`&&i instanceof Float16Array)c=e.HALF_FLOAT;else if(i instanceof Uint16Array)c=t.isFloat16BufferAttribute?e.HALF_FLOAT:e.UNSIGNED_SHORT;else if(i instanceof Int16Array)c=e.SHORT;else if(i instanceof Uint32Array)c=e.UNSIGNED_INT;else if(i instanceof Int32Array)c=e.INT;else if(i instanceof Int8Array)c=e.BYTE;else if(i instanceof Uint8Array)c=e.UNSIGNED_BYTE;else if(i instanceof Uint8ClampedArray)c=e.UNSIGNED_BYTE;else throw Error(`THREE.WebGLAttributes: Unsupported buffer data format: `+i);return{buffer:s,type:c,bytesPerElement:i.BYTES_PER_ELEMENT,version:t.version,size:o}}function updateBuffer(t,n,i){let a=n.array,o=n.updateRanges;if(e.bindBuffer(i,t),o.length===0)e.bufferSubData(i,0,a);else{o.sort((e,t)=>e.start-t.start);let t=0;for(let e=1;e<o.length;e++){let n=o[t],i=o[e];i.start<=n.start+n.count+1?n.count=Math.max(n.count,i.start+i.count-n.start):(++t,o[t]=i)}o.length=t+1;for(let t=0,n=o.length;t<n;t++){let n=o[t];e.bufferSubData(i,n.start*a.BYTES_PER_ELEMENT,a,n.start,n.count)}n.clearUpdateRanges()}n.onUploadCallback()}function get(e){return e.isInterleavedBufferAttribute&&(e=e.data),t.get(e)}function remove(n){n.isInterleavedBufferAttribute&&(n=n.data);let i=t.get(n);i&&(e.deleteBuffer(i.buffer),t.delete(n))}function update(e,n){if(e.isInterleavedBufferAttribute&&(e=e.data),e.isGLBufferAttribute){let n=t.get(e);(!n||n.version<e.version)&&t.set(e,{buffer:e.buffer,type:e.type,bytesPerElement:e.elementSize,version:e.version});return}let i=t.get(e);if(i===void 0)t.set(e,createBuffer(e,n));else if(i.version<e.version){if(i.size!==e.array.byteLength)throw Error(`THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.`);updateBuffer(i.buffer,e,n),i.version=e.version}}return{get,remove,update}}var q={alphahash_fragment:`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,alphahash_pars_fragment:`#ifdef USE_ALPHAHASH
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
#endif`,alphamap_fragment:`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,alphamap_pars_fragment:`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,alphatest_fragment:`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,alphatest_pars_fragment:`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aomap_fragment:`#ifdef USE_AOMAP
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
#endif`,aomap_pars_fragment:`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,batching_pars_vertex:`#ifdef USE_BATCHING
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
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,batching_vertex:`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,begin_vertex:`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,beginnormal_vertex:`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bsdfs:`float G_BlinnPhong_Implicit( ) {
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
} // validated`,iridescence_fragment:`#ifdef USE_IRIDESCENCE
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
#endif`,bumpmap_pars_fragment:`#ifdef USE_BUMPMAP
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
#endif`,clipping_planes_fragment:`#if NUM_CLIPPING_PLANES > 0
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
#endif`,clipping_planes_pars_fragment:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,clipping_planes_pars_vertex:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,clipping_planes_vertex:`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,color_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,color_pars_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,color_pars_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,color_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,common:`#define PI 3.141592653589793
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
} // validated`,cube_uv_reflection_fragment:`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,defaultnormal_vertex:`vec3 transformedNormal = objectNormal;
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
#endif`,displacementmap_pars_vertex:`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,displacementmap_vertex:`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,emissivemap_fragment:`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,emissivemap_pars_fragment:`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,colorspace_fragment:`gl_FragColor = linearToOutputTexel( gl_FragColor );`,colorspace_pars_fragment:`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,envmap_fragment:`#ifdef USE_ENVMAP
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
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,envmap_common_pars_fragment:`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,envmap_pars_fragment:`#ifdef USE_ENVMAP
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
#endif`,envmap_pars_vertex:`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,envmap_physical_pars_fragment:`#ifdef USE_ENVMAP
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
#endif`,envmap_vertex:`#ifdef USE_ENVMAP
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
#endif`,fog_vertex:`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fog_pars_vertex:`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fog_fragment:`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fog_pars_fragment:`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gradientmap_pars_fragment:`#ifdef USE_GRADIENTMAP
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
}`,lightmap_pars_fragment:`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lights_lambert_fragment:`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lights_lambert_pars_fragment:`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lights_pars_begin:`uniform bool receiveShadow;
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
#endif`,lights_toon_fragment:`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lights_toon_pars_fragment:`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lights_phong_fragment:`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lights_phong_pars_fragment:`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lights_physical_fragment:`PhysicalMaterial material;
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
#endif`,lights_physical_pars_fragment:`uniform sampler2D dfgLUT;
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
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
}`,lights_fragment_begin:`
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
#endif`,lights_fragment_maps:`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
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
#endif`,lights_fragment_end:`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,logdepthbuf_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,logdepthbuf_pars_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_pars_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,map_fragment:`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,map_pars_fragment:`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,map_particle_fragment:`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,map_particle_pars_fragment:`#if defined( USE_POINTS_UV )
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
#endif`,metalnessmap_fragment:`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,metalnessmap_pars_fragment:`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,morphinstance_vertex:`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,morphcolor_vertex:`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,morphnormal_vertex:`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,morphtarget_pars_vertex:`#ifdef USE_MORPHTARGETS
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
#endif`,morphtarget_vertex:`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,normal_fragment_begin:`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,normal_fragment_maps:`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,normal_pars_fragment:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_pars_vertex:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_vertex:`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,normalmap_pars_fragment:`#ifdef USE_NORMALMAP
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
#endif`,clearcoat_normal_fragment_begin:`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,clearcoat_normal_fragment_maps:`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,clearcoat_pars_fragment:`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iridescence_pars_fragment:`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,opaque_fragment:`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,packing:`vec3 packNormalToRGB( const in vec3 normal ) {
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,premultiplied_alpha_fragment:`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,project_vertex:`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dithering_fragment:`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dithering_pars_fragment:`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,roughnessmap_fragment:`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,roughnessmap_pars_fragment:`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,shadowmap_pars_fragment:`#if NUM_SPOT_LIGHT_COORDS > 0
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
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
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
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
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
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
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
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,shadowmap_pars_vertex:`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,shadowmap_vertex:`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,shadowmask_pars_fragment:`float getShadowMask() {
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
}`,skinbase_vertex:`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,skinning_pars_vertex:`#ifdef USE_SKINNING
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
#endif`,skinning_vertex:`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,skinnormal_vertex:`#ifdef USE_SKINNING
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
#endif`,specularmap_fragment:`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,specularmap_pars_fragment:`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tonemapping_fragment:`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tonemapping_pars_fragment:`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,transmission_fragment:`#ifdef USE_TRANSMISSION
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
#endif`,transmission_pars_fragment:`#ifdef USE_TRANSMISSION
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
#endif`,uv_pars_fragment:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,uv_pars_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,uv_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,worldpos_vertex:`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
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
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`#ifdef ENVMAP_TYPE_CUBE
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
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,depth_vert:`#include <common>
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
}`,depth_frag:`#if DEPTH_PACKING == 3200
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
}`,distance_vert:`#define DISTANCE
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
}`,distance_frag:`#define DISTANCE
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
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,linedashed_vert:`uniform float scale;
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
}`,linedashed_frag:`uniform vec3 diffuse;
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
}`,meshbasic_vert:`#include <common>
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
}`,meshbasic_frag:`uniform vec3 diffuse;
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
}`,meshlambert_vert:`#define LAMBERT
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
}`,meshlambert_frag:`#define LAMBERT
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
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,meshmatcap_vert:`#define MATCAP
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
}`,meshmatcap_frag:`#define MATCAP
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
}`,meshnormal_vert:`#define NORMAL
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
}`,meshnormal_frag:`#define NORMAL
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
}`,meshphong_vert:`#define PHONG
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
}`,meshphong_frag:`#define PHONG
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
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,meshphysical_vert:`#define STANDARD
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
}`,meshphysical_frag:`#define STANDARD
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
}`,meshtoon_vert:`#define TOON
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
}`,meshtoon_frag:`#define TOON
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
}`,points_vert:`uniform float size;
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
}`,points_frag:`uniform vec3 diffuse;
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
}`,shadow_vert:`#include <common>
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
}`,shadow_frag:`uniform vec3 color;
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
	#include <premultiplied_alpha_fragment>
}`,sprite_vert:`uniform float rotation;
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
}`,sprite_frag:`uniform vec3 diffuse;
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
}`},J={common:{diffuse:{value:new Color$1(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new H},alphaMap:{value:null},alphaMapTransform:{value:new H},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new H}},envmap:{envMap:{value:null},envMapRotation:{value:new H},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new H}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new H}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new H},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new H},normalScale:{value:new B(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new H},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new H}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new H}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new H}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Color$1(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Color$1(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new H},alphaTest:{value:0},uvTransform:{value:new H}},sprite:{diffuse:{value:new Color$1(16777215)},opacity:{value:1},center:{value:new B(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new H},alphaMap:{value:null},alphaMapTransform:{value:new H},alphaTest:{value:0}}},Xi={basic:{uniforms:mergeUniforms([J.common,J.specularmap,J.envmap,J.aomap,J.lightmap,J.fog]),vertexShader:q.meshbasic_vert,fragmentShader:q.meshbasic_frag},lambert:{uniforms:mergeUniforms([J.common,J.specularmap,J.envmap,J.aomap,J.lightmap,J.emissivemap,J.bumpmap,J.normalmap,J.displacementmap,J.fog,J.lights,{emissive:{value:new Color$1(0)},envMapIntensity:{value:1}}]),vertexShader:q.meshlambert_vert,fragmentShader:q.meshlambert_frag},phong:{uniforms:mergeUniforms([J.common,J.specularmap,J.envmap,J.aomap,J.lightmap,J.emissivemap,J.bumpmap,J.normalmap,J.displacementmap,J.fog,J.lights,{emissive:{value:new Color$1(0)},specular:{value:new Color$1(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:q.meshphong_vert,fragmentShader:q.meshphong_frag},standard:{uniforms:mergeUniforms([J.common,J.envmap,J.aomap,J.lightmap,J.emissivemap,J.bumpmap,J.normalmap,J.displacementmap,J.roughnessmap,J.metalnessmap,J.fog,J.lights,{emissive:{value:new Color$1(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:q.meshphysical_vert,fragmentShader:q.meshphysical_frag},toon:{uniforms:mergeUniforms([J.common,J.aomap,J.lightmap,J.emissivemap,J.bumpmap,J.normalmap,J.displacementmap,J.gradientmap,J.fog,J.lights,{emissive:{value:new Color$1(0)}}]),vertexShader:q.meshtoon_vert,fragmentShader:q.meshtoon_frag},matcap:{uniforms:mergeUniforms([J.common,J.bumpmap,J.normalmap,J.displacementmap,J.fog,{matcap:{value:null}}]),vertexShader:q.meshmatcap_vert,fragmentShader:q.meshmatcap_frag},points:{uniforms:mergeUniforms([J.points,J.fog]),vertexShader:q.points_vert,fragmentShader:q.points_frag},dashed:{uniforms:mergeUniforms([J.common,J.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:q.linedashed_vert,fragmentShader:q.linedashed_frag},depth:{uniforms:mergeUniforms([J.common,J.displacementmap]),vertexShader:q.depth_vert,fragmentShader:q.depth_frag},normal:{uniforms:mergeUniforms([J.common,J.bumpmap,J.normalmap,J.displacementmap,{opacity:{value:1}}]),vertexShader:q.meshnormal_vert,fragmentShader:q.meshnormal_frag},sprite:{uniforms:mergeUniforms([J.sprite,J.fog]),vertexShader:q.sprite_vert,fragmentShader:q.sprite_frag},background:{uniforms:{uvTransform:{value:new H},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:q.background_vert,fragmentShader:q.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new H}},vertexShader:q.backgroundCube_vert,fragmentShader:q.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:q.cube_vert,fragmentShader:q.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:q.equirect_vert,fragmentShader:q.equirect_frag},distance:{uniforms:mergeUniforms([J.common,J.displacementmap,{referencePosition:{value:new V},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:q.distance_vert,fragmentShader:q.distance_frag},shadow:{uniforms:mergeUniforms([J.lights,J.fog,{color:{value:new Color$1(0)},opacity:{value:1}}]),vertexShader:q.shadow_vert,fragmentShader:q.shadow_frag}};Xi.physical={uniforms:mergeUniforms([Xi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new H},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new H},clearcoatNormalScale:{value:new B(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new H},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new H},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new H},sheen:{value:0},sheenColor:{value:new Color$1(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new H},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new H},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new H},transmissionSamplerSize:{value:new B},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new H},attenuationDistance:{value:0},attenuationColor:{value:new Color$1(0)},specularColor:{value:new Color$1(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new H},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new H},anisotropyVector:{value:new B},anisotropyMap:{value:null},anisotropyMapTransform:{value:new H}}]),vertexShader:q.meshphysical_vert,fragmentShader:q.meshphysical_frag};var Zi={r:0,b:0,g:0},Qi=new Kt,$i=new G;function WebGLBackground(e,t,n,i,a,o){let s=new Color$1(0),c=a===!0?0:1,l,u,d=null,f=0,p=null;function getBackground(e){let n=e.isScene===!0?e.background:null;if(n&&n.isTexture){let i=e.backgroundBlurriness>0;n=t.get(n,i)}return n}function render(t){let i=!1,a=getBackground(t);a===null?setClear(s,c):a&&a.isColor&&(setClear(a,1),i=!0);let l=e.xr.getEnvironmentBlendMode();l===`additive`?n.buffers.color.setClear(0,0,0,1,o):l===`alpha-blend`&&n.buffers.color.setClear(0,0,0,0,o),(e.autoClear||i)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function addToRenderList(t,n){let a=getBackground(n);a&&(a.isCubeTexture||a.mapping===306)?(u===void 0&&(u=new Mesh(new si(1,1,1),new ShaderMaterial({name:`BackgroundCubeMaterial`,uniforms:cloneUniforms(Xi.backgroundCube.uniforms),vertexShader:Xi.backgroundCube.vertexShader,fragmentShader:Xi.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute(`normal`),u.geometry.deleteAttribute(`uv`),u.onBeforeRender=function(e,t,n){this.matrixWorld.copyPosition(n.matrixWorld)},Object.defineProperty(u.material,`envMap`,{get:function(){return this.uniforms.envMap.value}}),i.update(u)),Qi.copy(n.backgroundRotation),Qi.x*=-1,Qi.y*=-1,Qi.z*=-1,a.isCubeTexture&&a.isRenderTargetTexture===!1&&(Qi.y*=-1,Qi.z*=-1),u.material.uniforms.envMap.value=a,u.material.uniforms.flipEnvMap.value=a.isCubeTexture&&a.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=n.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4($i.makeRotationFromEuler(Qi)),u.material.toneMapped=U.getTransfer(a.colorSpace)!==ht,(d!==a||f!==a.version||p!==e.toneMapping)&&(u.material.needsUpdate=!0,d=a,f=a.version,p=e.toneMapping),u.layers.enableAll(),t.unshift(u,u.geometry,u.material,0,0,null)):a&&a.isTexture&&(l===void 0&&(l=new Mesh(new vi(2,2),new ShaderMaterial({name:`BackgroundMaterial`,uniforms:cloneUniforms(Xi.background.uniforms),vertexShader:Xi.background.vertexShader,fragmentShader:Xi.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute(`normal`),Object.defineProperty(l.material,`map`,{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=a,l.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,l.material.toneMapped=U.getTransfer(a.colorSpace)!==ht,a.matrixAutoUpdate===!0&&a.updateMatrix(),l.material.uniforms.uvTransform.value.copy(a.matrix),(d!==a||f!==a.version||p!==e.toneMapping)&&(l.material.needsUpdate=!0,d=a,f=a.version,p=e.toneMapping),l.layers.enableAll(),t.unshift(l,l.geometry,l.material,0,0,null))}function setClear(t,i){t.getRGB(Zi,getUnlitUniformColorSpace(e)),n.buffers.color.setClear(Zi.r,Zi.g,Zi.b,i,o)}function dispose(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return s},setClearColor:function(e,t=1){s.set(e),c=t,setClear(s,c)},getClearAlpha:function(){return c},setClearAlpha:function(e){c=e,setClear(s,c)},render,addToRenderList,dispose}}function WebGLBindingStates(e,t){let n=e.getParameter(e.MAX_VERTEX_ATTRIBS),i={},a=createBindingState(null),o=a,s=!1;function setup(n,i,a,c,l){let u=!1,d=getBindingState(n,c,a,i);o!==d&&(o=d,bindVertexArrayObject(o.object)),u=needsUpdate(n,c,a,l),u&&saveCache(n,c,a,l),l!==null&&t.update(l,e.ELEMENT_ARRAY_BUFFER),(u||s)&&(s=!1,setupVertexAttributes(n,i,a,c),l!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(l).buffer))}function createVertexArrayObject(){return e.createVertexArray()}function bindVertexArrayObject(t){return e.bindVertexArray(t)}function deleteVertexArrayObject(t){return e.deleteVertexArray(t)}function getBindingState(e,t,n,a){let o=a.wireframe===!0,s=i[t.id];s===void 0&&(s={},i[t.id]=s);let c=e.isInstancedMesh===!0?e.id:0,l=s[c];l===void 0&&(l={},s[c]=l);let u=l[n.id];u===void 0&&(u={},l[n.id]=u);let d=u[o];return d===void 0&&(d=createBindingState(createVertexArrayObject()),u[o]=d),d}function createBindingState(e){let t=[],i=[],a=[];for(let e=0;e<n;e++)t[e]=0,i[e]=0,a[e]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:t,enabledAttributes:i,attributeDivisors:a,object:e,attributes:{},index:null}}function needsUpdate(e,t,n,i){let a=o.attributes,s=t.attributes,c=0,l=n.getAttributes();for(let t in l)if(l[t].location>=0){let n=a[t],i=s[t];if(i===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(i=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(i=e.instanceColor)),n===void 0||n.attribute!==i||i&&n.data!==i.data)return!0;c++}return o.attributesNum!==c||o.index!==i}function saveCache(e,t,n,i){let a={},s=t.attributes,c=0,l=n.getAttributes();for(let t in l)if(l[t].location>=0){let n=s[t];n===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(n=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(n=e.instanceColor));let i={};i.attribute=n,n&&n.data&&(i.data=n.data),a[t]=i,c++}o.attributes=a,o.attributesNum=c,o.index=i}function initAttributes(){let e=o.newAttributes;for(let t=0,n=e.length;t<n;t++)e[t]=0}function enableAttribute(e){enableAttributeAndDivisor(e,0)}function enableAttributeAndDivisor(t,n){let i=o.newAttributes,a=o.enabledAttributes,s=o.attributeDivisors;i[t]=1,a[t]===0&&(e.enableVertexAttribArray(t),a[t]=1),s[t]!==n&&(e.vertexAttribDivisor(t,n),s[t]=n)}function disableUnusedAttributes(){let t=o.newAttributes,n=o.enabledAttributes;for(let i=0,a=n.length;i<a;i++)n[i]!==t[i]&&(e.disableVertexAttribArray(i),n[i]=0)}function vertexAttribPointer(t,n,i,a,o,s,c){c===!0?e.vertexAttribIPointer(t,n,i,o,s):e.vertexAttribPointer(t,n,i,a,o,s)}function setupVertexAttributes(n,i,a,o){initAttributes();let s=o.attributes,c=a.getAttributes(),l=i.defaultAttributeValues;for(let i in c){let a=c[i];if(a.location>=0){let c=s[i];if(c===void 0&&(i===`instanceMatrix`&&n.instanceMatrix&&(c=n.instanceMatrix),i===`instanceColor`&&n.instanceColor&&(c=n.instanceColor)),c!==void 0){let i=c.normalized,s=c.itemSize,l=t.get(c);if(l===void 0)continue;let u=l.buffer,d=l.type,f=l.bytesPerElement,p=d===e.INT||d===e.UNSIGNED_INT||c.gpuType===1013;if(c.isInterleavedBufferAttribute){let t=c.data,l=t.stride,m=c.offset;if(t.isInstancedInterleavedBuffer){for(let e=0;e<a.locationSize;e++)enableAttributeAndDivisor(a.location+e,t.meshPerAttribute);n.isInstancedMesh!==!0&&o._maxInstanceCount===void 0&&(o._maxInstanceCount=t.meshPerAttribute*t.count)}else for(let e=0;e<a.locationSize;e++)enableAttribute(a.location+e);e.bindBuffer(e.ARRAY_BUFFER,u);for(let e=0;e<a.locationSize;e++)vertexAttribPointer(a.location+e,s/a.locationSize,d,i,l*f,(m+s/a.locationSize*e)*f,p)}else{if(c.isInstancedBufferAttribute){for(let e=0;e<a.locationSize;e++)enableAttributeAndDivisor(a.location+e,c.meshPerAttribute);n.isInstancedMesh!==!0&&o._maxInstanceCount===void 0&&(o._maxInstanceCount=c.meshPerAttribute*c.count)}else for(let e=0;e<a.locationSize;e++)enableAttribute(a.location+e);e.bindBuffer(e.ARRAY_BUFFER,u);for(let e=0;e<a.locationSize;e++)vertexAttribPointer(a.location+e,s/a.locationSize,d,i,s*f,s/a.locationSize*e*f,p)}}else if(l!==void 0){let t=l[i];if(t!==void 0)switch(t.length){case 2:e.vertexAttrib2fv(a.location,t);break;case 3:e.vertexAttrib3fv(a.location,t);break;case 4:e.vertexAttrib4fv(a.location,t);break;default:e.vertexAttrib1fv(a.location,t)}}}}disableUnusedAttributes()}function dispose(){reset();for(let e in i){let t=i[e];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)deleteVertexArrayObject(t[e].object),delete t[e];delete n[e]}}delete i[e]}}function releaseStatesOfGeometry(e){if(i[e.id]===void 0)return;let t=i[e.id];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)deleteVertexArrayObject(t[e].object),delete t[e];delete n[e]}}delete i[e.id]}function releaseStatesOfProgram(e){for(let t in i){let n=i[t];for(let t in n){let i=n[t];if(i[e.id]===void 0)continue;let a=i[e.id];for(let e in a)deleteVertexArrayObject(a[e].object),delete a[e];delete i[e.id]}}}function releaseStatesOfObject(e){for(let t in i){let n=i[t],a=e.isInstancedMesh===!0?e.id:0,o=n[a];if(o!==void 0){for(let e in o){let t=o[e];for(let e in t)deleteVertexArrayObject(t[e].object),delete t[e];delete o[e]}delete n[a],Object.keys(n).length===0&&delete i[t]}}}function reset(){resetDefaultState(),s=!0,o!==a&&(o=a,bindVertexArrayObject(o.object))}function resetDefaultState(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup,reset,resetDefaultState,dispose,releaseStatesOfGeometry,releaseStatesOfObject,releaseStatesOfProgram,initAttributes,enableAttribute,disableUnusedAttributes}}function WebGLBufferRenderer(e,t,n){let i;function setMode(e){i=e}function render(t,a){e.drawArrays(i,t,a),n.update(a,i,1)}function renderInstances(t,a,o){o!==0&&(e.drawArraysInstanced(i,t,a,o),n.update(a,i,o))}function renderMultiDraw(e,a,o){if(o===0)return;t.get(`WEBGL_multi_draw`).multiDrawArraysWEBGL(i,e,0,a,0,o);let s=0;for(let e=0;e<o;e++)s+=a[e];n.update(s,i,1)}function renderMultiDrawInstances(e,a,o,s){if(o===0)return;let c=t.get(`WEBGL_multi_draw`);if(c===null)for(let t=0;t<e.length;t++)renderInstances(e[t],a[t],s[t]);else{c.multiDrawArraysInstancedWEBGL(i,e,0,a,0,s,0,o);let t=0;for(let e=0;e<o;e++)t+=a[e]*s[e];n.update(t,i,1)}}this.setMode=setMode,this.render=render,this.renderInstances=renderInstances,this.renderMultiDraw=renderMultiDraw,this.renderMultiDrawInstances=renderMultiDrawInstances}function WebGLCapabilities(e,t,n,i){let a;function getMaxAnisotropy(){if(a!==void 0)return a;if(t.has(`EXT_texture_filter_anisotropic`)===!0){let n=t.get(`EXT_texture_filter_anisotropic`);a=e.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function textureFormatReadable(t){return!(t!==1023&&i.convert(t)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT))}function textureTypeReadable(n){let a=n===1016&&(t.has(`EXT_color_buffer_half_float`)||t.has(`EXT_color_buffer_float`));return!(n!==1009&&i.convert(n)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE)&&n!==1015&&!a)}function getMaxPrecision(t){if(t===`highp`){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return`highp`;t=`mediump`}return t===`mediump`&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?`mediump`:`lowp`}let o=n.precision===void 0?`highp`:n.precision,s=getMaxPrecision(o);s!==o&&(warn(`WebGLRenderer:`,o,`not supported, using`,s,`instead.`),o=s);let c=n.logarithmicDepthBuffer===!0,l=n.reversedDepthBuffer===!0&&t.has(`EXT_clip_control`),u=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),d=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),f=e.getParameter(e.MAX_TEXTURE_SIZE),p=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),m=e.getParameter(e.MAX_VERTEX_ATTRIBS),h=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),g=e.getParameter(e.MAX_VARYING_VECTORS),_=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),y=e.getParameter(e.MAX_SAMPLES),b=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy,getMaxPrecision,textureFormatReadable,textureTypeReadable,precision:o,logarithmicDepthBuffer:c,reversedDepthBuffer:l,maxTextures:u,maxVertexTextures:d,maxTextureSize:f,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:h,maxVaryings:g,maxFragmentUniforms:_,maxSamples:y,samples:b}}function WebGLClipping(e){let t=this,n=null,i=0,a=!1,o=!1,s=new Plane,c=new H,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(e,t){let n=e.length!==0||t||i!==0||a;return a=t,i=e.length,n},this.beginShadows=function(){o=!0,projectPlanes(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(e,t){n=projectPlanes(e,t,0)},this.setState=function(t,s,c){let u=t.clippingPlanes,d=t.clipIntersection,f=t.clipShadows,p=e.get(t);if(!a||u===null||u.length===0||o&&!f)o?projectPlanes(null):resetGlobalState();else{let e=o?0:i,t=e*4,a=p.clippingState||null;l.value=a,a=projectPlanes(u,s,t,c);for(let e=0;e!==t;++e)a[e]=n[e];p.clippingState=a,this.numIntersection=d?this.numPlanes:0,this.numPlanes+=e}};function resetGlobalState(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function projectPlanes(e,n,i,a){let o=e===null?0:e.length,u=null;if(o!==0){if(u=l.value,a!==!0||u===null){let t=i+o*4,a=n.matrixWorldInverse;c.getNormalMatrix(a),(u===null||u.length<t)&&(u=new Float32Array(t));for(let t=0,n=i;t!==o;++t,n+=4)s.copy(e[t]).applyMatrix4(a,c),s.normal.toArray(u,n),u[n+3]=s.constant}l.value=u,l.needsUpdate=!0}return t.numPlanes=o,t.numIntersection=0,u}}var ea=4,ta=[.125,.215,.35,.446,.526,.582],na=20,ra=256,ia=new OrthographicCamera,aa=new Color$1,oa=null,sa=0,ca=0,la=!1,ua=new V,PMREMGenerator=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,i=100,a={}){let{size:o=256,position:s=ua}=a;oa=this._renderer.getRenderTarget(),sa=this._renderer.getActiveCubeFace(),ca=this._renderer.getActiveMipmapLevel(),la=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,i,c,s),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=_getCubemapMaterial(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=_getEquirectMaterial(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=2**this._lodMax}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(oa,sa,ca),this._renderer.xr.enabled=la,e.scissorTest=!1,_setViewport(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===301||e.mapping===302?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),oa=this._renderer.getRenderTarget(),sa=this._renderer.getActiveCubeFace(),ca=this._renderer.getActiveMipmapLevel(),la=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:F,minFilter:F,generateMipmaps:!1,type:le,format:_e,colorSpace:pt,depthBuffer:!1},i=_createRenderTarget(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=_createRenderTarget(e,t,n);let{_lodMax:i}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=_createPlanes(i)),this._blurMaterial=_getBlurShader(i,e,t),this._ggxMaterial=_getGGXShader(i,e,t)}return i}_compileMaterial(e){let t=new Mesh(new tr,e);this._renderer.compile(t,ia)}_sceneToCubeUV(e,t,n,i,a){let o=new PerspectiveCamera(90,1,t,n),s=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],l=this._renderer,u=l.autoClear,d=l.toneMapping;l.getClearColor(aa),l.toneMapping=0,l.autoClear=!1,l.state.buffers.depth.getReversed()&&(l.setRenderTarget(i),l.clearDepth(),l.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Mesh(new si,new MeshBasicMaterial({name:`PMREM.Background`,side:1,depthWrite:!1,depthTest:!1})));let f=this._backgroundBox,p=f.material,m=!1,h=e.background;h?h.isColor&&(p.color.copy(h),e.background=null,m=!0):(p.color.copy(aa),m=!0);for(let t=0;t<6;t++){let n=t%3;n===0?(o.up.set(0,s[t],0),o.position.set(a.x,a.y,a.z),o.lookAt(a.x+c[t],a.y,a.z)):n===1?(o.up.set(0,0,s[t]),o.position.set(a.x,a.y,a.z),o.lookAt(a.x,a.y+c[t],a.z)):(o.up.set(0,s[t],0),o.position.set(a.x,a.y,a.z),o.lookAt(a.x,a.y,a.z+c[t]));let u=this._cubeSize;_setViewport(i,n*u,t>2?u:0,u,u),l.setRenderTarget(i),m&&l.render(f,o),l.render(e,o)}l.toneMapping=d,l.autoClear=u,e.background=h}_textureToCubeUV(e,t){let n=this._renderer,i=e.mapping===301||e.mapping===302;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=_getCubemapMaterial()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=_getEquirectMaterial());let a=i?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=a;let s=a.uniforms;s.envMap.value=e;let c=this._cubeSize;_setViewport(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,ia)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let i=this._lodMeshes.length;for(let t=1;t<i;t++)this._applyGGXFilter(e,t-1,t);t.autoClear=n}_applyGGXFilter(e,t,n){let i=this._renderer,a=this._pingPongRenderTarget,o=this._ggxMaterial,s=this._lodMeshes[n];s.material=o;let c=o.uniforms,l=n/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),d=Math.sqrt(l*l-u*u)*(0+l*1.25),{_lodMax:f}=this,p=this._sizeLods[n],m=3*p*(n>f-ea?n-f+ea:0),h=4*(this._cubeSize-p);c.envMap.value=e.texture,c.roughness.value=d,c.mipInt.value=f-t,_setViewport(a,m,h,3*p,2*p),i.setRenderTarget(a),i.render(s,ia),c.envMap.value=a.texture,c.roughness.value=0,c.mipInt.value=f-n,_setViewport(e,m,h,3*p,2*p),i.setRenderTarget(e),i.render(s,ia)}_blur(e,t,n,i,a){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,`latitudinal`,a),this._halfBlur(o,e,n,n,i,`longitudinal`,a)}_halfBlur(e,t,n,i,a,o,s){let c=this._renderer,l=this._blurMaterial;o!==`latitudinal`&&o!==`longitudinal`&&error(`blur direction must be either latitudinal or longitudinal!`);let u=this._lodMeshes[i];u.material=l;let d=l.uniforms,f=this._sizeLods[n]-1,p=isFinite(a)?Math.PI/(2*f):2*Math.PI/(2*na-1),m=a/p,h=isFinite(a)?1+Math.floor(3*m):na;h>na&&warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${h} samples when the maximum is set to ${na}`);let g=[],_=0;for(let e=0;e<na;++e){let t=e/m,n=Math.exp(-t*t/2);g.push(n),e===0?_+=n:e<h&&(_+=2*n)}for(let e=0;e<g.length;e++)g[e]=g[e]/_;d.envMap.value=e.texture,d.samples.value=h,d.weights.value=g,d.latitudinal.value=o===`latitudinal`,s&&(d.poleAxis.value=s);let{_lodMax:y}=this;d.dTheta.value=p,d.mipInt.value=y-n;let b=this._sizeLods[i];_setViewport(t,3*b*(i>y-ea?i-y+ea:0),4*(this._cubeSize-b),3*b,2*b),c.setRenderTarget(t),c.render(u,ia)}};function _createPlanes(e){let t=[],n=[],i=[],a=e,o=e-ea+1+ta.length;for(let s=0;s<o;s++){let o=2**a;t.push(o);let c=1/o;s>e-ea?c=ta[s-e+ea-1]:s===0&&(c=0),n.push(c);let l=1/(o-2),u=-l,d=1+l,f=[u,u,d,u,d,d,u,u,d,d,u,d],p=new Float32Array(108),m=new Float32Array(72),h=new Float32Array(36);for(let e=0;e<6;e++){let t=e%3*2/3-1,n=e>2?0:-1,i=[t,n,0,t+2/3,n,0,t+2/3,n+1,0,t,n,0,t+2/3,n+1,0,t,n+1,0];p.set(i,18*e),m.set(f,12*e);let a=[e,e,e,e,e,e];h.set(a,6*e)}let g=new tr;g.setAttribute(`position`,new BufferAttribute(p,3)),g.setAttribute(`uv`,new BufferAttribute(m,2)),g.setAttribute(`faceIndex`,new BufferAttribute(h,1)),i.push(new Mesh(g,null)),a>ea&&a--}return{lodMeshes:i,sizeLods:t,sigmas:n}}function _createRenderTarget(e,t,n){let i=new WebGLRenderTarget(e,t,n);return i.texture.mapping=306,i.texture.name=`PMREM.cubeUv`,i.scissorTest=!0,i}function _setViewport(e,t,n,i,a){e.viewport.set(t,n,i,a),e.scissor.set(t,n,i,a)}function _getGGXShader(e,t,n){return new ShaderMaterial({name:`PMREMGGXConvolution`,defines:{GGX_SAMPLES:ra,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:_getCommonVertexShader(),fragmentShader:`

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

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

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
		`,blending:0,depthTest:!1,depthWrite:!1})}function _getBlurShader(e,t,n){let i=new Float32Array(na),a=new V(0,1,0);return new ShaderMaterial({name:`SphericalGaussianBlur`,defines:{n:na,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:_getCommonVertexShader(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}function _getEquirectMaterial(){return new ShaderMaterial({name:`EquirectangularToCubeUV`,uniforms:{envMap:{value:null}},vertexShader:_getCommonVertexShader(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}function _getCubemapMaterial(){return new ShaderMaterial({name:`CubemapToCubeUV`,uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:_getCommonVertexShader(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function _getCommonVertexShader(){return`

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
	`}var WebGLCubeRenderTarget=class extends WebGLRenderTarget{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1};this.texture=new CubeTexture([n,n,n,n,n,n]),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new si(5,5,5),a=new ShaderMaterial({name:`CubemapFromEquirect`,uniforms:cloneUniforms(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});a.uniforms.tEquirect.value=t;let o=new Mesh(i,a),s=t.minFilter;return t.minFilter===1008&&(t.minFilter=F),new CubeCamera(1,10,this).update(e,o),t.minFilter=s,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){let a=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(a)}};function WebGLEnvironments(e){let t=new WeakMap,n=new WeakMap,i=null;function get(e,t=!1){return e==null?null:t?getPMREM(e):getCube(e)}function getCube(n){if(n&&n.isTexture){let i=n.mapping;if(i===303||i===304)if(t.has(n)){let e=t.get(n).texture;return mapTextureMapping(e,n.mapping)}else{let i=n.image;if(i&&i.height>0){let a=new WebGLCubeRenderTarget(i.height);return a.fromEquirectangularTexture(e,n),t.set(n,a),n.addEventListener(`dispose`,onCubemapDispose),mapTextureMapping(a.texture,n.mapping)}else return null}}return n}function getPMREM(t){if(t&&t.isTexture){let a=t.mapping,o=a===303||a===304,s=a===301||a===302;if(o||s){let a=n.get(t),c=a===void 0?0:a.texture.pmremVersion;if(t.isRenderTargetTexture&&t.pmremVersion!==c)return i===null&&(i=new PMREMGenerator(e)),a=o?i.fromEquirectangular(t,a):i.fromCubemap(t,a),a.texture.pmremVersion=t.pmremVersion,n.set(t,a),a.texture;if(a!==void 0)return a.texture;{let c=t.image;return o&&c&&c.height>0||s&&c&&isCubeTextureComplete(c)?(i===null&&(i=new PMREMGenerator(e)),a=o?i.fromEquirectangular(t):i.fromCubemap(t),a.texture.pmremVersion=t.pmremVersion,n.set(t,a),t.addEventListener(`dispose`,onPMREMDispose),a.texture):null}}}return t}function mapTextureMapping(e,t){return t===303?e.mapping=301:t===304&&(e.mapping=302),e}function isCubeTextureComplete(e){let t=0;for(let n=0;n<6;n++)e[n]!==void 0&&t++;return t===6}function onCubemapDispose(e){let n=e.target;n.removeEventListener(`dispose`,onCubemapDispose);let i=t.get(n);i!==void 0&&(t.delete(n),i.dispose())}function onPMREMDispose(e){let t=e.target;t.removeEventListener(`dispose`,onPMREMDispose);let i=n.get(t);i!==void 0&&(n.delete(t),i.dispose())}function dispose(){t=new WeakMap,n=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get,dispose}}function WebGLExtensions(e){let t={};function getExtension(n){if(t[n]!==void 0)return t[n];let i=e.getExtension(n);return t[n]=i,i}return{has:function(e){return getExtension(e)!==null},init:function(){getExtension(`EXT_color_buffer_float`),getExtension(`WEBGL_clip_cull_distance`),getExtension(`OES_texture_float_linear`),getExtension(`EXT_color_buffer_half_float`),getExtension(`WEBGL_multisampled_render_to_texture`),getExtension(`WEBGL_render_shared_exponent`)},get:function(e){let t=getExtension(e);return t===null&&warnOnce(`WebGLRenderer: `+e+` extension not supported.`),t}}}function WebGLGeometries(e,t,n,i){let a={},o=new WeakMap;function onGeometryDispose(e){let s=e.target;s.index!==null&&t.remove(s.index);for(let e in s.attributes)t.remove(s.attributes[e]);s.removeEventListener(`dispose`,onGeometryDispose),delete a[s.id];let c=o.get(s);c&&(t.remove(c),o.delete(s)),i.releaseStatesOfGeometry(s),s.isInstancedBufferGeometry===!0&&delete s._maxInstanceCount,n.memory.geometries--}function get(e,t){return a[t.id]===!0?t:(t.addEventListener(`dispose`,onGeometryDispose),a[t.id]=!0,n.memory.geometries++,t)}function update(n){let i=n.attributes;for(let n in i)t.update(i[n],e.ARRAY_BUFFER)}function updateWireframeAttribute(e){let n=[],i=e.index,a=e.attributes.position,s=0;if(a===void 0)return;if(i!==null){let e=i.array;s=i.version;for(let t=0,i=e.length;t<i;t+=3){let i=e[t+0],a=e[t+1],o=e[t+2];n.push(i,a,a,o,o,i)}}else{let e=a.array;s=a.version;for(let t=0,i=e.length/3-1;t<i;t+=3){let e=t+0,i=t+1,a=t+2;n.push(e,i,i,a,a,e)}}let c=new(a.count>=65535?Uint32BufferAttribute:Uint16BufferAttribute)(n,1);c.version=s;let l=o.get(e);l&&t.remove(l),o.set(e,c)}function getWireframeAttribute(e){let t=o.get(e);if(t){let n=e.index;n!==null&&t.version<n.version&&updateWireframeAttribute(e)}else updateWireframeAttribute(e);return o.get(e)}return{get,update,getWireframeAttribute}}function WebGLIndexedBufferRenderer(e,t,n){let i;function setMode(e){i=e}let a,o;function setIndex(e){a=e.type,o=e.bytesPerElement}function render(t,s){e.drawElements(i,s,a,t*o),n.update(s,i,1)}function renderInstances(t,s,c){c!==0&&(e.drawElementsInstanced(i,s,a,t*o,c),n.update(s,i,c))}function renderMultiDraw(e,o,s){if(s===0)return;t.get(`WEBGL_multi_draw`).multiDrawElementsWEBGL(i,o,0,a,e,0,s);let c=0;for(let e=0;e<s;e++)c+=o[e];n.update(c,i,1)}function renderMultiDrawInstances(e,s,c,l){if(c===0)return;let u=t.get(`WEBGL_multi_draw`);if(u===null)for(let t=0;t<e.length;t++)renderInstances(e[t]/o,s[t],l[t]);else{u.multiDrawElementsInstancedWEBGL(i,s,0,a,e,0,l,0,c);let t=0;for(let e=0;e<c;e++)t+=s[e]*l[e];n.update(t,i,1)}}this.setMode=setMode,this.setIndex=setIndex,this.render=render,this.renderInstances=renderInstances,this.renderMultiDraw=renderMultiDraw,this.renderMultiDrawInstances=renderMultiDrawInstances}function WebGLInfo(e){let t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function update(t,i,a){switch(n.calls++,i){case e.TRIANGLES:n.triangles+=t/3*a;break;case e.LINES:n.lines+=t/2*a;break;case e.LINE_STRIP:n.lines+=a*(t-1);break;case e.LINE_LOOP:n.lines+=a*t;break;case e.POINTS:n.points+=a*t;break;default:error(`WebGLInfo: Unknown draw mode:`,i);break}}function reset(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset,update}}function WebGLMorphtargets(e,t,n){let i=new WeakMap,a=new W;function update(o,s,c){let l=o.morphTargetInfluences,u=s.morphAttributes.position||s.morphAttributes.normal||s.morphAttributes.color,d=u===void 0?0:u.length,f=i.get(s);if(f===void 0||f.count!==d){f!==void 0&&f.texture.dispose();let e=s.morphAttributes.position!==void 0,n=s.morphAttributes.normal!==void 0,o=s.morphAttributes.color!==void 0,c=s.morphAttributes.position||[],l=s.morphAttributes.normal||[],u=s.morphAttributes.color||[],p=0;e===!0&&(p=1),n===!0&&(p=2),o===!0&&(p=3);let m=s.attributes.position.count*p,h=1;m>t.maxTextureSize&&(h=Math.ceil(m/t.maxTextureSize),m=t.maxTextureSize);let g=new Float32Array(m*h*4*d),_=new DataArrayTexture(g,m,h,d);_.type=ce,_.needsUpdate=!0;let y=p*4;for(let t=0;t<d;t++){let i=c[t],s=l[t],d=u[t],f=m*h*4*t;for(let t=0;t<i.count;t++){let c=t*y;e===!0&&(a.fromBufferAttribute(i,t),g[f+c+0]=a.x,g[f+c+1]=a.y,g[f+c+2]=a.z,g[f+c+3]=0),n===!0&&(a.fromBufferAttribute(s,t),g[f+c+4]=a.x,g[f+c+5]=a.y,g[f+c+6]=a.z,g[f+c+7]=0),o===!0&&(a.fromBufferAttribute(d,t),g[f+c+8]=a.x,g[f+c+9]=a.y,g[f+c+10]=a.z,g[f+c+11]=d.itemSize===4?a.w:1)}}f={count:d,texture:_,size:new B(m,h)},i.set(s,f);function disposeTexture(){_.dispose(),i.delete(s),s.removeEventListener(`dispose`,disposeTexture)}s.addEventListener(`dispose`,disposeTexture)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(e,`morphTexture`,o.morphTexture,n);else{let t=0;for(let e=0;e<l.length;e++)t+=l[e];let n=s.morphTargetsRelative?1:1-t;c.getUniforms().setValue(e,`morphTargetBaseInfluence`,n),c.getUniforms().setValue(e,`morphTargetInfluences`,l)}c.getUniforms().setValue(e,`morphTargetsTexture`,f.texture,n),c.getUniforms().setValue(e,`morphTargetsTextureSize`,f.size)}return{update}}function WebGLObjects(e,t,n,i,a){let o=new WeakMap;function update(i){let s=a.render.frame,c=i.geometry,l=t.get(i,c);if(o.get(l)!==s&&(t.update(l),o.set(l,s)),i.isInstancedMesh&&(i.hasEventListener(`dispose`,onInstancedMeshDispose)===!1&&i.addEventListener(`dispose`,onInstancedMeshDispose),o.get(i)!==s&&(n.update(i.instanceMatrix,e.ARRAY_BUFFER),i.instanceColor!==null&&n.update(i.instanceColor,e.ARRAY_BUFFER),o.set(i,s))),i.isSkinnedMesh){let e=i.skeleton;o.get(e)!==s&&(e.update(),o.set(e,s))}return l}function dispose(){o=new WeakMap}function onInstancedMeshDispose(e){let t=e.target;t.removeEventListener(`dispose`,onInstancedMeshDispose),i.releaseStatesOfObject(t),n.remove(t.instanceMatrix),t.instanceColor!==null&&n.remove(t.instanceColor)}return{update,dispose}}var da={1:`LINEAR_TONE_MAPPING`,2:`REINHARD_TONE_MAPPING`,3:`CINEON_TONE_MAPPING`,4:`ACES_FILMIC_TONE_MAPPING`,6:`AGX_TONE_MAPPING`,7:`NEUTRAL_TONE_MAPPING`,5:`CUSTOM_TONE_MAPPING`};function WebGLOutput(e,t,n,i,a){let o=new WebGLRenderTarget(t,n,{type:e,depthBuffer:i,stencilBuffer:a}),s=new WebGLRenderTarget(t,n,{type:le,depthBuffer:!1,stencilBuffer:!1}),c=new tr;c.setAttribute(`position`,new Float32BufferAttribute([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute(`uv`,new Float32BufferAttribute([0,2,0,0,2,0],2));let l=new RawShaderMaterial({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),u=new Mesh(c,l),d=new OrthographicCamera(-1,1,1,-1,0,1),f=null,p=null,m=!1,h,g=null,_=[],y=!1;this.setSize=function(e,t){o.setSize(e,t),s.setSize(e,t);for(let n=0;n<_.length;n++){let i=_[n];i.setSize&&i.setSize(e,t)}},this.setEffects=function(e){_=e,y=_.length>0&&_[0].isRenderPass===!0;let t=o.width,n=o.height;for(let e=0;e<_.length;e++){let i=_[e];i.setSize&&i.setSize(t,n)}},this.begin=function(e,t){if(m||e.toneMapping===0&&_.length===0)return!1;if(g=t,t!==null){let e=t.width,n=t.height;(o.width!==e||o.height!==n)&&this.setSize(e,n)}return y===!1&&e.setRenderTarget(o),h=e.toneMapping,e.toneMapping=0,!0},this.hasRenderPass=function(){return y},this.end=function(e,t){e.toneMapping=h,m=!0;let n=o,i=s;for(let a=0;a<_.length;a++){let o=_[a];if(o.enabled!==!1&&(o.render(e,i,n,t),o.needsSwap!==!1)){let e=n;n=i,i=e}}if(f!==e.outputColorSpace||p!==e.toneMapping){f=e.outputColorSpace,p=e.toneMapping,l.defines={},U.getTransfer(f)===`srgb`&&(l.defines.SRGB_TRANSFER=``);let t=da[p];t&&(l.defines[t]=``),l.needsUpdate=!0}l.uniforms.tDiffuse.value=n.texture,e.setRenderTarget(g),e.render(u,d),g=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){o.dispose(),s.dispose(),c.dispose(),l.dispose()}}var fa=new It,pa=new DepthTexture(1,1),ma=new DataArrayTexture,ha=new Data3DTexture,ga=new CubeTexture,_a=[],va=[],ya=new Float32Array(16),ba=new Float32Array(9),xa=new Float32Array(4);function flatten(e,t,n){let i=e[0];if(i<=0||i>0)return e;let a=t*n,o=_a[a];if(o===void 0&&(o=new Float32Array(a),_a[a]=o),t!==0){i.toArray(o,0);for(let i=1,a=0;i!==t;++i)a+=n,e[i].toArray(o,a)}return o}function arraysEqual(e,t){if(e.length!==t.length)return!1;for(let n=0,i=e.length;n<i;n++)if(e[n]!==t[n])return!1;return!0}function copyArray(e,t){for(let n=0,i=t.length;n<i;n++)e[n]=t[n]}function allocTexUnits(e,t){let n=va[t];n===void 0&&(n=new Int32Array(t),va[t]=n);for(let i=0;i!==t;++i)n[i]=e.allocateTextureUnit();return n}function setValueV1f(e,t){let n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function setValueV2f(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(arraysEqual(n,t))return;e.uniform2fv(this.addr,t),copyArray(n,t)}}function setValueV3f(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(arraysEqual(n,t))return;e.uniform3fv(this.addr,t),copyArray(n,t)}}function setValueV4f(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(arraysEqual(n,t))return;e.uniform4fv(this.addr,t),copyArray(n,t)}}function setValueM2(e,t){let n=this.cache,i=t.elements;if(i===void 0){if(arraysEqual(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),copyArray(n,t)}else{if(arraysEqual(n,i))return;xa.set(i),e.uniformMatrix2fv(this.addr,!1,xa),copyArray(n,i)}}function setValueM3(e,t){let n=this.cache,i=t.elements;if(i===void 0){if(arraysEqual(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),copyArray(n,t)}else{if(arraysEqual(n,i))return;ba.set(i),e.uniformMatrix3fv(this.addr,!1,ba),copyArray(n,i)}}function setValueM4(e,t){let n=this.cache,i=t.elements;if(i===void 0){if(arraysEqual(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),copyArray(n,t)}else{if(arraysEqual(n,i))return;ya.set(i),e.uniformMatrix4fv(this.addr,!1,ya),copyArray(n,i)}}function setValueV1i(e,t){let n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function setValueV2i(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(arraysEqual(n,t))return;e.uniform2iv(this.addr,t),copyArray(n,t)}}function setValueV3i(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(arraysEqual(n,t))return;e.uniform3iv(this.addr,t),copyArray(n,t)}}function setValueV4i(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(arraysEqual(n,t))return;e.uniform4iv(this.addr,t),copyArray(n,t)}}function setValueV1ui(e,t){let n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function setValueV2ui(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(arraysEqual(n,t))return;e.uniform2uiv(this.addr,t),copyArray(n,t)}}function setValueV3ui(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(arraysEqual(n,t))return;e.uniform3uiv(this.addr,t),copyArray(n,t)}}function setValueV4ui(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(arraysEqual(n,t))return;e.uniform4uiv(this.addr,t),copyArray(n,t)}}function setValueT1(e,t,n){let i=this.cache,a=n.allocateTextureUnit();i[0]!==a&&(e.uniform1i(this.addr,a),i[0]=a);let o;this.type===e.SAMPLER_2D_SHADOW?(pa.compareFunction=n.isReversedDepthBuffer()?518:515,o=pa):o=fa,n.setTexture2D(t||o,a)}function setValueT3D1(e,t,n){let i=this.cache,a=n.allocateTextureUnit();i[0]!==a&&(e.uniform1i(this.addr,a),i[0]=a),n.setTexture3D(t||ha,a)}function setValueT6(e,t,n){let i=this.cache,a=n.allocateTextureUnit();i[0]!==a&&(e.uniform1i(this.addr,a),i[0]=a),n.setTextureCube(t||ga,a)}function setValueT2DArray1(e,t,n){let i=this.cache,a=n.allocateTextureUnit();i[0]!==a&&(e.uniform1i(this.addr,a),i[0]=a),n.setTexture2DArray(t||ma,a)}function getSingularSetter(e){switch(e){case 5126:return setValueV1f;case 35664:return setValueV2f;case 35665:return setValueV3f;case 35666:return setValueV4f;case 35674:return setValueM2;case 35675:return setValueM3;case 35676:return setValueM4;case 5124:case 35670:return setValueV1i;case 35667:case 35671:return setValueV2i;case 35668:case 35672:return setValueV3i;case 35669:case 35673:return setValueV4i;case 5125:return setValueV1ui;case 36294:return setValueV2ui;case 36295:return setValueV3ui;case 36296:return setValueV4ui;case 35678:case 36198:case 36298:case 36306:case 35682:return setValueT1;case 35679:case 36299:case 36307:return setValueT3D1;case 35680:case 36300:case 36308:case 36293:return setValueT6;case 36289:case 36303:case 36311:case 36292:return setValueT2DArray1}}function setValueV1fArray(e,t){e.uniform1fv(this.addr,t)}function setValueV2fArray(e,t){let n=flatten(t,this.size,2);e.uniform2fv(this.addr,n)}function setValueV3fArray(e,t){let n=flatten(t,this.size,3);e.uniform3fv(this.addr,n)}function setValueV4fArray(e,t){let n=flatten(t,this.size,4);e.uniform4fv(this.addr,n)}function setValueM2Array(e,t){let n=flatten(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function setValueM3Array(e,t){let n=flatten(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function setValueM4Array(e,t){let n=flatten(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function setValueV1iArray(e,t){e.uniform1iv(this.addr,t)}function setValueV2iArray(e,t){e.uniform2iv(this.addr,t)}function setValueV3iArray(e,t){e.uniform3iv(this.addr,t)}function setValueV4iArray(e,t){e.uniform4iv(this.addr,t)}function setValueV1uiArray(e,t){e.uniform1uiv(this.addr,t)}function setValueV2uiArray(e,t){e.uniform2uiv(this.addr,t)}function setValueV3uiArray(e,t){e.uniform3uiv(this.addr,t)}function setValueV4uiArray(e,t){e.uniform4uiv(this.addr,t)}function setValueT1Array(e,t,n){let i=this.cache,a=t.length,o=allocTexUnits(n,a);arraysEqual(i,o)||(e.uniform1iv(this.addr,o),copyArray(i,o));let s;s=this.type===e.SAMPLER_2D_SHADOW?pa:fa;for(let e=0;e!==a;++e)n.setTexture2D(t[e]||s,o[e])}function setValueT3DArray(e,t,n){let i=this.cache,a=t.length,o=allocTexUnits(n,a);arraysEqual(i,o)||(e.uniform1iv(this.addr,o),copyArray(i,o));for(let e=0;e!==a;++e)n.setTexture3D(t[e]||ha,o[e])}function setValueT6Array(e,t,n){let i=this.cache,a=t.length,o=allocTexUnits(n,a);arraysEqual(i,o)||(e.uniform1iv(this.addr,o),copyArray(i,o));for(let e=0;e!==a;++e)n.setTextureCube(t[e]||ga,o[e])}function setValueT2DArrayArray(e,t,n){let i=this.cache,a=t.length,o=allocTexUnits(n,a);arraysEqual(i,o)||(e.uniform1iv(this.addr,o),copyArray(i,o));for(let e=0;e!==a;++e)n.setTexture2DArray(t[e]||ma,o[e])}function getPureArraySetter(e){switch(e){case 5126:return setValueV1fArray;case 35664:return setValueV2fArray;case 35665:return setValueV3fArray;case 35666:return setValueV4fArray;case 35674:return setValueM2Array;case 35675:return setValueM3Array;case 35676:return setValueM4Array;case 5124:case 35670:return setValueV1iArray;case 35667:case 35671:return setValueV2iArray;case 35668:case 35672:return setValueV3iArray;case 35669:case 35673:return setValueV4iArray;case 5125:return setValueV1uiArray;case 36294:return setValueV2uiArray;case 36295:return setValueV3uiArray;case 36296:return setValueV4uiArray;case 35678:case 36198:case 36298:case 36306:case 35682:return setValueT1Array;case 35679:case 36299:case 36307:return setValueT3DArray;case 35680:case 36300:case 36308:case 36293:return setValueT6Array;case 36289:case 36303:case 36311:case 36292:return setValueT2DArrayArray}}var SingleUniform=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=getSingularSetter(t.type)}},PureArrayUniform=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=getPureArraySetter(t.type)}},StructuredUniform=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let i=this.seq;for(let a=0,o=i.length;a!==o;++a){let o=i[a];o.setValue(e,t[o.id],n)}}},Sa=/(\w+)(\])?(\[|\.)?/g;function addUniform(e,t){e.seq.push(t),e.map[t.id]=t}function parseUniform(e,t,n){let i=e.name,a=i.length;for(Sa.lastIndex=0;;){let o=Sa.exec(i),s=Sa.lastIndex,c=o[1],l=o[2]===`]`,u=o[3];if(l&&(c|=0),u===void 0||u===`[`&&s+2===a){addUniform(n,u===void 0?new SingleUniform(c,e,t):new PureArrayUniform(c,e,t));break}else{let e=n.map[c];e===void 0&&(e=new StructuredUniform(c),addUniform(n,e)),n=e}}}var WebGLUniforms=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){let n=e.getActiveUniform(t,i);parseUniform(n,e.getUniformLocation(t,n.name),this)}let i=[],a=[];for(let t of this.seq)t.type===e.SAMPLER_2D_SHADOW||t.type===e.SAMPLER_CUBE_SHADOW||t.type===e.SAMPLER_2D_ARRAY_SHADOW?i.push(t):a.push(t);i.length>0&&(this.seq=i.concat(a))}setValue(e,t,n,i){let a=this.map[t];a!==void 0&&a.setValue(e,n,i)}setOptional(e,t,n){let i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let a=0,o=t.length;a!==o;++a){let o=t[a],s=n[o.id];s.needsUpdate!==!1&&o.setValue(e,s.value,i)}}static seqWithValue(e,t){let n=[];for(let i=0,a=e.length;i!==a;++i){let a=e[i];a.id in t&&n.push(a)}return n}};function WebGLShader(e,t,n){let i=e.createShader(t);return e.shaderSource(i,n),e.compileShader(i),i}var Ca=37297,wa=0;function handleSource(e,t){let n=e.split(`
`),i=[],a=Math.max(t-6,0),o=Math.min(t+6,n.length);for(let e=a;e<o;e++){let a=e+1;i.push(`${a===t?`>`:` `} ${a}: ${n[e]}`)}return i.join(`
`)}var Ta=new H;function getEncodingComponents(e){U._getMatrix(Ta,U.workingColorSpace,e);let t=`mat3( ${Ta.elements.map(e=>e.toFixed(4))} )`;switch(U.getTransfer(e)){case mt:return[t,`LinearTransferOETF`];case ht:return[t,`sRGBTransferOETF`];default:return warn(`WebGLProgram: Unsupported color space: `,e),[t,`LinearTransferOETF`]}}function getShaderErrors(e,t,n){let i=e.getShaderParameter(t,e.COMPILE_STATUS),a=(e.getShaderInfoLog(t)||``).trim();if(i&&a===``)return``;let o=/ERROR: 0:(\d+)/.exec(a);if(o){let i=parseInt(o[1]);return n.toUpperCase()+`

`+a+`

`+handleSource(e.getShaderSource(t),i)}else return a}function getTexelEncodingFunction(e,t){let n=getEncodingComponents(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,`}`].join(`
`)}var Ea={1:`Linear`,2:`Reinhard`,3:`Cineon`,4:`ACESFilmic`,6:`AgX`,7:`Neutral`,5:`Custom`};function getToneMappingFunction(e,t){let n=Ea[t];return n===void 0?(warn(`WebGLProgram: Unsupported toneMapping:`,t),`vec3 `+e+`( vec3 color ) { return LinearToneMapping( color ); }`):`vec3 `+e+`( vec3 color ) { return `+n+`ToneMapping( color ); }`}var Da=new V;function getLuminanceFunction(){return U.getLuminanceCoefficients(Da),[`float luminance( const in vec3 rgb ) {`,`	const vec3 weights = vec3( ${Da.x.toFixed(4)}, ${Da.y.toFixed(4)}, ${Da.z.toFixed(4)} );`,`	return dot( weights, rgb );`,`}`].join(`
`)}function generateVertexExtensions(e){return[e.extensionClipCullDistance?`#extension GL_ANGLE_clip_cull_distance : require`:``,e.extensionMultiDraw?`#extension GL_ANGLE_multi_draw : require`:``].filter(filterEmptyLine).join(`
`)}function generateDefines(e){let t=[];for(let n in e){let i=e[n];i!==!1&&t.push(`#define `+n+` `+i)}return t.join(`
`)}function fetchAttributeLocations(e,t){let n={},i=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let a=0;a<i;a++){let i=e.getActiveAttrib(t,a),o=i.name,s=1;i.type===e.FLOAT_MAT2&&(s=2),i.type===e.FLOAT_MAT3&&(s=3),i.type===e.FLOAT_MAT4&&(s=4),n[o]={type:i.type,location:e.getAttribLocation(t,o),locationSize:s}}return n}function filterEmptyLine(e){return e!==``}function replaceLightNums(e,t){let n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function replaceClippingPlaneNums(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Oa=/^[ \t]*#include +<([\w\d./]+)>/gm;function resolveIncludes(e){return e.replace(Oa,includeReplacer)}var ka=new Map;function includeReplacer(e,t){let n=q[t];if(n===void 0){let e=ka.get(t);if(e!==void 0)n=q[e],warn(`WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.`,t,e);else throw Error(`Can not resolve #include <`+t+`>`)}return resolveIncludes(n)}var Aa=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function unrollLoops(e){return e.replace(Aa,loopReplacer)}function loopReplacer(e,t,n,i){let a=``;for(let e=parseInt(t);e<parseInt(n);e++)a+=i.replace(/\[\s*i\s*\]/g,`[ `+e+` ]`).replace(/UNROLLED_LOOP_INDEX/g,e);return a}function generatePrecision(e){let t=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision===`highp`?t+=`
#define HIGH_PRECISION`:e.precision===`mediump`?t+=`
#define MEDIUM_PRECISION`:e.precision===`lowp`&&(t+=`
#define LOW_PRECISION`),t}var ja={1:`SHADOWMAP_TYPE_PCF`,3:`SHADOWMAP_TYPE_VSM`};function generateShadowMapTypeDefine(e){return ja[e.shadowMapType]||`SHADOWMAP_TYPE_BASIC`}var Ma={301:`ENVMAP_TYPE_CUBE`,302:`ENVMAP_TYPE_CUBE`,306:`ENVMAP_TYPE_CUBE_UV`};function generateEnvMapTypeDefine(e){return e.envMap===!1?`ENVMAP_TYPE_CUBE`:Ma[e.envMapMode]||`ENVMAP_TYPE_CUBE`}var Na={302:`ENVMAP_MODE_REFRACTION`};function generateEnvMapModeDefine(e){return e.envMap===!1?`ENVMAP_MODE_REFLECTION`:Na[e.envMapMode]||`ENVMAP_MODE_REFLECTION`}var Pa={0:`ENVMAP_BLENDING_MULTIPLY`,1:`ENVMAP_BLENDING_MIX`,2:`ENVMAP_BLENDING_ADD`};function generateEnvMapBlendingDefine(e){return e.envMap===!1?`ENVMAP_BLENDING_NONE`:Pa[e.combine]||`ENVMAP_BLENDING_NONE`}function generateCubeUVSize(e){let t=e.envMapCubeUVHeight;if(t===null)return null;let n=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(2**n,112)),texelHeight:i,maxMip:n}}function WebGLProgram(e,t,n,i){let a=e.getContext(),o=n.defines,s=n.vertexShader,c=n.fragmentShader,l=generateShadowMapTypeDefine(n),u=generateEnvMapTypeDefine(n),d=generateEnvMapModeDefine(n),f=generateEnvMapBlendingDefine(n),p=generateCubeUVSize(n),m=generateVertexExtensions(n),h=generateDefines(o),g=a.createProgram(),_,y,b=n.glslVersion?`#version `+n.glslVersion+`
`:``;n.isRawShaderMaterial?(_=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,h].filter(filterEmptyLine).join(`
`),_.length>0&&(_+=`
`),y=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,h].filter(filterEmptyLine).join(`
`),y.length>0&&(y+=`
`)):(_=[generatePrecision(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,h,n.extensionClipCullDistance?`#define USE_CLIP_DISTANCE`:``,n.batching?`#define USE_BATCHING`:``,n.batchingColor?`#define USE_BATCHING_COLOR`:``,n.instancing?`#define USE_INSTANCING`:``,n.instancingColor?`#define USE_INSTANCING_COLOR`:``,n.instancingMorph?`#define USE_INSTANCING_MORPH`:``,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.map?`#define USE_MAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+d:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.displacementMap?`#define USE_DISPLACEMENTMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.mapUv?`#define MAP_UV `+n.mapUv:``,n.alphaMapUv?`#define ALPHAMAP_UV `+n.alphaMapUv:``,n.lightMapUv?`#define LIGHTMAP_UV `+n.lightMapUv:``,n.aoMapUv?`#define AOMAP_UV `+n.aoMapUv:``,n.emissiveMapUv?`#define EMISSIVEMAP_UV `+n.emissiveMapUv:``,n.bumpMapUv?`#define BUMPMAP_UV `+n.bumpMapUv:``,n.normalMapUv?`#define NORMALMAP_UV `+n.normalMapUv:``,n.displacementMapUv?`#define DISPLACEMENTMAP_UV `+n.displacementMapUv:``,n.metalnessMapUv?`#define METALNESSMAP_UV `+n.metalnessMapUv:``,n.roughnessMapUv?`#define ROUGHNESSMAP_UV `+n.roughnessMapUv:``,n.anisotropyMapUv?`#define ANISOTROPYMAP_UV `+n.anisotropyMapUv:``,n.clearcoatMapUv?`#define CLEARCOATMAP_UV `+n.clearcoatMapUv:``,n.clearcoatNormalMapUv?`#define CLEARCOAT_NORMALMAP_UV `+n.clearcoatNormalMapUv:``,n.clearcoatRoughnessMapUv?`#define CLEARCOAT_ROUGHNESSMAP_UV `+n.clearcoatRoughnessMapUv:``,n.iridescenceMapUv?`#define IRIDESCENCEMAP_UV `+n.iridescenceMapUv:``,n.iridescenceThicknessMapUv?`#define IRIDESCENCE_THICKNESSMAP_UV `+n.iridescenceThicknessMapUv:``,n.sheenColorMapUv?`#define SHEEN_COLORMAP_UV `+n.sheenColorMapUv:``,n.sheenRoughnessMapUv?`#define SHEEN_ROUGHNESSMAP_UV `+n.sheenRoughnessMapUv:``,n.specularMapUv?`#define SPECULARMAP_UV `+n.specularMapUv:``,n.specularColorMapUv?`#define SPECULAR_COLORMAP_UV `+n.specularColorMapUv:``,n.specularIntensityMapUv?`#define SPECULAR_INTENSITYMAP_UV `+n.specularIntensityMapUv:``,n.transmissionMapUv?`#define TRANSMISSIONMAP_UV `+n.transmissionMapUv:``,n.thicknessMapUv?`#define THICKNESSMAP_UV `+n.thicknessMapUv:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexColors?`#define USE_COLOR`:``,n.vertexAlphas?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.flatShading?`#define FLAT_SHADED`:``,n.skinning?`#define USE_SKINNING`:``,n.morphTargets?`#define USE_MORPHTARGETS`:``,n.morphNormals&&n.flatShading===!1?`#define USE_MORPHNORMALS`:``,n.morphColors?`#define USE_MORPHCOLORS`:``,n.morphTargetsCount>0?`#define MORPHTARGETS_TEXTURE_STRIDE `+n.morphTextureStride:``,n.morphTargetsCount>0?`#define MORPHTARGETS_COUNT `+n.morphTargetsCount:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+l:``,n.sizeAttenuation?`#define USE_SIZEATTENUATION`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 modelMatrix;`,`uniform mat4 modelViewMatrix;`,`uniform mat4 projectionMatrix;`,`uniform mat4 viewMatrix;`,`uniform mat3 normalMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,`#ifdef USE_INSTANCING`,`	attribute mat4 instanceMatrix;`,`#endif`,`#ifdef USE_INSTANCING_COLOR`,`	attribute vec3 instanceColor;`,`#endif`,`#ifdef USE_INSTANCING_MORPH`,`	uniform sampler2D morphTexture;`,`#endif`,`attribute vec3 position;`,`attribute vec3 normal;`,`attribute vec2 uv;`,`#ifdef USE_UV1`,`	attribute vec2 uv1;`,`#endif`,`#ifdef USE_UV2`,`	attribute vec2 uv2;`,`#endif`,`#ifdef USE_UV3`,`	attribute vec2 uv3;`,`#endif`,`#ifdef USE_TANGENT`,`	attribute vec4 tangent;`,`#endif`,`#if defined( USE_COLOR_ALPHA )`,`	attribute vec4 color;`,`#elif defined( USE_COLOR )`,`	attribute vec3 color;`,`#endif`,`#ifdef USE_SKINNING`,`	attribute vec4 skinIndex;`,`	attribute vec4 skinWeight;`,`#endif`,`
`].filter(filterEmptyLine).join(`
`),y=[generatePrecision(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,h,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.alphaToCoverage?`#define ALPHA_TO_COVERAGE`:``,n.map?`#define USE_MAP`:``,n.matcap?`#define USE_MATCAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+u:``,n.envMap?`#define `+d:``,n.envMap?`#define `+f:``,p?`#define CUBEUV_TEXEL_WIDTH `+p.texelWidth:``,p?`#define CUBEUV_TEXEL_HEIGHT `+p.texelHeight:``,p?`#define CUBEUV_MAX_MIP `+p.maxMip+`.0`:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoat?`#define USE_CLEARCOAT`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.dispersion?`#define USE_DISPERSION`:``,n.iridescence?`#define USE_IRIDESCENCE`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaTest?`#define USE_ALPHATEST`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.sheen?`#define USE_SHEEN`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexColors||n.instancingColor?`#define USE_COLOR`:``,n.vertexAlphas||n.batchingColor?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.gradientMap?`#define USE_GRADIENTMAP`:``,n.flatShading?`#define FLAT_SHADED`:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+l:``,n.premultipliedAlpha?`#define PREMULTIPLIED_ALPHA`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.decodeVideoTexture?`#define DECODE_VIDEO_TEXTURE`:``,n.decodeVideoTextureEmissive?`#define DECODE_VIDEO_TEXTURE_EMISSIVE`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 viewMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,n.toneMapping===0?``:`#define TONE_MAPPING`,n.toneMapping===0?``:q.tonemapping_pars_fragment,n.toneMapping===0?``:getToneMappingFunction(`toneMapping`,n.toneMapping),n.dithering?`#define DITHERING`:``,n.opaque?`#define OPAQUE`:``,q.colorspace_pars_fragment,getTexelEncodingFunction(`linearToOutputTexel`,n.outputColorSpace),getLuminanceFunction(),n.useDepthPacking?`#define DEPTH_PACKING `+n.depthPacking:``,`
`].filter(filterEmptyLine).join(`
`)),s=resolveIncludes(s),s=replaceLightNums(s,n),s=replaceClippingPlaneNums(s,n),c=resolveIncludes(c),c=replaceLightNums(c,n),c=replaceClippingPlaneNums(c,n),s=unrollLoops(s),c=unrollLoops(c),n.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,_=[m,`#define attribute in`,`#define varying out`,`#define texture2D texture`].join(`
`)+`
`+_,y=[`#define varying in`,n.glslVersion===`300 es`?``:`layout(location = 0) out highp vec4 pc_fragColor;`,n.glslVersion===`300 es`?``:`#define gl_FragColor pc_fragColor`,`#define gl_FragDepthEXT gl_FragDepth`,`#define texture2D texture`,`#define textureCube texture`,`#define texture2DProj textureProj`,`#define texture2DLodEXT textureLod`,`#define texture2DProjLodEXT textureProjLod`,`#define textureCubeLodEXT textureLod`,`#define texture2DGradEXT textureGrad`,`#define texture2DProjGradEXT textureProjGrad`,`#define textureCubeGradEXT textureGrad`].join(`
`)+`
`+y);let x=b+_+s,S=b+y+c,C=WebGLShader(a,a.VERTEX_SHADER,x),w=WebGLShader(a,a.FRAGMENT_SHADER,S);a.attachShader(g,C),a.attachShader(g,w),n.index0AttributeName===void 0?n.morphTargets===!0&&a.bindAttribLocation(g,0,`position`):a.bindAttribLocation(g,0,n.index0AttributeName),a.linkProgram(g);function onFirstUse(t){if(e.debug.checkShaderErrors){let n=a.getProgramInfoLog(g)||``,i=a.getShaderInfoLog(C)||``,o=a.getShaderInfoLog(w)||``,s=n.trim(),c=i.trim(),l=o.trim(),u=!0,d=!0;if(a.getProgramParameter(g,a.LINK_STATUS)===!1)if(u=!1,typeof e.debug.onShaderError==`function`)e.debug.onShaderError(a,g,C,w);else{let e=getShaderErrors(a,C,`vertex`),n=getShaderErrors(a,w,`fragment`);error(`THREE.WebGLProgram: Shader Error `+a.getError()+` - VALIDATE_STATUS `+a.getProgramParameter(g,a.VALIDATE_STATUS)+`

Material Name: `+t.name+`
Material Type: `+t.type+`

Program Info Log: `+s+`
`+e+`
`+n)}else s===``?(c===``||l===``)&&(d=!1):warn(`WebGLProgram: Program Info Log:`,s);d&&(t.diagnostics={runnable:u,programLog:s,vertexShader:{log:c,prefix:_},fragmentShader:{log:l,prefix:y}})}a.deleteShader(C),a.deleteShader(w),T=new WebGLUniforms(a,g),E=fetchAttributeLocations(a,g)}let T;this.getUniforms=function(){return T===void 0&&onFirstUse(this),T};let E;this.getAttributes=function(){return E===void 0&&onFirstUse(this),E};let D=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return D===!1&&(D=a.getProgramParameter(g,Ca)),D},this.destroy=function(){i.releaseStatesOfProgram(this),a.deleteProgram(g),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=wa++,this.cacheKey=t,this.usedTimes=1,this.program=g,this.vertexShader=C,this.fragmentShader=w,this}var Fa=0,WebGLShaderCache=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),a=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(a)===!1&&(o.add(a),a.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let e of t)e.usedTimes--,e.usedTimes===0&&this.shaderCache.delete(e.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new WebGLShaderStage(e),t.set(e,n)),n}},WebGLShaderStage=class{constructor(e){this.id=Fa++,this.code=e,this.usedTimes=0}};function WebGLPrograms(e,t,n,i,a,o){let s=new Layers,c=new WebGLShaderCache,l=new Set,u=[],d=new Map,f=i.logarithmicDepthBuffer,p=i.precision,m={MeshDepthMaterial:`depth`,MeshDistanceMaterial:`distance`,MeshNormalMaterial:`normal`,MeshBasicMaterial:`basic`,MeshLambertMaterial:`lambert`,MeshPhongMaterial:`phong`,MeshToonMaterial:`toon`,MeshStandardMaterial:`physical`,MeshPhysicalMaterial:`physical`,MeshMatcapMaterial:`matcap`,LineBasicMaterial:`basic`,LineDashedMaterial:`dashed`,PointsMaterial:`points`,ShadowMaterial:`shadow`,SpriteMaterial:`sprite`};function getChannel(e){return l.add(e),e===0?`uv`:`uv${e}`}function getParameters(a,s,u,d,h){let g=d.fog,_=h.geometry,y=a.isMeshStandardMaterial||a.isMeshLambertMaterial||a.isMeshPhongMaterial?d.environment:null,b=a.isMeshStandardMaterial||a.isMeshLambertMaterial&&!a.envMap||a.isMeshPhongMaterial&&!a.envMap,x=t.get(a.envMap||y,b),S=x&&x.mapping===306?x.image.height:null,C=m[a.type];a.precision!==null&&(p=i.getMaxPrecision(a.precision),p!==a.precision&&warn(`WebGLProgram.getParameters:`,a.precision,`not supported, using`,p,`instead.`));let w=_.morphAttributes.position||_.morphAttributes.normal||_.morphAttributes.color,T=w===void 0?0:w.length,E=0;_.morphAttributes.position!==void 0&&(E=1),_.morphAttributes.normal!==void 0&&(E=2),_.morphAttributes.color!==void 0&&(E=3);let D,O,k,A;if(C){let e=Xi[C];D=e.vertexShader,O=e.fragmentShader}else D=a.vertexShader,O=a.fragmentShader,c.update(a),k=c.getVertexShaderID(a),A=c.getFragmentShaderID(a);let j=e.getRenderTarget(),M=e.state.buffers.depth.getReversed(),N=h.isInstancedMesh===!0,P=h.isBatchedMesh===!0,F=!!a.map,ee=!!a.matcap,te=!!x,ne=!!a.aoMap,re=!!a.lightMap,ie=!!a.bumpMap,ae=!!a.normalMap,oe=!!a.displacementMap,se=!!a.emissiveMap,ce=!!a.metalnessMap,le=!!a.roughnessMap,ue=a.anisotropy>0,de=a.clearcoat>0,fe=a.dispersion>0,pe=a.iridescence>0,me=a.sheen>0,he=a.transmission>0,ge=ue&&!!a.anisotropyMap,_e=de&&!!a.clearcoatMap,ve=de&&!!a.clearcoatNormalMap,ye=de&&!!a.clearcoatRoughnessMap,be=pe&&!!a.iridescenceMap,xe=pe&&!!a.iridescenceThicknessMap,Se=me&&!!a.sheenColorMap,Ce=me&&!!a.sheenRoughnessMap,we=!!a.specularMap,Te=!!a.specularColorMap,Ee=!!a.specularIntensityMap,De=he&&!!a.transmissionMap,Oe=he&&!!a.thicknessMap,I=!!a.gradientMap,ke=!!a.alphaMap,Ae=a.alphaTest>0,L=!!a.alphaHash,je=!!a.extensions,R=0;a.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(R=e.toneMapping);let z={shaderID:C,shaderType:a.type,shaderName:a.name,vertexShader:D,fragmentShader:O,defines:a.defines,customVertexShaderID:k,customFragmentShaderID:A,isRawShaderMaterial:a.isRawShaderMaterial===!0,glslVersion:a.glslVersion,precision:p,batching:P,batchingColor:P&&h._colorsTexture!==null,instancing:N,instancingColor:N&&h.instanceColor!==null,instancingMorph:N&&h.morphTexture!==null,outputColorSpace:j===null?e.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:pt,alphaToCoverage:!!a.alphaToCoverage,map:F,matcap:ee,envMap:te,envMapMode:te&&x.mapping,envMapCubeUVHeight:S,aoMap:ne,lightMap:re,bumpMap:ie,normalMap:ae,displacementMap:oe,emissiveMap:se,normalMapObjectSpace:ae&&a.normalMapType===1,normalMapTangentSpace:ae&&a.normalMapType===0,metalnessMap:ce,roughnessMap:le,anisotropy:ue,anisotropyMap:ge,clearcoat:de,clearcoatMap:_e,clearcoatNormalMap:ve,clearcoatRoughnessMap:ye,dispersion:fe,iridescence:pe,iridescenceMap:be,iridescenceThicknessMap:xe,sheen:me,sheenColorMap:Se,sheenRoughnessMap:Ce,specularMap:we,specularColorMap:Te,specularIntensityMap:Ee,transmission:he,transmissionMap:De,thicknessMap:Oe,gradientMap:I,opaque:a.transparent===!1&&a.blending===1&&a.alphaToCoverage===!1,alphaMap:ke,alphaTest:Ae,alphaHash:L,combine:a.combine,mapUv:F&&getChannel(a.map.channel),aoMapUv:ne&&getChannel(a.aoMap.channel),lightMapUv:re&&getChannel(a.lightMap.channel),bumpMapUv:ie&&getChannel(a.bumpMap.channel),normalMapUv:ae&&getChannel(a.normalMap.channel),displacementMapUv:oe&&getChannel(a.displacementMap.channel),emissiveMapUv:se&&getChannel(a.emissiveMap.channel),metalnessMapUv:ce&&getChannel(a.metalnessMap.channel),roughnessMapUv:le&&getChannel(a.roughnessMap.channel),anisotropyMapUv:ge&&getChannel(a.anisotropyMap.channel),clearcoatMapUv:_e&&getChannel(a.clearcoatMap.channel),clearcoatNormalMapUv:ve&&getChannel(a.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ye&&getChannel(a.clearcoatRoughnessMap.channel),iridescenceMapUv:be&&getChannel(a.iridescenceMap.channel),iridescenceThicknessMapUv:xe&&getChannel(a.iridescenceThicknessMap.channel),sheenColorMapUv:Se&&getChannel(a.sheenColorMap.channel),sheenRoughnessMapUv:Ce&&getChannel(a.sheenRoughnessMap.channel),specularMapUv:we&&getChannel(a.specularMap.channel),specularColorMapUv:Te&&getChannel(a.specularColorMap.channel),specularIntensityMapUv:Ee&&getChannel(a.specularIntensityMap.channel),transmissionMapUv:De&&getChannel(a.transmissionMap.channel),thicknessMapUv:Oe&&getChannel(a.thicknessMap.channel),alphaMapUv:ke&&getChannel(a.alphaMap.channel),vertexTangents:!!_.attributes.tangent&&(ae||ue),vertexColors:a.vertexColors,vertexAlphas:a.vertexColors===!0&&!!_.attributes.color&&_.attributes.color.itemSize===4,pointsUvs:h.isPoints===!0&&!!_.attributes.uv&&(F||ke),fog:!!g,useFog:a.fog===!0,fogExp2:!!g&&g.isFogExp2,flatShading:a.wireframe===!1&&(a.flatShading===!0||_.attributes.normal===void 0&&ae===!1&&(a.isMeshLambertMaterial||a.isMeshPhongMaterial||a.isMeshStandardMaterial||a.isMeshPhysicalMaterial)),sizeAttenuation:a.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:M,skinning:h.isSkinnedMesh===!0,morphTargets:_.morphAttributes.position!==void 0,morphNormals:_.morphAttributes.normal!==void 0,morphColors:_.morphAttributes.color!==void 0,morphTargetsCount:T,morphTextureStride:E,numDirLights:s.directional.length,numPointLights:s.point.length,numSpotLights:s.spot.length,numSpotLightMaps:s.spotLightMap.length,numRectAreaLights:s.rectArea.length,numHemiLights:s.hemi.length,numDirLightShadows:s.directionalShadowMap.length,numPointLightShadows:s.pointShadowMap.length,numSpotLightShadows:s.spotShadowMap.length,numSpotLightShadowsWithMaps:s.numSpotLightShadowsWithMaps,numLightProbes:s.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:a.dithering,shadowMapEnabled:e.shadowMap.enabled&&u.length>0,shadowMapType:e.shadowMap.type,toneMapping:R,decodeVideoTexture:F&&a.map.isVideoTexture===!0&&U.getTransfer(a.map.colorSpace)===`srgb`,decodeVideoTextureEmissive:se&&a.emissiveMap.isVideoTexture===!0&&U.getTransfer(a.emissiveMap.colorSpace)===`srgb`,premultipliedAlpha:a.premultipliedAlpha,doubleSided:a.side===2,flipSided:a.side===1,useDepthPacking:a.depthPacking>=0,depthPacking:a.depthPacking||0,index0AttributeName:a.index0AttributeName,extensionClipCullDistance:je&&a.extensions.clipCullDistance===!0&&n.has(`WEBGL_clip_cull_distance`),extensionMultiDraw:(je&&a.extensions.multiDraw===!0||P)&&n.has(`WEBGL_multi_draw`),rendererExtensionParallelShaderCompile:n.has(`KHR_parallel_shader_compile`),customProgramCacheKey:a.customProgramCacheKey()};return z.vertexUv1s=l.has(1),z.vertexUv2s=l.has(2),z.vertexUv3s=l.has(3),l.clear(),z}function getProgramCacheKey(t){let n=[];if(t.shaderID?n.push(t.shaderID):(n.push(t.customVertexShaderID),n.push(t.customFragmentShaderID)),t.defines!==void 0)for(let e in t.defines)n.push(e),n.push(t.defines[e]);return t.isRawShaderMaterial===!1&&(getProgramCacheKeyParameters(n,t),getProgramCacheKeyBooleans(n,t),n.push(e.outputColorSpace)),n.push(t.customProgramCacheKey),n.join()}function getProgramCacheKeyParameters(e,t){e.push(t.precision),e.push(t.outputColorSpace),e.push(t.envMapMode),e.push(t.envMapCubeUVHeight),e.push(t.mapUv),e.push(t.alphaMapUv),e.push(t.lightMapUv),e.push(t.aoMapUv),e.push(t.bumpMapUv),e.push(t.normalMapUv),e.push(t.displacementMapUv),e.push(t.emissiveMapUv),e.push(t.metalnessMapUv),e.push(t.roughnessMapUv),e.push(t.anisotropyMapUv),e.push(t.clearcoatMapUv),e.push(t.clearcoatNormalMapUv),e.push(t.clearcoatRoughnessMapUv),e.push(t.iridescenceMapUv),e.push(t.iridescenceThicknessMapUv),e.push(t.sheenColorMapUv),e.push(t.sheenRoughnessMapUv),e.push(t.specularMapUv),e.push(t.specularColorMapUv),e.push(t.specularIntensityMapUv),e.push(t.transmissionMapUv),e.push(t.thicknessMapUv),e.push(t.combine),e.push(t.fogExp2),e.push(t.sizeAttenuation),e.push(t.morphTargetsCount),e.push(t.morphAttributeCount),e.push(t.numDirLights),e.push(t.numPointLights),e.push(t.numSpotLights),e.push(t.numSpotLightMaps),e.push(t.numHemiLights),e.push(t.numRectAreaLights),e.push(t.numDirLightShadows),e.push(t.numPointLightShadows),e.push(t.numSpotLightShadows),e.push(t.numSpotLightShadowsWithMaps),e.push(t.numLightProbes),e.push(t.shadowMapType),e.push(t.toneMapping),e.push(t.numClippingPlanes),e.push(t.numClipIntersection),e.push(t.depthPacking)}function getProgramCacheKeyBooleans(e,t){s.disableAll(),t.instancing&&s.enable(0),t.instancingColor&&s.enable(1),t.instancingMorph&&s.enable(2),t.matcap&&s.enable(3),t.envMap&&s.enable(4),t.normalMapObjectSpace&&s.enable(5),t.normalMapTangentSpace&&s.enable(6),t.clearcoat&&s.enable(7),t.iridescence&&s.enable(8),t.alphaTest&&s.enable(9),t.vertexColors&&s.enable(10),t.vertexAlphas&&s.enable(11),t.vertexUv1s&&s.enable(12),t.vertexUv2s&&s.enable(13),t.vertexUv3s&&s.enable(14),t.vertexTangents&&s.enable(15),t.anisotropy&&s.enable(16),t.alphaHash&&s.enable(17),t.batching&&s.enable(18),t.dispersion&&s.enable(19),t.batchingColor&&s.enable(20),t.gradientMap&&s.enable(21),e.push(s.mask),s.disableAll(),t.fog&&s.enable(0),t.useFog&&s.enable(1),t.flatShading&&s.enable(2),t.logarithmicDepthBuffer&&s.enable(3),t.reversedDepthBuffer&&s.enable(4),t.skinning&&s.enable(5),t.morphTargets&&s.enable(6),t.morphNormals&&s.enable(7),t.morphColors&&s.enable(8),t.premultipliedAlpha&&s.enable(9),t.shadowMapEnabled&&s.enable(10),t.doubleSided&&s.enable(11),t.flipSided&&s.enable(12),t.useDepthPacking&&s.enable(13),t.dithering&&s.enable(14),t.transmission&&s.enable(15),t.sheen&&s.enable(16),t.opaque&&s.enable(17),t.pointsUvs&&s.enable(18),t.decodeVideoTexture&&s.enable(19),t.decodeVideoTextureEmissive&&s.enable(20),t.alphaToCoverage&&s.enable(21),e.push(s.mask)}function getUniforms(e){let t=m[e.type],n;if(t){let e=Xi[t];n=bi.clone(e.uniforms)}else n=e.uniforms;return n}function acquireProgram(t,n){let i=d.get(n);return i===void 0?(i=new WebGLProgram(e,n,t,a),u.push(i),d.set(n,i)):++i.usedTimes,i}function releaseProgram(e){if(--e.usedTimes===0){let t=u.indexOf(e);u[t]=u[u.length-1],u.pop(),d.delete(e.cacheKey),e.destroy()}}function releaseShaderCache(e){c.remove(e)}function dispose(){c.dispose()}return{getParameters,getProgramCacheKey,getUniforms,acquireProgram,releaseProgram,releaseShaderCache,programs:u,dispose}}function WebGLProperties(){let e=new WeakMap;function has(t){return e.has(t)}function get(t){let n=e.get(t);return n===void 0&&(n={},e.set(t,n)),n}function remove(t){e.delete(t)}function update(t,n,i){e.get(t)[n]=i}function dispose(){e=new WeakMap}return{has,get,remove,update,dispose}}function painterSortStable(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.material.id===t.material.id?e.materialVariant===t.materialVariant?e.z===t.z?e.id-t.id:e.z-t.z:e.materialVariant-t.materialVariant:e.material.id-t.material.id:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function reversePainterSortStable(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.z===t.z?e.id-t.id:t.z-e.z:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function WebGLRenderList(){let e=[],t=0,n=[],i=[],a=[];function init(){t=0,n.length=0,i.length=0,a.length=0}function materialVariant(e){let t=0;return e.isInstancedMesh&&(t+=2),e.isSkinnedMesh&&(t+=1),t}function getNextRenderItem(n,i,a,o,s,c){let l=e[t];return l===void 0?(l={id:n.id,object:n,geometry:i,material:a,materialVariant:materialVariant(n),groupOrder:o,renderOrder:n.renderOrder,z:s,group:c},e[t]=l):(l.id=n.id,l.object=n,l.geometry=i,l.material=a,l.materialVariant=materialVariant(n),l.groupOrder=o,l.renderOrder=n.renderOrder,l.z=s,l.group=c),t++,l}function push(e,t,o,s,c,l){let u=getNextRenderItem(e,t,o,s,c,l);o.transmission>0?i.push(u):o.transparent===!0?a.push(u):n.push(u)}function unshift(e,t,o,s,c,l){let u=getNextRenderItem(e,t,o,s,c,l);o.transmission>0?i.unshift(u):o.transparent===!0?a.unshift(u):n.unshift(u)}function sort(e,t){n.length>1&&n.sort(e||painterSortStable),i.length>1&&i.sort(t||reversePainterSortStable),a.length>1&&a.sort(t||reversePainterSortStable)}function finish(){for(let n=t,i=e.length;n<i;n++){let t=e[n];if(t.id===null)break;t.id=null,t.object=null,t.geometry=null,t.material=null,t.group=null}}return{opaque:n,transmissive:i,transparent:a,init,push,unshift,finish,sort}}function WebGLRenderLists(){let e=new WeakMap;function get(t,n){let i=e.get(t),a;return i===void 0?(a=new WebGLRenderList,e.set(t,[a])):n>=i.length?(a=new WebGLRenderList,i.push(a)):a=i[n],a}function dispose(){e=new WeakMap}return{get,dispose}}function UniformsCache(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`DirectionalLight`:n={direction:new V,color:new Color$1};break;case`SpotLight`:n={position:new V,direction:new V,color:new Color$1,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case`PointLight`:n={position:new V,color:new Color$1,distance:0,decay:0};break;case`HemisphereLight`:n={direction:new V,skyColor:new Color$1,groundColor:new Color$1};break;case`RectAreaLight`:n={color:new Color$1,position:new V,halfWidth:new V,halfHeight:new V};break}return e[t.id]=n,n}}}function ShadowUniformsCache(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`DirectionalLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new B};break;case`SpotLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new B};break;case`PointLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new B,shadowCameraNear:1,shadowCameraFar:1e3};break}return e[t.id]=n,n}}}var Ia=0;function shadowCastingAndTexturingLightsFirst(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+(t.map?1:0)-(e.map?1:0)}function WebGLLights(e){let t=new UniformsCache,n=ShadowUniformsCache(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let e=0;e<9;e++)i.probe.push(new V);let a=new V,o=new G,s=new G;function setup(a){let o=0,s=0,c=0;for(let e=0;e<9;e++)i.probe[e].set(0,0,0);let l=0,u=0,d=0,f=0,p=0,m=0,h=0,g=0,_=0,y=0,b=0;a.sort(shadowCastingAndTexturingLightsFirst);for(let e=0,x=a.length;e<x;e++){let x=a[e],S=x.color,C=x.intensity,w=x.distance,T=null;if(x.shadow&&x.shadow.map&&(T=x.shadow.map.texture.format===1030?x.shadow.map.texture:x.shadow.map.depthTexture||x.shadow.map.texture),x.isAmbientLight)o+=S.r*C,s+=S.g*C,c+=S.b*C;else if(x.isLightProbe){for(let e=0;e<9;e++)i.probe[e].addScaledVector(x.sh.coefficients[e],C);b++}else if(x.isDirectionalLight){let e=t.get(x);if(e.color.copy(x.color).multiplyScalar(x.intensity),x.castShadow){let e=x.shadow,t=n.get(x);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,i.directionalShadow[l]=t,i.directionalShadowMap[l]=T,i.directionalShadowMatrix[l]=x.shadow.matrix,m++}i.directional[l]=e,l++}else if(x.isSpotLight){let e=t.get(x);e.position.setFromMatrixPosition(x.matrixWorld),e.color.copy(S).multiplyScalar(C),e.distance=w,e.coneCos=Math.cos(x.angle),e.penumbraCos=Math.cos(x.angle*(1-x.penumbra)),e.decay=x.decay,i.spot[d]=e;let a=x.shadow;if(x.map&&(i.spotLightMap[_]=x.map,_++,a.updateMatrices(x),x.castShadow&&y++),i.spotLightMatrix[d]=a.matrix,x.castShadow){let e=n.get(x);e.shadowIntensity=a.intensity,e.shadowBias=a.bias,e.shadowNormalBias=a.normalBias,e.shadowRadius=a.radius,e.shadowMapSize=a.mapSize,i.spotShadow[d]=e,i.spotShadowMap[d]=T,g++}d++}else if(x.isRectAreaLight){let e=t.get(x);e.color.copy(S).multiplyScalar(C),e.halfWidth.set(x.width*.5,0,0),e.halfHeight.set(0,x.height*.5,0),i.rectArea[f]=e,f++}else if(x.isPointLight){let e=t.get(x);if(e.color.copy(x.color).multiplyScalar(x.intensity),e.distance=x.distance,e.decay=x.decay,x.castShadow){let e=x.shadow,t=n.get(x);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,t.shadowCameraNear=e.camera.near,t.shadowCameraFar=e.camera.far,i.pointShadow[u]=t,i.pointShadowMap[u]=T,i.pointShadowMatrix[u]=x.shadow.matrix,h++}i.point[u]=e,u++}else if(x.isHemisphereLight){let e=t.get(x);e.skyColor.copy(x.color).multiplyScalar(C),e.groundColor.copy(x.groundColor).multiplyScalar(C),i.hemi[p]=e,p++}}f>0&&(e.has(`OES_texture_float_linear`)===!0?(i.rectAreaLTC1=J.LTC_FLOAT_1,i.rectAreaLTC2=J.LTC_FLOAT_2):(i.rectAreaLTC1=J.LTC_HALF_1,i.rectAreaLTC2=J.LTC_HALF_2)),i.ambient[0]=o,i.ambient[1]=s,i.ambient[2]=c;let x=i.hash;(x.directionalLength!==l||x.pointLength!==u||x.spotLength!==d||x.rectAreaLength!==f||x.hemiLength!==p||x.numDirectionalShadows!==m||x.numPointShadows!==h||x.numSpotShadows!==g||x.numSpotMaps!==_||x.numLightProbes!==b)&&(i.directional.length=l,i.spot.length=d,i.rectArea.length=f,i.point.length=u,i.hemi.length=p,i.directionalShadow.length=m,i.directionalShadowMap.length=m,i.pointShadow.length=h,i.pointShadowMap.length=h,i.spotShadow.length=g,i.spotShadowMap.length=g,i.directionalShadowMatrix.length=m,i.pointShadowMatrix.length=h,i.spotLightMatrix.length=g+_-y,i.spotLightMap.length=_,i.numSpotLightShadowsWithMaps=y,i.numLightProbes=b,x.directionalLength=l,x.pointLength=u,x.spotLength=d,x.rectAreaLength=f,x.hemiLength=p,x.numDirectionalShadows=m,x.numPointShadows=h,x.numSpotShadows=g,x.numSpotMaps=_,x.numLightProbes=b,i.version=Ia++)}function setupView(e,t){let n=0,c=0,l=0,u=0,d=0,f=t.matrixWorldInverse;for(let t=0,p=e.length;t<p;t++){let p=e[t];if(p.isDirectionalLight){let e=i.directional[n];e.direction.setFromMatrixPosition(p.matrixWorld),a.setFromMatrixPosition(p.target.matrixWorld),e.direction.sub(a),e.direction.transformDirection(f),n++}else if(p.isSpotLight){let e=i.spot[l];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),e.direction.setFromMatrixPosition(p.matrixWorld),a.setFromMatrixPosition(p.target.matrixWorld),e.direction.sub(a),e.direction.transformDirection(f),l++}else if(p.isRectAreaLight){let e=i.rectArea[u];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),s.identity(),o.copy(p.matrixWorld),o.premultiply(f),s.extractRotation(o),e.halfWidth.set(p.width*.5,0,0),e.halfHeight.set(0,p.height*.5,0),e.halfWidth.applyMatrix4(s),e.halfHeight.applyMatrix4(s),u++}else if(p.isPointLight){let e=i.point[c];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),c++}else if(p.isHemisphereLight){let e=i.hemi[d];e.direction.setFromMatrixPosition(p.matrixWorld),e.direction.transformDirection(f),d++}}}return{setup,setupView,state:i}}function WebGLRenderState(e){let t=new WebGLLights(e),n=[],i=[];function init(e){a.camera=e,n.length=0,i.length=0}function pushLight(e){n.push(e)}function pushShadow(e){i.push(e)}function setupLights(){t.setup(n)}function setupLightsView(e){t.setupView(n,e)}let a={lightsArray:n,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init,state:a,setupLights,setupLightsView,pushLight,pushShadow}}function WebGLRenderStates(e){let t=new WeakMap;function get(n,i=0){let a=t.get(n),o;return a===void 0?(o=new WebGLRenderState(e),t.set(n,[o])):i>=a.length?(o=new WebGLRenderState(e),a.push(o)):o=a[i],o}function dispose(){t=new WeakMap}return{get,dispose}}var La=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Ra=`uniform sampler2D shadow_pass;
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
}`,za=[new V(1,0,0),new V(-1,0,0),new V(0,1,0),new V(0,-1,0),new V(0,0,1),new V(0,0,-1)],Ba=[new V(0,-1,0),new V(0,-1,0),new V(0,0,1),new V(0,0,-1),new V(0,-1,0),new V(0,-1,0)],Va=new G,Ha=new V,Ua=new V;function WebGLShadowMap(e,t,n){let i=new Frustum,a=new B,o=new B,s=new W,c=new MeshDepthMaterial,l=new MeshDistanceMaterial,u={},d=n.maxTextureSize,f={0:1,1:0,2:2},p=new ShaderMaterial({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new B},radius:{value:4}},vertexShader:La,fragmentShader:Ra}),m=p.clone();m.defines.HORIZONTAL_PASS=1;let h=new tr;h.setAttribute(`position`,new BufferAttribute(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let g=new Mesh(h,p),_=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let y=this.type;this.render=function(t,n,c){if(_.enabled===!1||_.autoUpdate===!1&&_.needsUpdate===!1||t.length===0)return;this.type===2&&(warn(`WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead.`),this.type=1);let l=e.getRenderTarget(),u=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.state;p.setBlending(0),p.buffers.depth.getReversed()===!0?p.buffers.color.setClear(0,0,0,0):p.buffers.color.setClear(1,1,1,1),p.buffers.depth.setTest(!0),p.setScissorTest(!1);let m=y!==this.type;m&&n.traverse(function(e){e.material&&(Array.isArray(e.material)?e.material.forEach(e=>e.needsUpdate=!0):e.material.needsUpdate=!0)});for(let l=0,u=t.length;l<u;l++){let u=t[l],f=u.shadow;if(f===void 0){warn(`WebGLShadowMap:`,u,`has no shadow.`);continue}if(f.autoUpdate===!1&&f.needsUpdate===!1)continue;a.copy(f.mapSize);let h=f.getFrameExtents();a.multiply(h),o.copy(f.mapSize),(a.x>d||a.y>d)&&(a.x>d&&(o.x=Math.floor(d/h.x),a.x=o.x*h.x,f.mapSize.x=o.x),a.y>d&&(o.y=Math.floor(d/h.y),a.y=o.y*h.y,f.mapSize.y=o.y));let g=e.state.buffers.depth.getReversed();if(f.camera._reversedDepth=g,f.map===null||m===!0){if(f.map!==null&&(f.map.depthTexture!==null&&(f.map.depthTexture.dispose(),f.map.depthTexture=null),f.map.dispose()),this.type===3){if(u.isPointLight){warn(`WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.`);continue}f.map=new WebGLRenderTarget(a.x,a.y,{format:Se,type:le,minFilter:F,magFilter:F,generateMipmaps:!1}),f.map.texture.name=u.name+`.shadowMap`,f.map.depthTexture=new DepthTexture(a.x,a.y,ce),f.map.depthTexture.name=u.name+`.shadowMapDepth`,f.map.depthTexture.format=ve,f.map.depthTexture.compareFunction=null,f.map.depthTexture.minFilter=M,f.map.depthTexture.magFilter=M}else u.isPointLight?(f.map=new WebGLCubeRenderTarget(a.x),f.map.depthTexture=new CubeDepthTexture(a.x,se)):(f.map=new WebGLRenderTarget(a.x,a.y),f.map.depthTexture=new DepthTexture(a.x,a.y,se)),f.map.depthTexture.name=u.name+`.shadowMap`,f.map.depthTexture.format=ve,this.type===1?(f.map.depthTexture.compareFunction=g?518:515,f.map.depthTexture.minFilter=F,f.map.depthTexture.magFilter=F):(f.map.depthTexture.compareFunction=null,f.map.depthTexture.minFilter=M,f.map.depthTexture.magFilter=M);f.camera.updateProjectionMatrix()}let _=f.map.isWebGLCubeRenderTarget?6:1;for(let t=0;t<_;t++){if(f.map.isWebGLCubeRenderTarget)e.setRenderTarget(f.map,t),e.clear();else{t===0&&(e.setRenderTarget(f.map),e.clear());let n=f.getViewport(t);s.set(o.x*n.x,o.y*n.y,o.x*n.z,o.y*n.w),p.viewport(s)}if(u.isPointLight){let e=f.camera,n=f.matrix,i=u.distance||e.far;i!==e.far&&(e.far=i,e.updateProjectionMatrix()),Ha.setFromMatrixPosition(u.matrixWorld),e.position.copy(Ha),Ua.copy(e.position),Ua.add(za[t]),e.up.copy(Ba[t]),e.lookAt(Ua),e.updateMatrixWorld(),n.makeTranslation(-Ha.x,-Ha.y,-Ha.z),Va.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),f._frustum.setFromProjectionMatrix(Va,e.coordinateSystem,e.reversedDepth)}else f.updateMatrices(u);i=f.getFrustum(),renderObject(n,c,f.camera,u,this.type)}f.isPointLightShadow!==!0&&this.type===3&&VSMPass(f,c),f.needsUpdate=!1}y=this.type,_.needsUpdate=!1,e.setRenderTarget(l,u,f)};function VSMPass(n,i){let o=t.update(g);p.defines.VSM_SAMPLES!==n.blurSamples&&(p.defines.VSM_SAMPLES=n.blurSamples,m.defines.VSM_SAMPLES=n.blurSamples,p.needsUpdate=!0,m.needsUpdate=!0),n.mapPass===null&&(n.mapPass=new WebGLRenderTarget(a.x,a.y,{format:Se,type:le})),p.uniforms.shadow_pass.value=n.map.depthTexture,p.uniforms.resolution.value=n.mapSize,p.uniforms.radius.value=n.radius,e.setRenderTarget(n.mapPass),e.clear(),e.renderBufferDirect(i,null,o,p,g,null),m.uniforms.shadow_pass.value=n.mapPass.texture,m.uniforms.resolution.value=n.mapSize,m.uniforms.radius.value=n.radius,e.setRenderTarget(n.map),e.clear(),e.renderBufferDirect(i,null,o,m,g,null)}function getDepthMaterial(t,n,i,a){let o=null,s=i.isPointLight===!0?t.customDistanceMaterial:t.customDepthMaterial;if(s!==void 0)o=s;else if(o=i.isPointLight===!0?l:c,e.localClippingEnabled&&n.clipShadows===!0&&Array.isArray(n.clippingPlanes)&&n.clippingPlanes.length!==0||n.displacementMap&&n.displacementScale!==0||n.alphaMap&&n.alphaTest>0||n.map&&n.alphaTest>0||n.alphaToCoverage===!0){let e=o.uuid,t=n.uuid,i=u[e];i===void 0&&(i={},u[e]=i);let a=i[t];a===void 0&&(a=o.clone(),i[t]=a,n.addEventListener(`dispose`,onMaterialDispose)),o=a}if(o.visible=n.visible,o.wireframe=n.wireframe,a===3?o.side=n.shadowSide===null?n.side:n.shadowSide:o.side=n.shadowSide===null?f[n.side]:n.shadowSide,o.alphaMap=n.alphaMap,o.alphaTest=n.alphaToCoverage===!0?.5:n.alphaTest,o.map=n.map,o.clipShadows=n.clipShadows,o.clippingPlanes=n.clippingPlanes,o.clipIntersection=n.clipIntersection,o.displacementMap=n.displacementMap,o.displacementScale=n.displacementScale,o.displacementBias=n.displacementBias,o.wireframeLinewidth=n.wireframeLinewidth,o.linewidth=n.linewidth,i.isPointLight===!0&&o.isMeshDistanceMaterial===!0){let t=e.properties.get(o);t.light=i}return o}function renderObject(n,a,o,s,c){if(n.visible===!1)return;if(n.layers.test(a.layers)&&(n.isMesh||n.isLine||n.isPoints)&&(n.castShadow||n.receiveShadow&&c===3)&&(!n.frustumCulled||i.intersectsObject(n))){n.modelViewMatrix.multiplyMatrices(o.matrixWorldInverse,n.matrixWorld);let i=t.update(n),l=n.material;if(Array.isArray(l)){let t=i.groups;for(let u=0,d=t.length;u<d;u++){let d=t[u],f=l[d.materialIndex];if(f&&f.visible){let t=getDepthMaterial(n,f,s,c);n.onBeforeShadow(e,n,a,o,i,t,d),e.renderBufferDirect(o,null,i,t,n,d),n.onAfterShadow(e,n,a,o,i,t,d)}}}else if(l.visible){let t=getDepthMaterial(n,l,s,c);n.onBeforeShadow(e,n,a,o,i,t,null),e.renderBufferDirect(o,null,i,t,n,null),n.onAfterShadow(e,n,a,o,i,t,null)}}let l=n.children;for(let e=0,t=l.length;e<t;e++)renderObject(l[e],a,o,s,c)}function onMaterialDispose(e){e.target.removeEventListener(`dispose`,onMaterialDispose);for(let t in u){let n=u[t],i=e.target.uuid;i in n&&(n[i].dispose(),delete n[i])}}}function WebGLState(e,t){function ColorBuffer(){let t=!1,n=new W,i=null,a=new W(0,0,0,0);return{setMask:function(n){i!==n&&!t&&(e.colorMask(n,n,n,n),i=n)},setLocked:function(e){t=e},setClear:function(t,i,o,s,c){c===!0&&(t*=s,i*=s,o*=s),n.set(t,i,o,s),a.equals(n)===!1&&(e.clearColor(t,i,o,s),a.copy(n))},reset:function(){t=!1,i=null,a.set(-1,0,0,0)}}}function DepthBuffer(){let n=!1,i=!1,a=null,o=null,s=null;return{setReversed:function(e){if(i!==e){let n=t.get(`EXT_clip_control`);e?n.clipControlEXT(n.LOWER_LEFT_EXT,n.ZERO_TO_ONE_EXT):n.clipControlEXT(n.LOWER_LEFT_EXT,n.NEGATIVE_ONE_TO_ONE_EXT),i=e;let a=s;s=null,this.setClear(a)}},getReversed:function(){return i},setTest:function(t){t?enable(e.DEPTH_TEST):disable(e.DEPTH_TEST)},setMask:function(t){a!==t&&!n&&(e.depthMask(t),a=t)},setFunc:function(t){if(i&&(t=xt[t]),o!==t){switch(t){case 0:e.depthFunc(e.NEVER);break;case 1:e.depthFunc(e.ALWAYS);break;case 2:e.depthFunc(e.LESS);break;case 3:e.depthFunc(e.LEQUAL);break;case 4:e.depthFunc(e.EQUAL);break;case 5:e.depthFunc(e.GEQUAL);break;case 6:e.depthFunc(e.GREATER);break;case 7:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}o=t}},setLocked:function(e){n=e},setClear:function(t){s!==t&&(s=t,i&&(t=1-t),e.clearDepth(t))},reset:function(){n=!1,a=null,o=null,s=null,i=!1}}}function StencilBuffer(){let t=!1,n=null,i=null,a=null,o=null,s=null,c=null,l=null,u=null;return{setTest:function(n){t||(n?enable(e.STENCIL_TEST):disable(e.STENCIL_TEST))},setMask:function(i){n!==i&&!t&&(e.stencilMask(i),n=i)},setFunc:function(t,n,s){(i!==t||a!==n||o!==s)&&(e.stencilFunc(t,n,s),i=t,a=n,o=s)},setOp:function(t,n,i){(s!==t||c!==n||l!==i)&&(e.stencilOp(t,n,i),s=t,c=n,l=i)},setLocked:function(e){t=e},setClear:function(t){u!==t&&(e.clearStencil(t),u=t)},reset:function(){t=!1,n=null,i=null,a=null,o=null,s=null,c=null,l=null,u=null}}}let n=new ColorBuffer,i=new DepthBuffer,a=new StencilBuffer,o=new WeakMap,s=new WeakMap,c={},l={},u=new WeakMap,d=[],f=null,p=!1,m=null,h=null,g=null,_=null,y=null,b=null,x=null,S=new Color$1(0,0,0),C=0,w=!1,T=null,E=null,D=null,O=null,k=null,A=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),j=!1,M=0,N=e.getParameter(e.VERSION);N.indexOf(`WebGL`)===-1?N.indexOf(`OpenGL ES`)!==-1&&(M=parseFloat(/^OpenGL ES (\d)/.exec(N)[1]),j=M>=2):(M=parseFloat(/^WebGL (\d)/.exec(N)[1]),j=M>=1);let P=null,F={},ee=e.getParameter(e.SCISSOR_BOX),te=e.getParameter(e.VIEWPORT),ne=new W().fromArray(ee),re=new W().fromArray(te);function createTexture(t,n,i,a){let o=new Uint8Array(4),s=e.createTexture();e.bindTexture(t,s),e.texParameteri(t,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(t,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let s=0;s<i;s++)t===e.TEXTURE_3D||t===e.TEXTURE_2D_ARRAY?e.texImage3D(n,0,e.RGBA,1,1,a,0,e.RGBA,e.UNSIGNED_BYTE,o):e.texImage2D(n+s,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,o);return s}let ie={};ie[e.TEXTURE_2D]=createTexture(e.TEXTURE_2D,e.TEXTURE_2D,1),ie[e.TEXTURE_CUBE_MAP]=createTexture(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),ie[e.TEXTURE_2D_ARRAY]=createTexture(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),ie[e.TEXTURE_3D]=createTexture(e.TEXTURE_3D,e.TEXTURE_3D,1,1),n.setClear(0,0,0,1),i.setClear(1),a.setClear(0),enable(e.DEPTH_TEST),i.setFunc(3),setFlipSided(!1),setCullFace(1),enable(e.CULL_FACE),setBlending(0);function enable(t){c[t]!==!0&&(e.enable(t),c[t]=!0)}function disable(t){c[t]!==!1&&(e.disable(t),c[t]=!1)}function bindFramebuffer(t,n){return l[t]===n?!1:(e.bindFramebuffer(t,n),l[t]=n,t===e.DRAW_FRAMEBUFFER&&(l[e.FRAMEBUFFER]=n),t===e.FRAMEBUFFER&&(l[e.DRAW_FRAMEBUFFER]=n),!0)}function drawBuffers(t,n){let i=d,a=!1;if(t){i=u.get(n),i===void 0&&(i=[],u.set(n,i));let o=t.textures;if(i.length!==o.length||i[0]!==e.COLOR_ATTACHMENT0){for(let t=0,n=o.length;t<n;t++)i[t]=e.COLOR_ATTACHMENT0+t;i.length=o.length,a=!0}}else i[0]!==e.BACK&&(i[0]=e.BACK,a=!0);a&&e.drawBuffers(i)}function useProgram(t){return f===t?!1:(e.useProgram(t),f=t,!0)}let ae={100:e.FUNC_ADD,101:e.FUNC_SUBTRACT,102:e.FUNC_REVERSE_SUBTRACT};ae[103]=e.MIN,ae[104]=e.MAX;let oe={200:e.ZERO,201:e.ONE,202:e.SRC_COLOR,204:e.SRC_ALPHA,210:e.SRC_ALPHA_SATURATE,208:e.DST_COLOR,206:e.DST_ALPHA,203:e.ONE_MINUS_SRC_COLOR,205:e.ONE_MINUS_SRC_ALPHA,209:e.ONE_MINUS_DST_COLOR,207:e.ONE_MINUS_DST_ALPHA,211:e.CONSTANT_COLOR,212:e.ONE_MINUS_CONSTANT_COLOR,213:e.CONSTANT_ALPHA,214:e.ONE_MINUS_CONSTANT_ALPHA};function setBlending(t,n,i,a,o,s,c,l,u,d){if(t===0){p===!0&&(disable(e.BLEND),p=!1);return}if(p===!1&&(enable(e.BLEND),p=!0),t!==5){if(t!==m||d!==w){if((h!==100||y!==100)&&(e.blendEquation(e.FUNC_ADD),h=100,y=100),d)switch(t){case 1:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFunc(e.ONE,e.ONE);break;case 3:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case 4:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:error(`WebGLState: Invalid blending: `,t);break}else switch(t){case 1:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case 3:error(`WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true`);break;case 4:error(`WebGLState: MultiplyBlending requires material.premultipliedAlpha = true`);break;default:error(`WebGLState: Invalid blending: `,t);break}g=null,_=null,b=null,x=null,S.set(0,0,0),C=0,m=t,w=d}return}o||=n,s||=i,c||=a,(n!==h||o!==y)&&(e.blendEquationSeparate(ae[n],ae[o]),h=n,y=o),(i!==g||a!==_||s!==b||c!==x)&&(e.blendFuncSeparate(oe[i],oe[a],oe[s],oe[c]),g=i,_=a,b=s,x=c),(l.equals(S)===!1||u!==C)&&(e.blendColor(l.r,l.g,l.b,u),S.copy(l),C=u),m=t,w=!1}function setMaterial(t,o){t.side===2?disable(e.CULL_FACE):enable(e.CULL_FACE);let s=t.side===1;o&&(s=!s),setFlipSided(s),t.blending===1&&t.transparent===!1?setBlending(0):setBlending(t.blending,t.blendEquation,t.blendSrc,t.blendDst,t.blendEquationAlpha,t.blendSrcAlpha,t.blendDstAlpha,t.blendColor,t.blendAlpha,t.premultipliedAlpha),i.setFunc(t.depthFunc),i.setTest(t.depthTest),i.setMask(t.depthWrite),n.setMask(t.colorWrite);let c=t.stencilWrite;a.setTest(c),c&&(a.setMask(t.stencilWriteMask),a.setFunc(t.stencilFunc,t.stencilRef,t.stencilFuncMask),a.setOp(t.stencilFail,t.stencilZFail,t.stencilZPass)),setPolygonOffset(t.polygonOffset,t.polygonOffsetFactor,t.polygonOffsetUnits),t.alphaToCoverage===!0?enable(e.SAMPLE_ALPHA_TO_COVERAGE):disable(e.SAMPLE_ALPHA_TO_COVERAGE)}function setFlipSided(t){T!==t&&(t?e.frontFace(e.CW):e.frontFace(e.CCW),T=t)}function setCullFace(t){t===0?disable(e.CULL_FACE):(enable(e.CULL_FACE),t!==E&&(t===1?e.cullFace(e.BACK):t===2?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))),E=t}function setLineWidth(t){t!==D&&(j&&e.lineWidth(t),D=t)}function setPolygonOffset(t,n,a){t?(enable(e.POLYGON_OFFSET_FILL),(O!==n||k!==a)&&(O=n,k=a,i.getReversed()&&(n=-n),e.polygonOffset(n,a))):disable(e.POLYGON_OFFSET_FILL)}function setScissorTest(t){t?enable(e.SCISSOR_TEST):disable(e.SCISSOR_TEST)}function activeTexture(t){t===void 0&&(t=e.TEXTURE0+A-1),P!==t&&(e.activeTexture(t),P=t)}function bindTexture(t,n,i){i===void 0&&(i=P===null?e.TEXTURE0+A-1:P);let a=F[i];a===void 0&&(a={type:void 0,texture:void 0},F[i]=a),(a.type!==t||a.texture!==n)&&(P!==i&&(e.activeTexture(i),P=i),e.bindTexture(t,n||ie[t]),a.type=t,a.texture=n)}function unbindTexture(){let t=F[P];t!==void 0&&t.type!==void 0&&(e.bindTexture(t.type,null),t.type=void 0,t.texture=void 0)}function compressedTexImage2D(){try{e.compressedTexImage2D(...arguments)}catch(e){error(`WebGLState:`,e)}}function compressedTexImage3D(){try{e.compressedTexImage3D(...arguments)}catch(e){error(`WebGLState:`,e)}}function texSubImage2D(){try{e.texSubImage2D(...arguments)}catch(e){error(`WebGLState:`,e)}}function texSubImage3D(){try{e.texSubImage3D(...arguments)}catch(e){error(`WebGLState:`,e)}}function compressedTexSubImage2D(){try{e.compressedTexSubImage2D(...arguments)}catch(e){error(`WebGLState:`,e)}}function compressedTexSubImage3D(){try{e.compressedTexSubImage3D(...arguments)}catch(e){error(`WebGLState:`,e)}}function texStorage2D(){try{e.texStorage2D(...arguments)}catch(e){error(`WebGLState:`,e)}}function texStorage3D(){try{e.texStorage3D(...arguments)}catch(e){error(`WebGLState:`,e)}}function texImage2D(){try{e.texImage2D(...arguments)}catch(e){error(`WebGLState:`,e)}}function texImage3D(){try{e.texImage3D(...arguments)}catch(e){error(`WebGLState:`,e)}}function scissor(t){ne.equals(t)===!1&&(e.scissor(t.x,t.y,t.z,t.w),ne.copy(t))}function viewport(t){re.equals(t)===!1&&(e.viewport(t.x,t.y,t.z,t.w),re.copy(t))}function updateUBOMapping(t,n){let i=s.get(n);i===void 0&&(i=new WeakMap,s.set(n,i));let a=i.get(t);a===void 0&&(a=e.getUniformBlockIndex(n,t.name),i.set(t,a))}function uniformBlockBinding(t,n){let i=s.get(n).get(t);o.get(n)!==i&&(e.uniformBlockBinding(n,i,t.__bindingPointIndex),o.set(n,i))}function reset(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),i.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),c={},P=null,F={},l={},u=new WeakMap,d=[],f=null,p=!1,m=null,h=null,g=null,_=null,y=null,b=null,x=null,S=new Color$1(0,0,0),C=0,w=!1,T=null,E=null,D=null,O=null,k=null,ne.set(0,0,e.canvas.width,e.canvas.height),re.set(0,0,e.canvas.width,e.canvas.height),n.reset(),i.reset(),a.reset()}return{buffers:{color:n,depth:i,stencil:a},enable,disable,bindFramebuffer,drawBuffers,useProgram,setBlending,setMaterial,setFlipSided,setCullFace,setLineWidth,setPolygonOffset,setScissorTest,activeTexture,bindTexture,unbindTexture,compressedTexImage2D,compressedTexImage3D,texImage2D,texImage3D,updateUBOMapping,uniformBlockBinding,texStorage2D,texStorage3D,texSubImage2D,texSubImage3D,compressedTexSubImage2D,compressedTexSubImage3D,scissor,viewport,reset}}function WebGLTextures(e,t,n,i,a,o,s){let c=t.has(`WEBGL_multisampled_render_to_texture`)?t.get(`WEBGL_multisampled_render_to_texture`):null,l=typeof navigator>`u`?!1:/OculusBrowser/g.test(navigator.userAgent),u=new B,d=new WeakMap,f,p=new WeakMap,m=!1;try{m=typeof OffscreenCanvas<`u`&&new OffscreenCanvas(1,1).getContext(`2d`)!==null}catch{}function createCanvas(e,t){return m?new OffscreenCanvas(e,t):createElementNS(`canvas`)}function resizeImage(e,t,n){let i=1,a=getDimensions(e);if((a.width>n||a.height>n)&&(i=n/Math.max(a.width,a.height)),i<1)if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap||typeof VideoFrame<`u`&&e instanceof VideoFrame){let n=Math.floor(i*a.width),o=Math.floor(i*a.height);f===void 0&&(f=createCanvas(n,o));let s=t?createCanvas(n,o):f;return s.width=n,s.height=o,s.getContext(`2d`).drawImage(e,0,0,n,o),warn(`WebGLRenderer: Texture has been resized from (`+a.width+`x`+a.height+`) to (`+n+`x`+o+`).`),s}else return`data`in e&&warn(`WebGLRenderer: Image in DataTexture is too big (`+a.width+`x`+a.height+`).`),e;return e}function textureNeedsGenerateMipmaps(e){return e.generateMipmaps}function generateMipmap(t){e.generateMipmap(t)}function getTargetType(t){return t.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:t.isWebGL3DRenderTarget?e.TEXTURE_3D:t.isWebGLArrayRenderTarget||t.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function getInternalFormat(n,i,a,o,s=!1){if(n!==null){if(e[n]!==void 0)return e[n];warn(`WebGLRenderer: Attempt to use non-existing WebGL internal format '`+n+`'`)}let c=i;if(i===e.RED&&(a===e.FLOAT&&(c=e.R32F),a===e.HALF_FLOAT&&(c=e.R16F),a===e.UNSIGNED_BYTE&&(c=e.R8)),i===e.RED_INTEGER&&(a===e.UNSIGNED_BYTE&&(c=e.R8UI),a===e.UNSIGNED_SHORT&&(c=e.R16UI),a===e.UNSIGNED_INT&&(c=e.R32UI),a===e.BYTE&&(c=e.R8I),a===e.SHORT&&(c=e.R16I),a===e.INT&&(c=e.R32I)),i===e.RG&&(a===e.FLOAT&&(c=e.RG32F),a===e.HALF_FLOAT&&(c=e.RG16F),a===e.UNSIGNED_BYTE&&(c=e.RG8)),i===e.RG_INTEGER&&(a===e.UNSIGNED_BYTE&&(c=e.RG8UI),a===e.UNSIGNED_SHORT&&(c=e.RG16UI),a===e.UNSIGNED_INT&&(c=e.RG32UI),a===e.BYTE&&(c=e.RG8I),a===e.SHORT&&(c=e.RG16I),a===e.INT&&(c=e.RG32I)),i===e.RGB_INTEGER&&(a===e.UNSIGNED_BYTE&&(c=e.RGB8UI),a===e.UNSIGNED_SHORT&&(c=e.RGB16UI),a===e.UNSIGNED_INT&&(c=e.RGB32UI),a===e.BYTE&&(c=e.RGB8I),a===e.SHORT&&(c=e.RGB16I),a===e.INT&&(c=e.RGB32I)),i===e.RGBA_INTEGER&&(a===e.UNSIGNED_BYTE&&(c=e.RGBA8UI),a===e.UNSIGNED_SHORT&&(c=e.RGBA16UI),a===e.UNSIGNED_INT&&(c=e.RGBA32UI),a===e.BYTE&&(c=e.RGBA8I),a===e.SHORT&&(c=e.RGBA16I),a===e.INT&&(c=e.RGBA32I)),i===e.RGB&&(a===e.UNSIGNED_INT_5_9_9_9_REV&&(c=e.RGB9_E5),a===e.UNSIGNED_INT_10F_11F_11F_REV&&(c=e.R11F_G11F_B10F)),i===e.RGBA){let t=s?mt:U.getTransfer(o);a===e.FLOAT&&(c=e.RGBA32F),a===e.HALF_FLOAT&&(c=e.RGBA16F),a===e.UNSIGNED_BYTE&&(c=t===`srgb`?e.SRGB8_ALPHA8:e.RGBA8),a===e.UNSIGNED_SHORT_4_4_4_4&&(c=e.RGBA4),a===e.UNSIGNED_SHORT_5_5_5_1&&(c=e.RGB5_A1)}return(c===e.R16F||c===e.R32F||c===e.RG16F||c===e.RG32F||c===e.RGBA16F||c===e.RGBA32F)&&t.get(`EXT_color_buffer_float`),c}function getInternalDepthFormat(t,n){let i;return t?n===null||n===1014||n===1020?i=e.DEPTH24_STENCIL8:n===1015?i=e.DEPTH32F_STENCIL8:n===1012&&(i=e.DEPTH24_STENCIL8,warn(`DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.`)):n===null||n===1014||n===1020?i=e.DEPTH_COMPONENT24:n===1015?i=e.DEPTH_COMPONENT32F:n===1012&&(i=e.DEPTH_COMPONENT16),i}function getMipLevels(e,t){return textureNeedsGenerateMipmaps(e)===!0||e.isFramebufferTexture&&e.minFilter!==1003&&e.minFilter!==1006?Math.log2(Math.max(t.width,t.height))+1:e.mipmaps!==void 0&&e.mipmaps.length>0?e.mipmaps.length:e.isCompressedTexture&&Array.isArray(e.image)?t.mipmaps.length:1}function onTextureDispose(e){let t=e.target;t.removeEventListener(`dispose`,onTextureDispose),deallocateTexture(t),t.isVideoTexture&&d.delete(t)}function onRenderTargetDispose(e){let t=e.target;t.removeEventListener(`dispose`,onRenderTargetDispose),deallocateRenderTarget(t)}function deallocateTexture(e){let t=i.get(e);if(t.__webglInit===void 0)return;let n=e.source,a=p.get(n);if(a){let i=a[t.__cacheKey];i.usedTimes--,i.usedTimes===0&&deleteTexture(e),Object.keys(a).length===0&&p.delete(n)}i.remove(e)}function deleteTexture(t){let n=i.get(t);e.deleteTexture(n.__webglTexture);let a=t.source,o=p.get(a);delete o[n.__cacheKey],s.memory.textures--}function deallocateRenderTarget(t){let n=i.get(t);if(t.depthTexture&&(t.depthTexture.dispose(),i.remove(t.depthTexture)),t.isWebGLCubeRenderTarget)for(let t=0;t<6;t++){if(Array.isArray(n.__webglFramebuffer[t]))for(let i=0;i<n.__webglFramebuffer[t].length;i++)e.deleteFramebuffer(n.__webglFramebuffer[t][i]);else e.deleteFramebuffer(n.__webglFramebuffer[t]);n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer[t])}else{if(Array.isArray(n.__webglFramebuffer))for(let t=0;t<n.__webglFramebuffer.length;t++)e.deleteFramebuffer(n.__webglFramebuffer[t]);else e.deleteFramebuffer(n.__webglFramebuffer);if(n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer),n.__webglMultisampledFramebuffer&&e.deleteFramebuffer(n.__webglMultisampledFramebuffer),n.__webglColorRenderbuffer)for(let t=0;t<n.__webglColorRenderbuffer.length;t++)n.__webglColorRenderbuffer[t]&&e.deleteRenderbuffer(n.__webglColorRenderbuffer[t]);n.__webglDepthRenderbuffer&&e.deleteRenderbuffer(n.__webglDepthRenderbuffer)}let a=t.textures;for(let t=0,n=a.length;t<n;t++){let n=i.get(a[t]);n.__webglTexture&&(e.deleteTexture(n.__webglTexture),s.memory.textures--),i.remove(a[t])}i.remove(t)}let h=0;function resetTextureUnits(){h=0}function allocateTextureUnit(){let e=h;return e>=a.maxTextures&&warn(`WebGLTextures: Trying to use `+e+` texture units while this GPU supports only `+a.maxTextures),h+=1,e}function getTextureCacheKey(e){let t=[];return t.push(e.wrapS),t.push(e.wrapT),t.push(e.wrapR||0),t.push(e.magFilter),t.push(e.minFilter),t.push(e.anisotropy),t.push(e.internalFormat),t.push(e.format),t.push(e.type),t.push(e.generateMipmaps),t.push(e.premultiplyAlpha),t.push(e.flipY),t.push(e.unpackAlignment),t.push(e.colorSpace),t.join()}function setTexture2D(t,a){let o=i.get(t);if(t.isVideoTexture&&updateVideoTexture(t),t.isRenderTargetTexture===!1&&t.isExternalTexture!==!0&&t.version>0&&o.__version!==t.version){let e=t.image;if(e===null)warn(`WebGLRenderer: Texture marked for update but no image data found.`);else if(e.complete===!1)warn(`WebGLRenderer: Texture marked for update but image is incomplete`);else{uploadTexture(o,t,a);return}}else t.isExternalTexture&&(o.__webglTexture=t.sourceTexture?t.sourceTexture:null);n.bindTexture(e.TEXTURE_2D,o.__webglTexture,e.TEXTURE0+a)}function setTexture2DArray(t,a){let o=i.get(t);if(t.isRenderTargetTexture===!1&&t.version>0&&o.__version!==t.version){uploadTexture(o,t,a);return}else t.isExternalTexture&&(o.__webglTexture=t.sourceTexture?t.sourceTexture:null);n.bindTexture(e.TEXTURE_2D_ARRAY,o.__webglTexture,e.TEXTURE0+a)}function setTexture3D(t,a){let o=i.get(t);if(t.isRenderTargetTexture===!1&&t.version>0&&o.__version!==t.version){uploadTexture(o,t,a);return}n.bindTexture(e.TEXTURE_3D,o.__webglTexture,e.TEXTURE0+a)}function setTextureCube(t,a){let o=i.get(t);if(t.isCubeDepthTexture!==!0&&t.version>0&&o.__version!==t.version){uploadCubeTexture(o,t,a);return}n.bindTexture(e.TEXTURE_CUBE_MAP,o.__webglTexture,e.TEXTURE0+a)}let g={[k]:e.REPEAT,[A]:e.CLAMP_TO_EDGE,[j]:e.MIRRORED_REPEAT},_={[M]:e.NEAREST,[N]:e.NEAREST_MIPMAP_NEAREST,[P]:e.NEAREST_MIPMAP_LINEAR,[F]:e.LINEAR,[ee]:e.LINEAR_MIPMAP_NEAREST,[te]:e.LINEAR_MIPMAP_LINEAR},y={512:e.NEVER,519:e.ALWAYS,513:e.LESS,515:e.LEQUAL,514:e.EQUAL,518:e.GEQUAL,516:e.GREATER,517:e.NOTEQUAL};function setTextureParameters(n,o){if(o.type===1015&&t.has(`OES_texture_float_linear`)===!1&&(o.magFilter===1006||o.magFilter===1007||o.magFilter===1005||o.magFilter===1008||o.minFilter===1006||o.minFilter===1007||o.minFilter===1005||o.minFilter===1008)&&warn(`WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.`),e.texParameteri(n,e.TEXTURE_WRAP_S,g[o.wrapS]),e.texParameteri(n,e.TEXTURE_WRAP_T,g[o.wrapT]),(n===e.TEXTURE_3D||n===e.TEXTURE_2D_ARRAY)&&e.texParameteri(n,e.TEXTURE_WRAP_R,g[o.wrapR]),e.texParameteri(n,e.TEXTURE_MAG_FILTER,_[o.magFilter]),e.texParameteri(n,e.TEXTURE_MIN_FILTER,_[o.minFilter]),o.compareFunction&&(e.texParameteri(n,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(n,e.TEXTURE_COMPARE_FUNC,y[o.compareFunction])),t.has(`EXT_texture_filter_anisotropic`)===!0){if(o.magFilter===1003||o.minFilter!==1005&&o.minFilter!==1008||o.type===1015&&t.has(`OES_texture_float_linear`)===!1)return;if(o.anisotropy>1||i.get(o).__currentAnisotropy){let s=t.get(`EXT_texture_filter_anisotropic`);e.texParameterf(n,s.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(o.anisotropy,a.getMaxAnisotropy())),i.get(o).__currentAnisotropy=o.anisotropy}}}function initTexture(t,n){let i=!1;t.__webglInit===void 0&&(t.__webglInit=!0,n.addEventListener(`dispose`,onTextureDispose));let a=n.source,o=p.get(a);o===void 0&&(o={},p.set(a,o));let c=getTextureCacheKey(n);if(c!==t.__cacheKey){o[c]===void 0&&(o[c]={texture:e.createTexture(),usedTimes:0},s.memory.textures++,i=!0),o[c].usedTimes++;let a=o[t.__cacheKey];a!==void 0&&(o[t.__cacheKey].usedTimes--,a.usedTimes===0&&deleteTexture(n)),t.__cacheKey=c,t.__webglTexture=o[c].texture}return i}function getRow(e,t,n){return Math.floor(Math.floor(e/n)/t)}function updateTexture(t,i,a,o){let s=t.updateRanges;if(s.length===0)n.texSubImage2D(e.TEXTURE_2D,0,0,0,i.width,i.height,a,o,i.data);else{s.sort((e,t)=>e.start-t.start);let c=0;for(let e=1;e<s.length;e++){let t=s[c],n=s[e],a=t.start+t.count,o=getRow(n.start,i.width,4),l=getRow(t.start,i.width,4);n.start<=a+1&&o===l&&getRow(n.start+n.count-1,i.width,4)===o?t.count=Math.max(t.count,n.start+n.count-t.start):(++c,s[c]=n)}s.length=c+1;let l=e.getParameter(e.UNPACK_ROW_LENGTH),u=e.getParameter(e.UNPACK_SKIP_PIXELS),d=e.getParameter(e.UNPACK_SKIP_ROWS);e.pixelStorei(e.UNPACK_ROW_LENGTH,i.width);for(let t=0,c=s.length;t<c;t++){let c=s[t],l=Math.floor(c.start/4),u=Math.ceil(c.count/4),d=l%i.width,f=Math.floor(l/i.width),p=u;e.pixelStorei(e.UNPACK_SKIP_PIXELS,d),e.pixelStorei(e.UNPACK_SKIP_ROWS,f),n.texSubImage2D(e.TEXTURE_2D,0,d,f,p,1,a,o,i.data)}t.clearUpdateRanges(),e.pixelStorei(e.UNPACK_ROW_LENGTH,l),e.pixelStorei(e.UNPACK_SKIP_PIXELS,u),e.pixelStorei(e.UNPACK_SKIP_ROWS,d)}}function uploadTexture(t,s,c){let l=e.TEXTURE_2D;(s.isDataArrayTexture||s.isCompressedArrayTexture)&&(l=e.TEXTURE_2D_ARRAY),s.isData3DTexture&&(l=e.TEXTURE_3D);let u=initTexture(t,s),d=s.source;n.bindTexture(l,t.__webglTexture,e.TEXTURE0+c);let f=i.get(d);if(d.version!==f.__version||u===!0){n.activeTexture(e.TEXTURE0+c);let t=U.getPrimaries(U.workingColorSpace),i=s.colorSpace===``?null:U.getPrimaries(s.colorSpace),p=s.colorSpace===``||t===i?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,s.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,s.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,s.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,p);let m=resizeImage(s.image,!1,a.maxTextureSize);m=verifyColorSpace(s,m);let h=o.convert(s.format,s.colorSpace),g=o.convert(s.type),_=getInternalFormat(s.internalFormat,h,g,s.colorSpace,s.isVideoTexture);setTextureParameters(l,s);let y,b=s.mipmaps,x=s.isVideoTexture!==!0,S=f.__version===void 0||u===!0,C=d.dataReady,w=getMipLevels(s,m);if(s.isDepthTexture)_=getInternalDepthFormat(s.format===ye,s.type),S&&(x?n.texStorage2D(e.TEXTURE_2D,1,_,m.width,m.height):n.texImage2D(e.TEXTURE_2D,0,_,m.width,m.height,0,h,g,null));else if(s.isDataTexture)if(b.length>0){x&&S&&n.texStorage2D(e.TEXTURE_2D,w,_,b[0].width,b[0].height);for(let t=0,i=b.length;t<i;t++)y=b[t],x?C&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,y.width,y.height,h,g,y.data):n.texImage2D(e.TEXTURE_2D,t,_,y.width,y.height,0,h,g,y.data);s.generateMipmaps=!1}else x?(S&&n.texStorage2D(e.TEXTURE_2D,w,_,m.width,m.height),C&&updateTexture(s,m,h,g)):n.texImage2D(e.TEXTURE_2D,0,_,m.width,m.height,0,h,g,m.data);else if(s.isCompressedTexture)if(s.isCompressedArrayTexture){x&&S&&n.texStorage3D(e.TEXTURE_2D_ARRAY,w,_,b[0].width,b[0].height,m.depth);for(let t=0,i=b.length;t<i;t++)if(y=b[t],s.format!==1023)if(h!==null)if(x){if(C)if(s.layerUpdates.size>0){let i=getByteLength(y.width,y.height,s.format,s.type);for(let a of s.layerUpdates){let o=y.data.subarray(a*i/y.data.BYTES_PER_ELEMENT,(a+1)*i/y.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,t,0,0,a,y.width,y.height,1,h,o)}s.clearLayerUpdates()}else n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,t,0,0,0,y.width,y.height,m.depth,h,y.data)}else n.compressedTexImage3D(e.TEXTURE_2D_ARRAY,t,_,y.width,y.height,m.depth,0,y.data,0,0);else warn(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`);else x?C&&n.texSubImage3D(e.TEXTURE_2D_ARRAY,t,0,0,0,y.width,y.height,m.depth,h,g,y.data):n.texImage3D(e.TEXTURE_2D_ARRAY,t,_,y.width,y.height,m.depth,0,h,g,y.data)}else{x&&S&&n.texStorage2D(e.TEXTURE_2D,w,_,b[0].width,b[0].height);for(let t=0,i=b.length;t<i;t++)y=b[t],s.format===1023?x?C&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,y.width,y.height,h,g,y.data):n.texImage2D(e.TEXTURE_2D,t,_,y.width,y.height,0,h,g,y.data):h===null?warn(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`):x?C&&n.compressedTexSubImage2D(e.TEXTURE_2D,t,0,0,y.width,y.height,h,y.data):n.compressedTexImage2D(e.TEXTURE_2D,t,_,y.width,y.height,0,y.data)}else if(s.isDataArrayTexture)if(x){if(S&&n.texStorage3D(e.TEXTURE_2D_ARRAY,w,_,m.width,m.height,m.depth),C)if(s.layerUpdates.size>0){let t=getByteLength(m.width,m.height,s.format,s.type);for(let i of s.layerUpdates){let a=m.data.subarray(i*t/m.data.BYTES_PER_ELEMENT,(i+1)*t/m.data.BYTES_PER_ELEMENT);n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,i,m.width,m.height,1,h,g,a)}s.clearLayerUpdates()}else n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,m.width,m.height,m.depth,h,g,m.data)}else n.texImage3D(e.TEXTURE_2D_ARRAY,0,_,m.width,m.height,m.depth,0,h,g,m.data);else if(s.isData3DTexture)x?(S&&n.texStorage3D(e.TEXTURE_3D,w,_,m.width,m.height,m.depth),C&&n.texSubImage3D(e.TEXTURE_3D,0,0,0,0,m.width,m.height,m.depth,h,g,m.data)):n.texImage3D(e.TEXTURE_3D,0,_,m.width,m.height,m.depth,0,h,g,m.data);else if(s.isFramebufferTexture){if(S)if(x)n.texStorage2D(e.TEXTURE_2D,w,_,m.width,m.height);else{let t=m.width,i=m.height;for(let a=0;a<w;a++)n.texImage2D(e.TEXTURE_2D,a,_,t,i,0,h,g,null),t>>=1,i>>=1}}else if(b.length>0){if(x&&S){let t=getDimensions(b[0]);n.texStorage2D(e.TEXTURE_2D,w,_,t.width,t.height)}for(let t=0,i=b.length;t<i;t++)y=b[t],x?C&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,h,g,y):n.texImage2D(e.TEXTURE_2D,t,_,h,g,y);s.generateMipmaps=!1}else if(x){if(S){let t=getDimensions(m);n.texStorage2D(e.TEXTURE_2D,w,_,t.width,t.height)}C&&n.texSubImage2D(e.TEXTURE_2D,0,0,0,h,g,m)}else n.texImage2D(e.TEXTURE_2D,0,_,h,g,m);textureNeedsGenerateMipmaps(s)&&generateMipmap(l),f.__version=d.version,s.onUpdate&&s.onUpdate(s)}t.__version=s.version}function uploadCubeTexture(t,s,c){if(s.image.length!==6)return;let l=initTexture(t,s),u=s.source;n.bindTexture(e.TEXTURE_CUBE_MAP,t.__webglTexture,e.TEXTURE0+c);let d=i.get(u);if(u.version!==d.__version||l===!0){n.activeTexture(e.TEXTURE0+c);let t=U.getPrimaries(U.workingColorSpace),i=s.colorSpace===``?null:U.getPrimaries(s.colorSpace),f=s.colorSpace===``||t===i?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,s.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,s.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,s.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,f);let p=s.isCompressedTexture||s.image[0].isCompressedTexture,m=s.image[0]&&s.image[0].isDataTexture,h=[];for(let e=0;e<6;e++)!p&&!m?h[e]=resizeImage(s.image[e],!0,a.maxCubemapSize):h[e]=m?s.image[e].image:s.image[e],h[e]=verifyColorSpace(s,h[e]);let g=h[0],_=o.convert(s.format,s.colorSpace),y=o.convert(s.type),b=getInternalFormat(s.internalFormat,_,y,s.colorSpace),x=s.isVideoTexture!==!0,S=d.__version===void 0||l===!0,C=u.dataReady,w=getMipLevels(s,g);setTextureParameters(e.TEXTURE_CUBE_MAP,s);let T;if(p){x&&S&&n.texStorage2D(e.TEXTURE_CUBE_MAP,w,b,g.width,g.height);for(let t=0;t<6;t++){T=h[t].mipmaps;for(let i=0;i<T.length;i++){let a=T[i];s.format===1023?x?C&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,i,0,0,a.width,a.height,_,y,a.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,i,b,a.width,a.height,0,_,y,a.data):_===null?warn(`WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()`):x?C&&n.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,i,0,0,a.width,a.height,_,a.data):n.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,i,b,a.width,a.height,0,a.data)}}}else{if(T=s.mipmaps,x&&S){T.length>0&&w++;let t=getDimensions(h[0]);n.texStorage2D(e.TEXTURE_CUBE_MAP,w,b,t.width,t.height)}for(let t=0;t<6;t++)if(m){x?C&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,h[t].width,h[t].height,_,y,h[t].data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,b,h[t].width,h[t].height,0,_,y,h[t].data);for(let i=0;i<T.length;i++){let a=T[i].image[t].image;x?C&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,i+1,0,0,a.width,a.height,_,y,a.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,i+1,b,a.width,a.height,0,_,y,a.data)}}else{x?C&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,_,y,h[t]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,b,_,y,h[t]);for(let i=0;i<T.length;i++){let a=T[i];x?C&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,i+1,0,0,_,y,a.image[t]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,i+1,b,_,y,a.image[t])}}}textureNeedsGenerateMipmaps(s)&&generateMipmap(e.TEXTURE_CUBE_MAP),d.__version=u.version,s.onUpdate&&s.onUpdate(s)}t.__version=s.version}function setupFrameBufferTexture(t,a,s,l,u,d){let f=o.convert(s.format,s.colorSpace),p=o.convert(s.type),m=getInternalFormat(s.internalFormat,f,p,s.colorSpace),h=i.get(a),g=i.get(s);if(g.__renderTarget=a,!h.__hasExternalTextures){let t=Math.max(1,a.width>>d),i=Math.max(1,a.height>>d);u===e.TEXTURE_3D||u===e.TEXTURE_2D_ARRAY?n.texImage3D(u,d,m,t,i,a.depth,0,f,p,null):n.texImage2D(u,d,m,t,i,0,f,p,null)}n.bindFramebuffer(e.FRAMEBUFFER,t),useMultisampledRTT(a)?c.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,l,u,g.__webglTexture,0,getRenderTargetSamples(a)):(u===e.TEXTURE_2D||u>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&u<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,l,u,g.__webglTexture,d),n.bindFramebuffer(e.FRAMEBUFFER,null)}function setupRenderBufferStorage(t,n,i){if(e.bindRenderbuffer(e.RENDERBUFFER,t),n.depthBuffer){let a=n.depthTexture,o=a&&a.isDepthTexture?a.type:null,s=getInternalDepthFormat(n.stencilBuffer,o),l=n.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;useMultisampledRTT(n)?c.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,getRenderTargetSamples(n),s,n.width,n.height):i?e.renderbufferStorageMultisample(e.RENDERBUFFER,getRenderTargetSamples(n),s,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,s,n.width,n.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,l,e.RENDERBUFFER,t)}else{let t=n.textures;for(let a=0;a<t.length;a++){let s=t[a],l=o.convert(s.format,s.colorSpace),u=o.convert(s.type),d=getInternalFormat(s.internalFormat,l,u,s.colorSpace);useMultisampledRTT(n)?c.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,getRenderTargetSamples(n),d,n.width,n.height):i?e.renderbufferStorageMultisample(e.RENDERBUFFER,getRenderTargetSamples(n),d,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,d,n.width,n.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function setupDepthTexture(t,a,s){let l=a.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(e.FRAMEBUFFER,t),!(a.depthTexture&&a.depthTexture.isDepthTexture))throw Error(`renderTarget.depthTexture must be an instance of THREE.DepthTexture`);let u=i.get(a.depthTexture);if(u.__renderTarget=a,(!u.__webglTexture||a.depthTexture.image.width!==a.width||a.depthTexture.image.height!==a.height)&&(a.depthTexture.image.width=a.width,a.depthTexture.image.height=a.height,a.depthTexture.needsUpdate=!0),l){if(u.__webglInit===void 0&&(u.__webglInit=!0,a.depthTexture.addEventListener(`dispose`,onTextureDispose)),u.__webglTexture===void 0){u.__webglTexture=e.createTexture(),n.bindTexture(e.TEXTURE_CUBE_MAP,u.__webglTexture),setTextureParameters(e.TEXTURE_CUBE_MAP,a.depthTexture);let t=o.convert(a.depthTexture.format),i=o.convert(a.depthTexture.type),s;a.depthTexture.format===1026?s=e.DEPTH_COMPONENT24:a.depthTexture.format===1027&&(s=e.DEPTH24_STENCIL8);for(let n=0;n<6;n++)e.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+n,0,s,a.width,a.height,0,t,i,null)}}else setTexture2D(a.depthTexture,0);let d=u.__webglTexture,f=getRenderTargetSamples(a),p=l?e.TEXTURE_CUBE_MAP_POSITIVE_X+s:e.TEXTURE_2D,m=a.depthTexture.format===1027?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;if(a.depthTexture.format===1026)useMultisampledRTT(a)?c.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,m,p,d,0,f):e.framebufferTexture2D(e.FRAMEBUFFER,m,p,d,0);else if(a.depthTexture.format===1027)useMultisampledRTT(a)?c.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,m,p,d,0,f):e.framebufferTexture2D(e.FRAMEBUFFER,m,p,d,0);else throw Error(`Unknown depthTexture format`)}function setupDepthRenderbuffer(t){let a=i.get(t),o=t.isWebGLCubeRenderTarget===!0;if(a.__boundDepthTexture!==t.depthTexture){let e=t.depthTexture;if(a.__depthDisposeCallback&&a.__depthDisposeCallback(),e){let disposeEvent=()=>{delete a.__boundDepthTexture,delete a.__depthDisposeCallback,e.removeEventListener(`dispose`,disposeEvent)};e.addEventListener(`dispose`,disposeEvent),a.__depthDisposeCallback=disposeEvent}a.__boundDepthTexture=e}if(t.depthTexture&&!a.__autoAllocateDepthBuffer)if(o)for(let e=0;e<6;e++)setupDepthTexture(a.__webglFramebuffer[e],t,e);else{let e=t.texture.mipmaps;e&&e.length>0?setupDepthTexture(a.__webglFramebuffer[0],t,0):setupDepthTexture(a.__webglFramebuffer,t,0)}else if(o){a.__webglDepthbuffer=[];for(let i=0;i<6;i++)if(n.bindFramebuffer(e.FRAMEBUFFER,a.__webglFramebuffer[i]),a.__webglDepthbuffer[i]===void 0)a.__webglDepthbuffer[i]=e.createRenderbuffer(),setupRenderBufferStorage(a.__webglDepthbuffer[i],t,!1);else{let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,o=a.__webglDepthbuffer[i];e.bindRenderbuffer(e.RENDERBUFFER,o),e.framebufferRenderbuffer(e.FRAMEBUFFER,n,e.RENDERBUFFER,o)}}else{let i=t.texture.mipmaps;if(i&&i.length>0?n.bindFramebuffer(e.FRAMEBUFFER,a.__webglFramebuffer[0]):n.bindFramebuffer(e.FRAMEBUFFER,a.__webglFramebuffer),a.__webglDepthbuffer===void 0)a.__webglDepthbuffer=e.createRenderbuffer(),setupRenderBufferStorage(a.__webglDepthbuffer,t,!1);else{let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,i=a.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,i),e.framebufferRenderbuffer(e.FRAMEBUFFER,n,e.RENDERBUFFER,i)}}n.bindFramebuffer(e.FRAMEBUFFER,null)}function rebindTextures(t,n,a){let o=i.get(t);n!==void 0&&setupFrameBufferTexture(o.__webglFramebuffer,t,t.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),a!==void 0&&setupDepthRenderbuffer(t)}function setupRenderTarget(t){let a=t.texture,c=i.get(t),l=i.get(a);t.addEventListener(`dispose`,onRenderTargetDispose);let u=t.textures,d=t.isWebGLCubeRenderTarget===!0,f=u.length>1;if(f||(l.__webglTexture===void 0&&(l.__webglTexture=e.createTexture()),l.__version=a.version,s.memory.textures++),d){c.__webglFramebuffer=[];for(let t=0;t<6;t++)if(a.mipmaps&&a.mipmaps.length>0){c.__webglFramebuffer[t]=[];for(let n=0;n<a.mipmaps.length;n++)c.__webglFramebuffer[t][n]=e.createFramebuffer()}else c.__webglFramebuffer[t]=e.createFramebuffer()}else{if(a.mipmaps&&a.mipmaps.length>0){c.__webglFramebuffer=[];for(let t=0;t<a.mipmaps.length;t++)c.__webglFramebuffer[t]=e.createFramebuffer()}else c.__webglFramebuffer=e.createFramebuffer();if(f)for(let t=0,n=u.length;t<n;t++){let n=i.get(u[t]);n.__webglTexture===void 0&&(n.__webglTexture=e.createTexture(),s.memory.textures++)}if(t.samples>0&&useMultisampledRTT(t)===!1){c.__webglMultisampledFramebuffer=e.createFramebuffer(),c.__webglColorRenderbuffer=[],n.bindFramebuffer(e.FRAMEBUFFER,c.__webglMultisampledFramebuffer);for(let n=0;n<u.length;n++){let i=u[n];c.__webglColorRenderbuffer[n]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,c.__webglColorRenderbuffer[n]);let a=o.convert(i.format,i.colorSpace),s=o.convert(i.type),l=getInternalFormat(i.internalFormat,a,s,i.colorSpace,t.isXRRenderTarget===!0),d=getRenderTargetSamples(t);e.renderbufferStorageMultisample(e.RENDERBUFFER,d,l,t.width,t.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+n,e.RENDERBUFFER,c.__webglColorRenderbuffer[n])}e.bindRenderbuffer(e.RENDERBUFFER,null),t.depthBuffer&&(c.__webglDepthRenderbuffer=e.createRenderbuffer(),setupRenderBufferStorage(c.__webglDepthRenderbuffer,t,!0)),n.bindFramebuffer(e.FRAMEBUFFER,null)}}if(d){n.bindTexture(e.TEXTURE_CUBE_MAP,l.__webglTexture),setTextureParameters(e.TEXTURE_CUBE_MAP,a);for(let n=0;n<6;n++)if(a.mipmaps&&a.mipmaps.length>0)for(let i=0;i<a.mipmaps.length;i++)setupFrameBufferTexture(c.__webglFramebuffer[n][i],t,a,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+n,i);else setupFrameBufferTexture(c.__webglFramebuffer[n],t,a,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+n,0);textureNeedsGenerateMipmaps(a)&&generateMipmap(e.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(f){for(let a=0,o=u.length;a<o;a++){let o=u[a],s=i.get(o),l=e.TEXTURE_2D;(t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(l=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(l,s.__webglTexture),setTextureParameters(l,o),setupFrameBufferTexture(c.__webglFramebuffer,t,o,e.COLOR_ATTACHMENT0+a,l,0),textureNeedsGenerateMipmaps(o)&&generateMipmap(l)}n.unbindTexture()}else{let i=e.TEXTURE_2D;if((t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(i=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(i,l.__webglTexture),setTextureParameters(i,a),a.mipmaps&&a.mipmaps.length>0)for(let n=0;n<a.mipmaps.length;n++)setupFrameBufferTexture(c.__webglFramebuffer[n],t,a,e.COLOR_ATTACHMENT0,i,n);else setupFrameBufferTexture(c.__webglFramebuffer,t,a,e.COLOR_ATTACHMENT0,i,0);textureNeedsGenerateMipmaps(a)&&generateMipmap(i),n.unbindTexture()}t.depthBuffer&&setupDepthRenderbuffer(t)}function updateRenderTargetMipmap(e){let t=e.textures;for(let a=0,o=t.length;a<o;a++){let o=t[a];if(textureNeedsGenerateMipmaps(o)){let t=getTargetType(e),a=i.get(o).__webglTexture;n.bindTexture(t,a),generateMipmap(t),n.unbindTexture()}}}let b=[],x=[];function updateMultisampleRenderTarget(t){if(t.samples>0){if(useMultisampledRTT(t)===!1){let a=t.textures,o=t.width,s=t.height,c=e.COLOR_BUFFER_BIT,u=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,d=i.get(t),f=a.length>1;if(f)for(let t=0;t<a.length;t++)n.bindFramebuffer(e.FRAMEBUFFER,d.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,null),n.bindFramebuffer(e.FRAMEBUFFER,d.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,null,0);n.bindFramebuffer(e.READ_FRAMEBUFFER,d.__webglMultisampledFramebuffer);let p=t.texture.mipmaps;p&&p.length>0?n.bindFramebuffer(e.DRAW_FRAMEBUFFER,d.__webglFramebuffer[0]):n.bindFramebuffer(e.DRAW_FRAMEBUFFER,d.__webglFramebuffer);for(let n=0;n<a.length;n++){if(t.resolveDepthBuffer&&(t.depthBuffer&&(c|=e.DEPTH_BUFFER_BIT),t.stencilBuffer&&t.resolveStencilBuffer&&(c|=e.STENCIL_BUFFER_BIT)),f){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,d.__webglColorRenderbuffer[n]);let t=i.get(a[n]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,t,0)}e.blitFramebuffer(0,0,o,s,0,0,o,s,c,e.NEAREST),l===!0&&(b.length=0,x.length=0,b.push(e.COLOR_ATTACHMENT0+n),t.depthBuffer&&t.resolveDepthBuffer===!1&&(b.push(u),x.push(u),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,x)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,b))}if(n.bindFramebuffer(e.READ_FRAMEBUFFER,null),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),f)for(let t=0;t<a.length;t++){n.bindFramebuffer(e.FRAMEBUFFER,d.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,d.__webglColorRenderbuffer[t]);let o=i.get(a[t]).__webglTexture;n.bindFramebuffer(e.FRAMEBUFFER,d.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,o,0)}n.bindFramebuffer(e.DRAW_FRAMEBUFFER,d.__webglMultisampledFramebuffer)}else if(t.depthBuffer&&t.resolveDepthBuffer===!1&&l){let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[n])}}}function getRenderTargetSamples(e){return Math.min(a.maxSamples,e.samples)}function useMultisampledRTT(e){let n=i.get(e);return e.samples>0&&t.has(`WEBGL_multisampled_render_to_texture`)===!0&&n.__useRenderToTexture!==!1}function updateVideoTexture(e){let t=s.render.frame;d.get(e)!==t&&(d.set(e,t),e.update())}function verifyColorSpace(e,t){let n=e.colorSpace,i=e.format,a=e.type;return e.isCompressedTexture===!0||e.isVideoTexture===!0||n!==`srgb-linear`&&n!==``&&(U.getTransfer(n)===`srgb`?(i!==1023||a!==1009)&&warn(`WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.`):error(`WebGLTextures: Unsupported texture color space:`,n)),t}function getDimensions(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement?(u.width=e.naturalWidth||e.width,u.height=e.naturalHeight||e.height):typeof VideoFrame<`u`&&e instanceof VideoFrame?(u.width=e.displayWidth,u.height=e.displayHeight):(u.width=e.width,u.height=e.height),u}this.allocateTextureUnit=allocateTextureUnit,this.resetTextureUnits=resetTextureUnits,this.setTexture2D=setTexture2D,this.setTexture2DArray=setTexture2DArray,this.setTexture3D=setTexture3D,this.setTextureCube=setTextureCube,this.rebindTextures=rebindTextures,this.setupRenderTarget=setupRenderTarget,this.updateRenderTargetMipmap=updateRenderTargetMipmap,this.updateMultisampleRenderTarget=updateMultisampleRenderTarget,this.setupDepthRenderbuffer=setupDepthRenderbuffer,this.setupFrameBufferTexture=setupFrameBufferTexture,this.useMultisampledRTT=useMultisampledRTT,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function WebGLUtils(e,t){function convert(n,i=``){let a,o=U.getTransfer(i);if(n===1009)return e.UNSIGNED_BYTE;if(n===1017)return e.UNSIGNED_SHORT_4_4_4_4;if(n===1018)return e.UNSIGNED_SHORT_5_5_5_1;if(n===35902)return e.UNSIGNED_INT_5_9_9_9_REV;if(n===35899)return e.UNSIGNED_INT_10F_11F_11F_REV;if(n===1010)return e.BYTE;if(n===1011)return e.SHORT;if(n===1012)return e.UNSIGNED_SHORT;if(n===1013)return e.INT;if(n===1014)return e.UNSIGNED_INT;if(n===1015)return e.FLOAT;if(n===1016)return e.HALF_FLOAT;if(n===1021)return e.ALPHA;if(n===1022)return e.RGB;if(n===1023)return e.RGBA;if(n===1026)return e.DEPTH_COMPONENT;if(n===1027)return e.DEPTH_STENCIL;if(n===1028)return e.RED;if(n===1029)return e.RED_INTEGER;if(n===1030)return e.RG;if(n===1031)return e.RG_INTEGER;if(n===1033)return e.RGBA_INTEGER;if(n===33776||n===33777||n===33778||n===33779)if(o===`srgb`)if(a=t.get(`WEBGL_compressed_texture_s3tc_srgb`),a!==null){if(n===33776)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===33777)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===33778)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===33779)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=t.get(`WEBGL_compressed_texture_s3tc`),a!==null){if(n===33776)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===33777)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===33778)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===33779)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===35840||n===35841||n===35842||n===35843)if(a=t.get(`WEBGL_compressed_texture_pvrtc`),a!==null){if(n===35840)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===35841)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===35842)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===35843)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===36196||n===37492||n===37496||n===37488||n===37489||n===37490||n===37491)if(a=t.get(`WEBGL_compressed_texture_etc`),a!==null){if(n===36196||n===37492)return o===`srgb`?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(n===37496)return o===`srgb`?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC;if(n===37488)return a.COMPRESSED_R11_EAC;if(n===37489)return a.COMPRESSED_SIGNED_R11_EAC;if(n===37490)return a.COMPRESSED_RG11_EAC;if(n===37491)return a.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===37808||n===37809||n===37810||n===37811||n===37812||n===37813||n===37814||n===37815||n===37816||n===37817||n===37818||n===37819||n===37820||n===37821)if(a=t.get(`WEBGL_compressed_texture_astc`),a!==null){if(n===37808)return o===`srgb`?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===37809)return o===`srgb`?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===37810)return o===`srgb`?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===37811)return o===`srgb`?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===37812)return o===`srgb`?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===37813)return o===`srgb`?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===37814)return o===`srgb`?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===37815)return o===`srgb`?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===37816)return o===`srgb`?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===37817)return o===`srgb`?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===37818)return o===`srgb`?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===37819)return o===`srgb`?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===37820)return o===`srgb`?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===37821)return o===`srgb`?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===36492||n===36494||n===36495)if(a=t.get(`EXT_texture_compression_bptc`),a!==null){if(n===36492)return o===`srgb`?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===36494)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===36495)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===36283||n===36284||n===36285||n===36286)if(a=t.get(`EXT_texture_compression_rgtc`),a!==null){if(n===36283)return a.COMPRESSED_RED_RGTC1_EXT;if(n===36284)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===36285)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===36286)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===1020?e.UNSIGNED_INT_24_8:e[n]===void 0?null:e[n]}return{convert}}var Wa=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Ga=`
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

}`,WebXRDepthSensing=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new ExternalTexture(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new ShaderMaterial({vertexShader:Wa,fragmentShader:Ga,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Mesh(new vi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},WebXRManager=class extends EventDispatcher{constructor(e,t){super();let n=this,i=null,a=1,o=null,s=`local-floor`,c=1,l=null,u=null,d=null,f=null,p=null,m=null,h=typeof XRWebGLBinding<`u`,g=new WebXRDepthSensing,_={},y=t.getContextAttributes(),b=null,x=null,S=[],C=[],w=new B,T=null,E=new PerspectiveCamera;E.viewport=new W;let D=new PerspectiveCamera;D.viewport=new W;let O=[E,D],k=new ArrayCamera,A=null,j=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(e){let t=S[e];return t===void 0&&(t=new WebXRController,S[e]=t),t.getTargetRaySpace()},this.getControllerGrip=function(e){let t=S[e];return t===void 0&&(t=new WebXRController,S[e]=t),t.getGripSpace()},this.getHand=function(e){let t=S[e];return t===void 0&&(t=new WebXRController,S[e]=t),t.getHandSpace()};function onSessionEvent(e){let t=C.indexOf(e.inputSource);if(t===-1)return;let n=S[t];n!==void 0&&(n.update(e.inputSource,e.frame,l||o),n.dispatchEvent({type:e.type,data:e.inputSource}))}function onSessionEnd(){i.removeEventListener(`select`,onSessionEvent),i.removeEventListener(`selectstart`,onSessionEvent),i.removeEventListener(`selectend`,onSessionEvent),i.removeEventListener(`squeeze`,onSessionEvent),i.removeEventListener(`squeezestart`,onSessionEvent),i.removeEventListener(`squeezeend`,onSessionEvent),i.removeEventListener(`end`,onSessionEnd),i.removeEventListener(`inputsourceschange`,onInputSourcesChange);for(let e=0;e<S.length;e++){let t=C[e];t!==null&&(C[e]=null,S[e].disconnect(t))}A=null,j=null,g.reset();for(let e in _)delete _[e];e.setRenderTarget(b),p=null,f=null,d=null,i=null,x=null,F.stop(),n.isPresenting=!1,e.setPixelRatio(T),e.setSize(w.width,w.height,!1),n.dispatchEvent({type:`sessionend`})}this.setFramebufferScaleFactor=function(e){a=e,n.isPresenting===!0&&warn(`WebXRManager: Cannot change framebuffer scale while presenting.`)},this.setReferenceSpaceType=function(e){s=e,n.isPresenting===!0&&warn(`WebXRManager: Cannot change reference space type while presenting.`)},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(e){l=e},this.getBaseLayer=function(){return f===null?p:f},this.getBinding=function(){return d===null&&h&&(d=new XRWebGLBinding(i,t)),d},this.getFrame=function(){return m},this.getSession=function(){return i},this.setSession=async function(u){if(i=u,i!==null){if(b=e.getRenderTarget(),i.addEventListener(`select`,onSessionEvent),i.addEventListener(`selectstart`,onSessionEvent),i.addEventListener(`selectend`,onSessionEvent),i.addEventListener(`squeeze`,onSessionEvent),i.addEventListener(`squeezestart`,onSessionEvent),i.addEventListener(`squeezeend`,onSessionEvent),i.addEventListener(`end`,onSessionEnd),i.addEventListener(`inputsourceschange`,onInputSourcesChange),y.xrCompatible!==!0&&await t.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(w),h&&`createProjectionLayer`in XRWebGLBinding.prototype){let n=null,o=null,s=null;y.depth&&(s=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,n=y.stencil?ye:ve,o=y.stencil?fe:se);let c={colorFormat:t.RGBA8,depthFormat:s,scaleFactor:a};d=this.getBinding(),f=d.createProjectionLayer(c),i.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),x=new WebGLRenderTarget(f.textureWidth,f.textureHeight,{format:_e,type:ne,depthTexture:new DepthTexture(f.textureWidth,f.textureHeight,o,void 0,void 0,void 0,void 0,void 0,void 0,n),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{let n={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:a};p=new XRWebGLLayer(i,t,n),i.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),x=new WebGLRenderTarget(p.framebufferWidth,p.framebufferHeight,{format:_e,type:ne,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await i.requestReferenceSpace(s),F.setContext(i),F.start(),n.isPresenting=!0,n.dispatchEvent({type:`sessionstart`})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function onInputSourcesChange(e){for(let t=0;t<e.removed.length;t++){let n=e.removed[t],i=C.indexOf(n);i>=0&&(C[i]=null,S[i].disconnect(n))}for(let t=0;t<e.added.length;t++){let n=e.added[t],i=C.indexOf(n);if(i===-1){for(let e=0;e<S.length;e++)if(e>=C.length){C.push(n),i=e;break}else if(C[e]===null){C[e]=n,i=e;break}if(i===-1)break}let a=S[i];a&&a.connect(n)}}let M=new V,N=new V;function setProjectionFromUnion(e,t,n){M.setFromMatrixPosition(t.matrixWorld),N.setFromMatrixPosition(n.matrixWorld);let i=M.distanceTo(N),a=t.projectionMatrix.elements,o=n.projectionMatrix.elements,s=a[14]/(a[10]-1),c=a[14]/(a[10]+1),l=(a[9]+1)/a[5],u=(a[9]-1)/a[5],d=(a[8]-1)/a[0],f=(o[8]+1)/o[0],p=s*d,m=s*f,h=i/(-d+f),g=h*-d;if(t.matrixWorld.decompose(e.position,e.quaternion,e.scale),e.translateX(g),e.translateZ(h),e.matrixWorld.compose(e.position,e.quaternion,e.scale),e.matrixWorldInverse.copy(e.matrixWorld).invert(),a[10]===-1)e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse);else{let t=s+h,n=c+h,a=p-g,o=m+(i-g),d=l*c/n*t,f=u*c/n*t;e.projectionMatrix.makePerspective(a,o,d,f,t,n),e.projectionMatrixInverse.copy(e.projectionMatrix).invert()}}function updateCamera(e,t){t===null?e.matrixWorld.copy(e.matrix):e.matrixWorld.multiplyMatrices(t.matrixWorld,e.matrix),e.matrixWorldInverse.copy(e.matrixWorld).invert()}this.updateCamera=function(e){if(i===null)return;let t=e.near,n=e.far;g.texture!==null&&(g.depthNear>0&&(t=g.depthNear),g.depthFar>0&&(n=g.depthFar)),k.near=D.near=E.near=t,k.far=D.far=E.far=n,(A!==k.near||j!==k.far)&&(i.updateRenderState({depthNear:k.near,depthFar:k.far}),A=k.near,j=k.far),k.layers.mask=e.layers.mask|6,E.layers.mask=k.layers.mask&-5,D.layers.mask=k.layers.mask&-3;let a=e.parent,o=k.cameras;updateCamera(k,a);for(let e=0;e<o.length;e++)updateCamera(o[e],a);o.length===2?setProjectionFromUnion(k,E,D):k.projectionMatrix.copy(E.projectionMatrix),updateUserCamera(e,k,a)};function updateUserCamera(e,t,n){n===null?e.matrix.copy(t.matrixWorld):(e.matrix.copy(n.matrixWorld),e.matrix.invert(),e.matrix.multiply(t.matrixWorld)),e.matrix.decompose(e.position,e.quaternion,e.scale),e.updateMatrixWorld(!0),e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse),e.isPerspectiveCamera&&(e.fov=Tt*2*Math.atan(1/e.projectionMatrix.elements[5]),e.zoom=1)}this.getCamera=function(){return k},this.getFoveation=function(){if(!(f===null&&p===null))return c},this.setFoveation=function(e){c=e,f!==null&&(f.fixedFoveation=e),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=e)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(k)},this.getCameraTexture=function(e){return _[e]};let P=null;function onAnimationFrame(t,a){if(u=a.getViewerPose(l||o),m=a,u!==null){let t=u.views;p!==null&&(e.setRenderTargetFramebuffer(x,p.framebuffer),e.setRenderTarget(x));let a=!1;t.length!==k.cameras.length&&(k.cameras.length=0,a=!0);for(let n=0;n<t.length;n++){let i=t[n],o=null;if(p!==null)o=p.getViewport(i);else{let t=d.getViewSubImage(f,i);o=t.viewport,n===0&&(e.setRenderTargetTextures(x,t.colorTexture,t.depthStencilTexture),e.setRenderTarget(x))}let s=O[n];s===void 0&&(s=new PerspectiveCamera,s.layers.enable(n),s.viewport=new W,O[n]=s),s.matrix.fromArray(i.transform.matrix),s.matrix.decompose(s.position,s.quaternion,s.scale),s.projectionMatrix.fromArray(i.projectionMatrix),s.projectionMatrixInverse.copy(s.projectionMatrix).invert(),s.viewport.set(o.x,o.y,o.width,o.height),n===0&&(k.matrix.copy(s.matrix),k.matrix.decompose(k.position,k.quaternion,k.scale)),a===!0&&k.cameras.push(s)}let o=i.enabledFeatures;if(o&&o.includes(`depth-sensing`)&&i.depthUsage==`gpu-optimized`&&h){d=n.getBinding();let e=d.getDepthInformation(t[0]);e&&e.isValid&&e.texture&&g.init(e,i.renderState)}if(o&&o.includes(`camera-access`)&&h){e.state.unbindTexture(),d=n.getBinding();for(let e=0;e<t.length;e++){let n=t[e].camera;if(n){let e=_[n];e||(e=new ExternalTexture,_[n]=e);let t=d.getCameraImage(n);e.sourceTexture=t}}}}for(let e=0;e<S.length;e++){let t=C[e],n=S[e];t!==null&&n!==void 0&&n.update(t,a,l||o)}P&&P(t,a),a.detectedPlanes&&n.dispatchEvent({type:`planesdetected`,data:a}),m=null}let F=new WebGLAnimation;F.setAnimationLoop(onAnimationFrame),this.setAnimationLoop=function(e){P=e},this.dispose=function(){}}},Ka=new Kt,qa=new G;function WebGLMaterials(e,t){function refreshTransformUniform(e,t){e.matrixAutoUpdate===!0&&e.updateMatrix(),t.value.copy(e.matrix)}function refreshFogUniforms(t,n){n.color.getRGB(t.fogColor.value,getUnlitUniformColorSpace(e)),n.isFog?(t.fogNear.value=n.near,t.fogFar.value=n.far):n.isFogExp2&&(t.fogDensity.value=n.density)}function refreshMaterialUniforms(e,t,n,i,a){t.isMeshBasicMaterial?refreshUniformsCommon(e,t):t.isMeshLambertMaterial?(refreshUniformsCommon(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshToonMaterial?(refreshUniformsCommon(e,t),refreshUniformsToon(e,t)):t.isMeshPhongMaterial?(refreshUniformsCommon(e,t),refreshUniformsPhong(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshStandardMaterial?(refreshUniformsCommon(e,t),refreshUniformsStandard(e,t),t.isMeshPhysicalMaterial&&refreshUniformsPhysical(e,t,a)):t.isMeshMatcapMaterial?(refreshUniformsCommon(e,t),refreshUniformsMatcap(e,t)):t.isMeshDepthMaterial?refreshUniformsCommon(e,t):t.isMeshDistanceMaterial?(refreshUniformsCommon(e,t),refreshUniformsDistance(e,t)):t.isMeshNormalMaterial?refreshUniformsCommon(e,t):t.isLineBasicMaterial?(refreshUniformsLine(e,t),t.isLineDashedMaterial&&refreshUniformsDash(e,t)):t.isPointsMaterial?refreshUniformsPoints(e,t,n,i):t.isSpriteMaterial?refreshUniformsSprites(e,t):t.isShadowMaterial?(e.color.value.copy(t.color),e.opacity.value=t.opacity):t.isShaderMaterial&&(t.uniformsNeedUpdate=!1)}function refreshUniformsCommon(e,n){e.opacity.value=n.opacity,n.color&&e.diffuse.value.copy(n.color),n.emissive&&e.emissive.value.copy(n.emissive).multiplyScalar(n.emissiveIntensity),n.map&&(e.map.value=n.map,refreshTransformUniform(n.map,e.mapTransform)),n.alphaMap&&(e.alphaMap.value=n.alphaMap,refreshTransformUniform(n.alphaMap,e.alphaMapTransform)),n.bumpMap&&(e.bumpMap.value=n.bumpMap,refreshTransformUniform(n.bumpMap,e.bumpMapTransform),e.bumpScale.value=n.bumpScale,n.side===1&&(e.bumpScale.value*=-1)),n.normalMap&&(e.normalMap.value=n.normalMap,refreshTransformUniform(n.normalMap,e.normalMapTransform),e.normalScale.value.copy(n.normalScale),n.side===1&&e.normalScale.value.negate()),n.displacementMap&&(e.displacementMap.value=n.displacementMap,refreshTransformUniform(n.displacementMap,e.displacementMapTransform),e.displacementScale.value=n.displacementScale,e.displacementBias.value=n.displacementBias),n.emissiveMap&&(e.emissiveMap.value=n.emissiveMap,refreshTransformUniform(n.emissiveMap,e.emissiveMapTransform)),n.specularMap&&(e.specularMap.value=n.specularMap,refreshTransformUniform(n.specularMap,e.specularMapTransform)),n.alphaTest>0&&(e.alphaTest.value=n.alphaTest);let i=t.get(n),a=i.envMap,o=i.envMapRotation;a&&(e.envMap.value=a,Ka.copy(o),Ka.x*=-1,Ka.y*=-1,Ka.z*=-1,a.isCubeTexture&&a.isRenderTargetTexture===!1&&(Ka.y*=-1,Ka.z*=-1),e.envMapRotation.value.setFromMatrix4(qa.makeRotationFromEuler(Ka)),e.flipEnvMap.value=a.isCubeTexture&&a.isRenderTargetTexture===!1?-1:1,e.reflectivity.value=n.reflectivity,e.ior.value=n.ior,e.refractionRatio.value=n.refractionRatio),n.lightMap&&(e.lightMap.value=n.lightMap,e.lightMapIntensity.value=n.lightMapIntensity,refreshTransformUniform(n.lightMap,e.lightMapTransform)),n.aoMap&&(e.aoMap.value=n.aoMap,e.aoMapIntensity.value=n.aoMapIntensity,refreshTransformUniform(n.aoMap,e.aoMapTransform))}function refreshUniformsLine(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,t.map&&(e.map.value=t.map,refreshTransformUniform(t.map,e.mapTransform))}function refreshUniformsDash(e,t){e.dashSize.value=t.dashSize,e.totalSize.value=t.dashSize+t.gapSize,e.scale.value=t.scale}function refreshUniformsPoints(e,t,n,i){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.size.value=t.size*n,e.scale.value=i*.5,t.map&&(e.map.value=t.map,refreshTransformUniform(t.map,e.uvTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,refreshTransformUniform(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function refreshUniformsSprites(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.rotation.value=t.rotation,t.map&&(e.map.value=t.map,refreshTransformUniform(t.map,e.mapTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,refreshTransformUniform(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function refreshUniformsPhong(e,t){e.specular.value.copy(t.specular),e.shininess.value=Math.max(t.shininess,1e-4)}function refreshUniformsToon(e,t){t.gradientMap&&(e.gradientMap.value=t.gradientMap)}function refreshUniformsStandard(e,t){e.metalness.value=t.metalness,t.metalnessMap&&(e.metalnessMap.value=t.metalnessMap,refreshTransformUniform(t.metalnessMap,e.metalnessMapTransform)),e.roughness.value=t.roughness,t.roughnessMap&&(e.roughnessMap.value=t.roughnessMap,refreshTransformUniform(t.roughnessMap,e.roughnessMapTransform)),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)}function refreshUniformsPhysical(e,t,n){e.ior.value=t.ior,t.sheen>0&&(e.sheenColor.value.copy(t.sheenColor).multiplyScalar(t.sheen),e.sheenRoughness.value=t.sheenRoughness,t.sheenColorMap&&(e.sheenColorMap.value=t.sheenColorMap,refreshTransformUniform(t.sheenColorMap,e.sheenColorMapTransform)),t.sheenRoughnessMap&&(e.sheenRoughnessMap.value=t.sheenRoughnessMap,refreshTransformUniform(t.sheenRoughnessMap,e.sheenRoughnessMapTransform))),t.clearcoat>0&&(e.clearcoat.value=t.clearcoat,e.clearcoatRoughness.value=t.clearcoatRoughness,t.clearcoatMap&&(e.clearcoatMap.value=t.clearcoatMap,refreshTransformUniform(t.clearcoatMap,e.clearcoatMapTransform)),t.clearcoatRoughnessMap&&(e.clearcoatRoughnessMap.value=t.clearcoatRoughnessMap,refreshTransformUniform(t.clearcoatRoughnessMap,e.clearcoatRoughnessMapTransform)),t.clearcoatNormalMap&&(e.clearcoatNormalMap.value=t.clearcoatNormalMap,refreshTransformUniform(t.clearcoatNormalMap,e.clearcoatNormalMapTransform),e.clearcoatNormalScale.value.copy(t.clearcoatNormalScale),t.side===1&&e.clearcoatNormalScale.value.negate())),t.dispersion>0&&(e.dispersion.value=t.dispersion),t.iridescence>0&&(e.iridescence.value=t.iridescence,e.iridescenceIOR.value=t.iridescenceIOR,e.iridescenceThicknessMinimum.value=t.iridescenceThicknessRange[0],e.iridescenceThicknessMaximum.value=t.iridescenceThicknessRange[1],t.iridescenceMap&&(e.iridescenceMap.value=t.iridescenceMap,refreshTransformUniform(t.iridescenceMap,e.iridescenceMapTransform)),t.iridescenceThicknessMap&&(e.iridescenceThicknessMap.value=t.iridescenceThicknessMap,refreshTransformUniform(t.iridescenceThicknessMap,e.iridescenceThicknessMapTransform))),t.transmission>0&&(e.transmission.value=t.transmission,e.transmissionSamplerMap.value=n.texture,e.transmissionSamplerSize.value.set(n.width,n.height),t.transmissionMap&&(e.transmissionMap.value=t.transmissionMap,refreshTransformUniform(t.transmissionMap,e.transmissionMapTransform)),e.thickness.value=t.thickness,t.thicknessMap&&(e.thicknessMap.value=t.thicknessMap,refreshTransformUniform(t.thicknessMap,e.thicknessMapTransform)),e.attenuationDistance.value=t.attenuationDistance,e.attenuationColor.value.copy(t.attenuationColor)),t.anisotropy>0&&(e.anisotropyVector.value.set(t.anisotropy*Math.cos(t.anisotropyRotation),t.anisotropy*Math.sin(t.anisotropyRotation)),t.anisotropyMap&&(e.anisotropyMap.value=t.anisotropyMap,refreshTransformUniform(t.anisotropyMap,e.anisotropyMapTransform))),e.specularIntensity.value=t.specularIntensity,e.specularColor.value.copy(t.specularColor),t.specularColorMap&&(e.specularColorMap.value=t.specularColorMap,refreshTransformUniform(t.specularColorMap,e.specularColorMapTransform)),t.specularIntensityMap&&(e.specularIntensityMap.value=t.specularIntensityMap,refreshTransformUniform(t.specularIntensityMap,e.specularIntensityMapTransform))}function refreshUniformsMatcap(e,t){t.matcap&&(e.matcap.value=t.matcap)}function refreshUniformsDistance(e,n){let i=t.get(n).light;e.referencePosition.value.setFromMatrixPosition(i.matrixWorld),e.nearDistance.value=i.shadow.camera.near,e.farDistance.value=i.shadow.camera.far}return{refreshFogUniforms,refreshMaterialUniforms}}function WebGLUniformsGroups(e,t,n,i){let a={},o={},s=[],c=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function bind(e,t){let n=t.program;i.uniformBlockBinding(e,n)}function update(e,n){let s=a[e.id];s===void 0&&(prepareUniformsGroup(e),s=createBuffer(e),a[e.id]=s,e.addEventListener(`dispose`,onUniformsGroupsDispose));let c=n.program;i.updateUBOMapping(e,c);let l=t.render.frame;o[e.id]!==l&&(updateBufferData(e),o[e.id]=l)}function createBuffer(t){let n=allocateBindingPointIndex();t.__bindingPointIndex=n;let i=e.createBuffer(),a=t.__size,o=t.usage;return e.bindBuffer(e.UNIFORM_BUFFER,i),e.bufferData(e.UNIFORM_BUFFER,a,o),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,n,i),i}function allocateBindingPointIndex(){for(let e=0;e<c;e++)if(s.indexOf(e)===-1)return s.push(e),e;return error(`WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached.`),0}function updateBufferData(t){let n=a[t.id],i=t.uniforms,o=t.__cache;e.bindBuffer(e.UNIFORM_BUFFER,n);for(let t=0,n=i.length;t<n;t++){let n=Array.isArray(i[t])?i[t]:[i[t]];for(let i=0,a=n.length;i<a;i++){let a=n[i];if(hasUniformChanged(a,t,i,o)===!0){let t=a.__offset,n=Array.isArray(a.value)?a.value:[a.value],i=0;for(let o=0;o<n.length;o++){let s=n[o],c=getUniformSize(s);typeof s==`number`||typeof s==`boolean`?(a.__data[0]=s,e.bufferSubData(e.UNIFORM_BUFFER,t+i,a.__data)):s.isMatrix3?(a.__data[0]=s.elements[0],a.__data[1]=s.elements[1],a.__data[2]=s.elements[2],a.__data[3]=0,a.__data[4]=s.elements[3],a.__data[5]=s.elements[4],a.__data[6]=s.elements[5],a.__data[7]=0,a.__data[8]=s.elements[6],a.__data[9]=s.elements[7],a.__data[10]=s.elements[8],a.__data[11]=0):(s.toArray(a.__data,i),i+=c.storage/Float32Array.BYTES_PER_ELEMENT)}e.bufferSubData(e.UNIFORM_BUFFER,t,a.__data)}}}e.bindBuffer(e.UNIFORM_BUFFER,null)}function hasUniformChanged(e,t,n,i){let a=e.value,o=t+`_`+n;if(i[o]===void 0)return typeof a==`number`||typeof a==`boolean`?i[o]=a:i[o]=a.clone(),!0;{let e=i[o];if(typeof a==`number`||typeof a==`boolean`){if(e!==a)return i[o]=a,!0}else if(e.equals(a)===!1)return e.copy(a),!0}return!1}function prepareUniformsGroup(e){let t=e.uniforms,n=0;for(let e=0,i=t.length;e<i;e++){let i=Array.isArray(t[e])?t[e]:[t[e]];for(let e=0,t=i.length;e<t;e++){let t=i[e],a=Array.isArray(t.value)?t.value:[t.value];for(let e=0,i=a.length;e<i;e++){let i=a[e],o=getUniformSize(i),s=n%16,c=s%o.boundary,l=s+c;n+=c,l!==0&&16-l<o.storage&&(n+=16-l),t.__data=new Float32Array(o.storage/Float32Array.BYTES_PER_ELEMENT),t.__offset=n,n+=o.storage}}}let i=n%16;return i>0&&(n+=16-i),e.__size=n,e.__cache={},this}function getUniformSize(e){let t={boundary:0,storage:0};return typeof e==`number`||typeof e==`boolean`?(t.boundary=4,t.storage=4):e.isVector2?(t.boundary=8,t.storage=8):e.isVector3||e.isColor?(t.boundary=16,t.storage=12):e.isVector4?(t.boundary=16,t.storage=16):e.isMatrix3?(t.boundary=48,t.storage=48):e.isMatrix4?(t.boundary=64,t.storage=64):e.isTexture?warn(`WebGLRenderer: Texture samplers can not be part of an uniforms group.`):warn(`WebGLRenderer: Unsupported uniform value type.`,e),t}function onUniformsGroupsDispose(t){let n=t.target;n.removeEventListener(`dispose`,onUniformsGroupsDispose);let i=s.indexOf(n.__bindingPointIndex);s.splice(i,1),e.deleteBuffer(a[n.id]),delete a[n.id],delete o[n.id]}function dispose(){for(let t in a)e.deleteBuffer(a[t]);s=[],a={},o={}}return{bind,update,dispose}}var Ja=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Ya=null;function getDFGLUT(){return Ya===null&&(Ya=new DataTexture(Ja,16,16,Se,le),Ya.name=`DFG_LUT`,Ya.minFilter=F,Ya.magFilter=F,Ya.wrapS=A,Ya.wrapT=A,Ya.generateMipmaps=!1,Ya.needsUpdate=!0),Ya}var WebGLRenderer=class{constructor(e={}){let{canvas:t=createCanvasElement(),context:n=null,depth:i=!0,stencil:a=!1,alpha:o=!1,antialias:s=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u=`default`,failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:f=!1,outputBufferType:p=ne}=e;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<`u`&&n instanceof WebGLRenderingContext)throw Error(`THREE.WebGLRenderer: WebGL 1 is not supported since r163.`);m=n.getContextAttributes().alpha}else m=o;let h=p,g=new Set([we,Ce,xe]),_=new Set([ne,se,ae,fe,ue,de]),y=new Uint32Array(4),b=new Int32Array(4),x=null,S=null,C=[],w=[],T=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=0,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let E=this,D=!1;this._outputColorSpace=ft;let O=0,k=0,A=null,j=-1,M=null,N=new W,P=new W,F=null,ee=new Color$1(0),re=0,ie=t.width,oe=t.height,ce=1,pe=null,me=null,he=new W(0,0,ie,oe),ge=new W(0,0,ie,oe),_e=!1,ve=new Frustum,ye=!1,be=!1,Se=new G,Te=new V,Ee=new W,De={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Oe=!1;function getTargetPixelRatio(){return A===null?ce:1}let I=n;function getContext(e,n){return t.getContext(e,n)}try{let e={alpha:!0,depth:i,stencil:a,antialias:s,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:d};if(`setAttribute`in t&&t.setAttribute(`data-engine`,`three.js r183`),t.addEventListener(`webglcontextlost`,onContextLost,!1),t.addEventListener(`webglcontextrestored`,onContextRestore,!1),t.addEventListener(`webglcontextcreationerror`,onContextCreationError,!1),I===null){let t=`webgl2`;if(I=getContext(t,e),I===null)throw getContext(t)?Error(`Error creating WebGL context with your selected attributes.`):Error(`Error creating WebGL context.`)}}catch(e){throw error(`WebGLRenderer: `+e.message),e}let ke,Ae,L,je,R,z,Me,Ne,Pe,Fe,Ie,Le,Re,ze,Be,Ve,He,Ue,We,Ge,Ke,qe,Je;function initGLContext(){ke=new WebGLExtensions(I),ke.init(),Ke=new WebGLUtils(I,ke),Ae=new WebGLCapabilities(I,ke,e,Ke),L=new WebGLState(I,ke),Ae.reversedDepthBuffer&&f&&L.buffers.depth.setReversed(!0),je=new WebGLInfo(I),R=new WebGLProperties,z=new WebGLTextures(I,ke,L,R,Ae,Ke,je),Me=new WebGLEnvironments(E),Ne=new WebGLAttributes(I),qe=new WebGLBindingStates(I,Ne),Pe=new WebGLGeometries(I,Ne,je,qe),Fe=new WebGLObjects(I,Pe,Ne,qe,je),Ue=new WebGLMorphtargets(I,Ae,z),Be=new WebGLClipping(R),Ie=new WebGLPrograms(E,Me,ke,Ae,qe,Be),Le=new WebGLMaterials(E,R),Re=new WebGLRenderLists,ze=new WebGLRenderStates(ke),He=new WebGLBackground(E,Me,L,Fe,m,c),Ve=new WebGLShadowMap(E,Fe,Ae),Je=new WebGLUniformsGroups(I,je,Ae,L),We=new WebGLBufferRenderer(I,ke,je),Ge=new WebGLIndexedBufferRenderer(I,ke,je),je.programs=Ie.programs,E.capabilities=Ae,E.extensions=ke,E.properties=R,E.renderLists=Re,E.shadowMap=Ve,E.state=L,E.info=je}initGLContext(),h!==1009&&(T=new WebGLOutput(h,t.width,t.height,i,a));let Ye=new WebXRManager(E,I);this.xr=Ye,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){let e=ke.get(`WEBGL_lose_context`);e&&e.loseContext()},this.forceContextRestore=function(){let e=ke.get(`WEBGL_lose_context`);e&&e.restoreContext()},this.getPixelRatio=function(){return ce},this.setPixelRatio=function(e){e!==void 0&&(ce=e,this.setSize(ie,oe,!1))},this.getSize=function(e){return e.set(ie,oe)},this.setSize=function(e,n,i=!0){if(Ye.isPresenting){warn(`WebGLRenderer: Can't change size while VR device is presenting.`);return}ie=e,oe=n,t.width=Math.floor(e*ce),t.height=Math.floor(n*ce),i===!0&&(t.style.width=e+`px`,t.style.height=n+`px`),T!==null&&T.setSize(t.width,t.height),this.setViewport(0,0,e,n)},this.getDrawingBufferSize=function(e){return e.set(ie*ce,oe*ce).floor()},this.setDrawingBufferSize=function(e,n,i){ie=e,oe=n,ce=i,t.width=Math.floor(e*i),t.height=Math.floor(n*i),this.setViewport(0,0,e,n)},this.setEffects=function(e){if(h===1009){console.error(`THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.`);return}if(e){for(let t=0;t<e.length;t++)if(e[t].isOutputPass===!0){console.warn(`THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.`);break}}T.setEffects(e||[])},this.getCurrentViewport=function(e){return e.copy(N)},this.getViewport=function(e){return e.copy(he)},this.setViewport=function(e,t,n,i){e.isVector4?he.set(e.x,e.y,e.z,e.w):he.set(e,t,n,i),L.viewport(N.copy(he).multiplyScalar(ce).round())},this.getScissor=function(e){return e.copy(ge)},this.setScissor=function(e,t,n,i){e.isVector4?ge.set(e.x,e.y,e.z,e.w):ge.set(e,t,n,i),L.scissor(P.copy(ge).multiplyScalar(ce).round())},this.getScissorTest=function(){return _e},this.setScissorTest=function(e){L.setScissorTest(_e=e)},this.setOpaqueSort=function(e){pe=e},this.setTransparentSort=function(e){me=e},this.getClearColor=function(e){return e.copy(He.getClearColor())},this.setClearColor=function(){He.setClearColor(...arguments)},this.getClearAlpha=function(){return He.getClearAlpha()},this.setClearAlpha=function(){He.setClearAlpha(...arguments)},this.clear=function(e=!0,t=!0,n=!0){let i=0;if(e){let e=!1;if(A!==null){let t=A.texture.format;e=g.has(t)}if(e){let e=A.texture.type,t=_.has(e),n=He.getClearColor(),i=He.getClearAlpha(),a=n.r,o=n.g,s=n.b;t?(y[0]=a,y[1]=o,y[2]=s,y[3]=i,I.clearBufferuiv(I.COLOR,0,y)):(b[0]=a,b[1]=o,b[2]=s,b[3]=i,I.clearBufferiv(I.COLOR,0,b))}else i|=I.COLOR_BUFFER_BIT}t&&(i|=I.DEPTH_BUFFER_BIT),n&&(i|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),i!==0&&I.clear(i)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener(`webglcontextlost`,onContextLost,!1),t.removeEventListener(`webglcontextrestored`,onContextRestore,!1),t.removeEventListener(`webglcontextcreationerror`,onContextCreationError,!1),He.dispose(),Re.dispose(),ze.dispose(),R.dispose(),Me.dispose(),Fe.dispose(),qe.dispose(),Je.dispose(),Ie.dispose(),Ye.dispose(),Ye.removeEventListener(`sessionstart`,onXRSessionStart),Ye.removeEventListener(`sessionend`,onXRSessionEnd),Ze.stop()};function onContextLost(e){e.preventDefault(),log(`WebGLRenderer: Context Lost.`),D=!0}function onContextRestore(){log(`WebGLRenderer: Context Restored.`),D=!1;let e=je.autoReset,t=Ve.enabled,n=Ve.autoUpdate,i=Ve.needsUpdate,a=Ve.type;initGLContext(),je.autoReset=e,Ve.enabled=t,Ve.autoUpdate=n,Ve.needsUpdate=i,Ve.type=a}function onContextCreationError(e){error(`WebGLRenderer: A WebGL context could not be created. Reason: `,e.statusMessage)}function onMaterialDispose(e){let t=e.target;t.removeEventListener(`dispose`,onMaterialDispose),deallocateMaterial(t)}function deallocateMaterial(e){releaseMaterialProgramReferences(e),R.remove(e)}function releaseMaterialProgramReferences(e){let t=R.get(e).programs;t!==void 0&&(t.forEach(function(e){Ie.releaseProgram(e)}),e.isShaderMaterial&&Ie.releaseShaderCache(e))}this.renderBufferDirect=function(e,t,n,i,a,o){t===null&&(t=De);let s=a.isMesh&&a.matrixWorld.determinant()<0,c=setProgram(e,t,n,i,a);L.setMaterial(i,s);let l=n.index,u=1;if(i.wireframe===!0){if(l=Pe.getWireframeAttribute(n),l===void 0)return;u=2}let d=n.drawRange,f=n.attributes.position,p=d.start*u,m=(d.start+d.count)*u;o!==null&&(p=Math.max(p,o.start*u),m=Math.min(m,(o.start+o.count)*u)),l===null?f!=null&&(p=Math.max(p,0),m=Math.min(m,f.count)):(p=Math.max(p,0),m=Math.min(m,l.count));let h=m-p;if(h<0||h===1/0)return;qe.setup(a,i,c,n,l);let g,_=We;if(l!==null&&(g=Ne.get(l),_=Ge,_.setIndex(g)),a.isMesh)i.wireframe===!0?(L.setLineWidth(i.wireframeLinewidth*getTargetPixelRatio()),_.setMode(I.LINES)):_.setMode(I.TRIANGLES);else if(a.isLine){let e=i.linewidth;e===void 0&&(e=1),L.setLineWidth(e*getTargetPixelRatio()),a.isLineSegments?_.setMode(I.LINES):a.isLineLoop?_.setMode(I.LINE_LOOP):_.setMode(I.LINE_STRIP)}else a.isPoints?_.setMode(I.POINTS):a.isSprite&&_.setMode(I.TRIANGLES);if(a.isBatchedMesh)if(a._multiDrawInstances!==null)warnOnce(`WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection.`),_.renderMultiDrawInstances(a._multiDrawStarts,a._multiDrawCounts,a._multiDrawCount,a._multiDrawInstances);else if(ke.get(`WEBGL_multi_draw`))_.renderMultiDraw(a._multiDrawStarts,a._multiDrawCounts,a._multiDrawCount);else{let e=a._multiDrawStarts,t=a._multiDrawCounts,n=a._multiDrawCount,o=l?Ne.get(l).bytesPerElement:1,s=R.get(i).currentProgram.getUniforms();for(let i=0;i<n;i++)s.setValue(I,`_gl_DrawID`,i),_.render(e[i]/o,t[i])}else if(a.isInstancedMesh)_.renderInstances(p,h,a.count);else if(n.isInstancedBufferGeometry){let e=n._maxInstanceCount===void 0?1/0:n._maxInstanceCount,t=Math.min(n.instanceCount,e);_.renderInstances(p,h,t)}else _.render(p,h)};function prepareMaterial(e,t,n){e.transparent===!0&&e.side===2&&e.forceSinglePass===!1?(e.side=1,e.needsUpdate=!0,getProgram(e,t,n),e.side=0,e.needsUpdate=!0,getProgram(e,t,n),e.side=2):getProgram(e,t,n)}this.compile=function(e,t,n=null){n===null&&(n=e),S=ze.get(n),S.init(t),w.push(S),n.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(S.pushLight(e),e.castShadow&&S.pushShadow(e))}),e!==n&&e.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(S.pushLight(e),e.castShadow&&S.pushShadow(e))}),S.setupLights();let i=new Set;return e.traverse(function(e){if(!(e.isMesh||e.isPoints||e.isLine||e.isSprite))return;let t=e.material;if(t)if(Array.isArray(t))for(let a=0;a<t.length;a++){let o=t[a];prepareMaterial(o,n,e),i.add(o)}else prepareMaterial(t,n,e),i.add(t)}),S=w.pop(),i},this.compileAsync=function(e,t,n=null){let i=this.compile(e,t,n);return new Promise(t=>{function checkMaterialsReady(){if(i.forEach(function(e){R.get(e).currentProgram.isReady()&&i.delete(e)}),i.size===0){t(e);return}setTimeout(checkMaterialsReady,10)}ke.get(`KHR_parallel_shader_compile`)===null?setTimeout(checkMaterialsReady,10):checkMaterialsReady()})};let Xe=null;function onAnimationFrame(e){Xe&&Xe(e)}function onXRSessionStart(){Ze.stop()}function onXRSessionEnd(){Ze.start()}let Ze=new WebGLAnimation;Ze.setAnimationLoop(onAnimationFrame),typeof self<`u`&&Ze.setContext(self),this.setAnimationLoop=function(e){Xe=e,Ye.setAnimationLoop(e),e===null?Ze.stop():Ze.start()},Ye.addEventListener(`sessionstart`,onXRSessionStart),Ye.addEventListener(`sessionend`,onXRSessionEnd),this.render=function(e,t){if(t!==void 0&&t.isCamera!==!0){error(`WebGLRenderer.render: camera is not an instance of THREE.Camera.`);return}if(D===!0)return;let n=Ye.enabled===!0&&Ye.isPresenting===!0,i=T!==null&&(A===null||n)&&T.begin(E,A);if(e.matrixWorldAutoUpdate===!0&&e.updateMatrixWorld(),t.parent===null&&t.matrixWorldAutoUpdate===!0&&t.updateMatrixWorld(),Ye.enabled===!0&&Ye.isPresenting===!0&&(T===null||T.isCompositing()===!1)&&(Ye.cameraAutoUpdate===!0&&Ye.updateCamera(t),t=Ye.getCamera()),e.isScene===!0&&e.onBeforeRender(E,e,t,A),S=ze.get(e,w.length),S.init(t),w.push(S),Se.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),ve.setFromProjectionMatrix(Se,vt,t.reversedDepth),be=this.localClippingEnabled,ye=Be.init(this.clippingPlanes,be),x=Re.get(e,C.length),x.init(),C.push(x),Ye.enabled===!0&&Ye.isPresenting===!0){let e=E.xr.getDepthSensingMesh();e!==null&&projectObject(e,t,-1/0,E.sortObjects)}projectObject(e,t,0,E.sortObjects),x.finish(),E.sortObjects===!0&&x.sort(pe,me),Oe=Ye.enabled===!1||Ye.isPresenting===!1||Ye.hasDepthSensing()===!1,Oe&&He.addToRenderList(x,e),this.info.render.frame++,ye===!0&&Be.beginShadows();let a=S.state.shadowsArray;if(Ve.render(a,e,t),ye===!0&&Be.endShadows(),this.info.autoReset===!0&&this.info.reset(),(i&&T.hasRenderPass())===!1){let n=x.opaque,i=x.transmissive;if(S.setupLights(),t.isArrayCamera){let a=t.cameras;if(i.length>0)for(let t=0,o=a.length;t<o;t++){let o=a[t];renderTransmissionPass(n,i,e,o)}Oe&&He.render(e);for(let t=0,n=a.length;t<n;t++){let n=a[t];renderScene(x,e,n,n.viewport)}}else i.length>0&&renderTransmissionPass(n,i,e,t),Oe&&He.render(e),renderScene(x,e,t)}A!==null&&k===0&&(z.updateMultisampleRenderTarget(A),z.updateRenderTargetMipmap(A)),i&&T.end(E),e.isScene===!0&&e.onAfterRender(E,e,t),qe.resetDefaultState(),j=-1,M=null,w.pop(),w.length>0?(S=w[w.length-1],ye===!0&&Be.setGlobalState(E.clippingPlanes,S.state.camera)):S=null,C.pop(),x=C.length>0?C[C.length-1]:null};function projectObject(e,t,n,i){if(e.visible===!1)return;if(e.layers.test(t.layers)){if(e.isGroup)n=e.renderOrder;else if(e.isLOD)e.autoUpdate===!0&&e.update(t);else if(e.isLight)S.pushLight(e),e.castShadow&&S.pushShadow(e);else if(e.isSprite){if(!e.frustumCulled||ve.intersectsSprite(e)){i&&Ee.setFromMatrixPosition(e.matrixWorld).applyMatrix4(Se);let t=Fe.update(e),a=e.material;a.visible&&x.push(e,t,a,n,Ee.z,null)}}else if((e.isMesh||e.isLine||e.isPoints)&&(!e.frustumCulled||ve.intersectsObject(e))){let t=Fe.update(e),a=e.material;if(i&&(e.boundingSphere===void 0?(t.boundingSphere===null&&t.computeBoundingSphere(),Ee.copy(t.boundingSphere.center)):(e.boundingSphere===null&&e.computeBoundingSphere(),Ee.copy(e.boundingSphere.center)),Ee.applyMatrix4(e.matrixWorld).applyMatrix4(Se)),Array.isArray(a)){let i=t.groups;for(let o=0,s=i.length;o<s;o++){let s=i[o],c=a[s.materialIndex];c&&c.visible&&x.push(e,t,c,n,Ee.z,s)}}else a.visible&&x.push(e,t,a,n,Ee.z,null)}}let a=e.children;for(let e=0,o=a.length;e<o;e++)projectObject(a[e],t,n,i)}function renderScene(e,t,n,i){let{opaque:a,transmissive:o,transparent:s}=e;S.setupLightsView(n),ye===!0&&Be.setGlobalState(E.clippingPlanes,n),i&&L.viewport(N.copy(i)),a.length>0&&renderObjects(a,t,n),o.length>0&&renderObjects(o,t,n),s.length>0&&renderObjects(s,t,n),L.buffers.depth.setTest(!0),L.buffers.depth.setMask(!0),L.buffers.color.setMask(!0),L.setPolygonOffset(!1)}function renderTransmissionPass(e,t,n,i){if((n.isScene===!0?n.overrideMaterial:null)!==null)return;if(S.state.transmissionRenderTarget[i.id]===void 0){let e=ke.has(`EXT_color_buffer_half_float`)||ke.has(`EXT_color_buffer_float`);S.state.transmissionRenderTarget[i.id]=new WebGLRenderTarget(1,1,{generateMipmaps:!0,type:e?le:ne,minFilter:te,samples:Math.max(4,Ae.samples),stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:U.workingColorSpace})}let o=S.state.transmissionRenderTarget[i.id],s=i.viewport||N;o.setSize(s.z*E.transmissionResolutionScale,s.w*E.transmissionResolutionScale);let c=E.getRenderTarget(),l=E.getActiveCubeFace(),u=E.getActiveMipmapLevel();E.setRenderTarget(o),E.getClearColor(ee),re=E.getClearAlpha(),re<1&&E.setClearColor(16777215,.5),E.clear(),Oe&&He.render(n);let d=E.toneMapping;E.toneMapping=0;let f=i.viewport;if(i.viewport!==void 0&&(i.viewport=void 0),S.setupLightsView(i),ye===!0&&Be.setGlobalState(E.clippingPlanes,i),renderObjects(e,n,i),z.updateMultisampleRenderTarget(o),z.updateRenderTargetMipmap(o),ke.has(`WEBGL_multisampled_render_to_texture`)===!1){let e=!1;for(let a=0,o=t.length;a<o;a++){let{object:o,geometry:s,material:c,group:l}=t[a];if(c.side===2&&o.layers.test(i.layers)){let t=c.side;c.side=1,c.needsUpdate=!0,renderObject(o,n,i,s,c,l),c.side=t,c.needsUpdate=!0,e=!0}}e===!0&&(z.updateMultisampleRenderTarget(o),z.updateRenderTargetMipmap(o))}E.setRenderTarget(c,l,u),E.setClearColor(ee,re),f!==void 0&&(i.viewport=f),E.toneMapping=d}function renderObjects(e,t,n){let i=t.isScene===!0?t.overrideMaterial:null;for(let a=0,o=e.length;a<o;a++){let o=e[a],{object:s,geometry:c,group:l}=o,u=o.material;u.allowOverride===!0&&i!==null&&(u=i),s.layers.test(n.layers)&&renderObject(s,t,n,c,u,l)}}function renderObject(e,t,n,i,a,o){e.onBeforeRender(E,t,n,i,a,o),e.modelViewMatrix.multiplyMatrices(n.matrixWorldInverse,e.matrixWorld),e.normalMatrix.getNormalMatrix(e.modelViewMatrix),a.onBeforeRender(E,t,n,i,e,o),a.transparent===!0&&a.side===2&&a.forceSinglePass===!1?(a.side=1,a.needsUpdate=!0,E.renderBufferDirect(n,t,i,a,e,o),a.side=0,a.needsUpdate=!0,E.renderBufferDirect(n,t,i,a,e,o),a.side=2):E.renderBufferDirect(n,t,i,a,e,o),e.onAfterRender(E,t,n,i,a,o)}function getProgram(e,t,n){t.isScene!==!0&&(t=De);let i=R.get(e),a=S.state.lights,o=S.state.shadowsArray,s=a.state.version,c=Ie.getParameters(e,a.state,o,t,n),l=Ie.getProgramCacheKey(c),u=i.programs;i.environment=e.isMeshStandardMaterial||e.isMeshLambertMaterial||e.isMeshPhongMaterial?t.environment:null,i.fog=t.fog;let d=e.isMeshStandardMaterial||e.isMeshLambertMaterial&&!e.envMap||e.isMeshPhongMaterial&&!e.envMap;i.envMap=Me.get(e.envMap||i.environment,d),i.envMapRotation=i.environment!==null&&e.envMap===null?t.environmentRotation:e.envMapRotation,u===void 0&&(e.addEventListener(`dispose`,onMaterialDispose),u=new Map,i.programs=u);let f=u.get(l);if(f!==void 0){if(i.currentProgram===f&&i.lightsStateVersion===s)return updateCommonMaterialProperties(e,c),f}else c.uniforms=Ie.getUniforms(e),e.onBeforeCompile(c,E),f=Ie.acquireProgram(c,l),u.set(l,f),i.uniforms=c.uniforms;let p=i.uniforms;return(!e.isShaderMaterial&&!e.isRawShaderMaterial||e.clipping===!0)&&(p.clippingPlanes=Be.uniform),updateCommonMaterialProperties(e,c),i.needsLights=materialNeedsLights(e),i.lightsStateVersion=s,i.needsLights&&(p.ambientLightColor.value=a.state.ambient,p.lightProbe.value=a.state.probe,p.directionalLights.value=a.state.directional,p.directionalLightShadows.value=a.state.directionalShadow,p.spotLights.value=a.state.spot,p.spotLightShadows.value=a.state.spotShadow,p.rectAreaLights.value=a.state.rectArea,p.ltc_1.value=a.state.rectAreaLTC1,p.ltc_2.value=a.state.rectAreaLTC2,p.pointLights.value=a.state.point,p.pointLightShadows.value=a.state.pointShadow,p.hemisphereLights.value=a.state.hemi,p.directionalShadowMatrix.value=a.state.directionalShadowMatrix,p.spotLightMatrix.value=a.state.spotLightMatrix,p.spotLightMap.value=a.state.spotLightMap,p.pointShadowMatrix.value=a.state.pointShadowMatrix),i.currentProgram=f,i.uniformsList=null,f}function getUniformList(e){if(e.uniformsList===null){let t=e.currentProgram.getUniforms();e.uniformsList=WebGLUniforms.seqWithValue(t.seq,e.uniforms)}return e.uniformsList}function updateCommonMaterialProperties(e,t){let n=R.get(e);n.outputColorSpace=t.outputColorSpace,n.batching=t.batching,n.batchingColor=t.batchingColor,n.instancing=t.instancing,n.instancingColor=t.instancingColor,n.instancingMorph=t.instancingMorph,n.skinning=t.skinning,n.morphTargets=t.morphTargets,n.morphNormals=t.morphNormals,n.morphColors=t.morphColors,n.morphTargetsCount=t.morphTargetsCount,n.numClippingPlanes=t.numClippingPlanes,n.numIntersection=t.numClipIntersection,n.vertexAlphas=t.vertexAlphas,n.vertexTangents=t.vertexTangents,n.toneMapping=t.toneMapping}function setProgram(e,t,n,i,a){t.isScene!==!0&&(t=De),z.resetTextureUnits();let o=t.fog,s=i.isMeshStandardMaterial||i.isMeshLambertMaterial||i.isMeshPhongMaterial?t.environment:null,c=A===null?E.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:pt,l=i.isMeshStandardMaterial||i.isMeshLambertMaterial&&!i.envMap||i.isMeshPhongMaterial&&!i.envMap,u=Me.get(i.envMap||s,l),d=i.vertexColors===!0&&!!n.attributes.color&&n.attributes.color.itemSize===4,f=!!n.attributes.tangent&&(!!i.normalMap||i.anisotropy>0),p=!!n.morphAttributes.position,m=!!n.morphAttributes.normal,h=!!n.morphAttributes.color,g=0;i.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(g=E.toneMapping);let _=n.morphAttributes.position||n.morphAttributes.normal||n.morphAttributes.color,y=_===void 0?0:_.length,b=R.get(i),x=S.state.lights;if(ye===!0&&(be===!0||e!==M)){let t=e===M&&i.id===j;Be.setState(i,e,t)}let C=!1;i.version===b.__version?b.needsLights&&b.lightsStateVersion!==x.state.version?C=!0:b.outputColorSpace===c?a.isBatchedMesh&&b.batching===!1||!a.isBatchedMesh&&b.batching===!0||a.isBatchedMesh&&b.batchingColor===!0&&a.colorTexture===null||a.isBatchedMesh&&b.batchingColor===!1&&a.colorTexture!==null||a.isInstancedMesh&&b.instancing===!1||!a.isInstancedMesh&&b.instancing===!0||a.isSkinnedMesh&&b.skinning===!1||!a.isSkinnedMesh&&b.skinning===!0||a.isInstancedMesh&&b.instancingColor===!0&&a.instanceColor===null||a.isInstancedMesh&&b.instancingColor===!1&&a.instanceColor!==null||a.isInstancedMesh&&b.instancingMorph===!0&&a.morphTexture===null||a.isInstancedMesh&&b.instancingMorph===!1&&a.morphTexture!==null?C=!0:b.envMap===u?i.fog===!0&&b.fog!==o||b.numClippingPlanes!==void 0&&(b.numClippingPlanes!==Be.numPlanes||b.numIntersection!==Be.numIntersection)?C=!0:b.vertexAlphas===d&&b.vertexTangents===f&&b.morphTargets===p&&b.morphNormals===m&&b.morphColors===h&&b.toneMapping===g?b.morphTargetsCount!==y&&(C=!0):C=!0:C=!0:C=!0:(C=!0,b.__version=i.version);let w=b.currentProgram;C===!0&&(w=getProgram(i,t,a));let T=!1,D=!1,O=!1,k=w.getUniforms(),N=b.uniforms;if(L.useProgram(w.program)&&(T=!0,D=!0,O=!0),i.id!==j&&(j=i.id,D=!0),T||M!==e){L.buffers.depth.getReversed()&&e.reversedDepth!==!0&&(e._reversedDepth=!0,e.updateProjectionMatrix()),k.setValue(I,`projectionMatrix`,e.projectionMatrix),k.setValue(I,`viewMatrix`,e.matrixWorldInverse);let t=k.map.cameraPosition;t!==void 0&&t.setValue(I,Te.setFromMatrixPosition(e.matrixWorld)),Ae.logarithmicDepthBuffer&&k.setValue(I,`logDepthBufFC`,2/(Math.log(e.far+1)/Math.LN2)),(i.isMeshPhongMaterial||i.isMeshToonMaterial||i.isMeshLambertMaterial||i.isMeshBasicMaterial||i.isMeshStandardMaterial||i.isShaderMaterial)&&k.setValue(I,`isOrthographic`,e.isOrthographicCamera===!0),M!==e&&(M=e,D=!0,O=!0)}if(b.needsLights&&(x.state.directionalShadowMap.length>0&&k.setValue(I,`directionalShadowMap`,x.state.directionalShadowMap,z),x.state.spotShadowMap.length>0&&k.setValue(I,`spotShadowMap`,x.state.spotShadowMap,z),x.state.pointShadowMap.length>0&&k.setValue(I,`pointShadowMap`,x.state.pointShadowMap,z)),a.isSkinnedMesh){k.setOptional(I,a,`bindMatrix`),k.setOptional(I,a,`bindMatrixInverse`);let e=a.skeleton;e&&(e.boneTexture===null&&e.computeBoneTexture(),k.setValue(I,`boneTexture`,e.boneTexture,z))}a.isBatchedMesh&&(k.setOptional(I,a,`batchingTexture`),k.setValue(I,`batchingTexture`,a._matricesTexture,z),k.setOptional(I,a,`batchingIdTexture`),k.setValue(I,`batchingIdTexture`,a._indirectTexture,z),k.setOptional(I,a,`batchingColorTexture`),a._colorsTexture!==null&&k.setValue(I,`batchingColorTexture`,a._colorsTexture,z));let P=n.morphAttributes;if((P.position!==void 0||P.normal!==void 0||P.color!==void 0)&&Ue.update(a,n,w),(D||b.receiveShadow!==a.receiveShadow)&&(b.receiveShadow=a.receiveShadow,k.setValue(I,`receiveShadow`,a.receiveShadow)),(i.isMeshStandardMaterial||i.isMeshLambertMaterial||i.isMeshPhongMaterial)&&i.envMap===null&&t.environment!==null&&(N.envMapIntensity.value=t.environmentIntensity),N.dfgLUT!==void 0&&(N.dfgLUT.value=getDFGLUT()),D&&(k.setValue(I,`toneMappingExposure`,E.toneMappingExposure),b.needsLights&&markUniformsLightsNeedsUpdate(N,O),o&&i.fog===!0&&Le.refreshFogUniforms(N,o),Le.refreshMaterialUniforms(N,i,ce,oe,S.state.transmissionRenderTarget[e.id]),WebGLUniforms.upload(I,getUniformList(b),N,z)),i.isShaderMaterial&&i.uniformsNeedUpdate===!0&&(WebGLUniforms.upload(I,getUniformList(b),N,z),i.uniformsNeedUpdate=!1),i.isSpriteMaterial&&k.setValue(I,`center`,a.center),k.setValue(I,`modelViewMatrix`,a.modelViewMatrix),k.setValue(I,`normalMatrix`,a.normalMatrix),k.setValue(I,`modelMatrix`,a.matrixWorld),i.isShaderMaterial||i.isRawShaderMaterial){let e=i.uniformsGroups;for(let t=0,n=e.length;t<n;t++){let n=e[t];Je.update(n,w),Je.bind(n,w)}}return w}function markUniformsLightsNeedsUpdate(e,t){e.ambientLightColor.needsUpdate=t,e.lightProbe.needsUpdate=t,e.directionalLights.needsUpdate=t,e.directionalLightShadows.needsUpdate=t,e.pointLights.needsUpdate=t,e.pointLightShadows.needsUpdate=t,e.spotLights.needsUpdate=t,e.spotLightShadows.needsUpdate=t,e.rectAreaLights.needsUpdate=t,e.hemisphereLights.needsUpdate=t}function materialNeedsLights(e){return e.isMeshLambertMaterial||e.isMeshToonMaterial||e.isMeshPhongMaterial||e.isMeshStandardMaterial||e.isShadowMaterial||e.isShaderMaterial&&e.lights===!0}this.getActiveCubeFace=function(){return O},this.getActiveMipmapLevel=function(){return k},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(e,t,n){let i=R.get(e);i.__autoAllocateDepthBuffer=e.resolveDepthBuffer===!1,i.__autoAllocateDepthBuffer===!1&&(i.__useRenderToTexture=!1),R.get(e.texture).__webglTexture=t,R.get(e.depthTexture).__webglTexture=i.__autoAllocateDepthBuffer?void 0:n,i.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(e,t){let n=R.get(e);n.__webglFramebuffer=t,n.__useDefaultFramebuffer=t===void 0};let Qe=I.createFramebuffer();this.setRenderTarget=function(e,t=0,n=0){A=e,O=t,k=n;let i=null,a=!1,o=!1;if(e){let s=R.get(e);if(s.__useDefaultFramebuffer!==void 0){L.bindFramebuffer(I.FRAMEBUFFER,s.__webglFramebuffer),N.copy(e.viewport),P.copy(e.scissor),F=e.scissorTest,L.viewport(N),L.scissor(P),L.setScissorTest(F),j=-1;return}else if(s.__webglFramebuffer===void 0)z.setupRenderTarget(e);else if(s.__hasExternalTextures)z.rebindTextures(e,R.get(e.texture).__webglTexture,R.get(e.depthTexture).__webglTexture);else if(e.depthBuffer){let t=e.depthTexture;if(s.__boundDepthTexture!==t){if(t!==null&&R.has(t)&&(e.width!==t.image.width||e.height!==t.image.height))throw Error(`WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.`);z.setupDepthRenderbuffer(e)}}let c=e.texture;(c.isData3DTexture||c.isDataArrayTexture||c.isCompressedArrayTexture)&&(o=!0);let l=R.get(e).__webglFramebuffer;e.isWebGLCubeRenderTarget?(i=Array.isArray(l[t])?l[t][n]:l[t],a=!0):i=e.samples>0&&z.useMultisampledRTT(e)===!1?R.get(e).__webglMultisampledFramebuffer:Array.isArray(l)?l[n]:l,N.copy(e.viewport),P.copy(e.scissor),F=e.scissorTest}else N.copy(he).multiplyScalar(ce).floor(),P.copy(ge).multiplyScalar(ce).floor(),F=_e;if(n!==0&&(i=Qe),L.bindFramebuffer(I.FRAMEBUFFER,i)&&L.drawBuffers(e,i),L.viewport(N),L.scissor(P),L.setScissorTest(F),a){let i=R.get(e.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+t,i.__webglTexture,n)}else if(o){let i=t;for(let t=0;t<e.textures.length;t++){let a=R.get(e.textures[t]);I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0+t,a.__webglTexture,n,i)}}else if(e!==null&&n!==0){let t=R.get(e.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,t.__webglTexture,n)}j=-1},this.readRenderTargetPixels=function(e,t,n,i,a,o,s,c=0){if(!(e&&e.isWebGLRenderTarget)){error(`WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);return}let l=R.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&s!==void 0&&(l=l[s]),l){L.bindFramebuffer(I.FRAMEBUFFER,l);try{let s=e.textures[c],l=s.format,u=s.type;if(e.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+c),!Ae.textureFormatReadable(l)){error(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.`);return}if(!Ae.textureTypeReadable(u)){error(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.`);return}t>=0&&t<=e.width-i&&n>=0&&n<=e.height-a&&I.readPixels(t,n,i,a,Ke.convert(l),Ke.convert(u),o)}finally{let e=A===null?null:R.get(A).__webglFramebuffer;L.bindFramebuffer(I.FRAMEBUFFER,e)}}},this.readRenderTargetPixelsAsync=async function(e,t,n,i,a,o,s,c=0){if(!(e&&e.isWebGLRenderTarget))throw Error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);let l=R.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&s!==void 0&&(l=l[s]),l)if(t>=0&&t<=e.width-i&&n>=0&&n<=e.height-a){L.bindFramebuffer(I.FRAMEBUFFER,l);let s=e.textures[c],u=s.format,d=s.type;if(e.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+c),!Ae.textureFormatReadable(u))throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.`);if(!Ae.textureTypeReadable(d))throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.`);let f=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,f),I.bufferData(I.PIXEL_PACK_BUFFER,o.byteLength,I.STREAM_READ),I.readPixels(t,n,i,a,Ke.convert(u),Ke.convert(d),0);let p=A===null?null:R.get(A).__webglFramebuffer;L.bindFramebuffer(I.FRAMEBUFFER,p);let m=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await probeAsync(I,m,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,f),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,o),I.deleteBuffer(f),I.deleteSync(m),o}else throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.`)},this.copyFramebufferToTexture=function(e,t=null,n=0){let i=2**-n,a=Math.floor(e.image.width*i),o=Math.floor(e.image.height*i),s=t===null?0:t.x,c=t===null?0:t.y;z.setTexture2D(e,0),I.copyTexSubImage2D(I.TEXTURE_2D,n,0,0,s,c,a,o),L.unbindTexture()};let $e=I.createFramebuffer(),et=I.createFramebuffer();this.copyTextureToTexture=function(e,t,n=null,i=null,a=0,o=0){let s,c,l,u,d,f,p,m,h,g=e.isCompressedTexture?e.mipmaps[o]:e.image;if(n!==null)s=n.max.x-n.min.x,c=n.max.y-n.min.y,l=n.isBox3?n.max.z-n.min.z:1,u=n.min.x,d=n.min.y,f=n.isBox3?n.min.z:0;else{let t=2**-a;s=Math.floor(g.width*t),c=Math.floor(g.height*t),l=e.isDataArrayTexture?g.depth:e.isData3DTexture?Math.floor(g.depth*t):1,u=0,d=0,f=0}i===null?(p=0,m=0,h=0):(p=i.x,m=i.y,h=i.z);let _=Ke.convert(t.format),y=Ke.convert(t.type),b;t.isData3DTexture?(z.setTexture3D(t,0),b=I.TEXTURE_3D):t.isDataArrayTexture||t.isCompressedArrayTexture?(z.setTexture2DArray(t,0),b=I.TEXTURE_2D_ARRAY):(z.setTexture2D(t,0),b=I.TEXTURE_2D),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,t.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,t.unpackAlignment);let x=I.getParameter(I.UNPACK_ROW_LENGTH),S=I.getParameter(I.UNPACK_IMAGE_HEIGHT),C=I.getParameter(I.UNPACK_SKIP_PIXELS),w=I.getParameter(I.UNPACK_SKIP_ROWS),T=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,g.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,g.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,u),I.pixelStorei(I.UNPACK_SKIP_ROWS,d),I.pixelStorei(I.UNPACK_SKIP_IMAGES,f);let E=e.isDataArrayTexture||e.isData3DTexture,D=t.isDataArrayTexture||t.isData3DTexture;if(e.isDepthTexture){let n=R.get(e),i=R.get(t),g=R.get(n.__renderTarget),_=R.get(i.__renderTarget);L.bindFramebuffer(I.READ_FRAMEBUFFER,g.__webglFramebuffer),L.bindFramebuffer(I.DRAW_FRAMEBUFFER,_.__webglFramebuffer);for(let n=0;n<l;n++)E&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,R.get(e).__webglTexture,a,f+n),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,R.get(t).__webglTexture,o,h+n)),I.blitFramebuffer(u,d,s,c,p,m,s,c,I.DEPTH_BUFFER_BIT,I.NEAREST);L.bindFramebuffer(I.READ_FRAMEBUFFER,null),L.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(a!==0||e.isRenderTargetTexture||R.has(e)){let n=R.get(e),i=R.get(t);L.bindFramebuffer(I.READ_FRAMEBUFFER,$e),L.bindFramebuffer(I.DRAW_FRAMEBUFFER,et);for(let e=0;e<l;e++)E?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,n.__webglTexture,a,f+e):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,n.__webglTexture,a),D?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,i.__webglTexture,o,h+e):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,i.__webglTexture,o),a===0?D?I.copyTexSubImage3D(b,o,p,m,h+e,u,d,s,c):I.copyTexSubImage2D(b,o,p,m,u,d,s,c):I.blitFramebuffer(u,d,s,c,p,m,s,c,I.COLOR_BUFFER_BIT,I.NEAREST);L.bindFramebuffer(I.READ_FRAMEBUFFER,null),L.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else D?e.isDataTexture||e.isData3DTexture?I.texSubImage3D(b,o,p,m,h,s,c,l,_,y,g.data):t.isCompressedArrayTexture?I.compressedTexSubImage3D(b,o,p,m,h,s,c,l,_,g.data):I.texSubImage3D(b,o,p,m,h,s,c,l,_,y,g):e.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,o,p,m,s,c,_,y,g.data):e.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,o,p,m,g.width,g.height,_,g.data):I.texSubImage2D(I.TEXTURE_2D,o,p,m,s,c,_,y,g);I.pixelStorei(I.UNPACK_ROW_LENGTH,x),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,S),I.pixelStorei(I.UNPACK_SKIP_PIXELS,C),I.pixelStorei(I.UNPACK_SKIP_ROWS,w),I.pixelStorei(I.UNPACK_SKIP_IMAGES,T),o===0&&t.generateMipmaps&&I.generateMipmap(b),L.unbindTexture()},this.initRenderTarget=function(e){R.get(e).__webglFramebuffer===void 0&&z.setupRenderTarget(e)},this.initTexture=function(e){e.isCubeTexture?z.setTextureCube(e,0):e.isData3DTexture?z.setTexture3D(e,0):e.isDataArrayTexture||e.isCompressedArrayTexture?z.setTexture2DArray(e,0):z.setTexture2D(e,0),L.unbindTexture()},this.resetState=function(){O=0,k=0,A=null,L.reset(),qe.reset()},typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}get coordinateSystem(){return vt}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=U._getDrawingBufferColorSpace(e),t.unpackColorSpace=U._getUnpackColorSpace()}},Xa=Object.freeze({Linear:Object.freeze({None:function(e){return e},In:function(e){return e},Out:function(e){return e},InOut:function(e){return e}}),Quadratic:Object.freeze({In:function(e){return e*e},Out:function(e){return e*(2-e)},InOut:function(e){return(e*=2)<1?.5*e*e:-.5*(--e*(e-2)-1)}}),Cubic:Object.freeze({In:function(e){return e*e*e},Out:function(e){return--e*e*e+1},InOut:function(e){return(e*=2)<1?.5*e*e*e:.5*((e-=2)*e*e+2)}}),Quartic:Object.freeze({In:function(e){return e*e*e*e},Out:function(e){return 1- --e*e*e*e},InOut:function(e){return(e*=2)<1?.5*e*e*e*e:-.5*((e-=2)*e*e*e-2)}}),Quintic:Object.freeze({In:function(e){return e*e*e*e*e},Out:function(e){return--e*e*e*e*e+1},InOut:function(e){return(e*=2)<1?.5*e*e*e*e*e:.5*((e-=2)*e*e*e*e+2)}}),Sinusoidal:Object.freeze({In:function(e){return 1-Math.sin((1-e)*Math.PI/2)},Out:function(e){return Math.sin(e*Math.PI/2)},InOut:function(e){return .5*(1-Math.sin(Math.PI*(.5-e)))}}),Exponential:Object.freeze({In:function(e){return e===0?0:1024**(e-1)},Out:function(e){return e===1?1:1-2**(-10*e)},InOut:function(e){return e===0?0:e===1?1:(e*=2)<1?.5*1024**(e-1):.5*(-(2**(-10*(e-1)))+2)}}),Circular:Object.freeze({In:function(e){return 1-Math.sqrt(1-e*e)},Out:function(e){return Math.sqrt(1- --e*e)},InOut:function(e){return(e*=2)<1?-.5*(Math.sqrt(1-e*e)-1):.5*(Math.sqrt(1-(e-=2)*e)+1)}}),Elastic:Object.freeze({In:function(e){return e===0?0:e===1?1:-(2**(10*(e-1)))*Math.sin((e-1.1)*5*Math.PI)},Out:function(e){return e===0?0:e===1?1:2**(-10*e)*Math.sin((e-.1)*5*Math.PI)+1},InOut:function(e){return e===0?0:e===1?1:(e*=2,e<1?-.5*2**(10*(e-1))*Math.sin((e-1.1)*5*Math.PI):.5*2**(-10*(e-1))*Math.sin((e-1.1)*5*Math.PI)+1)}}),Back:Object.freeze({In:function(e){var t=1.70158;return e===1?1:e*e*((t+1)*e-t)},Out:function(e){var t=1.70158;return e===0?0:--e*e*((t+1)*e+t)+1},InOut:function(e){var t=1.70158*1.525;return(e*=2)<1?.5*(e*e*((t+1)*e-t)):.5*((e-=2)*e*((t+1)*e+t)+2)}}),Bounce:Object.freeze({In:function(e){return 1-Xa.Bounce.Out(1-e)},Out:function(e){return e<1/2.75?7.5625*e*e:e<2/2.75?7.5625*(e-=1.5/2.75)*e+.75:e<2.5/2.75?7.5625*(e-=2.25/2.75)*e+.9375:7.5625*(e-=2.625/2.75)*e+.984375},InOut:function(e){return e<.5?Xa.Bounce.In(e*2)*.5:Xa.Bounce.Out(e*2-1)*.5+.5}}),generatePow:function(e){return e===void 0&&(e=4),e=e<2**-52?2**-52:e,e=e>1e4?1e4:e,{In:function(t){return t**+e},Out:function(t){return 1-(1-t)**e},InOut:function(t){return t<.5?(t*2)**e/2:(1-(2-t*2)**e)/2+.5}}}}),now=function(){return performance.now()},Za=function(){function Group(){var e=[...arguments];this._tweens={},this._tweensAddedDuringUpdate={},this.add.apply(this,e)}return Group.prototype.getAll=function(){var e=this;return Object.keys(this._tweens).map(function(t){return e._tweens[t]})},Group.prototype.removeAll=function(){this._tweens={}},Group.prototype.add=function(){for(var e,t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];for(var i=0,a=t;i<a.length;i++){var o=a[i];(e=o._group)==null||e.remove(o),o._group=this,this._tweens[o.getId()]=o,this._tweensAddedDuringUpdate[o.getId()]=o}},Group.prototype.remove=function(){for(var e=[...arguments],t=0,n=e;t<n.length;t++){var i=n[t];i._group=void 0,delete this._tweens[i.getId()],delete this._tweensAddedDuringUpdate[i.getId()]}},Group.prototype.allStopped=function(){return this.getAll().every(function(e){return!e.isPlaying()})},Group.prototype.update=function(e,t){e===void 0&&(e=now()),t===void 0&&(t=!0);var n=Object.keys(this._tweens);if(n.length!==0)for(;n.length>0;){this._tweensAddedDuringUpdate={};for(var i=0;i<n.length;i++){var a=this._tweens[n[i]],o=!t;a&&a.update(e,o)===!1&&!t&&this.remove(a)}n=Object.keys(this._tweensAddedDuringUpdate)}},Group}(),Qa={Linear:function(e,t){var n=e.length-1,i=n*t,a=Math.floor(i),o=Qa.Utils.Linear;return t<0?o(e[0],e[1],i):t>1?o(e[n],e[n-1],n-i):o(e[a],e[a+1>n?n:a+1],i-a)},Bezier:function(e,t){for(var n=0,i=e.length-1,a=Math.pow,o=Qa.Utils.Bernstein,s=0;s<=i;s++)n+=a(1-t,i-s)*a(t,s)*e[s]*o(i,s);return n},CatmullRom:function(e,t){var n=e.length-1,i=n*t,a=Math.floor(i),o=Qa.Utils.CatmullRom;return e[0]===e[n]?(t<0&&(a=Math.floor(i=n*(1+t))),o(e[(a-1+n)%n],e[a],e[(a+1)%n],e[(a+2)%n],i-a)):t<0?e[0]-(o(e[0],e[0],e[1],e[1],-i)-e[0]):t>1?e[n]-(o(e[n],e[n],e[n-1],e[n-1],i-n)-e[n]):o(e[a?a-1:0],e[a],e[n<a+1?n:a+1],e[n<a+2?n:a+2],i-a)},Utils:{Linear:function(e,t,n){return(t-e)*n+e},Bernstein:function(e,t){var n=Qa.Utils.Factorial;return n(e)/n(t)/n(e-t)},Factorial:(function(){var e=[1];return function(t){var n=1;if(e[t])return e[t];for(var i=t;i>1;i--)n*=i;return e[t]=n,n}})(),CatmullRom:function(e,t,n,i,a){var o=(n-e)*.5,s=(i-t)*.5,c=a*a,l=a*c;return(2*t-2*n+o+s)*l+(-3*t+3*n-2*o-s)*c+o*a+t}}},$a=function(){function Sequence(){}return Sequence.nextId=function(){return Sequence._nextId++},Sequence._nextId=0,Sequence}(),eo=new Za,to=function(){function Tween(e,t){this._isPaused=!1,this._pauseStart=0,this._valuesStart={},this._valuesEnd={},this._valuesStartRepeat={},this._duration=1e3,this._isDynamic=!1,this._initialRepeat=0,this._repeat=0,this._yoyo=!1,this._isPlaying=!1,this._reversed=!1,this._delayTime=0,this._startTime=0,this._easingFunction=Xa.Linear.None,this._interpolationFunction=Qa.Linear,this._chainedTweens=[],this._onStartCallbackFired=!1,this._onEveryStartCallbackFired=!1,this._id=$a.nextId(),this._isChainStopped=!1,this._propertiesAreSetUp=!1,this._goToEnd=!1,this._object=e,typeof t==`object`?(this._group=t,t.add(this)):t===!0&&(this._group=eo,eo.add(this))}return Tween.prototype.getId=function(){return this._id},Tween.prototype.isPlaying=function(){return this._isPlaying},Tween.prototype.isPaused=function(){return this._isPaused},Tween.prototype.getDuration=function(){return this._duration},Tween.prototype.to=function(e,t){if(t===void 0&&(t=1e3),this._isPlaying)throw Error(`Can not call Tween.to() while Tween is already started or paused. Stop the Tween first.`);return this._valuesEnd=e,this._propertiesAreSetUp=!1,this._duration=t<0?0:t,this},Tween.prototype.duration=function(e){return e===void 0&&(e=1e3),this._duration=e<0?0:e,this},Tween.prototype.dynamic=function(e){return e===void 0&&(e=!1),this._isDynamic=e,this},Tween.prototype.start=function(e,t){if(e===void 0&&(e=now()),t===void 0&&(t=!1),this._isPlaying)return this;if(this._repeat=this._initialRepeat,this._reversed)for(var n in this._reversed=!1,this._valuesStartRepeat)this._swapEndStartRepeatValues(n),this._valuesStart[n]=this._valuesStartRepeat[n];if(this._isPlaying=!0,this._isPaused=!1,this._onStartCallbackFired=!1,this._onEveryStartCallbackFired=!1,this._isChainStopped=!1,this._startTime=e,this._startTime+=this._delayTime,!this._propertiesAreSetUp||t){if(this._propertiesAreSetUp=!0,!this._isDynamic){var i={};for(var a in this._valuesEnd)i[a]=this._valuesEnd[a];this._valuesEnd=i}this._setupProperties(this._object,this._valuesStart,this._valuesEnd,this._valuesStartRepeat,t)}return this},Tween.prototype.startFromCurrentValues=function(e){return this.start(e,!0)},Tween.prototype._setupProperties=function(e,t,n,i,a){for(var o in n){var s=e[o],c=Array.isArray(s),l=c?`array`:typeof s,u=!c&&Array.isArray(n[o]);if(!(l===`undefined`||l===`function`)){if(u){var d=n[o];if(d.length===0)continue;for(var f=[s],p=0,m=d.length;p<m;p+=1){var h=this._handleRelativeValue(s,d[p]);if(isNaN(h)){u=!1,console.warn(`Found invalid interpolation list. Skipping.`);break}f.push(h)}u&&(n[o]=f)}if((l===`object`||c)&&s&&!u){t[o]=c?[]:{};var g=s;for(var _ in g)t[o][_]=g[_];i[o]=c?[]:{};var d=n[o];if(!this._isDynamic){var y={};for(var _ in d)y[_]=d[_];n[o]=d=y}this._setupProperties(g,t[o],d,i[o],a)}else (t[o]===void 0||a)&&(t[o]=s),c||(t[o]*=1),u?i[o]=n[o].slice().reverse():i[o]=t[o]||0}}},Tween.prototype.stop=function(){return this._isChainStopped||(this._isChainStopped=!0,this.stopChainedTweens()),this._isPlaying?(this._isPlaying=!1,this._isPaused=!1,this._onStopCallback&&this._onStopCallback(this._object),this):this},Tween.prototype.end=function(){return this._goToEnd=!0,this.update(this._startTime+this._duration),this},Tween.prototype.pause=function(e){return e===void 0&&(e=now()),this._isPaused||!this._isPlaying?this:(this._isPaused=!0,this._pauseStart=e,this)},Tween.prototype.resume=function(e){return e===void 0&&(e=now()),!this._isPaused||!this._isPlaying?this:(this._isPaused=!1,this._startTime+=e-this._pauseStart,this._pauseStart=0,this)},Tween.prototype.stopChainedTweens=function(){for(var e=0,t=this._chainedTweens.length;e<t;e++)this._chainedTweens[e].stop();return this},Tween.prototype.group=function(e){return e?(e.add(this),this):(console.warn(`tween.group() without args has been removed, use group.add(tween) instead.`),this)},Tween.prototype.remove=function(){var e;return(e=this._group)==null||e.remove(this),this},Tween.prototype.delay=function(e){return e===void 0&&(e=0),this._delayTime=e,this},Tween.prototype.repeat=function(e){return e===void 0&&(e=0),this._initialRepeat=e,this._repeat=e,this},Tween.prototype.repeatDelay=function(e){return this._repeatDelayTime=e,this},Tween.prototype.yoyo=function(e){return e===void 0&&(e=!1),this._yoyo=e,this},Tween.prototype.easing=function(e){return e===void 0&&(e=Xa.Linear.None),this._easingFunction=e,this},Tween.prototype.interpolation=function(e){return e===void 0&&(e=Qa.Linear),this._interpolationFunction=e,this},Tween.prototype.chain=function(){return this._chainedTweens=[...arguments],this},Tween.prototype.onStart=function(e){return this._onStartCallback=e,this},Tween.prototype.onEveryStart=function(e){return this._onEveryStartCallback=e,this},Tween.prototype.onUpdate=function(e){return this._onUpdateCallback=e,this},Tween.prototype.onRepeat=function(e){return this._onRepeatCallback=e,this},Tween.prototype.onComplete=function(e){return this._onCompleteCallback=e,this},Tween.prototype.onStop=function(e){return this._onStopCallback=e,this},Tween.prototype.update=function(e,t){var n=this;if(e===void 0&&(e=now()),t===void 0&&(t=Tween.autoStartOnUpdate),this._isPaused)return!0;var i;if(!this._goToEnd&&!this._isPlaying)if(t)this.start(e,!0);else return!1;if(this._goToEnd=!1,e<this._startTime)return!0;this._onStartCallbackFired===!1&&(this._onStartCallback&&this._onStartCallback(this._object),this._onStartCallbackFired=!0),this._onEveryStartCallbackFired===!1&&(this._onEveryStartCallback&&this._onEveryStartCallback(this._object),this._onEveryStartCallbackFired=!0);var a=e-this._startTime,o=this._duration+(this._repeatDelayTime??this._delayTime),s=this._duration+this._repeat*o,calculateElapsedPortion=function(){if(n._duration===0||a>s)return 1;var e=a-Math.trunc(a/o)*o,t=Math.min(e/n._duration,1);return t===0&&a===n._duration?1:t},c=calculateElapsedPortion(),l=this._easingFunction(c);if(this._updateProperties(this._object,this._valuesStart,this._valuesEnd,l),this._onUpdateCallback&&this._onUpdateCallback(this._object,c),this._duration===0||a>=this._duration)if(this._repeat>0){var u=Math.min(Math.trunc((a-this._duration)/o)+1,this._repeat);for(i in isFinite(this._repeat)&&(this._repeat-=u),this._valuesStartRepeat)!this._yoyo&&typeof this._valuesEnd[i]==`string`&&(this._valuesStartRepeat[i]=this._valuesStartRepeat[i]+parseFloat(this._valuesEnd[i])),this._yoyo&&this._swapEndStartRepeatValues(i),this._valuesStart[i]=this._valuesStartRepeat[i];return this._yoyo&&(this._reversed=!this._reversed),this._startTime+=o*u,this._onRepeatCallback&&this._onRepeatCallback(this._object),this._onEveryStartCallbackFired=!1,!0}else{this._onCompleteCallback&&this._onCompleteCallback(this._object);for(var d=0,f=this._chainedTweens.length;d<f;d++)this._chainedTweens[d].start(this._startTime+this._duration,!1);return this._isPlaying=!1,!1}return!0},Tween.prototype._updateProperties=function(e,t,n,i){for(var a in n)if(t[a]!==void 0){var o=t[a]||0,s=n[a];!Array.isArray(e[a])&&Array.isArray(s)?e[a]=this._interpolationFunction(s,i):typeof s==`object`&&s?this._updateProperties(e[a],o,s,i):(s=this._handleRelativeValue(o,s),typeof s==`number`&&(e[a]=o+(s-o)*i))}},Tween.prototype._handleRelativeValue=function(e,t){return typeof t==`string`?t.charAt(0)===`+`||t.charAt(0)===`-`?e+parseFloat(t):parseFloat(t):t},Tween.prototype._swapEndStartRepeatValues=function(e){var t=this._valuesStartRepeat[e],n=this._valuesEnd[e];typeof n==`string`?this._valuesStartRepeat[e]=this._valuesStartRepeat[e]+parseFloat(n):this._valuesStartRepeat[e]=this._valuesEnd[e],this._valuesEnd[e]=t},Tween.autoStartOnUpdate=!1,Tween}();$a.nextId;var no=eo;no.getAll.bind(no),no.removeAll.bind(no),no.add.bind(no),no.remove.bind(no),no.update.bind(no);var ThreeAnimator=class{constructor(){this.tweenGroup=new Za}update(){this.tweenGroup.update()}animateObjectToTarget(e,t,n,i={duration:1e3}){let a=[];if(t){let n=new to(e.position).to(t);a.push(n)}if(n){let t=new to(e.quaternion).to(n);a.push(t)}a.forEach(e=>{i?.duration&&e.duration(i?.duration),i?.easing&&e.easing(i?.easing),e.start()}),this.tweenGroup.add(...a)}createTween(e,t,n){let i=new to(e).to(t);return n?.duration&&i.duration(n.duration),n?.easing&&i.easing(n.easing),this.tweenGroup.add(i),i}removeTween(e){this.tweenGroup.remove(e)}},SpinControls=function(e,t,n,i){var a=this;this.object=e,this.trackballRadius=t,this.camera=n,this.domElement=i===void 0?document:i,this.enabled=!0,this.rotateSensitivity=1,this.relativelySpinOffTrackball=!0,this.enableDamping=!0,this.dampingFactor=5,this.spinAxisConstraint,this.POINTER_SPHERE_MAPPING={SHOEMAKE:`shoemake`,HOLROYD:`holroyd`,AZIMUTHAL:`azimuthal`,RAYCAST:`raycast`},this.offTrackBallVelocityGainMap={shoemake:20,holroyd:8,azimuthal:8,raycast:20},this._pointerMapping=this.POINTER_SPHERE_MAPPING.RAYCAST,this._offTrackBallVelocityGain=this.offTrackBallVelocityGainMap[this._pointerMapping],this._pointerUpVelDamping=2e3,this.screen={left:0,top:0,width:0,height:0};var o=new V(0,0,0),s=new Quaternion,c,l=new V,u=new B,d=new V,f=0,p=!1,m=!1,h=1e-6,g={type:`change`},_={type:`start`},y={type:`end`};this.update=(function(){var e,t=performance.now()/1e3,n;return function update(){e=performance.now()/1e3,n=e-t,t=e,a.enableDamping&&(o.multiplyScalar(1/(n*a.dampingFactor+1)),a.applyVelocity()),a.enableDamping||(c=performance.now()),a.hasPointerMovedThisFrame=!1}})(),this.updateAngularVelocity=(function(){var e=new Quaternion,t=new Quaternion,n=new Quaternion;return function updateAngularVelocity(i,s,c){n.set(s.x,s.y,s.z,0),n.normalize(),n.conjugate(),t.set(i.x,i.y,i.z,0).multiply(n),c*=2,e.set(s.x,s.y,s.z,1);var l=t.angleTo(e)/c;o.crossVectors(s,i),o.setLength(l),a.applyVelocity()}})(),this.applyVelocity=(function(){var e=new Quaternion,t=new V,n,i,l;return function applyVelocity(){l=performance.now(),i=(l-c)/1e3,c=l,a.spinAxisConstraint?(t.copy(a.spinAxisConstraint),n=t.dot(o)):(t.copy(o),n=o.length()),n&&i&&(t.normalize(),e.setFromAxisAngle(t,n*i*a.rotateSensitivity),a.object.quaternion.normalize(),a.object.quaternion.premultiply(e),8*(1-s.dot(a.object.quaternion))>h&&(a.dispatchEvent(g),s.copy(a.object.quaternion)))}})(),this.onWindowResize=function(){if(a.domElement===document)a.screen.left=0,a.screen.top=0,a.screen.width=window.innerWidth,a.screen.height=window.innerHeight;else{var e=a.domElement.getBoundingClientRect(),t=a.domElement.ownerDocument.documentElement;a.screen.left=e.left+window.pageXOffset-t.clientLeft,a.screen.top=e.top+window.pageYOffset-t.clientTop,a.screen.width=e.width,a.screen.height=e.height}},this.resetInputAfterCameraMovement=function(){m&&(a.camera.updateWorldMatrix(!0,!1),a.camera.matrixWorldInverse.copy(a.camera.matrixWorld).invert(),l.copy(S(b(u.x,u.y))))};var b=(function(){var e=new B;return function getPointerInNdc(t,n){return e.set((t-a.screen.width*.5-a.screen.left)/(a.screen.width*.5),(a.screen.height+2*(a.screen.top-n))/a.screen.height),e}})();this.getPointerInNdc=b;var x=(function(){var e=new V,t=new V,n=new V,i=new B,o=new Quaternion;return function getObjectToPointer(s){a.object.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(a.object.matrixWorld),a.camera.updateWorldMatrix(!0,!1),a.camera.matrixWorldInverse.copy(a.camera.matrixWorld).invert(),e.project(a.camera),i.set(e.x,e.y),i.subVectors(s,i),t.setFromMatrixPosition(a.object.matrixWorld),n.set(a.trackballRadius,0,0),n.applyQuaternion(o.setFromRotationMatrix(a.camera.matrixWorld)),t.add(n),t.project(a.camera),t.z=0,e.z=0;var c=t.distanceTo(e);return i.x/=c,i.y/=c,a.camera.aspect&&(i.y/=a.camera.aspect),i}})(),S=(function(){var e=new V,t=new V,n=new B,i=new Quaternion,o=new Sphere,s=new Ray;return function getPointerInSphere(c){if(n.copy(x(c)),i.setFromRotationMatrix(a.camera.matrixWorld),a._pointerMapping===a.POINTER_SPHERE_MAPPING.RAYCAST)n.lengthSq()<1?(t.setFromMatrixPosition(a.object.matrixWorld),o.set(t,a.trackballRadius),s.origin.copy(a.camera.position),s.direction.set(c.x,c.y,.5),s.direction.unproject(a.camera),s.direction.sub(a.camera.position).normalize(),s.intersectSphere(o,e),e.sub(t),e.normalize()):(n.normalize(),e.set(n.x,n.y,0),e.applyQuaternion(i));else if(a._pointerMapping===a.POINTER_SPHERE_MAPPING.HOLROYD){var l=n.lengthSq();l<.5?e.set(n.x,n.y,Math.sqrt(1-l)):(e.set(n.x,n.y,1/(2*Math.sqrt(l))),e.normalize()),e.applyQuaternion(i)}else if(a._pointerMapping===a.POINTER_SPHERE_MAPPING.SHOEMAKE){var l=n.lengthSq();l<1?e.set(n.x,n.y,Math.sqrt(1-l)):(n.normalize(),e.set(n.x,n.y,0)),e.applyQuaternion(i)}else if(a._pointerMapping===a.POINTER_SPHERE_MAPPING.AZIMUTHAL){var l=Math.PI/2*n.length(),u=l<2**-52?1:Math.sin(l)/l;n.multiplyScalar(Math.PI/2*u),e.set(n.x,n.y,Math.cos(l)),e.applyQuaternion(i)}return e}})();this.onPointerDown=function(e,t,n){var i=b(e,t);x(i).lengthSq()<1?(p=!0,l.copy(S(i))):p=!1,u.set(e,t),f=n,m=!0},this.onPointerMove=(function(){var e=new V,t=new B,n=new B,i=new B,s=new V,m=new V,h=new V,g=new V;return function onPointerMove(_,y,C){var w=(C-f)/1e3;if(f=C,d.copy(l),e.copy(b(_,y)),t.copy(x(e)),t.lengthSq()<1||!this.relativelySpinOffTrackball)l.copy(S(e)),p?w>0&&a.updateAngularVelocity(l,d,w):c=C,p=!0;else{if(p)c=C;else if(w>0){i.copy(b(u.x,u.y)),n.subVectors(e,i),s.setFromMatrixPosition(a.object.matrixWorld),a.camera.isPerspectiveCamera?m.copy(a.camera.position).sub(s):(a.camera.getWorldDirection(m),m.negate()),l.copy(S(e)),o.crossVectors(m,l);var T=a.camera.isPerspectiveCamera?2/a.camera.fov/Math.atan(a.trackballRadius/m.length()):a.trackballRadius/((a.camera.top-a.camera.bottom)/a.camera.zoom*2);t.normalize();var E=n.dot(t)*T/w;o.setLength(E*a._offTrackBallVelocityGain),g.copy(S(i));var D=g.angleTo(l)/w;h.crossVectors(g,l),h.setLength(D),o.add(h),a.applyVelocity()}p=!1}u.set(_,y),a.hasPointerMovedThisFrame=!0}})(),this.setPointerToSphereMapping=function(e){a._pointerMapping=e,a._offTrackBallVelocityGain=a.offTrackBallVelocityGainMap[a._pointerMapping]},this.handlePointerDown=function(e){e.preventDefault(),a.domElement.focus?a.domElement.focus():window.focus(),a.dispatchEvent(_)},this.handlePointerUp=function(e){if(e.preventDefault(),!a.hasPointerMovedThisFrame){var t=(e.timeStamp-f)/1e3;o.multiplyScalar(1/(a._pointerUpVelDamping*t**2+a.dampingFactor*t+1))}m=!1,a.dispatchEvent(y)};function onMouseDown(e){a.enabled===!1||e.button!==0||(a.onPointerDown(e.pageX,e.pageY,e.timeStamp),document.addEventListener(`mousemove`,onMouseMove,!1),document.addEventListener(`mouseup`,onMouseUp,!1),a.handlePointerDown(e))}function onMouseMove(e){a.enabled!==!1&&(e.preventDefault(),a.onPointerMove(e.pageX,e.pageY,e.timeStamp))}function onMouseUp(e){a.enabled!==!1&&(document.removeEventListener(`mousemove`,onMouseMove),document.removeEventListener(`mouseup`,onMouseUp),a.handlePointerUp(e))}this.cancelSpin=function(){o.set(0,0,0)},this.handleTouchStart=function(e){a.onPointerDown(e.pageX,e.pageY,e.timeStamp),a.applyVelocity()};function onTouchStart(e){a.enabled!==!1&&(a.handleTouchStart(e),a.handlePointerDown(e))}function onTouchMove(e){a.enabled===!1||!m||(e.preventDefault(),e.stopImmediatePropagation(),a.onPointerMove(e.touches[0].pageX,e.touches[0].pageY,e.timeStamp))}function onTouchEnd(e){a.enabled!==!1&&(a.handlePointerUp(e),e.touches.length>0&&(m=!0))}this.dispose=function(){a.domElement.removeEventListener(`mousedown`,onMouseDown),document.removeEventListener(`mousemove`,onMouseMove),document.removeEventListener(`mouseup`,onMouseUp),a.domElement.removeEventListener(`touchstart`,onTouchStart),a.domElement.removeEventListener(`touchmove`,onTouchMove),a.domElement.removeEventListener(`touchend`,onTouchEnd)},a.domElement.addEventListener(`mousedown`,onMouseDown),a.domElement.addEventListener(`touchstart`,onTouchStart,{passive:!1}),a.domElement.addEventListener(`touchmove`,onTouchMove,{passive:!1}),a.domElement.addEventListener(`touchend`,onTouchEnd,{passive:!1}),a.onWindowResize(),a.update()};SpinControls.prototype=Object.create(EventDispatcher.prototype),SpinControls.prototype.constructor=SpinControls;var ThreeControls=class{constructor(e){this.defaultSpinControlsState={autoRotateAxis:new V(0,1,0),trackballRadius:100,spinAxisConstraint:void 0},this.autoRotateAxis=new V(0,1,0),this.autoRotateQuaternion=new Quaternion,this.autoRotateEnabled=!0;let t=e.getRenderer().domElement;this.camera=this.buildPerspectiveCamera(t),this.spinControls=this.buildSpinControls(t),this.defaultCameraState=this.camera.clone()}buildPerspectiveCamera(e){let t=e.parentElement,aspectRatio=()=>t.offsetWidth/t.offsetHeight,n=new PerspectiveCamera(36,aspectRatio(),1,3e3);return n.position.set(0,0,400),window.addEventListener(`resize`,()=>{n.aspect=aspectRatio(),n.updateProjectionMatrix();let e=this.defaultCameraState;e.aspect=aspectRatio(),e.updateProjectionMatrix()}),n}buildSpinControls(e){let t=new SpinControls(new ln,0,this.getCamera(),e);return t.rotateSensitivity=.4,t.dampingFactor=10,t.relativelySpinOffTrackball=!0,window.addEventListener(`resize`,()=>t.onWindowResize()),t.addEventListener(`start`,()=>{this.autoRotateEnabled=!1}),t.addEventListener(`end`,()=>{this.autoRotateEnabled=!0}),t}setSpinControlsObject(e,t,n){this.spinControls.object=e,this.spinControls.trackballRadius=t,this.spinControls.spinAxisConstraint=n,this.defaultSpinControlsState.trackballRadius=t,this.defaultSpinControlsState.spinAxisConstraint=n}setRotationAxis(e){this.autoRotateAxis.copy(e),this.spinControls.spinAxisConstraint=e}resetSpinControls(){let{autoRotateAxis:e,trackballRadius:t,spinAxisConstraint:n}=this.defaultSpinControlsState;this.autoRotateAxis.copy(e),this.spinControls.trackballRadius=t,this.spinControls.spinAxisConstraint=n}autoRotate(e){this.autoRotateQuaternion.setFromAxisAngle(this.autoRotateAxis,e*-.1),this.spinControls.object.quaternion.premultiply(this.autoRotateQuaternion)}update(e){this.spinControls.update(),this.autoRotateEnabled&&this.autoRotate(e)}getCamera(){return this.camera}getSpinControls(){return this.spinControls}getDefaultCameraState(){return this.defaultCameraState}},getDirectionBetweenVectors=(e,t)=>new V().subVectors(t,e).normalize(),getObjectDirection=e=>{let t=new V;return e.getWorldDirection(t),t},getObjectCenter=e=>{let t=new V;return new Box3().setFromObject(e).getCenter(t),t},getObjectPositionOnScreen=(e,t,n)=>{let i=new V().copy(e);return i.project(t),new B((i.x+1)/2*n.clientWidth,-(i.y-1)/2*n.clientHeight)},ThreeEventHandler=class{constructor(){this.onObjectMoveListeners=new Map,this.previousObjectPositions=new Map,this.defaultObjectPosition=new V(0,0,0)}update(){for(let[e,t]of this.onObjectMoveListeners){let n=this.getObjectPosition(e);t.forEach(t=>{this.hasObjectPositionChanged(e,n)&&t(e)}),this.previousObjectPositions.set(e,n.clone())}}onObjectMove(e,t){this.onObjectMoveListeners.has(e)||this.onObjectMoveListeners.set(e,new Set),this.onObjectMoveListeners.get(e)?.add(t),this.previousObjectPositions.set(e,this.getObjectPosition(e))}removeObjectMoveListener(e,t){this.onObjectMoveListeners.get(e)?.delete(t),this.onObjectMoveListeners.get(e)?.size===0&&(this.onObjectMoveListeners.delete(e),this.previousObjectPositions.delete(e))}hasObjectPositionChanged(e,t){let n=this.previousObjectPositions.get(e);return n?!t.equals(n):!1}getObjectPosition(e){return e.position.equals(this.defaultObjectPosition)?getObjectCenter(e):e.position}},ThreeRenderer=class{constructor(e){this.renderer=this.buildRenderer(e)}buildRenderer(e){let t=e.parentElement,n=new WebGLRenderer({canvas:e,antialias:!0,alpha:!0});n.outputColorSpace=ft,n.setPixelRatio(window.devicePixelRatio);let updateWebGlRendererSize=()=>n.setSize(this.rendererWidth(t),this.rendererHeight(t),!1);return updateWebGlRendererSize(),window.addEventListener(`resize`,updateWebGlRendererSize),n}rendererWidth(e){return e.offsetWidth>0?e.offsetWidth:window.innerWidth}rendererHeight(e){return e.offsetHeight>0?e.offsetHeight:window.innerWidth}getRenderer(){return this.renderer}getCanvas(){return this.renderer.domElement}},color=e=>new Color$1(e),ro={ambientLight:color(`#ffffff`),star:color(`#ffffff`),sun:color(`#fcd900`),earth:color(`#4d96ff`),mountain:color(`#9ede73`),cloud:color(`#ffffff`),tree:{trunk:color(`#be8c63`),crown:color(`#9ede73`)},house:{roof:color(`#b20600`),base:color(`#f1eee9`)},land:{brown:color(`#ffcc8f`),green:color(`#83bd75`)},building:{floor:color(`#f1eee9`),split:color(`#73777b`)},hut:{roof:color(`#a64b2a`),pillar:color(`#d7a86e`)}},ThreeScene=class{constructor(){this.scene=new Scene,this.setupLights()}setupLights(){let e=new AmbientLight(ro.ambientLight,3),t=new Group$1;t.name=`lights`,t.add(e),this.scene.add(t)}getScene(){return this.scene}},ThreeSelector=class{constructor(e,t){this.controls=t,this.rayCasterPoint=new B(0,0),this.objectsToIgnore=new Set,this.intersectableMouseMoveObjects=new Set,this.intersectableClickObjects=new Set,this.mouseOverListenersMap=new Map,this.mouseOutListenersMap=new Map,this.clickableListenersMap=new Map,this.rayCaster=new Raycaster,this.rendererElement=e.getRenderer().domElement,this.setupMouseMoveListeners(),this.setupMouseClickListener()}update(){this.onAnimationFrame?.()}setupMouseMoveListeners(){let e,t=new Set,updatePointerPosition=t=>{e=t},mouseMoveEventHandler=n=>{if(!e||!this.hasMouseMoveListeners())return;let i=this.getIntersectedObject(n,this.intersectableMouseMoveObjects);for(let e of t)i!==e&&(t.delete(e),this.mouseOutListenersMap.get(e)?.());i&&!t.has(i)&&(t.add(i),this.mouseOverListenersMap.get(i)?.()),e=n};this.onAnimationFrame=()=>mouseMoveEventHandler(e),this.rendererElement.addEventListener(`mousemove`,updatePointerPosition),this.rendererElement.addEventListener(`touchmove`,e=>{updatePointerPosition(e.changedTouches[0])})}setupMouseClickListener(){let e=0,t=0,mouseDownEventHandler=n=>{e=n.clientX,t=n.clientY},mouseUpEventHandler=n=>{let i=Math.abs(n.clientX-e),a=Math.abs(n.clientY-t);if(i!==0&&a!==0||!this.hasClickListeners())return;let o=this.getIntersectedObject(n,this.intersectableClickObjects);o&&this.clickableListenersMap.get(o)?.()};this.rendererElement.addEventListener(`mousedown`,mouseDownEventHandler),this.rendererElement.addEventListener(`mouseup`,mouseUpEventHandler),this.rendererElement.addEventListener(`touchstart`,e=>{mouseDownEventHandler(e.changedTouches[0])}),this.rendererElement.addEventListener(`touchend`,e=>{mouseUpEventHandler(e.changedTouches[0])})}getIntersectedObject(e,t){this.rayCasterPoint.setX(e.clientX/this.rendererElement.clientWidth*2-1),this.rayCasterPoint.setY(-(e.clientY/this.rendererElement.clientHeight)*2+1),this.rayCaster.setFromCamera(this.rayCasterPoint,this.controls.getCamera());let n=this.rayCaster.intersectObjects([...t]);if(n.length!==0)return this.findIntersectedObject(n[0].object,t)}onMouseOver(e,t){this.mouseOverListenersMap.set(e,t),this.intersectableMouseMoveObjects.add(e)}onMouseOut(e,t){this.mouseOutListenersMap.set(e,t),this.intersectableMouseMoveObjects.add(e)}onClick(e,t){this.clickableListenersMap.set(e,t),this.intersectableClickObjects.add(e)}intersectButIgnoreObject(e){this.objectsToIgnore.add(e),this.intersectableClickObjects.add(e),this.intersectableMouseMoveObjects.add(e)}findIntersectedObject(e,t){if(!this.objectsToIgnore.has(e)){if(t.has(e))return e;if(e.parent)return this.findIntersectedObject(e.parent,t)}}hasMouseMoveListeners(){return this.mouseOverListenersMap.size>0||this.mouseOutListenersMap.size>0}hasClickListeners(){return this.clickableListenersMap.size>0}},Three=class{constructor(e){this.threeScene=new ThreeScene,this.threeRenderer=new ThreeRenderer(e.canvasElement),this.threeControls=new ThreeControls(this.threeRenderer),this.threeSelector=new ThreeSelector(this.threeRenderer,this.threeControls),this.threeEventHandler=new ThreeEventHandler,this.threeAnimator=new ThreeAnimator,this.animate()}animate(){let e=this.threeScene.getScene(),t=this.threeControls.getCamera(),n=this.threeRenderer.getRenderer(),i=new Timer;n.setAnimationLoop(()=>{let a=i.getDelta();this.threeControls.update(a),this.threeSelector.update(),this.threeEventHandler.update(),this.threeAnimator.update(),n.render(e,t)})}getScene(){return this.threeScene.getScene()}getControls(){return this.threeControls}getSelector(){return this.threeSelector}getRenderer(){return this.threeRenderer}getEventHandler(){return this.threeEventHandler}getAnimator(){return this.threeAnimator}},getPositionFromLatLng=(e,t,n)=>{let i=Et.degToRad(-t+90),a=Et.degToRad(n),o=new V;return o.setFromSphericalCoords(e,i,a),o},getLatLngFromPosition=(e,t)=>{let{x:n,y:i,z:a}=e;return{lat:-Et.radToDeg(Math.acos(i/t))+90,lng:Et.radToDeg(Math.atan(n/a))}},BaseObject=class{constructor(...[e]){this.properties=e,this.object=this.constructObject(),this.properties?.name&&(this.object.name=this.properties.name),this.properties?.scale&&this.object.scale.setScalar(this.properties.scale)}getObject(){return this.object}addTo(e){e.add(this.object)}applyLatLng(e,t,n){let i=getPositionFromLatLng(e,t,n);this.object.position.copy(i),this.object.lookAt(0,0,0),this.object.rotateX(Et.degToRad(-90))}getPosition(){let e=new V(0,0,0),t=this.object.position.distanceTo(e),{lat:n,lng:i}=getLatLngFromPosition(this.object.position,t);return{coordinates:this.object.position,lat:n,lng:i,altitude:t}}},Globe=class extends BaseObject{constructObject(){let{size:e,color:t=ro.earth}=this.properties,n=new Mesh(new yi(e,e/2,e/3),new MeshLambertMaterial({color:t}));return n.name=`globe`,n}getRadius(){return this.properties.size}},Sun=class extends BaseObject{constructObject(){let e=new Group$1,t=new Group$1,n=this.properties.radius??120;return t.add(this.constructLight()),t.position.setScalar(n),e.add(t),e.name=`sun`,e}constructLight(){return new DirectionalLight(ro.sun,2.5)}setPosition(e){this.object.position.copy(e)}},generateRandomInRange=(e,t)=>Math.floor(Math.random()*(t-e+1)+e),Cloud=class extends BaseObject{constructObject(){let{size:e=10}=this.properties??{},t=new Group$1,n=e*.75,i=e*.25,a=this.createCloudSphere(e),o=this.createCloudSphere(n),s=this.createCloudSphere(n);return o.position.set(-n,-i,0),s.position.set(n,-i,0),t.add(a,o,s),t.name=`cloud`,t}createCloudSphere(e){let t=Math.max(8,e);return new Mesh(new yi(e,t,t),new MeshLambertMaterial({color:ro.cloud}))}},Clouds=class extends BaseObject{constructObject(){let{cloudsCount:e}=this.properties,t=new Group$1;for(let n=0;n<e;n++)t.add(this.generateRandomCloud().getObject());return t.name=`clouds`,t}animateClouds(e){let t=this.object,n=generateRandomInRange(0,100)*.001,i=generateRandomInRange(0,100)*.001,a=generateRandomInRange(0,100)*.001,animateClouds=t=>{let{x:o,y:s,z:c}=t.rotation,l={x:o+n,y:s+i,z:c+a},u=e.createTween(t.rotation,l,{duration:1e3});u.start(),u.onComplete(()=>{e.removeTween(u),animateClouds(t)})};animateClouds(t)}generateRandomCloud(){let{baseCloudSize:e,orbitRadius:t}=this.properties,n=generateRandomInRange(e-5,e+5),i=generateRandomInRange(t,t+20),a=generateRandomInRange(-90,90),o=generateRandomInRange(-180,180),s=new Cloud({size:n});return s.applyLatLng(i,a,o),s}},Building=class extends BaseObject{constructObject(){let e=new Group$1,{floors:t=3,size:n=10}=this.properties??{};for(let i=0;i<t;i++){let t=this.constructFloor(i,n),a=this.constructSplit(i,n);e.add(t,a)}return e.name=`building`,e}constructFloor(e,t){let n=new si(t,t,t),i=new Mesh(n,new MeshLambertMaterial({color:this.properties?.floorColor??ro.building.floor})),a=t/2,o=this.getSplitHeight(t);return n.translate(0,a+e*(t+o),0),i}constructSplit(e,t){let n=this.getSplitHeight(t),i=new si(t*.8,n,t*.8),a=new Mesh(i,new MeshLambertMaterial({color:this.properties?.splitColor??ro.building.split})),o=n/2;return i.translate(0,(e+1)*(t+n)-o,0),a}getSplitHeight(e){return e*.1}},House=class extends BaseObject{constructObject(){let e=new Group$1,t=this.constructRoof(this.properties?.size),n=this.constructBase(this.properties?.size);return e.add(t,n),e.name=`house`,e}constructBase(e=10){let t=new si(e*.7,e/2,e),n=new Mesh(t,new MeshLambertMaterial({color:ro.house.base}));return t.translate(0,e/2/2,0),n}constructRoof(e=10){let[t,n]=[e,e/3],i=e/2,a=this.constructRoofGeometry(t,n),o=new Mesh(a,new MeshLambertMaterial({color:ro.house.roof,side:2}));return a.translate(0,i+n/2,0),o}constructRoofGeometry(e,t){let n=new gi(new Shape([[0,0],[e/2,t],[e,0]].map(e=>new B(...e))),{depth:e});return n.translate(-e/2,-t/2,-e/2),n}},Hut=class extends BaseObject{constructObject(){let e=new Group$1,t=this.constructRoof(this.properties?.size),n=this.constructPillars(this.properties?.size);return e.add(t,n),e.name=`hut`,e}constructRoof(e=5){let t=e/1.25,n=new li(e*1.2,t,6),i=new Mesh(n,new MeshLambertMaterial({color:ro.hut.roof})),a=e/1.1;return n.translate(0,a+t/2,0),i}constructPillars(e=5){let t=[{x:2.5,z:2.5},{x:-2.5,z:2.5},{x:2.5,z:-2.5},{x:-2.5,z:-2.5}],n=new Group$1;n.name=`pillars`;for(let i of t)n.add(this.constructPillar(i,e));return n}constructPillar(e,t){let[n,i,a]=[t/5,t/1.1,t/5],o=new si(n,i,a),s=new Mesh(o,new MeshLambertMaterial({color:ro.hut.pillar}));return o.translate(e.x,i/2,e.z),s}},Land=class extends BaseObject{constructObject(){let{size:e=10,height:t=1,sides:n=6,color:i=ro.land.green}=this.properties??{},a=new Mesh(new ci(e,e,t,n,1),new MeshLambertMaterial({color:i}));return a.name=`land`,a}},Mountain=class extends BaseObject{constructObject(){let{size:e,color:t=ro.mountain,height:n=e}=this.properties,i=new li(e,n,4),a=new Mesh(i,new MeshLambertMaterial({color:t}));return a.name=`mountain`,i.translate(0,n/2,0),a}},Tree=class extends BaseObject{constructObject(){let e=new Group$1,t=this.constructTrunk(),n=this.constructCrown();return e.add(t,n),e.name=`tree`,e}constructTrunk(e=3){let t=new si(1,e,1),n=new Mesh(t,new MeshLambertMaterial({color:ro.tree.trunk}));return t.translate(0,e/2,0),n}constructCrown(e=3){let t=new li(3,7,3),n=new Mesh(t,new MeshLambertMaterial({color:ro.tree.crown}));return t.translate(0,e+7/2,0),n}},Y=function(e){return e[e.LevelOne=2.25]=`LevelOne`,e[e.LevelTwo=4.5]=`LevelTwo`,e}({});function ___$insertStyle(e){if(e&&!(typeof window>`u`)){var t=document.createElement(`style`);return t.setAttribute(`type`,`text/css`),t.innerHTML=e,document.head.appendChild(t),e}}function colorToString(e,t){var n=e.__state.conversionName.toString(),i=Math.round(e.r),a=Math.round(e.g),o=Math.round(e.b),s=e.a,c=Math.round(e.h),l=e.s.toFixed(1),u=e.v.toFixed(1);if(t||n===`THREE_CHAR_HEX`||n===`SIX_CHAR_HEX`){for(var d=e.hex.toString(16);d.length<6;)d=`0`+d;return`#`+d}else if(n===`CSS_RGB`)return`rgb(`+i+`,`+a+`,`+o+`)`;else if(n===`CSS_RGBA`)return`rgba(`+i+`,`+a+`,`+o+`,`+s+`)`;else if(n===`HEX`)return`0x`+e.hex.toString(16);else if(n===`RGB_ARRAY`)return`[`+i+`,`+a+`,`+o+`]`;else if(n===`RGBA_ARRAY`)return`[`+i+`,`+a+`,`+o+`,`+s+`]`;else if(n===`RGB_OBJ`)return`{r:`+i+`,g:`+a+`,b:`+o+`}`;else if(n===`RGBA_OBJ`)return`{r:`+i+`,g:`+a+`,b:`+o+`,a:`+s+`}`;else if(n===`HSV_OBJ`)return`{h:`+c+`,s:`+l+`,v:`+u+`}`;else if(n===`HSVA_OBJ`)return`{h:`+c+`,s:`+l+`,v:`+u+`,a:`+s+`}`;return`unknown format`}var io=Array.prototype.forEach,ao=Array.prototype.slice,X={BREAK:{},extend:function extend(e){return this.each(ao.call(arguments,1),function(t){(this.isObject(t)?Object.keys(t):[]).forEach(function(n){this.isUndefined(t[n])||(e[n]=t[n])}.bind(this))},this),e},defaults:function defaults(e){return this.each(ao.call(arguments,1),function(t){(this.isObject(t)?Object.keys(t):[]).forEach(function(n){this.isUndefined(e[n])&&(e[n]=t[n])}.bind(this))},this),e},compose:function compose(){var e=ao.call(arguments);return function(){for(var t=ao.call(arguments),n=e.length-1;n>=0;n--)t=[e[n].apply(this,t)];return t[0]}},each:function each(e,t,n){if(e){if(io&&e.forEach&&e.forEach===io)e.forEach(t,n);else if(e.length===e.length+0){var i=void 0,a=void 0;for(i=0,a=e.length;i<a;i++)if(i in e&&t.call(n,e[i],i)===this.BREAK)return}else for(var o in e)if(t.call(n,e[o],o)===this.BREAK)return}},defer:function defer(e){setTimeout(e,0)},debounce:function debounce(e,t,n){var i=void 0;return function(){var a=this,o=arguments;function delayed(){i=null,n||e.apply(a,o)}var s=n||!i;clearTimeout(i),i=setTimeout(delayed,t),s&&e.apply(a,o)}},toArray:function toArray(e){return e.toArray?e.toArray():ao.call(e)},isUndefined:function isUndefined(e){return e===void 0},isNull:function isNull(e){return e===null},isNaN:function(e){function isNaN(t){return e.apply(this,arguments)}return isNaN.toString=function(){return e.toString()},isNaN}(function(e){return isNaN(e)}),isArray:Array.isArray||function(e){return e.constructor===Array},isObject:function isObject(e){return e===Object(e)},isNumber:function isNumber(e){return e===e+0},isString:function isString(e){return e===e+``},isBoolean:function isBoolean(e){return e===!1||e===!0},isFunction:function isFunction(e){return e instanceof Function}},oo=[{litmus:X.isString,conversions:{THREE_CHAR_HEX:{read:function read(e){var t=e.match(/^#([A-F0-9])([A-F0-9])([A-F0-9])$/i);return t===null?!1:{space:`HEX`,hex:parseInt(`0x`+t[1].toString()+t[1].toString()+t[2].toString()+t[2].toString()+t[3].toString()+t[3].toString(),0)}},write:colorToString},SIX_CHAR_HEX:{read:function read(e){var t=e.match(/^#([A-F0-9]{6})$/i);return t===null?!1:{space:`HEX`,hex:parseInt(`0x`+t[1].toString(),0)}},write:colorToString},CSS_RGB:{read:function read(e){var t=e.match(/^rgb\(\s*(\S+)\s*,\s*(\S+)\s*,\s*(\S+)\s*\)/);return t===null?!1:{space:`RGB`,r:parseFloat(t[1]),g:parseFloat(t[2]),b:parseFloat(t[3])}},write:colorToString},CSS_RGBA:{read:function read(e){var t=e.match(/^rgba\(\s*(\S+)\s*,\s*(\S+)\s*,\s*(\S+)\s*,\s*(\S+)\s*\)/);return t===null?!1:{space:`RGB`,r:parseFloat(t[1]),g:parseFloat(t[2]),b:parseFloat(t[3]),a:parseFloat(t[4])}},write:colorToString}}},{litmus:X.isNumber,conversions:{HEX:{read:function read(e){return{space:`HEX`,hex:e,conversionName:`HEX`}},write:function write(e){return e.hex}}}},{litmus:X.isArray,conversions:{RGB_ARRAY:{read:function read(e){return e.length===3?{space:`RGB`,r:e[0],g:e[1],b:e[2]}:!1},write:function write(e){return[e.r,e.g,e.b]}},RGBA_ARRAY:{read:function read(e){return e.length===4?{space:`RGB`,r:e[0],g:e[1],b:e[2],a:e[3]}:!1},write:function write(e){return[e.r,e.g,e.b,e.a]}}}},{litmus:X.isObject,conversions:{RGBA_OBJ:{read:function read(e){return X.isNumber(e.r)&&X.isNumber(e.g)&&X.isNumber(e.b)&&X.isNumber(e.a)?{space:`RGB`,r:e.r,g:e.g,b:e.b,a:e.a}:!1},write:function write(e){return{r:e.r,g:e.g,b:e.b,a:e.a}}},RGB_OBJ:{read:function read(e){return X.isNumber(e.r)&&X.isNumber(e.g)&&X.isNumber(e.b)?{space:`RGB`,r:e.r,g:e.g,b:e.b}:!1},write:function write(e){return{r:e.r,g:e.g,b:e.b}}},HSVA_OBJ:{read:function read(e){return X.isNumber(e.h)&&X.isNumber(e.s)&&X.isNumber(e.v)&&X.isNumber(e.a)?{space:`HSV`,h:e.h,s:e.s,v:e.v,a:e.a}:!1},write:function write(e){return{h:e.h,s:e.s,v:e.v,a:e.a}}},HSV_OBJ:{read:function read(e){return X.isNumber(e.h)&&X.isNumber(e.s)&&X.isNumber(e.v)?{space:`HSV`,h:e.h,s:e.s,v:e.v}:!1},write:function write(e){return{h:e.h,s:e.s,v:e.v}}}}}],so=void 0,co=void 0,lo=function interpret(){co=!1;var e=arguments.length>1?X.toArray(arguments):arguments[0];return X.each(oo,function(t){if(t.litmus(e))return X.each(t.conversions,function(t,n){if(so=t.read(e),co===!1&&so!==!1)return co=so,so.conversionName=n,so.conversion=t,X.BREAK}),X.BREAK}),co},uo=void 0,fo={hsv_to_rgb:function hsv_to_rgb(e,t,n){var i=Math.floor(e/60)%6,a=e/60-Math.floor(e/60),o=n*(1-t),s=n*(1-a*t),c=n*(1-(1-a)*t),l=[[n,c,o],[s,n,o],[o,n,c],[o,s,n],[c,o,n],[n,o,s]][i];return{r:l[0]*255,g:l[1]*255,b:l[2]*255}},rgb_to_hsv:function rgb_to_hsv(e,t,n){var i=Math.min(e,t,n),a=Math.max(e,t,n),o=a-i,s=void 0,c=void 0;if(a!==0)c=o/a;else return{h:NaN,s:0,v:0};return s=e===a?(t-n)/o:t===a?2+(n-e)/o:4+(e-t)/o,s/=6,s<0&&(s+=1),{h:s*360,s:c,v:a/255}},rgb_to_hex:function rgb_to_hex(e,t,n){var i=this.hex_with_component(0,2,e);return i=this.hex_with_component(i,1,t),i=this.hex_with_component(i,0,n),i},component_from_hex:function component_from_hex(e,t){return e>>t*8&255},hex_with_component:function hex_with_component(e,t,n){return n<<(uo=t*8)|e&~(255<<uo)}},po=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},classCallCheck=function(e,t){if(!(e instanceof t))throw TypeError(`Cannot call a class as a function`)},mo=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,`value`in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),ho=function get(e,t,n){e===null&&(e=Function.prototype);var i=Object.getOwnPropertyDescriptor(e,t);if(i===void 0){var a=Object.getPrototypeOf(e);return a===null?void 0:get(a,t,n)}else if(`value`in i)return i.value;else{var o=i.get;return o===void 0?void 0:o.call(n)}},inherits=function(e,t){if(typeof t!=`function`&&t!==null)throw TypeError(`Super expression must either be null or a function, not `+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)},possibleConstructorReturn=function(e,t){if(!e)throw ReferenceError(`this hasn't been initialised - super() hasn't been called`);return t&&(typeof t==`object`||typeof t==`function`)?t:e},go=function(){function Color(){if(classCallCheck(this,Color),this.__state=lo.apply(this,arguments),this.__state===!1)throw Error(`Failed to interpret color arguments`);this.__state.a=this.__state.a||1}return mo(Color,[{key:`toString`,value:function toString(){return colorToString(this)}},{key:`toHexString`,value:function toHexString(){return colorToString(this,!0)}},{key:`toOriginal`,value:function toOriginal(){return this.__state.conversion.write(this)}}]),Color}();function defineRGBComponent(e,t,n){Object.defineProperty(e,t,{get:function get$$1(){return this.__state.space===`RGB`||go.recalculateRGB(this,t,n),this.__state[t]},set:function set$$1(e){this.__state.space!==`RGB`&&(go.recalculateRGB(this,t,n),this.__state.space=`RGB`),this.__state[t]=e}})}function defineHSVComponent(e,t){Object.defineProperty(e,t,{get:function get$$1(){return this.__state.space===`HSV`||go.recalculateHSV(this),this.__state[t]},set:function set$$1(e){this.__state.space!==`HSV`&&(go.recalculateHSV(this),this.__state.space=`HSV`),this.__state[t]=e}})}go.recalculateRGB=function(e,t,n){if(e.__state.space===`HEX`)e.__state[t]=fo.component_from_hex(e.__state.hex,n);else if(e.__state.space===`HSV`)X.extend(e.__state,fo.hsv_to_rgb(e.__state.h,e.__state.s,e.__state.v));else throw Error(`Corrupted color state`)},go.recalculateHSV=function(e){var t=fo.rgb_to_hsv(e.r,e.g,e.b);X.extend(e.__state,{s:t.s,v:t.v}),X.isNaN(t.h)?X.isUndefined(e.__state.h)&&(e.__state.h=0):e.__state.h=t.h},go.COMPONENTS=[`r`,`g`,`b`,`h`,`s`,`v`,`hex`,`a`],defineRGBComponent(go.prototype,`r`,2),defineRGBComponent(go.prototype,`g`,1),defineRGBComponent(go.prototype,`b`,0),defineHSVComponent(go.prototype,`h`),defineHSVComponent(go.prototype,`s`),defineHSVComponent(go.prototype,`v`),Object.defineProperty(go.prototype,`a`,{get:function get$$1(){return this.__state.a},set:function set$$1(e){this.__state.a=e}}),Object.defineProperty(go.prototype,`hex`,{get:function get$$1(){return this.__state.space!==`HEX`&&(this.__state.hex=fo.rgb_to_hex(this.r,this.g,this.b),this.__state.space=`HEX`),this.__state.hex},set:function set$$1(e){this.__state.space=`HEX`,this.__state.hex=e}});var _o=function(){function Controller(e,t){classCallCheck(this,Controller),this.initialValue=e[t],this.domElement=document.createElement(`div`),this.object=e,this.property=t,this.__onChange=void 0,this.__onFinishChange=void 0}return mo(Controller,[{key:`onChange`,value:function onChange(e){return this.__onChange=e,this}},{key:`onFinishChange`,value:function onFinishChange(e){return this.__onFinishChange=e,this}},{key:`setValue`,value:function setValue(e){return this.object[this.property]=e,this.__onChange&&this.__onChange.call(this,e),this.updateDisplay(),this}},{key:`getValue`,value:function getValue(){return this.object[this.property]}},{key:`updateDisplay`,value:function updateDisplay(){return this}},{key:`isModified`,value:function isModified(){return this.initialValue!==this.getValue()}}]),Controller}(),vo={HTMLEvents:[`change`],MouseEvents:[`click`,`mousemove`,`mousedown`,`mouseup`,`mouseover`],KeyboardEvents:[`keydown`]},yo={};X.each(vo,function(e,t){X.each(e,function(e){yo[e]=t})});var bo=/(\d+(\.\d+)?)px/;function cssValueToPixels(e){if(e===`0`||X.isUndefined(e))return 0;var t=e.match(bo);return X.isNull(t)?0:parseFloat(t[1])}var Z={makeSelectable:function makeSelectable(e,t){e===void 0||e.style===void 0||(e.onselectstart=t?function(){return!1}:function(){},e.style.MozUserSelect=t?`auto`:`none`,e.style.KhtmlUserSelect=t?`auto`:`none`,e.unselectable=t?`on`:`off`)},makeFullscreen:function makeFullscreen(e,t,n){var i=n,a=t;X.isUndefined(a)&&(a=!0),X.isUndefined(i)&&(i=!0),e.style.position=`absolute`,a&&(e.style.left=0,e.style.right=0),i&&(e.style.top=0,e.style.bottom=0)},fakeEvent:function fakeEvent(e,t,n,i){var a=n||{},o=yo[t];if(!o)throw Error(`Event type `+t+` not supported.`);var s=document.createEvent(o);switch(o){case`MouseEvents`:var c=a.x||a.clientX||0,l=a.y||a.clientY||0;s.initMouseEvent(t,a.bubbles||!1,a.cancelable||!0,window,a.clickCount||1,0,0,c,l,!1,!1,!1,!1,0,null);break;case`KeyboardEvents`:var u=s.initKeyboardEvent||s.initKeyEvent;X.defaults(a,{cancelable:!0,ctrlKey:!1,altKey:!1,shiftKey:!1,metaKey:!1,keyCode:void 0,charCode:void 0}),u(t,a.bubbles||!1,a.cancelable,window,a.ctrlKey,a.altKey,a.shiftKey,a.metaKey,a.keyCode,a.charCode);break;default:s.initEvent(t,a.bubbles||!1,a.cancelable||!0);break}X.defaults(s,i),e.dispatchEvent(s)},bind:function bind(e,t,n,i){var a=i||!1;return e.addEventListener?e.addEventListener(t,n,a):e.attachEvent&&e.attachEvent(`on`+t,n),Z},unbind:function unbind(e,t,n,i){var a=i||!1;return e.removeEventListener?e.removeEventListener(t,n,a):e.detachEvent&&e.detachEvent(`on`+t,n),Z},addClass:function addClass(e,t){if(e.className===void 0)e.className=t;else if(e.className!==t){var n=e.className.split(/ +/);n.indexOf(t)===-1&&(n.push(t),e.className=n.join(` `).replace(/^\s+/,``).replace(/\s+$/,``))}return Z},removeClass:function removeClass(e,t){if(t)if(e.className===t)e.removeAttribute(`class`);else{var n=e.className.split(/ +/),i=n.indexOf(t);i!==-1&&(n.splice(i,1),e.className=n.join(` `))}else e.className=void 0;return Z},hasClass:function hasClass(e,t){return RegExp(`(?:^|\\s+)`+t+`(?:\\s+|$)`).test(e.className)||!1},getWidth:function getWidth(e){var t=getComputedStyle(e);return cssValueToPixels(t[`border-left-width`])+cssValueToPixels(t[`border-right-width`])+cssValueToPixels(t[`padding-left`])+cssValueToPixels(t[`padding-right`])+cssValueToPixels(t.width)},getHeight:function getHeight(e){var t=getComputedStyle(e);return cssValueToPixels(t[`border-top-width`])+cssValueToPixels(t[`border-bottom-width`])+cssValueToPixels(t[`padding-top`])+cssValueToPixels(t[`padding-bottom`])+cssValueToPixels(t.height)},getOffset:function getOffset(e){var t=e,n={left:0,top:0};if(t.offsetParent)do n.left+=t.offsetLeft,n.top+=t.offsetTop,t=t.offsetParent;while(t);return n},isActive:function isActive(e){return e===document.activeElement&&(e.type||e.href)}},xo=function(e){inherits(BooleanController,e);function BooleanController(e,t){classCallCheck(this,BooleanController);var n=possibleConstructorReturn(this,(BooleanController.__proto__||Object.getPrototypeOf(BooleanController)).call(this,e,t)),i=n;n.__prev=n.getValue(),n.__checkbox=document.createElement(`input`),n.__checkbox.setAttribute(`type`,`checkbox`);function onChange(){i.setValue(!i.__prev)}return Z.bind(n.__checkbox,`change`,onChange,!1),n.domElement.appendChild(n.__checkbox),n.updateDisplay(),n}return mo(BooleanController,[{key:`setValue`,value:function setValue(e){var t=ho(BooleanController.prototype.__proto__||Object.getPrototypeOf(BooleanController.prototype),`setValue`,this).call(this,e);return this.__onFinishChange&&this.__onFinishChange.call(this,this.getValue()),this.__prev=this.getValue(),t}},{key:`updateDisplay`,value:function updateDisplay(){return this.getValue()===!0?(this.__checkbox.setAttribute(`checked`,`checked`),this.__checkbox.checked=!0,this.__prev=!0):(this.__checkbox.checked=!1,this.__prev=!1),ho(BooleanController.prototype.__proto__||Object.getPrototypeOf(BooleanController.prototype),`updateDisplay`,this).call(this)}}]),BooleanController}(_o),So=function(e){inherits(OptionController,e);function OptionController(e,t,n){classCallCheck(this,OptionController);var i=possibleConstructorReturn(this,(OptionController.__proto__||Object.getPrototypeOf(OptionController)).call(this,e,t)),a=n,o=i;if(i.__select=document.createElement(`select`),X.isArray(a)){var s={};X.each(a,function(e){s[e]=e}),a=s}return X.each(a,function(e,t){var n=document.createElement(`option`);n.innerHTML=t,n.setAttribute(`value`,e),o.__select.appendChild(n)}),i.updateDisplay(),Z.bind(i.__select,`change`,function(){var e=this.options[this.selectedIndex].value;o.setValue(e)}),i.domElement.appendChild(i.__select),i}return mo(OptionController,[{key:`setValue`,value:function setValue(e){var t=ho(OptionController.prototype.__proto__||Object.getPrototypeOf(OptionController.prototype),`setValue`,this).call(this,e);return this.__onFinishChange&&this.__onFinishChange.call(this,this.getValue()),t}},{key:`updateDisplay`,value:function updateDisplay(){return Z.isActive(this.__select)?this:(this.__select.value=this.getValue(),ho(OptionController.prototype.__proto__||Object.getPrototypeOf(OptionController.prototype),`updateDisplay`,this).call(this))}}]),OptionController}(_o),Co=function(e){inherits(StringController,e);function StringController(e,t){classCallCheck(this,StringController);var n=possibleConstructorReturn(this,(StringController.__proto__||Object.getPrototypeOf(StringController)).call(this,e,t)),i=n;function onChange(){i.setValue(i.__input.value)}function onBlur(){i.__onFinishChange&&i.__onFinishChange.call(i,i.getValue())}return n.__input=document.createElement(`input`),n.__input.setAttribute(`type`,`text`),Z.bind(n.__input,`keyup`,onChange),Z.bind(n.__input,`change`,onChange),Z.bind(n.__input,`blur`,onBlur),Z.bind(n.__input,`keydown`,function(e){e.keyCode===13&&this.blur()}),n.updateDisplay(),n.domElement.appendChild(n.__input),n}return mo(StringController,[{key:`updateDisplay`,value:function updateDisplay(){return Z.isActive(this.__input)||(this.__input.value=this.getValue()),ho(StringController.prototype.__proto__||Object.getPrototypeOf(StringController.prototype),`updateDisplay`,this).call(this)}}]),StringController}(_o);function numDecimals(e){var t=e.toString();return t.indexOf(`.`)>-1?t.length-t.indexOf(`.`)-1:0}var wo=function(e){inherits(NumberController,e);function NumberController(e,t,n){classCallCheck(this,NumberController);var i=possibleConstructorReturn(this,(NumberController.__proto__||Object.getPrototypeOf(NumberController)).call(this,e,t)),a=n||{};return i.__min=a.min,i.__max=a.max,i.__step=a.step,X.isUndefined(i.__step)?i.initialValue===0?i.__impliedStep=1:i.__impliedStep=10**Math.floor(Math.log(Math.abs(i.initialValue))/Math.LN10)/10:i.__impliedStep=i.__step,i.__precision=numDecimals(i.__impliedStep),i}return mo(NumberController,[{key:`setValue`,value:function setValue(e){var t=e;return this.__min!==void 0&&t<this.__min?t=this.__min:this.__max!==void 0&&t>this.__max&&(t=this.__max),this.__step!==void 0&&t%this.__step!==0&&(t=Math.round(t/this.__step)*this.__step),ho(NumberController.prototype.__proto__||Object.getPrototypeOf(NumberController.prototype),`setValue`,this).call(this,t)}},{key:`min`,value:function min(e){return this.__min=e,this}},{key:`max`,value:function max(e){return this.__max=e,this}},{key:`step`,value:function step(e){return this.__step=e,this.__impliedStep=e,this.__precision=numDecimals(e),this}}]),NumberController}(_o);function roundToDecimal(e,t){var n=10**t;return Math.round(e*n)/n}var To=function(e){inherits(NumberControllerBox,e);function NumberControllerBox(e,t,n){classCallCheck(this,NumberControllerBox);var i=possibleConstructorReturn(this,(NumberControllerBox.__proto__||Object.getPrototypeOf(NumberControllerBox)).call(this,e,t,n));i.__truncationSuspended=!1;var a=i,o=void 0;function onChange(){var e=parseFloat(a.__input.value);X.isNaN(e)||a.setValue(e)}function onFinish(){a.__onFinishChange&&a.__onFinishChange.call(a,a.getValue())}function onBlur(){onFinish()}function onMouseDrag(e){var t=o-e.clientY;a.setValue(a.getValue()+t*a.__impliedStep),o=e.clientY}function onMouseUp(){Z.unbind(window,`mousemove`,onMouseDrag),Z.unbind(window,`mouseup`,onMouseUp),onFinish()}function onMouseDown(e){Z.bind(window,`mousemove`,onMouseDrag),Z.bind(window,`mouseup`,onMouseUp),o=e.clientY}return i.__input=document.createElement(`input`),i.__input.setAttribute(`type`,`text`),Z.bind(i.__input,`change`,onChange),Z.bind(i.__input,`blur`,onBlur),Z.bind(i.__input,`mousedown`,onMouseDown),Z.bind(i.__input,`keydown`,function(e){e.keyCode===13&&(a.__truncationSuspended=!0,this.blur(),a.__truncationSuspended=!1,onFinish())}),i.updateDisplay(),i.domElement.appendChild(i.__input),i}return mo(NumberControllerBox,[{key:`updateDisplay`,value:function updateDisplay(){return this.__input.value=this.__truncationSuspended?this.getValue():roundToDecimal(this.getValue(),this.__precision),ho(NumberControllerBox.prototype.__proto__||Object.getPrototypeOf(NumberControllerBox.prototype),`updateDisplay`,this).call(this)}}]),NumberControllerBox}(wo);function map(e,t,n,i,a){return i+(a-i)*((e-t)/(n-t))}var Eo=function(e){inherits(NumberControllerSlider,e);function NumberControllerSlider(e,t,n,i,a){classCallCheck(this,NumberControllerSlider);var o=possibleConstructorReturn(this,(NumberControllerSlider.__proto__||Object.getPrototypeOf(NumberControllerSlider)).call(this,e,t,{min:n,max:i,step:a})),s=o;o.__background=document.createElement(`div`),o.__foreground=document.createElement(`div`),Z.bind(o.__background,`mousedown`,onMouseDown),Z.bind(o.__background,`touchstart`,onTouchStart),Z.addClass(o.__background,`slider`),Z.addClass(o.__foreground,`slider-fg`);function onMouseDown(e){document.activeElement.blur(),Z.bind(window,`mousemove`,onMouseDrag),Z.bind(window,`mouseup`,onMouseUp),onMouseDrag(e)}function onMouseDrag(e){e.preventDefault();var t=s.__background.getBoundingClientRect();return s.setValue(map(e.clientX,t.left,t.right,s.__min,s.__max)),!1}function onMouseUp(){Z.unbind(window,`mousemove`,onMouseDrag),Z.unbind(window,`mouseup`,onMouseUp),s.__onFinishChange&&s.__onFinishChange.call(s,s.getValue())}function onTouchStart(e){e.touches.length===1&&(Z.bind(window,`touchmove`,onTouchMove),Z.bind(window,`touchend`,onTouchEnd),onTouchMove(e))}function onTouchMove(e){var t=e.touches[0].clientX,n=s.__background.getBoundingClientRect();s.setValue(map(t,n.left,n.right,s.__min,s.__max))}function onTouchEnd(){Z.unbind(window,`touchmove`,onTouchMove),Z.unbind(window,`touchend`,onTouchEnd),s.__onFinishChange&&s.__onFinishChange.call(s,s.getValue())}return o.updateDisplay(),o.__background.appendChild(o.__foreground),o.domElement.appendChild(o.__background),o}return mo(NumberControllerSlider,[{key:`updateDisplay`,value:function updateDisplay(){var e=(this.getValue()-this.__min)/(this.__max-this.__min);return this.__foreground.style.width=e*100+`%`,ho(NumberControllerSlider.prototype.__proto__||Object.getPrototypeOf(NumberControllerSlider.prototype),`updateDisplay`,this).call(this)}}]),NumberControllerSlider}(wo),Do=function(e){inherits(FunctionController,e);function FunctionController(e,t,n){classCallCheck(this,FunctionController);var i=possibleConstructorReturn(this,(FunctionController.__proto__||Object.getPrototypeOf(FunctionController)).call(this,e,t)),a=i;return i.__button=document.createElement(`div`),i.__button.innerHTML=n===void 0?`Fire`:n,Z.bind(i.__button,`click`,function(e){return e.preventDefault(),a.fire(),!1}),Z.addClass(i.__button,`button`),i.domElement.appendChild(i.__button),i}return mo(FunctionController,[{key:`fire`,value:function fire(){this.__onChange&&this.__onChange.call(this),this.getValue().call(this.object),this.__onFinishChange&&this.__onFinishChange.call(this,this.getValue())}}]),FunctionController}(_o),Oo=function(e){inherits(ColorController,e);function ColorController(e,t){classCallCheck(this,ColorController);var n=possibleConstructorReturn(this,(ColorController.__proto__||Object.getPrototypeOf(ColorController)).call(this,e,t));n.__color=new go(n.getValue()),n.__temp=new go(0);var i=n;n.domElement=document.createElement(`div`),Z.makeSelectable(n.domElement,!1),n.__selector=document.createElement(`div`),n.__selector.className=`selector`,n.__saturation_field=document.createElement(`div`),n.__saturation_field.className=`saturation-field`,n.__field_knob=document.createElement(`div`),n.__field_knob.className=`field-knob`,n.__field_knob_border=`2px solid `,n.__hue_knob=document.createElement(`div`),n.__hue_knob.className=`hue-knob`,n.__hue_field=document.createElement(`div`),n.__hue_field.className=`hue-field`,n.__input=document.createElement(`input`),n.__input.type=`text`,n.__input_textShadow=`0 1px 1px `,Z.bind(n.__input,`keydown`,function(e){e.keyCode===13&&onBlur.call(this)}),Z.bind(n.__input,`blur`,onBlur),Z.bind(n.__selector,`mousedown`,function(){Z.addClass(this,`drag`).bind(window,`mouseup`,function(){Z.removeClass(i.__selector,`drag`)})}),Z.bind(n.__selector,`touchstart`,function(){Z.addClass(this,`drag`).bind(window,`touchend`,function(){Z.removeClass(i.__selector,`drag`)})});var a=document.createElement(`div`);X.extend(n.__selector.style,{width:`122px`,height:`102px`,padding:`3px`,backgroundColor:`#222`,boxShadow:`0px 1px 3px rgba(0,0,0,0.3)`}),X.extend(n.__field_knob.style,{position:`absolute`,width:`12px`,height:`12px`,border:n.__field_knob_border+(n.__color.v<.5?`#fff`:`#000`),boxShadow:`0px 1px 3px rgba(0,0,0,0.5)`,borderRadius:`12px`,zIndex:1}),X.extend(n.__hue_knob.style,{position:`absolute`,width:`15px`,height:`2px`,borderRight:`4px solid #fff`,zIndex:1}),X.extend(n.__saturation_field.style,{width:`100px`,height:`100px`,border:`1px solid #555`,marginRight:`3px`,display:`inline-block`,cursor:`pointer`}),X.extend(a.style,{width:`100%`,height:`100%`,background:`none`}),linearGradient(a,`top`,`rgba(0,0,0,0)`,`#000`),X.extend(n.__hue_field.style,{width:`15px`,height:`100px`,border:`1px solid #555`,cursor:`ns-resize`,position:`absolute`,top:`3px`,right:`3px`}),hueGradient(n.__hue_field),X.extend(n.__input.style,{outline:`none`,textAlign:`center`,color:`#fff`,border:0,fontWeight:`bold`,textShadow:n.__input_textShadow+`rgba(0,0,0,0.7)`}),Z.bind(n.__saturation_field,`mousedown`,fieldDown),Z.bind(n.__saturation_field,`touchstart`,fieldDown),Z.bind(n.__field_knob,`mousedown`,fieldDown),Z.bind(n.__field_knob,`touchstart`,fieldDown),Z.bind(n.__hue_field,`mousedown`,fieldDownH),Z.bind(n.__hue_field,`touchstart`,fieldDownH);function fieldDown(e){setSV(e),Z.bind(window,`mousemove`,setSV),Z.bind(window,`touchmove`,setSV),Z.bind(window,`mouseup`,fieldUpSV),Z.bind(window,`touchend`,fieldUpSV)}function fieldDownH(e){setH(e),Z.bind(window,`mousemove`,setH),Z.bind(window,`touchmove`,setH),Z.bind(window,`mouseup`,fieldUpH),Z.bind(window,`touchend`,fieldUpH)}function fieldUpSV(){Z.unbind(window,`mousemove`,setSV),Z.unbind(window,`touchmove`,setSV),Z.unbind(window,`mouseup`,fieldUpSV),Z.unbind(window,`touchend`,fieldUpSV),onFinish()}function fieldUpH(){Z.unbind(window,`mousemove`,setH),Z.unbind(window,`touchmove`,setH),Z.unbind(window,`mouseup`,fieldUpH),Z.unbind(window,`touchend`,fieldUpH),onFinish()}function onBlur(){var e=lo(this.value);e===!1?this.value=i.__color.toString():(i.__color.__state=e,i.setValue(i.__color.toOriginal()))}function onFinish(){i.__onFinishChange&&i.__onFinishChange.call(i,i.__color.toOriginal())}n.__saturation_field.appendChild(a),n.__selector.appendChild(n.__field_knob),n.__selector.appendChild(n.__saturation_field),n.__selector.appendChild(n.__hue_field),n.__hue_field.appendChild(n.__hue_knob),n.domElement.appendChild(n.__input),n.domElement.appendChild(n.__selector),n.updateDisplay();function setSV(e){e.type.indexOf(`touch`)===-1&&e.preventDefault();var t=i.__saturation_field.getBoundingClientRect(),n=e.touches&&e.touches[0]||e,a=n.clientX,o=n.clientY,s=(a-t.left)/(t.right-t.left),c=1-(o-t.top)/(t.bottom-t.top);return c>1?c=1:c<0&&(c=0),s>1?s=1:s<0&&(s=0),i.__color.v=c,i.__color.s=s,i.setValue(i.__color.toOriginal()),!1}function setH(e){e.type.indexOf(`touch`)===-1&&e.preventDefault();var t=i.__hue_field.getBoundingClientRect(),n=1-((e.touches&&e.touches[0]||e).clientY-t.top)/(t.bottom-t.top);return n>1?n=1:n<0&&(n=0),i.__color.h=n*360,i.setValue(i.__color.toOriginal()),!1}return n}return mo(ColorController,[{key:`updateDisplay`,value:function updateDisplay(){var e=lo(this.getValue());if(e!==!1){var t=!1;X.each(go.COMPONENTS,function(n){if(!X.isUndefined(e[n])&&!X.isUndefined(this.__color.__state[n])&&e[n]!==this.__color.__state[n])return t=!0,{}},this),t&&X.extend(this.__color.__state,e)}X.extend(this.__temp.__state,this.__color.__state),this.__temp.a=1;var n=this.__color.v<.5||this.__color.s>.5?255:0,i=255-n;X.extend(this.__field_knob.style,{marginLeft:100*this.__color.s-7+`px`,marginTop:100*(1-this.__color.v)-7+`px`,backgroundColor:this.__temp.toHexString(),border:this.__field_knob_border+`rgb(`+n+`,`+n+`,`+n+`)`}),this.__hue_knob.style.marginTop=(1-this.__color.h/360)*100+`px`,this.__temp.s=1,this.__temp.v=1,linearGradient(this.__saturation_field,`left`,`#fff`,this.__temp.toHexString()),this.__input.value=this.__color.toString(),X.extend(this.__input.style,{backgroundColor:this.__color.toHexString(),color:`rgb(`+n+`,`+n+`,`+n+`)`,textShadow:this.__input_textShadow+`rgba(`+i+`,`+i+`,`+i+`,.7)`})}}]),ColorController}(_o),ko=[`-moz-`,`-o-`,`-webkit-`,`-ms-`,``];function linearGradient(e,t,n,i){e.style.background=``,X.each(ko,function(a){e.style.cssText+=`background: `+a+`linear-gradient(`+t+`, `+n+` 0%, `+i+` 100%); `})}function hueGradient(e){e.style.background=``,e.style.cssText+=`background: -moz-linear-gradient(top,  #ff0000 0%, #ff00ff 17%, #0000ff 34%, #00ffff 50%, #00ff00 67%, #ffff00 84%, #ff0000 100%);`,e.style.cssText+=`background: -webkit-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);`,e.style.cssText+=`background: -o-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);`,e.style.cssText+=`background: -ms-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);`,e.style.cssText+=`background: linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);`}var Ao={load:function load(e,t){var n=t||document,i=n.createElement(`link`);i.type=`text/css`,i.rel=`stylesheet`,i.href=e,n.getElementsByTagName(`head`)[0].appendChild(i)},inject:function inject(e,t){var n=t||document,i=document.createElement(`style`);i.type=`text/css`,i.innerHTML=e;var a=n.getElementsByTagName(`head`)[0];try{a.appendChild(i)}catch{}}},jo=`<div id="dg-save" class="dg dialogue">

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

</div>`,Mo=function ControllerFactory(e,t){var n=e[t];return X.isArray(arguments[2])||X.isObject(arguments[2])?new So(e,t,arguments[2]):X.isNumber(n)?X.isNumber(arguments[2])&&X.isNumber(arguments[3])?X.isNumber(arguments[4])?new Eo(e,t,arguments[2],arguments[3],arguments[4]):new Eo(e,t,arguments[2],arguments[3]):X.isNumber(arguments[4])?new To(e,t,{min:arguments[2],max:arguments[3],step:arguments[4]}):new To(e,t,{min:arguments[2],max:arguments[3]}):X.isString(n)?new Co(e,t):X.isFunction(n)?new Do(e,t,``):X.isBoolean(n)?new xo(e,t):null};function requestAnimationFrame$1(e){setTimeout(e,1e3/60)}__name(requestAnimationFrame$1,`requestAnimationFrame`);var No=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||requestAnimationFrame$1,Po=function(){function CenteredDiv(){classCallCheck(this,CenteredDiv),this.backgroundElement=document.createElement(`div`),X.extend(this.backgroundElement.style,{backgroundColor:`rgba(0,0,0,0.8)`,top:0,left:0,display:`none`,zIndex:`1000`,opacity:0,WebkitTransition:`opacity 0.2s linear`,transition:`opacity 0.2s linear`}),Z.makeFullscreen(this.backgroundElement),this.backgroundElement.style.position=`fixed`,this.domElement=document.createElement(`div`),X.extend(this.domElement.style,{position:`fixed`,display:`none`,zIndex:`1001`,opacity:0,WebkitTransition:`-webkit-transform 0.2s ease-out, opacity 0.2s linear`,transition:`transform 0.2s ease-out, opacity 0.2s linear`}),document.body.appendChild(this.backgroundElement),document.body.appendChild(this.domElement);var e=this;Z.bind(this.backgroundElement,`click`,function(){e.hide()})}return mo(CenteredDiv,[{key:`show`,value:function show(){var e=this;this.backgroundElement.style.display=`block`,this.domElement.style.display=`block`,this.domElement.style.opacity=0,this.domElement.style.webkitTransform=`scale(1.1)`,this.layout(),X.defer(function(){e.backgroundElement.style.opacity=1,e.domElement.style.opacity=1,e.domElement.style.webkitTransform=`scale(1)`})}},{key:`hide`,value:function hide(){var e=this,t=function hide(){e.domElement.style.display=`none`,e.backgroundElement.style.display=`none`,Z.unbind(e.domElement,`webkitTransitionEnd`,hide),Z.unbind(e.domElement,`transitionend`,hide),Z.unbind(e.domElement,`oTransitionEnd`,hide)};Z.bind(this.domElement,`webkitTransitionEnd`,t),Z.bind(this.domElement,`transitionend`,t),Z.bind(this.domElement,`oTransitionEnd`,t),this.backgroundElement.style.opacity=0,this.domElement.style.opacity=0,this.domElement.style.webkitTransform=`scale(1.1)`}},{key:`layout`,value:function layout(){this.domElement.style.left=window.innerWidth/2-Z.getWidth(this.domElement)/2+`px`,this.domElement.style.top=window.innerHeight/2-Z.getHeight(this.domElement)/2+`px`}}]),CenteredDiv}(),Fo=___$insertStyle(`.dg ul{list-style:none;margin:0;padding:0;width:100%;clear:both}.dg.ac{position:fixed;top:0;left:0;right:0;height:0;z-index:0}.dg:not(.ac) .main{overflow:hidden}.dg.main{-webkit-transition:opacity .1s linear;-o-transition:opacity .1s linear;-moz-transition:opacity .1s linear;transition:opacity .1s linear}.dg.main.taller-than-window{overflow-y:auto}.dg.main.taller-than-window .close-button{opacity:1;margin-top:-1px;border-top:1px solid #2c2c2c}.dg.main ul.closed .close-button{opacity:1 !important}.dg.main:hover .close-button,.dg.main .close-button.drag{opacity:1}.dg.main .close-button{-webkit-transition:opacity .1s linear;-o-transition:opacity .1s linear;-moz-transition:opacity .1s linear;transition:opacity .1s linear;border:0;line-height:19px;height:20px;cursor:pointer;text-align:center;background-color:#000}.dg.main .close-button.close-top{position:relative}.dg.main .close-button.close-bottom{position:absolute}.dg.main .close-button:hover{background-color:#111}.dg.a{float:right;margin-right:15px;overflow-y:visible}.dg.a.has-save>ul.close-top{margin-top:0}.dg.a.has-save>ul.close-bottom{margin-top:27px}.dg.a.has-save>ul.closed{margin-top:0}.dg.a .save-row{top:0;z-index:1002}.dg.a .save-row.close-top{position:relative}.dg.a .save-row.close-bottom{position:fixed}.dg li{-webkit-transition:height .1s ease-out;-o-transition:height .1s ease-out;-moz-transition:height .1s ease-out;transition:height .1s ease-out;-webkit-transition:overflow .1s linear;-o-transition:overflow .1s linear;-moz-transition:overflow .1s linear;transition:overflow .1s linear}.dg li:not(.folder){cursor:auto;height:27px;line-height:27px;padding:0 4px 0 5px}.dg li.folder{padding:0;border-left:4px solid rgba(0,0,0,0)}.dg li.title{cursor:pointer;margin-left:-4px}.dg .closed li:not(.title),.dg .closed ul li,.dg .closed ul li>*{height:0;overflow:hidden;border:0}.dg .cr{clear:both;padding-left:3px;height:27px;overflow:hidden}.dg .property-name{cursor:default;float:left;clear:left;width:40%;overflow:hidden;text-overflow:ellipsis}.dg .cr.function .property-name{width:100%}.dg .c{float:left;width:60%;position:relative}.dg .c input[type=text]{border:0;margin-top:4px;padding:3px;width:100%;float:right}.dg .has-slider input[type=text]{width:30%;margin-left:0}.dg .slider{float:left;width:66%;margin-left:-5px;margin-right:0;height:19px;margin-top:4px}.dg .slider-fg{height:100%}.dg .c input[type=checkbox]{margin-top:7px}.dg .c select{margin-top:5px}.dg .cr.function,.dg .cr.function .property-name,.dg .cr.function *,.dg .cr.boolean,.dg .cr.boolean *{cursor:pointer}.dg .cr.color{overflow:visible}.dg .selector{display:none;position:absolute;margin-left:-9px;margin-top:23px;z-index:10}.dg .c:hover .selector,.dg .selector.drag{display:block}.dg li.save-row{padding:0}.dg li.save-row .button{display:inline-block;padding:0px 6px}.dg.dialogue{background-color:#222;width:460px;padding:15px;font-size:13px;line-height:15px}#dg-new-constructor{padding:10px;color:#222;font-family:Monaco, monospace;font-size:10px;border:0;resize:none;box-shadow:inset 1px 1px 1px #888;word-wrap:break-word;margin:12px 0;display:block;width:440px;overflow-y:scroll;height:100px;position:relative}#dg-local-explain{display:none;font-size:11px;line-height:17px;border-radius:3px;background-color:#333;padding:8px;margin-top:10px}#dg-local-explain code{font-size:10px}#dat-gui-save-locally{display:none}.dg{color:#eee;font:11px 'Lucida Grande', sans-serif;text-shadow:0 -1px 0 #111}.dg.main::-webkit-scrollbar{width:5px;background:#1a1a1a}.dg.main::-webkit-scrollbar-corner{height:0;display:none}.dg.main::-webkit-scrollbar-thumb{border-radius:5px;background:#676767}.dg li:not(.folder){background:#1a1a1a;border-bottom:1px solid #2c2c2c}.dg li.save-row{line-height:25px;background:#dad5cb;border:0}.dg li.save-row select{margin-left:5px;width:108px}.dg li.save-row .button{margin-left:5px;margin-top:1px;border-radius:2px;font-size:9px;line-height:7px;padding:4px 4px 5px 4px;background:#c5bdad;color:#fff;text-shadow:0 1px 0 #b0a58f;box-shadow:0 -1px 0 #b0a58f;cursor:pointer}.dg li.save-row .button.gears{background:#c5bdad url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAANCAYAAAB/9ZQ7AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAQJJREFUeNpiYKAU/P//PwGIC/ApCABiBSAW+I8AClAcgKxQ4T9hoMAEUrxx2QSGN6+egDX+/vWT4e7N82AMYoPAx/evwWoYoSYbACX2s7KxCxzcsezDh3evFoDEBYTEEqycggWAzA9AuUSQQgeYPa9fPv6/YWm/Acx5IPb7ty/fw+QZblw67vDs8R0YHyQhgObx+yAJkBqmG5dPPDh1aPOGR/eugW0G4vlIoTIfyFcA+QekhhHJhPdQxbiAIguMBTQZrPD7108M6roWYDFQiIAAv6Aow/1bFwXgis+f2LUAynwoIaNcz8XNx3Dl7MEJUDGQpx9gtQ8YCueB+D26OECAAQDadt7e46D42QAAAABJRU5ErkJggg==) 2px 1px no-repeat;height:7px;width:8px}.dg li.save-row .button:hover{background-color:#bab19e;box-shadow:0 -1px 0 #b0a58f}.dg li.folder{border-bottom:0}.dg li.title{padding-left:16px;background:#000 url(data:image/gif;base64,R0lGODlhBQAFAJEAAP////Pz8////////yH5BAEAAAIALAAAAAAFAAUAAAIIlI+hKgFxoCgAOw==) 6px 10px no-repeat;cursor:pointer;border-bottom:1px solid rgba(255,255,255,0.2)}.dg .closed li.title{background-image:url(data:image/gif;base64,R0lGODlhBQAFAJEAAP////Pz8////////yH5BAEAAAIALAAAAAAFAAUAAAIIlGIWqMCbWAEAOw==)}.dg .cr.boolean{border-left:3px solid #806787}.dg .cr.color{border-left:3px solid}.dg .cr.function{border-left:3px solid #e61d5f}.dg .cr.number{border-left:3px solid #2FA1D6}.dg .cr.number input[type=text]{color:#2FA1D6}.dg .cr.string{border-left:3px solid #1ed36f}.dg .cr.string input[type=text]{color:#1ed36f}.dg .cr.function:hover,.dg .cr.boolean:hover{background:#111}.dg .c input[type=text]{background:#303030;outline:none}.dg .c input[type=text]:hover{background:#3c3c3c}.dg .c input[type=text]:focus{background:#494949;color:#fff}.dg .c .slider{background:#303030;cursor:ew-resize}.dg .c .slider-fg{background:#2FA1D6;max-width:100%}.dg .c .slider:hover{background:#3c3c3c}.dg .c .slider:hover .slider-fg{background:#44abda}
`);Ao.inject(Fo);var Io=`dg`,Lo=72,Ro=20,zo=`Default`,Bo=function(){try{return!!window.localStorage}catch{return!1}}(),Vo=void 0,Ho=!0,Uo=void 0,Wo=!1,Go=[],Q=function GUI(e){var t=this,n=e||{};this.domElement=document.createElement(`div`),this.__ul=document.createElement(`ul`),this.domElement.appendChild(this.__ul),Z.addClass(this.domElement,Io),this.__folders={},this.__controllers=[],this.__rememberedObjects=[],this.__rememberedObjectIndecesToControllers=[],this.__listening=[],n=X.defaults(n,{closeOnTop:!1,autoPlace:!0,width:GUI.DEFAULT_WIDTH}),n=X.defaults(n,{resizable:n.autoPlace,hideable:n.autoPlace}),X.isUndefined(n.load)?n.load={preset:zo}:n.preset&&(n.load.preset=n.preset),X.isUndefined(n.parent)&&n.hideable&&Go.push(this),n.resizable=X.isUndefined(n.parent)&&n.resizable,n.autoPlace&&X.isUndefined(n.scrollable)&&(n.scrollable=!0);var i=Bo&&localStorage.getItem(getLocalStorageHash(this,`isLocal`))===`true`,a=void 0,o=void 0;if(Object.defineProperties(this,{parent:{get:function get$$1(){return n.parent}},scrollable:{get:function get$$1(){return n.scrollable}},autoPlace:{get:function get$$1(){return n.autoPlace}},closeOnTop:{get:function get$$1(){return n.closeOnTop}},preset:{get:function get$$1(){return t.parent?t.getRoot().preset:n.load.preset},set:function set$$1(e){t.parent?t.getRoot().preset=e:n.load.preset=e,setPresetSelectIndex(this),t.revert()}},width:{get:function get$$1(){return n.width},set:function set$$1(e){n.width=e,setWidth(t,e)}},name:{get:function get$$1(){return n.name},set:function set$$1(e){n.name=e,o&&(o.innerHTML=n.name)}},closed:{get:function get$$1(){return n.closed},set:function set$$1(e){n.closed=e,n.closed?Z.addClass(t.__ul,GUI.CLASS_CLOSED):Z.removeClass(t.__ul,GUI.CLASS_CLOSED),this.onResize(),t.__closeButton&&(t.__closeButton.innerHTML=e?GUI.TEXT_OPEN:GUI.TEXT_CLOSED)}},load:{get:function get$$1(){return n.load}},useLocalStorage:{get:function get$$1(){return i},set:function set$$1(e){Bo&&(i=e,e?Z.bind(window,`unload`,a):Z.unbind(window,`unload`,a),localStorage.setItem(getLocalStorageHash(t,`isLocal`),e))}}}),X.isUndefined(n.parent)){if(this.closed=n.closed||!1,Z.addClass(this.domElement,GUI.CLASS_MAIN),Z.makeSelectable(this.domElement,!1),Bo&&i){t.useLocalStorage=!0;var s=localStorage.getItem(getLocalStorageHash(this,`gui`));s&&(n.load=JSON.parse(s))}this.__closeButton=document.createElement(`div`),this.__closeButton.innerHTML=GUI.TEXT_CLOSED,Z.addClass(this.__closeButton,GUI.CLASS_CLOSE_BUTTON),n.closeOnTop?(Z.addClass(this.__closeButton,GUI.CLASS_CLOSE_TOP),this.domElement.insertBefore(this.__closeButton,this.domElement.childNodes[0])):(Z.addClass(this.__closeButton,GUI.CLASS_CLOSE_BOTTOM),this.domElement.appendChild(this.__closeButton)),Z.bind(this.__closeButton,`click`,function(){t.closed=!t.closed})}else{n.closed===void 0&&(n.closed=!0);var c=document.createTextNode(n.name);Z.addClass(c,`controller-name`),o=addRow(t,c),Z.addClass(this.__ul,GUI.CLASS_CLOSED),Z.addClass(o,`title`),Z.bind(o,`click`,function onClickTitle(e){return e.preventDefault(),t.closed=!t.closed,!1}),n.closed||(this.closed=!1)}n.autoPlace&&(X.isUndefined(n.parent)&&(Ho&&=(Uo=document.createElement(`div`),Z.addClass(Uo,Io),Z.addClass(Uo,GUI.CLASS_AUTO_PLACE_CONTAINER),document.body.appendChild(Uo),!1),Uo.appendChild(this.domElement),Z.addClass(this.domElement,GUI.CLASS_AUTO_PLACE)),this.parent||setWidth(t,n.width)),this.__resizeHandler=function(){t.onResizeDebounced()},Z.bind(window,`resize`,this.__resizeHandler),Z.bind(this.__ul,`webkitTransitionEnd`,this.__resizeHandler),Z.bind(this.__ul,`transitionend`,this.__resizeHandler),Z.bind(this.__ul,`oTransitionEnd`,this.__resizeHandler),this.onResize(),n.resizable&&addResizeHandle(this),a=function saveToLocalStorage(){Bo&&localStorage.getItem(getLocalStorageHash(t,`isLocal`))===`true`&&localStorage.setItem(getLocalStorageHash(t,`gui`),JSON.stringify(t.getSaveObject()))},this.saveToLocalStorageIfPossible=a;function resetWidth(){var e=t.getRoot();e.width+=1,X.defer(function(){--e.width})}n.parent||resetWidth()};Q.toggleHide=function(){Wo=!Wo,X.each(Go,function(e){e.domElement.style.display=Wo?`none`:``})},Q.CLASS_AUTO_PLACE=`a`,Q.CLASS_AUTO_PLACE_CONTAINER=`ac`,Q.CLASS_MAIN=`main`,Q.CLASS_CONTROLLER_ROW=`cr`,Q.CLASS_TOO_TALL=`taller-than-window`,Q.CLASS_CLOSED=`closed`,Q.CLASS_CLOSE_BUTTON=`close-button`,Q.CLASS_CLOSE_TOP=`close-top`,Q.CLASS_CLOSE_BOTTOM=`close-bottom`,Q.CLASS_DRAG=`drag`,Q.DEFAULT_WIDTH=245,Q.TEXT_CLOSED=`Close Controls`,Q.TEXT_OPEN=`Open Controls`,Q._keydownHandler=function(e){document.activeElement.type!==`text`&&(e.which===Lo||e.keyCode===Lo)&&Q.toggleHide()},Z.bind(window,`keydown`,Q._keydownHandler,!1),X.extend(Q.prototype,{add:function add(e,t){return _add(this,e,t,{factoryArgs:Array.prototype.slice.call(arguments,2)})},addColor:function addColor(e,t){return _add(this,e,t,{color:!0})},remove:function remove(e){this.__ul.removeChild(e.__li),this.__controllers.splice(this.__controllers.indexOf(e),1);var t=this;X.defer(function(){t.onResize()})},destroy:function destroy(){if(this.parent)throw Error(`Only the root GUI should be removed with .destroy(). For subfolders, use gui.removeFolder(folder) instead.`);this.autoPlace&&Uo.removeChild(this.domElement);var e=this;X.each(this.__folders,function(t){e.removeFolder(t)}),Z.unbind(window,`keydown`,Q._keydownHandler,!1),removeListeners(this)},addFolder:function addFolder(e){if(this.__folders[e]!==void 0)throw Error(`You already have a folder in this GUI by the name "`+e+`"`);var t={name:e,parent:this};t.autoPlace=this.autoPlace,this.load&&this.load.folders&&this.load.folders[e]&&(t.closed=this.load.folders[e].closed,t.load=this.load.folders[e]);var n=new Q(t);this.__folders[e]=n;var i=addRow(this,n.domElement);return Z.addClass(i,`folder`),n},removeFolder:function removeFolder(e){this.__ul.removeChild(e.domElement.parentElement),delete this.__folders[e.name],this.load&&this.load.folders&&this.load.folders[e.name]&&delete this.load.folders[e.name],removeListeners(e);var t=this;X.each(e.__folders,function(t){e.removeFolder(t)}),X.defer(function(){t.onResize()})},open:function open(){this.closed=!1},close:function close(){this.closed=!0},hide:function hide(){this.domElement.style.display=`none`},show:function show(){this.domElement.style.display=``},onResize:function onResize(){var e=this.getRoot();if(e.scrollable){var t=Z.getOffset(e.__ul).top,n=0;X.each(e.__ul.childNodes,function(t){e.autoPlace&&t===e.__save_row||(n+=Z.getHeight(t))}),window.innerHeight-t-Ro<n?(Z.addClass(e.domElement,Q.CLASS_TOO_TALL),e.__ul.style.height=window.innerHeight-t-Ro+`px`):(Z.removeClass(e.domElement,Q.CLASS_TOO_TALL),e.__ul.style.height=`auto`)}e.__resize_handle&&X.defer(function(){e.__resize_handle.style.height=e.__ul.offsetHeight+`px`}),e.__closeButton&&(e.__closeButton.style.width=e.width+`px`)},onResizeDebounced:X.debounce(function(){this.onResize()},50),remember:function remember(){if(X.isUndefined(Vo)&&(Vo=new Po,Vo.domElement.innerHTML=jo),this.parent)throw Error(`You can only call remember on a top level GUI.`);var e=this;X.each(Array.prototype.slice.call(arguments),function(t){e.__rememberedObjects.length===0&&addSaveMenu(e),e.__rememberedObjects.indexOf(t)===-1&&e.__rememberedObjects.push(t)}),this.autoPlace&&setWidth(this,this.width)},getRoot:function getRoot(){for(var e=this;e.parent;)e=e.parent;return e},getSaveObject:function getSaveObject(){var e=this.load;return e.closed=this.closed,this.__rememberedObjects.length>0&&(e.preset=this.preset,e.remembered||={},e.remembered[this.preset]=getCurrentPreset(this)),e.folders={},X.each(this.__folders,function(t,n){e.folders[n]=t.getSaveObject()}),e},save:function save(){this.load.remembered||(this.load.remembered={}),this.load.remembered[this.preset]=getCurrentPreset(this),markPresetModified(this,!1),this.saveToLocalStorageIfPossible()},saveAs:function saveAs(e){this.load.remembered||(this.load.remembered={},this.load.remembered[zo]=getCurrentPreset(this,!0)),this.load.remembered[e]=getCurrentPreset(this),this.preset=e,addPresetOption(this,e,!0),this.saveToLocalStorageIfPossible()},revert:function revert(e){X.each(this.__controllers,function(t){this.getRoot().load.remembered?recallSavedValue(e||this.getRoot(),t):t.setValue(t.initialValue),t.__onFinishChange&&t.__onFinishChange.call(t,t.getValue())},this),X.each(this.__folders,function(e){e.revert(e)}),e||markPresetModified(this.getRoot(),!1)},listen:function listen(e){var t=this.__listening.length===0;this.__listening.push(e),t&&updateDisplays(this.__listening)},updateDisplay:function updateDisplay(){X.each(this.__controllers,function(e){e.updateDisplay()}),X.each(this.__folders,function(e){e.updateDisplay()})}});function addRow(e,t,n){var i=document.createElement(`li`);return t&&i.appendChild(t),n?e.__ul.insertBefore(i,n):e.__ul.appendChild(i),e.onResize(),i}function removeListeners(e){Z.unbind(window,`resize`,e.__resizeHandler),e.saveToLocalStorageIfPossible&&Z.unbind(window,`unload`,e.saveToLocalStorageIfPossible)}function markPresetModified(e,t){var n=e.__preset_select[e.__preset_select.selectedIndex];t?n.innerHTML=n.value+`*`:n.innerHTML=n.value}function augmentController(e,t,n){if(n.__li=t,n.__gui=e,X.extend(n,{options:function options(t){if(arguments.length>1){var i=n.__li.nextElementSibling;return n.remove(),_add(e,n.object,n.property,{before:i,factoryArgs:[X.toArray(arguments)]})}if(X.isArray(t)||X.isObject(t)){var a=n.__li.nextElementSibling;return n.remove(),_add(e,n.object,n.property,{before:a,factoryArgs:[t]})}},name:function name(e){return n.__li.firstElementChild.firstElementChild.innerHTML=e,n},listen:function listen(){return n.__gui.listen(n),n},remove:function remove(){return n.__gui.remove(n),n}}),n instanceof Eo){var i=new To(n.object,n.property,{min:n.__min,max:n.__max,step:n.__step});X.each([`updateDisplay`,`onChange`,`onFinishChange`,`step`,`min`,`max`],function(e){var t=n[e],a=i[e];n[e]=i[e]=function(){var e=Array.prototype.slice.call(arguments);return a.apply(i,e),t.apply(n,e)}}),Z.addClass(t,`has-slider`),n.domElement.insertBefore(i.domElement,n.domElement.firstElementChild)}else if(n instanceof To){var a=function r(t){if(X.isNumber(n.__min)&&X.isNumber(n.__max)){var i=n.__li.firstElementChild.firstElementChild.innerHTML,a=n.__gui.__listening.indexOf(n)>-1;n.remove();var o=_add(e,n.object,n.property,{before:n.__li.nextElementSibling,factoryArgs:[n.__min,n.__max,n.__step]});return o.name(i),a&&o.listen(),o}return t};n.min=X.compose(a,n.min),n.max=X.compose(a,n.max)}else n instanceof xo?(Z.bind(t,`click`,function(){Z.fakeEvent(n.__checkbox,`click`)}),Z.bind(n.__checkbox,`click`,function(e){e.stopPropagation()})):n instanceof Do?(Z.bind(t,`click`,function(){Z.fakeEvent(n.__button,`click`)}),Z.bind(t,`mouseover`,function(){Z.addClass(n.__button,`hover`)}),Z.bind(t,`mouseout`,function(){Z.removeClass(n.__button,`hover`)})):n instanceof Oo&&(Z.addClass(t,`color`),n.updateDisplay=X.compose(function(e){return t.style.borderLeftColor=n.__color.toString(),e},n.updateDisplay),n.updateDisplay());n.setValue=X.compose(function(t){return e.getRoot().__preset_select&&n.isModified()&&markPresetModified(e.getRoot(),!0),t},n.setValue)}function recallSavedValue(e,t){var n=e.getRoot(),i=n.__rememberedObjects.indexOf(t.object);if(i!==-1){var a=n.__rememberedObjectIndecesToControllers[i];if(a===void 0&&(a={},n.__rememberedObjectIndecesToControllers[i]=a),a[t.property]=t,n.load&&n.load.remembered){var o=n.load.remembered,s=void 0;if(o[e.preset])s=o[e.preset];else if(o[zo])s=o[zo];else return;if(s[i]&&s[i][t.property]!==void 0){var c=s[i][t.property];t.initialValue=c,t.setValue(c)}}}}function _add(e,t,n,i){if(t[n]===void 0)throw Error(`Object "`+t+`" has no property "`+n+`"`);var a=void 0;if(i.color)a=new Oo(t,n);else{var o=[t,n].concat(i.factoryArgs);a=Mo.apply(e,o)}i.before instanceof _o&&(i.before=i.before.__li),recallSavedValue(e,a),Z.addClass(a.domElement,`c`);var s=document.createElement(`span`);Z.addClass(s,`property-name`),s.innerHTML=a.property;var c=document.createElement(`div`);c.appendChild(s),c.appendChild(a.domElement);var l=addRow(e,c,i.before);return Z.addClass(l,Q.CLASS_CONTROLLER_ROW),a instanceof Oo?Z.addClass(l,`color`):Z.addClass(l,po(a.getValue())),augmentController(e,l,a),e.__controllers.push(a),a}function getLocalStorageHash(e,t){return document.location.href+`.`+t}function addPresetOption(e,t,n){var i=document.createElement(`option`);i.innerHTML=t,i.value=t,e.__preset_select.appendChild(i),n&&(e.__preset_select.selectedIndex=e.__preset_select.length-1)}function showHideExplain(e,t){t.style.display=e.useLocalStorage?`block`:`none`}function addSaveMenu(e){var t=e.__save_row=document.createElement(`li`);Z.addClass(e.domElement,`has-save`),e.__ul.insertBefore(t,e.__ul.firstChild),Z.addClass(t,`save-row`);var n=document.createElement(`span`);n.innerHTML=`&nbsp;`,Z.addClass(n,`button gears`);var i=document.createElement(`span`);i.innerHTML=`Save`,Z.addClass(i,`button`),Z.addClass(i,`save`);var a=document.createElement(`span`);a.innerHTML=`New`,Z.addClass(a,`button`),Z.addClass(a,`save-as`);var o=document.createElement(`span`);o.innerHTML=`Revert`,Z.addClass(o,`button`),Z.addClass(o,`revert`);var s=e.__preset_select=document.createElement(`select`);if(e.load&&e.load.remembered?X.each(e.load.remembered,function(t,n){addPresetOption(e,n,n===e.preset)}):addPresetOption(e,zo,!1),Z.bind(s,`change`,function(){for(var t=0;t<e.__preset_select.length;t++)e.__preset_select[t].innerHTML=e.__preset_select[t].value;e.preset=this.value}),t.appendChild(s),t.appendChild(n),t.appendChild(i),t.appendChild(a),t.appendChild(o),Bo){var c=document.getElementById(`dg-local-explain`),l=document.getElementById(`dg-local-storage`),u=document.getElementById(`dg-save-locally`);u.style.display=`block`,localStorage.getItem(getLocalStorageHash(e,`isLocal`))===`true`&&l.setAttribute(`checked`,`checked`),showHideExplain(e,c),Z.bind(l,`change`,function(){e.useLocalStorage=!e.useLocalStorage,showHideExplain(e,c)})}var d=document.getElementById(`dg-new-constructor`);Z.bind(d,`keydown`,function(e){e.metaKey&&(e.which===67||e.keyCode===67)&&Vo.hide()}),Z.bind(n,`click`,function(){d.innerHTML=JSON.stringify(e.getSaveObject(),void 0,2),Vo.show(),d.focus(),d.select()}),Z.bind(i,`click`,function(){e.save()}),Z.bind(a,`click`,function(){var t=prompt(`Enter a new preset name.`);t&&e.saveAs(t)}),Z.bind(o,`click`,function(){e.revert()})}function addResizeHandle(e){var t=void 0;e.__resize_handle=document.createElement(`div`),X.extend(e.__resize_handle.style,{width:`6px`,marginLeft:`-3px`,height:`200px`,cursor:`ew-resize`,position:`absolute`});function drag(n){return n.preventDefault(),e.width+=t-n.clientX,e.onResize(),t=n.clientX,!1}function dragStop(){Z.removeClass(e.__closeButton,Q.CLASS_DRAG),Z.unbind(window,`mousemove`,drag),Z.unbind(window,`mouseup`,dragStop)}function dragStart(n){return n.preventDefault(),t=n.clientX,Z.addClass(e.__closeButton,Q.CLASS_DRAG),Z.bind(window,`mousemove`,drag),Z.bind(window,`mouseup`,dragStop),!1}Z.bind(e.__resize_handle,`mousedown`,dragStart),Z.bind(e.__closeButton,`mousedown`,dragStart),e.domElement.insertBefore(e.__resize_handle,e.domElement.firstElementChild)}function setWidth(e,t){e.domElement.style.width=t+`px`,e.__save_row&&e.autoPlace&&(e.__save_row.style.width=t+`px`),e.__closeButton&&(e.__closeButton.style.width=t+`px`)}function getCurrentPreset(e,t){var n={};return X.each(e.__rememberedObjects,function(i,a){var o={},s=e.__rememberedObjectIndecesToControllers[a];X.each(s,function(e,n){o[n]=t?e.initialValue:e.getValue()}),n[a]=o}),n}function setPresetSelectIndex(e){for(var t=0;t<e.__preset_select.length;t++)e.__preset_select[t].value===e.preset&&(e.__preset_select.selectedIndex=t)}function updateDisplays(e){e.length!==0&&No.call(window,function(){updateDisplays(e)}),X.each(e,function(e){e.updateDisplay()})}var Ko=Q,ContinentDebugControls=class{constructor(e){this.globeRadius=e,this.gui=new Ko}addObjectOptions(e,t,{lat:n,lng:i,rotation:a,landHeight:o},s){let c=this.gui.__folders[e]??this.gui.addFolder(e),l=t.getObject(),u=c.addFolder(l.name+s);u.add(l,`visible`),u.add({scale:l.scale.x},`scale`,0,5).onChange(e=>{l.scale.setScalar(e)});let d=l.clone();a&&d.rotateY(-Et.degToRad(a));let f=d.rotation.clone(),p={y:a??0};u.add(p,`y`,0,360).name(`rotation`).onChange(e=>{l.rotation.copy(f),l.rotateY(Et.degToRad(e))});let m={lat:n,lng:i,landHeight:o??0};Object.keys(m).forEach(e=>{u.add(m,e,-360,360,1).onChange(()=>{t.applyLatLng(this.globeRadius+(m.landHeight??0),m.lat,m.lng),f.copy(l.rotation),l.rotateY(Et.degToRad(p.y))})})}},BaseContinent=class{constructor(e,t=!1){this.properties=e,t&&(this.debugControls=new ContinentDebugControls(e.globeRadius)),this.continent=this.constructContinent(),this.continent.name&&this.continent.traverse(e=>{e.userData.continent=this.continent.name})}getObject(){return this.continent}addTo(e){e.add(this.continent)}constructObject(e,t){let{lat:n,lng:i,rotation:a,landHeight:o=Y.LevelOne,...s}=t,c=new e({...s});return c.applyLatLng(this.properties.globeRadius+o,n,i),a!==void 0&&c.getObject().rotateY(Et.degToRad(a)),c}constructObjectsGroup(e,t,n){let i=new Group$1;return i.name=t,n.forEach((n,a)=>{let o=this.constructObject(e,n);i.add(o.getObject()),this.debugControls?.addObjectOptions(t,o,n,a)}),i}constructLands(e,t){return this.constructObjectsGroup(Land,e,t)}constructTrees(e,t){return this.constructObjectsGroup(Tree,e,t)}constructMountains(e,t){return this.constructObjectsGroup(Mountain,e,t)}constructHouses(e,t){return this.constructObjectsGroup(House,e,t)}constructBuildings(e,t){return this.constructObjectsGroup(Building,e,t)}constructHuts(e,t){return this.constructObjectsGroup(Hut,e,t)}},qo=[{scale:1.5,landHeight:Y.LevelTwo,lat:20,lng:100,rotation:10},{scale:1,landHeight:Y.LevelOne,lat:40,lng:90,rotation:0}],Jo=[{scale:1.2,landHeight:Y.LevelOne,lat:18,lng:88},{scale:1.5,landHeight:Y.LevelOne,lat:23,lng:88},{scale:2,landHeight:Y.LevelOne,lat:21,lng:83},{scale:1.2,landHeight:Y.LevelOne,lat:40,lng:110},{scale:1.5,landHeight:Y.LevelOne,lat:40,lng:105},{scale:2,landHeight:Y.LevelOne,lat:35,lng:110}],AboutContinent$1=class extends BaseContinent{static{__name(this,`AboutContinent`)}constructContinent(){let e=new Group$1;return e.name=`aboutContinent`,e.add(this.constructTrees(`aboutTrees`,Jo)),e.add(this.constructHouses(`aboutHouses`,qo)),e}},Yo=[{size:15,lat:53,lng:4,rotation:7,landHeight:Y.LevelTwo-.75}],Xo=[{scale:1,lat:48,lng:-20,landHeight:Y.LevelTwo},{scale:1.2,lat:31,lng:-14,rotation:36,landHeight:Y.LevelOne}],Zo=[{scale:1,lat:52,lng:-12,landHeight:Y.LevelTwo},{scale:1.2,lat:48,lng:-10,landHeight:Y.LevelTwo},{scale:1.2,lat:32,lng:-6,landHeight:Y.LevelOne},{scale:1.5,lat:36,lng:-6,landHeight:Y.LevelOne},{scale:1,lat:33,lng:-2,landHeight:Y.LevelOne}],Qo=[{lat:40,lng:18,landHeight:Y.LevelOne},{lat:35,lng:8,landHeight:Y.LevelOne}],ProjectsContinent$1=class extends BaseContinent{static{__name(this,`ProjectsContinent`)}constructContinent(){let e=new Group$1;return e.name=`projectsContinent`,e.add(this.constructMountains(`projectsMountains`,Yo)),e.add(this.constructHouses(`projectsHouses`,Xo)),e.add(this.constructTrees(`projectsTrees`,Zo)),e.add(this.constructHuts(`projectsHuts`,Qo)),e}};function toTrianglesDrawMode(e,t){if(t===0)return console.warn(`THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles.`),e;if(t===2||t===1){let n=e.getIndex();if(n===null){let t=[],i=e.getAttribute(`position`);if(i!==void 0){for(let e=0;e<i.count;e++)t.push(e);e.setIndex(t),n=e.getIndex()}else return console.error(`THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible.`),e}let i=n.count-2,a=[];if(t===2)for(let e=1;e<=i;e++)a.push(n.getX(0)),a.push(n.getX(e)),a.push(n.getX(e+1));else for(let e=0;e<i;e++)e%2==0?(a.push(n.getX(e)),a.push(n.getX(e+1)),a.push(n.getX(e+2))):(a.push(n.getX(e+2)),a.push(n.getX(e+1)),a.push(n.getX(e)));a.length/3!==i&&console.error(`THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.`);let o=e.clone();return o.setIndex(a),o.clearGroups(),o}else return console.error(`THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:`,t),e}function clone(e){let t=new Map,n=new Map,i=e.clone();return parallelTraverse(e,i,function(e,i){t.set(i,e),n.set(e,i)}),i.traverse(function(e){if(!e.isSkinnedMesh)return;let i=e,a=t.get(e),o=a.skeleton.bones;i.skeleton=a.skeleton.clone(),i.bindMatrix.copy(a.bindMatrix),i.skeleton.bones=o.map(function(e){return n.get(e)}),i.bind(i.skeleton,i.bindMatrix)}),i}function parallelTraverse(e,t,n){n(e,t);for(let i=0;i<e.children.length;i++)parallelTraverse(e.children[i],t.children[i],n)}var GLTFLoader=class extends Loader{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(e){return new GLTFMaterialsClearcoatExtension(e)}),this.register(function(e){return new GLTFMaterialsDispersionExtension(e)}),this.register(function(e){return new GLTFTextureBasisUExtension(e)}),this.register(function(e){return new GLTFTextureWebPExtension(e)}),this.register(function(e){return new GLTFTextureAVIFExtension(e)}),this.register(function(e){return new GLTFMaterialsSheenExtension(e)}),this.register(function(e){return new GLTFMaterialsTransmissionExtension(e)}),this.register(function(e){return new GLTFMaterialsVolumeExtension(e)}),this.register(function(e){return new GLTFMaterialsIorExtension(e)}),this.register(function(e){return new GLTFMaterialsEmissiveStrengthExtension(e)}),this.register(function(e){return new GLTFMaterialsSpecularExtension(e)}),this.register(function(e){return new GLTFMaterialsIridescenceExtension(e)}),this.register(function(e){return new GLTFMaterialsAnisotropyExtension(e)}),this.register(function(e){return new GLTFMaterialsBumpExtension(e)}),this.register(function(e){return new GLTFLightsExtension(e)}),this.register(function(e){return new GLTFMeshoptCompression(e,$.EXT_MESHOPT_COMPRESSION)}),this.register(function(e){return new GLTFMeshoptCompression(e,$.KHR_MESHOPT_COMPRESSION)}),this.register(function(e){return new GLTFMeshGpuInstancing(e)})}load(e,t,n,i){let a=this,o;if(this.resourcePath!==``)o=this.resourcePath;else if(this.path!==``){let t=LoaderUtils.extractUrlBase(e);o=LoaderUtils.resolveURL(t,this.path)}else o=LoaderUtils.extractUrlBase(e);this.manager.itemStart(e);let _onError=function(t){i?i(t):console.error(t),a.manager.itemError(e),a.manager.itemEnd(e)},s=new FileLoader(this.manager);s.setPath(this.path),s.setResponseType(`arraybuffer`),s.setRequestHeader(this.requestHeader),s.setWithCredentials(this.withCredentials),s.load(e,function(n){try{a.parse(n,o,function(n){t(n),a.manager.itemEnd(e)},_onError)}catch(e){_onError(e)}},n,_onError)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let a,o={},s={},c=new TextDecoder;if(typeof e==`string`)a=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===$o){try{o[$.KHR_BINARY_GLTF]=new GLTFBinaryExtension(e)}catch(e){i&&i(e);return}a=JSON.parse(o[$.KHR_BINARY_GLTF].content)}else a=JSON.parse(c.decode(e));else a=e;if(a.asset===void 0||a.asset.version[0]<2){i&&i(Error(`THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported.`));return}let l=new GLTFParser(a,{path:t||this.resourcePath||``,crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let e=0;e<this.pluginCallbacks.length;e++){let t=this.pluginCallbacks[e](l);t.name||console.error(`THREE.GLTFLoader: Invalid plugin found: missing name`),s[t.name]=t,o[t.name]=!0}if(a.extensionsUsed)for(let e=0;e<a.extensionsUsed.length;++e){let t=a.extensionsUsed[e],n=a.extensionsRequired||[];switch(t){case $.KHR_MATERIALS_UNLIT:o[t]=new GLTFMaterialsUnlitExtension;break;case $.KHR_DRACO_MESH_COMPRESSION:o[t]=new GLTFDracoMeshCompressionExtension(a,this.dracoLoader);break;case $.KHR_TEXTURE_TRANSFORM:o[t]=new GLTFTextureTransformExtension;break;case $.KHR_MESH_QUANTIZATION:o[t]=new GLTFMeshQuantizationExtension;break;default:n.indexOf(t)>=0&&s[t]===void 0&&console.warn(`THREE.GLTFLoader: Unknown extension "`+t+`".`)}}l.setExtensions(o),l.setPlugins(s),l.parse(n,i)}parseAsync(e,t){let n=this;return new Promise(function(i,a){n.parse(e,t,i,a)})}};function GLTFRegistry(){let e={};return{get:function(t){return e[t]},add:function(t,n){e[t]=n},remove:function(t){delete e[t]},removeAll:function(){e={}}}}function getMaterialExtension(e,t,n){let i=e.json.materials[t];return i.extensions&&i.extensions[n]?i.extensions[n]:null}var $={KHR_BINARY_GLTF:`KHR_binary_glTF`,KHR_DRACO_MESH_COMPRESSION:`KHR_draco_mesh_compression`,KHR_LIGHTS_PUNCTUAL:`KHR_lights_punctual`,KHR_MATERIALS_CLEARCOAT:`KHR_materials_clearcoat`,KHR_MATERIALS_DISPERSION:`KHR_materials_dispersion`,KHR_MATERIALS_IOR:`KHR_materials_ior`,KHR_MATERIALS_SHEEN:`KHR_materials_sheen`,KHR_MATERIALS_SPECULAR:`KHR_materials_specular`,KHR_MATERIALS_TRANSMISSION:`KHR_materials_transmission`,KHR_MATERIALS_IRIDESCENCE:`KHR_materials_iridescence`,KHR_MATERIALS_ANISOTROPY:`KHR_materials_anisotropy`,KHR_MATERIALS_UNLIT:`KHR_materials_unlit`,KHR_MATERIALS_VOLUME:`KHR_materials_volume`,KHR_TEXTURE_BASISU:`KHR_texture_basisu`,KHR_TEXTURE_TRANSFORM:`KHR_texture_transform`,KHR_MESH_QUANTIZATION:`KHR_mesh_quantization`,KHR_MATERIALS_EMISSIVE_STRENGTH:`KHR_materials_emissive_strength`,EXT_MATERIALS_BUMP:`EXT_materials_bump`,EXT_TEXTURE_WEBP:`EXT_texture_webp`,EXT_TEXTURE_AVIF:`EXT_texture_avif`,EXT_MESHOPT_COMPRESSION:`EXT_meshopt_compression`,KHR_MESHOPT_COMPRESSION:`KHR_meshopt_compression`,EXT_MESH_GPU_INSTANCING:`EXT_mesh_gpu_instancing`},GLTFLightsExtension=class{constructor(e){this.parser=e,this.name=$.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){let i=t[n];i.extensions&&i.extensions[this.name]&&i.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,i.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n=`light:`+e,i=t.cache.get(n);if(i)return i;let a=t.json,o=((a.extensions&&a.extensions[this.name]||{}).lights||[])[e],s,c=new Color$1(16777215);o.color!==void 0&&c.setRGB(o.color[0],o.color[1],o.color[2],pt);let l=o.range===void 0?0:o.range;switch(o.type){case`directional`:s=new DirectionalLight(c),s.target.position.set(0,0,-1),s.add(s.target);break;case`point`:s=new PointLight(c),s.distance=l;break;case`spot`:s=new SpotLight(c),s.distance=l,o.spot=o.spot||{},o.spot.innerConeAngle=o.spot.innerConeAngle===void 0?0:o.spot.innerConeAngle,o.spot.outerConeAngle=o.spot.outerConeAngle===void 0?Math.PI/4:o.spot.outerConeAngle,s.angle=o.spot.outerConeAngle,s.penumbra=1-o.spot.innerConeAngle/o.spot.outerConeAngle,s.target.position.set(0,0,-1),s.add(s.target);break;default:throw Error(`THREE.GLTFLoader: Unexpected light type: `+o.type)}return s.position.set(0,0,0),assignExtrasToUserData(s,o),o.intensity!==void 0&&(s.intensity=o.intensity),s.name=t.createUniqueName(o.name||`light_`+e),i=Promise.resolve(s),t.cache.add(n,i),i}getDependency(e,t){if(e===`light`)return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,i=n.json.nodes[e],a=(i.extensions&&i.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(e){return n._getNodeRef(t.cache,a,e)})}},GLTFMaterialsUnlitExtension=class{constructor(){this.name=$.KHR_MATERIALS_UNLIT}getMaterialType(){return MeshBasicMaterial}extendParams(e,t,n){let i=[];e.color=new Color$1(1,1,1),e.opacity=1;let a=t.pbrMetallicRoughness;if(a){if(Array.isArray(a.baseColorFactor)){let t=a.baseColorFactor;e.color.setRGB(t[0],t[1],t[2],pt),e.opacity=t[3]}a.baseColorTexture!==void 0&&i.push(n.assignTexture(e,`map`,a.baseColorTexture,ft))}return Promise.all(i)}},GLTFMaterialsEmissiveStrengthExtension=class{constructor(e){this.parser=e,this.name=$.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let n=getMaterialExtension(this.parser,e,this.name);return n===null||n.emissiveStrength!==void 0&&(t.emissiveIntensity=n.emissiveStrength),Promise.resolve()}},GLTFMaterialsClearcoatExtension=class{constructor(e){this.parser=e,this.name=$.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return getMaterialExtension(this.parser,e,this.name)===null?null:MeshPhysicalMaterial}extendMaterialParams(e,t){let n=getMaterialExtension(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];if(n.clearcoatFactor!==void 0&&(t.clearcoat=n.clearcoatFactor),n.clearcoatTexture!==void 0&&i.push(this.parser.assignTexture(t,`clearcoatMap`,n.clearcoatTexture)),n.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=n.clearcoatRoughnessFactor),n.clearcoatRoughnessTexture!==void 0&&i.push(this.parser.assignTexture(t,`clearcoatRoughnessMap`,n.clearcoatRoughnessTexture)),n.clearcoatNormalTexture!==void 0&&(i.push(this.parser.assignTexture(t,`clearcoatNormalMap`,n.clearcoatNormalTexture)),n.clearcoatNormalTexture.scale!==void 0)){let e=n.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new B(e,e)}return Promise.all(i)}},GLTFMaterialsDispersionExtension=class{constructor(e){this.parser=e,this.name=$.KHR_MATERIALS_DISPERSION}getMaterialType(e){return getMaterialExtension(this.parser,e,this.name)===null?null:MeshPhysicalMaterial}extendMaterialParams(e,t){let n=getMaterialExtension(this.parser,e,this.name);return n===null||(t.dispersion=n.dispersion===void 0?0:n.dispersion),Promise.resolve()}},GLTFMaterialsIridescenceExtension=class{constructor(e){this.parser=e,this.name=$.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return getMaterialExtension(this.parser,e,this.name)===null?null:MeshPhysicalMaterial}extendMaterialParams(e,t){let n=getMaterialExtension(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];return n.iridescenceFactor!==void 0&&(t.iridescence=n.iridescenceFactor),n.iridescenceTexture!==void 0&&i.push(this.parser.assignTexture(t,`iridescenceMap`,n.iridescenceTexture)),n.iridescenceIor!==void 0&&(t.iridescenceIOR=n.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),n.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=n.iridescenceThicknessMinimum),n.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=n.iridescenceThicknessMaximum),n.iridescenceThicknessTexture!==void 0&&i.push(this.parser.assignTexture(t,`iridescenceThicknessMap`,n.iridescenceThicknessTexture)),Promise.all(i)}},GLTFMaterialsSheenExtension=class{constructor(e){this.parser=e,this.name=$.KHR_MATERIALS_SHEEN}getMaterialType(e){return getMaterialExtension(this.parser,e,this.name)===null?null:MeshPhysicalMaterial}extendMaterialParams(e,t){let n=getMaterialExtension(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];if(t.sheenColor=new Color$1(0,0,0),t.sheenRoughness=0,t.sheen=1,n.sheenColorFactor!==void 0){let e=n.sheenColorFactor;t.sheenColor.setRGB(e[0],e[1],e[2],pt)}return n.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=n.sheenRoughnessFactor),n.sheenColorTexture!==void 0&&i.push(this.parser.assignTexture(t,`sheenColorMap`,n.sheenColorTexture,ft)),n.sheenRoughnessTexture!==void 0&&i.push(this.parser.assignTexture(t,`sheenRoughnessMap`,n.sheenRoughnessTexture)),Promise.all(i)}},GLTFMaterialsTransmissionExtension=class{constructor(e){this.parser=e,this.name=$.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return getMaterialExtension(this.parser,e,this.name)===null?null:MeshPhysicalMaterial}extendMaterialParams(e,t){let n=getMaterialExtension(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];return n.transmissionFactor!==void 0&&(t.transmission=n.transmissionFactor),n.transmissionTexture!==void 0&&i.push(this.parser.assignTexture(t,`transmissionMap`,n.transmissionTexture)),Promise.all(i)}},GLTFMaterialsVolumeExtension=class{constructor(e){this.parser=e,this.name=$.KHR_MATERIALS_VOLUME}getMaterialType(e){return getMaterialExtension(this.parser,e,this.name)===null?null:MeshPhysicalMaterial}extendMaterialParams(e,t){let n=getMaterialExtension(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];t.thickness=n.thicknessFactor===void 0?0:n.thicknessFactor,n.thicknessTexture!==void 0&&i.push(this.parser.assignTexture(t,`thicknessMap`,n.thicknessTexture)),t.attenuationDistance=n.attenuationDistance||1/0;let a=n.attenuationColor||[1,1,1];return t.attenuationColor=new Color$1().setRGB(a[0],a[1],a[2],pt),Promise.all(i)}},GLTFMaterialsIorExtension=class{constructor(e){this.parser=e,this.name=$.KHR_MATERIALS_IOR}getMaterialType(e){return getMaterialExtension(this.parser,e,this.name)===null?null:MeshPhysicalMaterial}extendMaterialParams(e,t){let n=getMaterialExtension(this.parser,e,this.name);return n===null||(t.ior=n.ior===void 0?1.5:n.ior),Promise.resolve()}},GLTFMaterialsSpecularExtension=class{constructor(e){this.parser=e,this.name=$.KHR_MATERIALS_SPECULAR}getMaterialType(e){return getMaterialExtension(this.parser,e,this.name)===null?null:MeshPhysicalMaterial}extendMaterialParams(e,t){let n=getMaterialExtension(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];t.specularIntensity=n.specularFactor===void 0?1:n.specularFactor,n.specularTexture!==void 0&&i.push(this.parser.assignTexture(t,`specularIntensityMap`,n.specularTexture));let a=n.specularColorFactor||[1,1,1];return t.specularColor=new Color$1().setRGB(a[0],a[1],a[2],pt),n.specularColorTexture!==void 0&&i.push(this.parser.assignTexture(t,`specularColorMap`,n.specularColorTexture,ft)),Promise.all(i)}},GLTFMaterialsBumpExtension=class{constructor(e){this.parser=e,this.name=$.EXT_MATERIALS_BUMP}getMaterialType(e){return getMaterialExtension(this.parser,e,this.name)===null?null:MeshPhysicalMaterial}extendMaterialParams(e,t){let n=getMaterialExtension(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];return t.bumpScale=n.bumpFactor===void 0?1:n.bumpFactor,n.bumpTexture!==void 0&&i.push(this.parser.assignTexture(t,`bumpMap`,n.bumpTexture)),Promise.all(i)}},GLTFMaterialsAnisotropyExtension=class{constructor(e){this.parser=e,this.name=$.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return getMaterialExtension(this.parser,e,this.name)===null?null:MeshPhysicalMaterial}extendMaterialParams(e,t){let n=getMaterialExtension(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];return n.anisotropyStrength!==void 0&&(t.anisotropy=n.anisotropyStrength),n.anisotropyRotation!==void 0&&(t.anisotropyRotation=n.anisotropyRotation),n.anisotropyTexture!==void 0&&i.push(this.parser.assignTexture(t,`anisotropyMap`,n.anisotropyTexture)),Promise.all(i)}},GLTFTextureBasisUExtension=class{constructor(e){this.parser=e,this.name=$.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;let a=i.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw Error(`THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures`);return null}return t.loadTextureImage(e,a.source,o)}},GLTFTextureWebPExtension=class{constructor(e){this.parser=e,this.name=$.EXT_TEXTURE_WEBP}loadTexture(e){let t=this.name,n=this.parser,i=n.json,a=i.textures[e];if(!a.extensions||!a.extensions[t])return null;let o=a.extensions[t],s=i.images[o.source],c=n.textureLoader;if(s.uri){let e=n.options.manager.getHandler(s.uri);e!==null&&(c=e)}return n.loadTextureImage(e,o.source,c)}},GLTFTextureAVIFExtension=class{constructor(e){this.parser=e,this.name=$.EXT_TEXTURE_AVIF}loadTexture(e){let t=this.name,n=this.parser,i=n.json,a=i.textures[e];if(!a.extensions||!a.extensions[t])return null;let o=a.extensions[t],s=i.images[o.source],c=n.textureLoader;if(s.uri){let e=n.options.manager.getHandler(s.uri);e!==null&&(c=e)}return n.loadTextureImage(e,o.source,c)}},GLTFMeshoptCompression=class{constructor(e,t){this.name=t,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let e=n.extensions[this.name],i=this.parser.getDependency(`buffer`,e.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw Error(`THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files`);return null}return i.then(function(t){let n=e.byteOffset||0,i=e.byteLength||0,o=e.count,s=e.byteStride,c=new Uint8Array(t,n,i);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(o,s,c,e.mode,e.filter).then(function(e){return e.buffer}):a.ready.then(function(){let t=new ArrayBuffer(o*s);return a.decodeGltfBuffer(new Uint8Array(t),o,s,c,e.mode,e.filter),t})})}else return null}},GLTFMeshGpuInstancing=class{constructor(e){this.name=$.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let i=t.meshes[n.mesh];for(let e of i.primitives)if(e.mode!==rs.TRIANGLES&&e.mode!==rs.TRIANGLE_STRIP&&e.mode!==rs.TRIANGLE_FAN&&e.mode!==void 0)return null;let a=n.extensions[this.name].attributes,o=[],s={};for(let e in a)o.push(this.parser.getDependency(`accessor`,a[e]).then(t=>(s[e]=t,s[e])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(e=>{let t=e.pop(),n=t.isGroup?t.children:[t],i=e[0].count,a=[];for(let e of n){let t=new G,n=new V,o=new Quaternion,c=new V(1,1,1),l=new InstancedMesh(e.geometry,e.material,i);for(let e=0;e<i;e++)s.TRANSLATION&&n.fromBufferAttribute(s.TRANSLATION,e),s.ROTATION&&o.fromBufferAttribute(s.ROTATION,e),s.SCALE&&c.fromBufferAttribute(s.SCALE,e),l.setMatrixAt(e,t.compose(n,o,c));for(let t in s)if(t===`_COLOR_0`){let e=s[t];l.instanceColor=new InstancedBufferAttribute(e.array,e.itemSize,e.normalized)}else t!==`TRANSLATION`&&t!==`ROTATION`&&t!==`SCALE`&&e.geometry.setAttribute(t,s[t]);ln.prototype.copy.call(l,e),this.parser.assignFinalMaterial(l),a.push(l)}return t.isGroup?(t.clear(),t.add(...a),t):a[0]}))}},$o=`glTF`,es=12,ts={JSON:1313821514,BIN:5130562},GLTFBinaryExtension=class{constructor(e){this.name=$.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,es),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==$o)throw Error(`THREE.GLTFLoader: Unsupported glTF-Binary header.`);if(this.header.version<2)throw Error(`THREE.GLTFLoader: Legacy binary file detected.`);let i=this.header.length-es,a=new DataView(e,es),o=0;for(;o<i;){let t=a.getUint32(o,!0);o+=4;let i=a.getUint32(o,!0);if(o+=4,i===ts.JSON){let i=new Uint8Array(e,es+o,t);this.content=n.decode(i)}else if(i===ts.BIN){let n=es+o;this.body=e.slice(n,n+t)}o+=t}if(this.content===null)throw Error(`THREE.GLTFLoader: JSON content not found.`)}},GLTFDracoMeshCompressionExtension=class{constructor(e,t){if(!t)throw Error(`THREE.GLTFLoader: No DRACOLoader instance provided.`);this.name=$.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,i=this.dracoLoader,a=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,s={},c={},l={};for(let e in o){let t=cs[e]||e.toLowerCase();s[t]=o[e]}for(let t in e.attributes){let i=cs[t]||t.toLowerCase();if(o[t]!==void 0){let a=n.accessors[e.attributes[t]];l[i]=is[a.componentType].name,c[i]=a.normalized===!0}}return t.getDependency(`bufferView`,a).then(function(e){return new Promise(function(t,n){i.decodeDracoFile(e,function(e){for(let t in e.attributes){let n=e.attributes[t],i=c[t];i!==void 0&&(n.normalized=i)}t(e)},s,l,pt,n)})})}},GLTFTextureTransformExtension=class{constructor(){this.name=$.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0?e:(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0,e)}},GLTFMeshQuantizationExtension=class{constructor(){this.name=$.KHR_MESH_QUANTIZATION}},GLTFCubicSplineInterpolant=class extends Interpolant{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,a=e*i*3+i;for(let e=0;e!==i;e++)t[e]=n[a+e];return t}interpolate_(e,t,n,i){let a=this.resultBuffer,o=this.sampleValues,s=this.valueSize,c=s*2,l=s*3,u=i-t,d=(n-t)/u,f=d*d,p=f*d,m=e*l,h=m-l,g=-2*p+3*f,_=p-f,y=1-g,b=_-f+d;for(let e=0;e!==s;e++){let t=o[h+e+s],n=o[h+e+c]*u,i=o[m+e+s],l=o[m+e]*u;a[e]=y*t+b*n+g*i+_*l}return a}},ns=new Quaternion,GLTFCubicSplineQuaternionInterpolant=class extends GLTFCubicSplineInterpolant{interpolate_(e,t,n,i){let a=super.interpolate_(e,t,n,i);return ns.fromArray(a).normalize().toArray(a),a}},rs={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},is={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},as={9728:M,9729:F,9984:N,9985:ee,9986:P,9987:te},os={33071:A,33648:j,10497:k},ss={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},cs={POSITION:`position`,NORMAL:`normal`,TANGENT:`tangent`,TEXCOORD_0:`uv`,TEXCOORD_1:`uv1`,TEXCOORD_2:`uv2`,TEXCOORD_3:`uv3`,COLOR_0:`color`,WEIGHTS_0:`skinWeight`,JOINTS_0:`skinIndex`},ls={scale:`scale`,translation:`position`,rotation:`quaternion`,weights:`morphTargetInfluences`},us={CUBICSPLINE:void 0,LINEAR:it,STEP:rt},ds={OPAQUE:`OPAQUE`,MASK:`MASK`,BLEND:`BLEND`};function createDefaultMaterial(e){return e.DefaultMaterial===void 0&&(e.DefaultMaterial=new MeshStandardMaterial({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:0})),e.DefaultMaterial}function addUnknownExtensionsToUserData(e,t,n){for(let i in n.extensions)e[i]===void 0&&(t.userData.gltfExtensions=t.userData.gltfExtensions||{},t.userData.gltfExtensions[i]=n.extensions[i])}function assignExtrasToUserData(e,t){t.extras!==void 0&&(typeof t.extras==`object`?Object.assign(e.userData,t.extras):console.warn(`THREE.GLTFLoader: Ignoring primitive type .extras, `+t.extras))}function addMorphTargets(e,t,n){let i=!1,a=!1,o=!1;for(let e=0,n=t.length;e<n;e++){let n=t[e];if(n.POSITION!==void 0&&(i=!0),n.NORMAL!==void 0&&(a=!0),n.COLOR_0!==void 0&&(o=!0),i&&a&&o)break}if(!i&&!a&&!o)return Promise.resolve(e);let s=[],c=[],l=[];for(let u=0,d=t.length;u<d;u++){let d=t[u];if(i){let t=d.POSITION===void 0?e.attributes.position:n.getDependency(`accessor`,d.POSITION);s.push(t)}if(a){let t=d.NORMAL===void 0?e.attributes.normal:n.getDependency(`accessor`,d.NORMAL);c.push(t)}if(o){let t=d.COLOR_0===void 0?e.attributes.color:n.getDependency(`accessor`,d.COLOR_0);l.push(t)}}return Promise.all([Promise.all(s),Promise.all(c),Promise.all(l)]).then(function(t){let n=t[0],s=t[1],c=t[2];return i&&(e.morphAttributes.position=n),a&&(e.morphAttributes.normal=s),o&&(e.morphAttributes.color=c),e.morphTargetsRelative=!0,e})}function updateMorphTargets(e,t){if(e.updateMorphTargets(),t.weights!==void 0)for(let n=0,i=t.weights.length;n<i;n++)e.morphTargetInfluences[n]=t.weights[n];if(t.extras&&Array.isArray(t.extras.targetNames)){let n=t.extras.targetNames;if(e.morphTargetInfluences.length===n.length){e.morphTargetDictionary={};for(let t=0,i=n.length;t<i;t++)e.morphTargetDictionary[n[t]]=t}else console.warn(`THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.`)}}function createPrimitiveKey(e){let t,n=e.extensions&&e.extensions[$.KHR_DRACO_MESH_COMPRESSION];if(t=n?`draco:`+n.bufferView+`:`+n.indices+`:`+createAttributesKey(n.attributes):e.indices+`:`+createAttributesKey(e.attributes)+`:`+e.mode,e.targets!==void 0)for(let n=0,i=e.targets.length;n<i;n++)t+=`:`+createAttributesKey(e.targets[n]);return t}function createAttributesKey(e){let t=``,n=Object.keys(e).sort();for(let i=0,a=n.length;i<a;i++)t+=n[i]+`:`+e[n[i]]+`;`;return t}function getNormalizedComponentScale(e){switch(e){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw Error(`THREE.GLTFLoader: Unsupported normalized accessor component type.`)}}function getImageURIMimeType(e){return e.search(/\.jpe?g($|\?)/i)>0||e.search(/^data\:image\/jpeg/)===0?`image/jpeg`:e.search(/\.webp($|\?)/i)>0||e.search(/^data\:image\/webp/)===0?`image/webp`:e.search(/\.ktx2($|\?)/i)>0||e.search(/^data\:image\/ktx2/)===0?`image/ktx2`:`image/png`}var fs=new G,GLTFParser=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new GLTFRegistry,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,a=!1,o=-1;if(typeof navigator<`u`&&navigator.userAgent!==void 0){let e=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(e)===!0;let t=e.match(/Version\/(\d+)/);i=n&&t?parseInt(t[1],10):-1,a=e.indexOf(`Firefox`)>-1,o=a?e.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>`u`||n&&i<17||a&&o<98?this.textureLoader=new TextureLoader(this.options.manager):this.textureLoader=new ImageBitmapLoader(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new FileLoader(this.options.manager),this.fileLoader.setResponseType(`arraybuffer`),this.options.crossOrigin===`use-credentials`&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,i=this.json,a=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(e){return e._markDefs&&e._markDefs()}),Promise.all(this._invokeAll(function(e){return e.beforeRoot&&e.beforeRoot()})).then(function(){return Promise.all([n.getDependencies(`scene`),n.getDependencies(`animation`),n.getDependencies(`camera`)])}).then(function(t){let o={scene:t[0][i.scene||0],scenes:t[0],animations:t[1],cameras:t[2],asset:i.asset,parser:n,userData:{}};return addUnknownExtensionsToUserData(a,o,i),assignExtrasToUserData(o,i),Promise.all(n._invokeAll(function(e){return e.afterRoot&&e.afterRoot(o)})).then(function(){for(let e of o.scenes)e.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let n=0,i=t.length;n<i;n++){let i=t[n].joints;for(let t=0,n=i.length;t<n;t++)e[i[t]].isBone=!0}for(let t=0,i=e.length;t<i;t++){let i=e[t];i.mesh!==void 0&&(this._addNodeRef(this.meshCache,i.mesh),i.skin!==void 0&&(n[i.mesh].isSkinnedMesh=!0)),i.camera!==void 0&&this._addNodeRef(this.cameraCache,i.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let i=n.clone(),updateMappings=(e,t)=>{let n=this.associations.get(e);n!=null&&this.associations.set(t,n);for(let[n,i]of e.children.entries())updateMappings(i,t.children[n])};return updateMappings(n,i),i.name+=`_instance_`+ e.uses[t]++,i}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let i=e(t[n]);if(i)return i}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let i=0;i<t.length;i++){let a=e(t[i]);a&&n.push(a)}return n}getDependency(e,t){let n=e+`:`+t,i=this.cache.get(n);if(!i){switch(e){case`scene`:i=this.loadScene(t);break;case`node`:i=this._invokeOne(function(e){return e.loadNode&&e.loadNode(t)});break;case`mesh`:i=this._invokeOne(function(e){return e.loadMesh&&e.loadMesh(t)});break;case`accessor`:i=this.loadAccessor(t);break;case`bufferView`:i=this._invokeOne(function(e){return e.loadBufferView&&e.loadBufferView(t)});break;case`buffer`:i=this.loadBuffer(t);break;case`material`:i=this._invokeOne(function(e){return e.loadMaterial&&e.loadMaterial(t)});break;case`texture`:i=this._invokeOne(function(e){return e.loadTexture&&e.loadTexture(t)});break;case`skin`:i=this.loadSkin(t);break;case`animation`:i=this._invokeOne(function(e){return e.loadAnimation&&e.loadAnimation(t)});break;case`camera`:i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(n){return n!=this&&n.getDependency&&n.getDependency(e,t)}),!i)throw Error(`Unknown type: `+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,i=this.json[e+(e===`mesh`?`es`:`s`)]||[];t=Promise.all(i.map(function(t,i){return n.getDependency(e,i)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!==`arraybuffer`)throw Error(`THREE.GLTFLoader: `+t.type+` buffer type is not supported.`);if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[$.KHR_BINARY_GLTF].body);let i=this.options;return new Promise(function(e,a){n.load(LoaderUtils.resolveURL(t.uri,i.path),e,void 0,function(){a(Error(`THREE.GLTFLoader: Failed to load buffer "`+t.uri+`".`))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency(`buffer`,t.buffer).then(function(e){let n=t.byteLength||0,i=t.byteOffset||0;return e.slice(i,i+n)})}loadAccessor(e){let t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){let e=ss[i.type],t=is[i.componentType],n=i.normalized===!0,a=new t(i.count*e);return Promise.resolve(new BufferAttribute(a,e,n))}let a=[];return i.bufferView===void 0?a.push(null):a.push(this.getDependency(`bufferView`,i.bufferView)),i.sparse!==void 0&&(a.push(this.getDependency(`bufferView`,i.sparse.indices.bufferView)),a.push(this.getDependency(`bufferView`,i.sparse.values.bufferView))),Promise.all(a).then(function(e){let a=e[0],o=ss[i.type],s=is[i.componentType],c=s.BYTES_PER_ELEMENT,l=c*o,u=i.byteOffset||0,d=i.bufferView===void 0?void 0:n.bufferViews[i.bufferView].byteStride,f=i.normalized===!0,p,m;if(d&&d!==l){let e=Math.floor(u/d),n=`InterleavedBuffer:`+i.bufferView+`:`+i.componentType+`:`+e+`:`+i.count,l=t.cache.get(n);l||(p=new s(a,e*d,i.count*d/c),l=new InterleavedBuffer(p,d/c),t.cache.add(n,l)),m=new rr(l,o,u%d/c,f)}else p=a===null?new s(i.count*o):new s(a,u,i.count*o),m=new BufferAttribute(p,o,f);if(i.sparse!==void 0){let t=ss.SCALAR,n=is[i.sparse.indices.componentType],c=i.sparse.indices.byteOffset||0,l=i.sparse.values.byteOffset||0,u=new n(e[1],c,i.sparse.count*t),d=new s(e[2],l,i.sparse.count*o);a!==null&&(m=new BufferAttribute(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let e=0,t=u.length;e<t;e++){let t=u[e];if(m.setX(t,d[e*o]),o>=2&&m.setY(t,d[e*o+1]),o>=3&&m.setZ(t,d[e*o+2]),o>=4&&m.setW(t,d[e*o+3]),o>=5)throw Error(`THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.`)}m.normalized=f}return m})}loadTexture(e){let t=this.json,n=this.options,i=t.textures[e].source,a=t.images[i],o=this.textureLoader;if(a.uri){let e=n.manager.getHandler(a.uri);e!==null&&(o=e)}return this.loadTextureImage(e,i,o)}loadTextureImage(e,t,n){let i=this,a=this.json,o=a.textures[e],s=a.images[t],c=(s.uri||s.bufferView)+`:`+o.sampler;if(this.textureCache[c])return this.textureCache[c];let l=this.loadImageSource(t,n).then(function(t){t.flipY=!1,t.name=o.name||s.name||``,t.name===``&&typeof s.uri==`string`&&s.uri.startsWith(`data:image/`)===!1&&(t.name=s.uri);let n=(a.samplers||{})[o.sampler]||{};return t.magFilter=as[n.magFilter]||1006,t.minFilter=as[n.minFilter]||1008,t.wrapS=os[n.wrapS]||1e3,t.wrapT=os[n.wrapT]||1e3,t.generateMipmaps=!t.isCompressedTexture&&t.minFilter!==1003&&t.minFilter!==1006,i.associations.set(t,{textures:e}),t}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){let n=this,i=this.json,a=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(e=>e.clone());let o=i.images[e],s=self.URL||self.webkitURL,c=o.uri||``,l=!1;if(o.bufferView!==void 0)c=n.getDependency(`bufferView`,o.bufferView).then(function(e){l=!0;let t=new Blob([e],{type:o.mimeType});return c=s.createObjectURL(t),c});else if(o.uri===void 0)throw Error(`THREE.GLTFLoader: Image `+e+` is missing URI and bufferView`);let u=Promise.resolve(c).then(function(e){return new Promise(function(n,i){let onLoad=n;t.isImageBitmapLoader===!0&&(onLoad=function(e){let t=new It(e);t.needsUpdate=!0,n(t)}),t.load(LoaderUtils.resolveURL(e,a.path),onLoad,void 0,i)})}).then(function(e){return l===!0&&s.revokeObjectURL(c),assignExtrasToUserData(e,o),e.userData.mimeType=o.mimeType||getImageURIMimeType(o.uri),e}).catch(function(e){throw console.error(`THREE.GLTFLoader: Couldn't load texture`,c),e});return this.sourceCache[e]=u,u}assignTexture(e,t,n,i){let a=this;return this.getDependency(`texture`,n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),a.extensions[$.KHR_TEXTURE_TRANSFORM]){let e=n.extensions===void 0?void 0:n.extensions[$.KHR_TEXTURE_TRANSFORM];if(e){let t=a.associations.get(o);o=a.extensions[$.KHR_TEXTURE_TRANSFORM].extendTexture(o,e),a.associations.set(o,t)}}return i!==void 0&&(o.colorSpace=i),e[t]=o,o})}assignFinalMaterial(e){let t=e.geometry,n=e.material,i=t.attributes.tangent===void 0,a=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){let e=`PointsMaterial:`+n.uuid,t=this.cache.get(e);t||(t=new PointsMaterial,Material.prototype.copy.call(t,n),t.color.copy(n.color),t.map=n.map,t.sizeAttenuation=!1,this.cache.add(e,t)),n=t}else if(e.isLine){let e=`LineBasicMaterial:`+n.uuid,t=this.cache.get(e);t||(t=new LineBasicMaterial,Material.prototype.copy.call(t,n),t.color.copy(n.color),t.map=n.map,this.cache.add(e,t)),n=t}if(i||a||o){let e=`ClonedMaterial:`+n.uuid+`:`;i&&(e+=`derivative-tangents:`),a&&(e+=`vertex-colors:`),o&&(e+=`flat-shading:`);let t=this.cache.get(e);t||(t=n.clone(),a&&(t.vertexColors=!0),o&&(t.flatShading=!0),i&&(t.normalScale&&(t.normalScale.y*=-1),t.clearcoatNormalScale&&(t.clearcoatNormalScale.y*=-1)),this.cache.add(e,t),this.associations.set(t,this.associations.get(n))),n=t}e.material=n}getMaterialType(){return MeshStandardMaterial}loadMaterial(e){let t=this,n=this.json,i=this.extensions,a=n.materials[e],o,s={},c=a.extensions||{},l=[];if(c[$.KHR_MATERIALS_UNLIT]){let e=i[$.KHR_MATERIALS_UNLIT];o=e.getMaterialType(),l.push(e.extendParams(s,a,t))}else{let n=a.pbrMetallicRoughness||{};if(s.color=new Color$1(1,1,1),s.opacity=1,Array.isArray(n.baseColorFactor)){let e=n.baseColorFactor;s.color.setRGB(e[0],e[1],e[2],pt),s.opacity=e[3]}n.baseColorTexture!==void 0&&l.push(t.assignTexture(s,`map`,n.baseColorTexture,ft)),s.metalness=n.metallicFactor===void 0?1:n.metallicFactor,s.roughness=n.roughnessFactor===void 0?1:n.roughnessFactor,n.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(s,`metalnessMap`,n.metallicRoughnessTexture)),l.push(t.assignTexture(s,`roughnessMap`,n.metallicRoughnessTexture))),o=this._invokeOne(function(t){return t.getMaterialType&&t.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(t){return t.extendMaterialParams&&t.extendMaterialParams(e,s)})))}a.doubleSided===!0&&(s.side=2);let u=a.alphaMode||ds.OPAQUE;if(u===ds.BLEND?(s.transparent=!0,s.depthWrite=!1):(s.transparent=!1,u===ds.MASK&&(s.alphaTest=a.alphaCutoff===void 0?.5:a.alphaCutoff)),a.normalTexture!==void 0&&o!==MeshBasicMaterial&&(l.push(t.assignTexture(s,`normalMap`,a.normalTexture)),s.normalScale=new B(1,1),a.normalTexture.scale!==void 0)){let e=a.normalTexture.scale;s.normalScale.set(e,e)}if(a.occlusionTexture!==void 0&&o!==MeshBasicMaterial&&(l.push(t.assignTexture(s,`aoMap`,a.occlusionTexture)),a.occlusionTexture.strength!==void 0&&(s.aoMapIntensity=a.occlusionTexture.strength)),a.emissiveFactor!==void 0&&o!==MeshBasicMaterial){let e=a.emissiveFactor;s.emissive=new Color$1().setRGB(e[0],e[1],e[2],pt)}return a.emissiveTexture!==void 0&&o!==MeshBasicMaterial&&l.push(t.assignTexture(s,`emissiveMap`,a.emissiveTexture,ft)),Promise.all(l).then(function(){let n=new o(s);return a.name&&(n.name=a.name),assignExtrasToUserData(n,a),t.associations.set(n,{materials:e}),a.extensions&&addUnknownExtensionsToUserData(i,n,a),n})}createUniqueName(e){let t=K.sanitizeNodeName(e||``);return t in this.nodeNamesUsed?t+`_`+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,i=this.primitiveCache;function createDracoPrimitive(e){return n[$.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(e,t).then(function(n){return addPrimitiveAttributes(n,e,t)})}let a=[];for(let n=0,o=e.length;n<o;n++){let o=e[n],s=createPrimitiveKey(o),c=i[s];if(c)a.push(c.promise);else{let e;e=o.extensions&&o.extensions[$.KHR_DRACO_MESH_COMPRESSION]?createDracoPrimitive(o):addPrimitiveAttributes(new tr,o,t),i[s]={primitive:o,promise:e},a.push(e)}}return Promise.all(a)}loadMesh(e){let t=this,n=this.json,i=this.extensions,a=n.meshes[e],o=a.primitives,s=[];for(let e=0,t=o.length;e<t;e++){let t=o[e].material===void 0?createDefaultMaterial(this.cache):this.getDependency(`material`,o[e].material);s.push(t)}return s.push(t.loadGeometries(o)),Promise.all(s).then(function(n){let s=n.slice(0,n.length-1),c=n[n.length-1],l=[];for(let n=0,u=c.length;n<u;n++){let u=c[n],d=o[n],f,p=s[n];if(d.mode===rs.TRIANGLES||d.mode===rs.TRIANGLE_STRIP||d.mode===rs.TRIANGLE_FAN||d.mode===void 0)f=a.isSkinnedMesh===!0?new SkinnedMesh(u,p):new Mesh(u,p),f.isSkinnedMesh===!0&&f.normalizeSkinWeights(),d.mode===rs.TRIANGLE_STRIP?f.geometry=toTrianglesDrawMode(f.geometry,1):d.mode===rs.TRIANGLE_FAN&&(f.geometry=toTrianglesDrawMode(f.geometry,2));else if(d.mode===rs.LINES)f=new LineSegments(u,p);else if(d.mode===rs.LINE_STRIP)f=new Line(u,p);else if(d.mode===rs.LINE_LOOP)f=new LineLoop(u,p);else if(d.mode===rs.POINTS)f=new Points(u,p);else throw Error(`THREE.GLTFLoader: Primitive mode unsupported: `+d.mode);Object.keys(f.geometry.morphAttributes).length>0&&updateMorphTargets(f,a),f.name=t.createUniqueName(a.name||`mesh_`+e),assignExtrasToUserData(f,a),d.extensions&&addUnknownExtensionsToUserData(i,f,d),t.assignFinalMaterial(f),l.push(f)}for(let n=0,i=l.length;n<i;n++)t.associations.set(l[n],{meshes:e,primitives:n});if(l.length===1)return a.extensions&&addUnknownExtensionsToUserData(i,l[0],a),l[0];let u=new Group$1;a.extensions&&addUnknownExtensionsToUserData(i,u,a),t.associations.set(u,{meshes:e});for(let e=0,t=l.length;e<t;e++)u.add(l[e]);return u})}loadCamera(e){let t,n=this.json.cameras[e],i=n[n.type];if(!i){console.warn(`THREE.GLTFLoader: Missing camera parameters.`);return}return n.type===`perspective`?t=new PerspectiveCamera(Et.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type===`orthographic`&&(t=new OrthographicCamera(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),assignExtrasToUserData(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let e=0,i=t.joints.length;e<i;e++)n.push(this._loadNodeShallow(t.joints[e]));return t.inverseBindMatrices===void 0?n.push(null):n.push(this.getDependency(`accessor`,t.inverseBindMatrices)),Promise.all(n).then(function(e){let n=e.pop(),i=e,a=[],o=[];for(let e=0,s=i.length;e<s;e++){let s=i[e];if(s){a.push(s);let t=new G;n!==null&&t.fromArray(n.array,e*16),o.push(t)}else console.warn(`THREE.GLTFLoader: Joint "%s" could not be found.`,t.joints[e])}return new Pr(a,o)})}loadAnimation(e){let t=this.json,n=this,i=t.animations[e],a=i.name?i.name:`animation_`+e,o=[],s=[],c=[],l=[],u=[];for(let e=0,t=i.channels.length;e<t;e++){let t=i.channels[e],n=i.samplers[t.sampler],a=t.target,d=a.node,f=i.parameters===void 0?n.input:i.parameters[n.input],p=i.parameters===void 0?n.output:i.parameters[n.output];a.node!==void 0&&(o.push(this.getDependency(`node`,d)),s.push(this.getDependency(`accessor`,f)),c.push(this.getDependency(`accessor`,p)),l.push(n),u.push(a))}return Promise.all([Promise.all(o),Promise.all(s),Promise.all(c),Promise.all(l),Promise.all(u)]).then(function(e){let t=e[0],o=e[1],s=e[2],c=e[3],l=e[4],u=[];for(let e=0,i=t.length;e<i;e++){let i=t[e],a=o[e],d=s[e],f=c[e],p=l[e];if(i===void 0)continue;i.updateMatrix&&i.updateMatrix();let m=n._createAnimationTracks(i,a,d,f,p);if(m)for(let e=0;e<m.length;e++)u.push(m[e])}let d=new AnimationClip(a,void 0,u);return assignExtrasToUserData(d,i),d})}createNodeMesh(e){let t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency(`mesh`,i.mesh).then(function(e){let t=n._getNodeRef(n.meshCache,i.mesh,e);return i.weights!==void 0&&t.traverse(function(e){if(e.isMesh)for(let t=0,n=i.weights.length;t<n;t++)e.morphTargetInfluences[t]=i.weights[t]}),t})}loadNode(e){let t=this.json,n=this,i=t.nodes[e],a=n._loadNodeShallow(e),o=[],s=i.children||[];for(let e=0,t=s.length;e<t;e++)o.push(n.getDependency(`node`,s[e]));let c=i.skin===void 0?Promise.resolve(null):n.getDependency(`skin`,i.skin);return Promise.all([a,Promise.all(o),c]).then(function(e){let t=e[0],n=e[1],i=e[2];i!==null&&t.traverse(function(e){e.isSkinnedMesh&&e.bind(i,fs)});for(let e=0,i=n.length;e<i;e++)t.add(n[e]);if(t.userData.pivot!==void 0&&n.length>0){let e=t.userData.pivot,i=n[0];t.pivot=new V().fromArray(e),t.position.x-=e[0],t.position.y-=e[1],t.position.z-=e[2],i.position.set(0,0,0),delete t.userData.pivot}return t})}_loadNodeShallow(e){let t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let a=t.nodes[e],o=a.name?i.createUniqueName(a.name):``,s=[],c=i._invokeOne(function(t){return t.createNodeMesh&&t.createNodeMesh(e)});return c&&s.push(c),a.camera!==void 0&&s.push(i.getDependency(`camera`,a.camera).then(function(e){return i._getNodeRef(i.cameraCache,a.camera,e)})),i._invokeAll(function(t){return t.createNodeAttachment&&t.createNodeAttachment(e)}).forEach(function(e){s.push(e)}),this.nodeCache[e]=Promise.all(s).then(function(t){let s;if(s=a.isBone===!0?new Bone:t.length>1?new Group$1:t.length===1?t[0]:new ln,s!==t[0])for(let e=0,n=t.length;e<n;e++)s.add(t[e]);if(a.name&&(s.userData.name=a.name,s.name=o),assignExtrasToUserData(s,a),a.extensions&&addUnknownExtensionsToUserData(n,s,a),a.matrix!==void 0){let e=new G;e.fromArray(a.matrix),s.applyMatrix4(e)}else a.translation!==void 0&&s.position.fromArray(a.translation),a.rotation!==void 0&&s.quaternion.fromArray(a.rotation),a.scale!==void 0&&s.scale.fromArray(a.scale);if(!i.associations.has(s))i.associations.set(s,{});else if(a.mesh!==void 0&&i.meshCache.refs[a.mesh]>1){let e=i.associations.get(s);i.associations.set(s,{...e})}return i.associations.get(s).nodes=e,s}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],i=this,a=new Group$1;n.name&&(a.name=i.createUniqueName(n.name)),assignExtrasToUserData(a,n),n.extensions&&addUnknownExtensionsToUserData(t,a,n);let o=n.nodes||[],s=[];for(let e=0,t=o.length;e<t;e++)s.push(i.getDependency(`node`,o[e]));return Promise.all(s).then(function(e){for(let t=0,n=e.length;t<n;t++){let n=e[t];n.parent===null?a.add(n):a.add(clone(n))}let reduceAssociations=e=>{let t=new Map;for(let[e,n]of i.associations)(e instanceof Material||e instanceof It)&&t.set(e,n);return e.traverse(e=>{let n=i.associations.get(e);n!=null&&t.set(e,n)}),t};return i.associations=reduceAssociations(a),a})}_createAnimationTracks(e,t,n,i,a){let o=[],s=e.name?e.name:e.uuid,c=[];ls[a.path]===ls.weights?e.traverse(function(e){e.morphTargetInfluences&&c.push(e.name?e.name:e.uuid)}):c.push(s);let l;switch(ls[a.path]){case ls.weights:l=NumberKeyframeTrack;break;case ls.rotation:l=QuaternionKeyframeTrack;break;case ls.translation:case ls.scale:l=VectorKeyframeTrack;break;default:switch(n.itemSize){case 1:l=NumberKeyframeTrack;break;default:l=VectorKeyframeTrack;break}break}let u=i.interpolation===void 0?it:us[i.interpolation],d=this._getArrayFromAccessor(n);for(let e=0,n=c.length;e<n;e++){let n=new l(c[e]+`.`+ls[a.path],t.array,d,u);i.interpolation===`CUBICSPLINE`&&this._createCubicSplineTrackInterpolant(n),o.push(n)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let e=getNormalizedComponentScale(t.constructor),n=new Float32Array(t.length);for(let i=0,a=t.length;i<a;i++)n[i]=t[i]*e;t=n}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function InterpolantFactoryMethodGLTFCubicSpline(e){return new(this instanceof QuaternionKeyframeTrack?GLTFCubicSplineQuaternionInterpolant:GLTFCubicSplineInterpolant)(this.times,this.values,this.getValueSize()/3,e)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function computeBounds(e,t,n){let i=t.attributes,a=new Box3;if(i.POSITION!==void 0){let e=n.json.accessors[i.POSITION],t=e.min,o=e.max;if(t!==void 0&&o!==void 0){if(a.set(new V(t[0],t[1],t[2]),new V(o[0],o[1],o[2])),e.normalized){let t=getNormalizedComponentScale(is[e.componentType]);a.min.multiplyScalar(t),a.max.multiplyScalar(t)}}else{console.warn(`THREE.GLTFLoader: Missing min/max properties for accessor POSITION.`);return}}else return;let o=t.targets;if(o!==void 0){let e=new V,t=new V;for(let i=0,a=o.length;i<a;i++){let a=o[i];if(a.POSITION!==void 0){let i=n.json.accessors[a.POSITION],o=i.min,s=i.max;if(o!==void 0&&s!==void 0){if(t.setX(Math.max(Math.abs(o[0]),Math.abs(s[0]))),t.setY(Math.max(Math.abs(o[1]),Math.abs(s[1]))),t.setZ(Math.max(Math.abs(o[2]),Math.abs(s[2]))),i.normalized){let e=getNormalizedComponentScale(is[i.componentType]);t.multiplyScalar(e)}e.max(t)}else console.warn(`THREE.GLTFLoader: Missing min/max properties for accessor POSITION.`)}}a.expandByVector(e)}e.boundingBox=a;let s=new Sphere;a.getCenter(s.center),s.radius=a.min.distanceTo(a.max)/2,e.boundingSphere=s}function addPrimitiveAttributes(e,t,n){let i=t.attributes,a=[];function assignAttributeAccessor(t,i){return n.getDependency(`accessor`,t).then(function(t){e.setAttribute(i,t)})}for(let t in i){let n=cs[t]||t.toLowerCase();n in e.attributes||a.push(assignAttributeAccessor(i[t],n))}if(t.indices!==void 0&&!e.index){let i=n.getDependency(`accessor`,t.indices).then(function(t){e.setIndex(t)});a.push(i)}return U.workingColorSpace!==`srgb-linear`&&`COLOR_0`in i&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${U.workingColorSpace}" not supported.`),assignExtrasToUserData(e,t),computeBounds(e,t,n),Promise.all(a).then(function(){return t.targets===void 0?e:addMorphTargets(e,t.targets,n)})}var ps=class Logger{constructor(){return this.prefix=`LOGGER:`,Logger.instance===void 0&&(Logger.instance=this),Logger.instance}static getInstance(){return new Logger}logInfo(e,...t){console.info(this.prefix,`[INFO]`,e,...t)}logWarning(e,...t){console.warn(this.prefix,`[WARN]`,e,...t)}logError(e,...t){console.error(this.prefix,`[ERROR]`,e,...t)}},ms=class GltfLoader{constructor(){return this.loader=new GLTFLoader,GltfLoader.instance??=this,GltfLoader.instance}async loadFile(e){try{return(await this.loader.loadAsync(e)).scene}catch(t){throw ps.getInstance().logError(`Failed to load glTF file`,e,`
`,t),t}}},hs=[{lat:33,lng:-77,rotation:30,landHeight:Y.LevelOne},{scale:1.5,lat:30,lng:-72,landHeight:Y.LevelOne},{scale:1.2,lat:26,lng:-68,landHeight:Y.LevelOne},{lat:26,lng:-73,rotation:60,landHeight:Y.LevelOne},{scale:.8,lat:31,lng:-67,landHeight:Y.LevelOne},{scale:1,lat:12,lng:-79,landHeight:Y.LevelTwo},{scale:1.2,lat:13,lng:-83,landHeight:Y.LevelTwo}],gs=[{lat:21,lng:-83,rotation:65,landHeight:Y.LevelTwo,floors:2},{lat:16,lng:-73,rotation:65,landHeight:Y.LevelTwo}],_s=[{scale:.7,lat:-1,lng:-78,landHeight:Y.LevelOne},{lat:1,lng:-84,landHeight:Y.LevelOne},{lat:7,lng:-94,landHeight:Y.LevelOne}],WorkContinent$1=class extends BaseContinent{static{__name(this,`WorkContinent`)}constructContinent(){let e=new Group$1;return e.name=`workContinent`,e.add(this.constructTrees(`workTrees`,hs)),e.add(this.constructBuildings(`workBuildings`,gs)),e.add(this.constructHuts(`workHuts`,_s)),e}},vs=[{scale:1.1,size:20,lat:-29,lng:-142,rotation:70,height:15,landHeight:Y.LevelOne-2}],ys=[{scale:1.2,lat:-11,lng:-158,landHeight:Y.LevelOne},{lat:-16,lng:-158,landHeight:Y.LevelOne},{scale:1.3,lat:-21,lng:-172,rotation:10,landHeight:Y.LevelTwo},{scale:1.1,lat:-23,lng:-168,rotation:60,landHeight:Y.LevelTwo},{lat:-21,lng:-177,rotation:30,landHeight:Y.LevelTwo},{scale:1.2,lat:-25,lng:-174,landHeight:Y.LevelTwo},{scale:1.5,lat:-50,lng:-142,landHeight:Y.LevelOne},{scale:1.2,lat:-46,lng:-137,rotation:60,landHeight:Y.LevelOne},{lat:-45,lng:-144,rotation:15,landHeight:Y.LevelOne}],bs=[{lat:-16,lng:-153,rotation:20,landHeight:Y.LevelOne},{scale:.8,lat:-14,lng:-163,rotation:45,landHeight:Y.LevelOne}],xs=[{scale:1,lat:-37,lng:-164,rotation:30,landHeight:Y.LevelTwo},{scale:.7,lat:-30,lng:-168,rotation:30,landHeight:Y.LevelTwo}],LifeContinent$1=class extends BaseContinent{static{__name(this,`LifeContinent`)}constructContinent(){let e=new Group$1;return e.name=`lifeContinent`,e.add(this.constructMountains(`lifeMountains`,vs)),e.add(this.constructTrees(`lifeTrees`,ys)),e.add(this.constructHouses(`lifeHouses`,bs)),e.add(this.constructBuildings(`lifeBuildings`,xs)),e}},Ss=[{scale:1.2,lat:222,lng:-157,landHeight:Y.LevelTwo},{lat:225,lng:-159,landHeight:Y.LevelTwo},{scale:1.3,lat:-126,lng:-132,landHeight:Y.LevelOne},{lat:-128,lng:-165,landHeight:Y.LevelOne},{scale:.9,lat:-125,lng:-161,rotation:45,landHeight:Y.LevelOne}],Cs=[{scale:1,lat:-140,lng:-167,rotation:120,landHeight:Y.LevelTwo}],ws=[{scale:1,lat:-133,lng:-147,rotation:70,landHeight:Y.LevelTwo,floors:2}],Ts=[{lat:-50,lng:-5,landHeight:Y.LevelOne}],ConnectContinent$1=class extends BaseContinent{static{__name(this,`ConnectContinent`)}constructContinent(){let e=new Group$1;return e.name=`connectContinent`,e.add(this.constructTrees(`connectTrees`,Ss)),e.add(this.constructHouses(`connectHouses`,Cs)),e.add(this.constructBuildings(`connectBuildings`,ws)),e.add(this.constructHuts(`connectHuts`,Ts)),e}},Galaxy=class extends BaseObject{constructObject(){let{starsCount:e,endRadius:t=3e3}=this.properties,n=new Group$1;n.name=`galaxy`;for(let i=0;i<4;i++){let i=this.constructStarsGroup(e/4,t);n.add(i)}return n}constructStarsGroup(e,t){let n=new tr;n.setAttribute(`position`,this.constructStarsPositions(e,t));let i=new Points(n,new PointsMaterial({color:ro.star,size:5,map:this.createStarTexture(),transparent:!0,depthWrite:!1}));return i.name=`stars`,i}constructStarsPositions(e,t=3e3){let n=(this.properties.startRadius??700)+50,i=[];for(let a=0;a<e;a++){let e=new V;e.randomDirection(),e.multiplyScalar(Et.randFloat(n,t/2)),i.push(e.x,e.y,e.z)}return new Float32BufferAttribute(i,3)}createStarTexture(){let e=document.createElement(`canvas`);e.width=e.height=128;let t=e.getContext(`2d`);t.beginPath(),t.arc(64,64,128/2,0,2*Math.PI,!1),t.closePath(),t.fillStyle=`#ffffff`,t.fill();let n=new It(e);return n.needsUpdate=!0,n}animateGalaxy(e){let t=this.object.children,animateStarsGroup=(t,n=1)=>{let i={y:t.rotation.y+.02*n},a=e.createTween(t.rotation,i,{duration:1e3});a.start(),a.onComplete(()=>{e.removeTween(a),animateStarsGroup(t,n)})};for(let e=0;e<t.length;e++)animateStarsGroup(t[e],e%2==0?1:-1)}},enableParallax=(e,t=.1,n=document.body,i=.06)=>{let a,o=new B,animate=()=>{let{x:t,y:n}=e.position,{x:s,y:c}=o,l=areNearlyEqual(t,s),u=areNearlyEqual(n,c);if(l&&u){cancelAnimationFrame(a);return}e.position.x=linearlyInterpolate(t,s,i),e.position.y=linearlyInterpolate(n,c,i),a=requestAnimationFrame(animate)};n.addEventListener(`mousemove`,e=>{cancelAnimationFrame(a);let i=n.clientWidth/2,s=n.clientHeight/2;o.x=-(e.clientX-i)*t,o.y=(e.clientY-s)*t,a=requestAnimationFrame(animate)})},enableParallaxMobile=(e,t=.1,n=.06)=>{if(!(`ondeviceorientation`in window))return;let i,a=new B,animate=()=>{let{x:t,y:o}=e.position,{x:s,y:c}=a,l=areNearlyEqual(t,s),u=areNearlyEqual(o,c);if(l&&u){cancelAnimationFrame(i);return}e.position.x=linearlyInterpolate(t,s,n),e.position.y=linearlyInterpolate(o,c,n),i=requestAnimationFrame(animate)};window.addEventListener(`deviceorientation`,e=>{cancelAnimationFrame(i);let{beta:n,gamma:o}=e;!o||!n||!(n>=0&&n<=90)||(a.x=o*100*t,a.y=-((n-45)*150)*t,i=requestAnimationFrame(animate))})},linearlyInterpolate=(e,t,n)=>(1-n)*e+n*t,areNearlyEqual=(e,t,n=1e-4)=>Math.abs(t-e)<n,isScreenPortrait=()=>window.innerHeight>window.innerWidth,Es={cameraDistanceUpContinent:100,cameraDistanceToContinent:300,cameraRotation:0,cameraLeftSpace:0,cameraTopSpace:65},Ds={cameraDistanceUpContinent:100,cameraDistanceToContinent:150,cameraRotation:30,cameraLeftSpace:50,cameraTopSpace:0},ContinentInteractor=class{constructor(e,t,n){this.three=e,this.sun=n,this.cameraAnimationOptions={duration:2e3,easing:Xa.Cubic.Out},this.onContinentClickCallbacks=[],this.continentObject=t.getObject(),this.continentShadowRoot=document.querySelector(`mp-${camelCaseToKebabCase(this.continentObject.name)}`)?.shadowRoot}setupEventHandlers(){this.setupContinentClick(),this.setupContinentMouseOver()}setupContinentClick(){this.three.getSelector().onClick(this.continentObject,()=>{this.onContinentClickCallbacks.forEach(e=>e())})}setupContinentMouseOver(){let e=this.three.getSelector(),t=this.three.getEventHandler(),updateContinentPinPosition=()=>this.updateContinentPinPosition();e.onMouseOver(this.continentObject,()=>{updateContinentPinPosition(),this.onContinentMouseOver(),t.onObjectMove(this.continentObject,updateContinentPinPosition)}),e.onMouseOut(this.continentObject,()=>{this.onContinentMouseOut(),t.removeObjectMoveListener(this.continentObject,updateContinentPinPosition)})}onContinentClick(e){this.onContinentClickCallbacks.push(e)}openContinent(){this.handleContinentClick()}handleContinentClick(){if(this.isContinentInfoOpen()||this.isAnyContinentInfoOpening())return;let e=getObjectCenter(this.continentObject),t=getDirectionBetweenVectors(new V(0,0,0),e),n=this.three.getControls();n.getSpinControls().trackballRadius=50,n.setRotationAxis(t);let i=this.getContinentCameraTransform(t,e),a=this.three.getControls().getCamera(),o=this.three.getAnimator();[a,this.sun].forEach(e=>{o.animateObjectToTarget(e,i.position,i.quaternion,this.cameraAnimationOptions)}),this.openContinentInfo(this.cameraAnimationOptions.duration/2)}openContinentInfo(e){document.querySelector(`mp-continents > *[open]`)?.removeAttribute(`open`);let t=this.continentShadowRoot.host;t?.setAttribute(`opening`,``),setTimeout(()=>{t?.setAttribute(`open`,``),t?.removeAttribute(`opening`)},e)}isContinentInfoOpen(){return this.getContinentInfo().hasAttribute(`open`)??!1}isAnyContinentInfoOpening(){return!!document.querySelector(`mp-continents > *[opening]`)}getContinentCameraTransform(e,t){let{cameraDistanceUpContinent:n,cameraDistanceToContinent:i,cameraRotation:a,cameraLeftSpace:o,cameraTopSpace:s}=isScreenPortrait()?Es:Ds,c=new ln;c.lookAt(e),c.position.copy(t),c.translateZ(n).translateX(i),c.lookAt(t);let l=getObjectDirection(c),u=new V().copy(e).applyAxisAngle(l,Et.degToRad(a)),d=new Quaternion().setFromRotationMatrix(new G().lookAt(c.position,t,u));return c.quaternion.copy(d),c.translateX(-o),c.translateY(s),{position:c.position,quaternion:c.quaternion}}onContinentMouseOver(){if(this.isContinentInfoOpen()||this.isAnyContinentInfoOpening())return;let e=this.three.getRenderer().getCanvas(),t=this.getContinentPinElement();e.classList.add(`has-pointer`),t.setAttribute(`mouseover`,``)}onContinentMouseOut(){let e=this.getContinentPinElement(),t=this.three.getRenderer().getCanvas();e.removeAttribute(`mouseover`),t.classList.remove(`has-pointer`)}updateContinentPinPosition(){let e=this.three.getRenderer().getCanvas(),t=this.three.getControls().getCamera(),n=getObjectCenter(this.continentObject),i=getDirectionBetweenVectors(new V(0,0,0),n);n.add(i.clone().multiplyScalar(-5));let{x:a,y:o}=getObjectPositionOnScreen(n,t,e);this.getContinentPinElement().style.setProperty(`transform`,`translate(-50%, -50%) translate(${a}px, ${o}px)`)}getContinentPinElement(){return this.continentShadowRoot.querySelector(`mp-continent-pin`)}getContinentInfo(){return this.continentShadowRoot.querySelector(`mp-continent-info`)}},Os=new V(0,0,450),ks=new V(0,0,800),As=`https://fawadali.dev/assets/geometries/continents.gltf`,js=class Planet$1{static{__name(this,`Planet`)}constructor(e){this.onLoadCallbacks=[],this.continents={},this.cameraAnimationOptions={duration:2e3,easing:Xa.Cubic.Out},this.three=new Three(e),this.setupDefaultCameraConfig(),this.initializePlanet().then(()=>{this.onLoadCallbacks.forEach(e=>e(this))})}static build(e){return new Planet$1(e)}async initializePlanet(){let e=this.three.getSelector(),t=this.three.getControls().getCamera(),n=this.three.getScene(),i=new Sun({size:10});i.setPosition(t.position),i.addTo(n),this.sun=i;let a=new Group$1;enableParallax(a,.0075),enableParallaxMobile(a,.0075),a.name=`planet`,n.add(a);let o=new Globe({size:100});o.addTo(a);let s=o.getRadius();e.intersectButIgnoreObject(o.getObject()),this.three.getControls().setSpinControlsObject(a,s);let c=t.position.z,l=t.far,u=new Galaxy({starsCount:1e3,startRadius:c,endRadius:l});u.animateGalaxy(this.getAnimator()),enableParallax(u.getObject(),.075),u.addTo(n);let d=new Clouds({cloudsCount:5,orbitRadius:s+40,baseCloudSize:15});d.animateClouds(this.getAnimator()),d.addTo(a);let f=await this.loadContinentsLand(),p=[new AboutContinent$1({globeRadius:s}),new ProjectsContinent$1({globeRadius:s}),new WorkContinent$1({globeRadius:s}),new LifeContinent$1({globeRadius:s}),new ConnectContinent$1({globeRadius:s})];for(let e of p){let t=e.getObject(),n=f[t.name];n.name+=`Land`,t.add(n),e.addTo(a);let i=new ContinentInteractor(this.three,e,this.sun.getObject());i.setupEventHandlers(),this.continents[t.name]={continent:e,continentInteractor:i}}}resetControls(){let e=this.three.getControls(),t=this.three.getAnimator(),n=e.getDefaultCameraState();e.resetSpinControls(),[e.getCamera(),this.sun.getObject()].forEach(e=>{t.animateObjectToTarget(e,n.position,n.quaternion,this.cameraAnimationOptions)})}setupDefaultCameraConfig(){let e=this.three.getControls().getCamera(),t=this.three.getControls().getDefaultCameraState(),n=this.getCameraConfigForScreen();e.position.copy(n),t.position.copy(n),window.addEventListener(`resize`,()=>{t.position.copy(this.getCameraConfigForScreen())})}onLoad(e){this.onLoadCallbacks.push(e)}getScene(){return this.three.getScene()}getAnimator(){return this.three.getAnimator()}getContinents(){return this.continents}async loadContinentsLand(){let e=await new ms().loadFile(As),t={};for(let n of e.children)t[n.name]=n;return t}getCameraConfigForScreen(){return isScreenPortrait()?ks:Os}},Router=class{constructor(){this.historyStack=[],this.routeHandlers={}}initialize(){this.setupDOMEvents()}setFallbackRoute(e){this.fallbackRoute=e}addRoute(e,t){this.routeHandlers[e]=t}to(e){this.runRouteHandler(e,()=>{window.history.pushState(null,``,this.prependBaseURL(e)),this.historyStack.push(e)})}replace(e){this.runRouteHandler(e,()=>{window.history.replaceState(null,``,this.prependBaseURL(e)),this.historyStack.length>0&&(this.historyStack[this.historyStack.length-1]=e)})}back(){window.history.back(),this.historyStack.pop()}getCurrentRoute(){return this.historyStack[this.historyStack.length-1]}runRouteHandler(e,t){if(this.routeHandlers[e]){this.routeHandlers[e](),t?.();return}ps.getInstance().logError(`No route defined for the path "${e}".`),this.fallbackRoute&&(this.replace(this.fallbackRoute),ps.getInstance().logWarning(`Using fallback route "${e}".`))}},Ms=class HashRouter extends Router{constructor(){return super(),HashRouter.instance===void 0&&(HashRouter.instance=this),HashRouter.instance}static getInstance(){return new HashRouter}setupDOMEvents(){let e=this.getRouteFromHash();document.readyState===`complete`?this.replace(e):window.addEventListener(`load`,()=>this.replace(e)),window.addEventListener(`hashchange`,()=>{this.runRouteHandler(this.getRouteFromHash())})}prependBaseURL(e){return`https://fawadali.dev/#${e}`}getRouteFromHash(){let e=window.location.hash.slice(1);return e===``?`/`:e}},Ns=`<main class="planet">
  <canvas id="planet-canvas"></canvas>
</main>
`,Ps=`.planet {
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
`,Fs=class Planet extends Component{constructor(...e){super(...e),this.router=Ms.getInstance()}onInit(){let e=this.shadowDOM.querySelector(`#planet-canvas`);window.planet=js.build({canvasElement:e}),this.closeContinentOnEscape(),window.planet.onLoad(()=>{this.router.addRoute(`/`,()=>this.closeOpenContinent()),this.setupContinentsRouting()})}closeOpenContinent(){window.planet.resetControls(),document.querySelector(`mp-continents > *[open]`)?.removeAttribute(`open`)}closeContinentOnEscape(){document.addEventListener(`keydown`,e=>{let t=!!document.querySelector(`mp-continents > *[open]`);e.key!==`Escape`||!t||this.router.to(`/`)})}setupContinentsRouting(){let e=window.planet.getContinents(),t=document.querySelector(`mp-planet-splash`);for(let n in e){let i=camelCaseToKebabCase(`/${n}`);this.router.addRoute(i,()=>{e[n].continentInteractor.openContinent(),t?.hasAttribute(`closed`)||setTimeout(()=>{(t?.shadowRoot?.firstChild).click()})}),e[n].continentInteractor.onContinentClick(()=>this.router.to(i))}this.router.setFallbackRoute(`/`),this.router.initialize()}};Fs=__decorate([template(Ns),styles(Ps)],Fs),registerComponent(Fs);var Is=`https://fawadali.dev/assets/./planet-icon-01.ico`,Ls=`https://fawadali.dev/assets/./planet-icon-02.ico`,Rs=`https://fawadali.dev/assets/./planet-icon-03.ico`,zs=`https://fawadali.dev/assets/./planet-icon-04.ico`,Bs=`https://fawadali.dev/assets/./planet-icon-05.ico`,Vs=`https://fawadali.dev/assets/./planet-icon-06.ico`,Hs=`https://fawadali.dev/assets/./planet-icon-07.ico`,Us=`https://fawadali.dev/assets/./planet-icon-08.ico`,Ws=`https://fawadali.dev/assets/./planet-icon-09.ico`,Gs=`https://fawadali.dev/assets/./planet-icon-10.ico`,Ks=`https://fawadali.dev/assets/./planet-icon-11.ico`,qs=__exportAll({planetFavicon01:()=>Is,planetFavicon02:()=>Ls,planetFavicon03:()=>Rs,planetFavicon04:()=>zs,planetFavicon05:()=>Bs,planetFavicon06:()=>Vs,planetFavicon07:()=>Hs,planetFavicon08:()=>Us,planetFavicon09:()=>Ws,planetFavicon10:()=>Gs,planetFavicon11:()=>Ks}),PlanetFavicon=class extends Component{constructor(...e){super(...e),this.frameDelay=600}onInit(){this.animateFavicon()}animateFavicon(){let e=document.head.querySelector(`link[rel="icon"]`),t=Object.values(qs),n=0;setInterval(()=>{e.href=t[n++],n===t.length&&(n=0)},this.frameDelay)}};registerComponent(PlanetFavicon);var Js=`<header
  class="planet-splash"
  on:click="this.onHeaderClick"
  on:mouseover="this.onMouseOver"
  on:mouseout="this.onMouseOut"
>
  <mp-heading level="h1" class="planet-splash-title">My Planet</mp-heading>
  <mp-arrow-button :enterButton>Enter</mp-arrow-button>
</header>
`,Ys=`:host {
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
`,Xs=class PlanetSplash extends Component{onInit(){window.planet.onLoad(()=>{this.planetObject=window.planet.getScene().getObjectByName(`planet`),this.planetObject?.scale.setScalar(.5),document.body.removeAttribute(`loading`)})}onHeaderClick(){if(!this.planetObject)return;let e=new V().setScalar(1),t=window.planet.getAnimator().createTween(this.planetObject.scale,e,{duration:2e3,easing:Xa.Quintic.Out});this.setAttribute(`closed`,``),t.start()}onMouseOver(){this.getElement(`enterButton`)?.setAttribute(`active`,``)}onMouseOut(){this.getElement(`enterButton`)?.removeAttribute(`active`)}};Xs=__decorate([template(Js),styles(Ys)],Xs),registerComponent(Xs);var Zs=`<mp-backdrop :backdrop on:click="this.onMenuToggleClick">
  <mp-circle-button
    class="continents-menu-toggle"
    on:click="this.onMenuToggleClick"
    icon="compass"
    tooltip-position="right"
  >
    Navigate
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
`,Qs=`:host {
  --primary-color: currentColor;
  --secondary-color: currentColor;

  position: fixed;
  top: 1rem;
  left: 1rem;
  z-index: var(--layer-front);
}

.continents-menu-toggle {
  position: absolute;
  transition: all 0.5s;
}

.continents-menu-toggle:hover::part(icon) {
  transform: rotateZ(90deg);
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
  pointer-events: none;
}

:host([open]) > mp-backdrop > .continents-menu-options > mp-circle-button {
  visibility: visible;
  opacity: 1;
  pointer-events: auto;
}
`,$s=class ContinentsMenu extends Component{constructor(...e){super(...e),this.router=Ms.getInstance(),this.radius=8,this.startAngle=0,this.rotationAngle=90}onInit(){let e=this.constructMenuOptionsStyles(),t=new CSSStyleSheet;t.replaceSync(e),this.shadowDOM.adoptedStyleSheets.push(t)}onMenuToggleClick(e){e.stopPropagation(),this.hasAttribute(`open`)?(this.removeAttribute(`open`),this.getElement(`backdrop`)?.removeAttribute(`active`)):(this.setAttribute(`open`,``),this.getElement(`backdrop`)?.setAttribute(`active`,``))}onBackDropClick(){this.removeAttribute(`open`),this.getElement(`backdrop`)?.removeAttribute(`active`)}getMenuItemClickListener(e){return()=>this.router.to(e)}constructMenuOptionsStyles(){let e=[...this.getElement(`continentsMenuOptions`)?.children??[]],t=e.length-1,n=this.startAngle+this.rotationAngle/t;return e.reduce((e,t,i)=>{let a=this.getMenuItemSelector(i);return e+=`${a} {
        transform: ${this.getMenuItemTransformStyle(this.radius,n*i)};
      }
      `,e},``)}getMenuItemSelector(e){return`:host([open]) > mp-backdrop > .continents-menu-options > mp-circle-button:nth-child(${e+1})`}getMenuItemTransformStyle(e,t){return`rotate(${t}deg) translate(${e}rem) rotate(${-t}deg)`}};$s=__decorate([template(Zs),styles(Qs)],$s),registerComponent($s);var ec=`<header :continentHeader class="continent-header">
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
`,tc=`.continent-header {
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
`,nc=class ContinentHeader extends Component{constructor(...e){super(...e),this.router=Ms.getInstance()}onBackClick(e){e.stopPropagation(),this.router.to(`/`)}};__decorate([property()],nc.prototype,`icon`,void 0),nc=__decorate([template(ec),styles(tc)],nc),registerComponent(nc);var rc=`<slot></slot>
`,ic=class ContinentBody extends Component{};ic=__decorate([template(rc)],ic),registerComponent(ic);var ac=`<article
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
`,oc=`:host {
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
`,sc=class ContinentInfo extends Component{onInit(){this.continent=this.getElement(`continent`),this.continentBody=this.getElement(`continentBody`)}static get observedAttributes(){return[`open`]}attributeChangedCallback(e){e===`open`&&this.isContentScrollable()&&this.continent.classList.add(`scrollable`)}onContinentScroll(){let e=isScreenPortrait()?80:.35*document.documentElement.clientHeight,t=this.continent.scrollTop-e;t>0?this.continentBody.style.clipPath=`polygon(0 ${t}px, 100% ${t}px, 100% 100%, 0 100%)`:this.continentBody.removeAttribute(`style`)}isContentScrollable(){return this.continent.scrollHeight>this.continent.offsetHeight}};sc=__decorate([template(ac),styles(oc)],sc),registerComponent(sc);var cc=`<div class="continent-pin">
  <div class="continent-pin-content">
    <mp-heading level="h3" class="continent-pin-title">
      <slot name="title"></slot>
    </mp-heading>
    <slot name="subtitle" class="continent-pin-subtitle"></slot>
  </div>
  <mp-icon icon="\${this.icon}" class="continent-pin-icon"></mp-icon>
</div>
`,lc=`:host {
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
`,uc=class ContinentPin extends Component{};__decorate([property()],uc.prototype,`icon`,void 0),uc=__decorate([template(cc),styles(lc)],uc),registerComponent(uc);var dc=`<section>
  <slot name="project-title"></slot>
  <slot name="project-description"></slot>
  <slot name="project-links"></slot>
</section>
`,fc=class Project extends Component{};fc=__decorate([template(dc)],fc),registerComponent(fc);var Continent=class extends Component{static get observedAttributes(){return[`open`]}attributeChangedCallback(e,t,n){if(e!==`open`)return;let i=this.shadowDOM.querySelector(`mp-continent-info`);n===null?i?.removeAttribute(e):i?.setAttribute(e,n)}},pc=`<mp-continent-pin icon="about-continent">
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
`,mc=`.dev-icons {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.dev-icons > mp-icon {
  width: 3.5rem;
  height: 3.5rem;
}
`,hc=class AboutContinent extends Continent{};hc=__decorate([template(pc),styles(mc)],hc),registerComponent(hc);var gc=`<mp-continent-pin icon="connect-continent">
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
`,_c=class ConnectContinent extends Continent{};_c=__decorate([template(gc)],_c),registerComponent(_c);var vc=`<mp-continent-pin icon="life-continent">
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
`,yc=class LifeContinent extends Continent{};yc=__decorate([template(vc)],yc),registerComponent(yc);var bc=`<mp-continent-pin icon="projects-continent">
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
`,xc=class ProjectsContinent extends Continent{};xc=__decorate([template(bc)],xc),registerComponent(xc);var Sc=`<mp-continent-pin icon="work-continent">
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
`,Cc=class WorkContinent extends Continent{};Cc=__decorate([template(Sc)],Cc),registerComponent(Cc);