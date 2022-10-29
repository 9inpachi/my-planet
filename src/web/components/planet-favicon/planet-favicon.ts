import { Component, registerComponent } from '../component';

class PlanetFavicon extends Component {
  private fraemDelay = 500;
  private iconsCount = 7;

  protected onInit() {
    this.animateFavicon();
  }

  private async animateFavicon() {
    const link = document.head.querySelector(
      'link[rel="icon"]',
    ) as HTMLLinkElement;
    const icons = await this.loadIcons();
    let currentIconIndex = 1;

    setInterval(() => {
      link.href = icons[currentIconIndex++];

      if (currentIconIndex > this.iconsCount) {
        currentIconIndex = 1;
      }
    }, this.fraemDelay);
  }

  private async loadIcons(): Promise<string[]> {
    const icons: string[] = [];

    for (let i = 1; i <= this.iconsCount; i++) {
      icons[i] = (
        await import(`../../../assets/icons/favicon/planet-icon-${i}.ico`)
      ).default;
    }

    return icons;
  }
}

registerComponent(PlanetFavicon);
