"use strict";

import express from "express";
import {
  createDevice,
  deleteDevice,
  fullyUpdateDevice,
  getAllDevices,
  getDevice,
  partiallyUpdateDevice,
} from "../controllers/deviceController.js";

//* /api/devices
const deviceRouter = express.Router();

//* /api/devices
deviceRouter.route("/").get(getAllDevices).post(createDevice);

//* /api/devices/:id
deviceRouter
  .route("/:id")
  .get(getDevice)
  .put(fullyUpdateDevice)
  .patch(partiallyUpdateDevice)
  .delete(deleteDevice);

export default deviceRouter;
