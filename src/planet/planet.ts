import {
  AxesHelper,
  Box3,
  Group,
  Object3D,
  PerspectiveCamera,
  Vector3,
} from 'three';
import { Three, ThreeConfiguration } from '../three';
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
import { Easing, Tween } from '@tweenjs/tween.js';

export class Planet {
  private three: Three;

  constructor(configuration: ThreeConfiguration) {
    this.three = new Three(configuration);
    this.initializePlanet();
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

    this.three.getControls().initializeSpinControls(planet, globeRadius);

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
        this.onContinentClick(continent.getObject());
      });

      continent.addTo(planet);
    });
    this.three.getScene().add(new AxesHelper(200));
  }

  public static build(configuration: ThreeConfiguration) {
    return new Planet(configuration);
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

  private onContinentClick(continent: Object3D) {
    document
      .querySelectorAll('mp-continent-info[active]')
      .forEach((continent) => continent.removeAttribute('active'));
    // document
    //   .querySelector(`mp-continent-info[name="${continent.name}"]`)
    //   ?.setAttribute('active', '');

    // Position and Direction Calculations

    // const controls = this.three.getControls().getOrbitControls();
    // const camera = this.three.getControls().getCamera();

    // const continentPosition = new Box3()
    //   .setFromObject(continent)
    //   .getCenter(new Vector3());
    // const origin = new Vector3(0, 0, 0);
    // const dir = new Vector3().subVectors(continentPosition, origin).normalize();
    // const cameraPosition = continentPosition
    //   .clone()
    //   .add(dir.clone().multiplyScalar(200));

    // // Animation

    // const easing = Easing.Cubic.Out;
    // const duration = 2000;

    // const positionTween = new Tween(controls.target);
    // positionTween.to(continentPosition, duration).easing(easing);
    // const cameraTween = new Tween(camera.position);
    // cameraTween.to(cameraPosition, duration).easing(easing);

    // positionTween.start();
    // cameraTween.start();
  }
}
