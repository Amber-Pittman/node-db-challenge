exports.seed = async function (knex) {

await knex("resources").insert([
        {
            name: "Paint", 
            description: "Home Improvement"
        },
        {
            name: "Covid 19 Masks", 
            description: "Sewing"
        },
        {
            name: "Grokking Algos", 
            description: "CS Improvement"
        },
    ])
}