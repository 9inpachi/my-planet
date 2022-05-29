import { Group } from 'three';
import { Land } from '../../objects/land';
import { BaseContinent } from '../base-continent';
import { projectsLands } from './projects-objects';

export class ProjectsContinent extends BaseContinent {
  constructContinent() {
    const continent = new Group();
    continent.name = 'projectsContinent';

    continent.add(this.getObjectsGroup(Land, 'projectsLands', projectsLands));

    return continent;
  }
}
