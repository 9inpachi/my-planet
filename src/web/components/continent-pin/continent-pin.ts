import {
  Component,
  property,
  registerComponent,
  styles,
  template,
} from '../component';
import { camelCaseToKebabCase } from '../component/util/string';

import continentPinTemplate from './continent-pin.html?raw';
import continentPinStyles from './continent-pin.css?raw';

@template(continentPinTemplate)
@styles(continentPinStyles)
class ContinentPin extends Component {
  @property()
  name!: string;

  protected onInit() {
    this.loadIcon();
  }

  private async loadIcon() {
    const iconName = camelCaseToKebabCase(this.name);
    const svg = (await import(`../../../assets/icons/${iconName}.svg?raw`))
      .default;

    this.getElement('continentPinButton')?.insertAdjacentHTML(
      'afterbegin',
      svg,
    );
  }
}

registerComponent(ContinentPin);
