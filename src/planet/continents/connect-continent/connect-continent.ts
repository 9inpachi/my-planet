import { Group } from 'three';
import { BaseContinent } from '../base-continent';
import {
  connectHouses,
  connectTrees,
  connectBuildings,
  connectHuts,
} from './connect-objects';

export class ConnectContinent extends BaseContinent {
  public constructContinent() {
    const continent = new Group();
    continent.name = 'connectContinent';

    continent.add(this.constructTrees('connectTrees', connectTrees));
    continent.add(this.constructHouses('connectHouses', connectHouses));
    continent.add(
      this.constructBuildings('connectBuildings', connectBuildings),
    );
    continent.add(this.constructHuts('connectHuts', connectHuts));

    return continent;
  }
}
