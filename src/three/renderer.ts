import { sRGBEncoding, WebGLRenderer } from 'three';

export class ThreeRenderer {
  private renderer: WebGLRenderer;

  constructor(canvas: HTMLCanvasElement) {
    this.renderer = this.buildRenderer(canvas);
  }

  private buildRenderer(canvas: HTMLCanvasElement) {
    const webglRenderer = new WebGLRenderer({
      canvas,
      antialias: true,
      alpha: true,
    });

    webglRenderer.outputEncoding = sRGBEncoding;
    webglRenderer.setSize(window.innerWidth, window.innerHeight);
    webglRenderer.setPixelRatio(window.devicePixelRatio);

    return webglRenderer;
  }

  public getRenderer() {
    return this.renderer;
  }
}
