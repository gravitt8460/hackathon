const assert = require("assert");
const ganache = require("ganache-cli");
const Web3 = require("web3");

const { interface, bytecode } = require("../ethereum/compile");
const compiledcommission = require("../ethereum/build/Commission.json");
const compiledLottery = require("../ethereum/build/Lottery.json");

let web3;
let commission;
let accounts;
let provider;
let lottery;

describe("Basics", () => {
  beforeEach(async () => {
    provider = ganache.provider();
    web3 = new Web3(provider);
    accounts = await web3.eth.getAccounts();

    commission = await new web3.eth.Contract(
      JSON.parse(compiledcommission.interface)
    )
      .deploy({
        data: compiledcommission.bytecode
      })
      .send({ from: accounts[0], gas: "1000000" });

    commission.setProvider(provider);

    await commission.methods
      .commissionLottery(web3.utils.toWei("0.02", "ether"))
      .send({
        from: accounts[0],
        gas: "1000000"
      });

    [
      lotteryAddress
    ] = await commission.methods.getCommissionedLotteries().call();

    lottery = await new web3.eth.Contract(
      JSON.parse(compiledLottery.interface),
      lotteryAddress
    );
  });

  it("Test commission deployment and lottery commission.", () => {
    assert.ok(commission.options.address);
    assert.ok(lottery.options.address);
  });

  it("marks caller as the campaign manager", async () => {
    const manager = await lottery.methods.manager().call();
    assert.equal(accounts[0], manager);
  });

  it("Allows one account to enter", async () => {
    await lottery.methods.enter().send({
      from: accounts[0],
      value: web3.utils.toWei("0.02", "ether")
    });

    const players = await lottery.methods.getPlayers().call({
      from: accounts[0]
    });

    const isCompleted = await lottery.methods.isCompleted().call({
      from: accounts[0]
    });

    assert.equal(accounts[0], players[0]);
    assert.equal(1, players.length);
    assert(!isCompleted);
  });

  it("Allows multiple account to enter", async () => {
    await lottery.methods.enter().send({
      from: accounts[0],
      value: web3.utils.toWei("0.02", "ether")
    });

    await lottery.methods.enter().send({
      from: accounts[1],
      value: web3.utils.toWei("0.02", "ether")
    });

    await lottery.methods.enter().send({
      from: accounts[2],
      value: web3.utils.toWei("0.02", "ether")
    });

    const players = await lottery.methods.getPlayers().call({
      from: accounts[0]
    });

    const isCompleted = await lottery.methods.isCompleted().call({
      from: accounts[0]
    });

    assert(!isCompleted);

    assert.equal(accounts[0], players[0]);
    assert.equal(accounts[1], players[1]);
    assert.equal(accounts[2], players[2]);
    assert.equal(3, players.length);
  });

  it("Requires minimum ether to enter", async () => {
    try {
      await lottery.methods.enter().send({
        from: accounts[0],
        value: 200
      });
      assert(false);
    } catch (err) {
      assert(err);
    }
  });

  it("Only manager can run pick winner", async () => {
    try {
      await lottery.methods.pickWinner().send({
        from: accounts[1]
      });
      assert(false);
    } catch (err) {
      assert(err);
    }
  });

  it("Sends money to winner and resets", async () => {
    await lottery.methods.enter().send({
      from: accounts[1],
      value: web3.utils.toWei("2", "ether"),
      gas: "1000000"
    });

    const beforeBalance = await web3.eth.getBalance(accounts[1]);

    await lottery.methods.pickWinner().send({
      from: accounts[0],
      gas: "1000000"
    });

    const amountWon = await lottery.methods.amountWon().call({
      from: accounts[1]
    });

    const isCompleted = await lottery.methods.isCompleted().call({
      from: accounts[1]
    });

    const afterBalance = await web3.eth.getBalance(accounts[1]);
    const difference = afterBalance - beforeBalance;
    //  console.log("Difference: ", difference);

    assert(difference > web3.utils.toWei("1.8", "ether"));

    assert(amountWon >= difference);
    assert(isCompleted);
  });

  it("Test commission of new lottery");
});
