import express from 'express';
import webpack from 'webpack';
import path from 'path';
import open from 'open';

import config from '../webpack.config.dev';
import notifier from './notifier';

const logger = notifier(process.env);
const port = config.devServer.port;
const hostname = config.devServer.hostname;
const app = express();
const compiler = webpack(config);

logger.print('ENV');

app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath,
    stats: { colors: true }
}));

app.use(require('webpack-hot-middleware')(compiler));

app.use(express.static(path.join(__dirname, '../dist')));

app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, '../dist/index.html'));
});

/* eslint-disable no-console */

const hostUrl = `http://${hostname}:${port}`;
app.listen(port, hostname, function (error) {
    if (error) {
        logger.print('ERROR', error);
    } else {
        logger.print('SUCCESS', `Server running at ${hostUrl}`);
        open(hostUrl);
    }
});