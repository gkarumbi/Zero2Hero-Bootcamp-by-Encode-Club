// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract BadgerNFT is ERC721{

    constructor() ERC721("BadgerNFT", "BNFT"){}
    function mint(address _to, uint256 _tokenID) public{
        _mint(_to,_tokenID);
    }
}