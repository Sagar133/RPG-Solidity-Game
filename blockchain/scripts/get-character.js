const GladiatorCharacter = artifacts.require('GladiatorCharacter')

module.exports = async callback => {
    const gdc = await GladiatorCharacter.deployed()
    console.log('Let\'s get the overview of your character')
    const overview = await gdc.characters(0)
    console.log(overview)
    callback(overview.tx)
}