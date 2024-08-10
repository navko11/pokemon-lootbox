

const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const UserModel = require('./models/user')

const app =express()
app.use(express.json())
app.use(cors())

mongoose.connect("mongodb://localhost:27017/user")

app.post("/login", (request, response, next) => {
    const {username, password} =request.body;
    UserModel.findOne({username: username})
    .then(user => {
        if(user) {
            if(user.password === password) {
                response.json("Success")
            } else {
                response.json("Incorrect password")
            }
        } else {
            response.json("User does not exist")
        }
    })
})

app.post('/register', (request, response, next) => {
    UserModel.create(request.body)
    .then(users => response.json(users))
    .catch(error => response.json(error))
})

app.listen(3001, () => {
    console.log("Server is running")
})