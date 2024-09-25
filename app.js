const express = require("express");
const { addition } = require("./addition");
const bodyParser = require("body-parser");

const app = express();

app.use("/", (req, res, next) => {
  const add = addition(2, 4);
  res.send("test");
});

app.listen(8080);
