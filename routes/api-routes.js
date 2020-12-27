const router = require("express").Router();
const path = require("path");
const fs = require("fs");

// Shows all notes json format
router.get("/notes", function (req, res) {
  return fs.readFile("./db/db.json");
});

// Adds new note
router.post("/notes", function (req, res) {
  const newNote = req.body;
  uuidv4(newNote);
  notes.push(newNote);
  fs.writeFileSync();
  res.sendFile("./db/db.json");
});

// Deletes note
router.delete("/notes/:id", function (req, res) {
  res.send("./db/db.json");
});

module.exports = router;
