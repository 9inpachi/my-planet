import { Planet as Planet3D } from '../../../planet/planet';
import { Component, template, styles, registerComponent } from '../component';

import planetTemplate from './planet.html?raw';
import planetStyles from './planet.css?raw';

declare global {
  interface Window {
    planet: Planet3D;
  }
}

@template(planetTemplate)
@styles(planetStyles)
class Planet extends Component {
  protected onInit() {
    const canvasElement = this.shadowDOM.querySelector(
      '#planet-canvas',
    ) as HTMLCanvasElement;

    window.planet = Planet3D.build({ canvasElement });
  }
}

registerComponent(Planet);
