import { Component, registerComponent } from '../component';

import * as planetFavicons from './lib/icons';

class PlanetFavicon extends Component {
  private frameDelay = 400;

  protected onInit() {
    this.animateFavicon();
  }

  private animateFavicon() {
    const link = document.head.querySelector(
      'link[rel="icon"]',
    ) as HTMLLinkElement;
    const faviconIcons = Object.values(planetFavicons);
    let currentIconIndex = 0;

    setInterval(() => {
      link.href = faviconIcons[currentIconIndex++];

      if (currentIconIndex === faviconIcons.length) {
        currentIconIndex = 0;
      }
    }, this.frameDelay);
  }
}

registerComponent(PlanetFavicon);
