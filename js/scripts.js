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
var r=n[i]={/******/
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
return t[i].call(r.exports,r,r.exports,e),r.l=!0,r.exports}// webpackBootstrap
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
return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="/",e(e.s=38)}([/* 0 */
/***/
function(t,e,n){"use strict";function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),o=function(){function t(){i(this,t)}return r(t,[{key:"cartesian",/* ****
      TRANSFORMATION METHODS
    **** */
value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=this.ctx.canvas.clientHeight,n=this.ctx.canvas.clientWidth;switch(t){case 0:this.ctx.translate(.5*n,.5*e);break;case 1:this.ctx.translate(0,e);break;case 2:this.ctx.translate(n,e);break;case 3:this.ctx.translate(n,0);break;case 4:break;default:console.log({status:"ERROR",message:"invalid quadrant passed, please specify 0, 1, 2, 3 or 4. See docs for more info"})}return this.ctx.transform(1,0,0,-1,0,0),this}},{key:"centre",value:function(){var t=this.ctx.canvas.clientHeight,e=this.ctx.canvas.clientWidth;return this.ctx.translate(.5*e,.5*t),this}},{key:"rotate",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.units,n=void 0===e?"rad":e,i=t.angle,r=void 0===i?Math.PI/2:i,o=t.code,s=void 0===o?function(){return console.log("rotated by: "+r)}:o,u=n.toUpperCase();return"RAD"===u||"RADS"===u||"R"===u||"RADIANS"===u?(this.ctx.save(),this.ctx.rotate(r),s(),this.ctx.restore(),this):"DEG"===u||"DEGS"===u||"D"===u||"DEGREES"===u?(this.ctx.save(),this.ctx.rotate(r*(Math.PI/180)),s(),this.ctx.restore(),this):(console.log({status:"ERROR",message:'units not recognised, please specify "deg" or "rad"'}),this)}},{key:"boundX",value:function(t,e){return(this.pos.x>=e||this.pos.x<=t)&&(this.vel.x*=-1),this}},{key:"boundY",value:function(t,e){return(this.pos.y>=e||this.pos.y<=t)&&(this.vel.y*=-1),this}}]),t}();e.default=o},/* 1 */
/***/
function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function s(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var u=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),a=n(0),c=i(a),l=function(t){function e(t,n){r(this,e);var i=o(this,(e.__proto__||Object.getPrototypeOf(e)).call(this));return i.x=t,i.y=n,i}
// copy the vector instead of mutating, preserves the original
return s(e,t),u(e,[{key:"copy",value:function(){return new e(this.x,this.y)}},{key:"add",value:function(t){return this.x+=t.x,this.y+=t.y,this}},{key:"sub",value:function(t){return this.x-=t.x,this.y-=t.y,this}},{key:"mult",value:function(t){return this.x*=t,this.y*=t,this}},{key:"div",value:function(t){return this.x/=t,this.y/=t,this}},{key:"mag",value:function(t){var e=Math.sqrt(this.x*this.x+this.y*this.y)*t,n=Math.atan(this.y/this.x);return this.x=Math.cos(n)*e,this.y=Math.sin(n)*e,this}},{key:"_heading",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"rad",e=t.toUpperCase(),n=Math.atan(this.y/this.x);return"RAD"===e||"RADS"===e||"R"===e||"RADIANS"===e||"RADIAN"===e?n:"DEG"===e||"DEGS"===e||"D"===e||"DEGREES"===e||"DEGREE"===e?n*(180/Math.PI):void 0}}]),e}(c.default);e.default=l},/* 2 */
/***/
function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function s(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var u=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),a=n(0),c=i(a),l=n(1),h=i(l),f=function(t){function e(t,n,i,s,u){r(this,e);var a=o(this,(e.__proto__||Object.getPrototypeOf(e)).call(this));return a.ctx=t,a.pos=new h.default(n,i),a.width=s,a.height=u,a}/* ****
    DESIGN METHODS
  **** */
// draw rectangle to canvas with fill colour (no stroke)
return s(e,t),u(e,[{key:"draw",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"#FFC0CB";return this.ctx.fillStyle=t,this.ctx.fillRect(this.pos.x,this.pos.y,this.width,this.height),this}},{key:"outline",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.weight,n=void 0===e?2:e,i=t.colour,r=void 0===i?"#808080":i;return this.ctx.lineWidth=n,this.ctx.strokeStyle=r,this.ctx.strokeRect(this.pos.x,this.pos.y,this.width,this.height),this}},{key:"_area",value:function(){return this.width*this.height}},{key:"_perim",value:function(){return 2*(this.width+this.height)}}]),e}(c.default);e.default=f},/* 3 */
/***/
function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function s(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var u=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),a=n(0),c=i(a),l=n(1),h=i(l),f=function(t){function e(t,n,i,s){r(this,e);var u=o(this,(e.__proto__||Object.getPrototypeOf(e)).call(this));return u.ctx=t,u.string=n,u.pos=new h.default(i,s),u}/* ****
    DESIGN METHODS
  **** */
// set alignment
return s(e,t),u(e,[{key:"align",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"left";return this.ctx.textAlign=t,this}},{key:"baseline",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"bottom";return this.ctx.textBaseline=t,this}},{key:"font",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.size,n=void 0===e?"24px":e,i=t.family,r=void 0===i?"Helvetica":i;return this.ctx.font=n+" "+r,this}},{key:"draw",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"#FFC0CB";return this.ctx.fillStyle=t,this.ctx.fillText(this.string,this.pos.x,this.pos.y),this}},{key:"outline",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.weight,n=void 0===e?2:e,i=t.colour,r=void 0===i?"#808080":i;return this.ctx.lineWidth=n,this.ctx.strokeStyle=r,this.ctx.strokeText(this.string,this.pos.x,this.pos.y),this}}]),e}(c.default);e.default=f},/* 4 */
/***/
function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function s(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var u=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),a=n(0),c=i(a),l=n(16),h=i(l),f=function(t){function e(t,n,i,s,u,a,c){r(this,e);var l=o(this,(e.__proto__||Object.getPrototypeOf(e)).call(this));return l.ctx=t,l.m=n,l.c=i,l.exp=s,l.path=[],l.resolutionX=u,l.resolutionY=a,l.mode=c,l}return s(e,t),u(e,[{key:"calc",value:function(){for(var t=this.ctx.canvas.width,e=(this.ctx.canvas.height,"cartesian"===this.mode?.5*-t:0),n="cartesian"===this.mode?.5*t:t,i=e;i<n;i++){var r=(this.m*Math.pow(i,this.exp)+this.c)*this.resolutionY;this.path.push((0,h.default)(this.ctx,i*this.resolutionX,r).draw())}return this}},{key:"draw",value:function(){for(var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"#808080",e=0;e<this.path.length-1;e++)this.ctx.beginPath(),this.ctx.moveTo(this.path[e].pos.x,this.path[e].pos.y),this.ctx.lineTo(this.path[e+1].pos.x,this.path[e+1].pos.y),this.ctx.strokStyle=t,this.ctx.stroke();return this}}]),e}(c.default);e.default=f},/* 5 */
/***/
function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function s(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var u=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),a=n(0),c=i(a),l=n(1),h=i(l),f=function(t){function e(t,n,i,s,u,a,c,l,f){r(this,e);var d=o(this,(e.__proto__||Object.getPrototypeOf(e)).call(this));return d.ctx=t,d.start=new h.default(n,i),d.ctrlPoint1=new h.default(s,u),d.ctrlPoint2=new h.default(a,c),d.end=new h.default(l,f),d}/* ****
    DESIGN METHODS
  **** */
// draw bezier curved line (2 anchor points...see 'Curve' class for one anchor point)
return s(e,t),u(e,[{key:"draw",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.weight,n=void 0===e?2:e,i=t.colour,r=void 0===i?"#808080":i;return this.ctx.beginPath(),this.ctx.lineWidth=n,this.ctx.moveTo(this.start.x,this.start.y),this.ctx.bezierCurveTo(this.ctrlPoint1.x,this.ctrlPoint1.y,this.ctrlPoint2.x,this.ctrlPoint2.y,this.end.x,this.end.y),this.ctx.strokeStyle=r,this.ctx.stroke(),this}}]),e}(c.default);e.default=f},/* 6 */
/***/
function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function s(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var u=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),a=n(0),c=i(a),l=n(1),h=i(l),f=function(t){function e(t,n,i,s){r(this,e);var u=o(this,(e.__proto__||Object.getPrototypeOf(e)).call(this));return u.ctx=t,u.pos=new h.default(n,i),u.r=s,u}/* ****
    DESIGN METHODS
  **** */
// draw circle to canvas with fill colour (no stroke)
return s(e,t),u(e,[{key:"draw",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"#FFC0CB";return this.ctx.beginPath(),this.ctx.arc(this.pos.x,this.pos.y,this.r,0,2*Math.PI),this.ctx.fillStyle=t,this.ctx.fill(),this}},{key:"outline",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.weight,n=void 0===e?2:e,i=t.colour,r=void 0===i?"#808080":i;return this.ctx.beginPath(),this.ctx.arc(this.pos.x,this.pos.y,this.r,0,2*Math.PI),this.ctx.lineWidth=n,this.ctx.strokeStyle=r,this.ctx.stroke(),this}},{key:"_area",value:function(){return Math.PI*(this.r*this.r)}},{key:"_circumf",value:function(){return Math.PI*this.r*2}}]),e}(c.default);e.default=f},/* 7 */
/***/
function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function s(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var u=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),a=n(0),c=i(a),l=n(1),h=i(l),f=function(t){function e(t,n,i,s,u,a,c){r(this,e);var l=o(this,(e.__proto__||Object.getPrototypeOf(e)).call(this));return l.ctx=t,l.start=new h.default(n,i),l.ctrlPoint=new h.default(s,u),l.end=new h.default(a,c),l}/* ****
    DESIGN METHODS
  **** */
// draw bezier curved line (2 anchor points...see 'Curve' class for one anchor point)
return s(e,t),u(e,[{key:"draw",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.weight,n=void 0===e?2:e,i=t.colour,r=void 0===i?"#808080":i;return this.ctx.beginPath(),this.ctx.lineWidth=n,this.ctx.moveTo(this.start.x,this.start.y),this.ctx.quadraticCurveTo(this.ctrlPoint.x,this.ctrlPoint.y,this.end.x,this.end.y),this.ctx.strokeStyle=r,this.ctx.stroke(),this}}]),e}(c.default);e.default=f},/* 8 */
/***/
function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function s(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var u=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),a=n(0),c=i(a),l=n(1),h=i(l),f=function(t){function e(t,n,i,s,u){r(this,e);var a=o(this,(e.__proto__||Object.getPrototypeOf(e)).call(this));return a.ctx=t,a.start=new h.default(n,i),a.end=new h.default(s,u),a}/* ****
    DESIGN METHODS
  **** */
// draw line to canvas
return s(e,t),u(e,[{key:"draw",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.weight,n=void 0===e?2:e,i=t.colour,r=void 0===i?"#808080":i;return this.ctx.beginPath(),this.ctx.lineWidth=n,this.ctx.moveTo(this.start.x,this.start.y),this.ctx.lineTo(this.end.x,this.end.y),this.ctx.strokeStyle=r,this.ctx.stroke(),this}},{key:"_dist",value:function(){var t=Math.abs(this.start.x-this.end.x),e=Math.abs(this.start.y-this.end.y),n=t*t+e*e;return Math.sqrt(n)}},{key:"_grad",value:function(){var t=Math.abs(this.start.x-this.end.x),e=Math.abs(this.start.y-this.end.y);return e/t}},{key:"_xAngle",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"rad",e=t.toUpperCase(),n=this._grad();if("RAD"===e||"R"===e||"RADIANS"===e)return Math.atan(n);if("DEG"===e||"D"===e||"DEGREES"===e){var i=Math.atan(n);return i*(180/Math.PI)}return{status:"ERROR",message:'the mode you have passed is not recognised, please specify "deg" or "rad"'}}},{key:"_yAngle",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"rad",e=t.toUpperCase();if("RAD"===e||"RADS"===e||"R"===e||"RADIANS"===e)return Math.PI/2-this._xAngle();if("DEG"===e||"DEGS"===e||"D"===e||"DEGREES"===e){var n=Math.PI/2-this._xAngle();return n*(180/Math.PI)}return{status:"ERROR",message:'the mode you have passed is not recognised, please specify "deg" or "rad"'}}}]),e}(c.default);e.default=f},/* 9 */
/***/
function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function s(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var u=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),a=n(0),c=i(a),l=n(1),h=i(l),f=n(15),d=i(f),p=function(t){function e(t,n,i){r(this,e);var s=o(this,(e.__proto__||Object.getPrototypeOf(e)).call(this));return s.ctx=t,s.pos=new h.default(n,i),s}/* ****
    DESIGN METHODS
  **** */
// draw point (1 pixel of colour)
return s(e,t),u(e,[{key:"draw",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"#808080";return this.ctx.fillStyle=t,this.ctx.fillRect(this.pos.x,this.pos.y,1,1),this}},{key:"spotlight",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"rgba(255, 255, 255, .5)";return(0,d.default)(this.ctx,this.pos.x,this.pos.y,4).outline({weight:1,colour:t}),this}}]),e}(c.default);e.default=p},/* 10 */
/***/
function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function s(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var u=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),a=n(0),c=i(a),l=n(1),h=i(l),f=function(t){function e(t,n,i,s,u,a){r(this,e);var c=o(this,(e.__proto__||Object.getPrototypeOf(e)).call(this));return c.ctx=t,c.pos=new h.default(n,i),c.r=s,c.angle=u,c.size=a,c}/* ****
    DESIGN METHODS
  **** */
return s(e,t),u(e,[{key:"draw",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"#FFC0CB",e=Math.cos(this.angle)*this.r,n=Math.sin(this.angle)*this.r;return this.ctx.beginPath(),this.ctx.moveTo(this.pos.x,this.pos.y),this.ctx.lineTo(e,n),this.ctx.arc(this.pos.x,this.pos.y,this.r,this.angle,this.angle+this.size),this.ctx.moveTo(0,0),this.ctx.save(),this.ctx.rotate(this.angle+this.size-Math.PI/2),this.ctx.lineTo(this.pos.x,this.r),this.ctx.fillStyle=t,this.ctx.fill(),this.ctx.restore(),this}},{key:"outline",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.weight,n=void 0===e?3:e,i=t.colour,r=void 0===i?"#808080":i,o=Math.cos(this.angle)*this.r,s=Math.sin(this.angle)*this.r;return this.ctx.beginPath(),this.ctx.moveTo(this.pos.x,this.pos.y),this.ctx.lineTo(o,s),this.ctx.arc(this.pos.x,this.pos.y,this.r,this.angle,this.angle+this.size),this.ctx.moveTo(0,0),this.ctx.save(),this.ctx.rotate(this.angle+this.size-Math.PI/2),this.ctx.lineTo(this.pos.x,this.r),this.ctx.lineWidth=n,this.ctx.strokeStyle=r,this.ctx.stroke(),this.ctx.restore(),this}}]),e}(c.default);e.default=f},/* 11 */
/***/
function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function s(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var u=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),a=n(0),c=i(a),l=n(1),h=i(l),f=function(t){function e(t,n,i,s,u,a){r(this,e);var c=o(this,(e.__proto__||Object.getPrototypeOf(e)).call(this));return c.ctx=t,c.pos=new h.default(n,i),c.r=s,c.angle=u,c.endAngle=2*Math.asin(c.chord/(2*c.r)),c.chord=a,c.dir=!1,c.chord>2*c.r&&console.log({status:"ERROR",message:"mathematical problems - chord length (final argument), cannot exceed diameter (radius * 2). Consult docs for more information"}),c}/* ****
    DESIGN METHODS
  **** */
// set optional arc 'counterclockwise' parameter to opposite boolean, arc will be drawn in opposite direction;
// MUST BE CALLED BEFORE OTHER DESIGN METHODS
return s(e,t),u(e,[{key:"invert",value:function(){return this.dir=!this.dir,this}},{key:"draw",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"#FFC0CB";return this.ctx.beginPath(),this.ctx.arc(this.pos.x+this.r,this.pos.y,this.r,this.angle,this.angle+this.endAngle,this.dir),this.ctx.fillStyle=t,this.ctx.fill(),this}},{key:"outline",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.weight,n=void 0===e?2:e,i=t.colour,r=void 0===i?"#808080":i,o=2*Math.asin(this.chord/(2*this.r));return this.ctx.beginPath(),this.ctx.arc(this.pos.x+this.r,this.pos.y,this.r,this.angle,this.angle+o,this.dir),this.ctx.lineWidth=n,this.ctx.strokeStyle=r,this.ctx.stroke(),this}}]),e}(c.default);e.default=f},/* 12 */
/***/
function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function s(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var u=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),a=n(0),c=i(a),l=n(1),h=i(l),f=function(t){function e(t,n,i,s){r(this,e);var u=o(this,(e.__proto__||Object.getPrototypeOf(e)).call(this));return u.ctx=t,u.pos=new h.default(n,i),u.side=s,u.height=Math.sqrt(u.side*u.side-.5*u.side*(.5*u.side)),u}/* ****
    DESIGN METHODS
  **** */
// draw triangle to canvas with fill colour (no stroke)
return s(e,t),u(e,[{key:"draw",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"#FFC0CB";return this.ctx.beginPath(),this.ctx.moveTo(this.pos.x,this.pos.y),this.ctx.lineTo(this.pos.x-.5*this.side,this.pos.y+this.height),this.ctx.lineTo(this.pos.x+.5*this.side,this.pos.y+this.height),this.ctx.fillStyle=t,this.ctx.fill(),this}},{key:"outline",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.weight,n=void 0===e?2:e,i=t.colour,r=void 0===i?"#808080":i;return this.ctx.beginPath(),this.ctx.moveTo(this.pos.x,this.pos.y),this.ctx.lineTo(this.pos.x-.5*this.side,this.pos.y+this.height),this.ctx.lineTo(this.pos.x+.5*this.side,this.pos.y+this.height),this.ctx.lineWidth=n,this.ctx.strokeStyle=r,this.ctx.closePath(),this.ctx.stroke(),this}},{key:"_area",value:function(){return Math.sqrt(3)*(this.side*this.side)*.25}},{key:"_perim",value:function(){return 3*this.side}}]),e}(c.default);e.default=f},/* 13 */
/***/
function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function s(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var u=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),a=n(0),c=i(a),l=n(1),h=i(l),f=function(t){function e(t,n,i,s,u){r(this,e);var a=o(this,(e.__proto__||Object.getPrototypeOf(e)).call(this));return a.ctx=t,a.pos=new h.default(n,i),a.base=s,a.side=u,a.height=Math.sqrt(a.side*a.side-.5*a.base*(.5*a.base)),a}/* ****
    DESIGN METHODS
  **** */
// draw triangle to canvas with fill colour (no stroke)
return s(e,t),u(e,[{key:"draw",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"#FFC0CB";return this.ctx.beginPath(),this.ctx.moveTo(this.pos.x,this.pos.y),this.ctx.lineTo(this.pos.x-.5*this.base,this.pos.y+this.height),this.ctx.lineTo(this.pos.x+.5*this.base,this.pos.y+this.height),this.ctx.fillStyle=t,this.ctx.fill(),this}},{key:"outline",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.weight,n=void 0===e?2:e,i=t.colour,r=void 0===i?"#808080":i;return this.ctx.beginPath(),this.ctx.moveTo(this.pos.x,this.pos.y),this.ctx.lineTo(this.pos.x-.5*this.base,this.pos.y+this.height),this.ctx.lineTo(this.pos.x+.5*this.base,this.pos.y+this.height),this.ctx.lineWidth=n,this.ctx.strokeStyle=r,this.ctx.closePath(),this.ctx.stroke(),this}},{key:"_area",value:function(){return.5*this.base*this.height*.5*2}},{key:"_perim",value:function(){return 2*this.side+this.base}},{key:"_angles",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"rad",e=t.toUpperCase(),n=null,i=null,r=null;if("RAD"===e||"RADS"===e||"R"===e||"RADIANS"===e)n=2*Math.asin(.5*this.base/this.side),i=Math.asin(this.height/this.side),r=i;else{if("DEG"!==e&&"DEGS"!==e&&"D"!==e&&"DEGREES"!==e)return{status:"ERROR",message:'the mode you have passed is not recognised, please specify "deg" or "rad"'};n=Math.asin(.5*this.base/this.side)*(180/Math.PI)*2,i=Math.asin(this.height/this.side)*(180/Math.PI),r=i}return[n,i,r]}}]),e}(c.default);e.default=f},/* 14 */
/***/
function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function s(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var u=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),a=n(0),c=i(a),l=n(1),h=i(l),f=function(t){function e(t,n,i,s,u){r(this,e);var a=o(this,(e.__proto__||Object.getPrototypeOf(e)).call(this));return a.ctx=t,a.pos=new h.default(n,i),a.base=s,a.height=u,a}/* ****
    DESIGN METHODS
  **** */
// draw triangle to canvas with fill colour (no stroke)
return s(e,t),u(e,[{key:"draw",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"#FFC0CB";return this.ctx.beginPath(),this.ctx.moveTo(this.pos.x,this.pos.y),this.ctx.lineTo(this.pos.x,this.pos.y+this.height),this.ctx.lineTo(this.pos.x+this.base,this.pos.y+this.height),this.ctx.fillStyle=t,this.ctx.fill(),this}},{key:"outline",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.weight,n=void 0===e?2:e,i=t.colour,r=void 0===i?"#808080":i;return this.ctx.beginPath(),this.ctx.moveTo(this.pos.x,this.pos.y),this.ctx.lineTo(this.pos.x,this.pos.y+this.height),this.ctx.lineTo(this.pos.x+this.base,this.pos.y+this.height),this.ctx.lineWidth=n,this.ctx.strokeStyle=r,this.ctx.closePath(),this.ctx.stroke(),this}},{key:"_hyp",value:function(){return Math.sqrt(this.base*this.base+this.height*this.height)}},{key:"_area",value:function(){return this.height*this.base*.5}},{key:"_perim",value:function(){return this.base+this.height+this.hyp()}},{key:"_angles",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"rad",e=t.toUpperCase(),n=null,i=null,r=null;if("RAD"===e||"RADS"===e||"R"===e||"RADIANS"===e)n=Math.PI/2,i=Math.asin(this.base/this.hyp()),r=Math.asin(this.height/this.hyp());else{if("DEG"!==e&&"DEGS"!==e&&"D"!==e&&"DEGREES"!==e)return{status:"ERROR",message:'the mode you have passed is not recognised, please specify "deg" or "rad"'};n=Math.PI/2*(180/Math.PI),i=Math.asin(this.base/this.hyp())*(180/Math.PI),r=Math.asin(this.height/this.hyp())*(180/Math.PI)}return[n,i,r]}}]),e}(c.default);e.default=f},/* 15 */
/***/
function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}
// create new circle, draw to the given context
function r(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:42,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:42,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:21;return new s.default(t,e,n,i)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=r;var o=n(6),s=i(o)},/* 16 */
/***/
function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}function r(t,e,n){return new s.default(t,e,n)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=r;var o=n(9),s=i(o)},/* 17 */
/***/
function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}var r=n(21),o=i(r),s=n(24),u=i(s),a=n(22),c=i(a),l=n(23),h=i(l),f=n(20),d=i(f),p=n(18),v=i(p),y=n(19),b=i(y),g=n(25),_=i(g),x=n(37),w=i(x),O=n(40),P=i(O),m=n(29),M=i(m),j=n(16),k=i(j),E=n(31),R=i(E),T=n(32),S=i(T),D=n(15),C=i(D),I=n(30),A=i(I),G=n(35),F=i(G),W=n(33),B=i(W),N=n(34),q=i(N),z=n(27),U=i(z),H=n(28),Y=i(H),X=n(36),L=i(X),V=n(26),J=i(V),K=n(0),Q=i(K),Z=n(1),$=i(Z),tt=n(39),et=i(tt),nt=n(8),it=i(nt),rt=n(9),ot=i(rt),st=n(10),ut=i(st),at=n(11),ct=i(at),lt=n(6),ht=i(lt),ft=n(2),dt=i(ft),pt=n(14),vt=i(pt),yt=n(12),bt=i(yt),gt=n(13),_t=i(gt),xt=n(5),wt=i(xt),Ot=n(7),Pt=i(Ot),mt=n(3),Mt=i(mt),jt=n(4),kt=i(jt),Et={animate:o.default,rotate:u.default,aside:c.default,map:d.default,convert:v.default,date:b.default,canvas:h.default,bgSolid:_.default,vector:w.default,grid:P.default,line:M.default,point:k.default,sector:R.default,segment:S.default,circle:C.default,rect:A.default,triangleR:F.default,triangleE:B.default,triangleI:q.default,bezier:U.default,curve:Y.default,text:L.default,lineGraph:J.default,classes:{Graphic:Q.default,Vector:$.default,Grid:et.default,Line:it.default,Point:ot.default,Sector:ut.default,Segment:ct.default,Circle:ht.default,Rect:dt.default,TriangleR:vt.default,TriangleE:bt.default,TriangleI:_t.default,Bezier:wt.default,Curve:Pt.default,Text:Mt.default,LineGraph:kt.default}};t.exports=Et},/* 18 */
/***/
function(t,e,n){"use strict";
// convert degrees in to radians
var i=function(t){return t*(Math.PI/180)},r=function(t){return t*(180/Math.PI)};t.exports={radians:i,degrees:r}},/* 19 */
/***/
function(t,e,n){"use strict";function i(){var t=new Date;return{millis:t.getMilliseconds(),seconds:t.getSeconds(),minutes:t.getMinutes(),hours:t.getHours(),day:t.getDate(),month:t.getMonth()+1,year:t.getFullYear(),today:t}}Object.defineProperty(e,"__esModule",{value:!0}),e.default=i},/* 20 */
/***/
function(t,e,n){"use strict";function i(t,e,n,i,r){
// get the ranges passed in from minimum and maximum values
var o=Math.abs(e-n),s=Math.abs(i-r),u=e<n?e:n,a=i<r?i:r,c=t-u;if(!(c<0)){
// get the passed value as a percentage of the first range
var l=(t-u)/o*100;
// return that same percentage [line20] value of second range
return s/100*l+a}console.error({status:"ERROR",message:"Could not calculate - the initial value must be within the first range"})}Object.defineProperty(e,"__esModule",{value:!0}),e.default=i},/* 21 */
/***/
function(t,e,n){"use strict";function i(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:60,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,i=0;return new Promise(function(r,o){var s=setInterval(function(){t(),i++,i===n&&(clearInterval(s),r(i)),18e5===i&&o({status:"ANIMATION STOPPED",message:"animation exceeded maximum length (30 mins), if you require a longer interval please consult the docs"})},1e3/e)})}Object.defineProperty(e,"__esModule",{value:!0}),e.default=i},/* 22 */
/***/
function(t,e,n){"use strict";function i(t,e){return new Promise(function(n,i){t.save(),e(),t.restore(),n({status:"RESOLVED",message:"aside completed"})})}Object.defineProperty(e,"__esModule",{value:!0}),e.default=i},/* 23 */
/***/
function(t,e,n){"use strict";function i(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.width,n=void 0===e?600:e,i=t.height,r=void 0===i?400:i,o=t.id,s=void 0===o?"canvas":o,u=t.el,a=void 0===u?document.body:u,c=document.createElement("canvas");
// return object with canvas data
// set canvas attributes (defaults declared in function params)
// insert canvas element into DOM, attached to passed element (document body by default)
return c.width=n,c.height=r,c.id=s,a.appendChild(c),{c:c.getContext("2d"),width:c.width,height:c.height,id:c.id}}Object.defineProperty(e,"__esModule",{value:!0}),e.default=i},/* 24 */
/***/
function(t,e,n){"use strict";function i(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.units,i=void 0===n?"rad":n,r=e.angle,o=void 0===r?Math.PI/2:r,s=e.code,u=void 0===s?function(){return console.log("rotated by: "+o)}:s,a=i.toUpperCase();return new Promise(function(e,n){"RAD"===a||"RADS"===a||"R"===a||"RADIANS"===a?(t.save(),t.rotate(o),u(),t.restore(),e("reset transformations")):"DEG"===a||"DEGS"===a||"D"===a||"DEGREES"===a?(t.save(),t.rotate(o*(Math.PI/180)),u(),t.restore(),e("reset transformations")):n({status:"ERROR",message:'units not recognised, please specify "deg" or "rad"'})})}Object.defineProperty(e,"__esModule",{value:!0}),e.default=i},/* 25 */
/***/
function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}
// draw fill rectangle full size of canvas, colour default to light grey
function r(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"#e7e7e7",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"top-left",i=t.canvas.clientWidth,r=t.canvas.clientHeight,o=null;switch(n){case"top-left":o=new s.default(t,0,0,i,r).draw(e);break;case"centre":o=new s.default(t,.5*-i,.5*-r,i,r).draw(e);break;default:console.log({status:"ERROR",message:'the anchor you have passed is not recognised, please select "top-left" or "centre"'})}return o}Object.defineProperty(e,"__esModule",{value:!0}),e.default=r;var o=n(2),s=i(o)},/* 26 */
/***/
function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}function r(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.m,i=void 0===n?1:n,r=e.c,o=void 0===r?0:r,u=e.exp,a=void 0===u?1:u,c=e.resolutionX,l=void 0===c?1:c,h=e.resolutionY,f=void 0===h?1:h,d=e.mode,p=void 0===d?null:d;return new s.default(t,i,o,a,l,f,p)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=r;var o=n(4),s=i(o)},/* 27 */
/***/
function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}
// create new Bezier, draw to the given context
function r(t,e,n,i,r,o,u,a,c){return new s.default(t,e,n,i,r,o,u,a,c)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=r;var o=n(5),s=i(o)},/* 28 */
/***/
function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}
// create new Bezier, draw to the given context
function r(t,e,n,i,r,o,u){return new s.default(t,e,n,i,r,o,u)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=r;var o=n(7),s=i(o)},/* 29 */
/***/
function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}
// create new line, draw to the given context
function r(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:42,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:42,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:126,r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:42;return new s.default(t,e,n,i,r)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=r;var o=n(8),s=i(o)},/* 30 */
/***/
function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}
// create new rectangle, draw to the given context
function r(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:42,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:42,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:42,r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:42;return new s.default(t,e,n,i,r)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=r;var o=n(2),s=i(o)},/* 31 */
/***/
function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:42,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:42,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:21,r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:Math.PI,s=arguments.length>5&&void 0!==arguments[5]?arguments[5]:Math.PI/2;return new o.default(t,e,n,i,r,s)};var r=n(10),o=i(r)},/* 32 */
/***/
function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}function r(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:42,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:42,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:21,r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:Math.PI,o=arguments.length>5&&void 0!==arguments[5]?arguments[5]:42;return new s.default(t,e,n,i,r,o)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=r;var o=n(11),s=i(o)},/* 33 */
/***/
function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}
// create new right-angled triangle, draw to the given context
function r(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:42,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:42,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:42;return new s.default(t,e,n,i)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=r;var o=n(12),s=i(o)},/* 34 */
/***/
function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}
// create new right-angled triangle, draw to the given context
function r(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:42,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:42,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:24,r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:42;return new s.default(t,e,n,i,r)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=r;var o=n(13),s=i(o)},/* 35 */
/***/
function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}
// create new right-angled triangle, draw to the given context
function r(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:42,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:42,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:40,r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:30;return new s.default(t,e,n,i,r)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=r;var o=n(14),s=i(o)},/* 36 */
/***/
function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}function r(t,e,n,i){return new s.default(t,e,n,i)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=r;var o=n(3),s=i(o)},/* 37 */
/***/
function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}function r(t,e){return new s.default(t,e)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=r;var o=n(1),s=i(o)},/* 38 */
/***/
function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}var r=n(17),o=i(r),s=o.default.canvas(),u=s.c;s.width,s.height,s.id;console.log(o.default.grid(u).calc().draw())},/* 39 */
/***/
function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function s(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var u=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),a=n(0),c=i(a),l=function(t){function e(t,n,i){r(this,e);var s=o(this,(e.__proto__||Object.getPrototypeOf(e)).call(this));return s.ctx=t,s.cols=n,s.rows=i,s.grid=[],s}return s(e,t),u(e,[{key:"calc",value:function(){for(var t=this.ctx.canvas.width,e=this.ctx.canvas.height,n=0;n<t/this.cols;n++){for(var i={x:t/(t/this.cols)*n,rows:[],index:n},r=0;r<this.rows;r++)i.rows.push({y:e/(e/this.rows)*r,index:r});this.grid.push(i)}return this}},{key:"draw",value:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.weight,i=void 0===n?1:n,r=e.colour,o=void 0===r?"#808080":r;return this.grid.forEach(function(e){t.ctx.beginPath(),t.ctx.moveTo(e.x,0),t.ctx.lineTo(e.x,t.ctx.canvas.height),t.ctx.strokeStyle=o,t.ctx.lineWidth=i,t.ctx.stroke(),e.rows.forEach(function(n){t.ctx.beginPath(),t.ctx.moveTo(e.x,n.y),t.ctx.lineTo(e.x+t.cols,n.y),t.ctx.strokeStyle=o,t.ctx.lineWidth=i,t.ctx.stroke()})}),this}}]),e}(c.default);e.default=l},/* 40 */
/***/
function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}function r(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.cols,i=void 0===n?20:n,r=e.rows,o=void 0===r?20:r;return new s.default(t,i,o)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=r;var o=n(39),s=i(o)}]);
//# sourceMappingURL=scripts.js.map