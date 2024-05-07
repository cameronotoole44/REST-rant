const db = require('../models');


db.Place.create([{
    name: 'Grace O\'Malleys',
    pic: '/images/graceOMalleys.jpg',
    // Photo by<a href = "https://unsplash.com/@suicide_chewbacca?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Ashwini Chaudhary(Monty)</a> on < a href = "https://unsplash.com/photos/a-building-with-a-sign-that-says-grace-owalleys-restaurant-B1wo-FSnAYA?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash" > Unsplash</ >
    city: 'Toronto',
    country: 'Canada',
    founded: 2001,
    cuisines: 'American, Irish'

}, {
    name: 'Coding Cat Cafe',
    pic: '/images/catCafe.jpg',
    city: 'New York',
    country: 'United States',
    founded: 2024,
    cuisines: 'Coffee, Bakery'

}])
    .then(() => {
        console.log('Success!')
        process.exit()
    })
    .catch(err => {
        console.log('Failure!', err)
        process.exit()
    });