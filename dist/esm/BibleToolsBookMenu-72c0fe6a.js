import{_ as t}from"./_rollupPluginBabelHelpers-6e21a838.js";import{L as e,c as i,h as n}from"./lit-element-51727a0b.js";import{c as o}from"./connect-mixin-144a42a2.js";import{u as s,d as a,P as r,h as l,c as h,I as d,f as p,L as c,g as u,w as f,i as g}from"./iron-button-state-17c6d549.js";import{defineCustomElement as m}from"./utilities.js";import"./paper-item-d7bfa35b.js";import{store as _}from"./configureStore.js";import{loadChapter as b,navigateByPath as v,loadBook as y}from"./dispatchers.js";import{I as w,P as x}from"./iron-iconset-svg-9456d0fa.js";
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/var A=new Set;const C={properties:{_parentResizable:{type:Object,observer:"_parentResizableChanged"},_notifyingDescendant:{type:Boolean,value:!1}},listeners:{"iron-request-resize-notifications":"_onIronRequestResizeNotifications"},created:function(){this._interestedResizables=[],this._boundNotifyResize=this.notifyResize.bind(this),this._boundOnDescendantIronResize=this._onDescendantIronResize.bind(this)},attached:function(){this._requestResizeNotifications()},detached:function(){this._parentResizable?this._parentResizable.stopResizeNotificationsFor(this):(A.delete(this),window.removeEventListener("resize",this._boundNotifyResize)),this._parentResizable=null},notifyResize:function(){this.isAttached&&(this._interestedResizables.forEach((function(t){this.resizerShouldNotify(t)&&this._notifyDescendant(t)}),this),this._fireResize())},assignParentResizable:function(t){this._parentResizable&&this._parentResizable.stopResizeNotificationsFor(this),this._parentResizable=t,t&&-1===t._interestedResizables.indexOf(this)&&(t._interestedResizables.push(this),t._subscribeIronResize(this))},stopResizeNotificationsFor:function(t){var e=this._interestedResizables.indexOf(t);e>-1&&(this._interestedResizables.splice(e,1),this._unsubscribeIronResize(t))},_subscribeIronResize:function(t){t.addEventListener("iron-resize",this._boundOnDescendantIronResize)},_unsubscribeIronResize:function(t){t.removeEventListener("iron-resize",this._boundOnDescendantIronResize)},resizerShouldNotify:function(t){return!0},_onDescendantIronResize:function(t){this._notifyingDescendant?t.stopPropagation():s||this._fireResize()},_fireResize:function(){this.fire("iron-resize",null,{node:this,bubbles:!1})},_onIronRequestResizeNotifications:function(t){var e=a(t).rootTarget;e!==this&&(e.assignParentResizable(this),this._notifyDescendant(e),t.stopPropagation())},_parentResizableChanged:function(t){t&&window.removeEventListener("resize",this._boundNotifyResize)},_notifyDescendant:function(t){this.isAttached&&(this._notifyingDescendant=!0,t.notifyResize(),this._notifyingDescendant=!1)},_requestResizeNotifications:function(){if(this.isAttached)if("loading"===document.readyState){var t=this._requestResizeNotifications.bind(this);document.addEventListener("readystatechange",(function e(){document.removeEventListener("readystatechange",e),t()}))}else this._findParent(),this._parentResizable?this._parentResizable._interestedResizables.forEach((function(t){t!==this&&t._findParent()}),this):(A.forEach((function(t){t!==this&&t._findParent()}),this),window.addEventListener("resize",this._boundNotifyResize),this.notifyResize())},_findParent:function(){this.assignParentResizable(null),this.fire("iron-request-resize-notifications",null,{node:this,bubbles:!0,cancelable:!0}),this._parentResizable?A.delete(this):A.add(this)}},z={properties:{sizingTarget:{type:Object,value:function(){return this}},fitInto:{type:Object,value:window},noOverlap:{type:Boolean},positionTarget:{type:Element},horizontalAlign:{type:String},verticalAlign:{type:String},dynamicAlign:{type:Boolean},horizontalOffset:{type:Number,value:0,notify:!0},verticalOffset:{type:Number,value:0,notify:!0},autoFitOnAttach:{type:Boolean,value:!1},_fitInfo:{type:Object}},get _fitWidth(){return this.fitInto===window?this.fitInto.innerWidth:this.fitInto.getBoundingClientRect().width},get _fitHeight(){return this.fitInto===window?this.fitInto.innerHeight:this.fitInto.getBoundingClientRect().height},get _fitLeft(){return this.fitInto===window?0:this.fitInto.getBoundingClientRect().left},get _fitTop(){return this.fitInto===window?0:this.fitInto.getBoundingClientRect().top},get _defaultPositionTarget(){var t=a(this).parentNode;return t&&t.nodeType===Node.DOCUMENT_FRAGMENT_NODE&&(t=t.host),t},get _localeHorizontalAlign(){if(this._isRTL){if("right"===this.horizontalAlign)return"left";if("left"===this.horizontalAlign)return"right"}return this.horizontalAlign},get __shouldPosition(){return(this.horizontalAlign||this.verticalAlign)&&this.positionTarget},get _isRTL(){return void 0===this._memoizedIsRTL&&(this._memoizedIsRTL="rtl"==window.getComputedStyle(this).direction),this._memoizedIsRTL},attached:function(){this.positionTarget=this.positionTarget||this._defaultPositionTarget,this.autoFitOnAttach&&("none"===window.getComputedStyle(this).display?setTimeout(function(){this.fit()}.bind(this)):(window.ShadyDOM&&ShadyDOM.flush(),this.fit()))},detached:function(){this.__deferredFit&&(clearTimeout(this.__deferredFit),this.__deferredFit=null)},fit:function(){this.position(),this.constrain(),this.center()},_discoverInfo:function(){if(!this._fitInfo){var t=window.getComputedStyle(this),e=window.getComputedStyle(this.sizingTarget);this._fitInfo={inlineStyle:{top:this.style.top||"",left:this.style.left||"",position:this.style.position||""},sizerInlineStyle:{maxWidth:this.sizingTarget.style.maxWidth||"",maxHeight:this.sizingTarget.style.maxHeight||"",boxSizing:this.sizingTarget.style.boxSizing||""},positionedBy:{vertically:"auto"!==t.top?"top":"auto"!==t.bottom?"bottom":null,horizontally:"auto"!==t.left?"left":"auto"!==t.right?"right":null},sizedBy:{height:"none"!==e.maxHeight,width:"none"!==e.maxWidth,minWidth:parseInt(e.minWidth,10)||0,minHeight:parseInt(e.minHeight,10)||0},margin:{top:parseInt(t.marginTop,10)||0,right:parseInt(t.marginRight,10)||0,bottom:parseInt(t.marginBottom,10)||0,left:parseInt(t.marginLeft,10)||0}}}},resetFit:function(){var t=this._fitInfo||{};for(var e in t.sizerInlineStyle)this.sizingTarget.style[e]=t.sizerInlineStyle[e];for(var e in t.inlineStyle)this.style[e]=t.inlineStyle[e];this._fitInfo=null},refit:function(){var t=this.sizingTarget.scrollLeft,e=this.sizingTarget.scrollTop;this.resetFit(),this.fit(),this.sizingTarget.scrollLeft=t,this.sizingTarget.scrollTop=e},position:function(){if(this.__shouldPosition){this._discoverInfo(),this.style.position="fixed",this.sizingTarget.style.boxSizing="border-box",this.style.left="0px",this.style.top="0px";var t=this.getBoundingClientRect(),e=this.__getNormalizedRect(this.positionTarget),i=this.__getNormalizedRect(this.fitInto),n=this._fitInfo.margin,o={width:t.width+n.left+n.right,height:t.height+n.top+n.bottom},s=this.__getPosition(this._localeHorizontalAlign,this.verticalAlign,o,t,e,i),a=s.left+n.left,r=s.top+n.top,l=Math.min(i.right-n.right,a+t.width),h=Math.min(i.bottom-n.bottom,r+t.height);a=Math.max(i.left+n.left,Math.min(a,l-this._fitInfo.sizedBy.minWidth)),r=Math.max(i.top+n.top,Math.min(r,h-this._fitInfo.sizedBy.minHeight)),this.sizingTarget.style.maxWidth=Math.max(l-a,this._fitInfo.sizedBy.minWidth)+"px",this.sizingTarget.style.maxHeight=Math.max(h-r,this._fitInfo.sizedBy.minHeight)+"px",this.style.left=a-t.left+"px",this.style.top=r-t.top+"px"}},constrain:function(){if(!this.__shouldPosition){this._discoverInfo();var t=this._fitInfo;t.positionedBy.vertically||(this.style.position="fixed",this.style.top="0px"),t.positionedBy.horizontally||(this.style.position="fixed",this.style.left="0px"),this.sizingTarget.style.boxSizing="border-box";var e=this.getBoundingClientRect();t.sizedBy.height||this.__sizeDimension(e,t.positionedBy.vertically,"top","bottom","Height"),t.sizedBy.width||this.__sizeDimension(e,t.positionedBy.horizontally,"left","right","Width")}},_sizeDimension:function(t,e,i,n,o){this.__sizeDimension(t,e,i,n,o)},__sizeDimension:function(t,e,i,n,o){var s=this._fitInfo,a=this.__getNormalizedRect(this.fitInto),r="Width"===o?a.width:a.height,l=e===n,h=l?r-t[n]:t[i],d=s.margin[l?i:n],p="offset"+o,c=this[p]-this.sizingTarget[p];this.sizingTarget.style["max"+o]=r-d-h-c+"px"},center:function(){if(!this.__shouldPosition){this._discoverInfo();var t=this._fitInfo.positionedBy;if(!t.vertically||!t.horizontally){this.style.position="fixed",t.vertically||(this.style.top="0px"),t.horizontally||(this.style.left="0px");var e=this.getBoundingClientRect(),i=this.__getNormalizedRect(this.fitInto);if(!t.vertically){var n=i.top-e.top+(i.height-e.height)/2;this.style.top=n+"px"}if(!t.horizontally){var o=i.left-e.left+(i.width-e.width)/2;this.style.left=o+"px"}}}},__getNormalizedRect:function(t){return t===document.documentElement||t===window?{top:0,left:0,width:window.innerWidth,height:window.innerHeight,right:window.innerWidth,bottom:window.innerHeight}:t.getBoundingClientRect()},__getOffscreenArea:function(t,e,i){var n=Math.min(0,t.top)+Math.min(0,i.bottom-(t.top+e.height)),o=Math.min(0,t.left)+Math.min(0,i.right-(t.left+e.width));return Math.abs(n)*e.width+Math.abs(o)*e.height},__getPosition:function(t,e,i,n,o,s){var a,r=[{verticalAlign:"top",horizontalAlign:"left",top:o.top+this.verticalOffset,left:o.left+this.horizontalOffset},{verticalAlign:"top",horizontalAlign:"right",top:o.top+this.verticalOffset,left:o.right-i.width-this.horizontalOffset},{verticalAlign:"bottom",horizontalAlign:"left",top:o.bottom-i.height-this.verticalOffset,left:o.left+this.horizontalOffset},{verticalAlign:"bottom",horizontalAlign:"right",top:o.bottom-i.height-this.verticalOffset,left:o.right-i.width-this.horizontalOffset}];if(this.noOverlap){for(var l=0,h=r.length;l<h;l++){var d={};for(var p in r[l])d[p]=r[l][p];r.push(d)}r[0].top=r[1].top+=o.height,r[2].top=r[3].top-=o.height,r[4].left=r[6].left+=o.width,r[5].left=r[7].left-=o.width}e="auto"===e?null:e,(t="auto"===t?null:t)&&"center"!==t||(r.push({verticalAlign:"top",horizontalAlign:"center",top:o.top+this.verticalOffset+(this.noOverlap?o.height:0),left:o.left-n.width/2+o.width/2+this.horizontalOffset}),r.push({verticalAlign:"bottom",horizontalAlign:"center",top:o.bottom-i.height-this.verticalOffset-(this.noOverlap?o.height:0),left:o.left-n.width/2+o.width/2+this.horizontalOffset})),e&&"middle"!==e||(r.push({verticalAlign:"middle",horizontalAlign:"left",top:o.top-n.height/2+o.height/2+this.verticalOffset,left:o.left+this.horizontalOffset+(this.noOverlap?o.width:0)}),r.push({verticalAlign:"middle",horizontalAlign:"right",top:o.top-n.height/2+o.height/2+this.verticalOffset,left:o.right-i.width-this.horizontalOffset-(this.noOverlap?o.width:0)})),"middle"===e&&"center"===t&&r.push({verticalAlign:"middle",horizontalAlign:"center",top:o.top-n.height/2+o.height/2+this.verticalOffset,left:o.left-n.width/2+o.width/2+this.horizontalOffset});for(l=0;l<r.length;l++){var c=r[l],u=c.verticalAlign===e,f=c.horizontalAlign===t;if(!this.dynamicAlign&&!this.noOverlap&&u&&f){a=c;break}var g=(!e||u)&&(!t||f);if(this.dynamicAlign||g){if(c.offscreenArea=this.__getOffscreenArea(c,i,s),0===c.offscreenArea&&g){a=c;break}a=a||c;var m=c.offscreenArea-a.offscreenArea;(m<0||0===m&&(u||f))&&(a=c)}}return a}};
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
/**
@license
Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
var O=Element.prototype,T=O.matches||O.matchesSelector||O.mozMatchesSelector||O.msMatchesSelector||O.oMatchesSelector||O.webkitMatchesSelector;const I=new class{getTabbableNodes(t){var e=[];return this._collectTabbableNodes(t,e)?this._sortByTabIndex(e):e}isFocusable(t){return T.call(t,"input, select, textarea, button, object")?T.call(t,":not([disabled])"):T.call(t,"a[href], area[href], iframe, [tabindex], [contentEditable]")}isTabbable(t){return this.isFocusable(t)&&T.call(t,':not([tabindex="-1"])')&&this._isVisible(t)}_normalizedTabIndex(t){if(this.isFocusable(t)){var e=t.getAttribute("tabindex")||0;return Number(e)}return-1}_collectTabbableNodes(t,e){if(t.nodeType!==Node.ELEMENT_NODE)return!1;var i=t;if(!this._isVisible(i))return!1;var n,o=this._normalizedTabIndex(i),s=o>0;o>=0&&e.push(i),n="content"===i.localName||"slot"===i.localName?a(i).getDistributedNodes():a(i.root||i).children;for(var r=0;r<n.length;r++)s=this._collectTabbableNodes(n[r],e)||s;return s}_isVisible(t){var e=t.style;return"hidden"!==e.visibility&&"none"!==e.display&&("hidden"!==(e=window.getComputedStyle(t)).visibility&&"none"!==e.display)}_sortByTabIndex(t){var e=t.length;if(e<2)return t;var i=Math.ceil(e/2),n=this._sortByTabIndex(t.slice(0,i)),o=this._sortByTabIndex(t.slice(i));return this._mergeSortByTabIndex(n,o)}_mergeSortByTabIndex(t,e){for(var i=[];t.length>0&&e.length>0;)this._hasLowerTabOrder(t[0],e[0])?i.push(e.shift()):i.push(t.shift());return i.concat(t,e)}_hasLowerTabOrder(t,e){var i=Math.max(t.tabIndex,0),n=Math.max(e.tabIndex,0);return 0===i||0===n?n>i:i>n}};
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/r({_template:l`
    <style>
      :host {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: var(--iron-overlay-backdrop-background-color, #000);
        opacity: 0;
        transition: opacity 0.2s;
        pointer-events: none;
        @apply --iron-overlay-backdrop;
      }

      :host(.opened) {
        opacity: var(--iron-overlay-backdrop-opacity, 0.6);
        pointer-events: auto;
        @apply --iron-overlay-backdrop-opened;
      }
    </style>

    <slot></slot>
`,is:"iron-overlay-backdrop",properties:{opened:{reflectToAttribute:!0,type:Boolean,value:!1,observer:"_openedChanged"}},listeners:{transitionend:"_onTransitionend"},created:function(){this.__openedRaf=null},attached:function(){this.opened&&this._openedChanged(this.opened)},prepare:function(){this.opened&&!this.parentNode&&a(document.body).appendChild(this)},open:function(){this.opened=!0},close:function(){this.opened=!1},complete:function(){this.opened||this.parentNode!==document.body||a(this.parentNode).removeChild(this)},_onTransitionend:function(t){t&&t.target===this&&this.complete()},_openedChanged:function(t){if(t)this.prepare();else{var e=window.getComputedStyle(this);"0s"!==e.transitionDuration&&0!=e.opacity||this.complete()}this.isAttached&&(this.__openedRaf&&(window.cancelAnimationFrame(this.__openedRaf),this.__openedRaf=null),this.scrollTop=this.scrollTop,this.__openedRaf=window.requestAnimationFrame(function(){this.__openedRaf=null,this.toggleClass("opened",this.opened)}.bind(this)))}});const R=new
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
class{constructor(){this._overlays=[],this._minimumZ=101,this._backdropElement=null,h(document.documentElement,"tap",(function(){})),document.addEventListener("tap",this._onCaptureClick.bind(this),!0),document.addEventListener("focus",this._onCaptureFocus.bind(this),!0),document.addEventListener("keydown",this._onCaptureKeyDown.bind(this),!0)}get backdropElement(){return this._backdropElement||(this._backdropElement=document.createElement("iron-overlay-backdrop")),this._backdropElement}get deepActiveElement(){var t=document.activeElement;for(t&&t instanceof Element!=!1||(t=document.body);t.root&&a(t.root).activeElement;)t=a(t.root).activeElement;return t}_bringOverlayAtIndexToFront(t){var e=this._overlays[t];if(e){var i=this._overlays.length-1,n=this._overlays[i];if(n&&this._shouldBeBehindOverlay(e,n)&&i--,!(t>=i)){var o=Math.max(this.currentOverlayZ(),this._minimumZ);for(this._getZ(e)<=o&&this._applyOverlayZ(e,o);t<i;)this._overlays[t]=this._overlays[t+1],t++;this._overlays[i]=e}}}addOrRemoveOverlay(t){t.opened?this.addOverlay(t):this.removeOverlay(t)}addOverlay(t){var e=this._overlays.indexOf(t);if(e>=0)return this._bringOverlayAtIndexToFront(e),void this.trackBackdrop();var i=this._overlays.length,n=this._overlays[i-1],o=Math.max(this._getZ(n),this._minimumZ),s=this._getZ(t);if(n&&this._shouldBeBehindOverlay(t,n)){this._applyOverlayZ(n,o),i--;var a=this._overlays[i-1];o=Math.max(this._getZ(a),this._minimumZ)}s<=o&&this._applyOverlayZ(t,o),this._overlays.splice(i,0,t),this.trackBackdrop()}removeOverlay(t){var e=this._overlays.indexOf(t);-1!==e&&(this._overlays.splice(e,1),this.trackBackdrop())}currentOverlay(){var t=this._overlays.length-1;return this._overlays[t]}currentOverlayZ(){return this._getZ(this.currentOverlay())}ensureMinimumZ(t){this._minimumZ=Math.max(this._minimumZ,t)}focusOverlay(){var t=this.currentOverlay();t&&t._applyFocus()}trackBackdrop(){var t=this._overlayWithBackdrop();(t||this._backdropElement)&&(this.backdropElement.style.zIndex=this._getZ(t)-1,this.backdropElement.opened=!!t,this.backdropElement.prepare())}getBackdrops(){for(var t=[],e=0;e<this._overlays.length;e++)this._overlays[e].withBackdrop&&t.push(this._overlays[e]);return t}backdropZ(){return this._getZ(this._overlayWithBackdrop())-1}_overlayWithBackdrop(){for(var t=this._overlays.length-1;t>=0;t--)if(this._overlays[t].withBackdrop)return this._overlays[t]}_getZ(t){var e=this._minimumZ;if(t){var i=Number(t.style.zIndex||window.getComputedStyle(t).zIndex);i==i&&(e=i)}return e}_setZ(t,e){t.style.zIndex=e}_applyOverlayZ(t,e){this._setZ(t,e+2)}_overlayInPath(t){t=t||[];for(var e=0;e<t.length;e++)if(t[e]._manager===this)return t[e]}_onCaptureClick(t){var e=this._overlays.length-1;if(-1!==e)for(var i,n=a(t).path;(i=this._overlays[e])&&this._overlayInPath(n)!==i&&(i._onCaptureClick(t),i.allowClickThrough);)e--}_onCaptureFocus(t){var e=this.currentOverlay();e&&e._onCaptureFocus(t)}_onCaptureKeyDown(t){var e=this.currentOverlay();e&&(d.keyboardEventMatchesKeys(t,"esc")?e._onCaptureEsc(t):d.keyboardEventMatchesKeys(t,"tab")&&e._onCaptureTab(t))}_shouldBeBehindOverlay(t,e){return!t.alwaysOnTop&&e.alwaysOnTop}};
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/var N,E,k={pageX:0,pageY:0},B=null,S=[],F=["wheel","mousewheel","DOMMouseScroll","touchstart","touchmove"];function L(t){D.indexOf(t)>=0||(0===D.length&&function(){N=N||P.bind(void 0);for(var t=0,e=F.length;t<e;t++)document.addEventListener(F[t],N,{capture:!0,passive:!1})}(),D.push(t),E=D[D.length-1])}function M(t){var e=D.indexOf(t);-1!==e&&(D.splice(e,1),E=D[D.length-1],0===D.length&&function(){for(var t=0,e=F.length;t<e;t++)document.removeEventListener(F[t],N,{capture:!0,passive:!1})}())}const D=[];function P(t){if(t.cancelable&&function(t){var e=a(t).rootTarget;"touchmove"!==t.type&&B!==e&&(B=e,S=function(t){for(var e=[],i=t.indexOf(E),n=0;n<=i;n++)if(t[n].nodeType===Node.ELEMENT_NODE){var o=t[n],s=o.style;"scroll"!==s.overflow&&"auto"!==s.overflow&&(s=window.getComputedStyle(o)),"scroll"!==s.overflow&&"auto"!==s.overflow||e.push(o)}return e}(a(t).path));if(!S.length)return!0;if("touchstart"===t.type)return!1;var i=function(t){var e={deltaX:t.deltaX,deltaY:t.deltaY};if("deltaX"in t);else if("wheelDeltaX"in t&&"wheelDeltaY"in t)e.deltaX=-t.wheelDeltaX,e.deltaY=-t.wheelDeltaY;else if("wheelDelta"in t)e.deltaX=0,e.deltaY=-t.wheelDelta;else if("axis"in t)e.deltaX=1===t.axis?t.detail:0,e.deltaY=2===t.axis?t.detail:0;else if(t.targetTouches){var i=t.targetTouches[0];e.deltaX=k.pageX-i.pageX,e.deltaY=k.pageY-i.pageY}return e}
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/(t);return!function(t,e,i){if(!e&&!i)return;for(var n=Math.abs(i)>=Math.abs(e),o=0;o<t.length;o++){var s=t[o];if(n?i<0?s.scrollTop>0:s.scrollTop<s.scrollHeight-s.clientHeight:e<0?s.scrollLeft>0:s.scrollLeft<s.scrollWidth-s.clientWidth)return s}}(S,i.deltaX,i.deltaY)}(t)&&t.preventDefault(),t.targetTouches){var e=t.targetTouches[0];k.pageX=e.pageX,k.pageY=e.pageY}}const j={properties:{opened:{observer:"_openedChanged",type:Boolean,value:!1,notify:!0},canceled:{observer:"_canceledChanged",readOnly:!0,type:Boolean,value:!1},withBackdrop:{observer:"_withBackdropChanged",type:Boolean},noAutoFocus:{type:Boolean,value:!1},noCancelOnEscKey:{type:Boolean,value:!1},noCancelOnOutsideClick:{type:Boolean,value:!1},closingReason:{type:Object},restoreFocusOnClose:{type:Boolean,value:!1},allowClickThrough:{type:Boolean},alwaysOnTop:{type:Boolean},scrollAction:{type:String},_manager:{type:Object,value:R},_focusedChild:{type:Object}},listeners:{"iron-resize":"_onIronResize"},observers:["__updateScrollObservers(isAttached, opened, scrollAction)"],get backdropElement(){return this._manager.backdropElement},get _focusNode(){return this._focusedChild||a(this).querySelector("[autofocus]")||this},get _focusableNodes(){return I.getTabbableNodes(this)},ready:function(){this.__isAnimating=!1,this.__shouldRemoveTabIndex=!1,this.__firstFocusableNode=this.__lastFocusableNode=null,this.__rafs={},this.__restoreFocusNode=null,this.__scrollTop=this.__scrollLeft=null,this.__onCaptureScroll=this.__onCaptureScroll.bind(this),this.__rootNodes=null,this._ensureSetup()},attached:function(){this.opened&&this._openedChanged(this.opened),this._observer=a(this).observeNodes(this._onNodesChange)},detached:function(){for(var t in this._observer&&a(this).unobserveNodes(this._observer),this._observer=null,this.__rafs)null!==this.__rafs[t]&&cancelAnimationFrame(this.__rafs[t]);this.__rafs={},this._manager.removeOverlay(this),this.__isAnimating&&(this.opened?this._finishRenderOpened():(this._applyFocus(),this._finishRenderClosed()))},toggle:function(){this._setCanceled(!1),this.opened=!this.opened},open:function(){this._setCanceled(!1),this.opened=!0},close:function(){this._setCanceled(!1),this.opened=!1},cancel:function(t){this.fire("iron-overlay-canceled",t,{cancelable:!0}).defaultPrevented||(this._setCanceled(!0),this.opened=!1)},invalidateTabbables:function(){this.__firstFocusableNode=this.__lastFocusableNode=null},_ensureSetup:function(){this._overlaySetup||(this._overlaySetup=!0,this.style.outline="none",this.style.display="none")},_openedChanged:function(t){t?this.removeAttribute("aria-hidden"):this.setAttribute("aria-hidden","true"),this.isAttached&&(this.__isAnimating=!0,this.__deraf("__openedChanged",this.__openedChanged))},_canceledChanged:function(){this.closingReason=this.closingReason||{},this.closingReason.canceled=this.canceled},_withBackdropChanged:function(){this.withBackdrop&&!this.hasAttribute("tabindex")?(this.setAttribute("tabindex","-1"),this.__shouldRemoveTabIndex=!0):this.__shouldRemoveTabIndex&&(this.removeAttribute("tabindex"),this.__shouldRemoveTabIndex=!1),this.opened&&this.isAttached&&this._manager.trackBackdrop()},_prepareRenderOpened:function(){this.__restoreFocusNode=this._manager.deepActiveElement,this._preparePositioning(),this.refit(),this._finishPositioning(),this.noAutoFocus&&document.activeElement===this._focusNode&&(this._focusNode.blur(),this.__restoreFocusNode.focus())},_renderOpened:function(){this._finishRenderOpened()},_renderClosed:function(){this._finishRenderClosed()},_finishRenderOpened:function(){this.notifyResize(),this.__isAnimating=!1,this.fire("iron-overlay-opened")},_finishRenderClosed:function(){this.style.display="none",this.style.zIndex="",this.notifyResize(),this.__isAnimating=!1,this.fire("iron-overlay-closed",this.closingReason)},_preparePositioning:function(){this.style.transition=this.style.webkitTransition="none",this.style.transform=this.style.webkitTransform="none",this.style.display=""},_finishPositioning:function(){this.style.display="none",this.scrollTop=this.scrollTop,this.style.transition=this.style.webkitTransition="",this.style.transform=this.style.webkitTransform="",this.style.display="",this.scrollTop=this.scrollTop},_applyFocus:function(){if(this.opened)this.noAutoFocus||this._focusNode.focus();else{if(this.restoreFocusOnClose&&this.__restoreFocusNode){var t=this._manager.deepActiveElement;(t===document.body||W(this,t))&&this.__restoreFocusNode.focus()}this.__restoreFocusNode=null,this._focusNode.blur(),this._focusedChild=null}},_onCaptureClick:function(t){this.noCancelOnOutsideClick||this.cancel(t)},_onCaptureFocus:function(t){if(this.withBackdrop){var e=a(t).path;-1===e.indexOf(this)?(t.stopPropagation(),this._applyFocus()):this._focusedChild=e[0]}},_onCaptureEsc:function(t){this.noCancelOnEscKey||this.cancel(t)},_onCaptureTab:function(t){if(this.withBackdrop){this.__ensureFirstLastFocusables();var e=t.shiftKey,i=e?this.__firstFocusableNode:this.__lastFocusableNode,n=e?this.__lastFocusableNode:this.__firstFocusableNode,o=!1;if(i===n)o=!0;else{var s=this._manager.deepActiveElement;o=s===i||s===this}o&&(t.preventDefault(),this._focusedChild=n,this._applyFocus())}},_onIronResize:function(){this.opened&&!this.__isAnimating&&this.__deraf("refit",this.refit)},_onNodesChange:function(){this.opened&&!this.__isAnimating&&(this.invalidateTabbables(),this.notifyResize())},__ensureFirstLastFocusables:function(){var t=this._focusableNodes;this.__firstFocusableNode=t[0],this.__lastFocusableNode=t[t.length-1]},__openedChanged:function(){this.opened?(this._prepareRenderOpened(),this._manager.addOverlay(this),this._applyFocus(),this._renderOpened()):(this._manager.removeOverlay(this),this._applyFocus(),this._renderClosed())},__deraf:function(t,e){var i=this.__rafs;null!==i[t]&&cancelAnimationFrame(i[t]),i[t]=requestAnimationFrame(function(){i[t]=null,e.call(this)}.bind(this))},__updateScrollObservers:function(t,e,i){t&&e&&this.__isValidScrollAction(i)?("lock"===i&&(this.__saveScrollPosition(),L(this)),this.__addScrollListeners()):(M(this),this.__removeScrollListeners())},__addScrollListeners:function(){if(!this.__rootNodes){if(this.__rootNodes=[],s)for(var t=this;t;)t.nodeType===Node.DOCUMENT_FRAGMENT_NODE&&t.host&&this.__rootNodes.push(t),t=t.host||t.assignedSlot||t.parentNode;this.__rootNodes.push(document)}this.__rootNodes.forEach((function(t){t.addEventListener("scroll",this.__onCaptureScroll,{capture:!0,passive:!0})}),this)},__removeScrollListeners:function(){this.__rootNodes&&this.__rootNodes.forEach((function(t){t.removeEventListener("scroll",this.__onCaptureScroll,{capture:!0,passive:!0})}),this),this.isAttached||(this.__rootNodes=null)},__isValidScrollAction:function(t){return"lock"===t||"refit"===t||"cancel"===t},__onCaptureScroll:function(t){if(!(this.__isAnimating||a(t).path.indexOf(this)>=0))switch(this.scrollAction){case"lock":this.__restoreScrollPosition();break;case"refit":this.__deraf("refit",this.refit);break;case"cancel":this.cancel(t)}},__saveScrollPosition:function(){document.scrollingElement?(this.__scrollTop=document.scrollingElement.scrollTop,this.__scrollLeft=document.scrollingElement.scrollLeft):(this.__scrollTop=Math.max(document.documentElement.scrollTop,document.body.scrollTop),this.__scrollLeft=Math.max(document.documentElement.scrollLeft,document.body.scrollLeft))},__restoreScrollPosition:function(){document.scrollingElement?(document.scrollingElement.scrollTop=this.__scrollTop,document.scrollingElement.scrollLeft=this.__scrollLeft):(document.documentElement.scrollTop=document.body.scrollTop=this.__scrollTop,document.documentElement.scrollLeft=document.body.scrollLeft=this.__scrollLeft)}},Z=t=>t.assignedSlot||t.parentNode||t.host,W=(t,e)=>{for(let i=e;i;i=Z(i))if(i===t)return!0;return!1};
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
r({_template:l`
    <style>
      :host {
        position: fixed;
      }

      #contentWrapper ::slotted(*) {
        overflow: auto;
      }

      #contentWrapper.animating ::slotted(*) {
        overflow: hidden;
        pointer-events: none;
      }
    </style>

    <div id="contentWrapper">
      <slot id="content" name="dropdown-content"></slot>
    </div>
`,is:"iron-dropdown",behaviors:[p,d,[z,C,j],[{properties:{animationConfig:{type:Object},entryAnimation:{observer:"_entryAnimationChanged",type:String},exitAnimation:{observer:"_exitAnimationChanged",type:String}},_entryAnimationChanged:function(){this.animationConfig=this.animationConfig||{},this.animationConfig.entry=[{name:this.entryAnimation,node:this}]},_exitAnimationChanged:function(){this.animationConfig=this.animationConfig||{},this.animationConfig.exit=[{name:this.exitAnimation,node:this}]},_copyProperties:function(t,e){for(var i in e)t[i]=e[i]},_cloneConfig:function(t){var e={isClone:!0};return this._copyProperties(e,t),e},_getAnimationConfigRecursive:function(t,e,i){var n;if(this.animationConfig)if(this.animationConfig.value&&"function"==typeof this.animationConfig.value)this._warn(this._logf("playAnimation","Please put 'animationConfig' inside of your components 'properties' object instead of outside of it."));else if(n=t?this.animationConfig[t]:this.animationConfig,Array.isArray(n)||(n=[n]),n)for(var o,s=0;o=n[s];s++)if(o.animatable)o.animatable._getAnimationConfigRecursive(o.type||t,e,i);else if(o.id){var a=e[o.id];a?(a.isClone||(e[o.id]=this._cloneConfig(a),a=e[o.id]),this._copyProperties(a,o)):e[o.id]=o}else i.push(o)},getAnimationConfig:function(t){var e={},i=[];for(var n in this._getAnimationConfigRecursive(t,e,i),e)i.push(e[n]);return i}},{_configureAnimations:function(t){var e=[],i=[];if(t.length>0)for(let e,n=0;e=t[n];n++){let t=document.createElement(e.name);if(t.isNeonAnimation){let n=null;t.configure||(t.configure=function(t){return null}),n=t.configure(e),i.push({result:n,config:e,neonAnimation:t})}else console.warn(this.is+":",e.name,"not found!")}for(var n=0;n<i.length;n++){let t=i[n].result,o=i[n].config,s=i[n].neonAnimation;try{"function"!=typeof t.cancel&&(t=document.timeline.play(t))}catch(e){t=null,console.warn("Couldnt play","(",o.name,").",e)}t&&e.push({neonAnimation:s,config:o,animation:t})}return e},_shouldComplete:function(t){for(var e=!0,i=0;i<t.length;i++)if("finished"!=t[i].animation.playState){e=!1;break}return e},_complete:function(t){for(var e=0;e<t.length;e++)t[e].neonAnimation.complete(t[e].config);for(e=0;e<t.length;e++)t[e].animation.cancel()},playAnimation:function(t,e){var i=this.getAnimationConfig(t);if(i){this._active=this._active||{},this._active[t]&&(this._complete(this._active[t]),delete this._active[t]);var n=this._configureAnimations(i);if(0!=n.length){this._active[t]=n;for(var o=0;o<n.length;o++)n[o].animation.onfinish=function(){this._shouldComplete(n)&&(this._complete(n),delete this._active[t],this.fire("neon-animation-finish",e,{bubbles:!1}))}.bind(this)}else this.fire("neon-animation-finish",e,{bubbles:!1})}},cancelAnimation:function(){for(var t in this._active){var e=this._active[t];for(var i in e)e[i].animation.cancel()}this._active={}}}]],properties:{horizontalAlign:{type:String,value:"left",reflectToAttribute:!0},verticalAlign:{type:String,value:"top",reflectToAttribute:!0},openAnimationConfig:{type:Object},closeAnimationConfig:{type:Object},focusTarget:{type:Object},noAnimations:{type:Boolean,value:!1},allowOutsideScroll:{type:Boolean,value:!1,observer:"_allowOutsideScrollChanged"}},listeners:{"neon-animation-finish":"_onNeonAnimationFinish"},observers:["_updateOverlayPosition(positionTarget, verticalAlign, horizontalAlign, verticalOffset, horizontalOffset)"],get containedElement(){for(var t=a(this.$.content).getDistributedNodes(),e=0,i=t.length;e<i;e++)if(t[e].nodeType===Node.ELEMENT_NODE)return t[e]},ready:function(){this.scrollAction||(this.scrollAction=this.allowOutsideScroll?"refit":"lock"),this._readied=!0},attached:function(){this.sizingTarget&&this.sizingTarget!==this||(this.sizingTarget=this.containedElement||this)},detached:function(){this.cancelAnimation()},_openedChanged:function(){this.opened&&this.disabled?this.cancel():(this.cancelAnimation(),this._updateAnimationConfig(),j._openedChanged.apply(this,arguments))},_renderOpened:function(){!this.noAnimations&&this.animationConfig.open?(this.$.contentWrapper.classList.add("animating"),this.playAnimation("open")):j._renderOpened.apply(this,arguments)},_renderClosed:function(){!this.noAnimations&&this.animationConfig.close?(this.$.contentWrapper.classList.add("animating"),this.playAnimation("close")):j._renderClosed.apply(this,arguments)},_onNeonAnimationFinish:function(){this.$.contentWrapper.classList.remove("animating"),this.opened?this._finishRenderOpened():this._finishRenderClosed()},_updateAnimationConfig:function(){for(var t=this.containedElement,e=[].concat(this.openAnimationConfig||[]).concat(this.closeAnimationConfig||[]),i=0;i<e.length;i++)e[i].node=t;this.animationConfig={open:this.openAnimationConfig,close:this.closeAnimationConfig}},_updateOverlayPosition:function(){this.isAttached&&this.notifyResize()},_allowOutsideScrollChanged:function(t){this._readied&&(t?this.scrollAction&&"lock"!==this.scrollAction||(this.scrollAction="refit"):this.scrollAction="lock")},_applyFocus:function(){var t=this.focusTarget||this.containedElement;t&&this.opened&&!this.noAutoFocus?t.focus():j._applyFocus.apply(this,arguments)}});
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
const H={properties:{animationTiming:{type:Object,value:function(){return{duration:500,easing:"cubic-bezier(0.4, 0, 0.2, 1)",fill:"both"}}}},isNeonAnimation:!0,created:function(){document.body.animate||console.warn("No web animations detected. This element will not function without a web animations polyfill.")},timingFromConfig:function(t){if(t.timing)for(var e in t.timing)this.animationTiming[e]=t.timing[e];return this.animationTiming},setPrefixedProperty:function(t,e,i){for(var n,o={transform:["webkitTransform"],transformOrigin:["mozTransformOrigin","webkitTransformOrigin"]}[e],s=0;n=o[s];s++)t.style[n]=i;t.style[e]=i},complete:function(t){}};
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/r({is:"fade-in-animation",behaviors:[H],configure:function(t){var e=t.node;return this._effect=new KeyframeEffect(e,[{opacity:"0"},{opacity:"1"}],this.timingFromConfig(t)),this._effect}}),
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
r({is:"fade-out-animation",behaviors:[H],configure:function(t){var e=t.node;return this._effect=new KeyframeEffect(e,[{opacity:"1"},{opacity:"0"}],this.timingFromConfig(t)),this._effect}});
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
const X=l`
<custom-style>
  <style is="custom-style">
    html {

      --shadow-transition: {
        transition: box-shadow 0.28s cubic-bezier(0.4, 0, 0.2, 1);
      };

      --shadow-none: {
        box-shadow: none;
      };

      /* from http://codepen.io/shyndman/pen/c5394ddf2e8b2a5c9185904b57421cdb */

      --shadow-elevation-2dp: {
        box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14),
                    0 1px 5px 0 rgba(0, 0, 0, 0.12),
                    0 3px 1px -2px rgba(0, 0, 0, 0.2);
      };

      --shadow-elevation-3dp: {
        box-shadow: 0 3px 4px 0 rgba(0, 0, 0, 0.14),
                    0 1px 8px 0 rgba(0, 0, 0, 0.12),
                    0 3px 3px -2px rgba(0, 0, 0, 0.4);
      };

      --shadow-elevation-4dp: {
        box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.14),
                    0 1px 10px 0 rgba(0, 0, 0, 0.12),
                    0 2px 4px -1px rgba(0, 0, 0, 0.4);
      };

      --shadow-elevation-6dp: {
        box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.14),
                    0 1px 18px 0 rgba(0, 0, 0, 0.12),
                    0 3px 5px -1px rgba(0, 0, 0, 0.4);
      };

      --shadow-elevation-8dp: {
        box-shadow: 0 8px 10px 1px rgba(0, 0, 0, 0.14),
                    0 3px 14px 2px rgba(0, 0, 0, 0.12),
                    0 5px 5px -3px rgba(0, 0, 0, 0.4);
      };

      --shadow-elevation-12dp: {
        box-shadow: 0 12px 16px 1px rgba(0, 0, 0, 0.14),
                    0 4px 22px 3px rgba(0, 0, 0, 0.12),
                    0 6px 7px -4px rgba(0, 0, 0, 0.4);
      };

      --shadow-elevation-16dp: {
        box-shadow: 0 16px 24px 2px rgba(0, 0, 0, 0.14),
                    0  6px 30px 5px rgba(0, 0, 0, 0.12),
                    0  8px 10px -5px rgba(0, 0, 0, 0.4);
      };

      --shadow-elevation-24dp: {
        box-shadow: 0 24px 38px 3px rgba(0, 0, 0, 0.14),
                    0 9px 46px 8px rgba(0, 0, 0, 0.12),
                    0 11px 15px -7px rgba(0, 0, 0, 0.4);
      };
    }
  </style>
