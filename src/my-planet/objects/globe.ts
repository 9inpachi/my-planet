import { Mesh, MeshLambertMaterial, SphereGeometry } from 'three';
import { BaseObject } from './base-object';
import { colors } from '../../common/lib/colors';

export type GlobeProperties = {
  size: number;
};

export class Globe extends BaseObject<GlobeProperties> {
  protected constructObject() {
    const { size } = this.properties;
    const geometry = new SphereGeometry(size, size / 2, size / 3);
    const material = new MeshLambertMaterial({ color: colors.earth });
    const mesh = new Mesh(geometry, material);

    mesh.name = 'globe';

    return mesh;
  }

  public getRadius() {
    return this.properties.size;
  }
}
