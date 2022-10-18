import {
  BufferGeometry,
  Float32BufferAttribute,
  MathUtils,
  Points,
  PointsMaterial,
  Texture,
  Vector3,
} from 'three';
import { BaseObject } from './base-object';

export type GalaxyProperties = {
  starsCount: number;
  globeRadius: number;
  far?: number;
};

export class Galaxy extends BaseObject<GalaxyProperties> {
  protected constructObject() {
    const { starsCount, far = 3000 } = this.properties;
    const radius = 700;
    const stars: number[] = [];
    const vector = new Vector3();

    for (let i = 0; i < starsCount; i++) {
      vector.randomDirection();
      vector.multiplyScalar(MathUtils.randFloat(radius, far / 2));

      stars.push(vector.x, vector.y, vector.z);
    }

    const geometry = new BufferGeometry();
    geometry.setAttribute('position', new Float32BufferAttribute(stars, 3));
    const material = new PointsMaterial({
      color: 0xffffff,
      size: 7,
      map: this.createCanvasTexture(),
      transparent: true,
      depthWrite: false,
    });
    const points = new Points(geometry, material);

    return points;
  }

  private createCanvasTexture() {
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
