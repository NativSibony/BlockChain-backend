const controller = require("./utils/controller");
const express = require("express");
const cors = require("cors");
const app = express();

const port = process.env.PORT || 3001;
app.use(cors());

app.get("/block", (req, res) => {
  const blockNum = parseInt(req.query.num) ? parseInt(req.query.num) : 1;
  const blockData = JSON.parse(req.query.data)
    ? JSON.parse(req.query.data)
    : "";
  const ans = controller.blockCall(blockNum, "", blockData, blockNum);

  res.send(JSON.parse(ans));
});

app.get("*", (req, res) => {
  res.render("404");
});

app.listen(port, () => {
  console.log("Server is up on port " + port);
});
