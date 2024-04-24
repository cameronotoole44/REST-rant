const router = require('express').Router();
const places = require('../models/places.js');

router.get('/', (req, res) => {

    res.render('places/index', { places })
});

router.get('/new', (req, res) => {
    res.render('places/new')
});

router.post('/', (req, res) => {

    if (!req.body.pic) {
        req.body.pic = '/images/working.jpg'
    }
    if (!req.body.city) {
        req.body.city = 'Someplace'
    }
    if (!req.body.country) {
        req.body.country = 'Canada'
    }
    places.push(req.body);
    res.redirect('/places') // it being literal is almost confusing //
});


module.exports = router;
