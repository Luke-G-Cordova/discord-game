
export const players = [];

export const grid = [];


export const createGrid = (width = 40, height = 40) => {
  for (let i = 0; i < width; i++) {
    grid.push([]);
    for (let j = 0; j < height; j++) {
      grid[i].push(0);
    }
  }
}