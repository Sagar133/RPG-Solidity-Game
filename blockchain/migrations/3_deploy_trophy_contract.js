const TrophyChar = artifacts.require('TrophyChar')


const RINKEBY_LINKTOKEN = '0x326C977E6efc84E512bB9C30f76E30c160eD06FB'
const RINKEBY_VRF_COORDINATOR = '0x8C7382F9D8f56b33781fE506E897a4F1e2d17255'
const RINKEBY_KEYHASH = '0x6e75b569a01ef56d18cab6a8e71e6600d6ce853834d4a5748b720d06f878b3a4'



module.exports = async (deployer, network, [defaultAccount]) => {
    // for rinkeby
    await deployer.deploy(TrophyChar, RINKEBY_VRF_COORDINATOR, RINKEBY_LINKTOKEN, RINKEBY_KEYHASH)
        let trp = await TrophyChar.deployed()
    // if (network.startsWith('polygon')) {
    //     await deployer.deploy(TrophyChar, RINKEBY_VRF_COORDINATOR, RINKEBY_LINKTOKEN, RINKEBY_KEYHASH)
    //     let trp = await TrophyChar.deployed()
    // } else if (network.startsWith('mainnet')) {
    //     console.log("Use Rinkeby")
    // } else {
    //     console.log("Use rinkeby again")
    // }
}
