import { ColorRepresentation, MathUtils, Object3D } from 'three';
import { ICustomObject } from '../../common/lib/icustom-object';
import { FieldOptional, ParameterOptional } from '../../common/lib/types';
import { getPositionFromLatLng } from '../common/utils/coordinates';

export type BaseObjectProperties<T = unknown> = T & {
  scale?: number;
  name?: string;
  color?: ColorRepresentation;
};

// TODO: Switch to using an interface if abstract class reaches its limit.
export abstract class BaseObject<ObjectProperties = unknown>
  implements ICustomObject
{
  protected object: Object3D;
  protected properties: FieldOptional<BaseObjectProperties<ObjectProperties>>;

  protected abstract constructObject(): Object3D;

  // An alternative to using spread syntax for optional parameter is using "T | void".
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
}
