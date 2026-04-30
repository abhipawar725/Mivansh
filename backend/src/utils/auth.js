import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken"

export const hashPassword = (password) => {
  return bcrypt.hash(password, 10);
};

export const comparePassword = (password, userPassword) => {
  return bcrypt.compare(password, userPassword);
};

export const generateAccessToken = (payload) => {
  return jwt.sign(payload, process.env.ACCESS_TOKEN, {expiresIn: '1h'})
}

export const generateRefreshToken = (payload) => {
  return jwt.sign(payload, process.env.REFRESH_TOKEN, {expiresIn: '7h'})
}