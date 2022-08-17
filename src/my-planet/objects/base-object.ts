import { MathUtils, Object3D } from 'three';
import { ICustomObject } from '../../common/lib/icustom-object';
import {
  Constructor,
  FieldOptional,
  ParameterOptional,
} from '../../common/lib/types';
import { getPositionFromLatLng } from '../common/utils/coordinates';

export type BaseObjectProperties<T = unknown> = T & {
  scale?: number;
  name?: string;
};

// TODO: Switch to using an interface if abstract class reaches its limit.
export abstract class BaseObject<ObjectProperties = unknown>
  implements ICustomObject
{
  protected object!: Object3D;
  protected properties!: FieldOptional<BaseObjectProperties<ObjectProperties>>;

  protected abstract constructObject(): Object3D;

  // An alternative to using spread syntax for optional parameter is using "T | void".
  constructor(
    ...[properties]: ParameterOptional<BaseObjectProperties<ObjectProperties>>
  ) {
    this.properties = properties as FieldOptional<
      BaseObjectProperties & ObjectProperties
    >;
  }

  // An alternative for making the parameter options using spread syntax is to use "ObjectProperties | void".
  // We use the static `construct` method here for creating the object which is also called a static factory method.
  // The problem with using a constructor is that the fields are not accessible to the methods called in the parent class contructor.
  public static construct<
    ObjectClass extends BaseObject<ObjectProperties>,
    ObjectProperties,
  >(
    this: Constructor<ObjectClass>,
    ...[properties]: ParameterOptional<BaseObjectProperties<ObjectProperties>>
  ) {
    const objectInstance = new this(properties);
    objectInstance.object = objectInstance.constructObject();

    if (objectInstance.properties?.name) {
      objectInstance.object.name = objectInstance.properties.name;
    }
    if (objectInstance.properties?.scale) {
      objectInstance.object.scale.setScalar(objectInstance.properties.scale);
    }

    return objectInstance;
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
