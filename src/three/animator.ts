import { Easing, Tween, update as tweenUpdate } from '@tweenjs/tween.js';
import { Object3D, Quaternion, Vector3 } from 'three';
import { IUpdatable } from './common/lib/iupdatable';

export class ThreeAnimator implements IUpdatable {
  public update() {
    tweenUpdate();
  }

  public animateObjectToTarget(
    object: Object3D,
    position?: Vector3,
    quaternion?: Quaternion,
    options: { duration?: number; easing?: typeof Easing.Linear.None } = {
      duration: 1000,
    },
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
      options?.duration && tween.duration(options?.duration);
      options?.easing && tween.easing(options?.easing);

      tween.start();
    });
  }
}
