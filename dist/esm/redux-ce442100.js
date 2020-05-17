var e=function(e){var t,r=e.Symbol;return"function"==typeof r?r.observable?t=r.observable:(t=r("observable"),r.observable=t):t="@@observable",t}("undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof module?module:Function("return this")()),t=function(){return Math.random().toString(36).substring(7).split("").join(".")},r={INIT:"@@redux/INIT"+t(),REPLACE:"@@redux/REPLACE"+t(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+t()}};function n(t,o,i){var u;if("function"==typeof o&&"function"==typeof i||"function"==typeof i&&"function"==typeof arguments[3])throw new Error("It looks like you are passing several store enhancers to createStore(). This is not supported. Instead, compose them together to a single function.");if("function"==typeof o&&void 0===i&&(i=o,o=void 0),void 0!==i){if("function"!=typeof i)throw new Error("Expected the enhancer to be a function.");return i(n)(t,o)}if("function"!=typeof t)throw new Error("Expected the reducer to be a function.");var a=t,c=o,s=[],f=s,d=!1;function l(){f===s&&(f=s.slice())}function p(){if(d)throw new Error("You may not call store.getState() while the reducer is executing. The reducer has already received the state as an argument. Pass it down from the top reducer instead of reading it from the store.");return c}function h(e){if("function"!=typeof e)throw new Error("Expected the listener to be a function.");if(d)throw new Error("You may not call store.subscribe() while the reducer is executing. If you would like to be notified after the store has been updated, subscribe from a component and invoke store.getState() in the callback to access the latest state. See https://redux.js.org/api-reference/store#subscribelistener for more details.");var t=!0;return l(),f.push(e),function(){if(t){if(d)throw new Error("You may not unsubscribe from a store listener while the reducer is executing. See https://redux.js.org/api-reference/store#subscribelistener for more details.");t=!1,l();var r=f.indexOf(e);f.splice(r,1),s=null}}}function y(e){if(!function(e){if("object"!=typeof e||null===e)return!1;for(var t=e;null!==Object.getPrototypeOf(t);)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t}(e))throw new Error("Actions must be plain objects. Use custom middleware for async actions.");if(void 0===e.type)throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');if(d)throw new Error("Reducers may not dispatch actions.");try{d=!0,c=a(c,e)}finally{d=!1}for(var t=s=f,r=0;r<t.length;r++){(0,t[r])()}return e}return y({type:r.INIT}),(u={dispatch:y,subscribe:h,getState:p,replaceReducer:function(e){if("function"!=typeof e)throw new Error("Expected the nextReducer to be a function.");a=e,y({type:r.REPLACE})}})[e]=function(){var t,r=h;return(t={subscribe:function(e){if("object"!=typeof e||null===e)throw new TypeError("Expected the observer to be an object.");function t(){e.next&&e.next(p())}return t(),{unsubscribe:r(t)}}})[e]=function(){return this},t},u}function o(e,t){var r=t&&t.type;return"Given "+(r&&'action "'+String(r)+'"'||"an action")+', reducer "'+e+'" returned undefined. To ignore an action, you must explicitly return the previous state. If you want this reducer to hold no value, you can return null instead of undefined.'}function i(e){for(var t=Object.keys(e),n={},i=0;i<t.length;i++){var u=t[i];"function"==typeof e[u]&&(n[u]=e[u])}var a,c=Object.keys(n);try{!function(e){Object.keys(e).forEach((function(t){var n=e[t];if(void 0===n(void 0,{type:r.INIT}))throw new Error('Reducer "'+t+"\" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined. If you don't want to set a value for this reducer, you can use null instead of undefined.");if(void 0===n(void 0,{type:r.PROBE_UNKNOWN_ACTION()}))throw new Error('Reducer "'+t+"\" returned undefined when probed with a random type. Don't try to handle "+r.INIT+' or other actions in "redux/*" namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined, but can be null.')}))}(n)}catch(e){a=e}return function(e,t){if(void 0===e&&(e={}),a)throw a;for(var r=!1,i={},u=0;u<c.length;u++){var s=c[u],f=n[s],d=e[s],l=f(d,t);if(void 0===l){var p=o(s,t);throw new Error(p)}i[s]=l,r=r||l!==d}return(r=r||c.length!==Object.keys(e).length)?i:e}}function u(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);return Object.getOwnPropertySymbols&&r.push.apply(r,Object.getOwnPropertySymbols(e)),t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(r,!0).forEach((function(t){u(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return 0===t.length?function(e){return e}:1===t.length?t[0]:t.reduce((function(e,t){return function(){return e(t.apply(void 0,arguments))}}))}function f(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return function(e){return function(){var r=e.apply(void 0,arguments),n=function(){throw new Error("Dispatching while constructing your middleware is not allowed. Other middleware would not be applied to this dispatch.")},o={getState:r.getState,dispatch:function(){return n.apply(void 0,arguments)}},i=t.map((function(e){return e(o)}));return c({},r,{dispatch:n=s.apply(void 0,i)(r.dispatch)})}}}export{s as a,f as b,n as c,i as d};