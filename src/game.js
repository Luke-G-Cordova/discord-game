import {Player} from './Player.js'
import {players, grid} from './globals.js'

export const updateGrid = () => {
  grid.forEach((row) => {
    row.fill(0, 0);
  });
  players.forEach(player => {
    grid[player.y][player.x] = 1;
  })
}

