import { Group } from 'three';
import { BaseContinent } from '../base-continent';
import { aboutHouses, aboutTrees } from './about-objects';

export class AboutContinent extends BaseContinent {
  public constructContinent() {
    const continent = new Group();
    continent.name = 'aboutContinent';

    continent.add(this.constructTrees('aboutTrees', aboutTrees));
    continent.add(this.constructHouses('aboutHouses', aboutHouses));

    return continent;
  }
}
