import { Object3D, Vector2 } from 'three';

export const enableParallax = (
  object: Object3D,
  factor = 0.1,
  wrapper: HTMLElement = document.body,
  inertiaFactor = 0.06,
) => {
  let frameId: number;
  const targetPosition = new Vector2();

  const animate = () => {
    const { x: objectX, y: objectY } = object.position;
    const { x: targetX, y: targetY } = targetPosition;

    const xNearlyEqual = areNearlyEqual(objectX, targetX);
    const yNearlyEqual = areNearlyEqual(objectY, targetY);
    if (xNearlyEqual && yNearlyEqual) {
      cancelAnimationFrame(frameId);
      return;
    }

    object.position.x = linearlyInterpolate(objectX, targetX, inertiaFactor);
    object.position.y = linearlyInterpolate(objectY, targetY, inertiaFactor);

    frameId = requestAnimationFrame(animate);
  };

  wrapper.addEventListener('mousemove', (event) => {
    cancelAnimationFrame(frameId);

    const centerX = wrapper.clientWidth / 2;
    const centerY = wrapper.clientHeight / 2;

    targetPosition.x = -(event.clientX - centerX) * factor;
    targetPosition.y = (event.clientY - centerY) * factor;

    frameId = requestAnimationFrame(animate);
  });
};

const linearlyInterpolate = (prev: number, next: number, factor: number) =>
  (1 - factor) * prev + factor * next;

const areNearlyEqual = (num1: number, num2: number, diffAllowed = 0.0001) =>
  Math.abs(num2 - num1) < diffAllowed;
