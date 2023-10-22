import ValidationError from "../errors/validation-error.js";
import NotFoundError from "../errors/not-found-error.js";
import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import ForbiddenError from "../errors/forbidden-error.js";
import UnauthorizedError from "../errors/unauthorized-error.js";
import { promisify } from "util";

const JWT_SECRET = "Wkjdh3767sbabfgja8546828731ahjfar52gfhgff635";

const signToken = (userId) => {
  const token = jwt.sign({ userId: userId }, JWT_SECRET);
  return token;
};

export const signUp = async (req, res, next) => {
  try {
    const user = req.body;
    if (user.password !== user.confirmPassword) {
      throw new ValidationError("Password and Confirm Password does not match");
    }
    const encryptedPassword = await bcrypt.hash(user.password, 12);
    const newUser = await User.create({
      name: user.name,
      email: user.email,
      password: encryptedPassword,
    });

    const token = signToken(newUser._id);
    res.status(200).json({ token: token });
  } catch (error) {
    next(error);
  }
};

export const logIn = async (req, res, next) => {
  try {
    const user = req.body;

    const email = user.email;
    const password = user.password;

    if (!email || !password) {
      throw new ValidationError("Please include email and password.");
    }

    const existingUser = await User.findOne({ email: user.email });
    if (!existingUser) {
      throw new NotFoundError("You are not registered. Please sign up first");
    }

    const isPasswordMatches = await bcrypt.compare(
      password,
      existingUser.password
    );

    if (!isPasswordMatches) {
      throw new ForbiddenError("Password is incorrect");
    }

    const token = signToken(existingUser._id);
    res.status(200).json({ token: token });
  } catch (error) {
    next(error);
  }
};

export const protect = async (req, res, next) => {
  try {
    let token;
    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer")
    ) {
      token = req.headers.authorization.split(" ")[1];
      console.log(token);
    }

    if (!token) {
      throw new UnauthorizedError(
        "You are not authenticated to access this service. Please log in"
      );
    }

    const decoded = await promisify(jwt.verify)(token, JWT_SECRET);
    console.log(decoded);

    next();
  } catch (error) {
    next(error);
  }
};
