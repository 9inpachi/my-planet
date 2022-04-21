import { Object3D } from 'three';
import { BaseObjectProperties } from './library/base-object-properties';

// TODO: Switch to using an interface if abstract class reaches its limit.
export abstract class BaseObject<ObjectProperties = unknown> {
  protected object: Object3D;
  protected properties: FieldOptional<BaseObjectProperties & ObjectProperties>;

  protected abstract constructObject(): Object3D;

  // An alternative to using spread syntax for optional parameter is using "T | void".
  constructor(
    ...[properties]: ParameterOptional<BaseObjectProperties & ObjectProperties>
  ) {
    this.properties = properties as FieldOptional<
      BaseObjectProperties & ObjectProperties
    >;

    this.object = this.constructObject();

    if (this.properties?.name) {
      this.object.name = this.properties.name;
    }
  }

  public getObject() {
    return this.object;
  }

  public addTo(object: Object3D) {
    object.add(this.object);
  }
}
