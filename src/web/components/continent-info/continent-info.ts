import { Component, template, styles, registerComponent } from '../component';

import continentTemplate from './continent-info.html?raw';
import continentStyles from './continent-info.css?raw';

@template(continentTemplate)
@styles(continentStyles)
class ContinentInfo extends Component {
  private continent!: HTMLElement;
  private continentHeader!: HTMLElement;
  // This spacing should be the same as `--continent-vertical-spacing`
  // in `continent-info.cs`.
  private readonly continentVerticalSpacing = 0.35;

  protected onInit() {
    this.continent = this.getElement('continent') as HTMLElement;
    this.continentHeader = this.getElement('continentHeader') as HTMLElement;
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
    // Simulating the `vh` (viewport height) CSS unit.
    const expectedScrollTop =
      document.documentElement.clientHeight * this.continentVerticalSpacing;
    const stickContinentHeader = this.continent.scrollTop > expectedScrollTop;

    if (stickContinentHeader) {
      this.continentHeader.classList.add('continent-header-sticky');
    } else {
      this.continentHeader.classList.remove('continent-header-sticky');
    }
  }

  private isContentScrollable() {
    return this.continent.scrollHeight > this.continent.offsetHeight;
  }
}

registerComponent(ContinentInfo);
