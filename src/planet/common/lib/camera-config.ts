import { Vector3 } from 'three';
import { ContinentCameraTransformOptions, DefaultCameraConfig } from './types';

export const continentCameraTransformMobile: ContinentCameraTransformOptions = {
  cameraDistanceUpContinent: 100,
  cameraDistanceToContinent: 300,
  cameraRotation: 0,
  cameraLeftSpace: 0,
  cameraTopSpace: 60,
};

export const continentCameraTransformDesktop: ContinentCameraTransformOptions =
  {
    cameraDistanceUpContinent: 100,
    cameraDistanceToContinent: 150,
    cameraRotation: 30,
    cameraLeftSpace: 50,
    cameraTopSpace: 0,
  };

export const defaultCameraConfigMobile: DefaultCameraConfig = {
  position: new Vector3(0, 100, 800),
};

export const defaultCameraConfigDesktop: DefaultCameraConfig = {
  position: new Vector3(-100, 0, 400),
};
