import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import { connectDB } from "./config/db.js"
import router from "./routes/UserRoute.js";

const app =express()
app.use(bodyParser.json())
dotenv.config()
const port = process.env.PORT || 5000
app.use('/api',router)
connectDB()

app.get('/',(req,res)=> {
    res.send('Hello world')
})


app.listen(port,()=>{
    console.log(`Server Started on http://localhost:${port}`)
})



