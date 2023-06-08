const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://kagnana:Kagnana10023003@cluster0.p9etdim.mongodb.net/Real-Estate"
  )
  .then(() => {
    console.log("Successfully connect to MongoDB");
    app.listen(3003, () => {
      console.log("app is listening on port 3003");
    });
  })
  .catch((err) => console.log(err));

const db = mongoose.connection;
db.on("error", console.error.bind(console, "Mongo connection error"));

const productRouter = require("./routes/ads");

const app = express();

app.use(bodyParser.json());

app.use("/product", productRouter);
