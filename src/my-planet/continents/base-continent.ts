import { Group, MathUtils, Object3D } from 'three';
import { ICustomObject } from '../../common/library/icustom-object';
import { Constructor } from '../../common/library/types';
import { BaseObject } from '../objects/base-object';
import { House, HouseProperties } from '../objects/house';
import { Land, LandProperties } from '../objects/land';
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

  protected constructObject<T, O extends BaseObject<T>>(
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

  protected getLands(
    attributes: WithPositionAttributes<LandProperties>[],
  ): Group {
    const landsGroup = new Group();
    landsGroup.name = 'continentLands';

    attributes.forEach((landAttributes) => {
      const land = this.constructObject(Land, landAttributes);
      landsGroup.add(land.getObject());
    });

    return landsGroup;
  }

  protected getHouses(
    attributes: WithPositionAttributes<HouseProperties>[],
  ): Group {
    const housesGroup = new Group();
    housesGroup.name = 'continentHouses';

    attributes.forEach((houseAttributes) => {
      const house = this.constructObject(House, houseAttributes);
      housesGroup.add(house.getObject());
    });

    return housesGroup;
  }
}
