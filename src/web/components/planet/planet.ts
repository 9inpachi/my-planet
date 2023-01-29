import { Planet as Planet3D } from '../../../planet/planet';
import { Component, template, styles, registerComponent } from '../component';
import { HashRouter } from '../../services/router/hash-router';
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
  private router = HashRouter.getInstance();

  protected onInit() {
    const canvasElement = this.shadowDOM.querySelector(
      '#planet-canvas',
    ) as HTMLCanvasElement;

    window.planet = Planet3D.build({ canvasElement });

    this.closeContinentOnEscape();
    window.planet.onLoad(this.setupContinentsRouting.bind(this));
  }

  // This may not be the right place to add keyboard event handers.

  private closeContinentOnEscape() {
    document.addEventListener('keydown', (event) => {
      const isContinentOpen = !!document.querySelector(
        'mp-continents > *[open]',
      );

      if (event.key !== 'Escape' || !isContinentOpen) {
        return;
      }

      this.router.to('/');
    });
  }

  private setupContinentsRouting() {
    const continents = window.planet.getContinents();
    const planetSplash = document.getElementsByTagName('mp-planet-splash')[0];

    for (const continentName in continents) {
      const continentRoute = camelCaseToKebabCase(`/${continentName}`);

      this.router.addRoute(continentRoute, () => {
        continents[continentName].continentInteractor.openContinent();

        // Close the planet splash if it's open.
        if (!planetSplash.hasAttribute('closed')) {
          // The click somehow doesn't work without a timeout. ¯\_(ツ)_/¯
          setTimeout(() => {
            (planetSplash.shadowRoot?.firstChild as HTMLElement).click();
          });
        }
      });

      continents[continentName].continentInteractor.onContinentClick(() =>
        this.router.to(continentRoute),
      );
    }

    // Initialize the router and execute the current route handler.
    this.router.initialize();
  }
}

registerComponent(Planet);
