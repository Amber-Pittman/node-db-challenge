const express = require("express")
const db = require("./tasks-model")

const router = express.Router()

router.get("/", async (req, res, next) => {
    try {
        const tasks = await db.getTask()
        const isComplete = tasks.map(task => 
            task.completed ? { 
                ...task, completed: true 
            } : { 
                ...task, completed: false 
            })        
        res.json(200).json(isComplete)
    } catch(err) {
        next(err)
    }
})

router.post("/", async (req, res, next) => {
    try {
        const newTask = await db.addTask(req.body)
        return res.status(201).json(newTask)
    } catch(err) {
        next(err)
    }
})


module.exports = router