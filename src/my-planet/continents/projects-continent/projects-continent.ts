import { Group } from 'three';
import { Land } from '../../objects/land';
import { Mountain } from '../../objects/mountain';
import { Tree } from '../../objects/tree';
import { BaseContinent } from '../base-continent';
import {
  projectsLands,
  projectsMountains,
  projectsTrees,
} from './projects-objects';

export class ProjectsContinent extends BaseContinent {
  constructContinent() {
    const continent = new Group();
    continent.name = 'projectsContinent';

    continent.add(this.getObjectsGroup(Land, 'projectsLands', projectsLands));
    continent.add(
      this.getObjectsGroup(Mountain, 'projectsMountains', projectsMountains),
    );
    continent.add(this.getObjectsGroup(Tree, 'projectsTrees', projectsTrees));

    return continent;
  }
}
