
exports.up = async function(knex) {
  await knex.schema.createTable("projects", (table) => {
      table.increments("id")
      table.string("name", 128).notNullable()
      table.string("description", 128)
      table.boolean("completed").defaultTo(false)
  })

  await knex.schema.createTable("tasks", (table) => {
      table.increments("id")
      table.string("description", 128).notNullable()
      table.string("notes")
      table.boolean("completed").defaultTo(false)
      table
        .integer("project_id")
        .unsigned()
        .notNull()
        .references("id")
        .inTable("projects")
        .onDelete("CASCADE")
        .onUpdate("CASCADE")
  })

  await knex.schema.createTable("resources", (table) => {
      table.increments("id")
      table.string("name", 128).notNullable().unique()
      table.string("description", 128)
  })
};

exports.down = async function(knex) {
    await knex.schema.dropTableIfExists("resources")
    await knex.schema.dropTableIfExists("tasks")
    await knex.schema.dropTableIfExists("projects")
};
