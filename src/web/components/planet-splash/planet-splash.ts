import { Object3D, Vector3 } from 'three';
import { Component, registerComponent, styles, template } from '../component';

import planetSplashTemplate from './planet-splash.html?raw';
import planetSplashStyles from './planet-splash.css?raw';
import { Easing } from '@tweenjs/tween.js';

@template(planetSplashTemplate)
@styles(planetSplashStyles)
class PlanetSplash extends Component {
  planetObject?: Object3D;

  protected onInit() {
    window.planet.onLoad(() => {
      this.planetObject = window.planet.getScene().getObjectByName('planet');
      this.planetObject?.scale.setScalar(0.25);
    });
  }

  onHeaderClick() {
    if (!this.planetObject) {
      return;
    }

    const newScale = new Vector3(1, 1, 1);
    const tween = window.planet
      .getAnimator()
      .createTween(this.planetObject.scale, newScale, {
        duration: 3000,
        easing: Easing.Cubic.Out,
      });

    this.setAttribute('closed', '');
    tween.start();
  }
}

registerComponent(PlanetSplash);
