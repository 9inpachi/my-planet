import { AmbientLight, DirectionalLight, Scene } from 'three';
import { LIGHT_COLOR } from './constants';

export class ThreeScene {
  private scene: Scene;

  constructor() {
    this.scene = new Scene();
    this.setupLights();
  }

  private setupLights() {
    const ambientLight = new AmbientLight(LIGHT_COLOR, 0.5);
    const directionalLight = new DirectionalLight(LIGHT_COLOR, 0.25);
    directionalLight.position.set(100, 100, 100);

    this.scene.add(ambientLight);
    this.scene.add(directionalLight);
  }

  public getScene(): Scene {
    return this.scene;
  }
}
