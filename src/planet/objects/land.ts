import {
  ColorRepresentation,
  CylinderGeometry,
  Mesh,
  MeshLambertMaterial,
} from 'three';
import { colors } from '../common/lib/colors';
import { BaseObject } from './base-object';

export type LandProperties = {
  size?: number;
  height?: number;
  sides?: number;
  color?: ColorRepresentation;
};

export class Land extends BaseObject<LandProperties> {
  protected constructObject() {
    const {
      size = 10,
      height = 1,
      sides = 6,
      color = colors.land.green,
    } = this.properties ?? {};
    const geometry = new CylinderGeometry(size, size, height, sides, 1);
    const material = new MeshLambertMaterial({ color });
    const mesh = new Mesh(geometry, material);

    mesh.name = 'land';

    return mesh;
  }
}
