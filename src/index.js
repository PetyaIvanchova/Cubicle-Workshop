const express = require('express');
const cookieParse = require('cookie-parser');

const app = express();

const routes = require('./routes');
const config = require('./config');
const errorHandler = require('./middlewares/errorHandlerMiddleware');
const setupViewEngine = require('./config/viewEngine');
const initDatabase = require('./config/databaseInit');
const authMiddleware = require('./middlewares/authMiddleware');

setupViewEngine(app);

app.use(express.static('src/public'));
app.use(express.urlencoded({extended: false}));
app.use(cookieParse());
app.use(authMiddleware.authentication);
app.use(routes);
app.use(errorHandler);

initDatabase()
    .then(() => app.listen(config.PORT))
    .catch((err) => console.error(err.message));