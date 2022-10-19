import { Object3D } from 'three';

export const enableParallax = (
  object: Object3D,
  factor = 0.1,
  wrapper: HTMLElement = document.body,
) => {
  wrapper.addEventListener('mousemove', (event) => {
    const centerX = wrapper.clientWidth / 2;
    const centerY = wrapper.clientHeight / 2;

    object.position.x = (event.clientX - centerX) * factor;
    object.position.y = (event.clientY - centerY) * factor;
  });
};
