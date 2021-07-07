const express = require("express");
const port = process.env.PORT || 3000;
const controller = require("./utils/controller");
const app = express();

app.get("/hash", (req, res) => {
  let ans = controller.blockCall(1, "20/05/2021", null, 1);

  res.send(ans);
});

app.get("*", (req, res) => {
  res.render("404");
});

app.listen(port, () => {
  console.log("Server is up on port " + port);
});
