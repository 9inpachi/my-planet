import { BufferGeometry } from 'three';

export const bendGeometry = (
  geometry: BufferGeometry,
  axis: string,
  angle: number,
) => {
  let theta = 0;
  if (angle !== 0) {
    const v = (geometry as BufferGeometry).attributes.position
      .array as number[];
    for (let i = 0; i < v.length; i += 3) {
      const x = v[i];
      const y = v[i + 1];
      const z = v[i + 2];

      switch (axis) {
        case 'x':
          theta = z * angle;
          break;
        case 'y':
          theta = x * angle;
          break;
        default:
          //z
          theta = x * angle;
          break;
      }

      const sinTheta = Math.sin(theta);
      const cosTheta = Math.cos(theta);

      switch (axis) {
        case 'x':
          v[i] = x;
          v[i + 1] = (y - 1.0 / angle) * cosTheta + 1.0 / angle;
          v[i + 2] = -(y - 1.0 / angle) * sinTheta;
          break;
        case 'y':
          v[i] = -(z - 1.0 / angle) * sinTheta;
          v[i + 1] = y;
          v[i + 2] = (z - 1.0 / angle) * cosTheta + 1.0 / angle;
          break;
        default:
          //z
          v[i] = -(y - 1.0 / angle) * sinTheta;
          v[i + 1] = (y - 1.0 / angle) * cosTheta + 1.0 / angle;
          v[i + 2] = z;
          break;
      }
    }

    geometry.attributes.position.needsUpdate = true;
  }
};
