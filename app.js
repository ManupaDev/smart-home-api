"use strict";

import express from "express";

const app = express();
app.use(express.json());

const devices = [];

app.get("/devices", (req, res) => {
  return res.status(200).json(devices);
});

app.get("/devices/:id", (req, res) => {
  try {
    const { id } = req.params;
    console.log(val);
    const device = devices.find((el) => el.id === parseInt(id));
    console.log(device);
    if (!device) {
      return res.status(404).send();
    }
    return res.status(200).send(device);
  } catch (error) {
    console.log(error);
    res.status(500).send();
  }
});

app.post("/devices", (req, res) => {
  const device = req.body;
  devices.push(device);
  return res.status(201).send();
});

const PORT = 8000;

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
