import { SphereGeometry, MeshLambertMaterial, Mesh, Group } from 'three';
import { colors } from '../common/lib/colors';
import { BaseObject } from './base-object';

export type CloudProperties = {
  size?: number;
};

export class Cloud extends BaseObject<CloudProperties> {
  protected constructObject() {
    const { size = 10 } = this.properties ?? {};
    const cloud = new Group();
    const smallSphereSize = size * 0.75;
    const deltaY = size * 0.25;

    const mainSphere = this.createCloudSphere(size);
    const leftSphere = this.createCloudSphere(smallSphereSize);
    const rightSphere = this.createCloudSphere(smallSphereSize);

    leftSphere.position.set(-smallSphereSize, -deltaY, 0);
    rightSphere.position.set(smallSphereSize, -deltaY, 0);

    cloud.add(mainSphere, leftSphere, rightSphere);
    cloud.name = 'cloud';

    return cloud;
  }

  private createCloudSphere(size: number) {
    const segments = Math.max(8, size / 15);
    const geometry = new SphereGeometry(size, segments, segments);
    const material = new MeshLambertMaterial({ color: colors.cloud });
    const mesh = new Mesh(geometry, material);

    return mesh;
  }
}
