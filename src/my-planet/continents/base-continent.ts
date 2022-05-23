import { Group, MathUtils, Object3D } from 'three';
import { ICustomObject } from '../../common/library/icustom-object';
import { Constructor } from '../../common/library/types';
import { BaseObject } from '../objects/base-object';
import { WithPositionAttributes } from './library/types';

type BaseContinentProperties = {
  globeRadius: number;
  name?: string;
};

export abstract class BaseContinent implements ICustomObject {
  protected continent: Group;

  public abstract constructContinent(): Group;

  constructor(protected properties: BaseContinentProperties) {
    this.continent = this.constructContinent();
  }

  public getObject() {
    return this.continent;
  }

  public addTo(object: Object3D) {
    object.add(this.continent);
  }

  protected constructObject<O extends BaseObject<T>, T>(
    ObjectClass: Constructor<O>,
    attributes: WithPositionAttributes<T>,
  ): O {
    const {
      lat,
      lng,
      rotation,
      altitude = 0,
      ...objectProperties
    } = attributes;
    const object = new ObjectClass({ ...objectProperties });

    object.applyLatLng(this.properties.globeRadius + altitude, lat, lng);
    if (rotation !== undefined) {
      object.getObject().rotateY(MathUtils.degToRad(rotation));
    }

    return object;
  }

  protected getObjectsGroup<O extends BaseObject<T>, T>(
    ObjectClass: Constructor<O>,
    groupName: string,
    attributes: WithPositionAttributes<T>[],
  ): Group {
    const group = new Group();
    group.name = groupName;

    attributes.forEach((objectAttributes) => {
      const object = this.constructObject(ObjectClass, objectAttributes);
      group.add(object.getObject());
    });

    return group;
  }
}
