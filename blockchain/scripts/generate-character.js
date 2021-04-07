const GladiatorCharacter = artifacts.require('GladiatorCharacter')

module.exports = async callback => {
  const gdc = await GladiatorCharacter.deployed()
  console.log('Creating requests on contract:', gdc.address)
  const tx = await gdc.requestNewRandomCharacter(77, "The Chainlink Knight")
  const tx2 = await gdc.requestNewRandomCharacter(7777777, "The Chainlink Elf")
  const tx3 = await gdc.requestNewRandomCharacter(7, "The Chainlink Wizard")
  const tx4 = await gdc.requestNewRandomCharacter(777, "The Chainlink Orc")
  callback(tx.tx)
}