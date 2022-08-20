import { sRGBEncoding, WebGLRenderer } from 'three';

export class ThreeRenderer {
  private renderer: WebGLRenderer;

  constructor(canvas: HTMLCanvasElement) {
    this.renderer = this.buildRenderer(canvas);
  }

  private buildRenderer(canvas: HTMLCanvasElement) {
    const wrapperElement = canvas.parentElement as HTMLElement;
    const webglRenderer = new WebGLRenderer({
      canvas,
      antialias: true,
      alpha: true,
    });

    webglRenderer.outputEncoding = sRGBEncoding;
    webglRenderer.setPixelRatio(window.devicePixelRatio);
    const updateWebGlRendererSize = () =>
      webglRenderer.setSize(
        this.rendererWidth(wrapperElement),
        this.rendererHeight(wrapperElement),
        false,
      );

    updateWebGlRendererSize();
    window.addEventListener('resize', updateWebGlRendererSize);

    return webglRenderer;
  }

  public getRenderer() {
    return this.renderer;
  }

  private rendererWidth(wrapperElement: HTMLElement) {
    return wrapperElement.offsetWidth > 0
      ? wrapperElement.offsetWidth
      : window.innerWidth;
  }

  private rendererHeight(wrapperElement: HTMLElement) {
    return wrapperElement.offsetHeight > 0
      ? wrapperElement.offsetHeight
      : window.innerWidth;
  }
}
