const DungenToken = artifacts.require("DungenToken");
// const Controller = artifacts.require("GameController");
const MaticLink = artifacts.require("MaticLink");



module.exports = async function (deployer) {
    await deployer.deploy(DungenToken,"Dungeon","DGN");
    await deployer.deploy(MaticLink,"MATIC","MATIC");

    // const token = await DungenToken.deployed();
    
    // await deployer.deploy(Controller, token.address, '0xd8bD0a1cB028a31AA859A21A3758685a95dE4623');
};
