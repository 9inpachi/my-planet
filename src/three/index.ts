import { update as tweenUpdate } from '@tweenjs/tween.js';
import { Clock } from 'three';
import { ThreeControls } from './controls';
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

  private updateListeners: Set<VoidFunction> = new Set();

  constructor(configuration: ThreeConfiguration) {
    this.threeScene = new ThreeScene();
    this.threeRenderer = new ThreeRenderer(configuration.canvasElement);
    this.threeControls = new ThreeControls(this.threeRenderer);
    this.threeSelector = new ThreeSelector(
      this.threeRenderer,
      this.threeControls,
    );

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
      renderer.render(scene, camera);
      tweenUpdate();
      this.updateListeners.forEach((callback) => callback());
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

  public onUpdate(callback: VoidFunction) {
    this.updateListeners.add(callback);
  }

  public removeUpdateListener(callback: VoidFunction) {
    this.updateListeners.delete(callback);
  }
}
