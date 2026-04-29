import app from "./src/app.js";
import dotenv from "dotenv"
import db from "./src/config/db.js"

dotenv.config()

const port = process.env.PORT

db()
app.listen(5000, () => {console.log("app is started")})