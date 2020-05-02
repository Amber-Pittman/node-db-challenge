const express = require("express")
const db = require("../data/config")

const router = express.Router()

router.get("/", async (req, res, next) => {
    try {
        const resources = await db("resources as r")
        
        res.json(200).json(resources)
    }
    catch(err) {
        next(err)
    }
})

module.exports = router