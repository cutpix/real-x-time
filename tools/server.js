import express from 'express';
import webpack from 'webpack';
import path from 'path';
import open from 'open';

import config from '../webpack.config.dev';
import { createLogger } from './logger';

const logger = createLogger(process.env);
logger.builded();

const scheme = 'http';
const port = config.devServer.port;
const hostname = config.devServer.hostname;
const url = `${scheme}://${hostname}:${port}`;
const app = express();
const compiler = webpack(config);


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


app.listen(port, hostname, function (error) {
    if (error) {
        return logger.error(error.message);
    } else {
        logger.started(url);
        open(url);
    }
});