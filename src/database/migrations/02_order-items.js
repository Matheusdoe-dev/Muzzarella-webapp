const knex = require("knex");

exports.up = (knex) => {
  return knex.schema.createTable("order_items", (table) => {
    table.increments("id").primary();

    table
      .integer("order_id")
      .notNullable()
      .references("order_id")
      .inTable("orders");

    table
      .integer("item_id")
      .notNullable()
      .references("item_id")
      .inTable("items");
  });
};

exports.down = (knex) => {
  return knex.schema.dropTable("order_items");
};
