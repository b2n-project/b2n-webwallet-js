<?php

$testnet = false;
$cacheLocation = __DIR__.'/'.($testnet ? 'cache-testnet' : 'cache');
$daemonAddress = '127.0.0.1';
$rpcPort = $testnet ? 19035 : 19935;
$coinSymbol = 'b2n';
