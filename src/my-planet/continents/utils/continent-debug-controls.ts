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
    { lat, lng, rotation, landHeight }: WithPositionAttributes<T>,
    index: number,
  ) {
    const groupFolder =
      this.gui.__folders[groupName] ?? this.gui.addFolder(groupName);
    const object = planetObject.getObject();
    const objectFolder = groupFolder.addFolder(object.name + index);

    // BaseObjectProperties (scale)
    objectFolder
      .add({ scale: object.scale.x }, 'scale', 0, 5)
      .onChange((scale) => {
        object.scale.setScalar(scale);
      });

    // WithPositionAttributes - rotation
    const cloneObject = object.clone();
    rotation && cloneObject.rotateY(-MathUtils.degToRad(rotation));
    const defaultRotation = cloneObject.rotation.clone();

    const yRotation = { y: rotation ?? 0 };

    objectFolder
      .add(yRotation, 'y', 0, 360)
      .name('rotation')
      .onChange((value) => {
        object.rotation.copy(defaultRotation);
        object.rotateY(MathUtils.degToRad(value));
      });

    // WithPositionAttributes - lat, lng, landHeight
    const locationAttributes = { lat, lng, landHeight: landHeight ?? 0 };

    Object.keys(locationAttributes).forEach((locationAttribute) => {
      objectFolder
        .add(locationAttributes, locationAttribute, -360, 360)
        .onChange(() => {
          planetObject.applyLatLng(
            this.globeRadius + (locationAttributes.landHeight ?? 0),
            locationAttributes.lat,
            locationAttributes.lng,
          );

          defaultRotation.copy(object.rotation);
          object.rotateY(MathUtils.degToRad(yRotation.y));
        });
    });
  }
}
