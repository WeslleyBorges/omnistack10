const axios = require('axios')

const dev = require('../models/dev')

module.exports = {
    async index (req, res) {
        const devs = await dev.find()
        return res.json(devs)
    },    
    async store (req, res) {
        const { githubUsername, techs, latitude, longitude } = req.body
        
        let devzada = await dev.findOne({ githubUsername })

        if (!devzada) {
            const response = await axios.get(`https://api.github.com/users/${githubUsername}`)
        
            const { name = login, avatar_url, bio } = response.data
        
            const location = {
                type: 'Point',
                coordinates: [longitude, latitude] 
            }
        
            devzada = await dev.create({
                githubUsername,
                techs,
                name,
                avatarUrl: avatar_url,
                bio,
                location
            })
        }        
    
        return res.json(devzada)
    }
}