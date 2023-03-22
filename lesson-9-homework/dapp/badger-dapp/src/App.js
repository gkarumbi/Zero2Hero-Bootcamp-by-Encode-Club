import { useState, useEffect } from "react";
import { ethers } from "ethers";
 
function App() {
  //let [text, setText] = useState("");
  let [savedText, setSavedText] = useState("");
  let [connected, setConnected] = useState(false);
 
  let { ethereum } = window;
  let contract = null;
 
  useEffect(() => {
    if (ethereum) {
      ethereum.request({ method: "eth_accounts" }).then((accounts) => {
        if (accounts.length > 0) {
          setConnected(true);
        }
      });
    }
     // eslint-disable-next-line
  }, [ethereum.selectedAddress]); // Add ethereum.selectedAddress to the dependency array
 
  if (ethereum) {
    let abi = ["function getBalance(address account) public view returns(uint256)"];
    let address = "0x5a9a88af4fafb03028a0209a3d139695457ba379";
    let provider = new ethers.providers.Web3Provider(ethereum);
    let signer = provider.getSigner();
    contract = new ethers.Contract(address, abi, signer);
  }
 
  return (
    <div className="App">
      <h1>Badger Coin Dapp</h1>
 
      <button
        onClick={() => {
          if (contract && !connected) {
            ethereum.request({ method: "eth_requestAccounts" }).then((accounts) => {
              if (accounts.length > 0) {
                setConnected(true);
              }
            });
          }
        }}
      >
        {!connected ? "Connect wallet" : "Connected"}
      </button>
 
      <button
        onClick={() => {
          if (contract && connected) {
            contract.getBalance(ethereum.selectedAddress).then((balance) => {
                console.log(balance.toString())
              setSavedText(balance.toString());
            });
          }
        }}
      >
        Get balance
      </button>
 
      <h3>{savedText}</h3>
    </div>
  );
}
 
export default App;
