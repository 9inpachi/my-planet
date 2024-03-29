import { Clock } from 'three';
import { ThreeAnimator } from './animator';
import { ThreeControls } from './controls';
import { ThreeEventHandler } from './event-handler';
import { ThreeRenderer } from './renderer';
import { ThreeScene } from './scene';
import { ThreeSelector } from './selector';

export type ThreeConfiguration = {
  canvasElement: HTMLCanvasElement;
};

export class Three {
  private threeScene: ThreeScene;
  private threeRenderer: ThreeRenderer;
  private threeControls: ThreeControls;
  private threeSelector: ThreeSelector;
  private threeEventHandler: ThreeEventHandler;
  private threeAnimator: ThreeAnimator;

  constructor(configuration: ThreeConfiguration) {
    this.threeScene = new ThreeScene();
    this.threeRenderer = new ThreeRenderer(configuration.canvasElement);
    this.threeControls = new ThreeControls(this.threeRenderer);
    this.threeSelector = new ThreeSelector(
      this.threeRenderer,
      this.threeControls,
    );
    this.threeEventHandler = new ThreeEventHandler();
    this.threeAnimator = new ThreeAnimator();

    this.animate();
  }

  private animate() {
    const scene = this.threeScene.getScene();
    const camera = this.threeControls.getCamera();
    const renderer = this.threeRenderer.getRenderer();
    const clock = new Clock();

    renderer.setAnimationLoop(() => {
      const deltaTime = clock.getDelta();

      this.threeControls.update(deltaTime);
      this.threeSelector.update();
      this.threeEventHandler.update();
      this.threeAnimator.update();

      renderer.render(scene, camera);
    });
  }

  public getScene() {
    return this.threeScene.getScene();
  }

  public getControls() {
    return this.threeControls;
  }

  public getSelector() {
    return this.threeSelector;
  }

  public getRenderer() {
    return this.threeRenderer;
  }

  public getEventHandler() {
    return this.threeEventHandler;
  }

  public getAnimator() {
    return this.threeAnimator;
  }
}
