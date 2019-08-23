const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
mongoose.set('useCreateIndex', true);
const loginRoutes = require('./routes/login')

// Setting up our database

mongoose.connect('mongodb://localhost/demoproject', {useNewUrlParser: true})
.then(()=>{
    console.log('Database connection is good')
})
.catch((err)=>{
    console.log(err.message)
})

const app = express()

app.use(express.static('public'))

app.use(bodyParser.json())





//Our home route

app.use ("/", loginRoutes);




// our server

const Port = process.env.Port || 5000
app.listen( () => console.log(`Server  listening on port! ${Port}`))
