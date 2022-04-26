import {
  ColorRepresentation,
  CylinderGeometry,
  Mesh,
  MeshLambertMaterial,
} from 'three';
import { colors } from '../../common/library/colors';
import { BaseObject } from './base-object';

export type LandProperties = {
  size?: number;
  height?: number;
  color?: ColorRepresentation;
};

export class Land extends BaseObject<LandProperties> {
  protected constructObject() {
    const {
      size = 10,
      height = 1,
      color = colors.land,
    } = this.properties ?? {};

    const geometry = new CylinderGeometry(size, size, height, 5, 1);
    const material = new MeshLambertMaterial({ color });
    const mesh = new Mesh(geometry, material);

    return mesh;
  }
}
