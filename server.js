////////////////////////////////////////
// Import dependencies and JSON files
////////////////////////////////////////
const express = require("express")
const cors = require("cors")
const projects = require("./projects.json")
const about = require("./about.json")


////////////////////
// App object
////////////////////
const app = express()


////////////////////
// Middleware
////////////////////
app.use(cors())


////////////////////
// Routes
////////////////////
// home route to test app 
app.get("/", (req, res) => {
    res.send("Hello world")
})

// projects route to retrieve projects
app.get("/projects", (req, res) => {
    res.json(projects)
})

// about route to receive about info
app.get("/about", (req, res) => {
    res.json(about)
})

////////////////////
// Listener
////////////////////
//declare a variable for our port number
const PORT = process.env.PORT || 4000;

// turn on the server listener
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));