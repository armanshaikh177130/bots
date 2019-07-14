const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});

client.login('NTg3Mjg4NTkxNTA4NDM5MDU2.XSrnRg.AH-VB-5VQsi9tltGUpuP8gNC-HU');