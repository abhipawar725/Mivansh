import { User } from "../models/userModel.js";
import { registerValidate, loginValidate } from "../validations/userValidation.js";
import { hashPassword, comparePassword } from "../utils/auth.js";
import { generateAccessToken, generateRefreshToken } from "../utils/auth.js";

export const Register = async (req, res) => {
  try {
    const { error } = registerValidate.validate(req.body);
    if(error) return res.status(400).json({ message: error.message });

    const { name, email, password } = req.body;
    const existingUser = await User.findOne({ email });
    if (existingUser) return res.status(400).json({ message: "User already exits" });

    const hash = await hashPassword(password);

    const user = await User.create({ name, email, password: hash });
    res.status(201).json({ message: "Registered successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went wrong" });
  }
};

export const Login = async (req, res) => {
  try {
    const { error } = loginValidate.validate(req.body);
    if(error) return res.status(400).json({ message: error.message });

    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ message: "User not found" });

    const isMatched = await comparePassword(password, user.password);
    if (!isMatched) return res.status(404).json({ message: "invalid password or email" });

    const accessToken = generateAccessToken({ id: user._id });
    const refreshToken = generateRefreshToken({ id: user._id });

    res.cookie("accessToken", accessToken, {
      httpOnly: true,
      secure: false,
    });

    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      secure: false,
    });

    res.status(200).json({message: "Login successfully"})
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: "Something went wrong" });
  }
};

export const Logout = async (req, res) => {
  try {
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: "Something went wrong" });
  }
};

export const Me = async (req, res) => {
  try {
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: "Something went wrong" });
  }
};

export const RefreshToken = async (req, res) => {
  try {
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: "Something went wrong" });
  }
};

export const ForgotPassword = async (req, res) => {
  try {
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: "Something went wrong" });
  }
};

export const ResetPassword = async (req, res) => {
  try {
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: "Something went wrong" });
  }
};
