pragma solidity ^0.4.17;

contract Lottery {
    uint public minimumBet;
    bool public isCompleted;
    uint public amountWon;
    address public winner;
    address public manager;
    address[] public players;

    function Lottery (address creator) public {
        isCompleted = false;
      //  minimumBet = _minimumBet;
        manager = creator;
    }

    function enter () public payable {
        require (msg.value > 0.01 ether);
        players.push (msg.sender);
    }

    function random () private view returns (uint) {
        return uint(sha256(block.difficulty, now, players));
    }

    function pickWinner () public {
        require (manager == msg.sender);
        require (! isCompleted);
        uint index = random () % players.length;
        winner = players[index];
        amountWon = this.balance;
        winner.transfer (amountWon);
        isCompleted = true;
    }

    function getPlayers() public view returns (address[]) {
      return players;
    }
}
