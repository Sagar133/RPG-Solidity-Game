const TrophyChar = artifacts.require('TrophyChar')
const TOKENID = 0
module.exports = async callback => {
    const trp = await TrophyChar.deployed()
    console.log('Let\'s set the tokenURI of your characters')
    const tx = await trp.setTokenURI(0, "https://ipfs.io/ipfs/QmZGmdAdCHfpBY1YWGvDbf7FHfp48qW1e6GHjWDEYT1eHH?filename=legend.json")
    const tx1 = await trp.setTokenURI(1, "https://ipfs.io/ipfs/QmW7k5QVeCqbgXqdxakBhdv2msUD5fHgyrf5ecHMQy65yX?filename=god.json")
    const tx2 = await trp.setTokenURI(2, "https://ipfs.io/ipfs/QmUNweQ468ddeHr97M7zXTLVcAxNH6avzia2Mt5ZjS5fqb?filename=rarible.json")
    const tx3 = await trp.setTokenURI(3, "https://ipfs.io/ipfs/QmRMEXZMxtpYhW4GU5P2ziRyZDj3LcyTWxYNUZd111XE31?filename=btc.json")
    const tx4 = await trp.setTokenURI(4, "https://ipfs.io/ipfs/Qme9qTYNQAH4BQd6g1C5ySdQi2HEwoW8KUpd1oCzGinzye?filename=crystal.json")
    
    console.log(tx)
    callback(tx.tx)
}