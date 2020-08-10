import Knex from "knex";

export async function up(knex: Knex) {
  return knex.schema.createTableIfNotExists("users", (table) => {
    table.increments("id").primary();
    table.string("name").notNullable(),
      table.string("avatar").notNullable(),
      table.string("whatsapp").notNullable(),
      table.string("bio").notNullable();
  });
}

export async function down(knex: Knex) {
  return knex.schema.dropTableIfExists("users");
}
