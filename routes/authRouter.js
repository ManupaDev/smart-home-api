import express from "express";

import { logIn, signUp } from "../controllers/authController.js";

const authRouter = express.Router();

authRouter.route("/signup").post(signUp);
authRouter.route("/login").post(logIn);

export default authRouter;
