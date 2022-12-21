import { Component, registerComponent, template } from '../../component';

import aboutContinentTemplate from './about-continent.html?raw';

@template(aboutContinentTemplate)
class AboutContinent extends Component {}

registerComponent(AboutContinent);
