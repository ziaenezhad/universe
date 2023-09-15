import { FillStyle, LineStyle, Path } from './Path';

export class EquilateralTriangle extends Path {
  constructor(length: number, fill: FillStyle, line?: LineStyle) {
    super(
      [
        [0, 0],
        [-length / 2, length],
        [length / 2, length],
      ],
      fill,
      line
    );
  }
}
