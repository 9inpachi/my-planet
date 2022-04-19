import {
  DirectionalLight,
  Group,
  Mesh,
  MeshLambertMaterial,
  SphereGeometry,
} from 'three';
import { colors } from '../../common/library/colors';
import { BaseObject } from './base-object';

export class Sun extends BaseObject {
  protected build() {
    const group = new Group();
    group.add(this.buildLight(), this.buildSun());
    group.position.set(10, 10, 10);

    return group;
  }

  private buildSun() {
    const sphere = new SphereGeometry(3, 32, 24);
    const material = new MeshLambertMaterial({
      color: colors.sun,
      emissive: colors.sun,
    });
    const mesh = new Mesh(sphere, material);

    return mesh;
  }

  private buildLight() {
    return new DirectionalLight(colors.sun, 0.5);
  }
}
