const TrophyChar = artifacts.require('TrophyChar')
const fs = require('fs')

const metadataTemple = {
    "name": "",
    "description": "",
    "image": "",
    "attributes": [
        {
            "trait_type": "rarity",
            "value": 0
        },
        {
            "trait_type": "worth",
            "value": 0
        }
        // {
        //     "trait_type": "stamina",
        //     "value": 0
        // }
        // {
        //     "trait_type": "Intelligence",
        //     "value": 0
        // },
        // {
        //     "trait_type": "Wisdom",
        //     "value": 0
        // },
        // {
        //     "trait_type": "Charisma",
        //     "value": 0
        // },
        // {
        //     "trait_type": "Experience",
        //     "value": 0
        // }
    ]
}
module.exports = async callback => {
    const trp = await TrophyChar.deployed()
    length = await trp.getNumberOfTrophies()
    index = 0
    while (index < length) {
        console.log('Let\'s get the overview of your trophy ' + index + ' of ' + length)
        let trophyMetadata = metadataTemple
        let trophyOverview = await trp.trophies(index)
        index++
        trophyMetadata['name'] = trophyOverview['name']
        if (fs.existsSync('metadata/' + trophyMetadata['name'].toLowerCase().replace(/\s/g, '-') + '.json')) {
            console.log('test')
            continue
        }
        console.log(trophyMetadata['name'])
        trophyMetadata['attributes'][0]['value'] = trophyOverview['rarity']['words'][0]
        trophyMetadata['attributes'][1]['value'] = trophyOverview['worth']['words'][0]
        // trophyMetadata['attributes'][2]['value'] = trophyOverview['constitution']['words'][0]
        // trophyMetadata['attributes'][3]['value'] = trophyOverview['intelligence']['words'][0]
        // trophyMetadata['attributes'][4]['value'] = trophyOverview['wisdom']['words'][0]
        // trophyMetadata['attributes'][5]['value'] = trophyOverview['charisma']['words'][0]
        filename = 'metadata/' + trophyMetadata['name'].toLowerCase().replace(/\s/g, '-')
        let data = JSON.stringify(trophyMetadata)
        fs.writeFileSync(filename + '.json', data)
    }
    callback(trp)
}