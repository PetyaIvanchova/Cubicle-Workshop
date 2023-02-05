const express = require('express');
const cookieParse = require('cookie-parser');

const app = express();

const routes = require('./routes');
const config = require('./config');
const setupViewEngine = require('./config/viewEngine');
const initDatabase = require('./config/databaseInit');

setupViewEngine(app);

app.use(express.static('src/public'));
app.use(express.urlencoded({extended: false}));
app.use(cookieParse());
app.use(routes);


initDatabase()
    .then(() => app.listen(config.PORT))
    .catch((err) => console.error(err.message));