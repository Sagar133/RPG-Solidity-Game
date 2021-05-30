pragma solidity ^0.8.0;

import { ERC20Pausable } from "@openzeppelin/contracts/token/ERC20/extensions/ERC20Pausable.sol";
import { ERC20 } from "@openzeppelin/contracts/token/ERC20/ERC20.sol";



contract MaticLink is ERC20 {
    constructor (string memory name, string memory symbol)
    public
    ERC20 (name, symbol) {
        _mint(msg.sender, 100000);
    }
    function reward(address account, uint256 amount)
        public
    {
        _mint(account, amount);
    }

}