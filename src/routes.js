const express = require("express");
const routes = express.Router();
// controllers
const OrderController = require("./controllers/OrderController");

routes.post("/orders", OrderController.create);

module.exports = routes;
