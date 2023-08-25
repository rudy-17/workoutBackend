const express = require('express');
const bodyParser =require("body-parser");
const cors=require("cors") //from "cors";
const dotenv=require("dotenv") //import dotenv from "dotenv";
const axios =require("axios")//import axios from "axios";
const connection=require("./config/connection")

const app = express();
const port =  8000;

connection()

dotenv.config();
app.use(cors());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.json());


// Define a route
app.get('/', (req, res) => {
  res.send('Hello, Express!');
});

app.use("/backend",require("./routes/steps"))

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});