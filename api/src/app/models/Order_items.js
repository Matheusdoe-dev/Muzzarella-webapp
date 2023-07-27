module.exports = (sequelize, DataTypes) => {
  const Order_items = sequelize.define("Order_items", {
    item: DataTypes.STRING,
    type: DataTypes.STRING,
    order_id: DataTypes.NUMBER,
  });

  return Order_items;
};
