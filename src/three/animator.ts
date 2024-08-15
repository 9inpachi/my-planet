import { Easing, Group, Tween } from '@tweenjs/tween.js';
import { Object3D, Quaternion, Vector3 } from 'three';
import { IUpdatable } from './common/lib/iupdatable';

export type TweenOptions = {
  duration?: number;
  easing?: typeof Easing.Linear.None;
};

export class ThreeAnimator implements IUpdatable {
  private tweenGroup: Group;

  constructor() {
    this.tweenGroup = new Group();
  }

  public update() {
    this.tweenGroup.update();
  }

  public animateObjectToTarget(
    object: Object3D,
    position?: Vector3,
    quaternion?: Quaternion,
    tweenOptions: TweenOptions = { duration: 1000 },
  ) {
    const tweens: Tween<Vector3 | Quaternion>[] = [];

    if (position) {
      const positionTween = new Tween(object.position).to(position);
      tweens.push(positionTween);
    }
    if (quaternion) {
      const lookAtTween = new Tween(object.quaternion).to(quaternion);
      tweens.push(lookAtTween);
    }

    tweens.forEach((tween) => {
      tweenOptions?.duration && tween.duration(tweenOptions?.duration);
      tweenOptions?.easing && tween.easing(tweenOptions?.easing);

      tween.start();
    });

    this.tweenGroup.add(...tweens);
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public createTween<T extends Record<string, any>>(
    from: T,
    to: Partial<T>,
    tweenOptions?: TweenOptions,
  ) {
    const tween = new Tween(from).to(to);
    tweenOptions?.duration && tween.duration(tweenOptions.duration);
    tweenOptions?.easing && tween.easing(tweenOptions.easing);

    this.tweenGroup.add(tween);

    return tween;
  }

  public removeTween(tween: Tween) {
    this.tweenGroup.remove(tween);
  }
}
