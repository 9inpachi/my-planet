import { ColorRepresentation, Mesh, Object3D } from 'three';
import { BaseObject } from './base-object';

export type SimpleObjectProperties = {
  object: Object3D;
  color?: ColorRepresentation;
};

export class SimpleObject extends BaseObject<SimpleObjectProperties> {
  protected constructObject(): Object3D {
    const { object, name, color } = this.properties;
    object.name = name ?? object.name;

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
