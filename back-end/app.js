const express = require("express");
const mongoose = require("mongoose");
const {MONGOURI} = require("./keys");
const app = express();
const PORT = 5000;

//Connection to MongoDB
mongoose.connect(MONGOURI);

mongoose.connection.on("connected", ()=>{
  console.log("Connected to MongoDB");
});

mongoose.connection.on("error", (error)=>{
  console.log("Error:" + error);
});


//Routes
app.get('/', (req, res) => {
    res.send('Hello World!')
  });
app.get('/home', (req, res) => {
    res.send('Home!')
  });
app.get('/single', (req, res) => {
    res.send("Category!");
  });
  
  app.listen(PORT, () => {
    console.log("Server started at" + PORT);
  });