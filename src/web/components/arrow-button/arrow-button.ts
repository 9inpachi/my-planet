import {
  Component,
  property,
  registerComponent,
  styles,
  template,
} from '../component';

import arrowButtonTemplate from './arrow-button.html?raw';
import arrowButtonStyles from './arrow-button.css?raw';

@template(arrowButtonTemplate)
@styles(arrowButtonStyles)
class ArrowButton extends Component {
  @property()
  direction!: string;
  @property()
  title = '';
  @property()
  label!: string;
}

registerComponent(ArrowButton);
