var webpack = require('webpack');
var path = require('path');

var config = {
    noInfo: true,
    debug: true,
    devtool: 'eval-source-map',
    entry: [
        'webpack-dev-server/client?http://localhost:3000',
        'webpack/hot/dev-server',
        path.resolve(__dirname, 'source/app.client')
    ],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    watch: true,
    resolve: {
        root: path.resolve(__dirname, 'source'),
        alias: {},
        modulesDirectories: ['node_modules', 'bower_components', 'dist'],
        extensions: ['', '.js', '.jsx']
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
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
    },
    devServer: {
        port: 3000,
        hot: true,
        contentBase: path.resolve(__dirname, 'dist'),
        colors: true
    }
};

module.exports = config;