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

  iconSrc!: string;

  protected async onBeforeInitAsync() {
    this.iconSrc = (
      await import(
        `../../../assets/icons/${camelCaseToKebabCase(this.name)}.svg?url`
      )
    ).default;
  }
}

registerComponent(ContinentPin);
