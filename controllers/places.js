const router = require('express').Router();

router.get('/', (req, res) => {
    let places = [{
        name: 'Grace O\'Malleys',
        city: 'Toronto',
        country: 'Canada',
        cuisines: 'American, Irish',
        pic: '/images/graceOMalleys.jpg',
    }, {
        name: 'Coding Cat Cafe',
        city: 'New York',
        country: 'United States',
        cuisines: 'Coffee, Bakery',
        pic: '/images/catCafe.jpg'
    }]

    res.render('places/index', { places })
});


module.exports = router;
