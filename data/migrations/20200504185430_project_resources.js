
exports.up = async function(knex) {
  await knex.schema.createTable("project_resources", (table) => {
        table
            .integer("project_id")
            .unsigned()
            .notNullable()
            .references("id")
            .inTable("projects")
            .onDelete("CASCADE")
            .onUpdate("CASCADE")
        table 
            .integer("resources_id")
            .unsigned()
            .notNullable()
            .references("id")
            .inTable("resources")
            .onDelete("CASCADE")
            .onUpdate("CASCADE")
        table.primary(["project_id", "resources_id"])
  })
};

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists("project_resources")
};
