import { Tween } from '@tweenjs/tween.js';
import { Group, Object3D } from 'three';
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

  public animateClouds() {
    const clouds = this.object;
    const singleIntervalDuration = 1000;
    const deltaX = generateRandomInRange(0, 100) * 0.001;
    const deltaY = generateRandomInRange(0, 100) * 0.001;
    const deltaZ = generateRandomInRange(0, 100) * 0.001;

    const animateClouds = (clouds: Object3D) => {
      const cloudTween = new Tween(clouds.rotation);
      const { x, y, z } = clouds.rotation;

      cloudTween.to({ x: x + deltaX, y: y + deltaY, z: z + deltaZ });
      cloudTween.duration(singleIntervalDuration);
      cloudTween.start();

      cloudTween.onComplete(() => animateClouds(clouds));
    };

    animateClouds(clouds);
  }

  private generateRandomCloud(): Cloud {
    const { baseCloudSize, orbitRadius } = this.properties;

    // +/-10 size to have more random sized clouds.
    const size = generateRandomInRange(baseCloudSize - 5, baseCloudSize + 5);
    const altitude = generateRandomInRange(orbitRadius - 10, orbitRadius + 10);
    const lat = generateRandomInRange(-90, 90);
    const lng = generateRandomInRange(-180, 180);

    const cloud = new Cloud({ size });
    cloud.applyLatLng(altitude, lat, lng);

    return cloud;
  }
}
