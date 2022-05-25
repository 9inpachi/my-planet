import { HouseProperties } from '../../objects/house';
import { LandProperties } from '../../objects/land';
import { TreeProperties } from '../../objects/tree';
import { WithPositionAttributes } from '../library/types';

export const aboutLands: WithPositionAttributes<LandProperties>[] = [
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

export const aboutHouses: WithPositionAttributes<HouseProperties>[] = [
  {
    scale: 0.5,
    altitude: 2,
    lat: 10,
    lng: -2,
  },
];

export const aboutTrees: WithPositionAttributes<TreeProperties>[] = [
  {
    scale: 0.5,
    altitude: 2,
    lat: 10,
    lng: 4,
  },
  {
    scale: 0.7,
    altitude: 2,
    lat: 8,
    lng: 3,
  },
  {
    scale: 1,
    altitude: 2,
    lat: 10,
    lng: 2,
  },
];
