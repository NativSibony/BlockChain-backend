const controller = require("./utils/controller");
const express = require("express");
const cors = require("cors");
const app = express();

const port = process.env.PORT || 3001;
app.use(cors());

app.get("/mine", (req, res) => {
  let blockNum, blockData, prevHash;
  if (!req.query.num) {
    res.send({ badcall: "Error! this call was not sent properly." });
    return;
  }
  if (!req.query.data) blockData = "";
  else blockData = JSON.parse(req.query.data);

  if (!req.query.prev) prevHash = 0;
  else prevHash = parseInt(req.query.prev);

  blockNum = parseInt(req.query.num);
  const result = controller.blockCall(blockNum, blockData, prevHash);

  res.send(JSON.parse(result));
});

app.get("/blockchain", (req, res) => {
  const ans = controller.blockchainCall(blockNum, null, blockNum);

  res.send(JSON.parse(ans));
});

app.get("*", (req, res) => {
  res.render("404");
});

app.listen(port, () => {
  console.log("Server is up on port " + port);
});
