import { Component, property, registerComponent, styles } from '../component';

import iconStyles from './icon.css?raw';

@styles(iconStyles)
class Icon extends Component {
  @property()
  src!: string;

  protected onInit() {
    this.loadIcon();
  }

  private async loadIcon() {
    const svg = await (await fetch(this.src)).text();
    this.shadowDOM.innerHTML = svg;
    // To be able to select the `svg` element with
    // `.icon-element::part(svg)` using css.
    this.shadowDOM.firstElementChild?.setAttribute('part', 'svg');
  }
}

registerComponent(Icon);
