import { Three, ThreeConfiguration } from '../three';
import { Globe } from './objects/globe';

export class MyPlanet {
  private three: Three;

  constructor(configuration: ThreeConfiguration) {
    this.three = new Three(configuration);

    const globe = new Globe({ color: 0x6BCB77, size: 20 });
    globe.addTo(this.three.getScene());
  }

  public static build(configuration: ThreeConfiguration) {
    return new MyPlanet(configuration);
  }
}
