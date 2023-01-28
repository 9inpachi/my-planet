var Cd=Object.defineProperty;var c=(s,e)=>Cd(s,"name",{value:e,configurable:!0});c(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerpolicy&&(r.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?r.credentials="include":i.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}c(t,"getFetchOpts");function n(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}c(n,"processPreload")},"polyfill")();const sl="on:";class au{constructor(e,t){this.componentContext=t;const r=new DOMParser().parseFromString(e,"text/html").querySelector("body");if(this.parsedFragment=document.createDocumentFragment(),r)for(const o of[...r.children])this.parsedFragment.appendChild(o)}processEventListeners(){const e=this.getRootElements(),t=c(n=>{for(const i of n.getAttributeNames())if(i.startsWith(sl)){const r=i.substring(sl.length),o=n.getAttribute(i);if(!o)continue;n.addEventListener(r,new Function(`return ${o}`).apply(this.componentContext).bind(this.componentContext)),n.removeAttribute(i)}for(const i of n.children)t(i)},"addEventListenersToNodes");e.forEach(t)}getRootElements(){return[...this.parsedFragment.children]}}c(au,"HTMLParser");const Ld=c((s,e)=>{const t=Object.getOwnPropertyNames(e),n=Object.values(e);return new Function(...t,`return \`${s}\`;`).apply(e,...n)},"evaluateStringTemplate");class Lt extends HTMLElement{constructor(){super(),this.shadowDOM=this.attachShadow({mode:"open"}),this.lazyConstructor()}async lazyConstructor(){var t,n;await((t=this.onBeforeInitAsync)==null?void 0:t.call(this));const e=Ld(this.template,this);this.htmlParser=new au(e,this),this.styles&&this.processStyles(),this.template&&this.shadowDOM.append(...this.processTemplate()),(n=this.onInit)==null||n.call(this)}processStyles(){const e=new CSSStyleSheet;e.replaceSync(this.styles),this.shadowDOM.adoptedStyleSheets=[e]}processTemplate(){return this.htmlParser.processEventListeners(),this.htmlParser.getRootElements()}getElement(e){return this.shadowDOM.querySelector(`*[\\:${e}]`)}}c(Lt,"Component");const St=c(s=>e=>{Reflect.defineProperty(e.prototype,"template",{value:s})},"template"),Zt=c(s=>e=>{const t=[s];e.prototype.styles&&t.push(e.prototype.styles),Reflect.defineProperty(e.prototype,"styles",{value:t.join(`

`)})},"styles"),Or=c(s=>s.replace(/[A-Z]/g,e=>`-${e.toLowerCase()}`),"camelCaseToKebabCase"),Rd=c(s=>Or(s).substring(1),"pascalCaseToKebabCase"),pn=c(s=>(e,t)=>{const n=s??Or(t.toString()),i={get(){return this.getAttribute(n)},set(r){this.getAttribute(n)||this.setAttribute(n,r)}};return t!==void 0?Pd(e,t,i):Dd(e,i)},"property"),Pd=c((s,e,t)=>{Reflect.defineProperty(s,e,t)},"legacyProperty"),Dd=c((s,e)=>({kind:"field",key:s==null?void 0:s.key,placement:"own",descriptor:e}),"currentProperty"),mt=c(s=>{const e=Rd(s.name);customElements.define(`mp-${e}`,s)},"registerComponent"),Id='<${this.level} class="heading"><slot></slot></${this.level}>\n',Od=`.heading {
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
`;var Nd=Object.defineProperty,Fd=Object.getOwnPropertyDescriptor,lu=c((s,e,t,n)=>{for(var i=n>1?void 0:n?Fd(e,t):e,r=s.length-1,o;r>=0;r--)(o=s[r])&&(i=(n?o(e,t,i):o(i))||i);return n&&i&&Nd(e,t,i),i},"__decorateClass$h");let Er=c(class extends Lt{},"Heading");lu([pn()],Er.prototype,"level",2);Er=lu([St(Id),Zt(Od)],Er);mt(Er);const kd=`<!-- "on:click" is not set here because we can add "on:click" on the
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
`,zd=`:host {
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
`;var Ud=Object.defineProperty,Bd=Object.getOwnPropertyDescriptor,Sa=c((s,e,t,n)=>{for(var i=n>1?void 0:n?Bd(e,t):e,r=s.length-1,o;r>=0;r--)(o=s[r])&&(i=(n?o(e,t,i):o(i))||i);return n&&i&&Ud(e,t,i),i},"__decorateClass$g");let Is=c(class extends Lt{},"ArrowButton");Sa([pn()],Is.prototype,"direction",2);Sa([pn()],Is.prototype,"label",2);Is=Sa([St(kd),Zt(zd)],Is);mt(Is);const Hd="modulepreload",Vd=c(function(s){return"https://fawadali.dev/my-planet/"+s},"assetsURL"),rl={},tt=c(function(e,t,n){if(!t||t.length===0)return e();const i=document.getElementsByTagName("link");return Promise.all(t.map(r=>{if(r=Vd(r),r in rl)return;rl[r]=!0;const o=r.endsWith(".css"),a=o?'[rel="stylesheet"]':"";if(!!n)for(let h=i.length-1;h>=0;h--){const d=i[h];if(d.href===r&&(!o||d.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${r}"]${a}`))return;const u=document.createElement("link");if(u.rel=o?"stylesheet":Hd,o||(u.as="script",u.crossOrigin=""),u.href=r,document.head.appendChild(u),o)return new Promise((h,d)=>{u.addEventListener("load",h),u.addEventListener("error",()=>d(new Error(`Unable to preload CSS for ${r}`)))})})).then(()=>e())},"preload"),ol=c((s,e)=>{const t=s[e];return t?typeof t=="function"?t():Promise.resolve(t):new Promise((n,i)=>{(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(i.bind(null,new Error("Unknown variable dynamic import: "+e)))})},"__variableDynamicImportRuntimeHelper"),Gd=`:host {
  display: inline-block;
}

svg {
  width: 100%;
  height: 100%;
}
`;var Wd=Object.defineProperty,jd=Object.getOwnPropertyDescriptor,Ta=c((s,e,t,n)=>{for(var i=n>1?void 0:n?jd(e,t):e,r=s.length-1,o;r>=0;r--)(o=s[r])&&(i=(n?o(e,t,i):o(i))||i);return n&&i&&Wd(e,t,i),i},"__decorateClass$f");let Os=c(class extends Lt{onInit(){this.loadIcon()}async loadIcon(){var e;const s=this.icon?await this.importIconFromAssets():await this.fetchIcon();this.shadowDOM.innerHTML=s,(e=this.shadowDOM.firstElementChild)==null||e.setAttribute("part","svg")}async fetchIcon(){return await(await fetch(this.src)).text()}async importIconFromAssets(){if(this.icon.includes("/")){const[s,e]=this.icon.split("/");return(await ol(Object.assign({"../../../assets/icons/dev/angularjs.svg":()=>tt(()=>import("./angularjs-9e116235.js"),[]),"../../../assets/icons/dev/aws.svg":()=>tt(()=>import("./aws-963d667e.js"),[]),"../../../assets/icons/dev/cplusplus.svg":()=>tt(()=>import("./cplusplus-62a0ee18.js"),[]),"../../../assets/icons/dev/graphql.svg":()=>tt(()=>import("./graphql-8d8d6238.js"),[]),"../../../assets/icons/dev/java.svg":()=>tt(()=>import("./java-41ea1ba4.js"),[]),"../../../assets/icons/dev/javascript.svg":()=>tt(()=>import("./javascript-d38cf39b.js"),[]),"../../../assets/icons/dev/kotlin.svg":()=>tt(()=>import("./kotlin-ce0022a8.js"),[]),"../../../assets/icons/dev/mongodb.svg":()=>tt(()=>import("./mongodb-2ed77771.js"),[]),"../../../assets/icons/dev/mysql.svg":()=>tt(()=>import("./mysql-d01d2211.js"),[]),"../../../assets/icons/dev/nodejs.svg":()=>tt(()=>import("./nodejs-cb421719.js"),[]),"../../../assets/icons/dev/php.svg":()=>tt(()=>import("./php-cb5029bd.js"),[]),"../../../assets/icons/dev/react.svg":()=>tt(()=>import("./react-da527575.js"),[]),"../../../assets/icons/dev/spring.svg":()=>tt(()=>import("./spring-1fac9e8a.js"),[]),"../../../assets/icons/dev/typescript.svg":()=>tt(()=>import("./typescript-01e5ccb0.js"),[]),"../../../assets/icons/social/email.svg":()=>tt(()=>import("./email-27a6879b.js"),[]),"../../../assets/icons/social/facebook.svg":()=>tt(()=>import("./facebook-b05c8ffd.js"),[]),"../../../assets/icons/social/github.svg":()=>tt(()=>import("./github-4986c21b.js"),[]),"../../../assets/icons/social/linkedin.svg":()=>tt(()=>import("./linkedin-4422a8cc.js"),[])}),`../../../assets/icons/${s}/${e}.svg`)).default}else return(await ol(Object.assign({"../../../assets/icons/about-continent.svg":()=>tt(()=>import("./about-continent-42b96dc6.js"),[]),"../../../assets/icons/code.svg":()=>tt(()=>import("./code-012b2ef3.js"),[]),"../../../assets/icons/connect-continent.svg":()=>tt(()=>import("./connect-continent-88b7580e.js"),[]),"../../../assets/icons/life-continent.svg":()=>tt(()=>import("./life-continent-ad94bf25.js"),[]),"../../../assets/icons/link.svg":()=>tt(()=>import("./link-8df2aa51.js"),[]),"../../../assets/icons/projects-continent.svg":()=>tt(()=>import("./projects-continent-2d1a048c.js"),[]),"../../../assets/icons/work-continent.svg":()=>tt(()=>import("./work-continent-ab934031.js"),[])}),`../../../assets/icons/${this.icon}.svg`)).default}},"Icon");Ta([pn()],Os.prototype,"src",2);Ta([pn()],Os.prototype,"icon",2);Os=Ta([Zt(Gd)],Os);mt(Os);const Xd=`<!-- "on:click" is not set here because we can add "on:click" on the
host element and event bubbling will make that "on:click" run on
clicking this button. -->
<\${this.tag} class="circle-button" \${this.link ? \`href="\${this.link}"\` : ''}>
  <mp-icon icon="\${this.icon}" class="circle-button-icon"></mp-icon>
  <span class="circle-button-tooltip \${this.tooltipPosition}">
    <slot></slot>
  </span>
</\${this.tag}>
`,qd=`.circle-button {
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
`;var $d=Object.defineProperty,Yd=Object.getOwnPropertyDescriptor,Nr=c((s,e,t,n)=>{for(var i=n>1?void 0:n?Yd(e,t):e,r=s.length-1,o;r>=0;r--)(o=s[r])&&(i=(n?o(e,t,i):o(i))||i);return n&&i&&$d(e,t,i),i},"__decorateClass$e");let Gi=c(class extends Lt{constructor(){super(...arguments),this.tooltipPosition="top"}async onBeforeInitAsync(){this.tag=this.link?"a":"button"}},"CircleButton");Nr([pn()],Gi.prototype,"icon",2);Nr([pn()],Gi.prototype,"tooltipPosition",2);Nr([pn()],Gi.prototype,"link",2);Gi=Nr([St(Xd),Zt(qd)],Gi);mt(Gi);const Kd=`<slot name="time" class="timeline-event-time"></slot>
<slot name="title" class="timeline-event-title"></slot>
<slot name="subtitle" class="timeline-event-subtitle"></slot>
<p><slot></slot></p>
`,Jd=`:host {
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
`;var Zd=Object.defineProperty,Qd=Object.getOwnPropertyDescriptor,ef=c((s,e,t,n)=>{for(var i=n>1?void 0:n?Qd(e,t):e,r=s.length-1,o;r>=0;r--)(o=s[r])&&(i=(n?o(e,t,i):o(i))||i);return n&&i&&Zd(e,t,i),i},"__decorateClass$d");let Vo=c(class extends Lt{},"TimelineEvent");Vo=ef([St(Kd),Zt(Jd)],Vo);mt(Vo);const tf=`<slot class="timeline-event"></slot>
`,nf=`/* Hide the vertical bar for the last timeline event. */
.timeline-event::slotted(*:last-child)::after {
  display: none;
}
`;var sf=Object.defineProperty,rf=Object.getOwnPropertyDescriptor,of=c((s,e,t,n)=>{for(var i=n>1?void 0:n?rf(e,t):e,r=s.length-1,o;r>=0;r--)(o=s[r])&&(i=(n?o(e,t,i):o(i))||i);return n&&i&&sf(e,t,i),i},"__decorateClass$c");let Go=c(class extends Lt{},"Timeline");Go=of([St(tf),Zt(nf)],Go);mt(Go);const Ea="148",af=0,al=1,lf=2,cu=1,cf=2,bs=3,Bn=0,$t=1,Ws=2,qs=3,zn=0,zi=1,ll=2,cl=3,ul=4,uf=5,Pi=100,hf=101,df=102,hl=103,dl=104,ff=200,pf=201,mf=202,gf=203,uu=204,hu=205,_f=206,vf=207,xf=208,yf=209,bf=210,wf=0,Mf=1,Sf=2,Wo=3,Tf=4,Ef=5,Af=6,Cf=7,Aa=0,Lf=1,Rf=2,Tn=0,Pf=1,Df=2,If=3,Of=4,Nf=5,du=300,Wi=301,ji=302,jo=303,Xo=304,Fr=306,Xi=1e3,Xt=1001,Ar=1002,yt=1003,qo=1004,wr=1005,Ft=1006,fu=1007,ui=1008,hi=1009,Ff=1010,kf=1011,pu=1012,zf=1013,oi=1014,On=1015,Ns=1016,Uf=1017,Bf=1018,Ui=1020,Hf=1021,Vf=1022,qt=1023,Gf=1024,Wf=1025,ai=1026,qi=1027,jf=1028,Xf=1029,qf=1030,$f=1031,Yf=1033,io=33776,so=33777,ro=33778,oo=33779,fl=35840,pl=35841,ml=35842,gl=35843,Kf=36196,_l=37492,vl=37496,xl=37808,yl=37809,bl=37810,wl=37811,Ml=37812,Sl=37813,Tl=37814,El=37815,Al=37816,Cl=37817,Ll=37818,Rl=37819,Pl=37820,Dl=37821,Il=36492,Fs=2300,$i=2301,ao=2302,Ol=2400,Nl=2401,Fl=2402,Jf=2500,Zf=1,mu=2,di=3e3,Xe=3001,Qf=3200,ep=3201,Ca=0,tp=1,cn="srgb",ks="srgb-linear",lo=7680,np=519,$o=35044,kl="300 es",Yo=1035;class jn{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,e);e.target=null}}}c(jn,"EventDispatcher");const Et=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let zl=1234567;const Es=Math.PI/180,zs=180/Math.PI;function Yt(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Et[s&255]+Et[s>>8&255]+Et[s>>16&255]+Et[s>>24&255]+"-"+Et[e&255]+Et[e>>8&255]+"-"+Et[e>>16&15|64]+Et[e>>24&255]+"-"+Et[t&63|128]+Et[t>>8&255]+"-"+Et[t>>16&255]+Et[t>>24&255]+Et[n&255]+Et[n>>8&255]+Et[n>>16&255]+Et[n>>24&255]).toLowerCase()}c(Yt,"generateUUID");function Mt(s,e,t){return Math.max(e,Math.min(t,s))}c(Mt,"clamp");function La(s,e){return(s%e+e)%e}c(La,"euclideanModulo");function ip(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}c(ip,"mapLinear");function sp(s,e,t){return s!==e?(t-s)/(e-s):0}c(sp,"inverseLerp");function As(s,e,t){return(1-t)*s+t*e}c(As,"lerp");function rp(s,e,t,n){return As(s,e,1-Math.exp(-t*n))}c(rp,"damp");function op(s,e=1){return e-Math.abs(La(s,e*2)-e)}c(op,"pingpong");function ap(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}c(ap,"smoothstep");function lp(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}c(lp,"smootherstep");function cp(s,e){return s+Math.floor(Math.random()*(e-s+1))}c(cp,"randInt");function up(s,e){return s+Math.random()*(e-s)}c(up,"randFloat");function hp(s){return s*(.5-Math.random())}c(hp,"randFloatSpread");function dp(s){s!==void 0&&(zl=s);let e=zl+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}c(dp,"seededRandom");function fp(s){return s*Es}c(fp,"degToRad");function pp(s){return s*zs}c(pp,"radToDeg");function Ko(s){return(s&s-1)===0&&s!==0}c(Ko,"isPowerOfTwo");function gu(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}c(gu,"ceilPowerOfTwo");function Cr(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}c(Cr,"floorPowerOfTwo");function mp(s,e,t,n,i){const r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),u=r((e+n)/2),h=o((e+n)/2),d=r((e-n)/2),f=o((e-n)/2),m=r((n-e)/2),_=o((n-e)/2);switch(i){case"XYX":s.set(a*h,l*d,l*f,a*u);break;case"YZY":s.set(l*f,a*h,l*d,a*u);break;case"ZXZ":s.set(l*d,l*f,a*h,a*u);break;case"XZX":s.set(a*h,l*_,l*m,a*u);break;case"YXY":s.set(l*m,a*h,l*_,a*u);break;case"ZYZ":s.set(l*_,l*m,a*h,a*u);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}c(mp,"setQuaternionFromProperEuler");function Sn(s,e){switch(e.constructor){case Float32Array:return s;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}c(Sn,"denormalize");function Je(s,e){switch(e.constructor){case Float32Array:return s;case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}c(Je,"normalize");var dn=Object.freeze({__proto__:null,DEG2RAD:Es,RAD2DEG:zs,generateUUID:Yt,clamp:Mt,euclideanModulo:La,mapLinear:ip,inverseLerp:sp,lerp:As,damp:rp,pingpong:op,smoothstep:ap,smootherstep:lp,randInt:cp,randFloat:up,randFloatSpread:hp,seededRandom:dp,degToRad:fp,radToDeg:pp,isPowerOfTwo:Ko,ceilPowerOfTwo:gu,floorPowerOfTwo:Cr,setQuaternionFromProperEuler:mp,normalize:Je,denormalize:Sn});class oe{constructor(e=0,t=0){oe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*i+e.x,this.y=r*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}c(oe,"Vector2");class kt{constructor(){kt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,n,i,r,o,a,l,u){const h=this.elements;return h[0]=e,h[1]=i,h[2]=a,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],u=n[1],h=n[4],d=n[7],f=n[2],m=n[5],_=n[8],g=i[0],p=i[3],v=i[6],S=i[1],y=i[4],b=i[7],M=i[2],P=i[5],O=i[8];return r[0]=o*g+a*S+l*M,r[3]=o*p+a*y+l*P,r[6]=o*v+a*b+l*O,r[1]=u*g+h*S+d*M,r[4]=u*p+h*y+d*P,r[7]=u*v+h*b+d*O,r[2]=f*g+m*S+_*M,r[5]=f*p+m*y+_*P,r[8]=f*v+m*b+_*O,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],u=e[7],h=e[8];return t*o*h-t*a*u-n*r*h+n*a*l+i*r*u-i*o*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],u=e[7],h=e[8],d=h*o-a*u,f=a*l-h*r,m=u*r-o*l,_=t*d+n*f+i*m;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/_;return e[0]=d*g,e[1]=(i*u-h*n)*g,e[2]=(a*n-i*o)*g,e[3]=f*g,e[4]=(h*t-i*l)*g,e[5]=(i*r-a*t)*g,e[6]=m*g,e[7]=(n*l-u*t)*g,e[8]=(o*t-n*r)*g,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,o,a){const l=Math.cos(r),u=Math.sin(r);return this.set(n*l,n*u,-n*(l*o+u*a)+o+e,-i*u,i*l,-i*(-u*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(co.makeScale(e,t)),this}rotate(e){return this.premultiply(co.makeRotation(-e)),this}translate(e,t){return this.premultiply(co.makeTranslation(e,t)),this}makeTranslation(e,t){return this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}c(kt,"Matrix3");const co=new kt;function _u(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}c(_u,"arrayNeedsUint32");function Us(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}c(Us,"createElementNS");function li(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}c(li,"SRGBToLinear");function Mr(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}c(Mr,"LinearToSRGB");const uo={[cn]:{[ks]:li},[ks]:{[cn]:Mr}},Pt={legacyMode:!0,get workingColorSpace(){return ks},set workingColorSpace(s){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(s,e,t){if(this.legacyMode||e===t||!e||!t)return s;if(uo[e]&&uo[e][t]!==void 0){const n=uo[e][t];return s.r=n(s.r),s.g=n(s.g),s.b=n(s.b),s}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(s,e){return this.convert(s,this.workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this.workingColorSpace)}},vu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ut={r:0,g:0,b:0},Qt={h:0,s:0,l:0},$s={h:0,s:0,l:0};function ho(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}c(ho,"hue2rgb");function Ys(s,e){return e.r=s.r,e.g=s.g,e.b=s.b,e}c(Ys,"toComponents");let Oe=c(class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&n===void 0?this.set(e):this.setRGB(e,t,n)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=cn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Pt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=Pt.workingColorSpace){return this.r=e,this.g=t,this.b=n,Pt.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=Pt.workingColorSpace){if(e=La(e,1),t=Mt(t,0,1),n=Mt(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=ho(o,r,e+1/3),this.g=ho(o,r,e),this.b=ho(o,r,e-1/3)}return Pt.toWorkingColorSpace(this,i),this}setStyle(e,t=cn){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}c(n,"handleAlpha");let i;if(i=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let r;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(255,parseInt(r[1],10))/255,this.g=Math.min(255,parseInt(r[2],10))/255,this.b=Math.min(255,parseInt(r[3],10))/255,Pt.toWorkingColorSpace(this,t),n(r[4]),this;if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(100,parseInt(r[1],10))/100,this.g=Math.min(100,parseInt(r[2],10))/100,this.b=Math.min(100,parseInt(r[3],10))/100,Pt.toWorkingColorSpace(this,t),n(r[4]),this;break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)){const l=parseFloat(r[1])/360,u=parseFloat(r[2])/100,h=parseFloat(r[3])/100;return n(r[4]),this.setHSL(l,u,h,t)}break}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],o=r.length;if(o===3)return this.r=parseInt(r.charAt(0)+r.charAt(0),16)/255,this.g=parseInt(r.charAt(1)+r.charAt(1),16)/255,this.b=parseInt(r.charAt(2)+r.charAt(2),16)/255,Pt.toWorkingColorSpace(this,t),this;if(o===6)return this.r=parseInt(r.charAt(0)+r.charAt(1),16)/255,this.g=parseInt(r.charAt(2)+r.charAt(3),16)/255,this.b=parseInt(r.charAt(4)+r.charAt(5),16)/255,Pt.toWorkingColorSpace(this,t),this}return e&&e.length>0?this.setColorName(e,t):this}setColorName(e,t=cn){const n=vu[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=li(e.r),this.g=li(e.g),this.b=li(e.b),this}copyLinearToSRGB(e){return this.r=Mr(e.r),this.g=Mr(e.g),this.b=Mr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=cn){return Pt.fromWorkingColorSpace(Ys(this,ut),e),Mt(ut.r*255,0,255)<<16^Mt(ut.g*255,0,255)<<8^Mt(ut.b*255,0,255)<<0}getHexString(e=cn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Pt.workingColorSpace){Pt.fromWorkingColorSpace(Ys(this,ut),t);const n=ut.r,i=ut.g,r=ut.b,o=Math.max(n,i,r),a=Math.min(n,i,r);let l,u;const h=(a+o)/2;if(a===o)l=0,u=0;else{const d=o-a;switch(u=h<=.5?d/(o+a):d/(2-o-a),o){case n:l=(i-r)/d+(i<r?6:0);break;case i:l=(r-n)/d+2;break;case r:l=(n-i)/d+4;break}l/=6}return e.h=l,e.s=u,e.l=h,e}getRGB(e,t=Pt.workingColorSpace){return Pt.fromWorkingColorSpace(Ys(this,ut),t),e.r=ut.r,e.g=ut.g,e.b=ut.b,e}getStyle(e=cn){return Pt.fromWorkingColorSpace(Ys(this,ut),e),e!==cn?`color(${e} ${ut.r} ${ut.g} ${ut.b})`:`rgb(${ut.r*255|0},${ut.g*255|0},${ut.b*255|0})`}offsetHSL(e,t,n){return this.getHSL(Qt),Qt.h+=e,Qt.s+=t,Qt.l+=n,this.setHSL(Qt.h,Qt.s,Qt.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Qt),e.getHSL($s);const n=As(Qt.h,$s.h,t),i=As(Qt.s,$s.s,t),r=As(Qt.l,$s.l,t);return this.setHSL(n,i,r),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},"Color");Oe.NAMES=vu;let _i;class Ra{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{_i===void 0&&(_i=Us("canvas")),_i.width=e.width,_i.height=e.height;const n=_i.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=_i}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Us("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=li(r[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(li(t[n]/255)*255):t[n]=li(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}c(Ra,"ImageUtils");class Pa{constructor(e=null){this.isSource=!0,this.uuid=Yt(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(fo(i[o].image)):r.push(fo(i[o]))}else r=fo(i);n.url=r}return t||(e.images[this.uuid]=n),n}}c(Pa,"Source");function fo(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Ra.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}c(fo,"serializeImage");let gp=0;class ht extends jn{constructor(e=ht.DEFAULT_IMAGE,t=ht.DEFAULT_MAPPING,n=Xt,i=Xt,r=Ft,o=ui,a=qt,l=hi,u=ht.DEFAULT_ANISOTROPY,h=di){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:gp++}),this.uuid=Yt(),this.name="",this.source=new Pa(e),this.mipmaps=[],this.mapping=t,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=u,this.format=a,this.internalFormat=null,this.type=l,this.offset=new oe(0,0),this.repeat=new oe(1,1),this.center=new oe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new kt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==du)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Xi:e.x=e.x-Math.floor(e.x);break;case Xt:e.x=e.x<0?0:1;break;case Ar:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Xi:e.y=e.y-Math.floor(e.y);break;case Xt:e.y=e.y<0?0:1;break;case Ar:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}c(ht,"Texture");ht.DEFAULT_IMAGE=null;ht.DEFAULT_MAPPING=du;ht.DEFAULT_ANISOTROPY=1;class Ke{constructor(e=0,t=0,n=0,i=1){Ke.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const l=e.elements,u=l[0],h=l[4],d=l[8],f=l[1],m=l[5],_=l[9],g=l[2],p=l[6],v=l[10];if(Math.abs(h-f)<.01&&Math.abs(d-g)<.01&&Math.abs(_-p)<.01){if(Math.abs(h+f)<.1&&Math.abs(d+g)<.1&&Math.abs(_+p)<.1&&Math.abs(u+m+v-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const y=(u+1)/2,b=(m+1)/2,M=(v+1)/2,P=(h+f)/4,O=(d+g)/4,x=(_+p)/4;return y>b&&y>M?y<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(y),i=P/n,r=O/n):b>M?b<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(b),n=P/i,r=x/i):M<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(M),n=O/r,i=x/r),this.set(n,i,r,t),this}let S=Math.sqrt((p-_)*(p-_)+(d-g)*(d-g)+(f-h)*(f-h));return Math.abs(S)<.001&&(S=1),this.x=(p-_)/S,this.y=(d-g)/S,this.z=(f-h)/S,this.w=Math.acos((u+m+v-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}c(Ke,"Vector4");class Hn extends jn{constructor(e=1,t=1,n={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Ke(0,0,e,t),this.scissorTest=!1,this.viewport=new Ke(0,0,e,t);const i={width:e,height:t,depth:1};this.texture=new ht(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Ft,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Pa(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}c(Hn,"WebGLRenderTarget");class Da extends ht{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=yt,this.minFilter=yt,this.wrapR=Xt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}c(Da,"DataArrayTexture");class xu extends ht{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=yt,this.minFilter=yt,this.wrapR=Xt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}c(xu,"Data3DTexture");class bt{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,o,a){let l=n[i+0],u=n[i+1],h=n[i+2],d=n[i+3];const f=r[o+0],m=r[o+1],_=r[o+2],g=r[o+3];if(a===0){e[t+0]=l,e[t+1]=u,e[t+2]=h,e[t+3]=d;return}if(a===1){e[t+0]=f,e[t+1]=m,e[t+2]=_,e[t+3]=g;return}if(d!==g||l!==f||u!==m||h!==_){let p=1-a;const v=l*f+u*m+h*_+d*g,S=v>=0?1:-1,y=1-v*v;if(y>Number.EPSILON){const M=Math.sqrt(y),P=Math.atan2(M,v*S);p=Math.sin(p*P)/M,a=Math.sin(a*P)/M}const b=a*S;if(l=l*p+f*b,u=u*p+m*b,h=h*p+_*b,d=d*p+g*b,p===1-a){const M=1/Math.sqrt(l*l+u*u+h*h+d*d);l*=M,u*=M,h*=M,d*=M}}e[t]=l,e[t+1]=u,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,i,r,o){const a=n[i],l=n[i+1],u=n[i+2],h=n[i+3],d=r[o],f=r[o+1],m=r[o+2],_=r[o+3];return e[t]=a*_+h*d+l*m-u*f,e[t+1]=l*_+h*f+u*d-a*m,e[t+2]=u*_+h*m+a*f-l*d,e[t+3]=h*_-a*d-l*f-u*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const n=e._x,i=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,u=a(n/2),h=a(i/2),d=a(r/2),f=l(n/2),m=l(i/2),_=l(r/2);switch(o){case"XYZ":this._x=f*h*d+u*m*_,this._y=u*m*d-f*h*_,this._z=u*h*_+f*m*d,this._w=u*h*d-f*m*_;break;case"YXZ":this._x=f*h*d+u*m*_,this._y=u*m*d-f*h*_,this._z=u*h*_-f*m*d,this._w=u*h*d+f*m*_;break;case"ZXY":this._x=f*h*d-u*m*_,this._y=u*m*d+f*h*_,this._z=u*h*_+f*m*d,this._w=u*h*d-f*m*_;break;case"ZYX":this._x=f*h*d-u*m*_,this._y=u*m*d+f*h*_,this._z=u*h*_-f*m*d,this._w=u*h*d+f*m*_;break;case"YZX":this._x=f*h*d+u*m*_,this._y=u*m*d+f*h*_,this._z=u*h*_-f*m*d,this._w=u*h*d-f*m*_;break;case"XZY":this._x=f*h*d-u*m*_,this._y=u*m*d-f*h*_,this._z=u*h*_+f*m*d,this._w=u*h*d+f*m*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],o=t[1],a=t[5],l=t[9],u=t[2],h=t[6],d=t[10],f=n+a+d;if(f>0){const m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(h-l)*m,this._y=(r-u)*m,this._z=(o-i)*m}else if(n>a&&n>d){const m=2*Math.sqrt(1+n-a-d);this._w=(h-l)/m,this._x=.25*m,this._y=(i+o)/m,this._z=(r+u)/m}else if(a>d){const m=2*Math.sqrt(1+a-n-d);this._w=(r-u)/m,this._x=(i+o)/m,this._y=.25*m,this._z=(l+h)/m}else{const m=2*Math.sqrt(1+d-n-a);this._w=(o-i)/m,this._x=(r+u)/m,this._y=(l+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Mt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,o=e._w,a=t._x,l=t._y,u=t._z,h=t._w;return this._x=n*h+o*a+i*u-r*l,this._y=i*h+o*l+r*a-n*u,this._z=r*h+o*u+n*l-i*a,this._w=o*h-n*a-i*l-r*u,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,r=this._z,o=this._w;let a=o*e._w+n*e._x+i*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const m=1-t;return this._w=m*o+t*this._w,this._x=m*n+t*this._x,this._y=m*i+t*this._y,this._z=m*r+t*this._z,this.normalize(),this._onChangeCallback(),this}const u=Math.sqrt(l),h=Math.atan2(u,a),d=Math.sin((1-t)*h)/u,f=Math.sin(t*h)/u;return this._w=o*d+this._w*f,this._x=n*d+this._x*f,this._y=i*d+this._y*f,this._z=r*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(r),n*Math.cos(r),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}c(bt,"Quaternion");class A{constructor(e=0,t=0,n=0){A.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ul.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ul.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,o=e.y,a=e.z,l=e.w,u=l*t+o*i-a*n,h=l*n+a*t-r*i,d=l*i+r*n-o*t,f=-r*t-o*n-a*i;return this.x=u*l+f*-r+h*-a-d*-o,this.y=h*l+f*-o+d*-r-u*-a,this.z=d*l+f*-a+u*-o-h*-r,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=i*l-r*a,this.y=r*o-n*l,this.z=n*a-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return po.copy(this).projectOnVector(e),this.sub(po)}reflect(e){return this.sub(po.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Mt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}c(A,"Vector3");const po=new A,Ul=new bt;class Xn{constructor(e=new A(1/0,1/0,1/0),t=new A(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,n=1/0,i=1/0,r=-1/0,o=-1/0,a=-1/0;for(let l=0,u=e.length;l<u;l+=3){const h=e[l],d=e[l+1],f=e[l+2];h<t&&(t=h),d<n&&(n=d),f<i&&(i=f),h>r&&(r=h),d>o&&(o=d),f>a&&(a=f)}return this.min.set(t,n,i),this.max.set(r,o,a),this}setFromBufferAttribute(e){let t=1/0,n=1/0,i=1/0,r=-1/0,o=-1/0,a=-1/0;for(let l=0,u=e.count;l<u;l++){const h=e.getX(l),d=e.getY(l),f=e.getZ(l);h<t&&(t=h),d<n&&(n=d),f<i&&(i=f),h>r&&(r=h),d>o&&(o=d),f>a&&(a=f)}return this.min.set(t,n,i),this.max.set(r,o,a),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=ti.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0)if(t&&n.attributes!=null&&n.attributes.position!==void 0){const r=n.attributes.position;for(let o=0,a=r.count;o<a;o++)ti.fromBufferAttribute(r,o).applyMatrix4(e.matrixWorld),this.expandByPoint(ti)}else n.boundingBox===null&&n.computeBoundingBox(),mo.copy(n.boundingBox),mo.applyMatrix4(e.matrixWorld),this.union(mo);const i=e.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,ti),ti.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ls),Ks.subVectors(this.max,ls),vi.subVectors(e.a,ls),xi.subVectors(e.b,ls),yi.subVectors(e.c,ls),En.subVectors(xi,vi),An.subVectors(yi,xi),ni.subVectors(vi,yi);let t=[0,-En.z,En.y,0,-An.z,An.y,0,-ni.z,ni.y,En.z,0,-En.x,An.z,0,-An.x,ni.z,0,-ni.x,-En.y,En.x,0,-An.y,An.x,0,-ni.y,ni.x,0];return!go(t,vi,xi,yi,Ks)||(t=[1,0,0,0,1,0,0,0,1],!go(t,vi,xi,yi,Ks))?!1:(Js.crossVectors(En,An),t=[Js.x,Js.y,Js.z],go(t,vi,xi,yi,Ks))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return ti.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize(ti).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(vn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),vn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),vn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),vn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),vn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),vn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),vn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),vn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(vn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}c(Xn,"Box3");const vn=[new A,new A,new A,new A,new A,new A,new A,new A],ti=new A,mo=new Xn,vi=new A,xi=new A,yi=new A,En=new A,An=new A,ni=new A,ls=new A,Ks=new A,Js=new A,ii=new A;function go(s,e,t,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){ii.fromArray(s,r);const a=i.x*Math.abs(ii.x)+i.y*Math.abs(ii.y)+i.z*Math.abs(ii.z),l=e.dot(ii),u=t.dot(ii),h=n.dot(ii);if(Math.max(-Math.max(l,u,h),Math.min(l,u,h))>a)return!1}return!0}c(go,"satForAxes");const _p=new Xn,cs=new A,_o=new A;class qn{constructor(e=new A,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):_p.setFromPoints(e).getCenter(n);let i=0;for(let r=0,o=e.length;r<o;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;cs.subVectors(e,this.center);const t=cs.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(cs,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(_o.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(cs.copy(e.center).add(_o)),this.expandByPoint(cs.copy(e.center).sub(_o))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}c(qn,"Sphere");const xn=new A,vo=new A,Zs=new A,Cn=new A,xo=new A,Qs=new A,yo=new A;class Qi{constructor(e=new A,t=new A(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,xn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(n).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=xn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(xn.copy(this.direction).multiplyScalar(t).add(this.origin),xn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){vo.copy(e).add(t).multiplyScalar(.5),Zs.copy(t).sub(e).normalize(),Cn.copy(this.origin).sub(vo);const r=e.distanceTo(t)*.5,o=-this.direction.dot(Zs),a=Cn.dot(this.direction),l=-Cn.dot(Zs),u=Cn.lengthSq(),h=Math.abs(1-o*o);let d,f,m,_;if(h>0)if(d=o*l-a,f=o*a-l,_=r*h,d>=0)if(f>=-_)if(f<=_){const g=1/h;d*=g,f*=g,m=d*(d+o*f+2*a)+f*(o*d+f+2*l)+u}else f=r,d=Math.max(0,-(o*f+a)),m=-d*d+f*(f+2*l)+u;else f=-r,d=Math.max(0,-(o*f+a)),m=-d*d+f*(f+2*l)+u;else f<=-_?(d=Math.max(0,-(-o*r+a)),f=d>0?-r:Math.min(Math.max(-r,-l),r),m=-d*d+f*(f+2*l)+u):f<=_?(d=0,f=Math.min(Math.max(-r,-l),r),m=f*(f+2*l)+u):(d=Math.max(0,-(o*r+a)),f=d>0?r:Math.min(Math.max(-r,-l),r),m=-d*d+f*(f+2*l)+u);else f=o>0?-r:r,d=Math.max(0,-(o*f+a)),m=-d*d+f*(f+2*l)+u;return n&&n.copy(this.direction).multiplyScalar(d).add(this.origin),i&&i.copy(Zs).multiplyScalar(f).add(vo),m}intersectSphere(e,t){xn.subVectors(e.center,this.origin);const n=xn.dot(this.direction),i=xn.dot(xn)-n*n,r=e.radius*e.radius;if(i>r)return null;const o=Math.sqrt(r-i),a=n-o,l=n+o;return a<0&&l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,o,a,l;const u=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,f=this.origin;return u>=0?(n=(e.min.x-f.x)*u,i=(e.max.x-f.x)*u):(n=(e.max.x-f.x)*u,i=(e.min.x-f.x)*u),h>=0?(r=(e.min.y-f.y)*h,o=(e.max.y-f.y)*h):(r=(e.max.y-f.y)*h,o=(e.min.y-f.y)*h),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),d>=0?(a=(e.min.z-f.z)*d,l=(e.max.z-f.z)*d):(a=(e.max.z-f.z)*d,l=(e.min.z-f.z)*d),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,xn)!==null}intersectTriangle(e,t,n,i,r){xo.subVectors(t,e),Qs.subVectors(n,e),yo.crossVectors(xo,Qs);let o=this.direction.dot(yo),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Cn.subVectors(this.origin,e);const l=a*this.direction.dot(Qs.crossVectors(Cn,Qs));if(l<0)return null;const u=a*this.direction.dot(xo.cross(Cn));if(u<0||l+u>o)return null;const h=-a*Cn.dot(yo);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}c(Qi,"Ray");class Ne{constructor(){Ne.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,n,i,r,o,a,l,u,h,d,f,m,_,g,p){const v=this.elements;return v[0]=e,v[4]=t,v[8]=n,v[12]=i,v[1]=r,v[5]=o,v[9]=a,v[13]=l,v[2]=u,v[6]=h,v[10]=d,v[14]=f,v[3]=m,v[7]=_,v[11]=g,v[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ne().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/bi.setFromMatrixColumn(e,0).length(),r=1/bi.setFromMatrixColumn(e,1).length(),o=1/bi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),u=Math.sin(i),h=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){const f=o*h,m=o*d,_=a*h,g=a*d;t[0]=l*h,t[4]=-l*d,t[8]=u,t[1]=m+_*u,t[5]=f-g*u,t[9]=-a*l,t[2]=g-f*u,t[6]=_+m*u,t[10]=o*l}else if(e.order==="YXZ"){const f=l*h,m=l*d,_=u*h,g=u*d;t[0]=f+g*a,t[4]=_*a-m,t[8]=o*u,t[1]=o*d,t[5]=o*h,t[9]=-a,t[2]=m*a-_,t[6]=g+f*a,t[10]=o*l}else if(e.order==="ZXY"){const f=l*h,m=l*d,_=u*h,g=u*d;t[0]=f-g*a,t[4]=-o*d,t[8]=_+m*a,t[1]=m+_*a,t[5]=o*h,t[9]=g-f*a,t[2]=-o*u,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const f=o*h,m=o*d,_=a*h,g=a*d;t[0]=l*h,t[4]=_*u-m,t[8]=f*u+g,t[1]=l*d,t[5]=g*u+f,t[9]=m*u-_,t[2]=-u,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const f=o*l,m=o*u,_=a*l,g=a*u;t[0]=l*h,t[4]=g-f*d,t[8]=_*d+m,t[1]=d,t[5]=o*h,t[9]=-a*h,t[2]=-u*h,t[6]=m*d+_,t[10]=f-g*d}else if(e.order==="XZY"){const f=o*l,m=o*u,_=a*l,g=a*u;t[0]=l*h,t[4]=-d,t[8]=u*h,t[1]=f*d+g,t[5]=o*h,t[9]=m*d-_,t[2]=_*d-m,t[6]=a*h,t[10]=g*d+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(vp,e,xp)}lookAt(e,t,n){const i=this.elements;return Ht.subVectors(e,t),Ht.lengthSq()===0&&(Ht.z=1),Ht.normalize(),Ln.crossVectors(n,Ht),Ln.lengthSq()===0&&(Math.abs(n.z)===1?Ht.x+=1e-4:Ht.z+=1e-4,Ht.normalize(),Ln.crossVectors(n,Ht)),Ln.normalize(),er.crossVectors(Ht,Ln),i[0]=Ln.x,i[4]=er.x,i[8]=Ht.x,i[1]=Ln.y,i[5]=er.y,i[9]=Ht.y,i[2]=Ln.z,i[6]=er.z,i[10]=Ht.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],u=n[12],h=n[1],d=n[5],f=n[9],m=n[13],_=n[2],g=n[6],p=n[10],v=n[14],S=n[3],y=n[7],b=n[11],M=n[15],P=i[0],O=i[4],x=i[8],L=i[12],N=i[1],C=i[5],B=i[9],R=i[13],D=i[2],k=i[6],G=i[10],ee=i[14],W=i[3],te=i[7],ie=i[11],H=i[15];return r[0]=o*P+a*N+l*D+u*W,r[4]=o*O+a*C+l*k+u*te,r[8]=o*x+a*B+l*G+u*ie,r[12]=o*L+a*R+l*ee+u*H,r[1]=h*P+d*N+f*D+m*W,r[5]=h*O+d*C+f*k+m*te,r[9]=h*x+d*B+f*G+m*ie,r[13]=h*L+d*R+f*ee+m*H,r[2]=_*P+g*N+p*D+v*W,r[6]=_*O+g*C+p*k+v*te,r[10]=_*x+g*B+p*G+v*ie,r[14]=_*L+g*R+p*ee+v*H,r[3]=S*P+y*N+b*D+M*W,r[7]=S*O+y*C+b*k+M*te,r[11]=S*x+y*B+b*G+M*ie,r[15]=S*L+y*R+b*ee+M*H,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],o=e[1],a=e[5],l=e[9],u=e[13],h=e[2],d=e[6],f=e[10],m=e[14],_=e[3],g=e[7],p=e[11],v=e[15];return _*(+r*l*d-i*u*d-r*a*f+n*u*f+i*a*m-n*l*m)+g*(+t*l*m-t*u*f+r*o*f-i*o*m+i*u*h-r*l*h)+p*(+t*u*d-t*a*m-r*o*d+n*o*m+r*a*h-n*u*h)+v*(-i*a*h-t*l*d+t*a*f+i*o*d-n*o*f+n*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],u=e[7],h=e[8],d=e[9],f=e[10],m=e[11],_=e[12],g=e[13],p=e[14],v=e[15],S=d*p*u-g*f*u+g*l*m-a*p*m-d*l*v+a*f*v,y=_*f*u-h*p*u-_*l*m+o*p*m+h*l*v-o*f*v,b=h*g*u-_*d*u+_*a*m-o*g*m-h*a*v+o*d*v,M=_*d*l-h*g*l-_*a*f+o*g*f+h*a*p-o*d*p,P=t*S+n*y+i*b+r*M;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const O=1/P;return e[0]=S*O,e[1]=(g*f*r-d*p*r-g*i*m+n*p*m+d*i*v-n*f*v)*O,e[2]=(a*p*r-g*l*r+g*i*u-n*p*u-a*i*v+n*l*v)*O,e[3]=(d*l*r-a*f*r-d*i*u+n*f*u+a*i*m-n*l*m)*O,e[4]=y*O,e[5]=(h*p*r-_*f*r+_*i*m-t*p*m-h*i*v+t*f*v)*O,e[6]=(_*l*r-o*p*r-_*i*u+t*p*u+o*i*v-t*l*v)*O,e[7]=(o*f*r-h*l*r+h*i*u-t*f*u-o*i*m+t*l*m)*O,e[8]=b*O,e[9]=(_*d*r-h*g*r-_*n*m+t*g*m+h*n*v-t*d*v)*O,e[10]=(o*g*r-_*a*r+_*n*u-t*g*u-o*n*v+t*a*v)*O,e[11]=(h*a*r-o*d*r-h*n*u+t*d*u+o*n*m-t*a*m)*O,e[12]=M*O,e[13]=(h*g*i-_*d*i+_*n*f-t*g*f-h*n*p+t*d*p)*O,e[14]=(_*a*i-o*g*i-_*n*l+t*g*l+o*n*p-t*a*p)*O,e[15]=(o*d*i-h*a*i+h*n*l-t*d*l-o*n*f+t*a*f)*O,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,u=r*o,h=r*a;return this.set(u*o+n,u*a-i*l,u*l+i*a,0,u*a+i*l,h*a+n,h*l-i*o,0,u*l-i*a,h*l+i*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,o){return this.set(1,n,r,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,u=r+r,h=o+o,d=a+a,f=r*u,m=r*h,_=r*d,g=o*h,p=o*d,v=a*d,S=l*u,y=l*h,b=l*d,M=n.x,P=n.y,O=n.z;return i[0]=(1-(g+v))*M,i[1]=(m+b)*M,i[2]=(_-y)*M,i[3]=0,i[4]=(m-b)*P,i[5]=(1-(f+v))*P,i[6]=(p+S)*P,i[7]=0,i[8]=(_+y)*O,i[9]=(p-S)*O,i[10]=(1-(f+g))*O,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let r=bi.set(i[0],i[1],i[2]).length();const o=bi.set(i[4],i[5],i[6]).length(),a=bi.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],en.copy(this);const u=1/r,h=1/o,d=1/a;return en.elements[0]*=u,en.elements[1]*=u,en.elements[2]*=u,en.elements[4]*=h,en.elements[5]*=h,en.elements[6]*=h,en.elements[8]*=d,en.elements[9]*=d,en.elements[10]*=d,t.setFromRotationMatrix(en),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,i,r,o){const a=this.elements,l=2*r/(t-e),u=2*r/(n-i),h=(t+e)/(t-e),d=(n+i)/(n-i),f=-(o+r)/(o-r),m=-2*o*r/(o-r);return a[0]=l,a[4]=0,a[8]=h,a[12]=0,a[1]=0,a[5]=u,a[9]=d,a[13]=0,a[2]=0,a[6]=0,a[10]=f,a[14]=m,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(e,t,n,i,r,o){const a=this.elements,l=1/(t-e),u=1/(n-i),h=1/(o-r),d=(t+e)*l,f=(n+i)*u,m=(o+r)*h;return a[0]=2*l,a[4]=0,a[8]=0,a[12]=-d,a[1]=0,a[5]=2*u,a[9]=0,a[13]=-f,a[2]=0,a[6]=0,a[10]=-2*h,a[14]=-m,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}c(Ne,"Matrix4");const bi=new A,en=new Ne,vp=new A(0,0,0),xp=new A(1,1,1),Ln=new A,er=new A,Ht=new A,Bl=new Ne,Hl=new bt;class es{constructor(e=0,t=0,n=0,i=es.DefaultOrder){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],o=i[4],a=i[8],l=i[1],u=i[5],h=i[9],d=i[2],f=i[6],m=i[10];switch(t){case"XYZ":this._y=Math.asin(Mt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,u),this._z=0);break;case"YXZ":this._x=Math.asin(-Mt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Mt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,m),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Mt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin(Mt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,u),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-Mt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,u),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Bl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Bl,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Hl.setFromEuler(this),this.setFromQuaternion(Hl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}toVector3(){console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead")}}c(es,"Euler");es.DefaultOrder="XYZ";es.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class kr{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}c(kr,"Layers");let yp=0;const Vl=new A,wi=new bt,yn=new Ne,tr=new A,us=new A,bp=new A,wp=new bt,Gl=new A(1,0,0),Wl=new A(0,1,0),jl=new A(0,0,1),Mp={type:"added"},Xl={type:"removed"};class Qe extends jn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:yp++}),this.uuid=Yt(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Qe.DefaultUp.clone();const e=new A,t=new es,n=new bt,i=new A(1,1,1);function r(){n.setFromEuler(t,!1)}c(r,"onRotationChange");function o(){t.setFromQuaternion(n,void 0,!1)}c(o,"onQuaternionChange"),t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Ne},normalMatrix:{value:new kt}}),this.matrix=new Ne,this.matrixWorld=new Ne,this.matrixAutoUpdate=Qe.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=Qe.DefaultMatrixWorldAutoUpdate,this.layers=new kr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return wi.setFromAxisAngle(e,t),this.quaternion.multiply(wi),this}rotateOnWorldAxis(e,t){return wi.setFromAxisAngle(e,t),this.quaternion.premultiply(wi),this}rotateX(e){return this.rotateOnAxis(Gl,e)}rotateY(e){return this.rotateOnAxis(Wl,e)}rotateZ(e){return this.rotateOnAxis(jl,e)}translateOnAxis(e,t){return Vl.copy(e).applyQuaternion(this.quaternion),this.position.add(Vl.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Gl,e)}translateY(e){return this.translateOnAxis(Wl,e)}translateZ(e){return this.translateOnAxis(jl,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(yn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?tr.copy(e):tr.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),us.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?yn.lookAt(us,tr,this.up):yn.lookAt(tr,us,this.up),this.quaternion.setFromRotationMatrix(yn),i&&(yn.extractRotation(i.matrixWorld),wi.setFromRotationMatrix(yn),this.quaternion.premultiply(wi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Mp)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Xl)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(Xl)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),yn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),yn.multiply(e.parent.matrixWorld)),e.applyMatrix4(yn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t){let n=[];this[e]===t&&n.push(this);for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectsByProperty(e,t);o.length>0&&(n=n.concat(o))}return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(us,e,bp),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(us,wp,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++){const r=t[n];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let r=0,o=i.length;r<o;r++){const a=i[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(c(r,"serialize"),this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let u=0,h=l.length;u<h;u++){const d=l[u];r(e.shapes,d)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,u=this.material.length;l<u;l++)a.push(r(e.materials,this.material[l]));i.material=a}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(r(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),u=o(e.textures),h=o(e.images),d=o(e.shapes),f=o(e.skeletons),m=o(e.animations),_=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),u.length>0&&(n.textures=u),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),f.length>0&&(n.skeletons=f),m.length>0&&(n.animations=m),_.length>0&&(n.nodes=_)}return n.object=i,n;function o(a){const l=[];for(const u in a){const h=a[u];delete h.metadata,l.push(h)}return l}c(o,"extractFromCache")}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}c(Qe,"Object3D");Qe.DefaultUp=new A(0,1,0);Qe.DefaultMatrixAutoUpdate=!0;Qe.DefaultMatrixWorldAutoUpdate=!0;const tn=new A,bn=new A,bo=new A,wn=new A,Mi=new A,Si=new A,ql=new A,wo=new A,Mo=new A,So=new A;class hn{constructor(e=new A,t=new A,n=new A){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),tn.subVectors(e,t),i.cross(tn);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){tn.subVectors(i,t),bn.subVectors(n,t),bo.subVectors(e,t);const o=tn.dot(tn),a=tn.dot(bn),l=tn.dot(bo),u=bn.dot(bn),h=bn.dot(bo),d=o*u-a*a;if(d===0)return r.set(-2,-1,-1);const f=1/d,m=(u*l-a*h)*f,_=(o*h-a*l)*f;return r.set(1-m-_,_,m)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,wn),wn.x>=0&&wn.y>=0&&wn.x+wn.y<=1}static getUV(e,t,n,i,r,o,a,l){return this.getBarycoord(e,t,n,i,wn),l.set(0,0),l.addScaledVector(r,wn.x),l.addScaledVector(o,wn.y),l.addScaledVector(a,wn.z),l}static isFrontFacing(e,t,n,i){return tn.subVectors(n,t),bn.subVectors(e,t),tn.cross(bn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return tn.subVectors(this.c,this.b),bn.subVectors(this.a,this.b),tn.cross(bn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return hn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return hn.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,r){return hn.getUV(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return hn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return hn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let o,a;Mi.subVectors(i,n),Si.subVectors(r,n),wo.subVectors(e,n);const l=Mi.dot(wo),u=Si.dot(wo);if(l<=0&&u<=0)return t.copy(n);Mo.subVectors(e,i);const h=Mi.dot(Mo),d=Si.dot(Mo);if(h>=0&&d<=h)return t.copy(i);const f=l*d-h*u;if(f<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(n).addScaledVector(Mi,o);So.subVectors(e,r);const m=Mi.dot(So),_=Si.dot(So);if(_>=0&&m<=_)return t.copy(r);const g=m*u-l*_;if(g<=0&&u>=0&&_<=0)return a=u/(u-_),t.copy(n).addScaledVector(Si,a);const p=h*_-m*d;if(p<=0&&d-h>=0&&m-_>=0)return ql.subVectors(r,i),a=(d-h)/(d-h+(m-_)),t.copy(i).addScaledVector(ql,a);const v=1/(p+g+f);return o=g*v,a=f*v,t.copy(n).addScaledVector(Mi,o).addScaledVector(Si,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}c(hn,"Triangle");let Sp=0;class Kt extends jn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Sp++}),this.uuid=Yt(),this.name="",this.type="Material",this.blending=zi,this.side=Bn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=uu,this.blendDst=hu,this.blendEquation=Pi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Wo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=np,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=lo,this.stencilZFail=lo,this.stencilZPass=lo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}const i=this[t];if(i===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==zi&&(n.blending=this.blending),this.side!==Bn&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(c(i,"extractFromCache"),t){const r=i(e.textures),o=i(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}c(Kt,"Material");class Nn extends Kt{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Oe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Aa,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}c(Nn,"MeshBasicMaterial");const ct=new A,nr=new oe;class Ct{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=$o,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)nr.fromBufferAttribute(this,t),nr.applyMatrix3(e),this.setXY(t,nr.x,nr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)ct.fromBufferAttribute(this,t),ct.applyMatrix3(e),this.setXYZ(t,ct.x,ct.y,ct.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)ct.fromBufferAttribute(this,t),ct.applyMatrix4(e),this.setXYZ(t,ct.x,ct.y,ct.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)ct.fromBufferAttribute(this,t),ct.applyNormalMatrix(e),this.setXYZ(t,ct.x,ct.y,ct.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)ct.fromBufferAttribute(this,t),ct.transformDirection(e),this.setXYZ(t,ct.x,ct.y,ct.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Sn(t,this.array)),t}setX(e,t){return this.normalized&&(t=Je(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Sn(t,this.array)),t}setY(e,t){return this.normalized&&(t=Je(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Sn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Je(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Sn(t,this.array)),t}setW(e,t){return this.normalized&&(t=Je(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Je(t,this.array),n=Je(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=Je(t,this.array),n=Je(n,this.array),i=Je(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=Je(t,this.array),n=Je(n,this.array),i=Je(i,this.array),r=Je(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==$o&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}c(Ct,"BufferAttribute");class Ia extends Ct{constructor(e,t,n){super(new Uint16Array(e),t,n)}}c(Ia,"Uint16BufferAttribute");class Oa extends Ct{constructor(e,t,n){super(new Uint32Array(e),t,n)}}c(Oa,"Uint32BufferAttribute");class dt extends Ct{constructor(e,t,n){super(new Float32Array(e),t,n)}}c(dt,"Float32BufferAttribute");let Tp=0;const Wt=new Ne,To=new Qe,Ti=new A,Vt=new Xn,hs=new Xn,xt=new A;class Nt extends jn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Tp++}),this.uuid=Yt(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(_u(e)?Oa:Ia)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new kt().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Wt.makeRotationFromQuaternion(e),this.applyMatrix4(Wt),this}rotateX(e){return Wt.makeRotationX(e),this.applyMatrix4(Wt),this}rotateY(e){return Wt.makeRotationY(e),this.applyMatrix4(Wt),this}rotateZ(e){return Wt.makeRotationZ(e),this.applyMatrix4(Wt),this}translate(e,t,n){return Wt.makeTranslation(e,t,n),this.applyMatrix4(Wt),this}scale(e,t,n){return Wt.makeScale(e,t,n),this.applyMatrix4(Wt),this}lookAt(e){return To.lookAt(e),To.updateMatrix(),this.applyMatrix4(To.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ti).negate(),this.translate(Ti.x,Ti.y,Ti.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new dt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Xn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new A(-1/0,-1/0,-1/0),new A(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];Vt.setFromBufferAttribute(r),this.morphTargetsRelative?(xt.addVectors(this.boundingBox.min,Vt.min),this.boundingBox.expandByPoint(xt),xt.addVectors(this.boundingBox.max,Vt.max),this.boundingBox.expandByPoint(xt)):(this.boundingBox.expandByPoint(Vt.min),this.boundingBox.expandByPoint(Vt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new qn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new A,1/0);return}if(e){const n=this.boundingSphere.center;if(Vt.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];hs.setFromBufferAttribute(a),this.morphTargetsRelative?(xt.addVectors(Vt.min,hs.min),Vt.expandByPoint(xt),xt.addVectors(Vt.max,hs.max),Vt.expandByPoint(xt)):(Vt.expandByPoint(hs.min),Vt.expandByPoint(hs.max))}Vt.getCenter(n);let i=0;for(let r=0,o=e.count;r<o;r++)xt.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(xt));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],l=this.morphTargetsRelative;for(let u=0,h=a.count;u<h;u++)xt.fromBufferAttribute(a,u),l&&(Ti.fromBufferAttribute(e,u),xt.add(Ti)),i=Math.max(i,n.distanceToSquared(xt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,i=t.position.array,r=t.normal.array,o=t.uv.array,a=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ct(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,u=[],h=[];for(let N=0;N<a;N++)u[N]=new A,h[N]=new A;const d=new A,f=new A,m=new A,_=new oe,g=new oe,p=new oe,v=new A,S=new A;function y(N,C,B){d.fromArray(i,N*3),f.fromArray(i,C*3),m.fromArray(i,B*3),_.fromArray(o,N*2),g.fromArray(o,C*2),p.fromArray(o,B*2),f.sub(d),m.sub(d),g.sub(_),p.sub(_);const R=1/(g.x*p.y-p.x*g.y);!isFinite(R)||(v.copy(f).multiplyScalar(p.y).addScaledVector(m,-g.y).multiplyScalar(R),S.copy(m).multiplyScalar(g.x).addScaledVector(f,-p.x).multiplyScalar(R),u[N].add(v),u[C].add(v),u[B].add(v),h[N].add(S),h[C].add(S),h[B].add(S))}c(y,"handleTriangle");let b=this.groups;b.length===0&&(b=[{start:0,count:n.length}]);for(let N=0,C=b.length;N<C;++N){const B=b[N],R=B.start,D=B.count;for(let k=R,G=R+D;k<G;k+=3)y(n[k+0],n[k+1],n[k+2])}const M=new A,P=new A,O=new A,x=new A;function L(N){O.fromArray(r,N*3),x.copy(O);const C=u[N];M.copy(C),M.sub(O.multiplyScalar(O.dot(C))).normalize(),P.crossVectors(x,C);const R=P.dot(h[N])<0?-1:1;l[N*4]=M.x,l[N*4+1]=M.y,l[N*4+2]=M.z,l[N*4+3]=R}c(L,"handleVertex");for(let N=0,C=b.length;N<C;++N){const B=b[N],R=B.start,D=B.count;for(let k=R,G=R+D;k<G;k+=3)L(n[k+0]),L(n[k+1]),L(n[k+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ct(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,m=n.count;f<m;f++)n.setXYZ(f,0,0,0);const i=new A,r=new A,o=new A,a=new A,l=new A,u=new A,h=new A,d=new A;if(e)for(let f=0,m=e.count;f<m;f+=3){const _=e.getX(f+0),g=e.getX(f+1),p=e.getX(f+2);i.fromBufferAttribute(t,_),r.fromBufferAttribute(t,g),o.fromBufferAttribute(t,p),h.subVectors(o,r),d.subVectors(i,r),h.cross(d),a.fromBufferAttribute(n,_),l.fromBufferAttribute(n,g),u.fromBufferAttribute(n,p),a.add(h),l.add(h),u.add(h),n.setXYZ(_,a.x,a.y,a.z),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(p,u.x,u.y,u.z)}else for(let f=0,m=t.count;f<m;f+=3)i.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),h.subVectors(o,r),d.subVectors(i,r),h.cross(d),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)xt.fromBufferAttribute(e,t),xt.normalize(),e.setXYZ(t,xt.x,xt.y,xt.z)}toNonIndexed(){function e(a,l){const u=a.array,h=a.itemSize,d=a.normalized,f=new u.constructor(l.length*h);let m=0,_=0;for(let g=0,p=l.length;g<p;g++){a.isInterleavedBufferAttribute?m=l[g]*a.data.stride+a.offset:m=l[g]*h;for(let v=0;v<h;v++)f[_++]=u[m++]}return new Ct(f,h,d)}if(c(e,"convertBufferAttribute"),this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Nt,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],u=e(l,n);t.setAttribute(a,u)}const r=this.morphAttributes;for(const a in r){const l=[],u=r[a];for(let h=0,d=u.length;h<d;h++){const f=u[h],m=e(f,n);l.push(m)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const u=o[a];t.addGroup(u.start,u.count,u.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const u=n[l];e.data.attributes[l]=u.toJSON(e.data)}const i={};let r=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],h=[];for(let d=0,f=u.length;d<f;d++){const m=u[d];h.push(m.toJSON(e.data))}h.length>0&&(i[l]=h,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const u in i){const h=i[u];this.setAttribute(u,h.clone(t))}const r=e.morphAttributes;for(const u in r){const h=[],d=r[u];for(let f=0,m=d.length;f<m;f++)h.push(d[f].clone(t));this.morphAttributes[u]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let u=0,h=o.length;u<h;u++){const d=o[u];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}c(Nt,"BufferGeometry");const $l=new Ne,Ei=new Qi,Eo=new qn,ds=new A,fs=new A,ps=new A,Ao=new A,ir=new A,sr=new oe,rr=new oe,or=new oe,Co=new A,ar=new A;class st extends Qe{constructor(e=new Nt,t=new Nn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(r&&a){ir.set(0,0,0);for(let l=0,u=r.length;l<u;l++){const h=a[l],d=r[l];h!==0&&(Ao.fromBufferAttribute(d,e),o?ir.addScaledVector(Ao,h):ir.addScaledVector(Ao.sub(t),h))}t.add(ir)}return this.isSkinnedMesh&&this.boneTransform(e,t),t}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;if(i===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),Eo.copy(n.boundingSphere),Eo.applyMatrix4(r),e.ray.intersectsSphere(Eo)===!1)||($l.copy(r).invert(),Ei.copy(e.ray).applyMatrix4($l),n.boundingBox!==null&&Ei.intersectsBox(n.boundingBox)===!1))return;let o;const a=n.index,l=n.attributes.position,u=n.attributes.uv,h=n.attributes.uv2,d=n.groups,f=n.drawRange;if(a!==null)if(Array.isArray(i))for(let m=0,_=d.length;m<_;m++){const g=d[m],p=i[g.materialIndex],v=Math.max(g.start,f.start),S=Math.min(a.count,Math.min(g.start+g.count,f.start+f.count));for(let y=v,b=S;y<b;y+=3){const M=a.getX(y),P=a.getX(y+1),O=a.getX(y+2);o=lr(this,p,e,Ei,u,h,M,P,O),o&&(o.faceIndex=Math.floor(y/3),o.face.materialIndex=g.materialIndex,t.push(o))}}else{const m=Math.max(0,f.start),_=Math.min(a.count,f.start+f.count);for(let g=m,p=_;g<p;g+=3){const v=a.getX(g),S=a.getX(g+1),y=a.getX(g+2);o=lr(this,i,e,Ei,u,h,v,S,y),o&&(o.faceIndex=Math.floor(g/3),t.push(o))}}else if(l!==void 0)if(Array.isArray(i))for(let m=0,_=d.length;m<_;m++){const g=d[m],p=i[g.materialIndex],v=Math.max(g.start,f.start),S=Math.min(l.count,Math.min(g.start+g.count,f.start+f.count));for(let y=v,b=S;y<b;y+=3){const M=y,P=y+1,O=y+2;o=lr(this,p,e,Ei,u,h,M,P,O),o&&(o.faceIndex=Math.floor(y/3),o.face.materialIndex=g.materialIndex,t.push(o))}}else{const m=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let g=m,p=_;g<p;g+=3){const v=g,S=g+1,y=g+2;o=lr(this,i,e,Ei,u,h,v,S,y),o&&(o.faceIndex=Math.floor(g/3),t.push(o))}}}}c(st,"Mesh");function Ep(s,e,t,n,i,r,o,a){let l;if(e.side===$t?l=n.intersectTriangle(o,r,i,!0,a):l=n.intersectTriangle(i,r,o,e.side===Bn,a),l===null)return null;ar.copy(a),ar.applyMatrix4(s.matrixWorld);const u=t.ray.origin.distanceTo(ar);return u<t.near||u>t.far?null:{distance:u,point:ar.clone(),object:s}}c(Ep,"checkIntersection");function lr(s,e,t,n,i,r,o,a,l){s.getVertexPosition(o,ds),s.getVertexPosition(a,fs),s.getVertexPosition(l,ps);const u=Ep(s,e,t,n,ds,fs,ps,Co);if(u){i&&(sr.fromBufferAttribute(i,o),rr.fromBufferAttribute(i,a),or.fromBufferAttribute(i,l),u.uv=hn.getUV(Co,ds,fs,ps,sr,rr,or,new oe)),r&&(sr.fromBufferAttribute(r,o),rr.fromBufferAttribute(r,a),or.fromBufferAttribute(r,l),u.uv2=hn.getUV(Co,ds,fs,ps,sr,rr,or,new oe));const h={a:o,b:a,c:l,normal:new A,materialIndex:0};hn.getNormal(ds,fs,ps,h.normal),u.face=h}return u}c(lr,"checkBufferGeometryIntersection");class nn extends Nt{constructor(e=1,t=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};const a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);const l=[],u=[],h=[],d=[];let f=0,m=0;_("z","y","x",-1,-1,n,t,e,o,r,0),_("z","y","x",1,-1,n,t,-e,o,r,1),_("x","z","y",1,1,e,n,t,i,o,2),_("x","z","y",1,-1,e,n,-t,i,o,3),_("x","y","z",1,-1,e,t,n,i,r,4),_("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new dt(u,3)),this.setAttribute("normal",new dt(h,3)),this.setAttribute("uv",new dt(d,2));function _(g,p,v,S,y,b,M,P,O,x,L){const N=b/O,C=M/x,B=b/2,R=M/2,D=P/2,k=O+1,G=x+1;let ee=0,W=0;const te=new A;for(let ie=0;ie<G;ie++){const H=ie*C-R;for(let j=0;j<k;j++){const ne=j*N-B;te[g]=ne*S,te[p]=H*y,te[v]=D,u.push(te.x,te.y,te.z),te[g]=0,te[p]=0,te[v]=P>0?1:-1,h.push(te.x,te.y,te.z),d.push(j/O),d.push(1-ie/x),ee+=1}}for(let ie=0;ie<x;ie++)for(let H=0;H<O;H++){const j=f+H+k*ie,ne=f+H+k*(ie+1),ae=f+(H+1)+k*(ie+1),he=f+(H+1)+k*ie;l.push(j,ne,he),l.push(ne,ae,he),W+=6}a.addGroup(m,W,L),m+=W,f+=ee}c(_,"buildPlane")}static fromJSON(e){return new nn(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}c(nn,"BoxGeometry");function Yi(s){const e={};for(const t in s){e[t]={};for(const n in s[t]){const i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}c(Yi,"cloneUniforms");function Ot(s){const e={};for(let t=0;t<s.length;t++){const n=Yi(s[t]);for(const i in n)e[i]=n[i]}return e}c(Ot,"mergeUniforms");function Ap(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}c(Ap,"cloneUniformsGroups");function yu(s){return s.getRenderTarget()===null&&s.outputEncoding===Xe?cn:ks}c(yu,"getUnlitUniformColorSpace");const Cp={clone:Yi,merge:Ot};var Lp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Rp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Vn extends Kt{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Lp,this.fragmentShader=Rp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Yi(e.uniforms),this.uniformsGroups=Ap(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}c(Vn,"ShaderMaterial");class Na extends Qe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ne,this.projectionMatrix=new Ne,this.projectionMatrixInverse=new Ne}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}c(Na,"Camera");class At extends Na{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=zs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Es*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return zs*2*Math.atan(Math.tan(Es*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Es*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,u=o.fullHeight;r+=o.offsetX*i/l,t-=o.offsetY*n/u,i*=o.width/l,n*=o.height/u}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}c(At,"PerspectiveCamera");const Ai=-90,Ci=1;class bu extends Qe{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n;const i=new At(Ai,Ci,e,t);i.layers=this.layers,i.up.set(0,1,0),i.lookAt(1,0,0),this.add(i);const r=new At(Ai,Ci,e,t);r.layers=this.layers,r.up.set(0,1,0),r.lookAt(-1,0,0),this.add(r);const o=new At(Ai,Ci,e,t);o.layers=this.layers,o.up.set(0,0,-1),o.lookAt(0,1,0),this.add(o);const a=new At(Ai,Ci,e,t);a.layers=this.layers,a.up.set(0,0,1),a.lookAt(0,-1,0),this.add(a);const l=new At(Ai,Ci,e,t);l.layers=this.layers,l.up.set(0,1,0),l.lookAt(0,0,1),this.add(l);const u=new At(Ai,Ci,e,t);u.layers=this.layers,u.up.set(0,1,0),u.lookAt(0,0,-1),this.add(u)}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[i,r,o,a,l,u]=this.children,h=e.getRenderTarget(),d=e.toneMapping,f=e.xr.enabled;e.toneMapping=Tn,e.xr.enabled=!1;const m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,i),e.setRenderTarget(n,1),e.render(t,r),e.setRenderTarget(n,2),e.render(t,o),e.setRenderTarget(n,3),e.render(t,a),e.setRenderTarget(n,4),e.render(t,l),n.texture.generateMipmaps=m,e.setRenderTarget(n,5),e.render(t,u),e.setRenderTarget(h),e.toneMapping=d,e.xr.enabled=f,n.texture.needsPMREMUpdate=!0}}c(bu,"CubeCamera");class Fa extends ht{constructor(e,t,n,i,r,o,a,l,u,h){e=e!==void 0?e:[],t=t!==void 0?t:Wi,super(e,t,n,i,r,o,a,l,u,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}c(Fa,"CubeTexture");class wu extends Hn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Fa(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Ft}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new nn(5,5,5),r=new Vn({name:"CubemapFromEquirect",uniforms:Yi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:$t,blending:zn});r.uniforms.tEquirect.value=t;const o=new st(i,r),a=t.minFilter;return t.minFilter===ui&&(t.minFilter=Ft),new bu(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,i){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(r)}}c(wu,"WebGLCubeRenderTarget");const Lo=new A,Pp=new A,Dp=new kt;class Dn{constructor(e=new A(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Lo.subVectors(n,t).cross(Pp.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){const n=e.delta(Lo),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(n).multiplyScalar(r).add(e.start)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Dp.getNormalMatrix(e),i=this.coplanarPoint(Lo).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}c(Dn,"Plane");const Li=new qn,cr=new A;class zr{constructor(e=new Dn,t=new Dn,n=new Dn,i=new Dn,r=new Dn,o=new Dn){this.planes=[e,t,n,i,r,o]}set(e,t,n,i,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e){const t=this.planes,n=e.elements,i=n[0],r=n[1],o=n[2],a=n[3],l=n[4],u=n[5],h=n[6],d=n[7],f=n[8],m=n[9],_=n[10],g=n[11],p=n[12],v=n[13],S=n[14],y=n[15];return t[0].setComponents(a-i,d-l,g-f,y-p).normalize(),t[1].setComponents(a+i,d+l,g+f,y+p).normalize(),t[2].setComponents(a+r,d+u,g+m,y+v).normalize(),t[3].setComponents(a-r,d-u,g-m,y-v).normalize(),t[4].setComponents(a-o,d-h,g-_,y-S).normalize(),t[5].setComponents(a+o,d+h,g+_,y+S).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),Li.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(Li)}intersectsSprite(e){return Li.center.set(0,0,0),Li.radius=.7071067811865476,Li.applyMatrix4(e.matrixWorld),this.intersectsSphere(Li)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(cr.x=i.normal.x>0?e.max.x:e.min.x,cr.y=i.normal.y>0?e.max.y:e.min.y,cr.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(cr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}c(zr,"Frustum");function Mu(){let s=null,e=!1,t=null,n=null;function i(r,o){t(r,o),n=s.requestAnimationFrame(i)}return c(i,"onAnimationFrame"),{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}c(Mu,"WebGLAnimation");function Ip(s,e){const t=e.isWebGL2,n=new WeakMap;function i(u,h){const d=u.array,f=u.usage,m=s.createBuffer();s.bindBuffer(h,m),s.bufferData(h,d,f),u.onUploadCallback();let _;if(d instanceof Float32Array)_=5126;else if(d instanceof Uint16Array)if(u.isFloat16BufferAttribute)if(t)_=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=5123;else if(d instanceof Int16Array)_=5122;else if(d instanceof Uint32Array)_=5125;else if(d instanceof Int32Array)_=5124;else if(d instanceof Int8Array)_=5120;else if(d instanceof Uint8Array)_=5121;else if(d instanceof Uint8ClampedArray)_=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:m,type:_,bytesPerElement:d.BYTES_PER_ELEMENT,version:u.version}}c(i,"createBuffer");function r(u,h,d){const f=h.array,m=h.updateRange;s.bindBuffer(d,u),m.count===-1?s.bufferSubData(d,0,f):(t?s.bufferSubData(d,m.offset*f.BYTES_PER_ELEMENT,f,m.offset,m.count):s.bufferSubData(d,m.offset*f.BYTES_PER_ELEMENT,f.subarray(m.offset,m.offset+m.count)),m.count=-1),h.onUploadCallback()}c(r,"updateBuffer");function o(u){return u.isInterleavedBufferAttribute&&(u=u.data),n.get(u)}c(o,"get");function a(u){u.isInterleavedBufferAttribute&&(u=u.data);const h=n.get(u);h&&(s.deleteBuffer(h.buffer),n.delete(u))}c(a,"remove");function l(u,h){if(u.isGLBufferAttribute){const f=n.get(u);(!f||f.version<u.version)&&n.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}u.isInterleavedBufferAttribute&&(u=u.data);const d=n.get(u);d===void 0?n.set(u,i(u,h)):d.version<u.version&&(r(d.buffer,u,h),d.version=u.version)}return c(l,"update"),{get:o,remove:a,update:l}}c(Ip,"WebGLAttributes");class Ur extends Nt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(i),u=a+1,h=l+1,d=e/a,f=t/l,m=[],_=[],g=[],p=[];for(let v=0;v<h;v++){const S=v*f-o;for(let y=0;y<u;y++){const b=y*d-r;_.push(b,-S,0),g.push(0,0,1),p.push(y/a),p.push(1-v/l)}}for(let v=0;v<l;v++)for(let S=0;S<a;S++){const y=S+u*v,b=S+u*(v+1),M=S+1+u*(v+1),P=S+1+u*v;m.push(y,b,P),m.push(b,M,P)}this.setIndex(m),this.setAttribute("position",new dt(_,3)),this.setAttribute("normal",new dt(g,3)),this.setAttribute("uv",new dt(p,2))}static fromJSON(e){return new Ur(e.width,e.height,e.widthSegments,e.heightSegments)}}c(Ur,"PlaneGeometry");var Op=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,Np=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Fp=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,kp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,zp=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Up=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Bp="vec3 transformed = vec3( position );",Hp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Vp=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
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
#endif`,Gp=`#ifdef USE_IRIDESCENCE
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
#endif`,Wp=`#ifdef USE_BUMPMAP
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
#endif`,jp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Xp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,qp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,$p=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Yp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Kp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Jp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Zp=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Qp=`#define PI 3.141592653589793
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
}`,em=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,tm=`vec3 transformedNormal = objectNormal;
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
#endif`,nm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,im=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,sm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,rm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,om="gl_FragColor = linearToOutputTexel( gl_FragColor );",am=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,lm=`#ifdef USE_ENVMAP
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
#endif`,cm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,um=`#ifdef USE_ENVMAP
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
#endif`,hm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,dm=`#ifdef USE_ENVMAP
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
#endif`,fm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,pm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,mm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,gm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,_m=`#ifdef USE_GRADIENTMAP
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
}`,vm=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,xm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ym=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,bm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,wm=`uniform bool receiveShadow;
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
#endif`,Mm=`#if defined( USE_ENVMAP )
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
#endif`,Sm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Tm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Em=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Am=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Cm=`PhysicalMaterial material;
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
#endif`,Lm=`struct PhysicalMaterial {
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
}`,Rm=`
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
#endif`,Pm=`#if defined( RE_IndirectDiffuse )
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
#endif`,Dm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,Im=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Om=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Nm=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Fm=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,km=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,zm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Um=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Bm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Hm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Vm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Gm=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Wm=`#ifdef USE_MORPHNORMALS
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
#endif`,jm=`#ifdef USE_MORPHTARGETS
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
#endif`,Xm=`#ifdef USE_MORPHTARGETS
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
#endif`,qm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
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
vec3 geometryNormal = normal;`,$m=`#ifdef OBJECTSPACE_NORMALMAP
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
#endif`,Ym=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Km=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Jm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Zm=`#ifdef USE_NORMALMAP
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
#endif`,Qm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,eg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,tg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,ng=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ig=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,sg=`vec3 packNormalToRGB( const in vec3 normal ) {
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
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
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
}`,rg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,og=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ag=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,lg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,cg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ug=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,hg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,dg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,fg=`#if defined( USE_SHADOWMAP ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,pg=`float getShadowMask() {
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
}`,mg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,gg=`#ifdef USE_SKINNING
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
#endif`,_g=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,vg=`#ifdef USE_SKINNING
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
#endif`,xg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,yg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,bg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,wg=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Mg=`#ifdef USE_TRANSMISSION
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
#endif`,Sg=`#ifdef USE_TRANSMISSION
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
		if ( isinf( attenuationDistance ) ) {
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
#endif`,Tg=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,Eg=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,Ag=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,Cg=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,Lg=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,Rg=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,Pg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Dg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Ig=`uniform sampler2D t2D;
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
	#include <encodings_fragment>
}`,Og=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ng=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Fg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,kg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,zg=`#include <common>
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
}`,Ug=`#if DEPTH_PACKING == 3200
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
}`,Bg=`#define DISTANCE
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
}`,Hg=`#define DISTANCE
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
}`,Vg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Gg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Wg=`uniform float scale;
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
}`,jg=`uniform vec3 diffuse;
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
}`,Xg=`#include <common>
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
}`,qg=`uniform vec3 diffuse;
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
}`,$g=`#define LAMBERT
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
}`,Yg=`#define LAMBERT
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
}`,Kg=`#define MATCAP
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
}`,Jg=`#define MATCAP
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
}`,Zg=`#define NORMAL
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
}`,Qg=`#define NORMAL
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
}`,e_=`#define PHONG
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
}`,t_=`#define PHONG
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
}`,n_=`#define STANDARD
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
}`,i_=`#define STANDARD
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
}`,s_=`#define TOON
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
}`,r_=`#define TOON
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
}`,o_=`uniform float size;
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
}`,a_=`uniform vec3 diffuse;
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
}`,l_=`#include <common>
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
}`,c_=`uniform vec3 color;
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
}`,u_=`uniform float rotation;
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
}`,h_=`uniform vec3 diffuse;
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
}`,Fe={alphamap_fragment:Op,alphamap_pars_fragment:Np,alphatest_fragment:Fp,alphatest_pars_fragment:kp,aomap_fragment:zp,aomap_pars_fragment:Up,begin_vertex:Bp,beginnormal_vertex:Hp,bsdfs:Vp,iridescence_fragment:Gp,bumpmap_pars_fragment:Wp,clipping_planes_fragment:jp,clipping_planes_pars_fragment:Xp,clipping_planes_pars_vertex:qp,clipping_planes_vertex:$p,color_fragment:Yp,color_pars_fragment:Kp,color_pars_vertex:Jp,color_vertex:Zp,common:Qp,cube_uv_reflection_fragment:em,defaultnormal_vertex:tm,displacementmap_pars_vertex:nm,displacementmap_vertex:im,emissivemap_fragment:sm,emissivemap_pars_fragment:rm,encodings_fragment:om,encodings_pars_fragment:am,envmap_fragment:lm,envmap_common_pars_fragment:cm,envmap_pars_fragment:um,envmap_pars_vertex:hm,envmap_physical_pars_fragment:Mm,envmap_vertex:dm,fog_vertex:fm,fog_pars_vertex:pm,fog_fragment:mm,fog_pars_fragment:gm,gradientmap_pars_fragment:_m,lightmap_fragment:vm,lightmap_pars_fragment:xm,lights_lambert_fragment:ym,lights_lambert_pars_fragment:bm,lights_pars_begin:wm,lights_toon_fragment:Sm,lights_toon_pars_fragment:Tm,lights_phong_fragment:Em,lights_phong_pars_fragment:Am,lights_physical_fragment:Cm,lights_physical_pars_fragment:Lm,lights_fragment_begin:Rm,lights_fragment_maps:Pm,lights_fragment_end:Dm,logdepthbuf_fragment:Im,logdepthbuf_pars_fragment:Om,logdepthbuf_pars_vertex:Nm,logdepthbuf_vertex:Fm,map_fragment:km,map_pars_fragment:zm,map_particle_fragment:Um,map_particle_pars_fragment:Bm,metalnessmap_fragment:Hm,metalnessmap_pars_fragment:Vm,morphcolor_vertex:Gm,morphnormal_vertex:Wm,morphtarget_pars_vertex:jm,morphtarget_vertex:Xm,normal_fragment_begin:qm,normal_fragment_maps:$m,normal_pars_fragment:Ym,normal_pars_vertex:Km,normal_vertex:Jm,normalmap_pars_fragment:Zm,clearcoat_normal_fragment_begin:Qm,clearcoat_normal_fragment_maps:eg,clearcoat_pars_fragment:tg,iridescence_pars_fragment:ng,output_fragment:ig,packing:sg,premultiplied_alpha_fragment:rg,project_vertex:og,dithering_fragment:ag,dithering_pars_fragment:lg,roughnessmap_fragment:cg,roughnessmap_pars_fragment:ug,shadowmap_pars_fragment:hg,shadowmap_pars_vertex:dg,shadowmap_vertex:fg,shadowmask_pars_fragment:pg,skinbase_vertex:mg,skinning_pars_vertex:gg,skinning_vertex:_g,skinnormal_vertex:vg,specularmap_fragment:xg,specularmap_pars_fragment:yg,tonemapping_fragment:bg,tonemapping_pars_fragment:wg,transmission_fragment:Mg,transmission_pars_fragment:Sg,uv_pars_fragment:Tg,uv_pars_vertex:Eg,uv_vertex:Ag,uv2_pars_fragment:Cg,uv2_pars_vertex:Lg,uv2_vertex:Rg,worldpos_vertex:Pg,background_vert:Dg,background_frag:Ig,backgroundCube_vert:Og,backgroundCube_frag:Ng,cube_vert:Fg,cube_frag:kg,depth_vert:zg,depth_frag:Ug,distanceRGBA_vert:Bg,distanceRGBA_frag:Hg,equirect_vert:Vg,equirect_frag:Gg,linedashed_vert:Wg,linedashed_frag:jg,meshbasic_vert:Xg,meshbasic_frag:qg,meshlambert_vert:$g,meshlambert_frag:Yg,meshmatcap_vert:Kg,meshmatcap_frag:Jg,meshnormal_vert:Zg,meshnormal_frag:Qg,meshphong_vert:e_,meshphong_frag:t_,meshphysical_vert:n_,meshphysical_frag:i_,meshtoon_vert:s_,meshtoon_frag:r_,points_vert:o_,points_frag:a_,shadow_vert:l_,shadow_frag:c_,sprite_vert:u_,sprite_frag:h_},ue={common:{diffuse:{value:new Oe(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new kt},uv2Transform:{value:new kt},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new oe(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Oe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Oe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new kt}},sprite:{diffuse:{value:new Oe(16777215)},opacity:{value:1},center:{value:new oe(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new kt}}},un={basic:{uniforms:Ot([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.fog]),vertexShader:Fe.meshbasic_vert,fragmentShader:Fe.meshbasic_frag},lambert:{uniforms:Ot([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,ue.lights,{emissive:{value:new Oe(0)}}]),vertexShader:Fe.meshlambert_vert,fragmentShader:Fe.meshlambert_frag},phong:{uniforms:Ot([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,ue.lights,{emissive:{value:new Oe(0)},specular:{value:new Oe(1118481)},shininess:{value:30}}]),vertexShader:Fe.meshphong_vert,fragmentShader:Fe.meshphong_frag},standard:{uniforms:Ot([ue.common,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.roughnessmap,ue.metalnessmap,ue.fog,ue.lights,{emissive:{value:new Oe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Fe.meshphysical_vert,fragmentShader:Fe.meshphysical_frag},toon:{uniforms:Ot([ue.common,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.gradientmap,ue.fog,ue.lights,{emissive:{value:new Oe(0)}}]),vertexShader:Fe.meshtoon_vert,fragmentShader:Fe.meshtoon_frag},matcap:{uniforms:Ot([ue.common,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,{matcap:{value:null}}]),vertexShader:Fe.meshmatcap_vert,fragmentShader:Fe.meshmatcap_frag},points:{uniforms:Ot([ue.points,ue.fog]),vertexShader:Fe.points_vert,fragmentShader:Fe.points_frag},dashed:{uniforms:Ot([ue.common,ue.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Fe.linedashed_vert,fragmentShader:Fe.linedashed_frag},depth:{uniforms:Ot([ue.common,ue.displacementmap]),vertexShader:Fe.depth_vert,fragmentShader:Fe.depth_frag},normal:{uniforms:Ot([ue.common,ue.bumpmap,ue.normalmap,ue.displacementmap,{opacity:{value:1}}]),vertexShader:Fe.meshnormal_vert,fragmentShader:Fe.meshnormal_frag},sprite:{uniforms:Ot([ue.sprite,ue.fog]),vertexShader:Fe.sprite_vert,fragmentShader:Fe.sprite_frag},background:{uniforms:{uvTransform:{value:new kt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Fe.background_vert,fragmentShader:Fe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Fe.backgroundCube_vert,fragmentShader:Fe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Fe.cube_vert,fragmentShader:Fe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Fe.equirect_vert,fragmentShader:Fe.equirect_frag},distanceRGBA:{uniforms:Ot([ue.common,ue.displacementmap,{referencePosition:{value:new A},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Fe.distanceRGBA_vert,fragmentShader:Fe.distanceRGBA_frag},shadow:{uniforms:Ot([ue.lights,ue.fog,{color:{value:new Oe(0)},opacity:{value:1}}]),vertexShader:Fe.shadow_vert,fragmentShader:Fe.shadow_frag}};un.physical={uniforms:Ot([un.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new oe(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new Oe(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new oe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new Oe(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new Oe(1,1,1)},specularColorMap:{value:null}}]),vertexShader:Fe.meshphysical_vert,fragmentShader:Fe.meshphysical_frag};const ur={r:0,b:0,g:0};function d_(s,e,t,n,i,r,o){const a=new Oe(0);let l=r===!0?0:1,u,h,d=null,f=0,m=null;function _(p,v){let S=!1,y=v.isScene===!0?v.background:null;y&&y.isTexture&&(y=(v.backgroundBlurriness>0?t:e).get(y));const b=s.xr,M=b.getSession&&b.getSession();M&&M.environmentBlendMode==="additive"&&(y=null),y===null?g(a,l):y&&y.isColor&&(g(y,1),S=!0),(s.autoClear||S)&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil),y&&(y.isCubeTexture||y.mapping===Fr)?(h===void 0&&(h=new st(new nn(1,1,1),new Vn({name:"BackgroundCubeMaterial",uniforms:Yi(un.backgroundCube.uniforms),vertexShader:un.backgroundCube.vertexShader,fragmentShader:un.backgroundCube.fragmentShader,side:$t,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(P,O,x){this.matrixWorld.copyPosition(x.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),h.material.uniforms.envMap.value=y,h.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,h.material.toneMapped=y.encoding!==Xe,(d!==y||f!==y.version||m!==s.toneMapping)&&(h.material.needsUpdate=!0,d=y,f=y.version,m=s.toneMapping),h.layers.enableAll(),p.unshift(h,h.geometry,h.material,0,0,null)):y&&y.isTexture&&(u===void 0&&(u=new st(new Ur(2,2),new Vn({name:"BackgroundMaterial",uniforms:Yi(un.background.uniforms),vertexShader:un.background.vertexShader,fragmentShader:un.background.fragmentShader,side:Bn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(u)),u.material.uniforms.t2D.value=y,u.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,u.material.toneMapped=y.encoding!==Xe,y.matrixAutoUpdate===!0&&y.updateMatrix(),u.material.uniforms.uvTransform.value.copy(y.matrix),(d!==y||f!==y.version||m!==s.toneMapping)&&(u.material.needsUpdate=!0,d=y,f=y.version,m=s.toneMapping),u.layers.enableAll(),p.unshift(u,u.geometry,u.material,0,0,null))}c(_,"render");function g(p,v){p.getRGB(ur,yu(s)),n.buffers.color.setClear(ur.r,ur.g,ur.b,v,o)}return c(g,"setClear"),{getClearColor:function(){return a},setClearColor:function(p,v=1){a.set(p),l=v,g(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,g(a,l)},render:_}}c(d_,"WebGLBackground");function f_(s,e,t,n){const i=s.getParameter(34921),r=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||r!==null,a={},l=p(null);let u=l,h=!1;function d(D,k,G,ee,W){let te=!1;if(o){const ie=g(ee,G,k);u!==ie&&(u=ie,m(u.object)),te=v(D,ee,G,W),te&&S(D,ee,G,W)}else{const ie=k.wireframe===!0;(u.geometry!==ee.id||u.program!==G.id||u.wireframe!==ie)&&(u.geometry=ee.id,u.program=G.id,u.wireframe=ie,te=!0)}W!==null&&t.update(W,34963),(te||h)&&(h=!1,x(D,k,G,ee),W!==null&&s.bindBuffer(34963,t.get(W).buffer))}c(d,"setup");function f(){return n.isWebGL2?s.createVertexArray():r.createVertexArrayOES()}c(f,"createVertexArrayObject");function m(D){return n.isWebGL2?s.bindVertexArray(D):r.bindVertexArrayOES(D)}c(m,"bindVertexArrayObject");function _(D){return n.isWebGL2?s.deleteVertexArray(D):r.deleteVertexArrayOES(D)}c(_,"deleteVertexArrayObject");function g(D,k,G){const ee=G.wireframe===!0;let W=a[D.id];W===void 0&&(W={},a[D.id]=W);let te=W[k.id];te===void 0&&(te={},W[k.id]=te);let ie=te[ee];return ie===void 0&&(ie=p(f()),te[ee]=ie),ie}c(g,"getBindingState");function p(D){const k=[],G=[],ee=[];for(let W=0;W<i;W++)k[W]=0,G[W]=0,ee[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:G,attributeDivisors:ee,object:D,attributes:{},index:null}}c(p,"createBindingState");function v(D,k,G,ee){const W=u.attributes,te=k.attributes;let ie=0;const H=G.getAttributes();for(const j in H)if(H[j].location>=0){const ae=W[j];let he=te[j];if(he===void 0&&(j==="instanceMatrix"&&D.instanceMatrix&&(he=D.instanceMatrix),j==="instanceColor"&&D.instanceColor&&(he=D.instanceColor)),ae===void 0||ae.attribute!==he||he&&ae.data!==he.data)return!0;ie++}return u.attributesNum!==ie||u.index!==ee}c(v,"needsUpdate");function S(D,k,G,ee){const W={},te=k.attributes;let ie=0;const H=G.getAttributes();for(const j in H)if(H[j].location>=0){let ae=te[j];ae===void 0&&(j==="instanceMatrix"&&D.instanceMatrix&&(ae=D.instanceMatrix),j==="instanceColor"&&D.instanceColor&&(ae=D.instanceColor));const he={};he.attribute=ae,ae&&ae.data&&(he.data=ae.data),W[j]=he,ie++}u.attributes=W,u.attributesNum=ie,u.index=ee}c(S,"saveCache");function y(){const D=u.newAttributes;for(let k=0,G=D.length;k<G;k++)D[k]=0}c(y,"initAttributes");function b(D){M(D,0)}c(b,"enableAttribute");function M(D,k){const G=u.newAttributes,ee=u.enabledAttributes,W=u.attributeDivisors;G[D]=1,ee[D]===0&&(s.enableVertexAttribArray(D),ee[D]=1),W[D]!==k&&((n.isWebGL2?s:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](D,k),W[D]=k)}c(M,"enableAttributeAndDivisor");function P(){const D=u.newAttributes,k=u.enabledAttributes;for(let G=0,ee=k.length;G<ee;G++)k[G]!==D[G]&&(s.disableVertexAttribArray(G),k[G]=0)}c(P,"disableUnusedAttributes");function O(D,k,G,ee,W,te){n.isWebGL2===!0&&(G===5124||G===5125)?s.vertexAttribIPointer(D,k,G,W,te):s.vertexAttribPointer(D,k,G,ee,W,te)}c(O,"vertexAttribPointer");function x(D,k,G,ee){if(n.isWebGL2===!1&&(D.isInstancedMesh||ee.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;y();const W=ee.attributes,te=G.getAttributes(),ie=k.defaultAttributeValues;for(const H in te){const j=te[H];if(j.location>=0){let ne=W[H];if(ne===void 0&&(H==="instanceMatrix"&&D.instanceMatrix&&(ne=D.instanceMatrix),H==="instanceColor"&&D.instanceColor&&(ne=D.instanceColor)),ne!==void 0){const ae=ne.normalized,he=ne.itemSize,$=t.get(ne);if($===void 0)continue;const Pe=$.buffer,_e=$.type,Le=$.bytesPerElement;if(ne.isInterleavedBufferAttribute){const fe=ne.data,ke=fe.stride,Z=ne.offset;if(fe.isInstancedInterleavedBuffer){for(let J=0;J<j.locationSize;J++)M(j.location+J,fe.meshPerAttribute);D.isInstancedMesh!==!0&&ee._maxInstanceCount===void 0&&(ee._maxInstanceCount=fe.meshPerAttribute*fe.count)}else for(let J=0;J<j.locationSize;J++)b(j.location+J);s.bindBuffer(34962,Pe);for(let J=0;J<j.locationSize;J++)O(j.location+J,he/j.locationSize,_e,ae,ke*Le,(Z+he/j.locationSize*J)*Le)}else{if(ne.isInstancedBufferAttribute){for(let fe=0;fe<j.locationSize;fe++)M(j.location+fe,ne.meshPerAttribute);D.isInstancedMesh!==!0&&ee._maxInstanceCount===void 0&&(ee._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let fe=0;fe<j.locationSize;fe++)b(j.location+fe);s.bindBuffer(34962,Pe);for(let fe=0;fe<j.locationSize;fe++)O(j.location+fe,he/j.locationSize,_e,ae,he*Le,he/j.locationSize*fe*Le)}}else if(ie!==void 0){const ae=ie[H];if(ae!==void 0)switch(ae.length){case 2:s.vertexAttrib2fv(j.location,ae);break;case 3:s.vertexAttrib3fv(j.location,ae);break;case 4:s.vertexAttrib4fv(j.location,ae);break;default:s.vertexAttrib1fv(j.location,ae)}}}}P()}c(x,"setupVertexAttributes");function L(){B();for(const D in a){const k=a[D];for(const G in k){const ee=k[G];for(const W in ee)_(ee[W].object),delete ee[W];delete k[G]}delete a[D]}}c(L,"dispose");function N(D){if(a[D.id]===void 0)return;const k=a[D.id];for(const G in k){const ee=k[G];for(const W in ee)_(ee[W].object),delete ee[W];delete k[G]}delete a[D.id]}c(N,"releaseStatesOfGeometry");function C(D){for(const k in a){const G=a[k];if(G[D.id]===void 0)continue;const ee=G[D.id];for(const W in ee)_(ee[W].object),delete ee[W];delete G[D.id]}}c(C,"releaseStatesOfProgram");function B(){R(),h=!0,u!==l&&(u=l,m(u.object))}c(B,"reset");function R(){l.geometry=null,l.program=null,l.wireframe=!1}return c(R,"resetDefaultState"),{setup:d,reset:B,resetDefaultState:R,dispose:L,releaseStatesOfGeometry:N,releaseStatesOfProgram:C,initAttributes:y,enableAttribute:b,disableUnusedAttributes:P}}c(f_,"WebGLBindingStates");function p_(s,e,t,n){const i=n.isWebGL2;let r;function o(u){r=u}c(o,"setMode");function a(u,h){s.drawArrays(r,u,h),t.update(h,r,1)}c(a,"render");function l(u,h,d){if(d===0)return;let f,m;if(i)f=s,m="drawArraysInstanced";else if(f=e.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[m](r,u,h,d),t.update(h,r,d)}c(l,"renderInstances"),this.setMode=o,this.render=a,this.renderInstances=l}c(p_,"WebGLBufferRenderer");function m_(s,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const O=e.get("EXT_texture_filter_anisotropic");n=s.getParameter(O.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}c(i,"getMaxAnisotropy");function r(O){if(O==="highp"){if(s.getShaderPrecisionFormat(35633,36338).precision>0&&s.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";O="mediump"}return O==="mediump"&&s.getShaderPrecisionFormat(35633,36337).precision>0&&s.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}c(r,"getMaxPrecision");const o=typeof WebGL2RenderingContext<"u"&&s instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext<"u"&&s instanceof WebGL2ComputeRenderingContext;let a=t.precision!==void 0?t.precision:"highp";const l=r(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const u=o||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,d=s.getParameter(34930),f=s.getParameter(35660),m=s.getParameter(3379),_=s.getParameter(34076),g=s.getParameter(34921),p=s.getParameter(36347),v=s.getParameter(36348),S=s.getParameter(36349),y=f>0,b=o||e.has("OES_texture_float"),M=y&&b,P=o?s.getParameter(36183):0;return{isWebGL2:o,drawBuffers:u,getMaxAnisotropy:i,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:h,maxTextures:d,maxVertexTextures:f,maxTextureSize:m,maxCubemapSize:_,maxAttributes:g,maxVertexUniforms:p,maxVaryings:v,maxFragmentUniforms:S,vertexTextures:y,floatFragmentTextures:b,floatVertexTextures:M,maxSamples:P}}c(m_,"WebGLCapabilities");function g_(s){const e=this;let t=null,n=0,i=!1,r=!1;const o=new Dn,a=new kt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f,m){const _=d.length!==0||f||n!==0||i;return i=f,t=h(d,m,0),n=d.length,_},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1,u()},this.setState=function(d,f,m){const _=d.clippingPlanes,g=d.clipIntersection,p=d.clipShadows,v=s.get(d);if(!i||_===null||_.length===0||r&&!p)r?h(null):u();else{const S=r?0:n,y=S*4;let b=v.clippingState||null;l.value=b,b=h(_,f,y,m);for(let M=0;M!==y;++M)b[M]=t[M];v.clippingState=b,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=S}};function u(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}c(u,"resetGlobalState");function h(d,f,m,_){const g=d!==null?d.length:0;let p=null;if(g!==0){if(p=l.value,_!==!0||p===null){const v=m+g*4,S=f.matrixWorldInverse;a.getNormalMatrix(S),(p===null||p.length<v)&&(p=new Float32Array(v));for(let y=0,b=m;y!==g;++y,b+=4)o.copy(d[y]).applyMatrix4(S,a),o.normal.toArray(p,b),p[b+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,p}c(h,"projectPlanes")}c(g_,"WebGLClipping");function __(s){let e=new WeakMap;function t(o,a){return a===jo?o.mapping=Wi:a===Xo&&(o.mapping=ji),o}c(t,"mapTextureMapping");function n(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===jo||a===Xo)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const u=new wu(l.height/2);return u.fromEquirectangularTexture(s,o),e.set(o,u),o.addEventListener("dispose",i),t(u.texture,o.mapping)}else return null}}return o}c(n,"get");function i(o){const a=o.target;a.removeEventListener("dispose",i);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}c(i,"onTextureDispose");function r(){e=new WeakMap}return c(r,"dispose"),{get:n,dispose:r}}c(__,"WebGLCubeMaps");class Br extends Na{constructor(e=-1,t=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,o=n+e,a=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=u*this.view.offsetX,o=r+u*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}c(Br,"OrthographicCamera");const Ni=4,Yl=[.125,.215,.35,.446,.526,.582],ri=20,Ro=new Br,Kl=new Oe;let Po=null;const si=(1+Math.sqrt(5))/2,Ri=1/si,Jl=[new A(1,1,1),new A(-1,1,1),new A(1,1,-1),new A(-1,1,-1),new A(0,si,Ri),new A(0,si,-Ri),new A(Ri,0,si),new A(-Ri,0,si),new A(si,Ri,0),new A(-si,Ri,0)];class Jo{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){Po=this._renderer.getRenderTarget(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,i,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ec(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ql(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Po),e.scissorTest=!1,hr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Wi||e.mapping===ji?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Po=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Ft,minFilter:Ft,generateMipmaps:!1,type:Ns,format:qt,encoding:di,depthBuffer:!1},i=Zl(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Zl(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=v_(r)),this._blurMaterial=x_(r,e,t)}return i}_compileMaterial(e){const t=new st(this._lodPlanes[0],e);this._renderer.compile(t,Ro)}_sceneToCubeUV(e,t,n,i){const a=new At(90,1,t,n),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,f=h.toneMapping;h.getClearColor(Kl),h.toneMapping=Tn,h.autoClear=!1;const m=new Nn({name:"PMREM.Background",side:$t,depthWrite:!1,depthTest:!1}),_=new st(new nn,m);let g=!1;const p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,g=!0):(m.color.copy(Kl),g=!0);for(let v=0;v<6;v++){const S=v%3;S===0?(a.up.set(0,l[v],0),a.lookAt(u[v],0,0)):S===1?(a.up.set(0,0,l[v]),a.lookAt(0,u[v],0)):(a.up.set(0,l[v],0),a.lookAt(0,0,u[v]));const y=this._cubeSize;hr(i,S*y,v>2?y:0,y,y),h.setRenderTarget(i),g&&h.render(_,a),h.render(e,a)}_.geometry.dispose(),_.material.dispose(),h.toneMapping=f,h.autoClear=d,e.background=p}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Wi||e.mapping===ji;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=ec()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ql());const r=i?this._cubemapMaterial:this._equirectMaterial,o=new st(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;hr(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,Ro)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const r=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),o=Jl[(i-1)%Jl.length];this._blur(e,i-1,i,r,o)}t.autoClear=n}_blur(e,t,n,i,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",r),this._halfBlur(o,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,o,a){const l=this._renderer,u=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,d=new st(this._lodPlanes[i],u),f=u.uniforms,m=this._sizeLods[n]-1,_=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*ri-1),g=r/_,p=isFinite(r)?1+Math.floor(h*g):ri;p>ri&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${ri}`);const v=[];let S=0;for(let O=0;O<ri;++O){const x=O/g,L=Math.exp(-x*x/2);v.push(L),O===0?S+=L:O<p&&(S+=2*L)}for(let O=0;O<v.length;O++)v[O]=v[O]/S;f.envMap.value=e.texture,f.samples.value=p,f.weights.value=v,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:y}=this;f.dTheta.value=_,f.mipInt.value=y-n;const b=this._sizeLods[i],M=3*b*(i>y-Ni?i-y+Ni:0),P=4*(this._cubeSize-b);hr(t,M,P,3*b,2*b),l.setRenderTarget(t),l.render(d,Ro)}}c(Jo,"PMREMGenerator");function v_(s){const e=[],t=[],n=[];let i=s;const r=s-Ni+1+Yl.length;for(let o=0;o<r;o++){const a=Math.pow(2,i);t.push(a);let l=1/a;o>s-Ni?l=Yl[o-s+Ni-1]:o===0&&(l=0),n.push(l);const u=1/(a-2),h=-u,d=1+u,f=[h,h,d,h,d,d,h,h,d,d,h,d],m=6,_=6,g=3,p=2,v=1,S=new Float32Array(g*_*m),y=new Float32Array(p*_*m),b=new Float32Array(v*_*m);for(let P=0;P<m;P++){const O=P%3*2/3-1,x=P>2?0:-1,L=[O,x,0,O+2/3,x,0,O+2/3,x+1,0,O,x,0,O+2/3,x+1,0,O,x+1,0];S.set(L,g*_*P),y.set(f,p*_*P);const N=[P,P,P,P,P,P];b.set(N,v*_*P)}const M=new Nt;M.setAttribute("position",new Ct(S,g)),M.setAttribute("uv",new Ct(y,p)),M.setAttribute("faceIndex",new Ct(b,v)),e.push(M),i>Ni&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}c(v_,"_createPlanes");function Zl(s,e,t){const n=new Hn(s,e,t);return n.texture.mapping=Fr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}c(Zl,"_createRenderTarget");function hr(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}c(hr,"_setViewport");function x_(s,e,t){const n=new Float32Array(ri),i=new A(0,1,0);return new Vn({name:"SphericalGaussianBlur",defines:{n:ri,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:ka(),fragmentShader:`

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
		`,blending:zn,depthTest:!1,depthWrite:!1})}c(x_,"_getBlurShader");function Ql(){return new Vn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ka(),fragmentShader:`

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
		`,blending:zn,depthTest:!1,depthWrite:!1})}c(Ql,"_getEquirectMaterial");function ec(){return new Vn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ka(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:zn,depthTest:!1,depthWrite:!1})}c(ec,"_getCubemapMaterial");function ka(){return`

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
	`}c(ka,"_getCommonVertexShader");function y_(s){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,u=l===jo||l===Xo,h=l===Wi||l===ji;if(u||h)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let d=e.get(a);return t===null&&(t=new Jo(s)),d=u?t.fromEquirectangular(a,d):t.fromCubemap(a,d),e.set(a,d),d.texture}else{if(e.has(a))return e.get(a).texture;{const d=a.image;if(u&&d&&d.height>0||h&&d&&i(d)){t===null&&(t=new Jo(s));const f=u?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,f),a.addEventListener("dispose",r),f.texture}else return null}}}return a}c(n,"get");function i(a){let l=0;const u=6;for(let h=0;h<u;h++)a[h]!==void 0&&l++;return l===u}c(i,"isCubeTextureComplete");function r(a){const l=a.target;l.removeEventListener("dispose",r);const u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}c(r,"onTextureDispose");function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return c(o,"dispose"),{get:n,dispose:o}}c(y_,"WebGLCubeUVMaps");function b_(s){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return c(t,"getExtension"),{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}c(b_,"WebGLExtensions");function w_(s,e,t,n){const i={},r=new WeakMap;function o(d){const f=d.target;f.index!==null&&e.remove(f.index);for(const _ in f.attributes)e.remove(f.attributes[_]);f.removeEventListener("dispose",o),delete i[f.id];const m=r.get(f);m&&(e.remove(m),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}c(o,"onGeometryDispose");function a(d,f){return i[f.id]===!0||(f.addEventListener("dispose",o),i[f.id]=!0,t.memory.geometries++),f}c(a,"get");function l(d){const f=d.attributes;for(const _ in f)e.update(f[_],34962);const m=d.morphAttributes;for(const _ in m){const g=m[_];for(let p=0,v=g.length;p<v;p++)e.update(g[p],34962)}}c(l,"update");function u(d){const f=[],m=d.index,_=d.attributes.position;let g=0;if(m!==null){const S=m.array;g=m.version;for(let y=0,b=S.length;y<b;y+=3){const M=S[y+0],P=S[y+1],O=S[y+2];f.push(M,P,P,O,O,M)}}else{const S=_.array;g=_.version;for(let y=0,b=S.length/3-1;y<b;y+=3){const M=y+0,P=y+1,O=y+2;f.push(M,P,P,O,O,M)}}const p=new(_u(f)?Oa:Ia)(f,1);p.version=g;const v=r.get(d);v&&e.remove(v),r.set(d,p)}c(u,"updateWireframeAttribute");function h(d){const f=r.get(d);if(f){const m=d.index;m!==null&&f.version<m.version&&u(d)}else u(d);return r.get(d)}return c(h,"getWireframeAttribute"),{get:a,update:l,getWireframeAttribute:h}}c(w_,"WebGLGeometries");function M_(s,e,t,n){const i=n.isWebGL2;let r;function o(f){r=f}c(o,"setMode");let a,l;function u(f){a=f.type,l=f.bytesPerElement}c(u,"setIndex");function h(f,m){s.drawElements(r,m,a,f*l),t.update(m,r,1)}c(h,"render");function d(f,m,_){if(_===0)return;let g,p;if(i)g=s,p="drawElementsInstanced";else if(g=e.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",g===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}g[p](r,m,a,f*l,_),t.update(m,r,_)}c(d,"renderInstances"),this.setMode=o,this.setIndex=u,this.render=h,this.renderInstances=d}c(M_,"WebGLIndexedBufferRenderer");function S_(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case 4:t.triangles+=a*(r/3);break;case 1:t.lines+=a*(r/2);break;case 3:t.lines+=a*(r-1);break;case 2:t.lines+=a*r;break;case 0:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}c(n,"update");function i(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return c(i,"reset"),{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}c(S_,"WebGLInfo");function T_(s,e){return s[0]-e[0]}c(T_,"numericalSort");function E_(s,e){return Math.abs(e[1])-Math.abs(s[1])}c(E_,"absNumericalSort");function A_(s,e,t){const n={},i=new Float32Array(8),r=new WeakMap,o=new Ke,a=[];for(let u=0;u<8;u++)a[u]=[u,0];function l(u,h,d,f){const m=u.morphTargetInfluences;if(e.isWebGL2===!0){const g=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,p=g!==void 0?g.length:0;let v=r.get(h);if(v===void 0||v.count!==p){let G=function(){D.dispose(),r.delete(h),h.removeEventListener("dispose",G)};var _=G;c(G,"disposeTexture"),v!==void 0&&v.texture.dispose();const b=h.morphAttributes.position!==void 0,M=h.morphAttributes.normal!==void 0,P=h.morphAttributes.color!==void 0,O=h.morphAttributes.position||[],x=h.morphAttributes.normal||[],L=h.morphAttributes.color||[];let N=0;b===!0&&(N=1),M===!0&&(N=2),P===!0&&(N=3);let C=h.attributes.position.count*N,B=1;C>e.maxTextureSize&&(B=Math.ceil(C/e.maxTextureSize),C=e.maxTextureSize);const R=new Float32Array(C*B*4*p),D=new Da(R,C,B,p);D.type=On,D.needsUpdate=!0;const k=N*4;for(let ee=0;ee<p;ee++){const W=O[ee],te=x[ee],ie=L[ee],H=C*B*4*ee;for(let j=0;j<W.count;j++){const ne=j*k;b===!0&&(o.fromBufferAttribute(W,j),R[H+ne+0]=o.x,R[H+ne+1]=o.y,R[H+ne+2]=o.z,R[H+ne+3]=0),M===!0&&(o.fromBufferAttribute(te,j),R[H+ne+4]=o.x,R[H+ne+5]=o.y,R[H+ne+6]=o.z,R[H+ne+7]=0),P===!0&&(o.fromBufferAttribute(ie,j),R[H+ne+8]=o.x,R[H+ne+9]=o.y,R[H+ne+10]=o.z,R[H+ne+11]=ie.itemSize===4?o.w:1)}}v={count:p,texture:D,size:new oe(C,B)},r.set(h,v),h.addEventListener("dispose",G)}let S=0;for(let b=0;b<m.length;b++)S+=m[b];const y=h.morphTargetsRelative?1:1-S;f.getUniforms().setValue(s,"morphTargetBaseInfluence",y),f.getUniforms().setValue(s,"morphTargetInfluences",m),f.getUniforms().setValue(s,"morphTargetsTexture",v.texture,t),f.getUniforms().setValue(s,"morphTargetsTextureSize",v.size)}else{const g=m===void 0?0:m.length;let p=n[h.id];if(p===void 0||p.length!==g){p=[];for(let M=0;M<g;M++)p[M]=[M,0];n[h.id]=p}for(let M=0;M<g;M++){const P=p[M];P[0]=M,P[1]=m[M]}p.sort(E_);for(let M=0;M<8;M++)M<g&&p[M][1]?(a[M][0]=p[M][0],a[M][1]=p[M][1]):(a[M][0]=Number.MAX_SAFE_INTEGER,a[M][1]=0);a.sort(T_);const v=h.morphAttributes.position,S=h.morphAttributes.normal;let y=0;for(let M=0;M<8;M++){const P=a[M],O=P[0],x=P[1];O!==Number.MAX_SAFE_INTEGER&&x?(v&&h.getAttribute("morphTarget"+M)!==v[O]&&h.setAttribute("morphTarget"+M,v[O]),S&&h.getAttribute("morphNormal"+M)!==S[O]&&h.setAttribute("morphNormal"+M,S[O]),i[M]=x,y+=x):(v&&h.hasAttribute("morphTarget"+M)===!0&&h.deleteAttribute("morphTarget"+M),S&&h.hasAttribute("morphNormal"+M)===!0&&h.deleteAttribute("morphNormal"+M),i[M]=0)}const b=h.morphTargetsRelative?1:1-y;f.getUniforms().setValue(s,"morphTargetBaseInfluence",b),f.getUniforms().setValue(s,"morphTargetInfluences",i)}}return c(l,"update"),{update:l}}c(A_,"WebGLMorphtargets");function C_(s,e,t,n){let i=new WeakMap;function r(l){const u=n.render.frame,h=l.geometry,d=e.get(l,h);return i.get(d)!==u&&(e.update(d),i.set(d,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),t.update(l.instanceMatrix,34962),l.instanceColor!==null&&t.update(l.instanceColor,34962)),d}c(r,"update");function o(){i=new WeakMap}c(o,"dispose");function a(l){const u=l.target;u.removeEventListener("dispose",a),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return c(a,"onInstancedMeshDispose"),{update:r,dispose:o}}c(C_,"WebGLObjects");const Su=new ht,Tu=new Da,Eu=new xu,Au=new Fa,tc=[],nc=[],ic=new Float32Array(16),sc=new Float32Array(9),rc=new Float32Array(4);function ts(s,e,t){const n=s[0];if(n<=0||n>0)return s;const i=e*t;let r=tc[i];if(r===void 0&&(r=new Float32Array(i),tc[i]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,s[o].toArray(r,a)}return r}c(ts,"flatten");function ft(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}c(ft,"arraysEqual");function pt(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}c(pt,"copyArray");function Hr(s,e){let t=nc[e];t===void 0&&(t=new Int32Array(e),nc[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}c(Hr,"allocTexUnits");function L_(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}c(L_,"setValueV1f");function R_(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ft(t,e))return;s.uniform2fv(this.addr,e),pt(t,e)}}c(R_,"setValueV2f");function P_(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(ft(t,e))return;s.uniform3fv(this.addr,e),pt(t,e)}}c(P_,"setValueV3f");function D_(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ft(t,e))return;s.uniform4fv(this.addr,e),pt(t,e)}}c(D_,"setValueV4f");function I_(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(ft(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),pt(t,e)}else{if(ft(t,n))return;rc.set(n),s.uniformMatrix2fv(this.addr,!1,rc),pt(t,n)}}c(I_,"setValueM2");function O_(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(ft(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),pt(t,e)}else{if(ft(t,n))return;sc.set(n),s.uniformMatrix3fv(this.addr,!1,sc),pt(t,n)}}c(O_,"setValueM3");function N_(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(ft(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),pt(t,e)}else{if(ft(t,n))return;ic.set(n),s.uniformMatrix4fv(this.addr,!1,ic),pt(t,n)}}c(N_,"setValueM4");function F_(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}c(F_,"setValueV1i");function k_(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ft(t,e))return;s.uniform2iv(this.addr,e),pt(t,e)}}c(k_,"setValueV2i");function z_(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ft(t,e))return;s.uniform3iv(this.addr,e),pt(t,e)}}c(z_,"setValueV3i");function U_(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ft(t,e))return;s.uniform4iv(this.addr,e),pt(t,e)}}c(U_,"setValueV4i");function B_(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}c(B_,"setValueV1ui");function H_(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ft(t,e))return;s.uniform2uiv(this.addr,e),pt(t,e)}}c(H_,"setValueV2ui");function V_(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ft(t,e))return;s.uniform3uiv(this.addr,e),pt(t,e)}}c(V_,"setValueV3ui");function G_(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ft(t,e))return;s.uniform4uiv(this.addr,e),pt(t,e)}}c(G_,"setValueV4ui");function W_(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2D(e||Su,i)}c(W_,"setValueT1");function j_(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Eu,i)}c(j_,"setValueT3D1");function X_(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Au,i)}c(X_,"setValueT6");function q_(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Tu,i)}c(q_,"setValueT2DArray1");function $_(s){switch(s){case 5126:return L_;case 35664:return R_;case 35665:return P_;case 35666:return D_;case 35674:return I_;case 35675:return O_;case 35676:return N_;case 5124:case 35670:return F_;case 35667:case 35671:return k_;case 35668:case 35672:return z_;case 35669:case 35673:return U_;case 5125:return B_;case 36294:return H_;case 36295:return V_;case 36296:return G_;case 35678:case 36198:case 36298:case 36306:case 35682:return W_;case 35679:case 36299:case 36307:return j_;case 35680:case 36300:case 36308:case 36293:return X_;case 36289:case 36303:case 36311:case 36292:return q_}}c($_,"getSingularSetter");function Y_(s,e){s.uniform1fv(this.addr,e)}c(Y_,"setValueV1fArray");function K_(s,e){const t=ts(e,this.size,2);s.uniform2fv(this.addr,t)}c(K_,"setValueV2fArray");function J_(s,e){const t=ts(e,this.size,3);s.uniform3fv(this.addr,t)}c(J_,"setValueV3fArray");function Z_(s,e){const t=ts(e,this.size,4);s.uniform4fv(this.addr,t)}c(Z_,"setValueV4fArray");function Q_(s,e){const t=ts(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}c(Q_,"setValueM2Array");function ev(s,e){const t=ts(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}c(ev,"setValueM3Array");function tv(s,e){const t=ts(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}c(tv,"setValueM4Array");function nv(s,e){s.uniform1iv(this.addr,e)}c(nv,"setValueV1iArray");function iv(s,e){s.uniform2iv(this.addr,e)}c(iv,"setValueV2iArray");function sv(s,e){s.uniform3iv(this.addr,e)}c(sv,"setValueV3iArray");function rv(s,e){s.uniform4iv(this.addr,e)}c(rv,"setValueV4iArray");function ov(s,e){s.uniform1uiv(this.addr,e)}c(ov,"setValueV1uiArray");function av(s,e){s.uniform2uiv(this.addr,e)}c(av,"setValueV2uiArray");function lv(s,e){s.uniform3uiv(this.addr,e)}c(lv,"setValueV3uiArray");function cv(s,e){s.uniform4uiv(this.addr,e)}c(cv,"setValueV4uiArray");function uv(s,e,t){const n=this.cache,i=e.length,r=Hr(t,i);ft(n,r)||(s.uniform1iv(this.addr,r),pt(n,r));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||Su,r[o])}c(uv,"setValueT1Array");function hv(s,e,t){const n=this.cache,i=e.length,r=Hr(t,i);ft(n,r)||(s.uniform1iv(this.addr,r),pt(n,r));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||Eu,r[o])}c(hv,"setValueT3DArray");function dv(s,e,t){const n=this.cache,i=e.length,r=Hr(t,i);ft(n,r)||(s.uniform1iv(this.addr,r),pt(n,r));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||Au,r[o])}c(dv,"setValueT6Array");function fv(s,e,t){const n=this.cache,i=e.length,r=Hr(t,i);ft(n,r)||(s.uniform1iv(this.addr,r),pt(n,r));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||Tu,r[o])}c(fv,"setValueT2DArrayArray");function pv(s){switch(s){case 5126:return Y_;case 35664:return K_;case 35665:return J_;case 35666:return Z_;case 35674:return Q_;case 35675:return ev;case 35676:return tv;case 5124:case 35670:return nv;case 35667:case 35671:return iv;case 35668:case 35672:return sv;case 35669:case 35673:return rv;case 5125:return ov;case 36294:return av;case 36295:return lv;case 36296:return cv;case 35678:case 36198:case 36298:case 36306:case 35682:return uv;case 35679:case 36299:case 36307:return hv;case 35680:case 36300:case 36308:case 36293:return dv;case 36289:case 36303:case 36311:case 36292:return fv}}c(pv,"getPureArraySetter");class Cu{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=$_(t.type)}}c(Cu,"SingleUniform");class Lu{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=pv(t.type)}}c(Lu,"PureArrayUniform");class Ru{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let r=0,o=i.length;r!==o;++r){const a=i[r];a.setValue(e,t[a.id],n)}}}c(Ru,"StructuredUniform");const Do=/(\w+)(\])?(\[|\.)?/g;function oc(s,e){s.seq.push(e),s.map[e.id]=e}c(oc,"addUniform");function mv(s,e,t){const n=s.name,i=n.length;for(Do.lastIndex=0;;){const r=Do.exec(n),o=Do.lastIndex;let a=r[1];const l=r[2]==="]",u=r[3];if(l&&(a=a|0),u===void 0||u==="["&&o+2===i){oc(t,u===void 0?new Cu(a,s,e):new Lu(a,s,e));break}else{let d=t.map[a];d===void 0&&(d=new Ru(a),oc(t,d)),t=d}}}c(mv,"parseUniform");class Cs{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,35718);for(let i=0;i<n;++i){const r=e.getActiveUniform(t,i),o=e.getUniformLocation(t,r.name);mv(r,o,this)}}setValue(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,o=t.length;r!==o;++r){const a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const o=e[i];o.id in t&&n.push(o)}return n}}c(Cs,"WebGLUniforms");function ac(s,e,t){const n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}c(ac,"WebGLShader");let gv=0;function _v(s,e){const t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=i;o<r;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}c(_v,"handleSource");function vv(s){switch(s){case di:return["Linear","( value )"];case Xe:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",s),["Linear","( value )"]}}c(vv,"getEncodingComponents");function lc(s,e,t){const n=s.getShaderParameter(e,35713),i=s.getShaderInfoLog(e).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+i+`

`+_v(s.getShaderSource(e),o)}else return i}c(lc,"getShaderErrors");function xv(s,e){const t=vv(e);return"vec4 "+s+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}c(xv,"getTexelEncodingFunction");function yv(s,e){let t;switch(e){case Pf:t="Linear";break;case Df:t="Reinhard";break;case If:t="OptimizedCineon";break;case Of:t="ACESFilmic";break;case Nf:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}c(yv,"getToneMappingFunction");function bv(s){return[s.extensionDerivatives||s.envMapCubeUVHeight||s.bumpMap||s.tangentSpaceNormalMap||s.clearcoatNormalMap||s.flatShading||s.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(s.extensionFragDepth||s.logarithmicDepthBuffer)&&s.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",s.extensionDrawBuffers&&s.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(s.extensionShaderTextureLOD||s.envMap||s.transmission)&&s.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(ws).join(`
`)}c(bv,"generateExtensions");function wv(s){const e=[];for(const t in s){const n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}c(wv,"generateDefines");function Mv(s,e){const t={},n=s.getProgramParameter(e,35721);for(let i=0;i<n;i++){const r=s.getActiveAttrib(e,i),o=r.name;let a=1;r.type===35674&&(a=2),r.type===35675&&(a=3),r.type===35676&&(a=4),t[o]={type:r.type,location:s.getAttribLocation(e,o),locationSize:a}}return t}c(Mv,"fetchAttributeLocations");function ws(s){return s!==""}c(ws,"filterEmptyLine");function cc(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}c(cc,"replaceLightNums");function uc(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}c(uc,"replaceClippingPlaneNums");const Sv=/^[ \t]*#include +<([\w\d./]+)>/gm;function Zo(s){return s.replace(Sv,Tv)}c(Zo,"resolveIncludes");function Tv(s,e){const t=Fe[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return Zo(t)}c(Tv,"includeReplacer");const Ev=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function hc(s){return s.replace(Ev,Av)}c(hc,"unrollLoops");function Av(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}c(Av,"loopReplacer");function dc(s){let e="precision "+s.precision+` float;
precision `+s.precision+" int;";return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}c(dc,"generatePrecision");function Cv(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===cu?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===cf?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===bs&&(e="SHADOWMAP_TYPE_VSM"),e}c(Cv,"generateShadowMapTypeDefine");function Lv(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Wi:case ji:e="ENVMAP_TYPE_CUBE";break;case Fr:e="ENVMAP_TYPE_CUBE_UV";break}return e}c(Lv,"generateEnvMapTypeDefine");function Rv(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case ji:e="ENVMAP_MODE_REFRACTION";break}return e}c(Rv,"generateEnvMapModeDefine");function Pv(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Aa:e="ENVMAP_BLENDING_MULTIPLY";break;case Lf:e="ENVMAP_BLENDING_MIX";break;case Rf:e="ENVMAP_BLENDING_ADD";break}return e}c(Pv,"generateEnvMapBlendingDefine");function Dv(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}c(Dv,"generateCubeUVSize");function Iv(s,e,t,n){const i=s.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=Cv(t),u=Lv(t),h=Rv(t),d=Pv(t),f=Dv(t),m=t.isWebGL2?"":bv(t),_=wv(r),g=i.createProgram();let p,v,S=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=[_].filter(ws).join(`
`),p.length>0&&(p+=`
`),v=[m,_].filter(ws).join(`
`),v.length>0&&(v+=`
`)):(p=[dc(t),"#define SHADER_NAME "+t.shaderName,_,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ws).join(`
`),v=[m,dc(t),"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Tn?"#define TONE_MAPPING":"",t.toneMapping!==Tn?Fe.tonemapping_pars_fragment:"",t.toneMapping!==Tn?yv("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Fe.encodings_pars_fragment,xv("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ws).join(`
`)),o=Zo(o),o=cc(o,t),o=uc(o,t),a=Zo(a),a=cc(a,t),a=uc(a,t),o=hc(o),a=hc(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,p=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,v=["#define varying in",t.glslVersion===kl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===kl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const y=S+p+o,b=S+v+a,M=ac(i,35633,y),P=ac(i,35632,b);if(i.attachShader(g,M),i.attachShader(g,P),t.index0AttributeName!==void 0?i.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(g,0,"position"),i.linkProgram(g),s.debug.checkShaderErrors){const L=i.getProgramInfoLog(g).trim(),N=i.getShaderInfoLog(M).trim(),C=i.getShaderInfoLog(P).trim();let B=!0,R=!0;if(i.getProgramParameter(g,35714)===!1){B=!1;const D=lc(i,M,"vertex"),k=lc(i,P,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(g,35715)+`

Program Info Log: `+L+`
`+D+`
`+k)}else L!==""?console.warn("THREE.WebGLProgram: Program Info Log:",L):(N===""||C==="")&&(R=!1);R&&(this.diagnostics={runnable:B,programLog:L,vertexShader:{log:N,prefix:p},fragmentShader:{log:C,prefix:v}})}i.deleteShader(M),i.deleteShader(P);let O;this.getUniforms=function(){return O===void 0&&(O=new Cs(i,g)),O};let x;return this.getAttributes=function(){return x===void 0&&(x=Mv(i,g)),x},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(g),this.program=void 0},this.name=t.shaderName,this.id=gv++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=M,this.fragmentShader=P,this}c(Iv,"WebGLProgram");let Ov=0;class Pu{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Du(e),t.set(e,n)),n}}c(Pu,"WebGLShaderCache");class Du{constructor(e){this.id=Ov++,this.code=e,this.usedTimes=0}}c(Du,"WebGLShaderStage");function Nv(s,e,t,n,i,r,o){const a=new kr,l=new Pu,u=[],h=i.isWebGL2,d=i.logarithmicDepthBuffer,f=i.vertexTextures;let m=i.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(x,L,N,C,B){const R=C.fog,D=B.geometry,k=x.isMeshStandardMaterial?C.environment:null,G=(x.isMeshStandardMaterial?t:e).get(x.envMap||k),ee=G&&G.mapping===Fr?G.image.height:null,W=_[x.type];x.precision!==null&&(m=i.getMaxPrecision(x.precision),m!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",m,"instead."));const te=D.morphAttributes.position||D.morphAttributes.normal||D.morphAttributes.color,ie=te!==void 0?te.length:0;let H=0;D.morphAttributes.position!==void 0&&(H=1),D.morphAttributes.normal!==void 0&&(H=2),D.morphAttributes.color!==void 0&&(H=3);let j,ne,ae,he;if(W){const ke=un[W];j=ke.vertexShader,ne=ke.fragmentShader}else j=x.vertexShader,ne=x.fragmentShader,l.update(x),ae=l.getVertexShaderID(x),he=l.getFragmentShaderID(x);const $=s.getRenderTarget(),Pe=x.alphaTest>0,_e=x.clearcoat>0,Le=x.iridescence>0;return{isWebGL2:h,shaderID:W,shaderName:x.type,vertexShader:j,fragmentShader:ne,defines:x.defines,customVertexShaderID:ae,customFragmentShaderID:he,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:m,instancing:B.isInstancedMesh===!0,instancingColor:B.isInstancedMesh===!0&&B.instanceColor!==null,supportsVertexTextures:f,outputEncoding:$===null?s.outputEncoding:$.isXRRenderTarget===!0?$.texture.encoding:di,map:!!x.map,matcap:!!x.matcap,envMap:!!G,envMapMode:G&&G.mapping,envMapCubeUVHeight:ee,lightMap:!!x.lightMap,aoMap:!!x.aoMap,emissiveMap:!!x.emissiveMap,bumpMap:!!x.bumpMap,normalMap:!!x.normalMap,objectSpaceNormalMap:x.normalMapType===tp,tangentSpaceNormalMap:x.normalMapType===Ca,decodeVideoTexture:!!x.map&&x.map.isVideoTexture===!0&&x.map.encoding===Xe,clearcoat:_e,clearcoatMap:_e&&!!x.clearcoatMap,clearcoatRoughnessMap:_e&&!!x.clearcoatRoughnessMap,clearcoatNormalMap:_e&&!!x.clearcoatNormalMap,iridescence:Le,iridescenceMap:Le&&!!x.iridescenceMap,iridescenceThicknessMap:Le&&!!x.iridescenceThicknessMap,displacementMap:!!x.displacementMap,roughnessMap:!!x.roughnessMap,metalnessMap:!!x.metalnessMap,specularMap:!!x.specularMap,specularIntensityMap:!!x.specularIntensityMap,specularColorMap:!!x.specularColorMap,opaque:x.transparent===!1&&x.blending===zi,alphaMap:!!x.alphaMap,alphaTest:Pe,gradientMap:!!x.gradientMap,sheen:x.sheen>0,sheenColorMap:!!x.sheenColorMap,sheenRoughnessMap:!!x.sheenRoughnessMap,transmission:x.transmission>0,transmissionMap:!!x.transmissionMap,thicknessMap:!!x.thicknessMap,combine:x.combine,vertexTangents:!!x.normalMap&&!!D.attributes.tangent,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!D.attributes.color&&D.attributes.color.itemSize===4,vertexUvs:!!x.map||!!x.bumpMap||!!x.normalMap||!!x.specularMap||!!x.alphaMap||!!x.emissiveMap||!!x.roughnessMap||!!x.metalnessMap||!!x.clearcoatMap||!!x.clearcoatRoughnessMap||!!x.clearcoatNormalMap||!!x.iridescenceMap||!!x.iridescenceThicknessMap||!!x.displacementMap||!!x.transmissionMap||!!x.thicknessMap||!!x.specularIntensityMap||!!x.specularColorMap||!!x.sheenColorMap||!!x.sheenRoughnessMap,uvsVertexOnly:!(x.map||x.bumpMap||x.normalMap||x.specularMap||x.alphaMap||x.emissiveMap||x.roughnessMap||x.metalnessMap||x.clearcoatNormalMap||x.iridescenceMap||x.iridescenceThicknessMap||x.transmission>0||x.transmissionMap||x.thicknessMap||x.specularIntensityMap||x.specularColorMap||x.sheen>0||x.sheenColorMap||x.sheenRoughnessMap)&&!!x.displacementMap,fog:!!R,useFog:x.fog===!0,fogExp2:R&&R.isFogExp2,flatShading:!!x.flatShading,sizeAttenuation:x.sizeAttenuation,logarithmicDepthBuffer:d,skinning:B.isSkinnedMesh===!0,morphTargets:D.morphAttributes.position!==void 0,morphNormals:D.morphAttributes.normal!==void 0,morphColors:D.morphAttributes.color!==void 0,morphTargetsCount:ie,morphTextureStride:H,numDirLights:L.directional.length,numPointLights:L.point.length,numSpotLights:L.spot.length,numSpotLightMaps:L.spotLightMap.length,numRectAreaLights:L.rectArea.length,numHemiLights:L.hemi.length,numDirLightShadows:L.directionalShadowMap.length,numPointLightShadows:L.pointShadowMap.length,numSpotLightShadows:L.spotShadowMap.length,numSpotLightShadowsWithMaps:L.numSpotLightShadowsWithMaps,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:x.dithering,shadowMapEnabled:s.shadowMap.enabled&&N.length>0,shadowMapType:s.shadowMap.type,toneMapping:x.toneMapped?s.toneMapping:Tn,physicallyCorrectLights:s.physicallyCorrectLights,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Ws,flipSided:x.side===$t,useDepthPacking:!!x.depthPacking,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionDerivatives:x.extensions&&x.extensions.derivatives,extensionFragDepth:x.extensions&&x.extensions.fragDepth,extensionDrawBuffers:x.extensions&&x.extensions.drawBuffers,extensionShaderTextureLOD:x.extensions&&x.extensions.shaderTextureLOD,rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),customProgramCacheKey:x.customProgramCacheKey()}}c(g,"getParameters");function p(x){const L=[];if(x.shaderID?L.push(x.shaderID):(L.push(x.customVertexShaderID),L.push(x.customFragmentShaderID)),x.defines!==void 0)for(const N in x.defines)L.push(N),L.push(x.defines[N]);return x.isRawShaderMaterial===!1&&(v(L,x),S(L,x),L.push(s.outputEncoding)),L.push(x.customProgramCacheKey),L.join()}c(p,"getProgramCacheKey");function v(x,L){x.push(L.precision),x.push(L.outputEncoding),x.push(L.envMapMode),x.push(L.envMapCubeUVHeight),x.push(L.combine),x.push(L.vertexUvs),x.push(L.fogExp2),x.push(L.sizeAttenuation),x.push(L.morphTargetsCount),x.push(L.morphAttributeCount),x.push(L.numDirLights),x.push(L.numPointLights),x.push(L.numSpotLights),x.push(L.numSpotLightMaps),x.push(L.numHemiLights),x.push(L.numRectAreaLights),x.push(L.numDirLightShadows),x.push(L.numPointLightShadows),x.push(L.numSpotLightShadows),x.push(L.numSpotLightShadowsWithMaps),x.push(L.shadowMapType),x.push(L.toneMapping),x.push(L.numClippingPlanes),x.push(L.numClipIntersection),x.push(L.depthPacking)}c(v,"getProgramCacheKeyParameters");function S(x,L){a.disableAll(),L.isWebGL2&&a.enable(0),L.supportsVertexTextures&&a.enable(1),L.instancing&&a.enable(2),L.instancingColor&&a.enable(3),L.map&&a.enable(4),L.matcap&&a.enable(5),L.envMap&&a.enable(6),L.lightMap&&a.enable(7),L.aoMap&&a.enable(8),L.emissiveMap&&a.enable(9),L.bumpMap&&a.enable(10),L.normalMap&&a.enable(11),L.objectSpaceNormalMap&&a.enable(12),L.tangentSpaceNormalMap&&a.enable(13),L.clearcoat&&a.enable(14),L.clearcoatMap&&a.enable(15),L.clearcoatRoughnessMap&&a.enable(16),L.clearcoatNormalMap&&a.enable(17),L.iridescence&&a.enable(18),L.iridescenceMap&&a.enable(19),L.iridescenceThicknessMap&&a.enable(20),L.displacementMap&&a.enable(21),L.specularMap&&a.enable(22),L.roughnessMap&&a.enable(23),L.metalnessMap&&a.enable(24),L.gradientMap&&a.enable(25),L.alphaMap&&a.enable(26),L.alphaTest&&a.enable(27),L.vertexColors&&a.enable(28),L.vertexAlphas&&a.enable(29),L.vertexUvs&&a.enable(30),L.vertexTangents&&a.enable(31),L.uvsVertexOnly&&a.enable(32),x.push(a.mask),a.disableAll(),L.fog&&a.enable(0),L.useFog&&a.enable(1),L.flatShading&&a.enable(2),L.logarithmicDepthBuffer&&a.enable(3),L.skinning&&a.enable(4),L.morphTargets&&a.enable(5),L.morphNormals&&a.enable(6),L.morphColors&&a.enable(7),L.premultipliedAlpha&&a.enable(8),L.shadowMapEnabled&&a.enable(9),L.physicallyCorrectLights&&a.enable(10),L.doubleSided&&a.enable(11),L.flipSided&&a.enable(12),L.useDepthPacking&&a.enable(13),L.dithering&&a.enable(14),L.specularIntensityMap&&a.enable(15),L.specularColorMap&&a.enable(16),L.transmission&&a.enable(17),L.transmissionMap&&a.enable(18),L.thicknessMap&&a.enable(19),L.sheen&&a.enable(20),L.sheenColorMap&&a.enable(21),L.sheenRoughnessMap&&a.enable(22),L.decodeVideoTexture&&a.enable(23),L.opaque&&a.enable(24),x.push(a.mask)}c(S,"getProgramCacheKeyBooleans");function y(x){const L=_[x.type];let N;if(L){const C=un[L];N=Cp.clone(C.uniforms)}else N=x.uniforms;return N}c(y,"getUniforms");function b(x,L){let N;for(let C=0,B=u.length;C<B;C++){const R=u[C];if(R.cacheKey===L){N=R,++N.usedTimes;break}}return N===void 0&&(N=new Iv(s,L,x,r),u.push(N)),N}c(b,"acquireProgram");function M(x){if(--x.usedTimes===0){const L=u.indexOf(x);u[L]=u[u.length-1],u.pop(),x.destroy()}}c(M,"releaseProgram");function P(x){l.remove(x)}c(P,"releaseShaderCache");function O(){l.dispose()}return c(O,"dispose"),{getParameters:g,getProgramCacheKey:p,getUniforms:y,acquireProgram:b,releaseProgram:M,releaseShaderCache:P,programs:u,dispose:O}}c(Nv,"WebGLPrograms");function Fv(){let s=new WeakMap;function e(r){let o=s.get(r);return o===void 0&&(o={},s.set(r,o)),o}c(e,"get");function t(r){s.delete(r)}c(t,"remove");function n(r,o,a){s.get(r)[o]=a}c(n,"update");function i(){s=new WeakMap}return c(i,"dispose"),{get:e,remove:t,update:n,dispose:i}}c(Fv,"WebGLProperties");function kv(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}c(kv,"painterSortStable");function fc(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}c(fc,"reversePainterSortStable");function pc(){const s=[];let e=0;const t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}c(r,"init");function o(d,f,m,_,g,p){let v=s[e];return v===void 0?(v={id:d.id,object:d,geometry:f,material:m,groupOrder:_,renderOrder:d.renderOrder,z:g,group:p},s[e]=v):(v.id=d.id,v.object=d,v.geometry=f,v.material=m,v.groupOrder=_,v.renderOrder=d.renderOrder,v.z=g,v.group=p),e++,v}c(o,"getNextRenderItem");function a(d,f,m,_,g,p){const v=o(d,f,m,_,g,p);m.transmission>0?n.push(v):m.transparent===!0?i.push(v):t.push(v)}c(a,"push");function l(d,f,m,_,g,p){const v=o(d,f,m,_,g,p);m.transmission>0?n.unshift(v):m.transparent===!0?i.unshift(v):t.unshift(v)}c(l,"unshift");function u(d,f){t.length>1&&t.sort(d||kv),n.length>1&&n.sort(f||fc),i.length>1&&i.sort(f||fc)}c(u,"sort");function h(){for(let d=e,f=s.length;d<f;d++){const m=s[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return c(h,"finish"),{opaque:t,transmissive:n,transparent:i,init:r,push:a,unshift:l,finish:h,sort:u}}c(pc,"WebGLRenderList");function zv(){let s=new WeakMap;function e(n,i){const r=s.get(n);let o;return r===void 0?(o=new pc,s.set(n,[o])):i>=r.length?(o=new pc,r.push(o)):o=r[i],o}c(e,"get");function t(){s=new WeakMap}return c(t,"dispose"),{get:e,dispose:t}}c(zv,"WebGLRenderLists");function Uv(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new A,color:new Oe};break;case"SpotLight":t={position:new A,direction:new A,color:new Oe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new A,color:new Oe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new A,skyColor:new Oe,groundColor:new Oe};break;case"RectAreaLight":t={color:new Oe,position:new A,halfWidth:new A,halfHeight:new A};break}return s[e.id]=t,t}}}c(Uv,"UniformsCache");function Bv(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new oe};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new oe};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new oe,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}c(Bv,"ShadowUniformsCache");let Hv=0;function Vv(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}c(Vv,"shadowCastingAndTexturingLightsFirst");function Gv(s,e){const t=new Uv,n=Bv(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let h=0;h<9;h++)i.probe.push(new A);const r=new A,o=new Ne,a=new Ne;function l(h,d){let f=0,m=0,_=0;for(let C=0;C<9;C++)i.probe[C].set(0,0,0);let g=0,p=0,v=0,S=0,y=0,b=0,M=0,P=0,O=0,x=0;h.sort(Vv);const L=d!==!0?Math.PI:1;for(let C=0,B=h.length;C<B;C++){const R=h[C],D=R.color,k=R.intensity,G=R.distance,ee=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)f+=D.r*k*L,m+=D.g*k*L,_+=D.b*k*L;else if(R.isLightProbe)for(let W=0;W<9;W++)i.probe[W].addScaledVector(R.sh.coefficients[W],k);else if(R.isDirectionalLight){const W=t.get(R);if(W.color.copy(R.color).multiplyScalar(R.intensity*L),R.castShadow){const te=R.shadow,ie=n.get(R);ie.shadowBias=te.bias,ie.shadowNormalBias=te.normalBias,ie.shadowRadius=te.radius,ie.shadowMapSize=te.mapSize,i.directionalShadow[g]=ie,i.directionalShadowMap[g]=ee,i.directionalShadowMatrix[g]=R.shadow.matrix,b++}i.directional[g]=W,g++}else if(R.isSpotLight){const W=t.get(R);W.position.setFromMatrixPosition(R.matrixWorld),W.color.copy(D).multiplyScalar(k*L),W.distance=G,W.coneCos=Math.cos(R.angle),W.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),W.decay=R.decay,i.spot[v]=W;const te=R.shadow;if(R.map&&(i.spotLightMap[O]=R.map,O++,te.updateMatrices(R),R.castShadow&&x++),i.spotLightMatrix[v]=te.matrix,R.castShadow){const ie=n.get(R);ie.shadowBias=te.bias,ie.shadowNormalBias=te.normalBias,ie.shadowRadius=te.radius,ie.shadowMapSize=te.mapSize,i.spotShadow[v]=ie,i.spotShadowMap[v]=ee,P++}v++}else if(R.isRectAreaLight){const W=t.get(R);W.color.copy(D).multiplyScalar(k),W.halfWidth.set(R.width*.5,0,0),W.halfHeight.set(0,R.height*.5,0),i.rectArea[S]=W,S++}else if(R.isPointLight){const W=t.get(R);if(W.color.copy(R.color).multiplyScalar(R.intensity*L),W.distance=R.distance,W.decay=R.decay,R.castShadow){const te=R.shadow,ie=n.get(R);ie.shadowBias=te.bias,ie.shadowNormalBias=te.normalBias,ie.shadowRadius=te.radius,ie.shadowMapSize=te.mapSize,ie.shadowCameraNear=te.camera.near,ie.shadowCameraFar=te.camera.far,i.pointShadow[p]=ie,i.pointShadowMap[p]=ee,i.pointShadowMatrix[p]=R.shadow.matrix,M++}i.point[p]=W,p++}else if(R.isHemisphereLight){const W=t.get(R);W.skyColor.copy(R.color).multiplyScalar(k*L),W.groundColor.copy(R.groundColor).multiplyScalar(k*L),i.hemi[y]=W,y++}}S>0&&(e.isWebGL2||s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ue.LTC_FLOAT_1,i.rectAreaLTC2=ue.LTC_FLOAT_2):s.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=ue.LTC_HALF_1,i.rectAreaLTC2=ue.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=f,i.ambient[1]=m,i.ambient[2]=_;const N=i.hash;(N.directionalLength!==g||N.pointLength!==p||N.spotLength!==v||N.rectAreaLength!==S||N.hemiLength!==y||N.numDirectionalShadows!==b||N.numPointShadows!==M||N.numSpotShadows!==P||N.numSpotMaps!==O)&&(i.directional.length=g,i.spot.length=v,i.rectArea.length=S,i.point.length=p,i.hemi.length=y,i.directionalShadow.length=b,i.directionalShadowMap.length=b,i.pointShadow.length=M,i.pointShadowMap.length=M,i.spotShadow.length=P,i.spotShadowMap.length=P,i.directionalShadowMatrix.length=b,i.pointShadowMatrix.length=M,i.spotLightMatrix.length=P+O-x,i.spotLightMap.length=O,i.numSpotLightShadowsWithMaps=x,N.directionalLength=g,N.pointLength=p,N.spotLength=v,N.rectAreaLength=S,N.hemiLength=y,N.numDirectionalShadows=b,N.numPointShadows=M,N.numSpotShadows=P,N.numSpotMaps=O,i.version=Hv++)}c(l,"setup");function u(h,d){let f=0,m=0,_=0,g=0,p=0;const v=d.matrixWorldInverse;for(let S=0,y=h.length;S<y;S++){const b=h[S];if(b.isDirectionalLight){const M=i.directional[f];M.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(v),f++}else if(b.isSpotLight){const M=i.spot[_];M.position.setFromMatrixPosition(b.matrixWorld),M.position.applyMatrix4(v),M.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(v),_++}else if(b.isRectAreaLight){const M=i.rectArea[g];M.position.setFromMatrixPosition(b.matrixWorld),M.position.applyMatrix4(v),a.identity(),o.copy(b.matrixWorld),o.premultiply(v),a.extractRotation(o),M.halfWidth.set(b.width*.5,0,0),M.halfHeight.set(0,b.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),g++}else if(b.isPointLight){const M=i.point[m];M.position.setFromMatrixPosition(b.matrixWorld),M.position.applyMatrix4(v),m++}else if(b.isHemisphereLight){const M=i.hemi[p];M.direction.setFromMatrixPosition(b.matrixWorld),M.direction.transformDirection(v),p++}}}return c(u,"setupView"),{setup:l,setupView:u,state:i}}c(Gv,"WebGLLights");function mc(s,e){const t=new Gv(s,e),n=[],i=[];function r(){n.length=0,i.length=0}c(r,"init");function o(d){n.push(d)}c(o,"pushLight");function a(d){i.push(d)}c(a,"pushShadow");function l(d){t.setup(n,d)}c(l,"setupLights");function u(d){t.setupView(n,d)}return c(u,"setupLightsView"),{init:r,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:l,setupLightsView:u,pushLight:o,pushShadow:a}}c(mc,"WebGLRenderState");function Wv(s,e){let t=new WeakMap;function n(r,o=0){const a=t.get(r);let l;return a===void 0?(l=new mc(s,e),t.set(r,[l])):o>=a.length?(l=new mc(s,e),a.push(l)):l=a[o],l}c(n,"get");function i(){t=new WeakMap}return c(i,"dispose"),{get:n,dispose:i}}c(Wv,"WebGLRenderStates");class Iu extends Kt{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Qf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}c(Iu,"MeshDepthMaterial");class Ou extends Kt{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new A,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}c(Ou,"MeshDistanceMaterial");const jv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Xv=`uniform sampler2D shadow_pass;
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
}`;function qv(s,e,t){let n=new zr;const i=new oe,r=new oe,o=new Ke,a=new Iu({depthPacking:ep}),l=new Ou,u={},h=t.maxTextureSize,d={0:$t,1:Bn,2:Ws},f=new Vn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new oe},radius:{value:4}},vertexShader:jv,fragmentShader:Xv}),m=f.clone();m.defines.HORIZONTAL_PASS=1;const _=new Nt;_.setAttribute("position",new Ct(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new st(_,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=cu,this.render=function(b,M,P){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||b.length===0)return;const O=s.getRenderTarget(),x=s.getActiveCubeFace(),L=s.getActiveMipmapLevel(),N=s.state;N.setBlending(zn),N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);for(let C=0,B=b.length;C<B;C++){const R=b[C],D=R.shadow;if(D===void 0){console.warn("THREE.WebGLShadowMap:",R,"has no shadow.");continue}if(D.autoUpdate===!1&&D.needsUpdate===!1)continue;i.copy(D.mapSize);const k=D.getFrameExtents();if(i.multiply(k),r.copy(D.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/k.x),i.x=r.x*k.x,D.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/k.y),i.y=r.y*k.y,D.mapSize.y=r.y)),D.map===null){const ee=this.type!==bs?{minFilter:yt,magFilter:yt}:{};D.map=new Hn(i.x,i.y,ee),D.map.texture.name=R.name+".shadowMap",D.camera.updateProjectionMatrix()}s.setRenderTarget(D.map),s.clear();const G=D.getViewportCount();for(let ee=0;ee<G;ee++){const W=D.getViewport(ee);o.set(r.x*W.x,r.y*W.y,r.x*W.z,r.y*W.w),N.viewport(o),D.updateMatrices(R,ee),n=D.getFrustum(),y(M,P,D.camera,R,this.type)}D.isPointLightShadow!==!0&&this.type===bs&&v(D,P),D.needsUpdate=!1}p.needsUpdate=!1,s.setRenderTarget(O,x,L)};function v(b,M){const P=e.update(g);f.defines.VSM_SAMPLES!==b.blurSamples&&(f.defines.VSM_SAMPLES=b.blurSamples,m.defines.VSM_SAMPLES=b.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new Hn(i.x,i.y)),f.uniforms.shadow_pass.value=b.map.texture,f.uniforms.resolution.value=b.mapSize,f.uniforms.radius.value=b.radius,s.setRenderTarget(b.mapPass),s.clear(),s.renderBufferDirect(M,null,P,f,g,null),m.uniforms.shadow_pass.value=b.mapPass.texture,m.uniforms.resolution.value=b.mapSize,m.uniforms.radius.value=b.radius,s.setRenderTarget(b.map),s.clear(),s.renderBufferDirect(M,null,P,m,g,null)}c(v,"VSMPass");function S(b,M,P,O,x,L){let N=null;const C=P.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(C!==void 0)N=C;else if(N=P.isPointLight===!0?l:a,s.localClippingEnabled&&M.clipShadows===!0&&Array.isArray(M.clippingPlanes)&&M.clippingPlanes.length!==0||M.displacementMap&&M.displacementScale!==0||M.alphaMap&&M.alphaTest>0||M.map&&M.alphaTest>0){const B=N.uuid,R=M.uuid;let D=u[B];D===void 0&&(D={},u[B]=D);let k=D[R];k===void 0&&(k=N.clone(),D[R]=k),N=k}return N.visible=M.visible,N.wireframe=M.wireframe,L===bs?N.side=M.shadowSide!==null?M.shadowSide:M.side:N.side=M.shadowSide!==null?M.shadowSide:d[M.side],N.alphaMap=M.alphaMap,N.alphaTest=M.alphaTest,N.map=M.map,N.clipShadows=M.clipShadows,N.clippingPlanes=M.clippingPlanes,N.clipIntersection=M.clipIntersection,N.displacementMap=M.displacementMap,N.displacementScale=M.displacementScale,N.displacementBias=M.displacementBias,N.wireframeLinewidth=M.wireframeLinewidth,N.linewidth=M.linewidth,P.isPointLight===!0&&N.isMeshDistanceMaterial===!0&&(N.referencePosition.setFromMatrixPosition(P.matrixWorld),N.nearDistance=O,N.farDistance=x),N}c(S,"getDepthMaterial");function y(b,M,P,O,x){if(b.visible===!1)return;if(b.layers.test(M.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&x===bs)&&(!b.frustumCulled||n.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,b.matrixWorld);const C=e.update(b),B=b.material;if(Array.isArray(B)){const R=C.groups;for(let D=0,k=R.length;D<k;D++){const G=R[D],ee=B[G.materialIndex];if(ee&&ee.visible){const W=S(b,ee,O,P.near,P.far,x);s.renderBufferDirect(P,null,C,W,b,G)}}}else if(B.visible){const R=S(b,B,O,P.near,P.far,x);s.renderBufferDirect(P,null,C,R,b,null)}}const N=b.children;for(let C=0,B=N.length;C<B;C++)y(N[C],M,P,O,x)}c(y,"renderObject")}c(qv,"WebGLShadowMap");function $v(s,e,t){const n=t.isWebGL2;function i(){let I=!1;const X=new Ke;let se=null;const ge=new Ke(0,0,0,0);return{setMask:function(ye){se!==ye&&!I&&(s.colorMask(ye,ye,ye,ye),se=ye)},setLocked:function(ye){I=ye},setClear:function(ye,qe,_t,Tt,Jn){Jn===!0&&(ye*=Tt,qe*=Tt,_t*=Tt),X.set(ye,qe,_t,Tt),ge.equals(X)===!1&&(s.clearColor(ye,qe,_t,Tt),ge.copy(X))},reset:function(){I=!1,se=null,ge.set(-1,0,0,0)}}}c(i,"ColorBuffer");function r(){let I=!1,X=null,se=null,ge=null;return{setTest:function(ye){ye?Pe(2929):_e(2929)},setMask:function(ye){X!==ye&&!I&&(s.depthMask(ye),X=ye)},setFunc:function(ye){if(se!==ye){switch(ye){case wf:s.depthFunc(512);break;case Mf:s.depthFunc(519);break;case Sf:s.depthFunc(513);break;case Wo:s.depthFunc(515);break;case Tf:s.depthFunc(514);break;case Ef:s.depthFunc(518);break;case Af:s.depthFunc(516);break;case Cf:s.depthFunc(517);break;default:s.depthFunc(515)}se=ye}},setLocked:function(ye){I=ye},setClear:function(ye){ge!==ye&&(s.clearDepth(ye),ge=ye)},reset:function(){I=!1,X=null,se=null,ge=null}}}c(r,"DepthBuffer");function o(){let I=!1,X=null,se=null,ge=null,ye=null,qe=null,_t=null,Tt=null,Jn=null;return{setTest:function(it){I||(it?Pe(2960):_e(2960))},setMask:function(it){X!==it&&!I&&(s.stencilMask(it),X=it)},setFunc:function(it,gn,Gt){(se!==it||ge!==gn||ye!==Gt)&&(s.stencilFunc(it,gn,Gt),se=it,ge=gn,ye=Gt)},setOp:function(it,gn,Gt){(qe!==it||_t!==gn||Tt!==Gt)&&(s.stencilOp(it,gn,Gt),qe=it,_t=gn,Tt=Gt)},setLocked:function(it){I=it},setClear:function(it){Jn!==it&&(s.clearStencil(it),Jn=it)},reset:function(){I=!1,X=null,se=null,ge=null,ye=null,qe=null,_t=null,Tt=null,Jn=null}}}c(o,"StencilBuffer");const a=new i,l=new r,u=new o,h=new WeakMap,d=new WeakMap;let f={},m={},_=new WeakMap,g=[],p=null,v=!1,S=null,y=null,b=null,M=null,P=null,O=null,x=null,L=!1,N=null,C=null,B=null,R=null,D=null;const k=s.getParameter(35661);let G=!1,ee=0;const W=s.getParameter(7938);W.indexOf("WebGL")!==-1?(ee=parseFloat(/^WebGL (\d)/.exec(W)[1]),G=ee>=1):W.indexOf("OpenGL ES")!==-1&&(ee=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),G=ee>=2);let te=null,ie={};const H=s.getParameter(3088),j=s.getParameter(2978),ne=new Ke().fromArray(H),ae=new Ke().fromArray(j);function he(I,X,se){const ge=new Uint8Array(4),ye=s.createTexture();s.bindTexture(I,ye),s.texParameteri(I,10241,9728),s.texParameteri(I,10240,9728);for(let qe=0;qe<se;qe++)s.texImage2D(X+qe,0,6408,1,1,0,6408,5121,ge);return ye}c(he,"createTexture");const $={};$[3553]=he(3553,3553,1),$[34067]=he(34067,34069,6),a.setClear(0,0,0,1),l.setClear(1),u.setClear(0),Pe(2929),l.setFunc(Wo),de(!1),De(al),Pe(2884),ce(zn);function Pe(I){f[I]!==!0&&(s.enable(I),f[I]=!0)}c(Pe,"enable");function _e(I){f[I]!==!1&&(s.disable(I),f[I]=!1)}c(_e,"disable");function Le(I,X){return m[I]!==X?(s.bindFramebuffer(I,X),m[I]=X,n&&(I===36009&&(m[36160]=X),I===36160&&(m[36009]=X)),!0):!1}c(Le,"bindFramebuffer");function fe(I,X){let se=g,ge=!1;if(I)if(se=_.get(X),se===void 0&&(se=[],_.set(X,se)),I.isWebGLMultipleRenderTargets){const ye=I.texture;if(se.length!==ye.length||se[0]!==36064){for(let qe=0,_t=ye.length;qe<_t;qe++)se[qe]=36064+qe;se.length=ye.length,ge=!0}}else se[0]!==36064&&(se[0]=36064,ge=!0);else se[0]!==1029&&(se[0]=1029,ge=!0);ge&&(t.isWebGL2?s.drawBuffers(se):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(se))}c(fe,"drawBuffers");function ke(I){return p!==I?(s.useProgram(I),p=I,!0):!1}c(ke,"useProgram");const Z={[Pi]:32774,[hf]:32778,[df]:32779};if(n)Z[hl]=32775,Z[dl]=32776;else{const I=e.get("EXT_blend_minmax");I!==null&&(Z[hl]=I.MIN_EXT,Z[dl]=I.MAX_EXT)}const J={[ff]:0,[pf]:1,[mf]:768,[uu]:770,[bf]:776,[xf]:774,[_f]:772,[gf]:769,[hu]:771,[yf]:775,[vf]:773};function ce(I,X,se,ge,ye,qe,_t,Tt){if(I===zn){v===!0&&(_e(3042),v=!1);return}if(v===!1&&(Pe(3042),v=!0),I!==uf){if(I!==S||Tt!==L){if((y!==Pi||P!==Pi)&&(s.blendEquation(32774),y=Pi,P=Pi),Tt)switch(I){case zi:s.blendFuncSeparate(1,771,1,771);break;case ll:s.blendFunc(1,1);break;case cl:s.blendFuncSeparate(0,769,0,1);break;case ul:s.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case zi:s.blendFuncSeparate(770,771,1,771);break;case ll:s.blendFunc(770,1);break;case cl:s.blendFuncSeparate(0,769,0,1);break;case ul:s.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}b=null,M=null,O=null,x=null,S=I,L=Tt}return}ye=ye||X,qe=qe||se,_t=_t||ge,(X!==y||ye!==P)&&(s.blendEquationSeparate(Z[X],Z[ye]),y=X,P=ye),(se!==b||ge!==M||qe!==O||_t!==x)&&(s.blendFuncSeparate(J[se],J[ge],J[qe],J[_t]),b=se,M=ge,O=qe,x=_t),S=I,L=!1}c(ce,"setBlending");function ve(I,X){I.side===Ws?_e(2884):Pe(2884);let se=I.side===$t;X&&(se=!se),de(se),I.blending===zi&&I.transparent===!1?ce(zn):ce(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.premultipliedAlpha),l.setFunc(I.depthFunc),l.setTest(I.depthTest),l.setMask(I.depthWrite),a.setMask(I.colorWrite);const ge=I.stencilWrite;u.setTest(ge),ge&&(u.setMask(I.stencilWriteMask),u.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),u.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),Te(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?Pe(32926):_e(32926)}c(ve,"setMaterial");function de(I){N!==I&&(I?s.frontFace(2304):s.frontFace(2305),N=I)}c(de,"setFlipSided");function De(I){I!==af?(Pe(2884),I!==C&&(I===al?s.cullFace(1029):I===lf?s.cullFace(1028):s.cullFace(1032))):_e(2884),C=I}c(De,"setCullFace");function Ee(I){I!==B&&(G&&s.lineWidth(I),B=I)}c(Ee,"setLineWidth");function Te(I,X,se){I?(Pe(32823),(R!==X||D!==se)&&(s.polygonOffset(X,se),R=X,D=se)):_e(32823)}c(Te,"setPolygonOffset");function et(I){I?Pe(3089):_e(3089)}c(et,"setScissorTest");function Ye(I){I===void 0&&(I=33984+k-1),te!==I&&(s.activeTexture(I),te=I)}c(Ye,"activeTexture");function E(I,X,se){se===void 0&&(te===null?se=33984+k-1:se=te);let ge=ie[se];ge===void 0&&(ge={type:void 0,texture:void 0},ie[se]=ge),(ge.type!==I||ge.texture!==X)&&(te!==se&&(s.activeTexture(se),te=se),s.bindTexture(I,X||$[I]),ge.type=I,ge.texture=X)}c(E,"bindTexture");function w(){const I=ie[te];I!==void 0&&I.type!==void 0&&(s.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}c(w,"unbindTexture");function V(){try{s.compressedTexImage2D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}c(V,"compressedTexImage2D");function re(){try{s.compressedTexImage3D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}c(re,"compressedTexImage3D");function le(){try{s.texSubImage2D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}c(le,"texSubImage2D");function pe(){try{s.texSubImage3D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}c(pe,"texSubImage3D");function Re(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}c(Re,"compressedTexSubImage2D");function me(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}c(me,"compressedTexSubImage3D");function K(){try{s.texStorage2D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}c(K,"texStorage2D");function we(){try{s.texStorage3D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}c(we,"texStorage3D");function Ce(){try{s.texImage2D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}c(Ce,"texImage2D");function xe(){try{s.texImage3D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}c(xe,"texImage3D");function Ae(I){ne.equals(I)===!1&&(s.scissor(I.x,I.y,I.z,I.w),ne.copy(I))}c(Ae,"scissor");function Me(I){ae.equals(I)===!1&&(s.viewport(I.x,I.y,I.z,I.w),ae.copy(I))}c(Me,"viewport");function We(I,X){let se=d.get(X);se===void 0&&(se=new WeakMap,d.set(X,se));let ge=se.get(I);ge===void 0&&(ge=s.getUniformBlockIndex(X,I.name),se.set(I,ge))}c(We,"updateUBOMapping");function nt(I,X){const ge=d.get(X).get(I);h.get(X)!==ge&&(s.uniformBlockBinding(X,ge,I.__bindingPointIndex),h.set(X,ge))}c(nt,"uniformBlockBinding");function gt(){s.disable(3042),s.disable(2884),s.disable(2929),s.disable(32823),s.disable(3089),s.disable(2960),s.disable(32926),s.blendEquation(32774),s.blendFunc(1,0),s.blendFuncSeparate(1,0,1,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(513),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(519,0,4294967295),s.stencilOp(7680,7680,7680),s.clearStencil(0),s.cullFace(1029),s.frontFace(2305),s.polygonOffset(0,0),s.activeTexture(33984),s.bindFramebuffer(36160,null),n===!0&&(s.bindFramebuffer(36009,null),s.bindFramebuffer(36008,null)),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),f={},te=null,ie={},m={},_=new WeakMap,g=[],p=null,v=!1,S=null,y=null,b=null,M=null,P=null,O=null,x=null,L=!1,N=null,C=null,B=null,R=null,D=null,ne.set(0,0,s.canvas.width,s.canvas.height),ae.set(0,0,s.canvas.width,s.canvas.height),a.reset(),l.reset(),u.reset()}return c(gt,"reset"),{buffers:{color:a,depth:l,stencil:u},enable:Pe,disable:_e,bindFramebuffer:Le,drawBuffers:fe,useProgram:ke,setBlending:ce,setMaterial:ve,setFlipSided:de,setCullFace:De,setLineWidth:Ee,setPolygonOffset:Te,setScissorTest:et,activeTexture:Ye,bindTexture:E,unbindTexture:w,compressedTexImage2D:V,compressedTexImage3D:re,texImage2D:Ce,texImage3D:xe,updateUBOMapping:We,uniformBlockBinding:nt,texStorage2D:K,texStorage3D:we,texSubImage2D:le,texSubImage3D:pe,compressedTexSubImage2D:Re,compressedTexSubImage3D:me,scissor:Ae,viewport:Me,reset:gt}}c($v,"WebGLState");function Yv(s,e,t,n,i,r,o){const a=i.isWebGL2,l=i.maxTextures,u=i.maxCubemapSize,h=i.maxTextureSize,d=i.maxSamples,f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),_=new WeakMap;let g;const p=new WeakMap;let v=!1;try{v=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function S(E,w){return v?new OffscreenCanvas(E,w):Us("canvas")}c(S,"createCanvas");function y(E,w,V,re){let le=1;if((E.width>re||E.height>re)&&(le=re/Math.max(E.width,E.height)),le<1||w===!0)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap){const pe=w?Cr:Math.floor,Re=pe(le*E.width),me=pe(le*E.height);g===void 0&&(g=S(Re,me));const K=V?S(Re,me):g;return K.width=Re,K.height=me,K.getContext("2d").drawImage(E,0,0,Re,me),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+E.width+"x"+E.height+") to ("+Re+"x"+me+")."),K}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+E.width+"x"+E.height+")."),E;return E}c(y,"resizeImage");function b(E){return Ko(E.width)&&Ko(E.height)}c(b,"isPowerOfTwo$1");function M(E){return a?!1:E.wrapS!==Xt||E.wrapT!==Xt||E.minFilter!==yt&&E.minFilter!==Ft}c(M,"textureNeedsPowerOfTwo");function P(E,w){return E.generateMipmaps&&w&&E.minFilter!==yt&&E.minFilter!==Ft}c(P,"textureNeedsGenerateMipmaps");function O(E){s.generateMipmap(E)}c(O,"generateMipmap");function x(E,w,V,re,le=!1){if(a===!1)return w;if(E!==null){if(s[E]!==void 0)return s[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let pe=w;return w===6403&&(V===5126&&(pe=33326),V===5131&&(pe=33325),V===5121&&(pe=33321)),w===33319&&(V===5126&&(pe=33328),V===5131&&(pe=33327),V===5121&&(pe=33323)),w===6408&&(V===5126&&(pe=34836),V===5131&&(pe=34842),V===5121&&(pe=re===Xe&&le===!1?35907:32856),V===32819&&(pe=32854),V===32820&&(pe=32855)),(pe===33325||pe===33326||pe===33327||pe===33328||pe===34842||pe===34836)&&e.get("EXT_color_buffer_float"),pe}c(x,"getInternalFormat");function L(E,w,V){return P(E,V)===!0||E.isFramebufferTexture&&E.minFilter!==yt&&E.minFilter!==Ft?Math.log2(Math.max(w.width,w.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?w.mipmaps.length:1}c(L,"getMipLevels");function N(E){return E===yt||E===qo||E===wr?9728:9729}c(N,"filterFallback");function C(E){const w=E.target;w.removeEventListener("dispose",C),R(w),w.isVideoTexture&&_.delete(w)}c(C,"onTextureDispose");function B(E){const w=E.target;w.removeEventListener("dispose",B),k(w)}c(B,"onRenderTargetDispose");function R(E){const w=n.get(E);if(w.__webglInit===void 0)return;const V=E.source,re=p.get(V);if(re){const le=re[w.__cacheKey];le.usedTimes--,le.usedTimes===0&&D(E),Object.keys(re).length===0&&p.delete(V)}n.remove(E)}c(R,"deallocateTexture");function D(E){const w=n.get(E);s.deleteTexture(w.__webglTexture);const V=E.source,re=p.get(V);delete re[w.__cacheKey],o.memory.textures--}c(D,"deleteTexture");function k(E){const w=E.texture,V=n.get(E),re=n.get(w);if(re.__webglTexture!==void 0&&(s.deleteTexture(re.__webglTexture),o.memory.textures--),E.depthTexture&&E.depthTexture.dispose(),E.isWebGLCubeRenderTarget)for(let le=0;le<6;le++)s.deleteFramebuffer(V.__webglFramebuffer[le]),V.__webglDepthbuffer&&s.deleteRenderbuffer(V.__webglDepthbuffer[le]);else{if(s.deleteFramebuffer(V.__webglFramebuffer),V.__webglDepthbuffer&&s.deleteRenderbuffer(V.__webglDepthbuffer),V.__webglMultisampledFramebuffer&&s.deleteFramebuffer(V.__webglMultisampledFramebuffer),V.__webglColorRenderbuffer)for(let le=0;le<V.__webglColorRenderbuffer.length;le++)V.__webglColorRenderbuffer[le]&&s.deleteRenderbuffer(V.__webglColorRenderbuffer[le]);V.__webglDepthRenderbuffer&&s.deleteRenderbuffer(V.__webglDepthRenderbuffer)}if(E.isWebGLMultipleRenderTargets)for(let le=0,pe=w.length;le<pe;le++){const Re=n.get(w[le]);Re.__webglTexture&&(s.deleteTexture(Re.__webglTexture),o.memory.textures--),n.remove(w[le])}n.remove(w),n.remove(E)}c(k,"deallocateRenderTarget");let G=0;function ee(){G=0}c(ee,"resetTextureUnits");function W(){const E=G;return E>=l&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+l),G+=1,E}c(W,"allocateTextureUnit");function te(E){const w=[];return w.push(E.wrapS),w.push(E.wrapT),w.push(E.wrapR||0),w.push(E.magFilter),w.push(E.minFilter),w.push(E.anisotropy),w.push(E.internalFormat),w.push(E.format),w.push(E.type),w.push(E.generateMipmaps),w.push(E.premultiplyAlpha),w.push(E.flipY),w.push(E.unpackAlignment),w.push(E.encoding),w.join()}c(te,"getTextureCacheKey");function ie(E,w){const V=n.get(E);if(E.isVideoTexture&&et(E),E.isRenderTargetTexture===!1&&E.version>0&&V.__version!==E.version){const re=E.image;if(re===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(re.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{_e(V,E,w);return}}t.bindTexture(3553,V.__webglTexture,33984+w)}c(ie,"setTexture2D");function H(E,w){const V=n.get(E);if(E.version>0&&V.__version!==E.version){_e(V,E,w);return}t.bindTexture(35866,V.__webglTexture,33984+w)}c(H,"setTexture2DArray");function j(E,w){const V=n.get(E);if(E.version>0&&V.__version!==E.version){_e(V,E,w);return}t.bindTexture(32879,V.__webglTexture,33984+w)}c(j,"setTexture3D");function ne(E,w){const V=n.get(E);if(E.version>0&&V.__version!==E.version){Le(V,E,w);return}t.bindTexture(34067,V.__webglTexture,33984+w)}c(ne,"setTextureCube");const ae={[Xi]:10497,[Xt]:33071,[Ar]:33648},he={[yt]:9728,[qo]:9984,[wr]:9986,[Ft]:9729,[fu]:9985,[ui]:9987};function $(E,w,V){if(V?(s.texParameteri(E,10242,ae[w.wrapS]),s.texParameteri(E,10243,ae[w.wrapT]),(E===32879||E===35866)&&s.texParameteri(E,32882,ae[w.wrapR]),s.texParameteri(E,10240,he[w.magFilter]),s.texParameteri(E,10241,he[w.minFilter])):(s.texParameteri(E,10242,33071),s.texParameteri(E,10243,33071),(E===32879||E===35866)&&s.texParameteri(E,32882,33071),(w.wrapS!==Xt||w.wrapT!==Xt)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),s.texParameteri(E,10240,N(w.magFilter)),s.texParameteri(E,10241,N(w.minFilter)),w.minFilter!==yt&&w.minFilter!==Ft&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const re=e.get("EXT_texture_filter_anisotropic");if(w.magFilter===yt||w.minFilter!==wr&&w.minFilter!==ui||w.type===On&&e.has("OES_texture_float_linear")===!1||a===!1&&w.type===Ns&&e.has("OES_texture_half_float_linear")===!1)return;(w.anisotropy>1||n.get(w).__currentAnisotropy)&&(s.texParameterf(E,re.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,i.getMaxAnisotropy())),n.get(w).__currentAnisotropy=w.anisotropy)}}c($,"setTextureParameters");function Pe(E,w){let V=!1;E.__webglInit===void 0&&(E.__webglInit=!0,w.addEventListener("dispose",C));const re=w.source;let le=p.get(re);le===void 0&&(le={},p.set(re,le));const pe=te(w);if(pe!==E.__cacheKey){le[pe]===void 0&&(le[pe]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,V=!0),le[pe].usedTimes++;const Re=le[E.__cacheKey];Re!==void 0&&(le[E.__cacheKey].usedTimes--,Re.usedTimes===0&&D(w)),E.__cacheKey=pe,E.__webglTexture=le[pe].texture}return V}c(Pe,"initTexture");function _e(E,w,V){let re=3553;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(re=35866),w.isData3DTexture&&(re=32879);const le=Pe(E,w),pe=w.source;t.bindTexture(re,E.__webglTexture,33984+V);const Re=n.get(pe);if(pe.version!==Re.__version||le===!0){t.activeTexture(33984+V),s.pixelStorei(37440,w.flipY),s.pixelStorei(37441,w.premultiplyAlpha),s.pixelStorei(3317,w.unpackAlignment),s.pixelStorei(37443,0);const me=M(w)&&b(w.image)===!1;let K=y(w.image,me,!1,h);K=Ye(w,K);const we=b(K)||a,Ce=r.convert(w.format,w.encoding);let xe=r.convert(w.type),Ae=x(w.internalFormat,Ce,xe,w.encoding,w.isVideoTexture);$(re,w,we);let Me;const We=w.mipmaps,nt=a&&w.isVideoTexture!==!0,gt=Re.__version===void 0||le===!0,I=L(w,K,we);if(w.isDepthTexture)Ae=6402,a?w.type===On?Ae=36012:w.type===oi?Ae=33190:w.type===Ui?Ae=35056:Ae=33189:w.type===On&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),w.format===ai&&Ae===6402&&w.type!==pu&&w.type!==oi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),w.type=oi,xe=r.convert(w.type)),w.format===qi&&Ae===6402&&(Ae=34041,w.type!==Ui&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),w.type=Ui,xe=r.convert(w.type))),gt&&(nt?t.texStorage2D(3553,1,Ae,K.width,K.height):t.texImage2D(3553,0,Ae,K.width,K.height,0,Ce,xe,null));else if(w.isDataTexture)if(We.length>0&&we){nt&&gt&&t.texStorage2D(3553,I,Ae,We[0].width,We[0].height);for(let X=0,se=We.length;X<se;X++)Me=We[X],nt?t.texSubImage2D(3553,X,0,0,Me.width,Me.height,Ce,xe,Me.data):t.texImage2D(3553,X,Ae,Me.width,Me.height,0,Ce,xe,Me.data);w.generateMipmaps=!1}else nt?(gt&&t.texStorage2D(3553,I,Ae,K.width,K.height),t.texSubImage2D(3553,0,0,0,K.width,K.height,Ce,xe,K.data)):t.texImage2D(3553,0,Ae,K.width,K.height,0,Ce,xe,K.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){nt&&gt&&t.texStorage3D(35866,I,Ae,We[0].width,We[0].height,K.depth);for(let X=0,se=We.length;X<se;X++)Me=We[X],w.format!==qt?Ce!==null?nt?t.compressedTexSubImage3D(35866,X,0,0,0,Me.width,Me.height,K.depth,Ce,Me.data,0,0):t.compressedTexImage3D(35866,X,Ae,Me.width,Me.height,K.depth,0,Me.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):nt?t.texSubImage3D(35866,X,0,0,0,Me.width,Me.height,K.depth,Ce,xe,Me.data):t.texImage3D(35866,X,Ae,Me.width,Me.height,K.depth,0,Ce,xe,Me.data)}else{nt&&gt&&t.texStorage2D(3553,I,Ae,We[0].width,We[0].height);for(let X=0,se=We.length;X<se;X++)Me=We[X],w.format!==qt?Ce!==null?nt?t.compressedTexSubImage2D(3553,X,0,0,Me.width,Me.height,Ce,Me.data):t.compressedTexImage2D(3553,X,Ae,Me.width,Me.height,0,Me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):nt?t.texSubImage2D(3553,X,0,0,Me.width,Me.height,Ce,xe,Me.data):t.texImage2D(3553,X,Ae,Me.width,Me.height,0,Ce,xe,Me.data)}else if(w.isDataArrayTexture)nt?(gt&&t.texStorage3D(35866,I,Ae,K.width,K.height,K.depth),t.texSubImage3D(35866,0,0,0,0,K.width,K.height,K.depth,Ce,xe,K.data)):t.texImage3D(35866,0,Ae,K.width,K.height,K.depth,0,Ce,xe,K.data);else if(w.isData3DTexture)nt?(gt&&t.texStorage3D(32879,I,Ae,K.width,K.height,K.depth),t.texSubImage3D(32879,0,0,0,0,K.width,K.height,K.depth,Ce,xe,K.data)):t.texImage3D(32879,0,Ae,K.width,K.height,K.depth,0,Ce,xe,K.data);else if(w.isFramebufferTexture){if(gt)if(nt)t.texStorage2D(3553,I,Ae,K.width,K.height);else{let X=K.width,se=K.height;for(let ge=0;ge<I;ge++)t.texImage2D(3553,ge,Ae,X,se,0,Ce,xe,null),X>>=1,se>>=1}}else if(We.length>0&&we){nt&&gt&&t.texStorage2D(3553,I,Ae,We[0].width,We[0].height);for(let X=0,se=We.length;X<se;X++)Me=We[X],nt?t.texSubImage2D(3553,X,0,0,Ce,xe,Me):t.texImage2D(3553,X,Ae,Ce,xe,Me);w.generateMipmaps=!1}else nt?(gt&&t.texStorage2D(3553,I,Ae,K.width,K.height),t.texSubImage2D(3553,0,0,0,Ce,xe,K)):t.texImage2D(3553,0,Ae,Ce,xe,K);P(w,we)&&O(re),Re.__version=pe.version,w.onUpdate&&w.onUpdate(w)}E.__version=w.version}c(_e,"uploadTexture");function Le(E,w,V){if(w.image.length!==6)return;const re=Pe(E,w),le=w.source;t.bindTexture(34067,E.__webglTexture,33984+V);const pe=n.get(le);if(le.version!==pe.__version||re===!0){t.activeTexture(33984+V),s.pixelStorei(37440,w.flipY),s.pixelStorei(37441,w.premultiplyAlpha),s.pixelStorei(3317,w.unpackAlignment),s.pixelStorei(37443,0);const Re=w.isCompressedTexture||w.image[0].isCompressedTexture,me=w.image[0]&&w.image[0].isDataTexture,K=[];for(let X=0;X<6;X++)!Re&&!me?K[X]=y(w.image[X],!1,!0,u):K[X]=me?w.image[X].image:w.image[X],K[X]=Ye(w,K[X]);const we=K[0],Ce=b(we)||a,xe=r.convert(w.format,w.encoding),Ae=r.convert(w.type),Me=x(w.internalFormat,xe,Ae,w.encoding),We=a&&w.isVideoTexture!==!0,nt=pe.__version===void 0||re===!0;let gt=L(w,we,Ce);$(34067,w,Ce);let I;if(Re){We&&nt&&t.texStorage2D(34067,gt,Me,we.width,we.height);for(let X=0;X<6;X++){I=K[X].mipmaps;for(let se=0;se<I.length;se++){const ge=I[se];w.format!==qt?xe!==null?We?t.compressedTexSubImage2D(34069+X,se,0,0,ge.width,ge.height,xe,ge.data):t.compressedTexImage2D(34069+X,se,Me,ge.width,ge.height,0,ge.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):We?t.texSubImage2D(34069+X,se,0,0,ge.width,ge.height,xe,Ae,ge.data):t.texImage2D(34069+X,se,Me,ge.width,ge.height,0,xe,Ae,ge.data)}}}else{I=w.mipmaps,We&&nt&&(I.length>0&&gt++,t.texStorage2D(34067,gt,Me,K[0].width,K[0].height));for(let X=0;X<6;X++)if(me){We?t.texSubImage2D(34069+X,0,0,0,K[X].width,K[X].height,xe,Ae,K[X].data):t.texImage2D(34069+X,0,Me,K[X].width,K[X].height,0,xe,Ae,K[X].data);for(let se=0;se<I.length;se++){const ye=I[se].image[X].image;We?t.texSubImage2D(34069+X,se+1,0,0,ye.width,ye.height,xe,Ae,ye.data):t.texImage2D(34069+X,se+1,Me,ye.width,ye.height,0,xe,Ae,ye.data)}}else{We?t.texSubImage2D(34069+X,0,0,0,xe,Ae,K[X]):t.texImage2D(34069+X,0,Me,xe,Ae,K[X]);for(let se=0;se<I.length;se++){const ge=I[se];We?t.texSubImage2D(34069+X,se+1,0,0,xe,Ae,ge.image[X]):t.texImage2D(34069+X,se+1,Me,xe,Ae,ge.image[X])}}}P(w,Ce)&&O(34067),pe.__version=le.version,w.onUpdate&&w.onUpdate(w)}E.__version=w.version}c(Le,"uploadCubeTexture");function fe(E,w,V,re,le){const pe=r.convert(V.format,V.encoding),Re=r.convert(V.type),me=x(V.internalFormat,pe,Re,V.encoding);n.get(w).__hasExternalTextures||(le===32879||le===35866?t.texImage3D(le,0,me,w.width,w.height,w.depth,0,pe,Re,null):t.texImage2D(le,0,me,w.width,w.height,0,pe,Re,null)),t.bindFramebuffer(36160,E),Te(w)?f.framebufferTexture2DMultisampleEXT(36160,re,le,n.get(V).__webglTexture,0,Ee(w)):(le===3553||le>=34069&&le<=34074)&&s.framebufferTexture2D(36160,re,le,n.get(V).__webglTexture,0),t.bindFramebuffer(36160,null)}c(fe,"setupFrameBufferTexture");function ke(E,w,V){if(s.bindRenderbuffer(36161,E),w.depthBuffer&&!w.stencilBuffer){let re=33189;if(V||Te(w)){const le=w.depthTexture;le&&le.isDepthTexture&&(le.type===On?re=36012:le.type===oi&&(re=33190));const pe=Ee(w);Te(w)?f.renderbufferStorageMultisampleEXT(36161,pe,re,w.width,w.height):s.renderbufferStorageMultisample(36161,pe,re,w.width,w.height)}else s.renderbufferStorage(36161,re,w.width,w.height);s.framebufferRenderbuffer(36160,36096,36161,E)}else if(w.depthBuffer&&w.stencilBuffer){const re=Ee(w);V&&Te(w)===!1?s.renderbufferStorageMultisample(36161,re,35056,w.width,w.height):Te(w)?f.renderbufferStorageMultisampleEXT(36161,re,35056,w.width,w.height):s.renderbufferStorage(36161,34041,w.width,w.height),s.framebufferRenderbuffer(36160,33306,36161,E)}else{const re=w.isWebGLMultipleRenderTargets===!0?w.texture:[w.texture];for(let le=0;le<re.length;le++){const pe=re[le],Re=r.convert(pe.format,pe.encoding),me=r.convert(pe.type),K=x(pe.internalFormat,Re,me,pe.encoding),we=Ee(w);V&&Te(w)===!1?s.renderbufferStorageMultisample(36161,we,K,w.width,w.height):Te(w)?f.renderbufferStorageMultisampleEXT(36161,we,K,w.width,w.height):s.renderbufferStorage(36161,K,w.width,w.height)}}s.bindRenderbuffer(36161,null)}c(ke,"setupRenderBufferStorage");function Z(E,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,E),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(w.depthTexture).__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),ie(w.depthTexture,0);const re=n.get(w.depthTexture).__webglTexture,le=Ee(w);if(w.depthTexture.format===ai)Te(w)?f.framebufferTexture2DMultisampleEXT(36160,36096,3553,re,0,le):s.framebufferTexture2D(36160,36096,3553,re,0);else if(w.depthTexture.format===qi)Te(w)?f.framebufferTexture2DMultisampleEXT(36160,33306,3553,re,0,le):s.framebufferTexture2D(36160,33306,3553,re,0);else throw new Error("Unknown depthTexture format")}c(Z,"setupDepthTexture");function J(E){const w=n.get(E),V=E.isWebGLCubeRenderTarget===!0;if(E.depthTexture&&!w.__autoAllocateDepthBuffer){if(V)throw new Error("target.depthTexture not supported in Cube render targets");Z(w.__webglFramebuffer,E)}else if(V){w.__webglDepthbuffer=[];for(let re=0;re<6;re++)t.bindFramebuffer(36160,w.__webglFramebuffer[re]),w.__webglDepthbuffer[re]=s.createRenderbuffer(),ke(w.__webglDepthbuffer[re],E,!1)}else t.bindFramebuffer(36160,w.__webglFramebuffer),w.__webglDepthbuffer=s.createRenderbuffer(),ke(w.__webglDepthbuffer,E,!1);t.bindFramebuffer(36160,null)}c(J,"setupDepthRenderbuffer");function ce(E,w,V){const re=n.get(E);w!==void 0&&fe(re.__webglFramebuffer,E,E.texture,36064,3553),V!==void 0&&J(E)}c(ce,"rebindTextures");function ve(E){const w=E.texture,V=n.get(E),re=n.get(w);E.addEventListener("dispose",B),E.isWebGLMultipleRenderTargets!==!0&&(re.__webglTexture===void 0&&(re.__webglTexture=s.createTexture()),re.__version=w.version,o.memory.textures++);const le=E.isWebGLCubeRenderTarget===!0,pe=E.isWebGLMultipleRenderTargets===!0,Re=b(E)||a;if(le){V.__webglFramebuffer=[];for(let me=0;me<6;me++)V.__webglFramebuffer[me]=s.createFramebuffer()}else{if(V.__webglFramebuffer=s.createFramebuffer(),pe)if(i.drawBuffers){const me=E.texture;for(let K=0,we=me.length;K<we;K++){const Ce=n.get(me[K]);Ce.__webglTexture===void 0&&(Ce.__webglTexture=s.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&E.samples>0&&Te(E)===!1){const me=pe?w:[w];V.__webglMultisampledFramebuffer=s.createFramebuffer(),V.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,V.__webglMultisampledFramebuffer);for(let K=0;K<me.length;K++){const we=me[K];V.__webglColorRenderbuffer[K]=s.createRenderbuffer(),s.bindRenderbuffer(36161,V.__webglColorRenderbuffer[K]);const Ce=r.convert(we.format,we.encoding),xe=r.convert(we.type),Ae=x(we.internalFormat,Ce,xe,we.encoding,E.isXRRenderTarget===!0),Me=Ee(E);s.renderbufferStorageMultisample(36161,Me,Ae,E.width,E.height),s.framebufferRenderbuffer(36160,36064+K,36161,V.__webglColorRenderbuffer[K])}s.bindRenderbuffer(36161,null),E.depthBuffer&&(V.__webglDepthRenderbuffer=s.createRenderbuffer(),ke(V.__webglDepthRenderbuffer,E,!0)),t.bindFramebuffer(36160,null)}}if(le){t.bindTexture(34067,re.__webglTexture),$(34067,w,Re);for(let me=0;me<6;me++)fe(V.__webglFramebuffer[me],E,w,36064,34069+me);P(w,Re)&&O(34067),t.unbindTexture()}else if(pe){const me=E.texture;for(let K=0,we=me.length;K<we;K++){const Ce=me[K],xe=n.get(Ce);t.bindTexture(3553,xe.__webglTexture),$(3553,Ce,Re),fe(V.__webglFramebuffer,E,Ce,36064+K,3553),P(Ce,Re)&&O(3553)}t.unbindTexture()}else{let me=3553;(E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(a?me=E.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(me,re.__webglTexture),$(me,w,Re),fe(V.__webglFramebuffer,E,w,36064,me),P(w,Re)&&O(me),t.unbindTexture()}E.depthBuffer&&J(E)}c(ve,"setupRenderTarget");function de(E){const w=b(E)||a,V=E.isWebGLMultipleRenderTargets===!0?E.texture:[E.texture];for(let re=0,le=V.length;re<le;re++){const pe=V[re];if(P(pe,w)){const Re=E.isWebGLCubeRenderTarget?34067:3553,me=n.get(pe).__webglTexture;t.bindTexture(Re,me),O(Re),t.unbindTexture()}}}c(de,"updateRenderTargetMipmap");function De(E){if(a&&E.samples>0&&Te(E)===!1){const w=E.isWebGLMultipleRenderTargets?E.texture:[E.texture],V=E.width,re=E.height;let le=16384;const pe=[],Re=E.stencilBuffer?33306:36096,me=n.get(E),K=E.isWebGLMultipleRenderTargets===!0;if(K)for(let we=0;we<w.length;we++)t.bindFramebuffer(36160,me.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(36160,36064+we,36161,null),t.bindFramebuffer(36160,me.__webglFramebuffer),s.framebufferTexture2D(36009,36064+we,3553,null,0);t.bindFramebuffer(36008,me.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,me.__webglFramebuffer);for(let we=0;we<w.length;we++){pe.push(36064+we),E.depthBuffer&&pe.push(Re);const Ce=me.__ignoreDepthValues!==void 0?me.__ignoreDepthValues:!1;if(Ce===!1&&(E.depthBuffer&&(le|=256),E.stencilBuffer&&(le|=1024)),K&&s.framebufferRenderbuffer(36008,36064,36161,me.__webglColorRenderbuffer[we]),Ce===!0&&(s.invalidateFramebuffer(36008,[Re]),s.invalidateFramebuffer(36009,[Re])),K){const xe=n.get(w[we]).__webglTexture;s.framebufferTexture2D(36009,36064,3553,xe,0)}s.blitFramebuffer(0,0,V,re,0,0,V,re,le,9728),m&&s.invalidateFramebuffer(36008,pe)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),K)for(let we=0;we<w.length;we++){t.bindFramebuffer(36160,me.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(36160,36064+we,36161,me.__webglColorRenderbuffer[we]);const Ce=n.get(w[we]).__webglTexture;t.bindFramebuffer(36160,me.__webglFramebuffer),s.framebufferTexture2D(36009,36064+we,3553,Ce,0)}t.bindFramebuffer(36009,me.__webglMultisampledFramebuffer)}}c(De,"updateMultisampleRenderTarget");function Ee(E){return Math.min(d,E.samples)}c(Ee,"getRenderTargetSamples");function Te(E){const w=n.get(E);return a&&E.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}c(Te,"useMultisampledRTT");function et(E){const w=o.render.frame;_.get(E)!==w&&(_.set(E,w),E.update())}c(et,"updateVideoTexture");function Ye(E,w){const V=E.encoding,re=E.format,le=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||E.format===Yo||V!==di&&(V===Xe?a===!1?e.has("EXT_sRGB")===!0&&re===qt?(E.format=Yo,E.minFilter=Ft,E.generateMipmaps=!1):w=Ra.sRGBToLinear(w):(re!==qt||le!==hi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",V)),w}c(Ye,"verifyColorSpace"),this.allocateTextureUnit=W,this.resetTextureUnits=ee,this.setTexture2D=ie,this.setTexture2DArray=H,this.setTexture3D=j,this.setTextureCube=ne,this.rebindTextures=ce,this.setupRenderTarget=ve,this.updateRenderTargetMipmap=de,this.updateMultisampleRenderTarget=De,this.setupDepthRenderbuffer=J,this.setupFrameBufferTexture=fe,this.useMultisampledRTT=Te}c(Yv,"WebGLTextures");function Kv(s,e,t){const n=t.isWebGL2;function i(r,o=null){let a;if(r===hi)return 5121;if(r===Uf)return 32819;if(r===Bf)return 32820;if(r===Ff)return 5120;if(r===kf)return 5122;if(r===pu)return 5123;if(r===zf)return 5124;if(r===oi)return 5125;if(r===On)return 5126;if(r===Ns)return n?5131:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===Hf)return 6406;if(r===qt)return 6408;if(r===Gf)return 6409;if(r===Wf)return 6410;if(r===ai)return 6402;if(r===qi)return 34041;if(r===Vf)return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"),6408;if(r===Yo)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===jf)return 6403;if(r===Xf)return 36244;if(r===qf)return 33319;if(r===$f)return 33320;if(r===Yf)return 36249;if(r===io||r===so||r===ro||r===oo)if(o===Xe)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===io)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===so)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===ro)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===oo)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===io)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===so)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===ro)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===oo)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===fl||r===pl||r===ml||r===gl)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===fl)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===pl)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===ml)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===gl)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Kf)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===_l||r===vl)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(r===_l)return o===Xe?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===vl)return o===Xe?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===xl||r===yl||r===bl||r===wl||r===Ml||r===Sl||r===Tl||r===El||r===Al||r===Cl||r===Ll||r===Rl||r===Pl||r===Dl)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(r===xl)return o===Xe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===yl)return o===Xe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===bl)return o===Xe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===wl)return o===Xe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Ml)return o===Xe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Sl)return o===Xe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Tl)return o===Xe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===El)return o===Xe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Al)return o===Xe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Cl)return o===Xe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Ll)return o===Xe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Rl)return o===Xe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Pl)return o===Xe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Dl)return o===Xe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Il)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(r===Il)return o===Xe?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;return r===Ui?n?34042:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):s[r]!==void 0?s[r]:null}return c(i,"convert"),{convert:i}}c(Kv,"WebGLUtils");class Nu extends At{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}c(Nu,"ArrayCamera");let ot=c(class extends Qe{constructor(){super(),this.isGroup=!0,this.type="Group"}},"Group");const Jv={type:"move"};class Sr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ot,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ot,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new A,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new A),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ot,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new A,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new A),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,o=null;const a=this._targetRay,l=this._grip,u=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(u&&e.hand){o=!0;for(const g of e.hand.values()){const p=t.getJointPose(g,n),v=this._getHandJoint(u,g);p!==null&&(v.matrix.fromArray(p.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.jointRadius=p.radius),v.visible=p!==null}const h=u.joints["index-finger-tip"],d=u.joints["thumb-tip"],f=h.position.distanceTo(d.position),m=.02,_=.005;u.inputState.pinching&&f>m+_?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&f<=m-_&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Jv)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=r!==null),u!==null&&(u.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new ot;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}c(Sr,"WebXRController");class Fu extends ht{constructor(e,t,n,i,r,o,a,l,u,h){if(h=h!==void 0?h:ai,h!==ai&&h!==qi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===ai&&(n=oi),n===void 0&&h===qi&&(n=Ui),super(null,i,r,o,a,l,h,n,u),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:yt,this.minFilter=l!==void 0?l:yt,this.flipY=!1,this.generateMipmaps=!1}}c(Fu,"DepthTexture");class ku extends jn{constructor(e,t){super();const n=this;let i=null,r=1,o=null,a="local-floor",l=null,u=null,h=null,d=null,f=null,m=null;const _=t.getContextAttributes();let g=null,p=null;const v=[],S=[],y=new Set,b=new Map,M=new At;M.layers.enable(1),M.viewport=new Ke;const P=new At;P.layers.enable(2),P.viewport=new Ke;const O=[M,P],x=new Nu;x.layers.enable(1),x.layers.enable(2);let L=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(H){let j=v[H];return j===void 0&&(j=new Sr,v[H]=j),j.getTargetRaySpace()},this.getControllerGrip=function(H){let j=v[H];return j===void 0&&(j=new Sr,v[H]=j),j.getGripSpace()},this.getHand=function(H){let j=v[H];return j===void 0&&(j=new Sr,v[H]=j),j.getHandSpace()};function C(H){const j=S.indexOf(H.inputSource);if(j===-1)return;const ne=v[j];ne!==void 0&&ne.dispatchEvent({type:H.type,data:H.inputSource})}c(C,"onSessionEvent");function B(){i.removeEventListener("select",C),i.removeEventListener("selectstart",C),i.removeEventListener("selectend",C),i.removeEventListener("squeeze",C),i.removeEventListener("squeezestart",C),i.removeEventListener("squeezeend",C),i.removeEventListener("end",B),i.removeEventListener("inputsourceschange",R);for(let H=0;H<v.length;H++){const j=S[H];j!==null&&(S[H]=null,v[H].disconnect(j))}L=null,N=null,e.setRenderTarget(g),f=null,d=null,h=null,i=null,p=null,ie.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}c(B,"onSessionEnd"),this.setFramebufferScaleFactor=function(H){r=H,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(H){a=H,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(H){l=H},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return h},this.getFrame=function(){return m},this.getSession=function(){return i},this.setSession=async function(H){if(i=H,i!==null){if(g=e.getRenderTarget(),i.addEventListener("select",C),i.addEventListener("selectstart",C),i.addEventListener("selectend",C),i.addEventListener("squeeze",C),i.addEventListener("squeezestart",C),i.addEventListener("squeezeend",C),i.addEventListener("end",B),i.addEventListener("inputsourceschange",R),_.xrCompatible!==!0&&await t.makeXRCompatible(),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const j={antialias:i.renderState.layers===void 0?_.antialias:!0,alpha:_.alpha,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,t,j),i.updateRenderState({baseLayer:f}),p=new Hn(f.framebufferWidth,f.framebufferHeight,{format:qt,type:hi,encoding:e.outputEncoding,stencilBuffer:_.stencil})}else{let j=null,ne=null,ae=null;_.depth&&(ae=_.stencil?35056:33190,j=_.stencil?qi:ai,ne=_.stencil?Ui:oi);const he={colorFormat:32856,depthFormat:ae,scaleFactor:r};h=new XRWebGLBinding(i,t),d=h.createProjectionLayer(he),i.updateRenderState({layers:[d]}),p=new Hn(d.textureWidth,d.textureHeight,{format:qt,type:hi,depthTexture:new Fu(d.textureWidth,d.textureHeight,ne,void 0,void 0,void 0,void 0,void 0,void 0,j),stencilBuffer:_.stencil,encoding:e.outputEncoding,samples:_.antialias?4:0});const $=e.properties.get(p);$.__ignoreDepthValues=d.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(1),l=null,o=await i.requestReferenceSpace(a),ie.setContext(i),ie.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function R(H){for(let j=0;j<H.removed.length;j++){const ne=H.removed[j],ae=S.indexOf(ne);ae>=0&&(S[ae]=null,v[ae].disconnect(ne))}for(let j=0;j<H.added.length;j++){const ne=H.added[j];let ae=S.indexOf(ne);if(ae===-1){for(let $=0;$<v.length;$++)if($>=S.length){S.push(ne),ae=$;break}else if(S[$]===null){S[$]=ne,ae=$;break}if(ae===-1)break}const he=v[ae];he&&he.connect(ne)}}c(R,"onInputSourcesChange");const D=new A,k=new A;function G(H,j,ne){D.setFromMatrixPosition(j.matrixWorld),k.setFromMatrixPosition(ne.matrixWorld);const ae=D.distanceTo(k),he=j.projectionMatrix.elements,$=ne.projectionMatrix.elements,Pe=he[14]/(he[10]-1),_e=he[14]/(he[10]+1),Le=(he[9]+1)/he[5],fe=(he[9]-1)/he[5],ke=(he[8]-1)/he[0],Z=($[8]+1)/$[0],J=Pe*ke,ce=Pe*Z,ve=ae/(-ke+Z),de=ve*-ke;j.matrixWorld.decompose(H.position,H.quaternion,H.scale),H.translateX(de),H.translateZ(ve),H.matrixWorld.compose(H.position,H.quaternion,H.scale),H.matrixWorldInverse.copy(H.matrixWorld).invert();const De=Pe+ve,Ee=_e+ve,Te=J-de,et=ce+(ae-de),Ye=Le*_e/Ee*De,E=fe*_e/Ee*De;H.projectionMatrix.makePerspective(Te,et,Ye,E,De,Ee)}c(G,"setProjectionFromUnion");function ee(H,j){j===null?H.matrixWorld.copy(H.matrix):H.matrixWorld.multiplyMatrices(j.matrixWorld,H.matrix),H.matrixWorldInverse.copy(H.matrixWorld).invert()}c(ee,"updateCamera"),this.updateCamera=function(H){if(i===null)return;x.near=P.near=M.near=H.near,x.far=P.far=M.far=H.far,(L!==x.near||N!==x.far)&&(i.updateRenderState({depthNear:x.near,depthFar:x.far}),L=x.near,N=x.far);const j=H.parent,ne=x.cameras;ee(x,j);for(let he=0;he<ne.length;he++)ee(ne[he],j);x.matrixWorld.decompose(x.position,x.quaternion,x.scale),H.matrix.copy(x.matrix),H.matrix.decompose(H.position,H.quaternion,H.scale);const ae=H.children;for(let he=0,$=ae.length;he<$;he++)ae[he].updateMatrixWorld(!0);ne.length===2?G(x,M,P):x.projectionMatrix.copy(M.projectionMatrix)},this.getCamera=function(){return x},this.getFoveation=function(){if(d!==null)return d.fixedFoveation;if(f!==null)return f.fixedFoveation},this.setFoveation=function(H){d!==null&&(d.fixedFoveation=H),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=H)},this.getPlanes=function(){return y};let W=null;function te(H,j){if(u=j.getViewerPose(l||o),m=j,u!==null){const ne=u.views;f!==null&&(e.setRenderTargetFramebuffer(p,f.framebuffer),e.setRenderTarget(p));let ae=!1;ne.length!==x.cameras.length&&(x.cameras.length=0,ae=!0);for(let he=0;he<ne.length;he++){const $=ne[he];let Pe=null;if(f!==null)Pe=f.getViewport($);else{const Le=h.getViewSubImage(d,$);Pe=Le.viewport,he===0&&(e.setRenderTargetTextures(p,Le.colorTexture,d.ignoreDepthValues?void 0:Le.depthStencilTexture),e.setRenderTarget(p))}let _e=O[he];_e===void 0&&(_e=new At,_e.layers.enable(he),_e.viewport=new Ke,O[he]=_e),_e.matrix.fromArray($.transform.matrix),_e.projectionMatrix.fromArray($.projectionMatrix),_e.viewport.set(Pe.x,Pe.y,Pe.width,Pe.height),he===0&&x.matrix.copy(_e.matrix),ae===!0&&x.cameras.push(_e)}}for(let ne=0;ne<v.length;ne++){const ae=S[ne],he=v[ne];ae!==null&&he!==void 0&&he.update(ae,j,l||o)}if(W&&W(H,j),j.detectedPlanes){n.dispatchEvent({type:"planesdetected",data:j.detectedPlanes});let ne=null;for(const ae of y)j.detectedPlanes.has(ae)||(ne===null&&(ne=[]),ne.push(ae));if(ne!==null)for(const ae of ne)y.delete(ae),b.delete(ae),n.dispatchEvent({type:"planeremoved",data:ae});for(const ae of j.detectedPlanes)if(!y.has(ae))y.add(ae),b.set(ae,j.lastChangedTime),n.dispatchEvent({type:"planeadded",data:ae});else{const he=b.get(ae);ae.lastChangedTime>he&&(b.set(ae,ae.lastChangedTime),n.dispatchEvent({type:"planechanged",data:ae}))}}m=null}c(te,"onAnimationFrame");const ie=new Mu;ie.setAnimationLoop(te),this.setAnimationLoop=function(H){W=H},this.dispose=function(){}}}c(ku,"WebXRManager");function Zv(s,e){function t(g,p){p.color.getRGB(g.fogColor.value,yu(s)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}c(t,"refreshFogUniforms");function n(g,p,v,S,y){p.isMeshBasicMaterial||p.isMeshLambertMaterial?i(g,p):p.isMeshToonMaterial?(i(g,p),h(g,p)):p.isMeshPhongMaterial?(i(g,p),u(g,p)):p.isMeshStandardMaterial?(i(g,p),d(g,p),p.isMeshPhysicalMaterial&&f(g,p,y)):p.isMeshMatcapMaterial?(i(g,p),m(g,p)):p.isMeshDepthMaterial?i(g,p):p.isMeshDistanceMaterial?(i(g,p),_(g,p)):p.isMeshNormalMaterial?i(g,p):p.isLineBasicMaterial?(r(g,p),p.isLineDashedMaterial&&o(g,p)):p.isPointsMaterial?a(g,p,v,S):p.isSpriteMaterial?l(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}c(n,"refreshMaterialUniforms");function i(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map),p.alphaMap&&(g.alphaMap.value=p.alphaMap),p.bumpMap&&(g.bumpMap.value=p.bumpMap,g.bumpScale.value=p.bumpScale,p.side===$t&&(g.bumpScale.value*=-1)),p.displacementMap&&(g.displacementMap.value=p.displacementMap,g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap),p.normalMap&&(g.normalMap.value=p.normalMap,g.normalScale.value.copy(p.normalScale),p.side===$t&&g.normalScale.value.negate()),p.specularMap&&(g.specularMap.value=p.specularMap),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);const v=e.get(p).envMap;if(v&&(g.envMap.value=v,g.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap){g.lightMap.value=p.lightMap;const b=s.physicallyCorrectLights!==!0?Math.PI:1;g.lightMapIntensity.value=p.lightMapIntensity*b}p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity);let S;p.map?S=p.map:p.specularMap?S=p.specularMap:p.displacementMap?S=p.displacementMap:p.normalMap?S=p.normalMap:p.bumpMap?S=p.bumpMap:p.roughnessMap?S=p.roughnessMap:p.metalnessMap?S=p.metalnessMap:p.alphaMap?S=p.alphaMap:p.emissiveMap?S=p.emissiveMap:p.clearcoatMap?S=p.clearcoatMap:p.clearcoatNormalMap?S=p.clearcoatNormalMap:p.clearcoatRoughnessMap?S=p.clearcoatRoughnessMap:p.iridescenceMap?S=p.iridescenceMap:p.iridescenceThicknessMap?S=p.iridescenceThicknessMap:p.specularIntensityMap?S=p.specularIntensityMap:p.specularColorMap?S=p.specularColorMap:p.transmissionMap?S=p.transmissionMap:p.thicknessMap?S=p.thicknessMap:p.sheenColorMap?S=p.sheenColorMap:p.sheenRoughnessMap&&(S=p.sheenRoughnessMap),S!==void 0&&(S.isWebGLRenderTarget&&(S=S.texture),S.matrixAutoUpdate===!0&&S.updateMatrix(),g.uvTransform.value.copy(S.matrix));let y;p.aoMap?y=p.aoMap:p.lightMap&&(y=p.lightMap),y!==void 0&&(y.isWebGLRenderTarget&&(y=y.texture),y.matrixAutoUpdate===!0&&y.updateMatrix(),g.uv2Transform.value.copy(y.matrix))}c(i,"refreshUniformsCommon");function r(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity}c(r,"refreshUniformsLine");function o(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}c(o,"refreshUniformsDash");function a(g,p,v,S){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*v,g.scale.value=S*.5,p.map&&(g.map.value=p.map),p.alphaMap&&(g.alphaMap.value=p.alphaMap),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);let y;p.map?y=p.map:p.alphaMap&&(y=p.alphaMap),y!==void 0&&(y.matrixAutoUpdate===!0&&y.updateMatrix(),g.uvTransform.value.copy(y.matrix))}c(a,"refreshUniformsPoints");function l(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map),p.alphaMap&&(g.alphaMap.value=p.alphaMap),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);let v;p.map?v=p.map:p.alphaMap&&(v=p.alphaMap),v!==void 0&&(v.matrixAutoUpdate===!0&&v.updateMatrix(),g.uvTransform.value.copy(v.matrix))}c(l,"refreshUniformsSprites");function u(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}c(u,"refreshUniformsPhong");function h(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}c(h,"refreshUniformsToon");function d(g,p){g.roughness.value=p.roughness,g.metalness.value=p.metalness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap),p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap),e.get(p).envMap&&(g.envMapIntensity.value=p.envMapIntensity)}c(d,"refreshUniformsStandard");function f(g,p,v){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap)),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap),p.clearcoatNormalMap&&(g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),g.clearcoatNormalMap.value=p.clearcoatNormalMap,p.side===$t&&g.clearcoatNormalScale.value.negate())),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap)),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=v.texture,g.transmissionSamplerSize.value.set(v.width,v.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap)}c(f,"refreshUniformsPhysical");function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}c(m,"refreshUniformsMatcap");function _(g,p){g.referencePosition.value.copy(p.referencePosition),g.nearDistance.value=p.nearDistance,g.farDistance.value=p.farDistance}return c(_,"refreshUniformsDistance"),{refreshFogUniforms:t,refreshMaterialUniforms:n}}c(Zv,"WebGLMaterials");function Qv(s,e,t,n){let i={},r={},o=[];const a=t.isWebGL2?s.getParameter(35375):0;function l(S,y){const b=y.program;n.uniformBlockBinding(S,b)}c(l,"bind");function u(S,y){let b=i[S.id];b===void 0&&(_(S),b=h(S),i[S.id]=b,S.addEventListener("dispose",p));const M=y.program;n.updateUBOMapping(S,M);const P=e.render.frame;r[S.id]!==P&&(f(S),r[S.id]=P)}c(u,"update");function h(S){const y=d();S.__bindingPointIndex=y;const b=s.createBuffer(),M=S.__size,P=S.usage;return s.bindBuffer(35345,b),s.bufferData(35345,M,P),s.bindBuffer(35345,null),s.bindBufferBase(35345,y,b),b}c(h,"createBuffer");function d(){for(let S=0;S<a;S++)if(o.indexOf(S)===-1)return o.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}c(d,"allocateBindingPointIndex");function f(S){const y=i[S.id],b=S.uniforms,M=S.__cache;s.bindBuffer(35345,y);for(let P=0,O=b.length;P<O;P++){const x=b[P];if(m(x,P,M)===!0){const L=x.__offset,N=Array.isArray(x.value)?x.value:[x.value];let C=0;for(let B=0;B<N.length;B++){const R=N[B],D=g(R);typeof R=="number"?(x.__data[0]=R,s.bufferSubData(35345,L+C,x.__data)):R.isMatrix3?(x.__data[0]=R.elements[0],x.__data[1]=R.elements[1],x.__data[2]=R.elements[2],x.__data[3]=R.elements[0],x.__data[4]=R.elements[3],x.__data[5]=R.elements[4],x.__data[6]=R.elements[5],x.__data[7]=R.elements[0],x.__data[8]=R.elements[6],x.__data[9]=R.elements[7],x.__data[10]=R.elements[8],x.__data[11]=R.elements[0]):(R.toArray(x.__data,C),C+=D.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(35345,L,x.__data)}}s.bindBuffer(35345,null)}c(f,"updateBufferData");function m(S,y,b){const M=S.value;if(b[y]===void 0){if(typeof M=="number")b[y]=M;else{const P=Array.isArray(M)?M:[M],O=[];for(let x=0;x<P.length;x++)O.push(P[x].clone());b[y]=O}return!0}else if(typeof M=="number"){if(b[y]!==M)return b[y]=M,!0}else{const P=Array.isArray(b[y])?b[y]:[b[y]],O=Array.isArray(M)?M:[M];for(let x=0;x<P.length;x++){const L=P[x];if(L.equals(O[x])===!1)return L.copy(O[x]),!0}}return!1}c(m,"hasUniformChanged");function _(S){const y=S.uniforms;let b=0;const M=16;let P=0;for(let O=0,x=y.length;O<x;O++){const L=y[O],N={boundary:0,storage:0},C=Array.isArray(L.value)?L.value:[L.value];for(let B=0,R=C.length;B<R;B++){const D=C[B],k=g(D);N.boundary+=k.boundary,N.storage+=k.storage}if(L.__data=new Float32Array(N.storage/Float32Array.BYTES_PER_ELEMENT),L.__offset=b,O>0){P=b%M;const B=M-P;P!==0&&B-N.boundary<0&&(b+=M-P,L.__offset=b)}b+=N.storage}return P=b%M,P>0&&(b+=M-P),S.__size=b,S.__cache={},this}c(_,"prepareUniformsGroup");function g(S){const y={boundary:0,storage:0};return typeof S=="number"?(y.boundary=4,y.storage=4):S.isVector2?(y.boundary=8,y.storage=8):S.isVector3||S.isColor?(y.boundary=16,y.storage=12):S.isVector4?(y.boundary=16,y.storage=16):S.isMatrix3?(y.boundary=48,y.storage=48):S.isMatrix4?(y.boundary=64,y.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),y}c(g,"getUniformSize");function p(S){const y=S.target;y.removeEventListener("dispose",p);const b=o.indexOf(y.__bindingPointIndex);o.splice(b,1),s.deleteBuffer(i[y.id]),delete i[y.id],delete r[y.id]}c(p,"onUniformsGroupsDispose");function v(){for(const S in i)s.deleteBuffer(i[S]);o=[],i={},r={}}return c(v,"dispose"),{bind:l,update:u,dispose:v}}c(Qv,"WebGLUniformsGroups");function e0(){const s=Us("canvas");return s.style.display="block",s}c(e0,"createCanvasElement");function zu(s={}){this.isWebGLRenderer=!0;const e=s.canvas!==void 0?s.canvas:e0(),t=s.context!==void 0?s.context:null,n=s.depth!==void 0?s.depth:!0,i=s.stencil!==void 0?s.stencil:!0,r=s.antialias!==void 0?s.antialias:!1,o=s.premultipliedAlpha!==void 0?s.premultipliedAlpha:!0,a=s.preserveDrawingBuffer!==void 0?s.preserveDrawingBuffer:!1,l=s.powerPreference!==void 0?s.powerPreference:"default",u=s.failIfMajorPerformanceCaveat!==void 0?s.failIfMajorPerformanceCaveat:!1;let h;t!==null?h=t.getContextAttributes().alpha:h=s.alpha!==void 0?s.alpha:!1;let d=null,f=null;const m=[],_=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=di,this.physicallyCorrectLights=!1,this.toneMapping=Tn,this.toneMappingExposure=1;const g=this;let p=!1,v=0,S=0,y=null,b=-1,M=null;const P=new Ke,O=new Ke;let x=null,L=e.width,N=e.height,C=1,B=null,R=null;const D=new Ke(0,0,L,N),k=new Ke(0,0,L,N);let G=!1;const ee=new zr;let W=!1,te=!1,ie=null;const H=new Ne,j=new oe,ne=new A,ae={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function he(){return y===null?C:1}c(he,"getTargetPixelRatio");let $=t;function Pe(T,z){for(let q=0;q<T.length;q++){const F=T[q],Y=e.getContext(F,z);if(Y!==null)return Y}return null}c(Pe,"getContext");try{const T={alpha:!0,depth:n,stencil:i,antialias:r,premultipliedAlpha:o,preserveDrawingBuffer:a,powerPreference:l,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Ea}`),e.addEventListener("webglcontextlost",Ae,!1),e.addEventListener("webglcontextrestored",Me,!1),e.addEventListener("webglcontextcreationerror",We,!1),$===null){const z=["webgl2","webgl","experimental-webgl"];if(g.isWebGL1Renderer===!0&&z.shift(),$=Pe(z,T),$===null)throw Pe(z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}$.getShaderPrecisionFormat===void 0&&($.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let _e,Le,fe,ke,Z,J,ce,ve,de,De,Ee,Te,et,Ye,E,w,V,re,le,pe,Re,me,K,we;function Ce(){_e=new b_($),Le=new m_($,_e,s),_e.init(Le),me=new Kv($,_e,Le),fe=new $v($,_e,Le),ke=new S_,Z=new Fv,J=new Yv($,_e,fe,Z,Le,me,ke),ce=new __(g),ve=new y_(g),de=new Ip($,Le),K=new f_($,_e,de,Le),De=new w_($,de,ke,K),Ee=new C_($,De,de,ke),le=new A_($,Le,J),w=new g_(Z),Te=new Nv(g,ce,ve,_e,Le,K,w),et=new Zv(g,Z),Ye=new zv,E=new Wv(_e,Le),re=new d_(g,ce,ve,fe,Ee,h,o),V=new qv(g,Ee,Le),we=new Qv($,ke,Le,fe),pe=new p_($,_e,ke,Le),Re=new M_($,_e,ke,Le),ke.programs=Te.programs,g.capabilities=Le,g.extensions=_e,g.properties=Z,g.renderLists=Ye,g.shadowMap=V,g.state=fe,g.info=ke}c(Ce,"initGLContext"),Ce();const xe=new ku(g,$);this.xr=xe,this.getContext=function(){return $},this.getContextAttributes=function(){return $.getContextAttributes()},this.forceContextLoss=function(){const T=_e.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=_e.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return C},this.setPixelRatio=function(T){T!==void 0&&(C=T,this.setSize(L,N,!1))},this.getSize=function(T){return T.set(L,N)},this.setSize=function(T,z,q){if(xe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}L=T,N=z,e.width=Math.floor(T*C),e.height=Math.floor(z*C),q!==!1&&(e.style.width=T+"px",e.style.height=z+"px"),this.setViewport(0,0,T,z)},this.getDrawingBufferSize=function(T){return T.set(L*C,N*C).floor()},this.setDrawingBufferSize=function(T,z,q){L=T,N=z,C=q,e.width=Math.floor(T*q),e.height=Math.floor(z*q),this.setViewport(0,0,T,z)},this.getCurrentViewport=function(T){return T.copy(P)},this.getViewport=function(T){return T.copy(D)},this.setViewport=function(T,z,q,F){T.isVector4?D.set(T.x,T.y,T.z,T.w):D.set(T,z,q,F),fe.viewport(P.copy(D).multiplyScalar(C).floor())},this.getScissor=function(T){return T.copy(k)},this.setScissor=function(T,z,q,F){T.isVector4?k.set(T.x,T.y,T.z,T.w):k.set(T,z,q,F),fe.scissor(O.copy(k).multiplyScalar(C).floor())},this.getScissorTest=function(){return G},this.setScissorTest=function(T){fe.setScissorTest(G=T)},this.setOpaqueSort=function(T){B=T},this.setTransparentSort=function(T){R=T},this.getClearColor=function(T){return T.copy(re.getClearColor())},this.setClearColor=function(){re.setClearColor.apply(re,arguments)},this.getClearAlpha=function(){return re.getClearAlpha()},this.setClearAlpha=function(){re.setClearAlpha.apply(re,arguments)},this.clear=function(T=!0,z=!0,q=!0){let F=0;T&&(F|=16384),z&&(F|=256),q&&(F|=1024),$.clear(F)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Ae,!1),e.removeEventListener("webglcontextrestored",Me,!1),e.removeEventListener("webglcontextcreationerror",We,!1),Ye.dispose(),E.dispose(),Z.dispose(),ce.dispose(),ve.dispose(),Ee.dispose(),K.dispose(),we.dispose(),Te.dispose(),xe.dispose(),xe.removeEventListener("sessionstart",ge),xe.removeEventListener("sessionend",ye),ie&&(ie.dispose(),ie=null),qe.stop()};function Ae(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),p=!0}c(Ae,"onContextLost");function Me(){console.log("THREE.WebGLRenderer: Context Restored."),p=!1;const T=ke.autoReset,z=V.enabled,q=V.autoUpdate,F=V.needsUpdate,Y=V.type;Ce(),ke.autoReset=T,V.enabled=z,V.autoUpdate=q,V.needsUpdate=F,V.type=Y}c(Me,"onContextRestore");function We(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}c(We,"onContextCreationError");function nt(T){const z=T.target;z.removeEventListener("dispose",nt),gt(z)}c(nt,"onMaterialDispose");function gt(T){I(T),Z.remove(T)}c(gt,"deallocateMaterial");function I(T){const z=Z.get(T).programs;z!==void 0&&(z.forEach(function(q){Te.releaseProgram(q)}),T.isShaderMaterial&&Te.releaseShaderCache(T))}c(I,"releaseMaterialProgramReferences"),this.renderBufferDirect=function(T,z,q,F,Y,Se){z===null&&(z=ae);const Ie=Y.isMesh&&Y.matrixWorld.determinant()<0,ze=Sd(T,z,q,F,Y);fe.setMaterial(F,Ie);let Ue=q.index,je=1;F.wireframe===!0&&(Ue=De.getWireframeAttribute(q),je=2);const Be=q.drawRange,He=q.attributes.position;let at=Be.start*je,Ut=(Be.start+Be.count)*je;Se!==null&&(at=Math.max(at,Se.start*je),Ut=Math.min(Ut,(Se.start+Se.count)*je)),Ue!==null?(at=Math.max(at,0),Ut=Math.min(Ut,Ue.count)):He!=null&&(at=Math.max(at,0),Ut=Math.min(Ut,He.count));const _n=Ut-at;if(_n<0||_n===1/0)return;K.setup(Y,F,ze,q,Ue);let Zn,lt=pe;if(Ue!==null&&(Zn=de.get(Ue),lt=Re,lt.setIndex(Zn)),Y.isMesh)F.wireframe===!0?(fe.setLineWidth(F.wireframeLinewidth*he()),lt.setMode(1)):lt.setMode(4);else if(Y.isLine){let Ve=F.linewidth;Ve===void 0&&(Ve=1),fe.setLineWidth(Ve*he()),Y.isLineSegments?lt.setMode(1):Y.isLineLoop?lt.setMode(2):lt.setMode(3)}else Y.isPoints?lt.setMode(0):Y.isSprite&&lt.setMode(4);if(Y.isInstancedMesh)lt.renderInstances(at,_n,Y.count);else if(q.isInstancedBufferGeometry){const Ve=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,Qr=Math.min(q.instanceCount,Ve);lt.renderInstances(at,_n,Qr)}else lt.render(at,_n)},this.compile=function(T,z){function q(F,Y,Se){F.transparent===!0&&F.side===qs?(F.side=$t,F.needsUpdate=!0,Gt(F,Y,Se),F.side=Bn,F.needsUpdate=!0,Gt(F,Y,Se),F.side=qs):Gt(F,Y,Se)}c(q,"prepare"),f=E.get(T),f.init(),_.push(f),T.traverseVisible(function(F){F.isLight&&F.layers.test(z.layers)&&(f.pushLight(F),F.castShadow&&f.pushShadow(F))}),f.setupLights(g.physicallyCorrectLights),T.traverse(function(F){const Y=F.material;if(Y)if(Array.isArray(Y))for(let Se=0;Se<Y.length;Se++){const Ie=Y[Se];q(Ie,T,F)}else q(Y,T,F)}),_.pop(),f=null};let X=null;function se(T){X&&X(T)}c(se,"onAnimationFrame");function ge(){qe.stop()}c(ge,"onXRSessionStart");function ye(){qe.start()}c(ye,"onXRSessionEnd");const qe=new Mu;qe.setAnimationLoop(se),typeof self<"u"&&qe.setContext(self),this.setAnimationLoop=function(T){X=T,xe.setAnimationLoop(T),T===null?qe.stop():qe.start()},xe.addEventListener("sessionstart",ge),xe.addEventListener("sessionend",ye),this.render=function(T,z){if(z!==void 0&&z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(p===!0)return;T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),xe.enabled===!0&&xe.isPresenting===!0&&(xe.cameraAutoUpdate===!0&&xe.updateCamera(z),z=xe.getCamera()),T.isScene===!0&&T.onBeforeRender(g,T,z,y),f=E.get(T,_.length),f.init(),_.push(f),H.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),ee.setFromProjectionMatrix(H),te=this.localClippingEnabled,W=w.init(this.clippingPlanes,te,z),d=Ye.get(T,m.length),d.init(),m.push(d),_t(T,z,0,g.sortObjects),d.finish(),g.sortObjects===!0&&d.sort(B,R),W===!0&&w.beginShadows();const q=f.state.shadowsArray;if(V.render(q,T,z),W===!0&&w.endShadows(),this.info.autoReset===!0&&this.info.reset(),re.render(d,T),f.setupLights(g.physicallyCorrectLights),z.isArrayCamera){const F=z.cameras;for(let Y=0,Se=F.length;Y<Se;Y++){const Ie=F[Y];Tt(d,T,Ie,Ie.viewport)}}else Tt(d,T,z);y!==null&&(J.updateMultisampleRenderTarget(y),J.updateRenderTargetMipmap(y)),T.isScene===!0&&T.onAfterRender(g,T,z),K.resetDefaultState(),b=-1,M=null,_.pop(),_.length>0?f=_[_.length-1]:f=null,m.pop(),m.length>0?d=m[m.length-1]:d=null};function _t(T,z,q,F){if(T.visible===!1)return;if(T.layers.test(z.layers)){if(T.isGroup)q=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(z);else if(T.isLight)f.pushLight(T),T.castShadow&&f.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||ee.intersectsSprite(T)){F&&ne.setFromMatrixPosition(T.matrixWorld).applyMatrix4(H);const Ie=Ee.update(T),ze=T.material;ze.visible&&d.push(T,Ie,ze,q,ne.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(T.isSkinnedMesh&&T.skeleton.frame!==ke.render.frame&&(T.skeleton.update(),T.skeleton.frame=ke.render.frame),!T.frustumCulled||ee.intersectsObject(T))){F&&ne.setFromMatrixPosition(T.matrixWorld).applyMatrix4(H);const Ie=Ee.update(T),ze=T.material;if(Array.isArray(ze)){const Ue=Ie.groups;for(let je=0,Be=Ue.length;je<Be;je++){const He=Ue[je],at=ze[He.materialIndex];at&&at.visible&&d.push(T,Ie,at,q,ne.z,He)}}else ze.visible&&d.push(T,Ie,ze,q,ne.z,null)}}const Se=T.children;for(let Ie=0,ze=Se.length;Ie<ze;Ie++)_t(Se[Ie],z,q,F)}c(_t,"projectObject");function Tt(T,z,q,F){const Y=T.opaque,Se=T.transmissive,Ie=T.transparent;f.setupLightsView(q),Se.length>0&&Jn(Y,z,q),F&&fe.viewport(P.copy(F)),Y.length>0&&it(Y,z,q),Se.length>0&&it(Se,z,q),Ie.length>0&&it(Ie,z,q),fe.buffers.depth.setTest(!0),fe.buffers.depth.setMask(!0),fe.buffers.color.setMask(!0),fe.setPolygonOffset(!1)}c(Tt,"renderScene");function Jn(T,z,q){const F=Le.isWebGL2;ie===null&&(ie=new Hn(1,1,{generateMipmaps:!0,type:_e.has("EXT_color_buffer_half_float")?Ns:hi,minFilter:ui,samples:F&&r===!0?4:0})),g.getDrawingBufferSize(j),F?ie.setSize(j.x,j.y):ie.setSize(Cr(j.x),Cr(j.y));const Y=g.getRenderTarget();g.setRenderTarget(ie),g.clear();const Se=g.toneMapping;g.toneMapping=Tn,it(T,z,q),g.toneMapping=Se,J.updateMultisampleRenderTarget(ie),J.updateRenderTargetMipmap(ie),g.setRenderTarget(Y)}c(Jn,"renderTransmissionPass");function it(T,z,q){const F=z.isScene===!0?z.overrideMaterial:null;for(let Y=0,Se=T.length;Y<Se;Y++){const Ie=T[Y],ze=Ie.object,Ue=Ie.geometry,je=F===null?Ie.material:F,Be=Ie.group;ze.layers.test(q.layers)&&gn(ze,z,q,Ue,je,Be)}}c(it,"renderObjects");function gn(T,z,q,F,Y,Se){T.onBeforeRender(g,z,q,F,Y,Se),T.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),Y.onBeforeRender(g,z,q,F,T,Se),Y.transparent===!0&&Y.side===qs?(Y.side=$t,Y.needsUpdate=!0,g.renderBufferDirect(q,z,F,Y,T,Se),Y.side=Bn,Y.needsUpdate=!0,g.renderBufferDirect(q,z,F,Y,T,Se),Y.side=qs):g.renderBufferDirect(q,z,F,Y,T,Se),T.onAfterRender(g,z,q,F,Y,Se)}c(gn,"renderObject");function Gt(T,z,q){z.isScene!==!0&&(z=ae);const F=Z.get(T),Y=f.state.lights,Se=f.state.shadowsArray,Ie=Y.state.version,ze=Te.getParameters(T,Y.state,Se,z,q),Ue=Te.getProgramCacheKey(ze);let je=F.programs;F.environment=T.isMeshStandardMaterial?z.environment:null,F.fog=z.fog,F.envMap=(T.isMeshStandardMaterial?ve:ce).get(T.envMap||F.environment),je===void 0&&(T.addEventListener("dispose",nt),je=new Map,F.programs=je);let Be=je.get(Ue);if(Be!==void 0){if(F.currentProgram===Be&&F.lightsStateVersion===Ie)return tl(T,ze),Be}else ze.uniforms=Te.getUniforms(T),T.onBuild(q,ze,g),T.onBeforeCompile(ze,g),Be=Te.acquireProgram(ze,Ue),je.set(Ue,Be),F.uniforms=ze.uniforms;const He=F.uniforms;(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(He.clippingPlanes=w.uniform),tl(T,ze),F.needsLights=Ed(T),F.lightsStateVersion=Ie,F.needsLights&&(He.ambientLightColor.value=Y.state.ambient,He.lightProbe.value=Y.state.probe,He.directionalLights.value=Y.state.directional,He.directionalLightShadows.value=Y.state.directionalShadow,He.spotLights.value=Y.state.spot,He.spotLightShadows.value=Y.state.spotShadow,He.rectAreaLights.value=Y.state.rectArea,He.ltc_1.value=Y.state.rectAreaLTC1,He.ltc_2.value=Y.state.rectAreaLTC2,He.pointLights.value=Y.state.point,He.pointLightShadows.value=Y.state.pointShadow,He.hemisphereLights.value=Y.state.hemi,He.directionalShadowMap.value=Y.state.directionalShadowMap,He.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,He.spotShadowMap.value=Y.state.spotShadowMap,He.spotLightMatrix.value=Y.state.spotLightMatrix,He.spotLightMap.value=Y.state.spotLightMap,He.pointShadowMap.value=Y.state.pointShadowMap,He.pointShadowMatrix.value=Y.state.pointShadowMatrix);const at=Be.getUniforms(),Ut=Cs.seqWithValue(at.seq,He);return F.currentProgram=Be,F.uniformsList=Ut,Be}c(Gt,"getProgram");function tl(T,z){const q=Z.get(T);q.outputEncoding=z.outputEncoding,q.instancing=z.instancing,q.skinning=z.skinning,q.morphTargets=z.morphTargets,q.morphNormals=z.morphNormals,q.morphColors=z.morphColors,q.morphTargetsCount=z.morphTargetsCount,q.numClippingPlanes=z.numClippingPlanes,q.numIntersection=z.numClipIntersection,q.vertexAlphas=z.vertexAlphas,q.vertexTangents=z.vertexTangents,q.toneMapping=z.toneMapping}c(tl,"updateCommonMaterialProperties");function Sd(T,z,q,F,Y){z.isScene!==!0&&(z=ae),J.resetTextureUnits();const Se=z.fog,Ie=F.isMeshStandardMaterial?z.environment:null,ze=y===null?g.outputEncoding:y.isXRRenderTarget===!0?y.texture.encoding:di,Ue=(F.isMeshStandardMaterial?ve:ce).get(F.envMap||Ie),je=F.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,Be=!!F.normalMap&&!!q.attributes.tangent,He=!!q.morphAttributes.position,at=!!q.morphAttributes.normal,Ut=!!q.morphAttributes.color,_n=F.toneMapped?g.toneMapping:Tn,Zn=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,lt=Zn!==void 0?Zn.length:0,Ve=Z.get(F),Qr=f.state.lights;if(W===!0&&(te===!0||T!==M)){const Bt=T===M&&F.id===b;w.setState(F,T,Bt)}let vt=!1;F.version===Ve.__version?(Ve.needsLights&&Ve.lightsStateVersion!==Qr.state.version||Ve.outputEncoding!==ze||Y.isInstancedMesh&&Ve.instancing===!1||!Y.isInstancedMesh&&Ve.instancing===!0||Y.isSkinnedMesh&&Ve.skinning===!1||!Y.isSkinnedMesh&&Ve.skinning===!0||Ve.envMap!==Ue||F.fog===!0&&Ve.fog!==Se||Ve.numClippingPlanes!==void 0&&(Ve.numClippingPlanes!==w.numPlanes||Ve.numIntersection!==w.numIntersection)||Ve.vertexAlphas!==je||Ve.vertexTangents!==Be||Ve.morphTargets!==He||Ve.morphNormals!==at||Ve.morphColors!==Ut||Ve.toneMapping!==_n||Le.isWebGL2===!0&&Ve.morphTargetsCount!==lt)&&(vt=!0):(vt=!0,Ve.__version=F.version);let Qn=Ve.currentProgram;vt===!0&&(Qn=Gt(F,z,Y));let nl=!1,as=!1,eo=!1;const Rt=Qn.getUniforms(),ei=Ve.uniforms;if(fe.useProgram(Qn.program)&&(nl=!0,as=!0,eo=!0),F.id!==b&&(b=F.id,as=!0),nl||M!==T){if(Rt.setValue($,"projectionMatrix",T.projectionMatrix),Le.logarithmicDepthBuffer&&Rt.setValue($,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),M!==T&&(M=T,as=!0,eo=!0),F.isShaderMaterial||F.isMeshPhongMaterial||F.isMeshToonMaterial||F.isMeshStandardMaterial||F.envMap){const Bt=Rt.map.cameraPosition;Bt!==void 0&&Bt.setValue($,ne.setFromMatrixPosition(T.matrixWorld))}(F.isMeshPhongMaterial||F.isMeshToonMaterial||F.isMeshLambertMaterial||F.isMeshBasicMaterial||F.isMeshStandardMaterial||F.isShaderMaterial)&&Rt.setValue($,"isOrthographic",T.isOrthographicCamera===!0),(F.isMeshPhongMaterial||F.isMeshToonMaterial||F.isMeshLambertMaterial||F.isMeshBasicMaterial||F.isMeshStandardMaterial||F.isShaderMaterial||F.isShadowMaterial||Y.isSkinnedMesh)&&Rt.setValue($,"viewMatrix",T.matrixWorldInverse)}if(Y.isSkinnedMesh){Rt.setOptional($,Y,"bindMatrix"),Rt.setOptional($,Y,"bindMatrixInverse");const Bt=Y.skeleton;Bt&&(Le.floatVertexTextures?(Bt.boneTexture===null&&Bt.computeBoneTexture(),Rt.setValue($,"boneTexture",Bt.boneTexture,J),Rt.setValue($,"boneTextureSize",Bt.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const to=q.morphAttributes;if((to.position!==void 0||to.normal!==void 0||to.color!==void 0&&Le.isWebGL2===!0)&&le.update(Y,q,F,Qn),(as||Ve.receiveShadow!==Y.receiveShadow)&&(Ve.receiveShadow=Y.receiveShadow,Rt.setValue($,"receiveShadow",Y.receiveShadow)),F.isMeshGouraudMaterial&&F.envMap!==null&&(ei.envMap.value=Ue,ei.flipEnvMap.value=Ue.isCubeTexture&&Ue.isRenderTargetTexture===!1?-1:1),as&&(Rt.setValue($,"toneMappingExposure",g.toneMappingExposure),Ve.needsLights&&Td(ei,eo),Se&&F.fog===!0&&et.refreshFogUniforms(ei,Se),et.refreshMaterialUniforms(ei,F,C,N,ie),Cs.upload($,Ve.uniformsList,ei,J)),F.isShaderMaterial&&F.uniformsNeedUpdate===!0&&(Cs.upload($,Ve.uniformsList,ei,J),F.uniformsNeedUpdate=!1),F.isSpriteMaterial&&Rt.setValue($,"center",Y.center),Rt.setValue($,"modelViewMatrix",Y.modelViewMatrix),Rt.setValue($,"normalMatrix",Y.normalMatrix),Rt.setValue($,"modelMatrix",Y.matrixWorld),F.isShaderMaterial||F.isRawShaderMaterial){const Bt=F.uniformsGroups;for(let no=0,Ad=Bt.length;no<Ad;no++)if(Le.isWebGL2){const il=Bt[no];we.update(il,Qn),we.bind(il,Qn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Qn}c(Sd,"setProgram");function Td(T,z){T.ambientLightColor.needsUpdate=z,T.lightProbe.needsUpdate=z,T.directionalLights.needsUpdate=z,T.directionalLightShadows.needsUpdate=z,T.pointLights.needsUpdate=z,T.pointLightShadows.needsUpdate=z,T.spotLights.needsUpdate=z,T.spotLightShadows.needsUpdate=z,T.rectAreaLights.needsUpdate=z,T.hemisphereLights.needsUpdate=z}c(Td,"markUniformsLightsNeedsUpdate");function Ed(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}c(Ed,"materialNeedsLights"),this.getActiveCubeFace=function(){return v},this.getActiveMipmapLevel=function(){return S},this.getRenderTarget=function(){return y},this.setRenderTargetTextures=function(T,z,q){Z.get(T.texture).__webglTexture=z,Z.get(T.depthTexture).__webglTexture=q;const F=Z.get(T);F.__hasExternalTextures=!0,F.__hasExternalTextures&&(F.__autoAllocateDepthBuffer=q===void 0,F.__autoAllocateDepthBuffer||_e.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),F.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(T,z){const q=Z.get(T);q.__webglFramebuffer=z,q.__useDefaultFramebuffer=z===void 0},this.setRenderTarget=function(T,z=0,q=0){y=T,v=z,S=q;let F=!0,Y=null,Se=!1,Ie=!1;if(T){const Ue=Z.get(T);Ue.__useDefaultFramebuffer!==void 0?(fe.bindFramebuffer(36160,null),F=!1):Ue.__webglFramebuffer===void 0?J.setupRenderTarget(T):Ue.__hasExternalTextures&&J.rebindTextures(T,Z.get(T.texture).__webglTexture,Z.get(T.depthTexture).__webglTexture);const je=T.texture;(je.isData3DTexture||je.isDataArrayTexture||je.isCompressedArrayTexture)&&(Ie=!0);const Be=Z.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Y=Be[z],Se=!0):Le.isWebGL2&&T.samples>0&&J.useMultisampledRTT(T)===!1?Y=Z.get(T).__webglMultisampledFramebuffer:Y=Be,P.copy(T.viewport),O.copy(T.scissor),x=T.scissorTest}else P.copy(D).multiplyScalar(C).floor(),O.copy(k).multiplyScalar(C).floor(),x=G;if(fe.bindFramebuffer(36160,Y)&&Le.drawBuffers&&F&&fe.drawBuffers(T,Y),fe.viewport(P),fe.scissor(O),fe.setScissorTest(x),Se){const Ue=Z.get(T.texture);$.framebufferTexture2D(36160,36064,34069+z,Ue.__webglTexture,q)}else if(Ie){const Ue=Z.get(T.texture),je=z||0;$.framebufferTextureLayer(36160,36064,Ue.__webglTexture,q||0,je)}b=-1},this.readRenderTargetPixels=function(T,z,q,F,Y,Se,Ie){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ze=Z.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Ie!==void 0&&(ze=ze[Ie]),ze){fe.bindFramebuffer(36160,ze);try{const Ue=T.texture,je=Ue.format,Be=Ue.type;if(je!==qt&&me.convert(je)!==$.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const He=Be===Ns&&(_e.has("EXT_color_buffer_half_float")||Le.isWebGL2&&_e.has("EXT_color_buffer_float"));if(Be!==hi&&me.convert(Be)!==$.getParameter(35738)&&!(Be===On&&(Le.isWebGL2||_e.has("OES_texture_float")||_e.has("WEBGL_color_buffer_float")))&&!He){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=T.width-F&&q>=0&&q<=T.height-Y&&$.readPixels(z,q,F,Y,me.convert(je),me.convert(Be),Se)}finally{const Ue=y!==null?Z.get(y).__webglFramebuffer:null;fe.bindFramebuffer(36160,Ue)}}},this.copyFramebufferToTexture=function(T,z,q=0){const F=Math.pow(2,-q),Y=Math.floor(z.image.width*F),Se=Math.floor(z.image.height*F);J.setTexture2D(z,0),$.copyTexSubImage2D(3553,q,0,0,T.x,T.y,Y,Se),fe.unbindTexture()},this.copyTextureToTexture=function(T,z,q,F=0){const Y=z.image.width,Se=z.image.height,Ie=me.convert(q.format),ze=me.convert(q.type);J.setTexture2D(q,0),$.pixelStorei(37440,q.flipY),$.pixelStorei(37441,q.premultiplyAlpha),$.pixelStorei(3317,q.unpackAlignment),z.isDataTexture?$.texSubImage2D(3553,F,T.x,T.y,Y,Se,Ie,ze,z.image.data):z.isCompressedTexture?$.compressedTexSubImage2D(3553,F,T.x,T.y,z.mipmaps[0].width,z.mipmaps[0].height,Ie,z.mipmaps[0].data):$.texSubImage2D(3553,F,T.x,T.y,Ie,ze,z.image),F===0&&q.generateMipmaps&&$.generateMipmap(3553),fe.unbindTexture()},this.copyTextureToTexture3D=function(T,z,q,F,Y=0){if(g.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Se=T.max.x-T.min.x+1,Ie=T.max.y-T.min.y+1,ze=T.max.z-T.min.z+1,Ue=me.convert(F.format),je=me.convert(F.type);let Be;if(F.isData3DTexture)J.setTexture3D(F,0),Be=32879;else if(F.isDataArrayTexture)J.setTexture2DArray(F,0),Be=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}$.pixelStorei(37440,F.flipY),$.pixelStorei(37441,F.premultiplyAlpha),$.pixelStorei(3317,F.unpackAlignment);const He=$.getParameter(3314),at=$.getParameter(32878),Ut=$.getParameter(3316),_n=$.getParameter(3315),Zn=$.getParameter(32877),lt=q.isCompressedTexture?q.mipmaps[0]:q.image;$.pixelStorei(3314,lt.width),$.pixelStorei(32878,lt.height),$.pixelStorei(3316,T.min.x),$.pixelStorei(3315,T.min.y),$.pixelStorei(32877,T.min.z),q.isDataTexture||q.isData3DTexture?$.texSubImage3D(Be,Y,z.x,z.y,z.z,Se,Ie,ze,Ue,je,lt.data):q.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),$.compressedTexSubImage3D(Be,Y,z.x,z.y,z.z,Se,Ie,ze,Ue,lt.data)):$.texSubImage3D(Be,Y,z.x,z.y,z.z,Se,Ie,ze,Ue,je,lt),$.pixelStorei(3314,He),$.pixelStorei(32878,at),$.pixelStorei(3316,Ut),$.pixelStorei(3315,_n),$.pixelStorei(32877,Zn),Y===0&&F.generateMipmaps&&$.generateMipmap(Be),fe.unbindTexture()},this.initTexture=function(T){T.isCubeTexture?J.setTextureCube(T,0):T.isData3DTexture?J.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?J.setTexture2DArray(T,0):J.setTexture2D(T,0),fe.unbindTexture()},this.resetState=function(){v=0,S=0,y=null,fe.reset(),K.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}c(zu,"WebGLRenderer");class Uu extends zu{}c(Uu,"WebGL1Renderer");Uu.prototype.isWebGL1Renderer=!0;class Bu extends Qe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.backgroundIntensity=this.backgroundIntensity),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}c(Bu,"Scene");class Hu{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=$o,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=Yt()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Yt()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Yt()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}c(Hu,"InterleavedBuffer");const Dt=new A;class Vr{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Dt.fromBufferAttribute(this,t),Dt.applyMatrix4(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Dt.fromBufferAttribute(this,t),Dt.applyNormalMatrix(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Dt.fromBufferAttribute(this,t),Dt.transformDirection(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}setX(e,t){return this.normalized&&(t=Je(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Je(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Je(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Je(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Sn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Sn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Sn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Sn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Je(t,this.array),n=Je(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Je(t,this.array),n=Je(n,this.array),i=Je(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Je(t,this.array),n=Je(n,this.array),i=Je(i,this.array),r=Je(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new Ct(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Vr(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}c(Vr,"InterleavedBufferAttribute");const gc=new A,_c=new Ke,vc=new Ke,t0=new A,xc=new Ne;class Vu extends st{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new Ne,this.bindMatrixInverse=new Ne}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,this}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new Ke,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode==="attached"?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode==="detached"?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}boneTransform(e,t){const n=this.skeleton,i=this.geometry;_c.fromBufferAttribute(i.attributes.skinIndex,e),vc.fromBufferAttribute(i.attributes.skinWeight,e),gc.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const o=vc.getComponent(r);if(o!==0){const a=_c.getComponent(r);xc.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(t0.copy(gc).applyMatrix4(xc),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}c(Vu,"SkinnedMesh");class za extends Qe{constructor(){super(),this.isBone=!0,this.type="Bone"}}c(za,"Bone");class Gu extends ht{constructor(e=null,t=1,n=1,i,r,o,a,l,u=yt,h=yt,d,f){super(null,o,a,l,u,h,i,r,d,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}c(Gu,"DataTexture");const yc=new Ne,n0=new Ne;class Gr{constructor(e=[],t=[]){this.uuid=Yt(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.boneTextureSize=0,this.frame=-1,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Ne)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new Ne;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,o=e.length;r<o;r++){const a=e[r]?e[r].matrixWorld:n0;yc.multiplyMatrices(a,t[r]),yc.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new Gr(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=gu(e),e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new Gu(t,e,e,qt,On);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this.boneTextureSize=e,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const r=e.bones[n];let o=t[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new za),this.bones.push(o),this.boneInverses.push(new Ne().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.5,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){const o=t[i];e.bones.push(o.uuid);const a=n[i];e.boneInverses.push(a.toArray())}return e}}c(Gr,"Skeleton");class Qo extends Ct{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}c(Qo,"InstancedBufferAttribute");const bc=new Ne,wc=new Ne,dr=[],i0=new Ne,ms=new st;class Wu extends st{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Qo(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.frustumCulled=!1;for(let i=0;i<n;i++)this.setMatrixAt(i,i0)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){const n=this.matrixWorld,i=this.count;if(ms.geometry=this.geometry,ms.material=this.material,ms.material!==void 0)for(let r=0;r<i;r++){this.getMatrixAt(r,bc),wc.multiplyMatrices(n,bc),ms.matrixWorld=wc,ms.raycast(e,dr);for(let o=0,a=dr.length;o<a;o++){const l=dr[o];l.instanceId=r,l.object=this,t.push(l)}dr.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Qo(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}c(Wu,"InstancedMesh");class Ua extends Kt{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Oe(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}c(Ua,"LineBasicMaterial");const Mc=new A,Sc=new A,Tc=new Ne,Io=new Qi,fr=new qn;class Wr extends Qe{constructor(e=new Nt,t=new Ua){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)Mc.fromBufferAttribute(t,i-1),Sc.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Mc.distanceTo(Sc);e.setAttribute("lineDistance",new dt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),fr.copy(n.boundingSphere),fr.applyMatrix4(i),fr.radius+=r,e.ray.intersectsSphere(fr)===!1)return;Tc.copy(i).invert(),Io.copy(e.ray).applyMatrix4(Tc);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,u=new A,h=new A,d=new A,f=new A,m=this.isLineSegments?2:1,_=n.index,p=n.attributes.position;if(_!==null){const v=Math.max(0,o.start),S=Math.min(_.count,o.start+o.count);for(let y=v,b=S-1;y<b;y+=m){const M=_.getX(y),P=_.getX(y+1);if(u.fromBufferAttribute(p,M),h.fromBufferAttribute(p,P),Io.distanceSqToSegment(u,h,f,d)>l)continue;f.applyMatrix4(this.matrixWorld);const x=e.ray.origin.distanceTo(f);x<e.near||x>e.far||t.push({distance:x,point:d.clone().applyMatrix4(this.matrixWorld),index:y,face:null,faceIndex:null,object:this})}}else{const v=Math.max(0,o.start),S=Math.min(p.count,o.start+o.count);for(let y=v,b=S-1;y<b;y+=m){if(u.fromBufferAttribute(p,y),h.fromBufferAttribute(p,y+1),Io.distanceSqToSegment(u,h,f,d)>l)continue;f.applyMatrix4(this.matrixWorld);const P=e.ray.origin.distanceTo(f);P<e.near||P>e.far||t.push({distance:P,point:d.clone().applyMatrix4(this.matrixWorld),index:y,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}c(Wr,"Line");const Ec=new A,Ac=new A;class ju extends Wr{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)Ec.fromBufferAttribute(t,i),Ac.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Ec.distanceTo(Ac);e.setAttribute("lineDistance",new dt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}c(ju,"LineSegments");class Xu extends Wr{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}c(Xu,"LineLoop");class jr extends Kt{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Oe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}c(jr,"PointsMaterial");const Cc=new Ne,ea=new Qi,pr=new qn,mr=new A;class Ba extends Qe{constructor(e=new Nt,t=new jr){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),pr.copy(n.boundingSphere),pr.applyMatrix4(i),pr.radius+=r,e.ray.intersectsSphere(pr)===!1)return;Cc.copy(i).invert(),ea.copy(e.ray).applyMatrix4(Cc);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,u=n.index,d=n.attributes.position;if(u!==null){const f=Math.max(0,o.start),m=Math.min(u.count,o.start+o.count);for(let _=f,g=m;_<g;_++){const p=u.getX(_);mr.fromBufferAttribute(d,p),Lc(mr,p,l,i,e,t,this)}}else{const f=Math.max(0,o.start),m=Math.min(d.count,o.start+o.count);for(let _=f,g=m;_<g;_++)mr.fromBufferAttribute(d,_),Lc(mr,_,l,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}c(Ba,"Points");function Lc(s,e,t,n,i,r,o){const a=ea.distanceSqToPoint(s);if(a<t){const l=new A;ea.closestPointToPoint(s,l),l.applyMatrix4(n);const u=i.ray.origin.distanceTo(l);if(u<i.near||u>i.far)return;r.push({distance:u,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:o})}}c(Lc,"testPoint");class sn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,i=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(i),t.push(r),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let i=0;const r=n.length;let o;t?o=t:o=e*n[r-1];let a=0,l=r-1,u;for(;a<=l;)if(i=Math.floor(a+(l-a)/2),u=n[i]-o,u<0)a=i+1;else if(u>0)l=i-1;else{l=i;break}if(i=l,n[i]===o)return i/(r-1);const h=n[i],f=n[i+1]-h,m=(o-h)/f;return(i+m)/(r-1)}getTangent(e,t){let i=e-1e-4,r=e+1e-4;i<0&&(i=0),r>1&&(r=1);const o=this.getPoint(i),a=this.getPoint(r),l=t||(o.isVector2?new oe:new A);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new A,i=[],r=[],o=[],a=new A,l=new Ne;for(let m=0;m<=e;m++){const _=m/e;i[m]=this.getTangentAt(_,new A)}r[0]=new A,o[0]=new A;let u=Number.MAX_VALUE;const h=Math.abs(i[0].x),d=Math.abs(i[0].y),f=Math.abs(i[0].z);h<=u&&(u=h,n.set(1,0,0)),d<=u&&(u=d,n.set(0,1,0)),f<=u&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],a),o[0].crossVectors(i[0],r[0]);for(let m=1;m<=e;m++){if(r[m]=r[m-1].clone(),o[m]=o[m-1].clone(),a.crossVectors(i[m-1],i[m]),a.length()>Number.EPSILON){a.normalize();const _=Math.acos(Mt(i[m-1].dot(i[m]),-1,1));r[m].applyMatrix4(l.makeRotationAxis(a,_))}o[m].crossVectors(i[m],r[m])}if(t===!0){let m=Math.acos(Mt(r[0].dot(r[e]),-1,1));m/=e,i[0].dot(a.crossVectors(r[0],r[e]))>0&&(m=-m);for(let _=1;_<=e;_++)r[_].applyMatrix4(l.makeRotationAxis(i[_],m*_)),o[_].crossVectors(i[_],r[_])}return{tangents:i,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.5,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}c(sn,"Curve");class Xr extends sn{constructor(e=0,t=0,n=1,i=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t){const n=t||new oe,i=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(o?r=0:r=i),this.aClockwise===!0&&!o&&(r===i?r=-i:r=r-i);const a=this.aStartAngle+e*r;let l=this.aX+this.xRadius*Math.cos(a),u=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),f=l-this.aX,m=u-this.aY;l=f*h-m*d+this.aX,u=f*d+m*h+this.aY}return n.set(l,u)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}c(Xr,"EllipseCurve");class qu extends Xr{constructor(e,t,n,i,r,o){super(e,t,n,n,i,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}c(qu,"ArcCurve");function Ha(){let s=0,e=0,t=0,n=0;function i(r,o,a,l){s=r,e=a,t=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return c(i,"init"),{initCatmullRom:function(r,o,a,l,u){i(o,a,u*(a-r),u*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,u,h,d){let f=(o-r)/u-(a-r)/(u+h)+(a-o)/h,m=(a-o)/h-(l-o)/(h+d)+(l-a)/d;f*=h,m*=h,i(o,a,f,m)},calc:function(r){const o=r*r,a=o*r;return s+e*r+t*o+n*a}}}c(Ha,"CubicPoly");const gr=new A,Oo=new Ha,No=new Ha,Fo=new Ha;class $u extends sn{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new A){const n=t,i=this.points,r=i.length,o=(r-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let u,h;this.closed||a>0?u=i[(a-1)%r]:(gr.subVectors(i[0],i[1]).add(i[0]),u=gr);const d=i[a%r],f=i[(a+1)%r];if(this.closed||a+2<r?h=i[(a+2)%r]:(gr.subVectors(i[r-1],i[r-2]).add(i[r-1]),h=gr),this.curveType==="centripetal"||this.curveType==="chordal"){const m=this.curveType==="chordal"?.5:.25;let _=Math.pow(u.distanceToSquared(d),m),g=Math.pow(d.distanceToSquared(f),m),p=Math.pow(f.distanceToSquared(h),m);g<1e-4&&(g=1),_<1e-4&&(_=g),p<1e-4&&(p=g),Oo.initNonuniformCatmullRom(u.x,d.x,f.x,h.x,_,g,p),No.initNonuniformCatmullRom(u.y,d.y,f.y,h.y,_,g,p),Fo.initNonuniformCatmullRom(u.z,d.z,f.z,h.z,_,g,p)}else this.curveType==="catmullrom"&&(Oo.initCatmullRom(u.x,d.x,f.x,h.x,this.tension),No.initCatmullRom(u.y,d.y,f.y,h.y,this.tension),Fo.initCatmullRom(u.z,d.z,f.z,h.z,this.tension));return n.set(Oo.calc(l),No.calc(l),Fo.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new A().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}c($u,"CatmullRomCurve3");function Rc(s,e,t,n,i){const r=(n-e)*.5,o=(i-t)*.5,a=s*s,l=s*a;return(2*t-2*n+r+o)*l+(-3*t+3*n-2*r-o)*a+r*s+t}c(Rc,"CatmullRom");function s0(s,e){const t=1-s;return t*t*e}c(s0,"QuadraticBezierP0");function r0(s,e){return 2*(1-s)*s*e}c(r0,"QuadraticBezierP1");function o0(s,e){return s*s*e}c(o0,"QuadraticBezierP2");function Ls(s,e,t,n){return s0(s,e)+r0(s,t)+o0(s,n)}c(Ls,"QuadraticBezier");function a0(s,e){const t=1-s;return t*t*t*e}c(a0,"CubicBezierP0");function l0(s,e){const t=1-s;return 3*t*t*s*e}c(l0,"CubicBezierP1");function c0(s,e){return 3*(1-s)*s*s*e}c(c0,"CubicBezierP2");function u0(s,e){return s*s*s*e}c(u0,"CubicBezierP3");function Rs(s,e,t,n,i){return a0(s,e)+l0(s,t)+c0(s,n)+u0(s,i)}c(Rs,"CubicBezier");class Va extends sn{constructor(e=new oe,t=new oe,n=new oe,i=new oe){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new oe){const n=t,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Rs(e,i.x,r.x,o.x,a.x),Rs(e,i.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}c(Va,"CubicBezierCurve");class Yu extends sn{constructor(e=new A,t=new A,n=new A,i=new A){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new A){const n=t,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Rs(e,i.x,r.x,o.x,a.x),Rs(e,i.y,r.y,o.y,a.y),Rs(e,i.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}c(Yu,"CubicBezierCurve3");class qr extends sn{constructor(e=new oe,t=new oe){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new oe){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t){const n=t||new oe;return n.copy(this.v2).sub(this.v1).normalize(),n}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}c(qr,"LineCurve");class Ku extends sn{constructor(e=new A,t=new A){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new A){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}c(Ku,"LineCurve3");class Ga extends sn{constructor(e=new oe,t=new oe,n=new oe){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new oe){const n=t,i=this.v0,r=this.v1,o=this.v2;return n.set(Ls(e,i.x,r.x,o.x),Ls(e,i.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}c(Ga,"QuadraticBezierCurve");class Ju extends sn{constructor(e=new A,t=new A,n=new A){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new A){const n=t,i=this.v0,r=this.v1,o=this.v2;return n.set(Ls(e,i.x,r.x,o.x),Ls(e,i.y,r.y,o.y),Ls(e,i.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}c(Ju,"QuadraticBezierCurve3");class Wa extends sn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new oe){const n=t,i=this.points,r=(i.length-1)*e,o=Math.floor(r),a=r-o,l=i[o===0?o:o-1],u=i[o],h=i[o>i.length-2?i.length-1:o+1],d=i[o>i.length-3?i.length-1:o+2];return n.set(Rc(a,l.x,u.x,h.x,d.x),Rc(a,l.y,u.y,h.y,d.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new oe().fromArray(i))}return this}}c(Wa,"SplineCurve");var Zu=Object.freeze({__proto__:null,ArcCurve:qu,CatmullRomCurve3:$u,CubicBezierCurve:Va,CubicBezierCurve3:Yu,EllipseCurve:Xr,LineCurve:qr,LineCurve3:Ku,QuadraticBezierCurve:Ga,QuadraticBezierCurve3:Ju,SplineCurve:Wa});class Qu extends sn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);e.equals(t)||this.curves.push(new qr(t,e))}getPoint(e,t){const n=e*this.getLength(),i=this.getCurveLengths();let r=0;for(;r<i.length;){if(i[r]>=n){const o=i[r]-n,a=this.curves[r],l=a.getLength(),u=l===0?0:1-o/l;return a.getPointAt(u,t)}r++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let i=0,r=this.curves;i<r.length;i++){const o=r[i],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let u=0;u<l.length;u++){const h=l[u];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(new Zu[i.type]().fromJSON(i))}return this}}c(Qu,"CurvePath");class ta extends Qu{constructor(e){super(),this.type="Path",this.currentPoint=new oe,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new qr(this.currentPoint.clone(),new oe(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){const r=new Ga(this.currentPoint.clone(),new oe(e,t),new oe(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,r,o){const a=new Va(this.currentPoint.clone(),new oe(e,t),new oe(n,i),new oe(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new Wa(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,r,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,n,i,r,o),this}absarc(e,t,n,i,r,o){return this.absellipse(e,t,n,n,i,r,o),this}ellipse(e,t,n,i,r,o,a,l){const u=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+u,t+h,n,i,r,o,a,l),this}absellipse(e,t,n,i,r,o,a,l){const u=new Xr(e,t,n,i,r,o,a,l);if(this.curves.length>0){const d=u.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(u);const h=u.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}c(ta,"Path");class js extends Nt{constructor(e=1,t=1,n=1,i=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const u=this;i=Math.floor(i),r=Math.floor(r);const h=[],d=[],f=[],m=[];let _=0;const g=[],p=n/2;let v=0;S(),o===!1&&(e>0&&y(!0),t>0&&y(!1)),this.setIndex(h),this.setAttribute("position",new dt(d,3)),this.setAttribute("normal",new dt(f,3)),this.setAttribute("uv",new dt(m,2));function S(){const b=new A,M=new A;let P=0;const O=(t-e)/n;for(let x=0;x<=r;x++){const L=[],N=x/r,C=N*(t-e)+e;for(let B=0;B<=i;B++){const R=B/i,D=R*l+a,k=Math.sin(D),G=Math.cos(D);M.x=C*k,M.y=-N*n+p,M.z=C*G,d.push(M.x,M.y,M.z),b.set(k,O,G).normalize(),f.push(b.x,b.y,b.z),m.push(R,1-N),L.push(_++)}g.push(L)}for(let x=0;x<i;x++)for(let L=0;L<r;L++){const N=g[L][x],C=g[L+1][x],B=g[L+1][x+1],R=g[L][x+1];h.push(N,C,R),h.push(C,B,R),P+=6}u.addGroup(v,P,0),v+=P}c(S,"generateTorso");function y(b){const M=_,P=new oe,O=new A;let x=0;const L=b===!0?e:t,N=b===!0?1:-1;for(let B=1;B<=i;B++)d.push(0,p*N,0),f.push(0,N,0),m.push(.5,.5),_++;const C=_;for(let B=0;B<=i;B++){const D=B/i*l+a,k=Math.cos(D),G=Math.sin(D);O.x=L*G,O.y=p*N,O.z=L*k,d.push(O.x,O.y,O.z),f.push(0,N,0),P.x=k*.5+.5,P.y=G*.5*N+.5,m.push(P.x,P.y),_++}for(let B=0;B<i;B++){const R=M+B,D=C+B;b===!0?h.push(D,D+1,R):h.push(D+1,D,R),x+=3}u.addGroup(v,x,b===!0?1:2),v+=x}c(y,"generateCap")}static fromJSON(e){return new js(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}c(js,"CylinderGeometry");class ns extends js{constructor(e=1,t=1,n=32,i=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,n,i,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new ns(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}c(ns,"ConeGeometry");class ja extends ta{constructor(e){super(e),this.uuid=Yt(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,i=this.holes.length;n<i;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const i=this.holes[t];e.holes.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(new ta().fromJSON(i))}return this}}c(ja,"Shape");const h0={triangulate:function(s,e,t=2){const n=e&&e.length,i=n?e[0]*t:s.length;let r=eh(s,0,i,t,!0);const o=[];if(!r||r.next===r.prev)return o;let a,l,u,h,d,f,m;if(n&&(r=g0(s,e,r,t)),s.length>80*t){a=u=s[0],l=h=s[1];for(let _=t;_<i;_+=t)d=s[_],f=s[_+1],d<a&&(a=d),f<l&&(l=f),d>u&&(u=d),f>h&&(h=f);m=Math.max(u-a,h-l),m=m!==0?32767/m:0}return Bs(r,o,t,a,l,m,0),o}};function eh(s,e,t,n,i){let r,o;if(i===A0(s,e,t,n)>0)for(r=e;r<t;r+=n)o=Pc(r,s[r],s[r+1],o);else for(r=t-n;r>=e;r-=n)o=Pc(r,s[r],s[r+1],o);return o&&$r(o,o.next)&&(Vs(o),o=o.next),o}c(eh,"linkedList");function fi(s,e){if(!s)return s;e||(e=s);let t=s,n;do if(n=!1,!t.steiner&&($r(t,t.next)||rt(t.prev,t,t.next)===0)){if(Vs(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}c(fi,"filterPoints");function Bs(s,e,t,n,i,r,o){if(!s)return;!o&&r&&b0(s,n,i,r);let a=s,l,u;for(;s.prev!==s.next;){if(l=s.prev,u=s.next,r?f0(s,n,i,r):d0(s)){e.push(l.i/t|0),e.push(s.i/t|0),e.push(u.i/t|0),Vs(s),s=u.next,a=u.next;continue}if(s=u,s===a){o?o===1?(s=p0(fi(s),e,t),Bs(s,e,t,n,i,r,2)):o===2&&m0(s,e,t,n,i,r):Bs(fi(s),e,t,n,i,r,1);break}}}c(Bs,"earcutLinked");function d0(s){const e=s.prev,t=s,n=s.next;if(rt(e,t,n)>=0)return!1;const i=e.x,r=t.x,o=n.x,a=e.y,l=t.y,u=n.y,h=i<r?i<o?i:o:r<o?r:o,d=a<l?a<u?a:u:l<u?l:u,f=i>r?i>o?i:o:r>o?r:o,m=a>l?a>u?a:u:l>u?l:u;let _=n.next;for(;_!==e;){if(_.x>=h&&_.x<=f&&_.y>=d&&_.y<=m&&Fi(i,a,r,l,o,u,_.x,_.y)&&rt(_.prev,_,_.next)>=0)return!1;_=_.next}return!0}c(d0,"isEar");function f0(s,e,t,n){const i=s.prev,r=s,o=s.next;if(rt(i,r,o)>=0)return!1;const a=i.x,l=r.x,u=o.x,h=i.y,d=r.y,f=o.y,m=a<l?a<u?a:u:l<u?l:u,_=h<d?h<f?h:f:d<f?d:f,g=a>l?a>u?a:u:l>u?l:u,p=h>d?h>f?h:f:d>f?d:f,v=na(m,_,e,t,n),S=na(g,p,e,t,n);let y=s.prevZ,b=s.nextZ;for(;y&&y.z>=v&&b&&b.z<=S;){if(y.x>=m&&y.x<=g&&y.y>=_&&y.y<=p&&y!==i&&y!==o&&Fi(a,h,l,d,u,f,y.x,y.y)&&rt(y.prev,y,y.next)>=0||(y=y.prevZ,b.x>=m&&b.x<=g&&b.y>=_&&b.y<=p&&b!==i&&b!==o&&Fi(a,h,l,d,u,f,b.x,b.y)&&rt(b.prev,b,b.next)>=0))return!1;b=b.nextZ}for(;y&&y.z>=v;){if(y.x>=m&&y.x<=g&&y.y>=_&&y.y<=p&&y!==i&&y!==o&&Fi(a,h,l,d,u,f,y.x,y.y)&&rt(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;b&&b.z<=S;){if(b.x>=m&&b.x<=g&&b.y>=_&&b.y<=p&&b!==i&&b!==o&&Fi(a,h,l,d,u,f,b.x,b.y)&&rt(b.prev,b,b.next)>=0)return!1;b=b.nextZ}return!0}c(f0,"isEarHashed");function p0(s,e,t){let n=s;do{const i=n.prev,r=n.next.next;!$r(i,r)&&th(i,n,n.next,r)&&Hs(i,r)&&Hs(r,i)&&(e.push(i.i/t|0),e.push(n.i/t|0),e.push(r.i/t|0),Vs(n),Vs(n.next),n=s=r),n=n.next}while(n!==s);return fi(n)}c(p0,"cureLocalIntersections");function m0(s,e,t,n,i,r){let o=s;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&S0(o,a)){let l=nh(o,a);o=fi(o,o.next),l=fi(l,l.next),Bs(o,e,t,n,i,r,0),Bs(l,e,t,n,i,r,0);return}a=a.next}o=o.next}while(o!==s)}c(m0,"splitEarcut");function g0(s,e,t,n){const i=[];let r,o,a,l,u;for(r=0,o=e.length;r<o;r++)a=e[r]*n,l=r<o-1?e[r+1]*n:s.length,u=eh(s,a,l,n,!1),u===u.next&&(u.steiner=!0),i.push(M0(u));for(i.sort(_0),r=0;r<i.length;r++)t=v0(i[r],t);return t}c(g0,"eliminateHoles");function _0(s,e){return s.x-e.x}c(_0,"compareX");function v0(s,e){const t=x0(s,e);if(!t)return e;const n=nh(t,s);return fi(n,n.next),fi(t,t.next)}c(v0,"eliminateHole");function x0(s,e){let t=e,n=-1/0,i;const r=s.x,o=s.y;do{if(o<=t.y&&o>=t.next.y&&t.next.y!==t.y){const f=t.x+(o-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(f<=r&&f>n&&(n=f,i=t.x<t.next.x?t:t.next,f===r))return i}t=t.next}while(t!==e);if(!i)return null;const a=i,l=i.x,u=i.y;let h=1/0,d;t=i;do r>=t.x&&t.x>=l&&r!==t.x&&Fi(o<u?r:n,o,l,u,o<u?n:r,o,t.x,t.y)&&(d=Math.abs(o-t.y)/(r-t.x),Hs(t,s)&&(d<h||d===h&&(t.x>i.x||t.x===i.x&&y0(i,t)))&&(i=t,h=d)),t=t.next;while(t!==a);return i}c(x0,"findHoleBridge");function y0(s,e){return rt(s.prev,s,e.prev)<0&&rt(e.next,s,s.next)<0}c(y0,"sectorContainsSector");function b0(s,e,t,n){let i=s;do i.z===0&&(i.z=na(i.x,i.y,e,t,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,w0(i)}c(b0,"indexCurve");function w0(s){let e,t,n,i,r,o,a,l,u=1;do{for(t=s,s=null,r=null,o=0;t;){for(o++,n=t,a=0,e=0;e<u&&(a++,n=n.nextZ,!!n);e++);for(l=u;a>0||l>0&&n;)a!==0&&(l===0||!n||t.z<=n.z)?(i=t,t=t.nextZ,a--):(i=n,n=n.nextZ,l--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;t=n}r.nextZ=null,u*=2}while(o>1);return s}c(w0,"sortLinked");function na(s,e,t,n,i){return s=(s-t)*i|0,e=(e-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,s|e<<1}c(na,"zOrder");function M0(s){let e=s,t=s;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==s);return t}c(M0,"getLeftmost");function Fi(s,e,t,n,i,r,o,a){return(i-o)*(e-a)>=(s-o)*(r-a)&&(s-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(i-o)*(n-a)}c(Fi,"pointInTriangle");function S0(s,e){return s.next.i!==e.i&&s.prev.i!==e.i&&!T0(s,e)&&(Hs(s,e)&&Hs(e,s)&&E0(s,e)&&(rt(s.prev,s,e.prev)||rt(s,e.prev,e))||$r(s,e)&&rt(s.prev,s,s.next)>0&&rt(e.prev,e,e.next)>0)}c(S0,"isValidDiagonal");function rt(s,e,t){return(e.y-s.y)*(t.x-e.x)-(e.x-s.x)*(t.y-e.y)}c(rt,"area");function $r(s,e){return s.x===e.x&&s.y===e.y}c($r,"equals");function th(s,e,t,n){const i=vr(rt(s,e,t)),r=vr(rt(s,e,n)),o=vr(rt(t,n,s)),a=vr(rt(t,n,e));return!!(i!==r&&o!==a||i===0&&_r(s,t,e)||r===0&&_r(s,n,e)||o===0&&_r(t,s,n)||a===0&&_r(t,e,n))}c(th,"intersects");function _r(s,e,t){return e.x<=Math.max(s.x,t.x)&&e.x>=Math.min(s.x,t.x)&&e.y<=Math.max(s.y,t.y)&&e.y>=Math.min(s.y,t.y)}c(_r,"onSegment");function vr(s){return s>0?1:s<0?-1:0}c(vr,"sign");function T0(s,e){let t=s;do{if(t.i!==s.i&&t.next.i!==s.i&&t.i!==e.i&&t.next.i!==e.i&&th(t,t.next,s,e))return!0;t=t.next}while(t!==s);return!1}c(T0,"intersectsPolygon");function Hs(s,e){return rt(s.prev,s,s.next)<0?rt(s,e,s.next)>=0&&rt(s,s.prev,e)>=0:rt(s,e,s.prev)<0||rt(s,s.next,e)<0}c(Hs,"locallyInside");function E0(s,e){let t=s,n=!1;const i=(s.x+e.x)/2,r=(s.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&i<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==s);return n}c(E0,"middleInside");function nh(s,e){const t=new ia(s.i,s.x,s.y),n=new ia(e.i,e.x,e.y),i=s.next,r=e.prev;return s.next=e,e.prev=s,t.next=i,i.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}c(nh,"splitPolygon");function Pc(s,e,t,n){const i=new ia(s,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}c(Pc,"insertNode");function Vs(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}c(Vs,"removeNode");function ia(s,e,t){this.i=s,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}c(ia,"Node");function A0(s,e,t,n){let i=0;for(let r=e,o=t-n;r<t;r+=n)i+=(s[o]-s[r])*(s[r+1]+s[o+1]),o=r;return i}c(A0,"signedArea");class Bi{static area(e){const t=e.length;let n=0;for(let i=t-1,r=0;r<t;i=r++)n+=e[i].x*e[r].y-e[r].x*e[i].y;return n*.5}static isClockWise(e){return Bi.area(e)<0}static triangulateShape(e,t){const n=[],i=[],r=[];Dc(e),Ic(n,e);let o=e.length;t.forEach(Dc);for(let l=0;l<t.length;l++)i.push(o),o+=t[l].length,Ic(n,t[l]);const a=h0.triangulate(n,i);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}}c(Bi,"ShapeUtils");function Dc(s){const e=s.length;e>2&&s[e-1].equals(s[0])&&s.pop()}c(Dc,"removeDupEndPts");function Ic(s,e){for(let t=0;t<e.length;t++)s.push(e[t].x),s.push(e[t].y)}c(Ic,"addContour");class Yr extends Nt{constructor(e=new ja([new oe(.5,.5),new oe(-.5,.5),new oe(-.5,-.5),new oe(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,i=[],r=[];for(let a=0,l=e.length;a<l;a++){const u=e[a];o(u)}this.setAttribute("position",new dt(i,3)),this.setAttribute("uv",new dt(r,2)),this.computeVertexNormals();function o(a){const l=[],u=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,d=t.depth!==void 0?t.depth:1;let f=t.bevelEnabled!==void 0?t.bevelEnabled:!0,m=t.bevelThickness!==void 0?t.bevelThickness:.2,_=t.bevelSize!==void 0?t.bevelSize:m-.1,g=t.bevelOffset!==void 0?t.bevelOffset:0,p=t.bevelSegments!==void 0?t.bevelSegments:3;const v=t.extrudePath,S=t.UVGenerator!==void 0?t.UVGenerator:C0;let y,b=!1,M,P,O,x;v&&(y=v.getSpacedPoints(h),b=!0,f=!1,M=v.computeFrenetFrames(h,!1),P=new A,O=new A,x=new A),f||(p=0,m=0,_=0,g=0);const L=a.extractPoints(u);let N=L.shape;const C=L.holes;if(!Bi.isClockWise(N)){N=N.reverse();for(let Z=0,J=C.length;Z<J;Z++){const ce=C[Z];Bi.isClockWise(ce)&&(C[Z]=ce.reverse())}}const R=Bi.triangulateShape(N,C),D=N;for(let Z=0,J=C.length;Z<J;Z++){const ce=C[Z];N=N.concat(ce)}function k(Z,J,ce){return J||console.error("THREE.ExtrudeGeometry: vec does not exist"),J.clone().multiplyScalar(ce).add(Z)}c(k,"scalePt2");const G=N.length,ee=R.length;function W(Z,J,ce){let ve,de,De;const Ee=Z.x-J.x,Te=Z.y-J.y,et=ce.x-Z.x,Ye=ce.y-Z.y,E=Ee*Ee+Te*Te,w=Ee*Ye-Te*et;if(Math.abs(w)>Number.EPSILON){const V=Math.sqrt(E),re=Math.sqrt(et*et+Ye*Ye),le=J.x-Te/V,pe=J.y+Ee/V,Re=ce.x-Ye/re,me=ce.y+et/re,K=((Re-le)*Ye-(me-pe)*et)/(Ee*Ye-Te*et);ve=le+Ee*K-Z.x,de=pe+Te*K-Z.y;const we=ve*ve+de*de;if(we<=2)return new oe(ve,de);De=Math.sqrt(we/2)}else{let V=!1;Ee>Number.EPSILON?et>Number.EPSILON&&(V=!0):Ee<-Number.EPSILON?et<-Number.EPSILON&&(V=!0):Math.sign(Te)===Math.sign(Ye)&&(V=!0),V?(ve=-Te,de=Ee,De=Math.sqrt(E)):(ve=Ee,de=Te,De=Math.sqrt(E/2))}return new oe(ve/De,de/De)}c(W,"getBevelVec");const te=[];for(let Z=0,J=D.length,ce=J-1,ve=Z+1;Z<J;Z++,ce++,ve++)ce===J&&(ce=0),ve===J&&(ve=0),te[Z]=W(D[Z],D[ce],D[ve]);const ie=[];let H,j=te.concat();for(let Z=0,J=C.length;Z<J;Z++){const ce=C[Z];H=[];for(let ve=0,de=ce.length,De=de-1,Ee=ve+1;ve<de;ve++,De++,Ee++)De===de&&(De=0),Ee===de&&(Ee=0),H[ve]=W(ce[ve],ce[De],ce[Ee]);ie.push(H),j=j.concat(H)}for(let Z=0;Z<p;Z++){const J=Z/p,ce=m*Math.cos(J*Math.PI/2),ve=_*Math.sin(J*Math.PI/2)+g;for(let de=0,De=D.length;de<De;de++){const Ee=k(D[de],te[de],ve);Pe(Ee.x,Ee.y,-ce)}for(let de=0,De=C.length;de<De;de++){const Ee=C[de];H=ie[de];for(let Te=0,et=Ee.length;Te<et;Te++){const Ye=k(Ee[Te],H[Te],ve);Pe(Ye.x,Ye.y,-ce)}}}const ne=_+g;for(let Z=0;Z<G;Z++){const J=f?k(N[Z],j[Z],ne):N[Z];b?(O.copy(M.normals[0]).multiplyScalar(J.x),P.copy(M.binormals[0]).multiplyScalar(J.y),x.copy(y[0]).add(O).add(P),Pe(x.x,x.y,x.z)):Pe(J.x,J.y,0)}for(let Z=1;Z<=h;Z++)for(let J=0;J<G;J++){const ce=f?k(N[J],j[J],ne):N[J];b?(O.copy(M.normals[Z]).multiplyScalar(ce.x),P.copy(M.binormals[Z]).multiplyScalar(ce.y),x.copy(y[Z]).add(O).add(P),Pe(x.x,x.y,x.z)):Pe(ce.x,ce.y,d/h*Z)}for(let Z=p-1;Z>=0;Z--){const J=Z/p,ce=m*Math.cos(J*Math.PI/2),ve=_*Math.sin(J*Math.PI/2)+g;for(let de=0,De=D.length;de<De;de++){const Ee=k(D[de],te[de],ve);Pe(Ee.x,Ee.y,d+ce)}for(let de=0,De=C.length;de<De;de++){const Ee=C[de];H=ie[de];for(let Te=0,et=Ee.length;Te<et;Te++){const Ye=k(Ee[Te],H[Te],ve);b?Pe(Ye.x,Ye.y+y[h-1].y,y[h-1].x+ce):Pe(Ye.x,Ye.y,d+ce)}}}ae(),he();function ae(){const Z=i.length/3;if(f){let J=0,ce=G*J;for(let ve=0;ve<ee;ve++){const de=R[ve];_e(de[2]+ce,de[1]+ce,de[0]+ce)}J=h+p*2,ce=G*J;for(let ve=0;ve<ee;ve++){const de=R[ve];_e(de[0]+ce,de[1]+ce,de[2]+ce)}}else{for(let J=0;J<ee;J++){const ce=R[J];_e(ce[2],ce[1],ce[0])}for(let J=0;J<ee;J++){const ce=R[J];_e(ce[0]+G*h,ce[1]+G*h,ce[2]+G*h)}}n.addGroup(Z,i.length/3-Z,0)}c(ae,"buildLidFaces");function he(){const Z=i.length/3;let J=0;$(D,J),J+=D.length;for(let ce=0,ve=C.length;ce<ve;ce++){const de=C[ce];$(de,J),J+=de.length}n.addGroup(Z,i.length/3-Z,1)}c(he,"buildSideFaces");function $(Z,J){let ce=Z.length;for(;--ce>=0;){const ve=ce;let de=ce-1;de<0&&(de=Z.length-1);for(let De=0,Ee=h+p*2;De<Ee;De++){const Te=G*De,et=G*(De+1),Ye=J+ve+Te,E=J+de+Te,w=J+de+et,V=J+ve+et;Le(Ye,E,w,V)}}}c($,"sidewalls");function Pe(Z,J,ce){l.push(Z),l.push(J),l.push(ce)}c(Pe,"v");function _e(Z,J,ce){fe(Z),fe(J),fe(ce);const ve=i.length/3,de=S.generateTopUV(n,i,ve-3,ve-2,ve-1);ke(de[0]),ke(de[1]),ke(de[2])}c(_e,"f3");function Le(Z,J,ce,ve){fe(Z),fe(J),fe(ve),fe(J),fe(ce),fe(ve);const de=i.length/3,De=S.generateSideWallUV(n,i,de-6,de-3,de-2,de-1);ke(De[0]),ke(De[1]),ke(De[3]),ke(De[1]),ke(De[2]),ke(De[3])}c(Le,"f4");function fe(Z){i.push(l[Z*3+0]),i.push(l[Z*3+1]),i.push(l[Z*3+2])}c(fe,"addVertex");function ke(Z){r.push(Z.x),r.push(Z.y)}c(ke,"addUV")}c(o,"addShape")}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return L0(t,n,e)}static fromJSON(e,t){const n=[];for(let r=0,o=e.shapes.length;r<o;r++){const a=t[e.shapes[r]];n.push(a)}const i=e.options.extrudePath;return i!==void 0&&(e.options.extrudePath=new Zu[i.type]().fromJSON(i)),new Yr(n,e.options)}}c(Yr,"ExtrudeGeometry");const C0={generateTopUV:function(s,e,t,n,i){const r=e[t*3],o=e[t*3+1],a=e[n*3],l=e[n*3+1],u=e[i*3],h=e[i*3+1];return[new oe(r,o),new oe(a,l),new oe(u,h)]},generateSideWallUV:function(s,e,t,n,i,r){const o=e[t*3],a=e[t*3+1],l=e[t*3+2],u=e[n*3],h=e[n*3+1],d=e[n*3+2],f=e[i*3],m=e[i*3+1],_=e[i*3+2],g=e[r*3],p=e[r*3+1],v=e[r*3+2];return Math.abs(a-h)<Math.abs(o-u)?[new oe(o,1-l),new oe(u,1-d),new oe(f,1-_),new oe(g,1-v)]:[new oe(a,1-l),new oe(h,1-d),new oe(m,1-_),new oe(p,1-v)]}};function L0(s,e,t){if(t.shapes=[],Array.isArray(s))for(let n=0,i=s.length;n<i;n++){const r=s[n];t.shapes.push(r.uuid)}else t.shapes.push(s.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}c(L0,"toJSON$1");class Kr extends Nt{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let u=0;const h=[],d=new A,f=new A,m=[],_=[],g=[],p=[];for(let v=0;v<=n;v++){const S=[],y=v/n;let b=0;v==0&&o==0?b=.5/t:v==n&&l==Math.PI&&(b=-.5/t);for(let M=0;M<=t;M++){const P=M/t;d.x=-e*Math.cos(i+P*r)*Math.sin(o+y*a),d.y=e*Math.cos(o+y*a),d.z=e*Math.sin(i+P*r)*Math.sin(o+y*a),_.push(d.x,d.y,d.z),f.copy(d).normalize(),g.push(f.x,f.y,f.z),p.push(P+b,1-y),S.push(u++)}h.push(S)}for(let v=0;v<n;v++)for(let S=0;S<t;S++){const y=h[v][S+1],b=h[v][S],M=h[v+1][S],P=h[v+1][S+1];(v!==0||o>0)&&m.push(y,b,P),(v!==n-1||l<Math.PI)&&m.push(b,M,P)}this.setIndex(m),this.setAttribute("position",new dt(_,3)),this.setAttribute("normal",new dt(g,3)),this.setAttribute("uv",new dt(p,2))}static fromJSON(e){return new Kr(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}c(Kr,"SphereGeometry");class Jr extends Kt{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Oe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Oe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ca,this.normalScale=new oe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}c(Jr,"MeshStandardMaterial");class $n extends Jr{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new oe(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Mt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Oe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Oe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Oe(1,1,1),this.specularColorMap=null,this._sheen=0,this._clearcoat=0,this._iridescence=0,this._transmission=0,this.setValues(e)}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}c($n,"MeshPhysicalMaterial");class Jt extends Kt{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Oe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Oe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ca,this.normalScale=new oe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Aa,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}c(Jt,"MeshLambertMaterial");function Rn(s,e,t){return ih(s)?new s.constructor(s.subarray(e,t!==void 0?t:s.length)):s.slice(e,t)}c(Rn,"arraySlice");function xr(s,e,t){return!s||!t&&s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}c(xr,"convertArray");function ih(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}c(ih,"isTypedArray");function R0(s){function e(i,r){return s[i]-s[r]}c(e,"compareTime");const t=s.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}c(R0,"getKeyframeOrder");function Oc(s,e,t){const n=s.length,i=new s.constructor(n);for(let r=0,o=0;o!==n;++r){const a=t[r]*e;for(let l=0;l!==e;++l)i[o++]=s[a+l]}return i}c(Oc,"sortedArray");function sh(s,e,t,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push.apply(t,o)),r=s[i++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=s[i++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=s[i++];while(r!==void 0)}c(sh,"flattenJSON");class is{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=i,i=t[++n],e<i)break e}o=t.length;break t}if(!(e>=r)){const a=t[1];e<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){const a=n+o>>>1;e<t[a]?o=a:n=a+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let o=0;o!==i;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}c(is,"Interpolant");class rh extends is{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ol,endingEnd:Ol}}intervalChanged_(e,t,n){const i=this.parameterPositions;let r=e-2,o=e+1,a=i[r],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case Nl:r=e,a=2*t-n;break;case Fl:r=i.length-2,a=t+i[r]-i[r+1];break;default:r=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Nl:o=e,l=2*n-t;break;case Fl:o=1,l=n+i[1]-i[0];break;default:o=e-1,l=t}const u=(n-t)*.5,h=this.valueSize;this._weightPrev=u/(t-a),this._weightNext=u/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,u=l-a,h=this._offsetPrev,d=this._offsetNext,f=this._weightPrev,m=this._weightNext,_=(n-t)/(i-t),g=_*_,p=g*_,v=-f*p+2*f*g-f*_,S=(1+f)*p+(-1.5-2*f)*g+(-.5+f)*_+1,y=(-1-m)*p+(1.5+m)*g+.5*_,b=m*p-m*g;for(let M=0;M!==a;++M)r[M]=v*o[h+M]+S*o[u+M]+y*o[l+M]+b*o[d+M];return r}}c(rh,"CubicInterpolant");class oh extends is{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,u=l-a,h=(n-t)/(i-t),d=1-h;for(let f=0;f!==a;++f)r[f]=o[u+f]*d+o[l+f]*h;return r}}c(oh,"LinearInterpolant");class ah extends is{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}c(ah,"DiscreteInterpolant");class rn{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=xr(t,this.TimeBufferType),this.values=xr(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:xr(e.times,Array),values:xr(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new ah(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new oh(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new rh(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Fs:t=this.InterpolantFactoryMethodDiscrete;break;case $i:t=this.InterpolantFactoryMethodLinear;break;case ao:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Fs;case this.InterpolantFactoryMethodLinear:return $i;case this.InterpolantFactoryMethodSmooth:return ao}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let r=0,o=i-1;for(;r!==i&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==i){r>=o&&(o=Math.max(o,1),r=o-1);const a=this.getValueSize();this.times=Rn(n,r,o),this.values=Rn(this.values,r*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){const l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(i!==void 0&&ih(i))for(let a=0,l=i.length;a!==l;++a){const u=i[a];if(isNaN(u)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,u),e=!1;break}}return e}optimize(){const e=Rn(this.times),t=Rn(this.values),n=this.getValueSize(),i=this.getInterpolation()===ao,r=e.length-1;let o=1;for(let a=1;a<r;++a){let l=!1;const u=e[a],h=e[a+1];if(u!==h&&(a!==1||u!==e[0]))if(i)l=!0;else{const d=a*n,f=d-n,m=d+n;for(let _=0;_!==n;++_){const g=t[d+_];if(g!==t[f+_]||g!==t[m+_]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];const d=a*n,f=o*n;for(let m=0;m!==n;++m)t[f+m]=t[d+m]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,l=o*n,u=0;u!==n;++u)t[l+u]=t[a+u];++o}return o!==e.length?(this.times=Rn(e,0,o),this.values=Rn(t,0,o*n)):(this.times=e,this.values=t),this}clone(){const e=Rn(this.times,0),t=Rn(this.values,0),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}c(rn,"KeyframeTrack");rn.prototype.TimeBufferType=Float32Array;rn.prototype.ValueBufferType=Float32Array;rn.prototype.DefaultInterpolation=$i;class pi extends rn{}c(pi,"BooleanKeyframeTrack");pi.prototype.ValueTypeName="bool";pi.prototype.ValueBufferType=Array;pi.prototype.DefaultInterpolation=Fs;pi.prototype.InterpolantFactoryMethodLinear=void 0;pi.prototype.InterpolantFactoryMethodSmooth=void 0;class Xa extends rn{}c(Xa,"ColorKeyframeTrack");Xa.prototype.ValueTypeName="color";class Ki extends rn{}c(Ki,"NumberKeyframeTrack");Ki.prototype.ValueTypeName="number";class lh extends is{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(i-t);let u=e*a;for(let h=u+a;u!==h;u+=4)bt.slerpFlat(r,0,o,u-a,o,u,l);return r}}c(lh,"QuaternionLinearInterpolant");class Gn extends rn{InterpolantFactoryMethodLinear(e){return new lh(this.times,this.values,this.getValueSize(),e)}}c(Gn,"QuaternionKeyframeTrack");Gn.prototype.ValueTypeName="quaternion";Gn.prototype.DefaultInterpolation=$i;Gn.prototype.InterpolantFactoryMethodSmooth=void 0;class mi extends rn{}c(mi,"StringKeyframeTrack");mi.prototype.ValueTypeName="string";mi.prototype.ValueBufferType=Array;mi.prototype.DefaultInterpolation=Fs;mi.prototype.InterpolantFactoryMethodLinear=void 0;mi.prototype.InterpolantFactoryMethodSmooth=void 0;class Ji extends rn{}c(Ji,"VectorKeyframeTrack");Ji.prototype.ValueTypeName="vector";class ch{constructor(e,t=-1,n,i=Jf){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=Yt(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(D0(n[o]).scale(i));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,o=n.length;r!==o;++r)t.push(rn.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const r=t.length,o=[];for(let a=0;a<r;a++){let l=[],u=[];l.push((a+r-1)%r,a,(a+1)%r),u.push(0,1,0);const h=R0(l);l=Oc(l,1,h),u=Oc(u,1,h),!i&&l[0]===0&&(l.push(r),u.push(u[0])),o.push(new Ki(".morphTargetInfluences["+t[a].name+"]",l,u).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){const u=e[a],h=u.name.match(r);if(h&&h.length>1){const d=h[1];let f=i[d];f||(i[d]=f=[]),f.push(u)}}const o=[];for(const a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],t,n));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=c(function(d,f,m,_,g){if(m.length!==0){const p=[],v=[];sh(m,p,v,_),p.length!==0&&g.push(new d(f,p,v))}},"addNonemptyTrack"),i=[],r=e.name||"default",o=e.fps||30,a=e.blendMode;let l=e.length||-1;const u=e.hierarchy||[];for(let d=0;d<u.length;d++){const f=u[d].keys;if(!(!f||f.length===0))if(f[0].morphTargets){const m={};let _;for(_=0;_<f.length;_++)if(f[_].morphTargets)for(let g=0;g<f[_].morphTargets.length;g++)m[f[_].morphTargets[g]]=-1;for(const g in m){const p=[],v=[];for(let S=0;S!==f[_].morphTargets.length;++S){const y=f[_];p.push(y.time),v.push(y.morphTarget===g?1:0)}i.push(new Ki(".morphTargetInfluence["+g+"]",p,v))}l=m.length*o}else{const m=".bones["+t[d].name+"]";n(Ji,m+".position",f,"pos",i),n(Gn,m+".quaternion",f,"rot",i),n(Ji,m+".scale",f,"scl",i)}}return i.length===0?null:new this(r,l,i,a)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}c(ch,"AnimationClip");function P0(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Ki;case"vector":case"vector2":case"vector3":case"vector4":return Ji;case"color":return Xa;case"quaternion":return Gn;case"bool":case"boolean":return pi;case"string":return mi}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}c(P0,"getTrackTypeForValueTypeName");function D0(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=P0(s.type);if(s.times===void 0){const t=[],n=[];sh(s.keys,t,n,"value"),s.times=t,s.values=n}return e.parse!==void 0?e.parse(s):new e(s.name,s.times,s.values,s.interpolation)}c(D0,"parseKeyframeTrack");const Zi={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class uh{constructor(e,t,n){const i=this;let r=!1,o=0,a=0,l;const u=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){a++,r===!1&&i.onStart!==void 0&&i.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return u.push(h,d),this},this.removeHandler=function(h){const d=u.indexOf(h);return d!==-1&&u.splice(d,2),this},this.getHandler=function(h){for(let d=0,f=u.length;d<f;d+=2){const m=u[d],_=u[d+1];if(m.global&&(m.lastIndex=0),m.test(h))return _}return null}}}c(uh,"LoadingManager");const I0=new uh;class ss{constructor(e){this.manager=e!==void 0?e:I0,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}c(ss,"Loader");const Mn={};class hh extends Error{constructor(e,t){super(e),this.response=t}}c(hh,"HttpError");class qa extends ss{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=Zi.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(Mn[e]!==void 0){Mn[e].push({onLoad:t,onProgress:n,onError:i});return}Mn[e]=[],Mn[e].push({onLoad:t,onProgress:n,onError:i});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(u=>{if(u.status===200||u.status===0){if(u.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||u.body===void 0||u.body.getReader===void 0)return u;const h=Mn[e],d=u.body.getReader(),f=u.headers.get("Content-Length")||u.headers.get("X-File-Size"),m=f?parseInt(f):0,_=m!==0;let g=0;const p=new ReadableStream({start(v){S();function S(){d.read().then(({done:y,value:b})=>{if(y)v.close();else{g+=b.byteLength;const M=new ProgressEvent("progress",{lengthComputable:_,loaded:g,total:m});for(let P=0,O=h.length;P<O;P++){const x=h[P];x.onProgress&&x.onProgress(M)}v.enqueue(b),S()}})}c(S,"readData")}});return new Response(p)}else throw new hh(`fetch for "${u.url}" responded with ${u.status}: ${u.statusText}`,u)}).then(u=>{switch(l){case"arraybuffer":return u.arrayBuffer();case"blob":return u.blob();case"document":return u.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return u.json();default:if(a===void 0)return u.text();{const d=/charset="?([^;"\s]*)"?/i.exec(a),f=d&&d[1]?d[1].toLowerCase():void 0,m=new TextDecoder(f);return u.arrayBuffer().then(_=>m.decode(_))}}}).then(u=>{Zi.add(e,u);const h=Mn[e];delete Mn[e];for(let d=0,f=h.length;d<f;d++){const m=h[d];m.onLoad&&m.onLoad(u)}}).catch(u=>{const h=Mn[e];if(h===void 0)throw this.manager.itemError(e),u;delete Mn[e];for(let d=0,f=h.length;d<f;d++){const m=h[d];m.onError&&m.onError(u)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}c(qa,"FileLoader");class dh extends ss{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=Zi.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;const a=Us("img");function l(){h(),Zi.add(e,this),t&&t(this),r.manager.itemEnd(e)}c(l,"onImageLoad");function u(d){h(),i&&i(d),r.manager.itemError(e),r.manager.itemEnd(e)}c(u,"onImageError");function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",u,!1)}return c(h,"removeEventListeners"),a.addEventListener("load",l,!1),a.addEventListener("error",u,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}}c(dh,"ImageLoader");class fh extends ss{constructor(e){super(e)}load(e,t,n,i){const r=new ht,o=new dh(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}}c(fh,"TextureLoader");class Xs extends Qe{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Oe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}c(Xs,"Light");const ko=new Ne,Nc=new A,Fc=new A;class Zr{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new oe(512,512),this.map=null,this.mapPass=null,this.matrix=new Ne,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new zr,this._frameExtents=new oe(1,1),this._viewportCount=1,this._viewports=[new Ke(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Nc.setFromMatrixPosition(e.matrixWorld),t.position.copy(Nc),Fc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Fc),t.updateMatrixWorld(),ko.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ko),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ko)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}c(Zr,"LightShadow");class ph extends Zr{constructor(){super(new At(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=zs*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}c(ph,"SpotLightShadow");class mh extends Xs{constructor(e,t,n=0,i=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Qe.DefaultUp),this.updateMatrix(),this.target=new Qe,this.distance=n,this.angle=i,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new ph}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}c(mh,"SpotLight");const kc=new Ne,gs=new A,zo=new A;class gh extends Zr{constructor(){super(new At(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new oe(4,2),this._viewportCount=6,this._viewports=[new Ke(2,1,1,1),new Ke(0,1,1,1),new Ke(3,1,1,1),new Ke(1,1,1,1),new Ke(3,0,1,1),new Ke(1,0,1,1)],this._cubeDirections=[new A(1,0,0),new A(-1,0,0),new A(0,0,1),new A(0,0,-1),new A(0,1,0),new A(0,-1,0)],this._cubeUps=[new A(0,1,0),new A(0,1,0),new A(0,1,0),new A(0,1,0),new A(0,0,1),new A(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),gs.setFromMatrixPosition(e.matrixWorld),n.position.copy(gs),zo.copy(n.position),zo.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(zo),n.updateMatrixWorld(),i.makeTranslation(-gs.x,-gs.y,-gs.z),kc.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(kc)}}c(gh,"PointLightShadow");class _h extends Xs{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new gh}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}c(_h,"PointLight");class vh extends Zr{constructor(){super(new Br(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}c(vh,"DirectionalLightShadow");class $a extends Xs{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Qe.DefaultUp),this.updateMatrix(),this.target=new Qe,this.shadow=new vh}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}c($a,"DirectionalLight");class xh extends Xs{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}c(xh,"AmbientLight");class Un{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}c(Un,"LoaderUtils");class yh extends ss{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=Zi.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader,fetch(e,a).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(l){Zi.add(e,l),t&&t(l),r.manager.itemEnd(e)}).catch(function(l){i&&i(l),r.manager.itemError(e),r.manager.itemEnd(e)}),r.manager.itemStart(e)}}c(yh,"ImageBitmapLoader");class bh{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=zc(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=zc();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}c(bh,"Clock");function zc(){return(typeof performance>"u"?Date:performance).now()}c(zc,"now$2");const Ya="\\[\\]\\.:\\/",O0=new RegExp("["+Ya+"]","g"),Ka="[^"+Ya+"]",N0="[^"+Ya.replace("\\.","")+"]",F0=/((?:WC+[\/:])*)/.source.replace("WC",Ka),k0=/(WCOD+)?/.source.replace("WCOD",N0),z0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Ka),U0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Ka),B0=new RegExp("^"+F0+k0+z0+U0+"$"),H0=["material","materials","bones","map"];class wh{constructor(e,t,n){const i=n||$e.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}c(wh,"Composite");class $e{constructor(e,t,n){this.path=t,this.parsedPath=n||$e.parseTrackName(t),this.node=$e.findNode(e,this.parsedPath.nodeName)||e,this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new $e.Composite(e,t,n):new $e(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(O0,"")}static parseTrackName(e){const t=B0.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const r=n.nodeName.substring(i+1);H0.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=c(function(r){for(let o=0;o<r.length;o++){const a=r[o];if(a.name===t||a.uuid===t)return a;const l=n(a.children);if(l)return l}return null},"searchNodeSubtree"),i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let r=t.propertyIndex;if(e||(e=$e.findNode(this.rootNode,t.nodeName)||this.rootNode,this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.error("THREE.PropertyBinding: Trying to update node for track: "+this.path+" but it wasn't found.");return}if(n){let u=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===u){u=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(u!==void 0){if(e[u]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[u]}}const o=e[i];if(o===void 0){const u=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+u+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}c($e,"PropertyBinding");$e.Composite=wh;$e.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};$e.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};$e.prototype.GetterByBindingType=[$e.prototype._getValue_direct,$e.prototype._getValue_array,$e.prototype._getValue_arrayElement,$e.prototype._getValue_toArray];$e.prototype.SetterByBindingTypeAndVersioning=[[$e.prototype._setValue_direct,$e.prototype._setValue_direct_setNeedsUpdate,$e.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[$e.prototype._setValue_array,$e.prototype._setValue_array_setNeedsUpdate,$e.prototype._setValue_array_setMatrixWorldNeedsUpdate],[$e.prototype._setValue_arrayElement,$e.prototype._setValue_arrayElement_setNeedsUpdate,$e.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[$e.prototype._setValue_fromArray,$e.prototype._setValue_fromArray_setNeedsUpdate,$e.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class Mh{constructor(e,t,n=0,i=1/0){this.ray=new Qi(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new kr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,n=[]){return sa(e,this,n,t),n.sort(Uc),n}intersectObjects(e,t=!0,n=[]){for(let i=0,r=e.length;i<r;i++)sa(e[i],this,n,t);return n.sort(Uc),n}}c(Mh,"Raycaster");function Uc(s,e){return s.distance-e.distance}c(Uc,"ascSort");function sa(s,e,t,n){if(s.layers.test(e.layers)&&s.raycast(e,t),n===!0){const i=s.children;for(let r=0,o=i.length;r<o;r++)sa(i[r],e,t,!0)}}c(sa,"intersectObject");typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ea}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ea);var ci={Linear:{None:function(s){return s}},Quadratic:{In:function(s){return s*s},Out:function(s){return s*(2-s)},InOut:function(s){return(s*=2)<1?.5*s*s:-.5*(--s*(s-2)-1)}},Cubic:{In:function(s){return s*s*s},Out:function(s){return--s*s*s+1},InOut:function(s){return(s*=2)<1?.5*s*s*s:.5*((s-=2)*s*s+2)}},Quartic:{In:function(s){return s*s*s*s},Out:function(s){return 1- --s*s*s*s},InOut:function(s){return(s*=2)<1?.5*s*s*s*s:-.5*((s-=2)*s*s*s-2)}},Quintic:{In:function(s){return s*s*s*s*s},Out:function(s){return--s*s*s*s*s+1},InOut:function(s){return(s*=2)<1?.5*s*s*s*s*s:.5*((s-=2)*s*s*s*s+2)}},Sinusoidal:{In:function(s){return 1-Math.cos(s*Math.PI/2)},Out:function(s){return Math.sin(s*Math.PI/2)},InOut:function(s){return .5*(1-Math.cos(Math.PI*s))}},Exponential:{In:function(s){return s===0?0:Math.pow(1024,s-1)},Out:function(s){return s===1?1:1-Math.pow(2,-10*s)},InOut:function(s){return s===0?0:s===1?1:(s*=2)<1?.5*Math.pow(1024,s-1):.5*(-Math.pow(2,-10*(s-1))+2)}},Circular:{In:function(s){return 1-Math.sqrt(1-s*s)},Out:function(s){return Math.sqrt(1- --s*s)},InOut:function(s){return(s*=2)<1?-.5*(Math.sqrt(1-s*s)-1):.5*(Math.sqrt(1-(s-=2)*s)+1)}},Elastic:{In:function(s){return s===0?0:s===1?1:-Math.pow(2,10*(s-1))*Math.sin((s-1.1)*5*Math.PI)},Out:function(s){return s===0?0:s===1?1:Math.pow(2,-10*s)*Math.sin((s-.1)*5*Math.PI)+1},InOut:function(s){return s===0?0:s===1?1:(s*=2,s<1?-.5*Math.pow(2,10*(s-1))*Math.sin((s-1.1)*5*Math.PI):.5*Math.pow(2,-10*(s-1))*Math.sin((s-1.1)*5*Math.PI)+1)}},Back:{In:function(s){var e=1.70158;return s*s*((e+1)*s-e)},Out:function(s){var e=1.70158;return--s*s*((e+1)*s+e)+1},InOut:function(s){var e=2.5949095;return(s*=2)<1?.5*(s*s*((e+1)*s-e)):.5*((s-=2)*s*((e+1)*s+e)+2)}},Bounce:{In:function(s){return 1-ci.Bounce.Out(1-s)},Out:function(s){return s<1/2.75?7.5625*s*s:s<2/2.75?7.5625*(s-=1.5/2.75)*s+.75:s<2.5/2.75?7.5625*(s-=2.25/2.75)*s+.9375:7.5625*(s-=2.625/2.75)*s+.984375},InOut:function(s){return s<.5?ci.Bounce.In(s*2)*.5:ci.Bounce.Out(s*2-1)*.5+.5}}},Ms;typeof self>"u"&&typeof process<"u"&&process.hrtime?Ms=c(function(){var s=process.hrtime();return s[0]*1e3+s[1]/1e6},"now"):typeof self<"u"&&self.performance!==void 0&&self.performance.now!==void 0?Ms=self.performance.now.bind(self.performance):Date.now!==void 0?Ms=Date.now:Ms=c(function(){return new Date().getTime()},"now");var Di=Ms,V0=function(){function s(){this._tweens={},this._tweensAddedDuringUpdate={}}return c(s,"Group"),s.prototype.getAll=function(){var e=this;return Object.keys(this._tweens).map(function(t){return e._tweens[t]})},s.prototype.removeAll=function(){this._tweens={}},s.prototype.add=function(e){this._tweens[e.getId()]=e,this._tweensAddedDuringUpdate[e.getId()]=e},s.prototype.remove=function(e){delete this._tweens[e.getId()],delete this._tweensAddedDuringUpdate[e.getId()]},s.prototype.update=function(e,t){e===void 0&&(e=Di()),t===void 0&&(t=!1);var n=Object.keys(this._tweens);if(n.length===0)return!1;for(;n.length>0;){this._tweensAddedDuringUpdate={};for(var i=0;i<n.length;i++){var r=this._tweens[n[i]],o=!t;r&&r.update(e,o)===!1&&!t&&delete this._tweens[n[i]]}n=Object.keys(this._tweensAddedDuringUpdate)}return!0},s}(),Ss={Linear:function(s,e){var t=s.length-1,n=t*e,i=Math.floor(n),r=Ss.Utils.Linear;return e<0?r(s[0],s[1],n):e>1?r(s[t],s[t-1],t-n):r(s[i],s[i+1>t?t:i+1],n-i)},Bezier:function(s,e){for(var t=0,n=s.length-1,i=Math.pow,r=Ss.Utils.Bernstein,o=0;o<=n;o++)t+=i(1-e,n-o)*i(e,o)*s[o]*r(n,o);return t},CatmullRom:function(s,e){var t=s.length-1,n=t*e,i=Math.floor(n),r=Ss.Utils.CatmullRom;return s[0]===s[t]?(e<0&&(i=Math.floor(n=t*(1+e))),r(s[(i-1+t)%t],s[i],s[(i+1)%t],s[(i+2)%t],n-i)):e<0?s[0]-(r(s[0],s[0],s[1],s[1],-n)-s[0]):e>1?s[t]-(r(s[t],s[t],s[t-1],s[t-1],n-t)-s[t]):r(s[i?i-1:0],s[i],s[t<i+1?t:i+1],s[t<i+2?t:i+2],n-i)},Utils:{Linear:function(s,e,t){return(e-s)*t+s},Bernstein:function(s,e){var t=Ss.Utils.Factorial;return t(s)/t(e)/t(s-e)},Factorial:function(){var s=[1];return function(e){var t=1;if(s[e])return s[e];for(var n=e;n>1;n--)t*=n;return s[e]=t,t}}(),CatmullRom:function(s,e,t,n,i){var r=(t-s)*.5,o=(n-e)*.5,a=i*i,l=i*a;return(2*e-2*t+r+o)*l+(-3*e+3*t-2*r-o)*a+r*i+e}}},Sh=function(){function s(){}return c(s,"Sequence"),s.nextId=function(){return s._nextId++},s._nextId=0,s}(),Th=new V0,Tr=function(){function s(e,t){t===void 0&&(t=Th),this._object=e,this._group=t,this._isPaused=!1,this._pauseStart=0,this._valuesStart={},this._valuesEnd={},this._valuesStartRepeat={},this._duration=1e3,this._initialRepeat=0,this._repeat=0,this._yoyo=!1,this._isPlaying=!1,this._reversed=!1,this._delayTime=0,this._startTime=0,this._easingFunction=ci.Linear.None,this._interpolationFunction=Ss.Linear,this._chainedTweens=[],this._onStartCallbackFired=!1,this._id=Sh.nextId(),this._isChainStopped=!1,this._goToEnd=!1}return c(s,"Tween"),s.prototype.getId=function(){return this._id},s.prototype.isPlaying=function(){return this._isPlaying},s.prototype.isPaused=function(){return this._isPaused},s.prototype.to=function(e,t){return this._valuesEnd=Object.create(e),t!==void 0&&(this._duration=t),this},s.prototype.duration=function(e){return this._duration=e,this},s.prototype.start=function(e){if(this._isPlaying)return this;if(this._group&&this._group.add(this),this._repeat=this._initialRepeat,this._reversed){this._reversed=!1;for(var t in this._valuesStartRepeat)this._swapEndStartRepeatValues(t),this._valuesStart[t]=this._valuesStartRepeat[t]}return this._isPlaying=!0,this._isPaused=!1,this._onStartCallbackFired=!1,this._isChainStopped=!1,this._startTime=e!==void 0?typeof e=="string"?Di()+parseFloat(e):e:Di(),this._startTime+=this._delayTime,this._setupProperties(this._object,this._valuesStart,this._valuesEnd,this._valuesStartRepeat),this},s.prototype._setupProperties=function(e,t,n,i){for(var r in n){var o=e[r],a=Array.isArray(o),l=a?"array":typeof o,u=!a&&Array.isArray(n[r]);if(!(l==="undefined"||l==="function")){if(u){var h=n[r];if(h.length===0)continue;h=h.map(this._handleRelativeValue.bind(this,o)),n[r]=[o].concat(h)}if((l==="object"||a)&&o&&!u){t[r]=a?[]:{};for(var d in o)t[r][d]=o[d];i[r]=a?[]:{},this._setupProperties(o,t[r],n[r],i[r])}else typeof t[r]>"u"&&(t[r]=o),a||(t[r]*=1),u?i[r]=n[r].slice().reverse():i[r]=t[r]||0}}},s.prototype.stop=function(){return this._isChainStopped||(this._isChainStopped=!0,this.stopChainedTweens()),this._isPlaying?(this._group&&this._group.remove(this),this._isPlaying=!1,this._isPaused=!1,this._onStopCallback&&this._onStopCallback(this._object),this):this},s.prototype.end=function(){return this._goToEnd=!0,this.update(1/0),this},s.prototype.pause=function(e){return e===void 0&&(e=Di()),this._isPaused||!this._isPlaying?this:(this._isPaused=!0,this._pauseStart=e,this._group&&this._group.remove(this),this)},s.prototype.resume=function(e){return e===void 0&&(e=Di()),!this._isPaused||!this._isPlaying?this:(this._isPaused=!1,this._startTime+=e-this._pauseStart,this._pauseStart=0,this._group&&this._group.add(this),this)},s.prototype.stopChainedTweens=function(){for(var e=0,t=this._chainedTweens.length;e<t;e++)this._chainedTweens[e].stop();return this},s.prototype.group=function(e){return this._group=e,this},s.prototype.delay=function(e){return this._delayTime=e,this},s.prototype.repeat=function(e){return this._initialRepeat=e,this._repeat=e,this},s.prototype.repeatDelay=function(e){return this._repeatDelayTime=e,this},s.prototype.yoyo=function(e){return this._yoyo=e,this},s.prototype.easing=function(e){return this._easingFunction=e,this},s.prototype.interpolation=function(e){return this._interpolationFunction=e,this},s.prototype.chain=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return this._chainedTweens=e,this},s.prototype.onStart=function(e){return this._onStartCallback=e,this},s.prototype.onUpdate=function(e){return this._onUpdateCallback=e,this},s.prototype.onRepeat=function(e){return this._onRepeatCallback=e,this},s.prototype.onComplete=function(e){return this._onCompleteCallback=e,this},s.prototype.onStop=function(e){return this._onStopCallback=e,this},s.prototype.update=function(e,t){if(e===void 0&&(e=Di()),t===void 0&&(t=!0),this._isPaused)return!0;var n,i,r=this._startTime+this._duration;if(!this._goToEnd&&!this._isPlaying){if(e>r)return!1;t&&this.start(e)}if(this._goToEnd=!1,e<this._startTime)return!0;this._onStartCallbackFired===!1&&(this._onStartCallback&&this._onStartCallback(this._object),this._onStartCallbackFired=!0),i=(e-this._startTime)/this._duration,i=this._duration===0||i>1?1:i;var o=this._easingFunction(i);if(this._updateProperties(this._object,this._valuesStart,this._valuesEnd,o),this._onUpdateCallback&&this._onUpdateCallback(this._object,i),i===1)if(this._repeat>0){isFinite(this._repeat)&&this._repeat--;for(n in this._valuesStartRepeat)!this._yoyo&&typeof this._valuesEnd[n]=="string"&&(this._valuesStartRepeat[n]=this._valuesStartRepeat[n]+parseFloat(this._valuesEnd[n])),this._yoyo&&this._swapEndStartRepeatValues(n),this._valuesStart[n]=this._valuesStartRepeat[n];return this._yoyo&&(this._reversed=!this._reversed),this._repeatDelayTime!==void 0?this._startTime=e+this._repeatDelayTime:this._startTime=e+this._delayTime,this._onRepeatCallback&&this._onRepeatCallback(this._object),!0}else{this._onCompleteCallback&&this._onCompleteCallback(this._object);for(var a=0,l=this._chainedTweens.length;a<l;a++)this._chainedTweens[a].start(this._startTime+this._duration);return this._isPlaying=!1,!1}return!0},s.prototype._updateProperties=function(e,t,n,i){for(var r in n)if(t[r]!==void 0){var o=t[r]||0,a=n[r],l=Array.isArray(e[r]),u=Array.isArray(a),h=!l&&u;h?e[r]=this._interpolationFunction(a,i):typeof a=="object"&&a?this._updateProperties(e[r],o,a,i):(a=this._handleRelativeValue(o,a),typeof a=="number"&&(e[r]=o+(a-o)*i))}},s.prototype._handleRelativeValue=function(e,t){return typeof t!="string"?t:t.charAt(0)==="+"||t.charAt(0)==="-"?e+parseFloat(t):parseFloat(t)},s.prototype._swapEndStartRepeatValues=function(e){var t=this._valuesStartRepeat[e],n=this._valuesEnd[e];typeof n=="string"?this._valuesStartRepeat[e]=this._valuesStartRepeat[e]+parseFloat(n):this._valuesStartRepeat[e]=this._valuesEnd[e],this._valuesEnd[e]=t},s}();Sh.nextId;var fn=Th;fn.getAll.bind(fn);fn.removeAll.bind(fn);fn.add.bind(fn);fn.remove.bind(fn);var G0=fn.update.bind(fn);class Eh{update(){G0()}animateObjectToTarget(e,t,n,i={duration:1e3}){const r=[];if(t){const o=new Tr(e.position).to(t);r.push(o)}if(n){const o=new Tr(e.quaternion).to(n);r.push(o)}r.forEach(o=>{i!=null&&i.duration&&o.duration(i==null?void 0:i.duration),i!=null&&i.easing&&o.easing(i==null?void 0:i.easing),o.start()})}createTween(e,t,n){const i=new Tr(e).to(t);return n!=null&&n.duration&&i.duration(n.duration),n!=null&&n.easing&&i.easing(n.easing),i}}c(Eh,"ThreeAnimator");var Lr=c(function(s,e,t,n){var i=this;this.object=s,this.trackballRadius=e,this.camera=t,this.domElement=n!==void 0?n:document,this.enabled=!0,this.rotateSensitivity=1,this.relativelySpinOffTrackball=!0,this.enableDamping=!0,this.dampingFactor=5,this.spinAxisConstraint,this.POINTER_SPHERE_MAPPING={SHOEMAKE:"shoemake",HOLROYD:"holroyd",AZIMUTHAL:"azimuthal",RAYCAST:"raycast"},this.offTrackBallVelocityGainMap={shoemake:20,holroyd:8,azimuthal:8,raycast:20},this._pointerMapping=this.POINTER_SPHERE_MAPPING.RAYCAST,this._offTrackBallVelocityGain=this.offTrackBallVelocityGainMap[this._pointerMapping],this._pointerUpVelDamping=2e3,this.screen={left:0,top:0,width:0,height:0};var r=new A(0,0,0),o=new bt,a,l=new A,u=new oe,h=new A,d=0,f=!1,m=!1,_=1e-6,g={type:"change"},p={type:"start"},v={type:"end"};this.update=function(){var C,B=performance.now()/1e3,R;return c(function(){C=performance.now()/1e3,R=C-B,B=C,i.enableDamping&&(r.multiplyScalar(1/(R*i.dampingFactor+1)),i.applyVelocity()),i.enableDamping||(a=performance.now()),i.hasPointerMovedThisFrame=!1},"update")}(),this.updateAngularVelocity=function(){var C=new bt,B=new bt,R=new bt;return c(function(k,G,ee){R.set(G.x,G.y,G.z,0),R.normalize(),R.conjugate(),B.set(k.x,k.y,k.z,0).multiply(R),ee*=2,C.set(G.x,G.y,G.z,1);var W=B.angleTo(C)/ee;r.crossVectors(G,k),r.setLength(W),i.applyVelocity()},"updateAngularVelocity")}(),this.applyVelocity=function(){var C=new bt,B=new A,R,D,k;return c(function(){k=performance.now(),D=(k-a)/1e3,a=k,i.spinAxisConstraint?(B.copy(i.spinAxisConstraint),R=B.dot(r)):(B.copy(r),R=r.length()),R&&D&&(B.normalize(),C.setFromAxisAngle(B,R*D*i.rotateSensitivity),i.object.quaternion.normalize(),i.object.quaternion.premultiply(C),8*(1-o.dot(i.object.quaternion))>_&&(i.dispatchEvent(g),o.copy(i.object.quaternion)))},"applyVelocity")}(),this.onWindowResize=function(){if(i.domElement===document)i.screen.left=0,i.screen.top=0,i.screen.width=window.innerWidth,i.screen.height=window.innerHeight;else{var C=i.domElement.getBoundingClientRect(),B=i.domElement.ownerDocument.documentElement;i.screen.left=C.left+window.pageXOffset-B.clientLeft,i.screen.top=C.top+window.pageYOffset-B.clientTop,i.screen.width=C.width,i.screen.height=C.height}},this.resetInputAfterCameraMovement=function(){m&&(i.camera.updateWorldMatrix(!0,!1),i.camera.matrixWorldInverse.copy(i.camera.matrixWorld).invert(),l.copy(b(S(u.x,u.y))))};var S=function(){var C=new oe;return c(function(R,D){return C.set((R-i.screen.width*.5-i.screen.left)/(i.screen.width*.5),(i.screen.height+2*(i.screen.top-D))/i.screen.height),C},"getPointerInNdc")}();this.getPointerInNdc=S;var y=function(){var C=new A,B=new A,R=new A,D=new oe,k=new bt;return c(function(ee){i.object.updateWorldMatrix(!0,!1),C.setFromMatrixPosition(i.object.matrixWorld),i.camera.updateWorldMatrix(!0,!1),i.camera.matrixWorldInverse.copy(i.camera.matrixWorld).invert(),C.project(i.camera),D.set(C.x,C.y),D.subVectors(ee,D),B.setFromMatrixPosition(i.object.matrixWorld),R.set(i.trackballRadius,0,0),R.applyQuaternion(k.setFromRotationMatrix(i.camera.matrixWorld)),B.add(R),B.project(i.camera),B.z=0,C.z=0;var W=B.distanceTo(C);return D.x/=W,D.y/=W,i.camera.aspect&&(D.y/=i.camera.aspect),D},"getObjectToPointer")}(),b=function(){var C=new A,B=new A,R=new oe,D=new bt,k=new qn,G=new Qi;return c(function(W){if(R.copy(y(W)),D.setFromRotationMatrix(i.camera.matrixWorld),i._pointerMapping===i.POINTER_SPHERE_MAPPING.RAYCAST)R.lengthSq()<1?(B.setFromMatrixPosition(i.object.matrixWorld),k.set(B,i.trackballRadius),G.origin.copy(i.camera.position),G.direction.set(W.x,W.y,.5),G.direction.unproject(i.camera),G.direction.sub(i.camera.position).normalize(),G.intersectSphere(k,C),C.sub(B),C.normalize()):(R.normalize(),C.set(R.x,R.y,0),C.applyQuaternion(D));else if(i._pointerMapping===i.POINTER_SPHERE_MAPPING.HOLROYD){var te=R.lengthSq();te<.5?C.set(R.x,R.y,Math.sqrt(1-te)):(C.set(R.x,R.y,1/(2*Math.sqrt(te))),C.normalize()),C.applyQuaternion(D)}else if(i._pointerMapping===i.POINTER_SPHERE_MAPPING.SHOEMAKE){var te=R.lengthSq();te<1?C.set(R.x,R.y,Math.sqrt(1-te)):(R.normalize(),C.set(R.x,R.y,0)),C.applyQuaternion(D)}else if(i._pointerMapping===i.POINTER_SPHERE_MAPPING.AZIMUTHAL){var te=Math.PI/2*R.length(),ie=te<Number.EPSILON?1:Math.sin(te)/te;R.multiplyScalar(Math.PI/2*ie),C.set(R.x,R.y,Math.cos(te)),C.applyQuaternion(D)}return C},"getPointerInSphere")}();this.onPointerDown=function(C,B,R){var D=S(C,B),k=y(D);k.lengthSq()<1?(f=!0,l.copy(b(D))):f=!1,u.set(C,B),d=R,m=!0},this.onPointerMove=function(){var C=new A,B=new oe,R=new oe,D=new oe,k=new A,G=new A,ee=new A,W=new A;return c(function(ie,H,j){var ne=(j-d)/1e3;if(d=j,h.copy(l),C.copy(S(ie,H)),B.copy(y(C)),B.lengthSq()<1||!this.relativelySpinOffTrackball)l.copy(b(C)),f?ne>0&&i.updateAngularVelocity(l,h,ne):a=j,f=!0;else{if(f)a=j;else if(ne>0){D.copy(S(u.x,u.y)),R.subVectors(C,D),k.setFromMatrixPosition(i.object.matrixWorld),i.camera.isPerspectiveCamera?G.copy(i.camera.position).sub(k):(i.camera.getWorldDirection(G),G.negate()),l.copy(b(C)),r.crossVectors(G,l);var ae;i.camera.isPerspectiveCamera?ae=2/i.camera.fov/Math.atan(i.trackballRadius/G.length()):ae=i.trackballRadius/((i.camera.top-i.camera.bottom)/i.camera.zoom*2),B.normalize();var he=R.dot(B)*ae/ne;r.setLength(he*i._offTrackBallVelocityGain),W.copy(b(D));var $=W.angleTo(l)/ne;ee.crossVectors(W,l),ee.setLength($),r.add(ee),i.applyVelocity()}f=!1}u.set(ie,H),i.hasPointerMovedThisFrame=!0},"onPointerMove")}(),this.setPointerToSphereMapping=function(C){i._pointerMapping=C,i._offTrackBallVelocityGain=i.offTrackBallVelocityGainMap[i._pointerMapping]},this.handlePointerDown=function(C){C.preventDefault(),i.domElement.focus?i.domElement.focus():window.focus(),i.dispatchEvent(p)},this.handlePointerUp=function(C){if(C.preventDefault(),!i.hasPointerMovedThisFrame){var B=(C.timeStamp-d)/1e3;r.multiplyScalar(1/(i._pointerUpVelDamping*Math.pow(B,2)+i.dampingFactor*B+1))}m=!1,i.dispatchEvent(v)};function M(C){i.enabled===!1||C.button!==0||(i.onPointerDown(C.pageX,C.pageY,C.timeStamp),document.addEventListener("mousemove",P,!1),document.addEventListener("mouseup",O,!1),i.handlePointerDown(C))}c(M,"onMouseDown");function P(C){i.enabled!==!1&&(C.preventDefault(),i.onPointerMove(C.pageX,C.pageY,C.timeStamp))}c(P,"onMouseMove");function O(C){i.enabled!==!1&&(document.removeEventListener("mousemove",P),document.removeEventListener("mouseup",O),i.handlePointerUp(C))}c(O,"onMouseUp"),this.cancelSpin=function(){r.set(0,0,0)},this.handleTouchStart=function(C){i.onPointerDown(C.pageX,C.pageY,C.timeStamp),i.applyVelocity()};function x(C){i.enabled!==!1&&(i.handleTouchStart(C),i.handlePointerDown(C))}c(x,"onTouchStart");function L(C){i.enabled===!1||!m||(C.preventDefault(),C.stopImmediatePropagation(),i.onPointerMove(C.touches[0].pageX,C.touches[0].pageY,C.timeStamp))}c(L,"onTouchMove");function N(C){i.enabled!==!1&&(i.handlePointerUp(C),C.touches.length>0&&(m=!0))}c(N,"onTouchEnd"),this.dispose=function(){i.domElement.removeEventListener("mousedown",M),document.removeEventListener("mousemove",P),document.removeEventListener("mouseup",O),i.domElement.removeEventListener("touchstart",x),i.domElement.removeEventListener("touchmove",L),i.domElement.removeEventListener("touchend",N)},i.domElement.addEventListener("mousedown",M),i.domElement.addEventListener("touchstart",x,{passive:!1}),i.domElement.addEventListener("touchmove",L,{passive:!1}),i.domElement.addEventListener("touchend",N,{passive:!1}),i.onWindowResize(),i.update()},"SpinControls");Lr.prototype=Object.create(jn.prototype);Lr.prototype.constructor=Lr;class Ah{constructor(e){this.defaultSpinControlsState={autoRotateAxis:new A(0,1,0),trackballRadius:100,spinAxisConstraint:void 0},this.autoRotateAxis=new A(0,1,0),this.autoRotateQuaternion=new bt,this.autoRotateEnabled=!0;const t=e.getRenderer().domElement;this.camera=this.buildPerspectiveCamera(t),this.spinControls=this.buildSpinControls(t),this.defaultCameraState=this.camera.clone()}buildPerspectiveCamera(e){const t=e.parentElement,n=c(()=>t.offsetWidth/t.offsetHeight,"aspectRatio"),i=new At(36,n(),1,3e3);return i.position.set(0,0,400),window.addEventListener("resize",()=>{i.aspect=n(),i.updateProjectionMatrix();const r=this.defaultCameraState;r.aspect=n(),r.updateProjectionMatrix()}),i}buildSpinControls(e){const t=new Qe,n=new Lr(t,0,this.getCamera(),e);return n.rotateSensitivity=.4,n.dampingFactor=10,n.relativelySpinOffTrackball=!0,window.addEventListener("resize",()=>n.onWindowResize()),n.addEventListener("start",()=>{this.autoRotateEnabled=!1}),n.addEventListener("end",()=>{this.autoRotateEnabled=!0}),n}setSpinControlsObject(e,t,n){this.spinControls.object=e,this.spinControls.trackballRadius=t,this.spinControls.spinAxisConstraint=n,this.defaultSpinControlsState.trackballRadius=t,this.defaultSpinControlsState.spinAxisConstraint=n}setRotationAxis(e){this.autoRotateAxis.copy(e),this.spinControls.spinAxisConstraint=e}resetSpinControls(){const{autoRotateAxis:e,trackballRadius:t,spinAxisConstraint:n}=this.defaultSpinControlsState;this.autoRotateAxis.copy(e),this.spinControls.trackballRadius=t,this.spinControls.spinAxisConstraint=n}autoRotate(e){this.autoRotateQuaternion.setFromAxisAngle(this.autoRotateAxis,e*-.1),this.spinControls.object.quaternion.premultiply(this.autoRotateQuaternion)}update(e){this.spinControls.update(),this.autoRotateEnabled&&this.autoRotate(e)}getCamera(){return this.camera}getSpinControls(){return this.spinControls}getDefaultCameraState(){return this.defaultCameraState}}c(Ah,"ThreeControls");const Bc=c((s,e)=>new A().subVectors(e,s).normalize(),"getDirectionBetweenVectors"),W0=c(s=>{const e=new A;return s.getWorldDirection(e),e},"getObjectDirection"),ra=c(s=>{const e=new A;return new Xn().setFromObject(s).getCenter(e),e},"getObjectCenter"),j0=c((s,e,t)=>{const n=new A().copy(s);return n.project(e),new oe((n.x+1)/2*t.clientWidth,-(n.y-1)/2*t.clientHeight)},"getObjectPositionOnScreen");class Ch{constructor(){this.onObjectMoveListeners=new Map,this.previousObjectPositions=new Map,this.defaultObjectPosition=new A(0,0,0)}update(){for(const[e,t]of this.onObjectMoveListeners){const n=this.getObjectPosition(e);t.forEach(i=>{this.hasObjectPositionChanged(e,n)&&i(e)}),this.previousObjectPositions.set(e,n.clone())}}onObjectMove(e,t){var n;this.onObjectMoveListeners.has(e)||this.onObjectMoveListeners.set(e,new Set),(n=this.onObjectMoveListeners.get(e))==null||n.add(t),this.previousObjectPositions.set(e,this.getObjectPosition(e))}removeObjectMoveListener(e,t){var n,i;(n=this.onObjectMoveListeners.get(e))==null||n.delete(t),((i=this.onObjectMoveListeners.get(e))==null?void 0:i.size)===0&&(this.onObjectMoveListeners.delete(e),this.previousObjectPositions.delete(e))}hasObjectPositionChanged(e,t){const n=this.previousObjectPositions.get(e);return n?!t.equals(n):!1}getObjectPosition(e){return e.position.equals(this.defaultObjectPosition)?ra(e):e.position}}c(Ch,"ThreeEventHandler");class Lh{constructor(e){this.renderer=this.buildRenderer(e)}buildRenderer(e){const t=e.parentElement,n=new zu({canvas:e,antialias:!0,alpha:!0});n.outputEncoding=Xe,n.setPixelRatio(window.devicePixelRatio);const i=c(()=>n.setSize(this.rendererWidth(t),this.rendererHeight(t),!1),"updateWebGlRendererSize");return i(),window.addEventListener("resize",i),n}rendererWidth(e){return e.offsetWidth>0?e.offsetWidth:window.innerWidth}rendererHeight(e){return e.offsetHeight>0?e.offsetHeight:window.innerWidth}getRenderer(){return this.renderer}getCanvas(){return this.renderer.domElement}}c(Lh,"ThreeRenderer");const It=c(s=>{const e=new Oe(s);return e.convertSRGBToLinear(),e},"rgbColor"),zt={ambientLight:It("#ffffff"),star:It("#ffffff"),sun:It("#fcd900"),earth:It("#4d96ff"),tree:{trunk:It("#be8c63"),crown:It("#9ede73")},mountain:It("#9ede73"),house:{roof:It("#b20600"),base:It("#f1eee9")},land:{brown:It("#ffcc8f"),green:It("#83bd75")},building:{floor:It("#f1eee9"),split:It("#73777b")},hut:{roof:It("#a64b2a"),pillar:It("#d7a86e")}};class Rh{constructor(){this.scene=new Bu,this.setupLights()}setupLights(){const e=new xh(zt.ambientLight),t=new ot;t.name="lights",t.add(e),this.scene.add(t)}getScene(){return this.scene}}c(Rh,"ThreeScene");class Ph{constructor(e,t){this.controls=t,this.rayCasterPoint=new oe(0,0),this.objectsToIgnore=new Set,this.intersectableMouseMoveObjects=new Set,this.intersectableClickObjects=new Set,this.mouseOverListenersMap=new Map,this.mouseOutListenersMap=new Map,this.clickableListenersMap=new Map,this.rayCaster=new Mh,this.rendererElement=e.getRenderer().domElement,this.setupMouseMoveListeners(),this.setupMouseClickListener()}update(){var e;(e=this.onAnimationFrame)==null||e.call(this)}setupMouseMoveListeners(){let e;const t=new Set,n=c(r=>{e=r},"updatePointerPosition"),i=c(r=>{var a,l;if(!e||!this.hasMouseMoveListeners())return;const o=this.getIntersectedObject(r,this.intersectableMouseMoveObjects);for(const u of t)o!==u&&(t.delete(u),(a=this.mouseOutListenersMap.get(u))==null||a());o&&!t.has(o)&&(t.add(o),(l=this.mouseOverListenersMap.get(o))==null||l()),e=r},"mouseMoveEventHandler");this.onAnimationFrame=()=>i(e),this.rendererElement.addEventListener("mousemove",n),this.rendererElement.addEventListener("touchmove",r=>{n(r.changedTouches[0])})}setupMouseClickListener(){let e=0,t=0;const n=c(r=>{e=r.clientX,t=r.clientY},"mouseDownEventHandler"),i=c(r=>{var u;const o=Math.abs(r.clientX-e),a=Math.abs(r.clientY-t);if(o!==0&&a!==0||!this.hasClickListeners())return;const l=this.getIntersectedObject(r,this.intersectableClickObjects);l&&((u=this.clickableListenersMap.get(l))==null||u())},"mouseUpEventHandler");this.rendererElement.addEventListener("mousedown",n),this.rendererElement.addEventListener("mouseup",i),this.rendererElement.addEventListener("touchstart",r=>{n(r.changedTouches[0])}),this.rendererElement.addEventListener("touchend",r=>{i(r.changedTouches[0])})}getIntersectedObject(e,t){this.rayCasterPoint.setX(e.clientX/this.rendererElement.clientWidth*2-1),this.rayCasterPoint.setY(-(e.clientY/this.rendererElement.clientHeight)*2+1),this.rayCaster.setFromCamera(this.rayCasterPoint,this.controls.getCamera());const n=this.rayCaster.intersectObjects([...t]);if(n.length!==0)return this.findIntersectedObject(n[0].object,t)}onMouseOver(e,t){this.mouseOverListenersMap.set(e,t),this.intersectableMouseMoveObjects.add(e)}onMouseOut(e,t){this.mouseOutListenersMap.set(e,t),this.intersectableMouseMoveObjects.add(e)}onClick(e,t){this.clickableListenersMap.set(e,t),this.intersectableClickObjects.add(e)}intersectButIgnoreObject(e){this.objectsToIgnore.add(e),this.intersectableClickObjects.add(e),this.intersectableMouseMoveObjects.add(e)}findIntersectedObject(e,t){if(!this.objectsToIgnore.has(e))return t.has(e)?e:e.parent?this.findIntersectedObject(e.parent,t):void 0}hasMouseMoveListeners(){return this.mouseOverListenersMap.size>0||this.mouseOutListenersMap.size>0}hasClickListeners(){return this.clickableListenersMap.size>0}}c(Ph,"ThreeSelector");class Dh{constructor(e){this.threeScene=new Rh,this.threeRenderer=new Lh(e.canvasElement),this.threeControls=new Ah(this.threeRenderer),this.threeSelector=new Ph(this.threeRenderer,this.threeControls),this.threeEventHandler=new Ch,this.threeAnimator=new Eh,this.animate()}animate(){const e=this.threeScene.getScene(),t=this.threeControls.getCamera(),n=this.threeRenderer.getRenderer(),i=new bh;n.setAnimationLoop(()=>{const r=i.getDelta();this.threeControls.update(r),this.threeSelector.update(),this.threeEventHandler.update(),this.threeAnimator.update(),n.render(e,t)})}getScene(){return this.threeScene.getScene()}getControls(){return this.threeControls}getSelector(){return this.threeSelector}getRenderer(){return this.threeRenderer}getEventHandler(){return this.threeEventHandler}getAnimator(){return this.threeAnimator}}c(Dh,"Three");const X0=c((s,e,t)=>{const n=dn.degToRad(-e+90),i=dn.degToRad(t),r=new A;return r.setFromSphericalCoords(s,n,i),r},"getPositionFromLatLng");class mn{constructor(...[e]){var t,n;this.properties=e,this.object=this.constructObject(),(t=this.properties)!=null&&t.name&&(this.object.name=this.properties.name),(n=this.properties)!=null&&n.scale&&this.object.scale.setScalar(this.properties.scale)}getObject(){return this.object}addTo(e){e.add(this.object)}applyLatLng(e,t,n){const i=X0(e,t,n);this.object.position.copy(i),this.object.lookAt(0,0,0),this.object.rotateX(dn.degToRad(-90))}}c(mn,"BaseObject");class Ih extends mn{constructObject(){const{size:e,color:t=zt.earth}=this.properties,n=new Kr(e,e/2,e/3),i=new Jt({color:t}),r=new st(n,i);return r.name="globe",r}getRadius(){return this.properties.size}}c(Ih,"Globe");class Oh extends mn{constructObject(){const e=new ot,t=new ot,n=this.properties.radius??120;return t.add(this.constructLight()),t.position.setScalar(n),e.add(t),e.name="sun",e}constructLight(){return new $a(zt.sun,.8)}setPosition(e){this.object.position.copy(e)}}c(Oh,"Sun");class Nh extends mn{constructObject(){const e=new ot,{floors:t=3,size:n}=this.properties??{};for(let i=0;i<t;i++){const r=this.constructFloor(i,n),o=this.constructSplit(i,n);e.add(r,o)}return e.name="building",e}constructFloor(e,t=10){var l;const n=new nn(t,t,t),i=new Jt({color:((l=this.properties)==null?void 0:l.floorColor)??zt.building.floor}),r=new st(n,i),o=t/2,a=this.getSplitHeight(t);return n.translate(0,o+e*(t+a),0),r}constructSplit(e,t=10){var l;const n=this.getSplitHeight(t),i=new nn(t*.8,n,t*.8),r=new Jt({color:((l=this.properties)==null?void 0:l.splitColor)??zt.building.split}),o=new st(i,r),a=n/2;return i.translate(0,(e+1)*(t+n)-a,0),o}getSplitHeight(e){return e*.1}}c(Nh,"Building");class Fh extends mn{constructObject(){var i,r;const e=new ot,t=this.constructRoof((i=this.properties)==null?void 0:i.size),n=this.constructBase((r=this.properties)==null?void 0:r.size);return e.add(t,n),e.name="house",e}constructBase(e=10){const t=new nn(e*.7,e/2,e),n=new Jt({color:zt.house.base}),i=new st(t,n);return t.translate(0,e/2/2,0),i}constructRoof(e=10){const[t,n]=[e,e/3],i=e/2,r=this.constructRoofGeometry(t,n),o=new Jt({color:zt.house.roof,side:Ws}),a=new st(r,o);return r.translate(0,i+n/2,0),a}constructRoofGeometry(e,t){const n=[[0,0],[e/2,t],[e,0]].map(o=>new oe(...o)),i=new ja(n),r=new Yr(i,{depth:e});return r.translate(-e/2,-t/2,-e/2),r}}c(Fh,"House");class kh extends mn{constructObject(){var i,r;const e=new ot,t=this.constructRoof((i=this.properties)==null?void 0:i.size),n=this.constructPillars((r=this.properties)==null?void 0:r.size);return e.add(t,n),e.name="hut",e}constructRoof(e=5){const t=e/1.25,n=new ns(e*1.2,t,6),i=new Jt({color:zt.hut.roof}),r=new st(n,i),o=e/1.1;return n.translate(0,o+t/2,0),r}constructPillars(e=5){const t=[{x:2.5,z:2.5},{x:-2.5,z:2.5},{x:2.5,z:-2.5},{x:-2.5,z:-2.5}],n=new ot;n.name="pillars";for(const i of t)n.add(this.constructPillar(i,e));return n}constructPillar(e,t){const[n,i,r]=[t/5,t/1.1,t/5],o=new nn(n,i,r),a=new Jt({color:zt.hut.pillar}),l=new st(o,a);return o.translate(e.x,i/2,e.z),l}}c(kh,"Hut");class zh extends mn{constructObject(){const{size:e=10,height:t=1,sides:n=6,color:i=zt.land.green}=this.properties??{},r=new js(e,e,t,n,1),o=new Jt({color:i}),a=new st(r,o);return a.name="land",a}}c(zh,"Land");class Uh extends mn{constructObject(){const{size:e,color:t=zt.mountain,height:n=e}=this.properties,i=new ns(e,n,4),r=new Jt({color:t}),o=new st(i,r);return o.name="mountain",i.translate(0,n/2,0),o}}c(Uh,"Mountain");class Bh extends mn{constructObject(){const e=new ot,t=this.constructTrunk(),n=this.constructCrown();return e.add(t,n),e.name="tree",e}constructTrunk(e=3){const t=new nn(1,e,1),n=new Jt({color:zt.tree.trunk}),i=new st(t,n);return t.translate(0,e/2,0),i}constructCrown(e=3){const n=new ns(3,7,3),i=new Jt({color:zt.tree.crown}),r=new st(n,i);return n.translate(0,e+7/2,0),r}}c(Bh,"Tree");var be=(s=>(s[s.LevelOne=2.25]="LevelOne",s[s.LevelTwo=4.5]="LevelTwo",s))(be||{});function q0(s){if(!!s&&!(typeof window>"u")){var e=document.createElement("style");return e.setAttribute("type","text/css"),e.innerHTML=s,document.head.appendChild(e),s}}c(q0,"___$insertStyle");function ki(s,e){var t=s.__state.conversionName.toString(),n=Math.round(s.r),i=Math.round(s.g),r=Math.round(s.b),o=s.a,a=Math.round(s.h),l=s.s.toFixed(1),u=s.v.toFixed(1);if(e||t==="THREE_CHAR_HEX"||t==="SIX_CHAR_HEX"){for(var h=s.hex.toString(16);h.length<6;)h="0"+h;return"#"+h}else{if(t==="CSS_RGB")return"rgb("+n+","+i+","+r+")";if(t==="CSS_RGBA")return"rgba("+n+","+i+","+r+","+o+")";if(t==="HEX")return"0x"+s.hex.toString(16);if(t==="RGB_ARRAY")return"["+n+","+i+","+r+"]";if(t==="RGBA_ARRAY")return"["+n+","+i+","+r+","+o+"]";if(t==="RGB_OBJ")return"{r:"+n+",g:"+i+",b:"+r+"}";if(t==="RGBA_OBJ")return"{r:"+n+",g:"+i+",b:"+r+",a:"+o+"}";if(t==="HSV_OBJ")return"{h:"+a+",s:"+l+",v:"+u+"}";if(t==="HSVA_OBJ")return"{h:"+a+",s:"+l+",v:"+u+",a:"+o+"}"}return"unknown format"}c(ki,"colorToString");var Hc=Array.prototype.forEach,_s=Array.prototype.slice,Q={BREAK:{},extend:c(function(e){return this.each(_s.call(arguments,1),function(t){var n=this.isObject(t)?Object.keys(t):[];n.forEach(function(i){this.isUndefined(t[i])||(e[i]=t[i])}.bind(this))},this),e},"extend"),defaults:c(function(e){return this.each(_s.call(arguments,1),function(t){var n=this.isObject(t)?Object.keys(t):[];n.forEach(function(i){this.isUndefined(e[i])&&(e[i]=t[i])}.bind(this))},this),e},"defaults"),compose:c(function(){var e=_s.call(arguments);return function(){for(var t=_s.call(arguments),n=e.length-1;n>=0;n--)t=[e[n].apply(this,t)];return t[0]}},"compose"),each:c(function(e,t,n){if(!!e){if(Hc&&e.forEach&&e.forEach===Hc)e.forEach(t,n);else if(e.length===e.length+0){var i=void 0,r=void 0;for(i=0,r=e.length;i<r;i++)if(i in e&&t.call(n,e[i],i)===this.BREAK)return}else for(var o in e)if(t.call(n,e[o],o)===this.BREAK)return}},"each"),defer:c(function(e){setTimeout(e,0)},"defer"),debounce:c(function(e,t,n){var i=void 0;return function(){var r=this,o=arguments;function a(){i=null,n||e.apply(r,o)}c(a,"delayed");var l=n||!i;clearTimeout(i),i=setTimeout(a,t),l&&e.apply(r,o)}},"debounce"),toArray:c(function(e){return e.toArray?e.toArray():_s.call(e)},"toArray"),isUndefined:c(function(e){return e===void 0},"isUndefined"),isNull:c(function(e){return e===null},"isNull"),isNaN:function(s){function e(t){return s.apply(this,arguments)}return c(e,"isNaN"),e.toString=function(){return s.toString()},e}(function(s){return isNaN(s)}),isArray:Array.isArray||function(s){return s.constructor===Array},isObject:c(function(e){return e===Object(e)},"isObject"),isNumber:c(function(e){return e===e+0},"isNumber"),isString:c(function(e){return e===e+""},"isString"),isBoolean:c(function(e){return e===!1||e===!0},"isBoolean"),isFunction:c(function(e){return e instanceof Function},"isFunction")},$0=[{litmus:Q.isString,conversions:{THREE_CHAR_HEX:{read:c(function(e){var t=e.match(/^#([A-F0-9])([A-F0-9])([A-F0-9])$/i);return t===null?!1:{space:"HEX",hex:parseInt("0x"+t[1].toString()+t[1].toString()+t[2].toString()+t[2].toString()+t[3].toString()+t[3].toString(),0)}},"read"),write:ki},SIX_CHAR_HEX:{read:c(function(e){var t=e.match(/^#([A-F0-9]{6})$/i);return t===null?!1:{space:"HEX",hex:parseInt("0x"+t[1].toString(),0)}},"read"),write:ki},CSS_RGB:{read:c(function(e){var t=e.match(/^rgb\(\s*(\S+)\s*,\s*(\S+)\s*,\s*(\S+)\s*\)/);return t===null?!1:{space:"RGB",r:parseFloat(t[1]),g:parseFloat(t[2]),b:parseFloat(t[3])}},"read"),write:ki},CSS_RGBA:{read:c(function(e){var t=e.match(/^rgba\(\s*(\S+)\s*,\s*(\S+)\s*,\s*(\S+)\s*,\s*(\S+)\s*\)/);return t===null?!1:{space:"RGB",r:parseFloat(t[1]),g:parseFloat(t[2]),b:parseFloat(t[3]),a:parseFloat(t[4])}},"read"),write:ki}}},{litmus:Q.isNumber,conversions:{HEX:{read:c(function(e){return{space:"HEX",hex:e,conversionName:"HEX"}},"read"),write:c(function(e){return e.hex},"write")}}},{litmus:Q.isArray,conversions:{RGB_ARRAY:{read:c(function(e){return e.length!==3?!1:{space:"RGB",r:e[0],g:e[1],b:e[2]}},"read"),write:c(function(e){return[e.r,e.g,e.b]},"write")},RGBA_ARRAY:{read:c(function(e){return e.length!==4?!1:{space:"RGB",r:e[0],g:e[1],b:e[2],a:e[3]}},"read"),write:c(function(e){return[e.r,e.g,e.b,e.a]},"write")}}},{litmus:Q.isObject,conversions:{RGBA_OBJ:{read:c(function(e){return Q.isNumber(e.r)&&Q.isNumber(e.g)&&Q.isNumber(e.b)&&Q.isNumber(e.a)?{space:"RGB",r:e.r,g:e.g,b:e.b,a:e.a}:!1},"read"),write:c(function(e){return{r:e.r,g:e.g,b:e.b,a:e.a}},"write")},RGB_OBJ:{read:c(function(e){return Q.isNumber(e.r)&&Q.isNumber(e.g)&&Q.isNumber(e.b)?{space:"RGB",r:e.r,g:e.g,b:e.b}:!1},"read"),write:c(function(e){return{r:e.r,g:e.g,b:e.b}},"write")},HSVA_OBJ:{read:c(function(e){return Q.isNumber(e.h)&&Q.isNumber(e.s)&&Q.isNumber(e.v)&&Q.isNumber(e.a)?{space:"HSV",h:e.h,s:e.s,v:e.v,a:e.a}:!1},"read"),write:c(function(e){return{h:e.h,s:e.s,v:e.v,a:e.a}},"write")},HSV_OBJ:{read:c(function(e){return Q.isNumber(e.h)&&Q.isNumber(e.s)&&Q.isNumber(e.v)?{space:"HSV",h:e.h,s:e.s,v:e.v}:!1},"read"),write:c(function(e){return{h:e.h,s:e.s,v:e.v}},"write")}}}],vs=void 0,yr=void 0,oa=c(function(){yr=!1;var e=arguments.length>1?Q.toArray(arguments):arguments[0];return Q.each($0,function(t){if(t.litmus(e))return Q.each(t.conversions,function(n,i){if(vs=n.read(e),yr===!1&&vs!==!1)return yr=vs,vs.conversionName=i,vs.conversion=n,Q.BREAK}),Q.BREAK}),yr},"interpret"),Vc=void 0,Rr={hsv_to_rgb:c(function(e,t,n){var i=Math.floor(e/60)%6,r=e/60-Math.floor(e/60),o=n*(1-t),a=n*(1-r*t),l=n*(1-(1-r)*t),u=[[n,l,o],[a,n,o],[o,n,l],[o,a,n],[l,o,n],[n,o,a]][i];return{r:u[0]*255,g:u[1]*255,b:u[2]*255}},"hsv_to_rgb"),rgb_to_hsv:c(function(e,t,n){var i=Math.min(e,t,n),r=Math.max(e,t,n),o=r-i,a=void 0,l=void 0;if(r!==0)l=o/r;else return{h:NaN,s:0,v:0};return e===r?a=(t-n)/o:t===r?a=2+(n-e)/o:a=4+(e-t)/o,a/=6,a<0&&(a+=1),{h:a*360,s:l,v:r/255}},"rgb_to_hsv"),rgb_to_hex:c(function(e,t,n){var i=this.hex_with_component(0,2,e);return i=this.hex_with_component(i,1,t),i=this.hex_with_component(i,0,n),i},"rgb_to_hex"),component_from_hex:c(function(e,t){return e>>t*8&255},"component_from_hex"),hex_with_component:c(function(e,t,n){return n<<(Vc=t*8)|e&~(255<<Vc)},"hex_with_component")},Y0=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(s){return typeof s}:function(s){return s&&typeof Symbol=="function"&&s.constructor===Symbol&&s!==Symbol.prototype?"symbol":typeof s},on=c(function(s,e){if(!(s instanceof e))throw new TypeError("Cannot call a class as a function")},"classCallCheck"),an=function(){function s(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return c(s,"defineProperties"),function(e,t,n){return t&&s(e.prototype,t),n&&s(e,n),e}}(),Wn=c(function s(e,t,n){e===null&&(e=Function.prototype);var i=Object.getOwnPropertyDescriptor(e,t);if(i===void 0){var r=Object.getPrototypeOf(e);return r===null?void 0:s(r,t,n)}else{if("value"in i)return i.value;var o=i.get;return o===void 0?void 0:o.call(n)}},"get"),Yn=c(function(s,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof e);s.prototype=Object.create(e&&e.prototype,{constructor:{value:s,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(s,e):s.__proto__=e)},"inherits"),Kn=c(function(s,e){if(!s)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e&&(typeof e=="object"||typeof e=="function")?e:s},"possibleConstructorReturn"),wt=function(){function s(){if(on(this,s),this.__state=oa.apply(this,arguments),this.__state===!1)throw new Error("Failed to interpret color arguments");this.__state.a=this.__state.a||1}return c(s,"Color"),an(s,[{key:"toString",value:c(function(){return ki(this)},"toString")},{key:"toHexString",value:c(function(){return ki(this,!0)},"toHexString")},{key:"toOriginal",value:c(function(){return this.__state.conversion.write(this)},"toOriginal")}]),s}();function Ja(s,e,t){Object.defineProperty(s,e,{get:c(function(){return this.__state.space==="RGB"?this.__state[e]:(wt.recalculateRGB(this,e,t),this.__state[e])},"get$$1"),set:c(function(i){this.__state.space!=="RGB"&&(wt.recalculateRGB(this,e,t),this.__state.space="RGB"),this.__state[e]=i},"set$$1")})}c(Ja,"defineRGBComponent");function Za(s,e){Object.defineProperty(s,e,{get:c(function(){return this.__state.space==="HSV"?this.__state[e]:(wt.recalculateHSV(this),this.__state[e])},"get$$1"),set:c(function(n){this.__state.space!=="HSV"&&(wt.recalculateHSV(this),this.__state.space="HSV"),this.__state[e]=n},"set$$1")})}c(Za,"defineHSVComponent");wt.recalculateRGB=function(s,e,t){if(s.__state.space==="HEX")s.__state[e]=Rr.component_from_hex(s.__state.hex,t);else if(s.__state.space==="HSV")Q.extend(s.__state,Rr.hsv_to_rgb(s.__state.h,s.__state.s,s.__state.v));else throw new Error("Corrupted color state")};wt.recalculateHSV=function(s){var e=Rr.rgb_to_hsv(s.r,s.g,s.b);Q.extend(s.__state,{s:e.s,v:e.v}),Q.isNaN(e.h)?Q.isUndefined(s.__state.h)&&(s.__state.h=0):s.__state.h=e.h};wt.COMPONENTS=["r","g","b","h","s","v","hex","a"];Ja(wt.prototype,"r",2);Ja(wt.prototype,"g",1);Ja(wt.prototype,"b",0);Za(wt.prototype,"h");Za(wt.prototype,"s");Za(wt.prototype,"v");Object.defineProperty(wt.prototype,"a",{get:c(function(){return this.__state.a},"get$$1"),set:c(function(e){this.__state.a=e},"set$$1")});Object.defineProperty(wt.prototype,"hex",{get:c(function(){return this.__state.space!=="HEX"&&(this.__state.hex=Rr.rgb_to_hex(this.r,this.g,this.b),this.__state.space="HEX"),this.__state.hex},"get$$1"),set:c(function(e){this.__state.space="HEX",this.__state.hex=e},"set$$1")});var gi=function(){function s(e,t){on(this,s),this.initialValue=e[t],this.domElement=document.createElement("div"),this.object=e,this.property=t,this.__onChange=void 0,this.__onFinishChange=void 0}return c(s,"Controller"),an(s,[{key:"onChange",value:c(function(t){return this.__onChange=t,this},"onChange")},{key:"onFinishChange",value:c(function(t){return this.__onFinishChange=t,this},"onFinishChange")},{key:"setValue",value:c(function(t){return this.object[this.property]=t,this.__onChange&&this.__onChange.call(this,t),this.updateDisplay(),this},"setValue")},{key:"getValue",value:c(function(){return this.object[this.property]},"getValue")},{key:"updateDisplay",value:c(function(){return this},"updateDisplay")},{key:"isModified",value:c(function(){return this.initialValue!==this.getValue()},"isModified")}]),s}(),K0={HTMLEvents:["change"],MouseEvents:["click","mousemove","mousedown","mouseup","mouseover"],KeyboardEvents:["keydown"]},Hh={};Q.each(K0,function(s,e){Q.each(s,function(t){Hh[t]=e})});var J0=/(\d+(\.\d+)?)px/;function ln(s){if(s==="0"||Q.isUndefined(s))return 0;var e=s.match(J0);return Q.isNull(e)?0:parseFloat(e[1])}c(ln,"cssValueToPixels");var U={makeSelectable:c(function(e,t){e===void 0||e.style===void 0||(e.onselectstart=t?function(){return!1}:function(){},e.style.MozUserSelect=t?"auto":"none",e.style.KhtmlUserSelect=t?"auto":"none",e.unselectable=t?"on":"off")},"makeSelectable"),makeFullscreen:c(function(e,t,n){var i=n,r=t;Q.isUndefined(r)&&(r=!0),Q.isUndefined(i)&&(i=!0),e.style.position="absolute",r&&(e.style.left=0,e.style.right=0),i&&(e.style.top=0,e.style.bottom=0)},"makeFullscreen"),fakeEvent:c(function(e,t,n,i){var r=n||{},o=Hh[t];if(!o)throw new Error("Event type "+t+" not supported.");var a=document.createEvent(o);switch(o){case"MouseEvents":{var l=r.x||r.clientX||0,u=r.y||r.clientY||0;a.initMouseEvent(t,r.bubbles||!1,r.cancelable||!0,window,r.clickCount||1,0,0,l,u,!1,!1,!1,!1,0,null);break}case"KeyboardEvents":{var h=a.initKeyboardEvent||a.initKeyEvent;Q.defaults(r,{cancelable:!0,ctrlKey:!1,altKey:!1,shiftKey:!1,metaKey:!1,keyCode:void 0,charCode:void 0}),h(t,r.bubbles||!1,r.cancelable,window,r.ctrlKey,r.altKey,r.shiftKey,r.metaKey,r.keyCode,r.charCode);break}default:{a.initEvent(t,r.bubbles||!1,r.cancelable||!0);break}}Q.defaults(a,i),e.dispatchEvent(a)},"fakeEvent"),bind:c(function(e,t,n,i){var r=i||!1;return e.addEventListener?e.addEventListener(t,n,r):e.attachEvent&&e.attachEvent("on"+t,n),U},"bind"),unbind:c(function(e,t,n,i){var r=i||!1;return e.removeEventListener?e.removeEventListener(t,n,r):e.detachEvent&&e.detachEvent("on"+t,n),U},"unbind"),addClass:c(function(e,t){if(e.className===void 0)e.className=t;else if(e.className!==t){var n=e.className.split(/ +/);n.indexOf(t)===-1&&(n.push(t),e.className=n.join(" ").replace(/^\s+/,"").replace(/\s+$/,""))}return U},"addClass"),removeClass:c(function(e,t){if(t)if(e.className===t)e.removeAttribute("class");else{var n=e.className.split(/ +/),i=n.indexOf(t);i!==-1&&(n.splice(i,1),e.className=n.join(" "))}else e.className=void 0;return U},"removeClass"),hasClass:c(function(e,t){return new RegExp("(?:^|\\s+)"+t+"(?:\\s+|$)").test(e.className)||!1},"hasClass"),getWidth:c(function(e){var t=getComputedStyle(e);return ln(t["border-left-width"])+ln(t["border-right-width"])+ln(t["padding-left"])+ln(t["padding-right"])+ln(t.width)},"getWidth"),getHeight:c(function(e){var t=getComputedStyle(e);return ln(t["border-top-width"])+ln(t["border-bottom-width"])+ln(t["padding-top"])+ln(t["padding-bottom"])+ln(t.height)},"getHeight"),getOffset:c(function(e){var t=e,n={left:0,top:0};if(t.offsetParent)do n.left+=t.offsetLeft,n.top+=t.offsetTop,t=t.offsetParent;while(t);return n},"getOffset"),isActive:c(function(e){return e===document.activeElement&&(e.type||e.href)},"isActive")},Vh=function(s){Yn(e,s);function e(t,n){on(this,e);var i=Kn(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n)),r=i;i.__prev=i.getValue(),i.__checkbox=document.createElement("input"),i.__checkbox.setAttribute("type","checkbox");function o(){r.setValue(!r.__prev)}return c(o,"onChange"),U.bind(i.__checkbox,"change",o,!1),i.domElement.appendChild(i.__checkbox),i.updateDisplay(),i}return c(e,"BooleanController"),an(e,[{key:"setValue",value:c(function(n){var i=Wn(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"setValue",this).call(this,n);return this.__onFinishChange&&this.__onFinishChange.call(this,this.getValue()),this.__prev=this.getValue(),i},"setValue")},{key:"updateDisplay",value:c(function(){return this.getValue()===!0?(this.__checkbox.setAttribute("checked","checked"),this.__checkbox.checked=!0,this.__prev=!0):(this.__checkbox.checked=!1,this.__prev=!1),Wn(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"updateDisplay",this).call(this)},"updateDisplay")}]),e}(gi),Z0=function(s){Yn(e,s);function e(t,n,i){on(this,e);var r=Kn(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n)),o=i,a=r;if(r.__select=document.createElement("select"),Q.isArray(o)){var l={};Q.each(o,function(u){l[u]=u}),o=l}return Q.each(o,function(u,h){var d=document.createElement("option");d.innerHTML=h,d.setAttribute("value",u),a.__select.appendChild(d)}),r.updateDisplay(),U.bind(r.__select,"change",function(){var u=this.options[this.selectedIndex].value;a.setValue(u)}),r.domElement.appendChild(r.__select),r}return c(e,"OptionController"),an(e,[{key:"setValue",value:c(function(n){var i=Wn(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"setValue",this).call(this,n);return this.__onFinishChange&&this.__onFinishChange.call(this,this.getValue()),i},"setValue")},{key:"updateDisplay",value:c(function(){return U.isActive(this.__select)?this:(this.__select.value=this.getValue(),Wn(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"updateDisplay",this).call(this))},"updateDisplay")}]),e}(gi),Q0=function(s){Yn(e,s);function e(t,n){on(this,e);var i=Kn(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n)),r=i;function o(){r.setValue(r.__input.value)}c(o,"onChange");function a(){r.__onFinishChange&&r.__onFinishChange.call(r,r.getValue())}return c(a,"onBlur"),i.__input=document.createElement("input"),i.__input.setAttribute("type","text"),U.bind(i.__input,"keyup",o),U.bind(i.__input,"change",o),U.bind(i.__input,"blur",a),U.bind(i.__input,"keydown",function(l){l.keyCode===13&&this.blur()}),i.updateDisplay(),i.domElement.appendChild(i.__input),i}return c(e,"StringController"),an(e,[{key:"updateDisplay",value:c(function(){return U.isActive(this.__input)||(this.__input.value=this.getValue()),Wn(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"updateDisplay",this).call(this)},"updateDisplay")}]),e}(gi);function Gc(s){var e=s.toString();return e.indexOf(".")>-1?e.length-e.indexOf(".")-1:0}c(Gc,"numDecimals");var Gh=function(s){Yn(e,s);function e(t,n,i){on(this,e);var r=Kn(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n)),o=i||{};return r.__min=o.min,r.__max=o.max,r.__step=o.step,Q.isUndefined(r.__step)?r.initialValue===0?r.__impliedStep=1:r.__impliedStep=Math.pow(10,Math.floor(Math.log(Math.abs(r.initialValue))/Math.LN10))/10:r.__impliedStep=r.__step,r.__precision=Gc(r.__impliedStep),r}return c(e,"NumberController"),an(e,[{key:"setValue",value:c(function(n){var i=n;return this.__min!==void 0&&i<this.__min?i=this.__min:this.__max!==void 0&&i>this.__max&&(i=this.__max),this.__step!==void 0&&i%this.__step!==0&&(i=Math.round(i/this.__step)*this.__step),Wn(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"setValue",this).call(this,i)},"setValue")},{key:"min",value:c(function(n){return this.__min=n,this},"min")},{key:"max",value:c(function(n){return this.__max=n,this},"max")},{key:"step",value:c(function(n){return this.__step=n,this.__impliedStep=n,this.__precision=Gc(n),this},"step")}]),e}(gi);function ex(s,e){var t=Math.pow(10,e);return Math.round(s*t)/t}c(ex,"roundToDecimal");var Pr=function(s){Yn(e,s);function e(t,n,i){on(this,e);var r=Kn(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n,i));r.__truncationSuspended=!1;var o=r,a=void 0;function l(){var _=parseFloat(o.__input.value);Q.isNaN(_)||o.setValue(_)}c(l,"onChange");function u(){o.__onFinishChange&&o.__onFinishChange.call(o,o.getValue())}c(u,"onFinish");function h(){u()}c(h,"onBlur");function d(_){var g=a-_.clientY;o.setValue(o.getValue()+g*o.__impliedStep),a=_.clientY}c(d,"onMouseDrag");function f(){U.unbind(window,"mousemove",d),U.unbind(window,"mouseup",f),u()}c(f,"onMouseUp");function m(_){U.bind(window,"mousemove",d),U.bind(window,"mouseup",f),a=_.clientY}return c(m,"onMouseDown"),r.__input=document.createElement("input"),r.__input.setAttribute("type","text"),U.bind(r.__input,"change",l),U.bind(r.__input,"blur",h),U.bind(r.__input,"mousedown",m),U.bind(r.__input,"keydown",function(_){_.keyCode===13&&(o.__truncationSuspended=!0,this.blur(),o.__truncationSuspended=!1,u())}),r.updateDisplay(),r.domElement.appendChild(r.__input),r}return c(e,"NumberControllerBox"),an(e,[{key:"updateDisplay",value:c(function(){return this.__input.value=this.__truncationSuspended?this.getValue():ex(this.getValue(),this.__precision),Wn(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"updateDisplay",this).call(this)},"updateDisplay")}]),e}(Gh);function Wc(s,e,t,n,i){return n+(i-n)*((s-e)/(t-e))}c(Wc,"map");var aa=function(s){Yn(e,s);function e(t,n,i,r,o){on(this,e);var a=Kn(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n,{min:i,max:r,step:o})),l=a;a.__background=document.createElement("div"),a.__foreground=document.createElement("div"),U.bind(a.__background,"mousedown",u),U.bind(a.__background,"touchstart",f),U.addClass(a.__background,"slider"),U.addClass(a.__foreground,"slider-fg");function u(g){document.activeElement.blur(),U.bind(window,"mousemove",h),U.bind(window,"mouseup",d),h(g)}c(u,"onMouseDown");function h(g){g.preventDefault();var p=l.__background.getBoundingClientRect();return l.setValue(Wc(g.clientX,p.left,p.right,l.__min,l.__max)),!1}c(h,"onMouseDrag");function d(){U.unbind(window,"mousemove",h),U.unbind(window,"mouseup",d),l.__onFinishChange&&l.__onFinishChange.call(l,l.getValue())}c(d,"onMouseUp");function f(g){g.touches.length===1&&(U.bind(window,"touchmove",m),U.bind(window,"touchend",_),m(g))}c(f,"onTouchStart");function m(g){var p=g.touches[0].clientX,v=l.__background.getBoundingClientRect();l.setValue(Wc(p,v.left,v.right,l.__min,l.__max))}c(m,"onTouchMove");function _(){U.unbind(window,"touchmove",m),U.unbind(window,"touchend",_),l.__onFinishChange&&l.__onFinishChange.call(l,l.getValue())}return c(_,"onTouchEnd"),a.updateDisplay(),a.__background.appendChild(a.__foreground),a.domElement.appendChild(a.__background),a}return c(e,"NumberControllerSlider"),an(e,[{key:"updateDisplay",value:c(function(){var n=(this.getValue()-this.__min)/(this.__max-this.__min);return this.__foreground.style.width=n*100+"%",Wn(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"updateDisplay",this).call(this)},"updateDisplay")}]),e}(Gh),Wh=function(s){Yn(e,s);function e(t,n,i){on(this,e);var r=Kn(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n)),o=r;return r.__button=document.createElement("div"),r.__button.innerHTML=i===void 0?"Fire":i,U.bind(r.__button,"click",function(a){return a.preventDefault(),o.fire(),!1}),U.addClass(r.__button,"button"),r.domElement.appendChild(r.__button),r}return c(e,"FunctionController"),an(e,[{key:"fire",value:c(function(){this.__onChange&&this.__onChange.call(this),this.getValue().call(this.object),this.__onFinishChange&&this.__onFinishChange.call(this,this.getValue())},"fire")}]),e}(gi),la=function(s){Yn(e,s);function e(t,n){on(this,e);var i=Kn(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n));i.__color=new wt(i.getValue()),i.__temp=new wt(0);var r=i;i.domElement=document.createElement("div"),U.makeSelectable(i.domElement,!1),i.__selector=document.createElement("div"),i.__selector.className="selector",i.__saturation_field=document.createElement("div"),i.__saturation_field.className="saturation-field",i.__field_knob=document.createElement("div"),i.__field_knob.className="field-knob",i.__field_knob_border="2px solid ",i.__hue_knob=document.createElement("div"),i.__hue_knob.className="hue-knob",i.__hue_field=document.createElement("div"),i.__hue_field.className="hue-field",i.__input=document.createElement("input"),i.__input.type="text",i.__input_textShadow="0 1px 1px ",U.bind(i.__input,"keydown",function(g){g.keyCode===13&&d.call(this)}),U.bind(i.__input,"blur",d),U.bind(i.__selector,"mousedown",function(){U.addClass(this,"drag").bind(window,"mouseup",function(){U.removeClass(r.__selector,"drag")})}),U.bind(i.__selector,"touchstart",function(){U.addClass(this,"drag").bind(window,"touchend",function(){U.removeClass(r.__selector,"drag")})});var o=document.createElement("div");Q.extend(i.__selector.style,{width:"122px",height:"102px",padding:"3px",backgroundColor:"#222",boxShadow:"0px 1px 3px rgba(0,0,0,0.3)"}),Q.extend(i.__field_knob.style,{position:"absolute",width:"12px",height:"12px",border:i.__field_knob_border+(i.__color.v<.5?"#fff":"#000"),boxShadow:"0px 1px 3px rgba(0,0,0,0.5)",borderRadius:"12px",zIndex:1}),Q.extend(i.__hue_knob.style,{position:"absolute",width:"15px",height:"2px",borderRight:"4px solid #fff",zIndex:1}),Q.extend(i.__saturation_field.style,{width:"100px",height:"100px",border:"1px solid #555",marginRight:"3px",display:"inline-block",cursor:"pointer"}),Q.extend(o.style,{width:"100%",height:"100%",background:"none"}),jc(o,"top","rgba(0,0,0,0)","#000"),Q.extend(i.__hue_field.style,{width:"15px",height:"100px",border:"1px solid #555",cursor:"ns-resize",position:"absolute",top:"3px",right:"3px"}),nx(i.__hue_field),Q.extend(i.__input.style,{outline:"none",textAlign:"center",color:"#fff",border:0,fontWeight:"bold",textShadow:i.__input_textShadow+"rgba(0,0,0,0.7)"}),U.bind(i.__saturation_field,"mousedown",a),U.bind(i.__saturation_field,"touchstart",a),U.bind(i.__field_knob,"mousedown",a),U.bind(i.__field_knob,"touchstart",a),U.bind(i.__hue_field,"mousedown",l),U.bind(i.__hue_field,"touchstart",l);function a(g){m(g),U.bind(window,"mousemove",m),U.bind(window,"touchmove",m),U.bind(window,"mouseup",u),U.bind(window,"touchend",u)}c(a,"fieldDown");function l(g){_(g),U.bind(window,"mousemove",_),U.bind(window,"touchmove",_),U.bind(window,"mouseup",h),U.bind(window,"touchend",h)}c(l,"fieldDownH");function u(){U.unbind(window,"mousemove",m),U.unbind(window,"touchmove",m),U.unbind(window,"mouseup",u),U.unbind(window,"touchend",u),f()}c(u,"fieldUpSV");function h(){U.unbind(window,"mousemove",_),U.unbind(window,"touchmove",_),U.unbind(window,"mouseup",h),U.unbind(window,"touchend",h),f()}c(h,"fieldUpH");function d(){var g=oa(this.value);g!==!1?(r.__color.__state=g,r.setValue(r.__color.toOriginal())):this.value=r.__color.toString()}c(d,"onBlur");function f(){r.__onFinishChange&&r.__onFinishChange.call(r,r.__color.toOriginal())}c(f,"onFinish"),i.__saturation_field.appendChild(o),i.__selector.appendChild(i.__field_knob),i.__selector.appendChild(i.__saturation_field),i.__selector.appendChild(i.__hue_field),i.__hue_field.appendChild(i.__hue_knob),i.domElement.appendChild(i.__input),i.domElement.appendChild(i.__selector),i.updateDisplay();function m(g){g.type.indexOf("touch")===-1&&g.preventDefault();var p=r.__saturation_field.getBoundingClientRect(),v=g.touches&&g.touches[0]||g,S=v.clientX,y=v.clientY,b=(S-p.left)/(p.right-p.left),M=1-(y-p.top)/(p.bottom-p.top);return M>1?M=1:M<0&&(M=0),b>1?b=1:b<0&&(b=0),r.__color.v=M,r.__color.s=b,r.setValue(r.__color.toOriginal()),!1}c(m,"setSV");function _(g){g.type.indexOf("touch")===-1&&g.preventDefault();var p=r.__hue_field.getBoundingClientRect(),v=g.touches&&g.touches[0]||g,S=v.clientY,y=1-(S-p.top)/(p.bottom-p.top);return y>1?y=1:y<0&&(y=0),r.__color.h=y*360,r.setValue(r.__color.toOriginal()),!1}return c(_,"setH"),i}return c(e,"ColorController"),an(e,[{key:"updateDisplay",value:c(function(){var n=oa(this.getValue());if(n!==!1){var i=!1;Q.each(wt.COMPONENTS,function(a){if(!Q.isUndefined(n[a])&&!Q.isUndefined(this.__color.__state[a])&&n[a]!==this.__color.__state[a])return i=!0,{}},this),i&&Q.extend(this.__color.__state,n)}Q.extend(this.__temp.__state,this.__color.__state),this.__temp.a=1;var r=this.__color.v<.5||this.__color.s>.5?255:0,o=255-r;Q.extend(this.__field_knob.style,{marginLeft:100*this.__color.s-7+"px",marginTop:100*(1-this.__color.v)-7+"px",backgroundColor:this.__temp.toHexString(),border:this.__field_knob_border+"rgb("+r+","+r+","+r+")"}),this.__hue_knob.style.marginTop=(1-this.__color.h/360)*100+"px",this.__temp.s=1,this.__temp.v=1,jc(this.__saturation_field,"left","#fff",this.__temp.toHexString()),this.__input.value=this.__color.toString(),Q.extend(this.__input.style,{backgroundColor:this.__color.toHexString(),color:"rgb("+r+","+r+","+r+")",textShadow:this.__input_textShadow+"rgba("+o+","+o+","+o+",.7)"})},"updateDisplay")}]),e}(gi),tx=["-moz-","-o-","-webkit-","-ms-",""];function jc(s,e,t,n){s.style.background="",Q.each(tx,function(i){s.style.cssText+="background: "+i+"linear-gradient("+e+", "+t+" 0%, "+n+" 100%); "})}c(jc,"linearGradient");function nx(s){s.style.background="",s.style.cssText+="background: -moz-linear-gradient(top,  #ff0000 0%, #ff00ff 17%, #0000ff 34%, #00ffff 50%, #00ff00 67%, #ffff00 84%, #ff0000 100%);",s.style.cssText+="background: -webkit-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);",s.style.cssText+="background: -o-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);",s.style.cssText+="background: -ms-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);",s.style.cssText+="background: linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);"}c(nx,"hueGradient");var ix={load:c(function(e,t){var n=t||document,i=n.createElement("link");i.type="text/css",i.rel="stylesheet",i.href=e,n.getElementsByTagName("head")[0].appendChild(i)},"load"),inject:c(function(e,t){var n=t||document,i=document.createElement("style");i.type="text/css",i.innerHTML=e;var r=n.getElementsByTagName("head")[0];try{r.appendChild(i)}catch{}},"inject")},sx=`<div id="dg-save" class="dg dialogue">

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

</div>`,rx=c(function(e,t){var n=e[t];return Q.isArray(arguments[2])||Q.isObject(arguments[2])?new Z0(e,t,arguments[2]):Q.isNumber(n)?Q.isNumber(arguments[2])&&Q.isNumber(arguments[3])?Q.isNumber(arguments[4])?new aa(e,t,arguments[2],arguments[3],arguments[4]):new aa(e,t,arguments[2],arguments[3]):Q.isNumber(arguments[4])?new Pr(e,t,{min:arguments[2],max:arguments[3],step:arguments[4]}):new Pr(e,t,{min:arguments[2],max:arguments[3]}):Q.isString(n)?new Q0(e,t):Q.isFunction(n)?new Wh(e,t,""):Q.isBoolean(n)?new Vh(e,t):null},"ControllerFactory");function ox(s){setTimeout(s,1e3/60)}c(ox,"requestAnimationFrame$1");var ax=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||ox,lx=function(){function s(){on(this,s),this.backgroundElement=document.createElement("div"),Q.extend(this.backgroundElement.style,{backgroundColor:"rgba(0,0,0,0.8)",top:0,left:0,display:"none",zIndex:"1000",opacity:0,WebkitTransition:"opacity 0.2s linear",transition:"opacity 0.2s linear"}),U.makeFullscreen(this.backgroundElement),this.backgroundElement.style.position="fixed",this.domElement=document.createElement("div"),Q.extend(this.domElement.style,{position:"fixed",display:"none",zIndex:"1001",opacity:0,WebkitTransition:"-webkit-transform 0.2s ease-out, opacity 0.2s linear",transition:"transform 0.2s ease-out, opacity 0.2s linear"}),document.body.appendChild(this.backgroundElement),document.body.appendChild(this.domElement);var e=this;U.bind(this.backgroundElement,"click",function(){e.hide()})}return c(s,"CenteredDiv"),an(s,[{key:"show",value:c(function(){var t=this;this.backgroundElement.style.display="block",this.domElement.style.display="block",this.domElement.style.opacity=0,this.domElement.style.webkitTransform="scale(1.1)",this.layout(),Q.defer(function(){t.backgroundElement.style.opacity=1,t.domElement.style.opacity=1,t.domElement.style.webkitTransform="scale(1)"})},"show")},{key:"hide",value:c(function(){var t=this,n=c(function i(){t.domElement.style.display="none",t.backgroundElement.style.display="none",U.unbind(t.domElement,"webkitTransitionEnd",i),U.unbind(t.domElement,"transitionend",i),U.unbind(t.domElement,"oTransitionEnd",i)},"hide");U.bind(this.domElement,"webkitTransitionEnd",n),U.bind(this.domElement,"transitionend",n),U.bind(this.domElement,"oTransitionEnd",n),this.backgroundElement.style.opacity=0,this.domElement.style.opacity=0,this.domElement.style.webkitTransform="scale(1.1)"},"hide")},{key:"layout",value:c(function(){this.domElement.style.left=window.innerWidth/2-U.getWidth(this.domElement)/2+"px",this.domElement.style.top=window.innerHeight/2-U.getHeight(this.domElement)/2+"px"},"layout")}]),s}(),cx=q0(`.dg ul{list-style:none;margin:0;padding:0;width:100%;clear:both}.dg.ac{position:fixed;top:0;left:0;right:0;height:0;z-index:0}.dg:not(.ac) .main{overflow:hidden}.dg.main{-webkit-transition:opacity .1s linear;-o-transition:opacity .1s linear;-moz-transition:opacity .1s linear;transition:opacity .1s linear}.dg.main.taller-than-window{overflow-y:auto}.dg.main.taller-than-window .close-button{opacity:1;margin-top:-1px;border-top:1px solid #2c2c2c}.dg.main ul.closed .close-button{opacity:1 !important}.dg.main:hover .close-button,.dg.main .close-button.drag{opacity:1}.dg.main .close-button{-webkit-transition:opacity .1s linear;-o-transition:opacity .1s linear;-moz-transition:opacity .1s linear;transition:opacity .1s linear;border:0;line-height:19px;height:20px;cursor:pointer;text-align:center;background-color:#000}.dg.main .close-button.close-top{position:relative}.dg.main .close-button.close-bottom{position:absolute}.dg.main .close-button:hover{background-color:#111}.dg.a{float:right;margin-right:15px;overflow-y:visible}.dg.a.has-save>ul.close-top{margin-top:0}.dg.a.has-save>ul.close-bottom{margin-top:27px}.dg.a.has-save>ul.closed{margin-top:0}.dg.a .save-row{top:0;z-index:1002}.dg.a .save-row.close-top{position:relative}.dg.a .save-row.close-bottom{position:fixed}.dg li{-webkit-transition:height .1s ease-out;-o-transition:height .1s ease-out;-moz-transition:height .1s ease-out;transition:height .1s ease-out;-webkit-transition:overflow .1s linear;-o-transition:overflow .1s linear;-moz-transition:overflow .1s linear;transition:overflow .1s linear}.dg li:not(.folder){cursor:auto;height:27px;line-height:27px;padding:0 4px 0 5px}.dg li.folder{padding:0;border-left:4px solid rgba(0,0,0,0)}.dg li.title{cursor:pointer;margin-left:-4px}.dg .closed li:not(.title),.dg .closed ul li,.dg .closed ul li>*{height:0;overflow:hidden;border:0}.dg .cr{clear:both;padding-left:3px;height:27px;overflow:hidden}.dg .property-name{cursor:default;float:left;clear:left;width:40%;overflow:hidden;text-overflow:ellipsis}.dg .cr.function .property-name{width:100%}.dg .c{float:left;width:60%;position:relative}.dg .c input[type=text]{border:0;margin-top:4px;padding:3px;width:100%;float:right}.dg .has-slider input[type=text]{width:30%;margin-left:0}.dg .slider{float:left;width:66%;margin-left:-5px;margin-right:0;height:19px;margin-top:4px}.dg .slider-fg{height:100%}.dg .c input[type=checkbox]{margin-top:7px}.dg .c select{margin-top:5px}.dg .cr.function,.dg .cr.function .property-name,.dg .cr.function *,.dg .cr.boolean,.dg .cr.boolean *{cursor:pointer}.dg .cr.color{overflow:visible}.dg .selector{display:none;position:absolute;margin-left:-9px;margin-top:23px;z-index:10}.dg .c:hover .selector,.dg .selector.drag{display:block}.dg li.save-row{padding:0}.dg li.save-row .button{display:inline-block;padding:0px 6px}.dg.dialogue{background-color:#222;width:460px;padding:15px;font-size:13px;line-height:15px}#dg-new-constructor{padding:10px;color:#222;font-family:Monaco, monospace;font-size:10px;border:0;resize:none;box-shadow:inset 1px 1px 1px #888;word-wrap:break-word;margin:12px 0;display:block;width:440px;overflow-y:scroll;height:100px;position:relative}#dg-local-explain{display:none;font-size:11px;line-height:17px;border-radius:3px;background-color:#333;padding:8px;margin-top:10px}#dg-local-explain code{font-size:10px}#dat-gui-save-locally{display:none}.dg{color:#eee;font:11px 'Lucida Grande', sans-serif;text-shadow:0 -1px 0 #111}.dg.main::-webkit-scrollbar{width:5px;background:#1a1a1a}.dg.main::-webkit-scrollbar-corner{height:0;display:none}.dg.main::-webkit-scrollbar-thumb{border-radius:5px;background:#676767}.dg li:not(.folder){background:#1a1a1a;border-bottom:1px solid #2c2c2c}.dg li.save-row{line-height:25px;background:#dad5cb;border:0}.dg li.save-row select{margin-left:5px;width:108px}.dg li.save-row .button{margin-left:5px;margin-top:1px;border-radius:2px;font-size:9px;line-height:7px;padding:4px 4px 5px 4px;background:#c5bdad;color:#fff;text-shadow:0 1px 0 #b0a58f;box-shadow:0 -1px 0 #b0a58f;cursor:pointer}.dg li.save-row .button.gears{background:#c5bdad url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAANCAYAAAB/9ZQ7AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAQJJREFUeNpiYKAU/P//PwGIC/ApCABiBSAW+I8AClAcgKxQ4T9hoMAEUrxx2QSGN6+egDX+/vWT4e7N82AMYoPAx/evwWoYoSYbACX2s7KxCxzcsezDh3evFoDEBYTEEqycggWAzA9AuUSQQgeYPa9fPv6/YWm/Acx5IPb7ty/fw+QZblw67vDs8R0YHyQhgObx+yAJkBqmG5dPPDh1aPOGR/eugW0G4vlIoTIfyFcA+QekhhHJhPdQxbiAIguMBTQZrPD7108M6roWYDFQiIAAv6Aow/1bFwXgis+f2LUAynwoIaNcz8XNx3Dl7MEJUDGQpx9gtQ8YCueB+D26OECAAQDadt7e46D42QAAAABJRU5ErkJggg==) 2px 1px no-repeat;height:7px;width:8px}.dg li.save-row .button:hover{background-color:#bab19e;box-shadow:0 -1px 0 #b0a58f}.dg li.folder{border-bottom:0}.dg li.title{padding-left:16px;background:#000 url(data:image/gif;base64,R0lGODlhBQAFAJEAAP////Pz8////////yH5BAEAAAIALAAAAAAFAAUAAAIIlI+hKgFxoCgAOw==) 6px 10px no-repeat;cursor:pointer;border-bottom:1px solid rgba(255,255,255,0.2)}.dg .closed li.title{background-image:url(data:image/gif;base64,R0lGODlhBQAFAJEAAP////Pz8////////yH5BAEAAAIALAAAAAAFAAUAAAIIlGIWqMCbWAEAOw==)}.dg .cr.boolean{border-left:3px solid #806787}.dg .cr.color{border-left:3px solid}.dg .cr.function{border-left:3px solid #e61d5f}.dg .cr.number{border-left:3px solid #2FA1D6}.dg .cr.number input[type=text]{color:#2FA1D6}.dg .cr.string{border-left:3px solid #1ed36f}.dg .cr.string input[type=text]{color:#1ed36f}.dg .cr.function:hover,.dg .cr.boolean:hover{background:#111}.dg .c input[type=text]{background:#303030;outline:none}.dg .c input[type=text]:hover{background:#3c3c3c}.dg .c input[type=text]:focus{background:#494949;color:#fff}.dg .c .slider{background:#303030;cursor:ew-resize}.dg .c .slider-fg{background:#2FA1D6;max-width:100%}.dg .c .slider:hover{background:#3c3c3c}.dg .c .slider:hover .slider-fg{background:#44abda}
`);ix.inject(cx);var Xc="dg",qc=72,$c=20,Gs="Default",Ts=function(){try{return!!window.localStorage}catch{return!1}}(),Ps=void 0,Yc=!0,Ii=void 0,Uo=!1,jh=[],Ze=c(function s(e){var t=this,n=e||{};this.domElement=document.createElement("div"),this.__ul=document.createElement("ul"),this.domElement.appendChild(this.__ul),U.addClass(this.domElement,Xc),this.__folders={},this.__controllers=[],this.__rememberedObjects=[],this.__rememberedObjectIndecesToControllers=[],this.__listening=[],n=Q.defaults(n,{closeOnTop:!1,autoPlace:!0,width:s.DEFAULT_WIDTH}),n=Q.defaults(n,{resizable:n.autoPlace,hideable:n.autoPlace}),Q.isUndefined(n.load)?n.load={preset:Gs}:n.preset&&(n.load.preset=n.preset),Q.isUndefined(n.parent)&&n.hideable&&jh.push(this),n.resizable=Q.isUndefined(n.parent)&&n.resizable,n.autoPlace&&Q.isUndefined(n.scrollable)&&(n.scrollable=!0);var i=Ts&&localStorage.getItem(Oi(this,"isLocal"))==="true",r=void 0,o=void 0;if(Object.defineProperties(this,{parent:{get:c(function(){return n.parent},"get$$1")},scrollable:{get:c(function(){return n.scrollable},"get$$1")},autoPlace:{get:c(function(){return n.autoPlace},"get$$1")},closeOnTop:{get:c(function(){return n.closeOnTop},"get$$1")},preset:{get:c(function(){return t.parent?t.getRoot().preset:n.load.preset},"get$$1"),set:c(function(f){t.parent?t.getRoot().preset=f:n.load.preset=f,fx(this),t.revert()},"set$$1")},width:{get:c(function(){return n.width},"get$$1"),set:c(function(f){n.width=f,ha(t,f)},"set$$1")},name:{get:c(function(){return n.name},"get$$1"),set:c(function(f){n.name=f,o&&(o.innerHTML=n.name)},"set$$1")},closed:{get:c(function(){return n.closed},"get$$1"),set:c(function(f){n.closed=f,n.closed?U.addClass(t.__ul,s.CLASS_CLOSED):U.removeClass(t.__ul,s.CLASS_CLOSED),this.onResize(),t.__closeButton&&(t.__closeButton.innerHTML=f?s.TEXT_OPEN:s.TEXT_CLOSED)},"set$$1")},load:{get:c(function(){return n.load},"get$$1")},useLocalStorage:{get:c(function(){return i},"get$$1"),set:c(function(f){Ts&&(i=f,f?U.bind(window,"unload",r):U.unbind(window,"unload",r),localStorage.setItem(Oi(t,"isLocal"),f))},"set$$1")}}),Q.isUndefined(n.parent)){if(this.closed=n.closed||!1,U.addClass(this.domElement,s.CLASS_MAIN),U.makeSelectable(this.domElement,!1),Ts&&i){t.useLocalStorage=!0;var a=localStorage.getItem(Oi(this,"gui"));a&&(n.load=JSON.parse(a))}this.__closeButton=document.createElement("div"),this.__closeButton.innerHTML=s.TEXT_CLOSED,U.addClass(this.__closeButton,s.CLASS_CLOSE_BUTTON),n.closeOnTop?(U.addClass(this.__closeButton,s.CLASS_CLOSE_TOP),this.domElement.insertBefore(this.__closeButton,this.domElement.childNodes[0])):(U.addClass(this.__closeButton,s.CLASS_CLOSE_BOTTOM),this.domElement.appendChild(this.__closeButton)),U.bind(this.__closeButton,"click",function(){t.closed=!t.closed})}else{n.closed===void 0&&(n.closed=!0);var l=document.createTextNode(n.name);U.addClass(l,"controller-name"),o=Qa(t,l);var u=c(function(f){return f.preventDefault(),t.closed=!t.closed,!1},"onClickTitle");U.addClass(this.__ul,s.CLASS_CLOSED),U.addClass(o,"title"),U.bind(o,"click",u),n.closed||(this.closed=!1)}n.autoPlace&&(Q.isUndefined(n.parent)&&(Yc&&(Ii=document.createElement("div"),U.addClass(Ii,Xc),U.addClass(Ii,s.CLASS_AUTO_PLACE_CONTAINER),document.body.appendChild(Ii),Yc=!1),Ii.appendChild(this.domElement),U.addClass(this.domElement,s.CLASS_AUTO_PLACE)),this.parent||ha(t,n.width)),this.__resizeHandler=function(){t.onResizeDebounced()},U.bind(window,"resize",this.__resizeHandler),U.bind(this.__ul,"webkitTransitionEnd",this.__resizeHandler),U.bind(this.__ul,"transitionend",this.__resizeHandler),U.bind(this.__ul,"oTransitionEnd",this.__resizeHandler),this.onResize(),n.resizable&&dx(this),r=c(function(){Ts&&localStorage.getItem(Oi(t,"isLocal"))==="true"&&localStorage.setItem(Oi(t,"gui"),JSON.stringify(t.getSaveObject()))},"saveToLocalStorage"),this.saveToLocalStorageIfPossible=r;function h(){var d=t.getRoot();d.width+=1,Q.defer(function(){d.width-=1})}c(h,"resetWidth"),n.parent||h()},"GUI");Ze.toggleHide=function(){Uo=!Uo,Q.each(jh,function(s){s.domElement.style.display=Uo?"none":""})};Ze.CLASS_AUTO_PLACE="a";Ze.CLASS_AUTO_PLACE_CONTAINER="ac";Ze.CLASS_MAIN="main";Ze.CLASS_CONTROLLER_ROW="cr";Ze.CLASS_TOO_TALL="taller-than-window";Ze.CLASS_CLOSED="closed";Ze.CLASS_CLOSE_BUTTON="close-button";Ze.CLASS_CLOSE_TOP="close-top";Ze.CLASS_CLOSE_BOTTOM="close-bottom";Ze.CLASS_DRAG="drag";Ze.DEFAULT_WIDTH=245;Ze.TEXT_CLOSED="Close Controls";Ze.TEXT_OPEN="Open Controls";Ze._keydownHandler=function(s){document.activeElement.type!=="text"&&(s.which===qc||s.keyCode===qc)&&Ze.toggleHide()};U.bind(window,"keydown",Ze._keydownHandler,!1);Q.extend(Ze.prototype,{add:c(function(e,t){return Ds(this,e,t,{factoryArgs:Array.prototype.slice.call(arguments,2)})},"add"),addColor:c(function(e,t){return Ds(this,e,t,{color:!0})},"addColor"),remove:c(function(e){this.__ul.removeChild(e.__li),this.__controllers.splice(this.__controllers.indexOf(e),1);var t=this;Q.defer(function(){t.onResize()})},"remove"),destroy:c(function(){if(this.parent)throw new Error("Only the root GUI should be removed with .destroy(). For subfolders, use gui.removeFolder(folder) instead.");this.autoPlace&&Ii.removeChild(this.domElement);var e=this;Q.each(this.__folders,function(t){e.removeFolder(t)}),U.unbind(window,"keydown",Ze._keydownHandler,!1),Kc(this)},"destroy"),addFolder:c(function(e){if(this.__folders[e]!==void 0)throw new Error('You already have a folder in this GUI by the name "'+e+'"');var t={name:e,parent:this};t.autoPlace=this.autoPlace,this.load&&this.load.folders&&this.load.folders[e]&&(t.closed=this.load.folders[e].closed,t.load=this.load.folders[e]);var n=new Ze(t);this.__folders[e]=n;var i=Qa(this,n.domElement);return U.addClass(i,"folder"),n},"addFolder"),removeFolder:c(function(e){this.__ul.removeChild(e.domElement.parentElement),delete this.__folders[e.name],this.load&&this.load.folders&&this.load.folders[e.name]&&delete this.load.folders[e.name],Kc(e);var t=this;Q.each(e.__folders,function(n){e.removeFolder(n)}),Q.defer(function(){t.onResize()})},"removeFolder"),open:c(function(){this.closed=!1},"open"),close:c(function(){this.closed=!0},"close"),hide:c(function(){this.domElement.style.display="none"},"hide"),show:c(function(){this.domElement.style.display=""},"show"),onResize:c(function(){var e=this.getRoot();if(e.scrollable){var t=U.getOffset(e.__ul).top,n=0;Q.each(e.__ul.childNodes,function(i){e.autoPlace&&i===e.__save_row||(n+=U.getHeight(i))}),window.innerHeight-t-$c<n?(U.addClass(e.domElement,Ze.CLASS_TOO_TALL),e.__ul.style.height=window.innerHeight-t-$c+"px"):(U.removeClass(e.domElement,Ze.CLASS_TOO_TALL),e.__ul.style.height="auto")}e.__resize_handle&&Q.defer(function(){e.__resize_handle.style.height=e.__ul.offsetHeight+"px"}),e.__closeButton&&(e.__closeButton.style.width=e.width+"px")},"onResize"),onResizeDebounced:Q.debounce(function(){this.onResize()},50),remember:c(function(){if(Q.isUndefined(Ps)&&(Ps=new lx,Ps.domElement.innerHTML=sx),this.parent)throw new Error("You can only call remember on a top level GUI.");var e=this;Q.each(Array.prototype.slice.call(arguments),function(t){e.__rememberedObjects.length===0&&hx(e),e.__rememberedObjects.indexOf(t)===-1&&e.__rememberedObjects.push(t)}),this.autoPlace&&ha(this,this.width)},"remember"),getRoot:c(function(){for(var e=this;e.parent;)e=e.parent;return e},"getRoot"),getSaveObject:c(function(){var e=this.load;return e.closed=this.closed,this.__rememberedObjects.length>0&&(e.preset=this.preset,e.remembered||(e.remembered={}),e.remembered[this.preset]=br(this)),e.folders={},Q.each(this.__folders,function(t,n){e.folders[n]=t.getSaveObject()}),e},"getSaveObject"),save:c(function(){this.load.remembered||(this.load.remembered={}),this.load.remembered[this.preset]=br(this),ca(this,!1),this.saveToLocalStorageIfPossible()},"save"),saveAs:c(function(e){this.load.remembered||(this.load.remembered={},this.load.remembered[Gs]=br(this,!0)),this.load.remembered[e]=br(this),this.preset=e,ua(this,e,!0),this.saveToLocalStorageIfPossible()},"saveAs"),revert:c(function(e){Q.each(this.__controllers,function(t){this.getRoot().load.remembered?Xh(e||this.getRoot(),t):t.setValue(t.initialValue),t.__onFinishChange&&t.__onFinishChange.call(t,t.getValue())},this),Q.each(this.__folders,function(t){t.revert(t)}),e||ca(this.getRoot(),!1)},"revert"),listen:c(function(e){var t=this.__listening.length===0;this.__listening.push(e),t&&qh(this.__listening)},"listen"),updateDisplay:c(function(){Q.each(this.__controllers,function(e){e.updateDisplay()}),Q.each(this.__folders,function(e){e.updateDisplay()})},"updateDisplay")});function Qa(s,e,t){var n=document.createElement("li");return e&&n.appendChild(e),t?s.__ul.insertBefore(n,t):s.__ul.appendChild(n),s.onResize(),n}c(Qa,"addRow");function Kc(s){U.unbind(window,"resize",s.__resizeHandler),s.saveToLocalStorageIfPossible&&U.unbind(window,"unload",s.saveToLocalStorageIfPossible)}c(Kc,"removeListeners");function ca(s,e){var t=s.__preset_select[s.__preset_select.selectedIndex];e?t.innerHTML=t.value+"*":t.innerHTML=t.value}c(ca,"markPresetModified");function ux(s,e,t){if(t.__li=e,t.__gui=s,Q.extend(t,{options:c(function(o){if(arguments.length>1){var a=t.__li.nextElementSibling;return t.remove(),Ds(s,t.object,t.property,{before:a,factoryArgs:[Q.toArray(arguments)]})}if(Q.isArray(o)||Q.isObject(o)){var l=t.__li.nextElementSibling;return t.remove(),Ds(s,t.object,t.property,{before:l,factoryArgs:[o]})}},"options"),name:c(function(o){return t.__li.firstElementChild.firstElementChild.innerHTML=o,t},"name"),listen:c(function(){return t.__gui.listen(t),t},"listen"),remove:c(function(){return t.__gui.remove(t),t},"remove")}),t instanceof aa){var n=new Pr(t.object,t.property,{min:t.__min,max:t.__max,step:t.__step});Q.each(["updateDisplay","onChange","onFinishChange","step","min","max"],function(r){var o=t[r],a=n[r];t[r]=n[r]=function(){var l=Array.prototype.slice.call(arguments);return a.apply(n,l),o.apply(t,l)}}),U.addClass(e,"has-slider"),t.domElement.insertBefore(n.domElement,t.domElement.firstElementChild)}else if(t instanceof Pr){var i=c(function(o){if(Q.isNumber(t.__min)&&Q.isNumber(t.__max)){var a=t.__li.firstElementChild.firstElementChild.innerHTML,l=t.__gui.__listening.indexOf(t)>-1;t.remove();var u=Ds(s,t.object,t.property,{before:t.__li.nextElementSibling,factoryArgs:[t.__min,t.__max,t.__step]});return u.name(a),l&&u.listen(),u}return o},"r");t.min=Q.compose(i,t.min),t.max=Q.compose(i,t.max)}else t instanceof Vh?(U.bind(e,"click",function(){U.fakeEvent(t.__checkbox,"click")}),U.bind(t.__checkbox,"click",function(r){r.stopPropagation()})):t instanceof Wh?(U.bind(e,"click",function(){U.fakeEvent(t.__button,"click")}),U.bind(e,"mouseover",function(){U.addClass(t.__button,"hover")}),U.bind(e,"mouseout",function(){U.removeClass(t.__button,"hover")})):t instanceof la&&(U.addClass(e,"color"),t.updateDisplay=Q.compose(function(r){return e.style.borderLeftColor=t.__color.toString(),r},t.updateDisplay),t.updateDisplay());t.setValue=Q.compose(function(r){return s.getRoot().__preset_select&&t.isModified()&&ca(s.getRoot(),!0),r},t.setValue)}c(ux,"augmentController");function Xh(s,e){var t=s.getRoot(),n=t.__rememberedObjects.indexOf(e.object);if(n!==-1){var i=t.__rememberedObjectIndecesToControllers[n];if(i===void 0&&(i={},t.__rememberedObjectIndecesToControllers[n]=i),i[e.property]=e,t.load&&t.load.remembered){var r=t.load.remembered,o=void 0;if(r[s.preset])o=r[s.preset];else if(r[Gs])o=r[Gs];else return;if(o[n]&&o[n][e.property]!==void 0){var a=o[n][e.property];e.initialValue=a,e.setValue(a)}}}}c(Xh,"recallSavedValue");function Ds(s,e,t,n){if(e[t]===void 0)throw new Error('Object "'+e+'" has no property "'+t+'"');var i=void 0;if(n.color)i=new la(e,t);else{var r=[e,t].concat(n.factoryArgs);i=rx.apply(s,r)}n.before instanceof gi&&(n.before=n.before.__li),Xh(s,i),U.addClass(i.domElement,"c");var o=document.createElement("span");U.addClass(o,"property-name"),o.innerHTML=i.property;var a=document.createElement("div");a.appendChild(o),a.appendChild(i.domElement);var l=Qa(s,a,n.before);return U.addClass(l,Ze.CLASS_CONTROLLER_ROW),i instanceof la?U.addClass(l,"color"):U.addClass(l,Y0(i.getValue())),ux(s,l,i),s.__controllers.push(i),i}c(Ds,"_add");function Oi(s,e){return document.location.href+"."+e}c(Oi,"getLocalStorageHash");function ua(s,e,t){var n=document.createElement("option");n.innerHTML=e,n.value=e,s.__preset_select.appendChild(n),t&&(s.__preset_select.selectedIndex=s.__preset_select.length-1)}c(ua,"addPresetOption");function Jc(s,e){e.style.display=s.useLocalStorage?"block":"none"}c(Jc,"showHideExplain");function hx(s){var e=s.__save_row=document.createElement("li");U.addClass(s.domElement,"has-save"),s.__ul.insertBefore(e,s.__ul.firstChild),U.addClass(e,"save-row");var t=document.createElement("span");t.innerHTML="&nbsp;",U.addClass(t,"button gears");var n=document.createElement("span");n.innerHTML="Save",U.addClass(n,"button"),U.addClass(n,"save");var i=document.createElement("span");i.innerHTML="New",U.addClass(i,"button"),U.addClass(i,"save-as");var r=document.createElement("span");r.innerHTML="Revert",U.addClass(r,"button"),U.addClass(r,"revert");var o=s.__preset_select=document.createElement("select");if(s.load&&s.load.remembered?Q.each(s.load.remembered,function(d,f){ua(s,f,f===s.preset)}):ua(s,Gs,!1),U.bind(o,"change",function(){for(var d=0;d<s.__preset_select.length;d++)s.__preset_select[d].innerHTML=s.__preset_select[d].value;s.preset=this.value}),e.appendChild(o),e.appendChild(t),e.appendChild(n),e.appendChild(i),e.appendChild(r),Ts){var a=document.getElementById("dg-local-explain"),l=document.getElementById("dg-local-storage"),u=document.getElementById("dg-save-locally");u.style.display="block",localStorage.getItem(Oi(s,"isLocal"))==="true"&&l.setAttribute("checked","checked"),Jc(s,a),U.bind(l,"change",function(){s.useLocalStorage=!s.useLocalStorage,Jc(s,a)})}var h=document.getElementById("dg-new-constructor");U.bind(h,"keydown",function(d){d.metaKey&&(d.which===67||d.keyCode===67)&&Ps.hide()}),U.bind(t,"click",function(){h.innerHTML=JSON.stringify(s.getSaveObject(),void 0,2),Ps.show(),h.focus(),h.select()}),U.bind(n,"click",function(){s.save()}),U.bind(i,"click",function(){var d=prompt("Enter a new preset name.");d&&s.saveAs(d)}),U.bind(r,"click",function(){s.revert()})}c(hx,"addSaveMenu");function dx(s){var e=void 0;s.__resize_handle=document.createElement("div"),Q.extend(s.__resize_handle.style,{width:"6px",marginLeft:"-3px",height:"200px",cursor:"ew-resize",position:"absolute"});function t(r){return r.preventDefault(),s.width+=e-r.clientX,s.onResize(),e=r.clientX,!1}c(t,"drag");function n(){U.removeClass(s.__closeButton,Ze.CLASS_DRAG),U.unbind(window,"mousemove",t),U.unbind(window,"mouseup",n)}c(n,"dragStop");function i(r){return r.preventDefault(),e=r.clientX,U.addClass(s.__closeButton,Ze.CLASS_DRAG),U.bind(window,"mousemove",t),U.bind(window,"mouseup",n),!1}c(i,"dragStart"),U.bind(s.__resize_handle,"mousedown",i),U.bind(s.__closeButton,"mousedown",i),s.domElement.insertBefore(s.__resize_handle,s.domElement.firstElementChild)}c(dx,"addResizeHandle");function ha(s,e){s.domElement.style.width=e+"px",s.__save_row&&s.autoPlace&&(s.__save_row.style.width=e+"px"),s.__closeButton&&(s.__closeButton.style.width=e+"px")}c(ha,"setWidth");function br(s,e){var t={};return Q.each(s.__rememberedObjects,function(n,i){var r={},o=s.__rememberedObjectIndecesToControllers[i];Q.each(o,function(a,l){r[l]=e?a.initialValue:a.getValue()}),t[i]=r}),t}c(br,"getCurrentPreset");function fx(s){for(var e=0;e<s.__preset_select.length;e++)s.__preset_select[e].value===s.preset&&(s.__preset_select.selectedIndex=e)}c(fx,"setPresetSelectIndex");function qh(s){s.length!==0&&ax.call(window,function(){qh(s)}),Q.each(s,function(e){e.updateDisplay()})}c(qh,"updateDisplays");var px=Ze;class $h{constructor(e){this.globeRadius=e,this.gui=new px}addObjectOptions(e,t,{lat:n,lng:i,rotation:r,landHeight:o},a){const l=this.gui.__folders[e]??this.gui.addFolder(e),u=t.getObject(),h=l.addFolder(u.name+a);h.add(u,"visible"),h.add({scale:u.scale.x},"scale",0,5).onChange(g=>{u.scale.setScalar(g)});const d=u.clone();r&&d.rotateY(-dn.degToRad(r));const f=d.rotation.clone(),m={y:r??0};h.add(m,"y",0,360).name("rotation").onChange(g=>{u.rotation.copy(f),u.rotateY(dn.degToRad(g))});const _={lat:n,lng:i,landHeight:o??0};Object.keys(_).forEach(g=>{h.add(_,g,-360,360,1).onChange(()=>{t.applyLatLng(this.globeRadius+(_.landHeight??0),_.lat,_.lng),f.copy(u.rotation),u.rotateY(dn.degToRad(m.y))})})}}c($h,"ContinentDebugControls");class rs{constructor(e,t=!1){this.properties=e,t&&(this.debugControls=new $h(e.globeRadius)),this.continent=this.constructContinent(),this.continent.name&&this.continent.traverse(n=>{n.userData.continent=this.continent.name})}getObject(){return this.continent}addTo(e){e.add(this.continent)}constructObject(e,t){const{lat:n,lng:i,rotation:r,landHeight:o=be.LevelOne,...a}=t,l=new e({...a});return l.applyLatLng(this.properties.globeRadius+o,n,i),r!==void 0&&l.getObject().rotateY(dn.degToRad(r)),l}constructObjectsGroup(e,t,n){const i=new ot;return i.name=t,n.forEach((r,o)=>{var l;const a=this.constructObject(e,r);i.add(a.getObject()),(l=this.debugControls)==null||l.addObjectOptions(t,a,r,o)}),i}constructLands(e,t){return this.constructObjectsGroup(zh,e,t)}constructTrees(e,t){return this.constructObjectsGroup(Bh,e,t)}constructMountains(e,t){return this.constructObjectsGroup(Uh,e,t)}constructHouses(e,t){return this.constructObjectsGroup(Fh,e,t)}constructBuildings(e,t){return this.constructObjectsGroup(Nh,e,t)}constructHuts(e,t){return this.constructObjectsGroup(kh,e,t)}}c(rs,"BaseContinent");const mx=[{scale:1.5,landHeight:be.LevelTwo,lat:20,lng:100,rotation:10},{scale:1,landHeight:be.LevelOne,lat:40,lng:90,rotation:0}],gx=[{scale:1.2,landHeight:be.LevelOne,lat:18,lng:88},{scale:1.5,landHeight:be.LevelOne,lat:23,lng:88},{scale:2,landHeight:be.LevelOne,lat:21,lng:83},{scale:1.2,landHeight:be.LevelOne,lat:40,lng:110},{scale:1.5,landHeight:be.LevelOne,lat:40,lng:105},{scale:2,landHeight:be.LevelOne,lat:35,lng:110}];let _x=c(class extends rs{constructContinent(){const e=new ot;return e.name="aboutContinent",e.add(this.constructTrees("aboutTrees",gx)),e.add(this.constructHouses("aboutHouses",mx)),e}},"AboutContinent");const vx=[{size:15,lat:53,lng:4,rotation:7,landHeight:be.LevelTwo-.75}],xx=[{scale:1,lat:48,lng:-20,landHeight:be.LevelTwo},{scale:1.2,lat:31,lng:-14,rotation:36,landHeight:be.LevelOne}],yx=[{scale:1,lat:52,lng:-12,landHeight:be.LevelTwo},{scale:1.2,lat:48,lng:-10,landHeight:be.LevelTwo},{scale:1.2,lat:32,lng:-6,landHeight:be.LevelOne},{scale:1.5,lat:36,lng:-6,landHeight:be.LevelOne},{scale:1,lat:33,lng:-2,landHeight:be.LevelOne}],bx=[{lat:40,lng:18,landHeight:be.LevelOne},{lat:35,lng:8,landHeight:be.LevelOne}];let wx=c(class extends rs{constructContinent(){const e=new ot;return e.name="projectsContinent",e.add(this.constructMountains("projectsMountains",vx)),e.add(this.constructHouses("projectsHouses",xx)),e.add(this.constructTrees("projectsTrees",yx)),e.add(this.constructHuts("projectsHuts",bx)),e}},"ProjectsContinent");class Yh extends ss{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Qh(t)}),this.register(function(t){return new od(t)}),this.register(function(t){return new ad(t)}),this.register(function(t){return new td(t)}),this.register(function(t){return new nd(t)}),this.register(function(t){return new id(t)}),this.register(function(t){return new sd(t)}),this.register(function(t){return new Zh(t)}),this.register(function(t){return new rd(t)}),this.register(function(t){return new ed(t)}),this.register(function(t){return new Kh(t)}),this.register(function(t){return new ld(t)}),this.register(function(t){return new cd(t)})}load(e,t,n,i){const r=this;let o;this.resourcePath!==""?o=this.resourcePath:this.path!==""?o=this.path:o=Un.extractUrlBase(e),this.manager.itemStart(e);const a=c(function(u){i?i(u):console.error(u),r.manager.itemError(e),r.manager.itemEnd(e)},"_onError"),l=new qa(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(u){try{r.parse(u,o,function(h){t(h),r.manager.itemEnd(e)},a)}catch(h){a(h)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let r;const o={},a={};if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(Un.decodeText(new Uint8Array(e,0,4))===ud){try{o[Ge.KHR_BINARY_GLTF]=new hd(e)}catch(h){i&&i(h);return}r=JSON.parse(o[Ge.KHR_BINARY_GLTF].content)}else r=JSON.parse(Un.decodeText(new Uint8Array(e)));else r=e;if(r.asset===void 0||r.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const l=new gd(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const h=this.pluginCallbacks[u](l);a[h.name]=h,o[h.name]=!0}if(r.extensionsUsed)for(let u=0;u<r.extensionsUsed.length;++u){const h=r.extensionsUsed[u],d=r.extensionsRequired||[];switch(h){case Ge.KHR_MATERIALS_UNLIT:o[h]=new Jh;break;case Ge.KHR_DRACO_MESH_COMPRESSION:o[h]=new dd(r,this.dracoLoader);break;case Ge.KHR_TEXTURE_TRANSFORM:o[h]=new fd;break;case Ge.KHR_MESH_QUANTIZATION:o[h]=new pd;break;default:d.indexOf(h)>=0&&a[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}l.setExtensions(o),l.setPlugins(a),l.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,r){n.parse(e,t,i,r)})}}c(Yh,"GLTFLoader");function Mx(){let s={};return{get:function(e){return s[e]},add:function(e,t){s[e]=t},remove:function(e){delete s[e]},removeAll:function(){s={}}}}c(Mx,"GLTFRegistry");const Ge={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class Kh{constructor(e){this.parser=e,this.name=Ge.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let u;const h=new Oe(16777215);l.color!==void 0&&h.fromArray(l.color);const d=l.range!==void 0?l.range:0;switch(l.type){case"directional":u=new $a(h),u.target.position.set(0,0,-1),u.add(u.target);break;case"point":u=new _h(h),u.distance=d;break;case"spot":u=new mh(h),u.distance=d,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,u.angle=l.spot.outerConeAngle,u.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,u.target.position.set(0,0,-1),u.add(u.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return u.position.set(0,0,0),u.decay=2,In(u,l),l.intensity!==void 0&&(u.intensity=l.intensity),u.name=t.createUniqueName(l.name||"light_"+e),i=Promise.resolve(u),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,r=n.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return n._getNodeRef(t.cache,a,l)})}}c(Kh,"GLTFLightsExtension");class Jh{constructor(){this.name=Ge.KHR_MATERIALS_UNLIT}getMaterialType(){return Nn}extendParams(e,t,n){const i=[];e.color=new Oe(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const o=r.baseColorFactor;e.color.fromArray(o),e.opacity=o[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",r.baseColorTexture,Xe))}return Promise.all(i)}}c(Jh,"GLTFMaterialsUnlitExtension");class Zh{constructor(e){this.parser=e,this.name=Ge.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}}c(Zh,"GLTFMaterialsEmissiveStrengthExtension");class Qh{constructor(e){this.parser=e,this.name=Ge.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:$n}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new oe(a,a)}return Promise.all(r)}}c(Qh,"GLTFMaterialsClearcoatExtension");class ed{constructor(e){this.parser=e,this.name=Ge.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:$n}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}}c(ed,"GLTFMaterialsIridescenceExtension");class td{constructor(e){this.parser=e,this.name=Ge.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:$n}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[];t.sheenColor=new Oe(0,0,0),t.sheenRoughness=0,t.sheen=1;const o=i.extensions[this.name];return o.sheenColorFactor!==void 0&&t.sheenColor.fromArray(o.sheenColorFactor),o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,Xe)),o.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}}c(td,"GLTFMaterialsSheenExtension");class nd{constructor(e){this.parser=e,this.name=Ge.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:$n}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(r)}}c(nd,"GLTFMaterialsTransmissionExtension");class id{constructor(e){this.parser=e,this.name=Ge.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:$n}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return t.attenuationColor=new Oe(a[0],a[1],a[2]),Promise.all(r)}}c(id,"GLTFMaterialsVolumeExtension");class sd{constructor(e){this.parser=e,this.name=Ge.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:$n}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}c(sd,"GLTFMaterialsIorExtension");class rd{constructor(e){this.parser=e,this.name=Ge.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:$n}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return t.specularColor=new Oe(a[0],a[1],a[2]),o.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,Xe)),Promise.all(r)}}c(rd,"GLTFMaterialsSpecularExtension");class od{constructor(e){this.parser=e,this.name=Ge.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const r=i.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}}c(od,"GLTFTextureBasisUExtension");class ad{constructor(e){this.parser=e,this.name=Ge.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=i.images[o.source];let l=n.textureLoader;if(a.uri){const u=n.options.manager.getHandler(a.uri);u!==null&&(l=u)}return this.detectSupport().then(function(u){if(u)return n.loadTextureImage(e,o.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}c(ad,"GLTFTextureWebPExtension");class ld{constructor(e){this.name=Ge.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){const l=i.byteOffset||0,u=i.byteLength||0,h=i.count,d=i.byteStride,f=new Uint8Array(a,l,u);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(h,d,f,i.mode,i.filter).then(function(m){return m.buffer}):o.ready.then(function(){const m=new ArrayBuffer(h*d);return o.decodeGltfBuffer(new Uint8Array(m),h,d,f,i.mode,i.filter),m})})}else return null}}c(ld,"GLTFMeshoptCompression");class cd{constructor(e){this.name=Ge.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const u of i.primitives)if(u.mode!==jt.TRIANGLES&&u.mode!==jt.TRIANGLE_STRIP&&u.mode!==jt.TRIANGLE_FAN&&u.mode!==void 0)return null;const o=n.extensions[this.name].attributes,a=[],l={};for(const u in o)a.push(this.parser.getDependency("accessor",o[u]).then(h=>(l[u]=h,l[u])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(u=>{const h=u.pop(),d=h.isGroup?h.children:[h],f=u[0].count,m=[];for(const _ of d){const g=new Ne,p=new A,v=new bt,S=new A(1,1,1),y=new Wu(_.geometry,_.material,f);for(let b=0;b<f;b++)l.TRANSLATION&&p.fromBufferAttribute(l.TRANSLATION,b),l.ROTATION&&v.fromBufferAttribute(l.ROTATION,b),l.SCALE&&S.fromBufferAttribute(l.SCALE,b),y.setMatrixAt(b,g.compose(p,v,S));for(const b in l)b!=="TRANSLATION"&&b!=="ROTATION"&&b!=="SCALE"&&_.geometry.setAttribute(b,l[b]);Qe.prototype.copy.call(y,_),y.frustumCulled=!1,this.parser.assignFinalMaterial(y),m.push(y)}return h.isGroup?(h.clear(),h.add(...m),h):m[0]}))}}c(cd,"GLTFMeshGpuInstancing");const ud="glTF",xs=12,Zc={JSON:1313821514,BIN:5130562};class hd{constructor(e){this.name=Ge.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,xs);if(this.header={magic:Un.decodeText(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==ud)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const n=this.header.length-xs,i=new DataView(e,xs);let r=0;for(;r<n;){const o=i.getUint32(r,!0);r+=4;const a=i.getUint32(r,!0);if(r+=4,a===Zc.JSON){const l=new Uint8Array(e,xs+r,o);this.content=Un.decodeText(l)}else if(a===Zc.BIN){const l=xs+r;this.body=e.slice(l,l+o)}r+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}c(hd,"GLTFBinaryExtension");class dd{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Ge.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},u={};for(const h in o){const d=da[h]||h.toLowerCase();a[d]=o[h]}for(const h in e.attributes){const d=da[h]||h.toLowerCase();if(o[h]!==void 0){const f=n.accessors[e.attributes[h]],m=Hi[f.componentType];u[d]=m.name,l[d]=f.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(d){i.decodeDracoFile(h,function(f){for(const m in f.attributes){const _=f.attributes[m],g=l[m];g!==void 0&&(_.normalized=g)}d(f)},a,u)})})}}c(dd,"GLTFDracoMeshCompressionExtension");class fd{constructor(){this.name=Ge.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return t.texCoord!==void 0&&console.warn('THREE.GLTFLoader: Custom UV sets in "'+this.name+'" extension not yet supported.'),t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}c(fd,"GLTFTextureTransformExtension");class pd{constructor(){this.name=Ge.KHR_MESH_QUANTIZATION}}c(pd,"GLTFMeshQuantizationExtension");class el extends is{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i*3+i;for(let o=0;o!==i;o++)t[o]=n[r+o];return t}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,u=a*3,h=i-t,d=(n-t)/h,f=d*d,m=f*d,_=e*u,g=_-u,p=-2*m+3*f,v=m-f,S=1-p,y=v-f+d;for(let b=0;b!==a;b++){const M=o[g+b+a],P=o[g+b+l]*h,O=o[_+b+a],x=o[_+b]*h;r[b]=S*M+y*P+p*O+v*x}return r}}c(el,"GLTFCubicSplineInterpolant");const Sx=new bt;class md extends el{interpolate_(e,t,n,i){const r=super.interpolate_(e,t,n,i);return Sx.fromArray(r).normalize().toArray(r),r}}c(md,"GLTFCubicSplineQuaternionInterpolant");const jt={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Hi={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Qc={9728:yt,9729:Ft,9984:qo,9985:fu,9986:wr,9987:ui},eu={33071:Xt,33648:Ar,10497:Xi},Bo={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},da={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv2",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Pn={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},Tx={CUBICSPLINE:void 0,LINEAR:$i,STEP:Fs},Ho={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function Ex(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new Jr({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Bn})),s.DefaultMaterial}c(Ex,"createDefaultMaterial");function ys(s,e,t){for(const n in t.extensions)s[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}c(ys,"addUnknownExtensionsToUserData");function In(s,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(s.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}c(In,"assignExtrasToUserData");function Ax(s,e,t){let n=!1,i=!1,r=!1;for(let u=0,h=e.length;u<h;u++){const d=e[u];if(d.POSITION!==void 0&&(n=!0),d.NORMAL!==void 0&&(i=!0),d.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(s);const o=[],a=[],l=[];for(let u=0,h=e.length;u<h;u++){const d=e[u];if(n){const f=d.POSITION!==void 0?t.getDependency("accessor",d.POSITION):s.attributes.position;o.push(f)}if(i){const f=d.NORMAL!==void 0?t.getDependency("accessor",d.NORMAL):s.attributes.normal;a.push(f)}if(r){const f=d.COLOR_0!==void 0?t.getDependency("accessor",d.COLOR_0):s.attributes.color;l.push(f)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(u){const h=u[0],d=u[1],f=u[2];return n&&(s.morphAttributes.position=h),i&&(s.morphAttributes.normal=d),r&&(s.morphAttributes.color=f),s.morphTargetsRelative=!0,s})}c(Ax,"addMorphTargets");function Cx(s,e){if(s.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)s.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(s.morphTargetInfluences.length===t.length){s.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)s.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}c(Cx,"updateMorphTargets");function Lx(s){const e=s.extensions&&s.extensions[Ge.KHR_DRACO_MESH_COMPRESSION];let t;return e?t="draco:"+e.bufferView+":"+e.indices+":"+tu(e.attributes):t=s.indices+":"+tu(s.attributes)+":"+s.mode,t}c(Lx,"createPrimitiveKey");function tu(s){let e="";const t=Object.keys(s).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+s[t[n]]+";";return e}c(tu,"createAttributesKey");function fa(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}c(fa,"getNormalizedComponentScale");function Rx(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}c(Rx,"getImageURIMimeType");const Px=new Ne;class gd{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new Mx,this.associations=new Map,this.primitiveCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=!1,r=-1;typeof navigator<"u"&&(n=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,i=navigator.userAgent.indexOf("Firefox")>-1,r=i?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap>"u"||n||i&&r<98?this.textureLoader=new fh(this.options.manager):this.textureLoader=new yh(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new qa(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){const a={scene:o[0][i.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:i.asset,parser:n,userData:{}};ys(r,a,i),In(a,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=t.length;i<r;i++){const o=t[i].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let i=0,r=e.length;i<r;i++){const o=e[i];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),r=c((o,a)=>{const l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(const[u,h]of o.children.entries())r(h,a.children[u])},"updateMappings");return r(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const r=e(t[i]);r&&n.push(r)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(r,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Ge.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(r,o){n.load(Un.resolveURL(t.uri,i.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const o=Bo[i.type],a=Hi[i.componentType],l=i.normalized===!0,u=new a(i.count*o);return Promise.resolve(new Ct(u,o,l))}const r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(o){const a=o[0],l=Bo[i.type],u=Hi[i.componentType],h=u.BYTES_PER_ELEMENT,d=h*l,f=i.byteOffset||0,m=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,_=i.normalized===!0;let g,p;if(m&&m!==d){const v=Math.floor(f/m),S="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+v+":"+i.count;let y=t.cache.get(S);y||(g=new u(a,v*m,i.count*m/h),y=new Hu(g,m/h),t.cache.add(S,y)),p=new Vr(y,l,f%m/h,_)}else a===null?g=new u(i.count*l):g=new u(a,f,i.count*l),p=new Ct(g,l,_);if(i.sparse!==void 0){const v=Bo.SCALAR,S=Hi[i.sparse.indices.componentType],y=i.sparse.indices.byteOffset||0,b=i.sparse.values.byteOffset||0,M=new S(o[1],y,i.sparse.count*v),P=new u(o[2],b,i.sparse.count*l);a!==null&&(p=new Ct(p.array.slice(),p.itemSize,p.normalized));for(let O=0,x=M.length;O<x;O++){const L=M[O];if(p.setX(L,P[O*l]),l>=2&&p.setY(L,P[O*l+1]),l>=3&&p.setZ(L,P[O*l+2]),l>=4&&p.setW(L,P[O*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return p})}loadTexture(e){const t=this.json,n=this.options,r=t.textures[e].source,o=t.images[r];let a=this.textureLoader;if(o.uri){const l=n.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){const i=this,r=this.json,o=r.textures[e],a=r.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];const u=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=o.name||a.name||"";const f=(r.samplers||{})[o.sampler]||{};return h.magFilter=Qc[f.magFilter]||Ft,h.minFilter=Qc[f.minFilter]||ui,h.wrapS=eu[f.wrapS]||Xi,h.wrapT=eu[f.wrapT]||Xi,i.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[l]=u,u}loadImageSource(e,t){const n=this,i=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(d=>d.clone());const o=i.images[e],a=self.URL||self.webkitURL;let l=o.uri||"",u=!1;if(o.bufferView!==void 0)l=n.getDependency("bufferView",o.bufferView).then(function(d){u=!0;const f=new Blob([d],{type:o.mimeType});return l=a.createObjectURL(f),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const h=Promise.resolve(l).then(function(d){return new Promise(function(f,m){let _=f;t.isImageBitmapLoader===!0&&(_=c(function(g){const p=new ht(g);p.needsUpdate=!0,f(p)},"onLoad")),t.load(Un.resolveURL(d,r.path),_,void 0,m)})}).then(function(d){return u===!0&&a.revokeObjectURL(l),d.userData.mimeType=o.mimeType||Rx(o.uri),d}).catch(function(d){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),d});return this.sourceCache[e]=h,h}assignTexture(e,t,n,i){const r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord!=0&&!(t==="aoMap"&&n.texCoord==1)&&console.warn("THREE.GLTFLoader: Custom UV set "+n.texCoord+" for texture "+t+" not yet supported."),r.extensions[Ge.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[Ge.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const l=r.associations.get(o);o=r.extensions[Ge.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,l)}}return i!==void 0&&(o.encoding=i),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new jr,Kt.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(a,l)),n=l}else if(e.isLine){const a="LineBasicMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new Ua,Kt.prototype.copy.call(l,n),l.color.copy(n.color),this.cache.add(a,l)),n=l}if(i||r||o){let a="ClonedMaterial:"+n.uuid+":";i&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=n.clone(),r&&(l.vertexColors=!0),o&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(n))),n=l}n.aoMap&&t.attributes.uv2===void 0&&t.attributes.uv!==void 0&&t.setAttribute("uv2",t.attributes.uv),e.material=n}getMaterialType(){return Jr}loadMaterial(e){const t=this,n=this.json,i=this.extensions,r=n.materials[e];let o;const a={},l=r.extensions||{},u=[];if(l[Ge.KHR_MATERIALS_UNLIT]){const d=i[Ge.KHR_MATERIALS_UNLIT];o=d.getMaterialType(),u.push(d.extendParams(a,r,t))}else{const d=r.pbrMetallicRoughness||{};if(a.color=new Oe(1,1,1),a.opacity=1,Array.isArray(d.baseColorFactor)){const f=d.baseColorFactor;a.color.fromArray(f),a.opacity=f[3]}d.baseColorTexture!==void 0&&u.push(t.assignTexture(a,"map",d.baseColorTexture,Xe)),a.metalness=d.metallicFactor!==void 0?d.metallicFactor:1,a.roughness=d.roughnessFactor!==void 0?d.roughnessFactor:1,d.metallicRoughnessTexture!==void 0&&(u.push(t.assignTexture(a,"metalnessMap",d.metallicRoughnessTexture)),u.push(t.assignTexture(a,"roughnessMap",d.metallicRoughnessTexture))),o=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),u.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=Ws);const h=r.alphaMode||Ho.OPAQUE;if(h===Ho.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,h===Ho.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==Nn&&(u.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new oe(1,1),r.normalTexture.scale!==void 0)){const d=r.normalTexture.scale;a.normalScale.set(d,d)}return r.occlusionTexture!==void 0&&o!==Nn&&(u.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==Nn&&(a.emissive=new Oe().fromArray(r.emissiveFactor)),r.emissiveTexture!==void 0&&o!==Nn&&u.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,Xe)),Promise.all(u).then(function(){const d=new o(a);return r.name&&(d.name=r.name),In(d,r),t.associations.set(d,{materials:e}),r.extensions&&ys(i,d,r),d})}createUniqueName(e){const t=$e.sanitizeNodeName(e||"");let n=t;for(let i=1;this.nodeNamesUsed[n];++i)n=t+"_"+i;return this.nodeNamesUsed[n]=!0,n}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function r(a){return n[Ge.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return nu(l,a,t)})}c(r,"createDracoPrimitive");const o=[];for(let a=0,l=e.length;a<l;a++){const u=e[a],h=Lx(u),d=i[h];if(d)o.push(d.promise);else{let f;u.extensions&&u.extensions[Ge.KHR_DRACO_MESH_COMPRESSION]?f=r(u):f=nu(new Nt,u,t),i[h]={primitive:u,promise:f},o.push(f)}}return Promise.all(o)}loadMesh(e){const t=this,n=this.json,i=this.extensions,r=n.meshes[e],o=r.primitives,a=[];for(let l=0,u=o.length;l<u;l++){const h=o[l].material===void 0?Ex(this.cache):this.getDependency("material",o[l].material);a.push(h)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(l){const u=l.slice(0,l.length-1),h=l[l.length-1],d=[];for(let m=0,_=h.length;m<_;m++){const g=h[m],p=o[m];let v;const S=u[m];if(p.mode===jt.TRIANGLES||p.mode===jt.TRIANGLE_STRIP||p.mode===jt.TRIANGLE_FAN||p.mode===void 0)v=r.isSkinnedMesh===!0?new Vu(g,S):new st(g,S),v.isSkinnedMesh===!0&&!v.geometry.attributes.skinWeight.normalized&&v.normalizeSkinWeights(),p.mode===jt.TRIANGLE_STRIP?v.geometry=iu(v.geometry,Zf):p.mode===jt.TRIANGLE_FAN&&(v.geometry=iu(v.geometry,mu));else if(p.mode===jt.LINES)v=new ju(g,S);else if(p.mode===jt.LINE_STRIP)v=new Wr(g,S);else if(p.mode===jt.LINE_LOOP)v=new Xu(g,S);else if(p.mode===jt.POINTS)v=new Ba(g,S);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+p.mode);Object.keys(v.geometry.morphAttributes).length>0&&Cx(v,r),v.name=t.createUniqueName(r.name||"mesh_"+e),In(v,r),p.extensions&&ys(i,v,p),t.assignFinalMaterial(v),d.push(v)}for(let m=0,_=d.length;m<_;m++)t.associations.set(d[m],{meshes:e,primitives:m});if(d.length===1)return d[0];const f=new ot;t.associations.set(f,{meshes:e});for(let m=0,_=d.length;m<_;m++)f.add(d[m]);return f})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new At(dn.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new Br(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),In(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,r=t.joints.length;i<r;i++)n.push(this.getDependency("node",t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const r=i.pop(),o=i,a=[],l=[];for(let u=0,h=o.length;u<h;u++){const d=o[u];if(d){a.push(d);const f=new Ne;r!==null&&f.fromArray(r.array,u*16),l.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[u])}return new Gr(a,l)})}loadAnimation(e){const n=this.json.animations[e],i=[],r=[],o=[],a=[],l=[];for(let u=0,h=n.channels.length;u<h;u++){const d=n.channels[u],f=n.samplers[d.sampler],m=d.target,_=m.node,g=n.parameters!==void 0?n.parameters[f.input]:f.input,p=n.parameters!==void 0?n.parameters[f.output]:f.output;i.push(this.getDependency("node",_)),r.push(this.getDependency("accessor",g)),o.push(this.getDependency("accessor",p)),a.push(f),l.push(m)}return Promise.all([Promise.all(i),Promise.all(r),Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(u){const h=u[0],d=u[1],f=u[2],m=u[3],_=u[4],g=[];for(let v=0,S=h.length;v<S;v++){const y=h[v],b=d[v],M=f[v],P=m[v],O=_[v];if(y===void 0)continue;y.updateMatrix();let x;switch(Pn[O.path]){case Pn.weights:x=Ki;break;case Pn.rotation:x=Gn;break;case Pn.position:case Pn.scale:default:x=Ji;break}const L=y.name?y.name:y.uuid,N=P.interpolation!==void 0?Tx[P.interpolation]:$i,C=[];Pn[O.path]===Pn.weights?y.traverse(function(R){R.morphTargetInfluences&&C.push(R.name?R.name:R.uuid)}):C.push(L);let B=M.array;if(M.normalized){const R=fa(B.constructor),D=new Float32Array(B.length);for(let k=0,G=B.length;k<G;k++)D[k]=B[k]*R;B=D}for(let R=0,D=C.length;R<D;R++){const k=new x(C[R]+"."+Pn[O.path],b.array,B,N);P.interpolation==="CUBICSPLINE"&&(k.createInterpolant=c(function(ee){const W=this instanceof Gn?md:el;return new W(this.times,this.values,this.getValueSize()/3,ee)},"InterpolantFactoryMethodGLTFCubicSpline"),k.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0),g.push(k)}}const p=n.name?n.name:"animation_"+e;return new ch(p,void 0,g)})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){const o=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&o.traverse(function(a){if(!!a.isMesh)for(let l=0,u=i.weights.length;l<u;l++)a.morphTargetInfluences[l]=i.weights[l]}),o})}loadNode(e){const t=this.json,n=this.extensions,i=this,r=t.nodes[e],o=r.name?i.createUniqueName(r.name):"";return function(){const a=[],l=i._invokeOne(function(f){return f.createNodeMesh&&f.createNodeMesh(e)});l&&a.push(l),r.camera!==void 0&&a.push(i.getDependency("camera",r.camera).then(function(f){return i._getNodeRef(i.cameraCache,r.camera,f)})),i._invokeAll(function(f){return f.createNodeAttachment&&f.createNodeAttachment(e)}).forEach(function(f){a.push(f)});const u=[],h=r.children||[];for(let f=0,m=h.length;f<m;f++)u.push(i.getDependency("node",h[f]));const d=r.skin===void 0?Promise.resolve(null):i.getDependency("skin",r.skin);return Promise.all([Promise.all(a),Promise.all(u),d])}().then(function(a){const l=a[0],u=a[1],h=a[2];let d;if(r.isBone===!0?d=new za:l.length>1?d=new ot:l.length===1?d=l[0]:d=new Qe,d!==l[0])for(let f=0,m=l.length;f<m;f++)d.add(l[f]);if(r.name&&(d.userData.name=r.name,d.name=o),In(d,r),r.extensions&&ys(n,d,r),r.matrix!==void 0){const f=new Ne;f.fromArray(r.matrix),d.applyMatrix4(f)}else r.translation!==void 0&&d.position.fromArray(r.translation),r.rotation!==void 0&&d.quaternion.fromArray(r.rotation),r.scale!==void 0&&d.scale.fromArray(r.scale);i.associations.has(d)||i.associations.set(d,{}),i.associations.get(d).nodes=e,h!==null&&d.traverse(function(f){!f.isSkinnedMesh||f.bind(h,Px)});for(let f=0,m=u.length;f<m;f++)d.add(u[f]);return d})}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,r=new ot;n.name&&(r.name=i.createUniqueName(n.name)),In(r,n),n.extensions&&ys(t,r,n);const o=n.nodes||[],a=[];for(let l=0,u=o.length;l<u;l++)a.push(i.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let h=0,d=l.length;h<d;h++)r.add(l[h]);const u=c(h=>{const d=new Map;for(const[f,m]of i.associations)(f instanceof Kt||f instanceof ht)&&d.set(f,m);return h.traverse(f=>{const m=i.associations.get(f);m!=null&&d.set(f,m)}),d},"reduceAssociations");return i.associations=u(r),r})}}c(gd,"GLTFParser");function Dx(s,e,t){const n=e.attributes,i=new Xn;if(n.POSITION!==void 0){const a=t.json.accessors[n.POSITION],l=a.min,u=a.max;if(l!==void 0&&u!==void 0){if(i.set(new A(l[0],l[1],l[2]),new A(u[0],u[1],u[2])),a.normalized){const h=fa(Hi[a.componentType]);i.min.multiplyScalar(h),i.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const a=new A,l=new A;for(let u=0,h=r.length;u<h;u++){const d=r[u];if(d.POSITION!==void 0){const f=t.json.accessors[d.POSITION],m=f.min,_=f.max;if(m!==void 0&&_!==void 0){if(l.setX(Math.max(Math.abs(m[0]),Math.abs(_[0]))),l.setY(Math.max(Math.abs(m[1]),Math.abs(_[1]))),l.setZ(Math.max(Math.abs(m[2]),Math.abs(_[2]))),f.normalized){const g=fa(Hi[f.componentType]);l.multiplyScalar(g)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(a)}s.boundingBox=i;const o=new qn;i.getCenter(o.center),o.radius=i.min.distanceTo(i.max)/2,s.boundingSphere=o}c(Dx,"computeBounds");function nu(s,e,t){const n=e.attributes,i=[];function r(o,a){return t.getDependency("accessor",o).then(function(l){s.setAttribute(a,l)})}c(r,"assignAttributeAccessor");for(const o in n){const a=da[o]||o.toLowerCase();a in s.attributes||i.push(r(n[o],a))}if(e.indices!==void 0&&!s.index){const o=t.getDependency("accessor",e.indices).then(function(a){s.setIndex(a)});i.push(o)}return In(s,e),Dx(s,e,t),Promise.all(i).then(function(){return e.targets!==void 0?Ax(s,e.targets,t):s})}c(nu,"addPrimitiveAttributes");function iu(s,e){let t=s.getIndex();if(t===null){const o=[],a=s.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);s.setIndex(o),t=s.getIndex()}else return console.error("THREE.GLTFLoader.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}const n=t.count-2,i=[];if(e===mu)for(let o=1;o<=n;o++)i.push(t.getX(0)),i.push(t.getX(o)),i.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(i.push(t.getX(o)),i.push(t.getX(o+1)),i.push(t.getX(o+2))):(i.push(t.getX(o+2)),i.push(t.getX(o+1)),i.push(t.getX(o)));i.length/3!==n&&console.error("THREE.GLTFLoader.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=s.clone();return r.setIndex(i),r}c(iu,"toTrianglesDrawMode");class Fn{constructor(){return this.prefix="LOGGER:",Fn.instance===void 0&&(Fn.instance=this),Fn.instance}static getInstance(){return new Fn}logInfo(e,...t){console.info(this.prefix,"[INFO]",e,...t)}logWarning(e,...t){console.warn(this.prefix,"[WARN]",e,...t)}logError(e,...t){console.error(this.prefix,"[ERROR]",e,...t)}}c(Fn,"Logger");class Vi{constructor(){return this.loader=new Yh,Vi.instance==null&&(Vi.instance=this),Vi.instance}async loadFile(e){try{return(await this.loader.loadAsync(e)).scene}catch(t){throw Fn.getInstance().logError("Failed to load glTF file",e,`
`,t),t}}}c(Vi,"GltfLoader");const Ix=[{lat:33,lng:-77,rotation:30,landHeight:be.LevelOne},{scale:1.5,lat:30,lng:-72,landHeight:be.LevelOne},{scale:1.2,lat:26,lng:-68,landHeight:be.LevelOne},{lat:26,lng:-73,rotation:60,landHeight:be.LevelOne},{scale:.8,lat:31,lng:-67,landHeight:be.LevelOne},{scale:1,lat:12,lng:-79,landHeight:be.LevelTwo},{scale:1.2,lat:13,lng:-83,landHeight:be.LevelTwo}],Ox=[{lat:21,lng:-83,rotation:65,landHeight:be.LevelTwo,floors:2},{lat:16,lng:-73,rotation:65,landHeight:be.LevelTwo}],Nx=[{scale:.7,lat:-1,lng:-78,landHeight:be.LevelOne},{lat:1,lng:-84,landHeight:be.LevelOne},{lat:7,lng:-94,landHeight:be.LevelOne}];let Fx=c(class extends rs{constructContinent(){const e=new ot;return e.name="workContinent",e.add(this.constructTrees("workTrees",Ix)),e.add(this.constructBuildings("workBuildings",Ox)),e.add(this.constructHuts("workHuts",Nx)),e}},"WorkContinent");const kx=[{scale:1.1,size:20,lat:-29,lng:-142,rotation:70,height:15,landHeight:be.LevelOne-2}],zx=[{scale:1.2,lat:-11,lng:-158,landHeight:be.LevelOne},{lat:-16,lng:-158,landHeight:be.LevelOne},{scale:1.3,lat:-21,lng:-172,rotation:10,landHeight:be.LevelTwo},{scale:1.1,lat:-23,lng:-168,rotation:60,landHeight:be.LevelTwo},{lat:-21,lng:-177,rotation:30,landHeight:be.LevelTwo},{scale:1.2,lat:-25,lng:-174,landHeight:be.LevelTwo},{scale:1.5,lat:-50,lng:-142,landHeight:be.LevelOne},{scale:1.2,lat:-46,lng:-137,rotation:60,landHeight:be.LevelOne},{lat:-45,lng:-144,rotation:15,landHeight:be.LevelOne}],Ux=[{lat:-16,lng:-153,rotation:20,landHeight:be.LevelOne},{scale:.8,lat:-14,lng:-163,rotation:45,landHeight:be.LevelOne}],Bx=[{scale:1,lat:-37,lng:-164,rotation:30,landHeight:be.LevelTwo},{scale:.7,lat:-30,lng:-168,rotation:30,landHeight:be.LevelTwo}];let Hx=c(class extends rs{constructContinent(){const e=new ot;return e.name="lifeContinent",e.add(this.constructMountains("lifeMountains",kx)),e.add(this.constructTrees("lifeTrees",zx)),e.add(this.constructHouses("lifeHouses",Ux)),e.add(this.constructBuildings("lifeBuildings",Bx)),e}},"LifeContinent");const Vx=[{scale:1.2,lat:222,lng:-157,landHeight:be.LevelTwo},{lat:225,lng:-159,landHeight:be.LevelTwo},{scale:1.3,lat:-126,lng:-132,landHeight:be.LevelOne},{lat:-128,lng:-165,landHeight:be.LevelOne},{scale:.9,lat:-125,lng:-161,rotation:45,landHeight:be.LevelOne}],Gx=[{scale:1,lat:-140,lng:-167,rotation:120,landHeight:be.LevelTwo}],Wx=[{scale:1,lat:-133,lng:-147,rotation:70,landHeight:be.LevelTwo,floors:2}],jx=[{lat:-50,lng:-5,landHeight:be.LevelOne}];let Xx=c(class extends rs{constructContinent(){const e=new ot;return e.name="connectContinent",e.add(this.constructTrees("connectTrees",Vx)),e.add(this.constructHouses("connectHouses",Gx)),e.add(this.constructBuildings("connectBuildings",Wx)),e.add(this.constructHuts("connectHuts",jx)),e}},"ConnectContinent");class _d extends mn{constructObject(){const{starsCount:e,endRadius:t=3e3}=this.properties,n=4,i=new ot;i.name="galaxy";for(let r=0;r<n;r++){const o=this.constructStarsGroup(e/n,t);i.add(o)}return i}constructStarsGroup(e,t){const n=new Nt;n.setAttribute("position",this.constructStarsPositions(e,t));const i=new jr({color:zt.star,size:7,map:this.createStarTexture(),transparent:!0,depthWrite:!1}),r=new Ba(n,i);return r.name="stars",r}constructStarsPositions(e,t=3e3){const n=(this.properties.startRadius??700)+50,i=[];for(let r=0;r<e;r++){const o=new A;o.randomDirection(),o.multiplyScalar(dn.randFloat(n,t/2)),i.push(o.x,o.y,o.z)}return new dt(i,3)}createStarTexture(){const t=document.createElement("canvas");t.width=t.height=128;const n=t.getContext("2d"),i=128/2;n.beginPath(),n.arc(i,i,128/2,0,2*Math.PI,!1),n.closePath(),n.fillStyle="#ffffff",n.fill();const r=new ht(t);return r.needsUpdate=!0,r}animateGalaxy(){const e=this.object.children,t=.02,n=1e3,i=c((r,o=1)=>{const a=new Tr(r.rotation);a.to({y:r.rotation.y+t*o}),a.duration(n),a.start(),a.onComplete(()=>i(r,o))},"animateStarsGroup");for(let r=0;r<e.length;r++)i(e[r],r%2===0?1:-1)}}c(_d,"Galaxy");const su=c((s,e=.1,t=document.body,n=.06)=>{let i;const r=new oe,o=c(()=>{const{x:a,y:l}=s.position,{x:u,y:h}=r,d=ou(a,u),f=ou(l,h);if(d&&f){cancelAnimationFrame(i);return}s.position.x=ru(a,u,n),s.position.y=ru(l,h,n),i=requestAnimationFrame(o)},"animate");t.addEventListener("mousemove",a=>{cancelAnimationFrame(i);const l=t.clientWidth/2,u=t.clientHeight/2;r.x=-(a.clientX-l)*e,r.y=(a.clientY-u)*e,i=requestAnimationFrame(o)})},"enableParallax"),ru=c((s,e,t)=>(1-t)*s+t*e,"linearlyInterpolate"),ou=c((s,e,t=1e-4)=>Math.abs(e-s)<t,"areNearlyEqual"),vd=c(()=>window.innerHeight>window.innerWidth,"isScreenPortrait"),qx={cameraDistanceUpContinent:100,cameraDistanceToContinent:300,cameraRotation:0,cameraLeftSpace:0,cameraTopSpace:65},$x={cameraDistanceUpContinent:100,cameraDistanceToContinent:150,cameraRotation:30,cameraLeftSpace:50,cameraTopSpace:0};class xd{constructor(e,t,n){var i;this.three=e,this.sun=n,this.cameraAnimationOptions={duration:2e3,easing:ci.Cubic.Out},this.onContinentClickCallbacks=[],this.continentObject=t.getObject(),this.continentShadowRoot=(i=document.querySelector(`mp-${Or(this.continentObject.name)}`))==null?void 0:i.shadowRoot}setupEventHandlers(){this.setupContinentClick(),this.setupContinentMouseOver()}setupContinentClick(){this.three.getSelector().onClick(this.continentObject,()=>{this.onContinentClickCallbacks.forEach(e=>e())})}setupContinentMouseOver(){const e=this.three.getSelector(),t=this.three.getEventHandler(),n=c(()=>this.updateContinentPinPosition(),"updateContinentPinPosition");e.onMouseOver(this.continentObject,()=>{n(),this.onContinentMouseOver(),t.onObjectMove(this.continentObject,n)}),e.onMouseOut(this.continentObject,()=>{this.onContinentMouseOut(),t.removeObjectMoveListener(this.continentObject,n)})}onContinentClick(e){this.onContinentClickCallbacks.push(e)}openContinent(){this.handleContinentClick()}handleContinentClick(){if(this.isContinentInfoOpen()||this.isAnyContinentInfoOpening())return;const e=ra(this.continentObject),t=new A(0,0,0),n=Bc(t,e),i=this.three.getControls();i.getSpinControls().trackballRadius=50,i.setRotationAxis(n);const r=this.getContinentCameraTransform(n,e),o=this.three.getControls().getCamera(),a=this.three.getAnimator();[o,this.sun].forEach(l=>{a.animateObjectToTarget(l,r.position,r.quaternion,this.cameraAnimationOptions)}),this.openContinentInfo(this.cameraAnimationOptions.duration/2)}openContinentInfo(e){var n;(n=document.querySelector("mp-continents > *[open]"))==null||n.removeAttribute("open");const t=this.continentShadowRoot.host;t==null||t.setAttribute("opening",""),setTimeout(()=>{t==null||t.setAttribute("open",""),t==null||t.removeAttribute("opening")},e)}isContinentInfoOpen(){return this.getContinentInfo().hasAttribute("open")??!1}isAnyContinentInfoOpening(){return!!document.querySelector("mp-continents > *[opening]")}getContinentCameraTransform(e,t){const{cameraDistanceUpContinent:n,cameraDistanceToContinent:i,cameraRotation:r,cameraLeftSpace:o,cameraTopSpace:a}=vd()?qx:$x,l=new Qe;l.lookAt(e),l.position.copy(t),l.translateZ(n).translateX(i),l.lookAt(t);const u=W0(l),h=new A().copy(e).applyAxisAngle(u,dn.degToRad(r)),d=new bt().setFromRotationMatrix(new Ne().lookAt(l.position,t,h));return l.quaternion.copy(d),l.translateX(-o),l.translateY(a),{position:l.position,quaternion:l.quaternion}}onContinentMouseOver(){if(this.isContinentInfoOpen()||this.isAnyContinentInfoOpening())return;const e=this.three.getRenderer().getCanvas(),t=this.getContinentPinElement();e.classList.add("has-pointer"),t.setAttribute("mouseover","")}onContinentMouseOut(){const e=this.getContinentPinElement(),t=this.three.getRenderer().getCanvas();e.removeAttribute("mouseover"),t.classList.remove("has-pointer")}updateContinentPinPosition(){const t=this.three.getRenderer().getCanvas(),n=this.three.getControls().getCamera(),i=ra(this.continentObject),r=new A(0,0,0),o=Bc(r,i);i.add(o.clone().multiplyScalar(-5));const a=j0(i,n,t),{x:l,y:u}=a;this.getContinentPinElement().style.setProperty("transform",`translate(-50%, -50%) translate(${l}px, ${u}px)`)}getContinentPinElement(){return this.continentShadowRoot.querySelector("mp-continent-pin")}getContinentInfo(){return this.continentShadowRoot.querySelector("mp-continent-info")}}c(xd,"ContinentInteractor");const Yx=new A(0,0,400),Kx=new A(0,0,800),Jx="https://fawadali.dev/my-planet/assets/geometries/continents.gltf";let yd=c(class{constructor(e){this.onLoadCallbacks=[],this.continents={},this.cameraAnimationOptions={duration:2e3,easing:ci.Cubic.Out},this.three=new Dh(e),this.setupDefaultCameraConfig(),this.initializePlanet().then(()=>{this.onLoadCallbacks.forEach(t=>t(this))})}static build(e){return new yd(e)}async initializePlanet(){const e=this.three.getSelector(),t=this.three.getControls().getCamera(),n=this.three.getScene(),i=new Oh({size:10});i.setPosition(t.position),i.addTo(n),this.sun=i;const r=new ot;su(r,.0075),r.name="planet",n.add(r);const o=new Ih({size:100});o.addTo(r);const a=o.getRadius();e.intersectButIgnoreObject(o.getObject()),this.three.getControls().setSpinControlsObject(r,a);const l=t.position.z,u=t.far,h=new _d({starsCount:1e3,startRadius:l,endRadius:u});h.animateGalaxy(),su(h.getObject(),.075),h.addTo(n);const d=await this.loadContinentsLand();[new _x({globeRadius:a}),new wx({globeRadius:a}),new Fx({globeRadius:a}),new Hx({globeRadius:a}),new Xx({globeRadius:a})].forEach(m=>{const _=m.getObject(),g=d[_.name];g.name=g.name+"Land",_.add(g),m.addTo(r);const p=new xd(this.three,m,this.sun.getObject());p.setupEventHandlers(),this.continents[_.name]={continent:m,continentInteractor:p}})}resetControls(){const e=this.three.getControls(),t=this.three.getAnimator(),n=e.getDefaultCameraState();e.resetSpinControls(),[e.getCamera(),this.sun.getObject()].forEach(i=>{t.animateObjectToTarget(i,n.position,n.quaternion,this.cameraAnimationOptions)})}setupDefaultCameraConfig(){const e=this.three.getControls().getCamera(),t=this.three.getControls().getDefaultCameraState(),n=this.getCameraConfigForScreen();e.position.copy(n),t.position.copy(n),window.addEventListener("resize",()=>{t.position.copy(this.getCameraConfigForScreen())})}onLoad(e){this.onLoadCallbacks.push(e)}getScene(){return this.three.getScene()}getAnimator(){return this.three.getAnimator()}getContinents(){return this.continents}async loadContinentsLand(){const t=await new Vi().loadFile(Jx),n={};for(const i of t.children)n[i.name]=i;return n}getCameraConfigForScreen(){return vd()?Kx:Yx}},"Planet");class kn{constructor(){return this.historyStack=[],this.routeHandlers={},kn.instance===void 0&&(kn.instance=this),kn.instance}static getInstance(){return new kn}initialize(){this.setupDOMEvents()}setupDOMEvents(){var t,n;const e=this.getRouteFromHash();document.readyState==="complete"?(n=(t=this.routeHandlers)[e])==null||n.call(t):window.addEventListener("load",this.routeHandlers[e]),window.addEventListener("hashchange",()=>{this.resolveRouteHandler(this.getRouteFromHash())()})}addRoute(e,t){this.routeHandlers[e]=t}to(e){window.history.pushState(null,"",this.prependBaseURL(e)),this.resolveRouteHandler(e)(),this.historyStack.push(e)}replace(e){window.history.replaceState(null,"",this.prependBaseURL(e)),this.resolveRouteHandler(e)(),this.historyStack[this.historyStack.length-1]=e}back(){window.history.back(),this.historyStack.pop()}getLastRoute(){return this.historyStack[this.historyStack.length-1]}getRouteFromHash(){return window.location.hash.slice(1)}resolveRouteHandler(e){if(this.routeHandlers[e])return this.routeHandlers[e];throw Fn.getInstance().logError(`No route defined for the path ${e}`),new Error(`No route defined for the path ${e}`)}prependBaseURL(e){return`https://fawadali.dev/my-planet#${e}`}}c(kn,"HashRouter");const Zx=`<main class="planet">
  <canvas id="planet-canvas"></canvas>
</main>
`,Qx=`.planet {
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
`;var ey=Object.defineProperty,ty=Object.getOwnPropertyDescriptor,ny=c((s,e,t,n)=>{for(var i=n>1?void 0:n?ty(e,t):e,r=s.length-1,o;r>=0;r--)(o=s[r])&&(i=(n?o(e,t,i):o(i))||i);return n&&i&&ey(e,t,i),i},"__decorateClass$b");let pa=c(class extends Lt{constructor(){super(...arguments),this.router=kn.getInstance()}onInit(){const s=this.shadowDOM.querySelector("#planet-canvas");window.planet=yd.build({canvasElement:s}),this.closeContinentOnEscape(),this.setupContinentsRouting()}closeContinentOnEscape(){document.addEventListener("keydown",s=>{s.key==="Escape"&&this.router.back()})}setupContinentsRouting(){window.planet.onLoad(()=>{const s=window.planet.getContinents(),e=document.getElementsByTagName("mp-planet-splash")[0];for(const t in s){const n=Or(`/${t}`);this.router.addRoute(n,()=>{s[t].continentInteractor.openContinent(),e.hasAttribute("closed")||setTimeout(()=>{var i;((i=e.shadowRoot)==null?void 0:i.firstChild).click()})}),s[t].continentInteractor.onContinentClick(()=>{console.log(window.location.hash),window.location.pathname==="/"?this.router.to(n):this.router.replace(n)})}this.router.initialize()})}},"Planet");pa=ny([St(Zx),Zt(Qx)],pa);mt(pa);const iy="https://fawadali.dev/my-planet/assets/./planet-icon-01.ico",sy="https://fawadali.dev/my-planet/assets/./planet-icon-02.ico",ry="https://fawadali.dev/my-planet/assets/./planet-icon-03.ico",oy="https://fawadali.dev/my-planet/assets/./planet-icon-04.ico",ay="https://fawadali.dev/my-planet/assets/./planet-icon-05.ico",ly="https://fawadali.dev/my-planet/assets/./planet-icon-06.ico",cy="https://fawadali.dev/my-planet/assets/./planet-icon-07.ico",uy="https://fawadali.dev/my-planet/assets/./planet-icon-08.ico",hy="https://fawadali.dev/my-planet/assets/./planet-icon-09.ico",dy="https://fawadali.dev/my-planet/assets/./planet-icon-10.ico",fy="https://fawadali.dev/my-planet/assets/./planet-icon-11.ico",py="https://fawadali.dev/my-planet/assets/./planet-icon-12.ico",my="https://fawadali.dev/my-planet/assets/./planet-icon-13.ico",gy="https://fawadali.dev/my-planet/assets/./planet-icon-14.ico",_y="https://fawadali.dev/my-planet/assets/./planet-icon-15.ico",vy="https://fawadali.dev/my-planet/assets/./planet-icon-16.ico",xy="https://fawadali.dev/my-planet/assets/./planet-icon-17.ico",yy="https://fawadali.dev/my-planet/assets/./planet-icon-18.ico",by="https://fawadali.dev/my-planet/assets/./planet-icon-19.ico",wy="https://fawadali.dev/my-planet/assets/./planet-icon-20.ico",My="https://fawadali.dev/my-planet/assets/./planet-icon-21.ico",Sy="https://fawadali.dev/my-planet/assets/./planet-icon-22.ico",Ty=Object.freeze(Object.defineProperty({__proto__:null,planetFavicon01:iy,planetFavicon02:sy,planetFavicon03:ry,planetFavicon04:oy,planetFavicon05:ay,planetFavicon06:ly,planetFavicon07:cy,planetFavicon08:uy,planetFavicon09:hy,planetFavicon10:dy,planetFavicon11:fy,planetFavicon12:py,planetFavicon13:my,planetFavicon14:gy,planetFavicon15:_y,planetFavicon16:vy,planetFavicon17:xy,planetFavicon18:yy,planetFavicon19:by,planetFavicon20:wy,planetFavicon21:My,planetFavicon22:Sy},Symbol.toStringTag,{value:"Module"}));class bd extends Lt{constructor(){super(...arguments),this.frameDelay=400}onInit(){this.animateFavicon()}animateFavicon(){const e=document.head.querySelector('link[rel="icon"]'),t=Object.values(Ty);let n=0;setInterval(()=>{e.href=t[n++],n===t.length&&(n=0)},this.frameDelay)}}c(bd,"PlanetFavicon");mt(bd);const Ey=`<header
  class="planet-splash"
  on:click="this.onHeaderClick"
  on:mouseover="this.onMouseOver"
  on:mouseout="this.onMouseOut"
>
  <mp-heading level="h1" class="planet-splash-title">My Planet</mp-heading>
  <mp-arrow-button :enterButton>Enter</mp-arrow-button>
</header>
`,Ay=`:host {
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
`;var Cy=Object.defineProperty,Ly=Object.getOwnPropertyDescriptor,Ry=c((s,e,t,n)=>{for(var i=n>1?void 0:n?Ly(e,t):e,r=s.length-1,o;r>=0;r--)(o=s[r])&&(i=(n?o(e,t,i):o(i))||i);return n&&i&&Cy(e,t,i),i},"__decorateClass$a");let ma=c(class extends Lt{onInit(){window.planet.onLoad(()=>{var s;this.planetObject=window.planet.getScene().getObjectByName("planet"),(s=this.planetObject)==null||s.scale.setScalar(.5),document.body.removeAttribute("loading")})}onHeaderClick(){if(!this.planetObject)return;const s=new A().setScalar(1),e=window.planet.getAnimator().createTween(this.planetObject.scale,s,{duration:2e3,easing:ci.Quintic.Out});this.setAttribute("closed",""),e.start()}onMouseOver(){var s;(s=this.getElement("enterButton"))==null||s.setAttribute("active","")}onMouseOut(){var s;(s=this.getElement("enterButton"))==null||s.removeAttribute("active")}},"PlanetSplash");ma=Ry([St(Ey),Zt(Ay)],ma);mt(ma);const Py=`<header :continentHeader class="continent-header">
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
`,Dy=`.continent-header {
  --gradient: linear-gradient(
    to right,
    var(--primary-color) 0%,
    var(--secondary-color) 90%
  );
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
`;var Iy=Object.defineProperty,Oy=Object.getOwnPropertyDescriptor,wd=c((s,e,t,n)=>{for(var i=n>1?void 0:n?Oy(e,t):e,r=s.length-1,o;r>=0;r--)(o=s[r])&&(i=(n?o(e,t,i):o(i))||i);return n&&i&&Iy(e,t,i),i},"__decorateClass$9");let Dr=c(class extends Lt{constructor(){super(...arguments),this.router=kn.getInstance()}onInit(){this.router.addRoute("/",()=>this.closeOpenContinent())}onBackClick(s){s.stopPropagation(),this.router.getLastRoute()!==void 0?this.router.back():this.router.replace("/")}closeOpenContinent(){var s;window.planet.resetControls(),(s=document.querySelector("mp-continents > *[open]"))==null||s.removeAttribute("open")}},"ContinentHeader");wd([pn()],Dr.prototype,"icon",2);Dr=wd([St(Py),Zt(Dy)],Dr);mt(Dr);const Ny=`<slot></slot>
`;var Fy=Object.defineProperty,ky=Object.getOwnPropertyDescriptor,zy=c((s,e,t,n)=>{for(var i=n>1?void 0:n?ky(e,t):e,r=s.length-1,o;r>=0;r--)(o=s[r])&&(i=(n?o(e,t,i):o(i))||i);return n&&i&&Fy(e,t,i),i},"__decorateClass$8");let ga=c(class extends Lt{},"ContinentBody");ga=zy([St(Ny)],ga);mt(ga);const Uy=`<article
  :continent
  class="continent"
  on:wheel="this.onWrapperMouseWheel"
  on:scroll="this.onWrapperScroll"
  on:touchstart="this.onWrapperTouchStart"
  on:touchend="this.onWrapperTouchEnd"
>
  <slot name="continent-header"></slot>
  <div
    :continentBody
    class="continent-body"
    on:wheel="this.onBodyMouseWheel"
    on:scroll="this.onBodyScroll"
    on:touchend="this.onBodyTouchEnd"
  >
    <div class="continent-body-inner">
      <slot name="continent-body"></slot>
    </div>
  </div>
</article>
`,By=`:host {
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
  flex-grow: 1;
  /* For making scroll appear on the left which is a design element. */
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
  padding-bottom: var(--continent-vertical-spacing);
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
  .continent {
    width: 50%;
  }

  .continent-body::-webkit-scrollbar-track-piece:end {
    margin-bottom: 0;
  }

  .continent-body::-webkit-scrollbar-track-piece:start {
    margin-top: 0;
  }
}

/* Mobile */
@media screen and (max-width: 768px) {
  .continent-body {
    font-size: 1rem;
  }

  /* Hide Scrollbar for Mobile */

  .continent-body::-webkit-scrollbar {
    display: none;
  }

  .continent.continent-active > .continent-body.has-scroll {
    padding-left: 0;
    margin-left: 0;
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
    padding-left: 3rem;
    padding-right: 3rem;
  }
}
`;var Hy=Object.defineProperty,Vy=Object.getOwnPropertyDescriptor,Gy=c((s,e,t,n)=>{for(var i=n>1?void 0:n?Vy(e,t):e,r=s.length-1,o;r>=0;r--)(o=s[r])&&(i=(n?o(e,t,i):o(i))||i);return n&&i&&Hy(e,t,i),i},"__decorateClass$7");let _a=c(class extends Lt{constructor(){super(...arguments),this.continentActive=!1,this.touchStartY=0}onInit(){this.continent=this.getElement("continent"),this.continentBody=this.getElement("continentBody")}static get observedAttributes(){return["open"]}attributeChangedCallback(s,e,t){if(s!=="open")return;if(t!==null){const{scrollHeight:i,offsetHeight:r}=this.continentBody;i>r&&this.continentBody.classList.add("has-scroll")}else this.deactivateContinent()}onWrapperMouseWheel(s){s.preventDefault(),this.isScrollDown(s)&&this.activateContinent()}onBodyMouseWheel(s){this.continentActive&&s.stopPropagation(),this.continentBody.scrollTop===0&&this.isScrollUp(s)&&this.deactivateContinent()}onWrapperScroll(){this.activateContinent()}onBodyScroll(s){this.continentActive&&s.stopPropagation(),this.continentBody.scrollTop===0&&this.deactivateContinent()}onWrapperTouchStart(s){this.touchStartY=s.changedTouches[0].clientY}onWrapperTouchEnd(s){!this.continentActive&&this.isTouchUp(s)?this.activateContinent():this.continentActive&&this.isTouchDown(s)&&this.deactivateContinent()}onBodyTouchEnd(s){this.continentActive&&s.stopPropagation(),this.continentBody.scrollTop===0&&this.isTouchDown(s)&&this.deactivateContinent()}isScrollUp(s){return s.deltaY<0}isScrollDown(s){return s.deltaY>0}isTouchUp(s){return s.changedTouches[0].clientY<this.touchStartY}isTouchDown(s){return s.changedTouches[0].clientY>this.touchStartY}activateContinent(){this.continent.classList.add("continent-active"),this.continentBody.scrollTop=1,this.continentActive=!0}deactivateContinent(){this.continent.classList.remove("continent-active"),this.continentActive=!1}},"ContinentInfo");_a=Gy([St(Uy),Zt(By)],_a);mt(_a);const Wy=`<div class="continent-pin">
  <div class="continent-pin-content">
    <mp-heading level="h3" class="continent-pin-title">
      <slot name="title"></slot>
    </mp-heading>
    <slot name="subtitle" class="continent-pin-subtitle"></slot>
  </div>
  <mp-icon icon="\${this.icon}" class="continent-pin-icon"></mp-icon>
</div>
`,jy=`:host {
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
`;var Xy=Object.defineProperty,qy=Object.getOwnPropertyDescriptor,Md=c((s,e,t,n)=>{for(var i=n>1?void 0:n?qy(e,t):e,r=s.length-1,o;r>=0;r--)(o=s[r])&&(i=(n?o(e,t,i):o(i))||i);return n&&i&&Xy(e,t,i),i},"__decorateClass$6");let Ir=c(class extends Lt{},"ContinentPin");Md([pn()],Ir.prototype,"icon",2);Ir=Md([St(Wy),Zt(jy)],Ir);mt(Ir);const $y=`<section>
  <slot name="project-title"></slot>
  <slot name="project-description"></slot>
  <slot name="project-links"></slot>
</section>
`;var Yy=Object.defineProperty,Ky=Object.getOwnPropertyDescriptor,Jy=c((s,e,t,n)=>{for(var i=n>1?void 0:n?Ky(e,t):e,r=s.length-1,o;r>=0;r--)(o=s[r])&&(i=(n?o(e,t,i):o(i))||i);return n&&i&&Yy(e,t,i),i},"__decorateClass$5");let va=c(class extends Lt{},"Project");va=Jy([St($y)],va);mt(va);class os extends Lt{static get observedAttributes(){return["open"]}attributeChangedCallback(e,t,n){if(e!=="open")return;const i=this.shadowDOM.querySelector("mp-continent-info");n===null?i==null||i.removeAttribute(e):i==null||i.setAttribute(e,n)}}c(os,"Continent");const Zy=`<mp-continent-pin icon="about-continent">
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
      A <b>Software Engineer</b> currently building great stuff at Amazon.
      Someone who is interested in contributing to the world through software
      with experience working across multiple tech stacks.
    </p>
    <p>
      Originally from the wonderful land of Pakistan and enjoying life in
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
      <mp-icon icon="dev/angularjs" title="Angular"></mp-icon>
      <mp-icon icon="dev/react" title="React"></mp-icon>
      <mp-icon icon="dev/graphql" title="GraphQL"></mp-icon>
      <mp-icon icon="dev/mongodb" title="MongoDB"></mp-icon>
      <mp-icon icon="dev/mysql" title="MySQL"></mp-icon>
      <mp-icon icon="dev/nodejs" title="Node.js"></mp-icon>
      <mp-icon icon="dev/php" title="PHP"></mp-icon>
      <mp-icon icon="dev/spring" title="Spring"></mp-icon>
      <mp-icon icon="dev/aws" title="Amazon Web Services"></mp-icon>
    </p>
  </mp-continent-body>
</mp-continent-info>
`,Qy=`.dev-icons {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.dev-icons > mp-icon {
  width: 3.5rem;
  height: 3.5rem;
}
`;var eb=Object.defineProperty,tb=Object.getOwnPropertyDescriptor,nb=c((s,e,t,n)=>{for(var i=n>1?void 0:n?tb(e,t):e,r=s.length-1,o;r>=0;r--)(o=s[r])&&(i=(n?o(e,t,i):o(i))||i);return n&&i&&eb(e,t,i),i},"__decorateClass$4");let xa=c(class extends os{},"AboutContinent");xa=nb([St(Zy),Zt(Qy)],xa);mt(xa);const ib=`<mp-continent-pin icon="connect-continent">
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
`;var sb=Object.defineProperty,rb=Object.getOwnPropertyDescriptor,ob=c((s,e,t,n)=>{for(var i=n>1?void 0:n?rb(e,t):e,r=s.length-1,o;r>=0;r--)(o=s[r])&&(i=(n?o(e,t,i):o(i))||i);return n&&i&&sb(e,t,i),i},"__decorateClass$3");let ya=c(class extends os{},"ConnectContinent");ya=ob([St(ib)],ya);mt(ya);const ab=`<mp-continent-pin icon="life-continent">
  <span slot="title">Life</span>
  <span slot="subtitle">Click on the continent to land</span>
</mp-continent-pin>
<mp-continent-info>
  <mp-continent-header slot="continent-header" icon="life-continent">
    Life
  </mp-continent-header>
  <mp-continent-body slot="continent-body">
    Some content to come
  </mp-continent-body>
</mp-continent-info>
`;var lb=Object.defineProperty,cb=Object.getOwnPropertyDescriptor,ub=c((s,e,t,n)=>{for(var i=n>1?void 0:n?cb(e,t):e,r=s.length-1,o;r>=0;r--)(o=s[r])&&(i=(n?o(e,t,i):o(i))||i);return n&&i&&lb(e,t,i),i},"__decorateClass$2");let ba=c(class extends os{},"LifeContinent");ba=ub([St(ab)],ba);mt(ba);const hb=`<mp-continent-pin icon="projects-continent">
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
          link="https://fawadali.dev/react-circular-menu/"
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
`;var db=Object.defineProperty,fb=Object.getOwnPropertyDescriptor,pb=c((s,e,t,n)=>{for(var i=n>1?void 0:n?fb(e,t):e,r=s.length-1,o;r>=0;r--)(o=s[r])&&(i=(n?o(e,t,i):o(i))||i);return n&&i&&db(e,t,i),i},"__decorateClass$1");let wa=c(class extends os{},"ProjectsContinent");wa=pb([St(hb)],wa);mt(wa);const mb=`<mp-continent-pin icon="work-continent">
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
        <span slot="time">2022/11</span>
        <mp-heading level="h3" slot="title">Amazon</mp-heading>
        <span slot="subtitle">Software Development Engineer</span>
        <p>
          A member of the Amazon Business Value team at Amazon Business guiding
          businesses on how to save money on purchases.
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
`;var gb=Object.defineProperty,_b=Object.getOwnPropertyDescriptor,vb=c((s,e,t,n)=>{for(var i=n>1?void 0:n?_b(e,t):e,r=s.length-1,o;r>=0;r--)(o=s[r])&&(i=(n?o(e,t,i):o(i))||i);return n&&i&&gb(e,t,i),i},"__decorateClass");let Ma=c(class extends os{},"WorkContinent");Ma=vb([St(mb)],Ma);mt(Ma);
