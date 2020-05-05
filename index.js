const express = require("express")
const helmet = require("helmet")
const cors = require("cors")
const projectRouter = require("./projects/projectRouter")
const resourceRouter = require("./resources/resourcesRouter")
const taskRouter = require("./tasks/taskRouter")

const server = express()
const port = process.env.PORT || 4000

server.use(helmet())
server.use(cors())
server.use(express.json())

server.use("/api/projects", projectRouter)
server.use("/api/resources", resourceRouter)
server.use("/api/tasks", taskRouter)

server.use((err, req, res, next) => {
	console.log(err)
	res.status(500).json({
		message: "Something went wrong. Cannot provide more information.",
	})
})

server.listen(port, () => {
	console.log(`Running at http://localhost:${port}`)
})

module.exports = server