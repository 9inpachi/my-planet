import { Object3D } from 'three';
import { ILoader } from './iloader';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

export class GltfLoader implements ILoader {
  private loader: GLTFLoader;

  constructor() {
    this.loader = new GLTFLoader();
  }

  async loadFile(filePath: string): Promise<Object3D> {
    return new Promise<Object3D>((resolve, reject) => {
      this.loader.load(
        filePath,
        (gltf) => {
          resolve(gltf.scene);
        },
        undefined,
        (error) => {
          reject(error);
        },
      );
    });
  }
}
