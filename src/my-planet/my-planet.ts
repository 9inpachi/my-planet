import { colors } from '../common/library/colors';
import { Three, ThreeConfiguration } from '../three';
import { Globe } from './objects/globe';
import { Sun } from './objects/sun';
import { Tree } from './objects/tree';

export class MyPlanet {
  private three: Three;

  constructor(configuration: ThreeConfiguration) {
    this.three = new Three(configuration);
    const scene = this.three.getScene();

    // const planet = new Globe({ color: colors.earth, size: 10 });
    // const sun = new Sun();

    // scene.add(sun.getObject(), planet.getObject());

    const tree = new Tree({ scale: 1 });
    tree.addTo(scene);
  }

  public static build(configuration: ThreeConfiguration) {
    return new MyPlanet(configuration);
  }
}
