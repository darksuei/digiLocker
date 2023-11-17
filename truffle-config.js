const { NEMONIC, ENDPOINT_KEY, INFURA_API_KEY } = require("./environment");
var HDWalletProvider = require("@truffle/hdwallet-provider");

module.exports = {
     contracts_directory: "./contracts/",
     networks: {
      development: {
        host: "127.0.0.1",
        port: 9545,
        network_id: "*",
      },
      sepolia: {
        provider: () => {
          return new HDWalletProvider(NEMONIC, ENDPOINT_KEY)
        },
        network_id: 11155111,
        gas: 29000000,
        networkCheckTimeout: 100000,
      },
     },
     compilers: {
       solc: {
         optimizer: {
           enabled: true,
           runs: 200
         },
         version: "0.8.16"
       }
     }
   };