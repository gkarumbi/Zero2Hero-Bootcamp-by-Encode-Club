// SPDX-License-Identifier: None

pragma solidity 0.8.17;


contract BootcampContract {

    address public owner;
    uint256 number;

    constructor(){
        owner=msg.sender;
    }

    function store(uint256 num) public {
        number = num;
    }


    function retrieve() public view returns (uint256){
        return number;
    }
}