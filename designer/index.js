
const canvas = document.querySelector('#myCanvas');
const ctx = canvas.getContext('2d');
const colors = [
  [255, 255, 255, 255],
  [0, 0, 0, 255],
  [237, 26, 26, 255],
  [0, 255, 255, 255],
  [9, 222, 23, 255],
  [243, 235, 9, 255],
  [134, 9, 243, 255],
  [0, 4, 255, 255],
  [66, 32, 0, 255],
  [242, 221, 174, 255],
];
let currentColor = 0;

const printGrid = () => {
  let output = '';
  grid.forEach((row) => {
    output += '[ ';
    row.forEach(val => {
      output += `${val}, `;
    })
    output += '],\n';
  })
  console.log(output);
}
const cb1 = document.querySelector('#color1');
cb1.style.backgroundColor = `rgba( ${colors[0][0]}, ${colors[0][1]}, ${colors[0][2]}, 1)`;
const cb2 = document.querySelector('#color2');
cb2.style.backgroundColor = `rgba( ${colors[1][0]}, ${colors[1][1]}, ${colors[1][2]}, 1)`;
const cb3 = document.querySelector('#color3');
cb3.style.backgroundColor = `rgba( ${colors[2][0]}, ${colors[2][1]}, ${colors[2][2]}, 1)`;
const cb4 = document.querySelector('#color4');
cb4.style.backgroundColor = `rgba( ${colors[3][0]}, ${colors[3][1]}, ${colors[3][2]}, 1)`;
const cb5 = document.querySelector('#color5');
cb5.style.backgroundColor = `rgba( ${colors[4][0]}, ${colors[4][1]}, ${colors[4][2]}, 1)`;
const cb6 = document.querySelector('#color6');
cb6.style.backgroundColor = `rgba( ${colors[5][0]}, ${colors[5][1]}, ${colors[5][2]}, 1)`;
const cb7 = document.querySelector('#color7');
cb7.style.backgroundColor = `rgba( ${colors[6][0]}, ${colors[6][1]}, ${colors[6][2]}, 1)`;
const cb8 = document.querySelector('#color8');
cb8.style.backgroundColor = `rgba( ${colors[7][0]}, ${colors[7][1]}, ${colors[7][2]}, 1)`;
const cb9 = document.querySelector('#color9');
cb9.style.backgroundColor = `rgba( ${colors[8][0]}, ${colors[8][1]}, ${colors[8][2]}, 1)`;
const cb10 = document.querySelector('#color10');
cb10.style.backgroundColor = `rgba( ${colors[9][0]}, ${colors[9][1]}, ${colors[9][2]}, 1)`;

const logGrid = document.querySelector('#printGrid');
logGrid.addEventListener('click', printGrid);
const whichColor = document.querySelector('#whichColor');

const colorBtns = [cb1, cb2, cb3, cb4, cb5, cb6, cb7, cb8, cb9, cb10];
colorBtns.forEach(( btn, i ) => {
  btn.addEventListener('click', e => {
    whichColor.style.backgroundColor = `rgba( ${colors[i][0]}, ${colors[i][1]}, ${colors[i][2]}, 1)`
    currentColor = i;
  })
})



canvas.width = 500;
canvas.height = 500;


let grid = [];
for (let i = 0; i < 20; i++) {
  grid.push([]);
  for (let j = 0; j < 20; j++) {
    grid[i].push(0);
  }
}

ctx.fillStyle = 'white';
ctx.fillRect(0, 0, canvas.width, canvas.height);

const boxSize = 500/20;

const draw = () => {
  ctx.beginPath();
  ctx.moveTo(0, 0);
  for(let i = 0;i<20;i++){
    for(let j = 0;j<20;j++){
      ctx.lineTo(i * boxSize, j * boxSize)
      ctx.lineTo(i * boxSize + boxSize, j * boxSize)
      ctx.lineTo(i * boxSize + boxSize, j * boxSize + boxSize)
    }
  }
  ctx.stroke();
}
draw();
canvas.addEventListener('mousedown', () => {
  canvas.onmousemove = (e) => {
    let x = Math.floor(e.offsetX / boxSize);
    let y = Math.floor(e.offsetY / boxSize);
    grid[y][x] = currentColor;
    ctx.fillStyle = `rgba( ${colors[currentColor][0]}, ${colors[currentColor][1]}, ${colors[currentColor][2]}, 1)`;
    ctx.fillRect((x * boxSize), (y * boxSize), (boxSize), (boxSize));
    draw();
  }
  canvas.onmouseup = () => {
    canvas.onmousemove = null;
  }
  canvas.onmouseout = () => {
    canvas.onmousemove = null;
  }
});

