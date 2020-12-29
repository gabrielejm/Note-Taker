const router = require("express").Router();
const path = require("path");
const fs = require("fs");
const uuidv1 = require("uuid/v1");

// Shows all notes json format
router.get("/notes", function (req, res) {
  const data = fs.readFileSync("./db/db.json", "utf8");
  console.log(data);
  res.json(JSON.parse(data));
});

// Adds new note
router.post("/notes", function (req, res) {
  const title = req.body.title;
  const text = req.body.text;
  const newNote = { title, text, id: uuidv1() };
  const notes = JSON.parse(fs.readFileSync("./db/db.json", "utf8"));
  notes.push(newNote);
  fs.writeFileSync("./db/db.json", JSON.stringify(notes));
  res.json(newNote);
});

// Deletes note
router.delete("/notes/:id", function (req, res) {
  const data = JSON.parse(fs.readFileSync("./db/db.json", "utf8"));
  const updatedNotes = data.filter((note) => note.id !== req.params.id);
  fs.writeFileSync("./db/db.json", JSON.stringify(updatedNotes));
  res.json({ ok: true });
});

module.exports = router;
