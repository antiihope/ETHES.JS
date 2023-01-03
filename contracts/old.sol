pragma solidity ^0.5.0;

contract Faucet {
    mapping(address => uint256) public balances;
    uint256 public limit = 0.1 ether;

    function deposit() public payable {
        balances[msg.sender] += msg.value;
    }

    function withdraw() public {
        require(balances[msg.sender] > limit, "Insufficient balance");
        msg.sender.transfer(limit);
        balances[msg.sender] -= limit;
    }

    function() public payable {}
}
