import { Group } from 'three';
import { BaseContinent } from '../base-continent';
import {
  placeholderHouses,
  placeholderTrees,
  placeholderBuildings,
  placeholderHuts,
} from './placeholder-objects';

export class PlaceholderContinent extends BaseContinent {
  public constructContinent() {
    const continent = new Group();
    continent.name = 'placeholderContinent';

    continent.add(this.constructTrees('placeholderTrees', placeholderTrees));
    continent.add(this.constructHouses('placeholderHouses', placeholderHouses));
    continent.add(
      this.constructBuildings('placeholderBuildings', placeholderBuildings),
    );
    continent.add(this.constructHuts('placeholderHuts', placeholderHuts));

    return continent;
  }
}
