import { Component, template, styles, registerComponent } from '../component';

import planetTemplate from './planet.html?raw';
import planetStyles from './planet.css?url';

@template(planetTemplate)
@styles(planetStyles)
class Planet extends Component {}

registerComponent(Planet);
