const SHA256 = require("crypto-js/sha256");

class Block {
  constructor(index, data, previousHash = "") {
    this.index = index;
    this.previousHash = previousHash;
    this.data = data;
    this.hash = this.calculateHash();
    this.nonce = 0;
  }

  calculateHash() {
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
  }
}

class BlockChain {
  constructor(data = "") {
    data === ""
      ? (this.chain = [this.createGenesisBlock()])
      : (this.chain = [this.createGenesisBlockWithData(data)]);
    this.difficulty = 4;
  }

  createGenesisBlock() {
    const myBlock = new Block(1, "", "0");
    myBlock.mineBlock(4);
    return myBlock;
  }

  createGenesisBlockWithData(data) {
    const myBlock = new Block(1, data, "0");
    myBlock.mineBlock(4);
    return myBlock;
  }

  getLatestBlock() {
    return this.chain[this.chain.length - 1];
  }

  getBlockAtIndex(index) {
    return this.chain[index];
  }

  addBlock(newBlock) {
    newBlock.previousHash = this.getLatestBlock().hash;
    newBlock.mineBlock(this.difficulty);
    this.chain.push(newBlock);
  }
}

module.exports.BlockChain = BlockChain;
module.exports.Block = Block;
