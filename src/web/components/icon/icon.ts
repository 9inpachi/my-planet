import { Component, property, registerComponent, styles } from '../component';

import iconStyles from './icon.css?raw';

@styles(iconStyles)
class Icon extends Component {
  /** URL of the icon. */
  @property()
  src!: string;
  /** Local icon located in `./src/assets/icons`. */
  @property()
  icon!: string;

  protected onInit() {
    this.loadIcon();
  }

  private async loadIcon() {
    const svg = this.icon
      ? await this.importIconFromAssets()
      : await this.fetchIcon();

    this.shadowDOM.innerHTML = svg;
    // To be able to select the `svg` element with
    // `.icon-element::part(svg)` using css.
    this.shadowDOM.firstElementChild?.setAttribute('part', 'svg');
  }

  /**
   * Fetch the icon from a URL.
   */
  private async fetchIcon(): Promise<string> {
    return await (await fetch(this.src)).text();
  }

  /**
   * Import the icon from local assets.
   */
  private async importIconFromAssets(): Promise<string> {
    // Workaround. If the icon exists in a directory like "social" (in
    // "src/assets"), then we manually split the directory and icon.
    // Because it's not possible to use a path in dynamic import like
    // `social/facebook` as the value of `this.icon`. See
    // https://github.com/rollup/plugins/tree/master/packages/dynamic-import-vars#limitations.
    if (this.icon.includes('/')) {
      const [directory, icon] = this.icon.split('/');

      return (
        await import(`../../../assets/icons/${directory}/${icon}.svg?raw`)
      ).default;
    } else {
      return (await import(`../../../assets/icons/${this.icon}.svg?raw`))
        .default;
    }
  }
}

registerComponent(Icon);
