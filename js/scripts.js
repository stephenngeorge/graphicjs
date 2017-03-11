/******/!function(t){/******/
/******/
// The require function
/******/
function e(i){/******/
/******/
// Check if module is in cache
/******/
if(n[i])/******/
return n[i].exports;/******/
/******/
// Create a new module (and put it into the cache)
/******/
var o=n[i]={/******/
i:i,/******/
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
return t[i].call(o.exports,o,o.exports,e),o.l=!0,o.exports}// webpackBootstrap
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
/******/
/******/
// expose the module cache
/******/
/******/
/******/
// identity function for calling harmony imports with the correct context
/******/
/******/
/******/
// define getter function for harmony exports
/******/
/******/
/******/
// getDefaultExport function for compatibility with non-harmony modules
/******/
/******/
/******/
// Object.prototype.hasOwnProperty.call
/******/
/******/
/******/
// __webpack_public_path__
/******/
return e.m=t,e.c=n,e.i=function(t){return t},e.d=function(t,n,i){/******/
e.o(t,n)||/******/
Object.defineProperty(t,n,{/******/
configurable:!1,/******/
enumerable:!0,/******/
get:i})},e.n=function(t){/******/
var n=t&&t.__esModule?/******/
function(){return t.default}:/******/
function(){return t};/******/
/******/
return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="/",e(e.s=31)}([/* 0 */
/***/
function(t,e,n){"use strict";function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var o=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),r=function(){function t(){i(this,t)}return o(t,[{key:"cartesian",/* ****
      TRANSFORMATION METHODS
    **** */
value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=this.ctx.canvas.clientHeight,n=this.ctx.canvas.clientWidth;switch(t){case 0:this.ctx.translate(.5*n,.5*e);break;case 1:this.ctx.translate(0,e);break;case 2:this.ctx.translate(n,e);break;case 3:this.ctx.translate(n,0);break;case 4:break;default:console.log({status:"ERROR",message:"invalid quadrant passed, please specify 0, 1, 2, 3 or 4. See docs for more info"})}return this.ctx.transform(1,0,0,-1,0,0),this}},{key:"centre",value:function(){var t=this.ctx.canvas.clientHeight,e=this.ctx.canvas.clientWidth;return this.ctx.translate(.5*e,.5*t),this}},{key:"rotate",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.units,n=void 0===e?"rad":e,i=t.angle,o=void 0===i?Math.PI/2:i,r=t.code,s=void 0===r?function(){return console.log("rotated by: "+o)}:r,a=n.toUpperCase();return"RAD"===a||"RADS"===a||"R"===a||"RADIANS"===a?(this.ctx.save(),this.ctx.rotate(o),s(),this.ctx.restore(),this):"DEG"===a||"DEGS"===a||"D"===a||"DEGREES"===a?(this.ctx.save(),this.ctx.rotate(o*(Math.PI/180)),s(),this.ctx.restore(),this):(console.log({status:"ERROR",message:'units not recognised, please specify "deg" or "rad"'}),this)}},{key:"boundX",value:function(t,e){return(this.pos.x>=e||this.pos.x<=t)&&(this.vel.x*=-1),this}},{key:"boundY",value:function(t,e){return(this.pos.y>=e||this.pos.y<=t)&&(this.vel.y*=-1),this}}]),t}();e.default=r},/* 1 */
/***/
function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function r(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function s(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var a=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),u=n(0),l=i(u),c=function(t){function e(t,n){o(this,e);var i=r(this,(e.__proto__||Object.getPrototypeOf(e)).call(this));return i.x=t,i.y=n,i}
// pass in a vector to be added to this
return s(e,t),a(e,[{key:"add",value:function(t){return this.x+=t.x,this.y+=t.y,this}},{key:"sub",value:function(t){return this.x-=t.x,this.y-=t.y,this}}]),e}(l.default);e.default=c},/* 2 */
/***/
function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function r(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function s(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var a=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),u=n(0),l=i(u),c=n(1),h=i(c),f=function(t){function e(t,n,i,s,a){o(this,e);var u=r(this,(e.__proto__||Object.getPrototypeOf(e)).call(this));return u.ctx=t,u.pos=new h.default(n,i),u.width=s,u.height=a,u.vel=new h.default(1,1),u}/* ****
    DESIGN METHODS
  **** */
// draw rectangle to canvas with fill colour (no stroke)
return s(e,t),a(e,[{key:"draw",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"#FFC0CB";return this.ctx.fillStyle=t,this.ctx.fillRect(this.pos.x,this.pos.y,this.width,this.height),this}},{key:"outline",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.weight,n=void 0===e?2:e,i=t.colour,o=void 0===i?"#808080":i;return this.ctx.lineWidth=n,this.ctx.strokeStyle=o,this.ctx.strokeRect(this.pos.x,this.pos.y,this.width,this.height),this}},{key:"area",value:function(){return this.width*this.height}},{key:"perim",value:function(){return 2*(this.width+this.height)}}]),e}(l.default);e.default=f},/* 3 */
/***/
function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function r(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function s(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var a=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),u=n(0),l=i(u),c=n(1),h=i(c),f=function(t){function e(t,n,i,s){o(this,e);var a=r(this,(e.__proto__||Object.getPrototypeOf(e)).call(this));return a.ctx=t,a.pos=new h.default(n,i),a.x=a.pos.x,a.y=a.pos.y,a.r=s,a.vel=new h.default(1,1),a}/* ****
    DESIGN METHODS
  **** */
// draw circle to canvas with fill colour (no stroke)
return s(e,t),a(e,[{key:"draw",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"#FFC0CB";return this.ctx.beginPath(),this.ctx.arc(this.pos.x,this.pos.y,this.r,0,2*Math.PI),this.ctx.fillStyle=t,this.ctx.fill(),this}},{key:"outline",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.weight,n=void 0===e?2:e,i=t.colour,o=void 0===i?"#808080":i;return this.ctx.beginPath(),this.ctx.arc(this.pos.x,this.pos.y,this.r,0,2*Math.PI),this.ctx.lineWidth=n,this.ctx.strokeStyle=o,this.ctx.stroke(),this}},{key:"area",value:function(){return Math.PI*(this.r*this.r)}},{key:"circumf",value:function(){return Math.PI*this.r*2}}]),e}(l.default);e.default=f},/* 4 */
/***/
function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function r(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function s(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var a=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),u=n(0),l=i(u),c=n(1),h=i(c),f=function(t){function e(t,n,i,s,a){o(this,e);var u=r(this,(e.__proto__||Object.getPrototypeOf(e)).call(this));return u.ctx=t,u.posFrom=new h.default(n,i),u.posTo=new Vecotr(s,a),u}/* ****
    DESIGN METHODS
  **** */
// draw line to canvas
return s(e,t),a(e,[{key:"draw",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.weight,n=void 0===e?2:e,i=t.colour,o=void 0===i?"#808080":i;return this.ctx.beginPath(),this.ctx.lineWidth=n,this.ctx.moveTo(this.posFrom.x,this.posFrom.y),this.ctx.lineTo(this.posTo.x,this.posTo.y),this.ctx.strokeStyle=o,this.ctx.stroke(),this}},{key:"dist",value:function(){var t=Math.abs(this.posFrom.x-this.posTo.x),e=Math.abs(this.posFrom.y-this.posTo.y),n=t*t+e*e;return Math.sqrt(n)}},{key:"grad",value:function(){var t=Math.abs(this.posFrom.x-this.posTo.x),e=Math.abs(this.posFrom.y-this.posTo.y);return e/t}},{key:"xAngle",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"rad",e=t.toUpperCase(),n=this.grad();if("RAD"===e||"R"===e||"RADIANS"===e)return Math.atan(n);if("DEG"===e||"D"===e||"DEGREES"===e){var i=Math.atan(n);return i*(180/Math.PI)}return{status:"ERROR",message:'the mode you have passed is not recognised, please specify "deg" or "rad"'}}},{key:"yAngle",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"rad",e=t.toUpperCase();if("RAD"===e||"RADS"===e||"R"===e||"RADIANS"===e)return Math.PI/2-this.xAngle();if("DEG"===e||"DEGS"===e||"D"===e||"DEGREES"===e){var n=Math.PI/2-this.xAngle();return n*(180/Math.PI)}return{status:"ERROR",message:'the mode you have passed is not recognised, please specify "deg" or "rad"'}}}]),e}(l.default);e.default=f},/* 5 */
/***/
function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function r(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function s(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var a=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),u=n(0),l=i(u),c=n(1),h=i(c),f=n(11),d=i(f),p=function(t){function e(t,n,i){o(this,e);var s=r(this,(e.__proto__||Object.getPrototypeOf(e)).call(this));return s.ctx=t,s.pos=new h.default(n,i),s.vel=new h.default(1,1),s}/* ****
    DESIGN METHODS
  **** */
// draw point (1 pixel of colour)
return s(e,t),a(e,[{key:"draw",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"#808080";return this.ctx.fillStyle=t,this.ctx.fillRect(this.pos.x,this.pos.y,1,1),this}},{key:"spotlight",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"rgba(255, 255, 255, .5)";return(0,d.default)(this.ctx,this.pos.x,this.pos.y,4).outline({weight:1,colour:t}),this}}]),e}(l.default);e.default=p},/* 6 */
/***/
function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function r(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function s(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var a=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),u=n(0),l=i(u),c=n(1),h=i(c),f=function(t){function e(t,n,i,s,a,u){o(this,e);var l=r(this,(e.__proto__||Object.getPrototypeOf(e)).call(this));return l.ctx=t,l.pos=new h.default(n,i),l.r=s,l.angle=a,l.size=u,l.vel=new h.default(1,1),l}/* ****
    DESIGN METHODS
  **** */
return s(e,t),a(e,[{key:"draw",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"#FFC0CB",e=Math.cos(this.angle)*this.r,n=Math.sin(this.angle)*this.r;return this.ctx.beginPath(),this.ctx.moveTo(this.pos.x,this.pos.y),this.ctx.lineTo(e,n),this.ctx.arc(this.pos.x,this.pos.y,this.r,this.angle,this.angle+this.size),this.ctx.moveTo(0,0),this.ctx.save(),this.ctx.rotate(this.angle+this.size-Math.PI/2),this.ctx.lineTo(this.pos.x,this.r),this.ctx.fillStyle=t,this.ctx.fill(),this.ctx.restore(),this}},{key:"outline",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.weight,n=void 0===e?3:e,i=t.colour,o=void 0===i?"#808080":i,r=Math.cos(this.angle)*this.r,s=Math.sin(this.angle)*this.r;return this.ctx.beginPath(),this.ctx.moveTo(this.pos.x,this.pos.y),this.ctx.lineTo(r,s),this.ctx.arc(this.pos.x,this.pos.y,this.r,this.angle,this.angle+this.size),this.ctx.moveTo(0,0),this.ctx.save(),this.ctx.rotate(this.angle+this.size-Math.PI/2),this.ctx.lineTo(this.pos.x,this.r),this.ctx.lineWidth=n,this.ctx.strokeStyle=o,this.ctx.stroke(),this.ctx.restore(),this}}]),e}(l.default);e.default=f},/* 7 */
/***/
function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function r(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function s(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var a=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),u=n(0),l=i(u),c=n(1),h=i(c),f=function(t){function e(t,n,i,s,a,u){o(this,e);var l=r(this,(e.__proto__||Object.getPrototypeOf(e)).call(this));return l.ctx=t,l.pos=new h.default(n,i),l.r=s,l.angle=a,l.endAngle=2*Math.asin(l.chord/(2*l.r)),l.chord=u,l.dir=!1,l.chord>2*l.r&&console.log({status:"ERROR",message:"mathematical problems - chord length (final argument), cannot exceed diameter (radius * 2). Consult docs for more information"}),l.vel=new h.default(1,1),l}/* ****
    DESIGN METHODS
  **** */
// set optional arc 'counterclockwise' parameter to opposite boolean, arc will be drawn in opposite direction;
// MUST BE CALLED BEFORE OTHER DESIGN METHODS
return s(e,t),a(e,[{key:"invert",value:function(){return this.dir=!this.dir,this}},{key:"draw",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"#FFC0CB";return this.ctx.beginPath(),this.ctx.arc(this.pos.x+this.r,this.pos.y,this.r,this.angle,this.angle+this.endAngle,this.dir),this.ctx.fillStyle=t,this.ctx.fill(),this}},{key:"outline",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.weight,n=void 0===e?2:e,i=t.colour,o=void 0===i?"#808080":i,r=2*Math.asin(this.chord/(2*this.r));return this.ctx.beginPath(),this.ctx.arc(this.pos.x+this.r,this.pos.y,this.r,this.angle,this.angle+r,this.dir),this.ctx.lineWidth=n,this.ctx.strokeStyle=o,this.ctx.stroke(),this}}]),e}(l.default);e.default=f},/* 8 */
/***/
function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function r(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function s(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var a=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),u=n(0),l=i(u),c=n(1),h=i(c),f=function(t){function e(t,n,i,s){o(this,e);var a=r(this,(e.__proto__||Object.getPrototypeOf(e)).call(this));return a.ctx=t,a.pos=new h.default(n,i),a.side=s,a.height=Math.sqrt(a.side*a.side-.5*a.side*(.5*a.side)),a.vel=new h.default(1,1),a}/* ****
    DESIGN METHODS
  **** */
// draw triangle to canvas with fill colour (no stroke)
return s(e,t),a(e,[{key:"draw",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"#FFC0CB";return this.ctx.beginPath(),this.ctx.moveTo(this.pos.x,this.pos.y),this.ctx.lineTo(this.pos.x-.5*this.side,this.pos.y+this.height),this.ctx.lineTo(this.pos.x+.5*this.side,this.pos.y+this.height),this.ctx.fillStyle=t,this.ctx.fill(),this}},{key:"outline",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.weight,n=void 0===e?2:e,i=t.colour,o=void 0===i?"#808080":i;return this.ctx.beginPath(),this.ctx.moveTo(this.pos.x,this.pos.y),this.ctx.lineTo(this.pos.x-.5*this.side,this.pos.y+this.height),this.ctx.lineTo(this.pos.x+.5*this.side,this.pos.y+this.height),this.ctx.lineWidth=n,this.ctx.strokeStyle=o,this.ctx.closePath(),this.ctx.stroke(),this}},{key:"area",value:function(){return Math.sqrt(3)*(this.side*this.side)*.25}},{key:"perim",value:function(){return 3*this.side}}]),e}(l.default);e.default=f},/* 9 */
/***/
function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function r(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function s(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var a=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),u=n(0),l=i(u),c=n(1),h=i(c),f=function(t){function e(t,n,i,s,a){o(this,e);var u=r(this,(e.__proto__||Object.getPrototypeOf(e)).call(this));return u.ctx=t,u.pos=new h.default(n,i),u.base=s,u.side=a,u.height=Math.sqrt(u.side*u.side-.5*u.base*(.5*u.base)),u.vel=new h.default(1,1),u}/* ****
    DESIGN METHODS
  **** */
// draw triangle to canvas with fill colour (no stroke)
return s(e,t),a(e,[{key:"draw",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"#FFC0CB";return this.ctx.beginPath(),this.ctx.moveTo(this.pos.x,this.pos.y),this.ctx.lineTo(this.pos.x-.5*this.base,this.pos.y+this.height),this.ctx.lineTo(this.pos.x+.5*this.base,this.pos.y+this.height),this.ctx.fillStyle=t,this.ctx.fill(),this}},{key:"outline",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.weight,n=void 0===e?2:e,i=t.colour,o=void 0===i?"#808080":i;return this.ctx.beginPath(),this.ctx.moveTo(this.pos.x,this.pos.y),this.ctx.lineTo(this.pos.x-.5*this.base,this.pos.y+this.height),this.ctx.lineTo(this.pos.x+.5*this.base,this.pos.y+this.height),this.ctx.lineWidth=n,this.ctx.strokeStyle=o,this.ctx.closePath(),this.ctx.stroke(),this}},{key:"area",value:function(){return.5*this.base*this.height*.5*2}},{key:"perim",value:function(){return 2*this.side+this.base}},{key:"angles",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"rad",e=t.toUpperCase(),n=null,i=null,o=null;if("RAD"===e||"RADS"===e||"R"===e||"RADIANS"===e)n=2*Math.asin(.5*this.base/this.side),i=Math.asin(this.height/this.side),o=i;else{if("DEG"!==e&&"DEGS"!==e&&"D"!==e&&"DEGREES"!==e)return{status:"ERROR",message:'the mode you have passed is not recognised, please specify "deg" or "rad"'};n=Math.asin(.5*this.base/this.side)*(180/Math.PI)*2,i=Math.asin(this.height/this.side)*(180/Math.PI),o=i}return[n,i,o]}}]),e}(l.default);e.default=f},/* 10 */
/***/
function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function r(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function s(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var a=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),u=n(0),l=i(u),c=n(1),h=i(c),f=function(t){function e(t,n,i,s,a){o(this,e);var u=r(this,(e.__proto__||Object.getPrototypeOf(e)).call(this));return u.ctx=t,u.pos=new h.default(n,i),u.base=s,u.height=a,u.vel=new h.default(1,1),u}/* ****
    DESIGN METHODS
  **** */
// draw triangle to canvas with fill colour (no stroke)
return s(e,t),a(e,[{key:"draw",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"#FFC0CB";return this.ctx.beginPath(),this.ctx.moveTo(this.pos.x,this.pos.y),this.ctx.lineTo(this.pos.x,this.pos.y+this.height),this.ctx.lineTo(this.pos.x+this.base,this.pos.y+this.height),this.ctx.fillStyle=t,this.ctx.fill(),this}},{key:"outline",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.weight,n=void 0===e?2:e,i=t.colour,o=void 0===i?"#808080":i;return this.ctx.beginPath(),this.ctx.moveTo(this.pos.x,this.pos.y),this.ctx.lineTo(this.pos.x,this.pos.y+this.height),this.ctx.lineTo(this.pos.x+this.base,this.pos.y+this.height),this.ctx.lineWidth=n,this.ctx.strokeStyle=o,this.ctx.closePath(),this.ctx.stroke(),this}},{key:"hyp",value:function(){return Math.sqrt(this.base*this.base+this.height*this.height)}},{key:"area",value:function(){return this.height*this.base*.5}},{key:"perim",value:function(){return this.base+this.height+this.hyp()}},{key:"angles",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"rad",e=t.toUpperCase(),n=null,i=null,o=null;if("RAD"===e||"RADS"===e||"R"===e||"RADIANS"===e)n=Math.PI/2,i=Math.asin(this.base/this.hyp()),o=Math.asin(this.height/this.hyp());else{if("DEG"!==e&&"DEGS"!==e&&"D"!==e&&"DEGREES"!==e)return{status:"ERROR",message:'the mode you have passed is not recognised, please specify "deg" or "rad"'};n=Math.PI/2*(180/Math.PI),i=Math.asin(this.base/this.hyp())*(180/Math.PI),o=Math.asin(this.height/this.hyp())*(180/Math.PI)}return[n,i,o]}}]),e}(l.default);e.default=f},/* 11 */
/***/
function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}
// create new circle, draw to the given context
function o(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:42,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:42,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:21;return new s.default(t,e,n,i)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=o;var r=n(3),s=i(r)},/* 12 */
/***/
function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}var o=n(15),r=i(o),s=n(14),a=i(s),u={Engine:r.default,Body:a.default};t.exports=u},/* 13 */
/***/
function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}var o=n(16),r=i(o),s=n(20),a=i(s),u=n(17),l=i(u),c=n(18),h=i(c),f=n(19),d=i(f),p=n(21),v=i(p),y=n(30),b=i(y),g=n(22),x=i(g),_=n(23),w=i(_),O=n(25),P=i(O),m=n(26),M=i(m),j=n(11),k=i(j),E=n(24),R=i(E),T=n(29),S=i(T),D=n(27),C=i(D),I=n(28),A=i(I),F=n(0),G=i(F),z=n(1),W=i(z),B=n(4),N=i(B),q=n(5),X=i(q),Y=n(6),U=i(Y),H=n(7),V=i(H),L=n(3),J=i(L),K=n(2),Q=i(K),Z=n(10),$=i(Z),tt=n(8),et=i(tt),nt=n(9),it=i(nt),ot={animate:r.default,rotate:a.default,aside:l.default,map:d.default,canvas:h.default,bgSolid:v.default,vector:b.default,line:x.default,point:w.default,sector:P.default,segment:M.default,circle:k.default,rect:R.default,triangleR:S.default,triangleE:C.default,triangleI:A.default,classes:{Graphic:G.default,Vector:W.default,Line:N.default,Point:X.default,Sector:U.default,Segment:V.default,Circle:J.default,Rect:Q.default,TriangleR:$.default,TriangleE:et.default,TriangleI:it.default}};t.exports=ot},/* 14 */
/***/
function(t,e,n){"use strict";function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var o=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),r=function(){function t(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"dynamic",o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"elastic";i(this,t),this.entity=e,this.type=n,this.collision=o,this.size=this.setSize()}return o(t,[{key:"setSize",value:function(){return this.entity.r?this.entity.r:this.entity.height?this.entity.height:void 0}}]),t}();e.default=r},/* 15 */
/***/
function(t,e,n){"use strict";function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var o=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),r=function(){function t(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o=n.gravity_x,r=void 0===o?0:o,s=n.gravity_y,a=void 0===s?3:s,u=n.context,l=void 0===u?null:u,c=n.boundX,h=void 0!==c&&c,f=n.boundY,d=void 0!==f&&f;i(this,t),this.bodies=e,this.gravity_x=r,this.gravity_y=a,this.context=l,this.boundX=h,this.boundY=d}return o(t,[{key:"applyForces",value:function(t){var e={x:this.gravity_x,y:this.gravity_y};return t.entity.pos.x+=e.x,t.entity.pos.y+=e.y,t}},{key:"restrictX",value:function(t){t.entity.pos.x>=this.context.canvas.clientWidth-t.size&&(t.entity.pos.x=this.context.canvas.clientWidth-t.size),t.entity.pos.x<=0+t.size&&(t.entity.pos.x=0+t.size)}},{key:"restrictY",value:function(t){t.entity.pos.y>=this.context.canvas.clientHeight-t.size&&(t.entity.pos.y=this.context.canvas.clientHeight-t.size),t.entity.pos.y<=0+t.size&&(t.entity.pos.y=0+t.size)}},{key:"step",value:function(){for(var t in this.bodies)this.boundX&&this.restrictX(this.bodies[t]),this.boundY&&this.restrictY(this.bodies[t]),this.applyForces(this.bodies[t]);return this}}]),t}();e.default=r},/* 16 */
/***/
function(t,e,n){"use strict";function i(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:60,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,i=0;return new Promise(function(o,r){var s=setInterval(function(){t(),i++,i===n&&(clearInterval(s),o(i)),18e5===i&&r({status:"ANIMATION STOPPED",message:"animation exceeded maximum length (30 mins), if you require a longer interval please consult the docs"})},1e3/e)})}Object.defineProperty(e,"__esModule",{value:!0}),e.default=i},/* 17 */
/***/
function(t,e,n){"use strict";function i(t,e){return new Promise(function(n,i){t.save(),e(),t.restore(),n({status:"RESOLVED",message:"aside completed"})})}Object.defineProperty(e,"__esModule",{value:!0}),e.default=i},/* 18 */
/***/
function(t,e,n){"use strict";function i(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.width,n=void 0===e?600:e,i=t.height,o=void 0===i?400:i,r=t.id,s=void 0===r?"canvas":r,a=t.el,u=void 0===a?document.body:a,l=document.createElement("canvas");
// return object with canvas data
// set canvas attributes (defaults declared in function params)
// insert canvas element into DOM, attached to passed element (document body by default)
return l.width=n,l.height=o,l.id=s,u.appendChild(l),{c:l.getContext("2d"),width:l.width,height:l.height,id:l.id}}Object.defineProperty(e,"__esModule",{value:!0}),e.default=i},/* 19 */
/***/
function(t,e,n){"use strict";function i(t,e,n,i,o){
// get the ranges passed in from minimum and maximum values
var r=Math.abs(e-n),s=Math.abs(i-o),a=e<n?e:n,u=i<o?i:o,l=t-a;if(!(l<0)){
// get the passed value as a percentage of the first range
var c=(t-a)/r*100;
// return that same percentage [line20] value of second range
return s/100*c+u}console.error({status:"ERROR",message:"Could not calculate - the initial value must be within the first range"})}Object.defineProperty(e,"__esModule",{value:!0}),e.default=i},/* 20 */
/***/
function(t,e,n){"use strict";function i(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.units,i=void 0===n?"rad":n,o=e.angle,r=void 0===o?Math.PI/2:o,s=e.code,a=void 0===s?function(){return console.log("rotated by: "+r)}:s,u=i.toUpperCase();return new Promise(function(e,n){"RAD"===u||"RADS"===u||"R"===u||"RADIANS"===u?(t.save(),t.rotate(r),a(),t.restore(),e("reset transformations")):"DEG"===u||"DEGS"===u||"D"===u||"DEGREES"===u?(t.save(),t.rotate(r*(Math.PI/180)),a(),t.restore(),e("reset transformations")):n({status:"ERROR",message:'units not recognised, please specify "deg" or "rad"'})})}Object.defineProperty(e,"__esModule",{value:!0}),e.default=i},/* 21 */
/***/
function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}
// draw fill rectangle full size of canvas, colour default to light grey
function o(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"#e7e7e7",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"top-left",i=t.canvas.clientWidth,o=t.canvas.clientHeight,r=null;switch(n){case"top-left":r=new s.default(t,0,0,i,o).draw(e);break;case"centre":r=new s.default(t,.5*-i,.5*-o,i,o).draw(e);break;default:console.log({status:"ERROR",message:'the anchor you have passed is not recognised, please select "top-left" or "centre"'})}return r}Object.defineProperty(e,"__esModule",{value:!0}),e.default=o;var r=n(2),s=i(r)},/* 22 */
/***/
function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}
// create new line, draw to the given context
function o(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:42,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:42,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:126,o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:42;return new s.default(t,e,n,i,o)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=o;var r=n(4),s=i(r)},/* 23 */
/***/
function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}function o(t,e,n){return new s.default(t,e,n)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=o;var r=n(5),s=i(r)},/* 24 */
/***/
function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}
// create new rectangle, draw to the given context
function o(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:42,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:42,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:42,o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:42;return new s.default(t,e,n,i,o)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=o;var r=n(2),s=i(r)},/* 25 */
/***/
function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:42,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:42,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:21,o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:Math.PI,s=arguments.length>5&&void 0!==arguments[5]?arguments[5]:Math.PI/2;return new r.default(t,e,n,i,o,s)};var o=n(6),r=i(o)},/* 26 */
/***/
function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}function o(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:42,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:42,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:21,o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:Math.PI,r=arguments.length>5&&void 0!==arguments[5]?arguments[5]:42;return new s.default(t,e,n,i,o,r)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=o;var r=n(7),s=i(r)},/* 27 */
/***/
function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}
// create new right-angled triangle, draw to the given context
function o(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:42,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:42,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:42;return new s.default(t,e,n,i)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=o;var r=n(8),s=i(r)},/* 28 */
/***/
function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}
// create new right-angled triangle, draw to the given context
function o(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:42,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:42,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:24,o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:42;return new s.default(t,e,n,i,o)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=o;var r=n(9),s=i(r)},/* 29 */
/***/
function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}
// create new right-angled triangle, draw to the given context
function o(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:42,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:42,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:40,o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:30;return new s.default(t,e,n,i,o)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=o;var r=n(10),s=i(r)},/* 30 */
/***/
function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}function o(t,e){return new s.default(t,e)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=o;var r=n(1),s=i(r)},/* 31 */
/***/
function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}for(var o=n(13),r=i(o),s=n(12),a=r.default.canvas({id:"bouncing-balls",el:document.getElementById("canvas-container")}),u=a.c,l=a.width,c=a.height,h=(a.id,[]),f=1;f<=10;f++){var d=r.default.circle(u,l/f,c/f,20);h.push(d)}var p={};h.forEach(function(t,e){p["ball-"+e]=new s.Body(t)});var v=new s.Engine(p,{context:u,boundX:!0,boundY:!0});r.default.animate(function(){v.step(),r.default.bgSolid(u),h.forEach(function(t){return t.draw().outline()})})}]);
//# sourceMappingURL=scripts.js.map