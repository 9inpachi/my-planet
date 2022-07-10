import { Object3D } from 'three';
import { ILoader } from './iloader';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { Logger } from '../../common/utils/logger';

export class GltfLoader implements ILoader {
  private loader: GLTFLoader;

  constructor() {
    this.loader = new GLTFLoader();
  }

  async loadFile(filePath: string): Promise<Object3D | undefined> {
    try {
      const gltf = await this.loader.loadAsync(filePath);
      return gltf.scene;
    } catch (error) {
      Logger.getInstance().logError(
        'Failed to load glTF file',
        filePath,
        '\n',
        error,
      );
    }
  }
}
