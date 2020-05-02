exports.seed = async function (knex) {
    await knex("resource").truncate()
    await knex("task").truncate()
    await knex("projects").truncate()
}