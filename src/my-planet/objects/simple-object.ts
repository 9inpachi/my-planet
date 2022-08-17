import { Mesh, Object3D } from 'three';
import { BaseObject } from './base-object';

export type SimpleObjectProperties = {
  object: Object3D;
};

export class SimpleObject extends BaseObject<SimpleObjectProperties> {
  protected constructObject(): Object3D {
    const { object, name, color } = this.properties;

    if (name) {
      object.name = name;
    }

    if (color) {
      object.traverse((child) => {
        if (child instanceof Mesh && 'color' in child.material) {
          child.material.color = color;
        }
      });
    }

    return object;
  }
}
