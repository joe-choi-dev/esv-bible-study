const path = require('path');

const express = require('express');

// const peopleRoute = require('./routes/api/people');

const https = require('https');


// WEBPACK
const webpackDevMiddleware = require("webpack-dev-middleware");
const webpack = require("webpack");
const webpackConfig = require("./config/webpack.config.dev.js");
const compiler = webpack(webpackConfig);

const app = express();




// CONFIGURATIONS
app.set('env', config.environmentName.toLowerCase() === 'development' ? 'development' : 'production');
app.set('port', config.port);
app.set('https', config.https);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.set('etag', false);
app.set('x-powered-by', false);

// MIDDLEWARE
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cacheResponseDirective());
app.use(compression());
app.use(favicon(`${__dirname}/public/favicon.ico`));
app.use(logger.REQUEST_LOGGER);

// RUN APP
app.use(
    function (req, res, next) {
        next();
        // if (req.path.startsWith('/isActive')
        //     || req.path.startsWith('/buildInfo')
        //     || req.path.startsWith('/sso')) {
        //     next();
        // } else {
        //     if (!req.cookies.user) {
        //         sp.create_login_request_url(idp, {}, function (err, login_url) {
        //             if (err) {
        //                 return res.status(500).send(err);
        //             }
        //             return res.redirect(login_url);
        //         });
        //     } else {
        //         next();
        //     }
        // }
    },
    app.get('env') === 'development' ?
        webpackDevMiddleware(compiler, {publicPath: "/"}) :
        express.static(path.join(__dirname, 'build'))
);

// ROUTING
// app.use('/api/people', peopleRoute);

// ERROR-HANDLING
app.use(logger.ERROR_LOGGER);
app.use((req, res, next) => {
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
});
// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: app.get('env') === 'production' ? {} : err
    });
});

module.exports = app;
