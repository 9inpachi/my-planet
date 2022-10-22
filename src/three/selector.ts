import { Object3D, Raycaster, Vector2 } from 'three';
import { ThreeControls } from './controls';
import { ThreeRenderer } from './renderer';

type ObjectListenerMap = Map<Object3D, VoidFunction>;

export class ThreeSelector {
  private rayCaster: Raycaster;
  private rayCasterPoint: Vector2 = new Vector2(0, 0);
  private rendererElement: HTMLCanvasElement;
  private objectsToIgnore: Set<Object3D> = new Set();
  // Two different sets to avoid conflict. Otherwise, adding a click
  // listener to a child makes mouse over of parent unreliable.
  private intersectableMouseOverObjects: Set<Object3D> = new Set();
  private intersectableClickObjects: Set<Object3D> = new Set();
  // A map of objects with callbacks called when those objects are hit
  // by the raycaster on mouse over.
  private mouseOverListenersMap: ObjectListenerMap = new Map();
  private mouseOutListenersMap: ObjectListenerMap = new Map();
  private clickableListenersMap: ObjectListenerMap = new Map();

  constructor(renderer: ThreeRenderer, private controls: ThreeControls) {
    this.rayCaster = new Raycaster();
    this.rendererElement = renderer.getRenderer().domElement;

    this.setupMouseMoveListeners();
    this.setupMouseClickListener();
  }

  private setupMouseMoveListeners() {
    const mouseMoveObjects: Set<Object3D> = new Set();

    this.rendererElement.addEventListener('mousemove', (event) => {
      const intersectedObject = this.listenToObjectIntersection(
        event,
        this.intersectableMouseOverObjects,
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
    });
  }

  private setupMouseClickListener() {
    this.rendererElement.addEventListener('click', (event) => {
      const intersectedObject = this.listenToObjectIntersection(
        event,
        this.intersectableClickObjects,
      );
      if (intersectedObject) {
        this.clickableListenersMap.get(intersectedObject)?.();
      }
    });
  }

  private listenToObjectIntersection(
    event: MouseEvent,
    intersectableObjects: Set<Object3D>,
  ) {
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
    this.intersectableMouseOverObjects.add(object);
  }

  public onMouseOut(object: Object3D, callback: VoidFunction) {
    this.mouseOutListenersMap.set(object, callback);
    this.intersectableMouseOverObjects.add(object);
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
    this.intersectableMouseOverObjects.add(object);
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
}
