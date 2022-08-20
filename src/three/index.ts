import { ThreeControls } from './controls';
import { ThreeRenderer } from './renderer';
import { ThreeScene } from './scene';

export type ThreeConfiguration = {
  canvasElement: HTMLCanvasElement;
};

export class Three {
  private threeScene: ThreeScene;
  private threeRenderer: ThreeRenderer;
  private threeControls: ThreeControls;

  constructor(configuration: ThreeConfiguration) {
    this.threeScene = new ThreeScene();
    this.threeRenderer = new ThreeRenderer(configuration.canvasElement);
    this.threeControls = new ThreeControls(this.threeRenderer);

    this.animate();
  }

  private animate() {
    const scene = this.threeScene.getScene();
    const camera = this.threeControls.getCamera();
    const renderer = this.threeRenderer.getRenderer();

    renderer.setAnimationLoop(() => {
      this.threeControls.update();
      renderer.render(scene, camera);
    });
  }

  public getScene() {
    return this.threeScene.getScene();
  }
}
