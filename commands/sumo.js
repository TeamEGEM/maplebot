
const Discord = require("discord.js");
const miscSettings = require("../cfg/settings.json");
var getJSON = require('get-json');

exports.run = (client, message, args) => {
  var btcPrice = getJSON('https://maplechange.com/api/v2/tickers/sumobtc.json', function(error, response){
		if(!error) {
      var buy = response["ticker"]["buy"];
      var sell = response["ticker"]["sell"];
      var low = response["ticker"]["low"];
      var high = response["ticker"]["high"];
      var last = response["ticker"]["last"];
      var vol = response["ticker"]["vol"];
      var volbtc = response["ticker"]["volbtc"];
      var change = response["ticker"]["change"];
      const embed = new Discord.RichEmbed()
        .setTitle("Maple Change Discord Bot.")
        .setAuthor("MCX", miscSettings.img32x32)
        /*
         * Alternatively, use "#00AE86", [0, 174, 134] or an integer number.
         */
        .setColor(miscSettings.msgcolor)
        .setDescription(":ledger: Maplechange SUMO Market Data:")
        .setFooter(miscSettings.footerBranding, miscSettings.img32x32)
        .setThumbnail(miscSettings.imgSUMO)
        /*
         * Takes a Date object, defaults to current date.
         */
        .setTimestamp()
        .setURL("https://github.com/TeamEGEM/maplebot")
        .addField("Website:", "https://www.sumokoin.org/")
        .addField("Buy", buy+" BTC", true)
        .addField("Sell", sell+" BTC", true)
        .addField("Low", low+" BTC", true)
        .addField("High", high+" BTC", true)
        .addField("Last", last+" BTC", true)
        .addField("Volume", vol+" SUMO", true)
        .addField("Volbtc", volbtc+" BTC", true)
        .addField("Change", change+" %", true)
        .addField("Quick links:","Direct links to Maplechange.com trade page.")
        .addField("Bitcoin Pair", "[BTC/SUMO :scales:](https://maplechange.com/markets/sumobtc)", true)
        .addField("Litecoin Pair", "[LTC/SUMO :scales:](https://maplechange.com/markets/sumoltc)", true)
        .addField("Ethereum Pair", "[ETH/SUMO :scales:](https://maplechange.com/markets/sumoeth)", true)
        .addField("WeyCoin Pair", "[WAE/SUMO :scales:](https://maplechange.com/markets/sumowae)", true)

        message.channel.send({embed})
		} else {
			console.log('**MCX BOT** Maplechange MARKET API ISSUE!');
		}
	})
}
