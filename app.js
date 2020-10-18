const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const cors = require("cors");
require("dotenv").config();

const userRoute = require("./api/routes/user");
const productRoute = require("./api/routes/product");
const sizeRoute = require("./api/routes/size");
const categoryRoute = require("./api/routes/category");

mongoose
    .connect(process.env.MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true,
    })
    .then(async(result) => {
        console.log("Connected to DB");
    })
    .catch((error) => {
        console.log(error);
    });
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(
    session({
        secret: process.env.SESSION_SECRET,
        resave: false,
        saveUninitialized: true,
        cookie: {
            maxAge: 3600000,
            httpOnly: true,
        },
    })
);
var corsOptions = {
    origin: "http://localhost:4200",
    optionsSuccessStatus: 200,
};
app.use(cors(corsOptions));

// Routes which should handle requests
app.use("/user", userRoute);
app.use("/product", productRoute);
app.use("/size", sizeRoute);
app.use("/category", categoryRoute);

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message,
        },
    });
});

module.exports = app;