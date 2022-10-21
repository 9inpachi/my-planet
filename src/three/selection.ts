import { Object3D, Raycaster, Vector2 } from 'three';
import { ThreeControls } from './controls';
import { ThreeRenderer } from './renderer';

export class ThreeSelection {
  private rayCaster: Raycaster;
  private rayCasterPoint: Vector2 = new Vector2(0, 0);
  private rendererElement: HTMLCanvasElement;
  // A map of objects and the callbacks when those objects are hit by
  // the raycaster.
  private intersectGroup: Map<Object3D, VoidFunction> = new Map<
    Object3D,
    VoidFunction
  >();

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
    for (const [intersectObject, callback] of this.intersectGroup) {
      const intersects = this.rayCaster.intersectObject(intersectObject);

      if (intersects.length > 0) {
        callback();
      }
    }
  }

  public onIntersectObject(object: Object3D, callback: VoidFunction) {
    this.intersectGroup.set(object, callback);
  }
}
