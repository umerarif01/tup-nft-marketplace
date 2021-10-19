require("@nomiclabs/hardhat-waffle");
const fs = require('fs')
const privateKey = fs.readFileSync(".secret").toString().trim() || "01234567890123456789"
const projectid="4606db4f4e3c494f8e377eefb4199d8b";

module.exports = {
  networks: {
    hardhat: {
      chainId: 1337
    },
    mumbai: {
      url: `https://polygon-mumbai.infura.io/v3/${projectid}`,
      accounts: [privateKey]
    },
    mainnet: {
      url: `https://polygon-mainnet.infura.io/v3/${projectid}`,
      accounts: [privateKey]
    }
  },
  solidity: "0.8.4",
};
