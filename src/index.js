import { Client, GatewayIntentBits } from "discord.js";
import dotenv from "dotenv";
import { drawGrid } from "./pngtest.js";
import { updateGrid } from "./game.js";
import { players, grid, createGrid } from "./globals.js";
import { Player } from "./Player.js";
import {parseCommand} from "./commandParser.js"

dotenv.config();


const client = new Client({
  intents: [
    GatewayIntentBits.Guilds, 
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

client.on("ready", () => {
  console.log("the bot is ready");
  createGrid(5, 5);

});

client.on("messageCreate", (msg) => {

  let parts = parseCommand(msg.content.toLowerCase());
  let uname = msg.author.username;
  let player = players.filter((player) => player.username === uname)[0];
  if(parts !== null){
    console.log(parts);
    switch(parts[0]){
      case "move":
        if (!!player && player.actionPoints > 0 && player.lives > 0) {
          player.actionPoints--;
          if(Math.abs(parts[1]) === 1){
            player.x += parts[1];
            player.y += ( parts[2]/2 );
          }else{
            player.x += parts[2];
            player.y += ( parts[1]/2 );
          }
        }else{
          msg.channel.send(`player ${uname} is not playing yet`);
        }
        break;
      case "shoot":
        if(parts[1] < players.length && player.actionPoints > 0 && player.lives > 0){
          let enemy = players[parts[1]];
          if(enemy.x < player.x + player.range && enemy.x > player.x - player.range && enemy.y < player.y + player.range && enemy.y > player.y - player.range){
            player.actionPoints--;
            enemy.lives--;
            msg.channel.send(`${uname} just shot ${enemy.uname}. They now have ${enemy.lives} lives`);
          }else{
            msg.channel.send('not in range');
          }
        }else{
          msg.channel.send(`player ${parts[1]} does not exist`);
        }
        break;
      case "sendpoint":
        if(parts[1] < players.length && player.actionPoints > 0 && player.lives > 0){
          let aly = players[parts[1]];
          if(aly.x < player.x + player.range && aly.x > player.x - player.range && aly.y < player.y + player.range && aly.y > player.y - player.range){
            player.actionPoints--;
            aly.actionPoints++;
            msg.channel.send(`${uname} just gave ${aly.uname} an action point. They now have ${aly.actionPoints} action points.`);
          }else{
            msg.channel.send('not in range');
          }
        }else{
          msg.channel.send(`player ${parts[1]} does not exist`);
        }
        break;
      case "join":
        if (players.filter((player) => player.username === uname).length > 0) {
          msg.channel.send(`player ${uname} is already playing`);
          console.log("already exists");
        } else {
          players.push(
            new Player({
              username: uname,
              x: Math.round(Math.random() * grid.length),
              y: Math.round(Math.random() * grid[0].length),
              index: players.length
            })
          );
          msg.channel.send(`player ${uname} is now playing. You are index ${players.length -1}`);
        }
        break;
      case "whoami":
        if(!!player){
          msg.channel.send(`${player.index}`);

        }
        break;
      case "makejoin":
        msg.channel.send('join');
        break;
      case "print":
        break;
    }
    sendGrid(msg);
  }else{
    if(parts!==null){
      console.log(player)
    }
  }
});

const sendGrid = (msg) => {
  updateGrid();
  drawGrid(() => {
    msg.channel
      .send({
        files: [
          {
            attachment: "./src/finished_board.png",
            name: "finished_board.png",
          },
        ],
      })
      .catch(console.error);
  });
}

client.login(process.env.TOKEN);
