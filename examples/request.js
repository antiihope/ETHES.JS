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
// ERC20_ABI is an array of functions that an Ethereum ERC-20 token must implement. It is used to interact with the Ethereum blockchain when working with ERC-20 tokens.

const address = '0xdc699ce89d18f9A27580046b874Fc61933D0162C'; // DAI Contract
const contract = new ethers.Contract(address, ERC20_ABI, provider);

const main = async () => {
  const name = await contract.name();
  const symbol = await contract.symbol();
  const totalSupply = await contract.totalSupply();

  console.log(`\nReading from ${address}\n`);
  console.log(`Name: ${name}`);
  console.log(`Symbol: ${symbol}`);
  console.log(`Total Supply: ${totalSupply}\n`);

  const balance = await contract.balanceOf(
    '0x26B97f99145d779D00c47aE5EB1E5852D540ABf8'
  );

  console.log(`Balance Returned: ${balance}`);
  console.log(`Balance Formatted: ${ethers.utils.formatEther(balance)}\n`);
};

// The above code is an example of an asynchronous function that retrieves information from a contract address, such as the contract's name, symbol, total supply, and balance. It uses the contract object to call the name, symbol, and totalSupply functions, and the balanceOf function with a specific address as an argument. The returned values are logged to the console.
main();
