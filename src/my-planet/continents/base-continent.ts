import { GUI } from 'dat.gui';
import { Group, MathUtils, Object3D } from 'three';
import { ICustomObject } from '../../common/lib/icustom-object';
import { Constructor } from '../../common/lib/types';
import { BaseObject } from '../objects/base-object';
import { Building, BuildingProperties } from '../objects/building';
import { House, HouseProperties } from '../objects/house';
import { Hut, HutProperties } from '../objects/hut';
import { Land, LandProperties } from '../objects/land';
import { Mountain, MountainProperties } from '../objects/mountain';
import { SimpleObject } from '../objects/simple-object';
import { Tree, TreeProperties } from '../objects/tree';
import { LandHeight } from './lib/heights';
import { WithPositionAttributes } from './lib/types';

type BaseContinentProperties = {
  globeRadius: number;
};

export abstract class BaseContinent implements ICustomObject {
  protected continent: Group;
  private gui?: GUI;

  public abstract constructContinent(): Group;

  constructor(
    protected properties: BaseContinentProperties,
    private enableControls: boolean = false,
  ) {
    if (enableControls) {
      this.gui = new GUI();
    }

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
      landHeight = LandHeight.LevelOne,
      ...objectProperties
    } = attributes;
    const object = new ObjectClass({ ...objectProperties });

    object.applyLatLng(this.properties.globeRadius + landHeight, lat, lng);
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

    if (this.enableControls) {
      this.constructGuiMenu(group, attributes);
    }

    return group;
  }

  private constructGuiMenu<T>(
    objectsGroup: Group,
    attributes: WithPositionAttributes<T>[],
  ) {
    if (!this.gui) {
      return;
    }

    const folder = this.gui.addFolder(objectsGroup.name);

    objectsGroup.children.forEach((object, index) => {
      const objectFolder = folder.addFolder(object.name + index);

      // BaseObjectProperties (scale)
      objectFolder.add({ scale: object.scale.x }, 'scale').onChange((scale) => {
        object.scale.setScalar(scale);
      });

      // WithPositionAttributes (lat, lng, rotation, landHeight)
      objectFolder
        .addFolder('rotation')
        .add(object.rotation, 'y')
        .name('rotation');

      const locationAttributes = attributes[index];
      const wrapperObject = new SimpleObject({ object });
      ['lat', 'lng', 'landHeight'].forEach((locationAttribute) => {
        objectFolder.add(locationAttributes, locationAttribute).onChange(() => {
          wrapperObject.applyLatLng(
            this.properties.globeRadius + (locationAttributes.landHeight ?? 0),
            locationAttributes.lat,
            locationAttributes.lng,
          );
        });
      });
    });
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

  protected constructHuts(
    groupName: string,
    attributes: WithPositionAttributes<HutProperties>[],
  ) {
    return this.constructObjectsGroup(Hut, groupName, attributes);
  }
}
