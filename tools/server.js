import express from 'express';
import webpack from 'webpack';
import path from 'path';
import open from 'open';

import config from '../webpack.config.dev';
import { createLogger } from './logger';

const scheme = config.devServer.scheme;
const hostname = config.devServer.hostname;
const port = config.devServer.port;
const url = `${scheme}://${hostname}:${port}`;

const app = express();
const compiler = webpack(config);
const logger = createLogger(process.env);

app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath,
    stats: {
        colors: true
    }
}));

app.use(require('webpack-hot-middleware')(compiler));

app.use(express.static(path.join(__dirname, '../dist')));

app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, '../dist/index.html'));
});

app.listen(port, hostname, function (error) {
    if (error) {
        logger.printError(error.message);
    } else {
        logger.printStart(url);
        open(url);
    }
});