import { ISPriteTransformer } from "@/types";

export function SpriteTransFormer(
  this: ISPriteTransformer,
  id: string,
  x: number,
  y: number,
  angle: number
) {
  this.id = id;
  this.x = x;
  this.y = y;
  this.angle = angle;
  this.message = null;
  this.moveX = (x) => {
    this.x = this.x + x;
    return this;
  };
  this.moveY = (y) => {
    this.y = this.y + y;
    return this;
  };
  this.move = (x, y) => {
    this.moveX(x).moveY(y);
    return this;
  };
  this.rotate = (angle) => {
    this.angle = this.angle + angle;
    return this;
  };
  this.reset = () => {
    this.x = 0;
    this.y = 0;
    return this;
  };
  this.clearDependency = () => {
    this.message = null;
    return this;
  };
  this.setText = (text) => {
    this.message = text;
    return this;
  };
}
