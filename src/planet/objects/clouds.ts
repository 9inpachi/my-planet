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

    for (let i = 0; i < cloudsCount; i++) {
      clouds.add(this.generateRandomCloud().getObject());
    }

    clouds.name = 'clouds';

    return clouds;
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
