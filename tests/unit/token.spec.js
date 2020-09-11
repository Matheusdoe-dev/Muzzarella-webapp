const { request } = require("supertest");
const faker = require("faker");
// app
const app = require("../../src/app");
// utils
const factory = require("../utils/factories");
const truncate = require("../utils/truncate");
const generateToken = require("../../src/utils/generateToken");

describe("JWT token authentication generator", () => {
  beforeEach(async () => {
    await truncate();
  });

  it("should generate a JWT token with the user id", async () => {
    const user = await (await factory.create("User")).dataValues;

    const token = generateToken({ id: user.id });

    expect(token).toBeTruthy();
  });
});
