import { Component, registerComponent, styles, template } from '../component';

import planetTitleTemplate from './planet-title.html?raw';
import planetTitleStyles from './planet-title.css?raw';

@template(planetTitleTemplate)
@styles(planetTitleStyles)
class PlanetTitle extends Component {}

registerComponent(PlanetTitle);
