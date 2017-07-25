const path = require("path")
const users = require("./../controllers/users.js") 
const buckets = require("./../controllers/buckets.js")
module.exports = (app) =>{

    app.post("/login", users.login)
    app.get("/logout", users.logout)
    app.post('/createBucket', buckets.addBucket)
    app.get('/get_logged_in_user', users.currentUser)
    app.get('/list_allUsers', users.allUsers)
    app.get('/getCurrentBuckets', buckets.currentUserList)
    app.get("*", (req,res) =>{
        res.sendFile(path.resolve("./client/dist/index.html"))
    })
}