</custom-style>`;X.setAttribute("style","display: none;"),document.head.appendChild(X.content),
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
r({is:"paper-menu-grow-height-animation",behaviors:[H],configure:function(t){var e=t.node,i=e.getBoundingClientRect().height;return this._effect=new KeyframeEffect(e,[{height:i/2+"px"},{height:i+"px"}],this.timingFromConfig(t)),this._effect}}),r({is:"paper-menu-grow-width-animation",behaviors:[H],configure:function(t){var e=t.node,i=e.getBoundingClientRect().width;return this._effect=new KeyframeEffect(e,[{width:i/2+"px"},{width:i+"px"}],this.timingFromConfig(t)),this._effect}}),r({is:"paper-menu-shrink-width-animation",behaviors:[H],configure:function(t){var e=t.node,i=e.getBoundingClientRect().width;return this._effect=new KeyframeEffect(e,[{width:i+"px"},{width:i-i/20+"px"}],this.timingFromConfig(t)),this._effect}}),r({is:"paper-menu-shrink-height-animation",behaviors:[H],configure:function(t){var e=t.node,i=e.getBoundingClientRect().height;return this.setPrefixedProperty(e,"transformOrigin","0 0"),this._effect=new KeyframeEffect(e,[{height:i+"px",transform:"translateY(0)"},{height:i/2+"px",transform:"translateY(-20px)"}],this.timingFromConfig(t)),this._effect}});
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
var Y={ANIMATION_CUBIC_BEZIER:"cubic-bezier(.3,.95,.5,1)",MAX_ANIMATION_TIME_MS:400};const $=r({_template:l`
    <style>
      :host {
        display: inline-block;
        position: relative;
        padding: 8px;
        outline: none;

        @apply --paper-menu-button;
      }

      :host([disabled]) {
        cursor: auto;
        color: var(--disabled-text-color);

        @apply --paper-menu-button-disabled;
      }

      iron-dropdown {
        @apply --paper-menu-button-dropdown;
      }

      .dropdown-content {
        @apply --shadow-elevation-2dp;

        position: relative;
        border-radius: 2px;
        background-color: var(--paper-menu-button-dropdown-background, var(--primary-background-color));

        @apply --paper-menu-button-content;
      }

      :host([vertical-align="top"]) .dropdown-content {
        margin-bottom: 20px;
        margin-top: -10px;
        top: 10px;
      }

      :host([vertical-align="bottom"]) .dropdown-content {
        bottom: 10px;
        margin-bottom: -10px;
        margin-top: 20px;
      }

      #trigger {
        cursor: pointer;
      }
    </style>

    <div id="trigger" on-tap="toggle">
      <slot name="dropdown-trigger"></slot>
    </div>

    <iron-dropdown id="dropdown" opened="{{opened}}" horizontal-align="[[horizontalAlign]]" vertical-align="[[verticalAlign]]" dynamic-align="[[dynamicAlign]]" horizontal-offset="[[horizontalOffset]]" vertical-offset="[[verticalOffset]]" no-overlap="[[noOverlap]]" open-animation-config="[[openAnimationConfig]]" close-animation-config="[[closeAnimationConfig]]" no-animations="[[noAnimations]]" focus-target="[[_dropdownContent]]" allow-outside-scroll="[[allowOutsideScroll]]" restore-focus-on-close="[[restoreFocusOnClose]]" on-iron-overlay-canceled="__onIronOverlayCanceled">
      <div slot="dropdown-content" class="dropdown-content">
        <slot id="content" name="dropdown-content"></slot>
      </div>
    </iron-dropdown>
