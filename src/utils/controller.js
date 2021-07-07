const { BlockChain, Block } = require("./blockchain");

// let myCoin = new BlockChain();
// myCoin.addBlock(new Block(1, "20/05/2021", { amount: 50 }));
// myCoin.addBlock(new Block(1, "10/01/2011", { amount: 10 }));

// console.log(JSON.stringify(myCoin, null, 4));

const blockCall = (index, timestamp, data) => {
  const block = new Block(index, timestamp, data, index);
  block.mineBlock(4);
  return JSON.stringify(block, null, 4);
};

module.exports.blockCall = blockCall;
