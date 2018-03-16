contract Commission {
    address[] public commissionedLotteries;

    function commissionLottery(uint entryFee) public {
        address newLottery = new Lottery(entryFee, msg.sender);
        commissionedLotteries.push(newLottery);
    }

    function getCommissionedLotteries() public view returns (address[]) {
        return commissionedLotteries;
    }
}
