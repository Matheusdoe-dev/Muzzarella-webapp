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
        items,
      } = await req.body;

      const trx = await knex.transaction();

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
      const insertedOrders = await trx("orders").insert(order);

      // getting inserted order id
      const orderId = (
        await trx.select("id").from("orders").where("user_id", order.user_id)
      )[0].id;

      // serializing order items
      const orderItem = items.map((item) => {
        return {
          ...item,
          order_id: orderId,
        };
      });

      // inserting order items on database
      await trx("order_items").insert(orderItem);

      // commit all database changes
      await trx.commit();

      return res.json({ orderId, user: req.userId });
    } catch (error) {
      return res.status(400).json({ error: "Order create error" });
      console.log(error);
    }
  },

  // index all orders functionality
  async indexAll(req, res) {
    try {
      // get all orders from migration
      const orders = await knex("orders").select("*");

      return res.json([...orders]);
    } catch (error) {
      return res.status(400).send({ error: "Index all orders error" });
      console.log(error);
    }
  },
};

module.exports = OrderController;
