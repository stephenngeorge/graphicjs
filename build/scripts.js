/******/!function(t){/******/
/******/
// The require function
/******/
function e(o){/******/
/******/
// Check if module is in cache
/******/
if(n[o])/******/
return n[o].exports;/******/
// Create a new module (and put it into the cache)
/******/
var i=n[o]={/******/
i:o,/******/
l:!1,/******/
exports:{}};/******/
/******/
// Return the exports of the module
/******/
/******/
/******/
// Execute the module function
/******/
/******/
/******/
// Flag the module as loaded
/******/
return t[o].call(i.exports,i,i.exports,e),i.l=!0,i.exports}// webpackBootstrap
/******/
// The module cache
/******/
var n={};/******/
/******/
// Load entry module and return exports
/******/
/******/
/******/
/******/
// expose the modules object (__webpack_modules__)
/******/
e.m=t,/******/
/******/
// expose the module cache
/******/
e.c=n,/******/
/******/
// identity function for calling harmony imports with the correct context
/******/
e.i=function(t){return t},/******/
/******/
// define getter function for harmony exports
/******/
e.d=function(t,n,o){/******/
e.o(t,n)||/******/
Object.defineProperty(t,n,{/******/
configurable:!1,/******/
enumerable:!0,/******/
get:o})},/******/
/******/
// getDefaultExport function for compatibility with non-harmony modules
/******/
e.n=function(t){/******/
var n=t&&t.__esModule?/******/
function(){return t.default}:/******/
function(){return t};/******/
/******/
return e.d(n,"a",n),n},/******/
/******/
// Object.prototype.hasOwnProperty.call
/******/
e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},/******/
/******/
// __webpack_public_path__
/******/
e.p="/",e(e.s=16)}([/* 0 */
/***/
function(t,e,n){"use strict";function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function r(t,e,n){return e&&i(t.prototype,e),n&&i(t,n),t}/* harmony export (binding) */
n.d(e,"a",function(){return s});var s=/*#__PURE__*/
function(){function t(){o(this,t)}return r(t,[{key:"cartesian",/* ****
      TRANSFORMATION METHODS
    **** */
value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=this.ctx.canvas.clientHeight,n=this.ctx.canvas.clientWidth;switch(t){case 0:this.ctx.translate(.5*n,.5*e);break;case 1:this.ctx.translate(0,e);break;case 2:this.ctx.translate(n,e);break;case 3:this.ctx.translate(n,0);break;case 4:break;default:console.log({status:"ERROR",message:"invalid quadrant passed, please specify 0, 1, 2, 3 or 4. See docs for more info"})}return this.ctx.transform(1,0,0,-1,0,0),this}},{key:"centre",value:function(){var t=this.ctx.canvas.clientHeight,e=this.ctx.canvas.clientWidth;return this.ctx.translate(.5*e,.5*t),this}},{key:"rotate",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.units,n=void 0===e?"rad":e,o=t.angle,i=void 0===o?Math.PI/2:o,r=t.code,s=void 0===r?function(){return console.log("rotated by: ".concat(i))}:r,c=n.toUpperCase();return"RAD"===c||"RADS"===c||"R"===c||"RADIANS"===c?(this.ctx.save(),this.ctx.rotate(i),s(),this.ctx.restore(),this):"DEG"===c||"DEGS"===c||"D"===c||"DEGREES"===c?(this.ctx.save(),this.ctx.rotate(i*(Math.PI/180)),s(),this.ctx.restore(),this):(console.log({status:"ERROR",message:'units not recognised, please specify "deg" or "rad"'}),this)}},{key:"boundX",value:function(t,e){return(this.pos.x>=e||this.pos.x<=t)&&(this.vel.x*=-1),this}},{key:"boundY",value:function(t,e){return(this.pos.y>=e||this.pos.y<=t)&&(this.vel.y*=-1),this}}]),t}()},/* 1 */
,/* 2 */
/***/
function(t,e,n){"use strict";function o(t){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function r(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function s(t,e,n){return e&&r(t.prototype,e),n&&r(t,n),t}function c(t,e){return!e||"object"!==o(e)&&"function"!=typeof e?a(t):e}function a(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function u(t){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function h(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&l(t,e)}function l(t,e){return(l=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}/* harmony export (binding) */
n.d(e,"a",function(){return y});/* harmony import */
var f=n(39),p=n(58),y=/*#__PURE__*/
function(t){function e(t,n,o,r,s,a,h,l,f){var y;return i(this,e),y=c(this,u(e).call(this)),y.ctx=t,y.start=new p.a(n,o),y.ctrlPoint1=new p.a(r,s),y.ctrlPoint2=new p.a(a,h),y.end=new p.a(l,f),y}/* ****
    DESIGN METHODS
  **** */
// draw bezier curved line (2 anchor points...see 'Curve' class for one anchor point)
return h(e,t),s(e,[{key:"draw",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.weight,n=void 0===e?2:e,o=t.colour,i=void 0===o?"#808080":o;return this.ctx.beginPath(),this.ctx.lineWidth=n,this.ctx.moveTo(this.start.x,this.start.y),this.ctx.bezierCurveTo(this.ctrlPoint1.x,this.ctrlPoint1.y,this.ctrlPoint2.x,this.ctrlPoint2.y,this.end.x,this.end.y),this.ctx.strokeStyle=i,this.ctx.stroke(),this}}]),e}(f.a)},/* 3 */
/***/
function(t,e,n){"use strict";function o(t){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function r(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function s(t,e,n){return e&&r(t.prototype,e),n&&r(t,n),t}function c(t,e){return!e||"object"!==o(e)&&"function"!=typeof e?a(t):e}function a(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function u(t){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function h(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&l(t,e)}function l(t,e){return(l=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}/* harmony export (binding) */
n.d(e,"a",function(){return y});/* harmony import */
var f=n(39),p=n(58),y=/*#__PURE__*/
function(t){function e(t,n,o,r){var s;return i(this,e),s=c(this,u(e).call(this)),s.ctx=t,s.pos=new p.a(n,o),s.vel=new p.a(0,0),s.r=r,s}/* ****
    DESIGN METHODS
  **** */
// draw circle to canvas with fill colour (no stroke)
return h(e,t),s(e,[{key:"draw",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"#FFC0CB";return this.ctx.beginPath(),this.ctx.arc(this.pos.x,this.pos.y,this.r,0,2*Math.PI),this.ctx.fillStyle=t,this.ctx.fill(),this}},{key:"outline",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.weight,n=void 0===e?2:e,o=t.colour,i=void 0===o?"#808080":o;return this.ctx.beginPath(),this.ctx.arc(this.pos.x,this.pos.y,this.r,0,2*Math.PI),this.ctx.lineWidth=n,this.ctx.strokeStyle=i,this.ctx.stroke(),this}},{key:"_area",value:function(){return Math.PI*(this.r*this.r)}},{key:"_circumf",value:function(){return Math.PI*this.r*2}}]),e}(f.a)},/* 4 */
/***/
function(t,e,n){"use strict";/* harmony import */
var o=n(3);
// create new circle, draw to the given context
/* harmony default export */
e.a=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:42,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:42,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:21;return new o.a(t,e,n,i)}},/* 5 */
/***/
function(t,e,n){"use strict";function o(t){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function r(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function s(t,e,n){return e&&r(t.prototype,e),n&&r(t,n),t}function c(t,e){return!e||"object"!==o(e)&&"function"!=typeof e?a(t):e}function a(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function u(t){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function h(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&l(t,e)}function l(t,e){return(l=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}/* harmony export (binding) */
n.d(e,"a",function(){return y});/* harmony import */
var f=n(39),p=n(58),y=/*#__PURE__*/
function(t){function e(t,n,o,r,s,a,h){var l;return i(this,e),l=c(this,u(e).call(this)),l.ctx=t,l.start=new p.a(n,o),l.ctrlPoint=new p.a(r,s),l.end=new p.a(a,h),l}/* ****
    DESIGN METHODS
  **** */
// draw bezier curved line (2 anchor points...see 'Curve' class for one anchor point)
return h(e,t),s(e,[{key:"draw",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.weight,n=void 0===e?2:e,o=t.colour,i=void 0===o?"#808080":o;return this.ctx.beginPath(),this.ctx.lineWidth=n,this.ctx.moveTo(this.start.x,this.start.y),this.ctx.quadraticCurveTo(this.ctrlPoint.x,this.ctrlPoint.y,this.end.x,this.end.y),this.ctx.strokeStyle=i,this.ctx.stroke(),this}}]),e}(f.a)},/* 6 */
/***/
function(t,e,n){"use strict";function o(t){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function r(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function s(t,e,n){return e&&r(t.prototype,e),n&&r(t,n),t}function c(t,e){return!e||"object"!==o(e)&&"function"!=typeof e?a(t):e}function a(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function u(t){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function h(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&l(t,e)}function l(t,e){return(l=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}/* harmony export (binding) */
n.d(e,"a",function(){return y});/* harmony import */
var f=n(39),p=n(58),y=/*#__PURE__*/
function(t){function e(t,n,o,r,s){var a;return i(this,e),a=c(this,u(e).call(this)),a.ctx=t,a.start=new p.a(n,o),a.end=new p.a(r,s),a}/* ****
    DESIGN METHODS
  **** */
// draw line to canvas
return h(e,t),s(e,[{key:"draw",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.weight,n=void 0===e?2:e,o=t.colour,i=void 0===o?"#808080":o;return this.ctx.beginPath(),this.ctx.lineWidth=n,this.ctx.moveTo(this.start.x,this.start.y),this.ctx.lineTo(this.end.x,this.end.y),this.ctx.strokeStyle=i,this.ctx.stroke(),this}},{key:"_dist",value:function(){var t=Math.abs(this.start.x-this.end.x),e=Math.abs(this.start.y-this.end.y),n=t*t+e*e;return Math.sqrt(n)}},{key:"_grad",value:function(){var t=Math.abs(this.start.x-this.end.x);return Math.abs(this.start.y-this.end.y)/t}},{key:"_xAngle",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"rad",e=t.toUpperCase(),n=this._grad();if("RAD"===e||"R"===e||"RADIANS"===e)return Math.atan(n);if("DEG"===e||"D"===e||"DEGREES"===e){return Math.atan(n)*(180/Math.PI)}return{status:"ERROR",message:'the mode you have passed is not recognised, please specify "deg" or "rad"'}}},{key:"_yAngle",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"rad",e=t.toUpperCase();if("RAD"===e||"RADS"===e||"R"===e||"RADIANS"===e)return Math.PI/2-this._xAngle();if("DEG"===e||"DEGS"===e||"D"===e||"DEGREES"===e){return(Math.PI/2-this._xAngle())*(180/Math.PI)}return{status:"ERROR",message:'the mode you have passed is not recognised, please specify "deg" or "rad"'}}}]),e}(f.a)},/* 7 */
/***/
function(t,e,n){"use strict";function o(t){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function r(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function s(t,e,n){return e&&r(t.prototype,e),n&&r(t,n),t}function c(t,e){return!e||"object"!==o(e)&&"function"!=typeof e?a(t):e}function a(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function u(t){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function h(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&l(t,e)}function l(t,e){return(l=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}/* harmony export (binding) */
n.d(e,"a",function(){return v});/* harmony import */
var f=n(39),p=n(58),y=n(4),v=/*#__PURE__*/
function(t){function e(t,n,o){var r;return i(this,e),r=c(this,u(e).call(this)),r.ctx=t,r.pos=new p.a(n,o),r}/* ****
    DESIGN METHODS
  **** */
// draw point (1 pixel of colour)
return h(e,t),s(e,[{key:"draw",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"#808080";return this.ctx.fillStyle=t,this.ctx.fillRect(this.pos.x,this.pos.y,1,1),this}},{key:"spotlight",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"rgba(255, 255, 255, .5)";return n.i(y.a)(this.ctx,this.pos.x,this.pos.y,4).outline({weight:1,colour:t}),this}}]),e}(f.a)},/* 8 */
/***/
function(t,e,n){"use strict";function o(t){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function r(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function s(t,e,n){return e&&r(t.prototype,e),n&&r(t,n),t}function c(t,e){return!e||"object"!==o(e)&&"function"!=typeof e?a(t):e}function a(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function u(t){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function h(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&l(t,e)}function l(t,e){return(l=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}/* harmony export (binding) */
n.d(e,"a",function(){return y});/* harmony import */
var f=n(39),p=n(58),y=/*#__PURE__*/
function(t){function e(t,n,o,r,s){var a;return i(this,e),a=c(this,u(e).call(this)),a.ctx=t,a.pos=new p.a(n,o),a.width=r,a.height=s,a}/* ****
    DESIGN METHODS
  **** */
// draw rectangle to canvas with fill colour (no stroke)
return h(e,t),s(e,[{key:"draw",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"#FFC0CB";return this.ctx.fillStyle=t,this.ctx.fillRect(this.pos.x,this.pos.y,this.width,this.height),this}},{key:"outline",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.weight,n=void 0===e?2:e,o=t.colour,i=void 0===o?"#808080":o;return this.ctx.lineWidth=n,this.ctx.strokeStyle=i,this.ctx.strokeRect(this.pos.x,this.pos.y,this.width,this.height),this}},{key:"_area",value:function(){return this.width*this.height}},{key:"_perim",value:function(){return 2*(this.width+this.height)}}]),e}(f.a)},/* 9 */
/***/
function(t,e,n){"use strict";function o(t){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function r(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function s(t,e,n){return e&&r(t.prototype,e),n&&r(t,n),t}function c(t,e){return!e||"object"!==o(e)&&"function"!=typeof e?a(t):e}function a(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function u(t){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function h(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&l(t,e)}function l(t,e){return(l=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}/* harmony export (binding) */
n.d(e,"a",function(){return y});/* harmony import */
var f=n(39),p=n(58),y=/*#__PURE__*/
function(t){function e(t,n,o,r,s,a){var h;return i(this,e),h=c(this,u(e).call(this)),h.ctx=t,h.pos=new p.a(n,o),h.r=r,h.angle=s,h.size=a,h}/* ****
    DESIGN METHODS
  **** */
return h(e,t),s(e,[{key:"draw",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"#FFC0CB",e=Math.cos(this.angle)*this.r,n=Math.sin(this.angle)*this.r;return this.ctx.beginPath(),this.ctx.moveTo(this.pos.x,this.pos.y),this.ctx.lineTo(e,n),this.ctx.arc(this.pos.x,this.pos.y,this.r,this.angle,this.angle+this.size),this.ctx.moveTo(0,0),this.ctx.save(),this.ctx.rotate(this.angle+this.size-Math.PI/2),this.ctx.lineTo(this.pos.x,this.r),this.ctx.fillStyle=t,this.ctx.fill(),this.ctx.restore(),this}},{key:"outline",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.weight,n=void 0===e?3:e,o=t.colour,i=void 0===o?"#808080":o,r=Math.cos(this.angle)*this.r,s=Math.sin(this.angle)*this.r;return this.ctx.beginPath(),this.ctx.moveTo(this.pos.x,this.pos.y),this.ctx.lineTo(r,s),this.ctx.arc(this.pos.x,this.pos.y,this.r,this.angle,this.angle+this.size),this.ctx.moveTo(0,0),this.ctx.save(),this.ctx.rotate(this.angle+this.size-Math.PI/2),this.ctx.lineTo(this.pos.x,this.r),this.ctx.lineWidth=n,this.ctx.strokeStyle=i,this.ctx.stroke(),this.ctx.restore(),this}}]),e}(f.a)},/* 10 */
/***/
function(t,e,n){"use strict";function o(t){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function r(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function s(t,e,n){return e&&r(t.prototype,e),n&&r(t,n),t}function c(t,e){return!e||"object"!==o(e)&&"function"!=typeof e?a(t):e}function a(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function u(t){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function h(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&l(t,e)}function l(t,e){return(l=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}/* harmony export (binding) */
n.d(e,"a",function(){return y});/* harmony import */
var f=n(39),p=n(58),y=/*#__PURE__*/
function(t){function e(t,n,o,r,s,a){var h;return i(this,e),h=c(this,u(e).call(this)),h.ctx=t,h.pos=new p.a(n,o),h.r=r,h.angle=s,h.endAngle=2*Math.asin(h.chord/(2*h.r)),h.chord=a,h.dir=!1,h.chord>2*h.r&&console.log({status:"ERROR",message:"mathematical problems - chord length (final argument), cannot exceed diameter (radius * 2). Consult docs for more information"}),h}/* ****
    DESIGN METHODS
  **** */
// set optional arc 'counterclockwise' parameter to opposite boolean, arc will be drawn in opposite direction;
// MUST BE CALLED BEFORE OTHER DESIGN METHODS
return h(e,t),s(e,[{key:"invert",value:function(){return this.dir=!this.dir,this}},{key:"draw",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"#FFC0CB";return this.ctx.beginPath(),this.ctx.arc(this.pos.x+this.r,this.pos.y,this.r,this.angle,this.angle+this.endAngle,this.dir),this.ctx.fillStyle=t,this.ctx.fill(),this}},{key:"outline",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.weight,n=void 0===e?2:e,o=t.colour,i=void 0===o?"#808080":o,r=2*Math.asin(this.chord/(2*this.r));return this.ctx.beginPath(),this.ctx.arc(this.pos.x+this.r,this.pos.y,this.r,this.angle,this.angle+r,this.dir),this.ctx.lineWidth=n,this.ctx.strokeStyle=i,this.ctx.stroke(),this}}]),e}(f.a)},/* 11 */
/***/
function(t,e,n){"use strict";function o(t){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function r(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function s(t,e,n){return e&&r(t.prototype,e),n&&r(t,n),t}function c(t,e){return!e||"object"!==o(e)&&"function"!=typeof e?a(t):e}function a(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function u(t){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function h(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&l(t,e)}function l(t,e){return(l=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}/* harmony export (binding) */
n.d(e,"a",function(){return y});/* harmony import */
var f=n(39),p=n(58),y=/*#__PURE__*/
function(t){function e(t,n,o,r){var s;return i(this,e),s=c(this,u(e).call(this)),s.ctx=t,s.pos=new p.a(n,o),s.side=r,s.height=Math.sqrt(s.side*s.side-.5*s.side*(.5*s.side)),s}/* ****
    DESIGN METHODS
  **** */
// draw triangle to canvas with fill colour (no stroke)
return h(e,t),s(e,[{key:"draw",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"#FFC0CB";return this.ctx.beginPath(),this.ctx.moveTo(this.pos.x,this.pos.y),this.ctx.lineTo(this.pos.x-.5*this.side,this.pos.y+this.height),this.ctx.lineTo(this.pos.x+.5*this.side,this.pos.y+this.height),this.ctx.fillStyle=t,this.ctx.fill(),this}},{key:"outline",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.weight,n=void 0===e?2:e,o=t.colour,i=void 0===o?"#808080":o;return this.ctx.beginPath(),this.ctx.moveTo(this.pos.x,this.pos.y),this.ctx.lineTo(this.pos.x-.5*this.side,this.pos.y+this.height),this.ctx.lineTo(this.pos.x+.5*this.side,this.pos.y+this.height),this.ctx.lineWidth=n,this.ctx.strokeStyle=i,this.ctx.closePath(),this.ctx.stroke(),this}},{key:"_area",value:function(){return Math.sqrt(3)*(this.side*this.side)*.25}},{key:"_perim",value:function(){return 3*this.side}}]),e}(f.a)},/* 12 */
/***/
function(t,e,n){"use strict";function o(t){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function r(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function s(t,e,n){return e&&r(t.prototype,e),n&&r(t,n),t}function c(t,e){return!e||"object"!==o(e)&&"function"!=typeof e?a(t):e}function a(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function u(t){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function h(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&l(t,e)}function l(t,e){return(l=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}/* harmony export (binding) */
n.d(e,"a",function(){return y});/* harmony import */
var f=n(39),p=n(58),y=/*#__PURE__*/
function(t){function e(t,n,o,r,s){var a;return i(this,e),a=c(this,u(e).call(this)),a.ctx=t,a.pos=new p.a(n,o),a.base=r,a.side=s,a.height=Math.sqrt(a.side*a.side-.5*a.base*(.5*a.base)),a}/* ****
    DESIGN METHODS
  **** */
// draw triangle to canvas with fill colour (no stroke)
return h(e,t),s(e,[{key:"draw",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"#FFC0CB";return this.ctx.beginPath(),this.ctx.moveTo(this.pos.x,this.pos.y),this.ctx.lineTo(this.pos.x-.5*this.base,this.pos.y+this.height),this.ctx.lineTo(this.pos.x+.5*this.base,this.pos.y+this.height),this.ctx.fillStyle=t,this.ctx.fill(),this}},{key:"outline",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.weight,n=void 0===e?2:e,o=t.colour,i=void 0===o?"#808080":o;return this.ctx.beginPath(),this.ctx.moveTo(this.pos.x,this.pos.y),this.ctx.lineTo(this.pos.x-.5*this.base,this.pos.y+this.height),this.ctx.lineTo(this.pos.x+.5*this.base,this.pos.y+this.height),this.ctx.lineWidth=n,this.ctx.strokeStyle=i,this.ctx.closePath(),this.ctx.stroke(),this}},{key:"_area",value:function(){return.5*this.base*this.height*.5*2}},{key:"_perim",value:function(){return 2*this.side+this.base}},{key:"_angles",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"rad",e=t.toUpperCase(),n=null,o=null,i=null;if("RAD"===e||"RADS"===e||"R"===e||"RADIANS"===e)n=2*Math.asin(.5*this.base/this.side),o=Math.asin(this.height/this.side),i=o;else{if("DEG"!==e&&"DEGS"!==e&&"D"!==e&&"DEGREES"!==e)return{status:"ERROR",message:'the mode you have passed is not recognised, please specify "deg" or "rad"'};n=Math.asin(.5*this.base/this.side)*(180/Math.PI)*2,o=Math.asin(this.height/this.side)*(180/Math.PI),i=o}return[n,o,i]}}]),e}(f.a)},/* 13 */
/***/
function(t,e,n){"use strict";function o(t){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function r(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function s(t,e,n){return e&&r(t.prototype,e),n&&r(t,n),t}function c(t,e){return!e||"object"!==o(e)&&"function"!=typeof e?a(t):e}function a(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function u(t){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function h(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&l(t,e)}function l(t,e){return(l=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}/* harmony export (binding) */
n.d(e,"a",function(){return y});/* harmony import */
var f=n(39),p=n(58),y=/*#__PURE__*/
function(t){function e(t,n,o,r,s){var a;return i(this,e),a=c(this,u(e).call(this)),a.ctx=t,a.pos=new p.a(n,o),a.base=r,a.height=s,a}/* ****
    DESIGN METHODS
  **** */
// draw triangle to canvas with fill colour (no stroke)
return h(e,t),s(e,[{key:"draw",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"#FFC0CB";return this.ctx.beginPath(),this.ctx.moveTo(this.pos.x,this.pos.y),this.ctx.lineTo(this.pos.x,this.pos.y+this.height),this.ctx.lineTo(this.pos.x+this.base,this.pos.y+this.height),this.ctx.fillStyle=t,this.ctx.fill(),this}},{key:"outline",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.weight,n=void 0===e?2:e,o=t.colour,i=void 0===o?"#808080":o;return this.ctx.beginPath(),this.ctx.moveTo(this.pos.x,this.pos.y),this.ctx.lineTo(this.pos.x,this.pos.y+this.height),this.ctx.lineTo(this.pos.x+this.base,this.pos.y+this.height),this.ctx.lineWidth=n,this.ctx.strokeStyle=i,this.ctx.closePath(),this.ctx.stroke(),this}},{key:"_hyp",value:function(){return Math.sqrt(this.base*this.base+this.height*this.height)}},{key:"_area",value:function(){return this.height*this.base*.5}},{key:"_perim",value:function(){return this.base+this.height+this.hyp()}},{key:"_angles",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"rad",e=t.toUpperCase(),n=null,o=null,i=null;if("RAD"===e||"RADS"===e||"R"===e||"RADIANS"===e)n=Math.PI/2,o=Math.asin(this.base/this.hyp()),i=Math.asin(this.height/this.hyp());else{if("DEG"!==e&&"DEGS"!==e&&"D"!==e&&"DEGREES"!==e)return{status:"ERROR",message:'the mode you have passed is not recognised, please specify "deg" or "rad"'};n=Math.PI/2*(180/Math.PI),o=Math.asin(this.base/this.hyp())*(180/Math.PI),i=Math.asin(this.height/this.hyp())*(180/Math.PI)}return[n,o,i]}}]),e}(f.a)},/* 14 */
,/* 15 */
/***/
function(t,e,n){"use strict";/* harmony import */
var o=n(47),i=n(60),r=n(0),s=n(42),c=n(55),a=n(19),u=n(51),h=n(45),l={backgrounds:o.a,globals:i.a,Graphic:r.a,graphs:s.a,helpers:c.a,shapes:a.a,structure:u.a,text:h.a};/* harmony default export */
e.a=l},/* 16 */
/***/
function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});/* harmony import */
var o=n(15),i=o.a.backgrounds,r=o.a.globals,s=o.a.helpers,c=o.a.shapes,a=o.a.structure,u=a.canvas({width:600,height:600,id:"canvas"}),h=u.c,l=u.width,f=u.height;i.bgsolid(h);var p=c.circle(h,l/2,f/2,8);p.history=[],a.animate(function(){
// redraw background
i.bgsolid(h),// add current ball position to history array
p.history.push(p.pos.copy()),// limit history array to 100 items
p.history.length>100&&p.history.shift(),// draw circle at each position in history
p.history.forEach(function(t){var e=s._map(t.x,0,l,0,255),n=s._map(t.y,0,f,0,255);c.circle(h,t.x,t.y,8).draw("rgba(".concat(e,", ").concat(n,", 0, .6)"))});// randomly create vector to be added to ball position
var t=Math.random();p.vel=t<=.25?r.vector(0,16):t<=.5?r.vector(16,0):t<=.75?r.vector(0,-16):r.vector(-16,0),// draw ball at new position
p.pos.add(p.vel),p.draw("#333").outline({weight:2,colour:"#fff"}).wrapX(0+p.r,l-p.r).wrapY(0+p.r,f-p.r)},10)},/* 17 */
/***/
function(t,e,n){"use strict";/* harmony import */
var o=n(2);
// create new Bezier, draw to the given context
/* harmony default export */
e.a=function(t,e,n,i,r,s,c,a,u){return new o.a(t,e,n,i,r,s,c,a,u)}},/* 18 */
/***/
function(t,e,n){"use strict";/* harmony import */
var o=n(5);
// create new Bezier, draw to the given context
/* harmony default export */
e.a=function(t,e,n,i,r,s,c){return new o.a(t,e,n,i,r,s,c)}},/* 19 */
/***/
function(t,e,n){"use strict";/* harmony import */
var o=n(17),i=n(2),r=n(4),s=n(3),c=n(18),a=n(5),u=n(20),h=n(6),l=n(21),f=n(7),p=n(22),y=n(8),v=n(23),b=n(9),d=n(24),g=n(10),x=n(25),m=n(11),w=n(26),O=n(12),_=n(27),S=n(13),P={bezier:o.a,circle:r.a,curve:c.a,line:u.a,point:l.a,rect:p.a,sector:v.a,segment:d.a,triangleE:x.a,triangleI:w.a,triangleR:_.a,Classes:{Bezier:i.a,Circle:s.a,Curve:a.a,Line:h.a,Point:f.a,Rect:y.a,Sector:b.a,Segment:g.a,TriangleE:m.a,TriangleI:O.a,TriangleR:S.a}};/* harmony default export */
e.a=P},/* 20 */
/***/
function(t,e,n){"use strict";/* harmony import */
var o=n(6);
// create new line, draw to the given context
/* harmony default export */
e.a=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:42,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:42,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:126,r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:42;return new o.a(t,e,n,i,r)}},/* 21 */
/***/
function(t,e,n){"use strict";/* harmony import */
var o=n(7);/* harmony default export */
e.a=function(t,e,n){return new o.a(t,e,n)}},/* 22 */
/***/
function(t,e,n){"use strict";/* harmony import */
var o=n(8);/* harmony default export */
e.a=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:42,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:42,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:42,r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:42;return new o.a(t,e,n,i,r)}},/* 23 */
/***/
function(t,e,n){"use strict";/* harmony import */
var o=n(9);/* harmony default export */
e.a=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:42,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:42,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:21,r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:Math.PI,s=arguments.length>5&&void 0!==arguments[5]?arguments[5]:Math.PI/2;return new o.a(t,e,n,i,r,s)}},/* 24 */
/***/
function(t,e,n){"use strict";/* harmony import */
var o=n(10);/* harmony default export */
e.a=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:42,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:42,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:21,r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:Math.PI,s=arguments.length>5&&void 0!==arguments[5]?arguments[5]:42;return new o.a(t,e,n,i,r,s)}},/* 25 */
/***/
function(t,e,n){"use strict";/* harmony import */
var o=n(11);
// create new right-angled triangle, draw to the given context
/* harmony default export */
e.a=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:42,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:42,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:42;return new o.a(t,e,n,i)}},/* 26 */
/***/
function(t,e,n){"use strict";/* harmony import */
var o=n(12);
// create new right-angled triangle, draw to the given context
/* harmony default export */
e.a=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:42,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:42,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:24,r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:42;return new o.a(t,e,n,i,r)}},/* 27 */
/***/
function(t,e,n){"use strict";/* harmony import */
var o=n(13);
// create new right-angled triangle, draw to the given context
/* harmony default export */
e.a=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:42,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:42,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:40,r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:30;return new o.a(t,e,n,i,r)}},/* 28 */
,/* 29 */
,/* 30 */
,/* 31 */
,/* 32 */
,/* 33 */
,/* 34 */
,/* 35 */
,/* 36 */
,/* 37 */
,/* 38 */
,/* 39 */
/***/
function(t,e,n){"use strict";function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function r(t,e,n){return e&&i(t.prototype,e),n&&i(t,n),t}/* harmony export (binding) */
n.d(e,"a",function(){return s});var s=/*#__PURE__*/
function(){function t(){o(this,t)}return r(t,[{key:"cartesian",/* ****
      TRANSFORMATION METHODS
    **** */
value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=this.ctx.canvas.clientHeight,n=this.ctx.canvas.clientWidth;switch(t){case 0:this.ctx.translate(.5*n,.5*e);break;case 1:this.ctx.translate(0,e);break;case 2:this.ctx.translate(n,e);break;case 3:this.ctx.translate(n,0);break;case 4:break;default:console.log({status:"ERROR",message:"invalid quadrant passed, please specify 0, 1, 2, 3 or 4. See docs for more info"})}return this.ctx.transform(1,0,0,-1,0,0),this}},{key:"centre",value:function(){var t=this.ctx.canvas.clientHeight,e=this.ctx.canvas.clientWidth;return this.ctx.translate(.5*e,.5*t),this}},{key:"rotate",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.units,n=void 0===e?"rad":e,o=t.angle,i=void 0===o?Math.PI/2:o,r=t.code,s=void 0===r?function(){return console.log("rotated by: ".concat(i))}:r,c=n.toUpperCase();return"RAD"===c||"RADS"===c||"R"===c||"RADIANS"===c?(this.ctx.save(),this.ctx.rotate(i),s(),this.ctx.restore(),this):"DEG"===c||"DEGS"===c||"D"===c||"DEGREES"===c?(this.ctx.save(),this.ctx.rotate(i*(Math.PI/180)),s(),this.ctx.restore(),this):(console.log({status:"ERROR",message:'units not recognised, please specify "deg" or "rad"'}),this)}},{key:"boundX",value:function(t,e){return(this.pos.x>=e||this.pos.x<=t)&&(this.vel.x*=-1),this}},{key:"boundY",value:function(t,e){return(this.pos.y>=e||this.pos.y<=t)&&(this.vel.y*=-1),this}},{key:"wrapX",value:function(t,e){return this.pos.x>=e?this.pos.x=t:this.pos.x<=t&&(this.pos.x=e),this}},{key:"wrapY",value:function(t,e){return this.pos.y>=e?this.pos.y=t:this.pos.y<=t&&(this.pos.y=e),this}}]),t}()},/* 40 */
,/* 41 */
/***/
function(t,e,n){"use strict";function o(t){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function r(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function s(t,e,n){return e&&r(t.prototype,e),n&&r(t,n),t}function c(t,e){return!e||"object"!==o(e)&&"function"!=typeof e?a(t):e}function a(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function u(t){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function h(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&l(t,e)}function l(t,e){return(l=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}/* harmony export (binding) */
n.d(e,"a",function(){return y});/* harmony import */
var f=n(39),p=n(21),y=/*#__PURE__*/
function(t){function e(t,n,o,r,s,a,h){var l;return i(this,e),l=c(this,u(e).call(this)),l.ctx=t,l.m=n,l.c=o,l.exp=r,l.path=[],l.sfX=s,l.sfY=a,l.mode=h,l}return h(e,t),s(e,[{key:"calc",value:function(){for(var t=this.ctx.canvas.width,e=(this.ctx.canvas.height,"cartesian"===this.mode?.5*-t:0),o="cartesian"===this.mode?.5*t:t,i=e;i<o;i++){var r=(this.m*Math.pow(i,this.exp)+this.c)*this.sfY;this.path.push(n.i(p.a)(this.ctx,i*this.sfX,r).draw())}return this}},{key:"draw",value:function(){for(var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"#808080",e=0;e<this.path.length-1;e++)this.ctx.beginPath(),this.ctx.moveTo(this.path[e].pos.x,this.path[e].pos.y),this.ctx.lineTo(this.path[e+1].pos.x,this.path[e+1].pos.y),this.ctx.strokStyle=t,this.ctx.stroke();return this}}]),e}(f.a)},/* 42 */
/***/
function(t,e,n){"use strict";/* harmony import */
var o=n(43),i=n(41),r={linegraph:o.a,Classes:{Linegraph:i.a}};/* harmony default export */
e.a=r},/* 43 */
/***/
function(t,e,n){"use strict";/* harmony import */
var o=n(41);/* harmony default export */
e.a=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.m,i=void 0===n?1:n,r=e.c,s=void 0===r?0:r,c=e.exp,a=void 0===c?1:c,u=e.sfX,h=void 0===u?1:u,l=e.sfY,f=void 0===l?1:l,p=e.mode,y=void 0===p?null:p;return new o.a(t,i,s,a,h,f,y)}},/* 44 */
/***/
function(t,e,n){"use strict";function o(t){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function r(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function s(t,e,n){return e&&r(t.prototype,e),n&&r(t,n),t}function c(t,e){return!e||"object"!==o(e)&&"function"!=typeof e?a(t):e}function a(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function u(t){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function h(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&l(t,e)}function l(t,e){return(l=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}/* harmony export (binding) */
n.d(e,"a",function(){return y});/* harmony import */
var f=n(39),p=n(58),y=/*#__PURE__*/
function(t){function e(t,n,o,r){var s;return i(this,e),s=c(this,u(e).call(this)),s.ctx=t,s.string=n,s.pos=new p.a(o,r),s}/* ****
    DESIGN METHODS
  **** */
// set alignment
return h(e,t),s(e,[{key:"align",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"left";return this.ctx.textAlign=t,this}},{key:"baseline",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"bottom";return this.ctx.textBaseline=t,this}},{key:"font",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.size,n=void 0===e?"24px":e,o=t.family,i=void 0===o?"Helvetica":o;return this.ctx.font="".concat(n," ").concat(i),this}},{key:"draw",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"#FFC0CB";return this.ctx.fillStyle=t,this.ctx.fillText(this.string,this.pos.x,this.pos.y),this}},{key:"outline",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.weight,n=void 0===e?2:e,o=t.colour,i=void 0===o?"#808080":o;return this.ctx.lineWidth=n,this.ctx.strokeStyle=i,this.ctx.strokeText(this.string,this.pos.x,this.pos.y),this}}]),e}(f.a)},/* 45 */
/***/
function(t,e,n){"use strict";/* harmony import */
var o=n(44);/* harmony default export */
e.a=function(t,e,n,i){return new o.a(t,e,n,i)}},/* 46 */
/***/
function(t,e,n){"use strict";
// draw fill rectangle full size of canvas, colour default to light grey
function o(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"#e7e7e7",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"top-left",o=t.canvas.clientWidth,r=t.canvas.clientHeight,s=null;switch(n){case"top-left":s=new i.a(t,0,0,o,r).draw(e);break;case"centre":s=new i.a(t,.5*-o,.5*-r,o,r).draw(e);break;default:console.log({status:"ERROR",message:'the anchor you have passed is not recognised, please select "top-left" or "centre"'})}return s}/* harmony export (immutable) */
e.a=o;/* harmony import */
var i=n(8)},/* 47 */
/***/
function(t,e,n){"use strict";/* harmony import */
var o=n(46),i={bgsolid:o.a};/* harmony default export */
e.a=i},/* 48 */
/***/
function(t,e,n){"use strict";/* harmony default export */
e.a=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:60,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,o=0;return new Promise(function(i,r){var s=setInterval(function(){t(),o++,o===n&&(clearInterval(s),i(o)),18e5===o&&r({status:"ANIMATION STOPPED",message:"animation exceeded maximum length (30 mins), if you require a longer interval please consult the docs"})},1e3/e)})}},/* 49 */
/***/
function(t,e,n){"use strict";/* harmony default export */
e.a=function(t,e){return new Promise(function(n,o){t.save(),e(),t.restore(),n({status:"RESOLVED",message:"aside completed"})})}},/* 50 */
/***/
function(t,e,n){"use strict";/* harmony default export */
e.a=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.width,n=void 0===e?600:e,o=t.height,i=void 0===o?400:o,r=t.id,s=void 0===r?"canvas":r,c=t.el,a=void 0===c?document.body:c,u=document.createElement("canvas");// return object with canvas data
// set canvas attributes (defaults declared in function params)
// insert canvas element into DOM, attached to passed element (document body by default)
return u.width=n,u.height=i,u.id=s,a.appendChild(u),{c:u.getContext("2d"),width:u.width,height:u.height,id:u.id}}},/* 51 */
/***/
function(t,e,n){"use strict";/* harmony import */
var o=n(48),i=n(49),r=n(50),s=n(52),c={animate:o.a,aside:i.a,canvas:r.a,rotate:s.a};/* harmony default export */
e.a=c},/* 52 */
/***/
function(t,e,n){"use strict";/* harmony default export */
e.a=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.units,o=void 0===n?"rad":n,i=e.angle,r=void 0===i?Math.PI/2:i,s=e.code,c=void 0===s?function(){return console.log("rotated by: ".concat(r))}:s,a=o.toUpperCase();return new Promise(function(e,n){"RAD"===a||"RADS"===a||"R"===a||"RADIANS"===a?(t.save(),t.rotate(r),c(),t.restore(),e("reset transformations")):"DEG"===a||"DEGS"===a||"D"===a||"DEGREES"===a?(t.save(),t.rotate(r*(Math.PI/180)),c(),t.restore(),e("reset transformations")):n({status:"ERROR",message:'units not recognised, please specify "deg" or "rad"'})})}},/* 53 */
/***/
function(t,e,n){"use strict";
// convert degrees in to radians
var o=function(t){return t*(Math.PI/180)},i=function(t){return t*(180/Math.PI)};/* harmony default export */
e.a={toRadians:o,toDegrees:i}},/* 54 */
/***/
function(t,e,n){"use strict";/* harmony default export */
e.a=function(){var t=new Date;return{millis:t.getMilliseconds(),seconds:t.getSeconds(),minutes:t.getMinutes(),hours:t.getHours(),day:t.getDate(),month:t.getMonth()+1,year:t.getFullYear(),today:t}}},/* 55 */
/***/
function(t,e,n){"use strict";/* harmony import */
var o=n(53),i=n(54),r=n(56),s={_convert:o.a,_date:i.a,_map:r.a};/* harmony default export */
e.a=s},/* 56 */
/***/
function(t,e,n){"use strict";
// range_1 = range to be mapped, range_2 = range to be mapped to
/* harmony default export */
e.a=function(t,e,n,o,i){
// get the ranges passed in from minimum and maximum values
var r=Math.abs(e-n),s=Math.abs(o-i),c=e<n?e:n,a=o<i?o:i;if(!(t-c<0))// return that same percentage [line20] value of second range
return s/100*((t-c)/r*100)+a;console.error({status:"ERROR",message:"Could not calculate - the initial value must be within the first range"})}},/* 57 */
/***/
function(t,e,n){"use strict";function o(t){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function r(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function s(t,e,n){return e&&r(t.prototype,e),n&&r(t,n),t}function c(t,e){return!e||"object"!==o(e)&&"function"!=typeof e?a(t):e}function a(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function u(t){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function h(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&l(t,e)}function l(t,e){return(l=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}/* harmony export (binding) */
n.d(e,"a",function(){return p});/* harmony import */
var f=n(39),p=/*#__PURE__*/
function(t){function e(t,n,o){var r;return i(this,e),r=c(this,u(e).call(this)),r.ctx=t,r.cols=n,r.rows=o,r.grid=[],r}// get data for cell positions (returned as a nested array)
return h(e,t),s(e,[{key:"calc",value:function(){for(var t=this.ctx.canvas.width,e=this.ctx.canvas.height,n=0;n<t/this.cols;n++){for(var o={x:t/(t/this.cols)*n,rows:[],index:n},i=0;i<this.rows;i++)o.rows.push({y:e/(e/this.rows)*i,index:i});this.grid.push(o)}return this}},{key:"draw",value:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.weight,o=void 0===n?1:n,i=e.colour,r=void 0===i?"rgba(127, 127, 127, .4)":i;return this.grid.forEach(function(e){t.ctx.beginPath(),t.ctx.moveTo(e.x,0),t.ctx.lineTo(e.x,t.ctx.canvas.height),t.ctx.strokeStyle=r,t.ctx.lineWidth=o,t.ctx.stroke(),e.rows.forEach(function(n){t.ctx.beginPath(),t.ctx.moveTo(e.x,n.y),t.ctx.lineTo(e.x+t.cols,n.y),t.ctx.strokeStyle=r,t.ctx.lineWidth=o,t.ctx.stroke()})}),this}},{key:"_numCells",value:function(){return this.ctx.canvas.width/this.cols*(this.ctx.canvas.height/this.rows)}},{key:"_cell",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.x,n=void 0===e?0:e,o=t.y,i=void 0===o?0:o,r=t.colour,s=void 0===r?"#FFC0CB":r,c=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,a=this.grid[n].x,u=this.grid[n].rows[i].y;return"highlight"===c&&(this.ctx.fillStyle=s,this.ctx.fillRect(a,u,this.cols,this.rows)),{x:a,y:u}}}]),e}(f.a)},/* 58 */
/***/
function(t,e,n){"use strict";function o(t){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function r(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function s(t,e,n){return e&&r(t.prototype,e),n&&r(t,n),t}function c(t,e){return!e||"object"!==o(e)&&"function"!=typeof e?a(t):e}function a(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function u(t){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function h(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&l(t,e)}function l(t,e){return(l=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}/* harmony export (binding) */
n.d(e,"a",function(){return p});/* harmony import */
var f=n(39),p=/*#__PURE__*/
function(t){function e(t,n){var o;return i(this,e),o=c(this,u(e).call(this)),o.x=t,o.y=n,o}// copy the vector instead of mutating, preserves the original
return h(e,t),s(e,[{key:"copy",value:function(){return new e(this.x,this.y)}},{key:"add",value:function(t){return this.x+=t.x,this.y+=t.y,this}},{key:"sub",value:function(t){return this.x-=t.x,this.y-=t.y,this}},{key:"mult",value:function(t){return this.x*=t,this.y*=t,this}},{key:"div",value:function(t){return this.x/=t,this.y/=t,this}},{key:"mag",value:function(t){var e=Math.sqrt(this.x*this.x+this.y*this.y)*t,n=Math.atan(this.y/this.x);return this.x=Math.cos(n)*e,this.y=Math.sin(n)*e,this}},{key:"_heading",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"rad",e=t.toUpperCase(),n=Math.atan(this.y/this.x);return"RAD"===e||"RADS"===e||"R"===e||"RADIANS"===e||"RADIAN"===e?n:"DEG"===e||"DEGS"===e||"D"===e||"DEGREES"===e||"DEGREE"===e?n*(180/Math.PI):void 0}}]),e}(f.a)},/* 59 */
/***/
function(t,e,n){"use strict";/* harmony import */
var o=n(57);/* harmony default export */
e.a=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.cols,i=void 0===n?20:n,r=e.rows,s=void 0===r?20:r;return new o.a(t,i,s)}},/* 60 */
/***/
function(t,e,n){"use strict";/* harmony import */
var o=n(61),i=n(58),r=n(59),s=n(57),c={grid:r.a,vector:o.a,Classes:{Grid:s.a,Vector:i.a}};/* harmony default export */
e.a=c},/* 61 */
/***/
function(t,e,n){"use strict";/* harmony import */
var o=n(58);/* harmony default export */
e.a=function(t,e){return new o.a(t,e)}}]);
//# sourceMappingURL=scripts.js.map