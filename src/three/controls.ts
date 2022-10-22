import {
  Camera,
  Clock,
  Object3D,
  PerspectiveCamera,
  Quaternion,
  Vector3,
} from 'three';
import { SpinControls } from '../external/spin-controls';
import { IUpdatable } from './lib/iupdatable';
import { ThreeRenderer } from './renderer';

export class ThreeControls implements IUpdatable {
  private camera: Camera;
  private spinControls: SpinControls;
  // Autorotate
  private clock: Clock;
  private autoRotateAxis = new Vector3(0, 1, 0);
  private autoRotateQuaternion = new Quaternion();

  constructor(renderer: ThreeRenderer) {
    const domElement = renderer.getRenderer().domElement;
    this.camera = this.buildPerspectiveCamera(domElement);
    this.spinControls = this.buildSpinControls(domElement);
    this.clock = new Clock();
  }

  private buildPerspectiveCamera(domElement: HTMLCanvasElement) {
    const wrapperElement = domElement.parentElement as HTMLElement;
    const aspectRatio = () =>
      wrapperElement.offsetWidth / wrapperElement.offsetHeight;
    const perspectiveCamera = new PerspectiveCamera(36, aspectRatio(), 1, 3000);

    perspectiveCamera.position.set(0, 0, 450);

    window.addEventListener('resize', () => {
      perspectiveCamera.aspect = aspectRatio();
      perspectiveCamera.updateProjectionMatrix();
    });

    return perspectiveCamera;
  }

  private buildSpinControls(domElement: HTMLCanvasElement) {
    const spinControls = new SpinControls(
      new Object3D(),
      0,
      this.getCamera(),
      domElement,
    );
    spinControls.rotateSensitivity = 0.5;
    spinControls.dampingFactor = 1;

    return spinControls;
  }

  private autoRotate() {
    const autoRotateFactor = -0.1;
    this.autoRotateQuaternion.setFromAxisAngle(
      this.autoRotateAxis,
      this.clock.getDelta() * autoRotateFactor,
    );
    this.spinControls.object.quaternion.premultiply(this.autoRotateQuaternion);
  }

  public update() {
    this.spinControls.update();
    this.autoRotate();
  }

  public getCamera() {
    return this.camera;
  }

  public onControlsChange(callback: (controls: SpinControls) => void) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (this.spinControls as any).addEventListener('change', (event: any) => {
      callback(event.target);
    });
  }

  public initializeSpinControls(
    object: Object3D,
    radius: number,
    constraintAxis?: Vector3,
  ) {
    this.spinControls.object = object;
    this.spinControls.trackballRadius = radius;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (this.spinControls as any).spinAxisConstraint = constraintAxis;
  }
}
