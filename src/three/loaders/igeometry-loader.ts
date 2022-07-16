import { Object3D } from 'three';

export interface IGeometryLoader {
  loadFile(filePath: string): Promise<Object3D | undefined>;
}
