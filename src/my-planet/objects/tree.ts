import {
  BoxGeometry,
  ConeGeometry,
  Group,
  Mesh,
  MeshLambertMaterial,
} from 'three';
import { colors } from '../../common/library/colors';
import { BaseObject } from './base-object';

export type TreeProperties = {
  scale: number;
};

export class Tree extends BaseObject<TreeProperties> {
  protected constructObject() {
    const group = new Group();
    const trunk = this.constructTrunk();
    const crown = this.constructCrown();

    group.add(trunk, crown);
    group.name = 'tree';
    this.properties?.scale && group.scale.multiplyScalar(this.properties.scale);

    return group;
  }

  private constructTrunk() {
    const cube = new BoxGeometry(1, 3, 1);
    const material = new MeshLambertMaterial({ color: colors.tree.trunk });
    const mesh = new Mesh(cube, material);

    return mesh;
  }

  private constructCrown() {
    const cone = new ConeGeometry(3, 7, 3);
    const material = new MeshLambertMaterial({ color: colors.tree.crown });
    const mesh = new Mesh(cone, material);
    mesh.position.setY(5);

    return mesh;
  }
}
