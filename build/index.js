"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// GLOBAL //
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const express_1 = __importDefault(require("express"));
const method_override_1 = __importDefault(require("method-override"));
const path_1 = __importDefault(require("path"));
const app = (0, express_1.default)();
// EXPRESS //
app.set('views', path_1.default.join(__dirname, 'views'));
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());
app.use(express_1.default.static('public'));
app.use(express_1.default.urlencoded({ extended: true }));
app.use((0, method_override_1.default)('_method'));
// CONTROLLERS/ROUTES //
app.use('/places', require('./controllers/places'));
app.get('/', (req, res) => {
    res.render('home');
});
app.get('*', (req, res) => {
    res.render('error404');
});
// ERROR HANDLING //
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).render('error500', { error: err });
});
// SERVER LISTENING //
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
