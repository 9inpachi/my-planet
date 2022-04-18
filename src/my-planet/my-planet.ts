import {
  Mesh,
  MeshLambertMaterial,
  SphereGeometry,
} from 'three';
import { Three, ThreeConfiguration } from '../three';

export class MyPlanet {
  private three: Three;

  constructor(configuration: ThreeConfiguration) {
    this.three = new Three(configuration);
    this.three.getScene().add(this.buildBox());
  }

  public static build(configuration: ThreeConfiguration) {
    return new MyPlanet(configuration);
  }

  private buildBox() {
    const geometry = new SphereGeometry(5);
    const material = new MeshLambertMaterial({
      color: 0xfff000,
    });
    const cube = new Mesh(geometry, material);
    cube.position.set(0, 0, 0);
    cube.name = 'box';

    return cube;
  }
}
