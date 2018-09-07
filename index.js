"use strict";

let Discord = require('discord.js'),
    botSettings = require('./botcfg/config.json'),
    settings = require('./cfg/settings.json'),
    getJSON = require('get-json');


// Update Data
setInterval(getprices, miscSettings.pricesDelay);

const prefix = botSettings.prefix;
const bot = new Discord.Client({disableEveryone:true});

bot.on('ready', ()=>{
	console.log("**MapleChange Bot** is now Online.");
});

// Function to turn files into commands.
bot.on("message", message => {
    if (message.channel.name !== 'coinpricebot' || message.channel.type === 'dm' || message.author.bot || message.content.indexOf(botSettings.prefix) !== 0)
        return;

  // This is the best way to define args. Trust me.
  const args = message.content.slice(botSettings.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  // The list of if/else is replaced with those simple 2 lines:
  try {
    let commandFile = require(`./commands/${command}.js`);

    commandFile.run(bot, message, command);

  } catch (err) {
		//console.log("**Maple Change BOT** No file for that command, prolly other system in use.")
    console.error(err);
  }
});

// Login the bot.
bot.login(botSettings.token);
