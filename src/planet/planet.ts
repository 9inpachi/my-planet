import {
  Box3,
  Group,
  MathUtils,
  Matrix4,
  Object3D,
  PerspectiveCamera,
  Quaternion,
  Vector3,
} from 'three';
import { Easing, Tween } from '@tweenjs/tween.js';
import { Three, ThreeConfiguration } from '../three';
import {
  getDirectionBetweenVectors,
  getObjectDirection,
} from '../three/common/util/transform';
import { Globe } from './objects/globe';
import { Sun } from './objects/sun';
import { AboutContinent } from './continents/about-continent/about-continent';
import { ProjectsContinent } from './continents/projects-continent/projects-continent';
import { GltfLoader } from '../three/loaders/gltf-loader';
import { WorkContinent } from './continents/work-continent/work-continent';
import { LifeContinent } from './continents/life-continent/life-continent';
import { PlaceholderContinent } from './continents/placeholder-continent/placeholder-continent';
import { Galaxy } from './objects/galaxy';
import { enableParallax } from './common/util/parallax';

import continentGeometry from '../assets/geometries/continents.gltf';

export class Planet {
  private three: Three;

  constructor(configuration: ThreeConfiguration) {
    this.three = new Three(configuration);
    this.initializePlanet();
  }

  public static build(configuration: ThreeConfiguration) {
    return new Planet(configuration);
  }

  private async initializePlanet() {
    const scene = this.three.getScene();

    // Sun

    const sun = new Sun({ size: 10 });
    // Move sun to camera.
    sun.setPosition(this.three.getControls().getCamera().position);
    sun.addTo(scene);

    // Planet Group

    const planet = new Group();
    enableParallax(planet, 0.002);
    planet.name = 'planet';
    scene.add(planet);

    // Globe

    const globe = new Globe({ size: 100 });
    globe.addTo(planet);
    const globeRadius = globe.getRadius();
    this.three.getSelector().intersectButIgnoreObject(globe.getObject());

    this.three.getControls().setSpinControlsObject(planet, globeRadius);

    // Galaxy

    const far = (this.three.getControls().getCamera() as PerspectiveCamera).far;
    const galaxy = new Galaxy({ starsCount: 1000, far });
    galaxy.animateGalaxy();
    enableParallax(galaxy.getObject(), 0.05);
    galaxy.addTo(scene);

    // Continents

    const continents = await this.loadContinentsLand();

    [
      new AboutContinent({ globeRadius }),
      new ProjectsContinent({ globeRadius }),
      new WorkContinent({ globeRadius }),
      new LifeContinent({ globeRadius }),
      new PlaceholderContinent({ globeRadius }),
    ].forEach((continent) => {
      const continentLand = continents[continent.getObject().name];
      continentLand.name = continentLand.name + 'Land';
      continent.getObject().add(continentLand);

      this.three.getSelector().onClick(continent.getObject(), () => {
        this.onContinentClick(continent.getObject(), sun.getObject());
      });

      continent.addTo(planet);
    });
  }

  // Helpers

  private async loadContinentsLand() {
    const gltfLoader = new GltfLoader();
    const continentsGltf = await gltfLoader.loadFile(continentGeometry);
    const continents: { [key: string]: Object3D } = {};

    // Continent lands are given the same name as continents in the
    // blender model.
    for (const continent of continentsGltf.children) {
      continents[continent.name] = continent;
    }

    return continents;
  }

  private onContinentClick(continent: Object3D, sun: Object3D) {
    // If continent is already open.
    if (this.isContinentInfoOpen(continent.name)) {
      return;
    }

    // Configuration

    const cameraDistanceUpContinent = 100;
    const cameraDisanceToObject = 150;
    const cameraRotation = 30;
    const cameraLeftSpace = 50;
    // Animation Configuration
    const animationEasing = Easing.Cubic.Out;
    const animationDuration = 2000;

    // Position and Direction Calculations

    const controls = this.three.getControls();
    const camera = this.three.getControls().getCamera();

    const continentPosition = new Box3()
      .setFromObject(continent)
      .getCenter(new Vector3());
    const origin = new Vector3(0, 0, 0);
    const continentUpDir = getDirectionBetweenVectors(
      origin,
      continentPosition,
    );

    // Controls Changes

    controls.getSpinControls().rotateSensitivity = 1;
    controls.setRotationAxis(continentUpDir);

    // New Camera Position

    const targetCameraClone = new Object3D();
    targetCameraClone.lookAt(continentUpDir);
    targetCameraClone.position.copy(continentPosition);
    targetCameraClone
      .translateZ(cameraDistanceUpContinent)
      .translateX(cameraDisanceToObject);
    targetCameraClone.lookAt(continentPosition);

    // New Camera Up

    const newCameraDir = getObjectDirection(targetCameraClone);
    const cameraUp = new Vector3()
      .copy(continentUpDir)
      .applyAxisAngle(newCameraDir, MathUtils.degToRad(cameraRotation));

    // Use the camera up and continent position to look at the continent
    // with the right camera rotation.
    const targetCameraQuaternion = new Quaternion().setFromRotationMatrix(
      new Matrix4().lookAt(
        targetCameraClone.position,
        continentPosition,
        cameraUp,
      ),
    );

    // Set Camera's Target Transformation

    targetCameraClone.quaternion.copy(targetCameraQuaternion);
    // Move camera to the left to make space for the continent content.
    // This should only be done after applying the rotation (look at
    // with quaternion) to avoid making continent the center.
    targetCameraClone.translateX(-cameraLeftSpace);

    const targetCameraTransform = {
      position: targetCameraClone.position,
      quaternion: targetCameraClone.quaternion,
    };

    // Animate and Apply Changes

    // Apply the same animation to both camera and sun so the sun follows the camera.
    for (const object of [camera, sun]) {
      const positionTween = new Tween(object.position)
        .to(targetCameraTransform.position, animationDuration)
        .easing(animationEasing);
      const lookAtTween = new Tween(object.quaternion)
        .to(targetCameraTransform.quaternion, animationDuration)
        .easing(animationEasing);

      positionTween.start();
      lookAtTween.start();
    }

    // Open Continent Info

    this.openContinentInfo(continent.name, animationDuration / 2);
  }

  private openContinentInfo(continentName: string, openDelay: number) {
    // Close opened continent info.
    document.querySelector('mp-continent-info[open]')?.removeAttribute('open');

    // Open the continent after a delay for a smoother animation experience.
    setTimeout(() => {
      document
        .querySelector(`mp-continent-info[name="${continentName}"]`)
        ?.setAttribute('open', '');
    }, openDelay);
  }

  private isContinentInfoOpen(continentName: string) {
    const continentInfoComponent = document.querySelector(
      `mp-continent-info[name="${continentName}"]`,
    );

    return continentInfoComponent?.hasAttribute('open') ?? false;
  }
}
