const express = require("express");
const mongoose = require("mongoose");
const authController = require("./controllers/authController");
const dotenv = require("dotenv").config();
const app = express();
// app.use(cors());
//connect db
mongoose.set("strictQuery", false);
mongoose.connect(process.env.MONGO_URL, () => console.log("Db is connected"));

//middlewares
//  those tow are a must if you use req.body

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.unsubscribe("/auth", authController);
app.use("/auth", authController);
//start server
app.listen(process.env.port, () => console.log("Server has been started"));
