import {
  BoxGeometry,
  DoubleSide,
  ExtrudeGeometry,
  Group,
  Mesh,
  MeshLambertMaterial,
  Shape,
  Vector2,
} from 'three';
import { colors } from '../../common/library/colors';
import { BaseObject } from './base-object';

export type HouseProperties = {
  scale?: number;
};

export class House extends BaseObject<HouseProperties> {
  protected constructObject() {
    const group = new Group();
    const roof = this.constructRoof();
    const base = this.constructBase();

    group.add(roof, base);

    return group;
  }

  private constructBase() {
    const cylinder = new BoxGeometry(7, 5, 10);
    const material = new MeshLambertMaterial({ color: colors.house.base });
    const mesh = new Mesh(cylinder, material);

    return mesh;
  }

  private constructRoof(size: number = 10) {
    const geometry = this.constructRoofGeometry(size);
    const material = new MeshLambertMaterial({
      color: colors.house.roof,
      side: DoubleSide,
    });
    const mesh = new Mesh(geometry, material);

    mesh.position.setY(4);

    return mesh;
  }

  private constructRoofGeometry(size: number) {
    const [width, height] = [size, size / 3];
    const points = [
      [0, 0],
      [width / 2, height],
      [width, 0],
    ].map((val) => new Vector2(...val));
    const shape = new Shape(points);
    const geometry = new ExtrudeGeometry(shape, {
      depth: size,
    });

    geometry.translate(-width / 2, -height / 2, -width / 2);

    return geometry;
  }
}
