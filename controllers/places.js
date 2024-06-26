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
    if (req.body.pic === '') { req.body.pic = undefined }
    if (req.body.city === '') { req.body.city = undefined }
    if (req.body.country === '') { req.body.country = undefined }
    db.Place.create(req.body)
        .then(() => {
            res.redirect('/places')
        })
        .catch(err => {
            if (err && err.name == 'ValidationError') {
                let message = 'Validation Error: '
                for (var field in err.errors) {
                    message += `${field} was ${err.errors[field].value}. ${err.errors[field].message}\n`
                }
                res.render('places/new', { message })
            }
            else {
                res.render('error404')
            }
        })
});

// NEW //
router.get('/new', (req, res) => {
    res.render('places/new')
});

// SHOW //
router.get('/:id', (req, res) => {
    db.Place.findById(req.params.id)
        .populate('comments')
        .then(place => {
            console.log(place.comments)
            res.render('places/show', { place })
        })
        .catch(err => {
            console.log('err', err)
            res.render('error404')
        })
});

// COMMENTS //
router.get('/:id/comment', (req, res) => {
    db.Place.findById(req.params.id)
        .then(place => {
            res.render('places/newComment', { place });
        })
        .catch(err => {
            console.log(err)
            res.render('error404')
        })
});

router.post('/:id/comment', (req, res) => {
    db.Place.findById(req.params.id)
        .then(place => {
            db.Comment.create({
                author: req.body.author,
                content: req.body.content,
                stars: req.body.stars,
                rant: req.body.rant === 'on' // MAKES SURE BOOLEAN IS CORRECTLY INTERPRETED
            })
                .then(comment => {
                    place.comments.push(comment.id)
                    place.save()
                        .then(() => {
                            res.redirect(`/places/${req.params.id}`)
                        })
                })
                .catch(err => {
                    res.render('error404')
                })
        })
        .catch(err => {
            res.render('error404')
        })
});



// UPDATE // 
router.put('/:id', (req, res) => {
    db.Place.findByIdAndUpdate(req.params.id, req.body)
        .then(() => {
            res.redirect(`/places/${req.params.id}`)
        })
        .catch(err => {
            console.log('err', err)
            res.render('error404')
        })
});

// DELETE // 
router.delete('/:id', (req, res) => {
    db.Place.findByIdAndDelete(req.params.id)
        .then(place => {
            res.redirect('/places')
        })
        .catch(err => {
            console.log('err', err)
            res.render('error404')
        })
});

// EDIT // 
router.get('/:id/edit', (req, res) => {
    db.Place.findById(req.params.id)
        .then(place => {
            res.render('places/edit', { place })
        })
        .catch(err => {
            res.render('error404')
        })
});


// DELETE COMMENT //
const Comment = require('../models/comment'); // IMPORT COMMENT MODEL

router.delete('/:id/comment/:commentId', async (req, res) => {
    const placeId = req.params.id;
    const commentId = req.params.commentId;

    try {
        // FIND COMMENT - DELETE IT // 
        const deletedComment = await Comment.findByIdAndDelete(commentId);

        if (!deletedComment) {
            return res.status(404).send('Comment not found');
        }

        res.redirect(`/places/${placeId}`);
    } catch (err) {
        console.error('Error deleting comment:', err);
        res.status(500).send('Error deleting comment');
    }
});

module.exports = router;

