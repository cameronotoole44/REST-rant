const mongoose = require('mongoose')

const placeSchema = new mongoose.Schema({
    name: { type: String, required: true },
    pic: String,
    cuisines: { type: String, required: true },
    city: { type: String, default: 'Somewhere' },
    country: { type: String, default: 'Someplace' },
    founded: Number
})

module.exports = mongoose.model('Place', placeSchema)


