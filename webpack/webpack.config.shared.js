'use strict';
let path = require('path');
let ExtractTextPlugin = require('extract-text-webpack-plugin');

const assetsPath = path.resolve(__dirname, '../static/dist');

let autoprefixer = require('autoprefixer');
let precss = require('precss');


const vendors =  [



];


let WebpackIsomorphicToolsPlugin = require('webpack-isomorphic-tools/plugin');
let webpackIsomorphicToolsPlugin = new WebpackIsomorphicToolsPlugin(require('./webpack.isomorphic.tools'));

const CONFIG = {
    vendors: vendors,
    postLoaders: [
        {
            loader: 'transform?envify'
        }
    ],
    loaders: [
        {//BABEL MUST BE FIRST DO NOT MOVE. SERIOUSLY
            test: /\.jsx?$/i,
            exclude: /node_modules/,
            loaders: ['babel'],
        },


        //{ test: /\.css$/, loader: 'style-loader!css-loader!postcss-loader' },
        //{ test: /\.scss$/, loader: ExtractTextPlugin.extract('style', 'css?importLoaders=2&sourceMap!autoprefixer?browsers=last 2 version!sass?outputStyle=expanded&sourceMap=true&sourceMapContents=true') },

        { test: /\.json$/, loader: 'json-loader' },
        { test: /\.woff(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/font-woff' },
        { test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/font-woff' },
        { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream' },
        { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file' },
        { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml' },
    ],
    sassLoader: {
      //data: `$baseUrl: '${process.env.BASE_URL || '/'}';` //Add some SCSS vars here if needed
    },
    entry: {
        app: ['./src/client.js'],
    },
    output: {
        path: assetsPath,
        publicPath: '/dist/',
        filename: '[name].[hash].js',
        chunkFilename: '[name].[chunkhash].js',
        pathinfo: true
    },
    resolve: {
        moduleDirectories: [
            'src',
            'node_modules'
        ]
    },
    external: {
        TweenLite : 'TweenLite'
    },
    postCSS: function () {
        return [autoprefixer, precss];
    },
    node: {
        net: 'empty',
        tls: 'empty',
        dns: 'empty',
        fs: 'empty'
    },
    webpackIsomorphicToolsPlugin
};

module.exports = CONFIG;
