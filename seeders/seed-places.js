const db = require('../models');


db.Place.create([{
    name: 'Grace O\'Malleys',
    city: 'Toronto',
    country: 'Canada',
    cuisines: 'American, Irish',
    pic: '/images/graceOMalleys.jpg',
    // Photo by<a href = "https://unsplash.com/@suicide_chewbacca?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Ashwini Chaudhary(Monty)</a> on < a href = "https://unsplash.com/photos/a-building-with-a-sign-that-says-grace-owalleys-restaurant-B1wo-FSnAYA?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash" > Unsplash</ >
    founded: 2001
}, {
    name: 'Coding Cat Cafe',
    city: 'New York',
    country: 'United States',
    cuisines: 'Coffee, Bakery',
    pic: '/images/catCafe.jpg',
    founded: 2024
}])
    .then(() => {
        console.log('Success!')
        process.exit()
    })
    .catch(err => {
        console.log('Failure!', err)
        process.exit()
    })