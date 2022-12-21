import {
  Component,
  template,
  styles,
  registerComponent,
  property,
} from '../../../component';

import continentHeaderTemplate from './continent-header.html?raw';
import continentHeaderStyles from './continent-header.css?raw';

@template(continentHeaderTemplate)
@styles(continentHeaderStyles)
class ContinentHeader extends Component {
  @property()
  icon!: string;

  onBackClick(event: MouseEvent) {
    event.stopPropagation();

    window.planet.resetControls();
    document.querySelector('mp-continents > *[open]')?.removeAttribute('open');
  }
}

registerComponent(ContinentHeader);
