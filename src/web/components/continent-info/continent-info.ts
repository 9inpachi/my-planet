import { Component, template, styles, registerComponent } from '../component';

import continentTemplate from './continent-info.html?raw';
import continentStyles from './continent-info.css?raw';

@template(continentTemplate)
@styles(continentStyles)
class ContinentInfo extends Component {
  private continent!: HTMLElement;
  private continentContent!: HTMLElement;

  onInit() {
    this.continent = this.getElement('continent') as HTMLElement;
    this.continentContent = this.getElement('continentContent') as HTMLElement;
  }

  onWrapperScroll(event: WheelEvent) {
    console.log('WRAPPER SCROLL');
    // Apply the class `continent-active` with a minimal scroll.
    // This class will disable scroll (`overflow: hidden;`) through css.
    if (!this.isScrollUp(event)) {
      this.continent.classList.add('continent-active');
      event.preventDefault();
    }
  }

  onContentScroll(event: WheelEvent) {
    console.log('CONTENT SCROLL');
    event.stopPropagation();
    const scrollTop = this.continentContent.scrollTop;

    if (scrollTop === 0 && this.isScrollUp(event)) {
      this.continent.classList.remove('continent-active');
      event.preventDefault();
    }
  }

  private isScrollUp(event: WheelEvent) {
    return event.deltaY < 0;
  }
}

registerComponent(ContinentInfo);
