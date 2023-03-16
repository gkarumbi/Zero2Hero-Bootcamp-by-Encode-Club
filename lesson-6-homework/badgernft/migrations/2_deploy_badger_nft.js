const BadgerNFT = artifacts.require("BadgerNFT");

module.exports = function (deployer) {
  deployer.deploy(BadgerNFT);
};
