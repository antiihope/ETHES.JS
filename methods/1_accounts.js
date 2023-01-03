const { ethers } = require('ethers');
require('dotenv').config();
const INFURA_ID = process.env.INFURA_ID;
const provider = new ethers.providers.JsonRpcProvider(
  `https://goerli.infura.io/v3/${INFURA_ID}`
);

// const address = '0x73BCEb1Cd57C711feaC4224D062b0F6ff338501e';
// const address = '0x26B97f99145d779D00c47aE5EB1E5852D540ABf8';

const main = async (address) => {
  const balance = await provider.getBalance(address);
  console.log(
    `\nETH Balance of ${address} --> ${ethers.utils.formatEther(balance)} ETH\n`
  );
  return `\nETH Balance of ${address} --> ${ethers.utils.formatEther(
    balance
  )} ETH\n`;
};
module.exports = main;
