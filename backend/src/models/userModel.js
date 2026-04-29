import { model, Schema } from "mongoose";

export const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ["user", "admin"],
    default: "user",
    required: true,
  },
  provider: {
    type: String,
    default: "local",
    required: true,
  },
}, {timestamps: true});

export const User = model("User", userSchema)


