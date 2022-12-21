import { registerComponent, template } from '../../component';
import { Continent } from '../continent/continent';

import aboutContinentTemplate from './about-continent.html?raw';

@template(aboutContinentTemplate)
class AboutContinent extends Continent {}

registerComponent(AboutContinent);
