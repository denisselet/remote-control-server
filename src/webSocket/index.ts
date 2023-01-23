import { WebSocketServer, createWebSocketStream } from 'ws';
import { mouse } from '@nut-tree/nut-js';
import { upMouse, leftMouse, downMouse, rightMouse } from './control.js';
import { circle, rectangle, square } from './figures.js';
import { mousePosition } from './mousePosition.js';
import * as dotenv from 'dotenv';

dotenv.config();

const PORT = process.env.PORT_SERVER || 8080;
mouse.config.mouseSpeed = 0;
mouse.config.autoDelayMs = 100;
const wss = new WebSocketServer({ port: +PORT });

wss.on('connection', function connection(ws) {
  const duplex = createWebSocketStream(ws, { encoding: 'utf8' });
  duplex.on('data', async (data) => {
    const dataString = data.toString();
    const command: string = dataString.split(' ')[0];
    const width = +dataString.split(' ')[1];
    const length = +dataString.split(' ')[2];
    const { x, y } = await mousePosition();

    switch (command) {
      case 'mouse_up':
        upMouse(width);
        ws.send(`${dataString.split(' ').join('_')}`);
        break;
      case 'mouse_down':
        downMouse(width);
        ws.send(`${dataString.split(' ').join('_')}`);
        break;
      case 'mouse_left':
        leftMouse(width);
        ws.send(`${dataString.split(' ').join('_')}`);
        break;
      case 'mouse_right':
        rightMouse(width);
        ws.send(`${dataString.split(' ').join('_')}`);
        break;
      case 'draw_square':
        square(width);
        ws.send(`${dataString.split(' ').join('_')}`);
        break;
      case 'draw_rectangle':
        rectangle(width, length);
        ws.send(`${dataString.split(' ').join('_')}`);
        break;
      case 'draw_circle':
        circle(width);
        ws.send(`${dataString.split(' ').join('_')}`);
        break;
      case 'mouse_position':
        ws.send(`mouse_position_${x},${y}`);
        break;
      case 'prnt_scrn':
        break;
      default:
        break;
    }
  });
});

process.on('SIGINT', () => {
  wss.close();
  process.exit();
});
