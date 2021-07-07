const express = require("express");
const port = process.env.PORT || 3000;

const app = express();

app.get("/hash", (req, res) => {
  // check for basic auth header
  // if (
  //   !req.headers.authorization ||
  //   req.headers.authorization.indexOf("Basic ") === -1
  // ) {
  //   return res.status(401).json({ message: "Missing Authorization Header" });
  // }
  const base64Credentials = req.headers.authorization.split(" ")[1];
  res.send(base64Credentials);
});

app.get("*", (req, res) => {
  res.render("404");
});

app.listen(port, () => {
  console.log("Server is up on port " + port);
});
