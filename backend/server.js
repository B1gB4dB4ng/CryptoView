const express = require("express");
require("dotenv").config();
const connectDB = require("./config/db");
const favCoinsRoutes = require("./routes/favCoinsRoutes");
const userRoutes = require("./routes/userRoutes");

//express app

const app = express();

const PORT = process.env.PORT;

//middleware

app.use(express.json());
app.use((req, res, next) => {
  //const { authorization } = req.headers;
  //const token = authorization.split(" ")[1];
  //console.log(token);
  console.log(req.path, req.method);
  next();
});

//routes

app.use("/api/favcoin", favCoinsRoutes);
app.use("/api/user", userRoutes);

//connect to db

connectDB();

//listen for request

app.listen(PORT, () => console.log(`listening on port ${PORT}`));
