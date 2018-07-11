"use strict";

var fs = require("fs");
var getJSON = require('get-json');

function getPrice(){

  var dgbPrice = getJSON('https://api.coinmarketcap.com/v1/ticker/digibyte/', function(error, response){
    if(!error) {
      var dgbPrice = response[0]["price_btc"];
      //console.log('**MCX BOT** DGB Price has been logged to the file. ' + dgbPrice +" BTC");
      fs.writeFile("price/dgb.txt",dgbPrice,(err)=>{
        if(err) throw err;
      });
    } else {
      console.log('**MCX BOT** DGB API ISSUE!');
    }
  })

  var ethPrice = getJSON('https://api.coinmarketcap.com/v1/ticker/ethereum/', function(error, response){
    if(!error) {
      var ethPrice = response[0]["price_btc"];
      //console.log('**MCX BOT** ETH Price has been logged to the file. ' + ethPrice +" BTC");
      fs.writeFile("price/eth.txt",ethPrice,(err)=>{
        if(err) throw err;
      });
    } else {
      console.log('**MCX BOT** ETH API ISSUE!');
    }
  })

  var ltcPrice = getJSON('https://api.coinmarketcap.com/v1/ticker/litecoin/', function(error, response){
    if(!error) {
      var ltcPrice = response[0]["price_btc"];
      //console.log('**MCX BOT** LTC Price has been logged to the file. ' + ltcPrice +" BTC");
      fs.writeFile("price/ltc.txt",ltcPrice,(err)=>{
        if(err) throw err;
      });
    } else {
      console.log('**MCX BOT** LTC API ISSUE!');
    }
  })

  var dogePrice = getJSON('https://api.coinmarketcap.com/v1/ticker/dogecoin/', function(error, response){
    if(!error) {
      var dogePrice = response[0]["price_btc"];
      //console.log('**MCX BOT** DOGE Price has been logged to the file. ' + dogePrice +" BTC");
      fs.writeFile("price/doge.txt",dogePrice,(err)=>{
        if(err) throw err;
      });
    } else {
      console.log('**MCX BOT** DOGE API ISSUE!');
    }
  })

  var expPrice = getJSON('https://api.coinmarketcap.com/v1/ticker/expanse/', function(error, response){
    if(!error) {
      var expPrice = response[0]["price_btc"];
      //console.log('**MCX BOT** EXP Price has been logged to the file. ' + expPrice +" BTC");
      fs.writeFile("price/exp.txt",expPrice,(err)=>{
        if(err) throw err;
      });
    } else {
      console.log('**MCX BOT** EXP API ISSUE!');
    }
  })

  var egemPrice = getJSON('https://maplechange.com/api/v2/tickers/egembtc.json', function(error, response){
		if(!error) {
			var egemPrice = response["ticker"]["last"];
			//console.log('**MCX BOT** EGEM Price has been logged to the file. ' + egemPrice +" BTC");
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
			//console.log('**MCX BOT** WAE Price has been logged to the file. ' + waePrice +" BTC");
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
			//console.log('**MCX BOT** DNR Price has been logged to the file. ' + dnrPrice +" BTC");
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
			//console.log('**MCX BOT** XSH Price has been logged to the file. ' + xshPrice +" BTC");
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
			//console.log('**MCX BOT** BABY Price has been logged to the file. ' + babyPrice +" BTC");
			fs.writeFile("price/baby.txt",babyPrice,(err)=>{
				if(err) throw err;
			});
		} else {
			console.log('**MCX BOT** BABY API ISSUE!');
		}
	})

  var gzroPrice = getJSON('https://maplechange.com/api/v2/tickers/gzrobtc.json', function(error, response){
		if(!error) {
			var gzroPrice = response["ticker"]["last"];
			//console.log('**MCX BOT** GZRO Price has been logged to the file. ' + gzroPrice +" BTC");
			fs.writeFile("price/gzro.txt",gzroPrice,(err)=>{
				if(err) throw err;
			});
		} else {
			console.log('**MCX BOT** GZRO API ISSUE!');
		}
	})

  var irdPrice = getJSON('https://maplechange.com/api/v2/tickers/irdbtc.json', function(error, response){
		if(!error) {
			var irdPrice = response["ticker"]["last"];
			//console.log('**MCX BOT** IRD Price has been logged to the file. ' + irdPrice +" BTC");
			fs.writeFile("price/ird.txt",irdPrice,(err)=>{
				if(err) throw err;
			});
		} else {
			console.log('**MCX BOT** IRD API ISSUE!');
		}
	})

  var msrPrice = getJSON('https://maplechange.com/api/v2/tickers/msrbtc.json', function(error, response){
		if(!error) {
			var msrPrice = response["ticker"]["last"];
			//console.log('**MCX BOT** IRD Price has been logged to the file. ' + irdPrice +" BTC");
			fs.writeFile("price/msr.txt",msrPrice,(err)=>{
				if(err) throw err;
			});
		} else {
			console.log('**MCX BOT** MSR API ISSUE!');
		}
	})

  var mriPrice = getJSON('https://maplechange.com/api/v2/tickers/mribtc.json', function(error, response){
		if(!error) {
			var mriPrice = response["ticker"]["last"];
			//console.log('**MCX BOT** IRD Price has been logged to the file. ' + irdPrice +" BTC");
			fs.writeFile("price/mri.txt",mriPrice,(err)=>{
				if(err) throw err;
			});
		} else {
			console.log('**MCX BOT** MRI API ISSUE!');
		}
	})

  var mztPrice = getJSON('https://maplechange.com/api/v2/tickers/mztbtc.json', function(error, response){
		if(!error) {
			var mztPrice = response["ticker"]["last"];
			//console.log('**MCX BOT** IRD Price has been logged to the file. ' + irdPrice +" BTC");
			fs.writeFile("price/mzt.txt",mztPrice,(err)=>{
				if(err) throw err;
			});
		} else {
			console.log('**MCX BOT** MZT API ISSUE!');
		}
	})

}

module.exports = getPrice;
