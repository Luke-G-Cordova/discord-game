var fs = require('fs');
var drawing = require('pngjs-draw');
var png = drawing(require('pngjs').PNG);

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

const tiles = [
    ' ',
    'x',
];



const gridLength = 16;
const gridHeight = 16;
let grid = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
];


const drawGrid = () => {
  fs.createReadStream('blank_board.png')
    .pipe(new png({ filterType: 4 }))
    .on('parsed', function() {

      grid.forEach(( row, i ) => {

        row.forEach(( cell, j ) => {
          this.drawText((j*10) + 51,(i*10)+51, tiles[cell], this.colors.new(255,100,10))
          this.drawRect((j*10) + 50,(i*10)+50,10,10, this.colors.black())
        });
      });

      this.pack().pipe(fs.createWriteStream('finished_board.png'));
    });
}
drawGrid();