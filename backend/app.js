const express = require('express');
const app = express()
const port = 5000;
const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://gautamkachhadiya:wqaNdRKUaVklJ74Q@cluster0.mjras.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");

app.listen(port, () => {
    console.log("server is running on port" + " " + port)
})