
export class Player {
  constructor(options){
    let ogo = {
      lives: 3,
      actionPoints: 3000,
      range: 1,
      x: 0,
      y: 0,
      username: '',
      index: 0,
    }
    ogo = Object.assign(ogo, options);
    this.lives = ogo.lives;
    this.actionPoints = ogo.actionPoints;
    this.range = ogo.range;
    this.x = ogo.x;
    this.y = ogo.y;
    this.username = ogo.username;
    this.index = ogo.index;
    this.range = 5;
  }

}