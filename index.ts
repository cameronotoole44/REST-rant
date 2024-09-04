// GLOBAL //
import dotenv from 'dotenv';
dotenv.config();

import express, { Request, Response, NextFunction } from 'express';
import methodOverride from 'method-override';
import path from 'path';

const app = express();

// EXPRESS //
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));

// CONTROLLERS/ROUTES //
app.use('/places', require('./controllers/places'));

app.get('/', (req: Request, res: Response) => {
    res.render('home');
});

app.get('*', (req: Request, res: Response) => {
    res.render('error404');
});

// ERROR HANDLING //
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    console.error(err.stack);
    res.status(500).render('error500', { error: err });
});

// SERVER LISTENING //
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});


