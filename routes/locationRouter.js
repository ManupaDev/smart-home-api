"use strict";

import express from "express";
import {
  createLocation,
  deleteLocation,
  getAllLocations,
  getLocation,
} from "../controllers/locationController.js";
import { protect } from "../controllers/authController.js";



//* /api/locations
const locationRouter = express.Router();

//* /api/locations
locationRouter.route("/").get(getAllLocations).post(protect, createLocation);

//* /api/locations/:id
locationRouter.route("/:id").get(getLocation).delete(protect, deleteLocation);

export default locationRouter;
