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
  @property()
  label!: string;
  @property()
  primaryColor!: string;
  @property()
  secondaryColor!: string;

  iconSrc: string;

  constructor() {
    super();

    this.iconSrc = `./assets/icons/${camelCaseToKebabCase(this.name)}.svg`;
    this.style.setProperty('--primary-color', this.primaryColor);
    this.style.setProperty('--secondary-color', this.secondaryColor);
  }
}

registerComponent(ContinentPin);
