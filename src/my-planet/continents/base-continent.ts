import { Group, MathUtils, Object3D } from 'three';
import { ICustomObject } from '../../common/lib/icustom-object';
import { Constructor } from '../../common/lib/types';
import { BaseObject } from '../objects/base-object';
import { Building, BuildingProperties } from '../objects/building';
import { House, HouseProperties } from '../objects/house';
import { Land, LandProperties } from '../objects/land';
import { Mountain, MountainProperties } from '../objects/mountain';
import { Tree, TreeProperties } from '../objects/tree';
import { WithPositionAttributes } from './lib/types';

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

  protected constructObjectsGroup<O extends BaseObject<T>, T>(
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

  protected constructLands(
    groupName: string,
    attributes: WithPositionAttributes<LandProperties>[],
  ) {
    return this.constructObjectsGroup(Land, groupName, attributes);
  }

  protected constructTrees(
    groupName: string,
    attributes: WithPositionAttributes<TreeProperties>[],
  ) {
    return this.constructObjectsGroup(Tree, groupName, attributes);
  }

  protected constructMountains(
    groupName: string,
    attributes: WithPositionAttributes<MountainProperties>[],
  ) {
    return this.constructObjectsGroup(Mountain, groupName, attributes);
  }

  protected constructHouses(
    groupName: string,
    attributes: WithPositionAttributes<HouseProperties>[],
  ) {
    return this.constructObjectsGroup(House, groupName, attributes);
  }

  protected constructBuildings(
    groupName: string,
    attributes: WithPositionAttributes<BuildingProperties>[],
  ) {
    return this.constructObjectsGroup(Building, groupName, attributes);
  }
}
