import { Group } from 'three';
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

    continent.add(this.constructLands('projectsLands', projectsLands));
    continent.add(
      this.constructMountains('projectsMountains', projectsMountains),
    );
    continent.add(this.constructTrees('projectsTrees', projectsTrees));

    return continent;
  }
}
