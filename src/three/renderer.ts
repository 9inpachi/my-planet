import { Renderer, WebGLRenderer } from 'three';

export class ThreeRenderer {
  private renderer: Renderer;

  constructor(canvas: HTMLCanvasElement) {
    this.renderer = this.buildRenderer(canvas);
  }

  private buildRenderer(canvas: HTMLCanvasElement) {
    const webglRenderer = new WebGLRenderer({
      canvas,
      antialias: true,
      alpha: true,
    });

    webglRenderer.setSize(window.innerWidth, window.innerHeight);
    webglRenderer.setPixelRatio(window.devicePixelRatio);

    return webglRenderer;
  }

  public getRenderer() {
    return this.renderer;
  }
}
