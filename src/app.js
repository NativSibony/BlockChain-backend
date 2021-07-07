const express = require("express");
const port = process.env.PORT || 3000;

const app = express();

app.get("/hash", (req, res) => {
  res.render("hash");
});

app.get("*", (req, res) => {
  res.render("404");
});

app.listen(port, () => {
  console.log("Server is up on port " + port);
});
