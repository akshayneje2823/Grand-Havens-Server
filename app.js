import express from "express";
import dotenv from 'dotenv';
import cors from 'cors';
import ErrorHandler from "./middlewares/errorHandler.js";
import userRouter from "./routes/userRouter.js";


// middleware
const app = express();
dotenv.config();
app.use(cors())
app.use(express.json())


const PORT = process.env.PORT || 8800;
const MONGO_URL = process.env.MONGO_URL


// api routes
app.use('/api/user',userRouter)
app.use('/api',(req,res) => {
    res.send(`<h1>Server is runnig on port ${PORT}</h1>`)
})

// error Handler should pe last piece of middleware
app.use(ErrorHandler)



app.listen(PORT, (res, err) => {
    if (err) throw err
    console.log("server is running on port ", PORT)
})