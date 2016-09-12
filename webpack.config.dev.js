import webpack from 'webpack';
import path from 'path';

export default {
    debug: true,
    devtool: 'cheap-module-eval-source-map',
    noInfo: false,
    entry: [
        'webpack-hot-middleware/client?reload=true',
        './source/app.client'
    ],
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/',
        filename: 'bundle.js'
    },
    resolve: {
        root: path.resolve(__dirname, 'source'),
        alias: {},
        modulesDirectories: ['node_modules', 'bower_components', 'dist'],
        extensions: ['', '.js', '.jsx']
    },
    target: 'web',
    devServer: {
        port: 3000,
        contentBase: './source'
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
    }
};