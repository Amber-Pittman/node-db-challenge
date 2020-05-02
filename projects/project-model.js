const db = require("../data/config")

async function getProject() {
    const projects = await db("projects");
    const isComplete = projects.map(project => ({
        ...project, completed: project.completed ? true : false
    }))

    return isComplete;
}

async function getProjectById(id) {
    const project = await db("projects").where({id}).first()
    const projectTasks = await db("task").where({project_id: id})

    return {
        ...project, 
        completed: project.completed ? true : false,
        tasks: projectTasks.map(task => ({
            ...task, completed: task.completed ? true : false
        }))
    }
}

async function addProject(project) {
    const [id] = await db("projects").insert(project).returning("id")
    return await getProjectById(id)
}

module.exports = {
    getProject,
    getProjectById,
    addProject,
  }