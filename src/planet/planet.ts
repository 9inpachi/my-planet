import { Group } from 'three';
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

import continentGeometry from '../assets/geometries/continents.gltf';
import { Galaxy } from './objects/galaxy';

export class Planet {
  private three: Three;

  constructor(configuration: ThreeConfiguration) {
    this.three = new Three(configuration);
    this.initializePlanet();
  }

  private async initializePlanet() {
    const scene = this.three.getScene();

    const sun = new Sun({ size: 10 });
    sun.addTo(scene);

    const planet = new Group();
    planet.name = 'planet';
    scene.add(planet);

    const globe = new Globe({ size: 100 });
    globe.addTo(planet);
    const globeRadius = globe.getRadius();

    const galaxy = new Galaxy({ starsCount: 2000, globeRadius });
    galaxy.addTo(scene);

    [
      new AboutContinent({ globeRadius }),
      new ProjectsContinent({ globeRadius }),
      new WorkContinent({ globeRadius }),
      new LifeContinent({ globeRadius }),
      new PlaceholderContinent({ globeRadius }),
    ].forEach((continent) => continent.addTo(globe.getObject()));

    const gltfLoader = new GltfLoader();
    const continentsGltf = await gltfLoader.loadFile(continentGeometry);
    const continentsObject = new SimpleObject({ object: continentsGltf });
    continentsObject.addTo(globe.getObject());
  }

  public static build(configuration: ThreeConfiguration) {
    return new Planet(configuration);
  }
}
