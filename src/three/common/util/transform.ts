import { Box3, Camera, Object3D, Vector2, Vector3 } from 'three';

export const getDirectionBetweenVectors = (from: Vector3, to: Vector3) =>
  new Vector3().subVectors(to, from).normalize();

export const getObjectDirection = (object: Object3D) => {
  const direction = new Vector3();
  object.getWorldDirection(direction);

  return direction;
};

export const getObjectPosition = (object: Object3D) => {
  const position = new Vector3();
  const box = new Box3();

  box.setFromObject(object).getCenter(position);

  return position;
};

export const getObjectPositionOnScreen = (
  position: Vector3,
  camera: Camera,
  canvas: HTMLCanvasElement,
): Vector2 => {
  const vector = new Vector3().copy(position);
  vector.project(camera);
  const positionOnScreen = new Vector2(
    ((vector.x + 1) / 2) * canvas.clientWidth,
    (-(vector.y - 1) / 2) * canvas.clientHeight,
  );

  return positionOnScreen;
};
