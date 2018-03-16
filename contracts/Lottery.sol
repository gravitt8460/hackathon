pragma solidity ^0.4.17;

contract Lottery {
    uint public entryFee;
    bool public isCompleted;
    uint public amountWon;
    address public winner;
    address public manager;
    address[] public players;

    function Lottery (uint _entryFee, address creator) public {
        isCompleted = false;
        entryFee = _entryFee;
        manager = creator;
    }

    function enter () public payable {
        require (msg.value >= entryFee);
        require (! isCompleted);
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

    function getSummary() public view returns (
        uint, uint, uint, bool, address, address, uint
        ) {
          return (
            entryFee,       // uint
            this.balance,   // uint
            players.length, // uint
            isCompleted,    // bool
            winner,         // address
            manager,         // address
            amountWon       //uint
          );
    }

    function getPlayersCount() public view returns (uint) {
        return players.length;
    }
}
