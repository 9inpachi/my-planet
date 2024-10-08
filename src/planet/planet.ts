import { Group, Object3D, PerspectiveCamera } from 'three';
import { Easing } from '@tweenjs/tween.js';
import { Three, ThreeConfiguration } from '../three';
import { Globe } from './objects/globe';
import { Sun } from './objects/sun';
import { Clouds } from './objects/clouds';
import { AboutContinent } from './continents/about-continent/about-continent';
import { ProjectsContinent } from './continents/projects-continent/projects-continent';
import { GltfLoader } from '../three/loaders/gltf-loader';
import { WorkContinent } from './continents/work-continent/work-continent';
import { LifeContinent } from './continents/life-continent/life-continent';
import { ConnectContinent } from './continents/connect-continent/connect-continent';
import { Galaxy } from './objects/galaxy';
import { enableParallax, enableParallaxMobile } from './common/util/parallax';
import { ContinentInteractor } from './continents/common/util/continent-interactor';
import { isScreenPortrait } from '../common/util/responsive';
import { BaseContinent } from './continents/base-continent';
import {
  defaultCameraConfigDesktop,
  defaultCameraConfigMobile,
} from './common/lib/camera-config';

import continentGeometry from '../assets/geometries/continents.gltf';

export class Planet {
  private three: Three;
  private onLoadCallbacks: ((planet: Planet) => void)[] = [];
  private continents: {
    [continentName: string]: {
      continent: BaseContinent;
      continentInteractor: ContinentInteractor<BaseContinent>;
    };
  } = {};
  // This gets set when initializing the planet.
  private sun!: Sun;
  private cameraAnimationOptions = {
    duration: 2000,
    easing: Easing.Cubic.Out,
  };

  constructor(configuration: ThreeConfiguration) {
    this.three = new Three(configuration);
    this.setupDefaultCameraConfig();
    this.initializePlanet().then(() => {
      this.onLoadCallbacks.forEach((callback) => callback(this));
    });
  }

  public static build(configuration: ThreeConfiguration) {
    return new Planet(configuration);
  }

  private async initializePlanet() {
    const threeSelector = this.three.getSelector();
    const camera = this.three.getControls().getCamera();
    const scene = this.three.getScene();

    // Sun

    const sun = new Sun({ size: 10 });
    // Move sun to camera.
    sun.setPosition(camera.position);
    sun.addTo(scene);
    this.sun = sun;

    // Planet Group

    const planet = new Group();
    enableParallax(planet, 0.0075);
    enableParallaxMobile(planet, 0.0075);
    planet.name = 'planet';
    scene.add(planet);

    // Globe

    const globe = new Globe({ size: 100 });
    globe.addTo(planet);
    const globeRadius = globe.getRadius();
    threeSelector.intersectButIgnoreObject(globe.getObject());
    this.three.getControls().setSpinControlsObject(planet, globeRadius);

    // Galaxy

    // Avoid placing stars in front of the camera.
    const starsStartRadius = camera.position.z;
    const starsEndRadius = (camera as PerspectiveCamera).far;
    const galaxy = new Galaxy({
      starsCount: 1000,
      startRadius: starsStartRadius,
      endRadius: starsEndRadius,
    });
    galaxy.animateGalaxy(this.getAnimator());
    enableParallax(galaxy.getObject(), 0.075);
    galaxy.addTo(scene);

    // Clouds

    const clouds = new Clouds({
      cloudsCount: 5,
      orbitRadius: globeRadius + 40,
      baseCloudSize: 15,
    });
    clouds.animateClouds(this.getAnimator());
    clouds.addTo(planet);

    // Continents

    const continents = await this.loadContinentsLand();

    const allContinents = [
      new AboutContinent({ globeRadius }),
      new ProjectsContinent({ globeRadius }),
      new WorkContinent({ globeRadius }),
      new LifeContinent({ globeRadius }),
      new ConnectContinent({ globeRadius }),
    ];

    for (const continent of allContinents) {
      const continentObject = continent.getObject();
      const continentLand = continents[continentObject.name];

      continentLand.name = continentLand.name + 'Land';
      continentObject.add(continentLand);
      continent.addTo(planet);

      const continentInteractor = new ContinentInteractor(
        this.three,
        continent,
        this.sun.getObject(),
      );
      continentInteractor.setupEventHandlers();

      this.continents[continentObject.name] = {
        continent,
        continentInteractor,
      };
    }
  }

  public resetControls() {
    const threeControls = this.three.getControls();
    const threeAnimations = this.three.getAnimator();
    const defaultCameraState = threeControls.getDefaultCameraState();

    threeControls.resetSpinControls();

    // Move the camera and sun to their default positions.
    [threeControls.getCamera(), this.sun.getObject()].forEach((object) => {
      threeAnimations.animateObjectToTarget(
        object,
        defaultCameraState.position,
        defaultCameraState.quaternion,
        this.cameraAnimationOptions,
      );
    });
  }

  private setupDefaultCameraConfig() {
    const camera = this.three.getControls().getCamera();
    const defaultCamera = this.three.getControls().getDefaultCameraState();

    const cameraPosition = this.getCameraConfigForScreen();

    camera.position.copy(cameraPosition);
    defaultCamera.position.copy(cameraPosition);

    window.addEventListener('resize', () => {
      defaultCamera.position.copy(this.getCameraConfigForScreen());
    });
  }

  public onLoad(callback: (planet: Planet) => void) {
    this.onLoadCallbacks.push(callback);
  }

  public getScene() {
    return this.three.getScene();
  }

  public getAnimator() {
    return this.three.getAnimator();
  }

  public getContinents() {
    return this.continents;
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

  private getCameraConfigForScreen() {
    return isScreenPortrait()
      ? defaultCameraConfigMobile
      : defaultCameraConfigDesktop;
  }
}
