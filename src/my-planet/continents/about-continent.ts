import { Group, MathUtils, Object3D } from 'three';
import { ICustomObject } from '../../common/library/icustom-object';
import { Land } from '../objects/land';

type AboutContinentProperties = {
  globeRadius: number;
};

type LandValues = {
  size: number;
  height?: number;
  sides?: number;
  lat?: number;
  lng?: number;
  rotation?: number;
};

export class AboutContinent implements ICustomObject {
  private lands: Land[];
  private landsGroup: Object3D;

  constructor(private properties: AboutContinentProperties) {
    this.lands = this.constructLands();
    this.landsGroup = new Group();
    this.lands.forEach((land) => land.addTo(this.landsGroup));
  }

  public getObject() {
    return this.landsGroup;
  }

  public addTo(object: Object3D) {
    object.add(this.landsGroup);
  }

  private constructLands(): Land[] {
    const landsValues: LandValues[] = [
      {
        size: 15,
        height: 3,
        lat: 10,
        lng: 0,
      },
      {
        size: 10,
        height: 2,
        sides: 5,
        lat: 7,
        lng: 8,
        rotation: 40,
      },
      {
        size: 12,
        height: 1.5,
        lat: -2,
        lng: 3,
        rotation: -2,
      },
      {
        size: 10,
        height: 0.5,
        lat: 0,
        lng: -3,
        rotation: 12,
      },
      {
        size: 11,
        height: 0.5,
        lat: -1,
        lng: 13,
      },
    ];

    return landsValues.map(this.constructLand.bind(this));
  }

  private constructLand(landValues: LandValues): Land {
    const { size, height, sides, lat, lng, rotation } = landValues;

    const land = new Land({ size, height, sides });

    lat !== undefined &&
      lng !== undefined &&
      land.applyLatLng(this.properties.globeRadius, lat, lng);

    rotation !== undefined &&
      land.getObject().rotateY(MathUtils.degToRad(rotation));

    return land;
  }
}
