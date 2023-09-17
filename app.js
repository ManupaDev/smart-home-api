"use strict";

import express from "express";
import mongoose from "mongoose";
import deviceRouter from "./routes/deviceRouter.js";

const app = express();
app.use(express.json());

app.use("/api/devices", deviceRouter);

const PORT = 8000;

const DB =
  "mongodb+srv://manupadevsuite:XoltnuKu0IUJOX9a@cluster0.9nlvrm1.mongodb.net/smart-home-ui-db?retryWrites=true&w=majority";
mongoose
  .connect(DB)
  .then(() => {
    console.log("DB connections successful");
  })
  .catch((error) => {
    console.log(error);
  });

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
