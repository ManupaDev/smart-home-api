"use strict";

import express from "express";
import {
  createLocation,
  deleteLocation,
  getAllLocations,
  getLocation,
} from "../controllers/locationController.js";

//* /api/locations
const locationRouter = express.Router();

//* /api/locations
locationRouter.route("/").get(getAllLocations).post(createLocation);

//* /api/locations/:id
locationRouter.route("/:id").get(getLocation).delete(deleteLocation);

export default locationRouter;
