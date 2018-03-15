import web3 from "./web3";
import Commission from "./build/Commission.json";
const instance = new web3.eth.Contract(
  JSON.parse(Commission.interface),
  "0xc8f9e28d76adec4dcd00447062e8d69259e1a199"
);

export default instance;
