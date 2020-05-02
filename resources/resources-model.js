const db = require("../data/config")

// This gets the resource
function getResource() {
    return db(getResource)
}

// Add the resource
function addResource(resource) {
    return db("resource").insert(resource)
}

// Destroy resource
function deleteResource(id) {
    return db("resource").where({id}).del()
}


module.exports = {
    getResource,
    addResource,
    deleteResource,
}