import { Group } from 'three';
import { BaseContinent } from '../base-continent';
import {
  lifeMountains,
  lifeHouses,
  lifeTrees,
  lifeBuildings,
} from './life-objects';

export class LifeContinent extends BaseContinent {
  public constructContinent() {
    const continent = new Group();
    continent.name = 'lifeContinent';

    continent.add(this.constructMountains('lifeMountains', lifeMountains));
    continent.add(this.constructTrees('lifeTrees', lifeTrees));
    continent.add(this.constructHouses('lifeHouses', lifeHouses));
    continent.add(this.constructBuildings('lifeBuildings', lifeBuildings));

    return continent;
  }
}
