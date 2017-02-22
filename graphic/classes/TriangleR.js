'use strict';

import Graphic from './Graphic';

// RIGHT-ANGLE TRIANGLE
export default class TraingleR extends Graphic {
  constructor(ctx, xPos, yPos, base, height) {
    super();
    this.ctx = ctx;
    this.xPos = xPos;
    this.yPos = yPos;
    this.base = base;
    this.height = height;
  }
  /* ****
    DESIGN METHODS
  **** */
  // draw triangle to canvas with fill colour (no stroke)
  draw(fillStyle = '#FFC0CB') {
    this.ctx.beginPath();
    this.ctx.moveTo(this.xPos, this.yPos);
    this.ctx.lineTo(this.xPos, this.yPos + this.height);
    this.ctx.lineTo(this.xPos + this.base, this.yPos + this.height);
    this.ctx.fillStyle = fillStyle;
    this.ctx.fill();
    return this;
  }
  // draw triangle to canvas with stroke (no fill)
  outline({weight = 2, colour = '#808080'} = {}) {
    this.ctx.beginPath();
    this.ctx.moveTo(this.xPos, this.yPos);
    this.ctx.lineTo(this.xPos, this.yPos + this.height);
    this.ctx.lineTo(this.xPos + this.base, this.yPos + this.height);
    this.ctx.lineWidth = weight;
    this.ctx.strokeStyle = colour;
    this.ctx.closePath();
    this.ctx.stroke();
    return this;
  }
  /* ****
    DATA METHODS
  **** */
  // get the length of the triangle's hypotenuse
  hyp() {
    return Math.sqrt((this.base * this.base) + (this.height * this.height));
  }
  // get area of the triangle
  area() {
    return (this.height * this.base) * .5;
  }
  // get the perimeter of the triangle
  perim() {
    return this.base + this.height + this.hyp();
  }
  // get the three angels of the triangle, returned as an array
  angles(mode = 'rad') {
    let units = mode.toUpperCase();
    let rightAngle = '', firstAngle = '', secondAngle = '';
    if (units === 'RAD' || units === 'RADS' || units === 'R' || units === 'RADIANS') {
      rightAngle = Math.PI / 2;
      firstAngle = Math.asin(this.base / this.hyp());
      secondAngle = Math.asin(this.height / this.hyp());
    }
    else if (units === 'DEG' || units === 'DEGS' || units === 'D' || units === 'DEGREES') {
      rightAngle = (Math.PI / 2) * (180 / Math.PI);
      firstAngle = (Math.asin(this.base / this.hyp()) * (180 / Math.PI));
      secondAngle = (Math.asin(this.height / this.hyp()) * (180 / Math.PI));
    }
    else {
      return {
        status: 'ERROR',
        message: 'the mode you have passed is not recognised, please specify "deg" or "rad"'
      }
    }
    return [rightAngle, firstAngle, secondAngle];
    }
}