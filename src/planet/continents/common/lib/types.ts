import { BaseObjectProperties } from '../../../objects/base-object';
import { LandHeight } from './heights';

export type WithPositionAttributes<T> = BaseObjectProperties &
  T & {
    lat: number;
    lng: number;
    rotation?: number;
    landHeight?: LandHeight;
  };
