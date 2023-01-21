import { Easing } from '@tweenjs/tween.js';
import { MathUtils, Matrix4, Object3D, Quaternion, Vector3 } from 'three';
import { isScreenPortrait } from '../../../../common/util/responsive';
import { Three } from '../../../../three';
import {
  getObjectCenter,
  getDirectionBetweenVectors,
  getObjectDirection,
  getObjectPositionOnScreen,
} from '../../../../three/common/util/transform';
import { BaseContinent } from '../../base-continent';
import { CameraTargetTransform } from '../lib/types';
import {
  continentCameraTransformMobile,
  continentCameraTransformDesktop,
} from '../lib/continent-camera-config';
import { camelCaseToKebabCase } from '../../../../common/util/string';

// If we want to remove dependency to `src/web` and avoid accessing DOM
// elements from here, we can add callbacks with methods like
// `onContinentClick`, `onContinentMove`, `onContinentMouseOver`,
// `onContinentMouseOut` etc. and add event listeners from `src/web` to
// mutate DOM elements there instead of here.

export class ContinentInteractor<T extends BaseContinent> {
  private continentObject: Object3D;
  private continentShadowRoot: ShadowRoot;
  private cameraAnimationOptions = {
    duration: 2000,
    easing: Easing.Cubic.Out,
  };

  constructor(private three: Three, continent: T, private sun: Object3D) {
    this.continentObject = continent.getObject();
    this.continentShadowRoot = document.querySelector(
      `mp-${camelCaseToKebabCase(this.continentObject.name)}`,
    )?.shadowRoot as ShadowRoot;
  }

  public setupEventHandlers() {
    this.setupContinentClick();
    this.setupContinentMouseOver();
  }

  private setupContinentClick() {
    this.three
      .getSelector()
      .onClick(this.continentObject, this.onContinentClick.bind(this));
  }

  private setupContinentMouseOver() {
    const threeSelector = this.three.getSelector();
    const threeEventHandler = this.three.getEventHandler();

    // Using a reference so it can be removed with
    // `removeObjectMoveListener`.
    const updateContinentPinPosition = () => this.updateContinentPinPosition();

    threeSelector.onMouseOver(this.continentObject, () => {
      // Update position once on mouse over because `onObjectMove`
      // triggers after the globe rotates which leads to a small lag.
      updateContinentPinPosition();

      this.onContinentMouseOver();
      threeEventHandler.onObjectMove(
        this.continentObject,
        updateContinentPinPosition,
      );
    });

    threeSelector.onMouseOut(this.continentObject, () => {
      this.onContinentMouseOut();
      threeEventHandler.removeObjectMoveListener(
        this.continentObject,
        updateContinentPinPosition,
      );
    });
  }

  public clickContinent() {
    this.onContinentClick();
  }

  private onContinentClick() {
    // If continent is already open.
    if (this.isContinentInfoOpen() || this.isAnyContinentInfoOpening()) {
      return;
    }

    // Position and Direction Calculations

    const continentPosition = getObjectCenter(this.continentObject);
    const origin = new Vector3(0, 0, 0);
    const continentUpDir = getDirectionBetweenVectors(
      origin,
      continentPosition,
    );

    // Controls Changes

    const controls = this.three.getControls();
    // This affects the rotation sensitivity.
    controls.getSpinControls().trackballRadius = 50;
    controls.setRotationAxis(continentUpDir);

    // New Camera Transform

    const targetCameraTransform = this.getContinentCameraTransform(
      continentUpDir,
      continentPosition,
    );

    // Animate and Apply Changes

    const camera = this.three.getControls().getCamera();
    const threeAnimations = this.three.getAnimator();

    [camera, this.sun].forEach((object) => {
      threeAnimations.animateObjectToTarget(
        object,
        targetCameraTransform.position,
        targetCameraTransform.quaternion,
        this.cameraAnimationOptions,
      );
    });

    // Open Continent Info

    this.openContinentInfo(this.cameraAnimationOptions.duration / 2);
  }

  private openContinentInfo(openDelay: number) {
    // Close any open continent info.
    document.querySelector('mp-continents > *[open]')?.removeAttribute('open');

    const continentHost = this.continentShadowRoot.host;
    // This is to avoid problems caused by clicking another continent
    // in this timeout.
    continentHost?.setAttribute('opening', '');

    // Open the continent after a delay for a smoother animation
    // experience. We do it here instead of CSS to make it configurable
    // with `cameraAnimationOptions.duration`.
    setTimeout(() => {
      continentHost?.setAttribute('open', '');
      continentHost?.removeAttribute('opening');
    }, openDelay);
  }

