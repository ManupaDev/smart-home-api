"use strict";

import express from "express";

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/", (req, res) => {
  res.send("Hello World!");
});

const PORT = 8000;

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
