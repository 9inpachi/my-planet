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
    landHeight: LandHeight.LevelTwo - 0.75,
  },
];

export const projectsHouses: WithPositionAttributes<HouseProperties>[] = [
  {
    scale: 1.2,
    lat: 48,
    lng: -20,
    landHeight: LandHeight.LevelTwo,
  },
  {
    scale: 1,
    lat: 31,
    lng: -14,
    rotation: 36,
    landHeight: LandHeight.LevelOne,
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
  {
    scale: 1.2,
    lat: 32,
    lng: -6,
    landHeight: LandHeight.LevelOne,
  },
  {
    scale: 1.5,
    lat: 36,
    lng: -6,
    landHeight: LandHeight.LevelOne,
  },
  {
    scale: 1,
    lat: 33,
    lng: -2,
    landHeight: LandHeight.LevelOne,
  },
];

export const projectsBuildings: WithPositionAttributes<BuildingProperties>[] =
  [];

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
