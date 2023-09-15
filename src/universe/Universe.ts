import { Renderer } from './renderer/Renderer';
import { EquilateralTriangle } from './renderer/graphics/EquilateralTriangle';

export class Universe {
  private readonly renderer: Renderer;
  constructor(container: HTMLElement) {
    this.renderer = new Renderer(container);
    const triangle = this.renderer.createSprite(
      new EquilateralTriangle(
        100,
        { color: 'gray' },
        { color: 'white', width: 3 }
      ),
      this.renderer.width / 2,
      this.renderer.height / 2
    );
    console.log(triangle);
  }
}
