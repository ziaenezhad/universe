import { Graphics } from 'pixi.js';
export interface FillStyle {
  color?: number | string;
  alpha?: number;
}

export interface LineStyle extends FillStyle {
  width?: number;
}

export class Path extends Graphics {
  constructor(
    points: [x: number, y: number][],
    fill: FillStyle,
    line?: LineStyle
  ) {
    super();
    this.beginFill(fill.color, fill.alpha);
    if (line) this.lineStyle(line.width || 1, line.color, line.alpha);
    const path = [...points];
    this.moveTo(...path.shift()!);
    for (const point of path) {
      this.lineTo(...point);
    }
    if (line) this.closePath();
    this.endFill();
  }
}
