var Migrations = artifacts.require("./migration/Migrations.sol");

module.exports = function (deployer) {
    deployer.deploy(Migrations);
};