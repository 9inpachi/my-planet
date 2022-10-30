import { Vector3, Quaternion } from 'three';

export type CameraTargetTransform = {
  position: Vector3;
  quaternion: Quaternion;
};

export type ContinentCameraTransformOptions = {
  cameraDistanceUpContinent: number;
  cameraDistanceToContinent: number;
  cameraRotation: number;
  cameraLeftSpace: number;
  cameraTopSpace: number;
};

export type DefaultCameraConfig = {
  position: Vector3;
};
