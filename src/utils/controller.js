const { BlockChain, Block } = require("./blockchain");
const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
};

const mineCall = (index, data, previousHash) => {
  const block = new Block(index, data, previousHash);
  block.mineBlock(4);
  return JSON.stringify(block, null, 4);
};

const chainCall = (index, data) => {
  const cryptoCoin = new BlockChain();

  for (let i = index; i <= 5; i++) {
    cryptoCoin.addBlock(new Block(i, data));
  }
  return JSON.stringify(cryptoCoin, null, 4);
};

console.log(
  mineCall(
    2,
    "",
    "0000ffea52e84b126302f65bcc817e0ad02c80ae466d3c2f96ad5d1111cfcdd8"
  )
);

module.exports = {
  mineCall: mineCall,
  chainCall: chainCall,
};
