const DungenCoin = artifacts.require("DungenCoin");
const Controller = artifacts.require("GameController");

module.exports = async function (deployer) {
    await deployer.deploy(DungenCoin);
    const token = await DungenCoin.deployed();

    await deployer.deploy(Controller, token.address, '0xd8bD0a1cB028a31AA859A21A3758685a95dE4623');
};
