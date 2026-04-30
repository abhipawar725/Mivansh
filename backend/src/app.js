import express from "express"
import dotenv from "dotenv"
import cookieParser from "cookie-parser"
import cors from "cors"
import authRouter from "./routers/authRouter.js"

dotenv.config()

const app = express()

app.use(express.json())
app.use(express.urlencoded(true))
app.use(cookieParser())
app.use(cors({origin: "", credentials: true}))

app.use("/api/auth", authRouter)
app.get("/login", (req, res) => {
    res.send('<a href="/google">login with google</a>')
})

export default app;
