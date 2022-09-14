import { BuildingProperties } from '../../objects/building';
import { MountainProperties } from '../../objects/mountain';
import { TreeProperties } from '../../objects/tree';
import { LandHeight } from '../lib/heights';
import { WithPositionAttributes } from '../lib/types';

export const lifeMountains: WithPositionAttributes<MountainProperties>[] = [
  {
    size: 15,
    lat: 53,
    lng: 4,
  },
];

export const lifeTrees: WithPositionAttributes<TreeProperties>[] = [
  {
    lat: 33,
    lng: -77,
  },
];

export const lifeBuildings: WithPositionAttributes<BuildingProperties>[] = [
  {
    lat: 21,
    lng: -83,
  },
];
