import { Mesh, MeshLambertMaterial, Object3D, SphereGeometry } from 'three';
import { BaseObjectProperties } from './library/base-object-properties';
import { IThreeObject } from './library/ithree-object';

export type GlobeProperties = BaseObjectProperties & {
  size: number;
};

export class Globe implements IThreeObject {
  private object: Object3D;

  constructor(private properties: GlobeProperties) {
    this.object = this.build();
  }

  private build() {
    const geometry = new SphereGeometry(this.properties.size, 32, 16);
    const material = new MeshLambertMaterial({ color: this.properties.color });
    const globe = new Mesh(geometry, material);

    return globe;
  }

  public getObject() {
    return this.object;
  }
}
