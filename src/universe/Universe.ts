import { Application } from 'pixi.js';

export class Universe {
  private readonly pixi: Application;
  constructor(container: HTMLElement) {
    this.pixi = new Application({
      background: 'black',
      width: container.clientWidth,
      height: container.clientHeight - 4,
    });
    container.appendChild(this.pixi.view as HTMLCanvasElement);
  }
}
