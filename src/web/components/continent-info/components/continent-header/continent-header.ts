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
class ContinentHeader extends Component {
  onBackClick(event: MouseEvent) {
    event.stopPropagation();

    window.planet.resetControls();
    document.querySelector('mp-continent-info[open]')?.removeAttribute('open');
  }
}

registerComponent(ContinentHeader);
