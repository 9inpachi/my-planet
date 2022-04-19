import { Three, ThreeConfiguration } from '../three';
import { Globe } from './objects/globe';
import { Sun } from './objects/sun';

export class MyPlanet {
  private three: Three;

  constructor(configuration: ThreeConfiguration) {
    this.three = new Three(configuration);
    const scene = this.three.getScene();

    const globe = new Globe({ color: 0x4d96ff, size: 10 });
    const sun = new Sun();

    scene.add(sun.getObject(), globe.getObject());
  }

  public static build(configuration: ThreeConfiguration) {
    return new MyPlanet(configuration);
  }
}
