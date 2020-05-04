const express = require("express")
const db = require("./project-model")

const router = express.Router()

router.get("/", async (req, res, next) => {
    try {
        const projects = await db.getProject()
        res.json(200).json(projects)
    }
    catch(err) {
        next(err)
    }
})

router.get("/:id", async (req, res, next) => {
    try {
        const project = await db.getProjectById(req.params.id)
        return res.status(200).json(project)
    } catch(err) {
        next(err)
    }
})

router.post("/", async (req, res, next) => {
    try {
        const newProject = await db.addProject(req.body)
        return res.status(201).json(newProject)
    } catch(err) {
        next(err)
    }
})

module.exports = router