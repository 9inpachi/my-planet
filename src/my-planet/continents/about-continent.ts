import { Group, Object3D } from 'three';
import { ICustomObject } from '../../common/library/icustom-object';
import { Land } from '../objects/land';

type AboutContinentProperties = {
  globeRadius: number;
};

export class AboutContinent implements ICustomObject {
  private lands: Land[];
  private landsGroup: Object3D;

  constructor(properties: AboutContinentProperties) {
    this.lands = [];
    this.lands.push(new Land({ size: 10 }));
    this.lands.push(new Land({ size: 10 }));
    this.lands.push(new Land({ size: 15, height: 10 }));
    this.lands[0].applyLatLng(properties.globeRadius, 20, 25);
    this.lands[1].applyLatLng(properties.globeRadius, 20, 15);
    this.lands[2].applyLatLng(properties.globeRadius, 45, 25);

    this.landsGroup = new Group();

    this.lands.forEach((land) => land.addTo(this.landsGroup));
  }

  public getObject() {
    return this.landsGroup;
  }

  public addTo(object: Object3D) {
    object.add(this.landsGroup);
  }
}
