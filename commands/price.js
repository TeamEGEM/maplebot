let Discord = require('discord.js'),
    settings = require('../cfg/settings'),
    getJSON = require('get-json'),
    Website = require('../func/getwebsite');

exports.run = (client, message, ticker) => {
    let price = getJSON('https://maplechange.com/api/v2/tickers/' + ticker + 'btc.json', function(error, response) {
        if (error)
            throw error;
        message.reply(error);
        let pairs = Website.getPairs(ticker.toLowerCase());

        const embed = new Discord.RichEmbed()
            .setTitle('MapleChange Discord Bot')
            .setAuthor('MCX', settings.img32x32)
            .setColor(settings.msgcolor)
            .setDescription(':ledger: MapleChange ' + ticker.toUpperCase() + ' Market Information:')
            .setFooter(settings.footerBranding, settings.img32x32)
            .setThumbnail('https://maplechange.com/icon-' + ticker.toLowerCase() + '.png')
            .setTimestamp()
            .setURL('https://github.com/MapleChange/MapleBot')
            .addField('Website: ', Website.getWebsite(ticker.toLowerCase()))
            .addField('Buy', response['ticker']['buy'] + ' BTC', true)
            .addField('Sell', response['ticker']['sell'] + ' BTC', true)
            .addField('Low', response['ticker']['low'] + ' BTC', true)
            .addField('High', response['ticker']['high'] + ' BTC', true)
            .addField('Last', response['ticker']['last'] + ' BTC', true)
            .addField('Volume', response['ticker']['vol'] + ' ' + ticker.toUpperCase(), true)
            .addField('BTC Volume', response['ticker']['volbtc'] + ' BTC', true)
            .addField('Change', response['ticker']['change'] + '%', true)
            .addField('Quick Links:', 'Links to MapleChange trading page.');

        for (let index in pairs)
            if (pairs.hasOwnProperty(index))
                embed.addField(pairs.type + ' Pair', '[' + pairs.name + ' :scales:](https://maplechange.com/markets/' + index, true);

        message.channel.send({embed});
    })
};
