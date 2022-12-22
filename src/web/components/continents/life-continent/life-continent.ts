import { registerComponent, template } from '../../component';
import { Continent } from '../continent/continent';

import lifeContinentTemplate from './life-continent.html?raw';

@template(lifeContinentTemplate)
class LifeContinent extends Continent {}

registerComponent(LifeContinent);
