import {
  mouse,
  Point
} from '@nut-tree/nut-js';

export const upMouse = async (distance: number) => {
  const { x, y } = await mouse.getPosition();
  await mouse.setPosition(new Point(+x, +y - +distance));
  //   ws.send(`${command.split(' ').join('_')}`);
};

export const downMouse = async (distance: number) => {
  const { x, y } = await mouse.getPosition();
  await mouse.setPosition(new Point(+x, +y + +distance));
//   ws.send(`${command.split(' ').join('_')}`);
};
export const leftMouse = async (distance: number) => {
  const { x, y } = await mouse.getPosition();
  await mouse.setPosition(new Point(+x - +distance, y));
//   ws.send(`${command.split(' ').join('_')}`);
};
export const rightMouse = async (distance: number) => {
  const { x, y } = await mouse.getPosition();
  await mouse.setPosition(new Point(+x + +distance, y));
//   ws.send(`${command.split(' ').join('_')}`);
};
