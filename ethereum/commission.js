import web3 from "./web3";
import Commission from "./build/Commission.json";
const instance = new web3.eth.Contract(
  JSON.parse(Commission.interface),
  "0x43d5b7dd31b4de84e7b7787f47910e1b5d5ecf49"
);

export default instance;
