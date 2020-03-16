const mongoose = require('mongoose')

const pointSchema = require('./utils/pointSchema')

const devSchema = new mongoose.Schema({
    name: String,
    githubUsername: String,
    bio: String,
    avatarUrl: String,
    techs: [String],
    location: {
        type: pointSchema,
        index: '2dsphere'
    }
}, {
    versionKey: false
})

module.exports = mongoose.model('dev', devSchema)