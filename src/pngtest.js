import fs from "fs";
import drawing from "pngjs-draw";
import { default as pngHold } from "pngjs";
import {players} from "./globals.js"
import {
  default_player,
  life,
  zero,
  one,
  two,
  three,
  four,
  five,
  six,
  seven,
  eight,
  nine,
} from "./visual_data/index.js";
import { grid } from "./globals.js";
var png = drawing(pngHold.PNG);


//life1=3x6 life2=8x5 life3=13x6
const numberAssets = [zero, one, two, three, four, five, six, seven, eight, nine];
const colors = [
  [255, 255, 255, 255],
  [0, 0, 0, 255],
  [237, 26, 26, 255],
  [0, 255, 255, 255],
  [9, 222, 23, 255],
  [255, 255, 0, 255],
  [10, 17, 242, 255],
];

const cellSize = 20;

export const drawGrid = (callback) => {
  fs.createReadStream("./src/blank_board.png")
    .pipe(new png({ filterType: 4 }))
    .on("parsed", async function () {
      grid.forEach((row, i) => {
        row.forEach((cell, j) => {
          if (cell !== 0) {
            let index = cell -1;
            let new_player;
            if(index < 10){
              new_player = mendAssets(numberAssets[index], 8, 11);
            }else{
              let digits = index.toString().split('');
              let [left, right] = digits.map(Number);
              new_player = mendAssets(numberAssets[left], 5, 11);
              new_player = mendAssets(numberAssets[right], 10, 11, new_player);
            }
            let player = players[index];
            if(player.lives >= 1){
              new_player = mendAssets(life, 3, 6, new_player);
            }
            if(player.lives >= 2){
              new_player = mendAssets(life, 8, 5, new_player);
            }
            if(player.lives == 3){
              new_player = mendAssets(life, 13, 6, new_player);
            }
            for (let k = 0; k < new_player.length; k++) {
              for (let l = 0; l < new_player[k].length; l++) {
                if (new_player[k][l] !== 0) {
                  this.drawPixel(
                    j * cellSize + l,
                    i * cellSize + k,
                    colors[new_player[k][l]]
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



const mendAssets = (asset, x, y, otherAsset = default_player) => {
  let arr = JSON.parse(JSON.stringify(otherAsset));
  let numberAsset = JSON.parse(JSON.stringify(asset));
  numberAsset.forEach(( row, i ) => {
    row.forEach(( val, j ) => {
      if(val != 0){
        arr[i + y][j + x] = val;
      }
    });
  })
  return arr;
} 