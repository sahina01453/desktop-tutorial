const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Botun olan ${client.user.tag} Sunucuya girdi ve artık aktif!`);
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'sa') {
    msg.reply('Aleyküm selam')
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'selamunaleyküm') {
    msg.reply('Aleykumselam')
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'selamun aleyküm') {
    msg.reply('Aleyküm selam')
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'selamun aleykum') {
    msg.reply('Aleyküm selam')
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'selamün aleyküm') {
    msg.reply('Aleyküm selam')
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'resul kimdir') {
    msg.reply('KOVMİRIM LA KOVMİRIM')
  }
});

client.login('');