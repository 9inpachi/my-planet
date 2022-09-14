import { BuildingProperties } from '../../objects/building';
import { HouseProperties } from '../../objects/house';
import { MountainProperties } from '../../objects/mountain';
import { TreeProperties } from '../../objects/tree';
import { LandHeight } from '../lib/heights';
import { WithPositionAttributes } from '../lib/types';

export const lifeMountains: WithPositionAttributes<MountainProperties>[] = [
  {
    size: 20,
    lat: -29,
    lng: -142,
    rotation: 70,
    height: 15,
    landHeight: LandHeight.LevelOne - 0.75,
  },
];

export const lifeTrees: WithPositionAttributes<TreeProperties>[] = [
  {
    scale: 1.2,
    lat: -11,
    lng: -158,
    landHeight: LandHeight.LevelOne,
  },
  {
    lat: 33,
    lng: -77,
  },
  {
    lat: 33,
    lng: -77,
  },
];

export const lifeHouses: WithPositionAttributes<HouseProperties>[] = [
  {
    lat: -16,
    lng: -153,
    rotation: 20,
    landHeight: LandHeight.LevelOne,
  },
  {
    scale: 0.8,
    lat: -14,
    lng: -163,
    rotation: 45,
    landHeight: LandHeight.LevelOne,
  },
];

export const lifeBuildings: WithPositionAttributes<BuildingProperties>[] = [
  {
    scale: 1,
    lat: -37,
    lng: -166,
    rotation: 30,
    landHeight: LandHeight.LevelTwo,
  },
  {
    scale: 0.9,
    lat: -37,
    lng: -166,
    landHeight: LandHeight.LevelTwo,
    floors: 2,
  },
];
