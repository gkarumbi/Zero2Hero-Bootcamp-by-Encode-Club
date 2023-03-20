const { ethers } = require("hardhat");

async function main() {
  // Replace with your deployed contract's ABI and address
  const contractABI = [
    "function getBalance(address account) public view returns(uint256)",
  ];
  const contractAddress = "0x38acaA52c46F6760fB3911593500eF6e4465be9E"; //Developer Metamask Address

  const provider = ethers.getDefaultProvider();
  const contract = new ethers.Contract(contractAddress, contractABI, provider);

  // Replace with the address you want to check the balance of
  const address = "0x5a9a88aF4fAFB03028a0209A3D139695457Ba379"; //token Address

  const balance = await contract.getBalance(address);
  console.log(`Balance of ${address}: ${balance.toString()}`);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
