"use strict";

var fs = require("fs");
var getJSON = require('get-json');

function getPrice(){

	var btcPrice = getJSON('https://api.coinmarketcap.com/v1/ticker/bitcoin/', function(error, response){
		if(!error) {
			var btcPrice = response[0]["price_usd"];
			console.log('**MCX BOT** BTC Price has been logged to the file. ' + btcPrice +" USD");
			fs.writeFile("price/btc.txt",btcPrice,(err)=>{
				if(err) throw err;
			});
		} else {
			console.log('**EGEM BOT** BTC API ISSUE!');
		}
	})

  var egemPrice = getJSON('https://maplechange.com/api/v2/tickers/egembtc.json', function(error, response){
		if(!error) {
			var egemPrice = response["ticker"]["last"];
			console.log('**MCX BOT** EGEM Price has been logged to the file. ' + egemPrice +" BTC");
			fs.writeFile("price/egem.txt",egemPrice,(err)=>{
				if(err) throw err;
			});
		} else {
			console.log('**MCX BOT** EGEM API ISSUE!');
		}
	})
}

module.exports = getPrice;
