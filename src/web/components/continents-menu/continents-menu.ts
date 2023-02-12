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
    const styles = this.constructMenuOptionsStyles();
    const stylesheet = new CSSStyleSheet();

    stylesheet.replaceSync(styles);
    this.shadowDOM.adoptedStyleSheets.push(stylesheet);
  }

  onMenuToggleClick() {
    this.hasAttribute('open')
      ? this.removeAttribute('open')
      : this.setAttribute('open', '');
  }

  private constructMenuOptionsStyles() {
    const menuOptions = [
      ...(this.getElement('continentsMenuOptions')?.children ?? []),
    ] as HTMLElement[];

    const menuOptionsCount = menuOptions.length - 1;
    const singleAngle = this.startAngle + this.rotationAngle / menuOptionsCount;

    const styles = menuOptions.reduce((accumulated, _current, index) => {
      const selector = this.getMenuItemSelector(index);

      accumulated += `${selector} {
        transform: ${this.getMenuItemTransformStyle(
          this.radius,
          singleAngle * index,
        )};
      }
      `;

      return accumulated;
    }, '');

    return styles;
  }

  private getMenuItemTransformStyle(radius: number, angle: number): string {
    return `rotate(${angle}deg) translate(${radius}rem) rotate(${-angle}deg)`;
  }

  private getMenuItemSelector(index: number) {
    return `:host([open]) > .continents-menu-options > mp-circle-button:nth-child(${
      index + 1
    })`;
  }
}

registerComponent(ContinentsMenu);
