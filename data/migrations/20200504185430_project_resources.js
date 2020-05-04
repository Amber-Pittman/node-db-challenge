
exports.up = async function(knex) {
  await knex.schema.createTable("project_resources", (table) => {
        table
            .integer("project_id")
            .references("id")
            .inTable("projects")
            .onDelete("CASCADE")
        table 
            .integer("resource_id")
            .references("id")
            .inTable("resources")
            .onDelete("CASCADE")
            .onUpdate("CASCADE")
        table.primary(["project_id", "resource_id"])
  })
};

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists("project_resources")
};
