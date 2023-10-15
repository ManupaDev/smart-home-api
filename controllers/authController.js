import ValidationError from "../errors/validation-error.js";
import NotFoundError from "../errors/not-found-error.js";
import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

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

    const existingUser = await User.findOne({ email: user.email });
    if (!existingUser) {
      throw new NotFoundError("You are not registered. Please sign up first");
    }

    const token = signToken(existingUser._id);
    res.status(200).json({ token: token });
  } catch (error) {
    next(error);
  }
};
