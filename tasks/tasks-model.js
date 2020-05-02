const db = require("../data/config")

function getTask() {
    return db("task")
}

function addTask(task) {
    return db("task").insert(task)
}

function deleteTask(id) {
    return db("task").where({id}).del()
}

module.exports = {
    getTask,
    addTask,
    deleteTask,
}