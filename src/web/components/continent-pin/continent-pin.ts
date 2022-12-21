import {
  Component,
  property,
  registerComponent,
  styles,
  template,
} from '../component';

import continentPinTemplate from './continent-pin.html?raw';
import continentPinStyles from './continent-pin.css?raw';

@template(continentPinTemplate)
@styles(continentPinStyles)
class ContinentPin extends Component {
  @property()
  icon!: string;
}

registerComponent(ContinentPin);
