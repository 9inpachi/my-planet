import { Component, template, styles, registerComponent } from '../component';

import continentTemplate from './continent-info.html?raw';
import continentStyles from './continent-info.css?raw';

@template(continentTemplate)
@styles(continentStyles)
class ContinentInfo extends Component {
  private continent!: HTMLElement;

  protected onInit() {
    this.continent = this.getElement('continent') as HTMLElement;
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
    // TODO: Handle this better.
    const expectedScrollTop = document.documentElement.clientHeight * 0.35;
    if (this.continent.scrollTop > expectedScrollTop) {
      this.continent.classList.add('scrolled');
    } else {
      this.continent.classList.remove('scrolled');
    }
  }

  private isContentScrollable() {
    return this.continent.scrollHeight > this.continent.offsetHeight;
  }
}

registerComponent(ContinentInfo);
