let global : any = typeof window !== 'undefined' ? window : self;
global.config = {
    apiUrl: typeof window !== 'undefined' && window.location ? window.location.href.substr(0, window.location.href.lastIndexOf('/') + 1) + 'api/' : 'https://wallet.bitcoin2.network/api/',
    mainnetExplorerUrl: "http://explorer.bitcoin2.network/",
    mainnetExplorerUrlHash: "http://explorer.bitcoin2.network/transaction.html?hash={ID}",
    mainnetExplorerUrlBlock: "http://explorer.bitcoin2.network/block.html?hash={ID}",
    testnetExplorerUrl: "http://testnet.bitcoin2.network/",
    testnetExplorerUrlHash: "http://testnet.bitcoin2.network/transaction.html?hash={ID}",
    testnetExplorerUrlBlock: "http://testnet.bitcoin2.network/block.html?hash={ID}",
    testnet: false,
    coinUnitPlaces: 8,
    txMinConfirms: 10,         // corresponds to CRYPTONOTE_DEFAULT_TX_SPENDABLE_AGE in Monero
    txCoinbaseMinConfirms: 60, // corresponds to CRYPTONOTE_MINED_MONEY_UNLOCK_WINDOW in Monero
    addressPrefix: 2345936,
    integratedAddressPrefix: 0,
    addressPrefixTestnet: 0,
    integratedAddressPrefixTestnet: 0,
    subAddressPrefix: 0,
    subAddressPrefixTestnet: 0,
    feePerKB: new JSBigInt('1000000'),//20^10 - for testnet its not used, as fee is dynamic.
    dustThreshold: new JSBigInt('1000000'),//10^10 used for choosing outputs/change - we decompose all the way down if the receiver wants now regardless of threshold
    defaultMixin: 0, // default value mixin
    idleTimeout: 30,
    idleWarningDuration: 20,

    coinSymbol: 'B2N',
    openAliasPrefix: "b2n",
    coinName: 'Bitcoin2Network',
    coinUriPrefix: 'bitcoin2network:',
    avgBlockTime: 90,
    maxBlockNumber: 500000000,
};