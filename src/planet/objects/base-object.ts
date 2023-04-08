import { MathUtils, Object3D, Vector3 } from 'three';
import { ICustomObject } from '../../three/common/lib/icustom-object';
import { FieldOptional, ParameterOptional } from '../../common/lib/types';
import {
  getLatLngFromPosition,
  getPositionFromLatLng,
} from '../common/util/coordinates';
import { Position } from '../common/lib/position';

export type BaseObjectProperties<T = unknown> = T & {
  scale?: number;
  name?: string;
};

// TODO: Switch to using an interface if abstract class reaches its limit.
export abstract class BaseObject<ObjectProperties = unknown>
  implements ICustomObject
{
  protected object: Object3D;
  protected properties: FieldOptional<BaseObjectProperties<ObjectProperties>>;

  protected abstract constructObject(): Object3D;

  // Note 1: In derived classes, we cannot use object properties in the `this.constructObject` method
  // because the method is called before the derived class constructor.
  // Note 2: An alternative to using spread syntax for optional parameter is using "T | void".
  constructor(
    ...[properties]: ParameterOptional<BaseObjectProperties<ObjectProperties>>
  ) {
    this.properties = properties as FieldOptional<
      BaseObjectProperties & ObjectProperties
    >;
    this.object = this.constructObject();

    if (this.properties?.name) {
      this.object.name = this.properties.name;
    }
    if (this.properties?.scale) {
      this.object.scale.setScalar(this.properties.scale);
    }
  }

  public getObject() {
    return this.object;
  }

  public addTo(object: Object3D) {
    object.add(this.object);
  }

  /**
   * Uses earth's geographic coordinate system. lat = 0 and lng = 0 is the centre of earth.
   */
  public applyLatLng(radius: number, lat: number, lng: number) {
    const positionOnGlobe = getPositionFromLatLng(radius, lat, lng);

    this.object.position.copy(positionOnGlobe);
    this.object.lookAt(0, 0, 0);
    this.object.rotateX(MathUtils.degToRad(-90));
  }

  public getPosition(): Position {
    const origin = new Vector3(0, 0, 0);
    const { lat, lng } = getLatLngFromPosition(origin, this.object.position);

    return { coordinates: this.object.position, lat, lng };
  }
}
