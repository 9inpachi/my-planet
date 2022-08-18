import { BuildingProperties } from '../../objects/building';
import { HouseProperties } from '../../objects/house';
import { HutProperties } from '../../objects/hut';
import { MountainProperties } from '../../objects/mountain';
import { TreeProperties } from '../../objects/tree';
import { LandHeight } from '../lib/heights';
import { WithPositionAttributes } from '../lib/types';

export const projectsMountains: WithPositionAttributes<MountainProperties>[] = [
  {
    size: 15,
    lat: 53,
    lng: 4,
    rotation: 7,
    landHeight: LandHeight.LevelTwo,
  },
];

export const projectsHouses: WithPositionAttributes<HouseProperties>[] = [
  {
    scale: 1,
    lat: 48,
    lng: -20,
    landHeight: LandHeight.LevelTwo,
  },
];

export const projectsTrees: WithPositionAttributes<TreeProperties>[] = [
  {
    scale: 1,
    lat: 52,
    lng: -12,
    landHeight: LandHeight.LevelTwo,
  },
  {
    scale: 1.2,
    lat: 48,
    lng: -10,
    landHeight: LandHeight.LevelTwo,
  },
];

export const projectsBuildings: WithPositionAttributes<BuildingProperties>[] = [
  {
    floors: 3,
    lat: 32,
    lng: -7,
    landHeight: LandHeight.LevelOne,
  },
  {
    floors: 3,
    scale: 0.7,
    lat: 32,
    lng: -17,
    landHeight: LandHeight.LevelOne,
  },
];

export const projectsHuts: WithPositionAttributes<HutProperties>[] = [
  {
    lat: 40,
    lng: 18,
    landHeight: LandHeight.LevelOne,
  },
  {
    lat: 35,
    lng: 8,
    landHeight: LandHeight.LevelOne,
  },
];
