import {
  BackSide,
  Group,
  Mesh,
  MeshLambertMaterial,
  PointLight,
  SphereGeometry,
} from 'three';
import { BaseObject } from './base-object';

export class Sun extends BaseObject {
  protected build() {
    const group = new Group();
    group.add(this.buildPointLight(), this.buildSun());
    group.position.set(15, 15, 15);

    return group;
  }

  private buildSun() {
    const sphere = new SphereGeometry(3, 24, 12);
    const material = new MeshLambertMaterial({ color: 0xfcd900, side: BackSide });

    return new Mesh(sphere, material);
  }

  private buildPointLight() {
    return new PointLight(0xfcd900);
  }
}
