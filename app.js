"use strict";

import express from "express";
import deviceRouter from "./routes/deviceRouter.js";

const app = express();
app.use(express.json());

app.use("/api/devices", deviceRouter);

const PORT = 8000;

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
