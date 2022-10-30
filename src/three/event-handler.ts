import { Object3D, Vector3 } from 'three';
import { IUpdatable } from './common/lib/iupdatable';
import { getObjectCenter } from './common/util/transform';

type OnObjectMoveCallback = (object: Object3D) => void;

export class ThreeEventHandler implements IUpdatable {
  private onObjectMoveListeners: Map<Object3D, Set<OnObjectMoveCallback>> =
    new Map();
  private previousObjectPositions: Map<Object3D, Vector3> = new Map();
  private defaultObjectPosition = new Vector3(0, 0, 0);

  public update() {
    for (const [object, callbacks] of this.onObjectMoveListeners) {
      const currentPosition = this.getObjectPosition(object);

      callbacks.forEach((callback) => {
        if (this.hasObjectPositionChanged(object, currentPosition)) {
          callback(object);
        }
      });

      this.previousObjectPositions.set(object, currentPosition.clone());
    }
  }

  public onObjectMove(object: Object3D, callback: OnObjectMoveCallback) {
    if (!this.onObjectMoveListeners.has(object)) {
      this.onObjectMoveListeners.set(object, new Set());
    }

    this.onObjectMoveListeners.get(object)?.add(callback);
    this.previousObjectPositions.set(object, this.getObjectPosition(object));
  }

  public removeObjectMoveListener(
    object: Object3D,
    callback: OnObjectMoveCallback,
  ) {
    this.onObjectMoveListeners.get(object)?.delete(callback);

    if (this.onObjectMoveListeners.get(object)?.size === 0) {
      this.onObjectMoveListeners.delete(object);
      this.previousObjectPositions.delete(object);
    }
  }

  private hasObjectPositionChanged(object: Object3D, currentPosition: Vector3) {
    const previousPosition = this.previousObjectPositions.get(object);
    if (!previousPosition) {
      return false;
    }

    return !currentPosition.equals(previousPosition);
  }

  /**
   * Try to get the object's position and if that's not set, then get
   * the center of object's bounding box with `getObjectCenter`.
   */
  private getObjectPosition(object: Object3D) {
    if (!object.position.equals(this.defaultObjectPosition)) {
      return object.position;
    }

    return getObjectCenter(object);
  }
}
