/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Camera,
  Object3D,
  PerspectiveCamera,
  Quaternion,
  Vector3,
} from 'three';
import { SpinControls } from '../external/spin-controls';
import { IUpdatable } from './common/lib/iupdatable';
import { ThreeRenderer } from './renderer';

export class ThreeControls implements IUpdatable {
  private camera: Camera;
  private spinControls: SpinControls;

  private initialCameraPosition = new Vector3(0, 0, 450);

  private autoRotateAxis = new Vector3(0, 1, 0);
  private autoRotateQuaternion = new Quaternion();
  private autoRotateEnabled = true;

  constructor(renderer: ThreeRenderer) {
    const domElement = renderer.getRenderer().domElement;
    this.camera = this.buildPerspectiveCamera(domElement);
    this.spinControls = this.buildSpinControls(domElement);
  }

  private buildPerspectiveCamera(domElement: HTMLCanvasElement) {
    const wrapperElement = domElement.parentElement as HTMLElement;
    const aspectRatio = () =>
      wrapperElement.offsetWidth / wrapperElement.offsetHeight;
    const perspectiveCamera = new PerspectiveCamera(36, aspectRatio(), 1, 3000);

    perspectiveCamera.position.copy(this.initialCameraPosition);

    window.addEventListener('resize', () => {
      perspectiveCamera.aspect = aspectRatio();
      perspectiveCamera.updateProjectionMatrix();
    });

    return perspectiveCamera;
  }

  private buildSpinControls(domElement: HTMLCanvasElement) {
    const object = new Object3D();
    const spinControls = new SpinControls(
      object,
      0,
      this.getCamera(),
      domElement,
    );

    spinControls.rotateSensitivity = 0.25;
    spinControls.dampingFactor = 10;

    window.addEventListener('resize', () => spinControls.onWindowResize());
    (spinControls as any).addEventListener('start', () => {
      this.autoRotateEnabled = false;
    });
    (spinControls as any).addEventListener('end', () => {
      this.autoRotateEnabled = true;
    });

    return spinControls;
  }

  public setSpinControlsObject(
    object: Object3D,
    radius: number,
    constraintAxis?: Vector3,
  ) {
    this.spinControls.object = object;
    this.spinControls.trackballRadius = radius;
    (this.spinControls as any).spinAxisConstraint = constraintAxis;
  }

  public setRotationAxis(axis: Vector3) {
    this.autoRotateAxis.copy(axis);
    (this.spinControls as any).spinAxisConstraint = axis;
  }

  private autoRotate(deltaTime: number) {
    const autoRotateFactor = -0.1;

    this.autoRotateQuaternion.setFromAxisAngle(
      this.autoRotateAxis,
      deltaTime * autoRotateFactor,
    );
    this.spinControls.object.quaternion.premultiply(this.autoRotateQuaternion);
  }

  public update(deltaTime: number) {
    this.spinControls.update();
    this.autoRotateEnabled && this.autoRotate(deltaTime);
  }

  public getCamera() {
    return this.camera;
  }

  public getSpinControls() {
    return this.spinControls;
  }

  public getInitialCameraPosition() {
    return this.initialCameraPosition;
  }
}
