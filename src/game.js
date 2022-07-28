import {Player} from './Player.js'
import {players, grid} from './globals.js'

export const updateGrid = () => {
  grid.forEach((row) => {
    row.fill(0, 0);
  });
  players.forEach(( player, i ) => {
    if(player.lives > 0){
      if(player.x<0){
        player.x = 0;
      }else if(player.x > grid[0].length -1){
        player.x = grid[0].length -1;
      }
      if(player.y<0){
        player.y = 0;
      }else if(player.y > grid.length -1){
        player.y = grid.length -1;
      }
      grid[player.y][player.x] = i+1;
    }
  })
}

