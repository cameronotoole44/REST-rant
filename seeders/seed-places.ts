import db from '../models';

db.Place.create([
    {
        name: 'Grace O\'Malleys',
        pic: '/images/graceOMalleys.jpg',
        city: 'Toronto',
        country: 'Canada',
        founded: 2001,
        cuisines: 'American, Irish'
    },
    {
        name: 'Coding Cat Cafe',
        pic: '/images/catCafe.jpg',
        city: 'New York',
        country: 'United States',
        founded: 2024,
        cuisines: 'Coffee, Bakery'
    }
])
    .then(() => {
        console.log('Success!');
    })
    .catch((err: any) => {
        console.error('Failure!', err);
    })
    .finally(() => {
        process.exit(); // EXIT PROGRAM //
    });
