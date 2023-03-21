const { loadFixture } = require("@nomicfoundation/hardhat-network-helpers");
const { expect, assert } = require("chai");
require("@nomicfoundation/hardhat-chai-matchers");
const { ethers } = require("hardhat");

async function contractSetUp(){
    const [owner,otherAccount] = await ethers.getSigners();

    const Contract = await ethers.getContractFactory("BadgerCoin");
    const contract = await Contract.deploy();
    return{contract, owner, otherAccount}
}

describe("BadgerCoin", function(){
    


describe("Supply", function(){

    it("Should have a total supply of 1,000,000 BC", async()=>{
        const {contract} = await loadFixture(contractSetUp);

        expect(Number(await contract.totalSupply())).to.equal(
            Number(1_000_000 *10 **18)
        );
    })

    it("should have 18 decimal places", async ()=>{
        const {contract} = await loadFixture(contractSetUp);

        expect(await contract.decimals().to.equal(18));
    })
});

describe("Minting and Balances", () => {
    it("mints the initial supply to the owner", async () => {
      const { contract, owner } = await loadFixture(contractSetup);

      expect(Number(await contract.balanceOf(owner.address))).to.equal(
        Number(1_000_000 * 10 ** 18)
      );
      // assert.equal(
      //   await contract.balanceOf(owner.address),
      //   Number(1_000_000 * 10 ** 18)
      // );
    });

    it("transfers tokens correctly", async () => {
      const { contract, owner, otherAccount } = await loadFixture(
        contractSetup
      );

      await contract.transfer(otherAccount.address, 10_000);

      assert.equal(await contract.balanceOf(otherAccount.address), 10_000);
    });


    

    it("returns an error when transferring more tokens than are held", async () => {
      const { contract, owner, otherAccount } = await loadFixture(
        contractSetup
      );

      try {
        await contract.connect(otherAccount).transfer(owner.address, 100_000);
        assert.fail("Expected transfer to fail");
      } catch (error) {
        expect(error.message).to.contain(
          "ERC20: transfer amount exceeds balance"
        );
      }
    });
  });
});