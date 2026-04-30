import express from "express"
import { Login, Register } from "../controllers/authController.js"
import passport from "passport"

const authRouter = express.Router()
authRouter.post("/register", Register)
authRouter.post("/login", Login)

authRouter.get("google", passport.authenticate('google', {scope: ['email', 'password']}))

export default authRouter