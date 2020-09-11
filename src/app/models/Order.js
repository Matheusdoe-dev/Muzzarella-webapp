module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define("Order", {
    card_number: DataTypes.STRING,
    card_valid: DataTypes.STRING,
    cvv: DataTypes.STRING,
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    adress: DataTypes.STRING,
    city: DataTypes.STRING,
    zip: DataTypes.STRING,
    price: DataTypes.STRING,
  });

  return Order;
};
