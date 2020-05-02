const express = require("express")
const helmet = require("helmet")
const projectRouter = require("./projects/projectRouter")
const resourceRouter = require("./resources/resourcesRouter")
const taskRouter = require("./tasks/taskRouter")

const server = express()
const port = process.env.PORT || 4000

server.use(helmet())
server.use(express.json())

server.use("/projects", projectRouter)
server.use("/resources", resourceRouter)
server.use("/tasks", taskRouter)

server.use((err, req, res, next) => {
	console.log(err)
	res.status(500).json({
		message: "Something went wrong. Cannot provide more information.",
	})
})

server.listen(port, () => {
	console.log(`Running at http://localhost:${port}`)
})