
const Discord = require("discord.js");
const botSettings = require("../botcfg/config.json");
const miscSettings = require("../cfg/settings.json");
const prefix = botSettings.prefix;
exports.run = (client, message, args) => {
  let coin1 = args[1];
  let coin2 = args[2];
  let amount = args[0];




  let result = "RESULTS"
  const embed = new Discord.RichEmbed()
    .setTitle("Maple Change Discord Bot.")
    .setAuthor("MCX", miscSettings.img32x32)
    /*
     * Alternatively, use "#00AE86", [0, 174, 134] or an integer number.
     */
     .setColor(miscSettings.msgcolor)
     .setDescription(":ledger: Maple Change Convertion Bot:")
     .setFooter(miscSettings.footerBranding, miscSettings.img32x32)
     .setThumbnail(miscSettings.img32x32)
    /*
     * Takes a Date object, defaults to current date.
     */
    .setTimestamp()
    .setURL("https://github.com/TeamEGEM/maplebot")
    .addField("Converting: "+ amount + " of "+ coin1 + " to " + coin2 , "Here is the result of the conversion: " + result)

    message.channel.send({embed})
}
