const { Order, Order_items, sequelize } = require("../models");

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

      const transaction  = await sequelize.transaction()

      // inserting order data on orders migration
      const insertedOrders = await Order.create(order, { transaction });

      // getting inserted order id
      const orderId = insertedOrders.id;

      // creating order items modals
      await Promise.all(
        items.map( async item => {
          await Order_items.create({
            item: item.item,
            type: item.type,
            order_id: orderId,
          }, { transaction });
        })
      );

      await transaction.commit();

      return res.json({ orderId, user: req.userId });
    } catch (error) {
      console.log(error);
      return res.status(400).json({ error: "Order create error" });
    }
  },

  // index all orders functionality
  async indexAll(req, res) {
    try {
      // get all orders from migration
      const orders = await Order.findAll();

      return res.json([...orders]);
    } catch (error) {
      console.log(error);
      return res.status(400).send({ error: "Index all orders error" });
    }
  },
};

module.exports = OrderController;
