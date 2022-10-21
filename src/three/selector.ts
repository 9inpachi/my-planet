import { Object3D, Raycaster, Vector2 } from 'three';
import { ThreeControls } from './controls';
import { ThreeRenderer } from './renderer';

type ObjectListenerMap = Map<Object3D, VoidFunction>;

export class ThreeSelector {
  private rayCaster: Raycaster;
  private rayCasterPoint: Vector2 = new Vector2(0, 0);
  private rendererElement: HTMLCanvasElement;
  private intersectableObjects: Object3D[] = [];
  private objectsToIgnore: Set<Object3D> = new Set();
  // A map of objects with callbacks called when those objects are hit
  // by the raycaster on mouse over.
  private mouseOverListenersMap: ObjectListenerMap = new Map();
  // A map of objects with callbacks called when those objects are hit
  // by the raycaster on click.
  private clickableListenersMap: ObjectListenerMap = new Map();

  constructor(renderer: ThreeRenderer, private controls: ThreeControls) {
    this.rayCaster = new Raycaster();
    this.rendererElement = renderer.getRenderer().domElement;

    this.rendererElement.addEventListener('mousemove', (event) => {
      this.listenToObjectIntersection(event, this.mouseOverListenersMap);
    });
    this.rendererElement.addEventListener('click', (event) => {
      this.listenToObjectIntersection(event, this.clickableListenersMap);
    });
  }

  // TODO: There may be a way to improve this instead of using a
  // `objectListenerMap`.
  private listenToObjectIntersection(
    event: MouseEvent,
    objectListenerMap: ObjectListenerMap,
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

    // Check if the any of the objects registered through
    // `onIntersectObject` have been intersected.

    const intersects = this.rayCaster.intersectObjects(
      this.intersectableObjects,
    );
    if (intersects.length === 0) {
      return;
    }

    const intersectedObject = this.findIntersectedObject(
      intersects[0].object,
      objectListenerMap,
    );
    if (intersectedObject) {
      // Call the listener from the map.
      objectListenerMap.get(intersectedObject)?.();
    }
  }

  public onMouseOver(object: Object3D, callback: VoidFunction) {
    this.mouseOverListenersMap.set(object, callback);
    this.intersectableObjects.push(object);
  }

  public onClick(object: Object3D, callback: VoidFunction) {
    this.clickableListenersMap.set(object, callback);
    this.intersectableObjects.push(object);
  }

  /**
   * This will make the object intersectable by raycast but its only
   * function will be to obstruct other objects if they are behind it.
   */
  public intersectButIgnoreObject(object: Object3D) {
    this.intersectableObjects.push(object);
    this.objectsToIgnore.add(object);
  }

  // Helpers

  /**
   * Move up in the hierarchy to find the object with the listener.
   * Because the raycaster only hits meshes with geometries and we are
   * mostly using groups without any geometry to listen to the events.
   */
  private findIntersectedObject(
    current: Object3D,
    objectListenerMap: ObjectListenerMap,
  ): Object3D | undefined {
    if (this.objectsToIgnore.has(current)) {
      return undefined;
    } else if (objectListenerMap.has(current)) {
      return current;
    } else if (current.parent) {
      return this.findIntersectedObject(current.parent, objectListenerMap);
    } else {
      return undefined;
    }
  }
}
