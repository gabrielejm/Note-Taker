const express = require("express");
const fs = require("fs");

const app = express();
const PORT = 3000;

app.listen(PORT, function () {
  console.log("App listening on PORT " + PORT);
});