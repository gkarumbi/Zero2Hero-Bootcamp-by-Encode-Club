// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract BadgerCoin is ERC20{
    address public owner;

     constructor() ERC20("BadgerCoin","BC"){
        uint256 initialSupply = 1000000 * 10 ** decimals();
        _mint(msg.sender,initialSupply);
        owner ==msg.sender;
    }

    function getBalance(address account) public view returns(uint256){
        return balanceOf(account);// A function of ERC20
    }

    function transfer(address recepient, uint256 amount) public virtual override returns(bool){
        require(amount <= balanceOf(_msgSender()), "Insufficient balance");
        _transfer(_msgSender(), recepient, amount);
        return true;
    }
}