'use strict';

import Graphic from './Graphic';

export default class Line extends Graphic {
  constructor(ctx, xFrom, yFrom, xTo, yTo) {
    super();
    this.ctx = ctx;
    this.xFrom = xFrom;
    this.yFrom = yFrom;
    this.xTo = xTo;
    this.yTo = yTo;
  }
  /* ****
    DESIGN METHODS
  **** */
  // draw line to canvas
  draw({weight = 2, colour = '#808080'} = {}) {
    this.ctx.beginPath();
    this.ctx.lineWidth = weight;
    this.ctx.moveTo(this.xFrom, this.yFrom);
    this.ctx.lineTo(this.xTo, this.yTo);
    this.ctx.strokeStyle = colour;
    this.ctx.stroke();
    return this;
  }
  /* ****
    DATA METHODS
  **** */
  // get length of line (function is called 'dist()' as 'length' is a reserved word in JS)
  dist() {
    let xDiff = Math.abs(this.xFrom - this.xTo);
    let yDiff = Math.abs(this.yFrom - this.yTo);
    let lineSqr = (xDiff * xDiff) + (yDiff * yDiff);
    return Math.sqrt(lineSqr);
  }
  // get gradient of line
  grad() {
    let xDiff = Math.abs(this.xFrom - this.xTo);
    let yDiff = Math.abs(this.yFrom - this.yTo);
    return yDiff / xDiff;
  }
  // get angle of line relative to x-axis (x-axis imaginery line running parrallel to top of canvas, touching the origin of the line [y of x-axis === this.yFrom])
  xAngle(mode = 'rad') {
    let units = mode.toUpperCase();
    let slope = this.grad();
    if (units === 'RAD' || units === 'R' || units === 'RADIANS') {
      return Math.atan(slope);
    }
    else if (units === 'DEG' || units === 'D' || units === 'DEGREES') {
      let radians = Math.atan(slope);
      return radians * (180 / Math.PI);
    }
    else {
      return {
        status: 'ERROR',
        message: 'the mode you have passed is not recognised, please specify "deg" or "rad"'
      }
    }
  }
  /*  get angle of line relative to y-axis (y-axis imaginery line running parrallel to left of canvas, touching the origin of the line [x of y-axis === this.xFrom])
      calculated by subtracting xAngle from right-angle   */
  yAngle(mode = 'rad') {
    let units = mode.toUpperCase();
    if (units === 'RAD' || units === 'RADS' || units === 'R' || units === 'RADIANS') {
      return (Math.PI / 2) - this.xAngle();
    }
    else if (units === 'DEG' || units === 'DEGS' || units === 'D' || units === 'DEGREES') {
      let radians = (Math.PI / 2) - this.xAngle();
      return radians * (180 / Math.PI);
    }
    else {
      return {
        status: 'ERROR',
        message: 'the mode you have passed is not recognised, please specify "deg" or "rad"'
      }
    }
  }
}