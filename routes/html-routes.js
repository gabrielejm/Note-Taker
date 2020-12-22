const router = require("express").Router();
const path = require("path");

router.get("/notes", function (req, res) {
  res.sendFile(path.join(__dirname, "/Develop/public/notes.html"));
});

router.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "/Develop/public/index.html"));
});

module.exports = router;
