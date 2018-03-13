contract Commission {
    address[] public commissionedLotteries;

    function commissionLottery() public {
        address newLottery = new Lottery(msg.sender);
        commissionedLotteries.push(newLottery);
    }

    function getCommissionedLotteries() public view returns (address[]) {
        return commissionedLotteries;
    }
}
