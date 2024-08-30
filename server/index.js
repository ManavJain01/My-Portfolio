// Importing local files
const userInfo_routes = require('./routes/UserInfo')
const studentDetails_routes = require('./routes/StudentDetails')
const practice_routes = require('./routes/practice')

// Accessing Express and MongoDB Packages
const express = require('express')
const mongoose = require('mongoose')

// Importing env file
require("dotenv").config();

const cors = require('cors')
const app = express()
app.use(cors())
app.use(express.json())

const mongoURI = process.env.MONGODB_URI


// Connecting MongoDB DataBase
mongoose.connect(mongoURI)
.then(()=>console.log("MongoDB Connected."))
.catch(err => console.log("Mongo Error" + err))


// middleware or to set router
app.use("/UsersInfo", userInfo_routes)
app.use("/StudentDetails", studentDetails_routes)
app.use("/practice", practice_routes)


// Starting the server
app.listen(5000, ()=>{
  console.log("Server is running on port 5000.");
})