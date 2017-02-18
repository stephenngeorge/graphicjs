'use strict';

export default class Circle {
  constructor(ctx, x, y, r) {
    this.ctx = ctx;
    this.x = x;
    this.y = y;
    this.r = r;
  }

  /* ****
    DESIGN METHODS
  **** */
  // draw circle to canvas with fill colour (no stroke)
  draw(fillStyle = '#FFC0CB') {
    this.ctx.beginPath();
    this.ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
    this.ctx.fillStyle = fillStyle;
    this.ctx.fill();
    return this;
  }
  // draw circle to canvas with stroke (no fill)
  outline({ weight = 2, colour = '#808080' } = {}) {
    this.ctx.beginPath();
    this.ctx.arc(this.x, this.y, this.r + (weight / 2), 0, Math.PI * 2);
    this.ctx.lineWidth = weight;
    this.ctx.strokeStyle = colour;
    this.ctx.stroke();
    return this;
  }
}
