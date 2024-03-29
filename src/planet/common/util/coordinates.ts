import { MathUtils, Vector3 } from 'three';

export const getPositionFromLatLng = (
  radius: number,
  lat: number,
  lng: number,
): Vector3 => {
  const phi = MathUtils.degToRad(-lat + 90);
  const theta = MathUtils.degToRad(lng);
  const position = new Vector3();

  position.setFromSphericalCoords(radius, phi, theta);

  return position;
};

export const getLatLngFromPosition = (position: Vector3, radius: number) => {
  const { x, y, z } = position;
  const lat = -MathUtils.radToDeg(Math.acos(y / radius)) + 90;
  const lng = MathUtils.radToDeg(Math.atan(x / z));

  return { lat, lng };
};
