const router = require('express').Router();

router.get('/', (req, res) => {
    let places = [{
        name: 'Grace O\'Malleys',
        city: 'Toronto',
        country: 'Canada',
        cuisines: 'American, Irish',
        pic: '/images/graceOMalleys.jpg',
        // Photo by<a href = "https://unsplash.com/@suicide_chewbacca?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Ashwini Chaudhary(Monty)</a> on < a href = "https://unsplash.com/photos/a-building-with-a-sign-that-says-grace-owalleys-restaurant-B1wo-FSnAYA?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash" > Unsplash</ >

    }, {
        name: 'Coding Cat Cafe',
        city: 'New York',
        country: 'United States',
        cuisines: 'Coffee, Bakery',
        pic: '/images/catCafe.jpg'
    }]

    res.render('places/index', { places })
});

router.get('/new', (req, res) => {
    res.render('places/new')
});

router.post('/', (req, res) => {
    console.log(req.body)
    res.send('POST /places')
});


module.exports = router;
