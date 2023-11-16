require('dotenv').config();
var HDWalletProvider = require("truffle-hdwallet-provider");
var NEMONIC = process.env["NEMONIC"];
var tokenKey = process.env["ENDPOINT_KEY"];

module.exports = {
     contracts_directory: "./contracts/",
     networks: {
       sepolia: {
         provider: function() {
           return new HDWalletProvider(NEMONIC, "https://sepolia.infura.io/v3/" + tokenKey);
         },
         network_id: 77, // Sepolia testnet network id
         gas: 6700000,
         gasPrice: 10000000000
       },
       development: {
         host: "localhost",
         port: 8545,
         network_id: "*" // Match any network id
       }
     },
     compilers: {
       solc: {
         optimizer: {
           enabled: true,
           runs: 200
         },
         version: "0.5.17"
       }
     }
   };