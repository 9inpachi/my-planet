import { Object3D, Raycaster, Vector2 } from 'three';
import { IUpdatable } from './common/lib/iupdatable';
import { ThreeControls } from './controls';
import { ThreeRenderer } from './renderer';

type ObjectListenerMap = Map<Object3D, VoidFunction>;

// A subset of `MouseEvent`.
type PointerPosition = {
  clientX: number;
  clientY: number;
};

export class ThreeSelector implements IUpdatable {
  private rayCaster: Raycaster;
  private rayCasterPoint: Vector2 = new Vector2(0, 0);
  private rendererElement: HTMLCanvasElement;
  private objectsToIgnore: Set<Object3D> = new Set();
  // Two different sets to avoid conflict. Otherwise, adding a click
  // listener to a child makes mouse over of parent unreliable.
  private intersectableMouseMoveObjects: Set<Object3D> = new Set();
  private intersectableClickObjects: Set<Object3D> = new Set();
  // A map of objects with callbacks called when those objects are hit
  // by the raycaster on mouse over.
  private mouseOverListenersMap: ObjectListenerMap = new Map();
  private mouseOutListenersMap: ObjectListenerMap = new Map();
  private clickableListenersMap: ObjectListenerMap = new Map();

  private onAnimationFrame?: VoidFunction;

  constructor(
    renderer: ThreeRenderer,
    private controls: ThreeControls,
  ) {
    this.rayCaster = new Raycaster();
    this.rendererElement = renderer.getRenderer().domElement;

    this.setupMouseMoveListeners();
    this.setupMouseClickListener();
  }

  /**
   * This checks on each frame if any of the objects have moved out of
   * or over pointer's position. For example, because of auto rotation.
   * DOM events don't work then because the mouse is idle.
   */
  public update() {
    this.onAnimationFrame?.();
  }

  // Mouse Over and Mouse Out Listener

  private setupMouseMoveListeners() {
    let lastPointerPosition: PointerPosition;
    const mouseMoveObjects: Set<Object3D> = new Set();

    const updatePointerPosition = (mouseOrTouchEvent: PointerPosition) => {
      lastPointerPosition = mouseOrTouchEvent;
    };

    const mouseMoveEventHandler = (pointerPosition: PointerPosition) => {
      // No need to run the event handler if no one is listening.
      if (!lastPointerPosition || !this.hasMouseMoveListeners()) {
        return;
      }

      const intersectedObject = this.getIntersectedObject(
        pointerPosition,
        this.intersectableMouseMoveObjects,
      );

      // For `onMouseOut`.
      for (const mouseMoveObject of mouseMoveObjects) {
        if (intersectedObject !== mouseMoveObject) {
          mouseMoveObjects.delete(mouseMoveObject);
          this.mouseOutListenersMap.get(mouseMoveObject)?.();
        }
      }

      // For `onMouseOver`.
      if (intersectedObject && !mouseMoveObjects.has(intersectedObject)) {
        mouseMoveObjects.add(intersectedObject);
        this.mouseOverListenersMap.get(intersectedObject)?.();
      }

      lastPointerPosition = pointerPosition;
    };

    this.onAnimationFrame = () => mouseMoveEventHandler(lastPointerPosition);

    // Just update the pointer position in DOM listeners and check in
    // the animation loop if the objects have been mouse overed/out.
    // This is to avoid duplication.
    this.rendererElement.addEventListener('mousemove', updatePointerPosition);
    // TODO: Doesn't seem to be working on Chrome DevTools.
    this.rendererElement.addEventListener('touchmove', (event) => {
      updatePointerPosition(event.changedTouches[0]);
    });
  }

  // Click Listener

