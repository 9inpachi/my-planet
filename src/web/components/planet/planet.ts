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

    this.closeContinentOnEscape();
  }

  // This may not be the right place to add keyboard event handers.

  closeContinentOnEscape() {
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') {
        this.deactiveContinentInfo();
      }
    });
  }

  private deactiveContinentInfo() {
    const openContinentInfo = document.querySelector('mp-continent-info[open]');

    if (openContinentInfo) {
      openContinentInfo.removeAttribute('open');
      window.planet.resetControls();
    }
  }
}

registerComponent(Planet);
