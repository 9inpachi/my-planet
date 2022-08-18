import { Object3D } from 'three';
import { IGeometryLoader } from './igeometry-loader';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { Logger } from '../../common/utils/logger';

export class GltfLoader implements IGeometryLoader {
  private loader: GLTFLoader = new GLTFLoader();
  private static instance: GltfLoader;

  constructor() {
    if (GltfLoader.instance == undefined) {
      GltfLoader.instance = this;
    }

    return GltfLoader.instance;
  }

  async loadFile(filePath: string): Promise<Object3D> {
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

      throw error;
    }
  }
}
