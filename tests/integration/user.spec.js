const request = require("supertest");
const faker = require("faker");
// app
const app = require("../../src/app");
// utils
const truncate = require("../utils/truncate");

describe("User create", () => {
  // truncating tables before each test
  beforeEach(async () => {
    await truncate();
  });

  it("should create a new user and receive a new JWT token and user id with valid credentials", async () => {
    const response = await request(app).post("/users").send({
      nome: faker.name.findName(),
      email: faker.internet.email(),
      password: "12345678",
    });

    expect(response.body).toHaveProperty("token");
  });

  it("should return a error for a invalid password", async () => {
    const response = await request(app).post("/users").send({
      nome: faker.name.findName(),
      email: faker.internet.email(),
      password: "1234",
    });

    expect(response.status).toBe(400);
  });
});

describe("User authentication", () => {
  // truncating tables before each test
  beforeEach(async () => {
    await truncate();
  });

  it("should receive a new JWT token with valid credentials", async () => {
    const user = await request(app).post("/users").send({
      nome: faker.name.findName(),
      email: faker.internet.email(),
      password: "12345678",
    });

    const response = await request(app).post("/user-authentication").send({
      email: user.body.dataValues.email,
      password: "12345678",
    });

    expect(response.status).toBe(200);
  }, 10000);

  it("should be return a error for a invalid email", async () => {
    await request(app).post("/users").send({
      nome: faker.name.findName(),
      email: faker.internet.email(),
      password: "12345678",
    });

    const response = await request(app).post("/user-authentication").send({
      email: "",
      password: "12345678",
    });

    expect(response.status).toBe(400);
  });

  it("should be return a error for a invalid password", async () => {
    const user = await request(app).post("/users").send({
      nome: faker.name.findName(),
      email: faker.internet.email(),
      password: "12345678",
    });

    const response = await request(app).post("/user-authentication").send({
      email: user.body.dataValues.email,
      password: "1234567890",
    });

    expect(response.status).toBe(400);
  });
});

describe("User index all", () => {
  // truncating tables before each test
  beforeEach(async () => {
    await truncate();
  });

  it("should index all users", async () => {
    const response = await request(app).get("/users");

    expect(response.status).toBe(200);
  });
});
