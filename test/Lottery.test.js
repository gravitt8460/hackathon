const assert = require("assert");
const ganache = require("ganache-cli");
const Web3 = require("web3");

const { interface, bytecode } = require("../compile");
const compiledCommissioner = require("../build/Commission.json");
const compiledLottery = require("../build/Lottery.json");

let web3;
let commissioner;
let accounts;
let provider;
let lottery;

describe("Basics", () => {
  beforeEach(async () => {
    provider = ganache.provider();
    web3 = new Web3(provider);
    accounts = await web3.eth.getAccounts();

    commissioner = await new web3.eth.Contract(
      JSON.parse(compiledCommissioner.interface)
    )
      .deploy({
        data: compiledCommissioner.bytecode
      })
      .send({ from: accounts[0], gas: "1000000" });

    commissioner.setProvider(provider);

    await commissioner.methods.commissionLottery().send({
      from: accounts[0],
      gas: "1000000"
    });

    [
      lotteryAddress
    ] = await commissioner.methods.getCommissionedLotteries().call();

    lottery = await new web3.eth.Contract(
      JSON.parse(compiledLottery.interface),
      lotteryAddress
    );
  });

  it("Test commissioner deployment and lottery commission.", () => {
    assert.ok(commissioner.options.address);
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

    assert.equal(accounts[0], players[0]);
    assert.equal(1, players.length);
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
      from: accounts[0],
      value: web3.utils.toWei("2", "ether"),
      gas: "1000000"
    });

    const beforeBalance = await web3.eth.getBalance(accounts[0]);

    await lottery.methods.pickWinner().send({
      from: accounts[0],
      gas: "1000000"
    });

    const afterBalance = await web3.eth.getBalance(accounts[0]);
    const difference = afterBalance - beforeBalance;
    assert(difference > web3.utils.toWei("1.8", "ether"));
  });

  it("Test commission of new lottery");
});