  private isContinentInfoOpen() {
    return this.getContinentInfo().hasAttribute('open') ?? false;
  }

  private isAnyContinentInfoOpening() {
    const openingContinentInfo = document.querySelector(
      'mp-continents > *[opening]',
    );

    return !!openingContinentInfo;
  }

  private getContinentCameraTransform(
    continentUpDir: Vector3,
    continentPosition: Vector3,
  ): CameraTargetTransform {
    // Configuration

    const {
      cameraDistanceUpContinent,
      cameraDistanceToContinent,
      cameraRotation,
      cameraLeftSpace,
      cameraTopSpace,
    } = isScreenPortrait()
      ? continentCameraTransformMobile
      : continentCameraTransformDesktop;

    // New Camera Position

    const targetCameraClone = new Object3D();
    // This will set the right direction by looking at the continent
    // from origin.
    targetCameraClone.lookAt(continentUpDir);
    targetCameraClone.position.copy(continentPosition);
    targetCameraClone
      .translateZ(cameraDistanceUpContinent)
      .translateX(cameraDistanceToContinent);
    targetCameraClone.lookAt(continentPosition);

    // New Camera Up

    const newCameraDir = getObjectDirection(targetCameraClone);
    const cameraUp = new Vector3()
      .copy(continentUpDir)
      .applyAxisAngle(newCameraDir, MathUtils.degToRad(cameraRotation));

    // Use the camera up and continent position to look at the continent
    // with the right camera rotation.
    const targetCameraQuaternion = new Quaternion().setFromRotationMatrix(
      new Matrix4().lookAt(
        targetCameraClone.position,
        continentPosition,
        cameraUp,
      ),
    );

    // Set Camera's Target Transformation

    targetCameraClone.quaternion.copy(targetCameraQuaternion);
    // Move camera to the left and top to make space for the continent
    // content. This should only be done after applying the rotation
    // (look at with quaternion) to avoid making continent the center.
    targetCameraClone.translateX(-cameraLeftSpace);
    targetCameraClone.translateY(cameraTopSpace);

    return {
      position: targetCameraClone.position,
      quaternion: targetCameraClone.quaternion,
    };
  }

  // Mouse Over Interactive

  private onContinentMouseOver() {
    // If continent is already open.
    if (this.isContinentInfoOpen() || this.isAnyContinentInfoOpening()) {
      return;
    }

    const canvas = this.three.getRenderer().getCanvas();
    const continentPin = this.getContinentPinElement();

    canvas.classList.add('has-pointer');
    continentPin.setAttribute('mouseover', '');
  }

  private onContinentMouseOut() {
    const continentPin = this.getContinentPinElement();
    const canvas = this.three.getRenderer().getCanvas();

    continentPin.removeAttribute('mouseover');
    canvas.classList.remove('has-pointer');
  }

  private updateContinentPinPosition() {
    const distanceDownContinent = 5;
    const canvas = this.three.getRenderer().getCanvas();
    const camera = this.three.getControls().getCamera();
    const continentPosition = getObjectCenter(this.continentObject);
    const origin = new Vector3(0, 0, 0);
    const continentUpDir = getDirectionBetweenVectors(
      origin,
      continentPosition,
    );
    // Move the position a bit up the continent.
    continentPosition.add(
      continentUpDir.clone().multiplyScalar(-distanceDownContinent),
    );

    const continentOnScreenPosition = getObjectPositionOnScreen(
      continentPosition,
      camera,
      canvas,
    );
    const { x: left, y: top } = continentOnScreenPosition;
    const continentPin = this.getContinentPinElement();

    continentPin.style.setProperty(
      'transform',
      `translate(-50%, -50%) translate(${left}px, ${top}px)`,
    );
  }

  private getContinentPinElement(): HTMLElement {
    return this.continentShadowRoot.querySelector(
      'mp-continent-pin',
    ) as HTMLElement;
  }

  private getContinentInfo(): HTMLElement {
    return this.continentShadowRoot.querySelector(
      `mp-continent-info`,
    ) as HTMLElement;
  }
}
