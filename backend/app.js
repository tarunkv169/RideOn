const dotenv = require('dotenv');
dotenv.config();
const express = require('express')
const app = express();
const cors = require('cors');
const cookieParser = require('cookie-parser');

const connectToDB = require('./db/db');
const userRouter = require('./routers/user.router')



app.use(cookieParser())
app.use(express.json())
app.use(cors())
connectToDB()


app.get('/',(req,res)=>{
    res.send('hello world');
})

app.use('/users',userRouter)

module.exports = app;

