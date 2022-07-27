
export class Player {
  constructor(options){
    let ogo = {
      lives: 3,
      actionPoints: 0,
      range: 1,
      x: 0,
      y: 0,
      username: ''
    }
    ogo = Object.assign(ogo, options);
    this.lives = ogo.lives;
    this.actionPoints = ogo.actionPoints;
    this.range = ogo.range;
    this.x = ogo.x;
    this.y = ogo.y;
    this.username = ogo.username;
  }

}