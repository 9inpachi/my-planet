import {
  ConeGeometry,
  MeshLambertMaterial,
  ColorRepresentation,
  Mesh,
} from 'three';
import { colors } from '../../common/library/colors';
import { BaseObject } from './base-object';

export type MountainProperties = {
  size: number;
  height?: number;
  color?: ColorRepresentation;
};

export class Mountain extends BaseObject<MountainProperties> {
  protected constructObject() {
    const { size, color = colors.mountain, height = size } = this.properties;
    const geometry = new ConeGeometry(size, height, 4);
    const material = new MeshLambertMaterial({ color });
    const mesh = new Mesh(geometry, material);

    mesh.name = 'mountain';

    return mesh;
  }
}
