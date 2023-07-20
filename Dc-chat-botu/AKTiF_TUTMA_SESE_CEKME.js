const express = require("express");
const { Client, RichEmbed } = require("discord.js");
const app = express();
function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if (new Date().getTime() - start > milliseconds) {
      break;
    }
  }
}
const http = require("http");
app.get("/", (request, response) => {
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get("http://boost-aktif.glitch.me/");
}, 3000);
const Discord = require("discord.js");
const client = new Discord.Client();
const data = new Map();

const tokenadam1 = new Discord.Client();

tokenadam1.on('message', async msg => {
  if (msg.content.toLowerCase() === "etc") {
      const streamOptions = { seek: 0, volume: 50 };
      var voiceChannel = msg.member.voiceChannel;
        voiceChannel.join().then(connection => {
        const stream = ytdl('', { filter : 'audioonly' });
        const dispatcher = connection.playStream(stream, streamOptions);
        })
  }
})

tokenadam1.login("MTEyODk5NDA4NzE2NTUwNTU5Nw.GuyOsC.Qd74qADdk2dWjortuLLQ4FWVUFfOsmOSLwlB5s");