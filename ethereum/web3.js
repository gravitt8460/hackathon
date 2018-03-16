import Web3 from "web3";

let web3;
if (typeof window !== "undefined" && typeof window.web3 !== "undefined") {
  // in browser AND MetaMask is available
  // high jack MetaMask's web3's provider and use it in our copy
  web3 = new Web3(window.web3.currentProvider);
} else {
  // Not in browser OR user is not running MetaMask
  const provider = new Web3.providers.HttpProvider(
    "https://rinkeby.infura.io/orDImgKRzwNrVCDrAk5Q"
  );

  web3 = new Web3(provider);
}

export default web3;
