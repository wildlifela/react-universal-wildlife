
let fs = require('fs');
let webpack = require('webpack');

let ExtractTextPlugin = require('extract-text-webpack-plugin');

const shared = require('./webpack.config.shared');
let config = require('../src/config');
let host =  config.host || 'localhost';
let port =  (Number(config.port) + 1) || 3001;



const _babelrc = fs.readFileSync('./.babelrc.webpack.dev.server');
let babelrc = {};

try {
    babelrc = JSON.parse(_babelrc);
} catch (err) {
    console.error('==>     ERROR: Error parsing your .babelrc.');
    console.error(err);
}

let sassLoader = shared.sassLoader;
let devEntry = () => {
    let entry = Object.assign({}, shared.entry);
    entry.app.unshift(`webpack-hot-middleware/client?path=http://${host}:${port}/__webpack_hmr`);
    return entry;
};

let devOutput =  () => {
    let output = Object.assign({}, shared.output);
    output.publicPath = `http://${host}:${port}${output.publicPath}`;

    return output;

};

let devLoaders = () => {
    let loaders = shared.loaders.slice(0);
    let babelLoader = loaders[0]; //This better fucking be the babel loader.
    babelLoader.loaders[0] = `babel?${JSON.stringify(babelrc)}`;
    return loaders;
};


module.exports = {
    devtool: 'eval-cheap-module-source-map',
    debug: true,
    entry: devEntry(),
    output: devOutput(),
    externals: shared.external,
    module: {
        postLoaders: shared.postLoaders,
        loaders: [...devLoaders(), { test: /\.scss$/, loader: 'style-loader!css-loader!postcss-loader!sass-loader'}]
    },
    postcss: shared.postCSS,
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        new webpack.IgnorePlugin(/webpack-stats\.json$/),
        new webpack.DefinePlugin({
            __CLIENT__: true,
            __SERVER__: false,
            __DEVELOPMENT__: true,
            __DEVTOOLS__: true  // <-------- DISABLE redux-devtools HERE
        }),
        shared.webpackIsomorphicToolsPlugin.development()

    ],
    sassLoader,
    target: 'web',
    watch: true,
    node: shared.node
};
module.exports.devOutput = devOutput;