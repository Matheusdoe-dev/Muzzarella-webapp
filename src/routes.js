const express = require("express");
const routes = express.Router();
// controllers
const OrderController = require("./controllers/OrderController");
const UserController = require("./controllers/UserController");

// create order
routes.post("/orders", OrderController.create);

// index all orders
routes.get("/orders", OrderController.indexAll);

// create user
routes.post("/users", UserController.create);

// index all users
routes.get("/users", UserController.indexAll);

module.exports = routes;