`,is:"paper-menu-button",behaviors:[d,p],properties:{opened:{type:Boolean,value:!1,notify:!0,observer:"_openedChanged"},horizontalAlign:{type:String,value:"left",reflectToAttribute:!0},verticalAlign:{type:String,value:"top",reflectToAttribute:!0},dynamicAlign:{type:Boolean},horizontalOffset:{type:Number,value:0,notify:!0},verticalOffset:{type:Number,value:0,notify:!0},noOverlap:{type:Boolean},noAnimations:{type:Boolean,value:!1},ignoreSelect:{type:Boolean,value:!1},closeOnActivate:{type:Boolean,value:!1},openAnimationConfig:{type:Object,value:function(){return[{name:"fade-in-animation",timing:{delay:100,duration:200}},{name:"paper-menu-grow-width-animation",timing:{delay:100,duration:150,easing:Y.ANIMATION_CUBIC_BEZIER}},{name:"paper-menu-grow-height-animation",timing:{delay:100,duration:275,easing:Y.ANIMATION_CUBIC_BEZIER}}]}},closeAnimationConfig:{type:Object,value:function(){return[{name:"fade-out-animation",timing:{duration:150}},{name:"paper-menu-shrink-width-animation",timing:{delay:100,duration:50,easing:Y.ANIMATION_CUBIC_BEZIER}},{name:"paper-menu-shrink-height-animation",timing:{duration:200,easing:"ease-in"}}]}},allowOutsideScroll:{type:Boolean,value:!1},restoreFocusOnClose:{type:Boolean,value:!0},_dropdownContent:{type:Object}},hostAttributes:{role:"group","aria-haspopup":"true"},listeners:{"iron-activate":"_onIronActivate","iron-select":"_onIronSelect"},get contentElement(){for(var t=a(this.$.content).getDistributedNodes(),e=0,i=t.length;e<i;e++)if(t[e].nodeType===Node.ELEMENT_NODE)return t[e]},toggle:function(){this.opened?this.close():this.open()},open:function(){this.disabled||this.$.dropdown.open()},close:function(){this.$.dropdown.close()},_onIronSelect:function(t){this.ignoreSelect||this.close()},_onIronActivate:function(t){this.closeOnActivate&&this.close()},_openedChanged:function(t,e){t?(this._dropdownContent=this.contentElement,this.fire("paper-dropdown-open")):null!=e&&this.fire("paper-dropdown-close")},_disabledChanged:function(t){p._disabledChanged.apply(this,arguments),t&&this.opened&&this.close()},__onIronOverlayCanceled:function(t){var e=t.detail,i=this.$.trigger;a(e).path.indexOf(i)>-1&&t.preventDefault()}});Object.keys(Y).forEach((function(t){$[t]=Y[t]}));
/**
@license
Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
const K=document.createElement("template");K.setAttribute("style","display: none;"),K.innerHTML='<iron-iconset-svg name="paper-dropdown-menu" size="24">\n<svg><defs>\n<g id="arrow-drop-down"><path d="M7 10l5 5 5-5z"></path></g>\n</defs></svg>\n</iron-iconset-svg>',document.head.appendChild(K.content);
/**
@license
Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
const q=document.createElement("template");q.setAttribute("style","display: none;"),q.innerHTML='<dom-module id="paper-dropdown-menu-shared-styles">\n  <template>\n    <style>\n      :host {\n        display: inline-block;\n        position: relative;\n        text-align: left;\n\n        /* NOTE(cdata): Both values are needed, since some phones require the\n         * value to be `transparent`.\n         */\n        -webkit-tap-highlight-color: rgba(0,0,0,0);\n        -webkit-tap-highlight-color: transparent;\n\n        --paper-input-container-input: {\n          overflow: hidden;\n          white-space: nowrap;\n          text-overflow: ellipsis;\n          max-width: 100%;\n          box-sizing: border-box;\n          cursor: pointer;\n        };\n\n        @apply --paper-dropdown-menu;\n      }\n\n      /* paper-dropdown-menu and paper-dropdown-menu-light both delegate focus\n       * to other internal elements which manage focus styling. */\n      :host(:focus) {\n        outline: none;\n      }\n\n      :host(:dir(rtl)) {\n        text-align: right;\n\n        @apply(--paper-dropdown-menu);\n      }\n\n      :host([disabled]) {\n        @apply --paper-dropdown-menu-disabled;\n      }\n\n      :host([noink]) paper-ripple {\n        display: none;\n      }\n\n      :host([no-label-float]) paper-ripple {\n        top: 8px;\n      }\n\n      paper-ripple {\n        top: 12px;\n        left: 0px;\n        bottom: 8px;\n        right: 0px;\n\n        @apply --paper-dropdown-menu-ripple;\n      }\n\n      paper-menu-button {\n        display: block;\n        padding: 0;\n\n        @apply --paper-dropdown-menu-button;\n      }\n\n      paper-input {\n        @apply --paper-dropdown-menu-input;\n      }\n\n      iron-icon {\n        color: var(--disabled-text-color);\n\n        @apply --paper-dropdown-menu-icon;\n      }\n    </style>\n  </template>\n</dom-module>',document.head.appendChild(q.content);
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
const V={properties:{name:{type:String},value:{notify:!0,type:String},required:{type:Boolean,value:!1}},attached:function(){},detached:function(){}};
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/let G=null;const U={properties:{validator:{type:String},invalid:{notify:!0,reflectToAttribute:!0,type:Boolean,value:!1,observer:"_invalidChanged"}},registered:function(){G=new w({type:"validator"})},_invalidChanged:function(){this.invalid?this.setAttribute("aria-invalid","true"):this.removeAttribute("aria-invalid")},get _validator(){return G&&G.byKey(this.validator)},hasValidator:function(){return null!=this._validator},validate:function(t){return void 0===t&&void 0!==this.value?this.invalid=!this._getValidity(this.value):this.invalid=!this._getValidity(t),!this.invalid},_getValidity:function(t){return!this.hasValidator()||this._validator.validate(t)}},J=c(HTMLElement);
/**
@license
Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/function Q(){var e=t(['\n              <paper-item\n                role="option"\n                tabindex="','"\n                aria-disabled="false"\n                @tap="','"\n              >\n                ',"\n              </paper-item>\n            "]);return Q=function(){return e},e}function tt(){var e=t(['\n                <paper-item\n                  role="option"\n                  tabindex="','"\n                  aria-disabled="false"\n                  @tap="','"\n                >\n                  ',"\n                </paper-item>\n              "]);return tt=function(){return e},e}function et(){var e=t(['\n      <paper-dropdown-menu-light\n        no-animations\n        label="Book"\n        tabindex="0"\n        role="combobox"\n        aria-autocomplete="none"\n        aria-haspopup="true"\n        aria-disabled="false"\n        dir="null"\n      >\n        <paper-listbox\n          slot="dropdown-content"\n          class="dropdown-content"\n          aria-expanded="true"\n          role="listbox"\n          selected="','"\n          tabindex="0"\n        >\n          <paper-item\n            role="option"\n            tabindex="','"\n            aria-disabled="false"\n            @tap="','"\n          >\n            Genesis\n          </paper-item>\n          ','\n        </paper-listbox>\n      </paper-dropdown-menu-light>\n      <paper-dropdown-menu-light\n        no-animations\n        label="Chapter"\n        tabindex="0"\n        role="combobox"\n        aria-autocomplete="none"\n        aria-haspopup="true"\n        aria-disabled="false"\n        dir="null"\n      >\n        <paper-listbox\n          slot="dropdown-content"\n          class="dropdown-content"\n          aria-expanded="true"\n          role="listbox"\n          selected="','"\n          tabindex="0"\n        >\n          ',"\n        </paper-listbox>\n      </paper-dropdown-menu-light>\n    "]);return et=function(){return e},e}function it(){var e=t(["\n      :host {\n        display: flex;\n        margin: 0 5rem 0 2.5rem;\n        min-width: 16rem;\n      }\n\n      .dropdown-content {\n        min-width: var(--bible-tools-book-menu-drop-down-content-min-width, 7rem);\n      }\n\n      paper-dropdown-menu-light:first-of-type {\n        margin-right: 1rem;\n      }\n\n      paper-dropdown-menu-light {\n        min-width: 7rem;\n        width: calc(50vw - 7rem);\n      }\n    "]);return it=function(){return e},e}r({_template:l`
    <style include="paper-dropdown-menu-shared-styles">
      :host {
        width: 200px;  /* Default size of an <input> */
      }

      /**
       * All of these styles below are for styling the fake-input display
       */
      [slot="dropdown-trigger"] {
        box-sizing: border-box;
        position: relative;
        width: 100%;
        padding: 16px 0 8px 0;
      }

      [slot="dropdown-trigger"]:focus {
        outline: none;
      }

      :host([disabled]) [slot="dropdown-trigger"] {
        pointer-events: none;
        opacity: var(--paper-dropdown-menu-disabled-opacity, 0.33);
      }

      :host([no-label-float]) [slot="dropdown-trigger"] {
        padding-top: 8px;   /* If there's no label, we need less space up top. */
      }

      #input {
        @apply --paper-font-subhead;
        @apply --paper-font-common-nowrap;
        line-height: 1.5;
        border-bottom: 1px solid var(--paper-dropdown-menu-color, var(--secondary-text-color));
        color: var(--paper-dropdown-menu-color, var(--primary-text-color));
        width: 100%;
        box-sizing: border-box;
        padding: 12px 20px 0 0;   /* Right padding so that text doesn't overlap the icon */
        outline: none;
        @apply --paper-dropdown-menu-input;
      }

      #input:dir(rtl) {
        padding-right: 0px;
        padding-left: 20px;
      }

      :host([disabled]) #input {
        border-bottom: 1px dashed var(--paper-dropdown-menu-color, var(--secondary-text-color));
      }

      :host([invalid]) #input {
        border-bottom: 2px solid var(--paper-dropdown-error-color, var(--error-color));
      }

      :host([no-label-float]) #input {
        padding-top: 0;   /* If there's no label, we need less space up top. */
      }

      label {
        @apply --paper-font-subhead;
        @apply --paper-font-common-nowrap;
        display: block;
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        /**
         * The container has a 16px top padding, and there's 12px of padding
         * between the input and the label (from the input's padding-top)
         */
        top: 28px;
        box-sizing: border-box;
        width: 100%;
        padding-right: 20px;    /* Right padding so that text doesn't overlap the icon */
        text-align: left;
        transition-duration: .2s;
        transition-timing-function: cubic-bezier(.4,0,.2,1);
        color: var(--paper-dropdown-menu-color, var(--secondary-text-color));
        @apply --paper-dropdown-menu-label;
      }

      label:dir(rtl) {
        padding-right: 0px;
        padding-left: 20px;
        text-align: right;
      }

      :host([no-label-float]) label {
        top: 8px;
        /* Since the label doesn't need to float, remove the animation duration
        which slows down visibility changes (i.e. when a selection is made) */
        transition-duration: 0s;
      }

      label.label-is-floating {
        font-size: 12px;
        top: 8px;
      }

      label.label-is-hidden {
        visibility: hidden;
      }

      :host([focused]) label.label-is-floating {
        color: var(--paper-dropdown-menu-focus-color, var(--primary-color));
      }

      :host([invalid]) label.label-is-floating {
        color: var(--paper-dropdown-error-color, var(--error-color));
      }

      /**
       * Sets up the focused underline. It's initially hidden, and becomes
       * visible when it's focused.
       */
      label:after {
        background-color: var(--paper-dropdown-menu-focus-color, var(--primary-color));
        bottom: 7px;    /* The container has an 8px bottom padding */
        content: '';
        height: 2px;
        left: 45%;
        position: absolute;
        transition-duration: .2s;
        transition-timing-function: cubic-bezier(.4,0,.2,1);
        visibility: hidden;
        width: 8px;
        z-index: 10;
        @apply --paper-dropdown-menu-underline-focus;
      }

      :host([invalid]) label:after {
        background-color: var(--paper-dropdown-error-color, var(--error-color));
      }

      :host([no-label-float]) label:after {
        bottom: 7px;    /* The container has a 8px bottom padding */
      }

      :host([focused]:not([disabled])) label:after {
        left: 0;
        visibility: visible;
        width: 100%;
      }

      iron-icon {
        position: absolute;
        right: 0px;
        bottom: 8px;    /* The container has an 8px bottom padding */
        @apply --paper-font-subhead;
        color: var(--disabled-text-color);
        @apply --paper-dropdown-menu-icon;
      }

      iron-icon:dir(rtl) {
        left: 0;
        right: auto;
      }

      :host([no-label-float]) iron-icon {
        margin-top: 0px;
      }

      .error {
        display: inline-block;
        visibility: hidden;
        color: var(--paper-dropdown-error-color, var(--error-color));
        @apply --paper-font-caption;
        position: absolute;
        left:0;
        right:0;
        bottom: -12px;
      }

      :host([invalid]) .error {
        visibility: visible;
      }
    </style>

    <paper-menu-button id="menuButton" vertical-align="[[verticalAlign]]" horizontal-align="[[horizontalAlign]]" vertical-offset="[[_computeMenuVerticalOffset(noLabelFloat, verticalOffset)]]" disabled="[[disabled]]" no-animations="[[noAnimations]]" on-iron-select="_onIronSelect" on-iron-deselect="_onIronDeselect" opened="{{opened}}" close-on-activate allow-outside-scroll="[[allowOutsideScroll]]">
      <!-- support hybrid mode: user might be using paper-menu-button 1.x which distributes via <content> -->
      <div id="dropdown-trigger" class="dropdown-trigger" slot="dropdown-trigger" role="button" tabindex="0" aria-haspopup="listbox">
        <label class$="[[_computeLabelClass(noLabelFloat,alwaysFloatLabel,hasContent)]]">
          [[label]]
        </label>
        <div id="input" tabindex="-1">&nbsp;</div>
        <iron-icon icon="paper-dropdown-menu:arrow-drop-down"></iron-icon>
        <span class="error">[[errorMessage]]</span>
      </div>
      <slot id="content" name="dropdown-content" slot="dropdown-content"></slot>
    </paper-menu-button>
