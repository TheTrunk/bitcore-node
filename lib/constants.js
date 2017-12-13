'use strict';


module.exports = {
  HUSH_GENESIS_HASH: {
    livenet: '0003a67bc26fe564b75daf11186d360652eb435a35ba3d9d3e7e5d5f8e62dc17',
    regtest: '04994822c2ca4cd68f98e5410cda1ba38bee780e670d57f9d31bfb55642e53d1', //this is testnet too TODO2 HUSH testnet
    testnet: '04994822c2ca4cd68f98e5410cda1ba38bee780e670d57f9d31bfb55642e53d1', //this is testnet too
    testnet5: '04994822c2ca4cd68f98e5410cda1ba38bee780e670d57f9d31bfb55642e53d1' //this is testnet too
  },
  DB_PREFIX: new Buffer('ffff', 'hex')
};

