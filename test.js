const express = require("express");

const app = express();

app.listen(3000, () => {
  console.log("running");
});

app.get("/ping", function (req, res, next) {
  res.status(200).json({ message: "pong" });
});
