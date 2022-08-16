import { HouseProperties } from '../../objects/house';
import { TreeProperties } from '../../objects/tree';
import { LandHeight } from '../lib/heights';
import { WithPositionAttributes } from '../lib/types';

export const aboutHouses: WithPositionAttributes<HouseProperties>[] = [
  {
    scale: 1.5,
    landHeight: LandHeight.LevelTwo,
    lat: 20,
    lng: 100,
    rotation: 10,
  },
  {
    scale: 1,
    landHeight: LandHeight.LevelOne,
    lat: 40,
    lng: 90,
    rotation: 0,
  },
];

export const aboutTrees: WithPositionAttributes<TreeProperties>[] = [
  {
    scale: 1,
    landHeight: LandHeight.LevelOne,
    lat: 20,
    lng: 90,
  },
  {
    scale: 1.5,
    landHeight: LandHeight.LevelOne,
    lat: 23,
    lng: 88,
  },
  {
    scale: 2,
    landHeight: LandHeight.LevelOne,
    lat: 21,
    lng: 83,
  },
  {
    scale: 1,
    landHeight: LandHeight.LevelOne,
    lat: 40,
    lng: 110,
  },
  {
    scale: 1.5,
    landHeight: LandHeight.LevelOne,
    lat: 40,
    lng: 105,
  },
  {
    scale: 2,
    landHeight: LandHeight.LevelOne,
    lat: 35,
    lng: 110,
  },
];
