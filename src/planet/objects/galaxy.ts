import { Tween } from '@tweenjs/tween.js';
import {
  BufferGeometry,
  Float32BufferAttribute,
  Group,
  MathUtils,
  Object3D,
  Points,
  PointsMaterial,
  Texture,
  Vector3,
} from 'three';
import { colors } from '../common/lib/colors';
import { BaseObject } from './base-object';

export type GalaxyProperties = {
  starsCount: number;
  // Uses camera position's z-axis so stars aren't constructed inside
  // the camera's radius and don't appear in front of camera.
  startRadius?: number;
  // Uses camera's far plane so stars aren't constructed beyond the visible scene.
  endRadius?: number;
};

export class Galaxy extends BaseObject<GalaxyProperties> {
  protected constructObject() {
    const { starsCount, endRadius = 3000 } = this.properties;
    const groupsCount = 4;
    const galaxy = new Group();
    galaxy.name = 'galaxy';

    // Generating groups of `Points` so that they can be individually
    // rotated in opposite directions (+y/-y) and make movements appear
    // more random. They can be infinitely animated with the
    // `this.animateGalaxy` function.
    for (let i = 0; i < groupsCount; i++) {
      const starsGroup = this.constructStarsGroup(
        starsCount / groupsCount,
        endRadius,
      );
      galaxy.add(starsGroup);
    }

    return galaxy;
  }

  private constructStarsGroup(count: number, endRadius: number) {
    const geometry = new BufferGeometry();
    geometry.setAttribute(
      'position',
      this.constructStarsPositions(count, endRadius),
    );
    const material = new PointsMaterial({
      color: colors.star,
      size: 7,
      map: this.createStarTexture(),
      transparent: true,
      depthWrite: false,
    });
    const points = new Points(geometry, material);
    points.name = 'stars';

    return points;
  }

  private constructStarsPositions(count: number, endRadius = 3000) {
    const radius = (this.properties.startRadius ?? 700) + 50;
    const stars: number[] = [];

    for (let i = 0; i < count; i++) {
      const vector = new Vector3();
      vector.randomDirection();
      vector.multiplyScalar(MathUtils.randFloat(radius, endRadius / 2));

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

  public animateGalaxy() {
    const starsGroups = this.object.children;
    const movementFactor = 0.02;
    const singleIntervalDuration = 1000;

    // Rotates the group infinitely along the y-axis. The animation
    // restarts using recursion every 1000 ms. `delta` decides if the
    // group rotates to the right (+y) or left (-y).
    const animateStarsGroup = (group: Object3D, delta = 1) => {
      const starsTween = new Tween(group.rotation);

      starsTween.to({ y: group.rotation.y + movementFactor * delta });
      starsTween.duration(singleIntervalDuration);
      starsTween.start();

      starsTween.onComplete(() => animateStarsGroup(group, delta));
    };

    for (let i = 0; i < starsGroups.length; i++) {
      animateStarsGroup(starsGroups[i], i % 2 === 0 ? 1 : -1);
    }
  }
}
