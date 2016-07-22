'use strict';
let ExtractTextPlugin = require('extract-text-webpack-plugin');
let CleanPlugin = require('clean-webpack-plugin');

let webpack = require('webpack');
let shared = require('./webpack.config.shared');
let sassLoader = shared.sassLoader;

let path = require('path');
let projectRootPath = path.resolve(__dirname, '../');
let assetsPath = path.resolve(projectRootPath, './static/dist');

module.exports = {
    entry: shared.entry,
    context: path.resolve(__dirname, '..'),
    output: shared.output,
    externals: shared.external,
    module: {
        postLoaders: shared.postLoaders,
        loaders: [...shared.loaders, { test: /\.scss$/, loader: ExtractTextPlugin.extract('style', 'css-loader!postcss-loader!sass-loader') },
        ]
    },
    sassLoader,
    postcss: shared.postCSS,
    plugins: [
        new CleanPlugin([assetsPath], { root: projectRootPath }),
        new ExtractTextPlugin('[name]-[chunkhash].css', {allChunks: true}),
        new webpack.DefinePlugin({
            __CLIENT__: true,
            __SERVER__: false,
            __DEVELOPMENT__: false,
            __DEVTOOLS__: false
        }),

        new webpack.IgnorePlugin(/\.\/dev/, /\/config$/),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.OccurenceOrderPlugin(),


        new webpack.optimize.UglifyJsPlugin({
            minimize: true,
            drop_console: true,
            sourceMap: false
        }),


        shared.webpackIsomorphicToolsPlugin

    ],
    progress: true,
    node: shared.node
};
