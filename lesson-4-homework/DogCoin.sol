// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.18;


contract DogCoin{

    uint256  totalSupply = 2000000;
    address public owner;
    event supplyChange(uint256);
    event transferCoins(uint256,address);
    
    mapping(address =>uint256) public balances;

    struct Payment{
        address recipientAddress;
        uint256 transferAmount;
    }

    mapping(address => Payment[]) public payment;

    modifier onlyOwner{
        require(msg.sender==owner, "Only owner can execute this action");

        _;

    }

    constructor(uint256 _totalSupply){
        owner==msg.sender;
        totalSupply = _totalSupply;
        balances[owner] = totalSupply;
    }
    

    function returnTotalSupply() public view onlyOwner returns(uint256){

        return totalSupply;
    }

    function increaseSupply(uint256 amount) public {
        require(amount%1000==0, "must be in increments of 1000 ");
        totalSupply += amount;
        emit supplyChange(totalSupply);
    }

    function transfer(uint256 _amount, address _recipient) public{
        require(balances[msg.sender]>=_amount, "Insufficient balance");
        balances[msg.sender] -= _amount;
        balances[_recipient] += _amount;

        emit transferCoins(_amount,_recipient);
    }


}