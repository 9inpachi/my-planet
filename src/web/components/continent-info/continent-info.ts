import { Component, template, styles, registerComponent } from '../component';

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

  attributeChangedCallback(name: string, _oldVal: string, newVal: string) {
    if (name !== 'open') {
      return;
    }

    // `open` attribute is not set.
    const isContinentClosing = newVal === null;

    if (isContinentClosing) {
      this.deactivateContinent();
    } else if (this.isContentScrollable()) {
      // Add the `.scrollable` class only if content is scrollable. So
      // the correct padding and margin can be applied to the continent
      // body to prevent the scroll bar from taking space.
      this.continent.classList.add('scrollable');
    }
  }

  onExpandCollapseClick() {
    const expandCollapseButton = this.getElement(
      'expandCollapseButton',
    ) as HTMLElement;
    const isContinentActive =
      this.continent.classList.contains('continent-active');

    if (isContinentActive) {
      this.deactivateContinent();
      this.continentBody.scrollTop = 0;
      expandCollapseButton.textContent = 'Expand';
    } else {
      this.activateContinent();
      this.continentBody.focus();
      expandCollapseButton.textContent = 'Collapse';
    }
  }

  private activateContinent() {
    // Add the class `continent-active` which will disable scroll
    // (`overflow: hidden;`) for continent and enable it for continent
    // body through css.
    this.continent.classList.add('continent-active');
  }

  private deactivateContinent() {
    this.continent.classList.remove('continent-active');
  }

  private isContentScrollable() {
    return this.continentBody.scrollHeight > this.continentBody.offsetHeight;
  }
}

registerComponent(ContinentInfo);
