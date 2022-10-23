import { Object3D, Vector3 } from 'three';

export const getDirectionBetweenVectors = (from: Vector3, to: Vector3) =>
  new Vector3().subVectors(to, from).normalize();

export const getObjectDirection = (object: Object3D) => {
  const direction = new Vector3();
  object.getWorldDirection(direction);

  return direction;
};
