import { Component, registerComponent, styles, template } from '../component';
import { HashRouter } from '../../services/router/hash-router';

import continentsMenuTemplate from './continents-menu.html?raw';
import continentsMenuStyles from './continents-menu.css?raw';

@template(continentsMenuTemplate)
@styles(continentsMenuStyles)
class ContinentsMenu extends Component {
  private router = HashRouter.getInstance();

  private radius = 8;
  private startAngle = 0;
  private rotationAngle = 90;

  protected onInit() {
    const styles = this.constructMenuOptionsStyles();
    const stylesheet = new CSSStyleSheet();

    stylesheet.replaceSync(styles);
    this.shadowDOM.adoptedStyleSheets.push(stylesheet);
  }

  onMenuToggleClick(event: MouseEvent) {
    // Do not propogate to click the backdrop.
    event.stopPropagation();

    if (this.hasAttribute('open')) {
      this.removeAttribute('open');
      this.getElement('backdrop')?.removeAttribute('active');
    } else {
      this.setAttribute('open', '');
      this.getElement('backdrop')?.setAttribute('active', '');
    }
  }

  onBackDropClick() {
    this.removeAttribute('open');
    this.getElement('backdrop')?.removeAttribute('active');
  }

  getMenuItemClickListener(route: string) {
    return () => this.router.to(route);
  }

  /**
   * Construct styles for creating an arc of menu items with a rotation
   * of `rotationAngle` and `startAngle` as the starting angle.
   */
  private constructMenuOptionsStyles() {
    const menuOptions = [
      ...(this.getElement('continentsMenuOptions')?.children ?? []),
    ];

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

  private getMenuItemSelector(index: number) {
    return `:host([open]) > mp-backdrop > .continents-menu-options > mp-circle-button:nth-child(${
      index + 1
    })`;
  }

  private getMenuItemTransformStyle(radius: number, angle: number): string {
    return `rotate(${angle}deg) translate(${radius}rem) rotate(${-angle}deg)`;
  }
}

registerComponent(ContinentsMenu);
