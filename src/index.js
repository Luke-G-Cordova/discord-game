require('dotenv').config();
// Require the necessary discord.js classes
const { Client, Intents, DiscordAPIError } = require('discord.js');
const Discord = require('discord.js');
const { token } = require('./config.json');

// Create a new client instance
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });
// const ms = new Discord.MessageCollector(channel, options);
// When the client is ready, run this code (only once)
client.once('ready', () => {
    console.log('Ready!');  
});

client.channels.fetch('704101162693034076/935742119505698846')
    .then(channel => {
        console.log(channel.name)
        const filter = m => m.content.includes('');
        const collector = channel.createMessageCollector({filter, time: 15000});
        collector.on('collect', e => {
            console.log(e);
        })
    })
    .catch(console.error);



client.login(process.env.TOKEN);