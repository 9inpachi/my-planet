import { Three, ThreeConfiguration } from '../three';
import { Globe } from './objects/globe';
import { Sun } from './objects/sun';
import { AboutContinent } from './continents/about-continent/about-continent';
import { AxesHelper } from 'three';
import { ProjectsContinent } from './continents/projects-continent/projects-continent';
import { GltfLoader } from '../three/loaders/gltf-loader';
import { SimpleObject } from './objects/simple-object';

import continentGeometry from '../assets/geometries/continents.gltf';

export class MyPlanet {
  private three: Three;

  constructor(configuration: ThreeConfiguration) {
    this.three = new Three(configuration);
    const scene = this.three.getScene();

    const planet = new Globe({ size: 100 });
    const sun = new Sun({ size: 20 });
    const globeRadius = planet.getRadius();
    const aboutContinent = new AboutContinent({ globeRadius });
    const projectsContinent = new ProjectsContinent({ globeRadius });

    planet.addTo(scene);
    sun.addTo(scene);
    aboutContinent.addTo(scene);
    projectsContinent.addTo(scene);

    const gltfLoader = new GltfLoader();
    gltfLoader.loadFile(continentGeometry).then((obj) => {
      const continentObject = new SimpleObject({ object: obj.children[0] });
      continentObject.getObject().scale.setScalar(1);
      continentObject.addTo(scene);
    });

    this.testStuff();
  }

  private testStuff() {
    const scene = this.three.getScene();
    const axisHelper = new AxesHelper(500);
    scene.add(axisHelper);
  }

  public static build(configuration: ThreeConfiguration) {
    return new MyPlanet(configuration);
  }
}
