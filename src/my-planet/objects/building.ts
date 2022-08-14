import { BoxGeometry, Group, Mesh, MeshLambertMaterial } from 'three';
import { colors } from '../../common/lib/colors';
import { BaseObject } from './base-object';

export type BuildingProperties = {
  floors?: number;
  size?: number;
  scale?: number;
};

export class Building extends BaseObject<BuildingProperties> {
  protected constructObject() {
    const building = new Group();
    const { floors = 3, size } = this.properties ?? {};

    for (let floorNum = 0; floorNum < floors; floorNum++) {
      const floor = this.constructFloor(floorNum, size);
      building.add(floor);
    }
    for (let floorNum = 0; floorNum < floors - 1; floorNum++) {
      const split = this.constructSplit(floorNum, size);
      building.add(split);
    }

    building.name = 'building';
    this.properties?.scale && building.scale.setScalar(this.properties.scale);

    return building;
  }

  private constructFloor(floor: number, size = 10) {
    const box = new BoxGeometry(size, size, size);
    const material = new MeshLambertMaterial({ color: colors.building.floor });
    const mesh = new Mesh(box, material);

    const baseFloorHeight = size / 2;
    const splitHeight = this.getSplitHeight(size);
    box.translate(0, baseFloorHeight + floor * (size + splitHeight), 0);

    return mesh;
  }

  private constructSplit(floor: number, size = 10) {
    const height = this.getSplitHeight(size);
    const box = new BoxGeometry(size * 0.8, height, size * 0.8);
    const material = new MeshLambertMaterial({ color: colors.building.split });
    const mesh = new Mesh(box, material);

    const baseHeight = height / 2;
    box.translate(0, baseHeight + (floor + 1) * size + floor * height, 0);

    return mesh;
  }

  private getSplitHeight(baseSize: number) {
    return baseSize * 0.1;
  }
}