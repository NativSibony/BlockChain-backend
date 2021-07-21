const { chainCall, mineCall, tokensCall } = require("./utils/controller");
const express = require("express");
const cors = require("cors");
const app = express();
const tokens = require("../static/tokens.json");
const coinbase = require("../static/coinbase.json");

const port = process.env.PORT || 3001;
app.use(cors());

app.get("/mine", (req, res) => {
  let blockNum, blockData, prevHash;
  if (!req.query.num) {
    res.send({ badcall: "Error! this call was not sent properly." });
    return;
  }
  if (!req.query.data) blockData = "";
  else blockData = String(req.query.data);

  if (!req.query.prev) prevHash = "0";
  else prevHash = String(req.query.prev);

  blockNum = parseInt(req.query.num);
  const result = mineCall(blockNum, blockData, prevHash);

  res.send(JSON.parse(result));
});

app.get("/chain", (req, res) => {
  const result = chainCall(2, "");
  res.send(JSON.parse(result));
});

app.get("/tokens", (req, res) => {
  const result = tokensCall(2, tokens);
  res.send(JSON.parse(result));
});

app.get("/coinbase", (req, res) => {
  const result = tokensCall(2, coinbase);
  res.send(JSON.parse(result));
});

app.get("/mineToken", (req, res) => {
  let blockNum, blockData, prevHash;
  if (!req.query.num) {
    res.send({ badcall: "Error! this call was not sent properly." });
    return;
  }
  if (!req.query.data) blockData = "";
  else blockData = JSON.parse(req.query.data);

  if (!req.query.prev) prevHash = "0";
  else prevHash = String(req.query.prev);

  blockNum = parseInt(req.query.num);
  const result = mineCall(blockNum, blockData, prevHash);

  // console.log(result);
  res.send(JSON.parse(result));
});

app.get("*", (req, res) => {
  res.render("404");
});

app.listen(port, () => {
  console.log("Server is up on port " + port);
});
