import {
  Component,
  template,
  styles,
  registerComponent,
  property,
} from '../../../component';
import { Router } from '../../../../services/router';

import continentHeaderTemplate from './continent-header.html?raw';
import continentHeaderStyles from './continent-header.css?raw';

@template(continentHeaderTemplate)
@styles(continentHeaderStyles)
class ContinentHeader extends Component {
  @property()
  icon!: string;

  router: Router = Router.getInstance();

  protected onInit() {
    this.router.addRoute('/', () => this.closeOpenContinent());
  }

  onBackClick(event: MouseEvent) {
    event.stopPropagation();

    if (this.router.getLastRoute() !== undefined) {
      this.router.back();
    } else {
      this.router.replace('/');
    }
  }

  private closeOpenContinent() {
    window.planet.resetControls();
    document.querySelector('mp-continents > *[open]')?.removeAttribute('open');
  }
}

registerComponent(ContinentHeader);
