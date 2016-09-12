import express from 'express';
import webpack from 'webpack';
import path from 'path';
import open from 'open';

import config from '../webpack.config.dev';


const port = config.devServer.port;
const app = express();
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath,
    stats: { colors: true }
}));

app.use(require('webpack-hot-middleware')(compiler));

app.use(express.static(path.join(__dirname, '../dist')));

app.get('*', function (request, response) {
    response.sendFile(path.join(__dirname, '../dist/index.html'));
});

/*eslint-disable no-console */

app.listen(port, function (error) {
    if (error) { console.log(error); }
    else { open(`http://localhost:${port}`); }
});