import mongoose from "mongoose"

export const db = async() => {
  try {
    mongoose.connect(process.env.MONGO_URL)
    console.log("Database is connected")
  } catch (error) {
    console.log("Database connection is failed")
    console.log(error)
    process.exit(1)
  }
}

export default db;