import db from '../models';

async function seed() {
    try {
        const place = await db.Place.findOne({
            name: 'Grace O\'Malleys'
        });

        if (place) {
            const comment = await db.Comment.create({
                author: 'Famished Fran',
                content: 'Wow, simply amazing! Highly recommended!',
                stars: 5.0,
                rant: false
            });

            place.comments.push(comment.id); // ADD COMMENT TO PLACE COMMENTS ARRAY //

            await place.save(); // SAVE PLACE //
        } else {
            console.error('Place not found');
        }

    } catch (err) {
        console.error('Error seeding data:', err);
    } finally {
        process.exit(); // EXIT PROGRAM //
    }
}

seed();

