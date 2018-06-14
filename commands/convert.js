
const Discord = require("discord.js");
const fs = require("fs");
const botSettings = require("../botcfg/config.json");
const miscSettings = require("../cfg/settings.json");
const prefix = botSettings.prefix;
exports.run = (client, message, args) => {
  const amount = args[0];
  const coin1 = args[1];
  const coin2 = args[2];

  // The list of if/else is replaced with those simple 2 lines:
  try {
    let coin1File = fs.readFileSync(`./price/${coin1}.txt`);
    let coin2File = fs.readFileSync(`./price/${coin2}.txt`);
    var coinMath = coin1File/coin2File;
    console.log(coin1File);
    console.log(coin2File);

  } catch (err) {
    //console.log("**Maple Change BOT** No file for that command, prolly other system in use.")
    console.error(err);
  }

  console.log(coinMath);
  let result = coinMath;
  const embed = new Discord.RichEmbed()
    .setTitle("Maple Change Discord Bot.")
    .setAuthor("MCX", miscSettings.img32x32)
    /*
     * Alternatively, use "#00AE86", [0, 174, 134] or an integer number.
     */
     .setColor(miscSettings.msgcolor)
     .setDescription(":ledger: Maple Change Conversion Bot:")
     .setFooter(miscSettings.footerBranding, miscSettings.img32x32)
     .setThumbnail(miscSettings.img32x32)
    /*
     * Takes a Date object, defaults to current date.
     */
    .setTimestamp()
    .setURL("https://github.com/TeamEGEM/maplebot")
    .addField("Converting: "+ amount + " of "+ coin1 + " to " + coin2 , "Here is the result of the conversion: " + Number(result).toFixed(8))

    message.channel.send({embed})
}
