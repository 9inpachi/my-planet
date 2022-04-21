import { Mesh, MeshLambertMaterial, SphereGeometry } from 'three';
import { BaseObjectProperties } from './library/base-object-properties';
import { BaseObject } from './base-object';
import { colors } from '../../common/library/colors';

export type GlobeProperties = {
  size: number;
};

export class Globe extends BaseObject<GlobeProperties> {
  constructor(protected properties: BaseObjectProperties & GlobeProperties) {
    super(properties);
  }

  protected constructObject() {
    const { size } = this.properties;
    const geometry = new SphereGeometry(size, size * 6, size * 3);
    const material = new MeshLambertMaterial({ color: colors.earth });
    const globe = new Mesh(geometry, material);

    return globe;
  }
}
