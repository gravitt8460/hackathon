const path = require("path");
const solc = require("solc");
const fs = require("fs-extra");

const buildPath = path.resolve(__dirname, "build");
fs.removeSync(buildPath);

const lotteryPath = path.resolve(__dirname, "contracts", "Lottery.sol");
const lotterySource = fs.readFileSync(lotteryPath, "utf8");

const commissionPath = path.resolve(__dirname, "contracts", "Commission.sol");
const commissionSource = fs.readFileSync(commissionPath, "utf8");

const source = commissionSource + " " + lotterySource;

const compOutput = solc.compile(source, 2);
//console.log(compOutput);

const output = compOutput.contracts;

fs.ensureDirSync(buildPath);

for (let contract in output) {
  fs.outputJsonSync(
    path.resolve(buildPath, contract.replace(":", "") + ".json"),
    output[contract]
  );
}
