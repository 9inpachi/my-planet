import { Camera, PerspectiveCamera } from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { IUpdatable } from './library/iupdatable';

export class ThreeControls implements IUpdatable {
  private camera: Camera;
  private orbitControls: OrbitControls;

  constructor(domElement: HTMLCanvasElement) {
    this.camera = this.buildPerspectiveCamera();
    this.orbitControls = this.buildOrbitControls(domElement);
    this.orbitControls.autoRotate = true;
  }

  private buildPerspectiveCamera() {
    const perspectiveCamera = new PerspectiveCamera(
      36,
      window.innerWidth / window.innerHeight,
      1,
      1000,
    );
    perspectiveCamera.position.set(0, 0, 500);

    return perspectiveCamera;
  }

  private buildOrbitControls(domElement: HTMLCanvasElement) {
    return new OrbitControls(this.getCamera(), domElement);
  }

  public getCamera() {
    return this.camera;
  }

  public getOrbitControls() {
    return this.orbitControls;
  }

  public update() {
    this.orbitControls.update();
  }
}
