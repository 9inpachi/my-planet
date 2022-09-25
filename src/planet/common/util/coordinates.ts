import { MathUtils, Vector3 } from 'three';

export const getPositionFromLatLng = (
  radius: number,
  lat: number,
  lng: number,
) => {
  const phi = MathUtils.degToRad(-lat + 90);
  const theta = MathUtils.degToRad(lng);
  const position = new Vector3();

  position.setFromSphericalCoords(radius, phi, theta);

  return position;
};
