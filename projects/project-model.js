const db = require("../data/config")

async function getProject() {
    const projects = await db("projects");
    const isComplete = projects.map(project => ({
        ...project, completed: project.completed ? true : false
    }))

    return isComplete;
}

module.exports = {
    getProject,
  }