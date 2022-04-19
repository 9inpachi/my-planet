import { Mesh, MeshLambertMaterial, SphereGeometry } from 'three';
import { BaseObjectProperties } from './library/base-object-properties';
import { BaseObject } from './base-object';

export type GlobeProperties = {
  size: number;
};

export class Globe extends BaseObject<GlobeProperties> {
  constructor(protected properties: BaseObjectProperties & GlobeProperties) {
    super(properties);
  }

  protected build() {
    const geometry = new SphereGeometry(this.properties.size, 64, 32);
    const material = new MeshLambertMaterial({ color: this.properties.color });
    const globe = new Mesh(geometry, material);

    return globe;
  }
}
