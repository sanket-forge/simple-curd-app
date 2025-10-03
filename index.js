const express = require('express')
const mongoose = require('mongoose')
const app = express()

app.listen(3000, () => {

    console.log("Server is rinning on port 3000")
})

app.get('/', (req, res) => {

    res.send("Hello from node api")
})

mongoose.connect('mongodb+srv://sanket_khatua:sanket@7064@backenddb.ysall21.mongodb.net/?retryWrites=true&w=majority&appName=backendDB')
  .then(() => console.log('Connected!'))
  .catch(() => console.log('Connection failed!'))