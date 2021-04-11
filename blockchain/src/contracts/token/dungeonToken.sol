// SPDX-License-Identifier: MIT
pragma solidity ^0.6.12;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract DungeonToken is ERC20 {
    constructor() public ERC20("Dungeon", "DGN") {}

    function reward(address _to) public {
        _mint(_to, 10e18);
    }
}
