const express = require("express");
const path = require("path");
const fs = require("fs");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

app.get("/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "/public/notes.html"));
});

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "/public/index.html"));
});

app.get("/api/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "/db/db.json"));
});

app.post("/api/notes", (req, res) => {
  let noteReq = req.body;
  let notes = JSON.parse(fs.readFileSync("./db/db.json", "utf8"));
  let noteId = notes.length++;
  const newNote = {
    id: noteId,
    title: noteReq.title,
    text: noteReq.text,
    c,
  };

  notes.push(newNote);

  fs.writeFileSync("./db/db.json", JSON.stringify(notes));
  res.json(noteList);
});

app.listen(PORT, () => console.log(`Listening on ${PORT}`));
