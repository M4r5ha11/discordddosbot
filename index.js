const Discord = require("discord.js");
const client = new Discord.Client();
const fetch = require("node-fetch");
client.on("message", message => {
  if (message.content === "!") {
    message.reply("it already work");
    setInterval(() => fetch("http://site.com"), 1);
  }
});
client.login('yourtoken');
