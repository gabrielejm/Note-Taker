// Dependencies
const express = require("express");
const fs = require("fs");
const path = path("path");

// Sets up the Express App
const app = express();
const PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes

app.get("/notes", function (req, res) {
  res.sendFile(path.join(__dirname, "notes.html"));
});

app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});

// Listener
app.listen(PORT, function () {
  console.log("App listening on PORT " + PORT);
});
