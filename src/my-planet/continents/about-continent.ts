import { Group } from 'three';
import { House, HouseProperties } from '../objects/house';
import { Land, LandProperties } from '../objects/land';
import { BaseContinent } from './base-continent';
import { WithPositionAttributes } from './library/types';

export class AboutContinent extends BaseContinent {
  public constructContinent() {
    const continent = new Group();
    continent.name = 'aboutContinent';

    continent.add(this.getLandsGroup());
    continent.add(this.getHousesGroup());

    return continent;
  }

  private getLandsGroup(): Group {
    const landsValues: WithPositionAttributes<LandProperties>[] = [
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

    return this.getObjectsGroup(Land, 'continentLands', landsValues);
  }

  private getHousesGroup(): Group {
    const housesValues: WithPositionAttributes<HouseProperties>[] = [
      {
        scale: 0.5,
        altitude: 2,
        lat: 10,
        lng: -2,
      },
    ];

    return this.getObjectsGroup(House, 'continentHouses', housesValues);
  }
}
