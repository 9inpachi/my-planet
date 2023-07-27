import { DirectionalLight, Group, Vector3 } from 'three';
import { colors } from '../common/lib/colors';
import { BaseObject } from './base-object';

export type SunProperties = {
  size: number;
  radius?: number;
};

export class Sun extends BaseObject<SunProperties> {
  protected constructObject() {
    const group = new Group();
    const mainSun = new Group();
    const radius = this.properties.radius ?? 120;

    // Not adding sun (sphere) for now.
    mainSun.add(this.constructLight());
    mainSun.position.setScalar(radius);
    group.add(mainSun);
    group.name = 'sun';

    return group;
  }

  // private constructSphere() {
  //   const { size } = this.properties;
  //   const geometry = new SphereGeometry(size, size * 6, size * 3);
  //   const material = new MeshLambertMaterial({
  //     color: colors.sun,
  //     emissive: colors.sun,
  //   });
  //   const mesh = new Mesh(geometry, material);

  //   return mesh;
  // }

  private constructLight() {
    return new DirectionalLight(colors.sun, 2.5);
  }

  public setPosition(position: Vector3) {
    this.object.position.copy(position);
  }
}
