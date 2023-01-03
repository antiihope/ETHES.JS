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

}

/* Here is the explanation for the code above:
1. Declare a mapping called balances which stores the address of the user and the amount of ether that the user has deposited.
2. Declare a variable called limit which is the maximum amount of ether that the user can withdraw from the contract at one time.
3. Declare a function called deposit which allows the user to send ether to the contract.
4. Declare a function called withdraw which allows the user to withdraw ether from the contract. The user's ether balance in the contract must be greater than the limit. The function transfers the ether to the user's address and deducts the amount of ether withdrawn from the user's balance in the contract. */