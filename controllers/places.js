const router = require('express').Router();
const places = require('../models/places.js');

router.get('/', (req, res) => {

    res.render('places/index', { places })
});

router.get('/new', (req, res) => {
    res.render('places/new')
});


router.get('/:id', (req, res) => {
    let id = Number(req.params.id)
    if (isNaN(id)) {
        res.render('error404')
    }
    else if (!places[id]) {
        res.render('error404')
    }
    else {
        res.render('places/show', { place: places[id], id })
    }
});


router.post('/', (req, res) => {

    if (!req.body.pic) {
        req.body.pic = '/images/default.jpg'
    }
    if (!req.body.city) {
        req.body.city = 'Someplace'
    }
    if (!req.body.country) {
        req.body.country = 'Somewhere'
    }
    places.push(req.body);
    res.redirect('/places') // it being literal is almost confusing //
});


router.get('/:id/edit', (req, res) => {
    let id = Number(req.params.id)
    if (isNaN(id)) {
        res.render('error404')
    }
    else if (!places[id]) {
        res.render('error404')
    }
    else {
        res.render('places/edit', { place: places[id] })
    }
});


router.delete('/:id', (req, res) => {
    let id = Number(req.params.id)
    if (isNaN(id)) {
        res.render('error404')
    }
    else if (!places[id]) {
        res.render('error404')
    }
    else {
        places.splice(id, 1)
        res.redirect('/places')
    }
});


module.exports = router;
