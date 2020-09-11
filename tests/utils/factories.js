const faker = require("faker");
const { factory } = require("factory-girl");
// models
const { User, Order } = require("../../src/app/models");

factory.define("User", User, {
  nome: faker.name.findName(),
  email: faker.internet.email(),
  password: "12345678",
});

factory.define("Order", Order, {
  card_number: faker.finance.creditCardNumber,
  card_valid: "12/24",
  cvv: faker.finance.creditCardCVV,
  first_name: faker.name.firstName(),
  last_name: faker.name.lastName(),
  adress: faker.address.streetAddress(),
  city: faker.address.city(),
  zip: faker.address.zipCode,
  price: faker.commerce.price(),
  items: [{ item: "Pepperoni", type: "Premade" }],
});

module.exports = factory;
