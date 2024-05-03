const mongoose = require('mongoose');

const placeSchema = new mongoose.Schema({
    name: { type: String, required: true },
    pic: String,
    cuisines: { type: String, required: true },
    city: { type: String, default: 'Somewhere' },
    country: { type: String, default: 'Someplace' },
    founded: Number
});

placeSchema.methods.showEstablished = function () {
    return `${this.name} has been serving ${this.city}, ${this.country} since ${this.founded}.`
};

module.exports = mongoose.model('Place', placeSchema);


