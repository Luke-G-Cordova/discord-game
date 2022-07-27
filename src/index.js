import DiscordJS, { Intents } from "discord.js";
import dotenv from "dotenv";
import { drawGrid } from "./pngtest.js";
import { updateGrid } from "./game.js";
import { players, grid, createGrid } from "./globals.js";
import { Player } from "./Player.js";

dotenv.config();

const client = new DiscordJS.Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
});

client.on("ready", () => {
  console.log("the bot is ready");
  createGrid();
});

client.on("messageCreate", (msg) => {
  if (msg.content === "printGrid") {
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
  } else if (msg.content === "IWANNAPLAY") {
    let uname = msg.author.username;

    if(players.filter((player) => player.username === uname).length > 0){
      msg.channel.send(`player ${uname} is already playing`);
      console.log('already exists')
    }else{
      players.push(
        new Player({
          username: uname,
          x: Math.round(Math.random() * grid.length),
          y: Math.round(Math.random() * grid[0].length),
        })
      );
      msg.channel.send(`player ${uname} is now playing`)
    }
  } else if (msg.content === "moveLeft"){
    let uname = msg.author.username;
    const player = players.filter((player) => player.username === uname)[0];
    if(!!player){
      player.x--;
    }
  }else if (msg.content === "moveRight"){
    let uname = msg.author.username;
    const player = players.filter((player) => player.username === uname)[0];
    if(!!player){
      player.x++;
    }
  }else if (msg.content === "moveUp"){
    let uname = msg.author.username;
    const player = players.filter((player) => player.username === uname)[0];
    if(!!player){
      player.y--;
    }
  }else if (msg.content === "moveDown"){
    let uname = msg.author.username;
    const player = players.filter((player) => player.username === uname)[0];
    if(!!player){
      player.y++;
    }
  }
});

client.login(process.env.TOKEN);
