// Dependencies
const express = require("express");
const fs = require("fs");
const path = require("path");
const http = require("http");
const { v4: uuidv4 } = require("uuid");
const db = require("./db/db.json");

// Sets up the Express App
const app = express();
const PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const notes = [{}];

// Routes

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "public/index.html"));
});

app.get("/notes", function (req, res) {
  res.sendFile(path.join(__dirname, "public/notes.html"));
});

// Shows all notes json format
app.get("/api/notes", function (req, res) {
  return fs.readFile("db/db.json");
});

// Adds new note
app.post("/api/notes", function (req, res) {
  const newNote = req.body;
  uuidv4(newNote);
  notes.push(newNote);
  fs.writeFileSync();
  res.sendFile("db/db.json");
});

// Deletes note
app.delete("/api/notes/:id", function (req, res) {
  res.send("db/db.json");
});

// Listener
app.listen(PORT, function () {
  console.log("App listening on PORT " + PORT);
});
