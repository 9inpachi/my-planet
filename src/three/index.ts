import { update as tweenUpdate } from '@tweenjs/tween.js';
import { ThreeControls } from './controls';
import { ThreeRenderer } from './renderer';
import { ThreeScene } from './scene';
import { ThreeSelection } from './selection';

export type ThreeConfiguration = {
  canvasElement: HTMLCanvasElement;
};

export class Three {
  private threeScene: ThreeScene;
  private threeRenderer: ThreeRenderer;
  private threeControls: ThreeControls;
  private threeSelection: ThreeSelection;

  constructor(configuration: ThreeConfiguration) {
    this.threeScene = new ThreeScene();
    this.threeRenderer = new ThreeRenderer(configuration.canvasElement);
    this.threeControls = new ThreeControls(this.threeRenderer);
    this.threeSelection = new ThreeSelection(
      this.threeRenderer,
      this.threeControls,
    );

    this.animate();
  }

  private animate() {
    const scene = this.threeScene.getScene();
    const camera = this.threeControls.getCamera();
    const renderer = this.threeRenderer.getRenderer();

    renderer.setAnimationLoop(() => {
      this.threeControls.update();
      renderer.render(scene, camera);
      tweenUpdate();
    });
  }

  public getScene() {
    return this.threeScene.getScene();
  }

  public getControls() {
    return this.threeControls;
  }

  public getSelection() {
    return this.threeSelection;
  }
}
