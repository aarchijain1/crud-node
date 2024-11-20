
const express = require("express");
const mongoose = require("mongoose");
const Product = require("./models/product.model.js");
const productRoute = require("./routes/product.route.js");
const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));


// routes
app.use("/api/products", productRoute);


app.get("/", (req, res) => {
  res.send("Hello from Node API Server Updated");
});


mongoose.connect("mongodb+srv://aarchijain0409:1q2w3e4r5t@backend.fynog.mongodb.net/Node-API?retryWrites=true&w=majority&appName=Backend")
    .then(() => {
        console.log("connected to database");
        app.listen(3000, () => {
            console.log("port-3000");
        });
    })
    .catch(() => {
        console.log("connection failed");
    })