import { Planet as Planet3D } from '../../../planet/planet';
import { Component, template, styles, registerComponent } from '../component';
import { Router } from '../../services/router';
import { camelCaseToKebabCase } from '../../../common/util/string';

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
    this.setupContinentsRouting();
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
    const openContinentInfo = document.querySelector('mp-continents > *[open]');

    if (openContinentInfo) {
      openContinentInfo.removeAttribute('open');
      window.planet.resetControls();
    }
  }

  private setupContinentsRouting() {
    window.planet.onLoad(() => {
      const continents = window.planet.getContinents();
      const router = new Router();

      for (const continentName in continents) {
        router.addRoute(camelCaseToKebabCase(`/${continentName}`), () => {
          continents[continentName].continentInteractor.clickContinent();
        });
      }

      // Initialize the router and execute the current route handler.
      router.initialize();
    });
  }
}

registerComponent(Planet);
