import {
  BoxGeometry,
  ConeGeometry,
  Group,
  Mesh,
  MeshLambertMaterial,
  Vector3,
} from 'three';
import { colors } from '../../common/library/colors';
import { BaseObject } from './base-object';

export type TreeProperties = {
  size: number;
};

export class Tree extends BaseObject<TreeProperties> {
  protected build() {
    const group = new Group();
    const trunk = this.buildTrunk();
    group.add(trunk, this.buildCrown(trunk.position));
    group.name = 'tree';

    return group;
  }

  private buildTrunk() {
    const cube = new BoxGeometry(1, 2, 1);
    const material = new MeshLambertMaterial({ color: colors.tree.trunk });
    const mesh = new Mesh(cube, material);
    this.properties?.size && mesh.scale.multiplyScalar(this.properties.size);

    return mesh;
  }

  private buildCrown(trunkPosition: Vector3) {
    const cone = new ConeGeometry(2, 5, 3);
    const material = new MeshLambertMaterial({ color: colors.tree.crown });
    const mesh = new Mesh(cone, material);
    mesh.position.setY(trunkPosition.y + 3);

    return mesh;
  }
}
