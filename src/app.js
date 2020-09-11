// environments databases
require("dotenv").config({
  path:
    process.env.NODE_ENV === "test"
      ? ".env.test"
      : process.env.NODE_ENV === "dev"
      ? ".env.dev"
      : ".env",
});

const express = require("express");
const cors = require("cors");
const { errors } = require("celebrate");
// routes
const routes = require("./routes");

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use(errors());

module.exports = app;
