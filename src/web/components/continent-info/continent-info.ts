import { Component, template, styles, registerComponent } from '../component';

import continentTemplate from './continent-info.html?raw';
import continentStyles from './continent-info.css?raw';

@template(continentTemplate)
@styles(continentStyles)
class ContinentInfo extends Component {
  private continent!: HTMLElement;
  private continentBody!: HTMLElement;
  private continentActive = false;

  private touchStartY = 0;

  onInit() {
    this.continent = this.getElement('continent') as HTMLElement;
    this.continentBody = this.getElement('continentBody') as HTMLElement;
  }

  // Should move the attribute observation logic to the @property
  // decorator.
  static get observedAttributes() {
    return ['open'];
  }

  attributeChangedCallback(name: string, _oldVal: string, newVal: string) {
    if (name !== 'open') {
      return;
    }

    const isContinentOpen = newVal !== null;

    if (isContinentOpen) {
      const { scrollHeight, offsetHeight } = this.continentBody;
      if (scrollHeight > offsetHeight) {
        // Add the `has-scroll` class only if content is scrollable. So
        // the correct padding and margin can be applied to the
        // continent body to prevent the scroll bar from taking space.
        this.continentBody.classList.add('has-scroll');
      }
    } else {
      this.deactivateContinent();
    }
  }

  // Mouse Wheel Events

  // Ugh. Scroll events aren't always triggered so we have to use mouse
  // wheel events.

  onWrapperMouseWheel(event: WheelEvent) {
    // Don't propogate to the `scroll` event.
    event.preventDefault();
    // Active the continent with a minimum down scroll.
    if (this.isScrollDown(event)) {
      this.activateContinent();
    }
  }

  onBodyMouseWheel(event: WheelEvent) {
    // We only stop propagation when the continent is active. If we stop
    // it in the start, scrolling on the content won't activate the
    // continent.
    this.continentActive && event.stopPropagation();
    const scrollTop = this.continentBody.scrollTop;

    if (scrollTop === 0 && this.isScrollUp(event)) {
      this.deactivateContinent();
    }
  }

  // Scroll Events for Other Devices

  onWrapperScroll() {
    this.activateContinent();
  }

  onBodyScroll(event: Event) {
    this.continentActive && event.stopPropagation();
    const scrollTop = this.continentBody.scrollTop;

    if (scrollTop === 0) {
      this.deactivateContinent();
    }
  }

  // Other Ways to Activate Continent

  onWrapperTouchStart(event: TouchEvent) {
    this.touchStartY = event.changedTouches[0].clientY;
  }

  onWrapperTouchEnd(event: TouchEvent) {
    if (this.continentActive) {
      return;
    }

    const touchEndY = event.changedTouches[0].clientY;
    if (touchEndY < this.touchStartY) {
      this.activateContinent();
    }
  }

  // Helper Methods

  private isScrollUp(event: WheelEvent) {
    return event.deltaY < 0;
  }

  private isScrollDown(event: WheelEvent) {
    return event.deltaY > 0;
  }

  private activateContinent() {
    // Add the class `continent-active` which will disable scroll
    // (`overflow: hidden;`) for continent and enable it for continent
    // body through css.
    this.continent.classList.add('continent-active');
    // Setting to `scrollTop = 1` so the content can be scrolled up. Because the
    // `scroll` event isn't triggered with `scrollTop = 0` when deactivating the content.
    this.continentBody.scrollTop = 1;
    this.continentActive = true;
  }

  private deactivateContinent() {
    this.continent.classList.remove('continent-active');
    this.continentActive = false;
  }
}

registerComponent(ContinentInfo);
