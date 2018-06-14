"use strict";

var fs = require("fs");
var getJSON = require('get-json');

function getPrice(){

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

  var waePrice = getJSON('https://maplechange.com/api/v2/tickers/waebtc.json', function(error, response){
		if(!error) {
			var waePrice = response["ticker"]["last"];
			console.log('**MCX BOT** WAE Price has been logged to the file. ' + waePrice +" BTC");
			fs.writeFile("price/wae.txt",waePrice,(err)=>{
				if(err) throw err;
			});
		} else {
			console.log('**MCX BOT** WAE API ISSUE!');
		}
	})
}

module.exports = getPrice;
