const knex = require("knex");

exports.up = (knex) => {
  return knex.schema.createTable("users", (table) => {
    table.increments("id").primary();
    table.string("nome").notNullable();
    table.string("email").notNullable();
    table.string("password").notNullable();
  });
};

exports.down = (knex) => {
  return knex.schema.dropTable("users");
};
