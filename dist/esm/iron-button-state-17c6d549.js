/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const e=!(window.ShadyDOM&&window.ShadyDOM.inUse);let t,r;function n(r){t=(!r||!r.shimcssproperties)&&(e||Boolean(!navigator.userAgent.match(/AppleWebKit\/601|Edge\/15/)&&window.CSS&&CSS.supports&&CSS.supports("box-shadow","0 0 0 var(--foo)")))}window.ShadyCSS&&void 0!==window.ShadyCSS.cssBuild&&(r=window.ShadyCSS.cssBuild);const i=Boolean(window.ShadyCSS&&window.ShadyCSS.disableRuntime);window.ShadyCSS&&void 0!==window.ShadyCSS.nativeCss?t=window.ShadyCSS.nativeCss:window.ShadyCSS?(n(window.ShadyCSS),window.ShadyCSS=void 0):n(window.WebComponents&&window.WebComponents.flags);const s=t;
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/class o{constructor(){this.start=0,this.end=0,this.previous=null,this.parent=null,this.rules=null,this.parsedCssText="",this.cssText="",this.atRule=!1,this.type=0,this.keyframesName="",this.selector="",this.parsedSelector=""}}function a(e){return function e(t,r){let n=r.substring(t.start,t.end-1);if(t.parsedCssText=t.cssText=n.trim(),t.parent){let e=t.previous?t.previous.end:t.parent.start;n=r.substring(e,t.start-1),n=function(e){return e.replace(/\\([0-9a-f]{1,6})\s/gi,(function(){let e=arguments[1],t=6-e.length;for(;t--;)e="0"+e;return"\\"+e}))}(n),n=n.replace(h.multipleSpaces," "),n=n.substring(n.lastIndexOf(";")+1);let i=t.parsedSelector=t.selector=n.trim();t.atRule=0===i.indexOf(_),t.atRule?0===i.indexOf(f)?t.type=d.MEDIA_RULE:i.match(h.keyframesRule)&&(t.type=d.KEYFRAMES_RULE,t.keyframesName=t.selector.split(h.multipleSpaces).pop()):0===i.indexOf(u)?t.type=d.MIXIN_RULE:t.type=d.STYLE_RULE}let i=t.rules;if(i)for(let t,n=0,s=i.length;n<s&&(t=i[n]);n++)e(t,r);return t}(function(e){let t=new o;t.start=0,t.end=e.length;let r=t;for(let n=0,i=e.length;n<i;n++)if(e[n]===p){r.rules||(r.rules=[]);let e=r,t=e.rules[e.rules.length-1]||null;r=new o,r.start=n+1,r.parent=e,r.previous=t,e.rules.push(r)}else e[n]===c&&(r.end=n+1,r=r.parent||t);return t}(e=e.replace(h.comments,"").replace(h.port,"")),e)}function l(e,t,r=""){let n="";if(e.cssText||e.rules){let r=e.rules;if(r&&!function(e){let t=e[0];return Boolean(t)&&Boolean(t.selector)&&0===t.selector.indexOf(u)}(r))for(let e,i=0,s=r.length;i<s&&(e=r[i]);i++)n=l(e,t,n);else n=t?e.cssText:function(e){return function(e){return e.replace(h.mixinApply,"").replace(h.varApply,"")}(e=function(e){return e.replace(h.customProp,"").replace(h.mixinProp,"")}(e))}(e.cssText),n=n.trim(),n&&(n="  "+n+"\n")}return n&&(e.selector&&(r+=e.selector+" "+p+"\n"),r+=n,e.selector&&(r+=c+"\n\n")),r}const d={STYLE_RULE:1,KEYFRAMES_RULE:7,MEDIA_RULE:4,MIXIN_RULE:1e3},p="{",c="}",h={comments:/\/\*[^*]*\*+([^/*][^*]*\*+)*\//gim,port:/@import[^;]*;/gim,customProp:/(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?(?:[;\n]|$)/gim,mixinProp:/(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?{[^}]*?}(?:[;\n]|$)?/gim,mixinApply:/@apply\s*\(?[^);]*\)?\s*(?:[;\n]|$)?/gim,varApply:/[^;:]*?:[^;]*?var\([^;]*\)(?:[;\n]|$)?/gim,keyframesRule:/^@[^\s]*keyframes/,multipleSpaces:/\s+/g},u="--",f="@media",_="@",m=/(?:^|[;\s{]\s*)(--[\w-]*?)\s*:\s*(?:((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};{])+)|\{([^}]*)\}(?:(?=[;\s}])|$))/gi,y=/(?:^|\W+)@apply\s*\(?([^);\n]*)\)?/gi,g=/@media\s(.*)/,b=new Set,v="shady-unscoped";function w(e){const t=e.textContent;if(!b.has(t)){b.add(t);const r=e.cloneNode(!0);document.head.appendChild(r)}}function C(e){return e.hasAttribute(v)}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function P(e,t){return e?("string"==typeof e&&(e=a(e)),t&&x(e,t),l(e,s)):""}function S(e){return!e.__cssRules&&e.textContent&&(e.__cssRules=a(e.textContent)),e.__cssRules||null}function x(e,t,r,n){if(!e)return;let i=!1,s=e.type;if(n&&s===d.MEDIA_RULE){let t=e.selector.match(g);t&&(window.matchMedia(t[1]).matches||(i=!0))}s===d.STYLE_RULE?t(e):r&&s===d.KEYFRAMES_RULE?r(e):s===d.MIXIN_RULE&&(i=!0);let o=e.rules;if(o&&!i)for(let e,i=0,s=o.length;i<s&&(e=o[i]);i++)x(e,t,r,n)}window.ShadyDOM&&window.ShadyDOM.wrap;const E="css-build";function O(e){if(void 0!==r)return r;if(void 0===e.__cssBuild){const t=e.getAttribute(E);if(t)e.__cssBuild=t;else{const t=function(e){const t="template"===e.localName?e.content.firstChild:e.firstChild;if(t instanceof Comment){const e=t.textContent.trim().split(":");if(e[0]===E)return e[1]}return""}(e);""!==t&&function(e){const t="template"===e.localName?e.content.firstChild:e.firstChild;t.parentNode.removeChild(t)}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/(e),e.__cssBuild=t}}return e.__cssBuild||""}function T(e){return""!==O(e)}function k(e,t){for(let r in t)null===r?e.style.removeProperty(r):e.style.setProperty(r,t[r])}function A(e,t){const r=window.getComputedStyle(e).getPropertyValue(t);return r?r.trim():""}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const N=/;\s*/m,I=/^\s*(initial)|(inherit)\s*$/,M=/\s*!important/,L="_-_";class D{constructor(){this._map={}}set(e,t){e=e.trim(),this._map[e]={properties:t,dependants:{}}}get(e){return e=e.trim(),this._map[e]||null}}let R=null;class F{constructor(){this._currentElement=null,this._measureElement=null,this._map=new D}detectMixin(e){return function(e){const t=y.test(e)||m.test(e);return y.lastIndex=0,m.lastIndex=0,t}(e)}gatherStyles(t){const r=function(t){const r=[],n=t.querySelectorAll("style");for(let t=0;t<n.length;t++){const i=n[t];C(i)?e||(w(i),i.parentNode.removeChild(i)):(r.push(i.textContent),i.parentNode.removeChild(i))}return r.join("").trim()}(t.content);if(r){const e=document.createElement("style");return e.textContent=r,t.content.insertBefore(e,t.content.firstChild),e}return null}transformTemplate(e,t){void 0===e._gatheredStyle&&(e._gatheredStyle=this.gatherStyles(e));const r=e._gatheredStyle;return r?this.transformStyle(r,t):null}transformStyle(e,t=""){let r=S(e);return this.transformRules(r,t),e.textContent=P(r),r}transformCustomStyle(e){let t=S(e);return x(t,e=>{":root"===e.selector&&(e.selector="html"),this.transformRule(e)}),e.textContent=P(t),t}transformRules(e,t){this._currentElement=t,x(e,e=>{this.transformRule(e)}),this._currentElement=null}transformRule(e){e.cssText=this.transformCssText(e.parsedCssText,e),":root"===e.selector&&(e.selector=":host > *")}transformCssText(e,t){return e=e.replace(m,(e,r,n,i)=>this._produceCssProperties(e,r,n,i,t)),this._consumeCssProperties(e,t)}_getInitialValueForProperty(e){return this._measureElement||(this._measureElement=document.createElement("meta"),this._measureElement.setAttribute("apply-shim-measure",""),this._measureElement.style.all="initial",document.head.appendChild(this._measureElement)),window.getComputedStyle(this._measureElement).getPropertyValue(e)}_fallbacksFromPreviousRules(e){let t=e;for(;t.parent;)t=t.parent;const r={};let n=!1;return x(t,t=>{n=n||t===e,n||t.selector===e.selector&&Object.assign(r,this._cssTextToMap(t.parsedCssText))}),r}_consumeCssProperties(e,t){let r=null;for(;r=y.exec(e);){let n=r[0],i=r[1],s=r.index,o=s+n.indexOf("@apply"),a=s+n.length,l=e.slice(0,o),d=e.slice(a),p=t?this._fallbacksFromPreviousRules(t):{};Object.assign(p,this._cssTextToMap(l));let c=this._atApplyToCssProperties(i,p);e=`${l}${c}${d}`,y.lastIndex=s+c.length}return e}_atApplyToCssProperties(e,t){e=e.replace(N,"");let r=[],n=this._map.get(e);if(n||(this._map.set(e,{}),n=this._map.get(e)),n){let i,s,o;this._currentElement&&(n.dependants[this._currentElement]=!0);const a=n.properties;for(i in a)o=t&&t[i],s=[i,": var(",e,L,i],o&&s.push(",",o.replace(M,"")),s.push(")"),M.test(a[i])&&s.push(" !important"),r.push(s.join(""))}return r.join("; ")}_replaceInitialOrInherit(e,t){let r=I.exec(t);return r&&(t=r[1]?this._getInitialValueForProperty(e):"apply-shim-inherit"),t}_cssTextToMap(e,t=!1){let r,n,i=e.split(";"),s={};for(let e,o,a=0;a<i.length;a++)e=i[a],e&&(o=e.split(":"),o.length>1&&(r=o[0].trim(),n=o.slice(1).join(":"),t&&(n=this._replaceInitialOrInherit(r,n)),s[r]=n));return s}_invalidateMixinEntry(e){if(R)for(let t in e.dependants)t!==this._currentElement&&R(t)}_produceCssProperties(e,t,r,n,i){if(r&&function e(t,r){let n=t.indexOf("var(");if(-1===n)return r(t,"","","");let i=function(e,t){let r=0;for(let n=t,i=e.length;n<i;n++)if("("===e[n])r++;else if(")"===e[n]&&0==--r)return n;return-1}(t,n+3),s=t.substring(n+4,i),o=t.substring(0,n),a=e(t.substring(i+1),r),l=s.indexOf(",");return-1===l?r(o,s.trim(),"",a):r(o,s.substring(0,l).trim(),s.substring(l+1).trim(),a)}(r,(e,t)=>{t&&this._map.get(t)&&(n=`@apply ${t};`)}),!n)return e;let s=this._consumeCssProperties(""+n,i),o=e.slice(0,e.indexOf("--")),a=this._cssTextToMap(s,!0),l=a,d=this._map.get(t),p=d&&d.properties;p?l=Object.assign(Object.create(p),a):this._map.set(t,l);let c,h,u=[],f=!1;for(c in l)h=a[c],void 0===h&&(h="initial"),!p||c in p||(f=!0),u.push(`${t}${L}${c}: ${h}`);return f&&this._invalidateMixinEntry(d),d&&(d.properties=l),r&&(o=`${e};${o}`),`${o}${u.join("; ")};`}}F.prototype.detectMixin=F.prototype.detectMixin,F.prototype.transformStyle=F.prototype.transformStyle,F.prototype.transformCustomStyle=F.prototype.transformCustomStyle,F.prototype.transformRules=F.prototype.transformRules,F.prototype.transformRule=F.prototype.transformRule,F.prototype.transformTemplate=F.prototype.transformTemplate,F.prototype._separator=L,Object.defineProperty(F.prototype,"invalidCallback",{get:()=>R,set(e){R=e}});
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const H={},B="_applyShimCurrentVersion",z="_applyShimNextVersion",j="_applyShimValidatingVersion",$=Promise.resolve();
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function K(e){let t=H[e];t&&function(e){e[B]=e[B]||0,e[j]=e[j]||0,e[z]=(e[z]||0)+1}(t)}function q(e){return e[B]===e[z]}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
let Y,U=null,J=window.HTMLImports&&window.HTMLImports.whenReady||null;function V(e){requestAnimationFrame((function(){J?J(e):(U||(U=new Promise(e=>{Y=e}),"complete"===document.readyState?Y():document.addEventListener("readystatechange",()=>{"complete"===document.readyState&&Y()})),U.then((function(){e&&e()})))}))}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const X="__seenByShadyCSS",W="__shadyCSSCachedStyle";let G=null,Z=null;class Q{constructor(){this.customStyles=[],this.enqueued=!1,V(()=>{window.ShadyCSS.flushCustomStyles&&window.ShadyCSS.flushCustomStyles()})}enqueueDocumentValidation(){!this.enqueued&&Z&&(this.enqueued=!0,V(Z))}addCustomStyle(e){e[X]||(e[X]=!0,this.customStyles.push(e),this.enqueueDocumentValidation())}getStyleForCustomStyle(e){if(e[W])return e[W];let t;return t=e.getStyle?e.getStyle():e,t}processStyles(){const e=this.customStyles;for(let t=0;t<e.length;t++){const r=e[t];if(r[W])continue;const n=this.getStyleForCustomStyle(r);if(n){const e=n.__appliedElement||n;G&&G(e),r[W]=e}}return e}}Q.prototype.addCustomStyle=Q.prototype.addCustomStyle,Q.prototype.getStyleForCustomStyle=Q.prototype.getStyleForCustomStyle,Q.prototype.processStyles=Q.prototype.processStyles,Object.defineProperties(Q.prototype,{transformCallback:{get:()=>G,set(e){G=e}},validateCallback:{get:()=>Z,set(e){let t=!1;Z||(t=!0),Z=e,t&&this.enqueueDocumentValidation()}}});
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const ee=new F;class te{constructor(){this.customStyleInterface=null,ee.invalidCallback=K}ensure(){this.customStyleInterface||window.ShadyCSS.CustomStyleInterface&&(this.customStyleInterface=window.ShadyCSS.CustomStyleInterface,this.customStyleInterface.transformCallback=e=>{ee.transformCustomStyle(e)},this.customStyleInterface.validateCallback=()=>{requestAnimationFrame(()=>{this.customStyleInterface.enqueued&&this.flushCustomStyles()})})}prepareTemplate(e,t){if(this.ensure(),T(e))return;H[t]=e;let r=ee.transformTemplate(e,t);e._styleAst=r}flushCustomStyles(){if(this.ensure(),!this.customStyleInterface)return;let e=this.customStyleInterface.processStyles();if(this.customStyleInterface.enqueued){for(let t=0;t<e.length;t++){let r=e[t],n=this.customStyleInterface.getStyleForCustomStyle(r);n&&ee.transformCustomStyle(n)}this.customStyleInterface.enqueued=!1}}styleSubtree(e,t){if(this.ensure(),t&&k(e,t),e.shadowRoot){this.styleElement(e);let t=e.shadowRoot.children||e.shadowRoot.childNodes;for(let e=0;e<t.length;e++)this.styleSubtree(t[e])}else{let t=e.children||e.childNodes;for(let e=0;e<t.length;e++)this.styleSubtree(t[e])}}styleElement(e){this.ensure();let{is:t}=function(e){let t=e.localName,r="",n="";return t?t.indexOf("-")>-1?r=t:(n=t,r=e.getAttribute&&e.getAttribute("is")||""):(r=e.is,n=e.extends),{is:r,typeExtension:n}}(e),r=H[t];if((!r||!T(r))&&r&&!q(r)){(function(e){return!q(e)&&e[j]===e[z]})(r)||(this.prepareTemplate(r,t),function(e){e[j]=e[z],e._validating||(e._validating=!0,$.then((function(){e[B]=e[z],e._validating=!1})))}(r));let n=e.shadowRoot;if(n){let e=n.querySelector("style");e&&(e.__cssRules=r._styleAst,e.textContent=P(r._styleAst))}}}styleDocument(e){this.ensure(),this.styleSubtree(document.body,e)}}if(!window.ShadyCSS||!window.ShadyCSS.ScopingShim){const t=new te;let n=window.ShadyCSS&&window.ShadyCSS.CustomStyleInterface;window.ShadyCSS={prepareTemplate(e,r,n){t.flushCustomStyles(),t.prepareTemplate(e,r)},prepareTemplateStyles(e,t,r){window.ShadyCSS.prepareTemplate(e,t,r)},prepareTemplateDom(e,t){},styleSubtree(e,r){t.flushCustomStyles(),t.styleSubtree(e,r)},styleElement(e){t.flushCustomStyles(),t.styleElement(e)},styleDocument(e){t.flushCustomStyles(),t.styleDocument(e)},getComputedStyleValue:(e,t)=>A(e,t),flushCustomStyles(){t.flushCustomStyles()},nativeCss:s,nativeShadow:e,cssBuild:r,disableRuntime:i},n&&(window.ShadyCSS.CustomStyleInterface=n)}window.ShadyCSS.ApplyShim=ee,
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
window.JSCompiler_renameProperty=function(e,t){return e};
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
let re,ne,ie=/(url\()([^)]*)(\))/g,se=/(^\/[^\/])|(^#)|(^[\w-\d]*:)/;function oe(e,t){if(e&&se.test(e))return e;if("//"===e)return e;if(void 0===re){re=!1;try{const e=new URL("b","http://a");e.pathname="c%20d",re="http://a/c%20d"===e.href}catch(e){}}if(t||(t=document.baseURI||window.location.href),re)try{return new URL(e,t).href}catch(t){return e}return ne||(ne=document.implementation.createHTMLDocument("temp"),ne.base=ne.createElement("base"),ne.head.appendChild(ne.base),ne.anchor=ne.createElement("a"),ne.body.appendChild(ne.anchor)),ne.base.href=t,ne.anchor.href=e,ne.anchor.href||e}function ae(e,t){return e.replace(ie,(function(e,r,n,i){return r+"'"+oe(n.replace(/["']/g,""),t)+"'"+i}))}function le(e){return e.substring(0,e.lastIndexOf("/")+1)}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const de=!window.ShadyDOM;Boolean(!window.ShadyCSS||window.ShadyCSS.nativeCss);let pe=le(document.baseURI||window.location.href),ce=window.Polymer&&window.Polymer.sanitizeDOMValue||void 0,he=!1,ue=!1,fe=!1,_e=!1,me=!1,ye=!0,ge=0;const be=function(e){let t=e.__mixinApplications;t||(t=new WeakMap,e.__mixinApplications=t);let r=ge++;return function(n){let i=n.__mixinSet;if(i&&i[r])return n;let s=t,o=s.get(n);o||(o=e(n),s.set(n,o));let a=Object.create(o.__mixinSet||i||null);return a[r]=!0,o.__mixinSet=a,o}};
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let ve={},we={};function Ce(e,t){ve[e]=we[e.toLowerCase()]=t}function Pe(e){return ve[e]||we[e.toLowerCase()]}class Se extends HTMLElement{static get observedAttributes(){return["id"]}static import(e,t){if(e){let r=Pe(e);return r&&t?r.querySelector(t):r}return null}attributeChangedCallback(e,t,r,n){t!==r&&this.register()}get assetpath(){if(!this.__assetpath){const e=window.HTMLImports&&HTMLImports.importForElement?HTMLImports.importForElement(this)||document:this.ownerDocument,t=oe(this.getAttribute("assetpath")||"",e.baseURI);this.__assetpath=le(t)}return this.__assetpath}register(e){if(e=e||this.id){if(ue&&void 0!==Pe(e))throw Ce(e,null),new Error(`strictTemplatePolicy: dom-module ${e} re-registered`);this.id=e,Ce(e,this),(t=this).querySelector("style")&&console.warn("dom-module %s has style outside template",t.id)}var t}}Se.prototype.modules=ve,customElements.define("dom-module",Se);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const xe="link[rel=import][type~=css]",Ee="include",Oe="shady-unscoped";function Te(e){return Se.import(e)}function ke(e){const t=ae((e.body?e.body:e).textContent,e.baseURI),r=document.createElement("style");return r.textContent=t,r}function Ae(e){const t=e.trim().split(/\s+/),r=[];for(let e=0;e<t.length;e++)r.push(...Ne(t[e]));return r}function Ne(e){const t=Te(e);if(!t)return console.warn("Could not find style data in module named",e),[];if(void 0===t._styles){const e=[];e.push(...Me(t));const r=t.querySelector("template");r&&e.push(...Ie(r,t.assetpath)),t._styles=e}return t._styles}function Ie(e,t){if(!e._styles){const r=[],n=e.content.querySelectorAll("style");for(let e=0;e<n.length;e++){let i=n[e],s=i.getAttribute(Ee);s&&r.push(...Ae(s).filter((function(e,t,r){return r.indexOf(e)===t}))),t&&(i.textContent=ae(i.textContent,t)),r.push(i)}e._styles=r}return e._styles}function Me(e){const t=[],r=e.querySelectorAll(xe);for(let e=0;e<r.length;e++){let n=r[e];if(n.import){const e=n.import,r=n.hasAttribute(Oe);if(r&&!e._unscopedStyle){const t=ke(e);t.setAttribute(Oe,""),e._unscopedStyle=t}else e._style||(e._style=ke(e));t.push(r?e._unscopedStyle:e._style)}}return t}function Le(e){let t=Te(e);if(t&&void 0===t._cssText){let e=function(e){let t="",r=Me(e);for(let e=0;e<r.length;e++)t+=r[e].textContent;return t}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/(t),r=t.querySelector("template");r&&(e+=function(e,t){let r="";const n=Ie(e,t);for(let e=0;e<n.length;e++){let t=n[e];t.parentNode&&t.parentNode.removeChild(t),r+=t.textContent}return r}(r,t.assetpath)),t._cssText=e||null}return t||console.warn("Could not find style data in module named",e),t&&t._cssText||""}const De=window.ShadyDOM&&window.ShadyDOM.noPatch&&window.ShadyDOM.wrap?window.ShadyDOM.wrap:window.ShadyDOM?e=>ShadyDOM.patch(e):e=>e;
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function Re(e){return e.indexOf(".")>=0}function Fe(e){let t=e.indexOf(".");return-1===t?e:e.slice(0,t)}function He(e,t){return 0===e.indexOf(t+".")}function Be(e,t){return 0===t.indexOf(e+".")}function ze(e,t,r){return t+r.slice(e.length)}function je(e){if(Array.isArray(e)){let t=[];for(let r=0;r<e.length;r++){let n=e[r].toString().split(".");for(let e=0;e<n.length;e++)t.push(n[e])}return t.join(".")}return e}function $e(e){return Array.isArray(e)?je(e).split("."):e.toString().split(".")}function Ke(e,t,r){let n=e,i=$e(t);for(let e=0;e<i.length;e++){if(!n)return;n=n[i[e]]}return r&&(r.path=i.join(".")),n}function qe(e,t,r){let n=e,i=$e(t),s=i[i.length-1];if(i.length>1){for(let e=0;e<i.length-1;e++){if(n=n[i[e]],!n)return}n[s]=r}else n[t]=r;return i.join(".")}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const Ye={},Ue=/-[a-z]/g,Je=/([A-Z])/g;function Ve(e){return Ye[e]||(Ye[e]=e.indexOf("-")<0?e:e.replace(Ue,e=>e[1].toUpperCase()))}function Xe(e){return Ye[e]||(Ye[e]=e.replace(Je,"-$1").toLowerCase())}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let We=0,Ge=0,Ze=[],Qe=0,et=document.createTextNode("");new window.MutationObserver((function(){const e=Ze.length;for(let t=0;t<e;t++){let e=Ze[t];if(e)try{e()}catch(e){setTimeout(()=>{throw e})}}Ze.splice(0,e),Ge+=e})).observe(et,{characterData:!0});const tt={after:e=>({run:t=>window.setTimeout(t,e),cancel(e){window.clearTimeout(e)}}),run:(e,t)=>window.setTimeout(e,t),cancel(e){window.clearTimeout(e)}},rt={run:e=>window.requestAnimationFrame(e),cancel(e){window.cancelAnimationFrame(e)}},nt={run:e=>(et.textContent=Qe++,Ze.push(e),We++),cancel(e){const t=e-Ge;if(t>=0){if(!Ze[t])throw new Error("invalid async handle: "+e);Ze[t]=null}}},it=nt,st=be(e=>{return class extends e{static createProperties(e){const t=this.prototype;for(let r in e)r in t||t._createPropertyAccessor(r)}static attributeNameForProperty(e){return e.toLowerCase()}static typeForProperty(e){}_createPropertyAccessor(e,t){this._addPropertyToAttributeMap(e),this.hasOwnProperty(JSCompiler_renameProperty("__dataHasAccessor",this))||(this.__dataHasAccessor=Object.assign({},this.__dataHasAccessor)),this.__dataHasAccessor[e]||(this.__dataHasAccessor[e]=!0,this._definePropertyAccessor(e,t))}_addPropertyToAttributeMap(e){if(this.hasOwnProperty(JSCompiler_renameProperty("__dataAttributes",this))||(this.__dataAttributes=Object.assign({},this.__dataAttributes)),!this.__dataAttributes[e]){const t=this.constructor.attributeNameForProperty(e);this.__dataAttributes[t]=e}}_definePropertyAccessor(e,t){Object.defineProperty(this,e,{get(){return this._getProperty(e)},set:t?function(){}:function(t){this._setProperty(e,t)}})}constructor(){super(),this.__dataEnabled=!1,this.__dataReady=!1,this.__dataInvalid=!1,this.__data={},this.__dataPending=null,this.__dataOld=null,this.__dataInstanceProps=null,this.__serializing=!1,this._initializeProperties()}ready(){this.__dataReady=!0,this._flushProperties()}_initializeProperties(){for(let e in this.__dataHasAccessor)this.hasOwnProperty(e)&&(this.__dataInstanceProps=this.__dataInstanceProps||{},this.__dataInstanceProps[e]=this[e],delete this[e])}_initializeInstanceProperties(e){Object.assign(this,e)}_setProperty(e,t){this._setPendingProperty(e,t)&&this._invalidateProperties()}_getProperty(e){return this.__data[e]}_setPendingProperty(e,t,r){let n=this.__data[e],i=this._shouldPropertyChange(e,t,n);return i&&(this.__dataPending||(this.__dataPending={},this.__dataOld={}),!this.__dataOld||e in this.__dataOld||(this.__dataOld[e]=n),this.__data[e]=t,this.__dataPending[e]=t),i}_invalidateProperties(){!this.__dataInvalid&&this.__dataReady&&(this.__dataInvalid=!0,it.run(()=>{this.__dataInvalid&&(this.__dataInvalid=!1,this._flushProperties())}))}_enableProperties(){this.__dataEnabled||(this.__dataEnabled=!0,this.__dataInstanceProps&&(this._initializeInstanceProperties(this.__dataInstanceProps),this.__dataInstanceProps=null),this.ready())}_flushProperties(){const e=this.__data,t=this.__dataPending,r=this.__dataOld;this._shouldPropertiesChange(e,t,r)&&(this.__dataPending=null,this.__dataOld=null,this._propertiesChanged(e,t,r))}_shouldPropertiesChange(e,t,r){return Boolean(t)}_propertiesChanged(e,t,r){}_shouldPropertyChange(e,t,r){return r!==t&&(r==r||t==t)}attributeChangedCallback(e,t,r,n){t!==r&&this._attributeToProperty(e,r),super.attributeChangedCallback&&super.attributeChangedCallback(e,t,r,n)}_attributeToProperty(e,t,r){if(!this.__serializing){const n=this.__dataAttributes,i=n&&n[e]||e;this[i]=this._deserializeValue(t,r||this.constructor.typeForProperty(i))}}_propertyToAttribute(e,t,r){this.__serializing=!0,r=arguments.length<3?this[e]:r,this._valueToNodeAttribute(this,r,t||this.constructor.attributeNameForProperty(e)),this.__serializing=!1}_valueToNodeAttribute(e,t,r){const n=this._serializeValue(t);"class"!==r&&"name"!==r&&"slot"!==r||(e=De(e)),void 0===n?e.removeAttribute(r):e.setAttribute(r,n)}_serializeValue(e){switch(typeof e){case"boolean":return e?"":void 0;default:return null!=e?e.toString():void 0}}_deserializeValue(e,t){switch(t){case Boolean:return null!==e;case Number:return Number(e);default:return e}}}}),ot={};let at=HTMLElement.prototype;for(;at;){let e=Object.getOwnPropertyNames(at);for(let t=0;t<e.length;t++)ot[e[t]]=!0;at=Object.getPrototypeOf(at)}const lt=be(e=>{const t=st(e);return class extends t{static createPropertiesForAttributes(){let e=this.observedAttributes;for(let t=0;t<e.length;t++)this.prototype._createPropertyAccessor(Ve(e[t]))}static attributeNameForProperty(e){return Xe(e)}_initializeProperties(){this.__dataProto&&(this._initializeProtoProperties(this.__dataProto),this.__dataProto=null),super._initializeProperties()}_initializeProtoProperties(e){for(let t in e)this._setProperty(t,e[t])}_ensureAttribute(e,t){const r=this;r.hasAttribute(e)||this._valueToNodeAttribute(r,t,e)}_serializeValue(e){switch(typeof e){case"object":if(e instanceof Date)return e.toString();if(e)try{return JSON.stringify(e)}catch(e){return""}default:return super._serializeValue(e)}}_deserializeValue(e,t){let r;switch(t){case Object:try{r=JSON.parse(e)}catch(t){r=e}break;case Array:try{r=JSON.parse(e)}catch(t){r=null,console.warn(`Polymer::Attributes: couldn't decode Array as JSON: ${e}`)}break;case Date:r=isNaN(e)?String(e):Number(e),r=new Date(r);break;default:r=super._deserializeValue(e,t)}return r}_definePropertyAccessor(e,t){!function(e,t){if(!ot[t]){let r=e[t];void 0!==r&&(e.__data?e._setPendingProperty(t,r):(e.__dataProto?e.hasOwnProperty(JSCompiler_renameProperty("__dataProto",e))||(e.__dataProto=Object.create(e.__dataProto)):e.__dataProto={},e.__dataProto[t]=r))}}(this,e),super._definePropertyAccessor(e,t)}_hasAccessor(e){return this.__dataHasAccessor&&this.__dataHasAccessor[e]}_isPropertyPending(e){return Boolean(this.__dataPending&&e in this.__dataPending)}}}),dt={"dom-if":!0,"dom-repeat":!0};
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let pt=!1,ct=!1;function ht(e){(function(){if(!pt){pt=!0;const e=document.createElement("textarea");e.placeholder="a",ct=e.placeholder===e.textContent}return ct})()&&"textarea"===e.localName&&e.placeholder&&e.placeholder===e.textContent&&(e.textContent=null)}function ut(e){let t=e.getAttribute("is");if(t&&dt[t]){let r=e;for(r.removeAttribute("is"),e=r.ownerDocument.createElement(t),r.parentNode.replaceChild(e,r),e.appendChild(r);r.attributes.length;)e.setAttribute(r.attributes[0].name,r.attributes[0].value),r.removeAttribute(r.attributes[0].name)}return e}function ft(e,t){let r=t.parentInfo&&ft(e,t.parentInfo);if(!r)return e;for(let e=r.firstChild,n=0;e;e=e.nextSibling)if(t.parentIndex===n++)return e}function _t(e,t,r,n){n.id&&(t[n.id]=r)}function mt(e,t,r){if(r.events&&r.events.length)for(let n,i=0,s=r.events;i<s.length&&(n=s[i]);i++)e._addMethodEventListenerToNode(t,n.name,n.value,e)}function yt(e,t,r){r.templateInfo&&(t._templateInfo=r.templateInfo)}const gt=be(e=>{return class extends e{static _parseTemplate(e,t){if(!e._templateInfo){let r=e._templateInfo={};r.nodeInfoList=[],r.stripWhiteSpace=t&&t.stripWhiteSpace||e.hasAttribute("strip-whitespace"),this._parseTemplateContent(e,r,{parent:null})}return e._templateInfo}static _parseTemplateContent(e,t,r){return this._parseTemplateNode(e.content,t,r)}static _parseTemplateNode(e,t,r){let n=!1,i=e;return"template"!=i.localName||i.hasAttribute("preserve-content")?"slot"===i.localName&&(t.hasInsertionPoint=!0):n=this._parseTemplateNestedTemplate(i,t,r)||n,ht(i),i.firstChild&&this._parseTemplateChildNodes(i,t,r),i.hasAttributes&&i.hasAttributes()&&(n=this._parseTemplateNodeAttributes(i,t,r)||n),n}static _parseTemplateChildNodes(e,t,r){if("script"!==e.localName&&"style"!==e.localName)for(let n,i=e.firstChild,s=0;i;i=n){if("template"==i.localName&&(i=ut(i)),n=i.nextSibling,i.nodeType===Node.TEXT_NODE){let r=n;for(;r&&r.nodeType===Node.TEXT_NODE;)i.textContent+=r.textContent,n=r.nextSibling,e.removeChild(r),r=n;if(t.stripWhiteSpace&&!i.textContent.trim()){e.removeChild(i);continue}}let o={parentIndex:s,parentInfo:r};this._parseTemplateNode(i,t,o)&&(o.infoIndex=t.nodeInfoList.push(o)-1),i.parentNode&&s++}}static _parseTemplateNestedTemplate(e,t,r){let n=e,i=this._parseTemplate(n,t);return(i.content=n.content.ownerDocument.createDocumentFragment()).appendChild(n.content),r.templateInfo=i,!0}static _parseTemplateNodeAttributes(e,t,r){let n=!1,i=Array.from(e.attributes);for(let s,o=i.length-1;s=i[o];o--)n=this._parseTemplateNodeAttribute(e,t,r,s.name,s.value)||n;return n}static _parseTemplateNodeAttribute(e,t,r,n,i){return"on-"===n.slice(0,3)?(e.removeAttribute(n),r.events=r.events||[],r.events.push({name:n.slice(3),value:i}),!0):"id"===n&&(r.id=i,!0)}static _contentForTemplate(e){let t=e._templateInfo;return t&&t.content||e.content}_stampTemplate(e){e&&!e.content&&window.HTMLTemplateElement&&HTMLTemplateElement.decorate&&HTMLTemplateElement.decorate(e);let t=this.constructor._parseTemplate(e),r=t.nodeInfoList,n=t.content||e.content,i=document.importNode(n,!0);i.__noInsertionPoint=!t.hasInsertionPoint;let s=i.nodeList=new Array(r.length);i.$={};for(let e,t=0,n=r.length;t<n&&(e=r[t]);t++){let r=s[t]=ft(i,e);_t(0,i.$,r,e),yt(0,r,e),mt(this,r,e)}return i=i,i}_addMethodEventListenerToNode(e,t,r,n){let i=function(e,t,r){return e=e._methodHost||e,function(t){e[r]?e[r](t,t.detail):console.warn("listener method `"+r+"` not defined")}}(n=n||e,0,r);return this._addEventListenerToNode(e,t,i),i}_addEventListenerToNode(e,t,r){e.addEventListener(t,r)}_removeEventListenerFromNode(e,t,r){e.removeEventListener(t,r)}}});
/**
 * @fileoverview
 * @suppress {checkPrototypalTypes}
 * @license Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt The complete set of authors may be found
 * at http://polymer.github.io/AUTHORS.txt The complete set of contributors may
 * be found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by
 * Google as part of the polymer project is also subject to an additional IP
 * rights grant found at http://polymer.github.io/PATENTS.txt
 */let bt=0;const vt={COMPUTE:"__computeEffects",REFLECT:"__reflectEffects",NOTIFY:"__notifyEffects",PROPAGATE:"__propagateEffects",OBSERVE:"__observeEffects",READ_ONLY:"__readOnly"},wt=/[A-Z]/;function Ct(e,t){let r=e[t];if(r){if(!e.hasOwnProperty(t)){r=e[t]=Object.create(e[t]);for(let e in r){let t=r[e],n=r[e]=Array(t.length);for(let e=0;e<t.length;e++)n[e]=t[e]}}}else r=e[t]={};return r}function Pt(e,t,r,n,i,s){if(t){let o=!1,a=bt++;for(let l in r)St(e,t,a,l,r,n,i,s)&&(o=!0);return o}return!1}function St(e,t,r,n,i,s,o,a){let l=!1,d=t[o?Fe(n):n];if(d)for(let t,p=0,c=d.length;p<c&&(t=d[p]);p++)t.info&&t.info.lastRun===r||o&&!xt(n,t.trigger)||(t.info&&(t.info.lastRun=r),t.fn(e,n,i,s,t.info,o,a),l=!0);return l}function xt(e,t){if(t){let r=t.name;return r==e||!(!t.structured||!He(r,e))||!(!t.wildcard||!Be(r,e))}return!0}function Et(e,t,r,n,i){let s="string"==typeof i.method?e[i.method]:i.method,o=i.property;s?s.call(e,e.__data[o],n[o]):i.dynamicFn||console.warn("observer method `"+i.method+"` not defined")}function Ot(e,t,r){let n=Fe(t);if(n!==t){return Tt(e,Xe(n)+"-changed",r[t],t),!0}return!1}function Tt(e,t,r,n){let i={value:r,queueProperty:!0};n&&(i.path=n),De(e).dispatchEvent(new CustomEvent(t,{detail:i}))}function kt(e,t,r,n,i,s){let o=(s?Fe(t):t)!=t?t:null,a=o?Ke(e,o):e.__data[t];o&&void 0===a&&(a=r[t]),Tt(e,i.eventName,a,o)}function At(e,t,r,n,i){let s=e.__data[t];ce&&(s=ce(s,i.attrName,"attribute",e)),e._propertyToAttribute(t,i.attrName,s)}function Nt(e,t,r,n,i){let s=Ht(e,t,r,n,i),o=i.methodInfo;e.__dataHasAccessor&&e.__dataHasAccessor[o]?e._setPendingProperty(o,s,!0):e[o]=s}function It(e,t,r,n,i,s,o){r.bindings=r.bindings||[];let a={kind:n,target:i,parts:s,literal:o,isCompound:1!==s.length};if(r.bindings.push(a),function(e){return Boolean(e.target)&&"attribute"!=e.kind&&"text"!=e.kind&&!e.isCompound&&"{"===e.parts[0].mode}(a)){let{event:e,negate:t}=a.parts[0];a.listenerEvent=e||Xe(i)+"-changed",a.listenerNegate=t}let l=t.nodeInfoList.length;for(let r=0;r<a.parts.length;r++){let n=a.parts[r];n.compoundIndex=r,Mt(e,t,a,n,l)}}function Mt(e,t,r,n,i){if(!n.literal)if("attribute"===r.kind&&"-"===r.target[0])console.warn("Cannot set attribute "+r.target+' because "-" is not a valid attribute starting character');else{let s=n.dependencies,o={index:i,binding:r,part:n,evaluator:e};for(let r=0;r<s.length;r++){let n=s[r];"string"==typeof n&&(n=Kt(n),n.wildcard=!0),e._addTemplatePropertyEffect(t,n.rootProperty,{fn:Lt,info:o,trigger:n})}}}function Lt(e,t,r,n,i,s,o){let a=o[i.index],l=i.binding,d=i.part;if(s&&d.source&&t.length>d.source.length&&"property"==l.kind&&!l.isCompound&&a.__isPropertyEffectsClient&&a.__dataHasAccessor&&a.__dataHasAccessor[l.target]){let n=r[t];t=ze(d.source,l.target,t),a._setPendingPropertyOrPath(t,n,!1,!0)&&e._enqueueClient(a)}else{!function(e,t,r,n,i){i=function(e,t,r,n){if(r.isCompound){let i=e.__dataCompoundStorage[r.target];i[n.compoundIndex]=t,t=i.join("")}"attribute"!==r.kind&&("textContent"!==r.target&&("value"!==r.target||"input"!==e.localName&&"textarea"!==e.localName)||(t=null==t?"":t));return t}(t,i,r,n),ce&&(i=ce(i,r.target,r.kind,t));if("attribute"==r.kind)e._valueToNodeAttribute(t,i,r.target);else{let n=r.target;t.__isPropertyEffectsClient&&t.__dataHasAccessor&&t.__dataHasAccessor[n]?t[vt.READ_ONLY]&&t[vt.READ_ONLY][n]||t._setPendingProperty(n,i)&&e._enqueueClient(t):e._setUnmanagedPropertyToNode(t,n,i)}}(e,a,l,d,i.evaluator._evaluateBinding(e,d,t,r,n,s))}}function Dt(e,t){if(t.isCompound){let r=e.__dataCompoundStorage||(e.__dataCompoundStorage={}),n=t.parts,i=new Array(n.length);for(let e=0;e<n.length;e++)i[e]=n[e].literal;let s=t.target;r[s]=i,t.literal&&"property"==t.kind&&("className"===s&&(e=De(e)),e[s]=t.literal)}}function Rt(e,t,r){if(r.listenerEvent){let n=r.parts[0];e.addEventListener(r.listenerEvent,(function(e){!function(e,t,r,n,i){let s,o=e.detail,a=o&&o.path;a?(n=ze(r,n,a),s=o&&o.value):s=e.currentTarget[r],s=i?!s:s,t[vt.READ_ONLY]&&t[vt.READ_ONLY][n]||!t._setPendingPropertyOrPath(n,s,!0,Boolean(a))||o&&o.queueProperty||t._invalidateProperties()}(e,t,r.target,n.source,n.negate)}))}}function Ft(e,t,r,n,i,s){s=t.static||s&&("object"!=typeof s||s[t.methodName]);let o={methodName:t.methodName,args:t.args,methodInfo:i,dynamicFn:s};for(let i,s=0;s<t.args.length&&(i=t.args[s]);s++)i.literal||e._addPropertyEffect(i.rootProperty,r,{fn:n,info:o,trigger:i});s&&e._addPropertyEffect(t.methodName,r,{fn:n,info:o})}function Ht(e,t,r,n,i){let s=e._methodHost||e,o=s[i.methodName];if(o){let n=e._marshalArgs(i.args,t,r);return o.apply(s,n)}i.dynamicFn||console.warn("method `"+i.methodName+"` not defined")}const Bt=[],zt=new RegExp("(\\[\\[|{{)\\s*(?:(!)\\s*)?((?:[a-zA-Z_$][\\w.:$\\-*]*)\\s*(?:\\(\\s*(?:(?:(?:((?:[a-zA-Z_$][\\w.:$\\-*]*)|(?:[-+]?[0-9]*\\.?[0-9]+(?:[eE][-+]?[0-9]+)?)|(?:(?:'(?:[^'\\\\]|\\\\.)*')|(?:\"(?:[^\"\\\\]|\\\\.)*\")))\\s*)(?:,\\s*(?:((?:[a-zA-Z_$][\\w.:$\\-*]*)|(?:[-+]?[0-9]*\\.?[0-9]+(?:[eE][-+]?[0-9]+)?)|(?:(?:'(?:[^'\\\\]|\\\\.)*')|(?:\"(?:[^\"\\\\]|\\\\.)*\")))\\s*))*)?)\\)\\s*)?)(?:]]|}})","g");function jt(e){let t="";for(let r=0;r<e.length;r++){t+=e[r].literal||""}return t}function $t(e){let t=e.match(/([^\s]+?)\(([\s\S]*)\)/);if(t){let e={methodName:t[1],static:!0,args:Bt};if(t[2].trim()){return function(e,t){return t.args=e.map((function(e){let r=Kt(e);return r.literal||(t.static=!1),r}),this),t}(t[2].replace(/\\,/g,"&comma;").split(","),e)}return e}return null}function Kt(e){let t=e.trim().replace(/&comma;/g,",").replace(/\\(.)/g,"$1"),r={name:t,value:"",literal:!1},n=t[0];switch("-"===n&&(n=t[1]),n>="0"&&n<="9"&&(n="#"),n){case"'":case'"':r.value=t.slice(1,-1),r.literal=!0;break;case"#":r.value=Number(t),r.literal=!0}return r.literal||(r.rootProperty=Fe(t),r.structured=Re(t),r.structured&&(r.wildcard=".*"==t.slice(-2),r.wildcard&&(r.name=t.slice(0,-2)))),r}function qt(e,t,r){let n=Ke(e,r);return void 0===n&&(n=t[r]),n}function Yt(e,t,r,n){e.notifyPath(r+".splices",{indexSplices:n}),e.notifyPath(r+".length",t.length)}function Ut(e,t,r,n,i,s){Yt(e,t,r,[{index:n,addedCount:i,removed:s,object:t,type:"splice"}])}const Jt=be(e=>{const t=gt(lt(e));return class extends t{constructor(){super(),this.__isPropertyEffectsClient=!0,this.__dataCounter=0,this.__dataClientsReady,this.__dataPendingClients,this.__dataToNotify,this.__dataLinkedPaths,this.__dataHasPaths,this.__dataCompoundStorage,this.__dataHost,this.__dataTemp,this.__dataClientsInitialized,this.__data,this.__dataPending,this.__dataOld,this.__computeEffects,this.__reflectEffects,this.__notifyEffects,this.__propagateEffects,this.__observeEffects,this.__readOnly,this.__templateInfo}get PROPERTY_EFFECT_TYPES(){return vt}_initializeProperties(){super._initializeProperties(),Vt.registerHost(this),this.__dataClientsReady=!1,this.__dataPendingClients=null,this.__dataToNotify=null,this.__dataLinkedPaths=null,this.__dataHasPaths=!1,this.__dataCompoundStorage=this.__dataCompoundStorage||null,this.__dataHost=this.__dataHost||null,this.__dataTemp={},this.__dataClientsInitialized=!1}_initializeProtoProperties(e){this.__data=Object.create(e),this.__dataPending=Object.create(e),this.__dataOld={}}_initializeInstanceProperties(e){let t=this[vt.READ_ONLY];for(let r in e)t&&t[r]||(this.__dataPending=this.__dataPending||{},this.__dataOld=this.__dataOld||{},this.__data[r]=this.__dataPending[r]=e[r])}_addPropertyEffect(e,t,r){this._createPropertyAccessor(e,t==vt.READ_ONLY);let n=Ct(this,t)[e];n||(n=this[t][e]=[]),n.push(r)}_removePropertyEffect(e,t,r){let n=Ct(this,t)[e],i=n.indexOf(r);i>=0&&n.splice(i,1)}_hasPropertyEffect(e,t){let r=this[t];return Boolean(r&&r[e])}_hasReadOnlyEffect(e){return this._hasPropertyEffect(e,vt.READ_ONLY)}_hasNotifyEffect(e){return this._hasPropertyEffect(e,vt.NOTIFY)}_hasReflectEffect(e){return this._hasPropertyEffect(e,vt.REFLECT)}_hasComputedEffect(e){return this._hasPropertyEffect(e,vt.COMPUTE)}_setPendingPropertyOrPath(e,t,r,n){if(n||Fe(Array.isArray(e)?e[0]:e)!==e){if(!n){let r=Ke(this,e);if(!(e=qe(this,e,t))||!super._shouldPropertyChange(e,t,r))return!1}if(this.__dataHasPaths=!0,this._setPendingProperty(e,t,r))return function(e,t,r){let n=e.__dataLinkedPaths;if(n){let i;for(let s in n){let o=n[s];Be(s,t)?(i=ze(s,o,t),e._setPendingPropertyOrPath(i,r,!0,!0)):Be(o,t)&&(i=ze(o,s,t),e._setPendingPropertyOrPath(i,r,!0,!0))}}}(this,e,t),!0}else{if(this.__dataHasAccessor&&this.__dataHasAccessor[e])return this._setPendingProperty(e,t,r);this[e]=t}return!1}_setUnmanagedPropertyToNode(e,t,r){r===e[t]&&"object"!=typeof r||("className"===t&&(e=De(e)),e[t]=r)}_setPendingProperty(e,t,r){let n=this.__dataHasPaths&&Re(e),i=n?this.__dataTemp:this.__data;return!!this._shouldPropertyChange(e,t,i[e])&&(this.__dataPending||(this.__dataPending={},this.__dataOld={}),e in this.__dataOld||(this.__dataOld[e]=this.__data[e]),n?this.__dataTemp[e]=t:this.__data[e]=t,this.__dataPending[e]=t,(n||this[vt.NOTIFY]&&this[vt.NOTIFY][e])&&(this.__dataToNotify=this.__dataToNotify||{},this.__dataToNotify[e]=r),!0)}_setProperty(e,t){this._setPendingProperty(e,t,!0)&&this._invalidateProperties()}_invalidateProperties(){this.__dataReady&&this._flushProperties()}_enqueueClient(e){this.__dataPendingClients=this.__dataPendingClients||[],e!==this&&this.__dataPendingClients.push(e)}_flushProperties(){this.__dataCounter++,super._flushProperties(),this.__dataCounter--}_flushClients(){this.__dataClientsReady?this.__enableOrFlushClients():(this.__dataClientsReady=!0,this._readyClients(),this.__dataReady=!0)}__enableOrFlushClients(){let e=this.__dataPendingClients;if(e){this.__dataPendingClients=null;for(let t=0;t<e.length;t++){let r=e[t];r.__dataEnabled?r.__dataPending&&r._flushProperties():r._enableProperties()}}}_readyClients(){this.__enableOrFlushClients()}setProperties(e,t){for(let r in e)!t&&this[vt.READ_ONLY]&&this[vt.READ_ONLY][r]||this._setPendingPropertyOrPath(r,e[r],!0);this._invalidateProperties()}ready(){this._flushProperties(),this.__dataClientsReady||this._flushClients(),this.__dataPending&&this._flushProperties()}_propertiesChanged(e,t,r){let n=this.__dataHasPaths;this.__dataHasPaths=!1,function(e,t,r,n){let i=e[vt.COMPUTE];if(i){let s=t;for(;Pt(e,i,s,r,n);)Object.assign(r,e.__dataOld),Object.assign(t,e.__dataPending),s=e.__dataPending,e.__dataPending=null}}(this,t,r,n);let i=this.__dataToNotify;this.__dataToNotify=null,this._propagatePropertyChanges(t,r,n),this._flushClients(),Pt(this,this[vt.REFLECT],t,r,n),Pt(this,this[vt.OBSERVE],t,r,n),i&&function(e,t,r,n,i){let s,o,a=e[vt.NOTIFY],l=bt++;for(let o in t)t[o]&&(a&&St(e,a,l,o,r,n,i)?s=!0:i&&Ot(e,o,r)&&(s=!0));s&&(o=e.__dataHost)&&o._invalidateProperties&&o._invalidateProperties()}(this,i,t,r,n),1==this.__dataCounter&&(this.__dataTemp={})}_propagatePropertyChanges(e,t,r){this[vt.PROPAGATE]&&Pt(this,this[vt.PROPAGATE],e,t,r);let n=this.__templateInfo;for(;n;)Pt(this,n.propertyEffects,e,t,r,n.nodeList),n=n.nextTemplateInfo}linkPaths(e,t){e=je(e),t=je(t),this.__dataLinkedPaths=this.__dataLinkedPaths||{},this.__dataLinkedPaths[e]=t}unlinkPaths(e){e=je(e),this.__dataLinkedPaths&&delete this.__dataLinkedPaths[e]}notifySplices(e,t){let r={path:""};Yt(this,Ke(this,e,r),r.path,t)}get(e,t){return Ke(t||this,e)}set(e,t,r){r?qe(r,e,t):this[vt.READ_ONLY]&&this[vt.READ_ONLY][e]||this._setPendingPropertyOrPath(e,t,!0)&&this._invalidateProperties()}push(e,...t){let r={path:""},n=Ke(this,e,r),i=n.length,s=n.push(...t);return t.length&&Ut(this,n,r.path,i,t.length,[]),s}pop(e){let t={path:""},r=Ke(this,e,t),n=Boolean(r.length),i=r.pop();return n&&Ut(this,r,t.path,r.length,0,[i]),i}splice(e,t,r,...n){let i,s={path:""},o=Ke(this,e,s);return t<0?t=o.length-Math.floor(-t):t&&(t=Math.floor(t)),i=2===arguments.length?o.splice(t):o.splice(t,r,...n),(n.length||i.length)&&Ut(this,o,s.path,t,n.length,i),i}shift(e){let t={path:""},r=Ke(this,e,t),n=Boolean(r.length),i=r.shift();return n&&Ut(this,r,t.path,0,0,[i]),i}unshift(e,...t){let r={path:""},n=Ke(this,e,r),i=n.unshift(...t);return t.length&&Ut(this,n,r.path,0,t.length,[]),i}notifyPath(e,t){let r;if(1==arguments.length){let n={path:""};t=Ke(this,e,n),r=n.path}else r=Array.isArray(e)?je(e):e;this._setPendingPropertyOrPath(r,t,!0,!0)&&this._invalidateProperties()}_createReadOnlyProperty(e,t){var r;this._addPropertyEffect(e,vt.READ_ONLY),t&&(this["_set"+(r=e,r[0].toUpperCase()+r.substring(1))]=function(t){this._setProperty(e,t)})}_createPropertyObserver(e,t,r){let n={property:e,method:t,dynamicFn:Boolean(r)};this._addPropertyEffect(e,vt.OBSERVE,{fn:Et,info:n,trigger:{name:e}}),r&&this._addPropertyEffect(t,vt.OBSERVE,{fn:Et,info:n,trigger:{name:t}})}_createMethodObserver(e,t){let r=$t(e);if(!r)throw new Error("Malformed observer expression '"+e+"'");Ft(this,r,vt.OBSERVE,Ht,null,t)}_createNotifyingProperty(e){this._addPropertyEffect(e,vt.NOTIFY,{fn:kt,info:{eventName:Xe(e)+"-changed",property:e}})}_createReflectedProperty(e){let t=this.constructor.attributeNameForProperty(e);"-"===t[0]?console.warn("Property "+e+" cannot be reflected to attribute "+t+' because "-" is not a valid starting attribute name. Use a lowercase first letter for the property instead.'):this._addPropertyEffect(e,vt.REFLECT,{fn:At,info:{attrName:t}})}_createComputedProperty(e,t,r){let n=$t(t);if(!n)throw new Error("Malformed computed expression '"+t+"'");Ft(this,n,vt.COMPUTE,Nt,e,r)}_marshalArgs(e,t,r){const n=this.__data,i=[];for(let s=0,o=e.length;s<o;s++){let{name:o,structured:a,wildcard:l,value:d,literal:p}=e[s];if(!p)if(l){const e=Be(o,t),i=qt(n,r,e?t:o);d={path:e?t:o,value:i,base:e?Ke(n,o):i}}else d=a?qt(n,r,o):n[o];i[s]=d}return i}static addPropertyEffect(e,t,r){this.prototype._addPropertyEffect(e,t,r)}static createPropertyObserver(e,t,r){this.prototype._createPropertyObserver(e,t,r)}static createMethodObserver(e,t){this.prototype._createMethodObserver(e,t)}static createNotifyingProperty(e){this.prototype._createNotifyingProperty(e)}static createReadOnlyProperty(e,t){this.prototype._createReadOnlyProperty(e,t)}static createReflectedProperty(e){this.prototype._createReflectedProperty(e)}static createComputedProperty(e,t,r){this.prototype._createComputedProperty(e,t,r)}static bindTemplate(e){return this.prototype._bindTemplate(e)}_bindTemplate(e,t){let r=this.constructor._parseTemplate(e),n=this.__templateInfo==r;if(!n)for(let e in r.propertyEffects)this._createPropertyAccessor(e);if(t&&(r=Object.create(r),r.wasPreBound=n,!n&&this.__templateInfo)){let e=this.__templateInfoLast||this.__templateInfo;return this.__templateInfoLast=e.nextTemplateInfo=r,r.previousTemplateInfo=e,r}return this.__templateInfo=r}static _addTemplatePropertyEffect(e,t,r){(e.hostProps=e.hostProps||{})[t]=!0;let n=e.propertyEffects=e.propertyEffects||{};(n[t]=n[t]||[]).push(r)}_stampTemplate(e){Vt.beginHosting(this);let t=super._stampTemplate(e);Vt.endHosting(this);let r=this._bindTemplate(e,!0);if(r.nodeList=t.nodeList,!r.wasPreBound){let e=r.childNodes=[];for(let r=t.firstChild;r;r=r.nextSibling)e.push(r)}return t.templateInfo=r,function(e,t){let{nodeList:r,nodeInfoList:n}=t;if(n.length)for(let t=0;t<n.length;t++){let i=n[t],s=r[t],o=i.bindings;if(o)for(let t=0;t<o.length;t++){let r=o[t];Dt(s,r),Rt(s,e,r)}s.__dataHost=e}}(this,r),this.__dataReady&&Pt(this,r.propertyEffects,this.__data,null,!1,r.nodeList),t}_removeBoundDom(e){let t=e.templateInfo;t.previousTemplateInfo&&(t.previousTemplateInfo.nextTemplateInfo=t.nextTemplateInfo),t.nextTemplateInfo&&(t.nextTemplateInfo.previousTemplateInfo=t.previousTemplateInfo),this.__templateInfoLast==t&&(this.__templateInfoLast=t.previousTemplateInfo),t.previousTemplateInfo=t.nextTemplateInfo=null;let r=t.childNodes;for(let e=0;e<r.length;e++){let t=r[e];t.parentNode.removeChild(t)}}static _parseTemplateNode(e,r,n){let i=t._parseTemplateNode.call(this,e,r,n);if(e.nodeType===Node.TEXT_NODE){let t=this._parseBindings(e.textContent,r);t&&(e.textContent=jt(t)||" ",It(this,r,n,"text","textContent",t),i=!0)}return i}static _parseTemplateNodeAttribute(e,r,n,i,s){let o=this._parseBindings(s,r);if(o){let t=i,s="property";wt.test(i)?s="attribute":"$"==i[i.length-1]&&(i=i.slice(0,-1),s="attribute");let a=jt(o);return a&&"attribute"==s&&("class"==i&&e.hasAttribute("class")&&(a+=" "+e.getAttribute(i)),e.setAttribute(i,a)),"input"===e.localName&&"value"===t&&e.setAttribute(t,""),e.removeAttribute(t),"property"===s&&(i=Ve(i)),It(this,r,n,s,i,o,a),!0}return t._parseTemplateNodeAttribute.call(this,e,r,n,i,s)}static _parseTemplateNestedTemplate(e,r,n){let i=t._parseTemplateNestedTemplate.call(this,e,r,n),s=n.templateInfo.hostProps;for(let e in s){It(this,r,n,"property","_host_"+e,[{mode:"{",source:e,dependencies:[e]}])}return i}static _parseBindings(e,t){let r,n=[],i=0;for(;null!==(r=zt.exec(e));){r.index>i&&n.push({literal:e.slice(i,r.index)});let s=r[1][0],o=Boolean(r[2]),a=r[3].trim(),l=!1,d="",p=-1;"{"==s&&(p=a.indexOf("::"))>0&&(d=a.substring(p+2),a=a.substring(0,p),l=!0);let c=$t(a),h=[];if(c){let{args:e,methodName:r}=c;for(let t=0;t<e.length;t++){let r=e[t];r.literal||h.push(r)}let n=t.dynamicFns;(n&&n[r]||c.static)&&(h.push(r),c.dynamicFn=!0)}else h.push(a);n.push({source:a,mode:s,negate:o,customEvent:l,signature:c,dependencies:h,event:d}),i=zt.lastIndex}if(i&&i<e.length){let t=e.substring(i);t&&n.push({literal:t})}return n.length?n:null}static _evaluateBinding(e,t,r,n,i,s){let o;return o=t.signature?Ht(e,r,n,0,t.signature):r!=t.source?Ke(e,t.source):s&&Re(r)?Ke(e,r):e.__data[r],t.negate&&(o=!o),o}}});const Vt=new class{constructor(){this.stack=[]}registerHost(e){if(this.stack.length){this.stack[this.stack.length-1]._enqueueClient(e)}}beginHosting(e){this.stack.push(e)}endHosting(e){let t=this.stack.length;t&&this.stack[t-1]==e&&this.stack.pop()}};
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const Xt=be(e=>{const t=st(e);function r(e){const t=Object.getPrototypeOf(e);return t.prototype instanceof i?t:null}function n(e){if(!e.hasOwnProperty(JSCompiler_renameProperty("__ownProperties",e))){let t=null;if(e.hasOwnProperty(JSCompiler_renameProperty("properties",e))){const r=e.properties;r&&(t=
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
function(e){const t={};for(let r in e){const n=e[r];t[r]="function"==typeof n?{type:n}:n}return t}(r))}e.__ownProperties=t}return e.__ownProperties}class i extends t{static get observedAttributes(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__observedAttributes",this))){this.prototype;const e=this._properties;this.__observedAttributes=e?Object.keys(e).map(e=>this.attributeNameForProperty(e)):[]}return this.__observedAttributes}static finalize(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__finalized",this))){const e=r(this);e&&e.finalize(),this.__finalized=!0,this._finalizeClass()}}static _finalizeClass(){const e=n(this);e&&this.createProperties(e)}static get _properties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__properties",this))){const e=r(this);this.__properties=Object.assign({},e&&e._properties,n(this))}return this.__properties}static typeForProperty(e){const t=this._properties[e];return t&&t.type}_initializeProperties(){this.constructor.finalize(),super._initializeProperties()}connectedCallback(){super.connectedCallback&&super.connectedCallback(),this._enableProperties()}disconnectedCallback(){super.disconnectedCallback&&super.disconnectedCallback()}}return i}),Wt="3.3.1",Gt=window.ShadyCSS&&window.ShadyCSS.cssBuild,Zt=be(e=>{const t=Xt(Jt(e));function r(e,t,r,n){r.computed&&(r.readOnly=!0),r.computed&&(e._hasReadOnlyEffect(t)?console.warn(`Cannot redefine computed property '${t}'.`):e._createComputedProperty(t,r.computed,n)),r.readOnly&&!e._hasReadOnlyEffect(t)?e._createReadOnlyProperty(t,!r.computed):!1===r.readOnly&&e._hasReadOnlyEffect(t)&&console.warn(`Cannot make readOnly property '${t}' non-readOnly.`),r.reflectToAttribute&&!e._hasReflectEffect(t)?e._createReflectedProperty(t):!1===r.reflectToAttribute&&e._hasReflectEffect(t)&&console.warn(`Cannot make reflected property '${t}' non-reflected.`),r.notify&&!e._hasNotifyEffect(t)?e._createNotifyingProperty(t):!1===r.notify&&e._hasNotifyEffect(t)&&console.warn(`Cannot make notify property '${t}' non-notify.`),r.observer&&e._createPropertyObserver(t,r.observer,n[r.observer]),e._addPropertyToAttributeMap(t)}function n(e,t,r,n){if(!Gt){const i=t.content.querySelectorAll("style"),s=Ie(t),o=function(e){let t=Te(e);return t?Me(t):[]}(r),a=t.content.firstElementChild;for(let r=0;r<o.length;r++){let i=o[r];i.textContent=e._processStyleText(i.textContent,n),t.content.insertBefore(i,a)}let l=0;for(let t=0;t<s.length;t++){let r=s[t],o=i[l];o!==r?(r=r.cloneNode(!0),o.parentNode.insertBefore(r,o)):l++,r.textContent=e._processStyleText(r.textContent,n)}}window.ShadyCSS&&window.ShadyCSS.prepareTemplate(t,r)}return class extends t{static get polymerElementVersion(){return Wt}static _finalizeClass(){t._finalizeClass.call(this);const e=((r=this).hasOwnProperty(JSCompiler_renameProperty("__ownObservers",r))||(r.__ownObservers=r.hasOwnProperty(JSCompiler_renameProperty("observers",r))?r.observers:null),r.__ownObservers);var r;e&&this.createObservers(e,this._properties),this._prepareTemplate()}static _prepareTemplate(){let e=this.template;e&&("string"==typeof e?(console.error("template getter must return HTMLTemplateElement"),e=null):_e||(e=e.cloneNode(!0))),this.prototype._template=e}static createProperties(e){for(let t in e)r(this.prototype,t,e[t],e)}static createObservers(e,t){const r=this.prototype;for(let n=0;n<e.length;n++)r._createMethodObserver(e[n],t)}static get template(){return this.hasOwnProperty(JSCompiler_renameProperty("_template",this))||(this._template=this.prototype.hasOwnProperty(JSCompiler_renameProperty("_template",this.prototype))?this.prototype._template:function(e){let t=null;if(e&&(!ue||fe)&&(t=Se.import(e,"template"),ue&&!t))throw new Error(`strictTemplatePolicy: expecting dom-module or null template for ${e}`);return t}(this.is)||Object.getPrototypeOf(this.prototype).constructor.template),this._template}static set template(e){this._template=e}static get importPath(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_importPath",this))){const e=this.importMeta;if(e)this._importPath=le(e.url);else{const e=Se.import(this.is);this._importPath=e&&e.assetpath||Object.getPrototypeOf(this.prototype).constructor.importPath}}return this._importPath}constructor(){super(),this._template,this._importPath,this.rootPath,this.importPath,this.root,this.$}_initializeProperties(){this.constructor.finalize(),this.constructor._finalizeTemplate(this.localName),super._initializeProperties(),this.rootPath=pe,this.importPath=this.constructor.importPath;let e=function(e){if(!e.hasOwnProperty(JSCompiler_renameProperty("__propertyDefaults",e))){e.__propertyDefaults=null;let t=e._properties;for(let r in t){let n=t[r];"value"in n&&(e.__propertyDefaults=e.__propertyDefaults||{},e.__propertyDefaults[r]=n)}}return e.__propertyDefaults}(this.constructor);if(e)for(let t in e){let r=e[t];if(!this.hasOwnProperty(t)){let e="function"==typeof r.value?r.value.call(this):r.value;this._hasAccessor(t)?this._setPendingProperty(t,e,!0):this[t]=e}}}static _processStyleText(e,t){return ae(e,t)}static _finalizeTemplate(e){const t=this.prototype._template;if(t&&!t.__polymerFinalized){t.__polymerFinalized=!0;const r=this.importPath;n(this,t,e,r?oe(r):""),this.prototype._bindTemplate(t)}}connectedCallback(){window.ShadyCSS&&this._template&&window.ShadyCSS.styleElement(this),super.connectedCallback()}ready(){this._template&&(this.root=this._stampTemplate(this._template),this.$=this.root.$),super.ready()}_readyClients(){this._template&&(this.root=this._attachDom(this.root)),super._readyClients()}_attachDom(e){const t=De(this);if(t.attachShadow)return e?(t.shadowRoot||(t.attachShadow({mode:"open",shadyUpgradeFragment:e}),t.shadowRoot.appendChild(e)),me&&window.ShadyDOM&&window.ShadyDOM.flushInitial(t.shadowRoot),t.shadowRoot):null;throw new Error("ShadowDOM not available. PolymerElement can create dom as children instead of in ShadowDOM by setting `this.root = this;` before `ready`.")}updateStyles(e){window.ShadyCSS&&window.ShadyCSS.styleSubtree(this,e)}resolveUrl(e,t){return!t&&this.importPath&&(t=oe(this.importPath)),oe(e,t)}static _parseTemplateContent(e,r,n){return r.dynamicFns=r.dynamicFns||this._properties,t._parseTemplateContent.call(this,e,r,n)}static _addTemplatePropertyEffect(e,r,n){return!_e||r in this._properties||console.warn(`Property '${r}' used in template but not declared in 'properties'; `+"attribute will not be observed."),t._addTemplatePropertyEffect.call(this,e,r,n)}}});
/**
 * @fileoverview
 * @suppress {checkPrototypalTypes}
 * @license Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt The complete set of authors may be found
 * at http://polymer.github.io/AUTHORS.txt The complete set of contributors may
 * be found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by
 * Google as part of the polymer project is also subject to an additional IP
 * rights grant found at http://polymer.github.io/PATENTS.txt
 */
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
class Qt{constructor(){this._asyncModule=null,this._callback=null,this._timer=null}setConfig(e,t){this._asyncModule=e,this._callback=t,this._timer=this._asyncModule.run(()=>{this._timer=null,er.delete(this),this._callback()})}cancel(){this.isActive()&&(this._cancelAsync(),er.delete(this))}_cancelAsync(){this.isActive()&&(this._asyncModule.cancel(this._timer),this._timer=null)}flush(){this.isActive()&&(this.cancel(),this._callback())}isActive(){return null!=this._timer}static debounce(e,t,r){return e instanceof Qt?e._cancelAsync():e=new Qt,e.setConfig(t,r),e}}let er=new Set;const tr=function(e){er.add(e)},rr=function(){const e=Boolean(er.size);return er.forEach(e=>{try{e.flush()}catch(e){setTimeout(()=>{throw e})}}),e};
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
let nr="string"==typeof document.head.style.touchAction,ir="__polymerGestures",sr="__polymerGesturesHandled",or="__polymerGesturesTouchAction",ar=25,lr=5,dr=2500,pr=["mousedown","mousemove","mouseup","click"],cr=[0,1,4,2],hr=function(){try{return 1===new MouseEvent("test",{buttons:1}).buttons}catch(e){return!1}}();function ur(e){return pr.indexOf(e)>-1}let fr=!1;function _r(e){if(!ur(e)&&"touchend"!==e)return nr&&fr&&he?{passive:!0}:void 0}!function(){try{let e=Object.defineProperty({},"passive",{get(){fr=!0}});window.addEventListener("test",null,e),window.removeEventListener("test",null,e)}catch(e){}}();let mr=navigator.userAgent.match(/iP(?:[oa]d|hone)|Android/);const yr=[],gr={button:!0,input:!0,keygen:!0,meter:!0,output:!0,textarea:!0,progress:!0,select:!0},br={button:!0,command:!0,fieldset:!0,input:!0,keygen:!0,optgroup:!0,option:!0,select:!0,textarea:!0};function vr(e){let t=Array.prototype.slice.call(e.labels||[]);if(!t.length){t=[];let r=e.getRootNode();if(e.id){let n=r.querySelectorAll(`label[for = ${e.id}]`);for(let e=0;e<n.length;e++)t.push(n[e])}}return t}let wr=function(e){let t=e.sourceCapabilities;var r;if((!t||t.firesTouchEvents)&&(e[sr]={skip:!0},"click"===e.type)){let t=!1,n=Or(e);for(let e=0;e<n.length;e++){if(n[e].nodeType===Node.ELEMENT_NODE)if("label"===n[e].localName)yr.push(n[e]);else if(r=n[e],gr[r.localName]){let r=vr(n[e]);for(let e=0;e<r.length;e++)t=t||yr.indexOf(r[e])>-1}if(n[e]===Sr.mouse.target)return}if(t)return;e.preventDefault(),e.stopPropagation()}};function Cr(e){let t=mr?["click"]:pr;for(let r,n=0;n<t.length;n++)r=t[n],e?(yr.length=0,document.addEventListener(r,wr,!0)):document.removeEventListener(r,wr,!0)}function Pr(e){let t=e.type;if(!ur(t))return!1;if("mousemove"===t){let t=void 0===e.buttons?1:e.buttons;return e instanceof window.MouseEvent&&!hr&&(t=cr[e.which]||0),Boolean(1&t)}return 0===(void 0===e.button?0:e.button)}let Sr={mouse:{target:null,mouseIgnoreJob:null},touch:{x:0,y:0,id:-1,scrollDecided:!1}};function xr(e,t,r){e.movefn=t,e.upfn=r,document.addEventListener("mousemove",t),document.addEventListener("mouseup",r)}function Er(e){document.removeEventListener("mousemove",e.movefn),document.removeEventListener("mouseup",e.upfn),e.movefn=null,e.upfn=null}ye&&document.addEventListener("touchend",(function(e){if(!ye)return;Sr.mouse.mouseIgnoreJob||Cr(!0),Sr.mouse.target=Or(e)[0],Sr.mouse.mouseIgnoreJob=Qt.debounce(Sr.mouse.mouseIgnoreJob,tt.after(dr),(function(){Cr(),Sr.mouse.target=null,Sr.mouse.mouseIgnoreJob=null}))}),!!fr&&{passive:!0});const Or=window.ShadyDOM&&window.ShadyDOM.noPatch?window.ShadyDOM.composedPath:e=>e.composedPath&&e.composedPath()||[],Tr={},kr=[];function Ar(e){const t=Or(e);return t.length>0?t[0]:e.target}function Nr(e){let t,r=e.type,n=e.currentTarget[ir];if(!n)return;let i=n[r];if(i){if(!e[sr]&&(e[sr]={},"touch"===r.slice(0,5))){let t=(e=e).changedTouches[0];if("touchstart"===r&&1===e.touches.length&&(Sr.touch.id=t.identifier),Sr.touch.id!==t.identifier)return;nr||"touchstart"!==r&&"touchmove"!==r||function(e){let t=e.changedTouches[0],r=e.type;if("touchstart"===r)Sr.touch.x=t.clientX,Sr.touch.y=t.clientY,Sr.touch.scrollDecided=!1;else if("touchmove"===r){if(Sr.touch.scrollDecided)return;Sr.touch.scrollDecided=!0;let r=function(e){let t="auto",r=Or(e);for(let e,n=0;n<r.length;n++)if(e=r[n],e[or]){t=e[or];break}return t}(e),n=!1,i=Math.abs(Sr.touch.x-t.clientX),s=Math.abs(Sr.touch.y-t.clientY);e.cancelable&&("none"===r?n=!0:"pan-x"===r?n=s>i:"pan-y"===r&&(n=i>s)),n?e.preventDefault():Fr("track")}}(e)}if(t=e[sr],!t.skip){for(let r,n=0;n<kr.length;n++)r=kr[n],i[r.name]&&!t[r.name]&&r.flow&&r.flow.start.indexOf(e.type)>-1&&r.reset&&r.reset();for(let n,s=0;s<kr.length;s++)n=kr[s],i[n.name]&&!t[n.name]&&(t[n.name]=!0,n[r](e))}}}function Ir(e,t,r){return!!Tr[t]&&(function(e,t,r){let n=Tr[t],i=n.deps,s=n.name,o=e[ir];o||(e[ir]=o={});for(let t,r,n=0;n<i.length;n++)t=i[n],mr&&ur(t)&&"click"!==t||(r=o[t],r||(o[t]=r={_count:0}),0===r._count&&e.addEventListener(t,Nr,_r(t)),r[s]=(r[s]||0)+1,r._count=(r._count||0)+1);e.addEventListener(t,r),n.touchAction&&Dr(e,n.touchAction)}(e,t,r),!0)}function Mr(e,t,r){return!!Tr[t]&&(function(e,t,r){let n=Tr[t],i=n.deps,s=n.name,o=e[ir];if(o)for(let t,r,n=0;n<i.length;n++)t=i[n],r=o[t],r&&r[s]&&(r[s]=(r[s]||1)-1,r._count=(r._count||1)-1,0===r._count&&e.removeEventListener(t,Nr,_r(t)));e.removeEventListener(t,r)}(e,t,r),!0)}function Lr(e){kr.push(e);for(let t=0;t<e.emits.length;t++)Tr[e.emits[t]]=e}function Dr(e,t){nr&&e instanceof HTMLElement&&nt.run(()=>{e.style.touchAction=t}),e[or]=t}function Rr(e,t,r){let n=new Event(t,{bubbles:!0,cancelable:!0,composed:!0});if(n.detail=r,De(e).dispatchEvent(n),n.defaultPrevented){let e=r.preventer||r.sourceEvent;e&&e.preventDefault&&e.preventDefault()}}function Fr(e){let t=function(e){for(let t,r=0;r<kr.length;r++){t=kr[r];for(let r,n=0;n<t.emits.length;n++)if(r=t.emits[n],r===e)return t}return null}(e);t.info&&(t.info.prevent=!0)}function Hr(e,t,r,n){t&&Rr(t,e,{x:r.clientX,y:r.clientY,sourceEvent:r,preventer:n,prevent:function(e){return Fr(e)}})}function Br(e,t,r){if(e.prevent)return!1;if(e.started)return!0;let n=Math.abs(e.x-t),i=Math.abs(e.y-r);return n>=lr||i>=lr}function zr(e,t,r){if(!t)return;let n,i=e.moves[e.moves.length-2],s=e.moves[e.moves.length-1],o=s.x-e.x,a=s.y-e.y,l=0;i&&(n=s.x-i.x,l=s.y-i.y),Rr(t,"track",{state:e.state,x:r.clientX,y:r.clientY,dx:o,dy:a,ddx:n,ddy:l,sourceEvent:r,hover:function(){return function(e,t){let r=document.elementFromPoint(e,t),n=r;for(;n&&n.shadowRoot&&!window.ShadyDOM;){let i=n;if(n=n.shadowRoot.elementFromPoint(e,t),i===n)break;n&&(r=n)}return r}(r.clientX,r.clientY)}})}function jr(e,t,r){let n=Math.abs(t.clientX-e.x),i=Math.abs(t.clientY-e.y),s=Ar(r||t);!s||br[s.localName]&&s.hasAttribute("disabled")||(isNaN(n)||isNaN(i)||n<=ar&&i<=ar||function(e){if("click"===e.type){if(0===e.detail)return!0;let t=Ar(e);if(!t.nodeType||t.nodeType!==Node.ELEMENT_NODE)return!0;let r=t.getBoundingClientRect(),n=e.pageX,i=e.pageY;return!(n>=r.left&&n<=r.right&&i>=r.top&&i<=r.bottom)}return!1}(t))&&(e.prevent||Rr(s,"tap",{x:t.clientX,y:t.clientY,sourceEvent:t,preventer:r}))}Lr({name:"downup",deps:["mousedown","touchstart","touchend"],flow:{start:["mousedown","touchstart"],end:["mouseup","touchend"]},emits:["down","up"],info:{movefn:null,upfn:null},reset:function(){Er(this.info)},mousedown:function(e){if(!Pr(e))return;let t=Ar(e),r=this;xr(this.info,(function(e){Pr(e)||(Hr("up",t,e),Er(r.info))}),(function(e){Pr(e)&&Hr("up",t,e),Er(r.info)})),Hr("down",t,e)},touchstart:function(e){Hr("down",Ar(e),e.changedTouches[0],e)},touchend:function(e){Hr("up",Ar(e),e.changedTouches[0],e)}}),Lr({name:"track",touchAction:"none",deps:["mousedown","touchstart","touchmove","touchend"],flow:{start:["mousedown","touchstart"],end:["mouseup","touchend"]},emits:["track"],info:{x:0,y:0,state:"start",started:!1,moves:[],addMove:function(e){this.moves.length>2&&this.moves.shift(),this.moves.push(e)},movefn:null,upfn:null,prevent:!1},reset:function(){this.info.state="start",this.info.started=!1,this.info.moves=[],this.info.x=0,this.info.y=0,this.info.prevent=!1,Er(this.info)},mousedown:function(e){if(!Pr(e))return;let t=Ar(e),r=this,n=function(e){let n=e.clientX,i=e.clientY;Br(r.info,n,i)&&(r.info.state=r.info.started?"mouseup"===e.type?"end":"track":"start","start"===r.info.state&&Fr("tap"),r.info.addMove({x:n,y:i}),Pr(e)||(r.info.state="end",Er(r.info)),t&&zr(r.info,t,e),r.info.started=!0)};xr(this.info,n,(function(e){r.info.started&&n(e),Er(r.info)})),this.info.x=e.clientX,this.info.y=e.clientY},touchstart:function(e){let t=e.changedTouches[0];this.info.x=t.clientX,this.info.y=t.clientY},touchmove:function(e){let t=Ar(e),r=e.changedTouches[0],n=r.clientX,i=r.clientY;Br(this.info,n,i)&&("start"===this.info.state&&Fr("tap"),this.info.addMove({x:n,y:i}),zr(this.info,t,r),this.info.state="track",this.info.started=!0)},touchend:function(e){let t=Ar(e),r=e.changedTouches[0];this.info.started&&(this.info.state="end",this.info.addMove({x:r.clientX,y:r.clientY}),zr(this.info,t,r))}}),Lr({name:"tap",deps:["mousedown","click","touchstart","touchend"],flow:{start:["mousedown","touchstart"],end:["click","touchend"]},emits:["tap"],info:{x:NaN,y:NaN,prevent:!1},reset:function(){this.info.x=NaN,this.info.y=NaN,this.info.prevent=!1},mousedown:function(e){Pr(e)&&(this.info.x=e.clientX,this.info.y=e.clientY)},click:function(e){Pr(e)&&jr(this.info,e)},touchstart:function(e){const t=e.changedTouches[0];this.info.x=t.clientX,this.info.y=t.clientY},touchend:function(e){jr(this.info,e.changedTouches[0],e)}});const $r=Ar,Kr=be(e=>{return class extends e{_addEventListenerToNode(e,t,r){Ir(e,t,r)||super._addEventListenerToNode(e,t,r)}_removeEventListenerFromNode(e,t,r){Mr(e,t,r)||super._removeEventListenerFromNode(e,t,r)}}}),qr=/:host\(:dir\((ltr|rtl)\)\)/g,Yr=':host([dir="$1"])',Ur=/([\s\w-#\.\[\]\*]*):dir\((ltr|rtl)\)/g,Jr=':host([dir="$2"]) $1',Vr=/:dir\((?:ltr|rtl)\)/,Xr=Boolean(window.ShadyDOM&&window.ShadyDOM.inUse),Wr=[];
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let Gr=null,Zr="";function Qr(){Zr=document.documentElement.getAttribute("dir")}function en(e){if(!e.__autoDirOptOut){e.setAttribute("dir",Zr)}}function tn(){Qr(),Zr=document.documentElement.getAttribute("dir");for(let e=0;e<Wr.length;e++)en(Wr[e])}const rn=be(e=>{Xr||Gr||(Qr(),Gr=new MutationObserver(tn),Gr.observe(document.documentElement,{attributes:!0,attributeFilter:["dir"]}));const t=lt(e);class r extends t{static _processStyleText(e,r){return e=t._processStyleText.call(this,e,r),!Xr&&Vr.test(e)&&(e=this._replaceDirInCssText(e),this.__activateDir=!0),e}static _replaceDirInCssText(e){let t=e;return t=t.replace(qr,Yr),t=t.replace(Ur,Jr),t}constructor(){super(),this.__autoDirOptOut=!1}ready(){super.ready(),this.__autoDirOptOut=this.hasAttribute("dir")}connectedCallback(){t.prototype.connectedCallback&&super.connectedCallback(),this.constructor.__activateDir&&(Gr&&Gr.takeRecords().length&&tn(),Wr.push(this),en(this))}disconnectedCallback(){if(t.prototype.disconnectedCallback&&super.disconnectedCallback(),this.constructor.__activateDir){const e=Wr.indexOf(this);e>-1&&Wr.splice(e,1)}}}return r.__activateDir=!1,r});
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let nn=!1,sn=[],on=[];function an(){nn=!0,requestAnimationFrame((function(){nn=!1,function(e){for(;e.length;)ln(e.shift())}(sn),setTimeout((function(){!function(e){for(let t=0,r=e.length;t<r;t++)ln(e.shift())}(on)}))}))}function ln(e){const t=e[0],r=e[1],n=e[2];try{r.apply(t,n)}catch(e){setTimeout(()=>{throw e})}}function dn(e,t,r){nn||an(),on.push([e,t,r])}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function pn(){document.body.removeAttribute("unresolved")}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
function cn(e,t,r){return{index:e,removed:t,addedCount:r}}"interactive"===document.readyState||"complete"===document.readyState?pn():window.addEventListener("DOMContentLoaded",pn);const hn=0,un=1,fn=2,_n=3;function mn(e,t,r,n,i,s){let o,a=0,l=0,d=Math.min(r-t,s-i);if(0==t&&0==i&&(a=function(e,t,r){for(let n=0;n<r;n++)if(!gn(e[n],t[n]))return n;return r}(e,n,d)),r==e.length&&s==n.length&&(l=function(e,t,r){let n=e.length,i=t.length,s=0;for(;s<r&&gn(e[--n],t[--i]);)s++;return s}(e,n,d-a)),i+=a,s-=l,(r-=l)-(t+=a)==0&&s-i==0)return[];if(t==r){for(o=cn(t,[],0);i<s;)o.removed.push(n[i++]);return[o]}if(i==s)return[cn(t,[],r-t)];let p=function(e){let t=e.length-1,r=e[0].length-1,n=e[t][r],i=[];for(;t>0||r>0;){if(0==t){i.push(fn),r--;continue}if(0==r){i.push(_n),t--;continue}let s,o=e[t-1][r-1],a=e[t-1][r],l=e[t][r-1];s=a<l?a<o?a:o:l<o?l:o,s==o?(o==n?i.push(hn):(i.push(un),n=o),t--,r--):s==a?(i.push(_n),t--,n=a):(i.push(fn),r--,n=l)}return i.reverse(),i}(function(e,t,r,n,i,s){let o=s-i+1,a=r-t+1,l=new Array(o);for(let e=0;e<o;e++)l[e]=new Array(a),l[e][0]=e;for(let e=0;e<a;e++)l[0][e]=e;for(let r=1;r<o;r++)for(let s=1;s<a;s++)if(gn(e[t+s-1],n[i+r-1]))l[r][s]=l[r-1][s-1];else{let e=l[r-1][s]+1,t=l[r][s-1]+1;l[r][s]=e<t?e:t}return l}(e,t,r,n,i,s));o=void 0;let c=[],h=t,u=i;for(let e=0;e<p.length;e++)switch(p[e]){case hn:o&&(c.push(o),o=void 0),h++,u++;break;case un:o||(o=cn(h,[],0)),o.addedCount++,h++,o.removed.push(n[u]),u++;break;case fn:o||(o=cn(h,[],0)),o.addedCount++,h++;break;case _n:o||(o=cn(h,[],0)),o.removed.push(n[u]),u++}return o&&c.push(o),c}function yn(e,t){return mn(e,0,e.length,t,0,t.length)}function gn(e,t){return e===t}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function bn(e){return"slot"===e.localName}let vn=class{static getFlattenedNodes(e){const t=De(e);return bn(e)?(e=e,t.assignedNodes({flatten:!0})):Array.from(t.childNodes).map(e=>bn(e)?De(e=e).assignedNodes({flatten:!0}):[e]).reduce((e,t)=>e.concat(t),[])}constructor(e,t){this._shadyChildrenObserver=null,this._nativeChildrenObserver=null,this._connected=!1,this._target=e,this.callback=t,this._effectiveNodes=[],this._observer=null,this._scheduled=!1,this._boundSchedule=()=>{this._schedule()},this.connect(),this._schedule()}connect(){bn(this._target)?this._listenSlots([this._target]):De(this._target).children&&(this._listenSlots(De(this._target).children),window.ShadyDOM?this._shadyChildrenObserver=window.ShadyDOM.observeChildren(this._target,e=>{this._processMutations(e)}):(this._nativeChildrenObserver=new MutationObserver(e=>{this._processMutations(e)}),this._nativeChildrenObserver.observe(this._target,{childList:!0}))),this._connected=!0}disconnect(){bn(this._target)?this._unlistenSlots([this._target]):De(this._target).children&&(this._unlistenSlots(De(this._target).children),window.ShadyDOM&&this._shadyChildrenObserver?(window.ShadyDOM.unobserveChildren(this._shadyChildrenObserver),this._shadyChildrenObserver=null):this._nativeChildrenObserver&&(this._nativeChildrenObserver.disconnect(),this._nativeChildrenObserver=null)),this._connected=!1}_schedule(){this._scheduled||(this._scheduled=!0,nt.run(()=>this.flush()))}_processMutations(e){this._processSlotMutations(e),this.flush()}_processSlotMutations(e){if(e)for(let t=0;t<e.length;t++){let r=e[t];r.addedNodes&&this._listenSlots(r.addedNodes),r.removedNodes&&this._unlistenSlots(r.removedNodes)}}flush(){if(!this._connected)return!1;window.ShadyDOM&&ShadyDOM.flush(),this._nativeChildrenObserver?this._processSlotMutations(this._nativeChildrenObserver.takeRecords()):this._shadyChildrenObserver&&this._processSlotMutations(this._shadyChildrenObserver.takeRecords()),this._scheduled=!1;let e={target:this._target,addedNodes:[],removedNodes:[]},t=this.constructor.getFlattenedNodes(this._target),r=yn(t,this._effectiveNodes);for(let t,n=0;n<r.length&&(t=r[n]);n++)for(let r,n=0;n<t.removed.length&&(r=t.removed[n]);n++)e.removedNodes.push(r);for(let n,i=0;i<r.length&&(n=r[i]);i++)for(let r=n.index;r<n.index+n.addedCount;r++)e.addedNodes.push(t[r]);this._effectiveNodes=t;let n=!1;return(e.addedNodes.length||e.removedNodes.length)&&(n=!0,this.callback.call(this._target,e)),n}_listenSlots(e){for(let t=0;t<e.length;t++){let r=e[t];bn(r)&&r.addEventListener("slotchange",this._boundSchedule)}}_unlistenSlots(e){for(let t=0;t<e.length;t++){let r=e[t];bn(r)&&r.removeEventListener("slotchange",this._boundSchedule)}}};
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const wn=function(){let e,t;do{e=window.ShadyDOM&&ShadyDOM.flush(),window.ShadyCSS&&window.ShadyCSS.ScopingShim&&window.ShadyCSS.ScopingShim.flush(),t=rr()}while(e||t)},Cn=Element.prototype,Pn=Cn.matches||Cn.matchesSelector||Cn.mozMatchesSelector||Cn.msMatchesSelector||Cn.oMatchesSelector||Cn.webkitMatchesSelector,Sn=function(e,t){return Pn.call(e,t)};
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/class xn{constructor(e){window.ShadyDOM&&window.ShadyDOM.inUse&&window.ShadyDOM.patch(e),this.node=e}observeNodes(e){return new vn(this.node,e)}unobserveNodes(e){e.disconnect()}notifyObserver(){}deepContains(e){if(De(this.node).contains(e))return!0;let t=e,r=e.ownerDocument;for(;t&&t!==r&&t!==this.node;)t=De(t).parentNode||De(t).host;return t===this.node}getOwnerRoot(){return De(this.node).getRootNode()}getDistributedNodes(){return"slot"===this.node.localName?De(this.node).assignedNodes({flatten:!0}):[]}getDestinationInsertionPoints(){let e=[],t=De(this.node).assignedSlot;for(;t;)e.push(t),t=De(t).assignedSlot;return e}importNode(e,t){let r=this.node instanceof Document?this.node:this.node.ownerDocument;return De(r).importNode(e,t)}getEffectiveChildNodes(){return vn.getFlattenedNodes(this.node)}queryDistributedElements(e){let t=this.getEffectiveChildNodes(),r=[];for(let n,i=0,s=t.length;i<s&&(n=t[i]);i++)n.nodeType===Node.ELEMENT_NODE&&Sn(n,e)&&r.push(n);return r}get activeElement(){let e=this.node;return void 0!==e._activeElement?e._activeElement:e.activeElement}}function En(e,t){for(let r=0;r<t.length;r++){let n=t[r];Object.defineProperty(e,n,{get:function(){return this.node[n]},configurable:!0})}}class On{constructor(e){this.event=e}get rootTarget(){return this.path[0]}get localTarget(){return this.event.target}get path(){return this.event.composedPath()}}xn.prototype.cloneNode,xn.prototype.appendChild,xn.prototype.insertBefore,xn.prototype.removeChild,xn.prototype.replaceChild,xn.prototype.setAttribute,xn.prototype.removeAttribute,xn.prototype.querySelector,xn.prototype.querySelectorAll,xn.prototype.parentNode,xn.prototype.firstChild,xn.prototype.lastChild,xn.prototype.nextSibling,xn.prototype.previousSibling,xn.prototype.firstElementChild,xn.prototype.lastElementChild,xn.prototype.nextElementSibling,xn.prototype.previousElementSibling,xn.prototype.childNodes,xn.prototype.children,xn.prototype.classList,xn.prototype.textContent,xn.prototype.innerHTML;let Tn=xn;if(window.ShadyDOM&&window.ShadyDOM.inUse&&window.ShadyDOM.noPatch&&window.ShadyDOM.Wrapper){class e extends window.ShadyDOM.Wrapper{}Object.getOwnPropertyNames(xn.prototype).forEach(t=>{"activeElement"!=t&&(e.prototype[t]=xn.prototype[t])}),En(e.prototype,["classList"]),Tn=e,Object.defineProperties(On.prototype,{localTarget:{get(){const e=this.event.currentTarget,t=e&&kn(e).getOwnerRoot(),r=this.path;for(let e=0;e<r.length;e++){const n=r[e];if(kn(n).getOwnerRoot()===t)return n}},configurable:!0},path:{get(){return window.ShadyDOM.composedPath(this.event)},configurable:!0}})}else!function(e,t){for(let r=0;r<t.length;r++){let n=t[r];e[n]=function(){return this.node[n].apply(this.node,arguments)}}}(xn.prototype,["cloneNode","appendChild","insertBefore","removeChild","replaceChild","setAttribute","removeAttribute","querySelector","querySelectorAll"]),En(xn.prototype,["parentNode","firstChild","lastChild","nextSibling","previousSibling","firstElementChild","lastElementChild","nextElementSibling","previousElementSibling","childNodes","children","classList"]),function(e,t){for(let r=0;r<t.length;r++){let n=t[r];Object.defineProperty(e,n,{get:function(){return this.node[n]},set:function(e){this.node[n]=e},configurable:!0})}}(xn.prototype,["textContent","innerHTML","className"]);const kn=function(e){if((e=e||document)instanceof Tn)return e;if(e instanceof On)return e;let t=e.__domApi;return t||(t=e instanceof Event?new On(e):new Tn(e),e.__domApi=t),t},An=window.ShadyDOM,Nn=window.ShadyCSS;
/**
@license
Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function In(e,t){return De(e).getRootNode()===t}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
let Mn=window.ShadyCSS;const Ln=be(e=>{const t=rn(Kr(Zt(e))),r={x:"pan-x",y:"pan-y",none:"none",all:"auto"};class n extends t{constructor(){super(),this.isAttached,this.__boundListeners,this._debouncers}static get importMeta(){return this.prototype.importMeta}created(){}connectedCallback(){super.connectedCallback(),this.isAttached=!0,this.attached()}attached(){}disconnectedCallback(){super.disconnectedCallback(),this.isAttached=!1,this.detached()}detached(){}attributeChangedCallback(e,t,r,n){t!==r&&(super.attributeChangedCallback(e,t,r,n),this.attributeChanged(e,t,r))}attributeChanged(e,t,r){}_initializeProperties(){let e=Object.getPrototypeOf(this);e.hasOwnProperty(JSCompiler_renameProperty("__hasRegisterFinished",e))||(this._registered(),e.__hasRegisterFinished=!0),super._initializeProperties(),this.root=this,this.created(),this._applyListeners()}_registered(){}ready(){this._ensureAttributes(),super.ready()}_ensureAttributes(){}_applyListeners(){}serialize(e){return this._serializeValue(e)}deserialize(e,t){return this._deserializeValue(e,t)}reflectPropertyToAttribute(e,t,r){this._propertyToAttribute(e,t,r)}serializeValueToAttribute(e,t,r){this._valueToNodeAttribute(r||this,e,t)}extend(e,t){if(!e||!t)return e||t;let r=Object.getOwnPropertyNames(t);for(let n,i=0;i<r.length&&(n=r[i]);i++){let r=Object.getOwnPropertyDescriptor(t,n);r&&Object.defineProperty(e,n,r)}return e}mixin(e,t){for(let r in t)e[r]=t[r];return e}chainObject(e,t){return e&&t&&e!==t&&(e.__proto__=t),e}instanceTemplate(e){let t=this.constructor._contentForTemplate(e);return document.importNode(t,!0)}fire(e,t,r){r=r||{},t=null==t?{}:t;let n=new Event(e,{bubbles:void 0===r.bubbles||r.bubbles,cancelable:Boolean(r.cancelable),composed:void 0===r.composed||r.composed});n.detail=t;let i=r.node||this;return De(i).dispatchEvent(n),n}listen(e,t,r){e=e||this;let n=this.__boundListeners||(this.__boundListeners=new WeakMap),i=n.get(e);i||(i={},n.set(e,i));let s=t+r;i[s]||(i[s]=this._addMethodEventListenerToNode(e,t,r,this))}unlisten(e,t,r){e=e||this;let n=this.__boundListeners&&this.__boundListeners.get(e),i=t+r,s=n&&n[i];s&&(this._removeEventListenerFromNode(e,t,s),n[i]=null)}setScrollDirection(e,t){Dr(t||this,r[e]||"auto")}$$(e){return this.root.querySelector(e)}get domHost(){let e=De(this).getRootNode();return e instanceof DocumentFragment?e.host:e}distributeContent(){const e=kn(this);window.ShadyDOM&&e.shadowRoot&&ShadyDOM.flush()}getEffectiveChildNodes(){return kn(this).getEffectiveChildNodes()}queryDistributedElements(e){return kn(this).queryDistributedElements(e)}getEffectiveChildren(){return this.getEffectiveChildNodes().filter((function(e){return e.nodeType===Node.ELEMENT_NODE}))}getEffectiveTextContent(){let e=this.getEffectiveChildNodes(),t=[];for(let r,n=0;r=e[n];n++)r.nodeType!==Node.COMMENT_NODE&&t.push(r.textContent);return t.join("")}queryEffectiveChildren(e){let t=this.queryDistributedElements(e);return t&&t[0]}queryAllEffectiveChildren(e){return this.queryDistributedElements(e)}getContentChildNodes(e){let t=this.root.querySelector(e||"slot");return t?kn(t).getDistributedNodes():[]}getContentChildren(e){return this.getContentChildNodes(e).filter((function(e){return e.nodeType===Node.ELEMENT_NODE}))}isLightDescendant(e){return this!==e&&De(this).contains(e)&&De(this).getRootNode()===De(e).getRootNode()}isLocalDescendant(e){return this.root===De(e).getRootNode()}scopeSubtree(e,t=!1){return function(e,t=!1){if(!An||!Nn)return null;if(!An.handlesDynamicScoping)return null;const r=Nn.ScopingShim;if(!r)return null;const n=r.scopeForNode(e),i=De(e).getRootNode(),s=e=>{if(!In(e,i))return;const t=Array.from(An.nativeMethods.querySelectorAll.call(e,"*"));t.push(e);for(let e=0;e<t.length;e++){const s=t[e];if(!In(s,i))continue;const o=r.currentScopeForNode(s);o!==n&&(""!==o&&r.unscopeNode(s,o),r.scopeNode(s,n))}};if(s(e),t){const t=new MutationObserver(e=>{for(let t=0;t<e.length;t++){const r=e[t];for(let e=0;e<r.addedNodes.length;e++){const t=r.addedNodes[e];t.nodeType===Node.ELEMENT_NODE&&s(t)}}});return t.observe(e,{childList:!0,subtree:!0}),t}return null}(e,t)}getComputedStyleValue(e){return Mn.getComputedStyleValue(this,e)}debounce(e,t,r){return this._debouncers=this._debouncers||{},this._debouncers[e]=Qt.debounce(this._debouncers[e],r>0?tt.after(r):nt,t.bind(this))}isDebouncerActive(e){this._debouncers=this._debouncers||{};let t=this._debouncers[e];return!(!t||!t.isActive())}flushDebouncer(e){this._debouncers=this._debouncers||{};let t=this._debouncers[e];t&&t.flush()}cancelDebouncer(e){this._debouncers=this._debouncers||{};let t=this._debouncers[e];t&&t.cancel()}async(e,t){return t>0?tt.run(e.bind(this),t):~nt.run(e.bind(this))}cancelAsync(e){e<0?nt.cancel(~e):tt.cancel(e)}create(e,t){let r=document.createElement(e);if(t)if(r.setProperties)r.setProperties(t);else for(let e in t)r[e]=t[e];return r}elementMatches(e,t){return Sn(t||this,e)}toggleAttribute(e,t){let r=this;return 3===arguments.length&&(r=arguments[2]),1==arguments.length&&(t=!r.hasAttribute(e)),t?(De(r).setAttribute(e,""),!0):(De(r).removeAttribute(e),!1)}toggleClass(e,t,r){r=r||this,1==arguments.length&&(t=!r.classList.contains(e)),t?r.classList.add(e):r.classList.remove(e)}transform(e,t){(t=t||this).style.webkitTransform=e,t.style.transform=e}translate3d(e,t,r,n){n=n||this,this.transform("translate3d("+e+","+t+","+r+")",n)}arrayDelete(e,t){let r;if(Array.isArray(e)){if(r=e.indexOf(t),r>=0)return e.splice(r,1)}else{if(r=Ke(this,e).indexOf(t),r>=0)return this.splice(e,r,1)}return null}_logger(e,t){switch(Array.isArray(t)&&1===t.length&&Array.isArray(t[0])&&(t=t[0]),e){case"log":case"warn":case"error":console[e](...t)}}_log(...e){this._logger("log",e)}_warn(...e){this._logger("warn",e)}_error(...e){this._logger("error",e)}_logf(e,...t){return["[%s::%s]",this.is,e,...t]}}return n.prototype.is="",n}),Dn={attached:!0,detached:!0,ready:!0,created:!0,beforeRegister:!0,registered:!0,attributeChanged:!0,listeners:!0,hostAttributes:!0},Rn={attached:!0,detached:!0,ready:!0,created:!0,beforeRegister:!0,registered:!0,attributeChanged:!0,behaviors:!0,_noAccessors:!0},Fn=Object.assign({listeners:!0,hostAttributes:!0,properties:!0,observers:!0},Rn);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function Hn(e,t,r,n){!function(e,t,r){const n=e._noAccessors,i=Object.getOwnPropertyNames(e);for(let s=0;s<i.length;s++){let o=i[s];if(!(o in r))if(n)t[o]=e[o];else{let r=Object.getOwnPropertyDescriptor(e,o);r&&(r.configurable=!0,Object.defineProperty(t,o,r))}}}(t,e,n);for(let e in Dn)t[e]&&(r[e]=r[e]||[],r[e].push(t[e]))}function Bn(e,t){for(const r in t){const n=e[r],i=t[r];e[r]=!("value"in i)&&n&&"value"in n?Object.assign({value:n.value},i):i}}function zn(e,t,r){let n;const i={};class s extends t{static _finalizeClass(){if(this.hasOwnProperty(JSCompiler_renameProperty("generatedFrom",this))){if(n)for(let e,t=0;t<n.length;t++)e=n[t],e.properties&&this.createProperties(e.properties),e.observers&&this.createObservers(e.observers,e.properties);e.properties&&this.createProperties(e.properties),e.observers&&this.createObservers(e.observers,e.properties),this._prepareTemplate()}else t._finalizeClass.call(this)}static get properties(){const t={};if(n)for(let e=0;e<n.length;e++)Bn(t,n[e].properties);return Bn(t,e.properties),t}static get observers(){let t=[];if(n)for(let e,r=0;r<n.length;r++)e=n[r],e.observers&&(t=t.concat(e.observers));return e.observers&&(t=t.concat(e.observers)),t}created(){super.created();const e=i.created;if(e)for(let t=0;t<e.length;t++)e[t].call(this)}_registered(){const e=s.prototype;if(!e.hasOwnProperty(JSCompiler_renameProperty("__hasRegisterFinished",e))){e.__hasRegisterFinished=!0,super._registered(),_e&&o(e);const t=Object.getPrototypeOf(this);let r=i.beforeRegister;if(r)for(let e=0;e<r.length;e++)r[e].call(t);if(r=i.registered,r)for(let e=0;e<r.length;e++)r[e].call(t)}}_applyListeners(){super._applyListeners();const e=i.listeners;if(e)for(let t=0;t<e.length;t++){const r=e[t];if(r)for(let e in r)this._addMethodEventListenerToNode(this,e,r[e])}}_ensureAttributes(){const e=i.hostAttributes;if(e)for(let t=e.length-1;t>=0;t--){const r=e[t];for(let e in r)this._ensureAttribute(e,r[e])}super._ensureAttributes()}ready(){super.ready();let e=i.ready;if(e)for(let t=0;t<e.length;t++)e[t].call(this)}attached(){super.attached();let e=i.attached;if(e)for(let t=0;t<e.length;t++)e[t].call(this)}detached(){super.detached();let e=i.detached;if(e)for(let t=0;t<e.length;t++)e[t].call(this)}attributeChanged(e,t,r){super.attributeChanged();let n=i.attributeChanged;if(n)for(let i=0;i<n.length;i++)n[i].call(this,e,t,r)}}if(r){Array.isArray(r)||(r=[r]);let e=t.prototype.behaviors;n=function e(t,r,n){r=r||[];for(let i=t.length-1;i>=0;i--){let s=t[i];s?Array.isArray(s)?e(s,r):r.indexOf(s)<0&&(!n||n.indexOf(s)<0)&&r.unshift(s):console.warn("behavior is null, check for missing or 404 import")}return r}(r,null,e),s.prototype.behaviors=e?e.concat(r):n}const o=t=>{n&&function(e,t,r){for(let n=0;n<t.length;n++)Hn(e,t[n],r,Fn)}(t,n,i),Hn(t,e,i,Rn)};return _e||o(s.prototype),s.generatedFrom=e,s}const jn=function(e){let t;return t="function"==typeof e?e:jn.Class(e),customElements.define(t.is,t),t};
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
function $n(e,t,r,n,i){let s;i&&(s="object"==typeof r&&null!==r,s&&(n=e.__dataTemp[t]));let o=n!==r&&(n==n||r==r);return s&&o&&(e.__dataTemp[t]=r),o}jn.Class=function(e,t){e||console.warn("Polymer.Class requires `info` argument");let r=t?t(Ln(HTMLElement)):Ln(HTMLElement);return r=zn(e,r,e.behaviors),r.is=r.prototype.is=e.is,r};const Kn=be(e=>{return class extends e{_shouldPropertyChange(e,t,r){return $n(this,e,t,r,!0)}}}),qn=be(e=>{return class extends e{static get properties(){return{mutableData:Boolean}}_shouldPropertyChange(e,t,r){return $n(this,e,t,r,this.mutableData)}}});Kn._mutablePropertyChange=$n;
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
let Yn=null;function Un(){return Yn}Un.prototype=Object.create(HTMLTemplateElement.prototype,{constructor:{value:Un,writable:!0}});const Jn=Jt(Un),Vn=Kn(Jn);const Xn=Jt(class{});class Wn extends Xn{constructor(e){super(),this._configureProperties(e),this.root=this._stampTemplate(this.__dataHost);let t=[];this.children=t;for(let e=this.root.firstChild;e;e=e.nextSibling)t.push(e),e.__templatizeInstance=this;this.__templatizeOwner&&this.__templatizeOwner.__hideTemplateChildren__&&this._showHideChildren(!0);let r=this.__templatizeOptions;(e&&r.instanceProps||!r.instanceProps)&&this._enableProperties()}_configureProperties(e){if(this.__templatizeOptions.forwardHostProp)for(let e in this.__hostProps)this._setPendingProperty(e,this.__dataHost["_host_"+e]);for(let t in e)this._setPendingProperty(t,e[t])}forwardHostProp(e,t){this._setPendingPropertyOrPath(e,t,!1,!0)&&this.__dataHost._enqueueClient(this)}_addEventListenerToNode(e,t,r){if(this._methodHost&&this.__templatizeOptions.parentModel)this._methodHost._addEventListenerToNode(e,t,e=>{e.model=this,r(e)});else{let n=this.__dataHost.__dataHost;n&&n._addEventListenerToNode(e,t,r)}}_showHideChildren(e){let t=this.children;for(let r=0;r<t.length;r++){let n=t[r];if(Boolean(e)!=Boolean(n.__hideTemplateChildren__))if(n.nodeType===Node.TEXT_NODE)e?(n.__polymerTextContent__=n.textContent,n.textContent=""):n.textContent=n.__polymerTextContent__;else if("slot"===n.localName)if(e)n.__polymerReplaced__=document.createComment("hidden-slot"),De(De(n).parentNode).replaceChild(n.__polymerReplaced__,n);else{const e=n.__polymerReplaced__;e&&De(De(e).parentNode).replaceChild(n,e)}else n.style&&(e?(n.__polymerDisplay__=n.style.display,n.style.display="none"):n.style.display=n.__polymerDisplay__);n.__hideTemplateChildren__=e,n._showHideChildren&&n._showHideChildren(e)}}_setUnmanagedPropertyToNode(e,t,r){e.__hideTemplateChildren__&&e.nodeType==Node.TEXT_NODE&&"textContent"==t?e.__polymerTextContent__=r:super._setUnmanagedPropertyToNode(e,t,r)}get parentModel(){let e=this.__parentModel;if(!e){let t;e=this;do{e=e.__dataHost.__dataHost}while((t=e.__templatizeOptions)&&!t.parentModel);this.__parentModel=e}return e}dispatchEvent(e){return!0}}Wn.prototype.__dataHost,Wn.prototype.__templatizeOptions,Wn.prototype._methodHost,Wn.prototype.__templatizeOwner,Wn.prototype.__hostProps;const Gn=Kn(Wn);function Zn(e){let t=e.__dataHost;return t&&t._methodHost||t}function Qn(e,t,r){let n=r.mutableData?Gn:Wn;ni.mixin&&(n=ni.mixin(n));let i=class extends n{};return i.prototype.__templatizeOptions=r,i.prototype._bindTemplate(e),function(e,t,r,n){let i=r.hostProps||{};for(let t in n.instanceProps){delete i[t];let r=n.notifyInstanceProp;r&&e.prototype._addPropertyEffect(t,e.prototype.PROPERTY_EFFECT_TYPES.NOTIFY,{fn:ri(t,r)})}if(n.forwardHostProp&&t.__dataHost)for(let t in i)r.hasHostProps||(r.hasHostProps=!0),e.prototype._addPropertyEffect(t,e.prototype.PROPERTY_EFFECT_TYPES.NOTIFY,{fn:function(e,t,r){e.__dataHost._setPendingPropertyOrPath("_host_"+t,r[t],!0,!0)}})}(i,e,t,r),i}function ei(e,t,r){let n=r.forwardHostProp;if(n&&t.hasHostProps){let i=t.templatizeTemplateClass;if(!i){let e=r.mutableData?Vn:Jn;i=t.templatizeTemplateClass=class extends e{};let s=t.hostProps;for(let e in s)i.prototype._addPropertyEffect("_host_"+e,i.prototype.PROPERTY_EFFECT_TYPES.PROPAGATE,{fn:ti(e,n)}),i.prototype._createNotifyingProperty("_host_"+e)}!function(e,t){Yn=e,Object.setPrototypeOf(e,t.prototype),new t,Yn=null}(e,i),e.__dataProto&&Object.assign(e.__data,e.__dataProto),e.__dataTemp={},e.__dataPending=null,e.__dataOld=null,e._enableProperties()}}function ti(e,t){return function(e,r,n){t.call(e.__templatizeOwner,r.substring("_host_".length),n[r])}}function ri(e,t){return function(e,r,n){t.call(e.__templatizeOwner,e,r,n[r])}}function ni(e,t,r){if(ue&&!Zn(e))throw new Error("strictTemplatePolicy: template owner not trusted");if(r=r||{},e.__templatizeOwner)throw new Error("A <template> can only be templatized once");e.__templatizeOwner=t;let n=(t?t.constructor:Wn)._parseTemplate(e),i=n.templatizeInstanceClass;i||(i=Qn(e,n,r),n.templatizeInstanceClass=i),ei(e,n,r);let s=class extends i{};return s.prototype._methodHost=Zn(e),s.prototype.__dataHost=e,s.prototype.__templatizeOwner=t,s.prototype.__hostProps=n.hostProps,s=s,s}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
let ii=!1;function si(){if(_e&&!de){if(!ii){ii=!0;const e=document.createElement("style");e.textContent="dom-bind,dom-if,dom-repeat{display:none;}",document.head.appendChild(e)}return!0}return!1}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const oi=Kr(qn(Jt(HTMLElement)));customElements.define("dom-bind",class extends oi{static get observedAttributes(){return["mutable-data"]}constructor(){if(super(),ue)throw new Error("strictTemplatePolicy: dom-bind not allowed");this.root=null,this.$=null,this.__children=null}attributeChangedCallback(e,t,r,n){this.mutableData=!0}connectedCallback(){si()||(this.style.display="none"),this.render()}disconnectedCallback(){this.__removeChildren()}__insertChildren(){De(De(this).parentNode).insertBefore(this.root,this)}__removeChildren(){if(this.__children)for(let e=0;e<this.__children.length;e++)this.root.appendChild(this.__children[e])}render(){let e;if(!this.__children){if(e=e||this.querySelector("template"),!e){let t=new MutationObserver(()=>{if(e=this.querySelector("template"),!e)throw new Error("dom-bind requires a <template> child");t.disconnect(),this.render()});return void t.observe(this,{childList:!0})}this.root=this._stampTemplate(e),this.$=this.root.$,this.__children=[];for(let e=this.root.firstChild;e;e=e.nextSibling)this.__children[this.__children.length]=e;this._enableProperties()}this.__insertChildren(),this.dispatchEvent(new CustomEvent("dom-change",{bubbles:!0,composed:!0}))}});
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
class ai{constructor(e){this.value=e.toString()}toString(){return this.value}}function li(e){if(e instanceof HTMLTemplateElement)return e.innerHTML;if(e instanceof ai)return function(e){if(e instanceof ai)return e.value;throw new Error(`non-literal value passed to Polymer's htmlLiteral function: ${e}`)}(e);throw new Error(`non-template value passed to Polymer's html function: ${e}`)}const di=function(e,...t){const r=document.createElement("template");return r.innerHTML=t.reduce((t,r,n)=>t+li(r)+e[n+1],e[0]),r},pi=Zt(HTMLElement),ci=qn(pi);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/class hi extends ci{static get is(){return"dom-repeat"}static get template(){return null}static get properties(){return{items:{type:Array},as:{type:String,value:"item"},indexAs:{type:String,value:"index"},itemsIndexAs:{type:String,value:"itemsIndex"},sort:{type:Function,observer:"__sortChanged"},filter:{type:Function,observer:"__filterChanged"},observe:{type:String,observer:"__observeChanged"},delay:Number,renderedItemCount:{type:Number,notify:!0,readOnly:!0},initialCount:{type:Number,observer:"__initializeChunking"},targetFramerate:{type:Number,value:20},_targetFrameTime:{type:Number,computed:"__computeFrameTime(targetFramerate)"}}}static get observers(){return["__itemsChanged(items.*)"]}constructor(){super(),this.__instances=[],this.__limit=1/0,this.__pool=[],this.__renderDebouncer=null,this.__itemsIdxToInstIdx={},this.__chunkCount=null,this.__lastChunkTime=null,this.__sortFn=null,this.__filterFn=null,this.__observePaths=null,this.__ctor=null,this.__isDetached=!0,this.template=null}disconnectedCallback(){super.disconnectedCallback(),this.__isDetached=!0;for(let e=0;e<this.__instances.length;e++)this.__detachInstance(e)}connectedCallback(){if(super.connectedCallback(),si()||(this.style.display="none"),this.__isDetached){this.__isDetached=!1;let e=De(De(this).parentNode);for(let t=0;t<this.__instances.length;t++)this.__attachInstance(t,e)}}__ensureTemplatized(){if(!this.__ctor){let e=this.template=this.querySelector("template");if(!e){let e=new MutationObserver(()=>{if(!this.querySelector("template"))throw new Error("dom-repeat requires a <template> child");e.disconnect(),this.__render()});return e.observe(this,{childList:!0}),!1}let t={};t[this.as]=!0,t[this.indexAs]=!0,t[this.itemsIndexAs]=!0,this.__ctor=ni(e,this,{mutableData:this.mutableData,parentModel:!0,instanceProps:t,forwardHostProp:function(e,t){let r=this.__instances;for(let n,i=0;i<r.length&&(n=r[i]);i++)n.forwardHostProp(e,t)},notifyInstanceProp:function(e,t,r){if((n=this.as)===(i=t)||He(n,i)||Be(n,i)){let n=e[this.itemsIndexAs];t==this.as&&(this.items[n]=r);let i=ze(this.as,`${JSCompiler_renameProperty("items",this)}.${n}`,t);this.notifyPath(i,r)}var n,i}})}return!0}__getMethodHost(){return this.__dataHost._methodHost||this.__dataHost}__functionFromPropertyValue(e){if("string"==typeof e){let t=e,r=this.__getMethodHost();return function(){return r[t].apply(r,arguments)}}return e}__sortChanged(e){this.__sortFn=this.__functionFromPropertyValue(e),this.items&&this.__debounceRender(this.__render)}__filterChanged(e){this.__filterFn=this.__functionFromPropertyValue(e),this.items&&this.__debounceRender(this.__render)}__computeFrameTime(e){return Math.ceil(1e3/e)}__initializeChunking(){this.initialCount&&(this.__limit=this.initialCount,this.__chunkCount=this.initialCount,this.__lastChunkTime=performance.now())}__tryRenderChunk(){this.items&&this.__limit<this.items.length&&this.__debounceRender(this.__requestRenderChunk)}__requestRenderChunk(){requestAnimationFrame(()=>this.__renderChunk())}__renderChunk(){let e=performance.now(),t=this._targetFrameTime/(e-this.__lastChunkTime);this.__chunkCount=Math.round(this.__chunkCount*t)||1,this.__limit+=this.__chunkCount,this.__lastChunkTime=e,this.__debounceRender(this.__render)}__observeChanged(){this.__observePaths=this.observe&&this.observe.replace(".*",".").split(" ")}__itemsChanged(e){this.items&&!Array.isArray(this.items)&&console.warn("dom-repeat expected array for `items`, found",this.items),this.__handleItemPath(e.path,e.value)||(this.__initializeChunking(),this.__debounceRender(this.__render))}__handleObservedPaths(e){if(this.__sortFn||this.__filterFn)if(e){if(this.__observePaths){let t=this.__observePaths;for(let r=0;r<t.length;r++)0===e.indexOf(t[r])&&this.__debounceRender(this.__render,this.delay)}}else this.__debounceRender(this.__render,this.delay)}__debounceRender(e,t=0){this.__renderDebouncer=Qt.debounce(this.__renderDebouncer,t>0?tt.after(t):nt,e.bind(this)),tr(this.__renderDebouncer)}render(){this.__debounceRender(this.__render),wn()}__render(){this.__ensureTemplatized()&&(this.__applyFullRefresh(),this.__pool.length=0,this._setRenderedItemCount(this.__instances.length),this.dispatchEvent(new CustomEvent("dom-change",{bubbles:!0,composed:!0})),this.__tryRenderChunk())}__applyFullRefresh(){let e=this.items||[],t=new Array(e.length);for(let r=0;r<e.length;r++)t[r]=r;this.__filterFn&&(t=t.filter((t,r,n)=>this.__filterFn(e[t],r,n))),this.__sortFn&&t.sort((t,r)=>this.__sortFn(e[t],e[r]));const r=this.__itemsIdxToInstIdx={};let n=0;const i=Math.min(t.length,this.__limit);for(;n<i;n++){let i=this.__instances[n],s=t[n],o=e[s];r[s]=n,i?(i._setPendingProperty(this.as,o),i._setPendingProperty(this.indexAs,n),i._setPendingProperty(this.itemsIndexAs,s),i._flushProperties()):this.__insertInstance(o,n,s)}for(let e=this.__instances.length-1;e>=n;e--)this.__detachAndRemoveInstance(e)}__detachInstance(e){let t=this.__instances[e];const r=De(t.root);for(let e=0;e<t.children.length;e++){let n=t.children[e];r.appendChild(n)}return t}__attachInstance(e,t){let r=this.__instances[e];t.insertBefore(r.root,this)}__detachAndRemoveInstance(e){let t=this.__detachInstance(e);t&&this.__pool.push(t),this.__instances.splice(e,1)}__stampInstance(e,t,r){let n={};return n[this.as]=e,n[this.indexAs]=t,n[this.itemsIndexAs]=r,new this.__ctor(n)}__insertInstance(e,t,r){let n=this.__pool.pop();n?(n._setPendingProperty(this.as,e),n._setPendingProperty(this.indexAs,t),n._setPendingProperty(this.itemsIndexAs,r),n._flushProperties()):n=this.__stampInstance(e,t,r);let i=this.__instances[t+1],s=i?i.children[0]:this;return De(De(this).parentNode).insertBefore(n.root,s),this.__instances[t]=n,n}_showHideChildren(e){for(let t=0;t<this.__instances.length;t++)this.__instances[t]._showHideChildren(e)}__handleItemPath(e,t){let r=e.slice(6),n=r.indexOf("."),i=n<0?r:r.substring(0,n);if(i==parseInt(i,10)){let e=n<0?"":r.substring(n+1);this.__handleObservedPaths(e);let s=this.__itemsIdxToInstIdx[i],o=this.__instances[s];if(o){let r=this.as+(e?"."+e:"");o._setPendingPropertyOrPath(r,t,!1,!0),o._flushProperties()}return!0}}itemForElement(e){let t=this.modelForElement(e);return t&&t[this.as]}indexForElement(e){let t=this.modelForElement(e);return t&&t[this.indexAs]}modelForElement(e){return function(e,t){let r;for(;t;)if(r=t.__templatizeInstance){if(r.__dataHost==e)return r;t=r.__dataHost}else t=De(t).parentNode;return null}(this.template,e)}}customElements.define(hi.is,hi);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
class ui extends pi{static get is(){return"dom-if"}static get template(){return null}static get properties(){return{if:{type:Boolean,observer:"__debounceRender"},restamp:{type:Boolean,observer:"__debounceRender"}}}constructor(){super(),this.__renderDebouncer=null,this.__invalidProps=null,this.__instance=null,this._lastIf=!1,this.__ctor=null,this.__hideTemplateChildren__=!1}__debounceRender(){this.__renderDebouncer=Qt.debounce(this.__renderDebouncer,nt,()=>this.__render()),tr(this.__renderDebouncer)}disconnectedCallback(){super.disconnectedCallback();const e=De(this).parentNode;e&&(e.nodeType!=Node.DOCUMENT_FRAGMENT_NODE||De(e).host)||this.__teardownInstance()}connectedCallback(){super.connectedCallback(),si()||(this.style.display="none"),this.if&&this.__debounceRender()}render(){wn()}__render(){if(this.if){if(!this.__ensureInstance())return;this._showHideChildren()}else this.restamp&&this.__teardownInstance();!this.restamp&&this.__instance&&this._showHideChildren(),this.if!=this._lastIf&&(this.dispatchEvent(new CustomEvent("dom-change",{bubbles:!0,composed:!0})),this._lastIf=this.if)}__ensureInstance(){let e=De(this).parentNode;if(e){if(!this.__ctor){let e=De(this).querySelector("template");if(!e){let e=new MutationObserver(()=>{if(!De(this).querySelector("template"))throw new Error("dom-if requires a <template> child");e.disconnect(),this.__render()});return e.observe(this,{childList:!0}),!1}this.__ctor=ni(e,this,{mutableData:!0,forwardHostProp:function(e,t){this.__instance&&(this.if?this.__instance.forwardHostProp(e,t):(this.__invalidProps=this.__invalidProps||Object.create(null),this.__invalidProps[Fe(e)]=!0))}})}if(this.__instance){this.__syncHostProperties();let t=this.__instance.children;if(t&&t.length){if(De(this).previousSibling!==t[t.length-1])for(let r,n=0;n<t.length&&(r=t[n]);n++)De(e).insertBefore(r,this)}}else this.__instance=new this.__ctor,De(e).insertBefore(this.__instance.root,this)}return!0}__syncHostProperties(){let e=this.__invalidProps;if(e){for(let t in e)this.__instance._setPendingProperty(t,this.__dataHost[t]);this.__invalidProps=null,this.__instance._flushProperties()}}__teardownInstance(){if(this.__instance){let e=this.__instance.children;if(e&&e.length){let t=De(e[0]).parentNode;if(t){t=De(t);for(let r,n=0;n<e.length&&(r=e[n]);n++)t.removeChild(r)}}this.__instance=null,this.__invalidProps=null}}_showHideChildren(){let e=this.__hideTemplateChildren__||!this.if;this.__instance&&this.__instance._showHideChildren(e)}}customElements.define(ui.is,ui);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
let fi=be(e=>{let t=Zt(e);return class extends t{static get properties(){return{items:{type:Array},multi:{type:Boolean,value:!1},selected:{type:Object,notify:!0},selectedItem:{type:Object,notify:!0},toggle:{type:Boolean,value:!1}}}static get observers(){return["__updateSelection(multi, items.*)"]}constructor(){super(),this.__lastItems=null,this.__lastMulti=null,this.__selectedMap=null}__updateSelection(e,t){let r=t.path;if(r==JSCompiler_renameProperty("items",this)){let r=t.base||[],n=this.__lastItems;if(e!==this.__lastMulti&&this.clearSelection(),n){let e=yn(r,n);this.__applySplices(e)}this.__lastItems=r,this.__lastMulti=e}else if(t.path==`${JSCompiler_renameProperty("items",this)}.splices`)this.__applySplices(t.value.indexSplices);else{let e=r.slice(`${JSCompiler_renameProperty("items",this)}.`.length),t=parseInt(e,10);e.indexOf(".")<0&&e==t&&this.__deselectChangedIdx(t)}}__applySplices(e){let t=this.__selectedMap;for(let r=0;r<e.length;r++){let n=e[r];t.forEach((e,r)=>{e<n.index||(e>=n.index+n.removed.length?t.set(r,e+n.addedCount-n.removed.length):t.set(r,-1))});for(let e=0;e<n.addedCount;e++){let r=n.index+e;t.has(this.items[r])&&t.set(this.items[r],r)}}this.__updateLinks();let r=0;t.forEach((e,n)=>{e<0?(this.multi?this.splice(JSCompiler_renameProperty("selected",this),r,1):this.selected=this.selectedItem=null,t.delete(n)):r++})}__updateLinks(){if(this.__dataLinkedPaths={},this.multi){let e=0;this.__selectedMap.forEach(t=>{t>=0&&this.linkPaths(`${JSCompiler_renameProperty("items",this)}.${t}`,`${JSCompiler_renameProperty("selected",this)}.${e++}`)})}else this.__selectedMap.forEach(e=>{this.linkPaths(JSCompiler_renameProperty("selected",this),`${JSCompiler_renameProperty("items",this)}.${e}`),this.linkPaths(JSCompiler_renameProperty("selectedItem",this),`${JSCompiler_renameProperty("items",this)}.${e}`)})}clearSelection(){this.__dataLinkedPaths={},this.__selectedMap=new Map,this.selected=this.multi?[]:null,this.selectedItem=null}isSelected(e){return this.__selectedMap.has(e)}isIndexSelected(e){return this.isSelected(this.items[e])}__deselectChangedIdx(e){let t=this.__selectedIndexForItemIndex(e);if(t>=0){let e=0;this.__selectedMap.forEach((r,n)=>{t==e++&&this.deselect(n)})}}__selectedIndexForItemIndex(e){let t=this.__dataLinkedPaths[`${JSCompiler_renameProperty("items",this)}.${e}`];if(t)return parseInt(t.slice(`${JSCompiler_renameProperty("selected",this)}.`.length),10)}deselect(e){let t=this.__selectedMap.get(e);if(t>=0){let r;this.__selectedMap.delete(e),this.multi&&(r=this.__selectedIndexForItemIndex(t)),this.__updateLinks(),this.multi?this.splice(JSCompiler_renameProperty("selected",this),r,1):this.selected=this.selectedItem=null}}deselectIndex(e){this.deselect(this.items[e])}select(e){this.selectIndex(this.items.indexOf(e))}selectIndex(e){let t=this.items[e];this.isSelected(t)?this.toggle&&this.deselectIndex(e):(this.multi||this.__selectedMap.clear(),this.__selectedMap.set(t,e),this.__updateLinks(),this.multi?this.push(JSCompiler_renameProperty("selected",this),t):this.selected=this.selectedItem=t)}}})(pi);class _i extends fi{static get is(){return"array-selector"}static get template(){return null}}customElements.define(_i.is,_i);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const mi=new Q;window.ShadyCSS||(window.ShadyCSS={prepareTemplate(e,t,r){},prepareTemplateDom(e,t){},prepareTemplateStyles(e,t,r){},styleSubtree(e,t){mi.processStyles(),k(e,t)},styleElement(e){mi.processStyles()},styleDocument(e){mi.processStyles(),k(document.body,e)},getComputedStyleValue:(e,t)=>A(e,t),flushCustomStyles(){},nativeCss:s,nativeShadow:e,cssBuild:r,disableRuntime:i}),window.ShadyCSS.CustomStyleInterface=mi;
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const yi="include",gi=window.ShadyCSS.CustomStyleInterface;class bi extends HTMLElement{constructor(){super(),this._style=null,gi.addCustomStyle(this)}getStyle(){if(this._style)return this._style;const e=this.querySelector("style");if(!e)return null;this._style=e;const t=e.getAttribute(yi);return t&&(e.removeAttribute(yi),e.textContent=function(e){let t=e.trim().split(/\s+/),r="";for(let e=0;e<t.length;e++)r+=Le(t[e]);return r}(t)+e.textContent),this.ownerDocument!==window.document&&window.document.head.appendChild(this),this._style}}window.customElements.define("custom-style",bi);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const vi=Ln(HTMLElement).prototype,wi=di`
<custom-style>
  <style is="custom-style">
    [hidden] {
      display: none !important;
    }
  </style>
</custom-style>
<custom-style>
  <style is="custom-style">
    html {

      --layout: {
        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;
      };

      --layout-inline: {
        display: -ms-inline-flexbox;
        display: -webkit-inline-flex;
        display: inline-flex;
      };

      --layout-horizontal: {
        @apply --layout;

        -ms-flex-direction: row;
        -webkit-flex-direction: row;
        flex-direction: row;
      };

      --layout-horizontal-reverse: {
        @apply --layout;

        -ms-flex-direction: row-reverse;
        -webkit-flex-direction: row-reverse;
        flex-direction: row-reverse;
      };

      --layout-vertical: {
        @apply --layout;

        -ms-flex-direction: column;
        -webkit-flex-direction: column;
        flex-direction: column;
      };

      --layout-vertical-reverse: {
        @apply --layout;

        -ms-flex-direction: column-reverse;
        -webkit-flex-direction: column-reverse;
        flex-direction: column-reverse;
      };

      --layout-wrap: {
        -ms-flex-wrap: wrap;
        -webkit-flex-wrap: wrap;
        flex-wrap: wrap;
      };

      --layout-wrap-reverse: {
        -ms-flex-wrap: wrap-reverse;
        -webkit-flex-wrap: wrap-reverse;
        flex-wrap: wrap-reverse;
      };

      --layout-flex-auto: {
        -ms-flex: 1 1 auto;
        -webkit-flex: 1 1 auto;
        flex: 1 1 auto;
      };

      --layout-flex-none: {
        -ms-flex: none;
        -webkit-flex: none;
        flex: none;
      };

      --layout-flex: {
        -ms-flex: 1 1 0.000000001px;
        -webkit-flex: 1;
        flex: 1;
        -webkit-flex-basis: 0.000000001px;
        flex-basis: 0.000000001px;
      };

      --layout-flex-2: {
        -ms-flex: 2;
        -webkit-flex: 2;
        flex: 2;
      };

      --layout-flex-3: {
        -ms-flex: 3;
        -webkit-flex: 3;
        flex: 3;
      };

      --layout-flex-4: {
        -ms-flex: 4;
        -webkit-flex: 4;
        flex: 4;
      };

      --layout-flex-5: {
        -ms-flex: 5;
        -webkit-flex: 5;
        flex: 5;
      };

      --layout-flex-6: {
        -ms-flex: 6;
        -webkit-flex: 6;
        flex: 6;
      };

      --layout-flex-7: {
        -ms-flex: 7;
        -webkit-flex: 7;
        flex: 7;
      };

      --layout-flex-8: {
        -ms-flex: 8;
        -webkit-flex: 8;
        flex: 8;
      };

      --layout-flex-9: {
        -ms-flex: 9;
        -webkit-flex: 9;
        flex: 9;
      };

      --layout-flex-10: {
        -ms-flex: 10;
        -webkit-flex: 10;
        flex: 10;
      };

      --layout-flex-11: {
        -ms-flex: 11;
        -webkit-flex: 11;
        flex: 11;
      };

      --layout-flex-12: {
        -ms-flex: 12;
        -webkit-flex: 12;
        flex: 12;
      };

      /* alignment in cross axis */

      --layout-start: {
        -ms-flex-align: start;
        -webkit-align-items: flex-start;
        align-items: flex-start;
      };

      --layout-center: {
        -ms-flex-align: center;
        -webkit-align-items: center;
        align-items: center;
      };

      --layout-end: {
        -ms-flex-align: end;
        -webkit-align-items: flex-end;
        align-items: flex-end;
      };

      --layout-baseline: {
        -ms-flex-align: baseline;
        -webkit-align-items: baseline;
        align-items: baseline;
      };

      /* alignment in main axis */

      --layout-start-justified: {
        -ms-flex-pack: start;
        -webkit-justify-content: flex-start;
        justify-content: flex-start;
      };

      --layout-center-justified: {
        -ms-flex-pack: center;
        -webkit-justify-content: center;
        justify-content: center;
      };

      --layout-end-justified: {
        -ms-flex-pack: end;
        -webkit-justify-content: flex-end;
        justify-content: flex-end;
      };

      --layout-around-justified: {
        -ms-flex-pack: distribute;
        -webkit-justify-content: space-around;
        justify-content: space-around;
      };

      --layout-justified: {
        -ms-flex-pack: justify;
        -webkit-justify-content: space-between;
        justify-content: space-between;
      };

      --layout-center-center: {
        @apply --layout-center;
        @apply --layout-center-justified;
      };

      /* self alignment */

      --layout-self-start: {
        -ms-align-self: flex-start;
        -webkit-align-self: flex-start;
        align-self: flex-start;
      };

      --layout-self-center: {
        -ms-align-self: center;
        -webkit-align-self: center;
        align-self: center;
      };

      --layout-self-end: {
        -ms-align-self: flex-end;
        -webkit-align-self: flex-end;
        align-self: flex-end;
      };

      --layout-self-stretch: {
        -ms-align-self: stretch;
        -webkit-align-self: stretch;
        align-self: stretch;
      };

      --layout-self-baseline: {
        -ms-align-self: baseline;
        -webkit-align-self: baseline;
        align-self: baseline;
      };

      /* multi-line alignment in main axis */

      --layout-start-aligned: {
        -ms-flex-line-pack: start;  /* IE10 */
        -ms-align-content: flex-start;
        -webkit-align-content: flex-start;
        align-content: flex-start;
      };

      --layout-end-aligned: {
        -ms-flex-line-pack: end;  /* IE10 */
        -ms-align-content: flex-end;
        -webkit-align-content: flex-end;
        align-content: flex-end;
      };

      --layout-center-aligned: {
        -ms-flex-line-pack: center;  /* IE10 */
        -ms-align-content: center;
        -webkit-align-content: center;
        align-content: center;
      };

      --layout-between-aligned: {
        -ms-flex-line-pack: justify;  /* IE10 */
        -ms-align-content: space-between;
        -webkit-align-content: space-between;
        align-content: space-between;
      };

      --layout-around-aligned: {
        -ms-flex-line-pack: distribute;  /* IE10 */
        -ms-align-content: space-around;
        -webkit-align-content: space-around;
        align-content: space-around;
      };

      /*******************************
                Other Layout
      *******************************/

      --layout-block: {
        display: block;
      };

      --layout-invisible: {
        visibility: hidden !important;
      };

      --layout-relative: {
        position: relative;
      };

      --layout-fit: {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
      };

      --layout-scroll: {
        -webkit-overflow-scrolling: touch;
        overflow: auto;
      };

      --layout-fullbleed: {
        margin: 0;
        height: 100vh;
      };

      /* fixed position */

      --layout-fixed-top: {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
      };

      --layout-fixed-right: {
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
      };

      --layout-fixed-bottom: {
        position: fixed;
        right: 0;
        bottom: 0;
        left: 0;
      };

      --layout-fixed-left: {
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
      };

    }
  </style>
</custom-style>`;
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/wi.setAttribute("style","display: none;"),document.head.appendChild(wi.content);var Ci=document.createElement("style");Ci.textContent="[hidden] { display: none !important; }",document.head.appendChild(Ci);
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
const Pi=di`
<custom-style>
  <style is="custom-style">
    html {

      /* Material Design color palette for Google products */

      --google-red-100: #f4c7c3;
      --google-red-300: #e67c73;
      --google-red-500: #db4437;
      --google-red-700: #c53929;

      --google-blue-100: #c6dafc;
      --google-blue-300: #7baaf7;
      --google-blue-500: #4285f4;
      --google-blue-700: #3367d6;

      --google-green-100: #b7e1cd;
      --google-green-300: #57bb8a;
      --google-green-500: #0f9d58;
      --google-green-700: #0b8043;

      --google-yellow-100: #fce8b2;
      --google-yellow-300: #f7cb4d;
      --google-yellow-500: #f4b400;
      --google-yellow-700: #f09300;

      --google-grey-100: #f5f5f5;
      --google-grey-300: #e0e0e0;
      --google-grey-500: #9e9e9e;
      --google-grey-700: #616161;

      /* Material Design color palette from online spec document */

      --paper-red-50: #ffebee;
      --paper-red-100: #ffcdd2;
      --paper-red-200: #ef9a9a;
      --paper-red-300: #e57373;
      --paper-red-400: #ef5350;
      --paper-red-500: #f44336;
      --paper-red-600: #e53935;
      --paper-red-700: #d32f2f;
      --paper-red-800: #c62828;
      --paper-red-900: #b71c1c;
      --paper-red-a100: #ff8a80;
      --paper-red-a200: #ff5252;
      --paper-red-a400: #ff1744;
      --paper-red-a700: #d50000;

      --paper-pink-50: #fce4ec;
      --paper-pink-100: #f8bbd0;
      --paper-pink-200: #f48fb1;
      --paper-pink-300: #f06292;
      --paper-pink-400: #ec407a;
      --paper-pink-500: #e91e63;
      --paper-pink-600: #d81b60;
      --paper-pink-700: #c2185b;
      --paper-pink-800: #ad1457;
      --paper-pink-900: #880e4f;
      --paper-pink-a100: #ff80ab;
      --paper-pink-a200: #ff4081;
      --paper-pink-a400: #f50057;
      --paper-pink-a700: #c51162;

      --paper-purple-50: #f3e5f5;
      --paper-purple-100: #e1bee7;
      --paper-purple-200: #ce93d8;
      --paper-purple-300: #ba68c8;
      --paper-purple-400: #ab47bc;
      --paper-purple-500: #9c27b0;
      --paper-purple-600: #8e24aa;
      --paper-purple-700: #7b1fa2;
      --paper-purple-800: #6a1b9a;
      --paper-purple-900: #4a148c;
      --paper-purple-a100: #ea80fc;
      --paper-purple-a200: #e040fb;
      --paper-purple-a400: #d500f9;
      --paper-purple-a700: #aa00ff;

      --paper-deep-purple-50: #ede7f6;
      --paper-deep-purple-100: #d1c4e9;
      --paper-deep-purple-200: #b39ddb;
      --paper-deep-purple-300: #9575cd;
      --paper-deep-purple-400: #7e57c2;
      --paper-deep-purple-500: #673ab7;
      --paper-deep-purple-600: #5e35b1;
      --paper-deep-purple-700: #512da8;
      --paper-deep-purple-800: #4527a0;
      --paper-deep-purple-900: #311b92;
      --paper-deep-purple-a100: #b388ff;
      --paper-deep-purple-a200: #7c4dff;
      --paper-deep-purple-a400: #651fff;
      --paper-deep-purple-a700: #6200ea;

      --paper-indigo-50: #e8eaf6;
      --paper-indigo-100: #c5cae9;
      --paper-indigo-200: #9fa8da;
      --paper-indigo-300: #7986cb;
      --paper-indigo-400: #5c6bc0;
      --paper-indigo-500: #3f51b5;
      --paper-indigo-600: #3949ab;
      --paper-indigo-700: #303f9f;
      --paper-indigo-800: #283593;
      --paper-indigo-900: #1a237e;
      --paper-indigo-a100: #8c9eff;
      --paper-indigo-a200: #536dfe;
      --paper-indigo-a400: #3d5afe;
      --paper-indigo-a700: #304ffe;

      --paper-blue-50: #e3f2fd;
      --paper-blue-100: #bbdefb;
      --paper-blue-200: #90caf9;
      --paper-blue-300: #64b5f6;
      --paper-blue-400: #42a5f5;
      --paper-blue-500: #2196f3;
      --paper-blue-600: #1e88e5;
      --paper-blue-700: #1976d2;
      --paper-blue-800: #1565c0;
      --paper-blue-900: #0d47a1;
      --paper-blue-a100: #82b1ff;
      --paper-blue-a200: #448aff;
      --paper-blue-a400: #2979ff;
      --paper-blue-a700: #2962ff;

      --paper-light-blue-50: #e1f5fe;
      --paper-light-blue-100: #b3e5fc;
      --paper-light-blue-200: #81d4fa;
      --paper-light-blue-300: #4fc3f7;
      --paper-light-blue-400: #29b6f6;
      --paper-light-blue-500: #03a9f4;
      --paper-light-blue-600: #039be5;
      --paper-light-blue-700: #0288d1;
      --paper-light-blue-800: #0277bd;
      --paper-light-blue-900: #01579b;
      --paper-light-blue-a100: #80d8ff;
      --paper-light-blue-a200: #40c4ff;
      --paper-light-blue-a400: #00b0ff;
      --paper-light-blue-a700: #0091ea;

      --paper-cyan-50: #e0f7fa;
      --paper-cyan-100: #b2ebf2;
      --paper-cyan-200: #80deea;
      --paper-cyan-300: #4dd0e1;
      --paper-cyan-400: #26c6da;
      --paper-cyan-500: #00bcd4;
      --paper-cyan-600: #00acc1;
      --paper-cyan-700: #0097a7;
      --paper-cyan-800: #00838f;
      --paper-cyan-900: #006064;
      --paper-cyan-a100: #84ffff;
      --paper-cyan-a200: #18ffff;
      --paper-cyan-a400: #00e5ff;
      --paper-cyan-a700: #00b8d4;

      --paper-teal-50: #e0f2f1;
      --paper-teal-100: #b2dfdb;
      --paper-teal-200: #80cbc4;
      --paper-teal-300: #4db6ac;
      --paper-teal-400: #26a69a;
      --paper-teal-500: #009688;
      --paper-teal-600: #00897b;
      --paper-teal-700: #00796b;
      --paper-teal-800: #00695c;
      --paper-teal-900: #004d40;
      --paper-teal-a100: #a7ffeb;
      --paper-teal-a200: #64ffda;
      --paper-teal-a400: #1de9b6;
      --paper-teal-a700: #00bfa5;

      --paper-green-50: #e8f5e9;
      --paper-green-100: #c8e6c9;
      --paper-green-200: #a5d6a7;
      --paper-green-300: #81c784;
      --paper-green-400: #66bb6a;
      --paper-green-500: #4caf50;
      --paper-green-600: #43a047;
      --paper-green-700: #388e3c;
      --paper-green-800: #2e7d32;
      --paper-green-900: #1b5e20;
      --paper-green-a100: #b9f6ca;
      --paper-green-a200: #69f0ae;
      --paper-green-a400: #00e676;
      --paper-green-a700: #00c853;

      --paper-light-green-50: #f1f8e9;
      --paper-light-green-100: #dcedc8;
      --paper-light-green-200: #c5e1a5;
      --paper-light-green-300: #aed581;
      --paper-light-green-400: #9ccc65;
      --paper-light-green-500: #8bc34a;
      --paper-light-green-600: #7cb342;
      --paper-light-green-700: #689f38;
      --paper-light-green-800: #558b2f;
      --paper-light-green-900: #33691e;
      --paper-light-green-a100: #ccff90;
      --paper-light-green-a200: #b2ff59;
      --paper-light-green-a400: #76ff03;
      --paper-light-green-a700: #64dd17;

      --paper-lime-50: #f9fbe7;
      --paper-lime-100: #f0f4c3;
      --paper-lime-200: #e6ee9c;
      --paper-lime-300: #dce775;
      --paper-lime-400: #d4e157;
      --paper-lime-500: #cddc39;
      --paper-lime-600: #c0ca33;
      --paper-lime-700: #afb42b;
      --paper-lime-800: #9e9d24;
      --paper-lime-900: #827717;
      --paper-lime-a100: #f4ff81;
      --paper-lime-a200: #eeff41;
      --paper-lime-a400: #c6ff00;
      --paper-lime-a700: #aeea00;

      --paper-yellow-50: #fffde7;
      --paper-yellow-100: #fff9c4;
      --paper-yellow-200: #fff59d;
      --paper-yellow-300: #fff176;
      --paper-yellow-400: #ffee58;
      --paper-yellow-500: #ffeb3b;
      --paper-yellow-600: #fdd835;
      --paper-yellow-700: #fbc02d;
      --paper-yellow-800: #f9a825;
      --paper-yellow-900: #f57f17;
      --paper-yellow-a100: #ffff8d;
      --paper-yellow-a200: #ffff00;
      --paper-yellow-a400: #ffea00;
      --paper-yellow-a700: #ffd600;

      --paper-amber-50: #fff8e1;
      --paper-amber-100: #ffecb3;
      --paper-amber-200: #ffe082;
      --paper-amber-300: #ffd54f;
      --paper-amber-400: #ffca28;
      --paper-amber-500: #ffc107;
      --paper-amber-600: #ffb300;
      --paper-amber-700: #ffa000;
      --paper-amber-800: #ff8f00;
      --paper-amber-900: #ff6f00;
      --paper-amber-a100: #ffe57f;
      --paper-amber-a200: #ffd740;
      --paper-amber-a400: #ffc400;
      --paper-amber-a700: #ffab00;

      --paper-orange-50: #fff3e0;
      --paper-orange-100: #ffe0b2;
      --paper-orange-200: #ffcc80;
      --paper-orange-300: #ffb74d;
      --paper-orange-400: #ffa726;
      --paper-orange-500: #ff9800;
      --paper-orange-600: #fb8c00;
      --paper-orange-700: #f57c00;
      --paper-orange-800: #ef6c00;
      --paper-orange-900: #e65100;
      --paper-orange-a100: #ffd180;
      --paper-orange-a200: #ffab40;
      --paper-orange-a400: #ff9100;
      --paper-orange-a700: #ff6500;

      --paper-deep-orange-50: #fbe9e7;
      --paper-deep-orange-100: #ffccbc;
      --paper-deep-orange-200: #ffab91;
      --paper-deep-orange-300: #ff8a65;
      --paper-deep-orange-400: #ff7043;
      --paper-deep-orange-500: #ff5722;
      --paper-deep-orange-600: #f4511e;
      --paper-deep-orange-700: #e64a19;
      --paper-deep-orange-800: #d84315;
      --paper-deep-orange-900: #bf360c;
      --paper-deep-orange-a100: #ff9e80;
      --paper-deep-orange-a200: #ff6e40;
      --paper-deep-orange-a400: #ff3d00;
      --paper-deep-orange-a700: #dd2c00;

      --paper-brown-50: #efebe9;
      --paper-brown-100: #d7ccc8;
      --paper-brown-200: #bcaaa4;
      --paper-brown-300: #a1887f;
      --paper-brown-400: #8d6e63;
      --paper-brown-500: #795548;
      --paper-brown-600: #6d4c41;
      --paper-brown-700: #5d4037;
      --paper-brown-800: #4e342e;
      --paper-brown-900: #3e2723;

      --paper-grey-50: #fafafa;
      --paper-grey-100: #f5f5f5;
      --paper-grey-200: #eeeeee;
      --paper-grey-300: #e0e0e0;
      --paper-grey-400: #bdbdbd;
      --paper-grey-500: #9e9e9e;
      --paper-grey-600: #757575;
      --paper-grey-700: #616161;
      --paper-grey-800: #424242;
      --paper-grey-900: #212121;

      --paper-blue-grey-50: #eceff1;
      --paper-blue-grey-100: #cfd8dc;
      --paper-blue-grey-200: #b0bec5;
      --paper-blue-grey-300: #90a4ae;
      --paper-blue-grey-400: #78909c;
      --paper-blue-grey-500: #607d8b;
      --paper-blue-grey-600: #546e7a;
      --paper-blue-grey-700: #455a64;
      --paper-blue-grey-800: #37474f;
      --paper-blue-grey-900: #263238;

      /* opacity for dark text on a light background */
      --dark-divider-opacity: 0.12;
      --dark-disabled-opacity: 0.38; /* or hint text or icon */
      --dark-secondary-opacity: 0.54;
      --dark-primary-opacity: 0.87;

      /* opacity for light text on a dark background */
      --light-divider-opacity: 0.12;
      --light-disabled-opacity: 0.3; /* or hint text or icon */
      --light-secondary-opacity: 0.7;
      --light-primary-opacity: 1.0;

    }

  </style>
</custom-style>
`;Pi.setAttribute("style","display: none;"),document.head.appendChild(Pi.content);
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
const Si=di`
<custom-style>
  <style is="custom-style">
    html {
      /*
       * You can use these generic variables in your elements for easy theming.
       * For example, if all your elements use \`--primary-text-color\` as its main
       * color, then switching from a light to a dark theme is just a matter of
       * changing the value of \`--primary-text-color\` in your application.
       */
      --primary-text-color: var(--light-theme-text-color);
      --primary-background-color: var(--light-theme-background-color);
      --secondary-text-color: var(--light-theme-secondary-color);
      --disabled-text-color: var(--light-theme-disabled-color);
      --divider-color: var(--light-theme-divider-color);
      --error-color: var(--paper-deep-orange-a700);

      /*
       * Primary and accent colors. Also see color.js for more colors.
       */
      --primary-color: var(--paper-indigo-500);
      --light-primary-color: var(--paper-indigo-100);
      --dark-primary-color: var(--paper-indigo-700);

      --accent-color: var(--paper-pink-a200);
      --light-accent-color: var(--paper-pink-a100);
      --dark-accent-color: var(--paper-pink-a400);


      /*
       * Material Design Light background theme
       */
      --light-theme-background-color: #ffffff;
      --light-theme-base-color: #000000;
      --light-theme-text-color: var(--paper-grey-900);
      --light-theme-secondary-color: #737373;  /* for secondary text and icons */
      --light-theme-disabled-color: #9b9b9b;  /* disabled/hint text */
      --light-theme-divider-color: #dbdbdb;

      /*
       * Material Design Dark background theme
       */
      --dark-theme-background-color: var(--paper-grey-900);
      --dark-theme-base-color: #ffffff;
      --dark-theme-text-color: #ffffff;
      --dark-theme-secondary-color: #bcbcbc;  /* for secondary text and icons */
      --dark-theme-disabled-color: #646464;  /* disabled/hint text */
      --dark-theme-divider-color: #3c3c3c;

      /*
       * Deprecated values because of their confusing names.
       */
      --text-primary-color: var(--dark-theme-text-color);
      --default-primary-color: var(--primary-color);
    }
  </style>
</custom-style>`;Si.setAttribute("style","display: none;"),document.head.appendChild(Si.content);
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
var xi={"U+0008":"backspace","U+0009":"tab","U+001B":"esc","U+0020":"space","U+007F":"del"},Ei={8:"backspace",9:"tab",13:"enter",27:"esc",33:"pageup",34:"pagedown",35:"end",36:"home",32:"space",37:"left",38:"up",39:"right",40:"down",46:"del",106:"*"},Oi={shift:"shiftKey",ctrl:"ctrlKey",alt:"altKey",meta:"metaKey"},Ti=/[a-z0-9*]/,ki=/U\+/,Ai=/^arrow/,Ni=/^space(bar)?/,Ii=/^escape$/;function Mi(e,t){var r="";if(e){var n=e.toLowerCase();" "===n||Ni.test(n)?r="space":Ii.test(n)?r="esc":1==n.length?t&&!Ti.test(n)||(r=n):r=Ai.test(n)?n.replace("arrow",""):"multiply"==n?"*":n}return r}function Li(e,t){return e.key?Mi(e.key,t):e.detail&&e.detail.key?Mi(e.detail.key,t):(r=e.keyIdentifier,n="",r&&(r in xi?n=xi[r]:ki.test(r)?(r=parseInt(r.replace("U+","0x"),16),n=String.fromCharCode(r).toLowerCase()):n=r.toLowerCase()),n||function(e){var t="";return Number(e)&&(t=e>=65&&e<=90?String.fromCharCode(32+e):e>=112&&e<=123?"f"+(e-112+1):e>=48&&e<=57?String(e-48):e>=96&&e<=105?String(e-96):Ei[e]),t}(e.keyCode)||"");var r,n}function Di(e,t){return Li(t,e.hasModifiers)===e.key&&(!e.hasModifiers||!!t.shiftKey==!!e.shiftKey&&!!t.ctrlKey==!!e.ctrlKey&&!!t.altKey==!!e.altKey&&!!t.metaKey==!!e.metaKey)}function Ri(e){return e.trim().split(" ").map((function(e){return function(e){return 1===e.length?{combo:e,key:e,event:"keydown"}:e.split("+").reduce((function(e,t){var r=t.split(":"),n=r[0],i=r[1];return n in Oi?(e[Oi[n]]=!0,e.hasModifiers=!0):(e.key=n,e.event=i||"keydown"),e}),{combo:e.split(":").shift()})}(e)}))}const Fi={properties:{keyEventTarget:{type:Object,value:function(){return this}},stopKeyboardEventPropagation:{type:Boolean,value:!1},_boundKeyHandlers:{type:Array,value:function(){return[]}},_imperativeKeyBindings:{type:Object,value:function(){return{}}}},observers:["_resetKeyEventListeners(keyEventTarget, _boundKeyHandlers)"],keyBindings:{},registered:function(){this._prepKeyBindings()},attached:function(){this._listenKeyEventListeners()},detached:function(){this._unlistenKeyEventListeners()},addOwnKeyBinding:function(e,t){this._imperativeKeyBindings[e]=t,this._prepKeyBindings(),this._resetKeyEventListeners()},removeOwnKeyBindings:function(){this._imperativeKeyBindings={},this._prepKeyBindings(),this._resetKeyEventListeners()},keyboardEventMatchesKeys:function(e,t){for(var r=Ri(t),n=0;n<r.length;++n)if(Di(r[n],e))return!0;return!1},_collectKeyBindings:function(){var e=this.behaviors.map((function(e){return e.keyBindings}));return-1===e.indexOf(this.keyBindings)&&e.push(this.keyBindings),e},_prepKeyBindings:function(){for(var e in this._keyBindings={},this._collectKeyBindings().forEach((function(e){for(var t in e)this._addKeyBinding(t,e[t])}),this),this._imperativeKeyBindings)this._addKeyBinding(e,this._imperativeKeyBindings[e]);for(var t in this._keyBindings)this._keyBindings[t].sort((function(e,t){var r=e[0].hasModifiers;return r===t[0].hasModifiers?0:r?-1:1}))},_addKeyBinding:function(e,t){Ri(e).forEach((function(e){this._keyBindings[e.event]=this._keyBindings[e.event]||[],this._keyBindings[e.event].push([e,t])}),this)},_resetKeyEventListeners:function(){this._unlistenKeyEventListeners(),this.isAttached&&this._listenKeyEventListeners()},_listenKeyEventListeners:function(){this.keyEventTarget&&Object.keys(this._keyBindings).forEach((function(e){var t=this._keyBindings[e],r=this._onKeyBindingEvent.bind(this,t);this._boundKeyHandlers.push([this.keyEventTarget,e,r]),this.keyEventTarget.addEventListener(e,r)}),this)},_unlistenKeyEventListeners:function(){for(var e,t,r,n;this._boundKeyHandlers.length;)t=(e=this._boundKeyHandlers.pop())[0],r=e[1],n=e[2],t.removeEventListener(r,n)},_onKeyBindingEvent:function(e,t){if(this.stopKeyboardEventPropagation&&t.stopPropagation(),!t.defaultPrevented)for(var r=0;r<e.length;r++){var n=e[r][0],i=e[r][1];if(Di(n,t)&&(this._triggerKeyHandler(n,i,t),t.defaultPrevented))return}},_triggerKeyHandler:function(e,t,r){var n=Object.create(e);n.keyboardEvent=r;var i=new CustomEvent(e.event,{detail:n,cancelable:!0});this[t].call(this,i),i.defaultPrevented&&r.preventDefault()}},Hi={properties:{focused:{type:Boolean,value:!1,notify:!0,readOnly:!0,reflectToAttribute:!0},disabled:{type:Boolean,value:!1,notify:!0,observer:"_disabledChanged",reflectToAttribute:!0},_oldTabIndex:{type:String},_boundFocusBlurHandler:{type:Function,value:function(){return this._focusBlurHandler.bind(this)}}},observers:["_changedControlState(focused, disabled)"],ready:function(){this.addEventListener("focus",this._boundFocusBlurHandler,!0),this.addEventListener("blur",this._boundFocusBlurHandler,!0)},_focusBlurHandler:function(e){this._setFocused("focus"===e.type)},_disabledChanged:function(e,t){this.setAttribute("aria-disabled",e?"true":"false"),this.style.pointerEvents=e?"none":"",e?(this._oldTabIndex=this.getAttribute("tabindex"),this._setFocused(!1),this.tabIndex=-1,this.blur()):void 0!==this._oldTabIndex&&(null===this._oldTabIndex?this.removeAttribute("tabindex"):this.setAttribute("tabindex",this._oldTabIndex))},_changedControlState:function(){this._controlStateChanged&&this._controlStateChanged()}},Bi={properties:{pressed:{type:Boolean,readOnly:!0,value:!1,reflectToAttribute:!0,observer:"_pressedChanged"},toggles:{type:Boolean,value:!1,reflectToAttribute:!0},active:{type:Boolean,value:!1,notify:!0,reflectToAttribute:!0},pointerDown:{type:Boolean,readOnly:!0,value:!1},receivedFocusFromKeyboard:{type:Boolean,readOnly:!0},ariaActiveAttribute:{type:String,value:"aria-pressed",observer:"_ariaActiveAttributeChanged"}},listeners:{down:"_downHandler",up:"_upHandler",tap:"_tapHandler"},observers:["_focusChanged(focused)","_activeChanged(active, ariaActiveAttribute)"],keyBindings:{"enter:keydown":"_asyncClick","space:keydown":"_spaceKeyDownHandler","space:keyup":"_spaceKeyUpHandler"},_mouseEventRe:/^mouse/,_tapHandler:function(){this.toggles?this._userActivate(!this.active):this.active=!1},_focusChanged:function(e){this._detectKeyboardFocus(e),e||this._setPressed(!1)},_detectKeyboardFocus:function(e){this._setReceivedFocusFromKeyboard(!this.pointerDown&&e)},_userActivate:function(e){this.active!==e&&(this.active=e,this.fire("change"))},_downHandler:function(e){this._setPointerDown(!0),this._setPressed(!0),this._setReceivedFocusFromKeyboard(!1)},_upHandler:function(){this._setPointerDown(!1),this._setPressed(!1)},_spaceKeyDownHandler:function(e){var t=e.detail.keyboardEvent,r=kn(t).localTarget;this.isLightDescendant(r)||(t.preventDefault(),t.stopImmediatePropagation(),this._setPressed(!0))},_spaceKeyUpHandler:function(e){var t=e.detail.keyboardEvent,r=kn(t).localTarget;this.isLightDescendant(r)||(this.pressed&&this._asyncClick(),this._setPressed(!1))},_asyncClick:function(){this.async((function(){this.click()}),1)},_pressedChanged:function(e){this._changedButtonState()},_ariaActiveAttributeChanged:function(e,t){t&&t!=e&&this.hasAttribute(t)&&this.removeAttribute(t)},_activeChanged:function(e,t){this.toggles?this.setAttribute(this.ariaActiveAttribute,e?"true":"false"):this.removeAttribute(this.ariaActiveAttribute),this._changedButtonState()},_controlStateChanged:function(){this.disabled?this._setPressed(!1):this._changedButtonState()},_changedButtonState:function(){this._buttonStateChanged&&this._buttonStateChanged()}},zi=[Fi,Bi];
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/export{vi as B,Qt as D,Fi as I,Ln as L,jn as P,dn as a,rt as b,Ir as c,kn as d,tr as e,Hi as f,zi as g,di as h,$r as i,Ve as j,Bi as k,de as u,De as w};
