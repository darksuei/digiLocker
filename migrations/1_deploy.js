const digiLockerContract = artifacts.require("digiLocker");

module.exports = function(deployer) {
  deployer.deploy(digiLockerContract);
};