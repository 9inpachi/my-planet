import { HouseProperties } from '../../objects/house';
import { TreeProperties } from '../../objects/tree';
import { landHeights } from '../lib/heights';
import { WithPositionAttributes } from '../lib/types';

export const aboutHouses: WithPositionAttributes<HouseProperties>[] = [
  {
    scale: 1.5,
    altitude: landHeights.levelTwo,
    lat: 20,
    lng: 100,
    rotation: 10,
  },
  {
    scale: 1,
    altitude: landHeights.levelOne,
    lat: 40,
    lng: 90,
    rotation: 0,
  },
];

export const aboutTrees: WithPositionAttributes<TreeProperties>[] = [
  {
    scale: 1,
    altitude: landHeights.levelOne,
    lat: 20,
    lng: 90,
  },
  {
    scale: 1.5,
    altitude: landHeights.levelOne,
    lat: 23,
    lng: 88,
  },
  {
    scale: 2,
    altitude: landHeights.levelOne,
    lat: 21,
    lng: 83,
  },
  {
    scale: 1,
    altitude: landHeights.levelOne,
    lat: 40,
    lng: 110,
  },
  {
    scale: 1.5,
    altitude: landHeights.levelOne,
    lat: 40,
    lng: 105,
  },
  {
    scale: 2,
    altitude: landHeights.levelOne,
    lat: 35,
    lng: 110,
  },
];
