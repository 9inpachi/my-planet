import { Group } from 'three';
import { BaseContinent } from '../base-continent';
import {
  projectsBuildings,
  projectsHouses,
  projectsHuts,
  projectsMountains,
  projectsTrees,
} from './projects-objects';

export class ProjectsContinent extends BaseContinent {
  constructContinent() {
    const continent = new Group();
    continent.name = 'projectsContinent';

    continent.add(
      this.constructMountains('projectsMountains', projectsMountains),
    );
    continent.add(this.constructHouses('projectsHouses', projectsHouses));
    continent.add(this.constructTrees('projectsTrees', projectsTrees));
    continent.add(
      this.constructBuildings('projectsBuildings', projectsBuildings),
    );
    continent.add(this.constructHuts('projectsHuts', projectsHuts));

    return continent;
  }
}
