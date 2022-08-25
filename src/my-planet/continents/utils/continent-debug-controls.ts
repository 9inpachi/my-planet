import { GUI } from 'dat.gui';
import { MathUtils } from 'three';
import { BaseObject } from '../../objects/base-object';
import { WithPositionAttributes } from '../lib/types';

export class ContinentDebugControls {
  private gui: GUI;

  constructor(private globeRadius: number) {
    this.gui = new GUI();
  }

  public addObjectOptions<T>(
    groupName: string,
    planetObject: BaseObject<T>,
    objectAttributes: WithPositionAttributes<T>,
    index: number,
  ) {
    const groupFolder =
      this.gui.__folders[groupName] ?? this.gui.addFolder(groupName);
    const object = planetObject.getObject();
    const objectFolder = groupFolder.addFolder(object.name + index);

    // BaseObjectProperties (scale)
    objectFolder.add({ scale: object.scale.x }, 'scale').onChange((scale) => {
      object.scale.setScalar(scale);
    });

    // WithPositionAttributes (lat, lng, rotation, landHeight)
    objectFolder
      .add({ y: MathUtils.radToDeg(object.rotation.y) }, 'y')
      .name('rotation')
      .onChange((value) => {
        object.rotateY(MathUtils.degToRad(value));
      });

    const locationAttributes = {
      lat: objectAttributes.lat,
      lng: objectAttributes.lng,
      landHeight: objectAttributes.landHeight ?? 0,
    };

    Object.keys(locationAttributes).forEach((locationAttribute) => {
      objectFolder.add(locationAttributes, locationAttribute).onChange(() => {
        planetObject.applyLatLng(
          this.globeRadius + (locationAttributes.landHeight ?? 0),
          locationAttributes.lat,
          locationAttributes.lng,
        );
      });
    });
  }
}
