import { registerComponent, styles, template } from '../../component';
import { Continent } from '../continent/continent';

import aboutContinentTemplate from './about-continent.html?raw';
import aboutContinentStyles from './about-continent.css?raw';

@template(aboutContinentTemplate)
@styles(aboutContinentStyles)
class AboutContinent extends Continent {}

registerComponent(AboutContinent);
