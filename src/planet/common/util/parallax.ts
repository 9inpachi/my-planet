import { Object3D } from 'three';

export const enableParallax = (
  object: Object3D,
  factor = 0.1,
  wrapper: HTMLElement = document.body,
) => {
  const defaultPosition = object.position.clone();

  wrapper.addEventListener('mouseenter', () => {
    defaultPosition.copy(object.position);
  });

  wrapper.addEventListener('mouseleave', () => {
    object.position.copy(defaultPosition);
  });

  wrapper.addEventListener('mousemove', (event) => {
    const centerX = wrapper.clientWidth / 2;
    const centerY = wrapper.clientHeight / 2;

    object.position.x = (event.clientX - centerX) * factor;
    object.position.y = (event.clientY - centerY) * factor;
  });
};
