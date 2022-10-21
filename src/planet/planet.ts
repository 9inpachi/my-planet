import { Group, PerspectiveCamera } from 'three';
import { Three, ThreeConfiguration } from '../three';
import { Globe } from './objects/globe';
import { Sun } from './objects/sun';
import { AboutContinent } from './continents/about-continent/about-continent';
import { ProjectsContinent } from './continents/projects-continent/projects-continent';
import { GltfLoader } from '../three/loaders/gltf-loader';
import { SimpleObject } from './objects/simple-object';
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

  private async initializePlanet() {
    const scene = this.three.getScene();

    // Sun

    const sun = new Sun({ size: 10 });

    // Move sun with camera.
    sun.setPosition(this.three.getControls().getCamera().position);
    this.three.getControls().onControlsChange((controls) => {
      sun.setPosition(controls.object.position);
    });

    sun.addTo(scene);

    // Planet Group

    const planet = new Group();
    enableParallax(planet, 0.005);
    planet.name = 'planet';
    scene.add(planet);

    // Globe

    const globe = new Globe({ size: 100 });
    globe.addTo(planet);
    const globeRadius = globe.getRadius();
    this.three.getSelector().intersectButIgnoreObject(globe.getObject());

    // Galaxy

    const far = (this.three.getControls().getCamera() as PerspectiveCamera).far;
    const galaxy = new Galaxy({ starsCount: 1000, far });
    galaxy.animateGalaxy();
    enableParallax(galaxy.getObject(), 0.1);
    galaxy.addTo(scene);

    // Continents

    [
      new AboutContinent({ globeRadius }),
      new ProjectsContinent({ globeRadius }),
      new WorkContinent({ globeRadius }),
      new LifeContinent({ globeRadius }),
      new PlaceholderContinent({ globeRadius }),
    ].forEach((continent) => {
      continent.addTo(planet);
      this.three.getSelector().onIntersectObject(continent.getObject(), () => {
        console.log('Object intersected:', continent.getObject().name);
      });
    });

    // Continents - Land Geometries

    const gltfLoader = new GltfLoader();
    const continentsGltf = await gltfLoader.loadFile(continentGeometry);
    const continentsObject = new SimpleObject({ object: continentsGltf });
    continentsObject.addTo(globe.getObject());
  }

  public static build(configuration: ThreeConfiguration) {
    return new Planet(configuration);
  }
}
