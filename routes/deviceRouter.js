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
import { protect } from "../controllers/authController.js";

//* /api/devices
const deviceRouter = express.Router();

//* /api/devices
deviceRouter.route("/").get(getAllDevices).post(protect, createDevice);

//* /api/devices/:id
deviceRouter
  .route("/:id")
  .get(getDevice)
  .put(protect, fullyUpdateDevice)
  .patch(protect, partiallyUpdateDevice)
  .delete(protect, deleteDevice);

export default deviceRouter;
