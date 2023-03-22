require('dotenv').config()

const express = require("express")
const bodyParser = require('body-parser')
const app = express()
const db_functions = require("./db")

const collection_name = process.env.COLLECTION_NAME

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())


port = process.env.PORT


app.get("/users", async (req, res) => {
    let resp = []
    try {
        resp = await db_functions.get_all(await db_functions.connect())
        if (resp.status === 200){
            res.status(200).json({"users": resp.results, "status": 200})
        }
    } catch (error) {
        res.status(500).json({"message": "some error occured", "status": 500})
    }
})

app.post("/users", async (req, res) => {
    try{
        let resp = await db_functions.add_to_DB(await db_functions.connect(),
            {
                "fullName": req.body.fullName,
                "mobile": req.body.mobile,
                "address": req.body.address,
                "email": req.body.email                            
            }
        )
        if (resp.status === 200){
            res.status(200).json({"message" : `document added successfully`})
        }
    } catch(error){
        console.log(error)
        res.status(500).json({"message" : `Some Error Occured`})
    }
})

app.listen(port, async (err) => {
    if (!err) {
        console.log(`Listening on ${port}`)
    }
})

