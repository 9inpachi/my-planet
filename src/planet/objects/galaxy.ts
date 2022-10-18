import {
  BufferGeometry,
  Float32BufferAttribute,
  Group,
  MathUtils,
  Points,
  PointsMaterial,
  Texture,
  Vector3,
} from 'three';
import { colors } from '../../common/lib/colors';
import { BaseObject } from './base-object';

export type GalaxyProperties = {
  starsCount: number;
  far?: number;
};

export class Galaxy extends BaseObject<GalaxyProperties> {
  protected constructObject() {
    const geometry = new BufferGeometry();
    geometry.setAttribute('position', this.constructStarsPositions());
    const material = new PointsMaterial({
      color: colors.star,
      size: 7,
      map: this.createStarTexture(),
      transparent: true,
      depthWrite: false,
    });
    const points = new Points(geometry, material);
    points.name = 'stars';

    const galaxy = new Group();
    galaxy.name = 'galaxy';
    galaxy.add(points);

    return galaxy;
  }

  private constructStarsPositions() {
    const { starsCount, far = 3000 } = this.properties;

    const radius = 700;
    const stars: number[] = [];

    for (let i = 0; i < starsCount; i++) {
      const vector = new Vector3();
      vector.randomDirection();
      vector.multiplyScalar(MathUtils.randFloat(radius, far / 2));

      stars.push(vector.x, vector.y, vector.z);
    }

    return new Float32BufferAttribute(stars, 3);
  }

  private createStarTexture() {
    const size = 128;
    const canvas = document.createElement('canvas');
    canvas.width = canvas.height = size;
    const context = canvas.getContext('2d') as CanvasRenderingContext2D;
    const center = size / 2;

    context.beginPath();
    context.arc(center, center, size / 2, 0, 2 * Math.PI, false);
    context.closePath();
    context.fillStyle = '#ffffff';
    context.fill();

    const texture = new Texture(canvas);
    texture.needsUpdate = true;

    return texture;
  }
}
