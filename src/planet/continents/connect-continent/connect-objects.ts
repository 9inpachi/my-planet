import { BuildingProperties } from '../../objects/building';
import { HouseProperties } from '../../objects/house';
import { HutProperties } from '../../objects/hut';
import { TreeProperties } from '../../objects/tree';
import { LandHeight } from '../common/lib/heights';
import { WithPositionAttributes } from '../common/lib/types';

export const connectTrees: WithPositionAttributes<TreeProperties>[] = [
  {
    scale: 1.2,
    lat: 222,
    lng: -157,
    landHeight: LandHeight.LevelTwo,
  },
  {
    lat: 225,
    lng: -159,
    landHeight: LandHeight.LevelTwo,
  },
  {
    scale: 1.3,
    lat: -126,
    lng: -132,
    landHeight: LandHeight.LevelOne,
  },
  {
    lat: -128,
    lng: -165,
    landHeight: LandHeight.LevelOne,
  },
  {
    scale: 0.9,
    lat: -125,
    lng: -161,
    rotation: 45,
    landHeight: LandHeight.LevelOne,
  },
];

export const connectHouses: WithPositionAttributes<HouseProperties>[] = [
  {
    scale: 1,
    lat: -140,
    lng: -167,
    rotation: 120,
    landHeight: LandHeight.LevelTwo,
  },
];

export const connectBuildings: WithPositionAttributes<BuildingProperties>[] = [
  {
    scale: 1,
    lat: -133,
    lng: -147,
    rotation: 70,
    landHeight: LandHeight.LevelTwo,
    floors: 2,
  },
];

export const connectHuts: WithPositionAttributes<HutProperties>[] = [
  {
    lat: -50,
    lng: -5,
    landHeight: LandHeight.LevelOne,
  },
];
