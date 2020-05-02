const express = require("express")
const db = require("../data/config")

const router = express.Router()

router.get("/", async (req, res, next) => {
    try {
        const tasks = await db("tasks as t")
        
        res.json(200).json(tasks)
    }
    catch(err) {
        next(err)
    }
})

module.exports = router