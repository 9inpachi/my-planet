import { Easing, Tween, update as tweenUpdate } from '@tweenjs/tween.js';
import { Object3D, Quaternion, Vector3 } from 'three';
import { IUpdatable } from './common/lib/iupdatable';

export type TweenOptions = {
  duration?: number;
  easing?: typeof Easing.Linear.None;
};

export class ThreeAnimator implements IUpdatable {
  public update() {
    tweenUpdate();
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
  }
}
