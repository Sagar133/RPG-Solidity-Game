const TrophyChar = artifacts.require('TrophyChar')

module.exports = async callback => {
  const trp = await TrophyChar.deployed()
  console.log('Creating requests on contract:', trp.address)
  const tx = await trp.requestNewRandomTrophy(77, "btc")
  const tx2 = await trp.requestNewRandomTrophy(7777777, "crystal")
  const tx3 = await trp.requestNewRandomTrophy(7, "god")
  const tx4 = await trp.requestNewRandomTrophy(777, "legend")
  const tx5 = await trp.requestNewRandomTrophy(7777, "rarible")

  callback(tx.tx)
}