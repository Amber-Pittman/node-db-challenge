const express = require("express")
const db = require("./resources-model")

const router = express.Router()

router.get("/", async (req, res, next) => {
    try {
        const resources = await db.getResource()        
        return res.status(200).json(resources)
    } catch(err) {
        next(err)
    }
})

router.post("/", async (req, res, next) => {
    try {
        const createResource = await db.addResource(req.body)
        return res.status(201).json(createResource)
    } catch(err) {
        next(err)
    }
})


module.exports = router