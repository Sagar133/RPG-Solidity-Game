// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "./ICustomERC20.sol";
import "./IChainlinkAggregatorV3.sol";

contract GameController {
    ICustomERC20 coin;
    IsChainlinkAggregatorV3 priceFeed;

    constructor(ICustomERC20 coin_, IsChainlinkAggregatorV3 priceFeed_) public {
        coin = coin_;
        priceFeed = priceFeed_;
    }

    function getPriceInPrecision(uint256 price, uint8 precision)
        public
        view
        returns (uint256)
    {
        return (price * (precision)) / (10**uint256(priceFeed.decimals()));
    }

    function getPrice() public view returns (uint256) {
        (, int256 answer, , , ) = priceFeed.latestRoundData();

        return getPriceInPrecision(uint256(answer), 18);
    }

    function beginPlay() public returns (bool) {
        uint256 price = getPrice();

        require(
            coin.balanceOf(msg.sender) >= price,
            "Controller: balance < required"
        );

        coin.burn(msg.sender, price);

        return true;
    }

    function endPlay() public returns (bool) {
        uint256 price = getPrice();

        require(
            coin.balanceOf(msg.sender) >= price,
            "Controller: balance < required"
        );

        coin.mint(msg.sender, price);

        return true;
    }
}
