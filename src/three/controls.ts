import { Camera, PerspectiveCamera } from 'three';

export class ThreeControls {
  private camera: Camera;

  constructor() {
    const perspectiveCamera = new PerspectiveCamera(
      36,
      window.innerWidth / window.innerHeight,
      1,
      100
    );
    perspectiveCamera.position.set(3, 3, 3);

    this.camera = perspectiveCamera;
  }

  public getCamera() {
    return this.camera;
  }
}
