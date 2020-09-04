const express = require("express");
const routes = express.Router();
// controllers
const OrderController = require("./controllers/OrderController");
const UserController = require("./controllers/UserController");
// middlewares
const authMiddleware = require("./middlewares/auth");
const { celebrate, Segments, Joi } = require("celebrate");

// create order
routes.post(
  "/orders",
  authMiddleware,
  celebrate({
    [Segments.BODY]: Joi.object().keys({
      card_number: Joi.string().required(),
      card_valid: Joi.string().length(5).required(),
      cvv: Joi.string().length(3).required(),
      first_name: Joi.string().required(),
      last_name: Joi.string().required(),
      adress: Joi.string().required(),
      city: Joi.string().required(),
      zip: Joi.string().required(),
      price: Joi.string().required(),
      items: Joi.array().items(
        Joi.object().keys({
          item: Joi.string().required(),
          type: Joi.string().required(),
        })
      ),
    }),
  }),
  OrderController.create
);

// index all orders
routes.get("/orders", OrderController.indexAll);

// create user
routes.post(
  "/users",
  celebrate({
    [Segments.BODY]: Joi.object().keys({
      nome: Joi.string().required(),
      email: Joi.string().email().required(),
      password: Joi.string().required(),
    }),
  }),
  UserController.create
);

// index all users
routes.get("/users", UserController.indexAll);

// user authentication
routes.post(
  "/user-authentication",
  celebrate({
    [Segments.BODY]: Joi.object().keys({
      email: Joi.string().email().required(),
      password: Joi.string().required(),
    }),
  }),
  UserController.userAuthentication
);

module.exports = routes;
