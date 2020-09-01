const knex = require("knex");

exports.up = (knex) => {
  return knex.schema.createTable("orders", (table) => {
    table.increments("order_id").primary();

    // table
    //   .integer("order_user_id")
    //   .notNullable()
    //   .references("user_id")
    //   .inTable("users")
    //   .onUpdate("CASCADE")
    //   .onDelete("CASCADE");

    table.string("first_name").notNullable();
    table.string("last_name").notNullable();
    table.string("card_number").notNullable();
    table.string("card_valid").notNullable();
    table.string("cvv").notNullable();
    table.string("adress").notNullable();
    table.string("city").notNullable();
    table.string("zip").notNullable();
    table.string("price").notNullable();
  });
};

exports.down = (knex) => {
  return knex.schema.dropTable("orders");
};
