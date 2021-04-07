const TrophyChar = artifacts.require('TrophyChar')

module.exports = async callback => {
    const trp = await TrophyChar.deployed()
    console.log('Let\'s get the overview of your trophy')
    const overview = await trp.trophies(0)
    console.log(overview)
    callback(overview.tx)
}