'use strict';
const path = require('path');
const webpack = require('webpack');
const WebpackNotifierPlugin = require('webpack-notifier');

const config = {
    debug: true,
    devtool: 'source-map',
    plugins: [
        new WebpackNotifierPlugin()
    ],
    entry: {
        'index.ios': ['./index.ios.js'],
        'index.android': ['./index.android.js']
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: '[name].js'
    },
    resolve: {
        extensions: ['', '.js', '.android.js', '.ios.js']
    },
    module: {
        preLoaders: [
            {
                test: /\.(js|jsx|es6)$/,
                include: path.resolve(__dirname, 'src'),
                loader: 'eslint-loader'
            }
        ],
        loaders: [
            {
                test: /\.js$/,
                include: [
                    path.resolve(__dirname, 'src'),
                    path.resolve(__dirname, 'node_modules/react-native-navbar'),
                    path.resolve(__dirname, 'node_modules/react-native-vector-icons'),
                    path.resolve(__dirname, 'node_modules/react-native-scrollable-tab-view')
                ],
                loader: 'babel',
                query: {
                    cacheDirectory: true,
                    presets: ['es2015', 'stage-1', 'react']
                }
            },
            {
                test: /\.(js|jsx|es6)$/,
                exclude: /node_modules/,
                loader: 'babel',
                query: {
                    cacheDirectory: true,
                    presets: ['es2015', 'stage-1', 'react']
                }
            }
        ]
    }
};

// Hot loader
if (process.env.HOT) {
    config.devtool = 'eval'; // Speed up incremental builds
    config.entry['index.ios'].unshift('react-native-webpack-server/hot/entry');
    config.entry['index.ios'].unshift('webpack/hot/only-dev-server');
    config.entry['index.ios'].unshift('webpack-dev-server/client?http://localhost:8082');
    config.output.publicPath = 'http://localhost:8082/';
    config.plugins.unshift(new webpack.HotModuleReplacementPlugin());
    config.module.loaders[0].query.plugins.push('react-transform');
    config.module.loaders[0].query.extra = {
        'react-transform': {
            transforms: [{
                transform: 'react-transform-hmr',
                imports: ['react-native'],
                locals: ['module']
            }]
        }
    };
}

// Production config
if (process.env.NODE_ENV === 'production') {
    config.plugins.push(new webpack.optimize.OccurrenceOrderPlugin());
    config.plugins.push(new webpack.optimize.UglifyJsPlugin());
}

module.exports = config;
