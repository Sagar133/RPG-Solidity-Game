// SPDX-License-Identifier: MIT

pragma solidity ^0.6.12;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

import "../ICustomERC20.sol";

contract DungenCoin is ICustomERC20, ERC20 {
    /**
     * @dev State varaibels.
     */

    address private _owner;
    address private _controller;

    /**
     * @notice Modifiers.
     */

    modifier controllerIsSet() {
        require(_controller != address(0), "DungenCoin: o address");
        _;
    }

    modifier onlyController() {
        require(msg.sender == _controller, "DungenCoin: FORBIDDEN");
        _;
    }

    modifier onlyOwner() {
        require(msg.sender == owner(), "DungenCoin: FORBIDDEN");
        _;
    }

    /**
     * @notice Constructor.
     */

    constructor(string memory name, string memory symbol)
        public
        ERC20(name, symbol)
    {
        _owner = msg.sender;

        // Genesis supply.
        _mint(_owner, 10**18);
    }

    /**
     * @notice View.
     */

    function owner() public view returns (address) {
        return _owner;
    }

    function controller() public view returns (address) {
        return _controller;
    }

    /**
     * @notice Setters.
     */

    function setOwner(address account) public onlyOwner {
        _owner = account;
    }

    function setController(address controller_) public onlyOwner {
        _controller = controller_;
    }

    /**
     * @notice Mutations.
     */

    function mint(address account, uint256 amount)
        public
        override
        controllerIsSet
        onlyController
    {
        _mint(account, amount);
    }

    function burn(address account, uint256 amount)
        public
        override
        controllerIsSet
        onlyController
    {
        _burn(account, amount);
    }
}