`,is:"paper-dropdown-menu-light",behaviors:[u,p,x,V,U],properties:{selectedItemLabel:{type:String,notify:!0,readOnly:!0},selectedItem:{type:Object,notify:!0,readOnly:!0},value:{type:String,notify:!0,observer:"_valueChanged"},label:{type:String},placeholder:{type:String},opened:{type:Boolean,notify:!0,value:!1,observer:"_openedChanged"},allowOutsideScroll:{type:Boolean,value:!1},noLabelFloat:{type:Boolean,value:!1,reflectToAttribute:!0},alwaysFloatLabel:{type:Boolean,value:!1},noAnimations:{type:Boolean,value:!1},horizontalAlign:{type:String,value:"right"},verticalAlign:{type:String,value:"top"},verticalOffset:Number,hasContent:{type:Boolean,readOnly:!0}},listeners:{tap:"_onTap"},keyBindings:{"up down":"open",esc:"close"},observers:["_selectedItemChanged(selectedItem)"],_attachDom(t){const e=f(this);return e.attachShadow({mode:"open",delegatesFocus:!0,shadyUpgradeFragment:t}),e.shadowRoot.appendChild(t),J.prototype._attachDom.call(this,t)},focus(){this.$["dropdown-trigger"].focus()},attached:function(){var t=this.contentElement;t&&t.selectedItem&&this._setSelectedItem(t.selectedItem)},get contentElement(){for(var t=a(this.$.content).getDistributedNodes(),e=0,i=t.length;e<i;e++)if(t[e].nodeType===Node.ELEMENT_NODE)return t[e]},open:function(){this.$.menuButton.open()},close:function(){this.$.menuButton.close()},_onIronSelect:function(t){this._setSelectedItem(t.detail.item)},_onIronDeselect:function(t){this._setSelectedItem(null)},_onTap:function(t){g(t)===this&&this.open()},_selectedItemChanged:function(t){var e="";e=t?t.label||t.getAttribute("label")||t.textContent.trim():"",this.value=e,this._setSelectedItemLabel(e)},_computeMenuVerticalOffset:function(t,e){return e||(t?-4:8)},_getValidity:function(t){return this.disabled||!this.required||this.required&&!!this.value},_openedChanged:function(){var t=this.opened?"true":"false",e=this.contentElement;e&&e.setAttribute("aria-expanded",t)},_computeLabelClass:function(t,e,i){var n="";return!0===t?i?"label-is-hidden":"":((i||!0===e)&&(n+=" label-is-floating"),n)},_valueChanged:function(){this.$.input&&this.$.input.textContent!==this.value&&(this.$.input.textContent=this.value),this._setHasContent(!!this.value)}});class nt extends(o(_)(e)){static get styles(){return i(it())}static get properties(){return{book:{reflect:!1,type:String},chapter:{reflect:!1,type:String},chapters:{reflect:!1,type:Object},reference:{reflect:!1,type:Object},sitePath:{reflect:!1,type:String},version:{reflect:!1,type:String}}}constructor(){super(),this.book="Genesis",this.chapter="1",this.chapters=[],this.version="KJV"}stateChanged(t){this.book=t.book.current,this.chapter=t.chapter.current,this.version=t.translation.version.current,this.sitePath=t.site.path,this.reference=t.reference;var e=t.router.activeRoute.replace(t.site.path,"").split("/"),i=e[1]?e[1]:void 0,n=e[2]?e[2]:void 0;if(i&&n&&(this.book=i,this.chapter=n),this.book&&this.chapter)try{this.chapters=this.reference.books[this.book].chapters}catch(t){}}render(){return n(et(),Object.keys(this.reference.books).indexOf(this.book),"Genesis"===this.book?0:1,()=>{b("1"),y("Genesis"),v("".concat(this.sitePath,"bible/Genesis/1"))},Object.keys(this.reference.books).slice(1).map(t=>n(tt(),t===this.book?0:1,()=>{b("1"),y(t),v("".concat(this.sitePath,"bible/").concat(t,"/1"))},t)),this.chapter-1,Object.keys(this.chapters).map(t=>n(Q(),Number(t)===this.chapter?"0":1,()=>{b(t),v("".concat(this.sitePath,"bible/").concat(this.book,"/").concat(t))},t)))}}m("bible-tools-book-menu",nt);export{nt as B,C as I};
