require('dotenv').config()

const express = require("express")
const app = express()

port = process.env.PORT

app.get("/", (req, res) => {
    res.status(200).json({"message": "All good", "status": 200})
})

app.listen(port, (err) => {
    if (!err) {
        console.log(`Listening on ${port}`)
    }
})

