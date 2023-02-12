import { Component, registerComponent, styles, template } from '../component';

import continentsMenuTemplate from './continents-menu.html?raw';
import continentsMenuStyles from './continents-menu.css?raw';

@template(continentsMenuTemplate)
@styles(continentsMenuStyles)
class ContinentsMenu extends Component {
  private radius = 8;
  private startAngle = 0;
  private rotationAngle = 90;

  protected onInit() {
    const menuOptions = [
      ...(this.getElement('continentsMenuOptions')?.children ?? []),
    ] as HTMLElement[];

    const menuOptionsCount = menuOptions.length - 1;
    const singleAngle = this.startAngle + this.rotationAngle / menuOptionsCount;

    let styles = '';

    menuOptions.forEach((_menuOption, index) => {
      styles += `.continents-menu-options.active > mp-circle-button:nth-child(${
        index + 1
      }) {
        transform: ${this.getTransformStyle(this.radius, singleAngle * index)};
      }
      `;
    });

    const stylesheet = new CSSStyleSheet();
    stylesheet.replaceSync(styles);
    this.shadowDOM.adoptedStyleSheets.push(stylesheet);
  }

  private getTransformStyle(radius: number, angle: number): string {
    return `rotate(${angle}deg) translate(${radius}rem) rotate(${-angle}deg)`;
  }

  onMenuToggleClick() {
    this.getElement('continentsMenuOptions')?.classList.toggle('active');
  }
}

registerComponent(ContinentsMenu);
