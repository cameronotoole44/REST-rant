const db = require('../models');

async function seed() {
    let place = await db.Place.findOne({
        name: 'Grace O\'Malleys'
    })

    let comment = await db.Comment.create({
        author: 'Famished Fran',
        stars: 5.0,
        content: 'Wow, simply amazing! Highly recommended!',
        rant: false
    })

    place.comments.push(comment.id) // ADD COMMENT TO PLACE COMMENTS ARRAY //

    await place.save() // SAVE PLACE //

    process.exit() // EXIT PROGRAM //
};

seed();