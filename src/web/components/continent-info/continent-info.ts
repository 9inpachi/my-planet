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

  // Mouse Wheel Events

  // Ugh. Scroll events aren't always triggered so we have to use mouse
  // wheel events.

  onWrapperMouseWheel(event: WheelEvent) {
    // Don't propogate to `scroll` event.
    event.preventDefault();
    // Apply the class `continent-active` with a minimum down scroll.
    // This class will disable scroll (`overflow: hidden;`) through css.
    if (this.isScrollDown(event)) {
      this.continent.classList.add('continent-active');
      this.continentActive = true;
    }
  }

  onContentMouseWheel(event: WheelEvent) {
    // We only stop propagation when the continent is active. If we stop
    // it in the start, scrolling on the content won't activate the
    // continent.
    this.continentActive && event.stopPropagation();
    const scrollTop = this.continentContent.scrollTop;

    if (scrollTop === 0 && this.isScrollUp(event)) {
      this.continent.classList.remove('continent-active');
      this.continentActive = false;
    }
  }

  private isScrollUp(event: WheelEvent) {
    return event.deltaY < 0;
  }

  private isScrollDown(event: WheelEvent) {
    return event.deltaY > 0;
  }

  // Scroll Events for Other Devices

  onWrapperScroll() {
    this.continent.classList.add('continent-active');
    // Setting to `scrollTop = 1` so the content can be scrolled up. Because the
    // `scroll` event isn't triggered with `scrollTop = 0` when deactivating the content.
    this.continentContent.scrollTop = 1;
    this.continentActive = true;
  }

  onContentScroll(event: Event) {
    this.continentActive && event.stopPropagation();
    const scrollTop = this.continentContent.scrollTop;

    if (scrollTop === 0) {
      this.continent.classList.remove('continent-active');
      this.continentActive = false;
    }
  }
}

registerComponent(ContinentInfo);
