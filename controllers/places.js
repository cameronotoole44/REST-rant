const router = require('express').Router();
const db = require('../models');

// INDEX //
router.get('/', (req, res) => {
    db.Place.find()
        .then((places) => {
            res.render('places/index', { places })
        })
        .catch(err => {
            console.log(err)
            res.render('error404')
        })
});

// CREATE // 
router.post('/', (req, res) => {
    db.Place.create(req.body)
        .then(() => {
            res.redirect('/places')
        })
        .catch(err => {
            console.log('err', err)
            res.render('error404')
        })
});

// NEW //
router.get('/new', (req, res) => {
    res.render('places/new')
});

// SHOW //
router.get('/:id', (req, res) => {
    db.Place.findById(req.params.id)
        .then(place => {
            res.render('places/show', { place })
        })
        .catch(err => {
            console.log('err', err)
            res.render('error404')
        })
});

// UPDATE // 
router.put('/:id', (req, res) => {
    res.send('PUT /places/:id stub')
});

// DELETE // 
router.delete('/:id', (req, res) => {
    res.send('DELETE /places/:id stub')
});

// EDIT // 
router.get('/:id/edit', (req, res) => {
    res.send('GET edit form stub')
});

// POST RANT //
router.post('/:id/rant', (req, res) => {
    res.send('GET /places/:id/rant stub')
});

// DELETE RANT //
router.delete('/:id/rant/:rantId', (req, res) => {
    res.send('GET /places/:id/rant/:rantId stub')
});

module.exports = router;









// const router = require('express').Router();
// const places = require('../models/places.js');

// // HOME-INDEX //
// router.get('/', (req, res) => {

//     res.render('places/index', { places })
// });

// // NEW //
// router.get('/new', (req, res) => {
//     res.render('places/new')
// });

// // SHOW //
// router.get('/:id', (req, res) => {
//     let id = Number(req.params.id)
//     if (isNaN(id)) {
//         res.render('error404')
//     }
//     else if (!places[id]) {
//         res.render('error404')
//     }
//     else {
//         res.render('places/show', { place: places[id], id: id })
//     }
// });

// // EDIT // PASSED CHECK
// router.get('/:id/edit', (req, res) => {
//     let id = Number(req.params.id)
//     if (isNaN(id)) {
//         res.render('error404')
//     }
//     else if (!places[id]) {
//         res.render('error404')
//     }
//     else {
//         res.render('places/edit', { place: places[id], id: id })
//     }
// });

// // UPDATE //
// router.put('/:id', (req, res) => {
//     let id = Number(req.params.id);
//     console.log('id:', id);
//     console.log('places:', places);
//     if (isNaN(id)) {
//         res.render('error404')
//     }
//     else if (!places[id]) {
//         res.render('error404')
//     }
//     else {
//         if (!req.body.pic) {
//             req.body.pic = '/public/images/default.jpg'
//         }
//         if (!req.body.city) {
//             req.body.city = 'Somewhere'
//         }
//         if (!req.body.country) {
//             req.body.country = 'Someplace'
//         }

//         places[id] = req.body
//         res.redirect(`/places/${id}`)
//     }
// });


// // CREATE //
// router.post('/', (req, res) => {

//     if (!req.body.pic) {
//         req.body.pic = '/images/default.jpg'
//     }
//     if (!req.body.city) {
//         req.body.city = 'Someplace'
//     }
//     if (!req.body.country) {
//         req.body.country = 'Somewhere'
//     }
//     places.push(req.body);
//     res.redirect('/places') // it being literal is almost confusing //
// });

// // DELETE //
// router.delete('/:id', (req, res) => {
//     let id = Number(req.params.id)
//     if (isNaN(id)) {
//         res.render('error404')
//     }
//     else if (!places[id]) {
//         res.render('error404')
//     }
//     else {
//         places.splice(id, 1)
//         res.redirect('/places')
//     }
// });

// module.exports = router;
