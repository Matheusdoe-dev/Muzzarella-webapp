const knex = require("knex");

exports.up = (knex) => {
  return knex.schema.createTable("order_items", (table) => {
    table.increments("id").primary();

    table.string("item").notNullable();
    table.string("type").notNullable();

    table
      .integer("order_id")
      .notNullable()
      .references("id")
      .inTable("orders")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
  });
};

exports.down = (knex) => {
  return knex.schema.dropTable("order_items");
};
