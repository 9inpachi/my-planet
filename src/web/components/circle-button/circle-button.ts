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

  iconSrc!: string;
  tag!: 'button' | 'a';

  protected async onBeforeInitAsync() {
    this.tag = this.link ? 'a' : 'button';
    // Using the string directly in the import statement gives an error
    // when using paths like `social/facebook`.
    const path = `../../../assets/icons/${this.icon}.svg?url`;
    this.iconSrc = (await import(/* @vite-ignore */ path)).default;
  }
}

registerComponent(CircleButton);
