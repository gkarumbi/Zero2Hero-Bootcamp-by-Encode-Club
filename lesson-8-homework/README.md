# BadgerCoin Hardhat Project

This project demonstrates a basic Hardhat use case, which in our case is deploying the BdagerCoin contract using Hardhat

The Badger Coint can be found here on the testnet:

https://testnet.bscscan.com/tx/0xb159299603194b12506d9542853f4db0bd690e32e2c6bfbfcd8cbf29791d2a90

Try running some of the following tasks:

```shell

npx hardhat verify --contract contracts/BadgerCoin.sol:BadgerCoin --network testnet 0x75a3D6571b4B4e8e6E71fa589C336014e2229cec
npx hardhat run --network testnet scripts/deploy.js
```
