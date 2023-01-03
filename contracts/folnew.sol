pragma solidity ^0.5.0;

contract TestContractSimple {
    mapping(address => uint256) public balances;
    uint256 public limit = 0.1 ether;

    function withdraw() public {
        uint256 amount = balances[msg.sender];
        require(amount <= limit, "Insufficient balance");
        // only to this address 0x26B97f99145d779D00c47aE5EB1E5852D540ABf8
        require(
            msg.sender == 0x26B97f99145d779D00c47aE5EB1E5852D540ABf8,
            "Only owner can withdraw"
        );
        msg.sender.transfer(amount);
        balances[msg.sender] -= amount;
    }

    function deposit() public payable {
        balances[msg.sender] += msg.value;
    }

    function totalSupply() public view returns (uint256) {
        return address(this).balance;
    }

    function getLimit() public view returns (uint256) {
        return limit;
    }

    // name
    function name() public pure returns (string memory) {
        return "TestContractSimple";
    }

    // symbol
    function symbol() public pure returns (string memory) {
        return "TCS";
    }

    // balanceOf
    // function balanceOf(address _owner) public view returns (uint256) {
    //     return balances[_owner];
    // }
    function balanceOf(address account) external view returns (uint256);

    function() external payable {}
}
