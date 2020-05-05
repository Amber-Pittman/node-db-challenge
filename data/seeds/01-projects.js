exports.seed = async function (knex) {
    await knex("projects").insert([
        {
            name: "Project 1",
            description: "Understand foreign keys",
            completed: true,
        },
        {
            name: "Project 2",
            description: "Eat some dinner",
            completed: false,
        },
        {
            name: "Project 3",
            description: "Double Check HTTP codes",
            completed: false,
        },
        {
            name: "Project 4",
            description: "Steal the moon",
            completed: true,
        }
    ])
}