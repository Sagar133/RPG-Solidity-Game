const RINKEBY_VRF_COORDINATOR = '0xb3dCcb4Cf7a26f6cf6B120Cf5A73875B7BBc655B'
const RINKEBY_LINKTOKEN = '0x01be23585060835e02b77ef475b0cc51aa1e0709'
const RINKEBY_KEYHASH = '0x2ed0feb3e7fd2022120aa84fab1945545a9f2ffc9076fd6156fa96eaff4c1311'

const GladiatorCharacter = artifacts.require('GladiatorCharacter')
module.exports = async (deployer, network, [defaultAccount]) => {
    // for rinkeby
    if(network.startsWith('rinkeby')) {
        await deployer.deploy(GladiatorCharacter, RINKEBY_VRF_COORDINATOR, RINKEBY_LINKTOKEN, RINKEBY_KEYHASH)
        let gc = await GladiatorCharacter.deployed()
    }else if (network.startsWith('mainnet')) {
        console.log("Use Rinkeby")
    }else {
        console.log("Use rinkeby again")
    }
    
}
