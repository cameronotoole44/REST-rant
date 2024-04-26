const router = require('express').Router();
const places = require('../models/places.js');

// HOME-INDEX //
router.get('/', (req, res) => {

    res.render('places/index', { places })
});

// NEW //
router.get('/new', (req, res) => {
    res.render('places/new')
});

// SHOW //
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

// EDIT // PASSED CHECK
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

// UPDATE // LANDS AT UNDEFINED?_METHOD=PUT ????
router.put('/:id', (req, res) => {
    let id = Number(req.params.id);
    console.log('id:', id);
    console.log('places:', places);
    if (isNaN(id)) {// if places[id] is falsy - render 404 - this gets hit every time
        res.render('error404')
    }
    else if (!places[id]) {
        res.render('error404')
    }
    else {
        if (!req.body.pic) {
            req.body.pic = '/public/images/default.jpg'
        }
        if (!req.body.city) {
            req.body.city = 'Somewhere'
        }
        if (!req.body.country) {
            req.body.country = 'Someplace'
        }

        places[id] = req.body
        res.redirect(`/places/${id}`)
    }
});



// CREATE //
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

// DELETE //
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
