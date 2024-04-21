require('dotenv').config();
const express = require('express');
const app = express();

app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

app.use('/places', require('./controllers/places'));

app.get('/', (req, res) => {
    res.render('home');
})

// app.get('*', (req, res) => {
//     res.status(404).send('<h1>404 Not Found, this page is currently sleeping</h1>');
// })

app.get('*', (req, res) => {
    res.render('error404');
})

app.listen(process.env.PORT)
