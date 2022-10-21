import {
  Component,
  template,
  styles,
  registerComponent,
} from '../../../component';

import continentBodyTemplate from './continent-body.html?raw';
import continentBodyStyles from './continent-body.css?raw';

@template(continentBodyTemplate)
@styles(continentBodyStyles)
class ContinentBody extends Component {}

registerComponent(ContinentBody);
