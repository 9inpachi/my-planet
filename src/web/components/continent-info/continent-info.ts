import { Component, template, styles, registerComponent } from '../component';
import { isScreenPortrait } from '../../../common/util/responsive';

import continentTemplate from './continent-info.html?raw';
import continentStyles from './continent-info.css?raw';

@template(continentTemplate)
@styles(continentStyles)
class ContinentInfo extends Component {
  private continent!: HTMLElement;
  private continentBody!: HTMLElement;

  protected onInit() {
    this.continent = this.getElement('continent') as HTMLElement;
    this.continentBody = this.getElement('continentBody') as HTMLElement;
  }

  // Should move the attribute observation logic to the @property
  // decorator.
  static get observedAttributes() {
    return ['open'];
  }

  attributeChangedCallback(name: string) {
    if (name !== 'open') {
      return;
    }

    if (this.isContentScrollable()) {
      // Add the `.scrollable` class only if content is scrollable. So
      // the correct padding and margin can be applied to the continent
      // body to prevent the scroll bar from taking space.
      this.continent.classList.add('scrollable');
    }
  }

  onContinentScroll() {
    // This should be the same as `--continent-vertical-spacing` in
    // `continent-info.cs`.
    const expectedScrollTop = isScreenPortrait()
      ? // Simulating `5rem` CSS unit.
        5 * 16
      : // Simulating `35vh` CSS unit.
        0.35 * document.documentElement.clientHeight;

    const clipScrollTop = this.continent.scrollTop - expectedScrollTop;

    if (clipScrollTop > 0) {
      this.continentBody.style.clipPath = `polygon(0 ${clipScrollTop}px, 100% ${clipScrollTop}px, 100% 100%, 0 100%)`;
    } else {
      this.continentBody.removeAttribute('style');
    }
  }

  private isContentScrollable() {
    return this.continent.scrollHeight > this.continent.offsetHeight;
  }
}

registerComponent(ContinentInfo);
