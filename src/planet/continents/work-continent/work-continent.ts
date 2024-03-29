import { Group } from 'three';
import { BaseContinent } from '../base-continent';
import { workBuildings, workHuts, workTrees } from './work-objects';

export class WorkContinent extends BaseContinent {
  public constructContinent() {
    const continent = new Group();
    continent.name = 'workContinent';

    continent.add(this.constructTrees('workTrees', workTrees));
    continent.add(this.constructBuildings('workBuildings', workBuildings));
    continent.add(this.constructHuts('workHuts', workHuts));

    return continent;
  }
}
