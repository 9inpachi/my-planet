import {
  Component,
  property,
  registerComponent,
  styles,
  template,
} from '../component';

import circleButtonTemplate from './circle-button.html?raw';
import circleButtonStyles from './circle-button.css?raw';

@template(circleButtonTemplate)
@styles(circleButtonStyles)
class CircleButton extends Component {
  @property()
  icon!: string;
  @property()
  tooltipPosition = 'top';
  @property()
  link!: string;

  tag!: 'button' | 'a';

  protected async onBeforeInitAsync() {
    this.tag = this.link ? 'a' : 'button';
  }
}

registerComponent(CircleButton);
