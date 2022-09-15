import { BuildingProperties } from '../../objects/building';
import { HouseProperties } from '../../objects/house';
import { MountainProperties } from '../../objects/mountain';
import { TreeProperties } from '../../objects/tree';
import { LandHeight } from '../lib/heights';
import { WithPositionAttributes } from '../lib/types';

export const lifeMountains: WithPositionAttributes<MountainProperties>[] = [
  {
    scale: 1.1,
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
    lat: -16,
    lng: -158,
    landHeight: LandHeight.LevelOne,
  },
  {
    scale: 1.3,
    lat: -21,
    lng: -172,
    rotation: 10,
    landHeight: LandHeight.LevelTwo,
  },
  {
    scale: 1.1,
    lat: -23,
    lng: -168,
    rotation: 60,
    landHeight: LandHeight.LevelTwo,
  },
  {
    lat: -21,
    lng: -177,
    rotation: 30,
    landHeight: LandHeight.LevelTwo,
  },
  {
    scale: 1.2,
    lat: -25,
    lng: -174,
    landHeight: LandHeight.LevelTwo,
  },
  {
    scale: 1.5,
    lat: -50,
    lng: -142,
    landHeight: LandHeight.LevelOne,
  },
  {
    scale: 1.2,
    lat: -46,
    lng: -137,
    rotation: 60,
    landHeight: LandHeight.LevelOne,
  },
  {
    lat: -45,
    lng: -144,
    rotation: 15,
    landHeight: LandHeight.LevelOne,
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
    lng: -164,
    rotation: 30,
    landHeight: LandHeight.LevelTwo,
  },
  {
    scale: 0.7,
    lat: -30,
    lng: -168,
    rotation: 30,
    landHeight: LandHeight.LevelTwo,
  },
];
