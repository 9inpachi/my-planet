import { Component, template, styles, registerComponent } from '../component';

import continentTemplate from './continent-info.html?raw';
import continentStyles from './continent-info.css?raw';

@template(continentTemplate)
@styles(continentStyles)
class ContinentInfo extends Component {
  onWrapperScroll() {
    // Apply the class `scrolled-top` with a minimal scroll.
    // This class will disable scroll (`overflow: hidden;`) through css.
    this.getElement('continent')?.classList.add('scrolled-top');
  }

  onContentScroll(event: Event) {
    event.stopPropagation();
    const scrollTop = this.getElement('continentContent')?.scrollTop;

    if (scrollTop === 0) {
      this.getElement('continent')?.classList.remove('scrolled-top');
    }
  }
}

registerComponent(ContinentInfo);
