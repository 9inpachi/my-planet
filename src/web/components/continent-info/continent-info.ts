import { Component, template, styles, registerComponent } from '../component';

import continentTemplate from './continent-info.html?raw';
import continentStyles from './continent-info.css?raw';

@template(continentTemplate)
@styles(continentStyles)
class ContinentInfo extends Component {
  private continent!: HTMLElement;
  private continentContent!: HTMLElement;
  private continentActive = false;

  onInit() {
    this.continent = this.getElement('continent') as HTMLElement;
    this.continentContent = this.getElement('continentContent') as HTMLElement;
  }

  onWrapperScroll(event: WheelEvent) {
    // Apply the class `continent-active` with a minimum down scroll.
    // This class will disable scroll (`overflow: hidden;`) through css.
    if (this.isScrollDown(event)) {
      this.continent.classList.add('continent-active');
      this.continentActive = true;
      event.preventDefault();
    }
  }

  onContentScroll(event: WheelEvent) {
    // We only stop propagation when the continent is active. If we stop
    // it in the start, scrolling on the content won't activate the
    // continent.
    this.continentActive && event.stopPropagation();
    const scrollTop = this.continentContent.scrollTop;

    if (scrollTop === 0 && this.isScrollUp(event)) {
      this.continent.classList.remove('continent-active');
      this.continentActive = false;
      event.preventDefault();
    }
  }

  private isScrollUp(event: WheelEvent) {
    return event.deltaY < 0;
  }

  private isScrollDown(event: WheelEvent) {
    return event.deltaY > 0;
  }
}

registerComponent(ContinentInfo);
