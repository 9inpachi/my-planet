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

export class MyPlanet {
  private three: Three;

  constructor(configuration: ThreeConfiguration) {
    this.three = new Three(configuration);
    this.initializePlanet();
  }

  private async initializePlanet() {
    const scene = this.three.getScene();

    const planet = new Globe({ size: 100 });
    planet.addTo(scene);
    const sun = new Sun({ size: 20 });
    sun.addTo(scene);
    const globeRadius = planet.getRadius();

    const aboutContinent = new AboutContinent({ globeRadius });
    aboutContinent.addTo(scene);
    const projectsContinent = new ProjectsContinent({ globeRadius });
    projectsContinent.addTo(scene);
    const workContinent = new WorkContinent({ globeRadius });
    workContinent.addTo(scene);
    const lifeContinent = new LifeContinent({ globeRadius });
    lifeContinent.addTo(scene);
    const placeholderContinent = new PlaceholderContinent({ globeRadius });
    placeholderContinent.addTo(scene);

    const gltfLoader = new GltfLoader();
    const continentsGltf = await gltfLoader.loadFile(continentGeometry);
    const continentsObject = new SimpleObject({ object: continentsGltf });
    continentsObject.addTo(scene);
  }

  public static build(configuration: ThreeConfiguration) {
    return new MyPlanet(configuration);
  }
}
