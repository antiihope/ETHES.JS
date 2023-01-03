const { ethers } = require('ethers');
require('dotenv').config();
const INFURA_ID = process.env.INFURA_ID;

const provider = new ethers.providers.JsonRpcProvider(
  `https://mainnet.infura.io/v3/${INFURA_ID}`
);

const ERC20_ABI = [
  'function name() view returns (string)',
  'function symbol() view returns (string)',
  'function totalSupply() view returns (uint256)',
  'function balanceOf(address) view returns (uint)',

  'event Transfer(address indexed from, address indexed to, uint amount)',
];

const address = '0x6b175474e89094c44da98b954eedeac495271d0f'; // DAI Contract
const contract = new ethers.Contract(address, ERC20_ABI, provider);

const main = async () => {
  const block = await provider.getBlockNumber();

  const transferEvents = await contract.queryFilter(
    'Transfer',
    block - 1,
    block
  );
  console.log(transferEvents);
  const fs = require('fs');
  fs.writeFile(
    'transferEvents.json',
    JSON.stringify(transferEvents, null, 2),
    (err) => {
      if (err) {
        console.error(err);
        return;
      }
      console.log('File has been created');
    }
  );
};

main();
