import fs from 'fs'
import drawing from 'pngjs-draw'
import {default as pngHold } from 'pngjs'
import default_player from './player_default.json' assert { type: 'json'}
import {grid} from './globals.js'
var png = drawing(pngHold.PNG);

const colors = [
  [0, 0, 0, 255],
  [237, 26, 26, 255],
  [10, 17, 242, 255],
  [0, 255, 255, 255],
  [9, 222, 23, 255],
  [255, 255, 0, 255],
];

const cellSize = 20;

export const drawGrid = (callback) => {
  fs.createReadStream("./src/blank_board.png")
    .pipe(new png({ filterType: 4 }))
    .on("parsed", async function () {
      grid.forEach((row, i) => {
        row.forEach((cell, j) => {
          if (cell !== 0) {
            for (let k = 0; k < default_player.length; k++) {
              for (let l = 0; l < default_player[k].length; l++) {
                if (default_player[k][l] !== 0) {
                  this.drawPixel(
                    j * cellSize + l,
                    i * cellSize + k,
                    colors[default_player[k][l]]
                  );
                }
              }
            }
          }

          var topLeft = {
            x: j * cellSize + cellSize,
            y: i * cellSize + cellSize,
          };
          var topRight = { x: topLeft.x + cellSize, y: topLeft.y };
          var botRight = { x: topLeft.x + cellSize, y: topLeft.y + cellSize };
          var botLeft = { x: topLeft.x, y: topLeft.y + cellSize };
          this.drawLine(
            topLeft.x,
            topLeft.y,
            topRight.x,
            topRight.y,
            this.colors.black()
          );
          this.drawLine(
            topRight.x,
            topRight.y,
            botRight.x,
            botRight.y,
            this.colors.black()
          );
          this.drawLine(
            botRight.x,
            botRight.y,
            botLeft.x,
            botLeft.y,
            this.colors.black()
          );
          this.drawLine(
            botLeft.x,
            botLeft.y,
            topLeft.x,
            topLeft.y,
            this.colors.black()
          );
        });
      });

      await this.pack().pipe(fs.createWriteStream("./src/finished_board.png"));
      callback();
    });
};
