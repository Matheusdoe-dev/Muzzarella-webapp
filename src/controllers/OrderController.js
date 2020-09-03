const knex = require("../database/connection");

const OrderController = {
  // create order funcionality
  async create(req, res) {
    try {
      const {
        card_number,
        card_valid,
        cvv,
        first_name,
        last_name,
        adress,
        city,
        zip,
        price,
      } = await req.body;

      // order
      const order = {
        user_id: req.userId,
        card_number,
        card_valid,
        cvv,
        first_name,
        last_name,
        adress,
        city,
        zip,
        price,
      };

      // inserting order data on orders migration
      const insertedOrders = await knex("orders").insert(order);

      // getting inserted order id
      const orderId = insertedOrders[0];

      return res.json({ orderId, user: req.userId });
    } catch (error) {
      console.log(error);
      return res.json({ error });
    }
  },

  // index all orders functionality
  async indexAll(req, res) {
    try {
      // get all orders from migration
      const orders = await knex("orders").select("*");

      return res.json([...orders]);
    } catch (error) {
      console.log(error);
      return res.json({ error });
    }
  },
};

module.exports = OrderController;
