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
  size?: number;
};

export class House extends BaseObject<HouseProperties> {
  protected constructObject() {
    const group = new Group();
    const roof = this.constructRoof(this.properties?.size);
    const base = this.constructBase(this.properties?.size);

    group.add(roof, base);
    group.name = 'house';
    this.properties?.scale && group.scale.setScalar(this.properties.scale);

    return group;
  }

  private constructBase(size = 10) {
    const box = new BoxGeometry(size * 0.7, size / 2, size);
    const material = new MeshLambertMaterial({ color: colors.house.base });
    const mesh = new Mesh(box, material);

    box.translate(0, size / 2 / 2, 0);

    return mesh;
  }

  private constructRoof(size = 10) {
    const [width, height] = [size, size / 3];
    const baseHeight = size / 2;
    const geometry = this.constructRoofGeometry(width, height);
    const material = new MeshLambertMaterial({
      color: colors.house.roof,
      side: DoubleSide,
    });
    const mesh = new Mesh(geometry, material);

    geometry.translate(0, baseHeight + height / 2, 0);

    return mesh;
  }

  private constructRoofGeometry(width: number, height: number) {
    const points = [
      [0, 0],
      [width / 2, height],
      [width, 0],
    ].map((val) => new Vector2(...val));
    const shape = new Shape(points);
    const geometry = new ExtrudeGeometry(shape, {
      depth: width,
    });

    geometry.translate(-width / 2, -height / 2, -width / 2);

    return geometry;
  }
}
