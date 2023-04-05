import {
  BoxGeometry,
  ColorRepresentation,
  Group,
  Mesh,
  MeshLambertMaterial,
} from 'three';
import { colors } from '../common/lib/colors';
import { BaseObject } from './base-object';

export type BuildingProperties = {
  floors?: number;
  size?: number;
  floorColor?: ColorRepresentation;
  splitColor?: ColorRepresentation;
};

export class Building extends BaseObject<BuildingProperties> {
  protected constructObject() {
    const building = new Group();
    const { floors = 3, size = 10 } = this.properties ?? {};

    for (let floorNum = 0; floorNum < floors; floorNum++) {
      const floor = this.constructFloor(floorNum, size);
      const split = this.constructSplit(floorNum, size);
      building.add(floor, split);
    }

    building.name = 'building';

    return building;
  }

  private constructFloor(floor: number, size: number) {
    const box = new BoxGeometry(size, size, size);
    const material = new MeshLambertMaterial({
      color: this.properties?.floorColor ?? colors.building.floor,
    });
    const mesh = new Mesh(box, material);

    const baseFloorHeight = size / 2;
    const splitHeight = this.getSplitHeight(size);
    box.translate(0, baseFloorHeight + floor * (size + splitHeight), 0);

    return mesh;
  }

  private constructSplit(floor: number, size: number) {
    const height = this.getSplitHeight(size);
    const box = new BoxGeometry(size * 0.8, height, size * 0.8);
    const material = new MeshLambertMaterial({
      color: this.properties?.splitColor ?? colors.building.split,
    });
    const mesh = new Mesh(box, material);

    const baseHeight = height / 2;
    // Alternative formula: baseHeight + (floor + 1) * size + floor * height
    box.translate(0, (floor + 1) * (size + height) - baseHeight, 0);

    return mesh;
  }

  private getSplitHeight(baseSize: number) {
    return baseSize * 0.1;
  }
}
