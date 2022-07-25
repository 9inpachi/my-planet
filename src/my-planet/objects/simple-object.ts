import { Mesh, Object3D } from 'three';
import { BaseObject } from './base-object';
import { BaseObjectProperties } from './lib/base-object-properties';

export type SimpleObjectProperties = {
  object: Object3D;
};

export class SimpleObject extends BaseObject<SimpleObjectProperties> {
  constructor(object: Object3D, properties?: BaseObjectProperties) {
    super({ ...properties, object });
  }

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
