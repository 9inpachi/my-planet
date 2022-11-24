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

  iconSrc!: string;

  protected async onBeforeInitAsync() {
    this.iconSrc = (
      await import(`../../../assets/icons/${this.icon}.svg?url`)
    ).default;
  }
}

registerComponent(CircleButton);
