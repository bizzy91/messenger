const express = require("express")
const cors = require("cors")
const { application } = require("express")

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors())

const port = 5501

app.get("/", (req, res) => {
    res.send("Messenger A is running.")
})

app.post("/createChatRoom", (req, res) => {
    const userID = req.body["userID"]
    const inviteIDs = req.body["inviteIDs"]

    
})

app.post("/send", (req, res) => {
    const userID = req.body["userID"]
    const message = req.body["message"]

})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})