const express = require("express");
require("dotenv").config();
const athelteRoutes = require("./routs/athelteRout")
const associationRouts = require('./routs/associationRout')
const userRoutes = require("./routs/userRout");
const eventRoutes=require("./routs/eventRout")
const trainerRoutes=require("./routs/trainerRout")

const connectDB = require("./config/connectDB");
const app = express();
const cors =require("cors") ;




connectDB();
app.use("/uploads",express.static(__dirname+"/uploads"))
app.use(express.json())
app.use(cors())

//routes
app.use('/api/athelets' , athelteRoutes);
app.use('/api/associations',associationRouts);
app.use("/api/users", userRoutes);
app.use("/api/events", eventRoutes);
app.use("/api/trainer", trainerRoutes);



const port = 5000;
app.listen(port, () => console.log(`Server listening on port ${port}!`));
