const db = require("../data/config")

function getTask() {
    return db("tasks")
}

function addTask(task) {
    return db("tasks").insert(task)
}

function deleteTask(id) {
    return db("tasks").where({id}).del()
}

module.exports = {
    getTask,
    addTask,
    deleteTask,
}