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

  var dnrPrice = getJSON('https://maplechange.com/api/v2/tickers/dnrbtc.json', function(error, response){
		if(!error) {
			var dnrPrice = response["ticker"]["last"];
			console.log('**MCX BOT** DNR Price has been logged to the file. ' + dnrPrice +" BTC");
			fs.writeFile("price/dnr.txt",dnrPrice,(err)=>{
				if(err) throw err;
			});
		} else {
			console.log('**MCX BOT** DNR API ISSUE!');
		}
	})

  var xshPrice = getJSON('https://maplechange.com/api/v2/tickers/xshbtc.json', function(error, response){
		if(!error) {
			var xshPrice = response["ticker"]["last"];
			console.log('**MCX BOT** XSH Price has been logged to the file. ' + xshPrice +" BTC");
			fs.writeFile("price/xsh.txt",xshPrice,(err)=>{
				if(err) throw err;
			});
		} else {
			console.log('**MCX BOT** XSH API ISSUE!');
		}
	})

  var babyPrice = getJSON('https://maplechange.com/api/v2/tickers/babybtc.json', function(error, response){
		if(!error) {
			var babyPrice = response["ticker"]["last"];
			console.log('**MCX BOT** BABY Price has been logged to the file. ' + babyPrice +" BTC");
			fs.writeFile("price/baby.txt",babyPrice,(err)=>{
				if(err) throw err;
			});
		} else {
			console.log('**MCX BOT** BABY API ISSUE!');
		}
	})
}

module.exports = getPrice;
