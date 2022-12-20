import { Vector3, Quaternion } from 'three';
import { BaseObjectProperties } from '../../../objects/base-object';
import { LandHeight } from './heights';

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

export type WithPositionAttributes<T> = BaseObjectProperties &
  T & {
    lat: number;
    lng: number;
    rotation?: number;
    landHeight?: LandHeight;
  };
