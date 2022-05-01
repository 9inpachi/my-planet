export type WithPositionAttributes<T> = T & {
  lat: number;
  lng: number;
  rotation?: number;
  altitude?: number;
};
