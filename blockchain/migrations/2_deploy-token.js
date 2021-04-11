const DungenCoin = artifacts.require("DungenCoin");
const Controller = artifacts.require("Controller");

module.exports = async function (deployer) {
    deployer.deploy(DungenCoin);
    const token = await DungenCoin.deployed();

    deployer.deploy(Controller, token.address, '0xd8bD0a1cB028a31AA859A21A3758685a95dE4623');
};
