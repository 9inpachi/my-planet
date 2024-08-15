import { Group, Object3D } from 'three';
import { ThreeAnimator } from '../../three/animator';
import { generateRandomInRange } from '../common/util/random-numbers';
import { BaseObject } from './base-object';
import { Cloud } from './cloud';

export type CloudsProperties = {
  orbitRadius: number;
  cloudsCount: number;
  baseCloudSize: number;
};

export class Clouds extends BaseObject<CloudsProperties> {
  protected constructObject() {
    const { cloudsCount } = this.properties;
    const clouds = new Group();

    for (let i = 0; i < cloudsCount; i++) {
      clouds.add(this.generateRandomCloud().getObject());
    }

    clouds.name = 'clouds';

    return clouds;
  }

  /**
   * Clouds can also be animated independently using lat and lng.
   * However, that animation isn't as good as this one which uses
   * rotation. See commit 2c96c7924f140142db049373306721a6df105965.
   */
  public animateClouds(threeAnimator: ThreeAnimator) {
    const clouds = this.object;
    const singleIntervalDuration = 1000;
    const deltaX = generateRandomInRange(0, 100) * 0.001;
    const deltaY = generateRandomInRange(0, 100) * 0.001;
    const deltaZ = generateRandomInRange(0, 100) * 0.001;

    const animateClouds = (clouds: Object3D) => {
      const { x, y, z } = clouds.rotation;
      const targetRotation = { x: x + deltaX, y: y + deltaY, z: z + deltaZ };

      const cloudTween = threeAnimator.createTween(
        clouds.rotation,
        targetRotation,
        { duration: singleIntervalDuration },
      );
      cloudTween.start();

      cloudTween.onComplete(() => {
        threeAnimator.removeTween(cloudTween);
        animateClouds(clouds);
      });
    };

    animateClouds(clouds);
  }

  private generateRandomCloud(): Cloud {
    const { baseCloudSize, orbitRadius } = this.properties;

    // +/-10 size to have more random sized clouds.
    const size = generateRandomInRange(baseCloudSize - 5, baseCloudSize + 5);
    const altitude = generateRandomInRange(orbitRadius, orbitRadius + 20);
    const lat = generateRandomInRange(-90, 90);
    const lng = generateRandomInRange(-180, 180);

    const cloud = new Cloud({ size });
    cloud.applyLatLng(altitude, lat, lng);

    return cloud;
  }
}
