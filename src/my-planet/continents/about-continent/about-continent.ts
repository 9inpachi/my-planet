import { Group } from 'three';
import { House } from '../../objects/house';
import { Land } from '../../objects/land';
import { Tree } from '../../objects/tree';
import { BaseContinent } from '../base-continent';
import { aboutHouses, aboutLands, aboutTrees } from './about-objects';

export class AboutContinent extends BaseContinent {
  public constructContinent() {
    const continent = new Group();
    continent.name = 'aboutContinent';

    continent.add(this.getObjectsGroup(Land, 'aboutLands', aboutLands));
    continent.add(this.getObjectsGroup(House, 'aboutHouses', aboutHouses));
    continent.add(this.getObjectsGroup(Tree, 'aboutTrees', aboutTrees));

    return continent;
  }
}
