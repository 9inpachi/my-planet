import { Object3D } from 'three';

export interface ILoader {
  loadFile(filePath: string): Promise<Object3D>;
}
