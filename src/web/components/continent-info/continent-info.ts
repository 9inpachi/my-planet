import { Component, template, styles, registerComponent } from '../component';

import continentTemplate from './continent-info.html?raw';
import continentStyles from './continent-info.css?raw';

@template(continentTemplate)
@styles(continentStyles)
class ContinentInfo extends Component {
  onScroll() {
    const continentHeader = this.getElement('continentHeader');
    if (!continentHeader) {
      return;
    }

    const { y } = continentHeader.getBoundingClientRect();

    if (y === 0) {
      continentHeader.classList.add('scrolled');
    } else {
      continentHeader.classList.remove('scrolled');
    }
  }
}

registerComponent(ContinentInfo);
