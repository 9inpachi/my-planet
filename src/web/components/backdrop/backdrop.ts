import { Component, registerComponent, styles, template } from '../component';

import backdropTemplate from './backdrop.html?raw';
import backdropStyles from './backdrop.css?raw';

@template(backdropTemplate)
@styles(backdropStyles)
class Backdrop extends Component {}

registerComponent(Backdrop);
