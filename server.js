if (isDeveloping) {
    let webpack = require('webpack');
    let webpackMiddleware = require('webpack-dev-middleware');
    let webpackHotMiddleware = require('webpack-hot-middleware');
    let config = require('./webpack.config.js');

    // serve the content using webpack
    app.use(middleware);
    app.use(webpackHotMiddleware(compiler));
} else {
    // serve the content using static directory
    const staticPath = path.join(__dirname, 'public/build')
    app.use(express.static(staticPath));
}
app.listen(port, '0.0.0.0', function onStart(err) {
    if (err) {
        console.log(err);
    }
    console.info('==> 🌎 Listening on port %s. Open up http://0.0.0.0:%s/ in your browser.', port, port);
});
