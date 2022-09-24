import { BuildingProperties } from '../../objects/building';
import { HouseProperties } from '../../objects/house';
import { HutProperties } from '../../objects/hut';
import { TreeProperties } from '../../objects/tree';
import { LandHeight } from '../lib/heights';
import { WithPositionAttributes } from '../lib/types';

export const placeholderTrees: WithPositionAttributes<TreeProperties>[] = [
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
];

export const placeholderHouses: WithPositionAttributes<HouseProperties>[] = [
  {
    lat: -16,
    lng: -153,
    rotation: 20,
    landHeight: LandHeight.LevelOne,
  },
];

export const placeholderBuildings: WithPositionAttributes<BuildingProperties>[] =
  [
    {
      scale: 1,
      lat: -37,
      lng: -164,
      rotation: 30,
      landHeight: LandHeight.LevelTwo,
    },
  ];

export const placeholderHuts: WithPositionAttributes<HutProperties>[] = [
  {
    scale: 0.7,
    lat: -1,
    lng: -78,
    landHeight: LandHeight.LevelOne,
  },
];
