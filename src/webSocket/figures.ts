import {
  mouse,
  Button
} from '@nut-tree/nut-js';
import { upMouse, leftMouse, downMouse, rightMouse } from './control.js';

export const square = async (length: number) => {
  mouse.config.mouseSpeed = 100;
  mouse.config.autoDelayMs = 1000;
  await mouse.pressButton(Button.LEFT);
  await upMouse(length);
  await mouse.pressButton(Button.LEFT);
  await leftMouse(length);
  await mouse.pressButton(Button.LEFT);
  await downMouse(length);
  await mouse.pressButton(Button.LEFT);
  await rightMouse(length);
  await mouse.releaseButton(Button.LEFT);
};

export const rectangle = async (width: number, height: number) => {
  mouse.config.mouseSpeed = 100;
  mouse.config.autoDelayMs = 1000;
  await mouse.pressButton(Button.LEFT);
  await upMouse(height);
  await mouse.pressButton(Button.LEFT);
  await leftMouse(width);
  await mouse.pressButton(Button.LEFT);
  await downMouse(height);
  await mouse.pressButton(Button.LEFT);
  await rightMouse(width);
  await mouse.releaseButton(Button.LEFT);
};

export const circle = async (radius: number) => {
  mouse.config.mouseSpeed = 100;
  mouse.config.autoDelayMs = 1000;
  await mouse.pressButton(Button.LEFT);
  await upMouse(radius);
  await mouse.pressButton(Button.LEFT);
  await leftMouse(radius);
  await mouse.pressButton(Button.LEFT);
  await downMouse(radius);
  await mouse.pressButton(Button.LEFT);
  await rightMouse(radius);
  await mouse.releaseButton(Button.LEFT);
};
