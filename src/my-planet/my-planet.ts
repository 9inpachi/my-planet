import { colors } from '../common/library/colors';
import { Three, ThreeConfiguration } from '../three';
import { Globe } from './objects/globe';
import { House } from './objects/house';
import { Mountain } from './objects/mountain';
import { Sun } from './objects/sun';
import { Tree } from './objects/tree';

export class MyPlanet {
  private three: Three;

  constructor(configuration: ThreeConfiguration) {
    this.three = new Three(configuration);
    const scene = this.three.getScene();

    const planet = new Globe({ color: colors.earth, size: 100 });
    const sun = new Sun({ size: 20 });
    const tree = new Tree();
    const mountain = new Mountain({ size: 10 });
    const house = new House();

    // planet.addTo(scene);
    sun.addTo(scene);
    // tree.addTo(scene);
    // mountain.addTo(scene);
    house.addTo(scene);
  }

  public static build(configuration: ThreeConfiguration) {
    return new MyPlanet(configuration);
  }
}
