import {
  BoxGeometry,
  ConeGeometry,
  Group,
  Mesh,
  MeshLambertMaterial,
} from 'three';
import { colors } from '../../common/lib/colors';
import { BaseObject } from './base-object';

export type TreeProperties = {
  scale?: number;
};

export class Tree extends BaseObject<TreeProperties> {
  protected constructObject() {
    const group = new Group();
    const trunk = this.constructTrunk();
    const crown = this.constructCrown();

    group.add(trunk, crown);
    group.name = 'tree';
    this.properties?.scale && group.scale.setScalar(this.properties.scale);

    return group;
  }

  private constructTrunk(trunkHeight = 3) {
    const cube = new BoxGeometry(1, trunkHeight, 1);
    const material = new MeshLambertMaterial({ color: colors.tree.trunk });
    const mesh = new Mesh(cube, material);

    // Translating to make the trunk root the object's center.
    cube.translate(0, trunkHeight / 2, 0);

    return mesh;
  }

  private constructCrown(trunkHeight = 3) {
    const coneHeight = 7;
    const cone = new ConeGeometry(3, coneHeight, 3);
    const material = new MeshLambertMaterial({ color: colors.tree.crown });
    const mesh = new Mesh(cone, material);

    cone.translate(0, trunkHeight + coneHeight / 2, 0);

    return mesh;
  }
}
