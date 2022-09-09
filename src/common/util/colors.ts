import { Color, ColorRepresentation } from 'three';

export const rgbColor = (colorRepresentation: ColorRepresentation) => {
  const color = new Color(colorRepresentation);
  color.convertSRGBToLinear();

  return color;
};
