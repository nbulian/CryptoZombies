var CryptoZombies = artifacts.require("./migration/CryptoZombies.sol");
module.exports = function (deployer) {
    deployer.deploy(CryptoZombies);
};