  private setupMouseClickListener() {
    let mouseStartX = 0;
    let mouseStartY = 0;

    const mouseDownEventHandler = (pointerPosition: PointerPosition) => {
      mouseStartX = pointerPosition.clientX;
      mouseStartY = pointerPosition.clientY;
    };

    const mouseUpEventHandler = (pointerPosition: PointerPosition) => {
      // Make sure it's a click/tap and the mouse was not dragged.
      const diffX = Math.abs(pointerPosition.clientX - mouseStartX);
      const diffY = Math.abs(pointerPosition.clientY - mouseStartY);
      if (diffX !== 0 && diffY !== 0) {
        return;
      }

      // No need to run the event handler if no one is listening.
      if (!this.hasClickListeners()) {
        return;
      }

      const intersectedObject = this.getIntersectedObject(
        pointerPosition,
        this.intersectableClickObjects,
      );
      if (intersectedObject) {
        this.clickableListenersMap.get(intersectedObject)?.();
      }
    };

    this.rendererElement.addEventListener('mousedown', mouseDownEventHandler);
    this.rendererElement.addEventListener('mouseup', mouseUpEventHandler);
    this.rendererElement.addEventListener('touchstart', (event) => {
      mouseDownEventHandler(event.changedTouches[0]);
    });
    this.rendererElement.addEventListener('touchend', (event) => {
      mouseUpEventHandler(event.changedTouches[0]);
    });
  }

  private getIntersectedObject(
    pointerPosition: PointerPosition,
    intersectableObjects: Set<Object3D>,
  ) {
    this.rayCasterPoint.setX(
      (pointerPosition.clientX / this.rendererElement.clientWidth) * 2 - 1,
    );
    this.rayCasterPoint.setY(
      -(pointerPosition.clientY / this.rendererElement.clientHeight) * 2 + 1,
    );

    this.rayCaster.setFromCamera(
      this.rayCasterPoint,
      this.controls.getCamera(),
    );

    // TODO: This might be further optimizable.

    // Check if the any of the objects registered have been intersected.
    const intersects = this.rayCaster.intersectObjects([
      ...intersectableObjects,
    ]);
    if (intersects.length === 0) {
      return;
    }

    return this.findIntersectedObject(
      intersects[0].object,
      intersectableObjects,
    );
  }

  public onMouseOver(object: Object3D, callback: VoidFunction) {
    this.mouseOverListenersMap.set(object, callback);
    this.intersectableMouseMoveObjects.add(object);
  }

  public onMouseOut(object: Object3D, callback: VoidFunction) {
    this.mouseOutListenersMap.set(object, callback);
    this.intersectableMouseMoveObjects.add(object);
  }

  public onClick(object: Object3D, callback: VoidFunction) {
    this.clickableListenersMap.set(object, callback);
    this.intersectableClickObjects.add(object);
  }

  /**
   * This will make the object intersectable by raycast but its only
   * function will be to obstruct other objects if they are behind it.
   */
  public intersectButIgnoreObject(object: Object3D) {
    this.objectsToIgnore.add(object);
    this.intersectableClickObjects.add(object);
    this.intersectableMouseMoveObjects.add(object);
  }

  // Helpers

  /**
   * Move up in the hierarchy to find the object with the listener.
   * Because the raycaster only hits meshes with geometries and we are
   * mostly using groups without any geometry to listen to the events.
   *
   * Note: Event bubbling won't work with this method. But we can
   * implement it by returning multiple intersected objects up in the
   * hierarchy.
   */
  private findIntersectedObject(
    current: Object3D,
    intersectableObjects: Set<Object3D>,
  ): Object3D | undefined {
    if (this.objectsToIgnore.has(current)) {
      return undefined;
    } else if (intersectableObjects.has(current)) {
      return current;
    } else if (current.parent) {
      return this.findIntersectedObject(current.parent, intersectableObjects);
    } else {
      return undefined;
    }
  }

  private hasMouseMoveListeners() {
    return (
      this.mouseOverListenersMap.size > 0 || this.mouseOutListenersMap.size > 0
    );
  }

  private hasClickListeners() {
    return this.clickableListenersMap.size > 0;
  }
}
