const db = require("../data/config")

// This gets the resource
function getResource() {
    return db("resources")
}

// Add the resource
function addResource(resource) {
    return db("resources").insert(resource)
}

// Destroy resource
function deleteResource(id) {
    return db("resources").where({id}).del()
}


module.exports = {
    getResource,
    addResource,
    deleteResource,
}