const dev = require('../models/dev')

module.exports = {
    async index (req, res) {
        const { latitude, longitude, techs } = req.body
        const devs = await dev.find({
            techs: {
                $in: techs
            },
            location: {
                $near: {
                    $geometry: {
                        type: 'Point',
                        coordinate: [ longitude, latitude ]
                    },
                    $maxDistance: 10000
                }
            }
        }).catch(err => console.log(err))

        return res.json(devs)
    }
}