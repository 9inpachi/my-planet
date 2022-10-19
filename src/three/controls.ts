import { Camera, PerspectiveCamera } from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { IUpdatable } from './lib/iupdatable';
import { ThreeRenderer } from './renderer';

export class ThreeControls implements IUpdatable {
  private camera: Camera;
  private orbitControls: OrbitControls;

  constructor(renderer: ThreeRenderer) {
    const domElement = renderer.getRenderer().domElement;
    this.camera = this.buildPerspectiveCamera(domElement);
    this.orbitControls = this.buildOrbitControls(domElement);
  }

  private buildPerspectiveCamera(domElement: HTMLCanvasElement) {
    const wrapperElement = domElement.parentElement as HTMLElement;
    const aspectRatio = () =>
      wrapperElement.offsetWidth / wrapperElement.offsetHeight;
    const perspectiveCamera = new PerspectiveCamera(36, aspectRatio(), 1, 3000);

    perspectiveCamera.position.set(0, 0, 400);

    window.addEventListener('resize', () => {
      perspectiveCamera.aspect = aspectRatio();
      perspectiveCamera.updateProjectionMatrix();
    });

    return perspectiveCamera;
  }

  private buildOrbitControls(domElement: HTMLCanvasElement) {
    const orbitControls = new OrbitControls(this.getCamera(), domElement);
    orbitControls.maxDistance = 700;
    orbitControls.minDistance = 200;
    orbitControls.zoomSpeed = 0.5;
    orbitControls.enableDamping = true;
    orbitControls.dampingFactor = 0.05;
    orbitControls.rotateSpeed = 0.2;

    return orbitControls;
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
