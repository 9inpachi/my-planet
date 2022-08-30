import { BuildingProperties } from '../../objects/building';
import { HutProperties } from '../../objects/hut';
import { TreeProperties } from '../../objects/tree';
import { LandHeight } from '../lib/heights';
import { WithPositionAttributes } from '../lib/types';

export const workTrees: WithPositionAttributes<TreeProperties>[] = [
  {
    lat: 33,
    lng: -77,
    rotation: 30,
    landHeight: LandHeight.LevelOne,
  },
  {
    scale: 1.5,
    lat: 30,
    lng: -72,
    landHeight: LandHeight.LevelOne,
  },
  {
    scale: 1.2,
    lat: 26,
    lng: -68,
    landHeight: LandHeight.LevelOne,
  },
  {
    lat: 26,
    lng: -73,
    rotation: 60,
    landHeight: LandHeight.LevelOne,
  },
  {
    scale: 0.8,
    lat: 31,
    lng: -67,
    landHeight: LandHeight.LevelOne,
  },
];

export const workBuildings: WithPositionAttributes<BuildingProperties>[] = [
  {
    lat: 21,
    lng: -83,
    rotation: 65,
    landHeight: LandHeight.LevelTwo,
    floors: 2,
  },
  {
    lat: 16,
    lng: -73,
    rotation: 65,
    landHeight: LandHeight.LevelTwo,
  },
];

export const workHuts: WithPositionAttributes<HutProperties>[] = [
  {
    scale: 0.7,
    lat: -1,
    lng: -78,
    landHeight: LandHeight.LevelOne,
  },
  {
    lat: 1,
    lng: -84,
    landHeight: LandHeight.LevelOne,
  },
  {
    lat: 7,
    lng: -94,
    landHeight: LandHeight.LevelOne,
  },
];
