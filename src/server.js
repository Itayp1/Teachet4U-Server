const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send({ name: "John Doe" });
});

module.exports = app;
