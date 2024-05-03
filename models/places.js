const mongoose = require('mongoose');

const placeSchema = new mongoose.Schema({
    name: { type: String, required: true },
    pic: { type: String, default: '/images/default.jpg' }, // default img not showing proper ? //
    cuisines: { type: String, required: true },
    city: { type: String, default: 'Somewhere' },
    country: { type: String, default: 'Someplace' },
    founded: {
        type: Number, min: [600, 'THAT OLD HUH?!'],
        max: [new Date().getFullYear(), 'SO YOU\'RE FROM THE FUTURE HUH?']
    }
});

placeSchema.methods.showEstablished = function () {
    return `${this.name} has been serving ${this.city}, ${this.country} since ${this.founded}.`
};

module.exports = mongoose.model('Place', placeSchema);


