import { Component, registerComponent, template } from '../component';

import continentsMenuTemplate from './continents-menu.html?raw';
import continentsMenuStyles from './continents-menu.css?raw';

@template(continentsMenuTemplate)
@template(continentsMenuStyles)
class ContinentsMenu extends Component {}

registerComponent(ContinentsMenu);
