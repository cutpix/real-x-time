var webpack = require('webpack');
var path = require('path');

var config = {
    devtool: 'source-map',
    entry: [
        path.resolve(__dirname, 'source/app.client')
    ],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    resolve: {
        root: path.resolve(__dirname, 'source'),
        alias: {},
        modulesDirectories: ['node_modules', 'bower_components', 'dist'],
        extensions: ['', '.js', '.jsx']
    },
    plugins: [
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.UglifyJsPlugin({
            minimize: true,
            compress: { warnings: false }
        }),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        })
    ],
    module: {
        loaders: [
            {
                test: /\.js(x?)$/,
                exclude: /node_modules/,
                loader: 'babel',
                query: {
                    presets: ['es2015', 'react']
                }
            },
            {
                test: /(\.css)$/,
                loader: 'style!css'
            }
        ]
    }
};

module.exports = config;