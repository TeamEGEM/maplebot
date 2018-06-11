"use strict";

const fs = require("fs");
const Discord = require("discord.js");
const botSettings = require("./botcfg/config.json");
const miscSettings = require("./cfg/settings.json");
var getJSON = require('get-json');


const prefix = botSettings.prefix;
const bot = new Discord.Client({disableEveryone:true});

bot.on('ready', ()=>{
	console.log("**MCX BOT** is now Online.");
});

// Function to turn files into commands.
bot.on("message", message => {
	if(message.channel.name != 'general') return;
	if(message.channel.type === "dm") return;
  if(message.author.bot) return;
  if(message.content.indexOf(botSettings.prefix) !== 0) return;

  // This is the best way to define args. Trust me.
  const args = message.content.slice(botSettings.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  // The list of if/else is replaced with those simple 2 lines:
  try {
    let commandFile = require(`./commands/${command}.js`);
    commandFile.run(bot, message, args);
  } catch (err) {
		//console.log("**Maple Change BOT** No file for that command, prolly other system in use.")
    console.error(err);
  }
});

// Login the bot.
bot.login(botSettings.token);
