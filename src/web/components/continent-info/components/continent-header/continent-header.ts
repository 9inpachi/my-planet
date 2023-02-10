import {
  Component,
  template,
  styles,
  registerComponent,
  property,
} from '../../../component';
import { HashRouter } from '../../../../services/router/hash-router';

import continentHeaderTemplate from './continent-header.html?raw';
import continentHeaderStyles from './continent-header.css?raw';

@template(continentHeaderTemplate)
@styles(continentHeaderStyles)
class ContinentHeader extends Component {
  @property()
  icon!: string;

  router: HashRouter = HashRouter.getInstance();

  onBackClick(event: MouseEvent) {
    event.stopPropagation();

    this.router.to('/');
  }
}

registerComponent(ContinentHeader);
