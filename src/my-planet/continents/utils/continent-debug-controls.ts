import { GUI } from 'dat.gui';
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
      .addFolder('rotation')
      .add(object.rotation, 'y')
      .name('rotation');

    ['lat', 'lng', 'landHeight'].forEach((locationAttribute) => {
      objectFolder.add(objectAttributes, locationAttribute).onChange(() => {
        planetObject.applyLatLng(
          this.globeRadius + (objectAttributes.landHeight ?? 0),
          objectAttributes.lat,
          objectAttributes.lng,
        );
      });
    });
  }
}
