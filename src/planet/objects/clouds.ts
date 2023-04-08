import { Tween } from '@tweenjs/tween.js';
import { Group } from 'three';
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
    // TODO: Find a different place to store original clouds.
    clouds.userData.originalClouds = [];

    for (let i = 0; i < cloudsCount; i++) {
      const cloud = this.generateRandomCloud();
      clouds.userData.originalClouds.push(cloud);
      clouds.add(cloud.getObject());
    }

    clouds.name = 'clouds';

    return clouds;
  }

  public animateClouds() {
    const singleIntervalDuration = 1000;
    const maxSpeed = 5;

    for (const cloud of this.object.userData.originalClouds as Cloud[]) {
      const cloudPosition = cloud.getPosition();
      let { lat, lng } = cloudPosition;
      const deltaLat = generateRandomInRange(-maxSpeed, maxSpeed);
      const deltaLng = generateRandomInRange(-maxSpeed, maxSpeed);

      const animateClouds = (cloud: Cloud) => {
        // We store the lat and lng separately because getting it from
        // the object gives a different result since it's calculated.
        const cloudTween = new Tween({ lat, lng });
        lat = lat + deltaLat;
        lng = lng + deltaLng;

        cloudTween.to({ lat, lng });
        cloudTween.duration(singleIntervalDuration);
        cloudTween.onUpdate((position) =>
          cloud.applyLatLng(cloudPosition.altitude, position.lat, position.lng),
        );
        cloudTween.start();

        cloudTween.onComplete(() => animateClouds(cloud));
      };

      animateClouds(cloud);
    }
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
