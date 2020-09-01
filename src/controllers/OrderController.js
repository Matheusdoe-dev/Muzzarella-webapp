const knex = require("../database/connection");

const OrderController = {
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

      const order = {
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

      const insertedOrders = await knex("orders").insert(order);

      const orderId = insertedOrders[0];

      return res.json({ orderId });
    } catch (error) {
      console.log(error);
      return res.json({ error });
    }
  },
};

module.exports = OrderController;
