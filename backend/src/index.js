const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const routes = require('./routes')

const app = express()

const connectionOptions = { useNewUrlParser: true, useUnifiedTopology: true }

mongoose.connect(process.env.MONGODB_ATLAS_URI || 'mongodb+srv://weslleygod:super123@cluster0-4ek76.mongodb.net/omnistack10?retryWrites=true&w=majority', 
                 connectionOptions)
    .then(() => console.log('MongoDB connected...'))
    .catch(err => console.log(err))

app.use(cors())
app.use(express.json())
app.use(routes)

app.listen(process.env.PORT || 5000, () => console.log(`Express is listening on port ${PORT}...`))