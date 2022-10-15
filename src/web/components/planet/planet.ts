import { Planet as Planet3D } from '../../../planet/planet';
import { Component, template, styles, registerComponent } from '../component';

import planetTemplate from './planet.html?raw';
import planetStyles from './planet.css?url';

@template(planetTemplate)
@styles(planetStyles)
class Planet extends Component {
  protected onStylesLoaded() {
    // The size of the component is only correctly applied after the styles have loaded.
    // Hack?
    const canvasElement = this.shadowDOM.querySelector(
      '#planet-canvas',
    ) as HTMLCanvasElement;

    Planet3D.build({ canvasElement });
  }
}

registerComponent(Planet);
