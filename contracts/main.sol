pragma solidity ^0.5.2;

contract TestContractSimple {
    mapping(address => uint256) public balances;
    uint256 public limit = 0.1 ether;

    function concat(bytes memory a, bytes memory b)
        internal
        pure
        returns (bytes memory)
    {
        return abi.encodePacked(a, b);
    }

    function num2str(uint256 _i)
        internal
        pure
        returns (bytes memory _uintAsString)
    {
        if (_i == 0) {
            return "0";
        }
        uint256 j = _i;
        uint256 len;
        while (j != 0) {
            len++;
            j /= 10;
        }
        bytes memory bstr = new bytes(len);
        uint256 k = len - 1;
        while (_i != 0) {
            bstr[k--] = bytes1(uint8(48 + (_i % 10)));
            _i /= 10;
        }
        return bstr;
    }

    function withdraw() public {
        uint256 amount = balances[msg.sender];
        bytes memory myVariable = "Insufficient balance ";
        string memory message = string(concat(myVariable, num2str(amount)));
        message;
        require(amount <= limit, message);
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
    // function balanceOf(address _owner) public view returns (uint) {
    //     return balances[_owner];
    // }
    function balanceOf(address account) external view returns (uint256);

    function() external payable {}
}
