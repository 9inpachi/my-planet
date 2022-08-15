import { Group } from 'three';
import { House } from '../../objects/house';
import { Tree } from '../../objects/tree';
import { BaseContinent } from '../base-continent';
import { aboutHouses, aboutTrees } from './about-objects';

export class AboutContinent extends BaseContinent {
  public constructContinent() {
    const continent = new Group();
    continent.name = 'aboutContinent';

    continent.add(this.getObjectsGroup(Tree, 'aboutTrees', aboutTrees));
    continent.add(this.getObjectsGroup(House, 'aboutHouses', aboutHouses));

    return continent;
  }
}
