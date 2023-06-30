const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const swaggerUi = require("swagger-ui-express");
const swaggerJsdoc = require("swagger-jsdoc");
require("dotenv").config();

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("Successfully connect to MongoDB");
    app.listen(process.env.PORT, () => {
      console.log("app is listening on port 3003");
    });
  })
  .catch((err) => console.log(err));

const db = mongoose.connection;
db.on("error", console.error.bind(console, "Mongo connection error"));

const productRouter = require("./routes/ads");
const authRouter = require("./routes/auth");
const userRouter = require("./routes/user")

const options = {
  failOnErrors: true,
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Real Estate API",
      version: "1.0.0",
    },
  },
  apis: ["./routes/*.js"], // files containing annotations as above
};
const swaggerSpec = swaggerJsdoc(options);

const app = express();
app.use(cors());
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use(bodyParser.json());

app.use("/product", productRouter);
app.use("/auth", authRouter);
app.use('/user', userRouter);
