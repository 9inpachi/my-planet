import { Three, ThreeConfiguration } from './three';

export class MyPlanet {
  private three: Three;

  constructor(configuration: ThreeConfiguration) {
    this.three = new Three(configuration);
  }
}
