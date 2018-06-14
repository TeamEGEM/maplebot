
const Discord = require("discord.js");
const fs = require("fs");
const botSettings = require("../botcfg/config.json");
const miscSettings = require("../cfg/settings.json");
const prefix = botSettings.prefix;
exports.run = (client, message, args) => {

  const amount = args[0];
  const coin1 = args[1];
  const coin2 = args[2];

  try {
    let coin1File = fs.readFileSync(`./price/${coin1}.txt`);
    let coin2File = fs.readFileSync(`./price/${coin2}.txt`);

    var coinAmount = amount*coin1File;
    var coinMath = coinAmount/coin2File;
  } catch (err) {
    console.error(err);
  }

  let result = coinMath;

  const embed = new Discord.RichEmbed()
    .setTitle("Maple Change Discord Bot.")
    .setAuthor("MCX", miscSettings.img32x32)

     .setColor(miscSettings.msgcolor)
     .setDescription(":ledger: Maple Change Conversion Bot:")
     .setFooter(miscSettings.footerBranding, miscSettings.img32x32)
     .setThumbnail(miscSettings.img32x32)

    .setTimestamp()
    .setURL("https://github.com/TeamEGEM/maplebot")
    .addField("Converting: "+ amount + " of "+ coin1 + " to " + coin2 , "Here is the result of the conversion: " + Number(result).toFixed(8))

    message.channel.send({embed})
}
