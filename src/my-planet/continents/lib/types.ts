import { LandHeight } from './heights';

export type WithPositionAttributes<T> = T & {
  lat: number;
  lng: number;
  rotation?: number;
  landHeight?: LandHeight;
};
