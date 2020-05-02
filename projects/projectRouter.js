const express = require("express")
const db = require("../data/config")

const router = express.Router()

router.get("/", async (req, res, next) => {
    try {
        const projects = await db("projects as p")
        
        res.json(200).json(projects)
    }
    catch(err) {
        next(err)
    }
})

module.exports = router