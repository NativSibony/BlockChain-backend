const { BlockChain, Block } = require("./blockchain");

let nativCoin = new BlockChain();

nativCoin.addBlock(new Block(1, "20/02/2021", { amount: 10 }));
nativCoin.addBlock(new Block(1, "20/05/2021", { amount: 50 }));

console.log(JSON.stringify(nativCoin, null, 4));


