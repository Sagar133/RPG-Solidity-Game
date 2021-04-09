// let EthPrice = 100
// let hardcap = 1000

// function getDiscountPrice(_collateralAmount) {
//     let EthEvaluation = _collateralAmount * EthPrice;

//     console.log('EthEvaluation', EthEvaluation, 'hardcap', hardcap);
//     let GenesisAmount = hardcap - EthEvaluation;
//     let GenesisDiscount = getGenesisPrice(EthEvaluation)
//     console.log('GenesisDiscount', GenesisDiscount);

//     let GenesisTokenPrice = 1 - ((1 / 100) * GenesisDiscount)
//     console.log('Genesis Token Price', GenesisTokenPrice);

//     let GenesisTokenToMint = EthEvaluation * GenesisTokenPrice
//     console.log('GenesisTokenToMint', GenesisTokenToMint);

//     return EthEvaluation;
// }

// getDiscountPrice(4.2)

// function getGenesisPrice(_amount) {
//     let genesisDiscount = 0;

//     let amountPercentage = (_amount * 100) / hardcap; //let(100).mul(_amount).div(hardcap);
//     let hardcapRemaining = ((hardcap - _amount) * 100) / hardcap
//     console.log('amountPercentage', amountPercentage, '%', 'hardcapRemaining', hardcapRemaining);

//     if (hardcapRemaining >= 90 && hardcapRemaining <= 100) {
//         genesisDiscount = 21
//     }

//     if (hardcapRemaining >= 80 && hardcapRemaining <= 89) {
//         genesisDiscount = 16
//     }

//     if (hardcapRemaining >= 70 && hardcapRemaining <= 79) {
//         genesisDiscount = 12
//     }

//     if (hardcapRemaining >= 60 && hardcapRemaining <= 69) {
//         genesisDiscount = 9
//     }

//     if (hardcapRemaining >= 50 && hardcapRemaining <= 59) {
//         genesisDiscount = 6
//     }

//     if (hardcapRemaining >= 40 && hardcapRemaining <= 49) {
//         genesisDiscount = 5
//     }

//     if (hardcapRemaining >= 30 && hardcapRemaining <= 39) {
//         genesisDiscount = 3
//     }

//     if (hardcapRemaining >= 20 && hardcapRemaining <= 29) {
//         genesisDiscount = 2
//     }

//     if (hardcapRemaining >= 10 && hardcapRemaining <= 1) {
//         genesisDiscount = 1
//     }
//     //console.log('genesisDiscount', genesisDiscount);
//     return genesisDiscount
// }

let hardcap = 100
let EthPrice = 100
let amountRaised = 11

const getGenesisTokenPrice = (_amount) => {
    let ethRaised = (amountRaised * 100) / hardcap
    let arthPrice

    console.log('ethRaised', ethRaised, '%');

    if (ethRaised >= 0 && ethRaised <= 9) {
        arthPrice = 0.50
    }

    if (ethRaised >= 10 && ethRaised <= 19) {
        arthPrice = 0.53
    }

    if (ethRaised >= 20 && ethRaised <= 29) {
        arthPrice = 0.56
    }

    if (ethRaised >= 30 && ethRaised <= 39) {
        arthPrice = 0.61
    }

    if (ethRaised >= 40 && ethRaised <= 49) {
        arthPrice = 0.65
    }

    if (ethRaised >= 50 && ethRaised <= 59) {
        arthPrice = 0.71
    }

    if (ethRaised >= 60 && ethRaised <= 69) {
        arthPrice = 0.78
    }

    if (ethRaised >= 70 && ethRaised <= 79) {
        arthPrice = 0.85
    }

    if (ethRaised >= 80 && ethRaised <= 89) {
        arthPrice = 0.95
    }

    if (ethRaised >= 90 && ethRaised <= 99) {
        arthPrice = 1.05
    }

    if (ethRaised >= 100) {
        arthPrice = 1.18
    }

    return arthPrice
}

const mintGenesisToken = async (_amount) => {
    let ethPrice = _amount * EthPrice
    console.log('_amount', _amount, 'ethPrice', ethPrice, '$')
    let genesisTokenPrice = getGenesisTokenPrice(ethPrice)
    console.log('genesisTokenPrice', genesisTokenPrice);
    let genesisTokenToMint = ethPrice / genesisTokenPrice
    console.log('genesisTokenToMint', genesisTokenToMint);
    let t = 0.5 + ((5 ** (10) - 1) / 5 * 0.85)
    // console.log(t);
}

mintGenesisToken(5)

