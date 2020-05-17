import{_ as e}from"./_rollupPluginBabelHelpers-6e21a838.js";import{L as t,d as i,A as r,P as n,p as a,q as o,h as s,c as d,a as c,n as l,N as m,t as u,e as p}from"./lit-element-51727a0b.js";import{c as h}from"./connect-mixin-144a42a2.js";import{getFontSizeFromString as _,defineCustomElement as f}from"./utilities.js";import"./redux-ce442100.js";import{store as g}from"./configureStore.js";import"./middleware.js";import"./types.js";import"./index.js";import"./index2.js";import"./index3.js";import"./index4.js";import"./index5.js";import"./language.js";import"./version.js";import"./index6.js";import"./initialState.js";import"./unsafe-html-8b0a0b93.js";import"./lit-redux-router-4dc3c97f.js";import"./creators.js";import"./thunks.js";import{setSiteTitle as v,setSiteBrandPath as b,setReaderFontStyle as y,setReaderTextAlign as k,setReaderTextDirection as w,setReaderLineBreak as A,loadLanguage as C,loadVersion as x,loadReference as E,setReaderVerseDisplay as T}from"./dispatchers.js";import{getThemeFromStorage as S,enableTheme as I}from"./BibleToolsTheme.js";
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */var R=function(e,t){return(R=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var i in t)t.hasOwnProperty(i)&&(e[i]=t[i])})(e,t)};function D(e,t){function i(){this.constructor=e}R(e,t),e.prototype=null===t?Object.create(t):(i.prototype=t.prototype,new i)}var H=function(){return(H=Object.assign||function(e){for(var t,i=1,r=arguments.length;i<r;i++)for(var n in t=arguments[i])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}).apply(this,arguments)};function O(e,t,i,r){var n,a=arguments.length,o=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(o=(a<3?n(o):a>3?n(t,i,o):n(t,i))||o);return a>3&&o&&Object.defineProperty(t,i,o),o
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */}var V=function(){function e(e){void 0===e&&(e={}),this.adapter_=e}return Object.defineProperty(e,"cssClasses",{get:function(){return{}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return{}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"numbers",{get:function(){return{}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{}},enumerable:!0,configurable:!0}),e.prototype.init=function(){},e.prototype.destroy=function(){},e}(),F={ROOT:"mdc-form-field"},L={LABEL_SELECTOR:".mdc-form-field > label"},N=function(e){function t(i){var r=e.call(this,H({},t.defaultAdapter,i))||this;return r.clickHandler_=function(){return r.handleClick_()},r}return D(t,e),Object.defineProperty(t,"cssClasses",{get:function(){return F},enumerable:!0,configurable:!0}),Object.defineProperty(t,"strings",{get:function(){return L},enumerable:!0,configurable:!0}),Object.defineProperty(t,"defaultAdapter",{get:function(){return{activateInputRipple:function(){},deactivateInputRipple:function(){},deregisterInteractionHandler:function(){},registerInteractionHandler:function(){}}},enumerable:!0,configurable:!0}),t.prototype.init=function(){this.adapter_.registerInteractionHandler("click",this.clickHandler_)},t.prototype.destroy=function(){this.adapter_.deregisterInteractionHandler("click",this.clickHandler_)},t.prototype.handleClick_=function(){var e=this;this.adapter_.activateInputRipple(),requestAnimationFrame((function(){return e.adapter_.deactivateInputRipple()}))},t}(V);
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */const P=e=>(t,i)=>{if(t.constructor._observers){if(!t.constructor.hasOwnProperty("_observers")){const e=t.constructor._observers;t.constructor._observers=new Map,e.forEach((e,i)=>t.constructor._observers.set(i,e))}}else{t.constructor._observers=new Map;const e=t.updated;t.updated=function(t){e.call(this,t),t.forEach((e,t)=>{const i=this.constructor._observers.get(t);void 0!==i&&i.call(this,this[t],e)})}}t.constructor._observers.set(i,e)};
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */function M(e,t){return(e.matches||e.webkitMatchesSelector||e.msMatchesSelector).call(e,t)}
/**
@license
Copyright 2018 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/function z(e){return{addClass:t=>{e.classList.add(t)},removeClass:t=>{e.classList.remove(t)},hasClass:t=>e.classList.contains(t)}}const B=()=>{},j={get passive(){return!1}};document.addEventListener("x",B,j),document.removeEventListener("x",B);
/**
@license
Copyright 2018 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
class U extends t{createFoundation(){void 0!==this.mdcFoundation&&this.mdcFoundation.destroy(),this.mdcFoundation=new this.mdcFoundationClass(this.createAdapter()),this.mdcFoundation.init()}firstUpdated(){this.createFoundation()}}
/**
@license
Copyright 2018 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/class G extends U{createRenderRoot(){return this.attachShadow({mode:"open",delegatesFocus:!0})}click(){this.formElement&&(this.formElement.focus(),this.formElement.click())}setAriaLabel(e){this.formElement&&this.formElement.setAttribute("aria-label",e)}firstUpdated(){super.firstUpdated(),this.mdcRoot.addEventListener("change",e=>{this.dispatchEvent(new Event("change",e))})}}
/**
 * @license
 * Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const $=new WeakMap,X=i(e=>t=>{if(!(t instanceof r)||t instanceof n||"class"!==t.committer.name||t.committer.parts.length>1)throw new Error("The `classMap` directive must be used in the `class` attribute and must be the only part in the attribute.");const{committer:i}=t,{element:a}=i;$.has(t)||(a.className=i.strings.join(" "));const{classList:o}=a,s=$.get(t);for(const t in s)t in e||o.remove(t);for(const t in e){const i=e[t];if(!s||i!==s[t]){o[i?"add":"remove"](t)}}$.set(t,e)});class q extends U{constructor(){super(...arguments),this.alignEnd=!1,this.label="",this.mdcFoundationClass=N}createAdapter(){return{registerInteractionHandler:(e,t)=>{this.labelEl.addEventListener(e,t)},deregisterInteractionHandler:(e,t)=>{this.labelEl.removeEventListener(e,t)},activateInputRipple:()=>{const e=this.input;e instanceof G&&e.ripple&&e.ripple.activate()},deactivateInputRipple:()=>{const e=this.input;e instanceof G&&e.ripple&&e.ripple.deactivate()}}}get input(){return function(e,t){for(const i of e.assignedNodes({flatten:!0}))if(i.nodeType===Node.ELEMENT_NODE){const e=i;if(M(e,t))return e}return null}(this.slotEl,"*")}render(){return s`
      <div class="mdc-form-field ${X({"mdc-form-field--align-end":this.alignEnd})}">
        <slot></slot>
        <label class="mdc-label"
               @click="${this._labelClick}">${this.label}</label>
      </div>`}_labelClick(){const e=this.input;e&&(e.focus(),e.click())}}O([a({type:Boolean})],q.prototype,"alignEnd",void 0),O([a({type:String}),P((async function(e){const t=this.input;t&&("input"===t.localName?t.setAttribute("aria-label",e):t instanceof G&&(await t.updateComplete,t.setAriaLabel(e)))}))],q.prototype,"label",void 0),O([o(".mdc-form-field")],q.prototype,"mdcRoot",void 0),O([o("slot")],q.prototype,"slotEl",void 0),O([o("label")],q.prototype,"labelEl",void 0);
/**
@license
Copyright 2018 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
const K=d`.mdc-form-field{font-family:Roboto, sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:.875rem;line-height:1.25rem;font-weight:400;letter-spacing:.0178571429em;text-decoration:inherit;text-transform:inherit;color:rgba(0,0,0,.87);color:var(--mdc-theme-text-primary-on-background, rgba(0, 0, 0, 0.87));display:inline-flex;align-items:center;vertical-align:middle}.mdc-form-field>label{margin-left:0;margin-right:auto;padding-left:4px;padding-right:0;order:0}[dir=rtl] .mdc-form-field>label,.mdc-form-field>label[dir=rtl]{margin-left:auto;margin-right:0}[dir=rtl] .mdc-form-field>label,.mdc-form-field>label[dir=rtl]{padding-left:0;padding-right:4px}.mdc-form-field--align-end>label{margin-left:auto;margin-right:0;padding-left:0;padding-right:4px;order:-1}[dir=rtl] .mdc-form-field--align-end>label,.mdc-form-field--align-end>label[dir=rtl]{margin-left:0;margin-right:auto}[dir=rtl] .mdc-form-field--align-end>label,.mdc-form-field--align-end>label[dir=rtl]{padding-left:4px;padding-right:0}.mdc-form-field{align-items:center}::slotted(*){font-family:Roboto, sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:.875rem;line-height:1.25rem;font-weight:400;letter-spacing:.0178571429em;text-decoration:inherit;text-transform:inherit;color:rgba(0,0,0,.87);color:var(--mdc-theme-text-primary-on-background, rgba(0, 0, 0, 0.87))}::slotted(mwc-switch){margin-right:10px}[dir=rtl] ::slotted(mwc-switch),::slotted(mwc-switch)[dir=rtl]{margin-left:10px}`;let W=class extends q{};
/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var Y;function J(e,t){if(void 0===e&&(e=window),void 0===t&&(t=!1),void 0===Y||t){var i=!1;try{e.document.addEventListener("test",(function(){}),{get passive(){return i=!0}})}catch(e){}Y=i}return!!Y&&{passive:!0}}
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */W.styles=K,W=O([c("mwc-formfield")],W);var Z,Q={BG_FOCUSED:"mdc-ripple-upgraded--background-focused",FG_ACTIVATION:"mdc-ripple-upgraded--foreground-activation",FG_DEACTIVATION:"mdc-ripple-upgraded--foreground-deactivation",ROOT:"mdc-ripple-upgraded",UNBOUNDED:"mdc-ripple-upgraded--unbounded"},ee={VAR_FG_SCALE:"--mdc-ripple-fg-scale",VAR_FG_SIZE:"--mdc-ripple-fg-size",VAR_FG_TRANSLATE_END:"--mdc-ripple-fg-translate-end",VAR_FG_TRANSLATE_START:"--mdc-ripple-fg-translate-start",VAR_LEFT:"--mdc-ripple-left",VAR_TOP:"--mdc-ripple-top"},te={DEACTIVATION_TIMEOUT_MS:225,FG_DEACTIVATION_MS:150,INITIAL_ORIGIN_SCALE:.6,PADDING:10,TAP_DELAY_MS:300};
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var ie=["touchstart","pointerdown","mousedown","keydown"],re=["touchend","pointerup","mouseup","contextmenu"],ne=[],ae=function(e){function t(i){var r=e.call(this,H({},t.defaultAdapter,i))||this;return r.activationAnimationHasEnded_=!1,r.activationTimer_=0,r.fgDeactivationRemovalTimer_=0,r.fgScale_="0",r.frame_={width:0,height:0},r.initialSize_=0,r.layoutFrame_=0,r.maxRadius_=0,r.unboundedCoords_={left:0,top:0},r.activationState_=r.defaultActivationState_(),r.activationTimerCallback_=function(){r.activationAnimationHasEnded_=!0,r.runDeactivationUXLogicIfReady_()},r.activateHandler_=function(e){return r.activate_(e)},r.deactivateHandler_=function(){return r.deactivate_()},r.focusHandler_=function(){return r.handleFocus()},r.blurHandler_=function(){return r.handleBlur()},r.resizeHandler_=function(){return r.layout()},r}return D(t,e),Object.defineProperty(t,"cssClasses",{get:function(){return Q},enumerable:!0,configurable:!0}),Object.defineProperty(t,"strings",{get:function(){return ee},enumerable:!0,configurable:!0}),Object.defineProperty(t,"numbers",{get:function(){return te},enumerable:!0,configurable:!0}),Object.defineProperty(t,"defaultAdapter",{get:function(){return{addClass:function(){},browserSupportsCssVars:function(){return!0},computeBoundingRect:function(){return{top:0,right:0,bottom:0,left:0,width:0,height:0}},containsEventTarget:function(){return!0},deregisterDocumentInteractionHandler:function(){},deregisterInteractionHandler:function(){},deregisterResizeHandler:function(){},getWindowPageOffset:function(){return{x:0,y:0}},isSurfaceActive:function(){return!0},isSurfaceDisabled:function(){return!0},isUnbounded:function(){return!0},registerDocumentInteractionHandler:function(){},registerInteractionHandler:function(){},registerResizeHandler:function(){},removeClass:function(){},updateCssVariable:function(){}}},enumerable:!0,configurable:!0}),t.prototype.init=function(){var e=this,i=this.supportsPressRipple_();if(this.registerRootHandlers_(i),i){var r=t.cssClasses,n=r.ROOT,a=r.UNBOUNDED;requestAnimationFrame((function(){e.adapter_.addClass(n),e.adapter_.isUnbounded()&&(e.adapter_.addClass(a),e.layoutInternal_())}))}},t.prototype.destroy=function(){var e=this;if(this.supportsPressRipple_()){this.activationTimer_&&(clearTimeout(this.activationTimer_),this.activationTimer_=0,this.adapter_.removeClass(t.cssClasses.FG_ACTIVATION)),this.fgDeactivationRemovalTimer_&&(clearTimeout(this.fgDeactivationRemovalTimer_),this.fgDeactivationRemovalTimer_=0,this.adapter_.removeClass(t.cssClasses.FG_DEACTIVATION));var i=t.cssClasses,r=i.ROOT,n=i.UNBOUNDED;requestAnimationFrame((function(){e.adapter_.removeClass(r),e.adapter_.removeClass(n),e.removeCssVars_()}))}this.deregisterRootHandlers_(),this.deregisterDeactivationHandlers_()},t.prototype.activate=function(e){this.activate_(e)},t.prototype.deactivate=function(){this.deactivate_()},t.prototype.layout=function(){var e=this;this.layoutFrame_&&cancelAnimationFrame(this.layoutFrame_),this.layoutFrame_=requestAnimationFrame((function(){e.layoutInternal_(),e.layoutFrame_=0}))},t.prototype.setUnbounded=function(e){var i=t.cssClasses.UNBOUNDED;e?this.adapter_.addClass(i):this.adapter_.removeClass(i)},t.prototype.handleFocus=function(){var e=this;requestAnimationFrame((function(){return e.adapter_.addClass(t.cssClasses.BG_FOCUSED)}))},t.prototype.handleBlur=function(){var e=this;requestAnimationFrame((function(){return e.adapter_.removeClass(t.cssClasses.BG_FOCUSED)}))},t.prototype.supportsPressRipple_=function(){return this.adapter_.browserSupportsCssVars()},t.prototype.defaultActivationState_=function(){return{activationEvent:void 0,hasDeactivationUXRun:!1,isActivated:!1,isProgrammatic:!1,wasActivatedByPointer:!1,wasElementMadeActive:!1}},t.prototype.registerRootHandlers_=function(e){var t=this;e&&(ie.forEach((function(e){t.adapter_.registerInteractionHandler(e,t.activateHandler_)})),this.adapter_.isUnbounded()&&this.adapter_.registerResizeHandler(this.resizeHandler_)),this.adapter_.registerInteractionHandler("focus",this.focusHandler_),this.adapter_.registerInteractionHandler("blur",this.blurHandler_)},t.prototype.registerDeactivationHandlers_=function(e){var t=this;"keydown"===e.type?this.adapter_.registerInteractionHandler("keyup",this.deactivateHandler_):re.forEach((function(e){t.adapter_.registerDocumentInteractionHandler(e,t.deactivateHandler_)}))},t.prototype.deregisterRootHandlers_=function(){var e=this;ie.forEach((function(t){e.adapter_.deregisterInteractionHandler(t,e.activateHandler_)})),this.adapter_.deregisterInteractionHandler("focus",this.focusHandler_),this.adapter_.deregisterInteractionHandler("blur",this.blurHandler_),this.adapter_.isUnbounded()&&this.adapter_.deregisterResizeHandler(this.resizeHandler_)},t.prototype.deregisterDeactivationHandlers_=function(){var e=this;this.adapter_.deregisterInteractionHandler("keyup",this.deactivateHandler_),re.forEach((function(t){e.adapter_.deregisterDocumentInteractionHandler(t,e.deactivateHandler_)}))},t.prototype.removeCssVars_=function(){var e=this,i=t.strings;Object.keys(i).forEach((function(t){0===t.indexOf("VAR_")&&e.adapter_.updateCssVariable(i[t],null)}))},t.prototype.activate_=function(e){var t=this;if(!this.adapter_.isSurfaceDisabled()){var i=this.activationState_;if(!i.isActivated){var r=this.previousActivationEvent_;if(!(r&&void 0!==e&&r.type!==e.type))i.isActivated=!0,i.isProgrammatic=void 0===e,i.activationEvent=e,i.wasActivatedByPointer=!i.isProgrammatic&&(void 0!==e&&("mousedown"===e.type||"touchstart"===e.type||"pointerdown"===e.type)),void 0!==e&&ne.length>0&&ne.some((function(e){return t.adapter_.containsEventTarget(e)}))?this.resetActivationState_():(void 0!==e&&(ne.push(e.target),this.registerDeactivationHandlers_(e)),i.wasElementMadeActive=this.checkElementMadeActive_(e),i.wasElementMadeActive&&this.animateActivation_(),requestAnimationFrame((function(){ne=[],i.wasElementMadeActive||void 0===e||" "!==e.key&&32!==e.keyCode||(i.wasElementMadeActive=t.checkElementMadeActive_(e),i.wasElementMadeActive&&t.animateActivation_()),i.wasElementMadeActive||(t.activationState_=t.defaultActivationState_())})))}}},t.prototype.checkElementMadeActive_=function(e){return void 0===e||"keydown"!==e.type||this.adapter_.isSurfaceActive()},t.prototype.animateActivation_=function(){var e=this,i=t.strings,r=i.VAR_FG_TRANSLATE_START,n=i.VAR_FG_TRANSLATE_END,a=t.cssClasses,o=a.FG_DEACTIVATION,s=a.FG_ACTIVATION,d=t.numbers.DEACTIVATION_TIMEOUT_MS;this.layoutInternal_();var c="",l="";if(!this.adapter_.isUnbounded()){var m=this.getFgTranslationCoordinates_(),u=m.startPoint,p=m.endPoint;c=u.x+"px, "+u.y+"px",l=p.x+"px, "+p.y+"px"}this.adapter_.updateCssVariable(r,c),this.adapter_.updateCssVariable(n,l),clearTimeout(this.activationTimer_),clearTimeout(this.fgDeactivationRemovalTimer_),this.rmBoundedActivationClasses_(),this.adapter_.removeClass(o),this.adapter_.computeBoundingRect(),this.adapter_.addClass(s),this.activationTimer_=setTimeout((function(){return e.activationTimerCallback_()}),d)},t.prototype.getFgTranslationCoordinates_=function(){var e,t=this.activationState_,i=t.activationEvent;return{startPoint:e={x:(e=t.wasActivatedByPointer?function(e,t,i){if(!e)return{x:0,y:0};var r,n,a=t.x,o=t.y,s=a+i.left,d=o+i.top;if("touchstart"===e.type){var c=e;r=c.changedTouches[0].pageX-s,n=c.changedTouches[0].pageY-d}else{var l=e;r=l.pageX-s,n=l.pageY-d}return{x:r,y:n}}(i,this.adapter_.getWindowPageOffset(),this.adapter_.computeBoundingRect()):{x:this.frame_.width/2,y:this.frame_.height/2}).x-this.initialSize_/2,y:e.y-this.initialSize_/2},endPoint:{x:this.frame_.width/2-this.initialSize_/2,y:this.frame_.height/2-this.initialSize_/2}}},t.prototype.runDeactivationUXLogicIfReady_=function(){var e=this,i=t.cssClasses.FG_DEACTIVATION,r=this.activationState_,n=r.hasDeactivationUXRun,a=r.isActivated;(n||!a)&&this.activationAnimationHasEnded_&&(this.rmBoundedActivationClasses_(),this.adapter_.addClass(i),this.fgDeactivationRemovalTimer_=setTimeout((function(){e.adapter_.removeClass(i)}),te.FG_DEACTIVATION_MS))},t.prototype.rmBoundedActivationClasses_=function(){var e=t.cssClasses.FG_ACTIVATION;this.adapter_.removeClass(e),this.activationAnimationHasEnded_=!1,this.adapter_.computeBoundingRect()},t.prototype.resetActivationState_=function(){var e=this;this.previousActivationEvent_=this.activationState_.activationEvent,this.activationState_=this.defaultActivationState_(),setTimeout((function(){return e.previousActivationEvent_=void 0}),t.numbers.TAP_DELAY_MS)},t.prototype.deactivate_=function(){var e=this,t=this.activationState_;if(t.isActivated){var i=H({},t);t.isProgrammatic?(requestAnimationFrame((function(){return e.animateDeactivation_(i)})),this.resetActivationState_()):(this.deregisterDeactivationHandlers_(),requestAnimationFrame((function(){e.activationState_.hasDeactivationUXRun=!0,e.animateDeactivation_(i),e.resetActivationState_()})))}},t.prototype.animateDeactivation_=function(e){var t=e.wasActivatedByPointer,i=e.wasElementMadeActive;(t||i)&&this.runDeactivationUXLogicIfReady_()},t.prototype.layoutInternal_=function(){var e=this;this.frame_=this.adapter_.computeBoundingRect();var i=Math.max(this.frame_.height,this.frame_.width);this.maxRadius_=this.adapter_.isUnbounded()?i:Math.sqrt(Math.pow(e.frame_.width,2)+Math.pow(e.frame_.height,2))+t.numbers.PADDING;var r=Math.floor(i*t.numbers.INITIAL_ORIGIN_SCALE);this.adapter_.isUnbounded()&&r%2!=0?this.initialSize_=r-1:this.initialSize_=r,this.fgScale_=""+this.maxRadius_/this.initialSize_,this.updateLayoutCssVars_()},t.prototype.updateLayoutCssVars_=function(){var e=t.strings,i=e.VAR_FG_SIZE,r=e.VAR_LEFT,n=e.VAR_TOP,a=e.VAR_FG_SCALE;this.adapter_.updateCssVariable(i,this.initialSize_+"px"),this.adapter_.updateCssVariable(a,this.fgScale_),this.adapter_.isUnbounded()&&(this.unboundedCoords_={left:Math.round(this.frame_.width/2-this.initialSize_/2),top:Math.round(this.frame_.height/2-this.initialSize_/2)},this.adapter_.updateCssVariable(r,this.unboundedCoords_.left+"px"),this.adapter_.updateCssVariable(n,this.unboundedCoords_.top+"px"))},t}(V);
/**
@license
Copyright 2018 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
const oe=d`@keyframes mdc-ripple-fg-radius-in{from{animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1)}to{transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}}@keyframes mdc-ripple-fg-opacity-in{from{animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity, 0)}}@keyframes mdc-ripple-fg-opacity-out{from{animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity, 0)}to{opacity:0}}`
/**
@license
Copyright 2018 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/,se=function(e,t){void 0===t&&(t=!1);var i,r=e.CSS;if("boolean"==typeof Z&&!t)return Z;if(!(r&&"function"==typeof r.supports))return!1;var n=r.supports("--css-vars","yes"),a=r.supports("(--css-vars: yes)")&&r.supports("color","#00000000");return i=n||a,t||(Z=i),i}(window),de=navigator.userAgent.match(/Safari/);let ce=!1;const le=e=>{de&&!ce&&(()=>{ce=!0;const e=document.createElement("style"),t=new m({templateFactory:u});t.appendInto(e),t.setValue(oe),t.commit(),document.head.appendChild(e)})();const t=e.surfaceNode,i=e.interactionNode||t;i.getRootNode()!==t.getRootNode()&&""===i.style.position&&(i.style.position="relative");const r=new ae({browserSupportsCssVars:()=>se,isUnbounded:()=>void 0===e.unbounded||e.unbounded,isSurfaceActive:()=>M(i,":active"),isSurfaceDisabled:()=>Boolean(i.hasAttribute("disabled")),addClass:e=>t.classList.add(e),removeClass:e=>t.classList.remove(e),containsEventTarget:e=>i.contains(e),registerInteractionHandler:(e,t)=>i.addEventListener(e,t,J()),deregisterInteractionHandler:(e,t)=>i.removeEventListener(e,t,J()),registerDocumentInteractionHandler:(e,t)=>document.documentElement.addEventListener(e,t,J()),deregisterDocumentInteractionHandler:(e,t)=>document.documentElement.removeEventListener(e,t,J()),registerResizeHandler:e=>window.addEventListener("resize",e),deregisterResizeHandler:e=>window.removeEventListener("resize",e),updateCssVariable:(e,i)=>t.style.setProperty(e,i),computeBoundingRect:()=>t.getBoundingClientRect(),getWindowPageOffset:()=>({x:window.pageXOffset,y:window.pageYOffset})});return r.init(),r},me=new WeakMap,ue=i((e={})=>t=>{const i=t.committer.element,r=e.interactionNode||i;let n=t.value;const a=me.get(n);void 0!==a&&a!==r&&(n.destroy(),n=l),n===l?(n=le(Object.assign({},e,{surfaceNode:i})),me.set(n,r),t.setValue(n)):(void 0!==e.unbounded&&n.setUnbounded(e.unbounded),void 0!==e.disabled&&n.setUnbounded(e.disabled)),!0===e.active?n.activate():!1===e.active&&n.deactivate()});
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var pe={NATIVE_CONTROL_SELECTOR:".mdc-radio__native-control"},he={DISABLED:"mdc-radio--disabled",ROOT:"mdc-radio"},_e=function(e){function t(i){return e.call(this,H({},t.defaultAdapter,i))||this}return D(t,e),Object.defineProperty(t,"cssClasses",{get:function(){return he},enumerable:!0,configurable:!0}),Object.defineProperty(t,"strings",{get:function(){return pe},enumerable:!0,configurable:!0}),Object.defineProperty(t,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},setNativeControlDisabled:function(){}}},enumerable:!0,configurable:!0}),t.prototype.setDisabled=function(e){var i=t.cssClasses.DISABLED;this.adapter_.setNativeControlDisabled(e),e?this.adapter_.addClass(i):this.adapter_.removeClass(i)},t}(V);class fe extends G{constructor(){super(...arguments),this._checked=!1,this.disabled=!1,this.value="",this.name="",this.mdcFoundationClass=_e}get checked(){return this._checked}set checked(e){const t=this._checked;!!e!=!!t&&(this._checked=e,this.formElement&&(this.formElement.checked=e),void 0!==this._selectionController&&this._selectionController.update(this),this.requestUpdate("checked",t))}_handleUpdatedValue(e){this.formElement.value=e}connectedCallback(){super.connectedCallback(),this._selectionController=be.getController(this),this._selectionController.register(this),this._selectionController.update(this)}disconnectedCallback(){this._selectionController.unregister(this),this._selectionController=void 0}focusNative(){this.formElement.focus()}get ripple(){return this.rippleElement.ripple}createAdapter(){return Object.assign(Object.assign({},z(this.mdcRoot)),{setNativeControlDisabled:e=>{this.formElement.disabled=e}})}_changeHandler(){this.checked=this.formElement.checked}_focusHandler(){void 0!==this._selectionController&&this._selectionController.focus(this)}_clickHandler(){this.formElement.focus()}render(){return s`
      <div class="mdc-radio" .ripple=${ue()}>
        <input
          class="mdc-radio__native-control"
          type="radio"
          name="${this.name}"
          .checked="${this.checked}"
          .value="${this.value}"
          @change="${this._changeHandler}"
          @focus="${this._focusHandler}"
          @click="${this._clickHandler}">
        <div class="mdc-radio__background">
          <div class="mdc-radio__outer-circle"></div>
          <div class="mdc-radio__inner-circle"></div>
        </div>
        <div class="mdc-radio__ripple"></div>
      </div>`}firstUpdated(){super.firstUpdated(),this.formElement.checked=this.checked,void 0!==this._selectionController&&this._selectionController.update(this)}}O([o(".mdc-radio")],fe.prototype,"mdcRoot",void 0),O([o("input")],fe.prototype,"formElement",void 0),O([o(".mdc-radio__ripple")],fe.prototype,"rippleElement",void 0),O([a({type:Boolean,reflect:!0})],fe.prototype,"checked",null),O([a({type:Boolean}),P((function(e){this.mdcFoundation.setDisabled(e)}))],fe.prototype,"disabled",void 0),O([a({type:String}),P((function(e){this._handleUpdatedValue(e)}))],fe.prototype,"value",void 0),O([a({type:String})],fe.prototype,"name",void 0);const ge=Symbol("selection controller");class ve{constructor(){this.selected=null,this.ordered=null,this.set=new Set}}class be{constructor(e){this.sets={},this.focusedSet=null,this.mouseIsDown=!1,this.updating=!1,e.addEventListener("keydown",e=>this.keyDownHandler(e)),e.addEventListener("mousedown",()=>this.mousedownHandler()),e.addEventListener("mouseup",()=>this.mouseupHandler())}static getController(e){const t=e.getRootNode();let i=t[ge];return void 0===i&&(i=new be(t),t[ge]=i),i}keyDownHandler(e){if(!(e.target instanceof fe))return;const t=e.target;this.has(t)&&("ArrowRight"==e.key||"ArrowDown"==e.key?this.next(t):"ArrowLeft"!=e.key&&"ArrowUp"!=e.key||this.previous(t))}mousedownHandler(){this.mouseIsDown=!0}mouseupHandler(){this.mouseIsDown=!1}has(e){return this.getSet(e.name).set.has(e)}previous(e){const t=this.getOrdered(e),i=t.indexOf(e);this.select(t[i-1]||t[t.length-1])}next(e){const t=this.getOrdered(e),i=t.indexOf(e);this.select(t[i+1]||t[0])}select(e){e.click()}focus(e){if(this.mouseIsDown)return;const t=this.getSet(e.name),i=this.focusedSet;this.focusedSet=t,i!=t&&t.selected&&t.selected!=e&&t.selected.focusNative()}getOrdered(e){const t=this.getSet(e.name);return t.ordered||(t.ordered=Array.from(t.set),t.ordered.sort((e,t)=>e.compareDocumentPosition(t)==Node.DOCUMENT_POSITION_PRECEDING?1:0)),t.ordered}getSet(e){return this.sets[e]||(this.sets[e]=new ve),this.sets[e]}register(e){const t=this.getSet(e.name);t.set.add(e),t.ordered=null}unregister(e){const t=this.getSet(e.name);t.set.delete(e),t.ordered=null,t.selected==e&&(t.selected=null)}update(e){if(!this.updating){if(this.updating=!0,e.checked){const t=this.getSet(e.name);for(const i of t.set)i.checked=i==e;t.selected=e}this.updating=!1}}}
/**
@license
Copyright 2018 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/const ye=d`.mdc-touch-target-wrapper{display:inline}.mdc-radio{padding:10px;display:inline-block;position:relative;flex:0 0 auto;box-sizing:content-box;width:20px;height:20px;cursor:pointer;will-change:opacity,transform,border-color,color}.mdc-radio .mdc-radio__native-control:enabled:not(:checked)+.mdc-radio__background .mdc-radio__outer-circle{border-color:rgba(0,0,0,.54)}.mdc-radio .mdc-radio__native-control:enabled:checked+.mdc-radio__background .mdc-radio__outer-circle{border-color:#018786;border-color:var(--mdc-theme-secondary, #018786)}.mdc-radio .mdc-radio__native-control:enabled+.mdc-radio__background .mdc-radio__inner-circle{border-color:#018786;border-color:var(--mdc-theme-secondary, #018786)}.mdc-radio [aria-disabled=true] .mdc-radio__native-control:not(:checked)+.mdc-radio__background .mdc-radio__outer-circle,.mdc-radio .mdc-radio__native-control:disabled:not(:checked)+.mdc-radio__background .mdc-radio__outer-circle{border-color:rgba(0,0,0,.38)}.mdc-radio [aria-disabled=true] .mdc-radio__native-control:checked+.mdc-radio__background .mdc-radio__outer-circle,.mdc-radio .mdc-radio__native-control:disabled:checked+.mdc-radio__background .mdc-radio__outer-circle{border-color:rgba(0,0,0,.38)}.mdc-radio [aria-disabled=true] .mdc-radio__native-control+.mdc-radio__background .mdc-radio__inner-circle,.mdc-radio .mdc-radio__native-control:disabled+.mdc-radio__background .mdc-radio__inner-circle{border-color:rgba(0,0,0,.38)}.mdc-radio .mdc-radio__background::before{background-color:#018786;background-color:var(--mdc-theme-secondary, #018786)}.mdc-radio .mdc-radio__background::before{top:-10px;left:-10px;width:40px;height:40px}.mdc-radio .mdc-radio__native-control{top:0px;right:0px;left:0px;width:40px;height:40px}.mdc-radio__background{display:inline-block;position:relative;box-sizing:border-box;width:20px;height:20px}.mdc-radio__background::before{position:absolute;transform:scale(0, 0);border-radius:50%;opacity:0;pointer-events:none;content:"";transition:opacity 120ms 0ms cubic-bezier(0.4, 0, 0.6, 1),transform 120ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-radio__outer-circle{position:absolute;top:0;left:0;box-sizing:border-box;width:100%;height:100%;border-width:2px;border-style:solid;border-radius:50%;transition:border-color 120ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-radio__inner-circle{position:absolute;top:0;left:0;box-sizing:border-box;width:100%;height:100%;transform:scale(0, 0);border-width:10px;border-style:solid;border-radius:50%;transition:transform 120ms 0ms cubic-bezier(0.4, 0, 0.6, 1),border-color 120ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-radio__native-control{position:absolute;margin:0;padding:0;opacity:0;cursor:inherit;z-index:1}.mdc-radio--touch{margin-top:4px;margin-bottom:4px;margin-right:4px;margin-left:4px}.mdc-radio--touch .mdc-radio__native-control{top:-4px;right:-4px;left:-4px;width:48px;height:48px}.mdc-radio__native-control:checked+.mdc-radio__background,.mdc-radio__native-control:disabled+.mdc-radio__background{transition:opacity 120ms 0ms cubic-bezier(0, 0, 0.2, 1),transform 120ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mdc-radio__native-control:checked+.mdc-radio__background .mdc-radio__outer-circle,.mdc-radio__native-control:disabled+.mdc-radio__background .mdc-radio__outer-circle{transition:border-color 120ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mdc-radio__native-control:checked+.mdc-radio__background .mdc-radio__inner-circle,.mdc-radio__native-control:disabled+.mdc-radio__background .mdc-radio__inner-circle{transition:transform 120ms 0ms cubic-bezier(0, 0, 0.2, 1),border-color 120ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mdc-radio--disabled{cursor:default;pointer-events:none}.mdc-radio__native-control:checked+.mdc-radio__background .mdc-radio__inner-circle{transform:scale(0.5);transition:transform 120ms 0ms cubic-bezier(0, 0, 0.2, 1),border-color 120ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mdc-radio__native-control:disabled+.mdc-radio__background,[aria-disabled=true] .mdc-radio__native-control+.mdc-radio__background{cursor:default}.mdc-radio__native-control:focus+.mdc-radio__background::before{transform:scale(1);opacity:.12;transition:opacity 120ms 0ms cubic-bezier(0, 0, 0.2, 1),transform 120ms 0ms cubic-bezier(0, 0, 0.2, 1)}@keyframes mdc-ripple-fg-radius-in{from{animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1)}to{transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}}@keyframes mdc-ripple-fg-opacity-in{from{animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity, 0)}}@keyframes mdc-ripple-fg-opacity-out{from{animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity, 0)}to{opacity:0}}.mdc-radio{--mdc-ripple-fg-size: 0;--mdc-ripple-left: 0;--mdc-ripple-top: 0;--mdc-ripple-fg-scale: 1;--mdc-ripple-fg-translate-end: 0;--mdc-ripple-fg-translate-start: 0;-webkit-tap-highlight-color:rgba(0,0,0,0)}.mdc-radio .mdc-radio__ripple::before,.mdc-radio .mdc-radio__ripple::after{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:""}.mdc-radio .mdc-radio__ripple::before{transition:opacity 15ms linear,background-color 15ms linear;z-index:1}.mdc-radio.mdc-ripple-upgraded .mdc-radio__ripple::before{transform:scale(var(--mdc-ripple-fg-scale, 1))}.mdc-radio.mdc-ripple-upgraded .mdc-radio__ripple::after{top:0;left:0;transform:scale(0);transform-origin:center center}.mdc-radio.mdc-ripple-upgraded--unbounded .mdc-radio__ripple::after{top:var(--mdc-ripple-top, 0);left:var(--mdc-ripple-left, 0)}.mdc-radio.mdc-ripple-upgraded--foreground-activation .mdc-radio__ripple::after{animation:mdc-ripple-fg-radius-in 225ms forwards,mdc-ripple-fg-opacity-in 75ms forwards}.mdc-radio.mdc-ripple-upgraded--foreground-deactivation .mdc-radio__ripple::after{animation:mdc-ripple-fg-opacity-out 150ms;transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}.mdc-radio .mdc-radio__ripple::before,.mdc-radio .mdc-radio__ripple::after{top:calc(50% - 50%);left:calc(50% - 50%);width:100%;height:100%}.mdc-radio.mdc-ripple-upgraded .mdc-radio__ripple::before,.mdc-radio.mdc-ripple-upgraded .mdc-radio__ripple::after{top:var(--mdc-ripple-top, calc(50% - 50%));left:var(--mdc-ripple-left, calc(50% - 50%));width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-radio.mdc-ripple-upgraded .mdc-radio__ripple::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-radio .mdc-radio__ripple::before,.mdc-radio .mdc-radio__ripple::after{background-color:#018786;background-color:var(--mdc-theme-secondary, #018786)}.mdc-radio:hover .mdc-radio__ripple::before{opacity:.04}.mdc-radio.mdc-ripple-upgraded--background-focused .mdc-radio__ripple::before,.mdc-radio:not(.mdc-ripple-upgraded):focus .mdc-radio__ripple::before{transition-duration:75ms;opacity:.12}.mdc-radio:not(.mdc-ripple-upgraded) .mdc-radio__ripple::after{transition:opacity 150ms linear}.mdc-radio:not(.mdc-ripple-upgraded):active .mdc-radio__ripple::after{transition-duration:75ms;opacity:.12}.mdc-radio.mdc-ripple-upgraded{--mdc-ripple-fg-opacity: 0.12}.mdc-radio.mdc-ripple-upgraded--background-focused .mdc-radio__background::before{content:none}.mdc-radio__ripple{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none}:host{display:inline-block;outline:none}.mdc-radio{vertical-align:bottom}.mdc-radio .mdc-radio__native-control:enabled:not(:checked)+.mdc-radio__background .mdc-radio__outer-circle{border-color:var(--mdc-radio-unchecked-color, rgba(0, 0, 0, 0.54))}.mdc-radio [aria-disabled=true] .mdc-radio__native-control:not(:checked)+.mdc-radio__background .mdc-radio__outer-circle,.mdc-radio .mdc-radio__native-control:disabled:not(:checked)+.mdc-radio__background .mdc-radio__outer-circle{border-color:var(--mdc-radio-disabled-color, rgba(0, 0, 0, 0.38))}.mdc-radio [aria-disabled=true] .mdc-radio__native-control:checked+.mdc-radio__background .mdc-radio__outer-circle,.mdc-radio .mdc-radio__native-control:disabled:checked+.mdc-radio__background .mdc-radio__outer-circle{border-color:var(--mdc-radio-disabled-color, rgba(0, 0, 0, 0.38))}.mdc-radio [aria-disabled=true] .mdc-radio__native-control+.mdc-radio__background .mdc-radio__inner-circle,.mdc-radio .mdc-radio__native-control:disabled+.mdc-radio__background .mdc-radio__inner-circle{border-color:var(--mdc-radio-disabled-color, rgba(0, 0, 0, 0.38))}`;let ke=class extends fe{};ke.styles=ye,ke=O([c("mwc-radio")],ke);
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var we={animation:{prefixed:"-webkit-animation",standard:"animation"},transform:{prefixed:"-webkit-transform",standard:"transform"},transition:{prefixed:"-webkit-transition",standard:"transition"}},Ae={animationend:{cssProperty:"animation",prefixed:"webkitAnimationEnd",standard:"animationend"},animationiteration:{cssProperty:"animation",prefixed:"webkitAnimationIteration",standard:"animationiteration"},animationstart:{cssProperty:"animation",prefixed:"webkitAnimationStart",standard:"animationstart"},transitionend:{cssProperty:"transition",prefixed:"webkitTransitionEnd",standard:"transitionend"}};function Ce(e){return Boolean(e.document)&&"function"==typeof e.document.createElement}
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var xe={ACTIVE:"mdc-slider--active",DISABLED:"mdc-slider--disabled",DISCRETE:"mdc-slider--discrete",FOCUS:"mdc-slider--focus",HAS_TRACK_MARKER:"mdc-slider--display-markers",IN_TRANSIT:"mdc-slider--in-transit",IS_DISCRETE:"mdc-slider--discrete"},Ee={ARIA_DISABLED:"aria-disabled",ARIA_VALUEMAX:"aria-valuemax",ARIA_VALUEMIN:"aria-valuemin",ARIA_VALUENOW:"aria-valuenow",CHANGE_EVENT:"MDCSlider:change",INPUT_EVENT:"MDCSlider:input",PIN_VALUE_MARKER_SELECTOR:".mdc-slider__pin-value-marker",STEP_DATA_ATTR:"data-step",THUMB_CONTAINER_SELECTOR:".mdc-slider__thumb-container",TRACK_MARKER_CONTAINER_SELECTOR:".mdc-slider__track-marker-container",TRACK_SELECTOR:".mdc-slider__track"},Te={PAGE_FACTOR:4},Se=["mousedown","pointerdown","touchstart"],Ie=["mouseup","pointerup","touchend"],Re={mousedown:"mousemove",pointerdown:"pointermove",touchstart:"touchmove"},De="ArrowDown",He="ArrowLeft",Oe="ArrowRight",Ve="ArrowUp",Fe="End",Le="Home",Ne="PageDown",Pe="PageUp",Me=function(e){function t(i){var r=e.call(this,H({},t.defaultAdapter,i))||this;return r.savedTabIndex_=NaN,r.active_=!1,r.inTransit_=!1,r.isDiscrete_=!1,r.hasTrackMarker_=!1,r.handlingThumbTargetEvt_=!1,r.min_=0,r.max_=100,r.step_=0,r.value_=0,r.disabled_=!1,r.preventFocusState_=!1,r.thumbContainerPointerHandler_=function(){return r.handlingThumbTargetEvt_=!0},r.interactionStartHandler_=function(e){return r.handleDown_(e)},r.keydownHandler_=function(e){return r.handleKeydown_(e)},r.focusHandler_=function(){return r.handleFocus_()},r.blurHandler_=function(){return r.handleBlur_()},r.resizeHandler_=function(){return r.layout()},r}return D(t,e),Object.defineProperty(t,"cssClasses",{get:function(){return xe},enumerable:!0,configurable:!0}),Object.defineProperty(t,"strings",{get:function(){return Ee},enumerable:!0,configurable:!0}),Object.defineProperty(t,"numbers",{get:function(){return Te},enumerable:!0,configurable:!0}),Object.defineProperty(t,"defaultAdapter",{get:function(){return{hasClass:function(){return!1},addClass:function(){},removeClass:function(){},getAttribute:function(){return null},setAttribute:function(){},removeAttribute:function(){},computeBoundingRect:function(){return{top:0,right:0,bottom:0,left:0,width:0,height:0}},getTabIndex:function(){return 0},registerInteractionHandler:function(){},deregisterInteractionHandler:function(){},registerThumbContainerInteractionHandler:function(){},deregisterThumbContainerInteractionHandler:function(){},registerBodyInteractionHandler:function(){},deregisterBodyInteractionHandler:function(){},registerResizeHandler:function(){},deregisterResizeHandler:function(){},notifyInput:function(){},notifyChange:function(){},setThumbContainerStyleProperty:function(){},setTrackStyleProperty:function(){},setMarkerValue:function(){},setTrackMarkers:function(){},isRTL:function(){return!1}}},enumerable:!0,configurable:!0}),t.prototype.init=function(){var e=this;this.isDiscrete_=this.adapter_.hasClass(xe.IS_DISCRETE),this.hasTrackMarker_=this.adapter_.hasClass(xe.HAS_TRACK_MARKER),Se.forEach((function(t){e.adapter_.registerInteractionHandler(t,e.interactionStartHandler_),e.adapter_.registerThumbContainerInteractionHandler(t,e.thumbContainerPointerHandler_)})),this.adapter_.registerInteractionHandler("keydown",this.keydownHandler_),this.adapter_.registerInteractionHandler("focus",this.focusHandler_),this.adapter_.registerInteractionHandler("blur",this.blurHandler_),this.adapter_.registerResizeHandler(this.resizeHandler_),this.layout(),this.isDiscrete_&&0===this.getStep()&&(this.step_=1)},t.prototype.destroy=function(){var e=this;Se.forEach((function(t){e.adapter_.deregisterInteractionHandler(t,e.interactionStartHandler_),e.adapter_.deregisterThumbContainerInteractionHandler(t,e.thumbContainerPointerHandler_)})),this.adapter_.deregisterInteractionHandler("keydown",this.keydownHandler_),this.adapter_.deregisterInteractionHandler("focus",this.focusHandler_),this.adapter_.deregisterInteractionHandler("blur",this.blurHandler_),this.adapter_.deregisterResizeHandler(this.resizeHandler_)},t.prototype.setupTrackMarker=function(){this.isDiscrete_&&this.hasTrackMarker_&&0!==this.getStep()&&this.adapter_.setTrackMarkers(this.getStep(),this.getMax(),this.getMin())},t.prototype.layout=function(){this.rect_=this.adapter_.computeBoundingRect(),this.updateUIForCurrentValue_()},t.prototype.getValue=function(){return this.value_},t.prototype.setValue=function(e){this.setValue_(e,!1)},t.prototype.getMax=function(){return this.max_},t.prototype.setMax=function(e){if(e<this.min_)throw new Error("Cannot set max to be less than the slider's minimum value");this.max_=e,this.setValue_(this.value_,!1,!0),this.adapter_.setAttribute(Ee.ARIA_VALUEMAX,String(this.max_)),this.setupTrackMarker()},t.prototype.getMin=function(){return this.min_},t.prototype.setMin=function(e){if(e>this.max_)throw new Error("Cannot set min to be greater than the slider's maximum value");this.min_=e,this.setValue_(this.value_,!1,!0),this.adapter_.setAttribute(Ee.ARIA_VALUEMIN,String(this.min_)),this.setupTrackMarker()},t.prototype.getStep=function(){return this.step_},t.prototype.setStep=function(e){if(e<0)throw new Error("Step cannot be set to a negative number");this.isDiscrete_&&("number"!=typeof e||e<1)&&(e=1),this.step_=e,this.setValue_(this.value_,!1,!0),this.setupTrackMarker()},t.prototype.isDisabled=function(){return this.disabled_},t.prototype.setDisabled=function(e){this.disabled_=e,this.toggleClass_(xe.DISABLED,this.disabled_),this.disabled_?(this.savedTabIndex_=this.adapter_.getTabIndex(),this.adapter_.setAttribute(Ee.ARIA_DISABLED,"true"),this.adapter_.removeAttribute("tabindex")):(this.adapter_.removeAttribute(Ee.ARIA_DISABLED),isNaN(this.savedTabIndex_)||this.adapter_.setAttribute("tabindex",String(this.savedTabIndex_)))},t.prototype.handleDown_=function(e){var t=this;if(!this.disabled_){this.preventFocusState_=!0,this.setInTransit_(!this.handlingThumbTargetEvt_),this.handlingThumbTargetEvt_=!1,this.setActive_(!0);var i=function(e){t.handleMove_(e)},r=Re[e.type],n=function(){t.handleUp_(),t.adapter_.deregisterBodyInteractionHandler(r,i),Ie.forEach((function(e){return t.adapter_.deregisterBodyInteractionHandler(e,n)}))};this.adapter_.registerBodyInteractionHandler(r,i),Ie.forEach((function(e){return t.adapter_.registerBodyInteractionHandler(e,n)})),this.setValueFromEvt_(e)}},t.prototype.handleMove_=function(e){e.preventDefault(),this.setValueFromEvt_(e)},t.prototype.handleUp_=function(){this.setActive_(!1),this.adapter_.notifyChange()},t.prototype.getPageX_=function(e){return e.targetTouches&&e.targetTouches.length>0?e.targetTouches[0].pageX:e.pageX},t.prototype.setValueFromEvt_=function(e){var t=this.getPageX_(e),i=this.computeValueFromPageX_(t);this.setValue_(i,!0)},t.prototype.computeValueFromPageX_=function(e){var t=this.max_,i=this.min_,r=(e-this.rect_.left)/this.rect_.width;return this.adapter_.isRTL()&&(r=1-r),i+r*(t-i)},t.prototype.handleKeydown_=function(e){var t=this.getKeyId_(e),i=this.getValueForKeyId_(t);isNaN(i)||(e.preventDefault(),this.adapter_.addClass(xe.FOCUS),this.setValue_(i,!0),this.adapter_.notifyChange())},t.prototype.getKeyId_=function(e){return e.key===He||37===e.keyCode?He:e.key===Oe||39===e.keyCode?Oe:e.key===Ve||38===e.keyCode?Ve:e.key===De||40===e.keyCode?De:e.key===Le||36===e.keyCode?Le:e.key===Fe||35===e.keyCode?Fe:e.key===Pe||33===e.keyCode?Pe:e.key===Ne||34===e.keyCode?Ne:""},t.prototype.getValueForKeyId_=function(e){var t=this.max_,i=this.min_,r=this.step_||(t-i)/100;switch(this.adapter_.isRTL()&&(e===He||e===Oe)&&(r=-r),e){case He:case De:return this.value_-r;case Oe:case Ve:return this.value_+r;case Le:return this.min_;case Fe:return this.max_;case Pe:return this.value_+r*Te.PAGE_FACTOR;case Ne:return this.value_-r*Te.PAGE_FACTOR;default:return NaN}},t.prototype.handleFocus_=function(){this.preventFocusState_||this.adapter_.addClass(xe.FOCUS)},t.prototype.handleBlur_=function(){this.preventFocusState_=!1,this.adapter_.removeClass(xe.FOCUS)},t.prototype.setValue_=function(e,t,i){if(void 0===i&&(i=!1),e!==this.value_||i){var r=this.min_,n=this.max_,a=e===r||e===n;this.step_&&!a&&(e=this.quantize_(e)),e<r?e=r:e>n&&(e=n),this.value_=e,this.adapter_.setAttribute(Ee.ARIA_VALUENOW,String(this.value_)),this.updateUIForCurrentValue_(),t&&(this.adapter_.notifyInput(),this.isDiscrete_&&this.adapter_.setMarkerValue(e))}},t.prototype.quantize_=function(e){return Math.round(e/this.step_)*this.step_},t.prototype.updateUIForCurrentValue_=function(){var e=this,t=this.max_,i=this.min_,r=(this.value_-i)/(t-i),n=r*this.rect_.width;this.adapter_.isRTL()&&(n=this.rect_.width-n);var a=function(e,t){if(Ce(e)&&t in we){var i=e.document.createElement("div"),r=we[t],n=r.standard,a=r.prefixed;return n in i.style?n:a}return t}(window,"transform"),o=function(e,t){if(Ce(e)&&t in Ae){var i=e.document.createElement("div"),r=Ae[t],n=r.standard,a=r.prefixed;return r.cssProperty in i.style?n:a}return t}(window,"transitionend");if(this.inTransit_){var s=function(){e.setInTransit_(!1),e.adapter_.deregisterThumbContainerInteractionHandler(o,s)};this.adapter_.registerThumbContainerInteractionHandler(o,s)}requestAnimationFrame((function(){e.adapter_.setThumbContainerStyleProperty(a,"translateX("+n+"px) translateX(-50%)"),e.adapter_.setTrackStyleProperty(a,"scaleX("+r+")")}))},t.prototype.setActive_=function(e){this.active_=e,this.toggleClass_(xe.ACTIVE,this.active_)},t.prototype.setInTransit_=function(e){this.inTransit_=e,this.toggleClass_(xe.IN_TRANSIT,this.inTransit_)},t.prototype.toggleClass_=function(e,t){t?this.adapter_.addClass(e):this.adapter_.removeClass(e)},t}(V);
/**
 * @license
 * Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const ze=new WeakMap,Be=i(e=>t=>{if(!(t instanceof r)||t instanceof n||"style"!==t.committer.name||t.committer.parts.length>1)throw new Error("The `styleMap` directive must be used in the style attribute and must be the only part in the attribute.");const{committer:i}=t,{style:a}=i.element;ze.has(t)||(a.cssText=i.strings.join(" "));const o=ze.get(t);for(const t in o)t in e||(-1===t.indexOf("-")?a[t]=null:a.removeProperty(t));for(const t in e)-1===t.indexOf("-")?a[t]=e[t]:a.setProperty(t,e[t]);ze.set(t,e)}),je="input",Ue="change";class Ge extends G{constructor(){super(...arguments),this.mdcFoundationClass=Me,this.value=0,this.min=0,this.max=100,this.step=0,this.disabled=!1,this.pin=!1,this.markers=!1,this.pinMarkerText="",this.trackMarkerContainerStyles={},this.thumbContainerStyles={},this.trackStyles={},this.isFoundationDestroyed=!1}render(){const e=0!==this.step,t={"mdc-slider--discrete":e,"mdc-slider--display-markers":this.markers&&e};let i="";e&&this.markers&&(i=s`
        <div
            class="mdc-slider__track-marker-container"
            style="${Be(this.trackMarkerContainerStyles)}">
        </div>`);let r="";return this.pin&&(r=s`
      <div class="mdc-slider__pin">
        <span class="mdc-slider__pin-value-marker">${this.pinMarkerText}</span>
      </div>`),s`
      <div class="mdc-slider ${X(t)}"
           tabindex="0" role="slider"
           aria-valuemin="${this.min}" aria-valuemax="${this.max}"
           aria-valuenow="${this.value}" aria-disabled="${this.disabled}"
           data-step="${this.step}"
           @mousedown=${this.layout}
           @touchstart=${this.layout}>
        <div class="mdc-slider__track-container">
          <div
              class="mdc-slider__track"
              style="${Be(this.trackStyles)}">
          </div>
          ${i}
        </div>
        <div
            class="mdc-slider__thumb-container"
            style="${Be(this.thumbContainerStyles)}">
          <!-- TODO: use cache() directive -->
          ${r}
          <svg class="mdc-slider__thumb" width="21" height="21">
            <circle cx="10.5" cy="10.5" r="7.875"></circle>
          </svg>
        <div class="mdc-slider__focus-ring"></div>
      </div>
    </div>`}connectedCallback(){super.connectedCallback(),this.mdcRoot&&this.isFoundationDestroyed&&(this.isFoundationDestroyed=!1,this.mdcFoundation.init())}disconnectedCallback(){super.disconnectedCallback(),this.isFoundationDestroyed=!0,this.mdcFoundation.destroy()}createAdapter(){return Object.assign(Object.assign({},z(this.mdcRoot)),{getAttribute:e=>this.mdcRoot.getAttribute(e),setAttribute:(e,t)=>this.mdcRoot.setAttribute(e,t),removeAttribute:e=>this.mdcRoot.removeAttribute(e),computeBoundingRect:()=>{const e=this.mdcRoot.getBoundingClientRect();return{bottom:e.bottom,height:e.height,left:e.left+window.pageXOffset,right:e.right,top:e.top,width:e.width}},getTabIndex:()=>this.mdcRoot.tabIndex,registerInteractionHandler:(e,t)=>{const i="touchstart"===e?J():void 0;this.mdcRoot.addEventListener(e,t,i)},deregisterInteractionHandler:(e,t)=>this.mdcRoot.removeEventListener(e,t),registerThumbContainerInteractionHandler:(e,t)=>{const i="touchstart"===e?J():void 0;this.thumbContainer.addEventListener(e,t,i)},deregisterThumbContainerInteractionHandler:(e,t)=>this.thumbContainer.removeEventListener(e,t),registerBodyInteractionHandler:(e,t)=>document.body.addEventListener(e,t),deregisterBodyInteractionHandler:(e,t)=>document.body.removeEventListener(e,t),registerResizeHandler:e=>window.addEventListener("resize",e,J()),deregisterResizeHandler:e=>window.removeEventListener("resize",e),notifyInput:()=>{const e=this.mdcFoundation.getValue();e!==this.value&&(this.value=e,this.dispatchEvent(new CustomEvent(je,{detail:this,composed:!0,bubbles:!0,cancelable:!0})))},notifyChange:()=>{this.dispatchEvent(new CustomEvent(Ue,{detail:this,composed:!0,bubbles:!0,cancelable:!0}))},setThumbContainerStyleProperty:(e,t)=>{this.thumbContainerStyles[e]=t,this.requestUpdate()},setTrackStyleProperty:(e,t)=>{this.trackStyles[e]=t,this.requestUpdate()},setMarkerValue:e=>this.pinMarkerText=e.toLocaleString(),setTrackMarkers:(e,t,i)=>{const r=e.toLocaleString(),n=`linear-gradient(to right, currentColor 2px, transparent 0) ${`0 center / calc((100% - 2px) / ${`((${t.toLocaleString()} - ${i.toLocaleString()}) / ${r})`}) 100% repeat-x`}`;this.trackMarkerContainerStyles.background=n,this.requestUpdate()},isRTL:()=>"rtl"===getComputedStyle(this.mdcRoot).direction})}resetFoundation(){this.mdcFoundation&&(this.mdcFoundation.destroy(),this.mdcFoundation.init())}layout(){this.mdcFoundation.layout()}}O([o(".mdc-slider")],Ge.prototype,"mdcRoot",void 0),O([o(".mdc-slider")],Ge.prototype,"formElement",void 0),O([o(".mdc-slider__thumb-container")],Ge.prototype,"thumbContainer",void 0),O([o(".mdc-slider__pin-value-marker")],Ge.prototype,"pinMarker",void 0),O([a({type:Number}),P((function(e){this.mdcFoundation.setValue(e)}))],Ge.prototype,"value",void 0),O([a({type:Number}),P((function(e){this.mdcFoundation.setMin(e)}))],Ge.prototype,"min",void 0),O([a({type:Number}),P((function(e){this.mdcFoundation.setMax(e)}))],Ge.prototype,"max",void 0),O([a({type:Number}),P((function(e,t){0!==t!==(0!==e)&&this.resetFoundation(),this.mdcFoundation.setStep(e)}))],Ge.prototype,"step",void 0),O([a({type:Boolean,reflect:!0}),P((function(e){this.mdcFoundation.setDisabled(e)}))],Ge.prototype,"disabled",void 0),O([a({type:Boolean,reflect:!0})],Ge.prototype,"pin",void 0),O([a({type:Boolean,reflect:!0}),P((function(){this.mdcFoundation.setupTrackMarker()}))],Ge.prototype,"markers",void 0),O([a({type:String})],Ge.prototype,"pinMarkerText",void 0),O([a({type:Object})],Ge.prototype,"trackMarkerContainerStyles",void 0),O([a({type:Object})],Ge.prototype,"thumbContainerStyles",void 0),O([a({type:Object})],Ge.prototype,"trackStyles",void 0),O([p({capture:!0,passive:!0})],Ge.prototype,"layout",null);
/**
@license
Copyright 2018 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
const $e=d`@keyframes mdc-slider-emphasize{0%{animation-timing-function:ease-out}50%{animation-timing-function:ease-in;transform:scale(0.85)}100%{transform:scale(0.571)}}.mdc-slider{position:relative;width:100%;height:48px;cursor:pointer;touch-action:pan-x;-webkit-tap-highlight-color:rgba(0,0,0,0)}.mdc-slider:not(.mdc-slider--disabled) .mdc-slider__track{background-color:#018786;background-color:var(--mdc-theme-secondary, #018786)}.mdc-slider:not(.mdc-slider--disabled) .mdc-slider__track-container{background-color:rgba(1,135,134,.26)}.mdc-slider:not(.mdc-slider--disabled) .mdc-slider__track-marker-container{background-color:#018786;background-color:var(--mdc-theme-secondary, #018786)}.mdc-slider:not(.mdc-slider--disabled) .mdc-slider__thumb{fill:#018786;fill:var(--mdc-theme-secondary, #018786);stroke:#018786;stroke:var(--mdc-theme-secondary, #018786)}.mdc-slider:not(.mdc-slider--disabled) .mdc-slider__focus-ring{background-color:#018786;background-color:var(--mdc-theme-secondary, #018786)}.mdc-slider:not(.mdc-slider--disabled) .mdc-slider__pin{background-color:#018786;background-color:var(--mdc-theme-secondary, #018786)}.mdc-slider:not(.mdc-slider--disabled) .mdc-slider__pin{color:#fff;color:var(--mdc-theme-text-primary-on-dark, white)}.mdc-slider--disabled{cursor:auto}.mdc-slider--disabled .mdc-slider__track{background-color:#9a9a9a}.mdc-slider--disabled .mdc-slider__track-container{background-color:rgba(154,154,154,.26)}.mdc-slider--disabled .mdc-slider__track-marker-container{background-color:#9a9a9a}.mdc-slider--disabled .mdc-slider__thumb{fill:#9a9a9a;stroke:#9a9a9a}.mdc-slider--disabled .mdc-slider__thumb{stroke:#fff;stroke:var(--mdc-slider-bg-color-behind-component, white)}.mdc-slider:focus{outline:none}.mdc-slider__track-container{position:absolute;top:50%;width:100%;height:2px;overflow:hidden}.mdc-slider__track{position:absolute;width:100%;height:100%;transform-origin:left top;will-change:transform}.mdc-slider[dir=rtl] .mdc-slider__track,[dir=rtl] .mdc-slider .mdc-slider__track{transform-origin:right top}.mdc-slider__track-marker-container{display:flex;margin-right:0;margin-left:-1px;visibility:hidden}.mdc-slider[dir=rtl] .mdc-slider__track-marker-container,[dir=rtl] .mdc-slider .mdc-slider__track-marker-container{margin-right:-1px;margin-left:0}.mdc-slider__track-marker-container::after{display:block;width:2px;height:2px;content:""}.mdc-slider__track-marker{flex:1}.mdc-slider__track-marker::after{display:block;width:2px;height:2px;content:""}.mdc-slider__track-marker:first-child::after{width:3px}.mdc-slider__thumb-container{position:absolute;top:15px;left:0;width:21px;height:100%;user-select:none;will-change:transform}.mdc-slider__thumb{position:absolute;top:0;left:0;transform:scale(0.571);stroke-width:3.5;transition:transform 100ms ease-out,fill 100ms ease-out,stroke 100ms ease-out}.mdc-slider__focus-ring{width:21px;height:21px;border-radius:50%;opacity:0;transition:transform 266.67ms ease-out,opacity 266.67ms ease-out,background-color 266.67ms ease-out}.mdc-slider__pin{display:flex;position:absolute;top:0;left:0;align-items:center;justify-content:center;width:26px;height:26px;margin-top:-2px;margin-left:-2px;transform:rotate(-45deg) scale(0) translate(0, 0);border-radius:50% 50% 50% 0%;z-index:1;transition:transform 100ms ease-out}.mdc-slider__pin-value-marker{font-family:Roboto, sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:.875rem;line-height:1.25rem;font-weight:400;letter-spacing:.0178571429em;text-decoration:inherit;text-transform:inherit;transform:rotate(45deg)}.mdc-slider--active .mdc-slider__thumb{transform:scale3d(1, 1, 1)}.mdc-slider--focus .mdc-slider__thumb{animation:mdc-slider-emphasize 266.67ms linear}.mdc-slider--focus .mdc-slider__focus-ring{transform:scale3d(1.55, 1.55, 1.55);opacity:.25}.mdc-slider--in-transit .mdc-slider__thumb{transition-delay:140ms}.mdc-slider--in-transit .mdc-slider__thumb-container,.mdc-slider--in-transit .mdc-slider__track,.mdc-slider:focus:not(.mdc-slider--active) .mdc-slider__thumb-container,.mdc-slider:focus:not(.mdc-slider--active) .mdc-slider__track{transition:transform 80ms ease}.mdc-slider--discrete.mdc-slider--active .mdc-slider__thumb{transform:scale(calc(12 / 21))}.mdc-slider--discrete.mdc-slider--active .mdc-slider__pin{transform:rotate(-45deg) scale(1) translate(19px, -20px)}.mdc-slider--discrete.mdc-slider--focus .mdc-slider__thumb{animation:none}.mdc-slider--discrete.mdc-slider--display-markers .mdc-slider__track-marker-container{visibility:visible}:host{display:inline-block;min-width:120px;outline:none}`;let Xe=class extends Ge{};function qe(){var t=e(['\n      <section>\n        <h2>Translation</h2>\n\n        <section>\n          <section>\n            <h3>Arabic</h3>\n            <mwc-formfield label="AraSVD" @change=','>\n              <mwc-radio name="version" language="ar" version="AraSVD" ?checked=','></mwc-radio>\n            </mwc-formfield>\n          </section>\n          <section>\n            <h3>English</h3>\n            <mwc-formfield label="KJV" @change=','>\n              <mwc-radio name="version" language="en" version="KJV" ?checked=','></mwc-radio>\n            </mwc-formfield>\n\n            <mwc-formfield label="ASV" @change=','>\n              <mwc-radio name="version" language="en" version="ASV" ?checked=','></mwc-radio>\n            </mwc-formfield>\n\n            <mwc-formfield label="WEB" @change=','>\n              <mwc-radio name="version" language="en" version="WEB" ?checked=','></mwc-radio>\n            </mwc-formfield>\n          </section>\n          <section>\n            <h3>French</h3>\n            <mwc-formfield label="FreSegond" @change=','>\n              <mwc-radio name="version" language="fr" version="FreSegond" ?checked=','></mwc-radio>\n            </mwc-formfield>\n          </section>\n          <section>\n            <h3>German</h3>\n            <mwc-formfield label="GerElb1905" @change=','>\n              <mwc-radio name="version" language="de" version="GerElb1905" ?checked=','></mwc-radio>\n            </mwc-formfield>\n          </section>\n          <section>\n            <h3>Spanish </h3>\n            <mwc-formfield label="SpaRV" @change=','>\n              <mwc-radio name="version" language="es" version="SpaRV" ?checked=','></mwc-radio>\n            </mwc-formfield>\n          </section>\n        </section>\n\n        <h2>Display</h2>\n\n        <section>\n          <section>\n            <h3>Font</h3>\n\n            <mwc-formfield label="Size">\n              <mwc-slider pin="" markers="" min="10" max="32" value=',' step="2" @change=','></mwc-slider>\n            </mwc-formfield>\n          </section>\n\n          <section>\n            <h3>Theme</h3>\n\n            <mwc-formfield label="Dark" @change=','>\n              <mwc-radio name="theme" value="dark" ?checked=','></mwc-radio>\n            </mwc-formfield>\n\n            <mwc-formfield label="Light" @change=','>\n              <mwc-radio name="theme" value="light" ?checked=','></mwc-radio>\n            </mwc-formfield>\n          </section>\n        </section>\n\n        <section>\n          <section>\n            <h3>Verse Numbers</h3>\n\n            <mwc-formfield label="Yes" @change=','>\n              <mwc-radio name="shouldDisplayVerseNumbers" value="yes" ?checked=','></mwc-radio>\n            </mwc-formfield>\n\n            <mwc-formfield label="No" @change=','>\n              <mwc-radio name="shouldDisplayVerseNumbers" value="no" ?checked=','></mwc-radio>\n            </mwc-formfield>\n          </section>\n\n          <section>\n            <h3>Text Alignment</h3>\n\n            <mwc-formfield label="Left" @change=','>\n              <mwc-radio name="textAlign" value="left" ?checked=','></mwc-radio>\n            </mwc-formfield>\n\n            <mwc-formfield label="Center" @change=','>\n              <mwc-radio name="textAlign" value="center" ?checked=','></mwc-radio>\n            </mwc-formfield>\n\n            <mwc-formfield label="Justify" @change=','>\n              <mwc-radio name="textAlign" value="justify" ?checked=','></mwc-radio>\n            </mwc-formfield>\n\n            <mwc-formfield label="Right" @change=','>\n              <mwc-radio name="textAlign" value="right" ?checked=','></mwc-radio>\n            </mwc-formfield>\n          </section>\n\n          <section>\n            <h3>Text Direction</h3>\n\n            <mwc-formfield label="Left to Right" @change=','>\n              <mwc-radio name="textDirection" value="ltr" ?checked=','></mwc-radio>\n            </mwc-formfield>\n\n            <mwc-formfield label="Right to Left" @change=','>\n              <mwc-radio name="textDirection" value="rtl" ?checked=','></mwc-radio>\n            </mwc-formfield>\n          </section>\n\n          <section>\n            <h3>Line Break at Verse</h3>\n\n            <mwc-formfield label="Yes" @change=','>\n              <mwc-radio name="hasLineBreakAtVerse" value="yes" ?checked=','></mwc-radio>\n            </mwc-formfield>\n\n            <mwc-formfield label="No" @change=','>\n              <mwc-radio name="hasLineBreakAtVerse" value="no" ?checked=',"></mwc-radio>\n            </mwc-formfield>\n          </section>\n        </section>\n      </section>\n    "]);return qe=function(){return t},t}function Ke(){var t=e(["\n      :host {\n        display: flex;\n        margin-left: 5%;\n        margin-right: 5%;\n        text-align: center;\n      }\n\n      :host > section {\n        margin: auto;\n        max-width: 37.5rem;\n      }\n\n      :host > section > section {\n        display: flex;\n        flex-direction: row;\n        flex-wrap: wrap;\n        justify-content: flex-start;\n        align-items: stretch;\n        align-content: stretch;\n      }\n\n      :host > section > section > section {\n        flex: auto;\n        width: 7rem;\n      }\n\n      h2 {\n        background-color: var(--bible-tools-preferences-h2-background-color);\n        color: var(--bible-tools-preferences-h2-color);\n      }\n    "]);return Ke=function(){return t},t}Xe.styles=$e,Xe=O([c("mwc-slider")],Xe);class We extends(h(g)(t)){static get styles(){return d(Ke())}static get properties(){return{fontSize:{reflect:!1,type:Number},hasLineBreakAtVerse:{reflect:!1,type:String},language:{reflect:!1,type:String},shouldDisplayVerseNumbers:{reflect:!1,type:String},textDirection:{reflect:!1,type:String},version:{reflect:!1,type:String}}}constructor(){super(),this.language="en",this.version="KJV",v("Preferences"),b("preferences")}_handleFontSizeChange(e){e.preventDefault();var{value:t}=e.target;this.fontSize!==t&&y("normal ".concat(t,"px san-serif"))}_handleTextAlignChange(e){e.preventDefault();var{value:t}=e.target;this.textAlign!==t&&k(t)}_handleTextDirectionChange(e){e.preventDefault();var{value:t}=e.target;this.textDirection!==t&&w(t)}_handleReaderLineBreakChange(e){e.preventDefault();var{value:t}=e.target;this.hasLineBreakAtVerse!==t&&A(t)}_handleTranslationChange(e){e.preventDefault();var t=e.target.getAttribute("language"),i=e.target.getAttribute("version");C(t),x(i),E(t,i),this.language=t,this.version=i,"ar"===this.language?(w("right"),w("rtl"),A("yes"),T("no")):(w("justify"),w("ltr"),A("no"),T("yes"))}stateChanged(e){var t=_(e.preferences.fontStyle);t&&this.fontSize!==t&&(this.fontSize=t),this.hasLineBreakAtVerse=e.preferences.hasLineBreakAtVerse,this.language=e.translation.language.current,this.shouldDisplayVerseNumbers=e.preferences.shouldDisplayVerseNumbers,this.textAlign=e.preferences.textAlign,this.textDirection=e.preferences.textDirection,this.version=e.translation.version.current}render(){var e=S();return s(qe(),e=>this._handleTranslationChange(e),"ar"===this.language&&"AraSVD"===this.version,e=>this._handleTranslationChange(e),"en"===this.language&&"KJV"===this.version,e=>this._handleTranslationChange(e),"en"===this.language&&"ASV"===this.version,e=>this._handleTranslationChange(e),"en"===this.language&&"WEB"===this.version,e=>this._handleTranslationChange(e),"fr"===this.language&&"FreSegond"===this.version,e=>this._handleTranslationChange(e),"de"===this.language&&"GerElb1905"===this.version,e=>this._handleTranslationChange(e),"es"===this.language&&"SpaRV"===this.version,this.fontSize,e=>this._handleFontSizeChange(e),e=>I(e.target.value),"dark"===e,e=>I(e.target.value),"light"===e,e=>T(e.target.value),"yes"===this.shouldDisplayVerseNumbers,e=>T(e.target.value),"no"===this.shouldDisplayVerseNumbers,e=>this._handleTextAlignChange(e),"left"===this.textAlign,e=>this._handleTextAlignChange(e),"center"===this.textAlign,e=>this._handleTextAlignChange(e),"justify"===this.textAlign,e=>this._handleTextAlignChange(e),"right"===this.textAlign,e=>this._handleTextDirectionChange(e),"ltr"===this.textDirection,e=>this._handleTextDirectionChange(e),"rtl"===this.textDirection,e=>this._handleReaderLineBreakChange(e),"yes"===this.hasLineBreakAtVerse,e=>this._handleReaderLineBreakChange(e),"no"===this.hasLineBreakAtVerse)}}f("bible-tools-preferences",We);export{We as BibleToolsPreferences};
