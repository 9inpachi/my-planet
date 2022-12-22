import { registerComponent, template } from '../../component';
import { Continent } from '../continent/continent';

import workContinentTemplate from './work-continent.html?raw';

@template(workContinentTemplate)
class WorkContinent extends Continent {}

registerComponent(WorkContinent);
