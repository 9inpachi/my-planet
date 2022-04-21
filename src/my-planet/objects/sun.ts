import {
  DirectionalLight,
  Group,
  Mesh,
  MeshLambertMaterial,
  SphereGeometry,
} from 'three';
import { colors } from '../../common/library/colors';
import { BaseObject } from './base-object';

export type SunProperties = {
  size: number;
};

export class Sun extends BaseObject<SunProperties> {
  protected constructObject() {
    const group = new Group();

    group.add(this.constructLight(), this.constructSphere());
    group.position.set(100, 100, 100);

    return group;
  }

  private constructSphere() {
    const { size } = this.properties;
    const geometry = new SphereGeometry(size, size * 6, size * 3);
    const material = new MeshLambertMaterial({
      color: colors.sun,
      emissive: colors.sun,
    });
    const mesh = new Mesh(geometry, material);

    return mesh;
  }

  private constructLight() {
    return new DirectionalLight(colors.sun, 0.5);
  }
}
