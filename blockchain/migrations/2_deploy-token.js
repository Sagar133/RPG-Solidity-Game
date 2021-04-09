const DungeonToken = artifacts.require("DungeonToken");

module.exports = function (deployer) {
    deployer.deploy(DungeonToken);
};
