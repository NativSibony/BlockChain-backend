const { BlockChain, Block } = require("./blockchain");
const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
};

const cryptoCoin = new BlockChain();

const blockCall = (index, data, previousHash) => {
  const block = new Block(index, data, previousHash);
  block.mineBlock(4);
  return JSON.stringify(block, null, 4);
};

const blockchainCall = (index, data, previousHash) => {
  for (let i = 0; i < 5; i++) {
    cryptoCoin.addBlock(new Block(index, data, previousHash));
  }
  return JSON.stringify(cryptoCoin, null, 4);
};

module.exports = {
  blockCall: blockCall,
  blockchainCall: blockchainCall,
};
