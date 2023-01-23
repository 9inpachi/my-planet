import {
  Component,
  template,
  styles,
  registerComponent,
  property,
} from '../../../component';

import continentHeaderTemplate from './continent-header.html?raw';
import continentHeaderStyles from './continent-header.css?raw';
import { Router } from '../../../../services/router';

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
    this.router.back();
  }

  private closeOpenContinent() {
    window.planet.resetControls();
    document.querySelector('mp-continents > *[open]')?.removeAttribute('open');
  }
}

registerComponent(ContinentHeader);
