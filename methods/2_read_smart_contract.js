const { ethers } = require('ethers');
require('dotenv').config();

const INFURA_ID = process.env.INFURA_ID;
const provider = new ethers.providers.JsonRpcProvider(
  `https://goerli.infura.io/v3/${INFURA_ID}`
);

const ERC20_ABI = [
  'function name() view returns (string)',
  'function symbol() view returns (string)',
  'function totalSupply() view returns (uint256)',
  'function balanceOf(address) view returns (uint)',
];

// const address = '0x090D05c16B5D1c4Df9b53fddC90A0f3B71ad16fA'; // DAI Contract
// const contract = new ethers.Contract(address, ERC20_ABI, provider);

const main = async (address) => {
  const contract = new ethers.Contract(address, ERC20_ABI, provider);
  const name = await contract.name();
  const symbol = await contract.symbol();
  const totalSupply = await contract.totalSupply();

  console.log(`\nReading from ${address}\n`);
  console.log(`Name: ${name}`);
  console.log(`Symbol: ${symbol}`);
  console.log(`Total Supply: ${totalSupply}\n`);

  const balance = await contract.balanceOf(
    '0x6c6Bc977E13Df9b0de53b251522280BB72383700'
  );

  console.log(`Balance Returned: ${balance}`);
  console.log(`Balance Formatted: ${ethers.utils.formatEther(balance)}\n`);
  return (
    `Balance Returned: ${balance}` +
    ` Balance Formatted: ${ethers.utils.formatEther(balance)}\n`
  );
};

// The above code is an example of an asynchronous function that retrieves information from a contract address, such as the contract's name, symbol, total supply, and balance. It uses the contract object to call the name, symbol, and totalSupply functions, and the balanceOf function with a specific address as an argument. The returned values are logged to the console.
// main();

module.exports = main;
