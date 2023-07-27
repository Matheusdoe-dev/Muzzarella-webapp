const request = require("supertest");
const faker = require("faker");
// app
const app = require("../../src/app");
// utils
const truncate = require("../utils/truncate");
const factory = require("../utils/factories");

describe("Order create", () => {
  // truncating tables before each test
  beforeEach(async () => {
    await truncate();
  });

  it("should create a order with valid credentials", async () => {
    const user = await request(app).post("/users").send({
      nome: faker.name.findName(),
      email: faker.internet.email(),
      password: "12345678",
    });

    const response = await request(app)
      .post("/orders")
      .set("Authorization", `Bearer ${user.body.token}`)
      .send({
        card_number: faker.finance.creditCardNumber(),
        card_valid: "12/24",
        cvv: faker.finance.creditCardCVV(),
        first_name: faker.name.firstName(),
        last_name: faker.name.lastName(),
        adress: faker.address.streetAddress(),
        city: faker.address.city(),
        zip: faker.address.zipCode(),
        price: faker.commerce.price(),
        items: [{ item: "Pepperoni", type: "Premade" }],
      });

    expect(response.status).toBe(200);
  });

  it("should do not create a order without authorization token", async () => {
    const response = await request(app)
      .post("/orders")
      .send({
        card_number: faker.finance.creditCardNumber(),
        card_valid: "12/24",
        cvv: faker.finance.creditCardCVV(),
        first_name: faker.name.firstName(),
        last_name: faker.name.lastName(),
        adress: faker.address.streetAddress(),
        city: faker.address.city(),
        zip: faker.address.zipCode,
        price: faker.commerce.price(),
        items: [{ item: "Pepperoni", type: "Premade" }],
      });

    expect(response.status).toBe(401);
  });

  it("should do not create a order with a token malformated", async () => {
    const response = await request(app)
      .post("/orders")
      .set("Authorization", `Bearer`)
      .send({
        card_number: faker.finance.creditCardNumber(),
        card_valid: "12/24",
        cvv: faker.finance.creditCardCVV(),
        first_name: faker.name.firstName(),
        last_name: faker.name.lastName(),
        adress: faker.address.streetAddress(),
        city: faker.address.city(),
        zip: faker.address.zipCode,
        price: faker.commerce.price(),
        items: [{ item: "Pepperoni", type: "Premade" }],
      });

    expect(response.status).toBe(401);
  });
});
