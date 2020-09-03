const express = require("express");
const routes = express.Router();
// controllers
const OrderController = require("./controllers/OrderController");
const UserController = require("./controllers/UserController");
// middlewares
const authMiddleware = require("./middlewares/auth");

// create order
routes.post("/orders", authMiddleware, OrderController.create);

// index all orders
routes.get("/orders", OrderController.indexAll);

// create user
routes.post("/users", UserController.create);

// index all users
routes.get("/users", UserController.indexAll);

// user authentication
routes.post("/user-authentication", UserController.userAuthentication);

module.exports = routes;
