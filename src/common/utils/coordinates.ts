import { MathUtils, Vector3 } from 'three';

export const positionFromLatLng = (
  radius: number,
  lat: number,
  lng: number,
) => {
  const vector = new Vector3();
  const phi = MathUtils.degToRad(90 - lat);
  const theta = MathUtils.degToRad(180 - lng);

  vector.x = radius * Math.sin(phi) * Math.cos(theta);
  vector.y = radius * Math.cos(phi);
  vector.z = radius * Math.sin(phi) * Math.sin(theta);

  return vector;
};
