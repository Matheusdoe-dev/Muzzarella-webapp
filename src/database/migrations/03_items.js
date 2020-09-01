const knex = require("knex");

exports.up = (knex) => {
  return knex.schema.createTable("items", (table) => {
    table.increments("item_id").primary();
    table.string("name").notNullable();
    table.string("type").notNullable();
  });
};

exports.down = (knex) => {
  return knex.schema.dropTable("items");
};
