import { colors } from '../common/library/colors';
import { Three, ThreeConfiguration } from '../three';
import { Globe } from './objects/globe';
import { House } from './objects/house';
import { Mountain } from './objects/mountain';
import { Sun } from './objects/sun';
import { Tree } from './objects/tree';
import { AboutContinent } from './continents/about-continent';
import { AxesHelper, Mesh, MeshLambertMaterial } from 'three';

export class MyPlanet {
  private three: Three;

  constructor(configuration: ThreeConfiguration) {
    this.three = new Three(configuration);
    const scene = this.three.getScene();

    const planet = new Globe({ color: colors.earth, size: 50 });
    const sun = new Sun({ size: 20 });
    const tree = new Tree();
    const mountain = new Mountain({ size: 10 });
    const house = new House();
    const axisHelper = new AxesHelper(500);
    scene.add(axisHelper);

    const globeRadius = planet.getRadius();
    const aboutContinent = new AboutContinent({ globeRadius });

    sun.addTo(scene);
    planet.addTo(scene);
    ((planet.getObject() as Mesh).material as MeshLambertMaterial).wireframe = true;
    // tree.addTo(scene);
    // tree.applyLatLng(globeRadius, 30, -70);
    // mountain.addTo(scene);
    // house.addTo(scene);
    // house.applyLatLng(globeRadius, 35, -75);
    // land.applyLatLng(globeRadius, 30, -70);
    scene.add(aboutContinent.getObject());

    // const tree1 = new Tree();
    // tree1.applyLatLng(globeRadius, 35, -75);
    // tree1.addTo(scene);
    // const tree2 = new Tree();
    // tree2.applyLatLng(globeRadius, 25, -65);
    // tree2.addTo(scene);
    // const tree3 = new Tree();
    // tree3.applyLatLng(globeRadius, 30, -75);
    // tree3.addTo(scene);
  }

  public static build(configuration: ThreeConfiguration) {
    return new MyPlanet(configuration);
  }
}
