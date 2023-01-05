import express from "express"
import dotenv from "dotenv"
dotenv.config()
import mongoose from "mongoose"

const app = express()

mongoose.connect(process.env.MONGODB_URI).then(() => {
    console.log("DB connected");
}).catch(err => console.log(err))

app.use(express.json())

app.use((err, req, res, next) => {
    const status = err.status || 500
    const message = err.message || "Something went wrong"
    return res.status(status).send({ status, message, success: false })
})

app.listen(8800, () => {

})