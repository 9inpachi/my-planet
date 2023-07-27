import { AmbientLight, Group, Scene } from 'three';
import { colors } from '../planet/common/lib/colors';

export class ThreeScene {
  private scene: Scene;

  constructor() {
    this.scene = new Scene();
    this.setupLights();
  }

  private setupLights() {
    const ambientLight = new AmbientLight(colors.ambientLight, 3);
    const lights = new Group();
    lights.name = 'lights';

    lights.add(ambientLight);
    this.scene.add(lights);
  }

  public getScene(): Scene {
    return this.scene;
  }
}
