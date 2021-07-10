const SHA256 = require("crypto-js/sha256");

class Block {
  constructor(index, data, previousHash) {
    this.index = index;
    this.previousHash = previousHash;
    this.data = data;
    this.hash = this.calculateHash();
    this.nonce = 0;
  }

  calculateHash() {
    // console.log(
    //   typeof this.index,
    //   typeof this.nonce,
    //   typeof JSON.stringify(this.data)
    // );
    return SHA256(
      this.index + this.previousHash + this.nonce + JSON.stringify(this.data)
    ).toString();
  }

  mineBlock(difficulty) {
    while (
      this.hash.substring(0, difficulty) !== Array(difficulty + 1).join("0")
    ) {
      this.nonce++;
      this.hash = this.calculateHash();
    }
    // console.log("BLOCK MINED: " + this.hash);
  }
}

class BlockChain {
  constructor() {
    this.chain = [this.createGenesisBlock()];
    this.difficulty = 4;
  }

  createGenesisBlock() {
    const myBlock = new Block(0, "01/01/2008", "Genesis Block", "0");
    myBlock.mineBlock(4);
    return myBlock;
  }

  getLatestBlock() {
    return this.chain[this.chain.length - 1];
  }

  addBlock(newBlock) {
    newBlock.previousHash = this.getLatestBlock().hash;
    newBlock.mineBlock(this.difficulty);
    this.chain.push(newBlock);
  }
}

module.exports.BlockChain = BlockChain;
module.exports.Block = Block;
