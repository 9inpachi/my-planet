import { LandProperties } from '../../objects/land';
import { MountainProperties } from '../../objects/mountain';
import { TreeProperties } from '../../objects/tree';
import { LandHeight } from '../lib/heights';
import { WithPositionAttributes } from '../lib/types';

export const projectsLands: WithPositionAttributes<LandProperties>[] = [
  {
    size: 15,
    height: 2,
    lat: 70,
    lng: 20,
  },
  {
    size: 12,
    height: 1.5,
    lat: 70,
    lng: 50,
  },
  {
    size: 10,
    height: 1,
    lat: 80,
    lng: 40,
  },
];

export const projectsMountains: WithPositionAttributes<MountainProperties>[] = [
  {
    size: 10,
    lat: 69,
    lng: 21,
    landHeight: LandHeight.LevelTwo,
  },
];

export const projectsTrees: WithPositionAttributes<TreeProperties>[] = [
  {
    scale: 0.7,
    lat: 72,
    lng: 5,
    landHeight: LandHeight.LevelOne,
  },
  {
    scale: 0.5,
    lat: 75,
    lng: 10,
    landHeight: LandHeight.LevelOne,
  },
  {
    scale: 0.5,
    lat: 73,
    lng: 8,
    landHeight: LandHeight.LevelOne,
  },
  {
    scale: 0.6,
    lat: 76,
    lng: 16,
    landHeight: LandHeight.LevelOne,
  },
];
