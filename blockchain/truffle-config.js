const HDWalletProvider = require('@truffle/hdwallet-provider');
require('dotenv').config();
const Web3 = require("web3");
// require('babel-polyfill');
// require('babel-register');

const mnemonic = process.env.MNEMONIC
const PRIVATE_KEY = process.env.PRIVATE_KEY
const Url = process.env.RPC_URL

module.exports = {
  networks: {
    cldev: {
      host: '127.0.0.1',
      port: 8545,
      network_id: '*',
    },
    ganache: {
      host: '127.0.0.1',
      port: 7545,
      network_id: '*',
    },
    rinkeby: {
      provider: function () {
        return new HDWalletProvider(PRIVATE_KEY, Url)
      },
      network_id: "4",
      networkCheckTimeout: 1000000,
      timeoutBlocks: 200,
      skipDryRun: true
      // addressIndex: 2
    }
  },
  contracts_directory: './src/contracts/',
  contracts_build_directory: './src/abis/',
  compilers: {
    solc: {
      version: "0.6.12",
      optimizer: {
        enabled: true,
        runs: 1
      }
    }
  },
  api_keys: {
    etherscan: process.env.ETHERSCAN_API_KEY,
  },
  plugins: [
    'truffle-plugin-verify'
  ]
}
