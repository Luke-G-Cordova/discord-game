const canvas = document.querySelector('#myCanvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const ctx = canvas.getContext('2d');
ctx.fillStyle = 'black';
ctx.fillRect(0, 0, canvas.width, canvas.height);

let turn = 0;

let grid = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
];
const colors = [
    'red',
    'blue',
    'green',
    'yellow',
    'pink',
    'orange',
    'purple'
];
console.log(grid.length, grid[0].length);
function drawGrid(ctx) {
    const size = 30;
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] === 0) {
                ctx.strokeRect((size * j) + 60, (size * i) + 60, size, size);
            } else {
                ctx.fillStyle = colors[grid[i][j] - 1];
                ctx.fillRect(size * j + 60, size * i + 60, size, size);
                ctx.fillStyle = 'white';
                ctx.fillText(calcWeight(i, j), size * j + 70, size * i + 70);
                ctx.fillStyle = 'black';
                ctx.fillText(calcOppForce(i, j), size * j + 70, size * i + 80);
            }
        }
    }
}

function calcWeight(i, j) {
    let myVal = grid[i][j];
    let myWeight = 1;
    if (grid[i - 1][j - 1] === myVal) myWeight++;
    if (grid[i - 1][j] === myVal) myWeight++;
    if (grid[i - 1][j + 1] === myVal) myWeight++;
    if (grid[i][j + 1] === myVal) myWeight++;
    if (grid[i + 1][j + 1] === myVal) myWeight++;
    if (grid[i + 1][j] === myVal) myWeight++;
    if (grid[i + 1][j - 1] === myVal) myWeight++;
    if (grid[i][j - 1] === myVal) myWeight++;
    return myWeight;
}

function calcOppForce(i, j) {
    let myVal = grid[i][j];
    let oppForce = 0;
    if (grid[i - 1][j - 1] !== myVal && grid[i - 1][j - 1] !== 0) oppForce += calcWeight(i - 1, j - 1)/2;//grid[i - 1][j - 1]) / 2;
    if (grid[i - 1][j] !== myVal && grid[i - 1][j] !== 0) oppForce += calcWeight(i - 1, j)/2;//grid[i - 1][j] / 2);
    if (grid[i - 1][j + 1] !== myVal && grid[i - 1][j + 1] !== 0) oppForce += calcWeight(i - 1, j + 1)/2;//grid[i - 1][j + 1]) / 2;
    if (grid[i][j + 1] !== myVal && grid[i][j + 1] !== 0) oppForce += calcWeight(i, j + 1)/2;//(i, grid[i][j + 1] / 2);
    if (grid[i + 1][j + 1] !== myVal && grid[i + 1][j + 1] !== 0) oppForce += calcWeight(i + 1, j + 1)/2;//grid[i + 1][j + 1]) / 2;
    if (grid[i + 1][j] !== myVal && grid[i + 1][j] !== 0) oppForce += calcWeight(i + 1, j)/2;//grid[i + 1][j] / 2);
    if (grid[i + 1][j - 1] !== myVal && grid[i + 1][j - 1] !== 0) oppForce += calcWeight(i + 1, j - 1)/2;//grid[i + 1][j - 1]) / 2;
    if (grid[i][j - 1] !== myVal && grid[i][j - 1] !== 0) oppForce += calcWeight(i, j - 1)/2;//(i, grid[i][j - 1] / 2);
    return oppForce;
}

function calculateMove(ctx) {
    let killArr = [];
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid.length; j++) {
            if (grid[i][j] !== 0 && calcOppForce(i, j) >= calcWeight(i, j)) {
                killArr.push([i, j]);
            }
        }
    }
    for (let i = 0; i < killArr.length; i++) {
        grid[killArr[i][0]][killArr[i][1]] = 0;
    }
}


window.addEventListener('click', (e) => {
    let j = e.offsetX - 60;
    j = Math.floor(j / 30);
    let i = e.offsetY - 60;
    i = Math.floor(i / 30);
    if (i <= 29 && j <= 29 && grid[i][j] === 0) {
        grid[i][j] = (turn % 3) + 1;
        ctx.fillStyle = 'black';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        calculateMove(ctx);
        drawGrid(ctx);
        turn++;
    }

});

ctx.strokeStyle = 'white';
drawGrid(ctx);