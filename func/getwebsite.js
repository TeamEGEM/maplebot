"use strict";

let Website = {},
    getJSON = require('get-json');

Website.getPairs = function(ticker) {
    let jsonData = getJSON('https://maplechange.com/api/v2/markets/'),
        pairs = {};

    for (let index in jsonData)
        if (jsonData.hasOwnProperty(index))
            if (jsonData[index].id.contains(ticker)) {
                pairs[jsonData[index].id] = { name: jsonData[index].name };

                let prefix = jsonData[index].name.split('/')[0];

                if (prefix === 'BTC')
                    pairs[jsonData[index].id].type = 'Bitcoin';
                else if (prefix === 'ETH')
                    pairs[jsonData[index].id].type = 'Ethereum';
                else if (prefix === 'XMR')
                    pairs[jsonData[index].id].type = 'Monero';
                else if (prefix === 'LTC')
                    pairs[jsonData[index].id].type = 'Litecoin';
                else if (prefix === 'EGEM')
                    pairs[jsonData[index].id].type = 'EtherGem';
            }

    return pairs;
};

Website.getWebsite = function(ticker) {
    /**
     * Time to hardcode shit...
     */

    switch(ticker) {
        case 'btc':
            return 'https://bitcoin.org';

        case 'wae':
            return 'https://weycoin.org';

        case 'ltc':
            return 'https://litecoin.com';

        case 'doge':
            return 'https://dogecoin.com';

        case 'eth':
            return 'https://ethereum.org';

        case 'spes':
            return 'https://myspes.org/';

        case 'xun':
            return 'https://www.ultranote.org/';

        case 'xax':
            return 'https://www.artaxcoin.org/';

        case 'baby':
            return 'https://babychain.xyz';

        case 'xgox':
            return 'http://xgox.rocks/';

        case 'ird':
            return 'https://ird.cash/';

        case 'gzro':
            return 'https://gzro.net/';

        case 'mri':
            return 'http://mirai.xgox.rocks/';

        case 'xgod':
            return 'http://xgox.rocks/';

        case 'msr':
            return 'https://getmasari.org/';

        case 'xao':
            return 'https://alloyproject.org/';

        case 'ryo':
            return 'https://ryo-currency.com/';

        case 'sumo':
            return 'https://www.sumokoin.org/';

        case 'wow':
            return 'https://wownero.org/';

        case 'egem':
            return 'https://egem.io/';

        case 'mzt':
            return 'https://myztic.cash/';

        case 'dnr':
            return 'https://denarius.io/';

        case 'xsh':
            return 'https://www.shieldx.sh/';

        case 'dgb':
            return 'https://www.digibyte.co/';

        case 'etnx':
            return 'https://electronero.org/';

        case 'trtl':
            return 'https://turtlecoin.lol/';

        case 'vtc':
            return 'https://vertcoin.org/';

        case 'cnmc':
            return 'https://www.cryptonodes.ch/';

        case 'mota':
            return 'https://www.realmotacoin.com/';

        case 'fest':
            return 'http://festivalcoin.net/';

        case 'grwi':
            return 'https://grwi.io/';

        case 'etho':
            return 'https://ether1.org/';

        case 'pars':
            return 'https://parsicoin.net/';

        case 'skx':
            return 'http://www.skullnodes.io/';

        case 'pgn':
            return 'https://pigeoncoin.org/';

        case 'xsf':
            return 'https://www.flake.space/';

        case 'nbx':
            return 'http://nibex.io/';

        case 'reex':
            return 'https://reecore.org/';

        case 'b2b':
            return 'https://b2bcoin.xyz/';

        case 'xbi':
            return 'https://bitcoinincognito.com/';

        case 'ccx':
            return 'https://conceal.network/';

        case 'drop':
            return 'https://xdrop.io/';

        case 'ksn':
            return 'http://koson-currency.com/';

        case 'xmr':
            return 'https://getmonero.org/';

        case 'una':
            return 'https://www.unaproject.com/';

        case 'exp':
            return 'https://expanse.tech/';

        case 'geem':
            return 'https://geem.io/';

        case 'etn':
            return 'https://electroneum.com/';

        case 'ress':
            return 'https://www.renesis.io/';

        case 'recl':
            return 'https://www.recoal.org/';

        case 'blur':
            return 'https://blur.cash/';

        case 'poly':
            return 'https://polytimos.net/';

        case 'cfcc':
            return 'https://www.cryptofightclubco.in/';

        case 'mutx':
            return 'https://twitter.com/OfficialMutex';

        case 'wtip':
            return 'http://worktips.info/';

        case 'intu':
            return 'http://intucoin.com/';

        case 'lmo':
            return 'https://lumeneo.network/';

        default:
            return 'https://maplechange.com/'
    }

}

module.exports = Website;