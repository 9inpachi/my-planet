import { Object3D } from 'three';
import { BaseObjectProperties } from './library/base-object-properties';

// TODO: Switch to using an interface if abstract class reaches its limit.
export abstract class BaseObject<ObjectProperties = unknown> {
  protected object: Object3D;

  protected abstract constructObject(): Object3D;

  constructor(protected properties?: BaseObjectProperties & ObjectProperties) {
    this.object = this.constructObject();
  }

  public getObject() {
    return this.object;
  }

  public addTo(object: Object3D) {
    object.add(this.object);
  }
}
