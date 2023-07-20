const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Botun olan ${client.user.tag} Sunucuya girdi ve artık aktif!`);
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'sa') {
    msg.reply('as')
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
  if (msg.content.toLowerCase() === 'kral') {
    msg.reply('TEK KRAL SEDAT BAŞKAN')
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'kral kimdir') {
    msg.reply('TEK KRAL SEDAT BAŞKAN')
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'kim kral') {
    msg.reply('TEK KRAL SEDAT BAŞKAN')
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'kral kim') {
    msg.reply('TEK KRAL SEDAT BAŞKAN')
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'snikers kimdir') {
    msg.reply('O BİR DEDE SNİPERDE EMEKLİ OLDU T BASEYE ROKET DÜŞSE ÇIKMAZ XD')
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'snikers kimdir') {
    msg.reply('O BİR DEDE SNİPERDE EMEKLİ OLDU T BASEYE ROKET DÜŞSE ÇIKMAZ XD')
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'snikskytter kim') {
    msg.reply('O BİR DEDE SNİPERDE EMEKLİ OLDU T BASEYE ROKET DÜŞSE ÇIKMAZ XD')
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'erdi dekmen kimdir') {
    msg.reply('ERDİ DEKMEN TÜRK TEŞKİLATIN EN İYİ KOMUTANI OLARAK BİLİNİR')
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'hasan kimdir') {
    msg.reply('HASAN KIYICI OLARAK BİLİNİR')
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'ali kim') {
    msg.reply('O BOT XD')
  }
});

client.login('MTEyODk5NDA4NzE2NTUwNTU5Nw.GuyOsC.Qd74qADdk2dWjortuLLQ4FWVUFfOsmOSLwlB5s');