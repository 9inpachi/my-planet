import {
  Component,
  template,
  styles,
  registerComponent,
} from '../../../component';

import continentHeaderTemplate from './continent-header.html?raw';
import continentHeaderStyles from './continent-header.css?raw';

@template(continentHeaderTemplate)
@styles(continentHeaderStyles)
class ContinentHeader extends Component {}

registerComponent(ContinentHeader);
