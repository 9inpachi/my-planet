import {
  ConeGeometry,
  MeshLambertMaterial,
  ColorRepresentation,
  Mesh,
} from 'three';
import { colors } from '../../common/lib/colors';
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
    geometry.translate(0, height / 2, 0);

    return mesh;
  }
}
