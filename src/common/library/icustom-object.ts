import { Object3D } from 'three';

export interface ICustomObject {
  getObject(): Object3D;
  addTo(object: Object3D): void;
}
