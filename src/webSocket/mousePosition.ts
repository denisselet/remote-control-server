import { mouse } from '@nut-tree/nut-js';

export const mousePosition = async () => {
  const { x, y } = await mouse.getPosition();
  return { x, y };
};
