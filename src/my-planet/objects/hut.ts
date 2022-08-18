import {
  BoxGeometry,
  ConeGeometry,
  Group,
  Mesh,
  MeshLambertMaterial,
} from 'three';
import { colors } from '../../common/lib/colors';
import { BaseObject } from './base-object';

type PillarPosition = {
  x: number;
  z: number;
};

export type HutProperties = {
  size?: number;
};

export class Hut extends BaseObject<HutProperties> {
  protected constructObject() {
    const hut = new Group();
    const roof = this.constructRoof(this.properties?.size);
    const pillars = this.constructPillars(this.properties?.size);

    hut.add(roof, pillars);
    hut.name = 'hut';

    return hut;
  }

  private constructRoof(size = 5) {
    const geometry = new ConeGeometry(size * 1.2, size, 6);
    const material = new MeshLambertMaterial({ color: colors.hut.roof });
    const mesh = new Mesh(geometry, material);
    const pillarHeight = size;

    geometry.translate(0, pillarHeight + size / 2, 0);

    return mesh;
  }

  private constructPillars(size = 5) {
    const pillarsPositions: PillarPosition[] = [
      { x: 2.5, z: 2.5 },
      { x: -2.5, z: 2.5 },
      { x: 2.5, z: -2.5 },
      { x: -2.5, z: -2.5 },
    ];
    const pillars = new Group();
    pillars.name = 'pillars';

    for (const pillarPosition of pillarsPositions) {
      pillars.add(this.constructPillar(pillarPosition, size));
    }

    return pillars;
  }

  private constructPillar(position: PillarPosition, size: number) {
    const [width, height, depth] = [size / 5, size, size / 5];
    const geometry = new BoxGeometry(width, height, depth);
    const material = new MeshLambertMaterial({ color: colors.hut.pillar });
    const mesh = new Mesh(geometry, material);

    geometry.translate(position.x, height / 2, position.z);

    return mesh;
  }
}
