import { Object3D, Vector3 } from 'three';
import { Easing } from '@tweenjs/tween.js';
import { Component, registerComponent, styles, template } from '../component';

import planetSplashTemplate from './planet-splash.html?raw';
import planetSplashStyles from './planet-splash.css?raw';

@template(planetSplashTemplate)
@styles(planetSplashStyles)
class PlanetSplash extends Component {
  planetObject?: Object3D;

  protected onInit() {
    window.planet.onLoad(() => {
      this.planetObject = window.planet.getScene().getObjectByName('planet');
      this.planetObject?.scale.setScalar(0.5);

      document.body.removeAttribute('loading');
    });
  }

  onHeaderClick() {
    if (!this.planetObject) {
      return;
    }

    const newScale = new Vector3().setScalar(1);
    const tween = window.planet
      .getAnimator()
      .createTween(this.planetObject.scale, newScale, {
        duration: 3000,
        easing: Easing.Quintic.Out,
      });

    this.setAttribute('closed', '');
    tween.start();
  }

  onMouseOver() {
    this.getElement('enterButton')?.setAttribute('active', '');
  }

  onMouseOut() {
    this.getElement('enterButton')?.removeAttribute('active');
  }
}

registerComponent(PlanetSplash);
