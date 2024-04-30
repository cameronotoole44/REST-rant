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









// module.exports = [{
//     name: 'Grace O\'Malleys',
//     city: 'Toronto',
//     country: 'Canada',
//     cuisines: 'American, Irish',
//     pic: '/images/graceOMalleys.jpg',
//     // Photo by<a href = "https://unsplash.com/@suicide_chewbacca?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Ashwini Chaudhary(Monty)</a> on < a href = "https://unsplash.com/photos/a-building-with-a-sign-that-says-grace-owalleys-restaurant-B1wo-FSnAYA?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash" > Unsplash</ >

// }, {
//     name: 'Coding Cat Cafe',
//     city: 'New York',
//     country: 'United States',
//     cuisines: 'Coffee, Bakery',
//     pic: '/images/catCafe.jpg'
// }];
