const TrophyChar = artifacts.require('TrophyChar')

module.exports = async callback => {
  const trp = await TrophyChar.deployed()
  console.log('Creating requests on contract:', trp.address)
  const tx = await trp.requestNewRandomTrophy(77, "The Chainlink Knight")
  const tx2 = await trp.requestNewRandomTrophy(7777777, "The Chainlink Elf")
  const tx3 = await trp.requestNewRandomTrophy(7, "The Chainlink Wizard")
  const tx4 = await trp.requestNewRandomTrophy(777, "The Chainlink Orc")
  callback(tx.tx)
}