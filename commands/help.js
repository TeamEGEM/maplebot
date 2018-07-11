
const Discord = require("discord.js");
const botSettings = require("../botcfg/config.json");
const miscSettings = require("../cfg/settings.json");
const prefix = botSettings.prefix;
exports.run = (client, message, args) => {
  const embed = new Discord.RichEmbed()
    .setTitle("Maple Change Discord Bot.")
    .setAuthor("MCX", miscSettings.img32x32)
    /*
     * Alternatively, use "#00AE86", [0, 174, 134] or an integer number.
     */
     .setColor(miscSettings.msgcolor)
     .setDescription(":ledger: Maple Change Bot Help:")
     .setFooter(miscSettings.footerBranding, miscSettings.img32x32)
     .setThumbnail(miscSettings.img32x32)
    /*
     * Takes a Date object, defaults to current date.
     */
    .setTimestamp()
    .setURL("https://github.com/TeamEGEM/maplebot")
    .addField(prefix+"<ticker>", "replace ticker with the coin you want and market data will be returned.")


    message.channel.send({embed})
}
