import { Object3D, Raycaster, Vector2 } from 'three';
import { ThreeControls } from './controls';
import { ThreeRenderer } from './renderer';

export class ThreeSelector {
  private rayCaster: Raycaster;
  private rayCasterPoint: Vector2 = new Vector2(0, 0);
  private rendererElement: HTMLCanvasElement;
  private objectsToIgnore: Set<Object3D> = new Set();
  // A map of objects with callbacks called when those objects are hit
  // by the raycaster.
  private intersectMap: Map<Object3D, VoidFunction> = new Map();
  private intersectableObjects: Object3D[] = [];

  constructor(renderer: ThreeRenderer, private controls: ThreeControls) {
    this.rayCaster = new Raycaster();
    this.rendererElement = renderer.getRenderer().domElement;

    this.rendererElement.addEventListener(
      'mousemove',
      this.onMouseMove.bind(this),
    );
  }

  private onMouseMove(event: MouseEvent) {
    this.rayCasterPoint.setX(
      (event.clientX / this.rendererElement.clientWidth) * 2 - 1,
    );
    this.rayCasterPoint.setY(
      -(event.clientY / this.rendererElement.clientHeight) * 2 + 1,
    );

    this.rayCaster.setFromCamera(
      this.rayCasterPoint,
      this.controls.getCamera(),
    );

    // TODO: This might be further optimizable.

    // Check if the any of the objects registered through
    // `onIntersectObject` have been intersected.

    const intersects = this.rayCaster.intersectObjects(
      this.intersectableObjects,
    );
    if (intersects.length === 0) {
      return;
    }

    const intersectedObject = this.findIntersectedObject(intersects[0].object);
    if (intersectedObject) {
      this.intersectMap.get(intersectedObject)?.();
    }
  }

  public onIntersectObject(object: Object3D, callback: VoidFunction) {
    this.intersectMap.set(object, callback);
    this.intersectableObjects.push(object);
  }

  /**
   * This will make the object intersectable by raycast but its only
   * function will be to obstruct other objects.
   */
  public intersectButIgnoreObject(object: Object3D) {
    this.intersectableObjects.push(object);
    this.objectsToIgnore.add(object);
  }

  // Helpers

  private findIntersectedObject(current: Object3D): Object3D | undefined {
    if (this.objectsToIgnore.has(current)) {
      return undefined;
    } else if (this.intersectMap.has(current)) {
      return current;
    } else if (current.parent) {
      return this.findIntersectedObject(current.parent);
    } else {
      return undefined;
    }
  }
}
