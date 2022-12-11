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

    // Workaround. If the icon exists in a directory like "social", then
    // we manually split the directory and icon. Because it's not
    // possible to specify a path like `social/facebook` in `this.icon`.
    // See https://www.npmjs.com/package/vite-plugin-dynamic-import.
    if (this.icon.includes('/')) {
      const [directory, icon] = this.icon.split('/');

      this.iconSrc = (
        await import(`../../../assets/icons/${directory}/${icon}.svg?url`)
      ).default;
    } else {
      this.iconSrc = (
        await import(`../../../assets/icons/${this.icon}.svg?url`)
      ).default;
    }
  }
}

registerComponent(CircleButton);
