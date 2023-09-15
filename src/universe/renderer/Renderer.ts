import { Application, Graphics, Sprite } from 'pixi.js';

export class Renderer {
  private readonly pixi: Application;

  constructor(container: HTMLElement) {
    this.pixi = new Application({
      background: 'black',
      antialias: true,
      resizeTo: container,
    });
    container.appendChild(this.pixi.view as HTMLCanvasElement);
  }

  get width() {
    return this.pixi.screen.width;
  }

  get height() {
    return this.pixi.screen.height;
  }

  createSprite(graphics: Graphics, x = 0, y = 0, anchor = 0.5) {
    const texture = this.pixi.renderer.generateTexture(graphics);
    const sprite = Sprite.from(texture);
    sprite.anchor.set(anchor);
    sprite.x = x;
    sprite.y = y;
    this.pixi.stage.addChild(sprite);
    return sprite;
  }
}
