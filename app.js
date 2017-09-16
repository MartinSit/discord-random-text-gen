const Discord = require("discord.js");
const bot = new Discord.Client();

bot.on('ready', () => {
  console.log("Connected to Discord.");
});

const prefix  = ">"; //Insert your prefix here.

var randomtext = [
"INSERT RANDOM TEXT HERE!",
"ADD COMMAS TO INSERT RANDOM TEXT!"
];

var rand = randomtext[Math.floor(Math.random() * randomtext.length)];

bot.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command === "ping") {
    message.channel.send("Pong!");
  }

  if (command === "generatetext") { //Change your command here.
    message.author.send(rand); //Change this line to " message.channel.send(rand) " if you don't want to send the message through Direct Messages.
    message.channel.send("`Sending some random text. . .`"); //Delete this line if you don't want to send the message through Direct Messages.
    let messagecount = parseInt(2); //Delete this line if you don't want to send the message through Direct Messages.
    message.channel.fetchMessages({limit: messagecount}).then(messages => //Delete this line if you don't want to send the message through Direct Messages.
    message.channel.bulkDelete(messages)); //Delete this line if you don't want to send the message through Direct Messages.
  }

});

bot.login(process.env.BOT_TOKEN); //Replace BOT_TOKEN with your Discord Bot token unless you are using Heroku to host your bot. If you are, read the instructions in readme.md.
