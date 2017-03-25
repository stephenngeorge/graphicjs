export default class Engine {

  constructor(bodies, { gravity_x = 0, gravity_y = 3, context = null, boundX = false, boundY = false } = {}) {
    this.bodies = bodies;
    this.gravity_x = gravity_x;
    this.gravity_y = gravity_y;
    this.context = context;
    this.boundX = boundX;
    this.boundY = boundY;
  }

  applyForces(body) {
    const GRAVITY = { x: this.gravity_x, y: this.gravity_y };
    body.entity.pos.x += GRAVITY.x;
    body.entity.pos.y += GRAVITY.y;
    return body;
  }

  restrictX(body) {
    if (body.entity.pos.x >= this.context.canvas.clientWidth - body.size) body.entity.pos.x = this.context.canvas.clientWidth - body.size;
    if (body.entity.pos.x <= 0 + body.size) body.entity.pos.x = 0 + body.size;
  }
  restrictY(body) {
    if (body.entity.pos.y >= this.context.canvas.clientHeight - body.size) body.entity.pos.y = this.context.canvas.clientHeight - body.size;
    if (body.entity.pos.y <= 0 + body.size) body.entity.pos.y = 0 + body.size;
  }

  step() {
    for (let prop in this.bodies) {
      if (!!this.boundX) this.restrictX(this.bodies[prop]);
      if (!!this.boundY) this.restrictY(this.bodies[prop]);
      this.applyForces(this.bodies[prop]);
    }
    return this;
  }

}