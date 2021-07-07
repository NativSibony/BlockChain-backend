const controller = require("./utils/controller");
const express = require("express");
const cors = require("cors");
const app = express();

const port = process.env.PORT || 3000;
app.use(cors());

app.get("/block", (req, res) => {
  let ans = controller.blockCall(1, "01/01/1970", {}, 1);

  res.send(JSON.parse(ans));
});

app.get("*", (req, res) => {
  res.render("404");
});

app.listen(port, () => {
  console.log("Server is up on port " + port);
});
