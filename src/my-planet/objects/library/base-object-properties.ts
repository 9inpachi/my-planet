import { ColorRepresentation } from 'three';

export type BaseObjectProperties<T = unknown> = T & {
  name?: string;
  color?: ColorRepresentation;
};
