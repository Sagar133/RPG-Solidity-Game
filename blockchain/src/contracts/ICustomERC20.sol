// SPDX-License-Identifier: MIT

pragma solidity ^0.6.12;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

interface ICustomERC20 is IERC20 {
    function mint(address, uint256) external;

    function burn(address, uint256) external;
}
