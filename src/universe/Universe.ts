import { Application } from 'pixi.js';

export class Universe {
  private readonly pixi: Application;
  constructor(container: HTMLElement) {
    this.pixi = new Application({
      background: 'black',
      resizeTo: container,
    });
    container.appendChild(this.pixi.view as HTMLCanvasElement);
  }
}
