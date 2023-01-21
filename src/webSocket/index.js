import WebSocket, { WebSocketServer } from "ws";
import {
  mouse,
  screen,
  singleWord,
  straightTo,
  centerOf,
  up,
  Point
} from "@nut-tree/nut-js";



const wss = new WebSocketServer({ port: 8080 });

wss.on("connection", function connection(ws) {
  ws.on("message", function message(data, isBinary) {
    const command = data.toString();
    const command1 = command.split(" ")[0];
    const command2 = command.split(" ")[1];

    console.log(command1);
    console.log(command2);
    tt();

    async function tt() {
      console.log("up");
      await mouse.leftClick()
      await mouse.move(new Point(100, 100))
      await mouse.move(new Point([100, 100]))
      await mouse.move(up(10))
      await mouse.move(up(500));
    }

    wss.clients.forEach(function each(client) {
      if (client.readyState === WebSocket.OPEN) {
        client.send(data, { binary: isBinary });
      }
    });
  });
});
