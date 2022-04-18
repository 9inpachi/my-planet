import { AmbientLight, DirectionalLight, Scene } from 'three';
import { colors } from './library/colors';

export class ThreeScene {
  private scene: Scene;

  constructor() {
    this.scene = new Scene();

    this.setupLights();
  }

  private setupLights() {
    const ambientLight = new AmbientLight(colors.ambientLight);
    const directionalLight = new DirectionalLight(colors.directionLight);
    directionalLight.position.set(-10, 10, 10);

    this.scene.add(ambientLight);
    this.scene.add(directionalLight);
  }

  public getScene(): Scene {
    return this.scene;
  }
}
