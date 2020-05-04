exports.seed = async function (knex) {
    await knex("tasks").insert([
        {
            description: "Seeds",
            notes: "Making seeds for tasks",
            completed: false,
            //project_id: 1
        },
        {
            description: "Checking all the seeds",
            notes: null,
            completed: false,
            //project_id: 1
        },

        {
            description: "Test those endpoints",
            notes: "Insomnia is great for this",
            completed: true,
            //project_id: 1
        },

        {
            description: "See the data",
            notes: "Check DB Browser",
            completed: true,
            //project_id: 2,
        },

        {
            description: "Migrate",
            notes: null,
            completed: true,
            //project_id: 3
        },
        { 
            description: 'Take a 5 minute break', 
            notes: "My neck hurts", 
            completed: true, 
            //project_id: 4
        },
    ])
}