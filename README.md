# TUP NFT MarketPlace

This project demonstrates 

### Running this project

#### Gitpod

To deploy this project to Gitpod, follow these steps:

1. Click this link to deploy

[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#github.com/umerarif01/tup-nft-marketplace)

2. In __pages/index.js__, pass in the RPC address given to you by GitPod to the call to `JsonRpcProvider` function:

```javascript
/* update this: */
const provider = new ethers.providers.JsonRpcProvider()

/* to this: */
const provider = new ethers.providers.JsonRpcProvider("https://8545-youendpoint.gitpod.io/")
```

3. Import the RPC address given to you by GitPod into your MetaMask wallet

![MetaMask RPC Import](wallet.png)

#### Local setup

To run this project locally, follow these steps.

1. Clone the project locally, change into the directory, and install the dependencies:

```sh
git clone https://github.com/umerarif01/tup-nft-marketplace.git

cd polygon-ethereum-nextjs-marketplace

# install using NPM or Yarn
npm install

# or

yarn
```

2. Start the local Hardhat node

```sh
npx hardhat node
```

3. With the network running, deploy the contracts to the local network in a separate terminal window

```sh
npx hardhat run scripts/deploy.js --network localhost
```

4. Start the app

```
npm run dev
```

