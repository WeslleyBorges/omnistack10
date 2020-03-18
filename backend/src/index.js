const express = require('express')
const mongoose = require('mongoose')

const routes = require('./routes')

const app = express()

const connectionOptions = { useNewUrlParser: true, useUnifiedTopology: true }

mongoose.connect('mongodb+srv://weslleygod:super123@cluster0-4ek76.mongodb.net/omnistack10?retryWrites=true&w=majority', connectionOptions)
    .then(() => console.log('MongoDB connected...'))
    .catch(err => console.log(err))

app.use(express.json())
app.use(routes)

const PORT = 8001

app.listen(PORT, () => console.log(`Express is listening on port ${PORT}...`))