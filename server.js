const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.listen(PORT, () => console.log(`running on http://localhost:${PORT}`));

app.get("/notes", (req, res) => {
  res.status(200).send({
    key: "value",
    key2: "value2",
  });
});

app.post("/notes/:id", (req, res) => {
  const { id } = req.params;
  const { logo } = req.body;

  if (!logo) {
    res.status(418).send({ message: "we need a logo" });
  }

  res.send({
    notes: `Tshirt with your ${logo} and ID of ${id}`,
  });
});
