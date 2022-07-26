var fs = require("fs");
var drawing = require("pngjs-draw");
var png = drawing(require("pngjs").PNG);
var default_player = require("./player_default.json");

// src blank_board.png = 843x844

// fs.createReadStream("blank_board.png")
//   .pipe(new png({ filterType: 4 }))
//   .on('parsed', function() {

//     // Draws a pixel with transparent green
//     this.drawPixel(150,200, this.colors.black())

//     // Draws a line with transparent red
//     this.drawLine(0,0,200,200, this.colors.red(50))

//     // Draws a rectangle with transparent black
//     this.drawRect(150,150,75,20, this.colors.black(100))

//     // Draws a filled rectangle with transparent white
//     this.fillRect(50,50,100,100, this.colors.white(100))

//     // Draws a text with custom color
//     this.drawText(20,20, "Hello world !", this.colors.new(255,100,10))

//     // Writes file
//     this.pack().pipe(fs.createWriteStream('finished_board.png'));
//   });

// const tiles = [" ", "x"];
const colors = [
  [0, 0, 0, 255],
  []
]

const gridLength = 40;
const gridHeight = 40;
const cellSize = 20;
// create grid
let grid = [];
for(let i = 0;i<gridLength;i++){
  grid.push([]);
  for(let j = 0;j<gridHeight;j++){
    grid[i].push(0);
  }
}


const setCell = (x, y, num) => {
  grid[x][y] = num;
}

const drawGrid = () => {
  fs.createReadStream("blank_board.png")
    .pipe(new png({ filterType: 4 }))
    .on("parsed", function () {
      grid.forEach((row, i) => {
        row.forEach((cell, j) => {
          // this.drawText(
          //   ( j * cellSize ) + (cellSize/2),
          //   ( i * cellSize ) + (cellSize/2),
          //   tiles[cell],
          //   this.colors.new(255, 100, 10)
          // );
          if(cell !== 0){
            for(let k = 0;k<default_player.length;k++){
              for(let l = 0;l<default_player[k].length;l++){
                if(default_player[k][l] !== 0){
                  this.drawPixel((j * cellSize) + l, (i * cellSize) + k, this.colors.black);
                }
              }
            }
          }

          var topLeft = {x: (j*cellSize) + cellSize, y: (i*cellSize) + cellSize}
          var topRight = {x: topLeft.x + cellSize, y: topLeft.y}
          var botRight = {x: topLeft.x + cellSize, y: topLeft.y + cellSize}
          var botLeft = {x: topLeft.x, y: topLeft.y + cellSize}
          this.drawLine(topLeft.x, topLeft.y, topRight.x, topRight.y, this.colors.black());
          this.drawLine(topRight.x, topRight.y, botRight.x, botRight.y, this.colors.black());
          this.drawLine(botRight.x, botRight.y, botLeft.x, botLeft.y, this.colors.black())
          this.drawLine(botLeft.x, botLeft.y, topLeft.x, topLeft.y, this.colors.black());
        });
      });
      
      this.pack().pipe(fs.createWriteStream("finished_board.png"));
    });
};


setCell(5, 5, 1)
drawGrid();
