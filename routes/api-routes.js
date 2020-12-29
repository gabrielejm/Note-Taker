const router = require("express").Router();
const path = require("path");
const fs = require("fs");
const uuidv1 = require("uuid/v1");

// Shows all notes json format
router.get("/notes", function (req, res) {
  const data = fs.readFile("./db/db.json");
  res.json(data);
});

// Adds new note
router.post("/notes", function (req, res) {
  const title = req.body.title;
  const text = req.body.text;
  const newNote = { title, text, id: uuidv1() };
  notes.push(newNote);
  fs.writeFileSync(notes);
  res.json(newNote);
});

// Deletes note
router.delete("/notes/:id", function (req, res) {
  const data = fs.readFile("./db/db.json");
  const updatedNotes = data.filter((note) => note.id !== req.params.id);
  fs.writeFileSync(Updatednotes);
  res.json({ ok: true });
});

module.exports = router;
